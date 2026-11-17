import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
//#region node_modules/laravel-vite-plugin/inertia-helpers/index.js
async function resolvePageComponent(path, pages) {
	for (const p of Array.isArray(path) ? path : [path]) {
		const page = pages[p];
		if (typeof page === "undefined") continue;
		return typeof page === "function" ? page() : page;
	}
	throw new Error(`Page not found: ${path}`);
}
//#endregion
//#region vendor/tightenco/ziggy/dist/index.js
var e = String.prototype.replace;
var t = /%20/g;
var n = {
	RFC1738: `RFC1738`,
	RFC3986: `RFC3986`
};
var r = {
	RFC1738: function(n) {
		return e.call(n, t, `+`);
	},
	RFC3986: function(e) {
		return String(e);
	}
};
var i = n.RFC1738;
n.RFC3986;
var a = n.RFC3986;
var o = Object.prototype.hasOwnProperty;
var s = Array.isArray;
var c = /* @__PURE__ */ new WeakMap();
var l = function(e, t) {
	return c.set(e, t), e;
};
function u(e) {
	return c.has(e);
}
var d = function(e) {
	return c.get(e);
};
var f = function(e, t) {
	c.set(e, t);
};
var p = (function() {
	let e = [];
	for (let t = 0; t < 256; ++t) e.push(`%` + ((t < 16 ? `0` : ``) + t.toString(16)).toUpperCase());
	return e;
})();
var m = function(e) {
	for (; e.length > 1;) {
		let t = e.pop(), n = t.obj[t.prop];
		if (s(n)) {
			let e = [];
			for (let t = 0; t < n.length; ++t) n[t] !== void 0 && e.push(n[t]);
			t.obj[t.prop] = e;
		}
	}
};
var h$1 = function(e, t) {
	let n = t && t.plainObjects ? Object.create(null) : {};
	for (let t = 0; t < e.length; ++t) e[t] !== void 0 && (n[t] = e[t]);
	return n;
};
var g = function e(t, n, r) {
	if (!n) return t;
	if (typeof n != `object`) {
		if (s(t)) t.push(n);
		else if (t && typeof t == `object`) if (u(t)) {
			var i = d(t) + 1;
			t[i] = n, f(t, i);
		} else (r && (r.plainObjects || r.allowPrototypes) || !o.call(Object.prototype, n)) && (t[n] = !0);
		else return [t, n];
		return t;
	}
	if (!t || typeof t != `object`) {
		if (u(n)) {
			for (var a = Object.keys(n), c = r && r.plainObjects ? {
				__proto__: null,
				0: t
			} : { 0: t }, p = 0; p < a.length; p++) {
				var m = parseInt(a[p], 10);
				c[m + 1] = n[a[p]];
			}
			return l(c, d(n) + 1);
		}
		return [t].concat(n);
	}
	let g = t;
	return s(t) && !s(n) && (g = h$1(t, r)), s(t) && s(n) ? (n.forEach(function(n, i) {
		if (o.call(t, i)) {
			let a = t[i];
			a && typeof a == `object` && n && typeof n == `object` ? t[i] = e(a, n, r) : t.push(n);
		} else t[i] = n;
	}), t) : Object.keys(n).reduce(function(t, i) {
		let a = n[i];
		if (o.call(t, i) && (a = e(t[i], a, r)), i === `__proto__` ? Object.defineProperty(t, i, {
			configurable: !0,
			enumerable: !0,
			value: a,
			writable: !0
		}) : t[i] = a, u(n) && !u(t) && l(t, d(n)), u(t)) {
			let e = parseInt(i, 10);
			String(e) === i && e >= 0 && e > d(t) && f(t, e);
		}
		return t;
	}, g);
};
var _ = function(e) {
	let t = e.replace(/\+/g, ` `);
	try {
		return decodeURIComponent(t);
	} catch (e) {
		return t;
	}
};
var v = 1024;
var y = function(e, t, n, r) {
	if (e.length === 0) return e;
	let a = e;
	typeof e == `symbol` ? a = Symbol.prototype.toString.call(e) : typeof e != `string` && (a = String(e));
	let o = ``;
	for (let e = 0; e < a.length; e += v) {
		let t = a.length >= v ? a.slice(e, e + v) : a;
		if (e + v < a.length) {
			let n = t.charCodeAt(t.length - 1);
			n >= 55296 && n <= 56319 && (t = t.slice(0, -1), --e);
		}
		let n = [];
		for (let e = 0; e < t.length; ++e) {
			let a = t.charCodeAt(e);
			a === 45 || a === 46 || a === 95 || a === 126 || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || r === i && (a === 40 || a === 41) ? n[n.length] = t.charAt(e) : a < 128 ? n[n.length] = p[a] : a < 2048 ? n[n.length] = p[192 | a >> 6] + p[128 | a & 63] : a < 55296 || a >= 57344 ? n[n.length] = p[224 | a >> 12] + p[128 | a >> 6 & 63] + p[128 | a & 63] : (e += 1, a = 65536 + ((a & 1023) << 10 | t.charCodeAt(e) & 1023), n[n.length] = p[240 | a >> 18] + p[128 | a >> 12 & 63] + p[128 | a >> 6 & 63] + p[128 | a & 63]);
		}
		o += n.join(``);
	}
	return o;
};
var b = function(e) {
	let t = [{
		obj: { o: e },
		prop: `o`
	}], n = /* @__PURE__ */ new WeakMap();
	for (let e = 0; e < t.length; ++e) {
		let r = t[e], i = r.obj[r.prop], a = Object.keys(i);
		for (let e = 0; e < a.length; ++e) {
			let r = a[e], o = i[r];
			typeof o == `object` && o && !n.has(o) && (t.push({
				obj: i,
				prop: r
			}), n.set(o, !0));
		}
	}
	return m(t), e;
};
var x = function(e) {
	return Object.prototype.toString.call(e) === `[object RegExp]`;
};
var S = function(e) {
	return !e || typeof e != `object` ? !1 : !!(e.constructor && typeof e.constructor.isBuffer == `function` && e.constructor.isBuffer(e));
};
var C = function(e, t, n, r) {
	if (u(e)) {
		var i = d(e) + 1;
		return e[i] = t, f(e, i), e;
	}
	var a = [].concat(e, t);
	return a.length > n ? l(h$1(a, { plainObjects: r }), a.length - 1) : a;
};
var w = function(e, t) {
	if (s(e)) {
		let n = [];
		for (let r = 0; r < e.length; r += 1) n.push(t(e[r]));
		return n;
	}
	return t(e);
};
var T = Object.prototype.hasOwnProperty;
var E = {
	brackets: function(e) {
		return e + `[]`;
	},
	comma: `comma`,
	indices: function(e, t) {
		return e + `[` + t + `]`;
	},
	repeat: function(e) {
		return e;
	}
};
var D = Array.isArray;
var O = Array.prototype.push;
var k = function(e, t) {
	O.apply(e, D(t) ? t : [t]);
};
var A = Date.prototype.toISOString;
var j = a;
var M = {
	addQueryPrefix: !1,
	allowDots: !1,
	allowEmptyArrays: !1,
	arrayFormat: `indices`,
	delimiter: `&`,
	encode: !0,
	encodeDotInKeys: !1,
	encoder: y,
	encodeValuesOnly: !1,
	format: j,
	formatter: r[j],
	indices: !1,
	serializeDate: function(e) {
		return A.call(e);
	},
	skipNulls: !1,
	strictNullHandling: !1
};
var N = function(e) {
	return typeof e == `string` || typeof e == `number` || typeof e == `boolean` || typeof e == `symbol` || typeof e == `bigint`;
};
var P = {};
var F = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
	let _ = e, v = g, y = 0, b = !1;
	for (; (v = v.get(P)) !== void 0 && !b;) {
		let t = v.get(e);
		if (y += 1, t !== void 0) {
			if (t === y) throw RangeError(`Cyclic object value`);
			b = !0;
		}
		v.get(P) === void 0 && (y = 0);
	}
	if (typeof l == `function` ? _ = l(t, _) : _ instanceof Date ? _ = f(_) : n === `comma` && D(_) && (_ = w(_, function(e) {
		return e instanceof Date ? f(e) : e;
	})), _ === null) {
		if (a) return c && !h ? c(t, M.encoder, `key`, p) : t;
		_ = ``;
	}
	if (N(_) || S(_)) return c ? [m(h ? t : c(t, M.encoder, `key`, p)) + `=` + m(c(_, M.encoder, `value`, p))] : [m(t) + `=` + m(String(_))];
	let x = [];
	if (_ === void 0) return x;
	let C;
	if (n === `comma` && D(_)) h && c && (_ = w(_, function(e) {
		return e == null ? e : c(e);
	})), C = [{ value: _.length > 0 ? _.join(`,`) || null : void 0 }];
	else if (D(l)) C = l;
	else {
		let e = Object.keys(_);
		C = u ? e.sort(u) : e;
	}
	let T = s ? t.replace(/\./g, `%2E`) : t, E = r && D(_) && _.length === 1 ? T + `[]` : T;
	if (i && D(_) && _.length === 0) return E + `[]`;
	for (let t = 0; t < C.length; ++t) {
		let v = C[t], b = typeof v == `object` && v.value !== void 0 ? v.value : _[v];
		if (o && b === null) continue;
		let S = d && s ? v.replace(/\./g, `%2E`) : v, w = D(_) ? typeof n == `function` ? n(E, S) : E : E + (d ? `.` + S : `[` + S + `]`);
		g.set(e, y);
		let T = /* @__PURE__ */ new WeakMap();
		T.set(P, g), k(x, F(b, w, n, r, i, a, o, s, n === `comma` && h && D(_) ? null : c, l, u, d, f, p, m, h, T));
	}
	return x;
};
var I = function(e) {
	if (!e) return M;
	if (e.allowEmptyArrays !== void 0 && typeof e.allowEmptyArrays != `boolean`) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
	if (e.encodeDotInKeys !== void 0 && typeof e.encodeDotInKeys != `boolean`) throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
	if (e.encoder !== null && e.encoder !== void 0 && typeof e.encoder != `function`) throw TypeError(`Encoder has to be a function.`);
	let t = a;
	if (e.format !== void 0) {
		if (!T.call(r, e.format)) throw TypeError(`Unknown format option provided.`);
		t = e.format;
	}
	let n = r[t], i = M.filter;
	(typeof e.filter == `function` || D(e.filter)) && (i = e.filter);
	let o;
	if (o = e.arrayFormat in E ? e.arrayFormat : `indices` in e ? e.indices ? `indices` : `repeat` : M.arrayFormat, `commaRoundTrip` in e && typeof e.commaRoundTrip != `boolean`) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
	let s = e.allowDots === void 0 ? e.encodeDotInKeys === !0 || M.allowDots : !!e.allowDots;
	return {
		addQueryPrefix: typeof e.addQueryPrefix == `boolean` ? e.addQueryPrefix : M.addQueryPrefix,
		allowDots: s,
		allowEmptyArrays: typeof e.allowEmptyArrays == `boolean` ? !!e.allowEmptyArrays : M.allowEmptyArrays,
		arrayFormat: o,
		commaRoundTrip: e.commaRoundTrip,
		delimiter: e.delimiter === void 0 ? M.delimiter : e.delimiter,
		encode: typeof e.encode == `boolean` ? e.encode : M.encode,
		encodeDotInKeys: typeof e.encodeDotInKeys == `boolean` ? e.encodeDotInKeys : M.encodeDotInKeys,
		encoder: typeof e.encoder == `function` ? e.encoder : M.encoder,
		encodeValuesOnly: typeof e.encodeValuesOnly == `boolean` ? e.encodeValuesOnly : M.encodeValuesOnly,
		filter: i,
		format: t,
		formatter: n,
		serializeDate: typeof e.serializeDate == `function` ? e.serializeDate : M.serializeDate,
		skipNulls: typeof e.skipNulls == `boolean` ? e.skipNulls : M.skipNulls,
		sort: typeof e.sort == `function` ? e.sort : null,
		strictNullHandling: typeof e.strictNullHandling == `boolean` ? e.strictNullHandling : M.strictNullHandling
	};
};
function L(e, t) {
	let n = e, r = I(t), i, a;
	typeof r.filter == `function` ? (a = r.filter, n = a(``, n)) : D(r.filter) && (a = r.filter, i = a);
	let o = [];
	if (typeof n != `object` || !n) return ``;
	let s = E[r.arrayFormat], c = s === `comma` && r.commaRoundTrip;
	i || (i = Object.keys(n)), r.sort && i.sort(r.sort);
	let l = /* @__PURE__ */ new WeakMap();
	for (let e = 0; e < i.length; ++e) {
		let t = i[e];
		r.skipNulls && n[t] === null || k(o, F(n[t], t, s, c, r.allowEmptyArrays, r.strictNullHandling, r.skipNulls, r.encodeDotInKeys, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, l));
	}
	let u = o.join(r.delimiter), d = r.addQueryPrefix === !0 ? `?` : ``;
	return u.length > 0 ? d + u : ``;
}
var R = Object.prototype.hasOwnProperty;
var z = Array.isArray;
var B = {
	allowDots: !1,
	allowEmptyArrays: !1,
	allowPrototypes: !1,
	allowSparse: !1,
	arrayLimit: 20,
	comma: !1,
	decodeDotInKeys: !1,
	decoder: _,
	delimiter: `&`,
	depth: 5,
	duplicates: `combine`,
	ignoreQueryPrefix: !1,
	parameterLimit: 1e3,
	parseArrays: !0,
	plainObjects: !1,
	strictNullHandling: !1
};
var V = function(e, t) {
	return e && typeof e == `string` && t.comma && e.indexOf(`,`) > -1 ? e.split(`,`) : e;
};
var H = function(e, t) {
	let n = { __proto__: null }, r = t.ignoreQueryPrefix ? e.replace(/^\?/, ``) : e, i = t.parameterLimit === Infinity ? void 0 : t.parameterLimit, a = r.split(t.delimiter, i), o = 0;
	for (; o < a.length; ++o) {
		let e = a[o], r = e.indexOf(`]=`), i = r === -1 ? e.indexOf(`=`) : r + 1, s, c;
		i === -1 ? (s = t.decoder(e, B.decoder, `key`), c = t.strictNullHandling ? null : ``) : (s = t.decoder(e.slice(0, i), B.decoder, `key`), c = w(V(e.slice(i + 1), t), function(e) {
			return t.decoder(e, B.decoder, `value`);
		})), e.indexOf(`[]=`) > -1 && (c = z(c) ? [c] : c), t.comma && z(c) && c.length > t.arrayLimit && (c = C([], c, t.arrayLimit, t.plainObjects));
		let l = R.call(n, s);
		l && t.duplicates === `combine` ? n[s] = C(n[s], c, t.arrayLimit, t.plainObjects) : l && t.duplicates !== `last` || (n[s] = c);
	}
	return n;
};
var U = function(e, t, n, r) {
	let i = r ? t : V(t, n);
	for (let t = e.length - 1; t >= 0; --t) {
		let r, a = e[t];
		if (a === `[]` && n.parseArrays) r = u(i) ? i : n.allowEmptyArrays && (i === `` || n.strictNullHandling && i === null) ? [] : C([], i, n.arrayLimit, n.plainObjects);
		else {
			r = n.plainObjects ? Object.create(null) : {};
			let e = a.charAt(0) === `[` && a.charAt(a.length - 1) === `]` ? a.slice(1, -1) : a, t = n.decodeDotInKeys ? e.replace(/%2E/g, `.`) : e, o = parseInt(t, 10), s = !isNaN(o) && a !== t && String(o) === t && o >= 0 && n.parseArrays;
			!n.parseArrays && t === `` ? r = { 0: i } : s && o <= n.arrayLimit ? (r = [], r[o] = i) : s ? (r[o] = i, l(r, o)) : t !== `__proto__` && (r[t] = i);
		}
		i = r;
	}
	return i;
};
var W = function(e, t, n, r) {
	if (!e) return;
	let i = n.allowDots ? e.replace(/\.([^.[]+)/g, `[$1]`) : e, a = /(\[[^[\]]*])/, o = /(\[[^[\]]*])/g, s = n.depth > 0 && a.exec(i), c = s ? i.slice(0, s.index) : i, l = [];
	if (c) {
		if (!n.plainObjects && R.call(Object.prototype, c) && !n.allowPrototypes) return;
		l.push(c);
	}
	let u = 0;
	for (; n.depth > 0 && (s = o.exec(i)) !== null && u < n.depth;) {
		if (u += 1, !n.plainObjects && R.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
		l.push(s[1]);
	}
	return s && l.push(`[` + i.slice(s.index) + `]`), U(l, t, n, r);
};
var G = function(e) {
	if (!e) return B;
	if (e.allowEmptyArrays !== void 0 && typeof e.allowEmptyArrays != `boolean`) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
	if (e.decodeDotInKeys !== void 0 && typeof e.decodeDotInKeys != `boolean`) throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
	if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != `function`) throw TypeError(`Decoder has to be a function.`);
	let t = e.duplicates === void 0 ? B.duplicates : e.duplicates;
	if (t !== `combine` && t !== `first` && t !== `last`) throw TypeError(`The duplicates option must be either combine, first, or last`);
	return {
		allowDots: e.allowDots === void 0 ? e.decodeDotInKeys === !0 || B.allowDots : !!e.allowDots,
		allowEmptyArrays: typeof e.allowEmptyArrays == `boolean` ? !!e.allowEmptyArrays : B.allowEmptyArrays,
		allowPrototypes: typeof e.allowPrototypes == `boolean` ? e.allowPrototypes : B.allowPrototypes,
		allowSparse: typeof e.allowSparse == `boolean` ? e.allowSparse : B.allowSparse,
		arrayLimit: typeof e.arrayLimit == `number` ? e.arrayLimit : B.arrayLimit,
		comma: typeof e.comma == `boolean` ? e.comma : B.comma,
		decodeDotInKeys: typeof e.decodeDotInKeys == `boolean` ? e.decodeDotInKeys : B.decodeDotInKeys,
		decoder: typeof e.decoder == `function` ? e.decoder : B.decoder,
		delimiter: typeof e.delimiter == `string` || x(e.delimiter) ? e.delimiter : B.delimiter,
		depth: typeof e.depth == `number` || e.depth === !1 ? +e.depth : B.depth,
		duplicates: t,
		ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
		parameterLimit: typeof e.parameterLimit == `number` ? e.parameterLimit : B.parameterLimit,
		parseArrays: e.parseArrays !== !1,
		plainObjects: typeof e.plainObjects == `boolean` ? e.plainObjects : B.plainObjects,
		strictNullHandling: typeof e.strictNullHandling == `boolean` ? e.strictNullHandling : B.strictNullHandling
	};
};
function K(e, t) {
	let n = G(t);
	if (e === `` || e == null) return n.plainObjects ? Object.create(null) : {};
	let r = typeof e == `string` ? H(e, n) : e, i = n.plainObjects ? Object.create(null) : {}, a = Object.keys(r);
	for (let t = 0; t < a.length; ++t) {
		let o = a[t], s = W(o, r[o], n, typeof e == `string`);
		i = g(i, s, n);
	}
	return n.allowSparse === !0 ? i : b(i);
}
function q(e) {
	return e.replace(/(%[0-9a-f]{2})+/gi, (e) => {
		try {
			return decodeURIComponent(e);
		} catch (t) {
			return e;
		}
	});
}
var J = class {
	constructor(e, t, n) {
		var r, i;
		this.name = e, this.definition = t, this.bindings = (r = t.bindings) == null ? {} : r, this.wheres = (i = t.wheres) == null ? {} : i, this.config = n;
	}
	get template() {
		let e = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, ``);
		return e === `` ? `/` : e;
	}
	get origin() {
		return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ``}` : this.config.url : ``;
	}
	get parameterSegments() {
		var e, t;
		return (e = (t = this.template.match(/{[^}?]+\??}/g)) == null ? void 0 : t.map((e) => ({
			name: e.replace(/{|\??}/g, ``),
			required: !/\?}$/.test(e)
		}))) == null ? [] : e;
	}
	matchesUrl(e) {
		if (!this.definition.methods.includes(`GET`)) return !1;
		let t = this.template.replace(/[.*+$()[\]]/g, `\\$&`).replace(/(\/?){([^}?]*)(\??)}/g, (e, t, n, r) => {
			var i;
			let a = `(?<${n}>${((i = this.wheres[n]) == null ? void 0 : i.replace(/(^\^)|(\$$)/g, ``)) || `[^/?]+`})`;
			return r ? `(${t}${a})?` : `${t}${a}`;
		}).replace(/^\w+:\/\//, ``), [n, r] = e.replace(/^\w+:\/\//, ``).split(`?`), i = RegExp(`^${t}/?$`).exec(n);
		if (!i) try {
			i = RegExp(`^${t}/?$`).exec(decodeURI(n));
		} catch (e) {}
		if (i) {
			for (let e in i.groups) typeof i.groups[e] == `string` && (i.groups[e] = q(i.groups[e]));
			return {
				params: i.groups,
				query: K(r)
			};
		}
		return !1;
	}
	compile(e) {
		return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (t, n, r) => {
			var i;
			if (!r && [null, void 0].includes(e[n])) throw Error(`Ziggy error: '${n}' parameter is required for route '${this.name}'.`);
			if (this.wheres[n]) {
				var a;
				if (!RegExp(`^${r ? `(${this.wheres[n]})?` : this.wheres[n]}$`).test((a = e[n]) == null ? `` : a)) throw Error(`Ziggy error: '${n}' parameter '${e[n]}' does not match required format '${this.wheres[n]}' for route '${this.name}'.`);
			}
			return encodeURI((i = e[n]) == null ? `` : i).replace(/%7C/g, `|`).replace(/%25/g, `%`).replace(/\$/g, `%24`);
		}).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, `$1/`).replace(/\/+$/, ``) : this.template;
	}
};
function Y(e) {
	"@babel/helpers - typeof";
	return Y = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == `function` && e.constructor === Symbol && e !== Symbol.prototype ? `symbol` : typeof e;
	}, Y(e);
}
function X(e, t) {
	if (Y(e) != `object` || !e) return e;
	var n;
	if (typeof Symbol < `u` && (n = e[Symbol.toPrimitive]) !== void 0) {
		var r = n.call(e, t || `default`);
		if (Y(r) != `object`) return r;
		throw TypeError(`@@toPrimitive must return a primitive value.`);
	}
	return (t === `string` ? String : Number)(e);
}
function ee(e) {
	var t = X(e, `string`);
	return Y(t) == `symbol` ? t : t + ``;
}
function te(e, t, n) {
	return (t = ee(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function Z(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? Z(Object(n), !0).forEach(function(t) {
			te(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var ne = class extends String {
	constructor(e, t, n = !0, r) {
		var i;
		if (super(), this._config = r == null ? typeof Ziggy < `u` ? Ziggy : (i = globalThis) == null ? void 0 : i.Ziggy : r, !this._config && typeof document < `u` && document.getElementById(`ziggy-routes-json`) && (globalThis.Ziggy = JSON.parse(document.getElementById(`ziggy-routes-json`).textContent), this._config = globalThis.Ziggy), this._config = Q(Q({}, this._config), {}, { absolute: n }), e) {
			if (!this._config.routes[e]) throw Error(`Ziggy error: route '${e}' is not in the route list.`);
			this._route = new J(e, this._config.routes[e], this._config), this._params = this._parse(t);
		}
	}
	toString() {
		let e = Object.keys(this._params).filter((e) => !this._route.parameterSegments.some(({ name: t }) => t === e)).filter((e) => e !== `_query`).reduce((e, t) => Q(Q({}, e), {}, { [t]: this._params[t] }), {});
		return this._route.compile(this._params) + L(Q(Q({}, e), this._params._query), {
			addQueryPrefix: !0,
			arrayFormat: `indices`,
			encodeValuesOnly: !0,
			skipNulls: !0,
			encoder: (e, t) => typeof e == `boolean` ? Number(e) : t(e)
		});
	}
	_unresolve(e) {
		e ? this._config.absolute && e.startsWith(`/`) && (e = this._location().host + e) : e = this._currentUrl();
		let t = {}, [n, r] = Object.entries(this._config.routes).find(([n, r]) => t = new J(n, r, this._config).matchesUrl(e)) || [void 0, void 0];
		return Q(Q({ name: n }, t), {}, { route: r });
	}
	_currentUrl() {
		let { host: e, pathname: t, search: n } = this._location();
		return (this._config.absolute ? e + t : t.replace(this._config.url.replace(/^\w*:\/\/[^/]+/, ``), ``).replace(/^\/+/, `/`)) + n;
	}
	current(e, t) {
		let { name: n, params: r, query: i, route: a } = this._unresolve();
		if (!e) return n;
		let o = RegExp(`^${e.replace(/\./g, `\\.`).replace(/\*/g, `.*`)}$`).test(n);
		if ([null, void 0].includes(t) || !o) return o;
		let s = new J(n, a, this._config);
		t = this._parse(t, s);
		let c = Q(Q({}, r), i);
		if (Object.values(t).every((e) => !e) && !Object.values(c).some((e) => e !== void 0)) return !0;
		let l = (e, t) => Object.entries(e).every(([e, n]) => Array.isArray(n) && Array.isArray(t[e]) ? n.every((n) => t[e].includes(n) || t[e].includes(q(String(n)))) : typeof n == `object` && typeof t[e] == `object` && n !== null && t[e] !== null ? l(n, t[e]) : t[e] == n || t[e] == q(String(n)));
		return l(t, c);
	}
	_location() {
		var e, t, n;
		let { host: r = ``, pathname: i = ``, search: a = `` } = typeof window < `u` ? window.location : {}, o = typeof this._config.location == `string` ? new URL(this._config.location) : this._config.location;
		return {
			host: (e = o == null ? void 0 : o.host) == null ? r : e,
			pathname: (t = o == null ? void 0 : o.pathname) == null ? i : t,
			search: (n = o == null ? void 0 : o.search) == null ? a : n
		};
	}
	get params() {
		let { params: e, query: t } = this._unresolve();
		return Q(Q({}, e), t);
	}
	get routeParams() {
		return this._unresolve().params;
	}
	get queryParams() {
		return this._unresolve().query;
	}
	has(e) {
		return this._config.routes.hasOwnProperty(e);
	}
	_parse(e = {}, t = this._route) {
		e ??= {}, e = [`string`, `number`].includes(typeof e) ? [e] : e;
		let n = t.parameterSegments.filter(({ name: e }) => !this._config.defaults[e]);
		return Array.isArray(e) ? e = e.reduce((e, t, r) => n[r] ? Q(Q({}, e), {}, { [n[r].name]: t }) : typeof t == `object` ? Q(Q({}, e), t) : Q(Q({}, e), {}, { [t]: `` }), {}) : n.length === 1 && !e.hasOwnProperty(n[0].name) && (e.hasOwnProperty(Object.values(t.bindings)[0]) || e.hasOwnProperty(`id`)) && (e = { [n[0].name]: e }), Q(Q({}, this._defaults(t)), this._substituteBindings(e, t));
	}
	_defaults(e) {
		return e.parameterSegments.filter(({ name: e }) => this._config.defaults[e]).reduce((e, { name: t }, n) => Q(Q({}, e), {}, { [t]: this._config.defaults[t] }), {});
	}
	_substituteBindings(e, { bindings: t, parameterSegments: n }) {
		return Object.entries(e).reduce((e, [r, i]) => {
			if (!i || typeof i != `object` || Array.isArray(i) || !n.some(({ name: e }) => e === r)) return Q(Q({}, e), {}, { [r]: i });
			let a = i.hasOwnProperty(t[r]) ? t[r] : i.hasOwnProperty(`id`) ? `id` : void 0;
			if (a === void 0) throw Error(`Ziggy error: object passed as '${r}' parameter is missing route model binding key '${t[r]}'.`);
			return Q(Q({}, e), {}, { [r]: i[a] });
		}, {});
	}
	valueOf() {
		return this.toString();
	}
};
function $(e, t, n, r) {
	let i = new ne(e, t, n, r);
	return e ? i.toString() : i;
}
var re = { install(e, t) {
	let n = (e, n, r, i = t) => $(e, n, r, typeof i == `function` ? i() : i);
	parseInt(e.version) > 2 ? (e.config.globalProperties.route = n, e.provide(`route`, n)) : e.mixin({ methods: { route: n } });
} };
//#endregion
//#region resources/js/ssr.js
var appName = "Masjid Baitul Hikmah";
createServer((page) => createInertiaApp({
	page,
	render: renderToString,
	title: (title) => `${title} - ${appName}`,
	resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* #__PURE__ */ Object.assign({
		"./Pages/API/Index.vue": () => import("./assets/Index-BWyCv35v.js"),
		"./Pages/API/Partials/ApiTokenManager.vue": () => import("./assets/ApiTokenManager-B8ky59Tz.js"),
		"./Pages/Activities/Index.vue": () => import("./assets/Index-BYKuNOYk.js"),
		"./Pages/Announcements/Index.vue": () => import("./assets/Index-DDW7mJZu.js"),
		"./Pages/AssetCategory/Index.vue": () => import("./assets/Index-DwcUtm-B.js"),
		"./Pages/Assets/Index.vue": () => import("./assets/Index-DlKPOEHw.js"),
		"./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-D7ZLoMcD.js"),
		"./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-BLH70kYC.js"),
		"./Pages/Auth/Login.vue": () => import("./assets/Login-DDxPZb9o.js"),
		"./Pages/Auth/Register.vue": () => import("./assets/Register-50iYh_67.js"),
		"./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-DwW3_TQJ.js"),
		"./Pages/Auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge-D5Y-U0cQ.js"),
		"./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-CjAsWsoQ.js"),
		"./Pages/Cashbox/Index.vue": () => import("./assets/Index-CU4OnfkC.js"),
		"./Pages/Dashboard/Index.vue": () => import("./assets/Index-j4M4SZMr.js"),
		"./Pages/Dashboard.vue": () => import("./assets/Dashboard-Cfgb4aFb.js"),
		"./Pages/InvitationTemplates/Index.vue": () => import("./assets/Index-BZrX0m2b.js"),
		"./Pages/Invitations/Index.vue": () => import("./assets/Index-BMswzGt9.js"),
		"./Pages/Jamaah/Index.vue": () => import("./assets/Index-CyfEApTx.js"),
		"./Pages/Jumah/Index.vue": () => import("./assets/Index-e89wuKTE.js"),
		"./Pages/PrivacyPolicy.vue": () => import("./assets/PrivacyPolicy-DbUFEnO1.js"),
		"./Pages/Profile/Partials/DeleteUserForm.vue": () => import("./assets/DeleteUserForm-CS4AWKCE.js"),
		"./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": () => import("./assets/LogoutOtherBrowserSessionsForm-vX8SgWA_.js"),
		"./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": () => import("./assets/TwoFactorAuthenticationForm-BuwkWFxs.js"),
		"./Pages/Profile/Partials/UpdatePasswordForm.vue": () => import("./assets/UpdatePasswordForm-Cuk8vrRa.js"),
		"./Pages/Profile/Partials/UpdateProfileInformationForm.vue": () => import("./assets/UpdateProfileInformationForm-BhIr_SsG.js"),
		"./Pages/Profile/Show.vue": () => import("./assets/Show-C9CKQSyE.js"),
		"./Pages/Public/Announcements/Index.vue": () => import("./assets/Index-DdSn7vfC2.js"),
		"./Pages/Public/Announcements/Show.vue": () => import("./assets/Show-Co5xAcrc.js"),
		"./Pages/Public/Contact.vue": () => import("./assets/Contact-W7TJBKUR.js"),
		"./Pages/Public/Finance/Index.vue": () => import("./assets/Index-Cz3ZwwKZ.js"),
		"./Pages/Public/Home.vue": () => import("./assets/Home-BQM0rD3Q.js"),
		"./Pages/Public/Schedule/Jumat.vue": () => import("./assets/Jumat-5sps4l7q.js"),
		"./Pages/Public/Schedule/Pengajian.vue": () => import("./assets/Pengajian-BDf7EIcK.js"),
		"./Pages/Public/Schedule/Sholat.vue": () => import("./assets/Sholat-Br9SEV0o.js"),
		"./Pages/Reports/Activities.vue": () => import("./assets/Activities-DR7IbnDS.js"),
		"./Pages/Reports/Assets.vue": () => import("./assets/Assets-Dglgq01Q.js"),
		"./Pages/Reports/Finance.vue": () => import("./assets/Finance-DGGD9frL.js"),
		"./Pages/Reports/Index.vue": () => import("./assets/Index-C1baaW4H.js"),
		"./Pages/Reports/Jamaah.vue": () => import("./assets/Jamaah-CR2guo4y.js"),
		"./Pages/Reports/Ziswaf.vue": () => import("./assets/Ziswaf-3r0AsBUu.js"),
		"./Pages/Settings/Finance.vue": () => import("./assets/Finance-BCWEtz-z.js"),
		"./Pages/Settings/General.vue": () => import("./assets/General-CyuYoTGz.js"),
		"./Pages/Settings/Index.vue": () => import("./assets/Index-BuFq8zXs.js"),
		"./Pages/Settings/Masjid.vue": () => import("./assets/Masjid-30n6vnMk.js"),
		"./Pages/Settings/Permissions.vue": () => import("./assets/Permissions-CuQsonB4.js"),
		"./Pages/Settings/Roles.vue": () => import("./assets/Roles-BONA-uMh.js"),
		"./Pages/Settings/Social.vue": () => import("./assets/Social-tyOBJxwD.js"),
		"./Pages/Teams/Create.vue": () => import("./assets/Create-JG3OJFaf.js"),
		"./Pages/Teams/Partials/CreateTeamForm.vue": () => import("./assets/CreateTeamForm-DNN23d2K.js"),
		"./Pages/Teams/Partials/DeleteTeamForm.vue": () => import("./assets/DeleteTeamForm-DlXpfMB5.js"),
		"./Pages/Teams/Partials/TeamMemberManager.vue": () => import("./assets/TeamMemberManager-B79qEYNU.js"),
		"./Pages/Teams/Partials/UpdateTeamNameForm.vue": () => import("./assets/UpdateTeamNameForm-Cqlb0XjC.js"),
		"./Pages/Teams/Show.vue": () => import("./assets/Show-DSuYSJx8.js"),
		"./Pages/TermsOfService.vue": () => import("./assets/TermsOfService-BvLmNM9L.js"),
		"./Pages/Tpq/Students/Index.vue": () => import("./assets/Index-DrP1VKBX.js"),
		"./Pages/TransactionCategory/Index.vue": () => import("./assets/Index-CtqUmwii.js"),
		"./Pages/Transactions/Index.vue": () => import("./assets/Index-BEqFxW2q.js"),
		"./Pages/Users/Create.vue": () => import("./assets/Create-G1UhxSYq.js"),
		"./Pages/Users/Edit.vue": () => import("./assets/Edit-BP2OJYHK.js"),
		"./Pages/Users/Index.vue": () => import("./assets/Index-D8L7JqlE.js"),
		"./Pages/Welcome.vue": () => import("./assets/Welcome-DTR4CzNp.js"),
		"./Pages/Ziswaf/Donations/Index.vue": () => import("./assets/Index-7aw2Qndx.js"),
		"./Pages/Ziswaf/Mustahiq/Index.vue": () => import("./assets/Index-D4Y-6d7O.js"),
		"./Pages/ZiswafCategory/Index.vue": () => import("./assets/Index-Co1gxeAI.js")
	})),
	setup({ App, props, plugin }) {
		return createSSRApp({ render: () => h(App, props) }).use(plugin).use(re, {
			...page.props.ziggy,
			location: new URL(page.props.ziggy.location)
		});
	}
}));
//#endregion
export {};
