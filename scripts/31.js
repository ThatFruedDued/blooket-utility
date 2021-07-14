(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{
  '+s0g': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'), a = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i
        ], o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale('nl', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function (e, a) {
          return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
        },
        monthsRegex: o,
        monthsShortRegex: o,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
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
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          ss: '%d seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
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
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  '//9w': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('se', {
        months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'MMMM D. [b.] YYYY',
          LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
          LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar: {
          sameDay: '[otne ti] LT',
          nextDay: '[ihttin ti] LT',
          nextWeek: 'dddd [ti] LT',
          lastDay: '[ikte ti] LT',
          lastWeek: '[ovddit] dddd [ti] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s geažes',
          past: 'maŋit %s',
          s: 'moadde sekunddat',
          ss: '%d sekunddat',
          m: 'okta minuhta',
          mm: '%d minuhtat',
          h: 'okta diimmu',
          hh: '%d diimmut',
          d: 'okta beaivi',
          dd: '%d beaivvit',
          M: 'okta mánnu',
          MM: '%d mánut',
          y: 'okta jahki',
          yy: '%d jagit'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  '/X5v': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('x-pseudo', {
        months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact: !0,
        weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[T~ódá~ý át] LT',
          nextDay: '[T~ómó~rró~w át] LT',
          nextWeek: 'dddd [át] LT',
          lastDay: '[Ý~ést~érdá~ý át] LT',
          lastWeek: '[L~ást] dddd [át] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'í~ñ %s',
          past: '%s á~gó',
          s: 'á ~féw ~sécó~ñds',
          ss: '%d s~écóñ~ds',
          m: 'á ~míñ~úté',
          mm: '%d m~íñú~tés',
          h: 'á~ñ hó~úr',
          hh: '%d h~óúrs',
          d: 'á ~dáý',
          dd: '%d d~áýs',
          M: 'á ~móñ~th',
          MM: '%d m~óñt~hs',
          y: 'á ~ýéár',
          yy: '%d ý~éárs'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  '0tRk': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('pt-br', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
        weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
        weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'poucos segundos',
          ss: '%d segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº'
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  '2ykv': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), n = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'), a = [
          /^jan/i,
          /^feb/i,
          /^maart|mrt.?$/i,
          /^apr/i,
          /^mei$/i,
          /^jun[i.]?$/i,
          /^jul[i.]?$/i,
          /^aug/i,
          /^sep/i,
          /^okt/i,
          /^nov/i,
          /^dec/i
        ], o = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      return e.defineLocale('nl-be', {
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort: function (e, a) {
          return e ? /-MMM-/.test(a) ? n[e.month()] : t[e.month()] : t;
        },
        monthsRegex: o,
        monthsShortRegex: o,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
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
          sameDay: '[vandaag om] LT',
          nextDay: '[morgen om] LT',
          nextWeek: 'dddd [om] LT',
          lastDay: '[gisteren om] LT',
          lastWeek: '[afgelopen] dddd [om] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          ss: '%d seconden',
          m: 'één minuut',
          mm: '%d minuten',
          h: 'één uur',
          hh: '%d uur',
          d: 'één dag',
          dd: '%d dagen',
          M: 'één maand',
          MM: '%d maanden',
          y: 'één jaar',
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
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  '7aV9': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('si', {
        months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'a h:mm',
          LTS: 'a h:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY MMMM D',
          LLL: 'YYYY MMMM D, a h:mm',
          LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar: {
          sameDay: '[අද] LT[ට]',
          nextDay: '[හෙට] LT[ට]',
          nextWeek: 'dddd LT[ට]',
          lastDay: '[ඊයේ] LT[ට]',
          lastWeek: '[පසුගිය] dddd LT[ට]',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%sකින්',
          past: '%sකට පෙර',
          s: 'තත්පර කිහිපය',
          ss: 'තත්පර %d',
          m: 'මිනිත්තුව',
          mm: 'මිනිත්තු %d',
          h: 'පැය',
          hh: 'පැය %d',
          d: 'දිනය',
          dd: 'දින %d',
          M: 'මාසය',
          MM: 'මාස %d',
          y: 'වසර',
          yy: 'වසර %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function (e) {
          return e + ' වැනි';
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function (e) {
          return 'ප.ව.' === e || 'පස් වරු' === e;
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? 'ප.ව.' : 'පස් වරු' : n ? 'පෙ.ව.' : 'පෙර වරු';
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  '8/+R': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '੧',
          2: '੨',
          3: '੩',
          4: '੪',
          5: '੫',
          6: '੬',
          7: '੭',
          8: '੮',
          9: '੯',
          0: '੦'
        }, n = {
          '੧': '1',
          '੨': '2',
          '੩': '3',
          '੪': '4',
          '੫': '5',
          '੬': '6',
          '੭': '7',
          '੮': '8',
          '੯': '9',
          '੦': '0'
        };
      return e.defineLocale('pa-in', {
        months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm ਵਜੇ',
          LTS: 'A h:mm:ss ਵਜੇ',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
          LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
        },
        calendar: {
          sameDay: '[ਅਜ] LT',
          nextDay: '[ਕਲ] LT',
          nextWeek: '[ਅਗਲਾ] dddd, LT',
          lastDay: '[ਕਲ] LT',
          lastWeek: '[ਪਿਛਲੇ] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s ਵਿੱਚ',
          past: '%s ਪਿਛਲੇ',
          s: 'ਕੁਝ ਸਕਿੰਟ',
          ss: '%d ਸਕਿੰਟ',
          m: 'ਇਕ ਮਿੰਟ',
          mm: '%d ਮਿੰਟ',
          h: 'ਇੱਕ ਘੰਟਾ',
          hh: '%d ਘੰਟੇ',
          d: 'ਇੱਕ ਦਿਨ',
          dd: '%d ਦਿਨ',
          M: 'ਇੱਕ ਮਹੀਨਾ',
          MM: '%d ਮਹੀਨੇ',
          y: 'ਇੱਕ ਸਾਲ',
          yy: '%d ਸਾਲ'
        },
        preparse: function (e) {
          return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'ਰਾਤ' === t ? e < 4 ? e : e + 12 : 'ਸਵੇਰ' === t ? e : 'ਦੁਪਹਿਰ' === t ? e >= 10 ? e : e + 12 : 'ਸ਼ਾਮ' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ਰਾਤ' : e < 10 ? 'ਸਵੇਰ' : e < 17 ? 'ਦੁਪਹਿਰ' : e < 20 ? 'ਸ਼ਾਮ' : 'ਰਾਤ';
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  '8mBD': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('pt', {
        months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY HH:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Hoje às] LT',
          nextDay: '[Amanhã às] LT',
          nextWeek: 'dddd [às] LT',
          lastDay: '[Ontem às] LT',
          lastWeek: function () {
            return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT';
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'em %s',
          past: 'há %s',
          s: 'segundos',
          ss: '%d segundos',
          m: 'um minuto',
          mm: '%d minutos',
          h: 'uma hora',
          hh: '%d horas',
          d: 'um dia',
          dd: '%d dias',
          M: 'um mês',
          MM: '%d meses',
          y: 'um ano',
          yy: '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  AQ68: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('uz-latn', {
        months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm'
        },
        calendar: {
          sameDay: '[Bugun soat] LT [da]',
          nextDay: '[Ertaga] LT [da]',
          nextWeek: 'dddd [kuni soat] LT [da]',
          lastDay: '[Kecha soat] LT [da]',
          lastWeek: '[O\'tgan] dddd [kuni soat] LT [da]',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'Yaqin %s ichida',
          past: 'Bir necha %s oldin',
          s: 'soniya',
          ss: '%d soniya',
          m: 'bir daqiqa',
          mm: '%d daqiqa',
          h: 'bir soat',
          hh: '%d soat',
          d: 'bir kun',
          dd: '%d kun',
          M: 'bir oy',
          MM: '%d oy',
          y: 'bir yil',
          yy: '%d yil'
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  DoHr: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
      };
      return e.defineLocale('tr', {
        months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        meridiem: function (e, t, n) {
          return e < 12 ? n ? 'öö' : 'ÖÖ' : n ? 'ös' : 'ÖS';
        },
        meridiemParse: /öö|ÖÖ|ös|ÖS/,
        isPM: function (e) {
          return 'ös' === e || 'ÖS' === e;
        },
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
          nextDay: '[yarın saat] LT',
          nextWeek: '[gelecek] dddd [saat] LT',
          lastDay: '[dün] LT',
          lastWeek: '[geçen] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s sonra',
          past: '%s önce',
          s: 'birkaç saniye',
          ss: '%d saniye',
          m: 'bir dakika',
          mm: '%d dakika',
          h: 'bir saat',
          hh: '%d saat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir ay',
          MM: '%d ay',
          y: 'bir yıl',
          yy: '%d yıl'
        },
        ordinal: function (e, n) {
          switch (n) {
          case 'd':
          case 'D':
          case 'Do':
          case 'DD':
            return e;
          default:
            if (0 === e)
              return e + '\'ıncı';
            var a = e % 10;
            return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null]);
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  Dzi0: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('tl-ph', {
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
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  'E+lV': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
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
            'секунда',
            'секунде',
            'секунди'
          ],
          m: [
            'један минут',
            'једне минуте'
          ],
          mm: [
            'минут',
            'минуте',
            'минута'
          ],
          h: [
            'један сат',
            'једног сата'
          ],
          hh: [
            'сат',
            'сата',
            'сати'
          ],
          dd: [
            'дан',
            'дана',
            'дана'
          ],
          MM: [
            'месец',
            'месеца',
            'месеци'
          ],
          yy: [
            'година',
            'године',
            'година'
          ]
        },
        correctGrammaticalCase: function (e, t) {
          return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
        },
        translate: function (e, n, a) {
          var o = t.words[a];
          return 1 === a.length ? n ? o[0] : o[1] : e + ' ' + t.correctGrammaticalCase(e, o);
        }
      };
      return e.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
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
          sameDay: '[данас у] LT',
          nextDay: '[сутра у] LT',
          nextWeek: function () {
            switch (this.day()) {
            case 0:
              return '[у] [недељу] [у] LT';
            case 3:
              return '[у] [среду] [у] LT';
            case 6:
              return '[у] [суботу] [у] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[у] dddd [у] LT';
            }
          },
          lastDay: '[јуче у] LT',
          lastWeek: function () {
            return [
              '[прошле] [недеље] [у] LT',
              '[прошлог] [понедељка] [у] LT',
              '[прошлог] [уторка] [у] LT',
              '[прошле] [среде] [у] LT',
              '[прошлог] [четвртка] [у] LT',
              '[прошлог] [петка] [у] LT',
              '[прошле] [суботе] [у] LT'
            ][this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'за %s',
          past: 'пре %s',
          s: 'неколико секунди',
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: 'дан',
          dd: t.translate,
          M: 'месец',
          MM: t.translate,
          y: 'годину',
          yy: t.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  EOgW: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('th', {
        months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
        weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY เวลา H:mm',
          LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (e) {
          return 'หลังเที่ยง' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'ก่อนเที่ยง' : 'หลังเที่ยง';
        },
        calendar: {
          sameDay: '[วันนี้ เวลา] LT',
          nextDay: '[พรุ่งนี้ เวลา] LT',
          nextWeek: 'dddd[หน้า เวลา] LT',
          lastDay: '[เมื่อวานนี้ เวลา] LT',
          lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'อีก %s',
          past: '%sที่แล้ว',
          s: 'ไม่กี่วินาที',
          ss: '%d วินาที',
          m: '1 นาที',
          mm: '%d นาที',
          h: '1 ชั่วโมง',
          hh: '%d ชั่วโมง',
          d: '1 วัน',
          dd: '%d วัน',
          M: '1 เดือน',
          MM: '%d เดือน',
          y: '1 ปี',
          yy: '%d ปี'
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  Fnuy: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('oc-lnc', {
        months: {
          standalone: 'genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre'.split('_'),
          format: 'de genièr_de febrièr_de març_d\'abril_de mai_de junh_de julhet_d\'agost_de setembre_d\'octòbre_de novembre_de decembre'.split('_'),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: 'gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte'.split('_'),
        weekdaysShort: 'dg._dl._dm._dc._dj._dv._ds.'.split('_'),
        weekdaysMin: 'dg_dl_dm_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [de] YYYY',
          ll: 'D MMM YYYY',
          LLL: 'D MMMM [de] YYYY [a] H:mm',
          lll: 'D MMM YYYY, H:mm',
          LLLL: 'dddd D MMMM [de] YYYY [a] H:mm',
          llll: 'ddd D MMM YYYY, H:mm'
        },
        calendar: {
          sameDay: '[uèi a] LT',
          nextDay: '[deman a] LT',
          nextWeek: 'dddd [a] LT',
          lastDay: '[ièr a] LT',
          lastWeek: 'dddd [passat a] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'd\'aquí %s',
          past: 'fa %s',
          s: 'unas segondas',
          ss: '%d segondas',
          m: 'una minuta',
          mm: '%d minutas',
          h: 'una ora',
          hh: '%d oras',
          d: 'un jorn',
          dd: '%d jorns',
          M: 'un mes',
          MM: '%d meses',
          y: 'un an',
          yy: '%d ans'
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
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  KSF8: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('vi', {
        months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort: 'Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12'.split('_'),
        monthsParseExact: !0,
        weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function (e) {
          return /^ch$/i.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? n ? 'sa' : 'SA' : n ? 'ch' : 'CH';
        },
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM [năm] YYYY',
          LLL: 'D MMMM [năm] YYYY HH:mm',
          LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
          l: 'DD/M/YYYY',
          ll: 'D MMM YYYY',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd, D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Hôm nay lúc] LT',
          nextDay: '[Ngày mai lúc] LT',
          nextWeek: 'dddd [tuần tới lúc] LT',
          lastDay: '[Hôm qua lúc] LT',
          lastWeek: 'dddd [tuần trước lúc] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s tới',
          past: '%s trước',
          s: 'vài giây',
          ss: '%d giây',
          m: 'một phút',
          mm: '%d phút',
          h: 'một giờ',
          hh: '%d giờ',
          d: 'một ngày',
          dd: '%d ngày',
          M: 'một tháng',
          MM: '%d tháng',
          y: 'một năm',
          yy: '%d năm'
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
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  Loxo: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('uz', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'D MMMM YYYY, dddd HH:mm'
        },
        calendar: {
          sameDay: '[Бугун соат] LT [да]',
          nextDay: '[Эртага] LT [да]',
          nextWeek: 'dddd [куни соат] LT [да]',
          lastDay: '[Кеча соат] LT [да]',
          lastWeek: '[Утган] dddd [куни соат] LT [да]',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'Якин %s ичида',
          past: 'Бир неча %s олдин',
          s: 'фурсат',
          ss: '%d фурсат',
          m: 'бир дакика',
          mm: '%d дакика',
          h: 'бир соат',
          hh: '%d соат',
          d: 'бир кун',
          dd: '%d кун',
          M: 'бир ой',
          MM: '%d ой',
          y: 'бир йил',
          yy: '%d йил'
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  OmwH: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('zh-mo', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'D/M/YYYY',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), '凌晨' === t || '早上' === t || '上午' === t ? e : '中午' === t ? e >= 11 ? e : e + 12 : '下午' === t || '晚上' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? '凌晨' : a < 900 ? '早上' : a < 1130 ? '上午' : a < 1230 ? '中午' : a < 1800 ? '下午' : '晚上';
        },
        calendar: {
          sameDay: '[今天] LT',
          nextDay: '[明天] LT',
          nextWeek: '[下]dddd LT',
          lastDay: '[昨天] LT',
          lastWeek: '[上]dddd LT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'd':
          case 'D':
          case 'DDD':
            return e + '日';
          case 'M':
            return e + '月';
          case 'w':
          case 'W':
            return e + '週';
          default:
            return e;
          }
        },
        relativeTime: {
          future: '%s內',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年'
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  Oxv6: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        0: '-ум',
        1: '-ум',
        2: '-юм',
        3: '-юм',
        4: '-ум',
        5: '-ум',
        6: '-ум',
        7: '-ум',
        8: '-ум',
        9: '-ум',
        10: '-ум',
        12: '-ум',
        13: '-ум',
        20: '-ум',
        30: '-юм',
        40: '-ум',
        50: '-ум',
        60: '-ум',
        70: '-ум',
        80: '-ум',
        90: '-ум',
        100: '-ум'
      };
      return e.defineLocale('tg', {
        months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Имрӯз соати] LT',
          nextDay: '[Пагоҳ соати] LT',
          lastDay: '[Дирӯз соати] LT',
          nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
          lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'баъди %s',
          past: '%s пеш',
          s: 'якчанд сония',
          m: 'як дақиқа',
          mm: '%d дақиқа',
          h: 'як соат',
          hh: '%d соат',
          d: 'як рӯз',
          dd: '%d рӯз',
          M: 'як моҳ',
          MM: '%d моҳ',
          y: 'як сол',
          yy: '%d сол'
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'шаб' === t ? e < 4 ? e : e + 12 : 'субҳ' === t ? e : 'рӯз' === t ? e >= 11 ? e : e + 12 : 'бегоҳ' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'шаб' : e < 11 ? 'субҳ' : e < 16 ? 'рӯз' : e < 19 ? 'бегоҳ' : 'шаб';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function (e) {
          return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  PeUW: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
          1: '௧',
          2: '௨',
          3: '௩',
          4: '௪',
          5: '௫',
          6: '௬',
          7: '௭',
          8: '௮',
          9: '௯',
          0: '௦'
        }, n = {
          '௧': '1',
          '௨': '2',
          '௩': '3',
          '௪': '4',
          '௫': '5',
          '௬': '6',
          '௭': '7',
          '௮': '8',
          '௯': '9',
          '௦': '0'
        };
      return e.defineLocale('ta', {
        months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, HH:mm',
          LLLL: 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar: {
          sameDay: '[இன்று] LT',
          nextDay: '[நாளை] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[நேற்று] LT',
          lastWeek: '[கடந்த வாரம்] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s இல்',
          past: '%s முன்',
          s: 'ஒரு சில விநாடிகள்',
          ss: '%d விநாடிகள்',
          m: 'ஒரு நிமிடம்',
          mm: '%d நிமிடங்கள்',
          h: 'ஒரு மணி நேரம்',
          hh: '%d மணி நேரம்',
          d: 'ஒரு நாள்',
          dd: '%d நாட்கள்',
          M: 'ஒரு மாதம்',
          MM: '%d மாதங்கள்',
          y: 'ஒரு வருடம்',
          yy: '%d ஆண்டுகள்'
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function (e) {
          return e + 'வது';
        },
        preparse: function (e) {
          return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
            return n[e];
          });
        },
        postformat: function (e) {
          return e.replace(/\d/g, function (e) {
            return t[e];
          });
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function (e, t, n) {
          return e < 2 ? ' யாமம்' : e < 6 ? ' வைகறை' : e < 10 ? ' காலை' : e < 14 ? ' நண்பகல்' : e < 18 ? ' எற்பாடு' : e < 22 ? ' மாலை' : ' யாமம்';
        },
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'யாமம்' === t ? e < 2 ? e : e + 12 : 'வைகறை' === t || 'காலை' === t || 'நண்பகல்' === t && e >= 10 ? e : e + 12;
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  SatO: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('zh-hk', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), '凌晨' === t || '早上' === t || '上午' === t ? e : '中午' === t ? e >= 11 ? e : e + 12 : '下午' === t || '晚上' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? '凌晨' : a < 900 ? '早上' : a < 1200 ? '上午' : 1200 === a ? '中午' : a < 1800 ? '下午' : '晚上';
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: '[下]ddddLT',
          lastDay: '[昨天]LT',
          lastWeek: '[上]ddddLT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'd':
          case 'D':
          case 'DDD':
            return e + '日';
          case 'M':
            return e + '月';
          case 'w':
          case 'W':
            return e + '週';
          default:
            return e;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年'
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  UpQW: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = [
          'جنوری',
          'فروری',
          'مارچ',
          'اپریل',
          'مئی',
          'جون',
          'جولائی',
          'اگست',
          'ستمبر',
          'اکتوبر',
          'نومبر',
          'دسمبر'
        ], n = [
          'اتوار',
          'پیر',
          'منگل',
          'بدھ',
          'جمعرات',
          'جمعہ',
          'ہفتہ'
        ];
      return e.defineLocale('ur', {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd\u060C D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return 'شام' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'صبح' : 'شام';
        },
        calendar: {
          sameDay: '[آج بوقت] LT',
          nextDay: '[کل بوقت] LT',
          nextWeek: 'dddd [بوقت] LT',
          lastDay: '[گذشتہ روز بوقت] LT',
          lastWeek: '[گذشتہ] dddd [بوقت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s بعد',
          past: '%s قبل',
          s: 'چند سیکنڈ',
          ss: '%d سیکنڈ',
          m: 'ایک منٹ',
          mm: '%d منٹ',
          h: 'ایک گھنٹہ',
          hh: '%d گھنٹے',
          d: 'ایک دن',
          dd: '%d دن',
          M: 'ایک ماہ',
          MM: '%d ماہ',
          y: 'ایک سال',
          yy: '%d سال'
        },
        preparse: function (e) {
          return e.replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/,/g, '\u060C');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  Ur1D: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ss', {
        months: 'Bhimbidvwane_Indlovana_Indlov\'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni'.split('_'),
        monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Namuhla nga] LT',
          nextDay: '[Kusasa nga] LT',
          nextWeek: 'dddd [nga] LT',
          lastDay: '[Itolo nga] LT',
          lastWeek: 'dddd [leliphelile] [nga] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'nga %s',
          past: 'wenteka nga %s',
          s: 'emizuzwana lomcane',
          ss: '%d mzuzwana',
          m: 'umzuzu',
          mm: '%d emizuzu',
          h: 'lihora',
          hh: '%d emahora',
          d: 'lilanga',
          dd: '%d emalanga',
          M: 'inyanga',
          MM: '%d tinyanga',
          y: 'umnyaka',
          yy: '%d iminyaka'
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function (e, t, n) {
          return e < 11 ? 'ekuseni' : e < 15 ? 'emini' : e < 19 ? 'entsambama' : 'ebusuku';
        },
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'ekuseni' === t ? e : 'emini' === t ? e >= 11 ? e : e + 12 : 'entsambama' === t || 'ebusuku' === t ? 0 === e ? 0 : e + 12 : void 0;
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: '%d',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  V2x9: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('tet', {
        months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Ohin iha] LT',
          nextDay: '[Aban iha] LT',
          nextWeek: 'dddd [iha] LT',
          lastDay: '[Horiseik iha] LT',
          lastWeek: 'dddd [semana kotuk] [iha] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'iha %s',
          past: '%s liuba',
          s: 'segundu balun',
          ss: 'segundu %d',
          m: 'minutu ida',
          mm: 'minutu %d',
          h: 'oras ida',
          hh: 'oras %d',
          d: 'loron ida',
          dd: 'loron %d',
          M: 'fulan ida',
          MM: 'fulan %d',
          y: 'tinan ida',
          yy: 'tinan %d'
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
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  Wv91: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = {
        1: '\'inji',
        5: '\'inji',
        8: '\'inji',
        70: '\'inji',
        80: '\'inji',
        2: '\'nji',
        7: '\'nji',
        20: '\'nji',
        50: '\'nji',
        3: '\'ünji',
        4: '\'ünji',
        100: '\'ünji',
        6: '\'njy',
        9: '\'unjy',
        10: '\'unjy',
        30: '\'unjy',
        60: '\'ynjy',
        90: '\'ynjy'
      };
      return e.defineLocale('tk', {
        months: 'Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr'.split('_'),
        monthsShort: 'Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek'.split('_'),
        weekdays: 'Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe'.split('_'),
        weekdaysShort: 'Ýek_Duş_Siş_Çar_Pen_Ann_Şen'.split('_'),
        weekdaysMin: 'Ýk_Dş_Sş_Çr_Pn_An_Şn'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[bugün sagat] LT',
          nextDay: '[ertir sagat] LT',
          nextWeek: '[indiki] dddd [sagat] LT',
          lastDay: '[düýn] LT',
          lastWeek: '[geçen] dddd [sagat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s soň',
          past: '%s öň',
          s: 'birnäçe sekunt',
          m: 'bir minut',
          mm: '%d minut',
          h: 'bir sagat',
          hh: '%d sagat',
          d: 'bir gün',
          dd: '%d gün',
          M: 'bir aý',
          MM: '%d aý',
          y: 'bir ýyl',
          yy: '%d ýyl'
        },
        ordinal: function (e, n) {
          switch (n) {
          case 'd':
          case 'D':
          case 'Do':
          case 'DD':
            return e;
          default:
            if (0 === e)
              return e + '\'unjy';
            var a = e % 10;
            return e + (t[a] || t[e % 100 - a] || t[e >= 100 ? 100 : null]);
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  X709: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('sv', {
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd D MMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Idag] LT',
          nextDay: '[Imorgon] LT',
          lastDay: '[Igår] LT',
          nextWeek: '[På] dddd LT',
          lastWeek: '[I] dddd[s] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: 'för %s sedan',
          s: 'några sekunder',
          ss: '%d sekunder',
          m: 'en minut',
          mm: '%d minuter',
          h: 'en timme',
          hh: '%d timmar',
          d: 'en dag',
          dd: '%d dagar',
          M: 'en månad',
          MM: '%d månader',
          y: 'ett år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal: function (e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? ':e' : 1 === t || 2 === t ? ':a' : ':e');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  XDpg: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('zh-cn', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日Ah点mm分',
          LLLL: 'YYYY年M月D日ddddAh点mm分',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), '凌晨' === t || '早上' === t || '上午' === t ? e : '下午' === t || '晚上' === t ? e + 12 : e >= 11 ? e : e + 12;
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? '凌晨' : a < 900 ? '早上' : a < 1130 ? '上午' : a < 1230 ? '中午' : a < 1800 ? '下午' : '晚上';
        },
        calendar: {
          sameDay: '[今天]LT',
          nextDay: '[明天]LT',
          nextWeek: function (e) {
            return e.week() !== this.week() ? '[下]dddLT' : '[本]dddLT';
          },
          lastDay: '[昨天]LT',
          lastWeek: function (e) {
            return this.week() !== e.week() ? '[上]dddLT' : '[本]dddLT';
          },
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'd':
          case 'D':
          case 'DDD':
            return e + '日';
          case 'M':
            return e + '月';
          case 'w':
          case 'W':
            return e + '周';
          default:
            return e;
          }
        },
        relativeTime: {
          future: '%s后',
          past: '%s前',
          s: '几秒',
          ss: '%d 秒',
          m: '1 分钟',
          mm: '%d 分钟',
          h: '1 小时',
          hh: '%d 小时',
          d: '1 天',
          dd: '%d 天',
          M: '1 个月',
          MM: '%d 个月',
          y: '1 年',
          yy: '%d 年'
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  XLvN: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('te', {
        months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat: {
          LT: 'A h:mm',
          LTS: 'A h:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY, A h:mm',
          LLLL: 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar: {
          sameDay: '[నేడు] LT',
          nextDay: '[రేపు] LT',
          nextWeek: 'dddd, LT',
          lastDay: '[నిన్న] LT',
          lastWeek: '[గత] dddd, LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s లో',
          past: '%s క్రితం',
          s: 'కొన్ని క్షణాలు',
          ss: '%d సెకన్లు',
          m: 'ఒక నిమిషం',
          mm: '%d నిమిషాలు',
          h: 'ఒక గంట',
          hh: '%d గంటలు',
          d: 'ఒక రోజు',
          dd: '%d రోజులు',
          M: 'ఒక నెల',
          MM: '%d నెలలు',
          y: 'ఒక సంవత్సరం',
          yy: '%d సంవత్సరాలు'
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'రాత్రి' === t ? e < 4 ? e : e + 12 : 'ఉదయం' === t ? e : 'మధ్యాహ్నం' === t ? e >= 10 ? e : e + 12 : 'సాయంత్రం' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'రాత్రి' : e < 10 ? 'ఉదయం' : e < 17 ? 'మధ్యాహ్నం' : e < 20 ? 'సాయంత్రం' : 'రాత్రి';
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  YRex: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
          LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى\u060C HH:mm',
          LLLL: 'dddd\u060C YYYY-يىلىM-ئاينىڭD-كۈنى\u060C HH:mm'
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), 'يېرىم كېچە' === t || 'سەھەر' === t || 'چۈشتىن بۇرۇن' === t ? e : 'چۈشتىن كېيىن' === t || 'كەچ' === t ? e + 12 : e >= 11 ? e : e + 12;
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? 'يېرىم كېچە' : a < 900 ? 'سەھەر' : a < 1130 ? 'چۈشتىن بۇرۇن' : a < 1230 ? 'چۈش' : a < 1800 ? 'چۈشتىن كېيىن' : 'كەچ';
        },
        calendar: {
          sameDay: '[بۈگۈن سائەت] LT',
          nextDay: '[ئەتە سائەت] LT',
          nextWeek: '[كېلەركى] dddd [سائەت] LT',
          lastDay: '[تۆنۈگۈن] LT',
          lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s كېيىن',
          past: '%s بۇرۇن',
          s: 'نەچچە سېكونت',
          ss: '%d سېكونت',
          m: 'بىر مىنۇت',
          mm: '%d مىنۇت',
          h: 'بىر سائەت',
          hh: '%d سائەت',
          d: 'بىر كۈن',
          dd: '%d كۈن',
          M: 'بىر ئاي',
          MM: '%d ئاي',
          y: 'بىر يىل',
          yy: '%d يىل'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'd':
          case 'D':
          case 'DDD':
            return e + '-كۈنى';
          case 'w':
          case 'W':
            return e + '-ھەپتە';
          default:
            return e;
          }
        },
        preparse: function (e) {
          return e.replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/,/g, '\u060C');
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  Z4QM: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = [
          'جنوري',
          'فيبروري',
          'مارچ',
          'اپريل',
          'مئي',
          'جون',
          'جولاءِ',
          'آگسٽ',
          'سيپٽمبر',
          'آڪٽوبر',
          'نومبر',
          'ڊسمبر'
        ], n = [
          'آچر',
          'سومر',
          'اڱارو',
          'اربع',
          'خميس',
          'جمع',
          'ڇنڇر'
        ];
      return e.defineLocale('sd', {
        months: t,
        monthsShort: t,
        weekdays: n,
        weekdaysShort: n,
        weekdaysMin: n,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd\u060C D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM: function (e) {
          return 'شام' === e;
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'صبح' : 'شام';
        },
        calendar: {
          sameDay: '[اڄ] LT',
          nextDay: '[سڀاڻي] LT',
          nextWeek: 'dddd [اڳين هفتي تي] LT',
          lastDay: '[ڪالهه] LT',
          lastWeek: '[گزريل هفتي] dddd [تي] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s پوء',
          past: '%s اڳ',
          s: 'چند سيڪنڊ',
          ss: '%d سيڪنڊ',
          m: 'هڪ منٽ',
          mm: '%d منٽ',
          h: 'هڪ ڪلاڪ',
          hh: '%d ڪلاڪ',
          d: 'هڪ ڏينهن',
          dd: '%d ڏينهن',
          M: 'هڪ مهينو',
          MM: '%d مهينا',
          y: 'هڪ سال',
          yy: '%d سال'
        },
        preparse: function (e) {
          return e.replace(/،/g, ',');
        },
        postformat: function (e) {
          return e.replace(/,/g, '\u060C');
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  dNwA: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('sw', {
        months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'hh:mm A',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[leo saa] LT',
          nextDay: '[kesho saa] LT',
          nextWeek: '[wiki ijayo] dddd [saat] LT',
          lastDay: '[jana] LT',
          lastWeek: '[wiki iliyopita] dddd [saat] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: '%s baadaye',
          past: 'tokea %s',
          s: 'hivi punde',
          ss: 'sekunde %d',
          m: 'dakika moja',
          mm: 'dakika %d',
          h: 'saa limoja',
          hh: 'masaa %d',
          d: 'siku moja',
          dd: 'siku %d',
          M: 'mwezi mmoja',
          MM: 'miezi %d',
          y: 'mwaka mmoja',
          yy: 'miaka %d'
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  'e+ae': function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'), n = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
      function a(e) {
        return e > 1 && e < 5;
      }
      function o(e, t, n, o) {
        var r = e + ' ';
        switch (n) {
        case 's':
          return t || o ? 'pár sekúnd' : 'pár sekundami';
        case 'ss':
          return t || o ? r + (a(e) ? 'sekundy' : 'sekúnd') : r + 'sekundami';
        case 'm':
          return t ? 'minúta' : o ? 'minútu' : 'minútou';
        case 'mm':
          return t || o ? r + (a(e) ? 'minúty' : 'minút') : r + 'minútami';
        case 'h':
          return t ? 'hodina' : o ? 'hodinu' : 'hodinou';
        case 'hh':
          return t || o ? r + (a(e) ? 'hodiny' : 'hodín') : r + 'hodinami';
        case 'd':
          return t || o ? 'deň' : 'dňom';
        case 'dd':
          return t || o ? r + (a(e) ? 'dni' : 'dní') : r + 'dňami';
        case 'M':
          return t || o ? 'mesiac' : 'mesiacom';
        case 'MM':
          return t || o ? r + (a(e) ? 'mesiace' : 'mesiacov') : r + 'mesiacmi';
        case 'y':
          return t || o ? 'rok' : 'rokom';
        case 'yy':
          return t || o ? r + (a(e) ? 'roky' : 'rokov') : r + 'rokmi';
        }
      }
      return e.defineLocale('sk', {
        months: t,
        monthsShort: n,
        weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[dnes o] LT',
          nextDay: '[zajtra o] LT',
          nextWeek: function () {
            switch (this.day()) {
            case 0:
              return '[v nedeľu o] LT';
            case 1:
            case 2:
              return '[v] dddd [o] LT';
            case 3:
              return '[v stredu o] LT';
            case 4:
              return '[vo štvrtok o] LT';
            case 5:
              return '[v piatok o] LT';
            case 6:
              return '[v sobotu o] LT';
            }
          },
          lastDay: '[včera o] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
              return '[minulú nedeľu o] LT';
            case 1:
            case 2:
              return '[minulý] dddd [o] LT';
            case 3:
              return '[minulú stredu o] LT';
            case 4:
            case 5:
              return '[minulý] dddd [o] LT';
            case 6:
              return '[minulú sobotu o] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'pred %s',
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
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  fzPg: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('yo', {
        months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat: {
          LT: 'h:mm A',
          LTS: 'h:mm:ss A',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY h:mm A',
          LLLL: 'dddd, D MMMM YYYY h:mm A'
        },
        calendar: {
          sameDay: '[Ònì ni] LT',
          nextDay: '[Ọ̀la ni] LT',
          nextWeek: 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
          lastDay: '[Àna ni] LT',
          lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ní %s',
          past: '%s kọjá',
          s: 'ìsẹjú aayá die',
          ss: 'aayá %d',
          m: 'ìsẹjú kan',
          mm: 'ìsẹjú %d',
          h: 'wákati kan',
          hh: 'wákati %d',
          d: 'ọjọ́ kan',
          dd: 'ọjọ́ %d',
          M: 'osù kan',
          MM: 'osù %d',
          y: 'ọdún kan',
          yy: 'ọdún %d'
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: 'ọjọ́ %d',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  gVVK: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, a) {
        var o = e + ' ';
        switch (n) {
        case 's':
          return t || a ? 'nekaj sekund' : 'nekaj sekundami';
        case 'ss':
          return o += 1 === e ? t ? 'sekundo' : 'sekundi' : 2 === e ? t || a ? 'sekundi' : 'sekundah' : e < 5 ? t || a ? 'sekunde' : 'sekundah' : 'sekund';
        case 'm':
          return t ? 'ena minuta' : 'eno minuto';
        case 'mm':
          return o += 1 === e ? t ? 'minuta' : 'minuto' : 2 === e ? t || a ? 'minuti' : 'minutama' : e < 5 ? t || a ? 'minute' : 'minutami' : t || a ? 'minut' : 'minutami';
        case 'h':
          return t ? 'ena ura' : 'eno uro';
        case 'hh':
          return o += 1 === e ? t ? 'ura' : 'uro' : 2 === e ? t || a ? 'uri' : 'urama' : e < 5 ? t || a ? 'ure' : 'urami' : t || a ? 'ur' : 'urami';
        case 'd':
          return t || a ? 'en dan' : 'enim dnem';
        case 'dd':
          return o += 1 === e ? t || a ? 'dan' : 'dnem' : 2 === e ? t || a ? 'dni' : 'dnevoma' : t || a ? 'dni' : 'dnevi';
        case 'M':
          return t || a ? 'en mesec' : 'enim mesecem';
        case 'MM':
          return o += 1 === e ? t || a ? 'mesec' : 'mesecem' : 2 === e ? t || a ? 'meseca' : 'mesecema' : e < 5 ? t || a ? 'mesece' : 'meseci' : t || a ? 'mesecev' : 'meseci';
        case 'y':
          return t || a ? 'eno leto' : 'enim letom';
        case 'yy':
          return o += 1 === e ? t || a ? 'leto' : 'letom' : 2 === e ? t || a ? 'leti' : 'letoma' : e < 5 ? t || a ? 'leta' : 'leti' : t || a ? 'let' : 'leti';
        }
      }
      return e.defineLocale('sl', {
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD. MM. YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[danes ob] LT',
          nextDay: '[jutri ob] LT',
          nextWeek: function () {
            switch (this.day()) {
            case 0:
              return '[v] [nedeljo] [ob] LT';
            case 3:
              return '[v] [sredo] [ob] LT';
            case 6:
              return '[v] [soboto] [ob] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[v] dddd [ob] LT';
            }
          },
          lastDay: '[včeraj ob] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
              return '[prejšnjo] [nedeljo] [ob] LT';
            case 3:
              return '[prejšnjo] [sredo] [ob] LT';
            case 6:
              return '[prejšnjo] [soboto] [ob] LT';
            case 1:
            case 2:
            case 4:
            case 5:
              return '[prejšnji] dddd [ob] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'čez %s',
          past: 'pred %s',
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
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  jVdC: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'), n = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
      function a(e) {
        return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
      }
      function o(e, t, n) {
        var o = e + ' ';
        switch (n) {
        case 'ss':
          return o + (a(e) ? 'sekundy' : 'sekund');
        case 'm':
          return t ? 'minuta' : 'minutę';
        case 'mm':
          return o + (a(e) ? 'minuty' : 'minut');
        case 'h':
          return t ? 'godzina' : 'godzinę';
        case 'hh':
          return o + (a(e) ? 'godziny' : 'godzin');
        case 'MM':
          return o + (a(e) ? 'miesiące' : 'miesięcy');
        case 'yy':
          return o + (a(e) ? 'lata' : 'lat');
        }
      }
      return e.defineLocale('pl', {
        months: function (e, a) {
          return e ? '' === a ? '(' + n[e.month()] + '|' + t[e.month()] + ')' : /D MMMM/.test(a) ? n[e.month()] : t[e.month()] : t;
        },
        monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[Dziś o] LT',
          nextDay: '[Jutro o] LT',
          nextWeek: function () {
            switch (this.day()) {
            case 0:
              return '[W niedzielę o] LT';
            case 2:
              return '[We wtorek o] LT';
            case 3:
              return '[W środę o] LT';
            case 6:
              return '[W sobotę o] LT';
            default:
              return '[W] dddd [o] LT';
            }
          },
          lastDay: '[Wczoraj o] LT',
          lastWeek: function () {
            switch (this.day()) {
            case 0:
              return '[W zeszłą niedzielę o] LT';
            case 3:
              return '[W zeszłą środę o] LT';
            case 6:
              return '[W zeszłą sobotę o] LT';
            default:
              return '[W zeszły] dddd [o] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: '%s temu',
          s: 'kilka sekund',
          ss: o,
          m: o,
          mm: o,
          h: o,
          hh: o,
          d: '1 dzień',
          dd: '%d dni',
          M: 'miesiąc',
          MM: o,
          y: 'rok',
          yy: o
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  kOpN: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('zh-tw', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY/MM/DD',
          LL: 'YYYY年M月D日',
          LLL: 'YYYY年M月D日 HH:mm',
          LLLL: 'YYYY年M月D日dddd HH:mm',
          l: 'YYYY/M/D',
          ll: 'YYYY年M月D日',
          lll: 'YYYY年M月D日 HH:mm',
          llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (e, t) {
          return 12 === e && (e = 0), '凌晨' === t || '早上' === t || '上午' === t ? e : '中午' === t ? e >= 11 ? e : e + 12 : '下午' === t || '晚上' === t ? e + 12 : void 0;
        },
        meridiem: function (e, t, n) {
          var a = 100 * e + t;
          return a < 600 ? '凌晨' : a < 900 ? '早上' : a < 1130 ? '上午' : a < 1230 ? '中午' : a < 1800 ? '下午' : '晚上';
        },
        calendar: {
          sameDay: '[今天] LT',
          nextDay: '[明天] LT',
          nextWeek: '[下]dddd LT',
          lastDay: '[昨天] LT',
          lastWeek: '[上]dddd LT',
          sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'd':
          case 'D':
          case 'DDD':
            return e + '日';
          case 'M':
            return e + '月';
          case 'w':
          case 'W':
            return e + '週';
          default:
            return e;
          }
        },
        relativeTime: {
          future: '%s後',
          past: '%s前',
          s: '幾秒',
          ss: '%d 秒',
          m: '1 分鐘',
          mm: '%d 分鐘',
          h: '1 小時',
          hh: '%d 小時',
          d: '1 天',
          dd: '%d 天',
          M: '1 個月',
          MM: '%d 個月',
          y: '1 年',
          yy: '%d 年'
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  lXzo: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n) {
        var a, o;
        return 'm' === n ? t ? 'минута' : 'минуту' : e + ' ' + (a = +e, o = {
          ss: t ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
          mm: t ? 'минута_минуты_минут' : 'минуту_минуты_минут',
          hh: 'час_часа_часов',
          dd: 'день_дня_дней',
          MM: 'месяц_месяца_месяцев',
          yy: 'год_года_лет'
        }[n].split('_'), a % 10 == 1 && a % 100 != 11 ? o[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? o[1] : o[2]);
      }
      var n = [
        /^янв/i,
        /^фев/i,
        /^мар/i,
        /^апр/i,
        /^ма[йя]/i,
        /^июн/i,
        /^июл/i,
        /^авг/i,
        /^сен/i,
        /^окт/i,
        /^ноя/i,
        /^дек/i
      ];
      return e.defineLocale('ru', {
        months: {
          format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
          standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort: {
          format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
          standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays: {
          standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
          format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: n,
        longMonthsParse: n,
        shortMonthsParse: n,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY г.',
          LLL: 'D MMMM YYYY г., H:mm',
          LLLL: 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar: {
          sameDay: '[Сегодня, в] LT',
          nextDay: '[Завтра, в] LT',
          lastDay: '[Вчера, в] LT',
          nextWeek: function (e) {
            if (e.week() === this.week())
              return 2 === this.day() ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
            switch (this.day()) {
            case 0:
              return '[В следующее] dddd, [в] LT';
            case 1:
            case 2:
            case 4:
              return '[В следующий] dddd, [в] LT';
            case 3:
            case 5:
            case 6:
              return '[В следующую] dddd, [в] LT';
            }
          },
          lastWeek: function (e) {
            if (e.week() === this.week())
              return 2 === this.day() ? '[Во] dddd, [в] LT' : '[В] dddd, [в] LT';
            switch (this.day()) {
            case 0:
              return '[В прошлое] dddd, [в] LT';
            case 1:
            case 2:
            case 4:
              return '[В прошлый] dddd, [в] LT';
            case 3:
            case 5:
            case 6:
              return '[В прошлую] dddd, [в] LT';
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'через %s',
          past: '%s назад',
          s: 'несколько секунд',
          ss: t,
          m: t,
          mm: t,
          h: 'час',
          hh: t,
          d: 'день',
          dd: t,
          M: 'месяц',
          MM: t,
          y: 'год',
          yy: t
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (e) {
          return /^(дня|вечера)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'M':
          case 'd':
          case 'DDD':
            return e + '-й';
          case 'D':
            return e + '-го';
          case 'w':
          case 'W':
            return e + '-я';
          default:
            return e;
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  lyxo: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n) {
        var a = ' ';
        return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (a = ' de '), e + a + {
          ss: 'secunde',
          mm: 'minute',
          hh: 'ore',
          dd: 'zile',
          MM: 'luni',
          yy: 'ani'
        }[n];
      }
      return e.defineLocale('ro', {
        months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort: 'ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY H:mm',
          LLLL: 'dddd, D MMMM YYYY H:mm'
        },
        calendar: {
          sameDay: '[azi la] LT',
          nextDay: '[mâine la] LT',
          nextWeek: 'dddd [la] LT',
          lastDay: '[ieri la] LT',
          lastWeek: '[fosta] dddd [la] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'peste %s',
          past: '%s în urmă',
          s: 'câteva secunde',
          ss: t,
          m: 'un minut',
          mm: t,
          h: 'o oră',
          hh: t,
          d: 'o zi',
          dd: t,
          M: 'o lună',
          MM: t,
          y: 'un an',
          yy: t
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  raLr: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n) {
        var a, o;
        return 'm' === n ? t ? 'хвилина' : 'хвилину' : 'h' === n ? t ? 'година' : 'годину' : e + ' ' + (a = +e, o = {
          ss: t ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
          mm: t ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
          hh: t ? 'година_години_годин' : 'годину_години_годин',
          dd: 'день_дні_днів',
          MM: 'місяць_місяці_місяців',
          yy: 'рік_роки_років'
        }[n].split('_'), a % 10 == 1 && a % 100 != 11 ? o[0] : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? o[1] : o[2]);
      }
      function n(e) {
        return function () {
          return e + 'о' + (11 === this.hours() ? 'б' : '') + '] LT';
        };
      }
      return e.defineLocale('uk', {
        months: {
          format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
          standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
        },
        monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays: function (e, t) {
          var n = {
            nominative: 'неділя_понеділок_вівторок_середа_четвер_п\u2019ятниця_субота'.split('_'),
            accusative: 'неділю_понеділок_вівторок_середу_четвер_п\u2019ятницю_суботу'.split('_'),
            genitive: 'неділі_понеділка_вівторка_середи_четверга_п\u2019ятниці_суботи'.split('_')
          };
          return !0 === e ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)) : e ? n[/(\[[ВвУу]\]) ?dddd/.test(t) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? 'genitive' : 'nominative'][e.day()] : n.nominative;
        },
        weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY р.',
          LLL: 'D MMMM YYYY р., HH:mm',
          LLLL: 'dddd, D MMMM YYYY р., HH:mm'
        },
        calendar: {
          sameDay: n('[Сьогодні '),
          nextDay: n('[Завтра '),
          lastDay: n('[Вчора '),
          nextWeek: n('[У] dddd ['),
          lastWeek: function () {
            switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return n('[Минулої] dddd [').call(this);
            case 1:
            case 2:
            case 4:
              return n('[Минулого] dddd [').call(this);
            }
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'за %s',
          past: '%s тому',
          s: 'декілька секунд',
          ss: t,
          m: t,
          mm: t,
          h: 'годину',
          hh: t,
          d: 'день',
          dd: t,
          M: 'місяць',
          MM: t,
          y: 'рік',
          yy: t
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (e) {
          return /^(дня|вечора)$/.test(e);
        },
        meridiem: function (e, t, n) {
          return e < 4 ? 'ночі' : e < 12 ? 'ранку' : e < 17 ? 'дня' : 'вечора';
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (e, t) {
          switch (t) {
          case 'M':
          case 'd':
          case 'DDD':
          case 'w':
          case 'W':
            return e + '-й';
          case 'D':
            return e + '-го';
          default:
            return e;
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  tT3J: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('tzm-latn', {
        months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[asdkh g] LT',
          nextDay: '[aska g] LT',
          nextWeek: 'dddd [g] LT',
          lastDay: '[assant g] LT',
          lastWeek: 'dddd [g] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'dadkh s yan %s',
          past: 'yan %s',
          s: 'imik',
          ss: '%d imik',
          m: 'minuḍ',
          mm: '%d minuḍ',
          h: 'saɛa',
          hh: '%d tassaɛin',
          d: 'ass',
          dd: '%d ossan',
          M: 'ayowr',
          MM: '%d iyyirn',
          y: 'asgas',
          yy: '%d isgasn'
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  uEye: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('nn', {
        months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort: 'jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort: 'su._må._ty._on._to._fr._lau.'.split('_'),
        weekdaysMin: 'su_må_ty_on_to_fr_la'.split('_'),
        weekdaysParseExact: !0,
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar: {
          sameDay: '[I dag klokka] LT',
          nextDay: '[I morgon klokka] LT',
          nextWeek: 'dddd [klokka] LT',
          lastDay: '[I går klokka] LT',
          lastWeek: '[Føregåande] dddd [klokka] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'om %s',
          past: '%s sidan',
          s: 'nokre sekund',
          ss: '%d sekund',
          m: 'eit minutt',
          mm: '%d minutt',
          h: 'ein time',
          hh: '%d timar',
          d: 'ein dag',
          dd: '%d dagar',
          M: 'ein månad',
          MM: '%d månader',
          y: 'eit år',
          yy: '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  wQk9: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('tzm', {
        months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
          nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
          nextWeek: 'dddd [ⴴ] LT',
          lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
          lastWeek: 'dddd [ⴴ] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
          past: 'ⵢⴰⵏ %s',
          s: 'ⵉⵎⵉⴽ',
          ss: '%d ⵉⵎⵉⴽ',
          m: 'ⵎⵉⵏⵓⴺ',
          mm: '%d ⵎⵉⵏⵓⴺ',
          h: 'ⵙⴰⵄⴰ',
          hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
          d: 'ⴰⵙⵙ',
          dd: '%d oⵙⵙⴰⵏ',
          M: 'ⴰⵢoⵓⵔ',
          MM: '%d ⵉⵢⵢⵉⵔⵏ',
          y: 'ⴰⵙⴳⴰⵙ',
          yy: '%d ⵉⵙⴳⴰⵙⵏ'
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  yPMs: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      return e.defineLocale('sq', {
        months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function (e) {
          return 'M' === e.charAt(0);
        },
        meridiem: function (e, t, n) {
          return e < 12 ? 'PD' : 'MD';
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
          sameDay: '[Sot në] LT',
          nextDay: '[Nesër në] LT',
          nextWeek: 'dddd [në] LT',
          lastDay: '[Dje në] LT',
          lastWeek: 'dddd [e kaluar në] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'në %s',
          past: '%s më parë',
          s: 'disa sekonda',
          ss: '%d sekonda',
          m: 'një minutë',
          mm: '%d minuta',
          h: 'një orë',
          hh: '%d orë',
          d: 'një ditë',
          dd: '%d ditë',
          M: 'një muaj',
          MM: '%d muaj',
          y: 'një vit',
          yy: '%d vite'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  z1FC: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      function t(e, t, n, a) {
        var o = {
          s: [
            'viensas secunds',
            '\'iensas secunds'
          ],
          ss: [
            e + ' secunds',
            e + ' secunds'
          ],
          m: [
            '\'n míut',
            '\'iens míut'
          ],
          mm: [
            e + ' míuts',
            e + ' míuts'
          ],
          h: [
            '\'n þora',
            '\'iensa þora'
          ],
          hh: [
            e + ' þoras',
            e + ' þoras'
          ],
          d: [
            '\'n ziua',
            '\'iensa ziua'
          ],
          dd: [
            e + ' ziuas',
            e + ' ziuas'
          ],
          M: [
            '\'n mes',
            '\'iens mes'
          ],
          MM: [
            e + ' mesen',
            e + ' mesen'
          ],
          y: [
            '\'n ar',
            '\'iens ar'
          ],
          yy: [
            e + ' ars',
            e + ' ars'
          ]
        };
        return a || t ? o[n][0] : o[n][1];
      }
      return e.defineLocale('tzl', {
        months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM [dallas] YYYY',
          LLL: 'D. MMMM [dallas] YYYY HH.mm',
          LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function (e) {
          return 'd\'o' === e.toLowerCase();
        },
        meridiem: function (e, t, n) {
          return e > 11 ? n ? 'd\'o' : 'D\'O' : n ? 'd\'a' : 'D\'A';
        },
        calendar: {
          sameDay: '[oxhi à] LT',
          nextDay: '[demà à] LT',
          nextWeek: 'dddd [à] LT',
          lastDay: '[ieiri à] LT',
          lastWeek: '[sür el] dddd [lasteu à] LT',
          sameElse: 'L'
        },
        relativeTime: {
          future: 'osprei %s',
          past: 'ja%s',
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
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  z3Vd: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
      })(e);
    }
    s = function (e) {
      'use strict';
      var t = 'pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');
      function n(e, n, a, o) {
        var r = function (e) {
          var n = Math.floor(e % 1000 / 100), a = Math.floor(e % 100 / 10), o = e % 10, r = '';
          return n > 0 && (r += t[n] + 'vatlh'), a > 0 && (r += ('' !== r ? ' ' : '') + t[a] + 'maH'), o > 0 && (r += ('' !== r ? ' ' : '') + t[o]), '' === r ? 'pagh' : r;
        }(e);
        switch (a) {
        case 'ss':
          return r + ' lup';
        case 'mm':
          return r + ' tup';
        case 'hh':
          return r + ' rep';
        case 'dd':
          return r + ' jaj';
        case 'MM':
          return r + ' jar';
        case 'yy':
          return r + ' DIS';
        }
      }
      return e.defineLocale('tlh', {
        months: 'tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019'.split('_'),
        monthsShort: 'jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019'.split('_'),
        monthsParseExact: !0,
        weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
          sameDay: '[DaHjaj] LT',
          nextDay: '[wa\u2019leS] LT',
          nextWeek: 'LLL',
          lastDay: '[wa\u2019Hu\u2019] LT',
          lastWeek: 'LLL',
          sameElse: 'L'
        },
        relativeTime: {
          future: function (e) {
            var t = e;
            return t = -1 !== e.indexOf('jaj') ? t.slice(0, -3) + 'leS' : -1 !== e.indexOf('jar') ? t.slice(0, -3) + 'waQ' : -1 !== e.indexOf('DIS') ? t.slice(0, -3) + 'nem' : t + ' pIq';
          },
          past: function (e) {
            var t = e;
            return t = -1 !== e.indexOf('jaj') ? t.slice(0, -3) + 'Hu\u2019' : -1 !== e.indexOf('jar') ? t.slice(0, -3) + 'wen' : -1 !== e.indexOf('DIS') ? t.slice(0, -3) + 'ben' : t + ' ret';
          },
          s: 'puS lup',
          ss: n,
          m: 'wa\u2019 tup',
          mm: n,
          h: 'wa\u2019 rep',
          hh: n,
          d: 'wa\u2019 jaj',
          dd: n,
          M: 'wa\u2019 jar',
          MM: n,
          y: 'wa\u2019 DIS',
          yy: n
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
          dow: 1,
          doy: 4
        }
      });
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  },
  zx6S: function (e, t, n) {
    var a, o, r, s;
    function d(e) {
      return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
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
            'sekunda',
            'sekunde',
            'sekundi'
          ],
          m: [
            'jedan minut',
            'jedne minute'
          ],
          mm: [
            'minut',
            'minute',
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
            'mesec',
            'meseca',
            'meseci'
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
        translate: function (e, n, a) {
          var o = t.words[a];
          return 1 === a.length ? n ? o[0] : o[1] : e + ' ' + t.correctGrammaticalCase(e, o);
        }
      };
      return e.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: !0,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
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
              return '[u] [nedelju] [u] LT';
            case 3:
              return '[u] [sredu] [u] LT';
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
              '[prošle] [nedelje] [u] LT',
              '[prošlog] [ponedeljka] [u] LT',
              '[prošlog] [utorka] [u] LT',
              '[prošle] [srede] [u] LT',
              '[prošlog] [četvrtka] [u] LT',
              '[prošlog] [petka] [u] LT',
              '[prošle] [subote] [u] LT'
            ][this.day()];
          },
          sameElse: 'L'
        },
        relativeTime: {
          future: 'za %s',
          past: 'pre %s',
          s: 'nekoliko sekundi',
          ss: t.translate,
          m: t.translate,
          mm: t.translate,
          h: t.translate,
          hh: t.translate,
          d: 'dan',
          dd: t.translate,
          M: 'mesec',
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
    }, 'object' === d(t) && void 0 !== e ? s(n('wd/R')) : (o = [n('wd/R')], void 0 === (r = 'function' == typeof (a = s) ? a.apply(t, o) : a) || (e.exports = r));
  }
}]);