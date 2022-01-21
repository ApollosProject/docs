"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {



const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }, s.apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phosphor-react */ "./node_modules/phosphor-react/dist/icons/GitBranch.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! phosphor-react */ "./node_modules/phosphor-react/dist/icons/Code.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phosphor-react */ "./node_modules/phosphor-react/dist/icons/ChalkboardTeacher.esm.js");
/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phosphor-react */ "./node_modules/phosphor-react/dist/icons/RocketLaunch.esm.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");





const IndexPage = () => {
  const features = [{
    name: 'Open source & open license',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    name: 'Developer-supported community',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    name: 'Lead with collaboration and strategy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: phosphor_react__WEBPACK_IMPORTED_MODULE_4__["default"]
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", {
    rel: "stylesheet",
    href: "https://rsms.me/inter/inter.css"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pipeline-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pipeline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pipeline-green-background rounded-lg shadow-xl overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "lg:self-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-6 max-w-3xl text-base text-base-secondary uppercase"
  }, "a Church-centric data pipeline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "text-3xl font-extrabold text-white py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "block"
  }, "Syncs with your existing services and data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-4 text-lg leading-6 text-dark-secondary"
  }, "Apollos syncs data with the other services you already depend on. Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex gap-2 items-center text-base font-medium text-base-secondary hover:text-base-secondary-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(phosphor_react__WEBPACK_IMPORTED_MODULE_5__["default"], null), "Explore integrations"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__.StaticImage, {
    className: "transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20",
    src: "../images/pipeline.png",
    alt: "Pipeline Screenshot",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1114902875.json */ "./.cache/caches/gatsby-plugin-image/1114902875.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-6 max-w-3xl text-base text-base-secondary uppercase"
  }, "Our Blueprint"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-5xl font-extrabold tracking-tight text-black"
  }, "For ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, "the")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-5xl font-extrabold tracking-tight text-black"
  }, "Kingdom.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "sr-only"
  }, "For the Kingdom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", {
    className: "space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"
  }, features.map(feature => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: feature.name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex items-center justify-center h-12 w-12 rounded-full blueprint-icon-bg text-base-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(feature.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-5 text-lg leading-6 font-medium text-gray-900"
  }, feature.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-2 text-base text-gray-500"
  }, feature.description)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex items-center flex-col px-4 py-16 lg:py-20 space-y-6 max-w-7xl mx-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "text-4xl leading-9 font-extrabold text-white"
  }, "Lorem ipsum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-center leading-6"
  }, "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "text-base-secondary inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto"
  }, "Get started")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js":
/*!********************************************************************************!*\
  !*** ./node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectWithoutPropertiesLoose": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}


//# sourceMappingURL=_rollupPluginBabelHelpers.js.map


/***/ }),

/***/ "./node_modules/phosphor-react/dist/icons/ChalkboardTeacher.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/phosphor-react/dist/icons/ChalkboardTeacher.esm.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/index.esm.js */ "./node_modules/phosphor-react/dist/lib/index.esm.js");
/* harmony import */ var _lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/IconBase.esm.js */ "./node_modules/phosphor-react/dist/lib/IconBase.esm.js");




/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "104",
    cy: "148",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "188 172 188 84 68 84",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M149.3,208H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H58.7a48.1,48.1,0,0,1,90.6,0Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "104",
    cy: "144",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M72,144a32,32,0,1,1,32,32h88V80H64v64Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M53.4,208a56,56,0,0,1,101.2,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176 176 192 176 192 80 64 80 64 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H53.4a7.9,7.9,0,0,0,7.2-4.6,48.1,48.1,0,0,1,86.8,0,7.9,7.9,0,0,0,7.2,4.6H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,168a32,32,0,1,1,32-32A32.1,32.1,0,0,1,104,168Zm112,32H159.4a63.7,63.7,0,0,0-13.1-16H192a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v96a8,8,0,0,0,6,7.7A64.2,64.2,0,0,0,48.6,200H40V56H216Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "104",
    cy: "144",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M53.4,208a56,56,0,0,1,101.2,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176 176 192 176 192 80 64 80 64 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "104",
    cy: "144",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M53.4,208a56,56,0,0,1,101.2,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176 176 192 176 192 80 64 80 64 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "104",
    cy: "144",
    r: "32",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M53.4,208a56,56,0,0,1,101.2,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "176 176 192 176 192 80 64 80 64 96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath = function renderPath(weight, color) {
  return (0,_lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__.renderPathForWeight)(weight, color, pathsByWeight);
};

var ChalkboardTeacher = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
ChalkboardTeacher.displayName = "ChalkboardTeacher";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChalkboardTeacher);
//# sourceMappingURL=ChalkboardTeacher.esm.js.map


/***/ }),

/***/ "./node_modules/phosphor-react/dist/icons/Code.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/phosphor-react/dist/icons/Code.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/index.esm.js */ "./node_modules/phosphor-react/dist/lib/index.esm.js");
/* harmony import */ var _lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/IconBase.esm.js */ "./node_modules/phosphor-react/dist/lib/IconBase.esm.js");




/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M70.1,82.9a7.8,7.8,0,0,0-11.2-1l-48,40a7.9,7.9,0,0,0,0,12.2l48,40a7.8,7.8,0,0,0,11.2-1,7.8,7.8,0,0,0-1-11.2L28.5,128,69.1,94.1A7.8,7.8,0,0,0,70.1,82.9Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M245.1,121.9l-48-40a8,8,0,0,0-10.2,12.2L227.5,128l-40.6,33.9A8,8,0,0,0,192,176a7.7,7.7,0,0,0,5.1-1.9l48-40a7.9,7.9,0,0,0,0-12.2Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M162.7,32.5a7.9,7.9,0,0,0-10.2,4.8l-64,176a7.9,7.9,0,0,0,4.8,10.2,8.6,8.6,0,0,0,2.7.5,7.9,7.9,0,0,0,7.5-5.3l64-176A7.9,7.9,0,0,0,162.7,32.5Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "64 88 16 128 64 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "192 88 240 128 192 168",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "160",
    y1: "40",
    x2: "96",
    y2: "216",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath = function renderPath(weight, color) {
  return (0,_lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__.renderPathForWeight)(weight, color, pathsByWeight);
};

var Code = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
Code.displayName = "Code";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);
//# sourceMappingURL=Code.esm.js.map


/***/ }),

/***/ "./node_modules/phosphor-react/dist/icons/GitBranch.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/phosphor-react/dist/icons/GitBranch.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/index.esm.js */ "./node_modules/phosphor-react/dist/lib/index.esm.js");
/* harmony import */ var _lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/IconBase.esm.js */ "./node_modules/phosphor-react/dist/lib/IconBase.esm.js");




/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M68,160v-8a23.9,23.9,0,0,1,24-24h72a23.9,23.9,0,0,0,24-24V96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "68",
    y1: "96",
    x2: "68",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "188",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "188",
    cy: "68",
    r: "28",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M68,160v-8a23.9,23.9,0,0,1,24-24h72a24,24,0,0,0,24-24V96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "68",
    y1: "96",
    x2: "68",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "188",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M224,68a36,36,0,1,0-44,35.1v.9a16,16,0,0,1-16,16H92a32.2,32.2,0,0,0-16,4.3V103.1a36,36,0,1,0-16,0v49.8a36,36,0,1,0,16,0V152a16,16,0,0,1,16-16h72a32.1,32.1,0,0,0,32-32v-.9A36.1,36.1,0,0,0,224,68ZM48,68A20,20,0,1,1,68,88,20.1,20.1,0,0,1,48,68ZM88,188a20,20,0,1,1-20-20A20.1,20.1,0,0,1,88,188Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M68,160v-8a23.9,23.9,0,0,1,24-24h72a23.9,23.9,0,0,0,24-24V96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "68",
    y1: "96",
    x2: "68",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "188",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M68,160v-8a23.9,23.9,0,0,1,24-24h72a23.9,23.9,0,0,0,24-24V96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "68",
    y1: "96",
    x2: "68",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "188",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "188",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "188",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "68",
    cy: "68",
    r: "28",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M68,160v-8a23.9,23.9,0,0,1,24-24h72a23.9,23.9,0,0,0,24-24V96",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "68",
    y1: "96",
    x2: "68",
    y2: "160",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath = function renderPath(weight, color) {
  return (0,_lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__.renderPathForWeight)(weight, color, pathsByWeight);
};

var GitBranch = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
GitBranch.displayName = "GitBranch";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GitBranch);
//# sourceMappingURL=GitBranch.esm.js.map


/***/ }),

/***/ "./node_modules/phosphor-react/dist/icons/RocketLaunch.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/phosphor-react/dist/icons/RocketLaunch.esm.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/index.esm.js */ "./node_modules/phosphor-react/dist/lib/index.esm.js");
/* harmony import */ var _lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/IconBase.esm.js */ "./node_modules/phosphor-react/dist/lib/IconBase.esm.js");




/* GENERATED FILE */
var pathsByWeight = /*#__PURE__*/new Map();
pathsByWeight.set("bold", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M195.9,105.4,128,173.3,82.7,128l67.9-67.9C176.3,34.4,202,34.7,213,36.3a7.8,7.8,0,0,1,6.7,6.7C221.3,54,221.6,79.7,195.9,105.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M184.6,116.7v64.6a8,8,0,0,1-2.4,5.6l-32.3,32.4a8,8,0,0,1-13.5-4.1L128,173.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M139.3,71.4H74.7a8,8,0,0,0-5.6,2.4L36.7,106.1a8,8,0,0,0,4.1,13.5L82.7,128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M90.6,192.4c-15.1,26.1-53.1,26.1-53.1,26.1s0-38,26.1-53.1",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M94.1,184.6c-11.4,33.9-56.6,33.9-56.6,33.9s0-45.2,33.9-56.6Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M184.6,116.7v64.6a8,8,0,0,1-2.4,5.6l-32.3,32.4a8,8,0,0,1-13.5-4.1L128,173.3Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M139.3,71.4H74.7a8,8,0,0,0-5.6,2.4L36.7,106.1a8,8,0,0,0,4.1,13.5L82.7,128Z",
    opacity: "0.2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M94.1,184.6c-11.4,33.9-56.6,33.9-56.6,33.9s0-45.2,33.9-56.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M195.9,105.4,128,173.3,82.7,128l67.9-67.9C176.3,34.4,202,34.7,213,36.3a7.8,7.8,0,0,1,6.7,6.7C221.3,54,221.6,79.7,195.9,105.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M184.6,116.7v64.6a8,8,0,0,1-2.4,5.6l-32.3,32.4a8,8,0,0,1-13.5-4.1L128,173.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M139.3,71.4H74.7a8,8,0,0,0-5.6,2.4L36.7,106.1a8,8,0,0,0,4.1,13.5L82.7,128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M96.6,177a7.9,7.9,0,0,0-10.1,5c-6.6,19.7-27.9,25.8-40.2,27.7,1.9-12.3,8-33.6,27.7-40.2a8,8,0,1,0-5.1-15.1c-16.4,5.4-28.4,18.4-34.8,37.5a91.8,91.8,0,0,0-4.6,26.6,8,8,0,0,0,8,8,91.8,91.8,0,0,0,26.6-4.6c19.1-6.4,32.1-18.4,37.5-34.8A7.9,7.9,0,0,0,96.6,177Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M227.6,41.8a15.7,15.7,0,0,0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2,26.1l-9,8.9H74.7a16.2,16.2,0,0,0-11.3,4.7L31.1,100.5a15.9,15.9,0,0,0-4,15.9,16,16,0,0,0,12.2,11.1l39.5,7.9,41.8,41.8,7.9,39.5a16,16,0,0,0,11.1,12.2,14.7,14.7,0,0,0,4.6.7,15.6,15.6,0,0,0,11.3-4.7l32.4-32.3a16.2,16.2,0,0,0,4.7-11.3V120l8.9-9C230.1,82.4,229.3,53.1,227.6,41.8ZM74.7,79.4H120L80.1,119.3l-37.7-7.5ZM176.6,181.3l-32.4,32.3-7.5-37.7L176.6,136Z"
  }));
});
pathsByWeight.set("light", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M94.1,184.6c-11.4,33.9-56.6,33.9-56.6,33.9s0-45.2,33.9-56.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M195.9,105.4,128,173.3,82.7,128l67.9-67.9C176.3,34.4,202,34.7,213,36.3a7.8,7.8,0,0,1,6.7,6.7C221.3,54,221.6,79.7,195.9,105.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M184.6,116.7v64.6a8,8,0,0,1-2.4,5.6l-32.3,32.4a8,8,0,0,1-13.5-4.1L128,173.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M139.3,71.4H74.7a8,8,0,0,0-5.6,2.4L36.7,106.1a8,8,0,0,0,4.1,13.5L82.7,128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M94.1,184.6c-11.4,33.9-56.6,33.9-56.6,33.9s0-45.2,33.9-56.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M195.9,105.4,128,173.3,82.7,128l67.9-67.9C176.3,34.4,202,34.7,213,36.3a7.8,7.8,0,0,1,6.7,6.7C221.3,54,221.6,79.7,195.9,105.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M184.6,116.7v64.6a8,8,0,0,1-2.4,5.6l-32.3,32.4a8,8,0,0,1-13.5-4.1L128,173.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M139.3,71.4H74.7a8,8,0,0,0-5.6,2.4L36.7,106.1a8,8,0,0,0,4.1,13.5L82.7,128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function (color) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M94.1,184.6c-11.4,33.9-56.6,33.9-56.6,33.9s0-45.2,33.9-56.6",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M195.9,105.4,128,173.3,82.7,128l67.9-67.9C176.3,34.4,202,34.7,213,36.3a7.8,7.8,0,0,1,6.7,6.7C221.3,54,221.6,79.7,195.9,105.4Z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M184.6,116.7v64.6a8,8,0,0,1-2.4,5.6l-32.3,32.4a8,8,0,0,1-13.5-4.1L128,173.3",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M139.3,71.4H74.7a8,8,0,0,0-5.6,2.4L36.7,106.1a8,8,0,0,0,4.1,13.5L82.7,128",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});

var renderPath = function renderPath(weight, color) {
  return (0,_lib_index_esm_js__WEBPACK_IMPORTED_MODULE_1__.renderPathForWeight)(weight, color, pathsByWeight);
};

var RocketLaunch = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_lib_IconBase_esm_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    ref: ref
  }, props, {
    renderPath: renderPath
  }));
});
RocketLaunch.displayName = "RocketLaunch";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RocketLaunch);
//# sourceMappingURL=RocketLaunch.esm.js.map


/***/ }),

/***/ "./node_modules/phosphor-react/dist/lib/IconBase.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/phosphor-react/dist/lib/IconBase.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.esm.js */ "./node_modules/phosphor-react/dist/lib/index.esm.js");
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "./node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js");




var IconBase = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var color = props.color,
      size = props.size,
      weight = props.weight,
      mirrored = props.mirrored,
      children = props.children,
      renderPath = props.renderPath,
      restProps = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(props, ["color", "size", "weight", "mirrored", "children", "renderPath"]);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_index_esm_js__WEBPACK_IMPORTED_MODULE_2__.IconContext),
      _useContext$color = _useContext.color,
      contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color,
      contextSize = _useContext.size,
      _useContext$weight = _useContext.weight,
      contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight,
      _useContext$mirrored = _useContext.mirrored,
      contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored,
      restContext = (0,_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_1__.objectWithoutPropertiesLoose)(_useContext, ["color", "size", "weight", "mirrored"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : undefined
  }, restContext, restProps), children, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconBase);
//# sourceMappingURL=IconBase.esm.js.map


/***/ }),

/***/ "./node_modules/phosphor-react/dist/lib/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/phosphor-react/dist/lib/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconContext": () => (/* binding */ IconContext),
/* harmony export */   "renderPathForWeight": () => (/* binding */ renderPathForWeight)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var IconContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight(weight, color, pathsByWeight) {
  var path = pathsByWeight.get(weight);
  if (!!path) return path(color);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1114902875.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1114902875.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#180838","images":{"fallback":{"src":"/static/fe1345102f55d4965e243b9a367bde1b/2c4af/pipeline.png","srcSet":"/static/fe1345102f55d4965e243b9a367bde1b/4f91d/pipeline.png 177w,\\n/static/fe1345102f55d4965e243b9a367bde1b/c5935/pipeline.png 353w,\\n/static/fe1345102f55d4965e243b9a367bde1b/2c4af/pipeline.png 706w","sizes":"(min-width: 706px) 706px, 100vw"},"sources":[{"srcSet":"/static/fe1345102f55d4965e243b9a367bde1b/c8d2a/pipeline.webp 177w,\\n/static/fe1345102f55d4965e243b9a367bde1b/b7ca7/pipeline.webp 353w,\\n/static/fe1345102f55d4965e243b9a367bde1b/5f1f5/pipeline.webp 706w","type":"image/webp","sizes":"(min-width: 706px) 706px, 100vw"}]},"width":706,"height":230.99999999999997}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map