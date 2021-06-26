/*! For license information please see main.js.LICENSE.txt */
(() => {
  var t = {
      187: (t) => {
        "use strict";
        function e(t, e, o) {
          o = o || 2;
          var s,
            a,
            h,
            c,
            d,
            p,
            _,
            m = e && e.length,
            v = m ? e[0] * o : t.length,
            y = r(t, 0, v, o, !0),
            g = [];
          if (!y || y.next === y.prev) return g;
          if (
            (m &&
              (y = (function (t, e, n, o) {
                var s,
                  a,
                  h,
                  c = [];
                for (s = 0, a = e.length; s < a; s++)
                  (h = r(
                    t,
                    e[s] * o,
                    s < a - 1 ? e[s + 1] * o : t.length,
                    o,
                    !1
                  )) === h.next && (h.steiner = !0),
                    c.push(f(h));
                for (c.sort(u), s = 0; s < c.length; s++)
                  l(c[s], n), (n = i(n, n.next));
                return n;
              })(t, e, y, o)),
            t.length > 80 * o)
          ) {
            (s = h = t[0]), (a = c = t[1]);
            for (var T = o; T < v; T += o)
              (d = t[T]) < s && (s = d),
                (p = t[T + 1]) < a && (a = p),
                d > h && (h = d),
                p > c && (c = p);
            _ = 0 !== (_ = Math.max(h - s, c - a)) ? 1 / _ : 0;
          }
          return n(y, g, o, s, a, _), g;
        }
        function r(t, e, r, i, n) {
          var o, s;
          if (n === S(t, e, r, i) > 0)
            for (o = e; o < r; o += i) s = b(o, t[o], t[o + 1], s);
          else for (o = r - i; o >= e; o -= i) s = b(o, t[o], t[o + 1], s);
          return s && v(s, s.next) && (A(s), (s = s.next)), s;
        }
        function i(t, e) {
          if (!t) return t;
          e || (e = t);
          var r,
            i = t;
          do {
            if (
              ((r = !1),
              i.steiner || (!v(i, i.next) && 0 !== m(i.prev, i, i.next)))
            )
              i = i.next;
            else {
              if ((A(i), (i = e = i.prev) === i.next)) break;
              r = !0;
            }
          } while (r || i !== e);
          return e;
        }
        function n(t, e, r, u, l, c, f) {
          if (t) {
            !f &&
              c &&
              (function (t, e, r, i) {
                var n = t;
                do {
                  null === n.z && (n.z = d(n.x, n.y, e, r, i)),
                    (n.prevZ = n.prev),
                    (n.nextZ = n.next),
                    (n = n.next);
                } while (n !== t);
                (n.prevZ.nextZ = null),
                  (n.prevZ = null),
                  (function (t) {
                    var e,
                      r,
                      i,
                      n,
                      o,
                      s,
                      a,
                      h,
                      u = 1;
                    do {
                      for (r = t, t = null, o = null, s = 0; r; ) {
                        for (
                          s++, i = r, a = 0, e = 0;
                          e < u && (a++, (i = i.nextZ));
                          e++
                        );
                        for (h = u; a > 0 || (h > 0 && i); )
                          0 !== a && (0 === h || !i || r.z <= i.z)
                            ? ((n = r), (r = r.nextZ), a--)
                            : ((n = i), (i = i.nextZ), h--),
                            o ? (o.nextZ = n) : (t = n),
                            (n.prevZ = o),
                            (o = n);
                        r = i;
                      }
                      (o.nextZ = null), (u *= 2);
                    } while (s > 1);
                  })(n);
              })(t, u, l, c);
            for (var p, _, m = t; t.prev !== t.next; )
              if (((p = t.prev), (_ = t.next), c ? s(t, u, l, c) : o(t)))
                e.push(p.i / r),
                  e.push(t.i / r),
                  e.push(_.i / r),
                  A(t),
                  (t = _.next),
                  (m = _.next);
              else if ((t = _) === m) {
                f
                  ? 1 === f
                    ? n((t = a(i(t), e, r)), e, r, u, l, c, 2)
                    : 2 === f && h(t, e, r, u, l, c)
                  : n(i(t), e, r, u, l, c, 1);
                break;
              }
          }
        }
        function o(t) {
          var e = t.prev,
            r = t,
            i = t.next;
          if (m(e, r, i) >= 0) return !1;
          for (var n = t.next.next; n !== t.prev; ) {
            if (
              p(e.x, e.y, r.x, r.y, i.x, i.y, n.x, n.y) &&
              m(n.prev, n, n.next) >= 0
            )
              return !1;
            n = n.next;
          }
          return !0;
        }
        function s(t, e, r, i) {
          var n = t.prev,
            o = t,
            s = t.next;
          if (m(n, o, s) >= 0) return !1;
          for (
            var a = n.x < o.x ? (n.x < s.x ? n.x : s.x) : o.x < s.x ? o.x : s.x,
              h = n.y < o.y ? (n.y < s.y ? n.y : s.y) : o.y < s.y ? o.y : s.y,
              u = n.x > o.x ? (n.x > s.x ? n.x : s.x) : o.x > s.x ? o.x : s.x,
              l = n.y > o.y ? (n.y > s.y ? n.y : s.y) : o.y > s.y ? o.y : s.y,
              c = d(a, h, e, r, i),
              f = d(u, l, e, r, i),
              _ = t.prevZ,
              v = t.nextZ;
            _ && _.z >= c && v && v.z <= f;

          ) {
            if (
              _ !== t.prev &&
              _ !== t.next &&
              p(n.x, n.y, o.x, o.y, s.x, s.y, _.x, _.y) &&
              m(_.prev, _, _.next) >= 0
            )
              return !1;
            if (
              ((_ = _.prevZ),
              v !== t.prev &&
                v !== t.next &&
                p(n.x, n.y, o.x, o.y, s.x, s.y, v.x, v.y) &&
                m(v.prev, v, v.next) >= 0)
            )
              return !1;
            v = v.nextZ;
          }
          for (; _ && _.z >= c; ) {
            if (
              _ !== t.prev &&
              _ !== t.next &&
              p(n.x, n.y, o.x, o.y, s.x, s.y, _.x, _.y) &&
              m(_.prev, _, _.next) >= 0
            )
              return !1;
            _ = _.prevZ;
          }
          for (; v && v.z <= f; ) {
            if (
              v !== t.prev &&
              v !== t.next &&
              p(n.x, n.y, o.x, o.y, s.x, s.y, v.x, v.y) &&
              m(v.prev, v, v.next) >= 0
            )
              return !1;
            v = v.nextZ;
          }
          return !0;
        }
        function a(t, e, r) {
          var n = t;
          do {
            var o = n.prev,
              s = n.next.next;
            !v(o, s) &&
              y(o, n, n.next, s) &&
              x(o, s) &&
              x(s, o) &&
              (e.push(o.i / r),
              e.push(n.i / r),
              e.push(s.i / r),
              A(n),
              A(n.next),
              (n = t = s)),
              (n = n.next);
          } while (n !== t);
          return i(n);
        }
        function h(t, e, r, o, s, a) {
          var h = t;
          do {
            for (var u = h.next.next; u !== h.prev; ) {
              if (h.i !== u.i && _(h, u)) {
                var l = E(h, u);
                return (
                  (h = i(h, h.next)),
                  (l = i(l, l.next)),
                  n(h, e, r, o, s, a),
                  void n(l, e, r, o, s, a)
                );
              }
              u = u.next;
            }
            h = h.next;
          } while (h !== t);
        }
        function u(t, e) {
          return t.x - e.x;
        }
        function l(t, e) {
          if (
            (e = (function (t, e) {
              var r,
                i = e,
                n = t.x,
                o = t.y,
                s = -1 / 0;
              do {
                if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
                  var a =
                    i.x + ((o - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
                  if (a <= n && a > s) {
                    if (((s = a), a === n)) {
                      if (o === i.y) return i;
                      if (o === i.next.y) return i.next;
                    }
                    r = i.x < i.next.x ? i : i.next;
                  }
                }
                i = i.next;
              } while (i !== e);
              if (!r) return null;
              if (n === s) return r;
              var h,
                u = r,
                l = r.x,
                d = r.y,
                f = 1 / 0;
              i = r;
              do {
                n >= i.x &&
                  i.x >= l &&
                  n !== i.x &&
                  p(o < d ? n : s, o, l, d, o < d ? s : n, o, i.x, i.y) &&
                  ((h = Math.abs(o - i.y) / (n - i.x)),
                  x(i, t) &&
                    (h < f ||
                      (h === f && (i.x > r.x || (i.x === r.x && c(r, i))))) &&
                    ((r = i), (f = h))),
                  (i = i.next);
              } while (i !== u);
              return r;
            })(t, e))
          ) {
            var r = E(e, t);
            i(e, e.next), i(r, r.next);
          }
        }
        function c(t, e) {
          return m(t.prev, t, e.prev) < 0 && m(e.next, t, t.next) < 0;
        }
        function d(t, e, r, i, n) {
          return (
            (t =
              1431655765 &
              ((t =
                858993459 &
                ((t =
                  252645135 &
                  ((t = 16711935 & ((t = 32767 * (t - r) * n) | (t << 8))) |
                    (t << 4))) |
                  (t << 2))) |
                (t << 1))) |
            ((e =
              1431655765 &
              ((e =
                858993459 &
                ((e =
                  252645135 &
                  ((e = 16711935 & ((e = 32767 * (e - i) * n) | (e << 8))) |
                    (e << 4))) |
                  (e << 2))) |
                (e << 1))) <<
              1)
          );
        }
        function f(t) {
          var e = t,
            r = t;
          do {
            (e.x < r.x || (e.x === r.x && e.y < r.y)) && (r = e), (e = e.next);
          } while (e !== t);
          return r;
        }
        function p(t, e, r, i, n, o, s, a) {
          return (
            (n - s) * (e - a) - (t - s) * (o - a) >= 0 &&
            (t - s) * (i - a) - (r - s) * (e - a) >= 0 &&
            (r - s) * (o - a) - (n - s) * (i - a) >= 0
          );
        }
        function _(t, e) {
          return (
            t.next.i !== e.i &&
            t.prev.i !== e.i &&
            !(function (t, e) {
              var r = t;
              do {
                if (
                  r.i !== t.i &&
                  r.next.i !== t.i &&
                  r.i !== e.i &&
                  r.next.i !== e.i &&
                  y(r, r.next, t, e)
                )
                  return !0;
                r = r.next;
              } while (r !== t);
              return !1;
            })(t, e) &&
            ((x(t, e) &&
              x(e, t) &&
              (function (t, e) {
                var r = t,
                  i = !1,
                  n = (t.x + e.x) / 2,
                  o = (t.y + e.y) / 2;
                do {
                  r.y > o != r.next.y > o &&
                    r.next.y !== r.y &&
                    n <
                      ((r.next.x - r.x) * (o - r.y)) / (r.next.y - r.y) + r.x &&
                    (i = !i),
                    (r = r.next);
                } while (r !== t);
                return i;
              })(t, e) &&
              (m(t.prev, t, e.prev) || m(t, e.prev, e))) ||
              (v(t, e) && m(t.prev, t, t.next) > 0 && m(e.prev, e, e.next) > 0))
          );
        }
        function m(t, e, r) {
          return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y);
        }
        function v(t, e) {
          return t.x === e.x && t.y === e.y;
        }
        function y(t, e, r, i) {
          var n = T(m(t, e, r)),
            o = T(m(t, e, i)),
            s = T(m(r, i, t)),
            a = T(m(r, i, e));
          return (
            (n !== o && s !== a) ||
            !(0 !== n || !g(t, r, e)) ||
            !(0 !== o || !g(t, i, e)) ||
            !(0 !== s || !g(r, t, i)) ||
            !(0 !== a || !g(r, e, i))
          );
        }
        function g(t, e, r) {
          return (
            e.x <= Math.max(t.x, r.x) &&
            e.x >= Math.min(t.x, r.x) &&
            e.y <= Math.max(t.y, r.y) &&
            e.y >= Math.min(t.y, r.y)
          );
        }
        function T(t) {
          return t > 0 ? 1 : t < 0 ? -1 : 0;
        }
        function x(t, e) {
          return m(t.prev, t, t.next) < 0
            ? m(t, e, t.next) >= 0 && m(t, t.prev, e) >= 0
            : m(t, e, t.prev) < 0 || m(t, t.next, e) < 0;
        }
        function E(t, e) {
          var r = new O(t.i, t.x, t.y),
            i = new O(e.i, e.x, e.y),
            n = t.next,
            o = e.prev;
          return (
            (t.next = e),
            (e.prev = t),
            (r.next = n),
            (n.prev = r),
            (i.next = r),
            (r.prev = i),
            (o.next = i),
            (i.prev = o),
            i
          );
        }
        function b(t, e, r, i) {
          var n = new O(t, e, r);
          return (
            i
              ? ((n.next = i.next),
                (n.prev = i),
                (i.next.prev = n),
                (i.next = n))
              : ((n.prev = n), (n.next = n)),
            n
          );
        }
        function A(t) {
          (t.next.prev = t.prev),
            (t.prev.next = t.next),
            t.prevZ && (t.prevZ.nextZ = t.nextZ),
            t.nextZ && (t.nextZ.prevZ = t.prevZ);
        }
        function O(t, e, r) {
          (this.i = t),
            (this.x = e),
            (this.y = r),
            (this.prev = null),
            (this.next = null),
            (this.z = null),
            (this.prevZ = null),
            (this.nextZ = null),
            (this.steiner = !1);
        }
        function S(t, e, r, i) {
          for (var n = 0, o = e, s = r - i; o < r; o += i)
            (n += (t[s] - t[o]) * (t[o + 1] + t[s + 1])), (s = o);
          return n;
        }
        (t.exports = e),
          (t.exports.default = e),
          (e.deviation = function (t, e, r, i) {
            var n = e && e.length,
              o = n ? e[0] * r : t.length,
              s = Math.abs(S(t, 0, o, r));
            if (n)
              for (var a = 0, h = e.length; a < h; a++) {
                var u = e[a] * r,
                  l = a < h - 1 ? e[a + 1] * r : t.length;
                s -= Math.abs(S(t, u, l, r));
              }
            var c = 0;
            for (a = 0; a < i.length; a += 3) {
              var d = i[a] * r,
                f = i[a + 1] * r,
                p = i[a + 2] * r;
              c += Math.abs(
                (t[d] - t[p]) * (t[f + 1] - t[d + 1]) -
                  (t[d] - t[f]) * (t[p + 1] - t[d + 1])
              );
            }
            return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s);
          }),
          (e.flatten = function (t) {
            for (
              var e = t[0][0].length,
                r = { vertices: [], holes: [], dimensions: e },
                i = 0,
                n = 0;
              n < t.length;
              n++
            ) {
              for (var o = 0; o < t[n].length; o++)
                for (var s = 0; s < e; s++) r.vertices.push(t[n][o][s]);
              n > 0 && ((i += t[n - 1].length), r.holes.push(i));
            }
            return r;
          });
      },
      729: (t) => {
        "use strict";
        var e = Object.prototype.hasOwnProperty,
          r = "~";
        function i() {}
        function n(t, e, r) {
          (this.fn = t), (this.context = e), (this.once = r || !1);
        }
        function o(t, e, i, o, s) {
          if ("function" != typeof i)
            throw new TypeError("The listener must be a function");
          var a = new n(i, o || t, s),
            h = r ? r + e : e;
          return (
            t._events[h]
              ? t._events[h].fn
                ? (t._events[h] = [t._events[h], a])
                : t._events[h].push(a)
              : ((t._events[h] = a), t._eventsCount++),
            t
          );
        }
        function s(t, e) {
          0 == --t._eventsCount ? (t._events = new i()) : delete t._events[e];
        }
        function a() {
          (this._events = new i()), (this._eventsCount = 0);
        }
        Object.create &&
          ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1)),
          (a.prototype.eventNames = function () {
            var t,
              i,
              n = [];
            if (0 === this._eventsCount) return n;
            for (i in (t = this._events))
              e.call(t, i) && n.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols
              ? n.concat(Object.getOwnPropertySymbols(t))
              : n;
          }),
          (a.prototype.listeners = function (t) {
            var e = r ? r + t : t,
              i = this._events[e];
            if (!i) return [];
            if (i.fn) return [i.fn];
            for (var n = 0, o = i.length, s = new Array(o); n < o; n++)
              s[n] = i[n].fn;
            return s;
          }),
          (a.prototype.listenerCount = function (t) {
            var e = r ? r + t : t,
              i = this._events[e];
            return i ? (i.fn ? 1 : i.length) : 0;
          }),
          (a.prototype.emit = function (t, e, i, n, o, s) {
            var a = r ? r + t : t;
            if (!this._events[a]) return !1;
            var h,
              u,
              l = this._events[a],
              c = arguments.length;
            if (l.fn) {
              switch ((l.once && this.removeListener(t, l.fn, void 0, !0), c)) {
                case 1:
                  return l.fn.call(l.context), !0;
                case 2:
                  return l.fn.call(l.context, e), !0;
                case 3:
                  return l.fn.call(l.context, e, i), !0;
                case 4:
                  return l.fn.call(l.context, e, i, n), !0;
                case 5:
                  return l.fn.call(l.context, e, i, n, o), !0;
                case 6:
                  return l.fn.call(l.context, e, i, n, o, s), !0;
              }
              for (u = 1, h = new Array(c - 1); u < c; u++)
                h[u - 1] = arguments[u];
              l.fn.apply(l.context, h);
            } else {
              var d,
                f = l.length;
              for (u = 0; u < f; u++)
                switch (
                  (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), c)
                ) {
                  case 1:
                    l[u].fn.call(l[u].context);
                    break;
                  case 2:
                    l[u].fn.call(l[u].context, e);
                    break;
                  case 3:
                    l[u].fn.call(l[u].context, e, i);
                    break;
                  case 4:
                    l[u].fn.call(l[u].context, e, i, n);
                    break;
                  default:
                    if (!h)
                      for (d = 1, h = new Array(c - 1); d < c; d++)
                        h[d - 1] = arguments[d];
                    l[u].fn.apply(l[u].context, h);
                }
            }
            return !0;
          }),
          (a.prototype.on = function (t, e, r) {
            return o(this, t, e, r, !1);
          }),
          (a.prototype.once = function (t, e, r) {
            return o(this, t, e, r, !0);
          }),
          (a.prototype.removeListener = function (t, e, i, n) {
            var o = r ? r + t : t;
            if (!this._events[o]) return this;
            if (!e) return s(this, o), this;
            var a = this._events[o];
            if (a.fn)
              a.fn !== e ||
                (n && !a.once) ||
                (i && a.context !== i) ||
                s(this, o);
            else {
              for (var h = 0, u = [], l = a.length; h < l; h++)
                (a[h].fn !== e ||
                  (n && !a[h].once) ||
                  (i && a[h].context !== i)) &&
                  u.push(a[h]);
              u.length
                ? (this._events[o] = 1 === u.length ? u[0] : u)
                : s(this, o);
            }
            return this;
          }),
          (a.prototype.removeAllListeners = function (t) {
            var e;
            return (
              t
                ? ((e = r ? r + t : t), this._events[e] && s(this, e))
                : ((this._events = new i()), (this._eventsCount = 0)),
              this
            );
          }),
          (a.prototype.off = a.prototype.removeListener),
          (a.prototype.addListener = a.prototype.on),
          (a.prefixed = r),
          (a.EventEmitter = a),
          (t.exports = a);
      },
      940: (t, e) => {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r = (function () {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, r, i) {
            return r && t(e.prototype, r), i && t(e, i), e;
          };
        })();
        function i(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        var n = (function () {
          function t(e, r, n) {
            void 0 === r && (r = !1),
              i(this, t),
              (this._fn = e),
              (this._once = r),
              (this._thisArg = n),
              (this._next = this._prev = this._owner = null);
          }
          return (
            r(t, [
              {
                key: "detach",
                value: function () {
                  return null !== this._owner && (this._owner.detach(this), !0);
                },
              },
            ]),
            t
          );
        })();
        function o(t, e) {
          return (
            t._head
              ? ((t._tail._next = e), (e._prev = t._tail), (t._tail = e))
              : ((t._head = e), (t._tail = e)),
            (e._owner = t),
            e
          );
        }
        var s = (function () {
          function t() {
            i(this, t), (this._head = this._tail = void 0);
          }
          return (
            r(t, [
              {
                key: "handlers",
                value: function () {
                  var t =
                      !(arguments.length <= 0 || void 0 === arguments[0]) &&
                      arguments[0],
                    e = this._head;
                  if (t) return !!e;
                  for (var r = []; e; ) r.push(e), (e = e._next);
                  return r;
                },
              },
              {
                key: "has",
                value: function (t) {
                  if (!(t instanceof n))
                    throw new Error(
                      "MiniSignal#has(): First arg must be a MiniSignalBinding object."
                    );
                  return t._owner === this;
                },
              },
              {
                key: "dispatch",
                value: function () {
                  var t = this._head;
                  if (!t) return !1;
                  for (; t; )
                    t._once && this.detach(t),
                      t._fn.apply(t._thisArg, arguments),
                      (t = t._next);
                  return !0;
                },
              },
              {
                key: "add",
                value: function (t) {
                  var e =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? null
                      : arguments[1];
                  if ("function" != typeof t)
                    throw new Error(
                      "MiniSignal#add(): First arg must be a Function."
                    );
                  return o(this, new n(t, !1, e));
                },
              },
              {
                key: "once",
                value: function (t) {
                  var e =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? null
                      : arguments[1];
                  if ("function" != typeof t)
                    throw new Error(
                      "MiniSignal#once(): First arg must be a Function."
                    );
                  return o(this, new n(t, !0, e));
                },
              },
              {
                key: "detach",
                value: function (t) {
                  if (!(t instanceof n))
                    throw new Error(
                      "MiniSignal#detach(): First arg must be a MiniSignalBinding object."
                    );
                  return (
                    t._owner !== this ||
                      (t._prev && (t._prev._next = t._next),
                      t._next && (t._next._prev = t._prev),
                      t === this._head
                        ? ((this._head = t._next),
                          null === t._next && (this._tail = null))
                        : t === this._tail &&
                          ((this._tail = t._prev), (this._tail._next = null)),
                      (t._owner = null)),
                    this
                  );
                },
              },
              {
                key: "detachAll",
                value: function () {
                  var t = this._head;
                  if (!t) return this;
                  for (this._head = this._tail = null; t; )
                    (t._owner = null), (t = t._next);
                  return this;
                },
              },
            ]),
            t
          );
        })();
        (s.MiniSignalBinding = n), (e.default = s), (t.exports = e.default);
      },
      418: (t) => {
        "use strict";
        var e = Object.getOwnPropertySymbols,
          r = Object.prototype.hasOwnProperty,
          i = Object.prototype.propertyIsEnumerable;
        function n(t) {
          if (null == t)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(t);
        }
        t.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
              return !1;
            for (var e = {}, r = 0; r < 10; r++)
              e["_" + String.fromCharCode(r)] = r;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(e)
                .map(function (t) {
                  return e[t];
                })
                .join("")
            )
              return !1;
            var i = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                i[t] = t;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, i)).join("")
            );
          } catch (t) {
            return !1;
          }
        })()
          ? Object.assign
          : function (t, o) {
              for (var s, a, h = n(t), u = 1; u < arguments.length; u++) {
                for (var l in (s = Object(arguments[u])))
                  r.call(s, l) && (h[l] = s[l]);
                if (e) {
                  a = e(s);
                  for (var c = 0; c < a.length; c++)
                    i.call(s, a[c]) && (h[a[c]] = s[a[c]]);
                }
              }
              return h;
            };
      },
      571: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (t) {
            e = e || {};
            for (
              var r = {
                  key: [
                    "source",
                    "protocol",
                    "authority",
                    "userInfo",
                    "user",
                    "password",
                    "host",
                    "port",
                    "relative",
                    "path",
                    "directory",
                    "file",
                    "query",
                    "anchor",
                  ],
                  q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
                  parser: {
                    strict:
                      /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose:
                      /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                  },
                },
                i = r.parser[e.strictMode ? "strict" : "loose"].exec(t),
                n = {},
                o = 14;
              o--;

            )
              n[r.key[o]] = i[o] || "";
            return (
              (n[r.q.name] = {}),
              n[r.key[12]].replace(r.q.parser, function (t, e, i) {
                e && (n[r.q.name][e] = i);
              }),
              n
            );
          }
        };
      },
      971: function (t, e, r) {
        var i;
        (t = r.nmd(t)),
          (function (n) {
            e && e.nodeType, t && t.nodeType;
            var o = "object" == typeof r.g && r.g;
            o.global !== o && o.window !== o && o.self;
            var s,
              a = 2147483647,
              h = 36,
              u = /^xn--/,
              l = /[^\x20-\x7E]/,
              c = /[\x2E\u3002\uFF0E\uFF61]/g,
              d = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
              },
              f = Math.floor,
              p = String.fromCharCode;
            function _(t) {
              throw RangeError(d[t]);
            }
            function m(t, e) {
              for (var r = t.length, i = []; r--; ) i[r] = e(t[r]);
              return i;
            }
            function v(t, e) {
              var r = t.split("@"),
                i = "";
              return (
                r.length > 1 && ((i = r[0] + "@"), (t = r[1])),
                i + m((t = t.replace(c, ".")).split("."), e).join(".")
              );
            }
            function y(t) {
              for (var e, r, i = [], n = 0, o = t.length; n < o; )
                (e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o
                  ? 56320 == (64512 & (r = t.charCodeAt(n++)))
                    ? i.push(((1023 & e) << 10) + (1023 & r) + 65536)
                    : (i.push(e), n--)
                  : i.push(e);
              return i;
            }
            function g(t) {
              return m(t, function (t) {
                var e = "";
                return (
                  t > 65535 &&
                    ((e += p((((t -= 65536) >>> 10) & 1023) | 55296)),
                    (t = 56320 | (1023 & t))),
                  e + p(t)
                );
              }).join("");
            }
            function T(t, e) {
              return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
            }
            function x(t, e, r) {
              var i = 0;
              for (t = r ? f(t / 700) : t >> 1, t += f(t / e); t > 455; i += h)
                t = f(t / 35);
              return f(i + (36 * t) / (t + 38));
            }
            function E(t) {
              var e,
                r,
                i,
                n,
                o,
                s,
                u,
                l,
                c,
                d,
                p,
                m = [],
                v = t.length,
                y = 0,
                T = 128,
                E = 72;
              for ((r = t.lastIndexOf("-")) < 0 && (r = 0), i = 0; i < r; ++i)
                t.charCodeAt(i) >= 128 && _("not-basic"),
                  m.push(t.charCodeAt(i));
              for (n = r > 0 ? r + 1 : 0; n < v; ) {
                for (
                  o = y, s = 1, u = h;
                  n >= v && _("invalid-input"),
                    ((l =
                      (p = t.charCodeAt(n++)) - 48 < 10
                        ? p - 22
                        : p - 65 < 26
                        ? p - 65
                        : p - 97 < 26
                        ? p - 97
                        : h) >= h ||
                      l > f((a - y) / s)) &&
                      _("overflow"),
                    (y += l * s),
                    !(l < (c = u <= E ? 1 : u >= E + 26 ? 26 : u - E));
                  u += h
                )
                  s > f(a / (d = h - c)) && _("overflow"), (s *= d);
                (E = x(y - o, (e = m.length + 1), 0 == o)),
                  f(y / e) > a - T && _("overflow"),
                  (T += f(y / e)),
                  (y %= e),
                  m.splice(y++, 0, T);
              }
              return g(m);
            }
            function b(t) {
              var e,
                r,
                i,
                n,
                o,
                s,
                u,
                l,
                c,
                d,
                m,
                v,
                g,
                E,
                b,
                A = [];
              for (
                v = (t = y(t)).length, e = 128, r = 0, o = 72, s = 0;
                s < v;
                ++s
              )
                (m = t[s]) < 128 && A.push(p(m));
              for (i = n = A.length, n && A.push("-"); i < v; ) {
                for (u = a, s = 0; s < v; ++s)
                  (m = t[s]) >= e && m < u && (u = m);
                for (
                  u - e > f((a - r) / (g = i + 1)) && _("overflow"),
                    r += (u - e) * g,
                    e = u,
                    s = 0;
                  s < v;
                  ++s
                )
                  if (((m = t[s]) < e && ++r > a && _("overflow"), m == e)) {
                    for (
                      l = r, c = h;
                      !(l < (d = c <= o ? 1 : c >= o + 26 ? 26 : c - o));
                      c += h
                    )
                      (b = l - d),
                        (E = h - d),
                        A.push(p(T(d + (b % E), 0))),
                        (l = f(b / E));
                    A.push(p(T(l, 0))), (o = x(r, g, i == n)), (r = 0), ++i;
                  }
                ++r, ++e;
              }
              return A.join("");
            }
            (s = {
              version: "1.3.2",
              ucs2: { decode: y, encode: g },
              decode: E,
              encode: b,
              toASCII: function (t) {
                return v(t, function (t) {
                  return l.test(t) ? "xn--" + b(t) : t;
                });
              },
              toUnicode: function (t) {
                return v(t, function (t) {
                  return u.test(t) ? E(t.slice(4).toLowerCase()) : t;
                });
              },
            }),
              void 0 ===
                (i = function () {
                  return s;
                }.call(e, r, e, t)) || (t.exports = i);
          })();
      },
      587: (t) => {
        "use strict";
        function e(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        t.exports = function (t, r, i, n) {
          (r = r || "&"), (i = i || "=");
          var o = {};
          if ("string" != typeof t || 0 === t.length) return o;
          var s = /\+/g;
          t = t.split(r);
          var a = 1e3;
          n && "number" == typeof n.maxKeys && (a = n.maxKeys);
          var h = t.length;
          a > 0 && h > a && (h = a);
          for (var u = 0; u < h; ++u) {
            var l,
              c,
              d,
              f,
              p = t[u].replace(s, "%20"),
              _ = p.indexOf(i);
            _ >= 0
              ? ((l = p.substr(0, _)), (c = p.substr(_ + 1)))
              : ((l = p), (c = "")),
              (d = decodeURIComponent(l)),
              (f = decodeURIComponent(c)),
              e(o, d)
                ? Array.isArray(o[d])
                  ? o[d].push(f)
                  : (o[d] = [o[d], f])
                : (o[d] = f);
          }
          return o;
        };
      },
      361: (t) => {
        "use strict";
        var e = function (t) {
          switch (typeof t) {
            case "string":
              return t;
            case "boolean":
              return t ? "true" : "false";
            case "number":
              return isFinite(t) ? t : "";
            default:
              return "";
          }
        };
        t.exports = function (t, r, i, n) {
          return (
            (r = r || "&"),
            (i = i || "="),
            null === t && (t = void 0),
            "object" == typeof t
              ? Object.keys(t)
                  .map(function (n) {
                    var o = encodeURIComponent(e(n)) + i;
                    return Array.isArray(t[n])
                      ? t[n]
                          .map(function (t) {
                            return o + encodeURIComponent(e(t));
                          })
                          .join(r)
                      : o + encodeURIComponent(e(t[n]));
                  })
                  .join(r)
              : n
              ? encodeURIComponent(e(n)) + i + encodeURIComponent(e(t))
              : ""
          );
        };
      },
      673: (t, e, r) => {
        "use strict";
        (e.decode = e.parse = r(587)), (e.encode = e.stringify = r(361));
      },
      575: (t, e, r) => {
        "use strict";
        var i = r(971),
          n = r(502);
        function o() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        (e.Qc = g),
          (e.DB = function (t, e) {
            return g(t, !1, !0).resolve(e);
          }),
          (e.WU = function (t) {
            return (
              n.isString(t) && (t = g(t)),
              t instanceof o ? t.format() : o.prototype.format.call(t)
            );
          });
        var s = /^([a-z0-9.+-]+:)/i,
          a = /:[0-9]*$/,
          h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          u = ["{", "}", "|", "\\", "^", "`"].concat([
            "<",
            ">",
            '"',
            "`",
            " ",
            "\r",
            "\n",
            "\t",
          ]),
          l = ["'"].concat(u),
          c = ["%", "/", "?", ";", "#"].concat(l),
          d = ["/", "?", "#"],
          f = /^[+a-z0-9A-Z_-]{0,63}$/,
          p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          _ = { javascript: !0, "javascript:": !0 },
          m = { javascript: !0, "javascript:": !0 },
          v = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0,
          },
          y = r(673);
        function g(t, e, r) {
          if (t && n.isObject(t) && t instanceof o) return t;
          var i = new o();
          return i.parse(t, e, r), i;
        }
        (o.prototype.parse = function (t, e, r) {
          if (!n.isString(t))
            throw new TypeError(
              "Parameter 'url' must be a string, not " + typeof t
            );
          var o = t.indexOf("?"),
            a = -1 !== o && o < t.indexOf("#") ? "?" : "#",
            u = t.split(a);
          u[0] = u[0].replace(/\\/g, "/");
          var g = (t = u.join(a));
          if (((g = g.trim()), !r && 1 === t.split("#").length)) {
            var T = h.exec(g);
            if (T)
              return (
                (this.path = g),
                (this.href = g),
                (this.pathname = T[1]),
                T[2]
                  ? ((this.search = T[2]),
                    (this.query = e
                      ? y.parse(this.search.substr(1))
                      : this.search.substr(1)))
                  : e && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var x = s.exec(g);
          if (x) {
            var E = (x = x[0]).toLowerCase();
            (this.protocol = E), (g = g.substr(x.length));
          }
          if (r || x || g.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var b = "//" === g.substr(0, 2);
            !b || (x && m[x]) || ((g = g.substr(2)), (this.slashes = !0));
          }
          if (!m[x] && (b || (x && !v[x]))) {
            for (var A, O, S = -1, R = 0; R < d.length; R++)
              -1 !== (I = g.indexOf(d[R])) && (-1 === S || I < S) && (S = I);
            for (
              -1 !==
                (O = -1 === S ? g.lastIndexOf("@") : g.lastIndexOf("@", S)) &&
                ((A = g.slice(0, O)),
                (g = g.slice(O + 1)),
                (this.auth = decodeURIComponent(A))),
                S = -1,
                R = 0;
              R < c.length;
              R++
            ) {
              var I;
              -1 !== (I = g.indexOf(c[R])) && (-1 === S || I < S) && (S = I);
            }
            -1 === S && (S = g.length),
              (this.host = g.slice(0, S)),
              (g = g.slice(S)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var w =
              "[" === this.hostname[0] &&
              "]" === this.hostname[this.hostname.length - 1];
            if (!w)
              for (
                var P = this.hostname.split(/\./), M = ((R = 0), P.length);
                R < M;
                R++
              ) {
                var D = P[R];
                if (D && !D.match(f)) {
                  for (var C = "", N = 0, L = D.length; N < L; N++)
                    D.charCodeAt(N) > 127 ? (C += "x") : (C += D[N]);
                  if (!C.match(f)) {
                    var F = P.slice(0, R),
                      U = P.slice(R + 1),
                      B = D.match(p);
                    B && (F.push(B[1]), U.unshift(B[2])),
                      U.length && (g = "/" + U.join(".") + g),
                      (this.hostname = F.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255
              ? (this.hostname = "")
              : (this.hostname = this.hostname.toLowerCase()),
              w || (this.hostname = i.toASCII(this.hostname));
            var G = this.port ? ":" + this.port : "",
              X = this.hostname || "";
            (this.host = X + G),
              (this.href += this.host),
              w &&
                ((this.hostname = this.hostname.substr(
                  1,
                  this.hostname.length - 2
                )),
                "/" !== g[0] && (g = "/" + g));
          }
          if (!_[E])
            for (R = 0, M = l.length; R < M; R++) {
              var k = l[R];
              if (-1 !== g.indexOf(k)) {
                var H = encodeURIComponent(k);
                H === k && (H = escape(k)), (g = g.split(k).join(H));
              }
            }
          var j = g.indexOf("#");
          -1 !== j && ((this.hash = g.substr(j)), (g = g.slice(0, j)));
          var Y = g.indexOf("?");
          if (
            (-1 !== Y
              ? ((this.search = g.substr(Y)),
                (this.query = g.substr(Y + 1)),
                e && (this.query = y.parse(this.query)),
                (g = g.slice(0, Y)))
              : e && ((this.search = ""), (this.query = {})),
            g && (this.pathname = g),
            v[E] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            G = this.pathname || "";
            var V = this.search || "";
            this.path = G + V;
          }
          return (this.href = this.format()), this;
        }),
          (o.prototype.format = function () {
            var t = this.auth || "";
            t &&
              ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")),
              (t += "@"));
            var e = this.protocol || "",
              r = this.pathname || "",
              i = this.hash || "",
              o = !1,
              s = "";
            this.host
              ? (o = t + this.host)
              : this.hostname &&
                ((o =
                  t +
                  (-1 === this.hostname.indexOf(":")
                    ? this.hostname
                    : "[" + this.hostname + "]")),
                this.port && (o += ":" + this.port)),
              this.query &&
                n.isObject(this.query) &&
                Object.keys(this.query).length &&
                (s = y.stringify(this.query));
            var a = this.search || (s && "?" + s) || "";
            return (
              e && ":" !== e.substr(-1) && (e += ":"),
              this.slashes || ((!e || v[e]) && !1 !== o)
                ? ((o = "//" + (o || "")),
                  r && "/" !== r.charAt(0) && (r = "/" + r))
                : o || (o = ""),
              i && "#" !== i.charAt(0) && (i = "#" + i),
              a && "?" !== a.charAt(0) && (a = "?" + a),
              e +
                o +
                (r = r.replace(/[?#]/g, function (t) {
                  return encodeURIComponent(t);
                })) +
                (a = a.replace("#", "%23")) +
                i
            );
          }),
          (o.prototype.resolve = function (t) {
            return this.resolveObject(g(t, !1, !0)).format();
          }),
          (o.prototype.resolveObject = function (t) {
            if (n.isString(t)) {
              var e = new o();
              e.parse(t, !1, !0), (t = e);
            }
            for (
              var r = new o(), i = Object.keys(this), s = 0;
              s < i.length;
              s++
            ) {
              var a = i[s];
              r[a] = this[a];
            }
            if (((r.hash = t.hash), "" === t.href))
              return (r.href = r.format()), r;
            if (t.slashes && !t.protocol) {
              for (var h = Object.keys(t), u = 0; u < h.length; u++) {
                var l = h[u];
                "protocol" !== l && (r[l] = t[l]);
              }
              return (
                v[r.protocol] &&
                  r.hostname &&
                  !r.pathname &&
                  (r.path = r.pathname = "/"),
                (r.href = r.format()),
                r
              );
            }
            if (t.protocol && t.protocol !== r.protocol) {
              if (!v[t.protocol]) {
                for (var c = Object.keys(t), d = 0; d < c.length; d++) {
                  var f = c[d];
                  r[f] = t[f];
                }
                return (r.href = r.format()), r;
              }
              if (((r.protocol = t.protocol), t.host || m[t.protocol]))
                r.pathname = t.pathname;
              else {
                for (
                  var p = (t.pathname || "").split("/");
                  p.length && !(t.host = p.shift());

                );
                t.host || (t.host = ""),
                  t.hostname || (t.hostname = ""),
                  "" !== p[0] && p.unshift(""),
                  p.length < 2 && p.unshift(""),
                  (r.pathname = p.join("/"));
              }
              if (
                ((r.search = t.search),
                (r.query = t.query),
                (r.host = t.host || ""),
                (r.auth = t.auth),
                (r.hostname = t.hostname || t.host),
                (r.port = t.port),
                r.pathname || r.search)
              ) {
                var _ = r.pathname || "",
                  y = r.search || "";
                r.path = _ + y;
              }
              return (
                (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r
              );
            }
            var g = r.pathname && "/" === r.pathname.charAt(0),
              T = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
              x = T || g || (r.host && t.pathname),
              E = x,
              b = (r.pathname && r.pathname.split("/")) || [],
              A =
                ((p = (t.pathname && t.pathname.split("/")) || []),
                r.protocol && !v[r.protocol]);
            if (
              (A &&
                ((r.hostname = ""),
                (r.port = null),
                r.host && ("" === b[0] ? (b[0] = r.host) : b.unshift(r.host)),
                (r.host = ""),
                t.protocol &&
                  ((t.hostname = null),
                  (t.port = null),
                  t.host && ("" === p[0] ? (p[0] = t.host) : p.unshift(t.host)),
                  (t.host = null)),
                (x = x && ("" === p[0] || "" === b[0]))),
              T)
            )
              (r.host = t.host || "" === t.host ? t.host : r.host),
                (r.hostname =
                  t.hostname || "" === t.hostname ? t.hostname : r.hostname),
                (r.search = t.search),
                (r.query = t.query),
                (b = p);
            else if (p.length)
              b || (b = []),
                b.pop(),
                (b = b.concat(p)),
                (r.search = t.search),
                (r.query = t.query);
            else if (!n.isNullOrUndefined(t.search))
              return (
                A &&
                  ((r.hostname = r.host = b.shift()),
                  (w =
                    !!(r.host && r.host.indexOf("@") > 0) &&
                    r.host.split("@")) &&
                    ((r.auth = w.shift()), (r.host = r.hostname = w.shift()))),
                (r.search = t.search),
                (r.query = t.query),
                (n.isNull(r.pathname) && n.isNull(r.search)) ||
                  (r.path =
                    (r.pathname ? r.pathname : "") +
                    (r.search ? r.search : "")),
                (r.href = r.format()),
                r
              );
            if (!b.length)
              return (
                (r.pathname = null),
                r.search ? (r.path = "/" + r.search) : (r.path = null),
                (r.href = r.format()),
                r
              );
            for (
              var O = b.slice(-1)[0],
                S =
                  ((r.host || t.host || b.length > 1) &&
                    ("." === O || ".." === O)) ||
                  "" === O,
                R = 0,
                I = b.length;
              I >= 0;
              I--
            )
              "." === (O = b[I])
                ? b.splice(I, 1)
                : ".." === O
                ? (b.splice(I, 1), R++)
                : R && (b.splice(I, 1), R--);
            if (!x && !E) for (; R--; R) b.unshift("..");
            !x ||
              "" === b[0] ||
              (b[0] && "/" === b[0].charAt(0)) ||
              b.unshift(""),
              S && "/" !== b.join("/").substr(-1) && b.push("");
            var w,
              P = "" === b[0] || (b[0] && "/" === b[0].charAt(0));
            return (
              A &&
                ((r.hostname = r.host = P ? "" : b.length ? b.shift() : ""),
                (w =
                  !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
                  ((r.auth = w.shift()), (r.host = r.hostname = w.shift()))),
              (x = x || (r.host && b.length)) && !P && b.unshift(""),
              b.length
                ? (r.pathname = b.join("/"))
                : ((r.pathname = null), (r.path = null)),
              (n.isNull(r.pathname) && n.isNull(r.search)) ||
                (r.path =
                  (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
              (r.auth = t.auth || r.auth),
              (r.slashes = r.slashes || t.slashes),
              (r.href = r.format()),
              r
            );
          }),
          (o.prototype.parseHost = function () {
            var t = this.host,
              e = a.exec(t);
            e &&
              (":" !== (e = e[0]) && (this.port = e.substr(1)),
              (t = t.substr(0, t.length - e.length))),
              t && (this.hostname = t);
          });
      },
      502: (t) => {
        "use strict";
        t.exports = {
          isString: function (t) {
            return "string" == typeof t;
          },
          isObject: function (t) {
            return "object" == typeof t && null !== t;
          },
          isNull: function (t) {
            return null === t;
          },
          isNullOrUndefined: function (t) {
            return null == t;
          },
        };
      },
    },
    e = {};
  function r(i) {
    var n = e[i];
    if (void 0 !== n) return n.exports;
    var o = (e[i] = { id: i, loaded: !1, exports: {} });
    return t[i].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
  }
  (r.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (t, e) => {
      for (var i in e)
        r.o(e, i) &&
          !r.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      "use strict";
      var t = setTimeout;
      function e(t) {
        return Boolean(t && void 0 !== t.length);
      }
      function i() {}
      function n(t) {
        if (!(this instanceof n))
          throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        (this._state = 0),
          (this._handled = !1),
          (this._value = void 0),
          (this._deferreds = []),
          l(t, this);
      }
      function o(t, e) {
        for (; 3 === t._state; ) t = t._value;
        0 !== t._state
          ? ((t._handled = !0),
            n._immediateFn(function () {
              var r = 1 === t._state ? e.onFulfilled : e.onRejected;
              if (null !== r) {
                var i;
                try {
                  i = r(t._value);
                } catch (t) {
                  return void a(e.promise, t);
                }
                s(e.promise, i);
              } else (1 === t._state ? s : a)(e.promise, t._value);
            }))
          : t._deferreds.push(e);
      }
      function s(t, e) {
        try {
          if (e === t)
            throw new TypeError("A promise cannot be resolved with itself.");
          if (e && ("object" == typeof e || "function" == typeof e)) {
            var r = e.then;
            if (e instanceof n)
              return (t._state = 3), (t._value = e), void h(t);
            if ("function" == typeof r)
              return void l(
                ((i = r),
                (o = e),
                function () {
                  i.apply(o, arguments);
                }),
                t
              );
          }
          (t._state = 1), (t._value = e), h(t);
        } catch (e) {
          a(t, e);
        }
        var i, o;
      }
      function a(t, e) {
        (t._state = 2), (t._value = e), h(t);
      }
      function h(t) {
        2 === t._state &&
          0 === t._deferreds.length &&
          n._immediateFn(function () {
            t._handled || n._unhandledRejectionFn(t._value);
          });
        for (var e = 0, r = t._deferreds.length; e < r; e++)
          o(t, t._deferreds[e]);
        t._deferreds = null;
      }
      function u(t, e, r) {
        (this.onFulfilled = "function" == typeof t ? t : null),
          (this.onRejected = "function" == typeof e ? e : null),
          (this.promise = r);
      }
      function l(t, e) {
        var r = !1;
        try {
          t(
            function (t) {
              r || ((r = !0), s(e, t));
            },
            function (t) {
              r || ((r = !0), a(e, t));
            }
          );
        } catch (t) {
          if (r) return;
          (r = !0), a(e, t);
        }
      }
      (n.prototype.catch = function (t) {
        return this.then(null, t);
      }),
        (n.prototype.then = function (t, e) {
          var r = new this.constructor(i);
          return o(this, new u(t, e, r)), r;
        }),
        (n.prototype.finally = function (t) {
          var e = this.constructor;
          return this.then(
            function (r) {
              return e.resolve(t()).then(function () {
                return r;
              });
            },
            function (r) {
              return e.resolve(t()).then(function () {
                return e.reject(r);
              });
            }
          );
        }),
        (n.all = function (t) {
          return new n(function (r, i) {
            if (!e(t)) return i(new TypeError("Promise.all accepts an array"));
            var n = Array.prototype.slice.call(t);
            if (0 === n.length) return r([]);
            var o = n.length;
            function s(t, e) {
              try {
                if (e && ("object" == typeof e || "function" == typeof e)) {
                  var a = e.then;
                  if ("function" == typeof a)
                    return void a.call(
                      e,
                      function (e) {
                        s(t, e);
                      },
                      i
                    );
                }
                (n[t] = e), 0 == --o && r(n);
              } catch (t) {
                i(t);
              }
            }
            for (var a = 0; a < n.length; a++) s(a, n[a]);
          });
        }),
        (n.allSettled = function (t) {
          return new this(function (e, r) {
            if (!t || void 0 === t.length)
              return r(
                new TypeError(
                  typeof t +
                    " " +
                    t +
                    " is not iterable(cannot read property Symbol(Symbol.iterator))"
                )
              );
            var i = Array.prototype.slice.call(t);
            if (0 === i.length) return e([]);
            var n = i.length;
            function o(t, r) {
              if (r && ("object" == typeof r || "function" == typeof r)) {
                var s = r.then;
                if ("function" == typeof s)
                  return void s.call(
                    r,
                    function (e) {
                      o(t, e);
                    },
                    function (r) {
                      (i[t] = { status: "rejected", reason: r }),
                        0 == --n && e(i);
                    }
                  );
              }
              (i[t] = { status: "fulfilled", value: r }), 0 == --n && e(i);
            }
            for (var s = 0; s < i.length; s++) o(s, i[s]);
          });
        }),
        (n.resolve = function (t) {
          return t && "object" == typeof t && t.constructor === n
            ? t
            : new n(function (e) {
                e(t);
              });
        }),
        (n.reject = function (t) {
          return new n(function (e, r) {
            r(t);
          });
        }),
        (n.race = function (t) {
          return new n(function (r, i) {
            if (!e(t)) return i(new TypeError("Promise.race accepts an array"));
            for (var o = 0, s = t.length; o < s; o++)
              n.resolve(t[o]).then(r, i);
          });
        }),
        (n._immediateFn =
          ("function" == typeof setImmediate &&
            function (t) {
              setImmediate(t);
            }) ||
          function (e) {
            t(e, 0);
          }),
        (n._unhandledRejectionFn = function (t) {
          "undefined" != typeof console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", t);
        });
      const c = n;
      var d = r(418),
        f = r.n(d);
      if (
        (self.Promise || (self.Promise = c),
        Object.assign || (Object.assign = f()),
        (Date.now && Date.prototype.getTime) ||
          (Date.now = function () {
            return new Date().getTime();
          }),
        !self.performance || !self.performance.now)
      ) {
        var p = Date.now();
        self.performance || (self.performance = {}),
          (self.performance.now = function () {
            return Date.now() - p;
          });
      }
      for (
        var _ = Date.now(), m = ["ms", "moz", "webkit", "o"], v = 0;
        v < m.length && !self.requestAnimationFrame;
        ++v
      ) {
        var y = m[v];
        (self.requestAnimationFrame = self[y + "RequestAnimationFrame"]),
          (self.cancelAnimationFrame =
            self[y + "CancelAnimationFrame"] ||
            self[y + "CancelRequestAnimationFrame"]);
      }
      self.requestAnimationFrame ||
        (self.requestAnimationFrame = function (t) {
          if ("function" != typeof t)
            throw new TypeError(t + "is not a function");
          var e = Date.now(),
            r = 16 + _ - e;
          return (
            r < 0 && (r = 0),
            (_ = e),
            self.setTimeout(function () {
              (_ = Date.now()), t(performance.now());
            }, r)
          );
        }),
        self.cancelAnimationFrame ||
          (self.cancelAnimationFrame = function (t) {
            return clearTimeout(t);
          }),
        Math.sign ||
          (Math.sign = function (t) {
            return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1;
          }),
        Number.isInteger ||
          (Number.isInteger = function (t) {
            return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
          }),
        self.ArrayBuffer || (self.ArrayBuffer = Array),
        self.Float32Array || (self.Float32Array = Array),
        self.Uint32Array || (self.Uint32Array = Array),
        self.Uint16Array || (self.Uint16Array = Array),
        self.Uint8Array || (self.Uint8Array = Array),
        self.Int32Array || (self.Int32Array = Array);
      var g,
        T,
        x,
        E,
        b,
        A,
        O,
        S,
        R,
        I,
        w,
        P,
        M,
        D,
        C,
        N,
        L,
        F,
        U = /iPhone/i,
        B = /iPod/i,
        G = /iPad/i,
        X = /\biOS-universal(?:.+)Mac\b/i,
        k = /\bAndroid(?:.+)Mobile\b/i,
        H = /Android/i,
        j = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        Y = /Silk/i,
        V = /Windows Phone/i,
        z = /\bWindows(?:.+)ARM\b/i,
        W = /BlackBerry/i,
        q = /BB10/i,
        K = /Opera Mini/i,
        Z = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        J = /Mobile(?:.+)Firefox\b/i,
        Q = function (t) {
          return (
            void 0 !== t &&
            "MacIntel" === t.platform &&
            "number" == typeof t.maxTouchPoints &&
            t.maxTouchPoints > 1 &&
            "undefined" == typeof MSStream
          );
        },
        $ = (function (t) {
          var e = { userAgent: "", platform: "", maxTouchPoints: 0 };
          t || "undefined" == typeof navigator
            ? "string" == typeof t
              ? (e.userAgent = t)
              : t &&
                t.userAgent &&
                (e = {
                  userAgent: t.userAgent,
                  platform: t.platform,
                  maxTouchPoints: t.maxTouchPoints || 0,
                })
            : (e = {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                maxTouchPoints: navigator.maxTouchPoints || 0,
              });
          var r = e.userAgent,
            i = r.split("[FBAN");
          void 0 !== i[1] && (r = i[0]),
            void 0 !== (i = r.split("Twitter"))[1] && (r = i[0]);
          var n = (function (t) {
              return function (e) {
                return e.test(t);
              };
            })(r),
            o = {
              apple: {
                phone: n(U) && !n(V),
                ipod: n(B),
                tablet: !n(U) && (n(G) || Q(e)) && !n(V),
                universal: n(X),
                device: (n(U) || n(B) || n(G) || n(X) || Q(e)) && !n(V),
              },
              amazon: {
                phone: n(j),
                tablet: !n(j) && n(Y),
                device: n(j) || n(Y),
              },
              android: {
                phone: (!n(V) && n(j)) || (!n(V) && n(k)),
                tablet: !n(V) && !n(j) && !n(k) && (n(Y) || n(H)),
                device:
                  (!n(V) && (n(j) || n(Y) || n(k) || n(H))) || n(/\bokhttp\b/i),
              },
              windows: { phone: n(V), tablet: n(z), device: n(V) || n(z) },
              other: {
                blackberry: n(W),
                blackberry10: n(q),
                opera: n(K),
                firefox: n(J),
                chrome: n(Z),
                device: n(W) || n(q) || n(K) || n(J) || n(Z),
              },
              any: !1,
              phone: !1,
              tablet: !1,
            };
          return (
            (o.any =
              o.apple.device ||
              o.android.device ||
              o.windows.device ||
              o.other.device),
            (o.phone = o.apple.phone || o.android.phone || o.windows.phone),
            (o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet),
            o
          );
        })(self.navigator);
      !(function (t) {
        (t[(t.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
          (t[(t.WEBGL = 1)] = "WEBGL"),
          (t[(t.WEBGL2 = 2)] = "WEBGL2");
      })(g || (g = {})),
        (function (t) {
          (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
            (t[(t.WEBGL = 1)] = "WEBGL"),
            (t[(t.CANVAS = 2)] = "CANVAS");
        })(T || (T = {})),
        (function (t) {
          (t[(t.COLOR = 16384)] = "COLOR"),
            (t[(t.DEPTH = 256)] = "DEPTH"),
            (t[(t.STENCIL = 1024)] = "STENCIL");
        })(x || (x = {})),
        (function (t) {
          (t[(t.NORMAL = 0)] = "NORMAL"),
            (t[(t.ADD = 1)] = "ADD"),
            (t[(t.MULTIPLY = 2)] = "MULTIPLY"),
            (t[(t.SCREEN = 3)] = "SCREEN"),
            (t[(t.OVERLAY = 4)] = "OVERLAY"),
            (t[(t.DARKEN = 5)] = "DARKEN"),
            (t[(t.LIGHTEN = 6)] = "LIGHTEN"),
            (t[(t.COLOR_DODGE = 7)] = "COLOR_DODGE"),
            (t[(t.COLOR_BURN = 8)] = "COLOR_BURN"),
            (t[(t.HARD_LIGHT = 9)] = "HARD_LIGHT"),
            (t[(t.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
            (t[(t.DIFFERENCE = 11)] = "DIFFERENCE"),
            (t[(t.EXCLUSION = 12)] = "EXCLUSION"),
            (t[(t.HUE = 13)] = "HUE"),
            (t[(t.SATURATION = 14)] = "SATURATION"),
            (t[(t.COLOR = 15)] = "COLOR"),
            (t[(t.LUMINOSITY = 16)] = "LUMINOSITY"),
            (t[(t.NORMAL_NPM = 17)] = "NORMAL_NPM"),
            (t[(t.ADD_NPM = 18)] = "ADD_NPM"),
            (t[(t.SCREEN_NPM = 19)] = "SCREEN_NPM"),
            (t[(t.NONE = 20)] = "NONE"),
            (t[(t.SRC_OVER = 0)] = "SRC_OVER"),
            (t[(t.SRC_IN = 21)] = "SRC_IN"),
            (t[(t.SRC_OUT = 22)] = "SRC_OUT"),
            (t[(t.SRC_ATOP = 23)] = "SRC_ATOP"),
            (t[(t.DST_OVER = 24)] = "DST_OVER"),
            (t[(t.DST_IN = 25)] = "DST_IN"),
            (t[(t.DST_OUT = 26)] = "DST_OUT"),
            (t[(t.DST_ATOP = 27)] = "DST_ATOP"),
            (t[(t.ERASE = 26)] = "ERASE"),
            (t[(t.SUBTRACT = 28)] = "SUBTRACT"),
            (t[(t.XOR = 29)] = "XOR");
        })(E || (E = {})),
        (function (t) {
          (t[(t.POINTS = 0)] = "POINTS"),
            (t[(t.LINES = 1)] = "LINES"),
            (t[(t.LINE_LOOP = 2)] = "LINE_LOOP"),
            (t[(t.LINE_STRIP = 3)] = "LINE_STRIP"),
            (t[(t.TRIANGLES = 4)] = "TRIANGLES"),
            (t[(t.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
            (t[(t.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN");
        })(b || (b = {})),
        (function (t) {
          (t[(t.RGBA = 6408)] = "RGBA"),
            (t[(t.RGB = 6407)] = "RGB"),
            (t[(t.ALPHA = 6406)] = "ALPHA"),
            (t[(t.LUMINANCE = 6409)] = "LUMINANCE"),
            (t[(t.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
            (t[(t.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
            (t[(t.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL");
        })(A || (A = {})),
        (function (t) {
          (t[(t.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
            (t[(t.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
            (t[(t.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              "TEXTURE_CUBE_MAP_POSITIVE_X"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_X"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Y"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Z"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Z");
        })(O || (O = {})),
        (function (t) {
          (t[(t.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
            (t[(t.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
            (t[(t.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
            (t[(t.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
            (t[(t.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
            (t[(t.FLOAT = 5126)] = "FLOAT"),
            (t[(t.HALF_FLOAT = 36193)] = "HALF_FLOAT");
        })(S || (S = {})),
        (function (t) {
          (t[(t.FLOAT = 0)] = "FLOAT"),
            (t[(t.INT = 1)] = "INT"),
            (t[(t.UINT = 2)] = "UINT");
        })(R || (R = {})),
        (function (t) {
          (t[(t.NEAREST = 0)] = "NEAREST"), (t[(t.LINEAR = 1)] = "LINEAR");
        })(I || (I = {})),
        (function (t) {
          (t[(t.CLAMP = 33071)] = "CLAMP"),
            (t[(t.REPEAT = 10497)] = "REPEAT"),
            (t[(t.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT");
        })(w || (w = {})),
        (function (t) {
          (t[(t.OFF = 0)] = "OFF"),
            (t[(t.POW2 = 1)] = "POW2"),
            (t[(t.ON = 2)] = "ON"),
            (t[(t.ON_MANUAL = 3)] = "ON_MANUAL");
        })(P || (P = {})),
        (function (t) {
          (t[(t.NPM = 0)] = "NPM"),
            (t[(t.UNPACK = 1)] = "UNPACK"),
            (t[(t.PMA = 2)] = "PMA"),
            (t[(t.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
            (t[(t.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
            (t[(t.PREMULTIPLY_ALPHA = 2)] = "PREMULTIPLY_ALPHA");
        })(M || (M = {})),
        (function (t) {
          (t[(t.NO = 0)] = "NO"),
            (t[(t.YES = 1)] = "YES"),
            (t[(t.AUTO = 2)] = "AUTO"),
            (t[(t.BLEND = 0)] = "BLEND"),
            (t[(t.CLEAR = 1)] = "CLEAR"),
            (t[(t.BLIT = 2)] = "BLIT");
        })(D || (D = {})),
        (function (t) {
          (t[(t.AUTO = 0)] = "AUTO"), (t[(t.MANUAL = 1)] = "MANUAL");
        })(C || (C = {})),
        (function (t) {
          (t.LOW = "lowp"), (t.MEDIUM = "mediump"), (t.HIGH = "highp");
        })(N || (N = {})),
        (function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.SCISSOR = 1)] = "SCISSOR"),
            (t[(t.STENCIL = 2)] = "STENCIL"),
            (t[(t.SPRITE = 3)] = "SPRITE");
        })(L || (L = {})),
        (function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.LOW = 2)] = "LOW"),
            (t[(t.MEDIUM = 4)] = "MEDIUM"),
            (t[(t.HIGH = 8)] = "HIGH");
        })(F || (F = {}));
      var tt,
        et,
        rt,
        it,
        nt,
        ot,
        st,
        at,
        ht,
        ut,
        lt,
        ct,
        dt,
        ft,
        pt,
        _t,
        mt,
        vt,
        yt = {
          MIPMAP_TEXTURES: P.POW2,
          ANISOTROPIC_LEVEL: 0,
          RESOLUTION: 1,
          FILTER_RESOLUTION: 1,
          SPRITE_MAX_TEXTURES: (function (t) {
            var e,
              r = !0;
            ($.tablet || $.phone) &&
              ($.apple.device &&
                (e = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) &&
                parseInt(e[1], 10) < 11 &&
                (r = !1),
              $.android.device &&
                (e = navigator.userAgent.match(/Android\s([0-9.]*)/)) &&
                parseInt(e[1], 10) < 7 &&
                (r = !1));
            return r ? 32 : 4;
          })(),
          SPRITE_BATCH_SIZE: 4096,
          RENDER_OPTIONS: {
            view: null,
            antialias: !1,
            autoDensity: !1,
            backgroundColor: 0,
            backgroundAlpha: 1,
            useContextAlpha: !0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            width: 800,
            height: 600,
            legacy: !1,
          },
          GC_MODE: C.AUTO,
          GC_MAX_IDLE: 3600,
          GC_MAX_CHECK_COUNT: 600,
          WRAP_MODE: w.CLAMP,
          SCALE_MODE: I.LINEAR,
          PRECISION_VERTEX: N.HIGH,
          PRECISION_FRAGMENT: $.apple.device ? N.HIGH : N.MEDIUM,
          CAN_UPLOAD_SAME_BUFFER: !$.apple.device,
          CREATE_IMAGE_BITMAP: !1,
          ROUND_PIXELS: !1,
        },
        gt = r(729),
        Tt = r.n(gt),
        xt = r(187),
        Et = r.n(xt),
        bt = r(575);
      !(function (t) {
        (t[(t.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
          (t[(t.WEBGL = 1)] = "WEBGL"),
          (t[(t.WEBGL2 = 2)] = "WEBGL2");
      })(tt || (tt = {})),
        (function (t) {
          (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
            (t[(t.WEBGL = 1)] = "WEBGL"),
            (t[(t.CANVAS = 2)] = "CANVAS");
        })(et || (et = {})),
        (function (t) {
          (t[(t.COLOR = 16384)] = "COLOR"),
            (t[(t.DEPTH = 256)] = "DEPTH"),
            (t[(t.STENCIL = 1024)] = "STENCIL");
        })(rt || (rt = {})),
        (function (t) {
          (t[(t.NORMAL = 0)] = "NORMAL"),
            (t[(t.ADD = 1)] = "ADD"),
            (t[(t.MULTIPLY = 2)] = "MULTIPLY"),
            (t[(t.SCREEN = 3)] = "SCREEN"),
            (t[(t.OVERLAY = 4)] = "OVERLAY"),
            (t[(t.DARKEN = 5)] = "DARKEN"),
            (t[(t.LIGHTEN = 6)] = "LIGHTEN"),
            (t[(t.COLOR_DODGE = 7)] = "COLOR_DODGE"),
            (t[(t.COLOR_BURN = 8)] = "COLOR_BURN"),
            (t[(t.HARD_LIGHT = 9)] = "HARD_LIGHT"),
            (t[(t.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
            (t[(t.DIFFERENCE = 11)] = "DIFFERENCE"),
            (t[(t.EXCLUSION = 12)] = "EXCLUSION"),
            (t[(t.HUE = 13)] = "HUE"),
            (t[(t.SATURATION = 14)] = "SATURATION"),
            (t[(t.COLOR = 15)] = "COLOR"),
            (t[(t.LUMINOSITY = 16)] = "LUMINOSITY"),
            (t[(t.NORMAL_NPM = 17)] = "NORMAL_NPM"),
            (t[(t.ADD_NPM = 18)] = "ADD_NPM"),
            (t[(t.SCREEN_NPM = 19)] = "SCREEN_NPM"),
            (t[(t.NONE = 20)] = "NONE"),
            (t[(t.SRC_OVER = 0)] = "SRC_OVER"),
            (t[(t.SRC_IN = 21)] = "SRC_IN"),
            (t[(t.SRC_OUT = 22)] = "SRC_OUT"),
            (t[(t.SRC_ATOP = 23)] = "SRC_ATOP"),
            (t[(t.DST_OVER = 24)] = "DST_OVER"),
            (t[(t.DST_IN = 25)] = "DST_IN"),
            (t[(t.DST_OUT = 26)] = "DST_OUT"),
            (t[(t.DST_ATOP = 27)] = "DST_ATOP"),
            (t[(t.ERASE = 26)] = "ERASE"),
            (t[(t.SUBTRACT = 28)] = "SUBTRACT"),
            (t[(t.XOR = 29)] = "XOR");
        })(it || (it = {})),
        (function (t) {
          (t[(t.POINTS = 0)] = "POINTS"),
            (t[(t.LINES = 1)] = "LINES"),
            (t[(t.LINE_LOOP = 2)] = "LINE_LOOP"),
            (t[(t.LINE_STRIP = 3)] = "LINE_STRIP"),
            (t[(t.TRIANGLES = 4)] = "TRIANGLES"),
            (t[(t.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
            (t[(t.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN");
        })(nt || (nt = {})),
        (function (t) {
          (t[(t.RGBA = 6408)] = "RGBA"),
            (t[(t.RGB = 6407)] = "RGB"),
            (t[(t.ALPHA = 6406)] = "ALPHA"),
            (t[(t.LUMINANCE = 6409)] = "LUMINANCE"),
            (t[(t.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
            (t[(t.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
            (t[(t.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL");
        })(ot || (ot = {})),
        (function (t) {
          (t[(t.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
            (t[(t.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
            (t[(t.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              "TEXTURE_CUBE_MAP_POSITIVE_X"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_X"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Y"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Z"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Z");
        })(st || (st = {})),
        (function (t) {
          (t[(t.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
            (t[(t.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
            (t[(t.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
            (t[(t.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
            (t[(t.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
            (t[(t.FLOAT = 5126)] = "FLOAT"),
            (t[(t.HALF_FLOAT = 36193)] = "HALF_FLOAT");
        })(at || (at = {})),
        (function (t) {
          (t[(t.FLOAT = 0)] = "FLOAT"),
            (t[(t.INT = 1)] = "INT"),
            (t[(t.UINT = 2)] = "UINT");
        })(ht || (ht = {})),
        (function (t) {
          (t[(t.NEAREST = 0)] = "NEAREST"), (t[(t.LINEAR = 1)] = "LINEAR");
        })(ut || (ut = {})),
        (function (t) {
          (t[(t.CLAMP = 33071)] = "CLAMP"),
            (t[(t.REPEAT = 10497)] = "REPEAT"),
            (t[(t.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT");
        })(lt || (lt = {})),
        (function (t) {
          (t[(t.OFF = 0)] = "OFF"),
            (t[(t.POW2 = 1)] = "POW2"),
            (t[(t.ON = 2)] = "ON"),
            (t[(t.ON_MANUAL = 3)] = "ON_MANUAL");
        })(ct || (ct = {})),
        (function (t) {
          (t[(t.NPM = 0)] = "NPM"),
            (t[(t.UNPACK = 1)] = "UNPACK"),
            (t[(t.PMA = 2)] = "PMA"),
            (t[(t.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
            (t[(t.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
            (t[(t.PREMULTIPLY_ALPHA = 2)] = "PREMULTIPLY_ALPHA");
        })(dt || (dt = {})),
        (function (t) {
          (t[(t.NO = 0)] = "NO"),
            (t[(t.YES = 1)] = "YES"),
            (t[(t.AUTO = 2)] = "AUTO"),
            (t[(t.BLEND = 0)] = "BLEND"),
            (t[(t.CLEAR = 1)] = "CLEAR"),
            (t[(t.BLIT = 2)] = "BLIT");
        })(ft || (ft = {})),
        (function (t) {
          (t[(t.AUTO = 0)] = "AUTO"), (t[(t.MANUAL = 1)] = "MANUAL");
        })(pt || (pt = {})),
        (function (t) {
          (t.LOW = "lowp"), (t.MEDIUM = "mediump"), (t.HIGH = "highp");
        })(_t || (_t = {})),
        (function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.SCISSOR = 1)] = "SCISSOR"),
            (t[(t.STENCIL = 2)] = "STENCIL"),
            (t[(t.SPRITE = 3)] = "SPRITE");
        })(mt || (mt = {})),
        (function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.LOW = 2)] = "LOW"),
            (t[(t.MEDIUM = 4)] = "MEDIUM"),
            (t[(t.HIGH = 8)] = "HIGH");
        })(vt || (vt = {}));
      var At = { parse: bt.Qc, format: bt.WU, resolve: bt.DB };
      (yt.RETINA_PREFIX = /@([0-9\.]+)x/),
        (yt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1);
      var Ot,
        St = !1,
        Rt = {
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          goldenrod: "#daa520",
          gold: "#ffd700",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavenderblush: "#fff0f5",
          lavender: "#e6e6fa",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgreen: "#90ee90",
          lightgrey: "#d3d3d3",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370db",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#db7093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
        };
      function It(t, e) {
        return (
          void 0 === e && (e = []),
          (e[0] = ((t >> 16) & 255) / 255),
          (e[1] = ((t >> 8) & 255) / 255),
          (e[2] = (255 & t) / 255),
          e
        );
      }
      function wt(t) {
        var e = t.toString(16);
        return "#" + ("000000".substr(0, 6 - e.length) + e);
      }
      function Pt(t) {
        return (
          "string" == typeof t &&
            "#" === (t = Rt[t.toLowerCase()] || t)[0] &&
            (t = t.substr(1)),
          parseInt(t, 16)
        );
      }
      var Mt = (function () {
        for (var t = [], e = [], r = 0; r < 32; r++) (t[r] = r), (e[r] = r);
        (t[it.NORMAL_NPM] = it.NORMAL),
          (t[it.ADD_NPM] = it.ADD),
          (t[it.SCREEN_NPM] = it.SCREEN),
          (e[it.NORMAL] = it.NORMAL_NPM),
          (e[it.ADD] = it.ADD_NPM),
          (e[it.SCREEN] = it.SCREEN_NPM);
        var i = [];
        return i.push(e), i.push(t), i;
      })();
      function Dt(t, e) {
        return Mt[e ? 1 : 0][t];
      }
      function Ct(t, e) {
        if (1 === e) return ((255 * e) << 24) + t;
        if (0 === e) return 0;
        var r = (t >> 16) & 255,
          i = (t >> 8) & 255,
          n = 255 & t;
        return (
          ((255 * e) << 24) +
          ((r = (r * e + 0.5) | 0) << 16) +
          ((i = (i * e + 0.5) | 0) << 8) +
          ((n * e + 0.5) | 0)
        );
      }
      function Nt(t, e, r, i) {
        return (
          ((r = r || new Float32Array(4))[0] = ((t >> 16) & 255) / 255),
          (r[1] = ((t >> 8) & 255) / 255),
          (r[2] = (255 & t) / 255),
          (i || void 0 === i) && ((r[0] *= e), (r[1] *= e), (r[2] *= e)),
          (r[3] = e),
          r
        );
      }
      function Lt(t) {
        return (
          (t += 0 === t ? 1 : 0),
          --t,
          (t |= t >>> 1),
          (t |= t >>> 2),
          (t |= t >>> 4),
          (t |= t >>> 8),
          1 + (t |= t >>> 16)
        );
      }
      function Ft(t) {
        return !(t & (t - 1) || !t);
      }
      function Ut(t) {
        var e = (t > 65535 ? 1 : 0) << 4,
          r = ((t >>>= e) > 255 ? 1 : 0) << 3;
        return (
          (e |= r),
          (e |= r = ((t >>>= r) > 15 ? 1 : 0) << 2),
          (e |= r = ((t >>>= r) > 3 ? 1 : 0) << 1) | ((t >>>= r) >> 1)
        );
      }
      function Bt(t, e, r) {
        var i,
          n = t.length;
        if (!(e >= n || 0 === r)) {
          var o = n - (r = e + r > n ? n - e : r);
          for (i = e; i < o; ++i) t[i] = t[i + r];
          t.length = o;
        }
      }
      function Gt(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1;
      }
      Float32Array, Uint32Array, Int32Array, Uint8Array;
      var Xt = 0;
      function kt() {
        return ++Xt;
      }
      var Ht = {};
      function jt(t, e, r) {
        if ((void 0 === r && (r = 3), !Ht[e])) {
          var i = new Error().stack;
          void 0 === i
            ? console.warn(
                "PixiJS Deprecation Warning: ",
                e + "\nDeprecated since v" + t
              )
            : ((i = i.split("\n").splice(r).join("\n")),
              console.groupCollapsed
                ? (console.groupCollapsed(
                    "%cPixiJS Deprecation Warning: %c%s",
                    "color:#614108;background:#fffbe6",
                    "font-weight:normal;color:#614108;background:#fffbe6",
                    e + "\nDeprecated since v" + t
                  ),
                  console.warn(i),
                  console.groupEnd())
                : (console.warn(
                    "PixiJS Deprecation Warning: ",
                    e + "\nDeprecated since v" + t
                  ),
                  console.warn(i))),
            (Ht[e] = !0);
        }
      }
      var Yt,
        Vt = {},
        zt = Object.create(null),
        Wt = Object.create(null),
        qt = (function () {
          function t(t, e, r) {
            (this.canvas = document.createElement("canvas")),
              (this.context = this.canvas.getContext("2d")),
              (this.resolution = r || yt.RESOLUTION),
              this.resize(t, e);
          }
          return (
            (t.prototype.clear = function () {
              this.context.setTransform(1, 0, 0, 1, 0, 0),
                this.context.clearRect(
                  0,
                  0,
                  this.canvas.width,
                  this.canvas.height
                );
            }),
            (t.prototype.resize = function (t, e) {
              (this.canvas.width = t * this.resolution),
                (this.canvas.height = e * this.resolution);
            }),
            (t.prototype.destroy = function () {
              (this.context = null), (this.canvas = null);
            }),
            Object.defineProperty(t.prototype, "width", {
              get: function () {
                return this.canvas.width;
              },
              set: function (t) {
                this.canvas.width = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "height", {
              get: function () {
                return this.canvas.height;
              },
              set: function (t) {
                this.canvas.height = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })();
      function Kt(t, e) {
        var r = yt.RETINA_PREFIX.exec(t);
        return r ? parseFloat(r[1]) : void 0 !== e ? e : 1;
      }
      var Zt,
        Jt = 2 * Math.PI,
        Qt = 180 / Math.PI,
        $t = Math.PI / 180;
      !(function (t) {
        (t[(t.POLY = 0)] = "POLY"),
          (t[(t.RECT = 1)] = "RECT"),
          (t[(t.CIRC = 2)] = "CIRC"),
          (t[(t.ELIP = 3)] = "ELIP"),
          (t[(t.RREC = 4)] = "RREC");
      })(Zt || (Zt = {}));
      var te = (function () {
          function t(t, e, r, i) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = 0),
              (this.x = Number(t)),
              (this.y = Number(e)),
              (this.width = Number(r)),
              (this.height = Number(i)),
              (this.type = Zt.RECT);
          }
          return (
            Object.defineProperty(t.prototype, "left", {
              get: function () {
                return this.x;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "right", {
              get: function () {
                return this.x + this.width;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "top", {
              get: function () {
                return this.y;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "bottom", {
              get: function () {
                return this.y + this.height;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "EMPTY", {
              get: function () {
                return new t(0, 0, 0, 0);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.clone = function () {
              return new t(this.x, this.y, this.width, this.height);
            }),
            (t.prototype.copyFrom = function (t) {
              return (
                (this.x = t.x),
                (this.y = t.y),
                (this.width = t.width),
                (this.height = t.height),
                this
              );
            }),
            (t.prototype.copyTo = function (t) {
              return (
                (t.x = this.x),
                (t.y = this.y),
                (t.width = this.width),
                (t.height = this.height),
                t
              );
            }),
            (t.prototype.contains = function (t, e) {
              return (
                !(this.width <= 0 || this.height <= 0) &&
                t >= this.x &&
                t < this.x + this.width &&
                e >= this.y &&
                e < this.y + this.height
              );
            }),
            (t.prototype.pad = function (t, e) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = t),
                (this.x -= t),
                (this.y -= e),
                (this.width += 2 * t),
                (this.height += 2 * e),
                this
              );
            }),
            (t.prototype.fit = function (t) {
              var e = Math.max(this.x, t.x),
                r = Math.min(this.x + this.width, t.x + t.width),
                i = Math.max(this.y, t.y),
                n = Math.min(this.y + this.height, t.y + t.height);
              return (
                (this.x = e),
                (this.width = Math.max(r - e, 0)),
                (this.y = i),
                (this.height = Math.max(n - i, 0)),
                this
              );
            }),
            (t.prototype.ceil = function (t, e) {
              void 0 === t && (t = 1), void 0 === e && (e = 0.001);
              var r = Math.ceil((this.x + this.width - e) * t) / t,
                i = Math.ceil((this.y + this.height - e) * t) / t;
              return (
                (this.x = Math.floor((this.x + e) * t) / t),
                (this.y = Math.floor((this.y + e) * t) / t),
                (this.width = r - this.x),
                (this.height = i - this.y),
                this
              );
            }),
            (t.prototype.enlarge = function (t) {
              var e = Math.min(this.x, t.x),
                r = Math.max(this.x + this.width, t.x + t.width),
                i = Math.min(this.y, t.y),
                n = Math.max(this.y + this.height, t.y + t.height);
              return (
                (this.x = e),
                (this.width = r - e),
                (this.y = i),
                (this.height = n - i),
                this
              );
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Rectangle x=" +
                this.x +
                " y=" +
                this.y +
                " width=" +
                this.width +
                " height=" +
                this.height +
                "]"
              );
            }),
            t
          );
        })(),
        ee = (function () {
          function t(t, e, r) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === r && (r = 0),
              (this.x = t),
              (this.y = e),
              (this.radius = r),
              (this.type = Zt.CIRC);
          }
          return (
            (t.prototype.clone = function () {
              return new t(this.x, this.y, this.radius);
            }),
            (t.prototype.contains = function (t, e) {
              if (this.radius <= 0) return !1;
              var r = this.radius * this.radius,
                i = this.x - t,
                n = this.y - e;
              return (i *= i) + (n *= n) <= r;
            }),
            (t.prototype.getBounds = function () {
              return new te(
                this.x - this.radius,
                this.y - this.radius,
                2 * this.radius,
                2 * this.radius
              );
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Circle x=" +
                this.x +
                " y=" +
                this.y +
                " radius=" +
                this.radius +
                "]"
              );
            }),
            t
          );
        })(),
        re = (function () {
          function t(t, e, r, i) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = 0),
              (this.x = t),
              (this.y = e),
              (this.width = r),
              (this.height = i),
              (this.type = Zt.ELIP);
          }
          return (
            (t.prototype.clone = function () {
              return new t(this.x, this.y, this.width, this.height);
            }),
            (t.prototype.contains = function (t, e) {
              if (this.width <= 0 || this.height <= 0) return !1;
              var r = (t - this.x) / this.width,
                i = (e - this.y) / this.height;
              return (r *= r) + (i *= i) <= 1;
            }),
            (t.prototype.getBounds = function () {
              return new te(
                this.x - this.width,
                this.y - this.height,
                this.width,
                this.height
              );
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Ellipse x=" +
                this.x +
                " y=" +
                this.y +
                " width=" +
                this.width +
                " height=" +
                this.height +
                "]"
              );
            }),
            t
          );
        })(),
        ie = (function () {
          function t() {
            for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
              e[r] = t[r];
            var i = Array.isArray(e[0]) ? e[0] : e;
            if ("number" != typeof i[0]) {
              for (var n = [], o = 0, s = i.length; o < s; o++)
                n.push(i[o].x, i[o].y);
              i = n;
            }
            (this.points = i), (this.type = Zt.POLY), (this.closeStroke = !0);
          }
          return (
            (t.prototype.clone = function () {
              var e = new t(this.points.slice());
              return (e.closeStroke = this.closeStroke), e;
            }),
            (t.prototype.contains = function (t, e) {
              for (
                var r = !1, i = this.points.length / 2, n = 0, o = i - 1;
                n < i;
                o = n++
              ) {
                var s = this.points[2 * n],
                  a = this.points[2 * n + 1],
                  h = this.points[2 * o],
                  u = this.points[2 * o + 1];
                a > e != u > e &&
                  t < ((e - a) / (u - a)) * (h - s) + s &&
                  (r = !r);
              }
              return r;
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:PolygoncloseStroke=" +
                this.closeStroke +
                "points=" +
                this.points.reduce(function (t, e) {
                  return t + ", " + e;
                }, "") +
                "]"
              );
            }),
            t
          );
        })(),
        ne = (function () {
          function t(t, e, r, i, n) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = 0),
              void 0 === n && (n = 20),
              (this.x = t),
              (this.y = e),
              (this.width = r),
              (this.height = i),
              (this.radius = n),
              (this.type = Zt.RREC);
          }
          return (
            (t.prototype.clone = function () {
              return new t(
                this.x,
                this.y,
                this.width,
                this.height,
                this.radius
              );
            }),
            (t.prototype.contains = function (t, e) {
              if (this.width <= 0 || this.height <= 0) return !1;
              if (
                t >= this.x &&
                t <= this.x + this.width &&
                e >= this.y &&
                e <= this.y + this.height
              ) {
                if (
                  (e >= this.y + this.radius &&
                    e <= this.y + this.height - this.radius) ||
                  (t >= this.x + this.radius &&
                    t <= this.x + this.width - this.radius)
                )
                  return !0;
                var r = t - (this.x + this.radius),
                  i = e - (this.y + this.radius),
                  n = this.radius * this.radius;
                if (r * r + i * i <= n) return !0;
                if (
                  (r = t - (this.x + this.width - this.radius)) * r + i * i <=
                  n
                )
                  return !0;
                if (
                  r * r + (i = e - (this.y + this.height - this.radius)) * i <=
                  n
                )
                  return !0;
                if ((r = t - (this.x + this.radius)) * r + i * i <= n)
                  return !0;
              }
              return !1;
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:RoundedRectangle x=" +
                this.x +
                " y=" +
                this.y +
                "width=" +
                this.width +
                " height=" +
                this.height +
                " radius=" +
                this.radius +
                "]"
              );
            }),
            t
          );
        })(),
        oe = (function () {
          function t(t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              (this.x = 0),
              (this.y = 0),
              (this.x = t),
              (this.y = e);
          }
          return (
            (t.prototype.clone = function () {
              return new t(this.x, this.y);
            }),
            (t.prototype.copyFrom = function (t) {
              return this.set(t.x, t.y), this;
            }),
            (t.prototype.copyTo = function (t) {
              return t.set(this.x, this.y), t;
            }),
            (t.prototype.equals = function (t) {
              return t.x === this.x && t.y === this.y;
            }),
            (t.prototype.set = function (t, e) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = t),
                (this.x = t),
                (this.y = e),
                this
              );
            }),
            (t.prototype.toString = function () {
              return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]";
            }),
            t
          );
        })(),
        se = (function () {
          function t(t, e, r, i) {
            void 0 === r && (r = 0),
              void 0 === i && (i = 0),
              (this._x = r),
              (this._y = i),
              (this.cb = t),
              (this.scope = e);
          }
          return (
            (t.prototype.clone = function (e, r) {
              return (
                void 0 === e && (e = this.cb),
                void 0 === r && (r = this.scope),
                new t(e, r, this._x, this._y)
              );
            }),
            (t.prototype.set = function (t, e) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = t),
                (this._x === t && this._y === e) ||
                  ((this._x = t), (this._y = e), this.cb.call(this.scope)),
                this
              );
            }),
            (t.prototype.copyFrom = function (t) {
              return (
                (this._x === t.x && this._y === t.y) ||
                  ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)),
                this
              );
            }),
            (t.prototype.copyTo = function (t) {
              return t.set(this._x, this._y), t;
            }),
            (t.prototype.equals = function (t) {
              return t.x === this._x && t.y === this._y;
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]"
              );
            }),
            Object.defineProperty(t.prototype, "x", {
              get: function () {
                return this._x;
              },
              set: function (t) {
                this._x !== t && ((this._x = t), this.cb.call(this.scope));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "y", {
              get: function () {
                return this._y;
              },
              set: function (t) {
                this._y !== t && ((this._y = t), this.cb.call(this.scope));
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        ae = (function () {
          function t(t, e, r, i, n, o) {
            void 0 === t && (t = 1),
              void 0 === e && (e = 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = 1),
              void 0 === n && (n = 0),
              void 0 === o && (o = 0),
              (this.array = null),
              (this.a = t),
              (this.b = e),
              (this.c = r),
              (this.d = i),
              (this.tx = n),
              (this.ty = o);
          }
          return (
            (t.prototype.fromArray = function (t) {
              (this.a = t[0]),
                (this.b = t[1]),
                (this.c = t[3]),
                (this.d = t[4]),
                (this.tx = t[2]),
                (this.ty = t[5]);
            }),
            (t.prototype.set = function (t, e, r, i, n, o) {
              return (
                (this.a = t),
                (this.b = e),
                (this.c = r),
                (this.d = i),
                (this.tx = n),
                (this.ty = o),
                this
              );
            }),
            (t.prototype.toArray = function (t, e) {
              this.array || (this.array = new Float32Array(9));
              var r = e || this.array;
              return (
                t
                  ? ((r[0] = this.a),
                    (r[1] = this.b),
                    (r[2] = 0),
                    (r[3] = this.c),
                    (r[4] = this.d),
                    (r[5] = 0),
                    (r[6] = this.tx),
                    (r[7] = this.ty),
                    (r[8] = 1))
                  : ((r[0] = this.a),
                    (r[1] = this.c),
                    (r[2] = this.tx),
                    (r[3] = this.b),
                    (r[4] = this.d),
                    (r[5] = this.ty),
                    (r[6] = 0),
                    (r[7] = 0),
                    (r[8] = 1)),
                r
              );
            }),
            (t.prototype.apply = function (t, e) {
              e = e || new oe();
              var r = t.x,
                i = t.y;
              return (
                (e.x = this.a * r + this.c * i + this.tx),
                (e.y = this.b * r + this.d * i + this.ty),
                e
              );
            }),
            (t.prototype.applyInverse = function (t, e) {
              e = e || new oe();
              var r = 1 / (this.a * this.d + this.c * -this.b),
                i = t.x,
                n = t.y;
              return (
                (e.x =
                  this.d * r * i +
                  -this.c * r * n +
                  (this.ty * this.c - this.tx * this.d) * r),
                (e.y =
                  this.a * r * n +
                  -this.b * r * i +
                  (-this.ty * this.a + this.tx * this.b) * r),
                e
              );
            }),
            (t.prototype.translate = function (t, e) {
              return (this.tx += t), (this.ty += e), this;
            }),
            (t.prototype.scale = function (t, e) {
              return (
                (this.a *= t),
                (this.d *= e),
                (this.c *= t),
                (this.b *= e),
                (this.tx *= t),
                (this.ty *= e),
                this
              );
            }),
            (t.prototype.rotate = function (t) {
              var e = Math.cos(t),
                r = Math.sin(t),
                i = this.a,
                n = this.c,
                o = this.tx;
              return (
                (this.a = i * e - this.b * r),
                (this.b = i * r + this.b * e),
                (this.c = n * e - this.d * r),
                (this.d = n * r + this.d * e),
                (this.tx = o * e - this.ty * r),
                (this.ty = o * r + this.ty * e),
                this
              );
            }),
            (t.prototype.append = function (t) {
              var e = this.a,
                r = this.b,
                i = this.c,
                n = this.d;
              return (
                (this.a = t.a * e + t.b * i),
                (this.b = t.a * r + t.b * n),
                (this.c = t.c * e + t.d * i),
                (this.d = t.c * r + t.d * n),
                (this.tx = t.tx * e + t.ty * i + this.tx),
                (this.ty = t.tx * r + t.ty * n + this.ty),
                this
              );
            }),
            (t.prototype.setTransform = function (t, e, r, i, n, o, s, a, h) {
              return (
                (this.a = Math.cos(s + h) * n),
                (this.b = Math.sin(s + h) * n),
                (this.c = -Math.sin(s - a) * o),
                (this.d = Math.cos(s - a) * o),
                (this.tx = t - (r * this.a + i * this.c)),
                (this.ty = e - (r * this.b + i * this.d)),
                this
              );
            }),
            (t.prototype.prepend = function (t) {
              var e = this.tx;
              if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                var r = this.a,
                  i = this.c;
                (this.a = r * t.a + this.b * t.c),
                  (this.b = r * t.b + this.b * t.d),
                  (this.c = i * t.a + this.d * t.c),
                  (this.d = i * t.b + this.d * t.d);
              }
              return (
                (this.tx = e * t.a + this.ty * t.c + t.tx),
                (this.ty = e * t.b + this.ty * t.d + t.ty),
                this
              );
            }),
            (t.prototype.decompose = function (t) {
              var e = this.a,
                r = this.b,
                i = this.c,
                n = this.d,
                o = t.pivot,
                s = -Math.atan2(-i, n),
                a = Math.atan2(r, e),
                h = Math.abs(s + a);
              return (
                h < 1e-5 || Math.abs(Jt - h) < 1e-5
                  ? ((t.rotation = a), (t.skew.x = t.skew.y = 0))
                  : ((t.rotation = 0), (t.skew.x = s), (t.skew.y = a)),
                (t.scale.x = Math.sqrt(e * e + r * r)),
                (t.scale.y = Math.sqrt(i * i + n * n)),
                (t.position.x = this.tx + (o.x * e + o.y * i)),
                (t.position.y = this.ty + (o.x * r + o.y * n)),
                t
              );
            }),
            (t.prototype.invert = function () {
              var t = this.a,
                e = this.b,
                r = this.c,
                i = this.d,
                n = this.tx,
                o = t * i - e * r;
              return (
                (this.a = i / o),
                (this.b = -e / o),
                (this.c = -r / o),
                (this.d = t / o),
                (this.tx = (r * this.ty - i * n) / o),
                (this.ty = -(t * this.ty - e * n) / o),
                this
              );
            }),
            (t.prototype.identity = function () {
              return (
                (this.a = 1),
                (this.b = 0),
                (this.c = 0),
                (this.d = 1),
                (this.tx = 0),
                (this.ty = 0),
                this
              );
            }),
            (t.prototype.clone = function () {
              var e = new t();
              return (
                (e.a = this.a),
                (e.b = this.b),
                (e.c = this.c),
                (e.d = this.d),
                (e.tx = this.tx),
                (e.ty = this.ty),
                e
              );
            }),
            (t.prototype.copyTo = function (t) {
              return (
                (t.a = this.a),
                (t.b = this.b),
                (t.c = this.c),
                (t.d = this.d),
                (t.tx = this.tx),
                (t.ty = this.ty),
                t
              );
            }),
            (t.prototype.copyFrom = function (t) {
              return (
                (this.a = t.a),
                (this.b = t.b),
                (this.c = t.c),
                (this.d = t.d),
                (this.tx = t.tx),
                (this.ty = t.ty),
                this
              );
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Matrix a=" +
                this.a +
                " b=" +
                this.b +
                " c=" +
                this.c +
                " d=" +
                this.d +
                " tx=" +
                this.tx +
                " ty=" +
                this.ty +
                "]"
              );
            }),
            Object.defineProperty(t, "IDENTITY", {
              get: function () {
                return new t();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "TEMP_MATRIX", {
              get: function () {
                return new t();
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        he = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        ue = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        le = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        ce = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
        de = [],
        fe = [],
        pe = Math.sign;
      !(function () {
        for (var t = 0; t < 16; t++) {
          var e = [];
          de.push(e);
          for (var r = 0; r < 16; r++)
            for (
              var i = pe(he[t] * he[r] + le[t] * ue[r]),
                n = pe(ue[t] * he[r] + ce[t] * ue[r]),
                o = pe(he[t] * le[r] + le[t] * ce[r]),
                s = pe(ue[t] * le[r] + ce[t] * ce[r]),
                a = 0;
              a < 16;
              a++
            )
              if (he[a] === i && ue[a] === n && le[a] === o && ce[a] === s) {
                e.push(a);
                break;
              }
        }
        for (t = 0; t < 16; t++) {
          var h = new ae();
          h.set(he[t], ue[t], le[t], ce[t], 0, 0), fe.push(h);
        }
      })();
      var _e = {
          E: 0,
          SE: 1,
          S: 2,
          SW: 3,
          W: 4,
          NW: 5,
          N: 6,
          NE: 7,
          MIRROR_VERTICAL: 8,
          MAIN_DIAGONAL: 10,
          MIRROR_HORIZONTAL: 12,
          REVERSE_DIAGONAL: 14,
          uX: function (t) {
            return he[t];
          },
          uY: function (t) {
            return ue[t];
          },
          vX: function (t) {
            return le[t];
          },
          vY: function (t) {
            return ce[t];
          },
          inv: function (t) {
            return 8 & t ? 15 & t : 7 & -t;
          },
          add: function (t, e) {
            return de[t][e];
          },
          sub: function (t, e) {
            return de[t][_e.inv(e)];
          },
          rotate180: function (t) {
            return 4 ^ t;
          },
          isVertical: function (t) {
            return 2 == (3 & t);
          },
          byDirection: function (t, e) {
            return 2 * Math.abs(t) <= Math.abs(e)
              ? e >= 0
                ? _e.S
                : _e.N
              : 2 * Math.abs(e) <= Math.abs(t)
              ? t > 0
                ? _e.E
                : _e.W
              : e > 0
              ? t > 0
                ? _e.SE
                : _e.SW
              : t > 0
              ? _e.NE
              : _e.NW;
          },
          matrixAppendRotationInv: function (t, e, r, i) {
            void 0 === r && (r = 0), void 0 === i && (i = 0);
            var n = fe[_e.inv(e)];
            (n.tx = r), (n.ty = i), t.append(n);
          },
        },
        me = (function () {
          function t() {
            (this.worldTransform = new ae()),
              (this.localTransform = new ae()),
              (this.position = new se(this.onChange, this, 0, 0)),
              (this.scale = new se(this.onChange, this, 1, 1)),
              (this.pivot = new se(this.onChange, this, 0, 0)),
              (this.skew = new se(this.updateSkew, this, 0, 0)),
              (this._rotation = 0),
              (this._cx = 1),
              (this._sx = 0),
              (this._cy = 0),
              (this._sy = 1),
              (this._localID = 0),
              (this._currentLocalID = 0),
              (this._worldID = 0),
              (this._parentID = 0);
          }
          return (
            (t.prototype.onChange = function () {
              this._localID++;
            }),
            (t.prototype.updateSkew = function () {
              (this._cx = Math.cos(this._rotation + this.skew.y)),
                (this._sx = Math.sin(this._rotation + this.skew.y)),
                (this._cy = -Math.sin(this._rotation - this.skew.x)),
                (this._sy = Math.cos(this._rotation - this.skew.x)),
                this._localID++;
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/math:Transform position=(" +
                this.position.x +
                ", " +
                this.position.y +
                ") rotation=" +
                this.rotation +
                " scale=(" +
                this.scale.x +
                ", " +
                this.scale.y +
                ") skew=(" +
                this.skew.x +
                ", " +
                this.skew.y +
                ") ]"
              );
            }),
            (t.prototype.updateLocalTransform = function () {
              var t = this.localTransform;
              this._localID !== this._currentLocalID &&
                ((t.a = this._cx * this.scale.x),
                (t.b = this._sx * this.scale.x),
                (t.c = this._cy * this.scale.y),
                (t.d = this._sy * this.scale.y),
                (t.tx =
                  this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
                (t.ty =
                  this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
                (this._currentLocalID = this._localID),
                (this._parentID = -1));
            }),
            (t.prototype.updateTransform = function (t) {
              var e = this.localTransform;
              if (
                (this._localID !== this._currentLocalID &&
                  ((e.a = this._cx * this.scale.x),
                  (e.b = this._sx * this.scale.x),
                  (e.c = this._cy * this.scale.y),
                  (e.d = this._sy * this.scale.y),
                  (e.tx =
                    this.position.x -
                    (this.pivot.x * e.a + this.pivot.y * e.c)),
                  (e.ty =
                    this.position.y -
                    (this.pivot.x * e.b + this.pivot.y * e.d)),
                  (this._currentLocalID = this._localID),
                  (this._parentID = -1)),
                this._parentID !== t._worldID)
              ) {
                var r = t.worldTransform,
                  i = this.worldTransform;
                (i.a = e.a * r.a + e.b * r.c),
                  (i.b = e.a * r.b + e.b * r.d),
                  (i.c = e.c * r.a + e.d * r.c),
                  (i.d = e.c * r.b + e.d * r.d),
                  (i.tx = e.tx * r.a + e.ty * r.c + r.tx),
                  (i.ty = e.tx * r.b + e.ty * r.d + r.ty),
                  (this._parentID = t._worldID),
                  this._worldID++;
              }
            }),
            (t.prototype.setFromMatrix = function (t) {
              t.decompose(this), this._localID++;
            }),
            Object.defineProperty(t.prototype, "rotation", {
              get: function () {
                return this._rotation;
              },
              set: function (t) {
                this._rotation !== t &&
                  ((this._rotation = t), this.updateSkew());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.IDENTITY = new t()),
            t
          );
        })();
      yt.SORTABLE_CHILDREN = !1;
      var ve = (function () {
          function t() {
            (this.minX = 1 / 0),
              (this.minY = 1 / 0),
              (this.maxX = -1 / 0),
              (this.maxY = -1 / 0),
              (this.rect = null),
              (this.updateID = -1);
          }
          return (
            (t.prototype.isEmpty = function () {
              return this.minX > this.maxX || this.minY > this.maxY;
            }),
            (t.prototype.clear = function () {
              (this.minX = 1 / 0),
                (this.minY = 1 / 0),
                (this.maxX = -1 / 0),
                (this.maxY = -1 / 0);
            }),
            (t.prototype.getRectangle = function (t) {
              return this.minX > this.maxX || this.minY > this.maxY
                ? te.EMPTY
                : (((t = t || new te(0, 0, 1, 1)).x = this.minX),
                  (t.y = this.minY),
                  (t.width = this.maxX - this.minX),
                  (t.height = this.maxY - this.minY),
                  t);
            }),
            (t.prototype.addPoint = function (t) {
              (this.minX = Math.min(this.minX, t.x)),
                (this.maxX = Math.max(this.maxX, t.x)),
                (this.minY = Math.min(this.minY, t.y)),
                (this.maxY = Math.max(this.maxY, t.y));
            }),
            (t.prototype.addPointMatrix = function (t, e) {
              var r = t.a,
                i = t.b,
                n = t.c,
                o = t.d,
                s = t.tx,
                a = t.ty,
                h = r * e.x + n * e.y + s,
                u = i * e.x + o * e.y + a;
              (this.minX = Math.min(this.minX, h)),
                (this.maxX = Math.max(this.maxX, h)),
                (this.minY = Math.min(this.minY, u)),
                (this.maxY = Math.max(this.maxY, u));
            }),
            (t.prototype.addQuad = function (t) {
              var e = this.minX,
                r = this.minY,
                i = this.maxX,
                n = this.maxY,
                o = t[0],
                s = t[1];
              (e = o < e ? o : e),
                (r = s < r ? s : r),
                (i = o > i ? o : i),
                (n = s > n ? s : n),
                (e = (o = t[2]) < e ? o : e),
                (r = (s = t[3]) < r ? s : r),
                (i = o > i ? o : i),
                (n = s > n ? s : n),
                (e = (o = t[4]) < e ? o : e),
                (r = (s = t[5]) < r ? s : r),
                (i = o > i ? o : i),
                (n = s > n ? s : n),
                (e = (o = t[6]) < e ? o : e),
                (r = (s = t[7]) < r ? s : r),
                (i = o > i ? o : i),
                (n = s > n ? s : n),
                (this.minX = e),
                (this.minY = r),
                (this.maxX = i),
                (this.maxY = n);
            }),
            (t.prototype.addFrame = function (t, e, r, i, n) {
              this.addFrameMatrix(t.worldTransform, e, r, i, n);
            }),
            (t.prototype.addFrameMatrix = function (t, e, r, i, n) {
              var o = t.a,
                s = t.b,
                a = t.c,
                h = t.d,
                u = t.tx,
                l = t.ty,
                c = this.minX,
                d = this.minY,
                f = this.maxX,
                p = this.maxY,
                _ = o * e + a * r + u,
                m = s * e + h * r + l;
              (c = _ < c ? _ : c),
                (d = m < d ? m : d),
                (f = _ > f ? _ : f),
                (p = m > p ? m : p),
                (c = (_ = o * i + a * r + u) < c ? _ : c),
                (d = (m = s * i + h * r + l) < d ? m : d),
                (f = _ > f ? _ : f),
                (p = m > p ? m : p),
                (c = (_ = o * e + a * n + u) < c ? _ : c),
                (d = (m = s * e + h * n + l) < d ? m : d),
                (f = _ > f ? _ : f),
                (p = m > p ? m : p),
                (c = (_ = o * i + a * n + u) < c ? _ : c),
                (d = (m = s * i + h * n + l) < d ? m : d),
                (f = _ > f ? _ : f),
                (p = m > p ? m : p),
                (this.minX = c),
                (this.minY = d),
                (this.maxX = f),
                (this.maxY = p);
            }),
            (t.prototype.addVertexData = function (t, e, r) {
              for (
                var i = this.minX,
                  n = this.minY,
                  o = this.maxX,
                  s = this.maxY,
                  a = e;
                a < r;
                a += 2
              ) {
                var h = t[a],
                  u = t[a + 1];
                (i = h < i ? h : i),
                  (n = u < n ? u : n),
                  (o = h > o ? h : o),
                  (s = u > s ? u : s);
              }
              (this.minX = i),
                (this.minY = n),
                (this.maxX = o),
                (this.maxY = s);
            }),
            (t.prototype.addVertices = function (t, e, r, i) {
              this.addVerticesMatrix(t.worldTransform, e, r, i);
            }),
            (t.prototype.addVerticesMatrix = function (t, e, r, i, n, o) {
              void 0 === n && (n = 0), void 0 === o && (o = n);
              for (
                var s = t.a,
                  a = t.b,
                  h = t.c,
                  u = t.d,
                  l = t.tx,
                  c = t.ty,
                  d = this.minX,
                  f = this.minY,
                  p = this.maxX,
                  _ = this.maxY,
                  m = r;
                m < i;
                m += 2
              ) {
                var v = e[m],
                  y = e[m + 1],
                  g = s * v + h * y + l,
                  T = u * y + a * v + c;
                (d = Math.min(d, g - n)),
                  (p = Math.max(p, g + n)),
                  (f = Math.min(f, T - o)),
                  (_ = Math.max(_, T + o));
              }
              (this.minX = d),
                (this.minY = f),
                (this.maxX = p),
                (this.maxY = _);
            }),
            (t.prototype.addBounds = function (t) {
              var e = this.minX,
                r = this.minY,
                i = this.maxX,
                n = this.maxY;
              (this.minX = t.minX < e ? t.minX : e),
                (this.minY = t.minY < r ? t.minY : r),
                (this.maxX = t.maxX > i ? t.maxX : i),
                (this.maxY = t.maxY > n ? t.maxY : n);
            }),
            (t.prototype.addBoundsMask = function (t, e) {
              var r = t.minX > e.minX ? t.minX : e.minX,
                i = t.minY > e.minY ? t.minY : e.minY,
                n = t.maxX < e.maxX ? t.maxX : e.maxX,
                o = t.maxY < e.maxY ? t.maxY : e.maxY;
              if (r <= n && i <= o) {
                var s = this.minX,
                  a = this.minY,
                  h = this.maxX,
                  u = this.maxY;
                (this.minX = r < s ? r : s),
                  (this.minY = i < a ? i : a),
                  (this.maxX = n > h ? n : h),
                  (this.maxY = o > u ? o : u);
              }
            }),
            (t.prototype.addBoundsMatrix = function (t, e) {
              this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
            }),
            (t.prototype.addBoundsArea = function (t, e) {
              var r = t.minX > e.x ? t.minX : e.x,
                i = t.minY > e.y ? t.minY : e.y,
                n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
                o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
              if (r <= n && i <= o) {
                var s = this.minX,
                  a = this.minY,
                  h = this.maxX,
                  u = this.maxY;
                (this.minX = r < s ? r : s),
                  (this.minY = i < a ? i : a),
                  (this.maxX = n > h ? n : h),
                  (this.maxY = o > u ? o : u);
              }
            }),
            (t.prototype.pad = function (t, e) {
              void 0 === t && (t = 0),
                void 0 === e && (e = t),
                this.isEmpty() ||
                  ((this.minX -= t),
                  (this.maxX += t),
                  (this.minY -= e),
                  (this.maxY += e));
            }),
            (t.prototype.addFramePad = function (t, e, r, i, n, o) {
              (t -= n),
                (e -= o),
                (r += n),
                (i += o),
                (this.minX = this.minX < t ? this.minX : t),
                (this.maxX = this.maxX > r ? this.maxX : r),
                (this.minY = this.minY < e ? this.minY : e),
                (this.maxY = this.maxY > i ? this.maxY : i);
            }),
            t
          );
        })(),
        ye = function (t, e) {
          return (ye =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        };
      function ge(t, e) {
        function r() {
          this.constructor = t;
        }
        ye(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var Te = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.tempDisplayObjectParent = null),
              (e.transform = new me()),
              (e.alpha = 1),
              (e.visible = !0),
              (e.renderable = !0),
              (e.parent = null),
              (e.worldAlpha = 1),
              (e._lastSortedIndex = 0),
              (e._zIndex = 0),
              (e.filterArea = null),
              (e.filters = null),
              (e._enabledFilters = null),
              (e._bounds = new ve()),
              (e._localBounds = null),
              (e._boundsID = 0),
              (e._boundsRect = null),
              (e._localBoundsRect = null),
              (e._mask = null),
              (e._destroyed = !1),
              (e.isSprite = !1),
              (e.isMask = !1),
              e
            );
          }
          return (
            ge(e, t),
            (e.mixin = function (t) {
              for (var r = Object.keys(t), i = 0; i < r.length; ++i) {
                var n = r[i];
                Object.defineProperty(
                  e.prototype,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              }
            }),
            (e.prototype._recursivePostUpdateTransform = function () {
              this.parent
                ? (this.parent._recursivePostUpdateTransform(),
                  this.transform.updateTransform(this.parent.transform))
                : this.transform.updateTransform(
                    this._tempDisplayObjectParent.transform
                  );
            }),
            (e.prototype.updateTransform = function () {
              this._boundsID++,
                this.transform.updateTransform(this.parent.transform),
                (this.worldAlpha = this.alpha * this.parent.worldAlpha);
            }),
            (e.prototype.getBounds = function (t, e) {
              return (
                t ||
                  (this.parent
                    ? (this._recursivePostUpdateTransform(),
                      this.updateTransform())
                    : ((this.parent = this._tempDisplayObjectParent),
                      this.updateTransform(),
                      (this.parent = null))),
                this._bounds.updateID !== this._boundsID &&
                  (this.calculateBounds(),
                  (this._bounds.updateID = this._boundsID)),
                e ||
                  (this._boundsRect || (this._boundsRect = new te()),
                  (e = this._boundsRect)),
                this._bounds.getRectangle(e)
              );
            }),
            (e.prototype.getLocalBounds = function (t) {
              t ||
                (this._localBoundsRect || (this._localBoundsRect = new te()),
                (t = this._localBoundsRect)),
                this._localBounds || (this._localBounds = new ve());
              var e = this.transform,
                r = this.parent;
              (this.parent = null),
                (this.transform = this._tempDisplayObjectParent.transform);
              var i = this._bounds,
                n = this._boundsID;
              this._bounds = this._localBounds;
              var o = this.getBounds(!1, t);
              return (
                (this.parent = r),
                (this.transform = e),
                (this._bounds = i),
                (this._bounds.updateID += this._boundsID - n),
                o
              );
            }),
            (e.prototype.toGlobal = function (t, e, r) {
              return (
                void 0 === r && (r = !1),
                r ||
                  (this._recursivePostUpdateTransform(),
                  this.parent
                    ? this.displayObjectUpdateTransform()
                    : ((this.parent = this._tempDisplayObjectParent),
                      this.displayObjectUpdateTransform(),
                      (this.parent = null))),
                this.worldTransform.apply(t, e)
              );
            }),
            (e.prototype.toLocal = function (t, e, r, i) {
              return (
                e && (t = e.toGlobal(t, r, i)),
                i ||
                  (this._recursivePostUpdateTransform(),
                  this.parent
                    ? this.displayObjectUpdateTransform()
                    : ((this.parent = this._tempDisplayObjectParent),
                      this.displayObjectUpdateTransform(),
                      (this.parent = null))),
                this.worldTransform.applyInverse(t, r)
              );
            }),
            (e.prototype.setParent = function (t) {
              if (!t || !t.addChild)
                throw new Error("setParent: Argument must be a Container");
              return t.addChild(this), t;
            }),
            (e.prototype.setTransform = function (t, e, r, i, n, o, s, a, h) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                void 0 === r && (r = 1),
                void 0 === i && (i = 1),
                void 0 === n && (n = 0),
                void 0 === o && (o = 0),
                void 0 === s && (s = 0),
                void 0 === a && (a = 0),
                void 0 === h && (h = 0),
                (this.position.x = t),
                (this.position.y = e),
                (this.scale.x = r || 1),
                (this.scale.y = i || 1),
                (this.rotation = n),
                (this.skew.x = o),
                (this.skew.y = s),
                (this.pivot.x = a),
                (this.pivot.y = h),
                this
              );
            }),
            (e.prototype.destroy = function (t) {
              this.parent && this.parent.removeChild(this),
                this.removeAllListeners(),
                (this.transform = null),
                (this.parent = null),
                (this._bounds = null),
                (this._mask = null),
                (this.filters = null),
                (this.filterArea = null),
                (this.hitArea = null),
                (this.interactive = !1),
                (this.interactiveChildren = !1),
                (this._destroyed = !0);
            }),
            Object.defineProperty(e.prototype, "_tempDisplayObjectParent", {
              get: function () {
                return (
                  null === this.tempDisplayObjectParent &&
                    (this.tempDisplayObjectParent = new xe()),
                  this.tempDisplayObjectParent
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.enableTempParent = function () {
              var t = this.parent;
              return (this.parent = this._tempDisplayObjectParent), t;
            }),
            (e.prototype.disableTempParent = function (t) {
              this.parent = t;
            }),
            Object.defineProperty(e.prototype, "x", {
              get: function () {
                return this.position.x;
              },
              set: function (t) {
                this.transform.position.x = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "y", {
              get: function () {
                return this.position.y;
              },
              set: function (t) {
                this.transform.position.y = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "worldTransform", {
              get: function () {
                return this.transform.worldTransform;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "localTransform", {
              get: function () {
                return this.transform.localTransform;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "position", {
              get: function () {
                return this.transform.position;
              },
              set: function (t) {
                this.transform.position.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "scale", {
              get: function () {
                return this.transform.scale;
              },
              set: function (t) {
                this.transform.scale.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "pivot", {
              get: function () {
                return this.transform.pivot;
              },
              set: function (t) {
                this.transform.pivot.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "skew", {
              get: function () {
                return this.transform.skew;
              },
              set: function (t) {
                this.transform.skew.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "rotation", {
              get: function () {
                return this.transform.rotation;
              },
              set: function (t) {
                this.transform.rotation = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "angle", {
              get: function () {
                return this.transform.rotation * Qt;
              },
              set: function (t) {
                this.transform.rotation = t * $t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "zIndex", {
              get: function () {
                return this._zIndex;
              },
              set: function (t) {
                (this._zIndex = t), this.parent && (this.parent.sortDirty = !0);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "worldVisible", {
              get: function () {
                var t = this;
                do {
                  if (!t.visible) return !1;
                  t = t.parent;
                } while (t);
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mask", {
              get: function () {
                return this._mask;
              },
              set: function (t) {
                var e;
                this._mask &&
                  (((e = this._mask.maskObject || this._mask).renderable = !0),
                  (e.isMask = !1)),
                  (this._mask = t),
                  this._mask &&
                    (((e = this._mask.maskObject || this._mask).renderable =
                      !1),
                    (e.isMask = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(Tt()),
        xe = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.sortDirty = null), e;
          }
          return ge(e, t), e;
        })(Te);
      function Ee(t, e) {
        return t.zIndex === e.zIndex
          ? t._lastSortedIndex - e._lastSortedIndex
          : t.zIndex - e.zIndex;
      }
      Te.prototype.displayObjectUpdateTransform = Te.prototype.updateTransform;
      var be = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.children = []),
            (e.sortableChildren = yt.SORTABLE_CHILDREN),
            (e.sortDirty = !1),
            e
          );
        }
        return (
          ge(e, t),
          (e.prototype.onChildrenChange = function (t) {}),
          (e.prototype.addChild = function () {
            for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
              e[r] = t[r];
            if (e.length > 1)
              for (var i = 0; i < e.length; i++) this.addChild(e[i]);
            else {
              var n = e[0];
              n.parent && n.parent.removeChild(n),
                (n.parent = this),
                (this.sortDirty = !0),
                (n.transform._parentID = -1),
                this.children.push(n),
                this._boundsID++,
                this.onChildrenChange(this.children.length - 1),
                this.emit("childAdded", n, this, this.children.length - 1),
                n.emit("added", this);
            }
            return e[0];
          }),
          (e.prototype.addChildAt = function (t, e) {
            if (e < 0 || e > this.children.length)
              throw new Error(
                t +
                  "addChildAt: The index " +
                  e +
                  " supplied is out of bounds " +
                  this.children.length
              );
            return (
              t.parent && t.parent.removeChild(t),
              (t.parent = this),
              (this.sortDirty = !0),
              (t.transform._parentID = -1),
              this.children.splice(e, 0, t),
              this._boundsID++,
              this.onChildrenChange(e),
              t.emit("added", this),
              this.emit("childAdded", t, this, e),
              t
            );
          }),
          (e.prototype.swapChildren = function (t, e) {
            if (t !== e) {
              var r = this.getChildIndex(t),
                i = this.getChildIndex(e);
              (this.children[r] = e),
                (this.children[i] = t),
                this.onChildrenChange(r < i ? r : i);
            }
          }),
          (e.prototype.getChildIndex = function (t) {
            var e = this.children.indexOf(t);
            if (-1 === e)
              throw new Error(
                "The supplied DisplayObject must be a child of the caller"
              );
            return e;
          }),
          (e.prototype.setChildIndex = function (t, e) {
            if (e < 0 || e >= this.children.length)
              throw new Error(
                "The index " +
                  e +
                  " supplied is out of bounds " +
                  this.children.length
              );
            var r = this.getChildIndex(t);
            Bt(this.children, r, 1),
              this.children.splice(e, 0, t),
              this.onChildrenChange(e);
          }),
          (e.prototype.getChildAt = function (t) {
            if (t < 0 || t >= this.children.length)
              throw new Error("getChildAt: Index (" + t + ") does not exist.");
            return this.children[t];
          }),
          (e.prototype.removeChild = function () {
            for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
              e[r] = t[r];
            if (e.length > 1)
              for (var i = 0; i < e.length; i++) this.removeChild(e[i]);
            else {
              var n = e[0],
                o = this.children.indexOf(n);
              if (-1 === o) return null;
              (n.parent = null),
                (n.transform._parentID = -1),
                Bt(this.children, o, 1),
                this._boundsID++,
                this.onChildrenChange(o),
                n.emit("removed", this),
                this.emit("childRemoved", n, this, o);
            }
            return e[0];
          }),
          (e.prototype.removeChildAt = function (t) {
            var e = this.getChildAt(t);
            return (
              (e.parent = null),
              (e.transform._parentID = -1),
              Bt(this.children, t, 1),
              this._boundsID++,
              this.onChildrenChange(t),
              e.emit("removed", this),
              this.emit("childRemoved", e, this, t),
              e
            );
          }),
          (e.prototype.removeChildren = function (t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = this.children.length);
            var r,
              i = t,
              n = e - i;
            if (n > 0 && n <= e) {
              r = this.children.splice(i, n);
              for (var o = 0; o < r.length; ++o)
                (r[o].parent = null),
                  r[o].transform && (r[o].transform._parentID = -1);
              for (
                this._boundsID++, this.onChildrenChange(t), o = 0;
                o < r.length;
                ++o
              )
                r[o].emit("removed", this),
                  this.emit("childRemoved", r[o], this, o);
              return r;
            }
            if (0 === n && 0 === this.children.length) return [];
            throw new RangeError(
              "removeChildren: numeric values are outside the acceptable range."
            );
          }),
          (e.prototype.sortChildren = function () {
            for (var t = !1, e = 0, r = this.children.length; e < r; ++e) {
              var i = this.children[e];
              (i._lastSortedIndex = e), t || 0 === i.zIndex || (t = !0);
            }
            t && this.children.length > 1 && this.children.sort(Ee),
              (this.sortDirty = !1);
          }),
          (e.prototype.updateTransform = function () {
            this.sortableChildren && this.sortDirty && this.sortChildren(),
              this._boundsID++,
              this.transform.updateTransform(this.parent.transform),
              (this.worldAlpha = this.alpha * this.parent.worldAlpha);
            for (var t = 0, e = this.children.length; t < e; ++t) {
              var r = this.children[t];
              r.visible && r.updateTransform();
            }
          }),
          (e.prototype.calculateBounds = function () {
            this._bounds.clear(), this._calculateBounds();
            for (var t = 0; t < this.children.length; t++) {
              var e = this.children[t];
              if (e.visible && e.renderable)
                if ((e.calculateBounds(), e._mask)) {
                  var r = e._mask.maskObject || e._mask;
                  r.calculateBounds(),
                    this._bounds.addBoundsMask(e._bounds, r._bounds);
                } else
                  e.filterArea
                    ? this._bounds.addBoundsArea(e._bounds, e.filterArea)
                    : this._bounds.addBounds(e._bounds);
            }
            this._bounds.updateID = this._boundsID;
          }),
          (e.prototype.getLocalBounds = function (e, r) {
            void 0 === r && (r = !1);
            var i = t.prototype.getLocalBounds.call(this, e);
            if (!r)
              for (var n = 0, o = this.children.length; n < o; ++n) {
                var s = this.children[n];
                s.visible && s.updateTransform();
              }
            return i;
          }),
          (e.prototype._calculateBounds = function () {}),
          (e.prototype.render = function (t) {
            if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
              if (this._mask || (this.filters && this.filters.length))
                this.renderAdvanced(t);
              else {
                this._render(t);
                for (var e = 0, r = this.children.length; e < r; ++e)
                  this.children[e].render(t);
              }
          }),
          (e.prototype.renderAdvanced = function (t) {
            t.batch.flush();
            var e = this.filters,
              r = this._mask;
            if (e) {
              this._enabledFilters || (this._enabledFilters = []),
                (this._enabledFilters.length = 0);
              for (var i = 0; i < e.length; i++)
                e[i].enabled && this._enabledFilters.push(e[i]);
              this._enabledFilters.length &&
                t.filter.push(this, this._enabledFilters);
            }
            r && t.mask.push(this, this._mask), this._render(t), (i = 0);
            for (var n = this.children.length; i < n; i++)
              this.children[i].render(t);
            t.batch.flush(),
              r && t.mask.pop(this),
              e &&
                this._enabledFilters &&
                this._enabledFilters.length &&
                t.filter.pop();
          }),
          (e.prototype._render = function (t) {}),
          (e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this), (this.sortDirty = !1);
            var r = "boolean" == typeof e ? e : e && e.children,
              i = this.removeChildren(0, this.children.length);
            if (r) for (var n = 0; n < i.length; ++n) i[n].destroy(e);
          }),
          Object.defineProperty(e.prototype, "width", {
            get: function () {
              return this.scale.x * this.getLocalBounds().width;
            },
            set: function (t) {
              var e = this.getLocalBounds().width;
              (this.scale.x = 0 !== e ? t / e : 1), (this._width = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "height", {
            get: function () {
              return this.scale.y * this.getLocalBounds().height;
            },
            set: function (t) {
              var e = this.getLocalBounds().height;
              (this.scale.y = 0 !== e ? t / e : 1), (this._height = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Te);
      (be.prototype.containerUpdateTransform = be.prototype.updateTransform),
        Te.mixin({
          accessible: !1,
          accessibleTitle: null,
          accessibleHint: null,
          tabIndex: 0,
          _accessibleActive: !1,
          _accessibleDiv: null,
          accessibleType: "button",
          accessiblePointerEvents: "auto",
          accessibleChildren: !0,
          renderId: -1,
        });
      var Ae,
        Oe = (function () {
          function t(t) {
            (this.debug = !1),
              (this._isActive = !1),
              (this._isMobileAccessibility = !1),
              (this.pool = []),
              (this.renderId = 0),
              (this.children = []),
              (this.androidUpdateCount = 0),
              (this.androidUpdateFrequency = 500),
              (this._hookDiv = null),
              ($.tablet || $.phone) && this.createTouchHook();
            var e = document.createElement("div");
            (e.style.width = "100px"),
              (e.style.height = "100px"),
              (e.style.position = "absolute"),
              (e.style.top = "0px"),
              (e.style.left = "0px"),
              (e.style.zIndex = (2).toString()),
              (this.div = e),
              (this.renderer = t),
              (this._onKeyDown = this._onKeyDown.bind(this)),
              (this._onMouseMove = this._onMouseMove.bind(this)),
              self.addEventListener("keydown", this._onKeyDown, !1);
          }
          return (
            Object.defineProperty(t.prototype, "isActive", {
              get: function () {
                return this._isActive;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "isMobileAccessibility", {
              get: function () {
                return this._isMobileAccessibility;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.createTouchHook = function () {
              var t = this,
                e = document.createElement("button");
              (e.style.width = "1px"),
                (e.style.height = "1px"),
                (e.style.position = "absolute"),
                (e.style.top = "-1000px"),
                (e.style.left = "-1000px"),
                (e.style.zIndex = (2).toString()),
                (e.style.backgroundColor = "#FF0000"),
                (e.title = "select to enable accessibility for this content"),
                e.addEventListener("focus", function () {
                  (t._isMobileAccessibility = !0),
                    t.activate(),
                    t.destroyTouchHook();
                }),
                document.body.appendChild(e),
                (this._hookDiv = e);
            }),
            (t.prototype.destroyTouchHook = function () {
              this._hookDiv &&
                (document.body.removeChild(this._hookDiv),
                (this._hookDiv = null));
            }),
            (t.prototype.activate = function () {
              var t;
              this._isActive ||
                ((this._isActive = !0),
                self.document.addEventListener(
                  "mousemove",
                  this._onMouseMove,
                  !0
                ),
                self.removeEventListener("keydown", this._onKeyDown, !1),
                this.renderer.on("postrender", this.update, this),
                null === (t = this.renderer.view.parentNode) ||
                  void 0 === t ||
                  t.appendChild(this.div));
            }),
            (t.prototype.deactivate = function () {
              var t;
              this._isActive &&
                !this._isMobileAccessibility &&
                ((this._isActive = !1),
                self.document.removeEventListener(
                  "mousemove",
                  this._onMouseMove,
                  !0
                ),
                self.addEventListener("keydown", this._onKeyDown, !1),
                this.renderer.off("postrender", this.update),
                null === (t = this.div.parentNode) ||
                  void 0 === t ||
                  t.removeChild(this.div));
            }),
            (t.prototype.updateAccessibleObjects = function (t) {
              if (t.visible && t.accessibleChildren) {
                t.accessible &&
                  t.interactive &&
                  (t._accessibleActive || this.addChild(t),
                  (t.renderId = this.renderId));
                for (var e = t.children, r = 0; r < e.length; r++)
                  this.updateAccessibleObjects(e[r]);
              }
            }),
            (t.prototype.update = function () {
              var t = performance.now();
              if (
                !($.android.device && t < this.androidUpdateCount) &&
                ((this.androidUpdateCount = t + this.androidUpdateFrequency),
                this.renderer.renderingToScreen)
              ) {
                this.renderer._lastObjectRendered &&
                  this.updateAccessibleObjects(
                    this.renderer._lastObjectRendered
                  );
                var e = this.renderer.view.getBoundingClientRect(),
                  r = e.left,
                  i = e.top,
                  n = e.width,
                  o = e.height,
                  s = this.renderer,
                  a = s.width,
                  h = s.height,
                  u = s.resolution,
                  l = (n / a) * u,
                  c = (o / h) * u,
                  d = this.div;
                (d.style.left = r + "px"),
                  (d.style.top = i + "px"),
                  (d.style.width = a + "px"),
                  (d.style.height = h + "px");
                for (var f = 0; f < this.children.length; f++) {
                  var p = this.children[f];
                  if (p.renderId !== this.renderId)
                    (p._accessibleActive = !1),
                      Bt(this.children, f, 1),
                      this.div.removeChild(p._accessibleDiv),
                      this.pool.push(p._accessibleDiv),
                      (p._accessibleDiv = null),
                      f--;
                  else {
                    d = p._accessibleDiv;
                    var _ = p.hitArea,
                      m = p.worldTransform;
                    p.hitArea
                      ? ((d.style.left = (m.tx + _.x * m.a) * l + "px"),
                        (d.style.top = (m.ty + _.y * m.d) * c + "px"),
                        (d.style.width = _.width * m.a * l + "px"),
                        (d.style.height = _.height * m.d * c + "px"))
                      : ((_ = p.getBounds()),
                        this.capHitArea(_),
                        (d.style.left = _.x * l + "px"),
                        (d.style.top = _.y * c + "px"),
                        (d.style.width = _.width * l + "px"),
                        (d.style.height = _.height * c + "px"),
                        d.title !== p.accessibleTitle &&
                          null !== p.accessibleTitle &&
                          (d.title = p.accessibleTitle),
                        d.getAttribute("aria-label") !== p.accessibleHint &&
                          null !== p.accessibleHint &&
                          d.setAttribute("aria-label", p.accessibleHint)),
                      (p.accessibleTitle === d.title &&
                        p.tabIndex === d.tabIndex) ||
                        ((d.title = p.accessibleTitle),
                        (d.tabIndex = p.tabIndex),
                        this.debug && this.updateDebugHTML(d));
                  }
                }
                this.renderId++;
              }
            }),
            (t.prototype.updateDebugHTML = function (t) {
              t.innerHTML =
                "type: " +
                t.type +
                "</br> title : " +
                t.title +
                "</br> tabIndex: " +
                t.tabIndex;
            }),
            (t.prototype.capHitArea = function (t) {
              t.x < 0 && ((t.width += t.x), (t.x = 0)),
                t.y < 0 && ((t.height += t.y), (t.y = 0));
              var e = this.renderer,
                r = e.width,
                i = e.height;
              t.x + t.width > r && (t.width = r - t.x),
                t.y + t.height > i && (t.height = i - t.y);
            }),
            (t.prototype.addChild = function (t) {
              var e = this.pool.pop();
              e ||
                (((e = document.createElement("button")).style.width = "100px"),
                (e.style.height = "100px"),
                (e.style.backgroundColor = this.debug
                  ? "rgba(255,255,255,0.5)"
                  : "transparent"),
                (e.style.position = "absolute"),
                (e.style.zIndex = (2).toString()),
                (e.style.borderStyle = "none"),
                navigator.userAgent.toLowerCase().indexOf("chrome") > -1
                  ? e.setAttribute("aria-live", "off")
                  : e.setAttribute("aria-live", "polite"),
                navigator.userAgent.match(/rv:.*Gecko\//)
                  ? e.setAttribute("aria-relevant", "additions")
                  : e.setAttribute("aria-relevant", "text"),
                e.addEventListener("click", this._onClick.bind(this)),
                e.addEventListener("focus", this._onFocus.bind(this)),
                e.addEventListener("focusout", this._onFocusOut.bind(this))),
                (e.style.pointerEvents = t.accessiblePointerEvents),
                (e.type = t.accessibleType),
                t.accessibleTitle && null !== t.accessibleTitle
                  ? (e.title = t.accessibleTitle)
                  : (t.accessibleHint && null !== t.accessibleHint) ||
                    (e.title = "displayObject " + t.tabIndex),
                t.accessibleHint &&
                  null !== t.accessibleHint &&
                  e.setAttribute("aria-label", t.accessibleHint),
                this.debug && this.updateDebugHTML(e),
                (t._accessibleActive = !0),
                (t._accessibleDiv = e),
                (e.displayObject = t),
                this.children.push(t),
                this.div.appendChild(t._accessibleDiv),
                (t._accessibleDiv.tabIndex = t.tabIndex);
            }),
            (t.prototype._onClick = function (t) {
              var e = this.renderer.plugins.interaction,
                r = t.target.displayObject,
                i = e.eventData;
              e.dispatchEvent(r, "click", i),
                e.dispatchEvent(r, "pointertap", i),
                e.dispatchEvent(r, "tap", i);
            }),
            (t.prototype._onFocus = function (t) {
              t.target.getAttribute("aria-live") ||
                t.target.setAttribute("aria-live", "assertive");
              var e = this.renderer.plugins.interaction,
                r = t.target.displayObject,
                i = e.eventData;
              e.dispatchEvent(r, "mouseover", i);
            }),
            (t.prototype._onFocusOut = function (t) {
              t.target.getAttribute("aria-live") ||
                t.target.setAttribute("aria-live", "polite");
              var e = this.renderer.plugins.interaction,
                r = t.target.displayObject,
                i = e.eventData;
              e.dispatchEvent(r, "mouseout", i);
            }),
            (t.prototype._onKeyDown = function (t) {
              9 === t.keyCode && this.activate();
            }),
            (t.prototype._onMouseMove = function (t) {
              (0 === t.movementX && 0 === t.movementY) || this.deactivate();
            }),
            (t.prototype.destroy = function () {
              this.destroyTouchHook(),
                (this.div = null),
                self.document.removeEventListener(
                  "mousemove",
                  this._onMouseMove,
                  !0
                ),
                self.removeEventListener("keydown", this._onKeyDown),
                (this.pool = null),
                (this.children = null),
                (this.renderer = null);
            }),
            t
          );
        })();
      (yt.TARGET_FPMS = 0.06),
        (function (t) {
          (t[(t.INTERACTION = 50)] = "INTERACTION"),
            (t[(t.HIGH = 25)] = "HIGH"),
            (t[(t.NORMAL = 0)] = "NORMAL"),
            (t[(t.LOW = -25)] = "LOW"),
            (t[(t.UTILITY = -50)] = "UTILITY");
        })(Ae || (Ae = {}));
      var Se = (function () {
          function t(t, e, r, i) {
            void 0 === e && (e = null),
              void 0 === r && (r = 0),
              void 0 === i && (i = !1),
              (this.next = null),
              (this.previous = null),
              (this._destroyed = !1),
              (this.fn = t),
              (this.context = e),
              (this.priority = r),
              (this.once = i);
          }
          return (
            (t.prototype.match = function (t, e) {
              return (
                void 0 === e && (e = null), this.fn === t && this.context === e
              );
            }),
            (t.prototype.emit = function (t) {
              this.fn &&
                (this.context ? this.fn.call(this.context, t) : this.fn(t));
              var e = this.next;
              return (
                this.once && this.destroy(!0),
                this._destroyed && (this.next = null),
                e
              );
            }),
            (t.prototype.connect = function (t) {
              (this.previous = t),
                t.next && (t.next.previous = this),
                (this.next = t.next),
                (t.next = this);
            }),
            (t.prototype.destroy = function (t) {
              void 0 === t && (t = !1),
                (this._destroyed = !0),
                (this.fn = null),
                (this.context = null),
                this.previous && (this.previous.next = this.next),
                this.next && (this.next.previous = this.previous);
              var e = this.next;
              return (this.next = t ? null : e), (this.previous = null), e;
            }),
            t
          );
        })(),
        Re = (function () {
          function t() {
            var t = this;
            (this.autoStart = !1),
              (this.deltaTime = 1),
              (this.lastTime = -1),
              (this.speed = 1),
              (this.started = !1),
              (this._requestId = null),
              (this._maxElapsedMS = 100),
              (this._minElapsedMS = 0),
              (this._protected = !1),
              (this._lastFrame = -1),
              (this._head = new Se(null, null, 1 / 0)),
              (this.deltaMS = 1 / yt.TARGET_FPMS),
              (this.elapsedMS = 1 / yt.TARGET_FPMS),
              (this._tick = function (e) {
                (t._requestId = null),
                  t.started &&
                    (t.update(e),
                    t.started &&
                      null === t._requestId &&
                      t._head.next &&
                      (t._requestId = requestAnimationFrame(t._tick)));
              });
          }
          return (
            (t.prototype._requestIfNeeded = function () {
              null === this._requestId &&
                this._head.next &&
                ((this.lastTime = performance.now()),
                (this._lastFrame = this.lastTime),
                (this._requestId = requestAnimationFrame(this._tick)));
            }),
            (t.prototype._cancelIfNeeded = function () {
              null !== this._requestId &&
                (cancelAnimationFrame(this._requestId),
                (this._requestId = null));
            }),
            (t.prototype._startIfPossible = function () {
              this.started
                ? this._requestIfNeeded()
                : this.autoStart && this.start();
            }),
            (t.prototype.add = function (t, e, r) {
              return (
                void 0 === r && (r = Ae.NORMAL),
                this._addListener(new Se(t, e, r))
              );
            }),
            (t.prototype.addOnce = function (t, e, r) {
              return (
                void 0 === r && (r = Ae.NORMAL),
                this._addListener(new Se(t, e, r, !0))
              );
            }),
            (t.prototype._addListener = function (t) {
              var e = this._head.next,
                r = this._head;
              if (e) {
                for (; e; ) {
                  if (t.priority > e.priority) {
                    t.connect(r);
                    break;
                  }
                  (r = e), (e = e.next);
                }
                t.previous || t.connect(r);
              } else t.connect(r);
              return this._startIfPossible(), this;
            }),
            (t.prototype.remove = function (t, e) {
              for (var r = this._head.next; r; )
                r = r.match(t, e) ? r.destroy() : r.next;
              return this._head.next || this._cancelIfNeeded(), this;
            }),
            Object.defineProperty(t.prototype, "count", {
              get: function () {
                if (!this._head) return 0;
                for (var t = 0, e = this._head; (e = e.next); ) t++;
                return t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.start = function () {
              this.started || ((this.started = !0), this._requestIfNeeded());
            }),
            (t.prototype.stop = function () {
              this.started && ((this.started = !1), this._cancelIfNeeded());
            }),
            (t.prototype.destroy = function () {
              if (!this._protected) {
                this.stop();
                for (var t = this._head.next; t; ) t = t.destroy(!0);
                this._head.destroy(), (this._head = null);
              }
            }),
            (t.prototype.update = function (t) {
              var e;
              if (
                (void 0 === t && (t = performance.now()), t > this.lastTime)
              ) {
                if (
                  ((e = this.elapsedMS = t - this.lastTime) >
                    this._maxElapsedMS && (e = this._maxElapsedMS),
                  (e *= this.speed),
                  this._minElapsedMS)
                ) {
                  var r = (t - this._lastFrame) | 0;
                  if (r < this._minElapsedMS) return;
                  this._lastFrame = t - (r % this._minElapsedMS);
                }
                (this.deltaMS = e),
                  (this.deltaTime = this.deltaMS * yt.TARGET_FPMS);
                for (var i = this._head, n = i.next; n; )
                  n = n.emit(this.deltaTime);
                i.next || this._cancelIfNeeded();
              } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
              this.lastTime = t;
            }),
            Object.defineProperty(t.prototype, "FPS", {
              get: function () {
                return 1e3 / this.elapsedMS;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "minFPS", {
              get: function () {
                return 1e3 / this._maxElapsedMS;
              },
              set: function (t) {
                var e = Math.min(this.maxFPS, t),
                  r = Math.min(Math.max(0, e) / 1e3, yt.TARGET_FPMS);
                this._maxElapsedMS = 1 / r;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "maxFPS", {
              get: function () {
                return this._minElapsedMS
                  ? Math.round(1e3 / this._minElapsedMS)
                  : 0;
              },
              set: function (t) {
                if (0 === t) this._minElapsedMS = 0;
                else {
                  var e = Math.max(this.minFPS, t);
                  this._minElapsedMS = 1 / (e / 1e3);
                }
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "shared", {
              get: function () {
                if (!t._shared) {
                  var e = (t._shared = new t());
                  (e.autoStart = !0), (e._protected = !0);
                }
                return t._shared;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "system", {
              get: function () {
                if (!t._system) {
                  var e = (t._system = new t());
                  (e.autoStart = !0), (e._protected = !0);
                }
                return t._system;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        Ie = (function () {
          function t() {}
          return (
            (t.init = function (t) {
              var e = this;
              (t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
                Object.defineProperty(this, "ticker", {
                  set: function (t) {
                    this._ticker && this._ticker.remove(this.render, this),
                      (this._ticker = t),
                      t && t.add(this.render, this, Ae.LOW);
                  },
                  get: function () {
                    return this._ticker;
                  },
                }),
                (this.stop = function () {
                  e._ticker.stop();
                }),
                (this.start = function () {
                  e._ticker.start();
                }),
                (this._ticker = null),
                (this.ticker = t.sharedTicker ? Re.shared : new Re()),
                t.autoStart && this.start();
            }),
            (t.destroy = function () {
              if (this._ticker) {
                var t = this._ticker;
                (this.ticker = null), t.destroy();
              }
            }),
            t
          );
        })(),
        we = (function () {
          function t() {
            (this.pressure = 0),
              (this.rotationAngle = 0),
              (this.twist = 0),
              (this.tangentialPressure = 0),
              (this.global = new oe()),
              (this.target = null),
              (this.originalEvent = null),
              (this.identifier = null),
              (this.isPrimary = !1),
              (this.button = 0),
              (this.buttons = 0),
              (this.width = 0),
              (this.height = 0),
              (this.tiltX = 0),
              (this.tiltY = 0),
              (this.pointerType = null),
              (this.pressure = 0),
              (this.rotationAngle = 0),
              (this.twist = 0),
              (this.tangentialPressure = 0);
          }
          return (
            Object.defineProperty(t.prototype, "pointerId", {
              get: function () {
                return this.identifier;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.getLocalPosition = function (t, e, r) {
              return t.worldTransform.applyInverse(r || this.global, e);
            }),
            (t.prototype.copyEvent = function (t) {
              "isPrimary" in t && t.isPrimary && (this.isPrimary = !0),
                (this.button = "button" in t && t.button);
              var e = "buttons" in t && t.buttons;
              (this.buttons = Number.isInteger(e)
                ? e
                : "which" in t && t.which),
                (this.width = "width" in t && t.width),
                (this.height = "height" in t && t.height),
                (this.tiltX = "tiltX" in t && t.tiltX),
                (this.tiltY = "tiltY" in t && t.tiltY),
                (this.pointerType = "pointerType" in t && t.pointerType),
                (this.pressure = "pressure" in t && t.pressure),
                (this.rotationAngle = "rotationAngle" in t && t.rotationAngle),
                (this.twist = ("twist" in t && t.twist) || 0),
                (this.tangentialPressure =
                  ("tangentialPressure" in t && t.tangentialPressure) || 0);
            }),
            (t.prototype.reset = function () {
              this.isPrimary = !1;
            }),
            t
          );
        })(),
        Pe = function (t, e) {
          return (Pe =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        Me = (function () {
          function t() {
            (this.stopped = !1),
              (this.stopsPropagatingAt = null),
              (this.stopPropagationHint = !1),
              (this.target = null),
              (this.currentTarget = null),
              (this.type = null),
              (this.data = null);
          }
          return (
            (t.prototype.stopPropagation = function () {
              (this.stopped = !0),
                (this.stopPropagationHint = !0),
                (this.stopsPropagatingAt = this.currentTarget);
            }),
            (t.prototype.reset = function () {
              (this.stopped = !1),
                (this.stopsPropagatingAt = null),
                (this.stopPropagationHint = !1),
                (this.currentTarget = null),
                (this.target = null);
            }),
            t
          );
        })(),
        De = (function () {
          function t(e) {
            (this._pointerId = e), (this._flags = t.FLAGS.NONE);
          }
          return (
            (t.prototype._doSet = function (t, e) {
              this._flags = e ? this._flags | t : this._flags & ~t;
            }),
            Object.defineProperty(t.prototype, "pointerId", {
              get: function () {
                return this._pointerId;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "flags", {
              get: function () {
                return this._flags;
              },
              set: function (t) {
                this._flags = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "none", {
              get: function () {
                return this._flags === t.FLAGS.NONE;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "over", {
              get: function () {
                return 0 != (this._flags & t.FLAGS.OVER);
              },
              set: function (e) {
                this._doSet(t.FLAGS.OVER, e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "rightDown", {
              get: function () {
                return 0 != (this._flags & t.FLAGS.RIGHT_DOWN);
              },
              set: function (e) {
                this._doSet(t.FLAGS.RIGHT_DOWN, e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "leftDown", {
              get: function () {
                return 0 != (this._flags & t.FLAGS.LEFT_DOWN);
              },
              set: function (e) {
                this._doSet(t.FLAGS.LEFT_DOWN, e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.FLAGS = Object.freeze({
              NONE: 0,
              OVER: 1,
              LEFT_DOWN: 2,
              RIGHT_DOWN: 4,
            })),
            t
          );
        })(),
        Ce = (function () {
          function t() {
            this._tempPoint = new oe();
          }
          return (
            (t.prototype.recursiveFindHit = function (t, e, r, i, n) {
              if (!e || !e.visible) return !1;
              var o = t.data.global,
                s = !1,
                a = (n = e.interactive || n),
                h = !0;
              if (
                (e.hitArea
                  ? (i &&
                      (e.worldTransform.applyInverse(o, this._tempPoint),
                      e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)
                        ? (s = !0)
                        : ((i = !1), (h = !1))),
                    (a = !1))
                  : e._mask &&
                    i &&
                    ((e._mask.containsPoint && e._mask.containsPoint(o)) ||
                      (i = !1)),
                h && e.interactiveChildren && e.children)
              )
                for (var u = e.children, l = u.length - 1; l >= 0; l--) {
                  var c = u[l],
                    d = this.recursiveFindHit(t, c, r, i, a);
                  if (d) {
                    if (!c.parent) continue;
                    (a = !1), d && (t.target && (i = !1), (s = !0));
                  }
                }
              return (
                n &&
                  (i &&
                    !t.target &&
                    !e.hitArea &&
                    e.containsPoint &&
                    e.containsPoint(o) &&
                    (s = !0),
                  e.interactive &&
                    (s && !t.target && (t.target = e), r && r(t, e, !!s))),
                s
              );
            }),
            (t.prototype.findHit = function (t, e, r, i) {
              this.recursiveFindHit(t, e, r, i, !1);
            }),
            t
          );
        })(),
        Ne = {
          interactive: !1,
          interactiveChildren: !0,
          hitArea: null,
          get buttonMode() {
            return "pointer" === this.cursor;
          },
          set buttonMode(t) {
            t
              ? (this.cursor = "pointer")
              : "pointer" === this.cursor && (this.cursor = null);
          },
          cursor: null,
          get trackedPointers() {
            return (
              void 0 === this._trackedPointers && (this._trackedPointers = {}),
              this._trackedPointers
            );
          },
          _trackedPointers: void 0,
        };
      Te.mixin(Ne);
      var Le = { target: null, data: { global: null } },
        Fe = (function (t) {
          function e(e, r) {
            var i = t.call(this) || this;
            return (
              (r = r || {}),
              (i.renderer = e),
              (i.autoPreventDefault =
                void 0 === r.autoPreventDefault || r.autoPreventDefault),
              (i.interactionFrequency = r.interactionFrequency || 10),
              (i.mouse = new we()),
              (i.mouse.identifier = 1),
              i.mouse.global.set(-999999),
              (i.activeInteractionData = {}),
              (i.activeInteractionData[1] = i.mouse),
              (i.interactionDataPool = []),
              (i.eventData = new Me()),
              (i.interactionDOMElement = null),
              (i.moveWhenInside = !1),
              (i.eventsAdded = !1),
              (i.tickerAdded = !1),
              (i.mouseOverRenderer = !("PointerEvent" in self)),
              (i.supportsTouchEvents = "ontouchstart" in self),
              (i.supportsPointerEvents = !!self.PointerEvent),
              (i.onPointerUp = i.onPointerUp.bind(i)),
              (i.processPointerUp = i.processPointerUp.bind(i)),
              (i.onPointerCancel = i.onPointerCancel.bind(i)),
              (i.processPointerCancel = i.processPointerCancel.bind(i)),
              (i.onPointerDown = i.onPointerDown.bind(i)),
              (i.processPointerDown = i.processPointerDown.bind(i)),
              (i.onPointerMove = i.onPointerMove.bind(i)),
              (i.processPointerMove = i.processPointerMove.bind(i)),
              (i.onPointerOut = i.onPointerOut.bind(i)),
              (i.processPointerOverOut = i.processPointerOverOut.bind(i)),
              (i.onPointerOver = i.onPointerOver.bind(i)),
              (i.cursorStyles = { default: "inherit", pointer: "pointer" }),
              (i.currentCursorMode = null),
              (i.cursor = null),
              (i.resolution = 1),
              (i.delayedEvents = []),
              (i.search = new Ce()),
              (i._tempDisplayObject = new xe()),
              (i._useSystemTicker =
                void 0 === r.useSystemTicker || r.useSystemTicker),
              i.setTargetElement(i.renderer.view, i.renderer.resolution),
              i
            );
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              Pe(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            Object.defineProperty(e.prototype, "useSystemTicker", {
              get: function () {
                return this._useSystemTicker;
              },
              set: function (t) {
                (this._useSystemTicker = t),
                  t ? this.addTickerListener() : this.removeTickerListener();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "lastObjectRendered", {
              get: function () {
                return (
                  this.renderer._lastObjectRendered || this._tempDisplayObject
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.hitTest = function (t, e) {
              return (
                (Le.target = null),
                (Le.data.global = t),
                e || (e = this.lastObjectRendered),
                this.processInteractive(Le, e, null, !0),
                Le.target
              );
            }),
            (e.prototype.setTargetElement = function (t, e) {
              void 0 === e && (e = 1),
                this.removeTickerListener(),
                this.removeEvents(),
                (this.interactionDOMElement = t),
                (this.resolution = e),
                this.addEvents(),
                this.addTickerListener();
            }),
            (e.prototype.addTickerListener = function () {
              !this.tickerAdded &&
                this.interactionDOMElement &&
                this._useSystemTicker &&
                (Re.system.add(this.tickerUpdate, this, Ae.INTERACTION),
                (this.tickerAdded = !0));
            }),
            (e.prototype.removeTickerListener = function () {
              this.tickerAdded &&
                (Re.system.remove(this.tickerUpdate, this),
                (this.tickerAdded = !1));
            }),
            (e.prototype.addEvents = function () {
              if (!this.eventsAdded && this.interactionDOMElement) {
                var t = this.interactionDOMElement.style;
                self.navigator.msPointerEnabled
                  ? ((t.msContentZooming = "none"), (t.msTouchAction = "none"))
                  : this.supportsPointerEvents && (t.touchAction = "none"),
                  this.supportsPointerEvents
                    ? (self.document.addEventListener(
                        "pointermove",
                        this.onPointerMove,
                        !0
                      ),
                      this.interactionDOMElement.addEventListener(
                        "pointerdown",
                        this.onPointerDown,
                        !0
                      ),
                      this.interactionDOMElement.addEventListener(
                        "pointerleave",
                        this.onPointerOut,
                        !0
                      ),
                      this.interactionDOMElement.addEventListener(
                        "pointerover",
                        this.onPointerOver,
                        !0
                      ),
                      self.addEventListener(
                        "pointercancel",
                        this.onPointerCancel,
                        !0
                      ),
                      self.addEventListener("pointerup", this.onPointerUp, !0))
                    : (self.document.addEventListener(
                        "mousemove",
                        this.onPointerMove,
                        !0
                      ),
                      this.interactionDOMElement.addEventListener(
                        "mousedown",
                        this.onPointerDown,
                        !0
                      ),
                      this.interactionDOMElement.addEventListener(
                        "mouseout",
                        this.onPointerOut,
                        !0
                      ),
                      this.interactionDOMElement.addEventListener(
                        "mouseover",
                        this.onPointerOver,
                        !0
                      ),
                      self.addEventListener("mouseup", this.onPointerUp, !0)),
                  this.supportsTouchEvents &&
                    (this.interactionDOMElement.addEventListener(
                      "touchstart",
                      this.onPointerDown,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "touchcancel",
                      this.onPointerCancel,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "touchend",
                      this.onPointerUp,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "touchmove",
                      this.onPointerMove,
                      !0
                    )),
                  (this.eventsAdded = !0);
              }
            }),
            (e.prototype.removeEvents = function () {
              if (this.eventsAdded && this.interactionDOMElement) {
                var t = this.interactionDOMElement.style;
                self.navigator.msPointerEnabled
                  ? ((t.msContentZooming = ""), (t.msTouchAction = ""))
                  : this.supportsPointerEvents && (t.touchAction = ""),
                  this.supportsPointerEvents
                    ? (self.document.removeEventListener(
                        "pointermove",
                        this.onPointerMove,
                        !0
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "pointerdown",
                        this.onPointerDown,
                        !0
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "pointerleave",
                        this.onPointerOut,
                        !0
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "pointerover",
                        this.onPointerOver,
                        !0
                      ),
                      self.removeEventListener(
                        "pointercancel",
                        this.onPointerCancel,
                        !0
                      ),
                      self.removeEventListener(
                        "pointerup",
                        this.onPointerUp,
                        !0
                      ))
                    : (self.document.removeEventListener(
                        "mousemove",
                        this.onPointerMove,
                        !0
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "mousedown",
                        this.onPointerDown,
                        !0
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "mouseout",
                        this.onPointerOut,
                        !0
                      ),
                      this.interactionDOMElement.removeEventListener(
                        "mouseover",
                        this.onPointerOver,
                        !0
                      ),
                      self.removeEventListener(
                        "mouseup",
                        this.onPointerUp,
                        !0
                      )),
                  this.supportsTouchEvents &&
                    (this.interactionDOMElement.removeEventListener(
                      "touchstart",
                      this.onPointerDown,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "touchcancel",
                      this.onPointerCancel,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "touchend",
                      this.onPointerUp,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "touchmove",
                      this.onPointerMove,
                      !0
                    )),
                  (this.interactionDOMElement = null),
                  (this.eventsAdded = !1);
              }
            }),
            (e.prototype.tickerUpdate = function (t) {
              (this._deltaTime += t),
                this._deltaTime < this.interactionFrequency ||
                  ((this._deltaTime = 0), this.update());
            }),
            (e.prototype.update = function () {
              if (this.interactionDOMElement)
                if (this._didMove) this._didMove = !1;
                else {
                  for (var t in ((this.cursor = null),
                  this.activeInteractionData))
                    if (this.activeInteractionData.hasOwnProperty(t)) {
                      var e = this.activeInteractionData[t];
                      if (e.originalEvent && "touch" !== e.pointerType) {
                        var r = this.configureInteractionEventForDOMEvent(
                          this.eventData,
                          e.originalEvent,
                          e
                        );
                        this.processInteractive(
                          r,
                          this.lastObjectRendered,
                          this.processPointerOverOut,
                          !0
                        );
                      }
                    }
                  this.setCursorMode(this.cursor);
                }
            }),
            (e.prototype.setCursorMode = function (t) {
              t = t || "default";
              var e = !0;
              if (
                (self.OffscreenCanvas &&
                  this.interactionDOMElement instanceof OffscreenCanvas &&
                  (e = !1),
                this.currentCursorMode !== t)
              ) {
                this.currentCursorMode = t;
                var r = this.cursorStyles[t];
                if (r)
                  switch (typeof r) {
                    case "string":
                      e && (this.interactionDOMElement.style.cursor = r);
                      break;
                    case "function":
                      r(t);
                      break;
                    case "object":
                      e && Object.assign(this.interactionDOMElement.style, r);
                  }
                else
                  e &&
                    "string" == typeof t &&
                    !Object.prototype.hasOwnProperty.call(
                      this.cursorStyles,
                      t
                    ) &&
                    (this.interactionDOMElement.style.cursor = t);
              }
            }),
            (e.prototype.dispatchEvent = function (t, e, r) {
              (r.stopPropagationHint && t !== r.stopsPropagatingAt) ||
                ((r.currentTarget = t),
                (r.type = e),
                t.emit(e, r),
                t[e] && t[e](r));
            }),
            (e.prototype.delayDispatchEvent = function (t, e, r) {
              this.delayedEvents.push({
                displayObject: t,
                eventString: e,
                eventData: r,
              });
            }),
            (e.prototype.mapPositionToPoint = function (t, e, r) {
              var i;
              i = this.interactionDOMElement.parentElement
                ? this.interactionDOMElement.getBoundingClientRect()
                : {
                    x: 0,
                    y: 0,
                    width: this.interactionDOMElement.width,
                    height: this.interactionDOMElement.height,
                    left: 0,
                    top: 0,
                  };
              var n = 1 / this.resolution;
              (t.x =
                (e - i.left) *
                (this.interactionDOMElement.width / i.width) *
                n),
                (t.y =
                  (r - i.top) *
                  (this.interactionDOMElement.height / i.height) *
                  n);
            }),
            (e.prototype.processInteractive = function (t, e, r, i) {
              var n = this.search.findHit(t, e, r, i),
                o = this.delayedEvents;
              if (!o.length) return n;
              t.stopPropagationHint = !1;
              var s = o.length;
              this.delayedEvents = [];
              for (var a = 0; a < s; a++) {
                var h = o[a],
                  u = h.displayObject,
                  l = h.eventString,
                  c = h.eventData;
                c.stopsPropagatingAt === u && (c.stopPropagationHint = !0),
                  this.dispatchEvent(u, l, c);
              }
              return n;
            }),
            (e.prototype.onPointerDown = function (t) {
              if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                this.autoPreventDefault &&
                  e[0].isNormalized &&
                  (t.cancelable || !("cancelable" in t)) &&
                  t.preventDefault();
                for (var r = e.length, i = 0; i < r; i++) {
                  var n = e[i],
                    o = this.getInteractionDataForPointerId(n),
                    s = this.configureInteractionEventForDOMEvent(
                      this.eventData,
                      n,
                      o
                    );
                  if (
                    ((s.data.originalEvent = t),
                    this.processInteractive(
                      s,
                      this.lastObjectRendered,
                      this.processPointerDown,
                      !0
                    ),
                    this.emit("pointerdown", s),
                    "touch" === n.pointerType)
                  )
                    this.emit("touchstart", s);
                  else if (
                    "mouse" === n.pointerType ||
                    "pen" === n.pointerType
                  ) {
                    var a = 2 === n.button;
                    this.emit(a ? "rightdown" : "mousedown", this.eventData);
                  }
                }
              }
            }),
            (e.prototype.processPointerDown = function (t, e, r) {
              var i = t.data,
                n = t.data.identifier;
              if (r)
                if (
                  (e.trackedPointers[n] || (e.trackedPointers[n] = new De(n)),
                  this.dispatchEvent(e, "pointerdown", t),
                  "touch" === i.pointerType)
                )
                  this.dispatchEvent(e, "touchstart", t);
                else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                  var o = 2 === i.button;
                  o
                    ? (e.trackedPointers[n].rightDown = !0)
                    : (e.trackedPointers[n].leftDown = !0),
                    this.dispatchEvent(e, o ? "rightdown" : "mousedown", t);
                }
            }),
            (e.prototype.onPointerComplete = function (t, e, r) {
              for (
                var i = this.normalizeToPointerData(t),
                  n = i.length,
                  o = t.target !== this.interactionDOMElement ? "outside" : "",
                  s = 0;
                s < n;
                s++
              ) {
                var a = i[s],
                  h = this.getInteractionDataForPointerId(a),
                  u = this.configureInteractionEventForDOMEvent(
                    this.eventData,
                    a,
                    h
                  );
                if (
                  ((u.data.originalEvent = t),
                  this.processInteractive(
                    u,
                    this.lastObjectRendered,
                    r,
                    e || !o
                  ),
                  this.emit(e ? "pointercancel" : "pointerup" + o, u),
                  "mouse" === a.pointerType || "pen" === a.pointerType)
                ) {
                  var l = 2 === a.button;
                  this.emit(l ? "rightup" + o : "mouseup" + o, u);
                } else
                  "touch" === a.pointerType &&
                    (this.emit(e ? "touchcancel" : "touchend" + o, u),
                    this.releaseInteractionDataForPointerId(a.pointerId));
              }
            }),
            (e.prototype.onPointerCancel = function (t) {
              (this.supportsTouchEvents && "touch" === t.pointerType) ||
                this.onPointerComplete(t, !0, this.processPointerCancel);
            }),
            (e.prototype.processPointerCancel = function (t, e) {
              var r = t.data,
                i = t.data.identifier;
              void 0 !== e.trackedPointers[i] &&
                (delete e.trackedPointers[i],
                this.dispatchEvent(e, "pointercancel", t),
                "touch" === r.pointerType &&
                  this.dispatchEvent(e, "touchcancel", t));
            }),
            (e.prototype.onPointerUp = function (t) {
              (this.supportsTouchEvents && "touch" === t.pointerType) ||
                this.onPointerComplete(t, !1, this.processPointerUp);
            }),
            (e.prototype.processPointerUp = function (t, e, r) {
              var i = t.data,
                n = t.data.identifier,
                o = e.trackedPointers[n],
                s = "touch" === i.pointerType,
                a = "mouse" === i.pointerType || "pen" === i.pointerType,
                h = !1;
              if (a) {
                var u = 2 === i.button,
                  l = De.FLAGS,
                  c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
                  d = void 0 !== o && o.flags & c;
                r
                  ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t),
                    d &&
                      (this.dispatchEvent(e, u ? "rightclick" : "click", t),
                      (h = !0)))
                  : d &&
                    this.dispatchEvent(
                      e,
                      u ? "rightupoutside" : "mouseupoutside",
                      t
                    ),
                  o && (u ? (o.rightDown = !1) : (o.leftDown = !1));
              }
              r
                ? (this.dispatchEvent(e, "pointerup", t),
                  s && this.dispatchEvent(e, "touchend", t),
                  o &&
                    ((a && !h) || this.dispatchEvent(e, "pointertap", t),
                    s && (this.dispatchEvent(e, "tap", t), (o.over = !1))))
                : o &&
                  (this.dispatchEvent(e, "pointerupoutside", t),
                  s && this.dispatchEvent(e, "touchendoutside", t)),
                o && o.none && delete e.trackedPointers[n];
            }),
            (e.prototype.onPointerMove = function (t) {
              if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t);
                ("mouse" !== e[0].pointerType && "pen" !== e[0].pointerType) ||
                  ((this._didMove = !0), (this.cursor = null));
                for (var r = e.length, i = 0; i < r; i++) {
                  var n = e[i],
                    o = this.getInteractionDataForPointerId(n),
                    s = this.configureInteractionEventForDOMEvent(
                      this.eventData,
                      n,
                      o
                    );
                  (s.data.originalEvent = t),
                    this.processInteractive(
                      s,
                      this.lastObjectRendered,
                      this.processPointerMove,
                      !0
                    ),
                    this.emit("pointermove", s),
                    "touch" === n.pointerType && this.emit("touchmove", s),
                    ("mouse" !== n.pointerType && "pen" !== n.pointerType) ||
                      this.emit("mousemove", s);
                }
                "mouse" === e[0].pointerType && this.setCursorMode(this.cursor);
              }
            }),
            (e.prototype.processPointerMove = function (t, e, r) {
              var i = t.data,
                n = "touch" === i.pointerType,
                o = "mouse" === i.pointerType || "pen" === i.pointerType;
              o && this.processPointerOverOut(t, e, r),
                (this.moveWhenInside && !r) ||
                  (this.dispatchEvent(e, "pointermove", t),
                  n && this.dispatchEvent(e, "touchmove", t),
                  o && this.dispatchEvent(e, "mousemove", t));
            }),
            (e.prototype.onPointerOut = function (t) {
              if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                var e = this.normalizeToPointerData(t)[0];
                "mouse" === e.pointerType &&
                  ((this.mouseOverRenderer = !1), this.setCursorMode(null));
                var r = this.getInteractionDataForPointerId(e),
                  i = this.configureInteractionEventForDOMEvent(
                    this.eventData,
                    e,
                    r
                  );
                (i.data.originalEvent = e),
                  this.processInteractive(
                    i,
                    this.lastObjectRendered,
                    this.processPointerOverOut,
                    !1
                  ),
                  this.emit("pointerout", i),
                  "mouse" === e.pointerType || "pen" === e.pointerType
                    ? this.emit("mouseout", i)
                    : this.releaseInteractionDataForPointerId(r.identifier);
              }
            }),
            (e.prototype.processPointerOverOut = function (t, e, r) {
              var i = t.data,
                n = t.data.identifier,
                o = "mouse" === i.pointerType || "pen" === i.pointerType,
                s = e.trackedPointers[n];
              r && !s && (s = e.trackedPointers[n] = new De(n)),
                void 0 !== s &&
                  (r && this.mouseOverRenderer
                    ? (s.over ||
                        ((s.over = !0),
                        this.delayDispatchEvent(e, "pointerover", t),
                        o && this.delayDispatchEvent(e, "mouseover", t)),
                      o && null === this.cursor && (this.cursor = e.cursor))
                    : s.over &&
                      ((s.over = !1),
                      this.dispatchEvent(e, "pointerout", this.eventData),
                      o && this.dispatchEvent(e, "mouseout", t),
                      s.none && delete e.trackedPointers[n]));
            }),
            (e.prototype.onPointerOver = function (t) {
              var e = this.normalizeToPointerData(t)[0],
                r = this.getInteractionDataForPointerId(e),
                i = this.configureInteractionEventForDOMEvent(
                  this.eventData,
                  e,
                  r
                );
              (i.data.originalEvent = e),
                "mouse" === e.pointerType && (this.mouseOverRenderer = !0),
                this.emit("pointerover", i),
                ("mouse" !== e.pointerType && "pen" !== e.pointerType) ||
                  this.emit("mouseover", i);
            }),
            (e.prototype.getInteractionDataForPointerId = function (t) {
              var e,
                r = t.pointerId;
              return (
                1 === r || "mouse" === t.pointerType
                  ? (e = this.mouse)
                  : this.activeInteractionData[r]
                  ? (e = this.activeInteractionData[r])
                  : (((e =
                      this.interactionDataPool.pop() || new we()).identifier =
                      r),
                    (this.activeInteractionData[r] = e)),
                e.copyEvent(t),
                e
              );
            }),
            (e.prototype.releaseInteractionDataForPointerId = function (t) {
              var e = this.activeInteractionData[t];
              e &&
                (delete this.activeInteractionData[t],
                e.reset(),
                this.interactionDataPool.push(e));
            }),
            (e.prototype.configureInteractionEventForDOMEvent = function (
              t,
              e,
              r
            ) {
              return (
                (t.data = r),
                this.mapPositionToPoint(r.global, e.clientX, e.clientY),
                "touch" === e.pointerType &&
                  ((e.globalX = r.global.x), (e.globalY = r.global.y)),
                (r.originalEvent = e),
                t.reset(),
                t
              );
            }),
            (e.prototype.normalizeToPointerData = function (t) {
              var e = [];
              if (this.supportsTouchEvents && t instanceof TouchEvent)
                for (var r = 0, i = t.changedTouches.length; r < i; r++) {
                  var n = t.changedTouches[r];
                  void 0 === n.button && (n.button = t.touches.length ? 1 : 0),
                    void 0 === n.buttons &&
                      (n.buttons = t.touches.length ? 1 : 0),
                    void 0 === n.isPrimary &&
                      (n.isPrimary =
                        1 === t.touches.length && "touchstart" === t.type),
                    void 0 === n.width && (n.width = n.radiusX || 1),
                    void 0 === n.height && (n.height = n.radiusY || 1),
                    void 0 === n.tiltX && (n.tiltX = 0),
                    void 0 === n.tiltY && (n.tiltY = 0),
                    void 0 === n.pointerType && (n.pointerType = "touch"),
                    void 0 === n.pointerId && (n.pointerId = n.identifier || 0),
                    void 0 === n.pressure && (n.pressure = n.force || 0.5),
                    void 0 === n.twist && (n.twist = 0),
                    void 0 === n.tangentialPressure &&
                      (n.tangentialPressure = 0),
                    void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX),
                    void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY),
                    (n.isNormalized = !0),
                    e.push(n);
                }
              else if (
                !self.MouseEvent ||
                (t instanceof MouseEvent &&
                  !(
                    this.supportsPointerEvents && t instanceof self.PointerEvent
                  ))
              ) {
                var o = t;
                void 0 === o.isPrimary && (o.isPrimary = !0),
                  void 0 === o.width && (o.width = 1),
                  void 0 === o.height && (o.height = 1),
                  void 0 === o.tiltX && (o.tiltX = 0),
                  void 0 === o.tiltY && (o.tiltY = 0),
                  void 0 === o.pointerType && (o.pointerType = "mouse"),
                  void 0 === o.pointerId && (o.pointerId = 1),
                  void 0 === o.pressure && (o.pressure = 0.5),
                  void 0 === o.twist && (o.twist = 0),
                  void 0 === o.tangentialPressure && (o.tangentialPressure = 0),
                  (o.isNormalized = !0),
                  e.push(o);
              } else e.push(t);
              return e;
            }),
            (e.prototype.destroy = function () {
              this.removeEvents(),
                this.removeTickerListener(),
                this.removeAllListeners(),
                (this.renderer = null),
                (this.mouse = null),
                (this.eventData = null),
                (this.interactionDOMElement = null),
                (this.onPointerDown = null),
                (this.processPointerDown = null),
                (this.onPointerUp = null),
                (this.processPointerUp = null),
                (this.onPointerCancel = null),
                (this.processPointerCancel = null),
                (this.onPointerMove = null),
                (this.processPointerMove = null),
                (this.onPointerOut = null),
                (this.processPointerOverOut = null),
                (this.onPointerOver = null),
                (this.search = null);
            }),
            e
          );
        })(Tt()),
        Ue = (function () {
          function t(t) {
            (this.items = []), (this._name = t), (this._aliasCount = 0);
          }
          return (
            (t.prototype.emit = function (t, e, r, i, n, o, s, a) {
              if (arguments.length > 8)
                throw new Error("max arguments reached");
              var h = this,
                u = h.name,
                l = h.items;
              this._aliasCount++;
              for (var c = 0, d = l.length; c < d; c++)
                l[c][u](t, e, r, i, n, o, s, a);
              return l === this.items && this._aliasCount--, this;
            }),
            (t.prototype.ensureNonAliasedItems = function () {
              this._aliasCount > 0 &&
                this.items.length > 1 &&
                ((this._aliasCount = 0), (this.items = this.items.slice(0)));
            }),
            (t.prototype.add = function (t) {
              return (
                t[this._name] &&
                  (this.ensureNonAliasedItems(),
                  this.remove(t),
                  this.items.push(t)),
                this
              );
            }),
            (t.prototype.remove = function (t) {
              var e = this.items.indexOf(t);
              return (
                -1 !== e &&
                  (this.ensureNonAliasedItems(), this.items.splice(e, 1)),
                this
              );
            }),
            (t.prototype.contains = function (t) {
              return -1 !== this.items.indexOf(t);
            }),
            (t.prototype.removeAll = function () {
              return (
                this.ensureNonAliasedItems(), (this.items.length = 0), this
              );
            }),
            (t.prototype.destroy = function () {
              this.removeAll(), (this.items = null), (this._name = null);
            }),
            Object.defineProperty(t.prototype, "empty", {
              get: function () {
                return 0 === this.items.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return this._name;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })();
      Object.defineProperties(Ue.prototype, {
        dispatch: { value: Ue.prototype.emit },
        run: { value: Ue.prototype.emit },
      }),
        (yt.PREFER_ENV = $.any ? tt.WEBGL : tt.WEBGL2),
        (yt.STRICT_TEXTURE_CACHE = !1);
      var Be = [];
      function Ge(t, e) {
        if (!t) return null;
        var r = "";
        if ("string" == typeof t) {
          var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
          i && (r = i[1].toLowerCase());
        }
        for (var n = Be.length - 1; n >= 0; --n) {
          var o = Be[n];
          if (o.test && o.test(t, r)) return new o(t, e);
        }
        throw new Error("Unrecognized source type to auto-detect Resource");
      }
      var Xe = function (t, e) {
        return (Xe =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
      function ke(t, e) {
        function r() {
          this.constructor = t;
        }
        Xe(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var He = (function () {
          function t(t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              (this._width = t),
              (this._height = e),
              (this.destroyed = !1),
              (this.internal = !1),
              (this.onResize = new Ue("setRealSize")),
              (this.onUpdate = new Ue("update")),
              (this.onError = new Ue("onError"));
          }
          return (
            (t.prototype.bind = function (t) {
              this.onResize.add(t),
                this.onUpdate.add(t),
                this.onError.add(t),
                (this._width || this._height) &&
                  this.onResize.emit(this._width, this._height);
            }),
            (t.prototype.unbind = function (t) {
              this.onResize.remove(t),
                this.onUpdate.remove(t),
                this.onError.remove(t);
            }),
            (t.prototype.resize = function (t, e) {
              (t === this._width && e === this._height) ||
                ((this._width = t),
                (this._height = e),
                this.onResize.emit(t, e));
            }),
            Object.defineProperty(t.prototype, "valid", {
              get: function () {
                return !!this._width && !!this._height;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.update = function () {
              this.destroyed || this.onUpdate.emit();
            }),
            (t.prototype.load = function () {
              return Promise.resolve(this);
            }),
            Object.defineProperty(t.prototype, "width", {
              get: function () {
                return this._width;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "height", {
              get: function () {
                return this._height;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.style = function (t, e, r) {
              return !1;
            }),
            (t.prototype.dispose = function () {}),
            (t.prototype.destroy = function () {
              this.destroyed ||
                ((this.destroyed = !0),
                this.dispose(),
                this.onError.removeAll(),
                (this.onError = null),
                this.onResize.removeAll(),
                (this.onResize = null),
                this.onUpdate.removeAll(),
                (this.onUpdate = null));
            }),
            (t.test = function (t, e) {
              return !1;
            }),
            t
          );
        })(),
        je = (function (t) {
          function e(e, r) {
            var i = this,
              n = r || {},
              o = n.width,
              s = n.height;
            if (!o || !s)
              throw new Error("BufferResource width or height invalid");
            return ((i = t.call(this, o, s) || this).data = e), i;
          }
          return (
            ke(e, t),
            (e.prototype.upload = function (t, e, r) {
              var i = t.gl;
              i.pixelStorei(
                i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                e.alphaMode === dt.UNPACK
              );
              var n = e.realWidth,
                o = e.realHeight;
              return (
                r.width === n && r.height === o
                  ? i.texSubImage2D(
                      e.target,
                      0,
                      0,
                      0,
                      n,
                      o,
                      e.format,
                      e.type,
                      this.data
                    )
                  : ((r.width = n),
                    (r.height = o),
                    i.texImage2D(
                      e.target,
                      0,
                      r.internalFormat,
                      n,
                      o,
                      0,
                      e.format,
                      r.type,
                      this.data
                    )),
                !0
              );
            }),
            (e.prototype.dispose = function () {
              this.data = null;
            }),
            (e.test = function (t) {
              return (
                t instanceof Float32Array ||
                t instanceof Uint8Array ||
                t instanceof Uint32Array
              );
            }),
            e
          );
        })(He),
        Ye = { scaleMode: ut.NEAREST, format: ot.RGBA, alphaMode: dt.NPM },
        Ve = (function (t) {
          function e(e, r) {
            void 0 === e && (e = null), void 0 === r && (r = null);
            var i = t.call(this) || this,
              n = (r = r || {}).alphaMode,
              o = r.mipmap,
              s = r.anisotropicLevel,
              a = r.scaleMode,
              h = r.width,
              u = r.height,
              l = r.wrapMode,
              c = r.format,
              d = r.type,
              f = r.target,
              p = r.resolution,
              _ = r.resourceOptions;
            return (
              !e || e instanceof He || ((e = Ge(e, _)).internal = !0),
              (i.width = h || 0),
              (i.height = u || 0),
              (i.resolution = p || yt.RESOLUTION),
              (i.mipmap = void 0 !== o ? o : yt.MIPMAP_TEXTURES),
              (i.anisotropicLevel = void 0 !== s ? s : yt.ANISOTROPIC_LEVEL),
              (i.wrapMode = l || yt.WRAP_MODE),
              (i.scaleMode = void 0 !== a ? a : yt.SCALE_MODE),
              (i.format = c || ot.RGBA),
              (i.type = d || at.UNSIGNED_BYTE),
              (i.target = f || st.TEXTURE_2D),
              (i.alphaMode = void 0 !== n ? n : dt.UNPACK),
              (i.uid = kt()),
              (i.touched = 0),
              (i.isPowerOfTwo = !1),
              i._refreshPOT(),
              (i._glTextures = {}),
              (i.dirtyId = 0),
              (i.dirtyStyleId = 0),
              (i.cacheId = null),
              (i.valid = h > 0 && u > 0),
              (i.textureCacheIds = []),
              (i.destroyed = !1),
              (i.resource = null),
              (i._batchEnabled = 0),
              (i._batchLocation = 0),
              (i.parentTextureArray = null),
              i.setResource(e),
              i
            );
          }
          return (
            ke(e, t),
            Object.defineProperty(e.prototype, "realWidth", {
              get: function () {
                return Math.ceil(this.width * this.resolution - 1e-4);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "realHeight", {
              get: function () {
                return Math.ceil(this.height * this.resolution - 1e-4);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.setStyle = function (t, e) {
              var r;
              return (
                void 0 !== t &&
                  t !== this.scaleMode &&
                  ((this.scaleMode = t), (r = !0)),
                void 0 !== e &&
                  e !== this.mipmap &&
                  ((this.mipmap = e), (r = !0)),
                r && this.dirtyStyleId++,
                this
              );
            }),
            (e.prototype.setSize = function (t, e, r) {
              return (
                (this.resolution = r || this.resolution),
                (this.width = t),
                (this.height = e),
                this._refreshPOT(),
                this.update(),
                this
              );
            }),
            (e.prototype.setRealSize = function (t, e, r) {
              return (
                (this.resolution = r || this.resolution),
                (this.width = t / this.resolution),
                (this.height = e / this.resolution),
                this._refreshPOT(),
                this.update(),
                this
              );
            }),
            (e.prototype._refreshPOT = function () {
              this.isPowerOfTwo = Ft(this.realWidth) && Ft(this.realHeight);
            }),
            (e.prototype.setResolution = function (t) {
              var e = this.resolution;
              return (
                e === t ||
                  ((this.resolution = t),
                  this.valid &&
                    ((this.width = (this.width * e) / t),
                    (this.height = (this.height * e) / t),
                    this.emit("update", this)),
                  this._refreshPOT()),
                this
              );
            }),
            (e.prototype.setResource = function (t) {
              if (this.resource === t) return this;
              if (this.resource)
                throw new Error("Resource can be set only once");
              return t.bind(this), (this.resource = t), this;
            }),
            (e.prototype.update = function () {
              this.valid
                ? (this.dirtyId++,
                  this.dirtyStyleId++,
                  this.emit("update", this))
                : this.width > 0 &&
                  this.height > 0 &&
                  ((this.valid = !0),
                  this.emit("loaded", this),
                  this.emit("update", this));
            }),
            (e.prototype.onError = function (t) {
              this.emit("error", this, t);
            }),
            (e.prototype.destroy = function () {
              this.resource &&
                (this.resource.unbind(this),
                this.resource.internal && this.resource.destroy(),
                (this.resource = null)),
                this.cacheId &&
                  (delete Wt[this.cacheId],
                  delete zt[this.cacheId],
                  (this.cacheId = null)),
                this.dispose(),
                e.removeFromCache(this),
                (this.textureCacheIds = null),
                (this.destroyed = !0);
            }),
            (e.prototype.dispose = function () {
              this.emit("dispose", this);
            }),
            (e.prototype.castToBaseTexture = function () {
              return this;
            }),
            (e.from = function (t, r, i) {
              void 0 === i && (i = yt.STRICT_TEXTURE_CACHE);
              var n = "string" == typeof t,
                o = null;
              if (n) o = t;
              else {
                if (!t._pixiId) {
                  var s = (r && r.pixiIdPrefix) || "pixiid";
                  t._pixiId = s + "_" + kt();
                }
                o = t._pixiId;
              }
              var a = Wt[o];
              if (n && i && !a)
                throw new Error(
                  'The cacheId "' + o + '" does not exist in BaseTextureCache.'
                );
              return (
                a || (((a = new e(t, r)).cacheId = o), e.addToCache(a, o)), a
              );
            }),
            (e.fromBuffer = function (t, r, i, n) {
              t = t || new Float32Array(r * i * 4);
              var o = new je(t, { width: r, height: i }),
                s = t instanceof Float32Array ? at.FLOAT : at.UNSIGNED_BYTE;
              return new e(
                o,
                Object.assign(Ye, n || { width: r, height: i, type: s })
              );
            }),
            (e.addToCache = function (t, e) {
              e &&
                (-1 === t.textureCacheIds.indexOf(e) &&
                  t.textureCacheIds.push(e),
                Wt[e] &&
                  console.warn(
                    "BaseTexture added to the cache with an id [" +
                      e +
                      "] that already had an entry"
                  ),
                (Wt[e] = t));
            }),
            (e.removeFromCache = function (t) {
              if ("string" == typeof t) {
                var e = Wt[t];
                if (e) {
                  var r = e.textureCacheIds.indexOf(t);
                  return (
                    r > -1 && e.textureCacheIds.splice(r, 1), delete Wt[t], e
                  );
                }
              } else if (t && t.textureCacheIds) {
                for (var i = 0; i < t.textureCacheIds.length; ++i)
                  delete Wt[t.textureCacheIds[i]];
                return (t.textureCacheIds.length = 0), t;
              }
              return null;
            }),
            (e._globalBatch = 0),
            e
          );
        })(Tt()),
        ze = (function (t) {
          function e(e, r) {
            var i = this,
              n = r || {},
              o = n.width,
              s = n.height;
            ((i = t.call(this, o, s) || this).items = []),
              (i.itemDirtyIds = []);
            for (var a = 0; a < e; a++) {
              var h = new Ve();
              i.items.push(h), i.itemDirtyIds.push(-2);
            }
            return (i.length = e), (i._load = null), (i.baseTexture = null), i;
          }
          return (
            ke(e, t),
            (e.prototype.initFromArray = function (t, e) {
              for (var r = 0; r < this.length; r++)
                t[r] &&
                  (t[r].castToBaseTexture
                    ? this.addBaseTextureAt(t[r].castToBaseTexture(), r)
                    : t[r] instanceof He
                    ? this.addResourceAt(t[r], r)
                    : this.addResourceAt(Ge(t[r], e), r));
            }),
            (e.prototype.dispose = function () {
              for (var t = 0, e = this.length; t < e; t++)
                this.items[t].destroy();
              (this.items = null),
                (this.itemDirtyIds = null),
                (this._load = null);
            }),
            (e.prototype.addResourceAt = function (t, e) {
              if (!this.items[e])
                throw new Error("Index " + e + " is out of bounds");
              return (
                t.valid && !this.valid && this.resize(t.width, t.height),
                this.items[e].setResource(t),
                this
              );
            }),
            (e.prototype.bind = function (e) {
              if (null !== this.baseTexture)
                throw new Error(
                  "Only one base texture per TextureArray is allowed"
                );
              t.prototype.bind.call(this, e);
              for (var r = 0; r < this.length; r++)
                (this.items[r].parentTextureArray = e),
                  this.items[r].on("update", e.update, e);
            }),
            (e.prototype.unbind = function (e) {
              t.prototype.unbind.call(this, e);
              for (var r = 0; r < this.length; r++)
                (this.items[r].parentTextureArray = null),
                  this.items[r].off("update", e.update, e);
            }),
            (e.prototype.load = function () {
              var t = this;
              if (this._load) return this._load;
              var e = this.items
                .map(function (t) {
                  return t.resource;
                })
                .filter(function (t) {
                  return t;
                })
                .map(function (t) {
                  return t.load();
                });
              return (
                (this._load = Promise.all(e).then(function () {
                  var e = t.items[0],
                    r = e.realWidth,
                    i = e.realHeight;
                  return t.resize(r, i), Promise.resolve(t);
                })),
                this._load
              );
            }),
            e
          );
        })(He),
        We = (function (t) {
          function e(e, r) {
            var i,
              n,
              o = this,
              s = r || {},
              a = s.width,
              h = s.height;
            return (
              Array.isArray(e) ? ((i = e), (n = e.length)) : (n = e),
              (o = t.call(this, n, { width: a, height: h }) || this),
              i && o.initFromArray(i, r),
              o
            );
          }
          return (
            ke(e, t),
            (e.prototype.addBaseTextureAt = function (t, e) {
              if (!t.resource)
                throw new Error("ArrayResource does not support RenderTexture");
              return this.addResourceAt(t.resource, e), this;
            }),
            (e.prototype.bind = function (e) {
              t.prototype.bind.call(this, e), (e.target = st.TEXTURE_2D_ARRAY);
            }),
            (e.prototype.upload = function (t, e, r) {
              var i = this,
                n = i.length,
                o = i.itemDirtyIds,
                s = i.items,
                a = t.gl;
              r.dirtyId < 0 &&
                a.texImage3D(
                  a.TEXTURE_2D_ARRAY,
                  0,
                  e.format,
                  this._width,
                  this._height,
                  n,
                  0,
                  e.format,
                  e.type,
                  null
                );
              for (var h = 0; h < n; h++) {
                var u = s[h];
                o[h] < u.dirtyId &&
                  ((o[h] = u.dirtyId),
                  u.valid &&
                    a.texSubImage3D(
                      a.TEXTURE_2D_ARRAY,
                      0,
                      0,
                      0,
                      h,
                      u.resource.width,
                      u.resource.height,
                      1,
                      e.format,
                      e.type,
                      u.resource.source
                    ));
              }
              return !0;
            }),
            e
          );
        })(ze),
        qe = (function (t) {
          function e(e) {
            var r = this,
              i = e,
              n = i.naturalWidth || i.videoWidth || i.width,
              o = i.naturalHeight || i.videoHeight || i.height;
            return (
              ((r = t.call(this, n, o) || this).source = e),
              (r.noSubImage = !1),
              r
            );
          }
          return (
            ke(e, t),
            (e.crossOrigin = function (t, e, r) {
              void 0 === r && 0 !== e.indexOf("data:")
                ? (t.crossOrigin = (function (t, e) {
                    if (
                      (void 0 === e && (e = self.location),
                      0 === t.indexOf("data:"))
                    )
                      return "";
                    (e = e || self.location),
                      Yt || (Yt = document.createElement("a")),
                      (Yt.href = t);
                    var r = At.parse(Yt.href),
                      i = (!r.port && "" === e.port) || r.port === e.port;
                    return r.hostname === e.hostname &&
                      i &&
                      r.protocol === e.protocol
                      ? ""
                      : "anonymous";
                  })(e))
                : !1 !== r &&
                  (t.crossOrigin = "string" == typeof r ? r : "anonymous");
            }),
            (e.prototype.upload = function (t, e, r, i) {
              var n = t.gl,
                o = e.realWidth,
                s = e.realHeight;
              return (
                (i = i || this.source),
                n.pixelStorei(
                  n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                  e.alphaMode === dt.UNPACK
                ),
                this.noSubImage ||
                e.target !== n.TEXTURE_2D ||
                r.width !== o ||
                r.height !== s
                  ? ((r.width = o),
                    (r.height = s),
                    n.texImage2D(e.target, 0, e.format, e.format, e.type, i))
                  : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, e.type, i),
                !0
              );
            }),
            (e.prototype.update = function () {
              if (!this.destroyed) {
                var e = this.source,
                  r = e.naturalWidth || e.videoWidth || e.width,
                  i = e.naturalHeight || e.videoHeight || e.height;
                this.resize(r, i), t.prototype.update.call(this);
              }
            }),
            (e.prototype.dispose = function () {
              this.source = null;
            }),
            e
          );
        })(He),
        Ke = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            ke(e, t),
            (e.test = function (t) {
              var e = self.OffscreenCanvas;
              return (
                !!(e && t instanceof e) ||
                (self.HTMLCanvasElement && t instanceof HTMLCanvasElement)
              );
            }),
            e
          );
        })(qe),
        Ze = (function (t) {
          function e(r, i) {
            var n = this,
              o = i || {},
              s = o.width,
              a = o.height,
              h = o.autoLoad,
              u = o.linkBaseTexture;
            if (r && r.length !== e.SIDES)
              throw new Error(
                "Invalid length. Got " + r.length + ", expected 6"
              );
            n = t.call(this, 6, { width: s, height: a }) || this;
            for (var l = 0; l < e.SIDES; l++)
              n.items[l].target = st.TEXTURE_CUBE_MAP_POSITIVE_X + l;
            return (
              (n.linkBaseTexture = !1 !== u),
              r && n.initFromArray(r, i),
              !1 !== h && n.load(),
              n
            );
          }
          return (
            ke(e, t),
            (e.prototype.bind = function (e) {
              t.prototype.bind.call(this, e), (e.target = st.TEXTURE_CUBE_MAP);
            }),
            (e.prototype.addBaseTextureAt = function (t, e, r) {
              if ((void 0 === r && (r = this.linkBaseTexture), !this.items[e]))
                throw new Error("Index " + e + " is out of bounds");
              if (
                !this.linkBaseTexture ||
                t.parentTextureArray ||
                Object.keys(t._glTextures).length > 0
              ) {
                if (!t.resource)
                  throw new Error(
                    "CubeResource does not support copying of renderTexture."
                  );
                this.addResourceAt(t.resource, e);
              } else
                (t.target = st.TEXTURE_CUBE_MAP_POSITIVE_X + e),
                  (t.parentTextureArray = this.baseTexture),
                  (this.items[e] = t);
              return (
                t.valid &&
                  !this.valid &&
                  this.resize(t.realWidth, t.realHeight),
                (this.items[e] = t),
                this
              );
            }),
            (e.prototype.upload = function (t, r, i) {
              for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
                var s = this.items[o];
                n[o] < s.dirtyId &&
                  (s.valid && s.resource
                    ? (s.resource.upload(t, s, i), (n[o] = s.dirtyId))
                    : n[o] < -1 &&
                      (t.gl.texImage2D(
                        s.target,
                        0,
                        i.internalFormat,
                        r.realWidth,
                        r.realHeight,
                        0,
                        r.format,
                        i.type,
                        null
                      ),
                      (n[o] = -1)));
              }
              return !0;
            }),
            (e.test = function (t) {
              return Array.isArray(t) && t.length === e.SIDES;
            }),
            (e.SIDES = 6),
            e
          );
        })(ze),
        Je = (function (t) {
          function e(e, r) {
            var i = this;
            if (((r = r || {}), !(e instanceof HTMLImageElement))) {
              var n = new Image();
              qe.crossOrigin(n, e, r.crossorigin), (n.src = e), (e = n);
            }
            return (
              (i = t.call(this, e) || this),
              !e.complete &&
                i._width &&
                i._height &&
                ((i._width = 0), (i._height = 0)),
              (i.url = e.src),
              (i._process = null),
              (i.preserveBitmap = !1),
              (i.createBitmap =
                (void 0 !== r.createBitmap
                  ? r.createBitmap
                  : yt.CREATE_IMAGE_BITMAP) && !!self.createImageBitmap),
              (i.alphaMode =
                "number" == typeof r.alphaMode ? r.alphaMode : null),
              (i.bitmap = null),
              (i._load = null),
              !1 !== r.autoLoad && i.load(),
              i
            );
          }
          return (
            ke(e, t),
            (e.prototype.load = function (t) {
              var e = this;
              return (
                this._load ||
                  (void 0 !== t && (this.createBitmap = t),
                  (this._load = new Promise(function (t, r) {
                    var i = e.source;
                    e.url = i.src;
                    var n = function () {
                      e.destroyed ||
                        ((i.onload = null),
                        (i.onerror = null),
                        e.resize(i.width, i.height),
                        (e._load = null),
                        e.createBitmap ? t(e.process()) : t(e));
                    };
                    i.complete && i.src
                      ? n()
                      : ((i.onload = n),
                        (i.onerror = function (t) {
                          r(t), e.onError.emit(t);
                        }));
                  }))),
                this._load
              );
            }),
            (e.prototype.process = function () {
              var t = this,
                e = this.source;
              return null !== this._process
                ? this._process
                : null === this.bitmap && self.createImageBitmap
                ? ((this._process = self
                    .createImageBitmap(e, 0, 0, e.width, e.height, {
                      premultiplyAlpha:
                        this.alphaMode === dt.UNPACK ? "premultiply" : "none",
                    })
                    .then(function (e) {
                      return t.destroyed
                        ? Promise.reject()
                        : ((t.bitmap = e),
                          t.update(),
                          (t._process = null),
                          Promise.resolve(t));
                    })),
                  this._process)
                : Promise.resolve(this);
            }),
            (e.prototype.upload = function (e, r, i) {
              if (
                ("number" == typeof this.alphaMode &&
                  (r.alphaMode = this.alphaMode),
                !this.createBitmap)
              )
                return t.prototype.upload.call(this, e, r, i);
              if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
              if (
                (t.prototype.upload.call(this, e, r, i, this.bitmap),
                !this.preserveBitmap)
              ) {
                var n = !0,
                  o = r._glTextures;
                for (var s in o) {
                  var a = o[s];
                  if (a !== i && a.dirtyId !== r.dirtyId) {
                    n = !1;
                    break;
                  }
                }
                n &&
                  (this.bitmap.close && this.bitmap.close(),
                  (this.bitmap = null));
              }
              return !0;
            }),
            (e.prototype.dispose = function () {
              (this.source.onload = null),
                (this.source.onerror = null),
                t.prototype.dispose.call(this),
                this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
                (this._process = null),
                (this._load = null);
            }),
            (e.test = function (t) {
              return "string" == typeof t || t instanceof HTMLImageElement;
            }),
            e
          );
        })(qe),
        Qe = (function (t) {
          function e(e, r) {
            var i = this;
            return (
              (r = r || {}),
              ((i =
                t.call(this, document.createElement("canvas")) ||
                this)._width = 0),
              (i._height = 0),
              (i.svg = e),
              (i.scale = r.scale || 1),
              (i._overrideWidth = r.width),
              (i._overrideHeight = r.height),
              (i._resolve = null),
              (i._crossorigin = r.crossorigin),
              (i._load = null),
              !1 !== r.autoLoad && i.load(),
              i
            );
          }
          return (
            ke(e, t),
            (e.prototype.load = function () {
              var t = this;
              return (
                this._load ||
                  (this._load = new Promise(function (e) {
                    if (
                      ((t._resolve = function () {
                        t.resize(t.source.width, t.source.height), e(t);
                      }),
                      /^\<svg/.test(t.svg.trim()))
                    ) {
                      if (!btoa)
                        throw new Error(
                          "Your browser doesn't support base64 conversions."
                        );
                      t.svg =
                        "data:image/svg+xml;base64," +
                        btoa(unescape(encodeURIComponent(t.svg)));
                    }
                    t._loadSvg();
                  })),
                this._load
              );
            }),
            (e.prototype._loadSvg = function () {
              var t = this,
                e = new Image();
              qe.crossOrigin(e, this.svg, this._crossorigin),
                (e.src = this.svg),
                (e.onerror = function (r) {
                  t._resolve && ((e.onerror = null), t.onError.emit(r));
                }),
                (e.onload = function () {
                  if (t._resolve) {
                    var r = e.width,
                      i = e.height;
                    if (!r || !i)
                      throw new Error(
                        "The SVG image must have width and height defined (in pixels), canvas API needs them."
                      );
                    var n = r * t.scale,
                      o = i * t.scale;
                    (t._overrideWidth || t._overrideHeight) &&
                      ((n = t._overrideWidth || (t._overrideHeight / i) * r),
                      (o = t._overrideHeight || (t._overrideWidth / r) * i)),
                      (n = Math.round(n)),
                      (o = Math.round(o));
                    var s = t.source;
                    (s.width = n),
                      (s.height = o),
                      (s._pixiId = "canvas_" + kt()),
                      s.getContext("2d").drawImage(e, 0, 0, r, i, 0, 0, n, o),
                      t._resolve(),
                      (t._resolve = null);
                  }
                });
            }),
            (e.getSize = function (t) {
              var r = e.SVG_SIZE.exec(t),
                i = {};
              return (
                r &&
                  ((i[r[1]] = Math.round(parseFloat(r[3]))),
                  (i[r[5]] = Math.round(parseFloat(r[7])))),
                i
              );
            }),
            (e.prototype.dispose = function () {
              t.prototype.dispose.call(this),
                (this._resolve = null),
                (this._crossorigin = null);
            }),
            (e.test = function (t, e) {
              return (
                "svg" === e ||
                ("string" == typeof t &&
                  /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(
                    t
                  )) ||
                ("string" == typeof t && 0 === t.indexOf("<svg"))
              );
            }),
            (e.SVG_SIZE =
              /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i),
            e
          );
        })(qe),
        $e = (function (t) {
          function e(r, i) {
            var n = this;
            if (((i = i || {}), !(r instanceof HTMLVideoElement))) {
              var o = document.createElement("video");
              o.setAttribute("preload", "auto"),
                o.setAttribute("webkit-playsinline", ""),
                o.setAttribute("playsinline", ""),
                "string" == typeof r && (r = [r]);
              var s = r[0].src || r[0];
              qe.crossOrigin(o, s, i.crossorigin);
              for (var a = 0; a < r.length; ++a) {
                var h = document.createElement("source"),
                  u = r[a],
                  l = u.src,
                  c = u.mime,
                  d = (l = l || r[a]).split("?").shift().toLowerCase(),
                  f = d.substr(d.lastIndexOf(".") + 1);
                (c = c || e.MIME_TYPES[f] || "video/" + f),
                  (h.src = l),
                  (h.type = c),
                  o.appendChild(h);
              }
              r = o;
            }
            return (
              ((n = t.call(this, r) || this).noSubImage = !0),
              (n._autoUpdate = !0),
              (n._isConnectedToTicker = !1),
              (n._updateFPS = i.updateFPS || 0),
              (n._msToNextUpdate = 0),
              (n.autoPlay = !1 !== i.autoPlay),
              (n._load = null),
              (n._resolve = null),
              (n._onCanPlay = n._onCanPlay.bind(n)),
              (n._onError = n._onError.bind(n)),
              !1 !== i.autoLoad && n.load(),
              n
            );
          }
          return (
            ke(e, t),
            (e.prototype.update = function (e) {
              if (!this.destroyed) {
                var r = Re.shared.elapsedMS * this.source.playbackRate;
                (this._msToNextUpdate = Math.floor(this._msToNextUpdate - r)),
                  (!this._updateFPS || this._msToNextUpdate <= 0) &&
                    (t.prototype.update.call(this),
                    (this._msToNextUpdate = this._updateFPS
                      ? Math.floor(1e3 / this._updateFPS)
                      : 0));
              }
            }),
            (e.prototype.load = function () {
              var t = this;
              if (this._load) return this._load;
              var e = this.source;
              return (
                (e.readyState === e.HAVE_ENOUGH_DATA ||
                  e.readyState === e.HAVE_FUTURE_DATA) &&
                  e.width &&
                  e.height &&
                  (e.complete = !0),
                e.addEventListener("play", this._onPlayStart.bind(this)),
                e.addEventListener("pause", this._onPlayStop.bind(this)),
                this._isSourceReady()
                  ? this._onCanPlay()
                  : (e.addEventListener("canplay", this._onCanPlay),
                    e.addEventListener("canplaythrough", this._onCanPlay),
                    e.addEventListener("error", this._onError, !0)),
                (this._load = new Promise(function (r) {
                  t.valid ? r(t) : ((t._resolve = r), e.load());
                })),
                this._load
              );
            }),
            (e.prototype._onError = function (t) {
              this.source.removeEventListener("error", this._onError, !0),
                this.onError.emit(t);
            }),
            (e.prototype._isSourcePlaying = function () {
              var t = this.source;
              return (
                t.currentTime > 0 &&
                !1 === t.paused &&
                !1 === t.ended &&
                t.readyState > 2
              );
            }),
            (e.prototype._isSourceReady = function () {
              var t = this.source;
              return 3 === t.readyState || 4 === t.readyState;
            }),
            (e.prototype._onPlayStart = function () {
              this.valid || this._onCanPlay(),
                this.autoUpdate &&
                  !this._isConnectedToTicker &&
                  (Re.shared.add(this.update, this),
                  (this._isConnectedToTicker = !0));
            }),
            (e.prototype._onPlayStop = function () {
              this._isConnectedToTicker &&
                (Re.shared.remove(this.update, this),
                (this._isConnectedToTicker = !1));
            }),
            (e.prototype._onCanPlay = function () {
              var t = this.source;
              t.removeEventListener("canplay", this._onCanPlay),
                t.removeEventListener("canplaythrough", this._onCanPlay);
              var e = this.valid;
              this.resize(t.videoWidth, t.videoHeight),
                !e &&
                  this._resolve &&
                  (this._resolve(this), (this._resolve = null)),
                this._isSourcePlaying()
                  ? this._onPlayStart()
                  : this.autoPlay && t.play();
            }),
            (e.prototype.dispose = function () {
              this._isConnectedToTicker && Re.shared.remove(this.update, this);
              var e = this.source;
              e &&
                (e.removeEventListener("error", this._onError, !0),
                e.pause(),
                (e.src = ""),
                e.load()),
                t.prototype.dispose.call(this);
            }),
            Object.defineProperty(e.prototype, "autoUpdate", {
              get: function () {
                return this._autoUpdate;
              },
              set: function (t) {
                t !== this._autoUpdate &&
                  ((this._autoUpdate = t),
                  !this._autoUpdate && this._isConnectedToTicker
                    ? (Re.shared.remove(this.update, this),
                      (this._isConnectedToTicker = !1))
                    : this._autoUpdate &&
                      !this._isConnectedToTicker &&
                      this._isSourcePlaying() &&
                      (Re.shared.add(this.update, this),
                      (this._isConnectedToTicker = !0)));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "updateFPS", {
              get: function () {
                return this._updateFPS;
              },
              set: function (t) {
                t !== this._updateFPS && (this._updateFPS = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.test = function (t, r) {
              return (
                (self.HTMLVideoElement && t instanceof HTMLVideoElement) ||
                e.TYPES.indexOf(r) > -1
              );
            }),
            (e.TYPES = [
              "mp4",
              "m4v",
              "webm",
              "ogg",
              "ogv",
              "h264",
              "avi",
              "mov",
            ]),
            (e.MIME_TYPES = {
              ogv: "video/ogg",
              mov: "video/quicktime",
              m4v: "video/mp4",
            }),
            e
          );
        })(qe),
        tr = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            ke(e, t),
            (e.test = function (t) {
              return !!self.createImageBitmap && t instanceof ImageBitmap;
            }),
            e
          );
        })(qe);
      Be.push(Je, tr, Ke, $e, Qe, je, Ze, We);
      var er = {
          __proto__: null,
          Resource: He,
          BaseImageResource: qe,
          INSTALLED: Be,
          autoDetectResource: Ge,
          AbstractMultiResource: ze,
          ArrayResource: We,
          BufferResource: je,
          CanvasResource: Ke,
          CubeResource: Ze,
          ImageResource: Je,
          SVGResource: Qe,
          VideoResource: $e,
          ImageBitmapResource: tr,
        },
        rr = (function () {
          function t(t) {
            this.renderer = t;
          }
          return (
            (t.prototype.destroy = function () {
              this.renderer = null;
            }),
            t
          );
        })(),
        ir = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            ke(e, t),
            (e.prototype.upload = function (t, e, r) {
              var i = t.gl;
              i.pixelStorei(
                i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                e.alphaMode === dt.UNPACK
              );
              var n = e.realWidth,
                o = e.realHeight;
              return (
                r.width === n && r.height === o
                  ? i.texSubImage2D(
                      e.target,
                      0,
                      0,
                      0,
                      n,
                      o,
                      e.format,
                      e.type,
                      this.data
                    )
                  : ((r.width = n),
                    (r.height = o),
                    i.texImage2D(
                      e.target,
                      0,
                      1 === t.context.webGLVersion
                        ? i.DEPTH_COMPONENT
                        : i.DEPTH_COMPONENT16,
                      n,
                      o,
                      0,
                      e.format,
                      e.type,
                      this.data
                    )),
                !0
              );
            }),
            e
          );
        })(je),
        nr = (function () {
          function t(t, e) {
            (this.width = Math.ceil(t || 100)),
              (this.height = Math.ceil(e || 100)),
              (this.stencil = !1),
              (this.depth = !1),
              (this.dirtyId = 0),
              (this.dirtyFormat = 0),
              (this.dirtySize = 0),
              (this.depthTexture = null),
              (this.colorTextures = []),
              (this.glFramebuffers = {}),
              (this.disposeRunner = new Ue("disposeFramebuffer")),
              (this.multisample = vt.NONE);
          }
          return (
            Object.defineProperty(t.prototype, "colorTexture", {
              get: function () {
                return this.colorTextures[0];
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.addColorTexture = function (t, e) {
              return (
                void 0 === t && (t = 0),
                (this.colorTextures[t] =
                  e ||
                  new Ve(null, {
                    scaleMode: ut.NEAREST,
                    resolution: 1,
                    mipmap: ct.OFF,
                    width: this.width,
                    height: this.height,
                  })),
                this.dirtyId++,
                this.dirtyFormat++,
                this
              );
            }),
            (t.prototype.addDepthTexture = function (t) {
              return (
                (this.depthTexture =
                  t ||
                  new Ve(
                    new ir(null, { width: this.width, height: this.height }),
                    {
                      scaleMode: ut.NEAREST,
                      resolution: 1,
                      width: this.width,
                      height: this.height,
                      mipmap: ct.OFF,
                      format: ot.DEPTH_COMPONENT,
                      type: at.UNSIGNED_SHORT,
                    }
                  )),
                this.dirtyId++,
                this.dirtyFormat++,
                this
              );
            }),
            (t.prototype.enableDepth = function () {
              return (
                (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this
              );
            }),
            (t.prototype.enableStencil = function () {
              return (
                (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this
              );
            }),
            (t.prototype.resize = function (t, e) {
              if (
                ((t = Math.ceil(t)),
                (e = Math.ceil(e)),
                t !== this.width || e !== this.height)
              ) {
                (this.width = t),
                  (this.height = e),
                  this.dirtyId++,
                  this.dirtySize++;
                for (var r = 0; r < this.colorTextures.length; r++) {
                  var i = this.colorTextures[r],
                    n = i.resolution;
                  i.setSize(t / n, e / n);
                }
                this.depthTexture &&
                  ((n = this.depthTexture.resolution),
                  this.depthTexture.setSize(t / n, e / n));
              }
            }),
            (t.prototype.dispose = function () {
              this.disposeRunner.emit(this, !1);
            }),
            (t.prototype.destroyDepthTexture = function () {
              this.depthTexture &&
                (this.depthTexture.destroy(),
                (this.depthTexture = null),
                ++this.dirtyId,
                ++this.dirtyFormat);
            }),
            t
          );
        })(),
        or = (function (t) {
          function e(e) {
            var r = this;
            if ("number" == typeof e) {
              var i = arguments[0],
                n = arguments[1],
                o = arguments[2],
                s = arguments[3];
              e = { width: i, height: n, scaleMode: o, resolution: s };
            }
            r = t.call(this, null, e) || this;
            var a = e || {},
              h = a.width,
              u = a.height;
            return (
              (r.mipmap = ct.OFF),
              (r.width = Math.ceil(h) || 100),
              (r.height = Math.ceil(u) || 100),
              (r.valid = !0),
              (r.clearColor = [0, 0, 0, 0]),
              (r.framebuffer = new nr(
                r.width * r.resolution,
                r.height * r.resolution
              ).addColorTexture(0, r)),
              (r.maskStack = []),
              (r.filterStack = [{}]),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.resize = function (t, e) {
              (t = Math.ceil(t)),
                (e = Math.ceil(e)),
                this.framebuffer.resize(
                  t * this.resolution,
                  e * this.resolution
                );
            }),
            (e.prototype.dispose = function () {
              this.framebuffer.dispose(), t.prototype.dispose.call(this);
            }),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this.framebuffer.destroyDepthTexture(),
                (this.framebuffer = null);
            }),
            e
          );
        })(Ve),
        sr = (function () {
          function t() {
            (this.x0 = 0),
              (this.y0 = 0),
              (this.x1 = 1),
              (this.y1 = 0),
              (this.x2 = 1),
              (this.y2 = 1),
              (this.x3 = 0),
              (this.y3 = 1),
              (this.uvsFloat32 = new Float32Array(8));
          }
          return (
            (t.prototype.set = function (t, e, r) {
              var i = e.width,
                n = e.height;
              if (r) {
                var o = t.width / 2 / i,
                  s = t.height / 2 / n,
                  a = t.x / i + o,
                  h = t.y / n + s;
                (r = _e.add(r, _e.NW)),
                  (this.x0 = a + o * _e.uX(r)),
                  (this.y0 = h + s * _e.uY(r)),
                  (r = _e.add(r, 2)),
                  (this.x1 = a + o * _e.uX(r)),
                  (this.y1 = h + s * _e.uY(r)),
                  (r = _e.add(r, 2)),
                  (this.x2 = a + o * _e.uX(r)),
                  (this.y2 = h + s * _e.uY(r)),
                  (r = _e.add(r, 2)),
                  (this.x3 = a + o * _e.uX(r)),
                  (this.y3 = h + s * _e.uY(r));
              } else
                (this.x0 = t.x / i),
                  (this.y0 = t.y / n),
                  (this.x1 = (t.x + t.width) / i),
                  (this.y1 = t.y / n),
                  (this.x2 = (t.x + t.width) / i),
                  (this.y2 = (t.y + t.height) / n),
                  (this.x3 = t.x / i),
                  (this.y3 = (t.y + t.height) / n);
              (this.uvsFloat32[0] = this.x0),
                (this.uvsFloat32[1] = this.y0),
                (this.uvsFloat32[2] = this.x1),
                (this.uvsFloat32[3] = this.y1),
                (this.uvsFloat32[4] = this.x2),
                (this.uvsFloat32[5] = this.y2),
                (this.uvsFloat32[6] = this.x3),
                (this.uvsFloat32[7] = this.y3);
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/core:TextureUvs x0=" +
                this.x0 +
                " y0=" +
                this.y0 +
                " x1=" +
                this.x1 +
                " y1=" +
                this.y1 +
                " x2=" +
                this.x2 +
                " y2=" +
                this.y2 +
                " x3=" +
                this.x3 +
                " y3=" +
                this.y3 +
                "]"
              );
            }),
            t
          );
        })(),
        ar = new sr(),
        hr = (function (t) {
          function e(r, i, n, o, s, a) {
            var h = t.call(this) || this;
            if (
              ((h.noFrame = !1),
              i || ((h.noFrame = !0), (i = new te(0, 0, 1, 1))),
              r instanceof e && (r = r.baseTexture),
              (h.baseTexture = r),
              (h._frame = i),
              (h.trim = o),
              (h.valid = !1),
              (h._uvs = ar),
              (h.uvMatrix = null),
              (h.orig = n || i),
              (h._rotate = Number(s || 0)),
              !0 === s)
            )
              h._rotate = 2;
            else if (h._rotate % 2 != 0)
              throw new Error(
                "attempt to use diamond-shaped UVs. If you are sure, set rotation manually"
              );
            return (
              (h.defaultAnchor = a ? new oe(a.x, a.y) : new oe(0, 0)),
              (h._updateID = 0),
              (h.textureCacheIds = []),
              r.valid
                ? h.noFrame
                  ? r.valid && h.onBaseTextureUpdated(r)
                  : (h.frame = i)
                : r.once("loaded", h.onBaseTextureUpdated, h),
              h.noFrame && r.on("update", h.onBaseTextureUpdated, h),
              h
            );
          }
          return (
            ke(e, t),
            (e.prototype.update = function () {
              this.baseTexture.resource && this.baseTexture.resource.update();
            }),
            (e.prototype.onBaseTextureUpdated = function (t) {
              if (this.noFrame) {
                if (!this.baseTexture.valid) return;
                (this._frame.width = t.width),
                  (this._frame.height = t.height),
                  (this.valid = !0),
                  this.updateUvs();
              } else this.frame = this._frame;
              this.emit("update", this);
            }),
            (e.prototype.destroy = function (t) {
              if (this.baseTexture) {
                if (t) {
                  var r = this.baseTexture.resource;
                  r && r.url && zt[r.url] && e.removeFromCache(r.url),
                    this.baseTexture.destroy();
                }
                this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
                  this.baseTexture.off(
                    "update",
                    this.onBaseTextureUpdated,
                    this
                  ),
                  (this.baseTexture = null);
              }
              (this._frame = null),
                (this._uvs = null),
                (this.trim = null),
                (this.orig = null),
                (this.valid = !1),
                e.removeFromCache(this),
                (this.textureCacheIds = null);
            }),
            (e.prototype.clone = function () {
              var t = this._frame.clone(),
                r = this._frame === this.orig ? t : this.orig.clone(),
                i = new e(
                  this.baseTexture,
                  !this.noFrame && t,
                  r,
                  this.trim && this.trim.clone(),
                  this.rotate,
                  this.defaultAnchor
                );
              return this.noFrame && (i._frame = t), i;
            }),
            (e.prototype.updateUvs = function () {
              this._uvs === ar && (this._uvs = new sr()),
                this._uvs.set(this._frame, this.baseTexture, this.rotate),
                this._updateID++;
            }),
            (e.from = function (t, r, i) {
              void 0 === r && (r = {}),
                void 0 === i && (i = yt.STRICT_TEXTURE_CACHE);
              var n = "string" == typeof t,
                o = null;
              if (n) o = t;
              else {
                if (!t._pixiId) {
                  var s = (r && r.pixiIdPrefix) || "pixiid";
                  t._pixiId = s + "_" + kt();
                }
                o = t._pixiId;
              }
              var a = zt[o];
              if (n && i && !a)
                throw new Error(
                  'The cacheId "' + o + '" does not exist in TextureCache.'
                );
              return (
                a ||
                  (r.resolution || (r.resolution = Kt(t)),
                  ((a = new e(new Ve(t, r))).baseTexture.cacheId = o),
                  Ve.addToCache(a.baseTexture, o),
                  e.addToCache(a, o)),
                a
              );
            }),
            (e.fromURL = function (t, r) {
              var i = Object.assign(
                  { autoLoad: !1 },
                  null == r ? void 0 : r.resourceOptions
                ),
                n = e.from(t, Object.assign({ resourceOptions: i }, r), !1),
                o = n.baseTexture.resource;
              return n.baseTexture.valid
                ? Promise.resolve(n)
                : o.load().then(function () {
                    return Promise.resolve(n);
                  });
            }),
            (e.fromBuffer = function (t, r, i, n) {
              return new e(Ve.fromBuffer(t, r, i, n));
            }),
            (e.fromLoader = function (t, r, i, n) {
              var o = new Ve(
                  t,
                  Object.assign(
                    { scaleMode: yt.SCALE_MODE, resolution: Kt(r) },
                    n
                  )
                ),
                s = o.resource;
              s instanceof Je && (s.url = r);
              var a = new e(o);
              return (
                i || (i = r),
                Ve.addToCache(a.baseTexture, i),
                e.addToCache(a, i),
                i !== r &&
                  (Ve.addToCache(a.baseTexture, r), e.addToCache(a, r)),
                a.baseTexture.valid
                  ? Promise.resolve(a)
                  : new Promise(function (t) {
                      a.baseTexture.once("loaded", function () {
                        return t(a);
                      });
                    })
              );
            }),
            (e.addToCache = function (t, e) {
              e &&
                (-1 === t.textureCacheIds.indexOf(e) &&
                  t.textureCacheIds.push(e),
                zt[e] &&
                  console.warn(
                    "Texture added to the cache with an id [" +
                      e +
                      "] that already had an entry"
                  ),
                (zt[e] = t));
            }),
            (e.removeFromCache = function (t) {
              if ("string" == typeof t) {
                var e = zt[t];
                if (e) {
                  var r = e.textureCacheIds.indexOf(t);
                  return (
                    r > -1 && e.textureCacheIds.splice(r, 1), delete zt[t], e
                  );
                }
              } else if (t && t.textureCacheIds) {
                for (var i = 0; i < t.textureCacheIds.length; ++i)
                  zt[t.textureCacheIds[i]] === t &&
                    delete zt[t.textureCacheIds[i]];
                return (t.textureCacheIds.length = 0), t;
              }
              return null;
            }),
            Object.defineProperty(e.prototype, "resolution", {
              get: function () {
                return this.baseTexture.resolution;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "frame", {
              get: function () {
                return this._frame;
              },
              set: function (t) {
                (this._frame = t), (this.noFrame = !1);
                var e = t.x,
                  r = t.y,
                  i = t.width,
                  n = t.height,
                  o = e + i > this.baseTexture.width,
                  s = r + n > this.baseTexture.height;
                if (o || s) {
                  var a = o && s ? "and" : "or",
                    h =
                      "X: " +
                      e +
                      " + " +
                      i +
                      " = " +
                      (e + i) +
                      " > " +
                      this.baseTexture.width,
                    u =
                      "Y: " +
                      r +
                      " + " +
                      n +
                      " = " +
                      (r + n) +
                      " > " +
                      this.baseTexture.height;
                  throw new Error(
                    "Texture Error: frame does not fit inside the base Texture dimensions: " +
                      h +
                      " " +
                      a +
                      " " +
                      u
                  );
                }
                (this.valid = i && n && this.baseTexture.valid),
                  this.trim || this.rotate || (this.orig = t),
                  this.valid && this.updateUvs();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "rotate", {
              get: function () {
                return this._rotate;
              },
              set: function (t) {
                (this._rotate = t), this.valid && this.updateUvs();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return this.orig.width;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
              get: function () {
                return this.orig.height;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.castToBaseTexture = function () {
              return this.baseTexture;
            }),
            e
          );
        })(Tt());
      function ur(t) {
        (t.destroy = function () {}),
          (t.on = function () {}),
          (t.once = function () {}),
          (t.emit = function () {});
      }
      (hr.EMPTY = new hr(new Ve())),
        ur(hr.EMPTY),
        ur(hr.EMPTY.baseTexture),
        (hr.WHITE = (function () {
          var t = document.createElement("canvas");
          (t.width = 16), (t.height = 16);
          var e = t.getContext("2d");
          return (
            (e.fillStyle = "white"),
            e.fillRect(0, 0, 16, 16),
            new hr(new Ve(new Ke(t)))
          );
        })()),
        ur(hr.WHITE),
        ur(hr.WHITE.baseTexture);
      var lr = (function (t) {
          function e(e, r) {
            var i = t.call(this, e, r) || this;
            return (
              (i.valid = !0),
              (i.filterFrame = null),
              (i.filterPoolKey = null),
              i.updateUvs(),
              i
            );
          }
          return (
            ke(e, t),
            Object.defineProperty(e.prototype, "framebuffer", {
              get: function () {
                return this.baseTexture.framebuffer;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.resize = function (t, e, r) {
              void 0 === r && (r = !0),
                (t = Math.ceil(t)),
                (e = Math.ceil(e)),
                (this.valid = t > 0 && e > 0),
                (this._frame.width = this.orig.width = t),
                (this._frame.height = this.orig.height = e),
                r && this.baseTexture.resize(t, e),
                this.updateUvs();
            }),
            (e.prototype.setResolution = function (t) {
              var e = this.baseTexture;
              e.resolution !== t &&
                (e.setResolution(t), this.resize(e.width, e.height, !1));
            }),
            (e.create = function (t) {
              for (var r = arguments, i = [], n = 1; n < arguments.length; n++)
                i[n - 1] = r[n];
              return (
                "number" == typeof t &&
                  (jt(
                    "6.0.0",
                    "Arguments (width, height, scaleMode, resolution) have been deprecated."
                  ),
                  (t = {
                    width: t,
                    height: i[0],
                    scaleMode: i[1],
                    resolution: i[2],
                  })),
                new e(new or(t))
              );
            }),
            e
          );
        })(hr),
        cr = (function () {
          function t(t) {
            (this.texturePool = {}),
              (this.textureOptions = t || {}),
              (this.enableFullScreen = !1),
              (this._pixelsWidth = 0),
              (this._pixelsHeight = 0);
          }
          return (
            (t.prototype.createTexture = function (t, e) {
              var r = new or(
                Object.assign(
                  { width: t, height: e, resolution: 1 },
                  this.textureOptions
                )
              );
              return new lr(r);
            }),
            (t.prototype.getOptimalTexture = function (e, r, i) {
              void 0 === i && (i = 1);
              var n = t.SCREEN_KEY;
              (e *= i),
                (r *= i),
                (this.enableFullScreen &&
                  e === this._pixelsWidth &&
                  r === this._pixelsHeight) ||
                  (n = ((65535 & (e = Lt(e))) << 16) | (65535 & (r = Lt(r)))),
                this.texturePool[n] || (this.texturePool[n] = []);
              var o = this.texturePool[n].pop();
              return (
                o || (o = this.createTexture(e, r)),
                (o.filterPoolKey = n),
                o.setResolution(i),
                o
              );
            }),
            (t.prototype.getFilterTexture = function (t, e) {
              var r = this.getOptimalTexture(
                t.width,
                t.height,
                e || t.resolution
              );
              return (r.filterFrame = t.filterFrame), r;
            }),
            (t.prototype.returnTexture = function (t) {
              var e = t.filterPoolKey;
              (t.filterFrame = null), this.texturePool[e].push(t);
            }),
            (t.prototype.returnFilterTexture = function (t) {
              this.returnTexture(t);
            }),
            (t.prototype.clear = function (t) {
              if ((t = !1 !== t))
                for (var e in this.texturePool) {
                  var r = this.texturePool[e];
                  if (r) for (var i = 0; i < r.length; i++) r[i].destroy(!0);
                }
              this.texturePool = {};
            }),
            (t.prototype.setScreenSize = function (e) {
              if (
                e.width !== this._pixelsWidth ||
                e.height !== this._pixelsHeight
              ) {
                var r = t.SCREEN_KEY,
                  i = this.texturePool[r];
                if (((this.enableFullScreen = e.width > 0 && e.height > 0), i))
                  for (var n = 0; n < i.length; n++) i[n].destroy(!0);
                (this.texturePool[r] = []),
                  (this._pixelsWidth = e.width),
                  (this._pixelsHeight = e.height);
              }
            }),
            (t.SCREEN_KEY = "screen"),
            t
          );
        })(),
        dr = (function () {
          function t(t, e, r, i, n, o, s) {
            void 0 === e && (e = 0),
              void 0 === r && (r = !1),
              void 0 === i && (i = at.FLOAT),
              (this.buffer = t),
              (this.size = e),
              (this.normalized = r),
              (this.type = i),
              (this.stride = n),
              (this.start = o),
              (this.instance = s);
          }
          return (
            (t.prototype.destroy = function () {
              this.buffer = null;
            }),
            (t.from = function (e, r, i, n, o) {
              return new t(e, r, i, n, o);
            }),
            t
          );
        })(),
        fr = 0,
        pr = (function () {
          function t(t, e, r) {
            void 0 === e && (e = !0),
              void 0 === r && (r = !1),
              (this.data = t || new Float32Array(1)),
              (this._glBuffers = {}),
              (this._updateID = 0),
              (this.index = r),
              (this.static = e),
              (this.id = fr++),
              (this.disposeRunner = new Ue("disposeBuffer"));
          }
          return (
            (t.prototype.update = function (t) {
              (this.data = t || this.data), this._updateID++;
            }),
            (t.prototype.dispose = function () {
              this.disposeRunner.emit(this, !1);
            }),
            (t.prototype.destroy = function () {
              this.dispose(), (this.data = null);
            }),
            (t.from = function (e) {
              return e instanceof Array && (e = new Float32Array(e)), new t(e);
            }),
            t
          );
        })();
      function _r(t) {
        if (4 === t.BYTES_PER_ELEMENT)
          return t instanceof Float32Array
            ? "Float32Array"
            : t instanceof Uint32Array
            ? "Uint32Array"
            : "Int32Array";
        if (2 === t.BYTES_PER_ELEMENT) {
          if (t instanceof Uint16Array) return "Uint16Array";
        } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array)
          return "Uint8Array";
        return null;
      }
      var mr = { Float32Array, Uint32Array, Int32Array, Uint8Array },
        vr = { 5126: 4, 5123: 2, 5121: 1 },
        yr = 0,
        gr = { Float32Array, Uint32Array, Int32Array, Uint8Array, Uint16Array },
        Tr = (function () {
          function t(t, e) {
            void 0 === t && (t = []),
              void 0 === e && (e = {}),
              (this.buffers = t),
              (this.indexBuffer = null),
              (this.attributes = e),
              (this.glVertexArrayObjects = {}),
              (this.id = yr++),
              (this.instanced = !1),
              (this.instanceCount = 1),
              (this.disposeRunner = new Ue("disposeGeometry")),
              (this.refCount = 0);
          }
          return (
            (t.prototype.addAttribute = function (t, e, r, i, n, o, s, a) {
              if (
                (void 0 === r && (r = 0),
                void 0 === i && (i = !1),
                void 0 === a && (a = !1),
                !e)
              )
                throw new Error(
                  "You must pass a buffer when creating an attribute"
                );
              e instanceof pr ||
                (e instanceof Array && (e = new Float32Array(e)),
                (e = new pr(e)));
              var h = t.split("|");
              if (h.length > 1) {
                for (var u = 0; u < h.length; u++)
                  this.addAttribute(h[u], e, r, i, n);
                return this;
              }
              var l = this.buffers.indexOf(e);
              return (
                -1 === l &&
                  (this.buffers.push(e), (l = this.buffers.length - 1)),
                (this.attributes[t] = new dr(l, r, i, n, o, s, a)),
                (this.instanced = this.instanced || a),
                this
              );
            }),
            (t.prototype.getAttribute = function (t) {
              return this.attributes[t];
            }),
            (t.prototype.getBuffer = function (t) {
              return this.buffers[this.getAttribute(t).buffer];
            }),
            (t.prototype.addIndex = function (t) {
              return (
                t instanceof pr ||
                  (t instanceof Array && (t = new Uint16Array(t)),
                  (t = new pr(t))),
                (t.index = !0),
                (this.indexBuffer = t),
                -1 === this.buffers.indexOf(t) && this.buffers.push(t),
                this
              );
            }),
            (t.prototype.getIndex = function () {
              return this.indexBuffer;
            }),
            (t.prototype.interleave = function () {
              if (
                1 === this.buffers.length ||
                (2 === this.buffers.length && this.indexBuffer)
              )
                return this;
              var t,
                e = [],
                r = [],
                i = new pr();
              for (t in this.attributes) {
                var n = this.attributes[t],
                  o = this.buffers[n.buffer];
                e.push(o.data),
                  r.push((n.size * vr[n.type]) / 4),
                  (n.buffer = 0);
              }
              for (
                i.data = (function (t, e) {
                  for (var r = 0, i = 0, n = {}, o = 0; o < t.length; o++)
                    (i += e[o]), (r += t[o].length);
                  var s = new ArrayBuffer(4 * r),
                    a = null,
                    h = 0;
                  for (o = 0; o < t.length; o++) {
                    var u = e[o],
                      l = t[o],
                      c = _r(l);
                    n[c] || (n[c] = new mr[c](s)), (a = n[c]);
                    for (var d = 0; d < l.length; d++)
                      a[((d / u) | 0) * i + h + (d % u)] = l[d];
                    h += u;
                  }
                  return new Float32Array(s);
                })(e, r),
                  t = 0;
                t < this.buffers.length;
                t++
              )
                this.buffers[t] !== this.indexBuffer &&
                  this.buffers[t].destroy();
              return (
                (this.buffers = [i]),
                this.indexBuffer && this.buffers.push(this.indexBuffer),
                this
              );
            }),
            (t.prototype.getSize = function () {
              for (var t in this.attributes) {
                var e = this.attributes[t];
                return (
                  this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
                );
              }
              return 0;
            }),
            (t.prototype.dispose = function () {
              this.disposeRunner.emit(this, !1);
            }),
            (t.prototype.destroy = function () {
              this.dispose(),
                (this.buffers = null),
                (this.indexBuffer = null),
                (this.attributes = null);
            }),
            (t.prototype.clone = function () {
              for (var e = new t(), r = 0; r < this.buffers.length; r++)
                e.buffers[r] = new pr(this.buffers[r].data.slice(0));
              for (var r in this.attributes) {
                var i = this.attributes[r];
                e.attributes[r] = new dr(
                  i.buffer,
                  i.size,
                  i.normalized,
                  i.type,
                  i.stride,
                  i.start,
                  i.instance
                );
              }
              return (
                this.indexBuffer &&
                  ((e.indexBuffer =
                    e.buffers[this.buffers.indexOf(this.indexBuffer)]),
                  (e.indexBuffer.index = !0)),
                e
              );
            }),
            (t.merge = function (e) {
              for (
                var r, i = new t(), n = [], o = [], s = [], a = 0;
                a < e.length;
                a++
              ) {
                r = e[a];
                for (var h = 0; h < r.buffers.length; h++)
                  (o[h] = o[h] || 0),
                    (o[h] += r.buffers[h].data.length),
                    (s[h] = 0);
              }
              for (a = 0; a < r.buffers.length; a++)
                (n[a] = new gr[_r(r.buffers[a].data)](o[a])),
                  (i.buffers[a] = new pr(n[a]));
              for (a = 0; a < e.length; a++)
                for (r = e[a], h = 0; h < r.buffers.length; h++)
                  n[h].set(r.buffers[h].data, s[h]),
                    (s[h] += r.buffers[h].data.length);
              if (((i.attributes = r.attributes), r.indexBuffer)) {
                (i.indexBuffer = i.buffers[r.buffers.indexOf(r.indexBuffer)]),
                  (i.indexBuffer.index = !0);
                var u = 0,
                  l = 0,
                  c = 0,
                  d = 0;
                for (a = 0; a < r.buffers.length; a++)
                  if (r.buffers[a] !== r.indexBuffer) {
                    d = a;
                    break;
                  }
                for (var a in r.attributes) {
                  var f = r.attributes[a];
                  (0 | f.buffer) === d && (l += (f.size * vr[f.type]) / 4);
                }
                for (a = 0; a < e.length; a++) {
                  var p = e[a].indexBuffer.data;
                  for (h = 0; h < p.length; h++) i.indexBuffer.data[h + c] += u;
                  (u += r.buffers[d].data.length / l), (c += p.length);
                }
              }
              return i;
            }),
            t
          );
        })(),
        xr = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              e
                .addAttribute(
                  "aVertexPosition",
                  new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
                )
                .addIndex([0, 1, 3, 2]),
              e
            );
          }
          return ke(e, t), e;
        })(Tr),
        Er = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
              (e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
              (e.vertexBuffer = new pr(e.vertices)),
              (e.uvBuffer = new pr(e.uvs)),
              e
                .addAttribute("aVertexPosition", e.vertexBuffer)
                .addAttribute("aTextureCoord", e.uvBuffer)
                .addIndex([0, 1, 2, 0, 2, 3]),
              e
            );
          }
          return (
            ke(e, t),
            (e.prototype.map = function (t, e) {
              var r = 0,
                i = 0;
              return (
                (this.uvs[0] = r),
                (this.uvs[1] = i),
                (this.uvs[2] = r + e.width / t.width),
                (this.uvs[3] = i),
                (this.uvs[4] = r + e.width / t.width),
                (this.uvs[5] = i + e.height / t.height),
                (this.uvs[6] = r),
                (this.uvs[7] = i + e.height / t.height),
                (r = e.x),
                (i = e.y),
                (this.vertices[0] = r),
                (this.vertices[1] = i),
                (this.vertices[2] = r + e.width),
                (this.vertices[3] = i),
                (this.vertices[4] = r + e.width),
                (this.vertices[5] = i + e.height),
                (this.vertices[6] = r),
                (this.vertices[7] = i + e.height),
                this.invalidate(),
                this
              );
            }),
            (e.prototype.invalidate = function () {
              return (
                this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
              );
            }),
            e
          );
        })(Tr),
        br = 0,
        Ar = (function () {
          function t(t, e) {
            (this.uniforms = t),
              (this.group = !0),
              (this.syncUniforms = {}),
              (this.dirtyId = 0),
              (this.id = br++),
              (this.static = !!e);
          }
          return (
            (t.prototype.update = function () {
              this.dirtyId++;
            }),
            (t.prototype.add = function (e, r, i) {
              this.uniforms[e] = new t(r, i);
            }),
            (t.from = function (e, r) {
              return new t(e, r);
            }),
            t
          );
        })(),
        Or = (function () {
          function t() {
            (this.renderTexture = null),
              (this.target = null),
              (this.legacy = !1),
              (this.resolution = 1),
              (this.sourceFrame = new te()),
              (this.destinationFrame = new te()),
              (this.bindingSourceFrame = new te()),
              (this.bindingDestinationFrame = new te()),
              (this.filters = []),
              (this.transform = null);
          }
          return (
            (t.prototype.clear = function () {
              (this.target = null),
                (this.filters = null),
                (this.renderTexture = null);
            }),
            t
          );
        })(),
        Sr = [new oe(), new oe(), new oe(), new oe()],
        Rr = new ae(),
        Ir = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.defaultFilterStack = [{}]),
              (r.texturePool = new cr()),
              r.texturePool.setScreenSize(e.view),
              (r.statePool = []),
              (r.quad = new xr()),
              (r.quadUv = new Er()),
              (r.tempRect = new te()),
              (r.activeState = {}),
              (r.globalUniforms = new Ar(
                {
                  outputFrame: new te(),
                  inputSize: new Float32Array(4),
                  inputPixel: new Float32Array(4),
                  inputClamp: new Float32Array(4),
                  resolution: 1,
                  filterArea: new Float32Array(4),
                  filterClamp: new Float32Array(4),
                },
                !0
              )),
              (r.forceClear = !1),
              (r.useMaxPadding = !1),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.push = function (t, e) {
              for (
                var r = this.renderer,
                  i = this.defaultFilterStack,
                  n = this.statePool.pop() || new Or(),
                  o = this.renderer.renderTexture,
                  s = e[0].resolution,
                  a = e[0].padding,
                  h = e[0].autoFit,
                  u = e[0].legacy,
                  l = 1;
                l < e.length;
                l++
              ) {
                var c = e[l];
                (s = Math.min(s, c.resolution)),
                  (a = this.useMaxPadding
                    ? Math.max(a, c.padding)
                    : a + c.padding),
                  (h = h && c.autoFit),
                  (u = u || c.legacy);
              }
              if (
                (1 === i.length &&
                  (this.defaultFilterStack[0].renderTexture = o.current),
                i.push(n),
                (n.resolution = s),
                (n.legacy = u),
                (n.target = t),
                n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
                n.sourceFrame.pad(a),
                h)
              ) {
                var d = this.tempRect.copyFrom(o.sourceFrame);
                r.projection.transform &&
                  this.transformAABB(
                    Rr.copyFrom(r.projection.transform).invert(),
                    d
                  ),
                  n.sourceFrame.fit(d);
              }
              this.roundFrame(
                n.sourceFrame,
                o.current ? o.current.resolution : r.resolution,
                o.sourceFrame,
                o.destinationFrame,
                r.projection.transform
              ),
                (n.renderTexture = this.getOptimalFilterTexture(
                  n.sourceFrame.width,
                  n.sourceFrame.height,
                  s
                )),
                (n.filters = e),
                (n.destinationFrame.width = n.renderTexture.width),
                (n.destinationFrame.height = n.renderTexture.height);
              var f = this.tempRect;
              (f.x = 0),
                (f.y = 0),
                (f.width = n.sourceFrame.width),
                (f.height = n.sourceFrame.height),
                (n.renderTexture.filterFrame = n.sourceFrame),
                n.bindingSourceFrame.copyFrom(o.sourceFrame),
                n.bindingDestinationFrame.copyFrom(o.destinationFrame),
                (n.transform = r.projection.transform),
                (r.projection.transform = null),
                o.bind(n.renderTexture, n.sourceFrame, f),
                r.framebuffer.clear(0, 0, 0, 0);
            }),
            (e.prototype.pop = function () {
              var t = this.defaultFilterStack,
                e = t.pop(),
                r = e.filters;
              this.activeState = e;
              var i = this.globalUniforms.uniforms;
              (i.outputFrame = e.sourceFrame), (i.resolution = e.resolution);
              var n = i.inputSize,
                o = i.inputPixel,
                s = i.inputClamp;
              if (
                ((n[0] = e.destinationFrame.width),
                (n[1] = e.destinationFrame.height),
                (n[2] = 1 / n[0]),
                (n[3] = 1 / n[1]),
                (o[0] = n[0] * e.resolution),
                (o[1] = n[1] * e.resolution),
                (o[2] = 1 / o[0]),
                (o[3] = 1 / o[1]),
                (s[0] = 0.5 * o[2]),
                (s[1] = 0.5 * o[3]),
                (s[2] = e.sourceFrame.width * n[2] - 0.5 * o[2]),
                (s[3] = e.sourceFrame.height * n[3] - 0.5 * o[3]),
                e.legacy)
              ) {
                var a = i.filterArea;
                (a[0] = e.destinationFrame.width),
                  (a[1] = e.destinationFrame.height),
                  (a[2] = e.sourceFrame.x),
                  (a[3] = e.sourceFrame.y),
                  (i.filterClamp = i.inputClamp);
              }
              this.globalUniforms.update();
              var h = t[t.length - 1];
              if (
                (e.renderTexture.framebuffer.multisample > 1 &&
                  this.renderer.framebuffer.blit(),
                1 === r.length)
              )
                r[0].apply(this, e.renderTexture, h.renderTexture, ft.BLEND, e),
                  this.returnFilterTexture(e.renderTexture);
              else {
                var u = e.renderTexture,
                  l = this.getOptimalFilterTexture(
                    u.width,
                    u.height,
                    e.resolution
                  );
                l.filterFrame = u.filterFrame;
                var c = 0;
                for (c = 0; c < r.length - 1; ++c) {
                  r[c].apply(this, u, l, ft.CLEAR, e);
                  var d = u;
                  (u = l), (l = d);
                }
                r[c].apply(this, u, h.renderTexture, ft.BLEND, e),
                  this.returnFilterTexture(u),
                  this.returnFilterTexture(l);
              }
              e.clear(), this.statePool.push(e);
            }),
            (e.prototype.bindAndClear = function (t, e) {
              void 0 === e && (e = ft.CLEAR);
              var r = this.renderer,
                i = r.renderTexture,
                n = r.state;
              if (
                (t ===
                this.defaultFilterStack[this.defaultFilterStack.length - 1]
                  .renderTexture
                  ? (this.renderer.projection.transform =
                      this.activeState.transform)
                  : (this.renderer.projection.transform = null),
                t && t.filterFrame)
              ) {
                var o = this.tempRect;
                (o.x = 0),
                  (o.y = 0),
                  (o.width = t.filterFrame.width),
                  (o.height = t.filterFrame.height),
                  i.bind(t, t.filterFrame, o);
              } else
                t !==
                this.defaultFilterStack[this.defaultFilterStack.length - 1]
                  .renderTexture
                  ? i.bind(t)
                  : this.renderer.renderTexture.bind(
                      t,
                      this.activeState.bindingSourceFrame,
                      this.activeState.bindingDestinationFrame
                    );
              var s = 1 & n.stateId || this.forceClear;
              (e === ft.CLEAR || (e === ft.BLIT && s)) &&
                this.renderer.framebuffer.clear(0, 0, 0, 0);
            }),
            (e.prototype.applyFilter = function (t, e, r, i) {
              var n = this.renderer;
              n.state.set(t.state),
                this.bindAndClear(r, i),
                (t.uniforms.uSampler = e),
                (t.uniforms.filterGlobals = this.globalUniforms),
                n.shader.bind(t),
                t.legacy
                  ? (this.quadUv.map(e._frame, e.filterFrame),
                    n.geometry.bind(this.quadUv),
                    n.geometry.draw(nt.TRIANGLES))
                  : (n.geometry.bind(this.quad),
                    n.geometry.draw(nt.TRIANGLE_STRIP));
            }),
            (e.prototype.calculateSpriteMatrix = function (t, e) {
              var r = this.activeState,
                i = r.sourceFrame,
                n = r.destinationFrame,
                o = e._texture.orig,
                s = t.set(n.width, 0, 0, n.height, i.x, i.y),
                a = e.worldTransform.copyTo(ae.TEMP_MATRIX);
              return (
                a.invert(),
                s.prepend(a),
                s.scale(1 / o.width, 1 / o.height),
                s.translate(e.anchor.x, e.anchor.y),
                s
              );
            }),
            (e.prototype.destroy = function () {
              this.texturePool.clear(!1);
            }),
            (e.prototype.getOptimalFilterTexture = function (t, e, r) {
              return (
                void 0 === r && (r = 1),
                this.texturePool.getOptimalTexture(t, e, r)
              );
            }),
            (e.prototype.getFilterTexture = function (t, e) {
              if ("number" == typeof t) {
                var r = t;
                (t = e), (e = r);
              }
              t = t || this.activeState.renderTexture;
              var i = this.texturePool.getOptimalTexture(
                t.width,
                t.height,
                e || t.resolution
              );
              return (i.filterFrame = t.filterFrame), i;
            }),
            (e.prototype.returnFilterTexture = function (t) {
              this.texturePool.returnTexture(t);
            }),
            (e.prototype.emptyPool = function () {
              this.texturePool.clear(!0);
            }),
            (e.prototype.resize = function () {
              this.texturePool.setScreenSize(this.renderer.view);
            }),
            (e.prototype.transformAABB = function (t, e) {
              var r = Sr[0],
                i = Sr[1],
                n = Sr[2],
                o = Sr[3];
              r.set(e.left, e.top),
                i.set(e.left, e.bottom),
                n.set(e.right, e.top),
                o.set(e.right, e.bottom),
                t.apply(r, r),
                t.apply(i, i),
                t.apply(n, n),
                t.apply(o, o);
              var s = Math.min(r.x, i.x, n.x, o.x),
                a = Math.min(r.y, i.y, n.y, o.y),
                h = Math.max(r.x, i.x, n.x, o.x),
                u = Math.max(r.y, i.y, n.y, o.y);
              (e.x = s), (e.y = a), (e.width = h - s), (e.height = u - a);
            }),
            (e.prototype.roundFrame = function (t, e, r, i, n) {
              if (n) {
                var o = n.a,
                  s = n.b,
                  a = n.c,
                  h = n.d;
                if (!((0 === s && 0 === a) || (0 === o && 0 === h))) return;
              }
              (n = n ? Rr.copyFrom(n) : Rr.identity())
                .translate(-r.x, -r.y)
                .scale(i.width / r.width, i.height / r.height)
                .translate(i.x, i.y),
                this.transformAABB(n, t),
                t.ceil(e),
                this.transformAABB(n.invert(), t);
            }),
            e
          );
        })(rr),
        wr = (function () {
          function t(t) {
            this.renderer = t;
          }
          return (
            (t.prototype.flush = function () {}),
            (t.prototype.destroy = function () {
              this.renderer = null;
            }),
            (t.prototype.start = function () {}),
            (t.prototype.stop = function () {
              this.flush();
            }),
            (t.prototype.render = function (t) {}),
            t
          );
        })(),
        Pr = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.emptyRenderer = new wr(e)),
              (r.currentRenderer = r.emptyRenderer),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.setObjectRenderer = function (t) {
              this.currentRenderer !== t &&
                (this.currentRenderer.stop(),
                (this.currentRenderer = t),
                this.currentRenderer.start());
            }),
            (e.prototype.flush = function () {
              this.setObjectRenderer(this.emptyRenderer);
            }),
            (e.prototype.reset = function () {
              this.setObjectRenderer(this.emptyRenderer);
            }),
            (e.prototype.copyBoundTextures = function (t, e) {
              for (
                var r = this.renderer.texture.boundTextures, i = e - 1;
                i >= 0;
                --i
              )
                (t[i] = r[i] || null), t[i] && (t[i]._batchLocation = i);
            }),
            (e.prototype.boundArray = function (t, e, r, i) {
              for (
                var n = t.elements, o = t.ids, s = t.count, a = 0, h = 0;
                h < s;
                h++
              ) {
                var u = n[h],
                  l = u._batchLocation;
                if (l >= 0 && l < i && e[l] === u) o[h] = l;
                else
                  for (; a < i; ) {
                    var c = e[a];
                    if (!c || c._batchEnabled !== r || c._batchLocation !== a) {
                      (o[h] = a), (u._batchLocation = a), (e[a] = u);
                      break;
                    }
                    a++;
                  }
              }
            }),
            e
          );
        })(rr),
        Mr = 0,
        Dr = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.webGLVersion = 1),
              (r.extensions = {}),
              (r.supports = { uint32Indices: !1 }),
              (r.handleContextLost = r.handleContextLost.bind(r)),
              (r.handleContextRestored = r.handleContextRestored.bind(r)),
              e.view.addEventListener(
                "webglcontextlost",
                r.handleContextLost,
                !1
              ),
              e.view.addEventListener(
                "webglcontextrestored",
                r.handleContextRestored,
                !1
              ),
              r
            );
          }
          return (
            ke(e, t),
            Object.defineProperty(e.prototype, "isLost", {
              get: function () {
                return !this.gl || this.gl.isContextLost();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.contextChange = function (t) {
              (this.gl = t),
                (this.renderer.gl = t),
                (this.renderer.CONTEXT_UID = Mr++),
                t.isContextLost() &&
                  t.getExtension("WEBGL_lose_context") &&
                  t.getExtension("WEBGL_lose_context").restoreContext();
            }),
            (e.prototype.initFromContext = function (t) {
              (this.gl = t),
                this.validateContext(t),
                (this.renderer.gl = t),
                (this.renderer.CONTEXT_UID = Mr++),
                this.renderer.runners.contextChange.emit(t);
            }),
            (e.prototype.initFromOptions = function (t) {
              var e = this.createContext(this.renderer.view, t);
              this.initFromContext(e);
            }),
            (e.prototype.createContext = function (t, e) {
              var r;
              if (
                (yt.PREFER_ENV >= tt.WEBGL2 && (r = t.getContext("webgl2", e)),
                r)
              )
                this.webGLVersion = 2;
              else if (
                ((this.webGLVersion = 1),
                !(r =
                  t.getContext("webgl", e) ||
                  t.getContext("experimental-webgl", e)))
              )
                throw new Error(
                  "This browser does not support WebGL. Try using the canvas renderer"
                );
              return (this.gl = r), this.getExtensions(), this.gl;
            }),
            (e.prototype.getExtensions = function () {
              var t = this.gl,
                e = {
                  anisotropicFiltering: t.getExtension(
                    "EXT_texture_filter_anisotropic"
                  ),
                  floatTextureLinear: t.getExtension(
                    "OES_texture_float_linear"
                  ),
                  s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
                  s3tc_sRGB: t.getExtension(
                    "WEBGL_compressed_texture_s3tc_srgb"
                  ),
                  etc: t.getExtension("WEBGL_compressed_texture_etc"),
                  etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
                  pvrtc:
                    t.getExtension("WEBGL_compressed_texture_pvrtc") ||
                    t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                  atc: t.getExtension("WEBGL_compressed_texture_atc"),
                  astc: t.getExtension("WEBGL_compressed_texture_astc"),
                };
              1 === this.webGLVersion
                ? Object.assign(this.extensions, e, {
                    drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                    depthTexture: t.getExtension("WEBGL_depth_texture"),
                    loseContext: t.getExtension("WEBGL_lose_context"),
                    vertexArrayObject:
                      t.getExtension("OES_vertex_array_object") ||
                      t.getExtension("MOZ_OES_vertex_array_object") ||
                      t.getExtension("WEBKIT_OES_vertex_array_object"),
                    uint32ElementIndex: t.getExtension(
                      "OES_element_index_uint"
                    ),
                    floatTexture: t.getExtension("OES_texture_float"),
                    floatTextureLinear: t.getExtension(
                      "OES_texture_float_linear"
                    ),
                    textureHalfFloat: t.getExtension("OES_texture_half_float"),
                    textureHalfFloatLinear: t.getExtension(
                      "OES_texture_half_float_linear"
                    ),
                  })
                : 2 === this.webGLVersion &&
                  Object.assign(this.extensions, e, {
                    colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
                  });
            }),
            (e.prototype.handleContextLost = function (t) {
              t.preventDefault();
            }),
            (e.prototype.handleContextRestored = function () {
              this.renderer.runners.contextChange.emit(this.gl);
            }),
            (e.prototype.destroy = function () {
              var t = this.renderer.view;
              t.removeEventListener("webglcontextlost", this.handleContextLost),
                t.removeEventListener(
                  "webglcontextrestored",
                  this.handleContextRestored
                ),
                this.gl.useProgram(null),
                this.extensions.loseContext &&
                  this.extensions.loseContext.loseContext();
            }),
            (e.prototype.postrender = function () {
              this.renderer.renderingToScreen && this.gl.flush();
            }),
            (e.prototype.validateContext = function (t) {
              var e = t.getContextAttributes(),
                r =
                  "WebGL2RenderingContext" in self &&
                  t instanceof self.WebGL2RenderingContext;
              r && (this.webGLVersion = 2),
                e.stencil ||
                  console.warn(
                    "Provided WebGL context does not have a stencil buffer, masks may not render correctly"
                  );
              var i = r || !!t.getExtension("OES_element_index_uint");
              (this.supports.uint32Indices = i),
                i ||
                  console.warn(
                    "Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly"
                  );
            }),
            e
          );
        })(rr),
        Cr = function (t) {
          (this.framebuffer = t),
            (this.stencil = null),
            (this.dirtyId = 0),
            (this.dirtyFormat = 0),
            (this.dirtySize = 0),
            (this.multisample = vt.NONE),
            (this.msaaBuffer = null),
            (this.blitFramebuffer = null);
        },
        Nr = new te(),
        Lr = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.managedFramebuffers = []),
              (r.unknownFramebuffer = new nr(10, 10)),
              (r.msaaSamples = null),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.contextChange = function () {
              var t = (this.gl = this.renderer.gl);
              if (
                ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
                (this.current = this.unknownFramebuffer),
                (this.viewport = new te()),
                (this.hasMRT = !0),
                (this.writeDepthTexture = !0),
                this.disposeAll(!0),
                1 === this.renderer.context.webGLVersion)
              ) {
                var e = this.renderer.context.extensions.drawBuffers,
                  r = this.renderer.context.extensions.depthTexture;
                yt.PREFER_ENV === tt.WEBGL_LEGACY && ((e = null), (r = null)),
                  e
                    ? (t.drawBuffers = function (t) {
                        return e.drawBuffersWEBGL(t);
                      })
                    : ((this.hasMRT = !1), (t.drawBuffers = function () {})),
                  r || (this.writeDepthTexture = !1);
              } else
                this.msaaSamples = t.getInternalformatParameter(
                  t.RENDERBUFFER,
                  t.RGBA8,
                  t.SAMPLES
                );
            }),
            (e.prototype.bind = function (t, e) {
              var r = this.gl;
              if (t) {
                var i =
                  t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
                this.current !== t &&
                  ((this.current = t),
                  r.bindFramebuffer(r.FRAMEBUFFER, i.framebuffer)),
                  i.dirtyId !== t.dirtyId &&
                    ((i.dirtyId = t.dirtyId),
                    i.dirtyFormat !== t.dirtyFormat
                      ? ((i.dirtyFormat = t.dirtyFormat),
                        this.updateFramebuffer(t))
                      : i.dirtySize !== t.dirtySize &&
                        ((i.dirtySize = t.dirtySize),
                        this.resizeFramebuffer(t)));
                for (var n = 0; n < t.colorTextures.length; n++) {
                  var o = t.colorTextures[n];
                  this.renderer.texture.unbind(o.parentTextureArray || o);
                }
                t.depthTexture && this.renderer.texture.unbind(t.depthTexture),
                  e
                    ? this.setViewport(e.x, e.y, e.width, e.height)
                    : this.setViewport(0, 0, t.width, t.height);
              } else
                this.current &&
                  ((this.current = null),
                  r.bindFramebuffer(r.FRAMEBUFFER, null)),
                  e
                    ? this.setViewport(e.x, e.y, e.width, e.height)
                    : this.setViewport(
                        0,
                        0,
                        this.renderer.width,
                        this.renderer.height
                      );
            }),
            (e.prototype.setViewport = function (t, e, r, i) {
              var n = this.viewport;
              (n.width === r && n.height === i && n.x === t && n.y === e) ||
                ((n.x = t),
                (n.y = e),
                (n.width = r),
                (n.height = i),
                this.gl.viewport(t, e, r, i));
            }),
            Object.defineProperty(e.prototype, "size", {
              get: function () {
                return this.current
                  ? {
                      x: 0,
                      y: 0,
                      width: this.current.width,
                      height: this.current.height,
                    }
                  : {
                      x: 0,
                      y: 0,
                      width: this.renderer.width,
                      height: this.renderer.height,
                    };
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.clear = function (t, e, r, i, n) {
              void 0 === n && (n = rt.COLOR | rt.DEPTH);
              var o = this.gl;
              o.clearColor(t, e, r, i), o.clear(n);
            }),
            (e.prototype.initFramebuffer = function (t) {
              var e = this.gl,
                r = new Cr(e.createFramebuffer());
              return (
                (r.multisample = this.detectSamples(t.multisample)),
                (t.glFramebuffers[this.CONTEXT_UID] = r),
                this.managedFramebuffers.push(t),
                t.disposeRunner.add(this),
                r
              );
            }),
            (e.prototype.resizeFramebuffer = function (t) {
              var e = this.gl,
                r = t.glFramebuffers[this.CONTEXT_UID];
              r.stencil &&
                (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil),
                e.renderbufferStorage(
                  e.RENDERBUFFER,
                  e.DEPTH_STENCIL,
                  t.width,
                  t.height
                ));
              for (var i = t.colorTextures, n = 0; n < i.length; n++)
                this.renderer.texture.bind(i[n], 0);
              t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0);
            }),
            (e.prototype.updateFramebuffer = function (t) {
              var e = this.gl,
                r = t.glFramebuffers[this.CONTEXT_UID],
                i = t.colorTextures.length;
              e.drawBuffers || (i = Math.min(i, 1)),
                r.multisample > 1 &&
                  ((r.msaaBuffer = e.createRenderbuffer()),
                  e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer),
                  e.renderbufferStorageMultisample(
                    e.RENDERBUFFER,
                    r.multisample,
                    e.RGBA8,
                    t.width,
                    t.height
                  ),
                  e.framebufferRenderbuffer(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0,
                    e.RENDERBUFFER,
                    r.msaaBuffer
                  ));
              for (var n = [], o = 0; o < i; o++)
                if (!(0 === o && r.multisample > 1)) {
                  var s = t.colorTextures[o],
                    a = s.parentTextureArray || s;
                  this.renderer.texture.bind(a, 0),
                    e.framebufferTexture2D(
                      e.FRAMEBUFFER,
                      e.COLOR_ATTACHMENT0 + o,
                      s.target,
                      a._glTextures[this.CONTEXT_UID].texture,
                      0
                    ),
                    n.push(e.COLOR_ATTACHMENT0 + o);
                }
              if (
                (n.length > 1 && e.drawBuffers(n),
                t.depthTexture && this.writeDepthTexture)
              ) {
                var h = t.depthTexture;
                this.renderer.texture.bind(h, 0),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.DEPTH_ATTACHMENT,
                    e.TEXTURE_2D,
                    h._glTextures[this.CONTEXT_UID].texture,
                    0
                  );
              }
              r.stencil ||
                (!t.stencil && !t.depth) ||
                ((r.stencil = e.createRenderbuffer()),
                e.bindRenderbuffer(e.RENDERBUFFER, r.stencil),
                e.renderbufferStorage(
                  e.RENDERBUFFER,
                  e.DEPTH_STENCIL,
                  t.width,
                  t.height
                ),
                t.depthTexture ||
                  e.framebufferRenderbuffer(
                    e.FRAMEBUFFER,
                    e.DEPTH_STENCIL_ATTACHMENT,
                    e.RENDERBUFFER,
                    r.stencil
                  ));
            }),
            (e.prototype.detectSamples = function (t) {
              var e = this.msaaSamples,
                r = vt.NONE;
              if (t <= 1 || null === e) return r;
              for (var i = 0; i < e.length; i++)
                if (e[i] <= t) {
                  r = e[i];
                  break;
                }
              return 1 === r && (r = vt.NONE), r;
            }),
            (e.prototype.blit = function (t, e, r) {
              var i = this,
                n = i.current,
                o = i.renderer,
                s = i.gl,
                a = i.CONTEXT_UID;
              if (2 === o.context.webGLVersion && n) {
                var h = n.glFramebuffers[a];
                if (h) {
                  if (!t) {
                    if (h.multisample <= 1) return;
                    h.blitFramebuffer ||
                      ((h.blitFramebuffer = new nr(n.width, n.height)),
                      h.blitFramebuffer.addColorTexture(0, n.colorTextures[0])),
                      ((t = h.blitFramebuffer).width = n.width),
                      (t.height = n.height);
                  }
                  e || (((e = Nr).width = n.width), (e.height = n.height)),
                    r || (r = e);
                  var u = e.width === r.width && e.height === r.height;
                  this.bind(t),
                    s.bindFramebuffer(s.READ_FRAMEBUFFER, h.framebuffer),
                    s.blitFramebuffer(
                      e.x,
                      e.y,
                      e.width,
                      e.height,
                      r.x,
                      r.y,
                      r.width,
                      r.height,
                      s.COLOR_BUFFER_BIT,
                      u ? s.NEAREST : s.LINEAR
                    );
                }
              }
            }),
            (e.prototype.disposeFramebuffer = function (t, e) {
              var r = t.glFramebuffers[this.CONTEXT_UID],
                i = this.gl;
              if (r) {
                delete t.glFramebuffers[this.CONTEXT_UID];
                var n = this.managedFramebuffers.indexOf(t);
                n >= 0 && this.managedFramebuffers.splice(n, 1),
                  t.disposeRunner.remove(this),
                  e ||
                    (i.deleteFramebuffer(r.framebuffer),
                    r.stencil && i.deleteRenderbuffer(r.stencil));
              }
            }),
            (e.prototype.disposeAll = function (t) {
              var e = this.managedFramebuffers;
              this.managedFramebuffers = [];
              for (var r = 0; r < e.length; r++)
                this.disposeFramebuffer(e[r], t);
            }),
            (e.prototype.forceStencil = function () {
              var t = this.current;
              if (t) {
                var e = t.glFramebuffers[this.CONTEXT_UID];
                if (e && !e.stencil) {
                  t.enableStencil();
                  var r = t.width,
                    i = t.height,
                    n = this.gl,
                    o = n.createRenderbuffer();
                  n.bindRenderbuffer(n.RENDERBUFFER, o),
                    n.renderbufferStorage(
                      n.RENDERBUFFER,
                      n.DEPTH_STENCIL,
                      r,
                      i
                    ),
                    (e.stencil = o),
                    n.framebufferRenderbuffer(
                      n.FRAMEBUFFER,
                      n.DEPTH_STENCIL_ATTACHMENT,
                      n.RENDERBUFFER,
                      o
                    );
                }
              }
            }),
            (e.prototype.reset = function () {
              (this.current = this.unknownFramebuffer),
                (this.viewport = new te());
            }),
            e
          );
        })(rr),
        Fr = function (t) {
          (this.buffer = t || null),
            (this.updateID = -1),
            (this.byteLength = -1),
            (this.refCount = 0);
        },
        Ur = { 5126: 4, 5123: 2, 5121: 1 },
        Br = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r._activeGeometry = null),
              (r._activeVao = null),
              (r.hasVao = !0),
              (r.hasInstance = !0),
              (r.canUseUInt32ElementIndex = !1),
              (r.managedGeometries = {}),
              (r.managedBuffers = {}),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.contextChange = function () {
              this.disposeAll(!0);
              var t = (this.gl = this.renderer.gl),
                e = this.renderer.context;
              if (
                ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
                2 !== e.webGLVersion)
              ) {
                var r = this.renderer.context.extensions.vertexArrayObject;
                yt.PREFER_ENV === tt.WEBGL_LEGACY && (r = null),
                  r
                    ? ((t.createVertexArray = function () {
                        return r.createVertexArrayOES();
                      }),
                      (t.bindVertexArray = function (t) {
                        return r.bindVertexArrayOES(t);
                      }),
                      (t.deleteVertexArray = function (t) {
                        return r.deleteVertexArrayOES(t);
                      }))
                    : ((this.hasVao = !1),
                      (t.createVertexArray = function () {
                        return null;
                      }),
                      (t.bindVertexArray = function () {
                        return null;
                      }),
                      (t.deleteVertexArray = function () {
                        return null;
                      }));
              }
              if (2 !== e.webGLVersion) {
                var i = t.getExtension("ANGLE_instanced_arrays");
                i
                  ? ((t.vertexAttribDivisor = function (t, e) {
                      return i.vertexAttribDivisorANGLE(t, e);
                    }),
                    (t.drawElementsInstanced = function (t, e, r, n, o) {
                      return i.drawElementsInstancedANGLE(t, e, r, n, o);
                    }),
                    (t.drawArraysInstanced = function (t, e, r, n) {
                      return i.drawArraysInstancedANGLE(t, e, r, n);
                    }))
                  : (this.hasInstance = !1);
              }
              this.canUseUInt32ElementIndex =
                2 === e.webGLVersion || !!e.extensions.uint32ElementIndex;
            }),
            (e.prototype.bind = function (t, e) {
              e = e || this.renderer.shader.shader;
              var r = this.gl,
                i = t.glVertexArrayObjects[this.CONTEXT_UID],
                n = !1;
              i ||
                ((this.managedGeometries[t.id] = t),
                t.disposeRunner.add(this),
                (t.glVertexArrayObjects[this.CONTEXT_UID] = i = {}),
                (n = !0));
              var o = i[e.program.id] || this.initGeometryVao(t, e.program, n);
              (this._activeGeometry = t),
                this._activeVao !== o &&
                  ((this._activeVao = o),
                  this.hasVao
                    ? r.bindVertexArray(o)
                    : this.activateVao(t, e.program)),
                this.updateBuffers();
            }),
            (e.prototype.reset = function () {
              this.unbind();
            }),
            (e.prototype.updateBuffers = function () {
              for (
                var t = this._activeGeometry, e = this.gl, r = 0;
                r < t.buffers.length;
                r++
              ) {
                var i = t.buffers[r],
                  n = i._glBuffers[this.CONTEXT_UID];
                if (i._updateID !== n.updateID) {
                  n.updateID = i._updateID;
                  var o = i.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                  if (
                    (e.bindBuffer(o, n.buffer),
                    (this._boundBuffer = n),
                    n.byteLength >= i.data.byteLength)
                  )
                    e.bufferSubData(o, 0, i.data);
                  else {
                    var s = i.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                    (n.byteLength = i.data.byteLength),
                      e.bufferData(o, i.data, s);
                  }
                }
              }
            }),
            (e.prototype.checkCompatibility = function (t, e) {
              var r = t.attributes,
                i = e.attributeData;
              for (var n in i)
                if (!r[n])
                  throw new Error(
                    'shader and geometry incompatible, geometry missing the "' +
                      n +
                      '" attribute'
                  );
            }),
            (e.prototype.getSignature = function (t, e) {
              var r = t.attributes,
                i = e.attributeData,
                n = ["g", t.id];
              for (var o in r) i[o] && n.push(o);
              return n.join("-");
            }),
            (e.prototype.initGeometryVao = function (t, e, r) {
              void 0 === r && (r = !0), this.checkCompatibility(t, e);
              var i = this.gl,
                n = this.CONTEXT_UID,
                o = this.getSignature(t, e),
                s = t.glVertexArrayObjects[this.CONTEXT_UID],
                a = s[o];
              if (a) return (s[e.id] = a), a;
              var h = t.buffers,
                u = t.attributes,
                l = {},
                c = {};
              for (var d in h) (l[d] = 0), (c[d] = 0);
              for (var d in u)
                !u[d].size && e.attributeData[d]
                  ? (u[d].size = e.attributeData[d].size)
                  : u[d].size ||
                    console.warn(
                      "PIXI Geometry attribute '" +
                        d +
                        "' size cannot be determined (likely the bound shader does not have the attribute)"
                    ),
                  (l[u[d].buffer] += u[d].size * Ur[u[d].type]);
              for (var d in u) {
                var f = u[d],
                  p = f.size;
                void 0 === f.stride &&
                  (l[f.buffer] === p * Ur[f.type]
                    ? (f.stride = 0)
                    : (f.stride = l[f.buffer])),
                  void 0 === f.start &&
                    ((f.start = c[f.buffer]), (c[f.buffer] += p * Ur[f.type]));
              }
              (a = i.createVertexArray()), i.bindVertexArray(a);
              for (var _ = 0; _ < h.length; _++) {
                var m = h[_];
                m._glBuffers[n] ||
                  ((m._glBuffers[n] = new Fr(i.createBuffer())),
                  (this.managedBuffers[m.id] = m),
                  m.disposeRunner.add(this)),
                  r && m._glBuffers[n].refCount++;
              }
              return (
                this.activateVao(t, e),
                (this._activeVao = a),
                (s[e.id] = a),
                (s[o] = a),
                a
              );
            }),
            (e.prototype.disposeBuffer = function (t, e) {
              if (this.managedBuffers[t.id]) {
                delete this.managedBuffers[t.id];
                var r = t._glBuffers[this.CONTEXT_UID],
                  i = this.gl;
                t.disposeRunner.remove(this),
                  r &&
                    (e || i.deleteBuffer(r.buffer),
                    delete t._glBuffers[this.CONTEXT_UID]);
              }
            }),
            (e.prototype.disposeGeometry = function (t, e) {
              if (this.managedGeometries[t.id]) {
                delete this.managedGeometries[t.id];
                var r = t.glVertexArrayObjects[this.CONTEXT_UID],
                  i = this.gl,
                  n = t.buffers;
                if ((t.disposeRunner.remove(this), r)) {
                  for (var o = 0; o < n.length; o++) {
                    var s = n[o]._glBuffers[this.CONTEXT_UID];
                    s.refCount--,
                      0 !== s.refCount || e || this.disposeBuffer(n[o], e);
                  }
                  if (!e)
                    for (var a in r)
                      if ("g" === a[0]) {
                        var h = r[a];
                        this._activeVao === h && this.unbind(),
                          i.deleteVertexArray(h);
                      }
                  delete t.glVertexArrayObjects[this.CONTEXT_UID];
                }
              }
            }),
            (e.prototype.disposeAll = function (t) {
              for (
                var e = Object.keys(this.managedGeometries), r = 0;
                r < e.length;
                r++
              )
                this.disposeGeometry(this.managedGeometries[e[r]], t);
              for (
                e = Object.keys(this.managedBuffers), r = 0;
                r < e.length;
                r++
              )
                this.disposeBuffer(this.managedBuffers[e[r]], t);
            }),
            (e.prototype.activateVao = function (t, e) {
              var r = this.gl,
                i = this.CONTEXT_UID,
                n = t.buffers,
                o = t.attributes;
              t.indexBuffer &&
                r.bindBuffer(
                  r.ELEMENT_ARRAY_BUFFER,
                  t.indexBuffer._glBuffers[i].buffer
                );
              var s = null;
              for (var a in o) {
                var h = o[a],
                  u = n[h.buffer]._glBuffers[i];
                if (e.attributeData[a]) {
                  s !== u && (r.bindBuffer(r.ARRAY_BUFFER, u.buffer), (s = u));
                  var l = e.attributeData[a].location;
                  if (
                    (r.enableVertexAttribArray(l),
                    r.vertexAttribPointer(
                      l,
                      h.size,
                      h.type || r.FLOAT,
                      h.normalized,
                      h.stride,
                      h.start
                    ),
                    h.instance)
                  ) {
                    if (!this.hasInstance)
                      throw new Error(
                        "geometry error, GPU Instancing is not supported on this device"
                      );
                    r.vertexAttribDivisor(l, 1);
                  }
                }
              }
            }),
            (e.prototype.draw = function (t, e, r, i) {
              var n = this.gl,
                o = this._activeGeometry;
              if (o.indexBuffer) {
                var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
                  a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
                2 === s || (4 === s && this.canUseUInt32ElementIndex)
                  ? o.instanced
                    ? n.drawElementsInstanced(
                        t,
                        e || o.indexBuffer.data.length,
                        a,
                        (r || 0) * s,
                        i || 1
                      )
                    : n.drawElements(
                        t,
                        e || o.indexBuffer.data.length,
                        a,
                        (r || 0) * s
                      )
                  : console.warn("unsupported index buffer type: uint32");
              } else
                o.instanced
                  ? n.drawArraysInstanced(t, r, e || o.getSize(), i || 1)
                  : n.drawArrays(t, r, e || o.getSize());
              return this;
            }),
            (e.prototype.unbind = function () {
              this.gl.bindVertexArray(null),
                (this._activeVao = null),
                (this._activeGeometry = null);
            }),
            e
          );
        })(rr),
        Gr = (function () {
          function t(t) {
            void 0 === t && (t = null),
              (this.type = mt.NONE),
              (this.autoDetect = !0),
              (this.maskObject = t || null),
              (this.pooled = !1),
              (this.isMaskData = !0),
              (this._stencilCounter = 0),
              (this._scissorCounter = 0),
              (this._scissorRect = null),
              (this._target = null);
          }
          return (
            (t.prototype.reset = function () {
              this.pooled &&
                ((this.maskObject = null),
                (this.type = mt.NONE),
                (this.autoDetect = !0)),
                (this._target = null);
            }),
            (t.prototype.copyCountersOrReset = function (t) {
              t
                ? ((this._stencilCounter = t._stencilCounter),
                  (this._scissorCounter = t._scissorCounter),
                  (this._scissorRect = t._scissorRect))
                : ((this._stencilCounter = 0),
                  (this._scissorCounter = 0),
                  (this._scissorRect = null));
            }),
            t
          );
        })();
      function Xr(t, e, r) {
        var i = t.createShader(e);
        return t.shaderSource(i, r), t.compileShader(i), i;
      }
      function kr(t, e, r, i) {
        var n = Xr(t, t.VERTEX_SHADER, e),
          o = Xr(t, t.FRAGMENT_SHADER, r),
          s = t.createProgram();
        if ((t.attachShader(s, n), t.attachShader(s, o), i))
          for (var a in i) t.bindAttribLocation(s, i[a], a);
        return (
          t.linkProgram(s),
          t.getProgramParameter(s, t.LINK_STATUS) ||
            (t.getShaderParameter(n, t.COMPILE_STATUS) ||
              (console.warn(e), console.error(t.getShaderInfoLog(n))),
            t.getShaderParameter(o, t.COMPILE_STATUS) ||
              (console.warn(r), console.error(t.getShaderInfoLog(o))),
            console.error("Pixi.js Error: Could not initialize shader."),
            console.error(
              "gl.VALIDATE_STATUS",
              t.getProgramParameter(s, t.VALIDATE_STATUS)
            ),
            console.error("gl.getError()", t.getError()),
            "" !== t.getProgramInfoLog(s) &&
              console.warn(
                "Pixi.js Warning: gl.getProgramInfoLog()",
                t.getProgramInfoLog(s)
              ),
            t.deleteProgram(s),
            (s = null)),
          t.deleteShader(n),
          t.deleteShader(o),
          s
        );
      }
      function Hr(t) {
        for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
        return e;
      }
      function jr(t, e) {
        switch (t) {
          case "float":
            return 0;
          case "vec2":
            return new Float32Array(2 * e);
          case "vec3":
            return new Float32Array(3 * e);
          case "vec4":
            return new Float32Array(4 * e);
          case "int":
          case "uint":
          case "sampler2D":
          case "sampler2DArray":
            return 0;
          case "ivec2":
            return new Int32Array(2 * e);
          case "ivec3":
            return new Int32Array(3 * e);
          case "ivec4":
            return new Int32Array(4 * e);
          case "uvec2":
            return new Uint32Array(2 * e);
          case "uvec3":
            return new Uint32Array(3 * e);
          case "uvec4":
            return new Uint32Array(4 * e);
          case "bool":
            return !1;
          case "bvec2":
            return Hr(2 * e);
          case "bvec3":
            return Hr(3 * e);
          case "bvec4":
            return Hr(4 * e);
          case "mat2":
            return new Float32Array([1, 0, 0, 1]);
          case "mat3":
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
          case "mat4":
            return new Float32Array([
              1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
            ]);
        }
        return null;
      }
      var Yr,
        Vr = {},
        zr = Vr;
      function Wr() {
        if (zr === Vr || (zr && zr.isContextLost())) {
          var t = document.createElement("canvas"),
            e = void 0;
          yt.PREFER_ENV >= tt.WEBGL2 && (e = t.getContext("webgl2", {})),
            e ||
              ((e =
                t.getContext("webgl", {}) ||
                t.getContext("experimental-webgl", {}))
                ? e.getExtension("WEBGL_draw_buffers")
                : (e = null)),
            (zr = e);
        }
        return zr;
      }
      function qr(t, e, r) {
        if ("precision" !== t.substring(0, 9)) {
          var i = e;
          return (
            e === _t.HIGH && r !== _t.HIGH && (i = _t.MEDIUM),
            "precision " + i + " float;\n" + t
          );
        }
        return r !== _t.HIGH && "precision highp" === t.substring(0, 15)
          ? t.replace("precision highp", "precision mediump")
          : t;
      }
      var Kr = {
        float: 1,
        vec2: 2,
        vec3: 3,
        vec4: 4,
        int: 1,
        ivec2: 2,
        ivec3: 3,
        ivec4: 4,
        uint: 1,
        uvec2: 2,
        uvec3: 3,
        uvec4: 4,
        bool: 1,
        bvec2: 2,
        bvec3: 3,
        bvec4: 4,
        mat2: 4,
        mat3: 9,
        mat4: 16,
        sampler2D: 1,
      };
      function Zr(t) {
        return Kr[t];
      }
      var Jr = null,
        Qr = {
          FLOAT: "float",
          FLOAT_VEC2: "vec2",
          FLOAT_VEC3: "vec3",
          FLOAT_VEC4: "vec4",
          INT: "int",
          INT_VEC2: "ivec2",
          INT_VEC3: "ivec3",
          INT_VEC4: "ivec4",
          UNSIGNED_INT: "uint",
          UNSIGNED_INT_VEC2: "uvec2",
          UNSIGNED_INT_VEC3: "uvec3",
          UNSIGNED_INT_VEC4: "uvec4",
          BOOL: "bool",
          BOOL_VEC2: "bvec2",
          BOOL_VEC3: "bvec3",
          BOOL_VEC4: "bvec4",
          FLOAT_MAT2: "mat2",
          FLOAT_MAT3: "mat3",
          FLOAT_MAT4: "mat4",
          SAMPLER_2D: "sampler2D",
          INT_SAMPLER_2D: "sampler2D",
          UNSIGNED_INT_SAMPLER_2D: "sampler2D",
          SAMPLER_CUBE: "samplerCube",
          INT_SAMPLER_CUBE: "samplerCube",
          UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
          SAMPLER_2D_ARRAY: "sampler2DArray",
          INT_SAMPLER_2D_ARRAY: "sampler2DArray",
          UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray",
        };
      function $r(t, e) {
        if (!Jr) {
          var r = Object.keys(Qr);
          Jr = {};
          for (var i = 0; i < r.length; ++i) {
            var n = r[i];
            Jr[t[n]] = Qr[n];
          }
        }
        return Jr[e];
      }
      var ti,
        ei = [
          {
            test: function (t) {
              return "float" === t.type && 1 === t.size;
            },
            code: function (t) {
              return (
                '\n            if(uv["' +
                t +
                '"] !== ud["' +
                t +
                '"].value)\n            {\n                ud["' +
                t +
                '"].value = uv["' +
                t +
                '"]\n                gl.uniform1f(ud["' +
                t +
                '"].location, uv["' +
                t +
                '"])\n            }\n            '
              );
            },
          },
          {
            test: function (t) {
              return (
                ("sampler2D" === t.type ||
                  "samplerCube" === t.type ||
                  "sampler2DArray" === t.type) &&
                1 === t.size &&
                !t.isArray
              );
            },
            code: function (t) {
              return (
                't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' +
                t +
                '"], t);\n\n            if(ud["' +
                t +
                '"].value !== t)\n            {\n                ud["' +
                t +
                '"].value = t;\n                gl.uniform1i(ud["' +
                t +
                '"].location, t);\n; // eslint-disable-line max-len\n            }'
              );
            },
          },
          {
            test: function (t, e) {
              return "mat3" === t.type && 1 === t.size && void 0 !== e.a;
            },
            code: function (t) {
              return (
                '\n            gl.uniformMatrix3fv(ud["' +
                t +
                '"].location, false, uv["' +
                t +
                '"].toArray(true));\n            '
              );
            },
          },
          {
            test: function (t, e) {
              return "vec2" === t.type && 1 === t.size && void 0 !== e.x;
            },
            code: function (t) {
              return (
                '\n                cv = ud["' +
                t +
                '"].value;\n                v = uv["' +
                t +
                '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' +
                t +
                '"].location, v.x, v.y);\n                }'
              );
            },
          },
          {
            test: function (t) {
              return "vec2" === t.type && 1 === t.size;
            },
            code: function (t) {
              return (
                '\n                cv = ud["' +
                t +
                '"].value;\n                v = uv["' +
                t +
                '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' +
                t +
                '"].location, v[0], v[1]);\n                }\n            '
              );
            },
          },
          {
            test: function (t, e) {
              return "vec4" === t.type && 1 === t.size && void 0 !== e.width;
            },
            code: function (t) {
              return (
                '\n                cv = ud["' +
                t +
                '"].value;\n                v = uv["' +
                t +
                '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' +
                t +
                '"].location, v.x, v.y, v.width, v.height)\n                }'
              );
            },
          },
          {
            test: function (t) {
              return "vec4" === t.type && 1 === t.size;
            },
            code: function (t) {
              return (
                '\n                cv = ud["' +
                t +
                '"].value;\n                v = uv["' +
                t +
                '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' +
                t +
                '"].location, v[0], v[1], v[2], v[3])\n                }'
              );
            },
          },
        ],
        ri = {
          float:
            "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
          vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
          vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
          vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
          int: "gl.uniform1i(location, v)",
          ivec2: "gl.uniform2i(location, v[0], v[1])",
          ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
          ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
          uint: "gl.uniform1ui(location, v)",
          uvec2: "gl.uniform2ui(location, v[0], v[1])",
          uvec3: "gl.uniform3ui(location, v[0], v[1], v[2])",
          uvec4: "gl.uniform4ui(location, v[0], v[1], v[2], v[3])",
          bool: "gl.uniform1i(location, v)",
          bvec2: "gl.uniform2i(location, v[0], v[1])",
          bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
          bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
          mat2: "gl.uniformMatrix2fv(location, false, v)",
          mat3: "gl.uniformMatrix3fv(location, false, v)",
          mat4: "gl.uniformMatrix4fv(location, false, v)",
          sampler2D: "gl.uniform1i(location, v)",
          samplerCube: "gl.uniform1i(location, v)",
          sampler2DArray: "gl.uniform1i(location, v)",
        },
        ii = {
          float: "gl.uniform1fv(location, v)",
          vec2: "gl.uniform2fv(location, v)",
          vec3: "gl.uniform3fv(location, v)",
          vec4: "gl.uniform4fv(location, v)",
          mat4: "gl.uniformMatrix4fv(location, false, v)",
          mat3: "gl.uniformMatrix3fv(location, false, v)",
          mat2: "gl.uniformMatrix2fv(location, false, v)",
          int: "gl.uniform1iv(location, v)",
          ivec2: "gl.uniform2iv(location, v)",
          ivec3: "gl.uniform3iv(location, v)",
          ivec4: "gl.uniform4iv(location, v)",
          uint: "gl.uniform1uiv(location, v)",
          uvec2: "gl.uniform2uiv(location, v)",
          uvec3: "gl.uniform3uiv(location, v)",
          uvec4: "gl.uniform4uiv(location, v)",
          bool: "gl.uniform1iv(location, v)",
          bvec2: "gl.uniform2iv(location, v)",
          bvec3: "gl.uniform3iv(location, v)",
          bvec4: "gl.uniform4iv(location, v)",
          sampler2D: "gl.uniform1iv(location, v)",
          samplerCube: "gl.uniform1iv(location, v)",
          sampler2DArray: "gl.uniform1iv(location, v)",
        },
        ni = [
          "precision mediump float;",
          "void main(void){",
          "float test = 0.1;",
          "%forloop%",
          "gl_FragColor = vec4(0.0);",
          "}",
        ].join("\n");
      function oi(t) {
        for (var e = "", r = 0; r < t; ++r)
          r > 0 && (e += "\nelse "),
            r < t - 1 && (e += "if(test == " + r + ".0){}");
        return e;
      }
      var si = 0,
        ai = {},
        hi = (function () {
          function t(e, r, i) {
            void 0 === i && (i = "pixi-shader"),
              (this.id = si++),
              (this.vertexSrc = e || t.defaultVertexSrc),
              (this.fragmentSrc = r || t.defaultFragmentSrc),
              (this.vertexSrc = this.vertexSrc.trim()),
              (this.fragmentSrc = this.fragmentSrc.trim()),
              "#version" !== this.vertexSrc.substring(0, 8) &&
                ((i = i.replace(/\s+/g, "-")),
                ai[i] ? (ai[i]++, (i += "-" + ai[i])) : (ai[i] = 1),
                (this.vertexSrc =
                  "#define SHADER_NAME " + i + "\n" + this.vertexSrc),
                (this.fragmentSrc =
                  "#define SHADER_NAME " + i + "\n" + this.fragmentSrc),
                (this.vertexSrc = qr(
                  this.vertexSrc,
                  yt.PRECISION_VERTEX,
                  _t.HIGH
                )),
                (this.fragmentSrc = qr(
                  this.fragmentSrc,
                  yt.PRECISION_FRAGMENT,
                  (function () {
                    if (!Yr) {
                      Yr = _t.MEDIUM;
                      var t = Wr();
                      if (t && t.getShaderPrecisionFormat) {
                        var e = t.getShaderPrecisionFormat(
                          t.FRAGMENT_SHADER,
                          t.HIGH_FLOAT
                        );
                        Yr = e.precision ? _t.HIGH : _t.MEDIUM;
                      }
                    }
                    return Yr;
                  })()
                ))),
              this.extractData(this.vertexSrc, this.fragmentSrc),
              (this.glPrograms = {}),
              (this.syncUniforms = null);
          }
          return (
            (t.prototype.extractData = function (t, e) {
              var r = Wr();
              if (r) {
                var i = kr(r, t, e);
                (this.attributeData = this.getAttributeData(i, r)),
                  (this.uniformData = this.getUniformData(i, r)),
                  r.deleteProgram(i);
              } else (this.uniformData = {}), (this.attributeData = {});
            }),
            (t.prototype.getAttributeData = function (t, e) {
              for (
                var r = {},
                  i = [],
                  n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES),
                  o = 0;
                o < n;
                o++
              ) {
                var s = e.getActiveAttrib(t, o),
                  a = $r(e, s.type),
                  h = { type: a, name: s.name, size: Zr(a), location: 0 };
                (r[s.name] = h), i.push(h);
              }
              for (
                i.sort(function (t, e) {
                  return t.name > e.name ? 1 : -1;
                }),
                  o = 0;
                o < i.length;
                o++
              )
                i[o].location = o;
              return r;
            }),
            (t.prototype.getUniformData = function (t, e) {
              for (
                var r = {},
                  i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS),
                  n = 0;
                n < i;
                n++
              ) {
                var o = e.getActiveUniform(t, n),
                  s = o.name.replace(/\[.*?\]$/, ""),
                  a = o.name.match(/\[.*?\]$/),
                  h = $r(e, o.type);
                r[s] = {
                  type: h,
                  size: o.size,
                  isArray: a,
                  value: jr(h, o.size),
                };
              }
              return r;
            }),
            Object.defineProperty(t, "defaultVertexSrc", {
              get: function () {
                return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "defaultFragmentSrc", {
              get: function () {
                return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.from = function (e, r, i) {
              var n = e + r,
                o = Vt[n];
              return o || (Vt[n] = o = new t(e, r, i)), o;
            }),
            t
          );
        })(),
        ui = (function () {
          function t(t, e) {
            for (var r in ((this.program = t),
            (this.uniformGroup = e
              ? e instanceof Ar
                ? e
                : new Ar(e)
              : new Ar({})),
            t.uniformData))
              this.uniformGroup.uniforms[r] instanceof Array &&
                (this.uniformGroup.uniforms[r] = new Float32Array(
                  this.uniformGroup.uniforms[r]
                ));
          }
          return (
            (t.prototype.checkUniformExists = function (t, e) {
              if (e.uniforms[t]) return !0;
              for (var r in e.uniforms) {
                var i = e.uniforms[r];
                if (i.group && this.checkUniformExists(t, i)) return !0;
              }
              return !1;
            }),
            (t.prototype.destroy = function () {
              this.uniformGroup = null;
            }),
            Object.defineProperty(t.prototype, "uniforms", {
              get: function () {
                return this.uniformGroup.uniforms;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.from = function (e, r, i) {
              return new t(hi.from(e, r), i);
            }),
            t
          );
        })(),
        li = (function () {
          function t() {
            (this.data = 0),
              (this.blendMode = it.NORMAL),
              (this.polygonOffset = 0),
              (this.blend = !0),
              (this.depthMask = !0);
          }
          return (
            Object.defineProperty(t.prototype, "blend", {
              get: function () {
                return !!(1 & this.data);
              },
              set: function (t) {
                !!(1 & this.data) !== t && (this.data ^= 1);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "offsets", {
              get: function () {
                return !!(2 & this.data);
              },
              set: function (t) {
                !!(2 & this.data) !== t && (this.data ^= 2);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "culling", {
              get: function () {
                return !!(4 & this.data);
              },
              set: function (t) {
                !!(4 & this.data) !== t && (this.data ^= 4);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "depthTest", {
              get: function () {
                return !!(8 & this.data);
              },
              set: function (t) {
                !!(8 & this.data) !== t && (this.data ^= 8);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "depthMask", {
              get: function () {
                return !!(32 & this.data);
              },
              set: function (t) {
                !!(32 & this.data) !== t && (this.data ^= 32);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "clockwiseFrontFace", {
              get: function () {
                return !!(16 & this.data);
              },
              set: function (t) {
                !!(16 & this.data) !== t && (this.data ^= 16);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "blendMode", {
              get: function () {
                return this._blendMode;
              },
              set: function (t) {
                (this.blend = t !== it.NONE), (this._blendMode = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "polygonOffset", {
              get: function () {
                return this._polygonOffset;
              },
              set: function (t) {
                (this.offsets = !!t), (this._polygonOffset = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return (
                "[@pixi/core:State blendMode=" +
                this.blendMode +
                " clockwiseFrontFace=" +
                this.clockwiseFrontFace +
                " culling=" +
                this.culling +
                " depthMask=" +
                this.depthMask +
                " polygonOffset=" +
                this.polygonOffset +
                "]"
              );
            }),
            (t.for2d = function () {
              var e = new t();
              return (e.depthTest = !1), (e.blend = !0), e;
            }),
            t
          );
        })(),
        ci = (function (t) {
          function e(r, i, n) {
            var o = this,
              s = hi.from(r || e.defaultVertexSrc, i || e.defaultFragmentSrc);
            return (
              ((o = t.call(this, s, n) || this).padding = 0),
              (o.resolution = yt.FILTER_RESOLUTION),
              (o.enabled = !0),
              (o.autoFit = !0),
              (o.legacy = !!o.program.attributeData.aTextureCoord),
              (o.state = new li()),
              o
            );
          }
          return (
            ke(e, t),
            (e.prototype.apply = function (t, e, r, i, n) {
              t.applyFilter(this, e, r, i);
            }),
            Object.defineProperty(e.prototype, "blendMode", {
              get: function () {
                return this.state.blendMode;
              },
              set: function (t) {
                this.state.blendMode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "defaultVertexSrc", {
              get: function () {
                return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "defaultFragmentSrc", {
              get: function () {
                return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(ui),
        di = new ae(),
        fi = (function () {
          function t(t, e) {
            (this._texture = t),
              (this.mapCoord = new ae()),
              (this.uClampFrame = new Float32Array(4)),
              (this.uClampOffset = new Float32Array(2)),
              (this._textureID = -1),
              (this._updateID = 0),
              (this.clampOffset = 0),
              (this.clampMargin = void 0 === e ? 0.5 : e),
              (this.isSimple = !1);
          }
          return (
            Object.defineProperty(t.prototype, "texture", {
              get: function () {
                return this._texture;
              },
              set: function (t) {
                (this._texture = t), (this._textureID = -1);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.multiplyUvs = function (t, e) {
              void 0 === e && (e = t);
              for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
                var n = t[i],
                  o = t[i + 1];
                (e[i] = n * r.a + o * r.c + r.tx),
                  (e[i + 1] = n * r.b + o * r.d + r.ty);
              }
              return e;
            }),
            (t.prototype.update = function (t) {
              var e = this._texture;
              if (!e || !e.valid) return !1;
              if (!t && this._textureID === e._updateID) return !1;
              (this._textureID = e._updateID), this._updateID++;
              var r = e._uvs;
              this.mapCoord.set(
                r.x1 - r.x0,
                r.y1 - r.y0,
                r.x3 - r.x0,
                r.y3 - r.y0,
                r.x0,
                r.y0
              );
              var i = e.orig,
                n = e.trim;
              n &&
                (di.set(
                  i.width / n.width,
                  0,
                  0,
                  i.height / n.height,
                  -n.x / n.width,
                  -n.y / n.height
                ),
                this.mapCoord.append(di));
              var o = e.baseTexture,
                s = this.uClampFrame,
                a = this.clampMargin / o.resolution,
                h = this.clampOffset;
              return (
                (s[0] = (e._frame.x + a + h) / o.width),
                (s[1] = (e._frame.y + a + h) / o.height),
                (s[2] = (e._frame.x + e._frame.width - a + h) / o.width),
                (s[3] = (e._frame.y + e._frame.height - a + h) / o.height),
                (this.uClampOffset[0] = h / o.realWidth),
                (this.uClampOffset[1] = h / o.realHeight),
                (this.isSimple =
                  e._frame.width === o.width &&
                  e._frame.height === o.height &&
                  0 === e.rotate),
                !0
              );
            }),
            t
          );
        })(),
        pi = (function (t) {
          function e(e) {
            var r = this,
              i = new ae();
            return (
              (r =
                t.call(
                  this,
                  "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
                  "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n"
                ) || this),
              (e.renderable = !1),
              (r.maskSprite = e),
              (r.maskMatrix = i),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.apply = function (t, e, r, i) {
              var n = this.maskSprite,
                o = n._texture;
              o.valid &&
                (o.uvMatrix || (o.uvMatrix = new fi(o, 0)),
                o.uvMatrix.update(),
                (this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1),
                (this.uniforms.mask = o),
                (this.uniforms.otherMatrix = t
                  .calculateSpriteMatrix(this.maskMatrix, n)
                  .prepend(o.uvMatrix.mapCoord)),
                (this.uniforms.alpha = n.worldAlpha),
                (this.uniforms.maskClamp = o.uvMatrix.uClampFrame),
                t.applyFilter(this, e, r, i));
            }),
            e
          );
        })(ci),
        _i = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.enableScissor = !0),
              (r.alphaMaskPool = []),
              (r.maskDataPool = []),
              (r.maskStack = []),
              (r.alphaMaskIndex = 0),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.setMaskStack = function (t) {
              (this.maskStack = t),
                this.renderer.scissor.setMaskStack(t),
                this.renderer.stencil.setMaskStack(t);
            }),
            (e.prototype.push = function (t, e) {
              var r = e;
              if (!r.isMaskData) {
                var i = this.maskDataPool.pop() || new Gr();
                (i.pooled = !0), (i.maskObject = e), (r = i);
              }
              switch (
                (r.autoDetect && this.detect(r),
                r.copyCountersOrReset(
                  this.maskStack[this.maskStack.length - 1]
                ),
                (r._target = t),
                r.type)
              ) {
                case mt.SCISSOR:
                  this.maskStack.push(r), this.renderer.scissor.push(r);
                  break;
                case mt.STENCIL:
                  this.maskStack.push(r), this.renderer.stencil.push(r);
                  break;
                case mt.SPRITE:
                  r.copyCountersOrReset(null),
                    this.pushSpriteMask(r),
                    this.maskStack.push(r);
              }
            }),
            (e.prototype.pop = function (t) {
              var e = this.maskStack.pop();
              if (e && e._target === t) {
                switch (e.type) {
                  case mt.SCISSOR:
                    this.renderer.scissor.pop();
                    break;
                  case mt.STENCIL:
                    this.renderer.stencil.pop(e.maskObject);
                    break;
                  case mt.SPRITE:
                    this.popSpriteMask();
                }
                e.reset(), e.pooled && this.maskDataPool.push(e);
              }
            }),
            (e.prototype.detect = function (t) {
              var e = t.maskObject;
              if (e.isSprite) t.type = mt.SPRITE;
              else if (
                ((t.type = mt.STENCIL),
                this.enableScissor && e.isFastRect && e.isFastRect())
              ) {
                var r = e.worldTransform,
                  i = Math.atan2(r.b, r.a),
                  n = Math.atan2(r.d, r.c);
                (i = Math.round(i * (180 / Math.PI) * 100)),
                  (n =
                    (((n = Math.round(n * (180 / Math.PI) * 100) - i) % 18e3) +
                      18e3) %
                    18e3),
                  0 == (i = ((i % 9e3) + 9e3) % 9e3) &&
                    9e3 === n &&
                    (t.type = mt.SCISSOR);
              }
            }),
            (e.prototype.pushSpriteMask = function (t) {
              var e = t.maskObject,
                r = t._target,
                i = this.alphaMaskPool[this.alphaMaskIndex];
              i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new pi(e)]),
                (i[0].resolution = this.renderer.resolution),
                (i[0].maskSprite = e);
              var n = r.filterArea;
              (r.filterArea = e.getBounds(!0)),
                this.renderer.filter.push(r, i),
                (r.filterArea = n),
                this.alphaMaskIndex++;
            }),
            (e.prototype.popSpriteMask = function () {
              this.renderer.filter.pop(), this.alphaMaskIndex--;
            }),
            e
          );
        })(rr),
        mi = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (r.maskStack = []), (r.glConst = 0), r;
          }
          return (
            ke(e, t),
            (e.prototype.getStackLength = function () {
              return this.maskStack.length;
            }),
            (e.prototype.setMaskStack = function (t) {
              var e = this.renderer.gl,
                r = this.getStackLength();
              this.maskStack = t;
              var i = this.getStackLength();
              i !== r &&
                (0 === i
                  ? e.disable(this.glConst)
                  : (e.enable(this.glConst), this._useCurrent()));
            }),
            (e.prototype._useCurrent = function () {}),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this), (this.maskStack = null);
            }),
            e
          );
        })(rr),
        vi = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (r.glConst = WebGLRenderingContext.SCISSOR_TEST), r;
          }
          return (
            ke(e, t),
            (e.prototype.getStackLength = function () {
              var t = this.maskStack[this.maskStack.length - 1];
              return t ? t._scissorCounter : 0;
            }),
            (e.prototype.push = function (t) {
              var e = t.maskObject;
              e.renderable = !0;
              var r = t._scissorRect,
                i = e.getBounds(!0),
                n = this.renderer.gl;
              (e.renderable = !1),
                r ? i.fit(r) : n.enable(n.SCISSOR_TEST),
                t._scissorCounter++,
                (t._scissorRect = i),
                this._useCurrent();
            }),
            (e.prototype.pop = function () {
              var t = this.renderer.gl;
              this.getStackLength() > 0
                ? this._useCurrent()
                : t.disable(t.SCISSOR_TEST);
            }),
            (e.prototype._useCurrent = function () {
              var t = this.maskStack[this.maskStack.length - 1]._scissorRect,
                e = this.renderer.renderTexture.current,
                r = this.renderer.projection,
                i = r.transform,
                n = r.sourceFrame,
                o = r.destinationFrame,
                s = e ? e.resolution : this.renderer.resolution,
                a = o.width / n.width,
                h = o.height / n.height,
                u = ((t.x - n.x) * a + o.x) * s,
                l = ((t.y - n.y) * h + o.y) * s,
                c = t.width * a * s,
                d = t.height * h * s;
              i && ((u += i.tx * s), (l += i.ty * s)),
                e || (l = this.renderer.height - d - l),
                this.renderer.gl.scissor(u, l, c, d);
            }),
            e
          );
        })(mi),
        yi = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (r.glConst = WebGLRenderingContext.STENCIL_TEST), r;
          }
          return (
            ke(e, t),
            (e.prototype.getStackLength = function () {
              var t = this.maskStack[this.maskStack.length - 1];
              return t ? t._stencilCounter : 0;
            }),
            (e.prototype.push = function (t) {
              var e = t.maskObject,
                r = this.renderer.gl,
                i = t._stencilCounter;
              0 === i &&
                (this.renderer.framebuffer.forceStencil(),
                r.enable(r.STENCIL_TEST)),
                t._stencilCounter++,
                r.colorMask(!1, !1, !1, !1),
                r.stencilFunc(r.EQUAL, i, this._getBitwiseMask()),
                r.stencilOp(r.KEEP, r.KEEP, r.INCR),
                (e.renderable = !0),
                e.render(this.renderer),
                this.renderer.batch.flush(),
                this.renderer.framebuffer.blit(),
                (e.renderable = !1),
                this._useCurrent();
            }),
            (e.prototype.pop = function (t) {
              var e = this.renderer.gl;
              0 === this.getStackLength()
                ? (e.disable(e.STENCIL_TEST),
                  e.clear(e.STENCIL_BUFFER_BIT),
                  e.clearStencil(0))
                : (e.colorMask(!1, !1, !1, !1),
                  e.stencilOp(e.KEEP, e.KEEP, e.DECR),
                  (t.renderable = !0),
                  t.render(this.renderer),
                  this.renderer.batch.flush(),
                  (t.renderable = !1),
                  this._useCurrent());
            }),
            (e.prototype._useCurrent = function () {
              var t = this.renderer.gl;
              t.colorMask(!0, !0, !0, !0),
                t.stencilFunc(
                  t.EQUAL,
                  this.getStackLength(),
                  this._getBitwiseMask()
                ),
                t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
            }),
            (e.prototype._getBitwiseMask = function () {
              return (1 << this.getStackLength()) - 1;
            }),
            e
          );
        })(mi),
        gi = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.destinationFrame = null),
              (r.sourceFrame = null),
              (r.defaultFrame = null),
              (r.projectionMatrix = new ae()),
              (r.transform = null),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.update = function (t, e, r, i) {
              (this.destinationFrame =
                t || this.destinationFrame || this.defaultFrame),
                (this.sourceFrame = e || this.sourceFrame || t),
                this.calculateProjection(
                  this.destinationFrame,
                  this.sourceFrame,
                  r,
                  i
                ),
                this.transform && this.projectionMatrix.append(this.transform);
              var n = this.renderer;
              (n.globalUniforms.uniforms.projectionMatrix =
                this.projectionMatrix),
                n.globalUniforms.update(),
                n.shader.shader &&
                  n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
            }),
            (e.prototype.calculateProjection = function (t, e, r, i) {
              var n = this.projectionMatrix,
                o = i ? -1 : 1;
              n.identity(),
                (n.a = (1 / e.width) * 2),
                (n.d = o * ((1 / e.height) * 2)),
                (n.tx = -1 - e.x * n.a),
                (n.ty = -o - e.y * n.d);
            }),
            (e.prototype.setTransform = function (t) {}),
            e
          );
        })(rr),
        Ti = new te(),
        xi = new te(),
        Ei = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.clearColor = e._backgroundColorRgba),
              (r.defaultMaskStack = []),
              (r.current = null),
              (r.sourceFrame = new te()),
              (r.destinationFrame = new te()),
              (r.viewportFrame = new te()),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.bind = function (t, e, r) {
              void 0 === t && (t = null);
              var i,
                n,
                o,
                s = this.renderer;
              (this.current = t),
                t
                  ? ((o = (i = t.baseTexture).resolution),
                    e ||
                      ((Ti.width = t.frame.width),
                      (Ti.height = t.frame.height),
                      (e = Ti)),
                    r ||
                      ((xi.x = t.frame.x),
                      (xi.y = t.frame.y),
                      (xi.width = e.width),
                      (xi.height = e.height),
                      (r = xi)),
                    (n = i.framebuffer))
                  : ((o = s.resolution),
                    e ||
                      ((Ti.width = s.screen.width),
                      (Ti.height = s.screen.height),
                      (e = Ti)),
                    r || (((r = Ti).width = e.width), (r.height = e.height)));
              var a = this.viewportFrame;
              (a.x = r.x * o),
                (a.y = r.y * o),
                (a.width = r.width * o),
                (a.height = r.height * o),
                t || (a.y = s.view.height - (a.y + a.height)),
                this.renderer.framebuffer.bind(n, a),
                this.renderer.projection.update(r, e, o, !n),
                t
                  ? this.renderer.mask.setMaskStack(i.maskStack)
                  : this.renderer.mask.setMaskStack(this.defaultMaskStack),
                this.sourceFrame.copyFrom(e),
                this.destinationFrame.copyFrom(r);
            }),
            (e.prototype.clear = function (t, e) {
              t = this.current
                ? t || this.current.baseTexture.clearColor
                : t || this.clearColor;
              var r = this.destinationFrame,
                i = this.current
                  ? this.current.baseTexture
                  : this.renderer.screen,
                n = r.width !== i.width || r.height !== i.height;
              if (n) {
                var o = this.viewportFrame,
                  s = o.x,
                  a = o.y,
                  h = o.width,
                  u = o.height;
                this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
                  this.renderer.gl.scissor(s, a, h, u);
              }
              this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e),
                n && this.renderer.scissor.pop();
            }),
            (e.prototype.resize = function () {
              this.bind(null);
            }),
            (e.prototype.reset = function () {
              this.bind(null);
            }),
            e
          );
        })(rr),
        bi = (function () {
          function t(t, e) {
            (this.program = t),
              (this.uniformData = e),
              (this.uniformGroups = {});
          }
          return (
            (t.prototype.destroy = function () {
              (this.uniformData = null),
                (this.uniformGroups = null),
                (this.program = null);
            }),
            t
          );
        })(),
        Ai = 0,
        Oi = { textureCount: 0 },
        Si = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.destroyed = !1),
              r.systemCheck(),
              (r.gl = null),
              (r.shader = null),
              (r.program = null),
              (r.cache = {}),
              (r.id = Ai++),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.systemCheck = function () {
              if (
                !(function () {
                  if ("boolean" == typeof ti) return ti;
                  try {
                    var t = new Function(
                      "param1",
                      "param2",
                      "param3",
                      "return param1[param2] === param3;"
                    );
                    ti = !0 === t({ a: "b" }, "a", "b");
                  } catch (t) {
                    ti = !1;
                  }
                  return ti;
                })()
              )
                throw new Error(
                  "Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support."
                );
            }),
            (e.prototype.contextChange = function (t) {
              (this.gl = t), this.reset();
            }),
            (e.prototype.bind = function (t, e) {
              t.uniforms.globals = this.renderer.globalUniforms;
              var r = t.program,
                i =
                  r.glPrograms[this.renderer.CONTEXT_UID] ||
                  this.generateShader(t);
              return (
                (this.shader = t),
                this.program !== r &&
                  ((this.program = r), this.gl.useProgram(i.program)),
                e ||
                  ((Oi.textureCount = 0),
                  this.syncUniformGroup(t.uniformGroup, Oi)),
                i
              );
            }),
            (e.prototype.setUniforms = function (t) {
              var e = this.shader.program,
                r = e.glPrograms[this.renderer.CONTEXT_UID];
              e.syncUniforms(r.uniformData, t, this.renderer);
            }),
            (e.prototype.syncUniformGroup = function (t, e) {
              var r = this.getglProgram();
              (t.static && t.dirtyId === r.uniformGroups[t.id]) ||
                ((r.uniformGroups[t.id] = t.dirtyId),
                this.syncUniforms(t, r, e));
            }),
            (e.prototype.syncUniforms = function (t, e, r) {
              (
                t.syncUniforms[this.shader.program.id] ||
                this.createSyncGroups(t)
              )(e.uniformData, t.uniforms, this.renderer, r);
            }),
            (e.prototype.createSyncGroups = function (t) {
              var e = this.getSignature(t, this.shader.program.uniformData);
              return (
                this.cache[e] ||
                  (this.cache[e] = (function (t, e) {
                    var r = [
                      "\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    ",
                    ];
                    for (var i in t.uniforms) {
                      var n = e[i];
                      if (n) {
                        for (
                          var o = t.uniforms[i], s = !1, a = 0;
                          a < ei.length;
                          a++
                        )
                          if (ei[a].test(n, o)) {
                            r.push(ei[a].code(i, o)), (s = !0);
                            break;
                          }
                        if (!s) {
                          var h = (1 === n.size ? ri : ii)[n.type].replace(
                            "location",
                            'ud["' + i + '"].location'
                          );
                          r.push(
                            '\n            cv = ud["' +
                              i +
                              '"].value;\n            v = uv["' +
                              i +
                              '"];\n            ' +
                              h +
                              ";"
                          );
                        }
                      } else
                        t.uniforms[i].group &&
                          r.push(
                            '\n                    renderer.shader.syncUniformGroup(uv["' +
                              i +
                              '"], syncData);\n                '
                          );
                    }
                    return new Function(
                      "ud",
                      "uv",
                      "renderer",
                      "syncData",
                      r.join("\n")
                    );
                  })(t, this.shader.program.uniformData)),
                (t.syncUniforms[this.shader.program.id] = this.cache[e]),
                t.syncUniforms[this.shader.program.id]
              );
            }),
            (e.prototype.getSignature = function (t, e) {
              var r = t.uniforms,
                i = [];
              for (var n in r) i.push(n), e[n] && i.push(e[n].type);
              return i.join("-");
            }),
            (e.prototype.getglProgram = function () {
              return this.shader
                ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID]
                : null;
            }),
            (e.prototype.generateShader = function (t) {
              var e = this.gl,
                r = t.program,
                i = {};
              for (var n in r.attributeData) i[n] = r.attributeData[n].location;
              var o = kr(e, r.vertexSrc, r.fragmentSrc, i),
                s = {};
              for (var n in r.uniformData) {
                var a = r.uniformData[n];
                s[n] = {
                  location: e.getUniformLocation(o, n),
                  value: jr(a.type, a.size),
                };
              }
              var h = new bi(o, s);
              return (r.glPrograms[this.renderer.CONTEXT_UID] = h), h;
            }),
            (e.prototype.reset = function () {
              (this.program = null), (this.shader = null);
            }),
            (e.prototype.destroy = function () {
              this.destroyed = !0;
            }),
            e
          );
        })(rr),
        Ri = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.gl = null),
              (r.stateId = 0),
              (r.polygonOffset = 0),
              (r.blendMode = it.NONE),
              (r._blendEq = !1),
              (r.map = []),
              (r.map[0] = r.setBlend),
              (r.map[1] = r.setOffset),
              (r.map[2] = r.setCullFace),
              (r.map[3] = r.setDepthTest),
              (r.map[4] = r.setFrontFace),
              (r.map[5] = r.setDepthMask),
              (r.checks = []),
              (r.defaultState = new li()),
              (r.defaultState.blend = !0),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.contextChange = function (t) {
              (this.gl = t),
                (this.blendModes = (function (t, e) {
                  return (
                    void 0 === e && (e = []),
                    (e[it.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.ADD] = [t.ONE, t.ONE]),
                    (e[it.MULTIPLY] = [
                      t.DST_COLOR,
                      t.ONE_MINUS_SRC_ALPHA,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA,
                    ]),
                    (e[it.SCREEN] = [
                      t.ONE,
                      t.ONE_MINUS_SRC_COLOR,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA,
                    ]),
                    (e[it.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.NONE] = [0, 0]),
                    (e[it.NORMAL_NPM] = [
                      t.SRC_ALPHA,
                      t.ONE_MINUS_SRC_ALPHA,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA,
                    ]),
                    (e[it.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE]),
                    (e[it.SCREEN_NPM] = [
                      t.SRC_ALPHA,
                      t.ONE_MINUS_SRC_COLOR,
                      t.ONE,
                      t.ONE_MINUS_SRC_ALPHA,
                    ]),
                    (e[it.SRC_IN] = [t.DST_ALPHA, t.ZERO]),
                    (e[it.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO]),
                    (e[it.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE]),
                    (e[it.DST_IN] = [t.ZERO, t.SRC_ALPHA]),
                    (e[it.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA]),
                    (e[it.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA]),
                    (e[it.XOR] = [
                      t.ONE_MINUS_DST_ALPHA,
                      t.ONE_MINUS_SRC_ALPHA,
                    ]),
                    (e[it.SUBTRACT] = [
                      t.ONE,
                      t.ONE,
                      t.ONE,
                      t.ONE,
                      t.FUNC_REVERSE_SUBTRACT,
                      t.FUNC_ADD,
                    ]),
                    e
                  );
                })(t)),
                this.set(this.defaultState),
                this.reset();
            }),
            (e.prototype.set = function (t) {
              if (((t = t || this.defaultState), this.stateId !== t.data)) {
                for (var e = this.stateId ^ t.data, r = 0; e; )
                  1 & e && this.map[r].call(this, !!(t.data & (1 << r))),
                    (e >>= 1),
                    r++;
                this.stateId = t.data;
              }
              for (r = 0; r < this.checks.length; r++) this.checks[r](this, t);
            }),
            (e.prototype.forceState = function (t) {
              t = t || this.defaultState;
              for (var e = 0; e < this.map.length; e++)
                this.map[e].call(this, !!(t.data & (1 << e)));
              for (e = 0; e < this.checks.length; e++) this.checks[e](this, t);
              this.stateId = t.data;
            }),
            (e.prototype.setBlend = function (t) {
              this.updateCheck(e.checkBlendMode, t),
                this.gl[t ? "enable" : "disable"](this.gl.BLEND);
            }),
            (e.prototype.setOffset = function (t) {
              this.updateCheck(e.checkPolygonOffset, t),
                this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
            }),
            (e.prototype.setDepthTest = function (t) {
              this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
            }),
            (e.prototype.setDepthMask = function (t) {
              this.gl.depthMask(t);
            }),
            (e.prototype.setCullFace = function (t) {
              this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
            }),
            (e.prototype.setFrontFace = function (t) {
              this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
            }),
            (e.prototype.setBlendMode = function (t) {
              if (t !== this.blendMode) {
                this.blendMode = t;
                var e = this.blendModes[t],
                  r = this.gl;
                2 === e.length
                  ? r.blendFunc(e[0], e[1])
                  : r.blendFuncSeparate(e[0], e[1], e[2], e[3]),
                  6 === e.length
                    ? ((this._blendEq = !0),
                      r.blendEquationSeparate(e[4], e[5]))
                    : this._blendEq &&
                      ((this._blendEq = !1),
                      r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
              }
            }),
            (e.prototype.setPolygonOffset = function (t, e) {
              this.gl.polygonOffset(t, e);
            }),
            (e.prototype.reset = function () {
              this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
                this.forceState(this.defaultState),
                (this._blendEq = !0),
                (this.blendMode = -1),
                this.setBlendMode(0);
            }),
            (e.prototype.updateCheck = function (t, e) {
              var r = this.checks.indexOf(t);
              e && -1 === r
                ? this.checks.push(t)
                : e || -1 === r || this.checks.splice(r, 1);
            }),
            (e.checkBlendMode = function (t, e) {
              t.setBlendMode(e.blendMode);
            }),
            (e.checkPolygonOffset = function (t, e) {
              t.setPolygonOffset(1, e.polygonOffset);
            }),
            e
          );
        })(rr),
        Ii = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.count = 0),
              (r.checkCount = 0),
              (r.maxIdle = yt.GC_MAX_IDLE),
              (r.checkCountMax = yt.GC_MAX_CHECK_COUNT),
              (r.mode = yt.GC_MODE),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.postrender = function () {
              this.renderer.renderingToScreen &&
                (this.count++,
                this.mode !== pt.MANUAL &&
                  (this.checkCount++,
                  this.checkCount > this.checkCountMax &&
                    ((this.checkCount = 0), this.run())));
            }),
            (e.prototype.run = function () {
              for (
                var t = this.renderer.texture,
                  e = t.managedTextures,
                  r = !1,
                  i = 0;
                i < e.length;
                i++
              ) {
                var n = e[i];
                !n.framebuffer &&
                  this.count - n.touched > this.maxIdle &&
                  (t.destroyTexture(n, !0), (e[i] = null), (r = !0));
              }
              if (r) {
                var o = 0;
                for (i = 0; i < e.length; i++) null !== e[i] && (e[o++] = e[i]);
                e.length = o;
              }
            }),
            (e.prototype.unload = function (t) {
              var e = this.renderer.texture,
                r = t._texture;
              r && !r.framebuffer && e.destroyTexture(r);
              for (var i = t.children.length - 1; i >= 0; i--)
                this.unload(t.children[i]);
            }),
            e
          );
        })(rr),
        wi = function (t) {
          (this.texture = t),
            (this.width = -1),
            (this.height = -1),
            (this.dirtyId = -1),
            (this.dirtyStyleId = -1),
            (this.mipmap = !1),
            (this.wrapMode = 33071),
            (this.type = 6408),
            (this.internalFormat = 5121),
            (this.samplerType = 0);
        },
        Pi = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.boundTextures = []),
              (r.currentLocation = -1),
              (r.managedTextures = []),
              (r._unknownBoundTextures = !1),
              (r.unknownTexture = new Ve()),
              (r.hasIntegerTextures = !1),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.contextChange = function () {
              var t = (this.gl = this.renderer.gl);
              (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
                (this.webGLVersion = this.renderer.context.webGLVersion);
              var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
              this.boundTextures.length = e;
              for (var r = 0; r < e; r++) this.boundTextures[r] = null;
              this.emptyTextures = {};
              var i = new wi(t.createTexture());
              for (
                t.bindTexture(t.TEXTURE_2D, i.texture),
                  t.texImage2D(
                    t.TEXTURE_2D,
                    0,
                    t.RGBA,
                    1,
                    1,
                    0,
                    t.RGBA,
                    t.UNSIGNED_BYTE,
                    new Uint8Array(4)
                  ),
                  this.emptyTextures[t.TEXTURE_2D] = i,
                  this.emptyTextures[t.TEXTURE_CUBE_MAP] = new wi(
                    t.createTexture()
                  ),
                  t.bindTexture(
                    t.TEXTURE_CUBE_MAP,
                    this.emptyTextures[t.TEXTURE_CUBE_MAP].texture
                  ),
                  r = 0;
                r < 6;
                r++
              )
                t.texImage2D(
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + r,
                  0,
                  t.RGBA,
                  1,
                  1,
                  0,
                  t.RGBA,
                  t.UNSIGNED_BYTE,
                  null
                );
              for (
                t.texParameteri(
                  t.TEXTURE_CUBE_MAP,
                  t.TEXTURE_MAG_FILTER,
                  t.LINEAR
                ),
                  t.texParameteri(
                    t.TEXTURE_CUBE_MAP,
                    t.TEXTURE_MIN_FILTER,
                    t.LINEAR
                  ),
                  r = 0;
                r < this.boundTextures.length;
                r++
              )
                this.bind(null, r);
            }),
            (e.prototype.bind = function (t, e) {
              void 0 === e && (e = 0);
              var r = this.gl;
              if (t) {
                if ((t = t.castToBaseTexture()).parentTextureArray) return;
                if (t.valid) {
                  t.touched = this.renderer.textureGC.count;
                  var i =
                    t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                  this.boundTextures[e] !== t &&
                    (this.currentLocation !== e &&
                      ((this.currentLocation = e),
                      r.activeTexture(r.TEXTURE0 + e)),
                    r.bindTexture(t.target, i.texture)),
                    i.dirtyId !== t.dirtyId &&
                      (this.currentLocation !== e &&
                        ((this.currentLocation = e),
                        r.activeTexture(r.TEXTURE0 + e)),
                      this.updateTexture(t)),
                    (this.boundTextures[e] = t);
                }
              } else
                this.currentLocation !== e &&
                  ((this.currentLocation = e), r.activeTexture(r.TEXTURE0 + e)),
                  r.bindTexture(
                    r.TEXTURE_2D,
                    this.emptyTextures[r.TEXTURE_2D].texture
                  ),
                  (this.boundTextures[e] = null);
            }),
            (e.prototype.reset = function () {
              (this._unknownBoundTextures = !0),
                (this.hasIntegerTextures = !1),
                (this.currentLocation = -1);
              for (var t = 0; t < this.boundTextures.length; t++)
                this.boundTextures[t] = this.unknownTexture;
            }),
            (e.prototype.unbind = function (t) {
              var e = this.gl,
                r = this.boundTextures;
              if (this._unknownBoundTextures) {
                this._unknownBoundTextures = !1;
                for (var i = 0; i < r.length; i++)
                  r[i] === this.unknownTexture && this.bind(null, i);
              }
              for (i = 0; i < r.length; i++)
                r[i] === t &&
                  (this.currentLocation !== i &&
                    (e.activeTexture(e.TEXTURE0 + i),
                    (this.currentLocation = i)),
                  e.bindTexture(t.target, this.emptyTextures[t.target].texture),
                  (r[i] = null));
            }),
            (e.prototype.ensureSamplerType = function (t) {
              var e = this,
                r = e.boundTextures,
                i = e.hasIntegerTextures,
                n = e.CONTEXT_UID;
              if (i)
                for (var o = t - 1; o >= 0; --o) {
                  var s = r[o];
                  s &&
                    s._glTextures[n].samplerType !== ht.FLOAT &&
                    this.renderer.texture.unbind(s);
                }
            }),
            (e.prototype.initTexture = function (t) {
              var e = new wi(this.gl.createTexture());
              return (
                (e.dirtyId = -1),
                (t._glTextures[this.CONTEXT_UID] = e),
                this.managedTextures.push(t),
                t.on("dispose", this.destroyTexture, this),
                e
              );
            }),
            (e.prototype.initTextureType = function (t, e) {
              if (
                ((e.internalFormat = t.format),
                (e.type = t.type),
                2 === this.webGLVersion)
              ) {
                var r = this.renderer.gl;
                t.type === r.FLOAT &&
                  t.format === r.RGBA &&
                  (e.internalFormat = r.RGBA32F),
                  t.type === at.HALF_FLOAT && (e.type = r.HALF_FLOAT),
                  e.type === r.HALF_FLOAT &&
                    t.format === r.RGBA &&
                    (e.internalFormat = r.RGBA16F);
              }
            }),
            (e.prototype.updateTexture = function (t) {
              var e = t._glTextures[this.CONTEXT_UID];
              if (e) {
                var r = this.renderer;
                if (
                  (this.initTextureType(t, e),
                  t.resource && t.resource.upload(r, t, e))
                )
                  e.samplerType !== ht.FLOAT && (this.hasIntegerTextures = !0);
                else {
                  var i = t.realWidth,
                    n = t.realHeight,
                    o = r.gl;
                  (e.width !== i || e.height !== n || e.dirtyId < 0) &&
                    ((e.width = i),
                    (e.height = n),
                    o.texImage2D(
                      t.target,
                      0,
                      e.internalFormat,
                      i,
                      n,
                      0,
                      t.format,
                      e.type,
                      null
                    ));
                }
                t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
                  (e.dirtyId = t.dirtyId);
              }
            }),
            (e.prototype.destroyTexture = function (t, e) {
              var r = this.gl;
              if (
                (t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] &&
                (this.unbind(t),
                r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
                t.off("dispose", this.destroyTexture, this),
                delete t._glTextures[this.CONTEXT_UID],
                !e)
              ) {
                var i = this.managedTextures.indexOf(t);
                -1 !== i && Bt(this.managedTextures, i, 1);
              }
            }),
            (e.prototype.updateTextureStyle = function (t) {
              var e = t._glTextures[this.CONTEXT_UID];
              e &&
                ((t.mipmap !== ct.POW2 && 2 === this.webGLVersion) ||
                t.isPowerOfTwo
                  ? (e.mipmap = t.mipmap >= 1)
                  : (e.mipmap = !1),
                2 === this.webGLVersion || t.isPowerOfTwo
                  ? (e.wrapMode = t.wrapMode)
                  : (e.wrapMode = lt.CLAMP),
                (t.resource && t.resource.style(this.renderer, t, e)) ||
                  this.setStyle(t, e),
                (e.dirtyStyleId = t.dirtyStyleId));
            }),
            (e.prototype.setStyle = function (t, e) {
              var r = this.gl;
              if (
                (e.mipmap &&
                  t.mipmap !== ct.ON_MANUAL &&
                  r.generateMipmap(t.target),
                r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode),
                r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode),
                e.mipmap)
              ) {
                r.texParameteri(
                  t.target,
                  r.TEXTURE_MIN_FILTER,
                  t.scaleMode === ut.LINEAR
                    ? r.LINEAR_MIPMAP_LINEAR
                    : r.NEAREST_MIPMAP_NEAREST
                );
                var i = this.renderer.context.extensions.anisotropicFiltering;
                if (i && t.anisotropicLevel > 0 && t.scaleMode === ut.LINEAR) {
                  var n = Math.min(
                    t.anisotropicLevel,
                    r.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                  );
                  r.texParameterf(t.target, i.TEXTURE_MAX_ANISOTROPY_EXT, n);
                }
              } else
                r.texParameteri(
                  t.target,
                  r.TEXTURE_MIN_FILTER,
                  t.scaleMode === ut.LINEAR ? r.LINEAR : r.NEAREST
                );
              r.texParameteri(
                t.target,
                r.TEXTURE_MAG_FILTER,
                t.scaleMode === ut.LINEAR ? r.LINEAR : r.NEAREST
              );
            }),
            e
          );
        })(rr),
        Mi = {
          __proto__: null,
          FilterSystem: Ir,
          BatchSystem: Pr,
          ContextSystem: Dr,
          FramebufferSystem: Lr,
          GeometrySystem: Br,
          MaskSystem: _i,
          ScissorSystem: vi,
          StencilSystem: yi,
          ProjectionSystem: gi,
          RenderTextureSystem: Ei,
          ShaderSystem: Si,
          StateSystem: Ri,
          TextureGCSystem: Ii,
          TextureSystem: Pi,
        },
        Di = new ae(),
        Ci = (function (t) {
          function e(r) {
            var i = t.call(this, et.WEBGL, r) || this;
            return (
              (r = i.options),
              (i.gl = null),
              (i.CONTEXT_UID = 0),
              (i.runners = {
                destroy: new Ue("destroy"),
                contextChange: new Ue("contextChange"),
                reset: new Ue("reset"),
                update: new Ue("update"),
                postrender: new Ue("postrender"),
                prerender: new Ue("prerender"),
                resize: new Ue("resize"),
              }),
              (i.globalUniforms = new Ar({ projectionMatrix: new ae() }, !0)),
              i
                .addSystem(_i, "mask")
                .addSystem(Dr, "context")
                .addSystem(Ri, "state")
                .addSystem(Si, "shader")
                .addSystem(Pi, "texture")
                .addSystem(Br, "geometry")
                .addSystem(Lr, "framebuffer")
                .addSystem(vi, "scissor")
                .addSystem(yi, "stencil")
                .addSystem(gi, "projection")
                .addSystem(Ii, "textureGC")
                .addSystem(Ir, "filter")
                .addSystem(Ei, "renderTexture")
                .addSystem(Pr, "batch"),
              i.initPlugins(e.__plugins),
              r.context
                ? i.context.initFromContext(r.context)
                : i.context.initFromOptions({
                    alpha: !!i.useContextAlpha,
                    antialias: r.antialias,
                    premultipliedAlpha:
                      i.useContextAlpha &&
                      "notMultiplied" !== i.useContextAlpha,
                    stencil: !0,
                    preserveDrawingBuffer: r.preserveDrawingBuffer,
                    powerPreference: i.options.powerPreference,
                  }),
              (i.renderingToScreen = !0),
              (function (t) {
                var e;
                if (!St) {
                  if (
                    navigator.userAgent.toLowerCase().indexOf("chrome") > -1
                  ) {
                    var r = [
                      "\n %c %c %c PixiJS 6.0.4 - ✰ " +
                        t +
                        " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n",
                      "background: #ff66a5; padding:5px 0;",
                      "background: #ff66a5; padding:5px 0;",
                      "color: #ff66a5; background: #030307; padding:5px 0;",
                      "background: #ff66a5; padding:5px 0;",
                      "background: #ffc3dc; padding:5px 0;",
                      "background: #ff66a5; padding:5px 0;",
                      "color: #ff2424; background: #fff; padding:5px 0;",
                      "color: #ff2424; background: #fff; padding:5px 0;",
                      "color: #ff2424; background: #fff; padding:5px 0;",
                    ];
                    (e = self.console).log.apply(e, r);
                  } else
                    self.console &&
                      self.console.log(
                        "PixiJS 6.0.4 - " + t + " - http://www.pixijs.com/"
                      );
                  St = !0;
                }
              })(2 === i.context.webGLVersion ? "WebGL 2" : "WebGL 1"),
              i.resize(i.options.width, i.options.height),
              i
            );
          }
          return (
            ke(e, t),
            (e.create = function (t) {
              if (
                (void 0 === Ot &&
                  (Ot = (function () {
                    var t = {
                      stencil: !0,
                      failIfMajorPerformanceCaveat:
                        yt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
                    };
                    try {
                      if (!self.WebGLRenderingContext) return !1;
                      var e = document.createElement("canvas"),
                        r =
                          e.getContext("webgl", t) ||
                          e.getContext("experimental-webgl", t),
                        i = !(!r || !r.getContextAttributes().stencil);
                      if (r) {
                        var n = r.getExtension("WEBGL_lose_context");
                        n && n.loseContext();
                      }
                      return (r = null), i;
                    } catch (t) {
                      return !1;
                    }
                  })()),
                Ot)
              )
                return new e(t);
              throw new Error(
                'WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.'
              );
            }),
            (e.prototype.addSystem = function (t, e) {
              e || (e = t.name);
              var r = new t(this);
              if (this[e])
                throw new Error(
                  'Whoops! The name "' + e + '" is already in use'
                );
              for (var i in ((this[e] = r), this.runners))
                this.runners[i].add(r);
              return this;
            }),
            (e.prototype.render = function (t, e) {
              var r, i, n, o;
              if (
                (e &&
                  (e instanceof lr
                    ? (jt(
                        "6.0.0",
                        "Renderer#render arguments changed, use options instead."
                      ),
                      (r = e),
                      (i = arguments[2]),
                      (n = arguments[3]),
                      (o = arguments[4]))
                    : ((r = e.renderTexture),
                      (i = e.clear),
                      (n = e.transform),
                      (o = e.skipUpdateTransform))),
                (this.renderingToScreen = !r),
                this.runners.prerender.emit(),
                this.emit("prerender"),
                (this.projection.transform = n),
                !this.context.isLost)
              ) {
                if ((r || (this._lastObjectRendered = t), !o)) {
                  var s = t.enableTempParent();
                  t.updateTransform(), t.disableTempParent(s);
                }
                this.renderTexture.bind(r),
                  this.batch.currentRenderer.start(),
                  (void 0 !== i ? i : this.clearBeforeRender) &&
                    this.renderTexture.clear(),
                  t.render(this),
                  this.batch.currentRenderer.flush(),
                  r && r.baseTexture.update(),
                  this.runners.postrender.emit(),
                  (this.projection.transform = null),
                  this.emit("postrender");
              }
            }),
            (e.prototype.resize = function (e, r) {
              t.prototype.resize.call(this, e, r),
                this.runners.resize.emit(e, r);
            }),
            (e.prototype.reset = function () {
              return this.runners.reset.emit(), this;
            }),
            (e.prototype.clear = function () {
              this.renderTexture.bind(), this.renderTexture.clear();
            }),
            (e.prototype.destroy = function (e) {
              for (var r in (this.runners.destroy.emit(), this.runners))
                this.runners[r].destroy();
              t.prototype.destroy.call(this, e), (this.gl = null);
            }),
            Object.defineProperty(e.prototype, "extract", {
              get: function () {
                return (
                  jt(
                    "6.0.0",
                    "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."
                  ),
                  this.plugins.extract
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.registerPlugin = function (t, r) {
              (e.__plugins = e.__plugins || {}), (e.__plugins[t] = r);
            }),
            e
          );
        })(
          (function (t) {
            function e(e, r) {
              void 0 === e && (e = et.UNKNOWN);
              var i = t.call(this) || this;
              return (
                (r = Object.assign({}, yt.RENDER_OPTIONS, r)),
                (i.options = r),
                (i.type = e),
                (i.screen = new te(0, 0, r.width, r.height)),
                (i.view = r.view || document.createElement("canvas")),
                (i.resolution = r.resolution || yt.RESOLUTION),
                (i.useContextAlpha = r.useContextAlpha),
                (i.autoDensity = !!r.autoDensity),
                (i.preserveDrawingBuffer = r.preserveDrawingBuffer),
                (i.clearBeforeRender = r.clearBeforeRender),
                (i._backgroundColor = 0),
                (i._backgroundColorRgba = [0, 0, 0, 1]),
                (i._backgroundColorString = "#000000"),
                (i.backgroundColor = r.backgroundColor || i._backgroundColor),
                (i.backgroundAlpha = r.backgroundAlpha),
                void 0 !== r.transparent &&
                  (jt(
                    "6.0.0",
                    "Option transparent is deprecated, please use backgroundAlpha instead."
                  ),
                  (i.useContextAlpha = r.transparent),
                  (i.backgroundAlpha = r.transparent ? 0 : 1)),
                (i._lastObjectRendered = null),
                (i.plugins = {}),
                i
              );
            }
            return (
              ke(e, t),
              (e.prototype.initPlugins = function (t) {
                for (var e in t) this.plugins[e] = new t[e](this);
              }),
              Object.defineProperty(e.prototype, "width", {
                get: function () {
                  return this.view.width;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "height", {
                get: function () {
                  return this.view.height;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.resize = function (t, e) {
                (this.screen.width = t),
                  (this.screen.height = e),
                  (this.view.width = t * this.resolution),
                  (this.view.height = e * this.resolution),
                  this.autoDensity &&
                    ((this.view.style.width = t + "px"),
                    (this.view.style.height = e + "px")),
                  this.emit("resize", t, e);
              }),
              (e.prototype.generateTexture = function (t, e, r, i) {
                0 === (i = i || t.getLocalBounds(null, !0)).width &&
                  (i.width = 1),
                  0 === i.height && (i.height = 1);
                var n = lr.create({
                  width: 0 | i.width,
                  height: 0 | i.height,
                  scaleMode: e,
                  resolution: r,
                });
                return (
                  (Di.tx = -i.x),
                  (Di.ty = -i.y),
                  this.render(t, {
                    renderTexture: n,
                    clear: !1,
                    transform: Di,
                    skipUpdateTransform: !!t.parent,
                  }),
                  n
                );
              }),
              (e.prototype.destroy = function (t) {
                for (var e in this.plugins)
                  this.plugins[e].destroy(), (this.plugins[e] = null);
                t &&
                  this.view.parentNode &&
                  this.view.parentNode.removeChild(this.view);
                var r = this;
                (r.plugins = null),
                  (r.type = et.UNKNOWN),
                  (r.view = null),
                  (r.screen = null),
                  (r._tempDisplayObjectParent = null),
                  (r.options = null),
                  (this._backgroundColorRgba = null),
                  (this._backgroundColorString = null),
                  (this._lastObjectRendered = null);
              }),
              Object.defineProperty(e.prototype, "backgroundColor", {
                get: function () {
                  return this._backgroundColor;
                },
                set: function (t) {
                  (this._backgroundColor = t),
                    (this._backgroundColorString = wt(t)),
                    It(t, this._backgroundColorRgba);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "backgroundAlpha", {
                get: function () {
                  return this._backgroundColorRgba[3];
                },
                set: function (t) {
                  this._backgroundColorRgba[3] = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            );
          })(Tt())
        ),
        Ni =
          "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
        Li = function () {
          (this.texArray = null),
            (this.blend = 0),
            (this.type = nt.TRIANGLES),
            (this.start = 0),
            (this.size = 0),
            (this.data = null);
        },
        Fi = (function () {
          function t() {
            (this.elements = []), (this.ids = []), (this.count = 0);
          }
          return (
            (t.prototype.clear = function () {
              for (var t = 0; t < this.count; t++) this.elements[t] = null;
              this.count = 0;
            }),
            t
          );
        })(),
        Ui = (function () {
          function t(t) {
            "number" == typeof t
              ? (this.rawBinaryData = new ArrayBuffer(t))
              : t instanceof Uint8Array
              ? (this.rawBinaryData = t.buffer)
              : (this.rawBinaryData = t),
              (this.uint32View = new Uint32Array(this.rawBinaryData)),
              (this.float32View = new Float32Array(this.rawBinaryData));
          }
          return (
            Object.defineProperty(t.prototype, "int8View", {
              get: function () {
                return (
                  this._int8View ||
                    (this._int8View = new Int8Array(this.rawBinaryData)),
                  this._int8View
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "uint8View", {
              get: function () {
                return (
                  this._uint8View ||
                    (this._uint8View = new Uint8Array(this.rawBinaryData)),
                  this._uint8View
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "int16View", {
              get: function () {
                return (
                  this._int16View ||
                    (this._int16View = new Int16Array(this.rawBinaryData)),
                  this._int16View
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "uint16View", {
              get: function () {
                return (
                  this._uint16View ||
                    (this._uint16View = new Uint16Array(this.rawBinaryData)),
                  this._uint16View
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "int32View", {
              get: function () {
                return (
                  this._int32View ||
                    (this._int32View = new Int32Array(this.rawBinaryData)),
                  this._int32View
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.view = function (t) {
              return this[t + "View"];
            }),
            (t.prototype.destroy = function () {
              (this.rawBinaryData = null),
                (this._int8View = null),
                (this._uint8View = null),
                (this._int16View = null),
                (this._uint16View = null),
                (this._int32View = null),
                (this.uint32View = null),
                (this.float32View = null);
            }),
            (t.sizeOf = function (t) {
              switch (t) {
                case "int8":
                case "uint8":
                  return 1;
                case "int16":
                case "uint16":
                  return 2;
                case "int32":
                case "uint32":
                case "float32":
                  return 4;
                default:
                  throw new Error(t + " isn't a valid view type");
              }
            }),
            t
          );
        })(),
        Bi = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.shaderGenerator = null),
              (r.geometryClass = null),
              (r.vertexSize = null),
              (r.state = li.for2d()),
              (r.size = 4 * yt.SPRITE_BATCH_SIZE),
              (r._vertexCount = 0),
              (r._indexCount = 0),
              (r._bufferedElements = []),
              (r._bufferedTextures = []),
              (r._bufferSize = 0),
              (r._shader = null),
              (r._packedGeometries = []),
              (r._packedGeometryPoolSize = 2),
              (r._flushId = 0),
              (r._aBuffers = {}),
              (r._iBuffers = {}),
              (r.MAX_TEXTURES = 1),
              r.renderer.on("prerender", r.onPrerender, r),
              e.runners.contextChange.add(r),
              (r._dcIndex = 0),
              (r._aIndex = 0),
              (r._iIndex = 0),
              (r._attributeBuffer = null),
              (r._indexBuffer = null),
              (r._tempBoundTextures = []),
              r
            );
          }
          return (
            ke(e, t),
            (e.prototype.contextChange = function () {
              var t = this.renderer.gl;
              yt.PREFER_ENV === tt.WEBGL_LEGACY
                ? (this.MAX_TEXTURES = 1)
                : ((this.MAX_TEXTURES = Math.min(
                    t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                    yt.SPRITE_MAX_TEXTURES
                  )),
                  (this.MAX_TEXTURES = (function (t, e) {
                    if (0 === t)
                      throw new Error(
                        "Invalid value of `0` passed to `checkMaxIfStatementsInShader`"
                      );
                    for (var r = e.createShader(e.FRAGMENT_SHADER); ; ) {
                      var i = ni.replace(/%forloop%/gi, oi(t));
                      if (
                        (e.shaderSource(r, i),
                        e.compileShader(r),
                        e.getShaderParameter(r, e.COMPILE_STATUS))
                      )
                        break;
                      t = (t / 2) | 0;
                    }
                    return t;
                  })(this.MAX_TEXTURES, t))),
                (this._shader = this.shaderGenerator.generateShader(
                  this.MAX_TEXTURES
                ));
              for (var e = 0; e < this._packedGeometryPoolSize; e++)
                this._packedGeometries[e] = new this.geometryClass();
              this.initFlushBuffers();
            }),
            (e.prototype.initFlushBuffers = function () {
              for (
                var t = e._drawCallPool,
                  r = e._textureArrayPool,
                  i = this.size / 4,
                  n = Math.floor(i / this.MAX_TEXTURES) + 1;
                t.length < i;

              )
                t.push(new Li());
              for (; r.length < n; ) r.push(new Fi());
              for (var o = 0; o < this.MAX_TEXTURES; o++)
                this._tempBoundTextures[o] = null;
            }),
            (e.prototype.onPrerender = function () {
              this._flushId = 0;
            }),
            (e.prototype.render = function (t) {
              t._texture.valid &&
                (this._vertexCount + t.vertexData.length / 2 > this.size &&
                  this.flush(),
                (this._vertexCount += t.vertexData.length / 2),
                (this._indexCount += t.indices.length),
                (this._bufferedTextures[this._bufferSize] =
                  t._texture.baseTexture),
                (this._bufferedElements[this._bufferSize++] = t));
            }),
            (e.prototype.buildTexturesAndDrawCalls = function () {
              var t = this._bufferedTextures,
                r = this.MAX_TEXTURES,
                i = e._textureArrayPool,
                n = this.renderer.batch,
                o = this._tempBoundTextures,
                s = this.renderer.textureGC.count,
                a = ++Ve._globalBatch,
                h = 0,
                u = i[0],
                l = 0;
              n.copyBoundTextures(o, r);
              for (var c = 0; c < this._bufferSize; ++c) {
                var d = t[c];
                (t[c] = null),
                  d._batchEnabled !== a &&
                    (u.count >= r &&
                      (n.boundArray(u, o, a, r),
                      this.buildDrawCalls(u, l, c),
                      (l = c),
                      (u = i[++h]),
                      ++a),
                    (d._batchEnabled = a),
                    (d.touched = s),
                    (u.elements[u.count++] = d));
              }
              for (
                u.count > 0 &&
                  (n.boundArray(u, o, a, r),
                  this.buildDrawCalls(u, l, this._bufferSize),
                  ++h,
                  ++a),
                  c = 0;
                c < o.length;
                c++
              )
                o[c] = null;
              Ve._globalBatch = a;
            }),
            (e.prototype.buildDrawCalls = function (t, r, i) {
              var n = this,
                o = n._bufferedElements,
                s = n._attributeBuffer,
                a = n._indexBuffer,
                h = n.vertexSize,
                u = e._drawCallPool,
                l = this._dcIndex,
                c = this._aIndex,
                d = this._iIndex,
                f = u[l];
              (f.start = this._iIndex), (f.texArray = t);
              for (var p = r; p < i; ++p) {
                var _ = o[p],
                  m = _._texture.baseTexture,
                  v = Mt[m.alphaMode ? 1 : 0][_.blendMode];
                (o[p] = null),
                  r < p &&
                    f.blend !== v &&
                    ((f.size = d - f.start),
                    (r = p),
                    ((f = u[++l]).texArray = t),
                    (f.start = d)),
                  this.packInterleavedGeometry(_, s, a, c, d),
                  (c += (_.vertexData.length / 2) * h),
                  (d += _.indices.length),
                  (f.blend = v);
              }
              r < i && ((f.size = d - f.start), ++l),
                (this._dcIndex = l),
                (this._aIndex = c),
                (this._iIndex = d);
            }),
            (e.prototype.bindAndClearTexArray = function (t) {
              for (var e = this.renderer.texture, r = 0; r < t.count; r++)
                e.bind(t.elements[r], t.ids[r]), (t.elements[r] = null);
              t.count = 0;
            }),
            (e.prototype.updateGeometry = function () {
              var t = this,
                e = t._packedGeometries,
                r = t._attributeBuffer,
                i = t._indexBuffer;
              yt.CAN_UPLOAD_SAME_BUFFER
                ? (e[this._flushId]._buffer.update(r.rawBinaryData),
                  e[this._flushId]._indexBuffer.update(i),
                  this.renderer.geometry.updateBuffers())
                : (this._packedGeometryPoolSize <= this._flushId &&
                    (this._packedGeometryPoolSize++,
                    (e[this._flushId] = new this.geometryClass())),
                  e[this._flushId]._buffer.update(r.rawBinaryData),
                  e[this._flushId]._indexBuffer.update(i),
                  this.renderer.geometry.bind(e[this._flushId]),
                  this.renderer.geometry.updateBuffers(),
                  this._flushId++);
            }),
            (e.prototype.drawBatches = function () {
              for (
                var t = this._dcIndex,
                  r = this.renderer,
                  i = r.gl,
                  n = r.state,
                  o = e._drawCallPool,
                  s = null,
                  a = 0;
                a < t;
                a++
              ) {
                var h = o[a],
                  u = h.texArray,
                  l = h.type,
                  c = h.size,
                  d = h.start,
                  f = h.blend;
                s !== u && ((s = u), this.bindAndClearTexArray(u)),
                  (this.state.blendMode = f),
                  n.set(this.state),
                  i.drawElements(l, c, i.UNSIGNED_SHORT, 2 * d);
              }
            }),
            (e.prototype.flush = function () {
              0 !== this._vertexCount &&
                ((this._attributeBuffer = this.getAttributeBuffer(
                  this._vertexCount
                )),
                (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
                (this._aIndex = 0),
                (this._iIndex = 0),
                (this._dcIndex = 0),
                this.buildTexturesAndDrawCalls(),
                this.updateGeometry(),
                this.drawBatches(),
                (this._bufferSize = 0),
                (this._vertexCount = 0),
                (this._indexCount = 0));
            }),
            (e.prototype.start = function () {
              this.renderer.state.set(this.state),
                this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),
                this.renderer.shader.bind(this._shader),
                yt.CAN_UPLOAD_SAME_BUFFER &&
                  this.renderer.geometry.bind(
                    this._packedGeometries[this._flushId]
                  );
            }),
            (e.prototype.stop = function () {
              this.flush();
            }),
            (e.prototype.destroy = function () {
              for (var e = 0; e < this._packedGeometryPoolSize; e++)
                this._packedGeometries[e] &&
                  this._packedGeometries[e].destroy();
              this.renderer.off("prerender", this.onPrerender, this),
                (this._aBuffers = null),
                (this._iBuffers = null),
                (this._packedGeometries = null),
                (this._attributeBuffer = null),
                (this._indexBuffer = null),
                this._shader && (this._shader.destroy(), (this._shader = null)),
                t.prototype.destroy.call(this);
            }),
            (e.prototype.getAttributeBuffer = function (t) {
              var e = Lt(Math.ceil(t / 8)),
                r = Ut(e),
                i = 8 * e;
              this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
              var n = this._aBuffers[i];
              return (
                n || (this._aBuffers[i] = n = new Ui(i * this.vertexSize * 4)),
                n
              );
            }),
            (e.prototype.getIndexBuffer = function (t) {
              var e = Lt(Math.ceil(t / 12)),
                r = Ut(e),
                i = 12 * e;
              this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
              var n = this._iBuffers[r];
              return n || (this._iBuffers[r] = n = new Uint16Array(i)), n;
            }),
            (e.prototype.packInterleavedGeometry = function (t, e, r, i, n) {
              for (
                var o = e.uint32View,
                  s = e.float32View,
                  a = i / this.vertexSize,
                  h = t.uvs,
                  u = t.indices,
                  l = t.vertexData,
                  c = t._texture.baseTexture._batchLocation,
                  d = Math.min(t.worldAlpha, 1),
                  f =
                    d < 1 && t._texture.baseTexture.alphaMode
                      ? Ct(t._tintRGB, d)
                      : t._tintRGB + ((255 * d) << 24),
                  p = 0;
                p < l.length;
                p += 2
              )
                (s[i++] = l[p]),
                  (s[i++] = l[p + 1]),
                  (s[i++] = h[p]),
                  (s[i++] = h[p + 1]),
                  (o[i++] = f),
                  (s[i++] = c);
              for (p = 0; p < u.length; p++) r[n++] = a + u[p];
            }),
            (e._drawCallPool = []),
            (e._textureArrayPool = []),
            e
          );
        })(wr),
        Gi = (function () {
          function t(t, e) {
            if (
              ((this.vertexSrc = t),
              (this.fragTemplate = e),
              (this.programCache = {}),
              (this.defaultGroupCache = {}),
              e.indexOf("%count%") < 0)
            )
              throw new Error('Fragment template must contain "%count%".');
            if (e.indexOf("%forloop%") < 0)
              throw new Error('Fragment template must contain "%forloop%".');
          }
          return (
            (t.prototype.generateShader = function (t) {
              if (!this.programCache[t]) {
                for (var e = new Int32Array(t), r = 0; r < t; r++) e[r] = r;
                this.defaultGroupCache[t] = Ar.from({ uSamplers: e }, !0);
                var i = this.fragTemplate;
                (i = (i = i.replace(/%count%/gi, "" + t)).replace(
                  /%forloop%/gi,
                  this.generateSampleSrc(t)
                )),
                  (this.programCache[t] = new hi(this.vertexSrc, i));
              }
              var n = {
                tint: new Float32Array([1, 1, 1, 1]),
                translationMatrix: new ae(),
                default: this.defaultGroupCache[t],
              };
              return new ui(this.programCache[t], n);
            }),
            (t.prototype.generateSampleSrc = function (t) {
              var e = "";
              (e += "\n"), (e += "\n");
              for (var r = 0; r < t; r++)
                r > 0 && (e += "\nelse "),
                  r < t - 1 && (e += "if(vTextureId < " + r + ".5)"),
                  (e += "\n{"),
                  (e +=
                    "\n\tcolor = texture2D(uSamplers[" +
                    r +
                    "], vTextureCoord);"),
                  (e += "\n}");
              return (e += "\n") + "\n";
            }),
            t
          );
        })(),
        Xi = (function (t) {
          function e(e) {
            void 0 === e && (e = !1);
            var r = t.call(this) || this;
            return (
              (r._buffer = new pr(null, e, !1)),
              (r._indexBuffer = new pr(null, e, !0)),
              r
                .addAttribute("aVertexPosition", r._buffer, 2, !1, at.FLOAT)
                .addAttribute("aTextureCoord", r._buffer, 2, !1, at.FLOAT)
                .addAttribute("aColor", r._buffer, 4, !0, at.UNSIGNED_BYTE)
                .addAttribute("aTextureId", r._buffer, 1, !0, at.FLOAT)
                .addIndex(r._indexBuffer),
              r
            );
          }
          return ke(e, t), e;
        })(Tr),
        ki =
          "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
        Hi =
          "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
        ji = (function () {
          function t() {}
          return (
            (t.create = function (t) {
              var e = Object.assign(
                  {
                    vertex: ki,
                    fragment: Hi,
                    geometryClass: Xi,
                    vertexSize: 6,
                  },
                  t
                ),
                r = e.vertex,
                i = e.fragment,
                n = e.vertexSize,
                o = e.geometryClass;
              return (function (t) {
                function e(e) {
                  var s = t.call(this, e) || this;
                  return (
                    (s.shaderGenerator = new Gi(r, i)),
                    (s.geometryClass = o),
                    (s.vertexSize = n),
                    s
                  );
                }
                return ke(e, t), e;
              })(Bi);
            }),
            Object.defineProperty(t, "defaultVertexSrc", {
              get: function () {
                return ki;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t, "defaultFragmentTemplate", {
              get: function () {
                return Hi;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })().create(),
        Yi = {},
        Vi = function (t) {
          Object.defineProperty(Yi, t, {
            get: function () {
              return (
                jt("6.0.0", "PIXI.systems." + t + " has moved to PIXI." + t),
                er[t]
              );
            },
          });
        };
      for (var zi in er) Vi(zi);
      var Wi = {},
        qi = function (t) {
          Object.defineProperty(Wi, t, {
            get: function () {
              return (
                jt("6.0.0", "PIXI.resources." + t + " has moved to PIXI." + t),
                Mi[t]
              );
            },
          });
        };
      for (var zi in Mi) qi(zi);
      var Ki = (function () {
          function t(e) {
            var r = this;
            (this.stage = new be()),
              (e = Object.assign({ forceCanvas: !1 }, e)),
              (this.renderer = (function (t) {
                return Ci.create(t);
              })(e)),
              t._plugins.forEach(function (t) {
                t.init.call(r, e);
              });
          }
          return (
            (t.registerPlugin = function (e) {
              t._plugins.push(e);
            }),
            (t.prototype.render = function () {
              this.renderer.render(this.stage);
            }),
            Object.defineProperty(t.prototype, "view", {
              get: function () {
                return this.renderer.view;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "screen", {
              get: function () {
                return this.renderer.screen;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.destroy = function (e, r) {
              var i = this,
                n = t._plugins.slice(0);
              n.reverse(),
                n.forEach(function (t) {
                  t.destroy.call(i);
                }),
                this.stage.destroy(r),
                (this.stage = null),
                this.renderer.destroy(e),
                (this.renderer = null);
            }),
            (t._plugins = []),
            t
          );
        })(),
        Zi = (function () {
          function t() {}
          return (
            (t.init = function (t) {
              var e = this;
              Object.defineProperty(this, "resizeTo", {
                set: function (t) {
                  self.removeEventListener("resize", this.queueResize),
                    (this._resizeTo = t),
                    t &&
                      (self.addEventListener("resize", this.queueResize),
                      this.resize());
                },
                get: function () {
                  return this._resizeTo;
                },
              }),
                (this.queueResize = function () {
                  e._resizeTo &&
                    (e.cancelResize(),
                    (e._resizeId = requestAnimationFrame(function () {
                      return e.resize();
                    })));
                }),
                (this.cancelResize = function () {
                  e._resizeId &&
                    (cancelAnimationFrame(e._resizeId), (e._resizeId = null));
                }),
                (this.resize = function () {
                  if (e._resizeTo) {
                    var t, r;
                    if ((e.cancelResize(), e._resizeTo === self))
                      (t = self.innerWidth), (r = self.innerHeight);
                    else {
                      var i = e._resizeTo;
                      (t = i.clientWidth), (r = i.clientHeight);
                    }
                    e.renderer.resize(t, r);
                  }
                }),
                (this._resizeId = null),
                (this._resizeTo = null),
                (this.resizeTo = t.resizeTo || null);
            }),
            (t.destroy = function () {
              self.removeEventListener("resize", this.queueResize),
                this.cancelResize(),
                (this.cancelResize = null),
                (this.queueResize = null),
                (this.resizeTo = null),
                (this.resize = null);
            }),
            t
          );
        })();
      Ki.registerPlugin(Zi);
      var Ji = new te(),
        Qi = (function () {
          function t(t) {
            this.renderer = t;
          }
          return (
            (t.prototype.image = function (t, e, r) {
              var i = new Image();
              return (i.src = this.base64(t, e, r)), i;
            }),
            (t.prototype.base64 = function (t, e, r) {
              return this.canvas(t).toDataURL(e, r);
            }),
            (t.prototype.canvas = function (e) {
              var r,
                i,
                n,
                o = this.renderer,
                s = !1,
                a = !1;
              e &&
                (e instanceof lr
                  ? (n = e)
                  : ((n = this.renderer.generateTexture(e)), (a = !0))),
                n
                  ? ((r = n.baseTexture.resolution),
                    (i = n.frame),
                    (s = !1),
                    o.renderTexture.bind(n))
                  : ((r = this.renderer.resolution),
                    (s = !0),
                    ((i = Ji).width = this.renderer.width),
                    (i.height = this.renderer.height),
                    o.renderTexture.bind(null));
              var h = Math.floor(i.width * r + 1e-4),
                u = Math.floor(i.height * r + 1e-4),
                l = new qt(h, u, 1),
                c = new Uint8Array(4 * h * u),
                d = o.gl;
              d.readPixels(i.x * r, i.y * r, h, u, d.RGBA, d.UNSIGNED_BYTE, c);
              var f = l.context.getImageData(0, 0, h, u);
              if (
                (t.arrayPostDivide(c, f.data),
                l.context.putImageData(f, 0, 0),
                s)
              ) {
                var p = new qt(l.width, l.height, 1);
                p.context.scale(1, -1),
                  p.context.drawImage(l.canvas, 0, -u),
                  l.destroy(),
                  (l = p);
              }
              return a && n.destroy(!0), l.canvas;
            }),
            (t.prototype.pixels = function (e) {
              var r,
                i,
                n,
                o = this.renderer,
                s = !1;
              e &&
                (e instanceof lr
                  ? (n = e)
                  : ((n = this.renderer.generateTexture(e)), (s = !0))),
                n
                  ? ((r = n.baseTexture.resolution),
                    (i = n.frame),
                    o.renderTexture.bind(n))
                  : ((r = o.resolution),
                    ((i = Ji).width = o.width),
                    (i.height = o.height),
                    o.renderTexture.bind(null));
              var a = i.width * r,
                h = i.height * r,
                u = new Uint8Array(4 * a * h),
                l = o.gl;
              return (
                l.readPixels(
                  i.x * r,
                  i.y * r,
                  a,
                  h,
                  l.RGBA,
                  l.UNSIGNED_BYTE,
                  u
                ),
                s && n.destroy(!0),
                t.arrayPostDivide(u, u),
                u
              );
            }),
            (t.prototype.destroy = function () {
              this.renderer = null;
            }),
            (t.arrayPostDivide = function (t, e) {
              for (var r = 0; r < t.length; r += 4) {
                var i = (e[r + 3] = t[r + 3]);
                0 !== i
                  ? ((e[r] = Math.round(Math.min((255 * t[r]) / i, 255))),
                    (e[r + 1] = Math.round(
                      Math.min((255 * t[r + 1]) / i, 255)
                    )),
                    (e[r + 2] = Math.round(
                      Math.min((255 * t[r + 2]) / i, 255)
                    )))
                  : ((e[r] = t[r]),
                    (e[r + 1] = t[r + 1]),
                    (e[r + 2] = t[r + 2]));
              }
            }),
            t
          );
        })(),
        $i = r(571),
        tn = r.n($i),
        en = r(940),
        rn = r.n(en);
      function nn() {}
      function on(t, e, r, i) {
        var n = 0,
          o = t.length;
        !(function s(a) {
          a || n === o
            ? r && r(a)
            : i
            ? setTimeout(function () {
                e(t[n++], s);
              }, 1)
            : e(t[n++], s);
        })();
      }
      function sn(t) {
        return function () {
          if (null === t) throw new Error("Callback was already called.");
          var e = t;
          (t = null), e.apply(this, arguments);
        };
      }
      var an = {};
      function hn(t, e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function un(t, e, r) {
        return e && hn(t.prototype, e), r && hn(t, r), t;
      }
      var ln = !(
          !window.XDomainRequest || "withCredentials" in new XMLHttpRequest()
        ),
        cn = null;
      function dn() {}
      var fn = (function () {
        function t(e, r, i) {
          if ("string" != typeof e || "string" != typeof r)
            throw new Error(
              "Both name and url are required for constructing a resource."
            );
          (i = i || {}),
            (this._flags = 0),
            this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")),
            (this.name = e),
            (this.url = r),
            (this.extension = this._getExtension()),
            (this.data = null),
            (this.crossOrigin =
              !0 === i.crossOrigin ? "anonymous" : i.crossOrigin),
            (this.timeout = i.timeout || 0),
            (this.loadType = i.loadType || this._determineLoadType()),
            (this.xhrType = i.xhrType),
            (this.metadata = i.metadata || {}),
            (this.error = null),
            (this.xhr = null),
            (this.children = []),
            (this.type = t.TYPE.UNKNOWN),
            (this.progressChunk = 0),
            (this._dequeue = dn),
            (this._onLoadBinding = null),
            (this._elementTimer = 0),
            (this._boundComplete = this.complete.bind(this)),
            (this._boundOnError = this._onError.bind(this)),
            (this._boundOnProgress = this._onProgress.bind(this)),
            (this._boundOnTimeout = this._onTimeout.bind(this)),
            (this._boundXhrOnError = this._xhrOnError.bind(this)),
            (this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this)),
            (this._boundXhrOnAbort = this._xhrOnAbort.bind(this)),
            (this._boundXhrOnLoad = this._xhrOnLoad.bind(this)),
            (this.onStart = new (rn())()),
            (this.onProgress = new (rn())()),
            (this.onComplete = new (rn())()),
            (this.onAfterMiddleware = new (rn())());
        }
        (t.setExtensionLoadType = function (e, r) {
          pn(t._loadTypeMap, e, r);
        }),
          (t.setExtensionXhrType = function (e, r) {
            pn(t._xhrTypeMap, e, r);
          });
        var e = t.prototype;
        return (
          (e.complete = function () {
            this._clearEvents(), this._finish();
          }),
          (e.abort = function (e) {
            if (!this.error) {
              if (((this.error = new Error(e)), this._clearEvents(), this.xhr))
                this.xhr.abort();
              else if (this.xdr) this.xdr.abort();
              else if (this.data)
                if (this.data.src) this.data.src = t.EMPTY_GIF;
                else
                  for (; this.data.firstChild; )
                    this.data.removeChild(this.data.firstChild);
              this._finish();
            }
          }),
          (e.load = function (e) {
            var r = this;
            if (!this.isLoading)
              if (this.isComplete)
                e &&
                  setTimeout(function () {
                    return e(r);
                  }, 1);
              else
                switch (
                  (e && this.onComplete.once(e),
                  this._setFlag(t.STATUS_FLAGS.LOADING, !0),
                  this.onStart.dispatch(this),
                  (!1 !== this.crossOrigin &&
                    "string" == typeof this.crossOrigin) ||
                    (this.crossOrigin = this._determineCrossOrigin(this.url)),
                  this.loadType)
                ) {
                  case t.LOAD_TYPE.IMAGE:
                    (this.type = t.TYPE.IMAGE), this._loadElement("image");
                    break;
                  case t.LOAD_TYPE.AUDIO:
                    (this.type = t.TYPE.AUDIO),
                      this._loadSourceElement("audio");
                    break;
                  case t.LOAD_TYPE.VIDEO:
                    (this.type = t.TYPE.VIDEO),
                      this._loadSourceElement("video");
                    break;
                  case t.LOAD_TYPE.XHR:
                  default:
                    ln && this.crossOrigin ? this._loadXdr() : this._loadXhr();
                }
          }),
          (e._hasFlag = function (t) {
            return 0 != (this._flags & t);
          }),
          (e._setFlag = function (t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t;
          }),
          (e._clearEvents = function () {
            clearTimeout(this._elementTimer),
              this.data &&
                this.data.removeEventListener &&
                (this.data.removeEventListener("error", this._boundOnError, !1),
                this.data.removeEventListener("load", this._boundComplete, !1),
                this.data.removeEventListener(
                  "progress",
                  this._boundOnProgress,
                  !1
                ),
                this.data.removeEventListener(
                  "canplaythrough",
                  this._boundComplete,
                  !1
                )),
              this.xhr &&
                (this.xhr.removeEventListener
                  ? (this.xhr.removeEventListener(
                      "error",
                      this._boundXhrOnError,
                      !1
                    ),
                    this.xhr.removeEventListener(
                      "timeout",
                      this._boundXhrOnTimeout,
                      !1
                    ),
                    this.xhr.removeEventListener(
                      "abort",
                      this._boundXhrOnAbort,
                      !1
                    ),
                    this.xhr.removeEventListener(
                      "progress",
                      this._boundOnProgress,
                      !1
                    ),
                    this.xhr.removeEventListener(
                      "load",
                      this._boundXhrOnLoad,
                      !1
                    ))
                  : ((this.xhr.onerror = null),
                    (this.xhr.ontimeout = null),
                    (this.xhr.onprogress = null),
                    (this.xhr.onload = null)));
          }),
          (e._finish = function () {
            if (this.isComplete)
              throw new Error(
                "Complete called again for an already completed resource."
              );
            this._setFlag(t.STATUS_FLAGS.COMPLETE, !0),
              this._setFlag(t.STATUS_FLAGS.LOADING, !1),
              this.onComplete.dispatch(this);
          }),
          (e._loadElement = function (t) {
            this.metadata.loadElement
              ? (this.data = this.metadata.loadElement)
              : "image" === t && void 0 !== window.Image
              ? (this.data = new Image())
              : (this.data = document.createElement(t)),
              this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
              this.metadata.skipSource || (this.data.src = this.url),
              this.data.addEventListener("error", this._boundOnError, !1),
              this.data.addEventListener("load", this._boundComplete, !1),
              this.data.addEventListener("progress", this._boundOnProgress, !1),
              this.timeout &&
                (this._elementTimer = setTimeout(
                  this._boundOnTimeout,
                  this.timeout
                ));
          }),
          (e._loadSourceElement = function (t) {
            if (
              (this.metadata.loadElement
                ? (this.data = this.metadata.loadElement)
                : "audio" === t && void 0 !== window.Audio
                ? (this.data = new Audio())
                : (this.data = document.createElement(t)),
              null !== this.data)
            ) {
              if (
                (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
                !this.metadata.skipSource)
              )
                if (navigator.isCocoonJS)
                  this.data.src = Array.isArray(this.url)
                    ? this.url[0]
                    : this.url;
                else if (Array.isArray(this.url))
                  for (
                    var e = this.metadata.mimeType, r = 0;
                    r < this.url.length;
                    ++r
                  )
                    this.data.appendChild(
                      this._createSource(
                        t,
                        this.url[r],
                        Array.isArray(e) ? e[r] : e
                      )
                    );
                else {
                  var i = this.metadata.mimeType;
                  this.data.appendChild(
                    this._createSource(t, this.url, Array.isArray(i) ? i[0] : i)
                  );
                }
              this.data.addEventListener("error", this._boundOnError, !1),
                this.data.addEventListener("load", this._boundComplete, !1),
                this.data.addEventListener(
                  "progress",
                  this._boundOnProgress,
                  !1
                ),
                this.data.addEventListener(
                  "canplaythrough",
                  this._boundComplete,
                  !1
                ),
                this.data.load(),
                this.timeout &&
                  (this._elementTimer = setTimeout(
                    this._boundOnTimeout,
                    this.timeout
                  ));
            } else this.abort("Unsupported element: " + t);
          }),
          (e._loadXhr = function () {
            "string" != typeof this.xhrType &&
              (this.xhrType = this._determineXhrType());
            var e = (this.xhr = new XMLHttpRequest());
            e.open("GET", this.url, !0),
              (e.timeout = this.timeout),
              this.xhrType === t.XHR_RESPONSE_TYPE.JSON ||
              this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT
                ? (e.responseType = t.XHR_RESPONSE_TYPE.TEXT)
                : (e.responseType = this.xhrType),
              e.addEventListener("error", this._boundXhrOnError, !1),
              e.addEventListener("timeout", this._boundXhrOnTimeout, !1),
              e.addEventListener("abort", this._boundXhrOnAbort, !1),
              e.addEventListener("progress", this._boundOnProgress, !1),
              e.addEventListener("load", this._boundXhrOnLoad, !1),
              e.send();
          }),
          (e._loadXdr = function () {
            "string" != typeof this.xhrType &&
              (this.xhrType = this._determineXhrType());
            var t = (this.xhr = new XDomainRequest());
            (t.timeout = this.timeout || 5e3),
              (t.onerror = this._boundXhrOnError),
              (t.ontimeout = this._boundXhrOnTimeout),
              (t.onprogress = this._boundOnProgress),
              (t.onload = this._boundXhrOnLoad),
              t.open("GET", this.url, !0),
              setTimeout(function () {
                return t.send();
              }, 1);
          }),
          (e._createSource = function (t, e, r) {
            r || (r = t + "/" + this._getExtension(e));
            var i = document.createElement("source");
            return (i.src = e), (i.type = r), i;
          }),
          (e._onError = function (t) {
            this.abort("Failed to load element using: " + t.target.nodeName);
          }),
          (e._onProgress = function (t) {
            t &&
              t.lengthComputable &&
              this.onProgress.dispatch(this, t.loaded / t.total);
          }),
          (e._onTimeout = function () {
            this.abort("Load timed out.");
          }),
          (e._xhrOnError = function () {
            var t = this.xhr;
            this.abort(
              _n(t) +
                " Request failed. Status: " +
                t.status +
                ', text: "' +
                t.statusText +
                '"'
            );
          }),
          (e._xhrOnTimeout = function () {
            var t = this.xhr;
            this.abort(_n(t) + " Request timed out.");
          }),
          (e._xhrOnAbort = function () {
            var t = this.xhr;
            this.abort(_n(t) + " Request was aborted by the user.");
          }),
          (e._xhrOnLoad = function () {
            var e = this.xhr,
              r = "",
              i = void 0 === e.status ? 200 : e.status;
            if (
              (("" !== e.responseType &&
                "text" !== e.responseType &&
                void 0 !== e.responseType) ||
                (r = e.responseText),
              0 === i &&
              (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER)
                ? (i = 200)
                : 1223 === i && (i = 204),
              2 == ((i / 100) | 0))
            ) {
              if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT)
                (this.data = r), (this.type = t.TYPE.TEXT);
              else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON)
                try {
                  (this.data = JSON.parse(r)), (this.type = t.TYPE.JSON);
                } catch (t) {
                  return void this.abort(
                    "Error trying to parse loaded json: " + t
                  );
                }
              else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT)
                try {
                  if (window.DOMParser) {
                    var n = new DOMParser();
                    this.data = n.parseFromString(r, "text/xml");
                  } else {
                    var o = document.createElement("div");
                    (o.innerHTML = r), (this.data = o);
                  }
                  this.type = t.TYPE.XML;
                } catch (t) {
                  return void this.abort(
                    "Error trying to parse loaded xml: " + t
                  );
                }
              else this.data = e.response || r;
              this.complete();
            } else
              this.abort(
                "[" + e.status + "] " + e.statusText + ": " + e.responseURL
              );
          }),
          (e._determineCrossOrigin = function (t, e) {
            if (0 === t.indexOf("data:")) return "";
            if (window.origin !== window.location.origin) return "anonymous";
            (e = e || window.location),
              cn || (cn = document.createElement("a")),
              (cn.href = t);
            var r =
                (!(t = tn()(cn.href, { strictMode: !0 })).port &&
                  "" === e.port) ||
                t.port === e.port,
              i = t.protocol ? t.protocol + ":" : "";
            return t.host === e.hostname && r && i === e.protocol
              ? ""
              : "anonymous";
          }),
          (e._determineXhrType = function () {
            return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT;
          }),
          (e._determineLoadType = function () {
            return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR;
          }),
          (e._getExtension = function () {
            var t = this.url,
              e = "";
            if (this.isDataUrl) {
              var r = t.indexOf("/");
              e = t.substring(r + 1, t.indexOf(";", r));
            } else {
              var i = t.indexOf("?"),
                n = t.indexOf("#"),
                o = Math.min(i > -1 ? i : t.length, n > -1 ? n : t.length);
              e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1);
            }
            return e.toLowerCase();
          }),
          (e._getMimeFromXhrType = function (e) {
            switch (e) {
              case t.XHR_RESPONSE_TYPE.BUFFER:
                return "application/octet-binary";
              case t.XHR_RESPONSE_TYPE.BLOB:
                return "application/blob";
              case t.XHR_RESPONSE_TYPE.DOCUMENT:
                return "application/xml";
              case t.XHR_RESPONSE_TYPE.JSON:
                return "application/json";
              case t.XHR_RESPONSE_TYPE.DEFAULT:
              case t.XHR_RESPONSE_TYPE.TEXT:
              default:
                return "text/plain";
            }
          }),
          un(t, [
            {
              key: "isDataUrl",
              get: function () {
                return this._hasFlag(t.STATUS_FLAGS.DATA_URL);
              },
            },
            {
              key: "isComplete",
              get: function () {
                return this._hasFlag(t.STATUS_FLAGS.COMPLETE);
              },
            },
            {
              key: "isLoading",
              get: function () {
                return this._hasFlag(t.STATUS_FLAGS.LOADING);
              },
            },
          ]),
          t
        );
      })();
      function pn(t, e, r) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r);
      }
      function _n(t) {
        return t.toString().replace("object ", "");
      }
      (fn.STATUS_FLAGS = { NONE: 0, DATA_URL: 1, COMPLETE: 2, LOADING: 4 }),
        (fn.TYPE = {
          UNKNOWN: 0,
          JSON: 1,
          XML: 2,
          IMAGE: 3,
          AUDIO: 4,
          VIDEO: 5,
          TEXT: 6,
        }),
        (fn.LOAD_TYPE = { XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4 }),
        (fn.XHR_RESPONSE_TYPE = {
          DEFAULT: "text",
          BUFFER: "arraybuffer",
          BLOB: "blob",
          DOCUMENT: "document",
          JSON: "json",
          TEXT: "text",
        }),
        (fn._loadTypeMap = {
          gif: fn.LOAD_TYPE.IMAGE,
          png: fn.LOAD_TYPE.IMAGE,
          bmp: fn.LOAD_TYPE.IMAGE,
          jpg: fn.LOAD_TYPE.IMAGE,
          jpeg: fn.LOAD_TYPE.IMAGE,
          tif: fn.LOAD_TYPE.IMAGE,
          tiff: fn.LOAD_TYPE.IMAGE,
          webp: fn.LOAD_TYPE.IMAGE,
          tga: fn.LOAD_TYPE.IMAGE,
          svg: fn.LOAD_TYPE.IMAGE,
          "svg+xml": fn.LOAD_TYPE.IMAGE,
          mp3: fn.LOAD_TYPE.AUDIO,
          ogg: fn.LOAD_TYPE.AUDIO,
          wav: fn.LOAD_TYPE.AUDIO,
          mp4: fn.LOAD_TYPE.VIDEO,
          webm: fn.LOAD_TYPE.VIDEO,
        }),
        (fn._xhrTypeMap = {
          xhtml: fn.XHR_RESPONSE_TYPE.DOCUMENT,
          html: fn.XHR_RESPONSE_TYPE.DOCUMENT,
          htm: fn.XHR_RESPONSE_TYPE.DOCUMENT,
          xml: fn.XHR_RESPONSE_TYPE.DOCUMENT,
          tmx: fn.XHR_RESPONSE_TYPE.DOCUMENT,
          svg: fn.XHR_RESPONSE_TYPE.DOCUMENT,
          tsx: fn.XHR_RESPONSE_TYPE.DOCUMENT,
          gif: fn.XHR_RESPONSE_TYPE.BLOB,
          png: fn.XHR_RESPONSE_TYPE.BLOB,
          bmp: fn.XHR_RESPONSE_TYPE.BLOB,
          jpg: fn.XHR_RESPONSE_TYPE.BLOB,
          jpeg: fn.XHR_RESPONSE_TYPE.BLOB,
          tif: fn.XHR_RESPONSE_TYPE.BLOB,
          tiff: fn.XHR_RESPONSE_TYPE.BLOB,
          webp: fn.XHR_RESPONSE_TYPE.BLOB,
          tga: fn.XHR_RESPONSE_TYPE.BLOB,
          json: fn.XHR_RESPONSE_TYPE.JSON,
          text: fn.XHR_RESPONSE_TYPE.TEXT,
          txt: fn.XHR_RESPONSE_TYPE.TEXT,
          ttf: fn.XHR_RESPONSE_TYPE.BUFFER,
          otf: fn.XHR_RESPONSE_TYPE.BUFFER,
        }),
        (fn.EMPTY_GIF =
          "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
      var mn = window.URL || window.webkitURL,
        vn = {
          caching: function (t, e) {
            var r = this;
            an[t.url]
              ? ((t.data = an[t.url]), t.complete())
              : t.onComplete.once(function () {
                  return (an[r.url] = r.data);
                }),
              e();
          },
          parsing: function (t, e) {
            if (t.data) {
              if (t.xhr && t.xhrType === fn.XHR_RESPONSE_TYPE.BLOB)
                if (window.Blob && "string" != typeof t.data) {
                  if (0 === t.data.type.indexOf("image")) {
                    var r = mn.createObjectURL(t.data);
                    return (
                      (t.blob = t.data),
                      (t.data = new Image()),
                      (t.data.src = r),
                      (t.type = fn.TYPE.IMAGE),
                      void (t.data.onload = function () {
                        mn.revokeObjectURL(r), (t.data.onload = null), e();
                      })
                    );
                  }
                } else {
                  var i = t.xhr.getResponseHeader("content-type");
                  if (i && 0 === i.indexOf("image"))
                    return (
                      (t.data = new Image()),
                      (t.data.src =
                        "data:" +
                        i +
                        ";base64," +
                        (function (t) {
                          for (var e = "", r = 0; r < t.length; ) {
                            for (
                              var i = [0, 0, 0], n = [0, 0, 0, 0], o = 0;
                              o < i.length;
                              ++o
                            )
                              r < t.length
                                ? (i[o] = 255 & t.charCodeAt(r++))
                                : (i[o] = 0);
                            switch (
                              ((n[0] = i[0] >> 2),
                              (n[1] = ((3 & i[0]) << 4) | (i[1] >> 4)),
                              (n[2] = ((15 & i[1]) << 2) | (i[2] >> 6)),
                              (n[3] = 63 & i[2]),
                              r - (t.length - 1))
                            ) {
                              case 2:
                                (n[3] = 64), (n[2] = 64);
                                break;
                              case 1:
                                n[3] = 64;
                            }
                            for (var s = 0; s < n.length; ++s)
                              e +=
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                                  n[s]
                                );
                          }
                          return e;
                        })(t.xhr.responseText)),
                      (t.type = fn.TYPE.IMAGE),
                      void (t.data.onload = function () {
                        (t.data.onload = null), e();
                      })
                    );
                }
              e();
            } else e();
          },
        },
        yn = /(#[\w-]+)?$/,
        gn = (function () {
          function t(e, r) {
            var i = this;
            void 0 === e && (e = ""),
              void 0 === r && (r = 10),
              (this.baseUrl = e),
              (this.progress = 0),
              (this.loading = !1),
              (this.defaultQueryString = ""),
              (this._beforeMiddleware = []),
              (this._afterMiddleware = []),
              (this._resourcesParsing = []),
              (this._boundLoadResource = function (t, e) {
                return i._loadResource(t, e);
              }),
              (this._queue = (function (t, e) {
                if (null == e) e = 1;
                else if (0 === e)
                  throw new Error("Concurrency must not be zero");
                var r = 0,
                  i = {
                    _tasks: [],
                    concurrency: e,
                    saturated: nn,
                    unsaturated: nn,
                    buffer: e / 4,
                    empty: nn,
                    drain: nn,
                    error: nn,
                    started: !1,
                    paused: !1,
                    push: function (t, e) {
                      n(t, !1, e);
                    },
                    kill: function () {
                      (r = 0),
                        (i.drain = nn),
                        (i.started = !1),
                        (i._tasks = []);
                    },
                    unshift: function (t, e) {
                      n(t, !0, e);
                    },
                    process: function () {
                      for (
                        ;
                        !i.paused && r < i.concurrency && i._tasks.length;

                      ) {
                        var e = i._tasks.shift();
                        0 === i._tasks.length && i.empty(),
                          (r += 1) === i.concurrency && i.saturated(),
                          t(e.data, sn(o(e)));
                      }
                    },
                    length: function () {
                      return i._tasks.length;
                    },
                    running: function () {
                      return r;
                    },
                    idle: function () {
                      return i._tasks.length + r === 0;
                    },
                    pause: function () {
                      !0 !== i.paused && (i.paused = !0);
                    },
                    resume: function () {
                      if (!1 !== i.paused) {
                        i.paused = !1;
                        for (var t = 1; t <= i.concurrency; t++) i.process();
                      }
                    },
                  };
                function n(t, e, r) {
                  if (null != r && "function" != typeof r)
                    throw new Error("task callback must be a function");
                  if (((i.started = !0), null == t && i.idle()))
                    setTimeout(function () {
                      return i.drain();
                    }, 1);
                  else {
                    var n = {
                      data: t,
                      callback: "function" == typeof r ? r : nn,
                    };
                    e ? i._tasks.unshift(n) : i._tasks.push(n),
                      setTimeout(function () {
                        return i.process();
                      }, 1);
                  }
                }
                function o(t) {
                  return function () {
                    (r -= 1),
                      t.callback.apply(t, arguments),
                      null != arguments[0] && i.error(arguments[0], t.data),
                      r <= i.concurrency - i.buffer && i.unsaturated(),
                      i.idle() && i.drain(),
                      i.process();
                  };
                }
                return i;
              })(this._boundLoadResource, r)),
              this._queue.pause(),
              (this.resources = {}),
              (this.onProgress = new (rn())()),
              (this.onError = new (rn())()),
              (this.onLoad = new (rn())()),
              (this.onStart = new (rn())()),
              (this.onComplete = new (rn())());
            for (var n = 0; n < t._defaultBeforeMiddleware.length; ++n)
              this.pre(t._defaultBeforeMiddleware[n]);
            for (var o = 0; o < t._defaultAfterMiddleware.length; ++o)
              this.use(t._defaultAfterMiddleware[o]);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r, i) {
              if (Array.isArray(t)) {
                for (var n = 0; n < t.length; ++n) this.add(t[n]);
                return this;
              }
              if (
                ("object" == typeof t &&
                  ((i = e || t.callback || t.onComplete),
                  (r = t),
                  (e = t.url),
                  (t = t.name || t.key || t.url)),
                "string" != typeof e && ((i = r), (r = e), (e = t)),
                "string" != typeof e)
              )
                throw new Error("No url passed to add resource to loader.");
              if (
                ("function" == typeof r && ((i = r), (r = null)),
                this.loading && (!r || !r.parentResource))
              )
                throw new Error(
                  "Cannot add resources while the loader is running."
                );
              if (this.resources[t])
                throw new Error('Resource named "' + t + '" already exists.');
              if (
                ((e = this._prepareUrl(e)),
                (this.resources[t] = new fn(t, e, r)),
                "function" == typeof i &&
                  this.resources[t].onAfterMiddleware.once(i),
                this.loading)
              ) {
                for (
                  var o = r.parentResource, s = [], a = 0;
                  a < o.children.length;
                  ++a
                )
                  o.children[a].isComplete || s.push(o.children[a]);
                var h = (o.progressChunk * (s.length + 1)) / (s.length + 2);
                o.children.push(this.resources[t]), (o.progressChunk = h);
                for (var u = 0; u < s.length; ++u) s[u].progressChunk = h;
                this.resources[t].progressChunk = h;
              }
              return this._queue.push(this.resources[t]), this;
            }),
            (e.pre = function (t) {
              return this._beforeMiddleware.push(t), this;
            }),
            (e.use = function (t) {
              return this._afterMiddleware.push(t), this;
            }),
            (e.reset = function () {
              for (var t in ((this.progress = 0),
              (this.loading = !1),
              this._queue.kill(),
              this._queue.pause(),
              this.resources)) {
                var e = this.resources[t];
                e._onLoadBinding && e._onLoadBinding.detach(),
                  e.isLoading && e.abort();
              }
              return (this.resources = {}), this;
            }),
            (e.load = function (t) {
              if (
                ("function" == typeof t && this.onComplete.once(t),
                this.loading)
              )
                return this;
              if (this._queue.idle()) this._onStart(), this._onComplete();
              else {
                for (
                  var e = 100 / this._queue._tasks.length, r = 0;
                  r < this._queue._tasks.length;
                  ++r
                )
                  this._queue._tasks[r].data.progressChunk = e;
                this._onStart(), this._queue.resume();
              }
              return this;
            }),
            (e._prepareUrl = function (t) {
              var e,
                r = tn()(t, { strictMode: !0 });
              if (
                ((e =
                  r.protocol || !r.path || 0 === t.indexOf("//")
                    ? t
                    : this.baseUrl.length &&
                      this.baseUrl.lastIndexOf("/") !==
                        this.baseUrl.length - 1 &&
                      "/" !== t.charAt(0)
                    ? this.baseUrl + "/" + t
                    : this.baseUrl + t),
                this.defaultQueryString)
              ) {
                var i = yn.exec(e)[0];
                -1 !== (e = e.substr(0, e.length - i.length)).indexOf("?")
                  ? (e += "&" + this.defaultQueryString)
                  : (e += "?" + this.defaultQueryString),
                  (e += i);
              }
              return e;
            }),
            (e._loadResource = function (t, e) {
              var r = this;
              (t._dequeue = e),
                on(
                  this._beforeMiddleware,
                  function (e, i) {
                    e.call(r, t, function () {
                      i(t.isComplete ? {} : null);
                    });
                  },
                  function () {
                    t.isComplete
                      ? r._onLoad(t)
                      : ((t._onLoadBinding = t.onComplete.once(r._onLoad, r)),
                        t.load());
                  },
                  !0
                );
            }),
            (e._onStart = function () {
              (this.progress = 0),
                (this.loading = !0),
                this.onStart.dispatch(this);
            }),
            (e._onComplete = function () {
              (this.progress = 100),
                (this.loading = !1),
                this.onComplete.dispatch(this, this.resources);
            }),
            (e._onLoad = function (t) {
              var e = this;
              (t._onLoadBinding = null),
                this._resourcesParsing.push(t),
                t._dequeue(),
                on(
                  this._afterMiddleware,
                  function (r, i) {
                    r.call(e, t, i);
                  },
                  function () {
                    t.onAfterMiddleware.dispatch(t),
                      (e.progress = Math.min(
                        100,
                        e.progress + t.progressChunk
                      )),
                      e.onProgress.dispatch(e, t),
                      t.error
                        ? e.onError.dispatch(t.error, e, t)
                        : e.onLoad.dispatch(e, t),
                      e._resourcesParsing.splice(
                        e._resourcesParsing.indexOf(t),
                        1
                      ),
                      e._queue.idle() &&
                        0 === e._resourcesParsing.length &&
                        e._onComplete();
                  },
                  !0
                );
            }),
            un(t, [
              {
                key: "concurrency",
                get: function () {
                  return this._queue.concurrency;
                },
                set: function (t) {
                  this._queue.concurrency = t;
                },
              },
            ]),
            t
          );
        })();
      (gn._defaultBeforeMiddleware = []),
        (gn._defaultAfterMiddleware = []),
        (gn.pre = function (t) {
          return gn._defaultBeforeMiddleware.push(t), gn;
        }),
        (gn.use = function (t) {
          return gn._defaultAfterMiddleware.push(t), gn;
        });
      var Tn = function (t, e) {
          return (Tn =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        xn = (function () {
          function t() {}
          return (
            (t.add = function () {
              fn.setExtensionLoadType("svg", fn.LOAD_TYPE.XHR),
                fn.setExtensionXhrType("svg", fn.XHR_RESPONSE_TYPE.TEXT);
            }),
            (t.use = function (t, e) {
              if (
                !t.data ||
                (t.type !== fn.TYPE.IMAGE && "svg" !== t.extension)
              )
                e();
              else {
                var r = t.data,
                  i = t.url,
                  n = t.name,
                  o = t.metadata;
                hr.fromLoader(r, i, n, o)
                  .then(function (r) {
                    (t.texture = r), e();
                  })
                  .catch(e);
              }
            }),
            t
          );
        })(),
        En = (function (t) {
          function e(r, i) {
            for (
              var n = t.call(this, r, i) || this, o = 0;
              o < e._plugins.length;
              ++o
            ) {
              var s = e._plugins[o],
                a = s.pre,
                h = s.use;
              a && n.pre(a), h && n.use(h);
            }
            return (n._protected = !1), n;
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              Tn(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            (e.prototype.destroy = function () {
              this._protected || this.reset();
            }),
            Object.defineProperty(e, "shared", {
              get: function () {
                var t = e._shared;
                return (
                  t || (((t = new e())._protected = !0), (e._shared = t)), t
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.registerPlugin = function (t) {
              return e._plugins.push(t), t.add && t.add(), e;
            }),
            (e._plugins = []),
            e
          );
        })(gn);
      En.registerPlugin({ use: vn.parsing }), En.registerPlugin(xn);
      var bn,
        An,
        On = (function () {
          function t() {}
          return (
            (t.init = function (t) {
              (t = Object.assign({ sharedLoader: !1 }, t)),
                (this.loader = t.sharedLoader ? En.shared : new En());
            }),
            (t.destroy = function () {
              this.loader && (this.loader.destroy(), (this.loader = null));
            }),
            t
          );
        })(),
        Sn = fn;
      !(function (t) {
        (t[(t.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
          "COMPRESSED_RGB_S3TC_DXT1_EXT"),
          (t[(t.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
            "COMPRESSED_RGBA_S3TC_DXT1_EXT"),
          (t[(t.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
            "COMPRESSED_RGBA_S3TC_DXT3_EXT"),
          (t[(t.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
            "COMPRESSED_RGBA_S3TC_DXT5_EXT"),
          (t[(t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917)] =
            "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"),
          (t[(t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918)] =
            "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"),
          (t[(t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919)] =
            "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"),
          (t[(t.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916)] =
            "COMPRESSED_SRGB_S3TC_DXT1_EXT"),
          (t[(t.COMPRESSED_R11_EAC = 37488)] = "COMPRESSED_R11_EAC"),
          (t[(t.COMPRESSED_SIGNED_R11_EAC = 37489)] =
            "COMPRESSED_SIGNED_R11_EAC"),
          (t[(t.COMPRESSED_RG11_EAC = 37490)] = "COMPRESSED_RG11_EAC"),
          (t[(t.COMPRESSED_SIGNED_RG11_EAC = 37491)] =
            "COMPRESSED_SIGNED_RG11_EAC"),
          (t[(t.COMPRESSED_RGB8_ETC2 = 37492)] = "COMPRESSED_RGB8_ETC2"),
          (t[(t.COMPRESSED_RGBA8_ETC2_EAC = 37496)] =
            "COMPRESSED_RGBA8_ETC2_EAC"),
          (t[(t.COMPRESSED_SRGB8_ETC2 = 37493)] = "COMPRESSED_SRGB8_ETC2"),
          (t[(t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
            "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"),
          (t[(t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
            "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
          (t[(t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
            "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"),
          (t[(t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840)] =
            "COMPRESSED_RGB_PVRTC_4BPPV1_IMG"),
          (t[(t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842)] =
            "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"),
          (t[(t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841)] =
            "COMPRESSED_RGB_PVRTC_2BPPV1_IMG"),
          (t[(t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843)] =
            "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"),
          (t[(t.COMPRESSED_RGB_ETC1_WEBGL = 36196)] =
            "COMPRESSED_RGB_ETC1_WEBGL"),
          (t[(t.COMPRESSED_RGB_ATC_WEBGL = 35986)] =
            "COMPRESSED_RGB_ATC_WEBGL"),
          (t[(t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986)] =
            "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"),
          (t[(t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798)] =
            "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL");
      })(An || (An = {}));
      var Rn =
          (((bn = {})[An.COMPRESSED_RGB_S3TC_DXT1_EXT] = 0.5),
          (bn[An.COMPRESSED_RGBA_S3TC_DXT1_EXT] = 0.5),
          (bn[An.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1),
          (bn[An.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1),
          (bn[An.COMPRESSED_SRGB_S3TC_DXT1_EXT] = 0.5),
          (bn[An.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = 0.5),
          (bn[An.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1),
          (bn[An.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1),
          (bn[An.COMPRESSED_R11_EAC] = 0.5),
          (bn[An.COMPRESSED_SIGNED_R11_EAC] = 0.5),
          (bn[An.COMPRESSED_RG11_EAC] = 1),
          (bn[An.COMPRESSED_SIGNED_RG11_EAC] = 1),
          (bn[An.COMPRESSED_RGB8_ETC2] = 0.5),
          (bn[An.COMPRESSED_RGBA8_ETC2_EAC] = 1),
          (bn[An.COMPRESSED_SRGB8_ETC2] = 0.5),
          (bn[An.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1),
          (bn[An.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5),
          (bn[An.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5),
          (bn[An.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = 0.5),
          (bn[An.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = 0.5),
          (bn[An.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = 0.25),
          (bn[An.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = 0.25),
          (bn[An.COMPRESSED_RGB_ETC1_WEBGL] = 0.5),
          (bn[An.COMPRESSED_RGB_ATC_WEBGL] = 0.5),
          (bn[An.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1),
          (bn[An.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1),
          bn),
        In = function (t, e) {
          return (In =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        };
      function wn(t, e) {
        function r() {
          this.constructor = t;
        }
        In(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var Pn,
        Mn,
        Dn = (function (t) {
          function e(r, i) {
            var n = t.call(this, r, i) || this;
            return (
              (n.format = i.format),
              (n.levels = i.levels || 1),
              (n._width = i.width),
              (n._height = i.height),
              (n._extension = e._formatToExtension(n.format)),
              (i.levelBuffers || n.buffer) &&
                (n._levelBuffers =
                  i.levelBuffers ||
                  e._createLevelBuffers(
                    r instanceof Uint8Array ? r : n.buffer.uint8View,
                    n.format,
                    n.levels,
                    4,
                    4,
                    n.width,
                    n.height
                  )),
              n
            );
          }
          return (
            wn(e, t),
            (e.prototype.upload = function (t, e, r) {
              var i = t.gl;
              if (!t.context.extensions[this._extension])
                throw new Error(
                  this._extension +
                    " textures are not supported on the current machine"
                );
              if (!this._levelBuffers) return !1;
              for (var n = 0, o = this.levels; n < o; n++) {
                var s = this._levelBuffers[n],
                  a = s.levelID,
                  h = s.levelWidth,
                  u = s.levelHeight,
                  l = s.levelBuffer;
                i.compressedTexImage2D(
                  i.TEXTURE_2D,
                  a,
                  this.format,
                  h,
                  u,
                  0,
                  l
                );
              }
              return !0;
            }),
            (e.prototype.onBlobLoaded = function () {
              this._levelBuffers = e._createLevelBuffers(
                this.buffer.uint8View,
                this.format,
                this.levels,
                4,
                4,
                this.width,
                this.height
              );
            }),
            (e._formatToExtension = function (t) {
              if (t >= 33776 && t <= 33779) return "s3tc";
              if (t >= 37488 && t <= 37497) return "etc";
              if (t >= 35840 && t <= 35843) return "pvrtc";
              if (t >= 36196) return "etc1";
              if (t >= 35986 && t <= 34798) return "atc";
              throw new Error("Invalid (compressed) texture format given!");
            }),
            (e._createLevelBuffers = function (t, e, r, i, n, o, s) {
              for (
                var a = new Array(r),
                  h = t.byteOffset,
                  u = o,
                  l = s,
                  c = (u + i - 1) & ~(i - 1),
                  d = (l + n - 1) & ~(n - 1),
                  f = c * d * Rn[e],
                  p = 0;
                p < r;
                p++
              )
                (a[p] = {
                  levelID: p,
                  levelWidth: r > 1 ? u : c,
                  levelHeight: r > 1 ? l : d,
                  levelBuffer: new Uint8Array(t.buffer, h, f),
                }),
                  (h += f),
                  (f =
                    (c = ((u = u >> 1 || 1) + i - 1) & ~(i - 1)) *
                    (d = ((l = l >> 1 || 1) + n - 1) & ~(n - 1)) *
                    Rn[e]);
              return a;
            }),
            e
          );
        })(
          (function (t) {
            function e(e, r) {
              void 0 === r && (r = { width: 1, height: 1, autoLoad: !0 });
              var i,
                n,
                o = this;
              return (
                "string" == typeof e
                  ? ((i = e), (n = new Uint8Array()))
                  : ((i = null), (n = e)),
                ((o = t.call(this, n, r) || this).origin = i),
                (o.buffer = n ? new Ui(n) : null),
                o.origin && !1 !== r.autoLoad && o.load(),
                n &&
                  n.length &&
                  ((o.loaded = !0), o.onBlobLoaded(o.buffer.rawBinaryData)),
                o
              );
            }
            return (
              wn(e, t),
              (e.prototype.onBlobLoaded = function (t) {}),
              (e.prototype.load = function () {
                return (
                  (t = this),
                  void 0,
                  (r = function () {
                    var t;
                    return (function (t, e) {
                      var r,
                        i,
                        n,
                        o,
                        s = {
                          label: 0,
                          sent: function () {
                            if (1 & n[0]) throw n[1];
                            return n[1];
                          },
                          trys: [],
                          ops: [],
                        };
                      return (
                        (o = { next: a(0), throw: a(1), return: a(2) }),
                        "function" == typeof Symbol &&
                          (o[Symbol.iterator] = function () {
                            return this;
                          }),
                        o
                      );
                      function a(o) {
                        return function (a) {
                          return (function (o) {
                            if (r)
                              throw new TypeError(
                                "Generator is already executing."
                              );
                            for (; s; )
                              try {
                                if (
                                  ((r = 1),
                                  i &&
                                    (n =
                                      2 & o[0]
                                        ? i.return
                                        : o[0]
                                        ? i.throw ||
                                          ((n = i.return) && n.call(i), 0)
                                        : i.next) &&
                                    !(n = n.call(i, o[1])).done)
                                )
                                  return n;
                                switch (
                                  ((i = 0),
                                  n && (o = [2 & o[0], n.value]),
                                  o[0])
                                ) {
                                  case 0:
                                  case 1:
                                    n = o;
                                    break;
                                  case 4:
                                    return s.label++, { value: o[1], done: !1 };
                                  case 5:
                                    s.label++, (i = o[1]), (o = [0]);
                                    continue;
                                  case 7:
                                    (o = s.ops.pop()), s.trys.pop();
                                    continue;
                                  default:
                                    if (
                                      !(
                                        (n =
                                          (n = s.trys).length > 0 &&
                                          n[n.length - 1]) ||
                                        (6 !== o[0] && 2 !== o[0])
                                      )
                                    ) {
                                      s = 0;
                                      continue;
                                    }
                                    if (
                                      3 === o[0] &&
                                      (!n || (o[1] > n[0] && o[1] < n[3]))
                                    ) {
                                      s.label = o[1];
                                      break;
                                    }
                                    if (6 === o[0] && s.label < n[1]) {
                                      (s.label = n[1]), (n = o);
                                      break;
                                    }
                                    if (n && s.label < n[2]) {
                                      (s.label = n[2]), s.ops.push(o);
                                      break;
                                    }
                                    n[2] && s.ops.pop(), s.trys.pop();
                                    continue;
                                }
                                o = e.call(t, s);
                              } catch (t) {
                                (o = [6, t]), (i = 0);
                              } finally {
                                r = n = 0;
                              }
                            if (5 & o[0]) throw o[1];
                            return { value: o[0] ? o[1] : void 0, done: !0 };
                          })([o, a]);
                        };
                      }
                    })(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, fetch(this.origin)];
                        case 1:
                          return [4, e.sent().blob()];
                        case 2:
                          return [4, e.sent().arrayBuffer()];
                        case 3:
                          return (
                            (t = e.sent()),
                            (this.data = new Uint32Array(t)),
                            (this.buffer = new Ui(t)),
                            (this.loaded = !0),
                            this.onBlobLoaded(t),
                            this.update(),
                            [2, this]
                          );
                      }
                    });
                  }),
                  new ((e = Promise) || (e = Promise))(function (i, n) {
                    function o(t) {
                      try {
                        a(r.next(t));
                      } catch (t) {
                        n(t);
                      }
                    }
                    function s(t) {
                      try {
                        a(r.throw(t));
                      } catch (t) {
                        n(t);
                      }
                    }
                    function a(t) {
                      t.done
                        ? i(t.value)
                        : new e(function (e) {
                            e(t.value);
                          }).then(o, s);
                    }
                    a((r = r.apply(t, [])).next());
                  })
                );
                var t, e, r;
              }),
              e
            );
          })(je)
        ),
        Cn = (function () {
          function t() {}
          return (
            (t.use = function (e, r) {
              var i = e.data;
              if (e.type === Sn.TYPE.JSON && i && i.cacheID && i.textures) {
                for (
                  var n = i.textures,
                    o = void 0,
                    s = void 0,
                    a = 0,
                    h = n.length;
                  a < h;
                  a++
                ) {
                  var u = n[a],
                    l = u.src,
                    c = u.format;
                  if ((c || (s = l), t.textureFormats[c])) {
                    o = l;
                    break;
                  }
                }
                if (!(o = o || s))
                  return void r(
                    new Error(
                      "Cannot load compressed-textures in " +
                        e.url +
                        ", make sure you provide a fallback"
                    )
                  );
                if (o === e.url)
                  return void r(
                    new Error(
                      "URL of compressed texture cannot be the same as the manifest's URL"
                    )
                  );
                var d = {
                    crossOrigin: e.crossOrigin,
                    metadata: e.metadata.imageMetadata,
                    parentResource: e,
                  },
                  f = At.resolve(e.url.replace(this.baseUrl, ""), o),
                  p = i.cacheID;
                this.add(p, f, d, function (t) {
                  if (t.error) r(t.error);
                  else {
                    var i = t.texture,
                      n = void 0 === i ? null : i,
                      o = t.textures,
                      s = void 0 === o ? {} : o;
                    Object.assign(e, { texture: n, textures: s }), r();
                  }
                });
              } else r();
            }),
            (t.add = function () {
              var e = document.createElement("canvas").getContext("webgl");
              if (e) {
                var r = {
                  s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
                  s3tc_sRGB: e.getExtension(
                    "WEBGL_compressed_texture_s3tc_srgb"
                  ),
                  etc: e.getExtension("WEBGL_compressed_texture_etc"),
                  etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
                  pvrtc:
                    e.getExtension("WEBGL_compressed_texture_pvrtc") ||
                    e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                  atc: e.getExtension("WEBGL_compressed_texture_atc"),
                  astc: e.getExtension("WEBGL_compressed_texture_astc"),
                };
                for (var i in ((t.textureExtensions = r),
                (t.textureFormats = {}),
                r)) {
                  var n = r[i];
                  n &&
                    Object.assign(t.textureFormats, Object.getPrototypeOf(n));
                }
              } else
                console.error(
                  "WebGL not available for compressed textures. Silently failing."
                );
            }),
            t
          );
        })();
      function Nn(t, e, r) {
        var i = { textures: {}, texture: null };
        return e
          ? (e
              .map(function (t) {
                return new hr(
                  new Ve(
                    t,
                    Object.assign(
                      { mipmap: ct.OFF, alphaMode: dt.NO_PREMULTIPLIED_ALPHA },
                      r
                    )
                  )
                );
              })
              .forEach(function (e, r) {
                var n = e.baseTexture,
                  o = t + "-" + (r + 1);
                Ve.addToCache(n, o),
                  hr.addToCache(e, o),
                  0 === r &&
                    (Ve.addToCache(n, t), hr.addToCache(e, t), (i.texture = e)),
                  (i.textures[o] = e);
              }),
            i)
          : i;
      }
      Sn.setExtensionXhrType("dds", Sn.XHR_RESPONSE_TYPE.BUFFER);
      var Ln, Fn;
      !(function (t) {
        (t[(t.DXGI_FORMAT_UNKNOWN = 0)] = "DXGI_FORMAT_UNKNOWN"),
          (t[(t.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1)] =
            "DXGI_FORMAT_R32G32B32A32_TYPELESS"),
          (t[(t.DXGI_FORMAT_R32G32B32A32_FLOAT = 2)] =
            "DXGI_FORMAT_R32G32B32A32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32G32B32A32_UINT = 3)] =
            "DXGI_FORMAT_R32G32B32A32_UINT"),
          (t[(t.DXGI_FORMAT_R32G32B32A32_SINT = 4)] =
            "DXGI_FORMAT_R32G32B32A32_SINT"),
          (t[(t.DXGI_FORMAT_R32G32B32_TYPELESS = 5)] =
            "DXGI_FORMAT_R32G32B32_TYPELESS"),
          (t[(t.DXGI_FORMAT_R32G32B32_FLOAT = 6)] =
            "DXGI_FORMAT_R32G32B32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32G32B32_UINT = 7)] =
            "DXGI_FORMAT_R32G32B32_UINT"),
          (t[(t.DXGI_FORMAT_R32G32B32_SINT = 8)] =
            "DXGI_FORMAT_R32G32B32_SINT"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9)] =
            "DXGI_FORMAT_R16G16B16A16_TYPELESS"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_FLOAT = 10)] =
            "DXGI_FORMAT_R16G16B16A16_FLOAT"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_UNORM = 11)] =
            "DXGI_FORMAT_R16G16B16A16_UNORM"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_UINT = 12)] =
            "DXGI_FORMAT_R16G16B16A16_UINT"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_SNORM = 13)] =
            "DXGI_FORMAT_R16G16B16A16_SNORM"),
          (t[(t.DXGI_FORMAT_R16G16B16A16_SINT = 14)] =
            "DXGI_FORMAT_R16G16B16A16_SINT"),
          (t[(t.DXGI_FORMAT_R32G32_TYPELESS = 15)] =
            "DXGI_FORMAT_R32G32_TYPELESS"),
          (t[(t.DXGI_FORMAT_R32G32_FLOAT = 16)] = "DXGI_FORMAT_R32G32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32G32_UINT = 17)] = "DXGI_FORMAT_R32G32_UINT"),
          (t[(t.DXGI_FORMAT_R32G32_SINT = 18)] = "DXGI_FORMAT_R32G32_SINT"),
          (t[(t.DXGI_FORMAT_R32G8X24_TYPELESS = 19)] =
            "DXGI_FORMAT_R32G8X24_TYPELESS"),
          (t[(t.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20)] =
            "DXGI_FORMAT_D32_FLOAT_S8X24_UINT"),
          (t[(t.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21)] =
            "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS"),
          (t[(t.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22)] =
            "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT"),
          (t[(t.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23)] =
            "DXGI_FORMAT_R10G10B10A2_TYPELESS"),
          (t[(t.DXGI_FORMAT_R10G10B10A2_UNORM = 24)] =
            "DXGI_FORMAT_R10G10B10A2_UNORM"),
          (t[(t.DXGI_FORMAT_R10G10B10A2_UINT = 25)] =
            "DXGI_FORMAT_R10G10B10A2_UINT"),
          (t[(t.DXGI_FORMAT_R11G11B10_FLOAT = 26)] =
            "DXGI_FORMAT_R11G11B10_FLOAT"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27)] =
            "DXGI_FORMAT_R8G8B8A8_TYPELESS"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_UNORM = 28)] =
            "DXGI_FORMAT_R8G8B8A8_UNORM"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29)] =
            "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_UINT = 30)] = "DXGI_FORMAT_R8G8B8A8_UINT"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_SNORM = 31)] =
            "DXGI_FORMAT_R8G8B8A8_SNORM"),
          (t[(t.DXGI_FORMAT_R8G8B8A8_SINT = 32)] = "DXGI_FORMAT_R8G8B8A8_SINT"),
          (t[(t.DXGI_FORMAT_R16G16_TYPELESS = 33)] =
            "DXGI_FORMAT_R16G16_TYPELESS"),
          (t[(t.DXGI_FORMAT_R16G16_FLOAT = 34)] = "DXGI_FORMAT_R16G16_FLOAT"),
          (t[(t.DXGI_FORMAT_R16G16_UNORM = 35)] = "DXGI_FORMAT_R16G16_UNORM"),
          (t[(t.DXGI_FORMAT_R16G16_UINT = 36)] = "DXGI_FORMAT_R16G16_UINT"),
          (t[(t.DXGI_FORMAT_R16G16_SNORM = 37)] = "DXGI_FORMAT_R16G16_SNORM"),
          (t[(t.DXGI_FORMAT_R16G16_SINT = 38)] = "DXGI_FORMAT_R16G16_SINT"),
          (t[(t.DXGI_FORMAT_R32_TYPELESS = 39)] = "DXGI_FORMAT_R32_TYPELESS"),
          (t[(t.DXGI_FORMAT_D32_FLOAT = 40)] = "DXGI_FORMAT_D32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32_FLOAT = 41)] = "DXGI_FORMAT_R32_FLOAT"),
          (t[(t.DXGI_FORMAT_R32_UINT = 42)] = "DXGI_FORMAT_R32_UINT"),
          (t[(t.DXGI_FORMAT_R32_SINT = 43)] = "DXGI_FORMAT_R32_SINT"),
          (t[(t.DXGI_FORMAT_R24G8_TYPELESS = 44)] =
            "DXGI_FORMAT_R24G8_TYPELESS"),
          (t[(t.DXGI_FORMAT_D24_UNORM_S8_UINT = 45)] =
            "DXGI_FORMAT_D24_UNORM_S8_UINT"),
          (t[(t.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46)] =
            "DXGI_FORMAT_R24_UNORM_X8_TYPELESS"),
          (t[(t.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47)] =
            "DXGI_FORMAT_X24_TYPELESS_G8_UINT"),
          (t[(t.DXGI_FORMAT_R8G8_TYPELESS = 48)] = "DXGI_FORMAT_R8G8_TYPELESS"),
          (t[(t.DXGI_FORMAT_R8G8_UNORM = 49)] = "DXGI_FORMAT_R8G8_UNORM"),
          (t[(t.DXGI_FORMAT_R8G8_UINT = 50)] = "DXGI_FORMAT_R8G8_UINT"),
          (t[(t.DXGI_FORMAT_R8G8_SNORM = 51)] = "DXGI_FORMAT_R8G8_SNORM"),
          (t[(t.DXGI_FORMAT_R8G8_SINT = 52)] = "DXGI_FORMAT_R8G8_SINT"),
          (t[(t.DXGI_FORMAT_R16_TYPELESS = 53)] = "DXGI_FORMAT_R16_TYPELESS"),
          (t[(t.DXGI_FORMAT_R16_FLOAT = 54)] = "DXGI_FORMAT_R16_FLOAT"),
          (t[(t.DXGI_FORMAT_D16_UNORM = 55)] = "DXGI_FORMAT_D16_UNORM"),
          (t[(t.DXGI_FORMAT_R16_UNORM = 56)] = "DXGI_FORMAT_R16_UNORM"),
          (t[(t.DXGI_FORMAT_R16_UINT = 57)] = "DXGI_FORMAT_R16_UINT"),
          (t[(t.DXGI_FORMAT_R16_SNORM = 58)] = "DXGI_FORMAT_R16_SNORM"),
          (t[(t.DXGI_FORMAT_R16_SINT = 59)] = "DXGI_FORMAT_R16_SINT"),
          (t[(t.DXGI_FORMAT_R8_TYPELESS = 60)] = "DXGI_FORMAT_R8_TYPELESS"),
          (t[(t.DXGI_FORMAT_R8_UNORM = 61)] = "DXGI_FORMAT_R8_UNORM"),
          (t[(t.DXGI_FORMAT_R8_UINT = 62)] = "DXGI_FORMAT_R8_UINT"),
          (t[(t.DXGI_FORMAT_R8_SNORM = 63)] = "DXGI_FORMAT_R8_SNORM"),
          (t[(t.DXGI_FORMAT_R8_SINT = 64)] = "DXGI_FORMAT_R8_SINT"),
          (t[(t.DXGI_FORMAT_A8_UNORM = 65)] = "DXGI_FORMAT_A8_UNORM"),
          (t[(t.DXGI_FORMAT_R1_UNORM = 66)] = "DXGI_FORMAT_R1_UNORM"),
          (t[(t.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67)] =
            "DXGI_FORMAT_R9G9B9E5_SHAREDEXP"),
          (t[(t.DXGI_FORMAT_R8G8_B8G8_UNORM = 68)] =
            "DXGI_FORMAT_R8G8_B8G8_UNORM"),
          (t[(t.DXGI_FORMAT_G8R8_G8B8_UNORM = 69)] =
            "DXGI_FORMAT_G8R8_G8B8_UNORM"),
          (t[(t.DXGI_FORMAT_BC1_TYPELESS = 70)] = "DXGI_FORMAT_BC1_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC1_UNORM = 71)] = "DXGI_FORMAT_BC1_UNORM"),
          (t[(t.DXGI_FORMAT_BC1_UNORM_SRGB = 72)] =
            "DXGI_FORMAT_BC1_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_BC2_TYPELESS = 73)] = "DXGI_FORMAT_BC2_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC2_UNORM = 74)] = "DXGI_FORMAT_BC2_UNORM"),
          (t[(t.DXGI_FORMAT_BC2_UNORM_SRGB = 75)] =
            "DXGI_FORMAT_BC2_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_BC3_TYPELESS = 76)] = "DXGI_FORMAT_BC3_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC3_UNORM = 77)] = "DXGI_FORMAT_BC3_UNORM"),
          (t[(t.DXGI_FORMAT_BC3_UNORM_SRGB = 78)] =
            "DXGI_FORMAT_BC3_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_BC4_TYPELESS = 79)] = "DXGI_FORMAT_BC4_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC4_UNORM = 80)] = "DXGI_FORMAT_BC4_UNORM"),
          (t[(t.DXGI_FORMAT_BC4_SNORM = 81)] = "DXGI_FORMAT_BC4_SNORM"),
          (t[(t.DXGI_FORMAT_BC5_TYPELESS = 82)] = "DXGI_FORMAT_BC5_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC5_UNORM = 83)] = "DXGI_FORMAT_BC5_UNORM"),
          (t[(t.DXGI_FORMAT_BC5_SNORM = 84)] = "DXGI_FORMAT_BC5_SNORM"),
          (t[(t.DXGI_FORMAT_B5G6R5_UNORM = 85)] = "DXGI_FORMAT_B5G6R5_UNORM"),
          (t[(t.DXGI_FORMAT_B5G5R5A1_UNORM = 86)] =
            "DXGI_FORMAT_B5G5R5A1_UNORM"),
          (t[(t.DXGI_FORMAT_B8G8R8A8_UNORM = 87)] =
            "DXGI_FORMAT_B8G8R8A8_UNORM"),
          (t[(t.DXGI_FORMAT_B8G8R8X8_UNORM = 88)] =
            "DXGI_FORMAT_B8G8R8X8_UNORM"),
          (t[(t.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89)] =
            "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM"),
          (t[(t.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90)] =
            "DXGI_FORMAT_B8G8R8A8_TYPELESS"),
          (t[(t.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91)] =
            "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92)] =
            "DXGI_FORMAT_B8G8R8X8_TYPELESS"),
          (t[(t.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93)] =
            "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_BC6H_TYPELESS = 94)] = "DXGI_FORMAT_BC6H_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC6H_UF16 = 95)] = "DXGI_FORMAT_BC6H_UF16"),
          (t[(t.DXGI_FORMAT_BC6H_SF16 = 96)] = "DXGI_FORMAT_BC6H_SF16"),
          (t[(t.DXGI_FORMAT_BC7_TYPELESS = 97)] = "DXGI_FORMAT_BC7_TYPELESS"),
          (t[(t.DXGI_FORMAT_BC7_UNORM = 98)] = "DXGI_FORMAT_BC7_UNORM"),
          (t[(t.DXGI_FORMAT_BC7_UNORM_SRGB = 99)] =
            "DXGI_FORMAT_BC7_UNORM_SRGB"),
          (t[(t.DXGI_FORMAT_AYUV = 100)] = "DXGI_FORMAT_AYUV"),
          (t[(t.DXGI_FORMAT_Y410 = 101)] = "DXGI_FORMAT_Y410"),
          (t[(t.DXGI_FORMAT_Y416 = 102)] = "DXGI_FORMAT_Y416"),
          (t[(t.DXGI_FORMAT_NV12 = 103)] = "DXGI_FORMAT_NV12"),
          (t[(t.DXGI_FORMAT_P010 = 104)] = "DXGI_FORMAT_P010"),
          (t[(t.DXGI_FORMAT_P016 = 105)] = "DXGI_FORMAT_P016"),
          (t[(t.DXGI_FORMAT_420_OPAQUE = 106)] = "DXGI_FORMAT_420_OPAQUE"),
          (t[(t.DXGI_FORMAT_YUY2 = 107)] = "DXGI_FORMAT_YUY2"),
          (t[(t.DXGI_FORMAT_Y210 = 108)] = "DXGI_FORMAT_Y210"),
          (t[(t.DXGI_FORMAT_Y216 = 109)] = "DXGI_FORMAT_Y216"),
          (t[(t.DXGI_FORMAT_NV11 = 110)] = "DXGI_FORMAT_NV11"),
          (t[(t.DXGI_FORMAT_AI44 = 111)] = "DXGI_FORMAT_AI44"),
          (t[(t.DXGI_FORMAT_IA44 = 112)] = "DXGI_FORMAT_IA44"),
          (t[(t.DXGI_FORMAT_P8 = 113)] = "DXGI_FORMAT_P8"),
          (t[(t.DXGI_FORMAT_A8P8 = 114)] = "DXGI_FORMAT_A8P8"),
          (t[(t.DXGI_FORMAT_B4G4R4A4_UNORM = 115)] =
            "DXGI_FORMAT_B4G4R4A4_UNORM"),
          (t[(t.DXGI_FORMAT_P208 = 116)] = "DXGI_FORMAT_P208"),
          (t[(t.DXGI_FORMAT_V208 = 117)] = "DXGI_FORMAT_V208"),
          (t[(t.DXGI_FORMAT_V408 = 118)] = "DXGI_FORMAT_V408"),
          (t[(t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119)] =
            "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE"),
          (t[(t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120)] =
            "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE"),
          (t[(t.DXGI_FORMAT_FORCE_UINT = 121)] = "DXGI_FORMAT_FORCE_UINT");
      })(Ln || (Ln = {})),
        (function (t) {
          (t[(t.DDS_DIMENSION_TEXTURE1D = 2)] = "DDS_DIMENSION_TEXTURE1D"),
            (t[(t.DDS_DIMENSION_TEXTURE2D = 3)] = "DDS_DIMENSION_TEXTURE2D"),
            (t[(t.DDS_DIMENSION_TEXTURE3D = 6)] = "DDS_DIMENSION_TEXTURE3D");
        })(Fn || (Fn = {}));
      var Un,
        Bn,
        Gn,
        Xn =
          (((Pn = {})[827611204] = An.COMPRESSED_RGBA_S3TC_DXT1_EXT),
          (Pn[861165636] = An.COMPRESSED_RGBA_S3TC_DXT3_EXT),
          (Pn[894720068] = An.COMPRESSED_RGBA_S3TC_DXT5_EXT),
          Pn),
        kn =
          (((Mn = {})[Ln.DXGI_FORMAT_BC1_TYPELESS] =
            An.COMPRESSED_RGBA_S3TC_DXT1_EXT),
          (Mn[Ln.DXGI_FORMAT_BC1_UNORM] = An.COMPRESSED_RGBA_S3TC_DXT1_EXT),
          (Mn[Ln.DXGI_FORMAT_BC2_TYPELESS] = An.COMPRESSED_RGBA_S3TC_DXT3_EXT),
          (Mn[Ln.DXGI_FORMAT_BC2_UNORM] = An.COMPRESSED_RGBA_S3TC_DXT3_EXT),
          (Mn[Ln.DXGI_FORMAT_BC3_TYPELESS] = An.COMPRESSED_RGBA_S3TC_DXT5_EXT),
          (Mn[Ln.DXGI_FORMAT_BC3_UNORM] = An.COMPRESSED_RGBA_S3TC_DXT5_EXT),
          (Mn[Ln.DXGI_FORMAT_BC1_UNORM_SRGB] =
            An.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT),
          (Mn[Ln.DXGI_FORMAT_BC2_UNORM_SRGB] =
            An.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT),
          (Mn[Ln.DXGI_FORMAT_BC3_UNORM_SRGB] =
            An.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT),
          Mn),
        Hn = (function () {
          function t() {}
          return (
            (t.use = function (e, r) {
              if ("dds" === e.extension && e.data)
                try {
                  Object.assign(
                    e,
                    Nn(e.name || e.url, t.parse(e.data), e.metadata)
                  );
                } catch (t) {
                  return void r(t);
                }
              r();
            }),
            (t.parse = function (t) {
              var e = new Uint32Array(t);
              if (542327876 !== e[0])
                throw new Error("Invalid DDS file magic word");
              var r = new Uint32Array(
                  t,
                  0,
                  124 / Uint32Array.BYTES_PER_ELEMENT
                ),
                i = r[3],
                n = r[4],
                o = r[7],
                s = new Uint32Array(
                  t,
                  19 * Uint32Array.BYTES_PER_ELEMENT,
                  32 / Uint32Array.BYTES_PER_ELEMENT
                ),
                a = s[1];
              if (4 & a) {
                var h = s[2];
                if (808540228 !== h) {
                  var u = Xn[h],
                    l = new Uint8Array(t, 128);
                  return [
                    new Dn(l, { format: u, width: n, height: i, levels: o }),
                  ];
                }
                var c = new Uint32Array(
                    e.buffer,
                    128,
                    20 / Uint32Array.BYTES_PER_ELEMENT
                  ),
                  d = c[0],
                  f = c[1],
                  p = c[2],
                  _ = c[3],
                  m = kn[d];
                if (void 0 === m)
                  throw new Error(
                    "DDSLoader cannot parse texture data with DXGI format " + d
                  );
                if (4 === p)
                  throw new Error(
                    "DDSLoader does not support cubemap textures"
                  );
                if (f === Fn.DDS_DIMENSION_TEXTURE3D)
                  throw new Error(
                    "DDSLoader does not supported 3D texture data"
                  );
                var v = new Array();
                if (1 === _) v.push(new Uint8Array(t, 148));
                else {
                  for (var y = Rn[m], g = 0, T = n, x = i, E = 0; E < o; E++)
                    (g +=
                      Math.max(1, (T + 3) & -4) *
                      Math.max(1, (x + 3) & -4) *
                      y),
                      (T >>>= 1),
                      (x >>>= 1);
                  var b = 148;
                  for (E = 0; E < _; E++)
                    v.push(new Uint8Array(t, b, g)), (b += g);
                }
                return v.map(function (t) {
                  return new Dn(t, {
                    format: m,
                    width: n,
                    height: i,
                    levels: o,
                  });
                });
              }
              if (64 & a)
                throw new Error(
                  "DDSLoader does not support uncompressed texture data."
                );
              if (512 & a)
                throw new Error(
                  "DDSLoader does not supported YUV uncompressed texture data."
                );
              if (131072 & a)
                throw new Error(
                  "DDSLoader does not support single-channel (lumninance) texture data!"
                );
              if (2 & a)
                throw new Error(
                  "DDSLoader does not support single-channel (alpha) texture data!"
                );
              throw new Error(
                "DDSLoader failed to load a texture file due to an unknown reason!"
              );
            }),
            t
          );
        })();
      Sn.setExtensionXhrType("ktx", Sn.XHR_RESPONSE_TYPE.BUFFER);
      var jn = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
        Yn =
          (((Un = {})[at.UNSIGNED_BYTE] = 1),
          (Un[at.UNSIGNED_SHORT] = 2),
          (Un[at.FLOAT] = 4),
          (Un[at.HALF_FLOAT] = 8),
          Un),
        Vn =
          (((Bn = {})[ot.RGBA] = 4),
          (Bn[ot.RGB] = 3),
          (Bn[ot.LUMINANCE] = 1),
          (Bn[ot.LUMINANCE_ALPHA] = 2),
          (Bn[ot.ALPHA] = 1),
          Bn),
        zn =
          (((Gn = {})[at.UNSIGNED_SHORT_4_4_4_4] = 2),
          (Gn[at.UNSIGNED_SHORT_5_5_5_1] = 2),
          (Gn[at.UNSIGNED_SHORT_5_6_5] = 2),
          Gn),
        Wn = (function () {
          function t() {}
          return (
            (t.use = function (e, r) {
              if ("ktx" === e.extension && e.data)
                try {
                  var i = e.name || e.url;
                  Object.assign(e, Nn(i, t.parse(i, e.data), e.metadata));
                } catch (t) {
                  return void r(t);
                }
              r();
            }),
            (t.parse = function (e, r) {
              var i = new DataView(r);
              if (!t.validate(e, i)) return null;
              var n = 67305985 === i.getUint32(12, !0),
                o = i.getUint32(16, n),
                s = i.getUint32(24, n),
                a = i.getUint32(28, n),
                h = i.getUint32(36, n),
                u = i.getUint32(40, n) || 1,
                l = i.getUint32(44, n) || 1,
                c = i.getUint32(48, n) || 1,
                d = i.getUint32(52, n),
                f = i.getUint32(56, n),
                p = i.getUint32(60, n);
              if (0 === u || 1 !== l)
                throw new Error("Only 2D textures are supported");
              if (1 !== d)
                throw new Error(
                  "CubeTextures are not supported by KTXLoader yet!"
                );
              if (1 !== c)
                throw new Error("WebGL does not support array textures");
              var _,
                m = (h + 3) & -4,
                v = (u + 3) & -4,
                y = new Array(c),
                g = h * u;
              if (
                (0 === o && (g = m * v),
                void 0 ===
                  (_ = 0 !== o ? (Yn[o] ? Yn[o] * Vn[s] : zn[o]) : Rn[a]))
              )
                throw new Error(
                  "Unable to resolve the pixel format stored in the *.ktx file!"
                );
              for (
                var T = g * _, x = h, E = u, b = m, A = v, O = 64 + p, S = 0;
                S < f;
                S++
              ) {
                for (var R = i.getUint32(O, n), I = O + 4, w = 0; w < c; w++) {
                  var P = y[w];
                  P || (P = y[w] = new Array(f)),
                    (P[S] = {
                      levelID: S,
                      levelWidth: f > 1 ? x : b,
                      levelHeight: f > 1 ? E : A,
                      levelBuffer: new Uint8Array(r, I, T),
                    }),
                    (I += T);
                }
                (O = (O += R + 4) % 4 != 0 ? O + 4 - (O % 4) : O),
                  (T =
                    (b = ((x = x >> 1 || 1) + 4 - 1) & -4) *
                    (A = ((E = E >> 1 || 1) + 4 - 1) & -4) *
                    _);
              }
              if (0 !== o) throw new Error("TODO: Uncompressed");
              return y.map(function (t) {
                return new Dn(null, {
                  format: a,
                  width: h,
                  height: u,
                  levels: f,
                  levelBuffers: t,
                });
              });
            }),
            (t.validate = function (t, e) {
              for (var r = 0; r < jn.length; r++)
                if (e.getUint8(r) !== jn[r])
                  return console.error(t + " is not a valid *.ktx file!"), !1;
              return !0;
            }),
            t
          );
        })(),
        qn = function (t, e) {
          return (qn =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        };
      function Kn(t, e) {
        function r() {
          this.constructor = t;
        }
        qn(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var Zn,
        Jn,
        Qn = (function (t) {
          function e(e, r, i, n) {
            void 0 === e && (e = 1500),
              void 0 === i && (i = 16384),
              void 0 === n && (n = !1);
            var o = t.call(this) || this;
            return (
              i > 16384 && (i = 16384),
              (o._properties = [!1, !0, !1, !1, !1]),
              (o._maxSize = e),
              (o._batchSize = i),
              (o._buffers = null),
              (o._bufferUpdateIDs = []),
              (o._updateID = 0),
              (o.interactiveChildren = !1),
              (o.blendMode = it.NORMAL),
              (o.autoResize = n),
              (o.roundPixels = !0),
              (o.baseTexture = null),
              o.setProperties(r),
              (o._tint = 0),
              (o.tintRgb = new Float32Array(4)),
              (o.tint = 16777215),
              o
            );
          }
          return (
            Kn(e, t),
            (e.prototype.setProperties = function (t) {
              t &&
                ((this._properties[0] =
                  "vertices" in t || "scale" in t
                    ? !!t.vertices || !!t.scale
                    : this._properties[0]),
                (this._properties[1] =
                  "position" in t ? !!t.position : this._properties[1]),
                (this._properties[2] =
                  "rotation" in t ? !!t.rotation : this._properties[2]),
                (this._properties[3] =
                  "uvs" in t ? !!t.uvs : this._properties[3]),
                (this._properties[4] =
                  "tint" in t || "alpha" in t
                    ? !!t.tint || !!t.alpha
                    : this._properties[4]));
            }),
            (e.prototype.updateTransform = function () {
              this.displayObjectUpdateTransform();
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return this._tint;
              },
              set: function (t) {
                (this._tint = t), It(t, this.tintRgb);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.render = function (t) {
              var e = this;
              this.visible &&
                !(this.worldAlpha <= 0) &&
                this.children.length &&
                this.renderable &&
                (this.baseTexture ||
                  ((this.baseTexture = this.children[0]._texture.baseTexture),
                  this.baseTexture.valid ||
                    this.baseTexture.once("update", function () {
                      return e.onChildrenChange(0);
                    })),
                t.batch.setObjectRenderer(t.plugins.particle),
                t.plugins.particle.render(this));
            }),
            (e.prototype.onChildrenChange = function (t) {
              for (
                var e = Math.floor(t / this._batchSize);
                this._bufferUpdateIDs.length < e;

              )
                this._bufferUpdateIDs.push(0);
              this._bufferUpdateIDs[e] = ++this._updateID;
            }),
            (e.prototype.dispose = function () {
              if (this._buffers) {
                for (var t = 0; t < this._buffers.length; ++t)
                  this._buffers[t].destroy();
                this._buffers = null;
              }
            }),
            (e.prototype.destroy = function (e) {
              t.prototype.destroy.call(this, e),
                this.dispose(),
                (this._properties = null),
                (this._buffers = null),
                (this._bufferUpdateIDs = null);
            }),
            e
          );
        })(be),
        $n = (function () {
          function t(t, e, r) {
            (this.geometry = new Tr()),
              (this.indexBuffer = null),
              (this.size = r),
              (this.dynamicProperties = []),
              (this.staticProperties = []);
            for (var i = 0; i < t.length; ++i) {
              var n = t[i];
              (n = {
                attributeName: n.attributeName,
                size: n.size,
                uploadFunction: n.uploadFunction,
                type: n.type || at.FLOAT,
                offset: n.offset,
              }),
                e[i]
                  ? this.dynamicProperties.push(n)
                  : this.staticProperties.push(n);
            }
            (this.staticStride = 0),
              (this.staticBuffer = null),
              (this.staticData = null),
              (this.staticDataUint32 = null),
              (this.dynamicStride = 0),
              (this.dynamicBuffer = null),
              (this.dynamicData = null),
              (this.dynamicDataUint32 = null),
              (this._updateID = 0),
              this.initBuffers();
          }
          return (
            (t.prototype.initBuffers = function () {
              var t = this.geometry,
                e = 0;
              (this.indexBuffer = new pr(
                (function (t, e) {
                  void 0 === e && (e = null);
                  var r = 6 * t;
                  if ((e = e || new Uint16Array(r)).length !== r)
                    throw new Error(
                      "Out buffer length is incorrect, got " +
                        e.length +
                        " and expected " +
                        r
                    );
                  for (var i = 0, n = 0; i < r; i += 6, n += 4)
                    (e[i + 0] = n + 0),
                      (e[i + 1] = n + 1),
                      (e[i + 2] = n + 2),
                      (e[i + 3] = n + 0),
                      (e[i + 4] = n + 2),
                      (e[i + 5] = n + 3);
                  return e;
                })(this.size),
                !0,
                !0
              )),
                t.addIndex(this.indexBuffer),
                (this.dynamicStride = 0);
              for (var r = 0; r < this.dynamicProperties.length; ++r)
                ((s = this.dynamicProperties[r]).offset = e),
                  (e += s.size),
                  (this.dynamicStride += s.size);
              var i = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
              (this.dynamicData = new Float32Array(i)),
                (this.dynamicDataUint32 = new Uint32Array(i)),
                (this.dynamicBuffer = new pr(this.dynamicData, !1, !1));
              var n = 0;
              for (
                this.staticStride = 0, r = 0;
                r < this.staticProperties.length;
                ++r
              )
                ((s = this.staticProperties[r]).offset = n),
                  (n += s.size),
                  (this.staticStride += s.size);
              var o = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
              for (
                this.staticData = new Float32Array(o),
                  this.staticDataUint32 = new Uint32Array(o),
                  this.staticBuffer = new pr(this.staticData, !0, !1),
                  r = 0;
                r < this.dynamicProperties.length;
                ++r
              ) {
                var s = this.dynamicProperties[r];
                t.addAttribute(
                  s.attributeName,
                  this.dynamicBuffer,
                  0,
                  s.type === at.UNSIGNED_BYTE,
                  s.type,
                  4 * this.dynamicStride,
                  4 * s.offset
                );
              }
              for (r = 0; r < this.staticProperties.length; ++r)
                (s = this.staticProperties[r]),
                  t.addAttribute(
                    s.attributeName,
                    this.staticBuffer,
                    0,
                    s.type === at.UNSIGNED_BYTE,
                    s.type,
                    4 * this.staticStride,
                    4 * s.offset
                  );
            }),
            (t.prototype.uploadDynamic = function (t, e, r) {
              for (var i = 0; i < this.dynamicProperties.length; i++) {
                var n = this.dynamicProperties[i];
                n.uploadFunction(
                  t,
                  e,
                  r,
                  n.type === at.UNSIGNED_BYTE
                    ? this.dynamicDataUint32
                    : this.dynamicData,
                  this.dynamicStride,
                  n.offset
                );
              }
              this.dynamicBuffer._updateID++;
            }),
            (t.prototype.uploadStatic = function (t, e, r) {
              for (var i = 0; i < this.staticProperties.length; i++) {
                var n = this.staticProperties[i];
                n.uploadFunction(
                  t,
                  e,
                  r,
                  n.type === at.UNSIGNED_BYTE
                    ? this.staticDataUint32
                    : this.staticData,
                  this.staticStride,
                  n.offset
                );
              }
              this.staticBuffer._updateID++;
            }),
            (t.prototype.destroy = function () {
              (this.indexBuffer = null),
                (this.dynamicProperties = null),
                (this.dynamicBuffer = null),
                (this.dynamicData = null),
                (this.dynamicDataUint32 = null),
                (this.staticProperties = null),
                (this.staticBuffer = null),
                (this.staticData = null),
                (this.staticDataUint32 = null),
                this.geometry.destroy();
            }),
            t
          );
        })(),
        to = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.shader = null),
              (r.properties = null),
              (r.tempMatrix = new ae()),
              (r.properties = [
                {
                  attributeName: "aVertexPosition",
                  size: 2,
                  uploadFunction: r.uploadVertices,
                  offset: 0,
                },
                {
                  attributeName: "aPositionCoord",
                  size: 2,
                  uploadFunction: r.uploadPosition,
                  offset: 0,
                },
                {
                  attributeName: "aRotation",
                  size: 1,
                  uploadFunction: r.uploadRotation,
                  offset: 0,
                },
                {
                  attributeName: "aTextureCoord",
                  size: 2,
                  uploadFunction: r.uploadUvs,
                  offset: 0,
                },
                {
                  attributeName: "aColor",
                  size: 1,
                  type: at.UNSIGNED_BYTE,
                  uploadFunction: r.uploadTint,
                  offset: 0,
                },
              ]),
              (r.shader = ui.from(
                "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
                "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
                {}
              )),
              (r.state = li.for2d()),
              r
            );
          }
          return (
            Kn(e, t),
            (e.prototype.render = function (t) {
              var e = t.children,
                r = t._maxSize,
                i = t._batchSize,
                n = this.renderer,
                o = e.length;
              if (0 !== o) {
                o > r && !t.autoResize && (o = r);
                var s = t._buffers;
                s || (s = t._buffers = this.generateBuffers(t));
                var a = e[0]._texture.baseTexture;
                (this.state.blendMode = Dt(t.blendMode, a.alphaMode)),
                  n.state.set(this.state);
                var h,
                  u,
                  l,
                  c,
                  d = n.gl,
                  f = t.worldTransform.copyTo(this.tempMatrix);
                f.prepend(n.globalUniforms.uniforms.projectionMatrix),
                  (this.shader.uniforms.translationMatrix = f.toArray(!0)),
                  (this.shader.uniforms.uColor =
                    ((h = t.tintRgb),
                    (u = t.worldAlpha),
                    (l = this.shader.uniforms.uColor),
                    (c = a.alphaMode),
                    (l = l || new Float32Array(4)),
                    c || void 0 === c
                      ? ((l[0] = h[0] * u),
                        (l[1] = h[1] * u),
                        (l[2] = h[2] * u))
                      : ((l[0] = h[0]), (l[1] = h[1]), (l[2] = h[2])),
                    (l[3] = u),
                    l)),
                  (this.shader.uniforms.uSampler = a),
                  this.renderer.shader.bind(this.shader);
                for (var p = !1, _ = 0, m = 0; _ < o; _ += i, m += 1) {
                  var v = o - _;
                  v > i && (v = i),
                    m >= s.length && s.push(this._generateOneMoreBuffer(t));
                  var y = s[m];
                  y.uploadDynamic(e, _, v);
                  var g = t._bufferUpdateIDs[m] || 0;
                  (p = p || y._updateID < g) &&
                    ((y._updateID = t._updateID), y.uploadStatic(e, _, v)),
                    n.geometry.bind(y.geometry),
                    d.drawElements(d.TRIANGLES, 6 * v, d.UNSIGNED_SHORT, 0);
                }
              }
            }),
            (e.prototype.generateBuffers = function (t) {
              for (
                var e = [],
                  r = t._maxSize,
                  i = t._batchSize,
                  n = t._properties,
                  o = 0;
                o < r;
                o += i
              )
                e.push(new $n(this.properties, n, i));
              return e;
            }),
            (e.prototype._generateOneMoreBuffer = function (t) {
              var e = t._batchSize,
                r = t._properties;
              return new $n(this.properties, r, e);
            }),
            (e.prototype.uploadVertices = function (t, e, r, i, n, o) {
              for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < r; ++l) {
                var c = t[e + l],
                  d = c._texture,
                  f = c.scale.x,
                  p = c.scale.y,
                  _ = d.trim,
                  m = d.orig;
                _
                  ? ((s = (a = _.x - c.anchor.x * m.width) + _.width),
                    (h = (u = _.y - c.anchor.y * m.height) + _.height))
                  : ((s = m.width * (1 - c.anchor.x)),
                    (a = m.width * -c.anchor.x),
                    (h = m.height * (1 - c.anchor.y)),
                    (u = m.height * -c.anchor.y)),
                  (i[o] = a * f),
                  (i[o + 1] = u * p),
                  (i[o + n] = s * f),
                  (i[o + n + 1] = u * p),
                  (i[o + 2 * n] = s * f),
                  (i[o + 2 * n + 1] = h * p),
                  (i[o + 3 * n] = a * f),
                  (i[o + 3 * n + 1] = h * p),
                  (o += 4 * n);
              }
            }),
            (e.prototype.uploadPosition = function (t, e, r, i, n, o) {
              for (var s = 0; s < r; s++) {
                var a = t[e + s].position;
                (i[o] = a.x),
                  (i[o + 1] = a.y),
                  (i[o + n] = a.x),
                  (i[o + n + 1] = a.y),
                  (i[o + 2 * n] = a.x),
                  (i[o + 2 * n + 1] = a.y),
                  (i[o + 3 * n] = a.x),
                  (i[o + 3 * n + 1] = a.y),
                  (o += 4 * n);
              }
            }),
            (e.prototype.uploadRotation = function (t, e, r, i, n, o) {
              for (var s = 0; s < r; s++) {
                var a = t[e + s].rotation;
                (i[o] = a),
                  (i[o + n] = a),
                  (i[o + 2 * n] = a),
                  (i[o + 3 * n] = a),
                  (o += 4 * n);
              }
            }),
            (e.prototype.uploadUvs = function (t, e, r, i, n, o) {
              for (var s = 0; s < r; ++s) {
                var a = t[e + s]._texture._uvs;
                a
                  ? ((i[o] = a.x0),
                    (i[o + 1] = a.y0),
                    (i[o + n] = a.x1),
                    (i[o + n + 1] = a.y1),
                    (i[o + 2 * n] = a.x2),
                    (i[o + 2 * n + 1] = a.y2),
                    (i[o + 3 * n] = a.x3),
                    (i[o + 3 * n + 1] = a.y3),
                    (o += 4 * n))
                  : ((i[o] = 0),
                    (i[o + 1] = 0),
                    (i[o + n] = 0),
                    (i[o + n + 1] = 0),
                    (i[o + 2 * n] = 0),
                    (i[o + 2 * n + 1] = 0),
                    (i[o + 3 * n] = 0),
                    (i[o + 3 * n + 1] = 0),
                    (o += 4 * n));
              }
            }),
            (e.prototype.uploadTint = function (t, e, r, i, n, o) {
              for (var s = 0; s < r; ++s) {
                var a = t[e + s],
                  h = a._texture.baseTexture.alphaMode > 0,
                  u = a.alpha,
                  l =
                    u < 1 && h
                      ? Ct(a._tintRGB, u)
                      : a._tintRGB + ((255 * u) << 24);
                (i[o] = l),
                  (i[o + n] = l),
                  (i[o + 2 * n] = l),
                  (i[o + 3 * n] = l),
                  (o += 4 * n);
              }
            }),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this),
                this.shader && (this.shader.destroy(), (this.shader = null)),
                (this.tempMatrix = null);
            }),
            e
          );
        })(wr);
      !(function (t) {
        (t.MITER = "miter"), (t.BEVEL = "bevel"), (t.ROUND = "round");
      })(Zn || (Zn = {})),
        (function (t) {
          (t.BUTT = "butt"), (t.ROUND = "round"), (t.SQUARE = "square");
        })(Jn || (Jn = {}));
      var eo = {
          adaptive: !0,
          maxLength: 10,
          minSegments: 8,
          maxSegments: 2048,
          epsilon: 1e-4,
          _segmentsCount: function (t, e) {
            if ((void 0 === e && (e = 20), !this.adaptive || !t || isNaN(t)))
              return e;
            var r = Math.ceil(t / this.maxLength);
            return (
              r < this.minSegments
                ? (r = this.minSegments)
                : r > this.maxSegments && (r = this.maxSegments),
              r
            );
          },
        },
        ro = (function () {
          function t() {
            (this.color = 16777215),
              (this.alpha = 1),
              (this.texture = hr.WHITE),
              (this.matrix = null),
              (this.visible = !1),
              this.reset();
          }
          return (
            (t.prototype.clone = function () {
              var e = new t();
              return (
                (e.color = this.color),
                (e.alpha = this.alpha),
                (e.texture = this.texture),
                (e.matrix = this.matrix),
                (e.visible = this.visible),
                e
              );
            }),
            (t.prototype.reset = function () {
              (this.color = 16777215),
                (this.alpha = 1),
                (this.texture = hr.WHITE),
                (this.matrix = null),
                (this.visible = !1);
            }),
            (t.prototype.destroy = function () {
              (this.texture = null), (this.matrix = null);
            }),
            t
          );
        })(),
        io = function (t, e) {
          return (io =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        };
      function no(t, e) {
        function r() {
          this.constructor = t;
        }
        io(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var oo = {
          build: function (t) {
            t.points = t.shape.points.slice();
          },
          triangulate: function (t, e) {
            var r = t.points,
              i = t.holes,
              n = e.points,
              o = e.indices;
            if (r.length >= 6) {
              for (var s = [], a = 0; a < i.length; a++) {
                var h = i[a];
                s.push(r.length / 2), (r = r.concat(h.points));
              }
              var u = Et()(r, s, 2);
              if (!u) return;
              var l = n.length / 2;
              for (a = 0; a < u.length; a += 3)
                o.push(u[a] + l), o.push(u[a + 1] + l), o.push(u[a + 2] + l);
              for (a = 0; a < r.length; a++) n.push(r[a]);
            }
          },
        },
        so = {
          build: function (t) {
            var e,
              r,
              i = t.shape,
              n = t.points,
              o = i.x,
              s = i.y;
            if (((n.length = 0), t.type === Zt.CIRC))
              (e = i.radius), (r = i.radius);
            else {
              var a = t.shape;
              (e = a.width), (r = a.height);
            }
            if (0 !== e && 0 !== r) {
              var h =
                Math.floor(30 * Math.sqrt(i.radius)) ||
                Math.floor(15 * Math.sqrt(e + r));
              h /= 2.3;
              for (var u = (2 * Math.PI) / h, l = 0; l < h - 0.5; l++)
                n.push(o + Math.sin(-u * l) * e, s + Math.cos(-u * l) * r);
              n.push(n[0], n[1]);
            }
          },
          triangulate: function (t, e) {
            var r = t.points,
              i = e.points,
              n = e.indices,
              o = i.length / 2,
              s = o,
              a = t.shape,
              h = t.matrix,
              u = a.x,
              l = a.y;
            i.push(
              t.matrix ? h.a * u + h.c * l + h.tx : u,
              t.matrix ? h.b * u + h.d * l + h.ty : l
            );
            for (var c = 0; c < r.length; c += 2)
              i.push(r[c], r[c + 1]), n.push(o++, s, o);
          },
        };
      function ao(t, e, r) {
        return t + (e - t) * r;
      }
      function ho(t, e, r, i, n, o, s) {
        void 0 === s && (s = []);
        for (
          var a = s, h = 0, u = 0, l = 0, c = 0, d = 0, f = 0, p = 0, _ = 0;
          p <= 20;
          ++p
        )
          (h = ao(t, r, (_ = p / 20))),
            (u = ao(e, i, _)),
            (l = ao(r, n, _)),
            (c = ao(i, o, _)),
            (d = ao(h, l, _)),
            (f = ao(u, c, _)),
            a.push(d, f);
        return a;
      }
      var uo = {
        build: function (t) {
          var e = t.shape,
            r = t.points,
            i = e.x,
            n = e.y,
            o = e.width,
            s = e.height,
            a = Math.max(0, Math.min(e.radius, Math.min(o, s) / 2));
          (r.length = 0),
            a
              ? (ho(i, n + a, i, n, i + a, n, r),
                ho(i + o - a, n, i + o, n, i + o, n + a, r),
                ho(i + o, n + s - a, i + o, n + s, i + o - a, n + s, r),
                ho(i + a, n + s, i, n + s, i, n + s - a, r))
              : r.push(i, n, i + o, n, i + o, n + s, i, n + s);
        },
        triangulate: function (t, e) {
          for (
            var r = t.points,
              i = e.points,
              n = e.indices,
              o = i.length / 2,
              s = Et()(r, null, 2),
              a = 0,
              h = s.length;
            a < h;
            a += 3
          )
            n.push(s[a] + o), n.push(s[a + 1] + o), n.push(s[a + 2] + o);
          for (a = 0, h = r.length; a < h; a++) i.push(r[a], r[++a]);
        },
      };
      function lo(t, e, r, i, n, o, s, a) {
        var h, u;
        s ? ((h = i), (u = -r)) : ((h = -i), (u = r));
        var l = t - r * n + h,
          c = e - i * n + u,
          d = t + r * o + h,
          f = e + i * o + u;
        return a.push(l, c), a.push(d, f), 2;
      }
      function co(t, e, r, i, n, o, s, a) {
        var h = r - t,
          u = i - e,
          l = Math.atan2(h, u),
          c = Math.atan2(n - t, o - e);
        a && l < c ? (l += 2 * Math.PI) : !a && l > c && (c += 2 * Math.PI);
        var d = l,
          f = c - l,
          p = Math.abs(f),
          _ = Math.sqrt(h * h + u * u),
          m = 1 + (((15 * p * Math.sqrt(_)) / Math.PI) >> 0),
          v = f / m;
        if (((d += v), a)) {
          s.push(t, e), s.push(r, i);
          for (var y = 1, g = d; y < m; y++, g += v)
            s.push(t, e), s.push(t + Math.sin(g) * _, e + Math.cos(g) * _);
          s.push(t, e), s.push(n, o);
        } else {
          for (s.push(r, i), s.push(t, e), y = 1, g = d; y < m; y++, g += v)
            s.push(t + Math.sin(g) * _, e + Math.cos(g) * _), s.push(t, e);
          s.push(n, o), s.push(t, e);
        }
        return 2 * m;
      }
      function fo(t, e) {
        t.lineStyle.native
          ? (function (t, e) {
              var r = 0,
                i = t.shape,
                n = t.points || i.points,
                o = i.type !== Zt.POLY || i.closeStroke;
              if (0 !== n.length) {
                var s = e.points,
                  a = e.indices,
                  h = n.length / 2,
                  u = s.length / 2,
                  l = u;
                for (s.push(n[0], n[1]), r = 1; r < h; r++)
                  s.push(n[2 * r], n[2 * r + 1]), a.push(l, l + 1), l++;
                o && a.push(l, u);
              }
            })(t, e)
          : (function (t, e) {
              var r = t.shape,
                i = t.points || r.points.slice(),
                n = e.closePointEps;
              if (0 !== i.length) {
                var o = t.lineStyle,
                  s = new oe(i[0], i[1]),
                  a = new oe(i[i.length - 2], i[i.length - 1]),
                  h = r.type !== Zt.POLY || r.closeStroke,
                  u = Math.abs(s.x - a.x) < n && Math.abs(s.y - a.y) < n;
                if (h) {
                  (i = i.slice()),
                    u &&
                      (i.pop(),
                      i.pop(),
                      a.set(i[i.length - 2], i[i.length - 1]));
                  var l = 0.5 * (s.x + a.x),
                    c = 0.5 * (a.y + s.y);
                  i.unshift(l, c), i.push(l, c);
                }
                var d = e.points,
                  f = i.length / 2,
                  p = i.length,
                  _ = d.length / 2,
                  m = o.width / 2,
                  v = m * m,
                  y = o.miterLimit * o.miterLimit,
                  g = i[0],
                  T = i[1],
                  x = i[2],
                  E = i[3],
                  b = 0,
                  A = 0,
                  O = -(T - E),
                  S = g - x,
                  R = 0,
                  I = 0,
                  w = Math.sqrt(O * O + S * S);
                (O /= w), (S /= w), (O *= m), (S *= m);
                var P = o.alignment,
                  M = 2 * (1 - P),
                  D = 2 * P;
                h ||
                  (o.cap === Jn.ROUND
                    ? (p +=
                        co(
                          g - O * (M - D) * 0.5,
                          T - S * (M - D) * 0.5,
                          g - O * M,
                          T - S * M,
                          g + O * D,
                          T + S * D,
                          d,
                          !0
                        ) + 2)
                    : o.cap === Jn.SQUARE &&
                      (p += lo(g, T, O, S, M, D, !0, d))),
                  d.push(g - O * M, T - S * M),
                  d.push(g + O * D, T + S * D);
                for (var C = 1; C < f - 1; ++C) {
                  (g = i[2 * (C - 1)]),
                    (T = i[2 * (C - 1) + 1]),
                    (x = i[2 * C]),
                    (E = i[2 * C + 1]),
                    (b = i[2 * (C + 1)]),
                    (A = i[2 * (C + 1) + 1]),
                    (O = -(T - E)),
                    (S = g - x),
                    (O /= w = Math.sqrt(O * O + S * S)),
                    (S /= w),
                    (O *= m),
                    (S *= m),
                    (R = -(E - A)),
                    (I = x - b),
                    (R /= w = Math.sqrt(R * R + I * I)),
                    (I /= w),
                    (R *= m),
                    (I *= m);
                  var N = x - g,
                    L = T - E,
                    F = x - b,
                    U = A - E,
                    B = L * F - U * N,
                    G = B < 0;
                  if (Math.abs(B) < 0.1)
                    d.push(x - O * M, E - S * M), d.push(x + O * D, E + S * D);
                  else {
                    var X = (-O + g) * (-S + E) - (-O + x) * (-S + T),
                      k = (-R + b) * (-I + E) - (-R + x) * (-I + A),
                      H = (N * k - F * X) / B,
                      j = (U * X - L * k) / B,
                      Y = (H - x) * (H - x) + (j - E) * (j - E),
                      V = x + (H - x) * M,
                      z = E + (j - E) * M,
                      W = x - (H - x) * D,
                      q = E - (j - E) * D,
                      K = G ? M : D;
                    Y <= Math.min(N * N + L * L, F * F + U * U) + K * K * v
                      ? o.join === Zn.BEVEL || Y / v > y
                        ? (G
                            ? (d.push(V, z),
                              d.push(x + O * D, E + S * D),
                              d.push(V, z),
                              d.push(x + R * D, E + I * D))
                            : (d.push(x - O * M, E - S * M),
                              d.push(W, q),
                              d.push(x - R * M, E - I * M),
                              d.push(W, q)),
                          (p += 2))
                        : o.join === Zn.ROUND
                        ? G
                          ? (d.push(V, z),
                            d.push(x + O * D, E + S * D),
                            (p +=
                              co(
                                x,
                                E,
                                x + O * D,
                                E + S * D,
                                x + R * D,
                                E + I * D,
                                d,
                                !0
                              ) + 4),
                            d.push(V, z),
                            d.push(x + R * D, E + I * D))
                          : (d.push(x - O * M, E - S * M),
                            d.push(W, q),
                            (p +=
                              co(
                                x,
                                E,
                                x - O * M,
                                E - S * M,
                                x - R * M,
                                E - I * M,
                                d,
                                !1
                              ) + 4),
                            d.push(x - R * M, E - I * M),
                            d.push(W, q))
                        : (d.push(V, z), d.push(W, q))
                      : (d.push(x - O * M, E - S * M),
                        d.push(x + O * D, E + S * D),
                        o.join === Zn.BEVEL ||
                          Y / v > y ||
                          (o.join === Zn.ROUND
                            ? (p += G
                                ? co(
                                    x,
                                    E,
                                    x + O * D,
                                    E + S * D,
                                    x + R * D,
                                    E + I * D,
                                    d,
                                    !0
                                  ) + 2
                                : co(
                                    x,
                                    E,
                                    x - O * M,
                                    E - S * M,
                                    x - R * M,
                                    E - I * M,
                                    d,
                                    !1
                                  ) + 2)
                            : (G
                                ? (d.push(W, q), d.push(W, q))
                                : (d.push(V, z), d.push(V, z)),
                              (p += 2))),
                        d.push(x - R * M, E - I * M),
                        d.push(x + R * D, E + I * D),
                        (p += 2));
                  }
                }
                (g = i[2 * (f - 2)]),
                  (T = i[2 * (f - 2) + 1]),
                  (x = i[2 * (f - 1)]),
                  (O = -(T - (E = i[2 * (f - 1) + 1]))),
                  (S = g - x),
                  (O /= w = Math.sqrt(O * O + S * S)),
                  (S /= w),
                  (O *= m),
                  (S *= m),
                  d.push(x - O * M, E - S * M),
                  d.push(x + O * D, E + S * D),
                  h ||
                    (o.cap === Jn.ROUND
                      ? (p +=
                          co(
                            x - O * (M - D) * 0.5,
                            E - S * (M - D) * 0.5,
                            x - O * M,
                            E - S * M,
                            x + O * D,
                            E + S * D,
                            d,
                            !1
                          ) + 2)
                      : o.cap === Jn.SQUARE &&
                        (p += lo(x, E, O, S, M, D, !1, d)));
                var Z = e.indices,
                  J = eo.epsilon * eo.epsilon;
                for (C = _; C < p + _ - 2; ++C)
                  (g = d[2 * C]),
                    (T = d[2 * C + 1]),
                    (x = d[2 * (C + 1)]),
                    (E = d[2 * (C + 1) + 1]),
                    (b = d[2 * (C + 2)]),
                    (A = d[2 * (C + 2) + 1]),
                    Math.abs(g * (E - A) + x * (A - T) + b * (T - E)) < J ||
                      Z.push(C, C + 1, C + 2);
              }
            })(t, e);
      }
      var po,
        _o,
        mo = (function () {
          function t() {}
          return (
            (t.curveTo = function (t, e, r, i, n, o) {
              var s = o[o.length - 2],
                a = o[o.length - 1] - e,
                h = s - t,
                u = i - e,
                l = r - t,
                c = Math.abs(a * l - h * u);
              if (c < 1e-8 || 0 === n)
                return (
                  (o[o.length - 2] === t && o[o.length - 1] === e) ||
                    o.push(t, e),
                  null
                );
              var d = a * a + h * h,
                f = u * u + l * l,
                p = a * u + h * l,
                _ = (n * Math.sqrt(d)) / c,
                m = (n * Math.sqrt(f)) / c,
                v = (_ * p) / d,
                y = (m * p) / f,
                g = _ * l + m * h,
                T = _ * u + m * a,
                x = h * (m + v),
                E = a * (m + v),
                b = l * (_ + y),
                A = u * (_ + y);
              return {
                cx: g + t,
                cy: T + e,
                radius: n,
                startAngle: Math.atan2(E - T, x - g),
                endAngle: Math.atan2(A - T, b - g),
                anticlockwise: h * u > l * a,
              };
            }),
            (t.arc = function (t, e, r, i, n, o, s, a, h) {
              for (
                var u = s - o,
                  l = eo._segmentsCount(
                    Math.abs(u) * n,
                    40 * Math.ceil(Math.abs(u) / Jt)
                  ),
                  c = u / (2 * l),
                  d = 2 * c,
                  f = Math.cos(c),
                  p = Math.sin(c),
                  _ = l - 1,
                  m = (_ % 1) / _,
                  v = 0;
                v <= _;
                ++v
              ) {
                var y = c + o + d * (v + m * v),
                  g = Math.cos(y),
                  T = -Math.sin(y);
                h.push((f * g + p * T) * n + r, (f * -T + p * g) * n + i);
              }
            }),
            t
          );
        })(),
        vo = (function () {
          function t() {}
          return (
            (t.curveLength = function (t, e, r, i, n, o, s, a) {
              for (
                var h = 0,
                  u = 0,
                  l = 0,
                  c = 0,
                  d = 0,
                  f = 0,
                  p = 0,
                  _ = 0,
                  m = 0,
                  v = 0,
                  y = 0,
                  g = t,
                  T = e,
                  x = 1;
                x <= 10;
                ++x
              )
                (v =
                  g -
                  (_ =
                    (p = (f = (d = 1 - (u = x / 10)) * d) * d) * t +
                    3 * f * u * r +
                    3 * d * (l = u * u) * n +
                    (c = l * u) * s)),
                  (y = T - (m = p * e + 3 * f * u * i + 3 * d * l * o + c * a)),
                  (g = _),
                  (T = m),
                  (h += Math.sqrt(v * v + y * y));
              return h;
            }),
            (t.curveTo = function (e, r, i, n, o, s, a) {
              var h = a[a.length - 2],
                u = a[a.length - 1];
              a.length -= 2;
              var l = eo._segmentsCount(t.curveLength(h, u, e, r, i, n, o, s)),
                c = 0,
                d = 0,
                f = 0,
                p = 0,
                _ = 0;
              a.push(h, u);
              for (var m = 1, v = 0; m <= l; ++m)
                (f = (d = (c = 1 - (v = m / l)) * c) * c),
                  (_ = (p = v * v) * v),
                  a.push(
                    f * h + 3 * d * v * e + 3 * c * p * i + _ * o,
                    f * u + 3 * d * v * r + 3 * c * p * n + _ * s
                  );
            }),
            t
          );
        })(),
        yo = (function () {
          function t() {}
          return (
            (t.curveLength = function (t, e, r, i, n, o) {
              var s = t - 2 * r + n,
                a = e - 2 * i + o,
                h = 2 * r - 2 * t,
                u = 2 * i - 2 * e,
                l = 4 * (s * s + a * a),
                c = 4 * (s * h + a * u),
                d = h * h + u * u,
                f = 2 * Math.sqrt(l + c + d),
                p = Math.sqrt(l),
                _ = 2 * l * p,
                m = 2 * Math.sqrt(d),
                v = c / p;
              return (
                (_ * f +
                  p * c * (f - m) +
                  (4 * d * l - c * c) * Math.log((2 * p + v + f) / (v + m))) /
                (4 * _)
              );
            }),
            (t.curveTo = function (e, r, i, n, o) {
              for (
                var s = o[o.length - 2],
                  a = o[o.length - 1],
                  h = eo._segmentsCount(t.curveLength(s, a, e, r, i, n)),
                  u = 0,
                  l = 0,
                  c = 1;
                c <= h;
                ++c
              ) {
                var d = c / h;
                (u = s + (e - s) * d),
                  (l = a + (r - a) * d),
                  o.push(
                    u + (e + (i - e) * d - u) * d,
                    l + (r + (n - r) * d - l) * d
                  );
              }
            }),
            t
          );
        })(),
        go = (function () {
          function t() {
            this.reset();
          }
          return (
            (t.prototype.begin = function (t, e, r) {
              this.reset(),
                (this.style = t),
                (this.start = e),
                (this.attribStart = r);
            }),
            (t.prototype.end = function (t, e) {
              (this.attribSize = e - this.attribStart),
                (this.size = t - this.start);
            }),
            (t.prototype.reset = function () {
              (this.style = null),
                (this.size = 0),
                (this.start = 0),
                (this.attribStart = 0),
                (this.attribSize = 0);
            }),
            t
          );
        })(),
        To =
          (((po = {})[Zt.POLY] = oo),
          (po[Zt.CIRC] = so),
          (po[Zt.ELIP] = so),
          (po[Zt.RECT] = {
            build: function (t) {
              var e = t.shape,
                r = e.x,
                i = e.y,
                n = e.width,
                o = e.height,
                s = t.points;
              (s.length = 0), s.push(r, i, r + n, i, r + n, i + o, r, i + o);
            },
            triangulate: function (t, e) {
              var r = t.points,
                i = e.points,
                n = i.length / 2;
              i.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]),
                e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3);
            },
          }),
          (po[Zt.RREC] = uo),
          po),
        xo = [],
        Eo = [],
        bo = (function () {
          function t(t, e, r, i) {
            void 0 === e && (e = null),
              void 0 === r && (r = null),
              void 0 === i && (i = null),
              (this.shape = t),
              (this.lineStyle = r),
              (this.fillStyle = e),
              (this.matrix = i),
              (this.type = t.type),
              (this.points = []),
              (this.holes = []);
          }
          return (
            (t.prototype.clone = function () {
              return new t(
                this.shape,
                this.fillStyle,
                this.lineStyle,
                this.matrix
              );
            }),
            (t.prototype.destroy = function () {
              (this.shape = null),
                (this.holes.length = 0),
                (this.holes = null),
                (this.points.length = 0),
                (this.points = null),
                (this.lineStyle = null),
                (this.fillStyle = null);
            }),
            t
          );
        })(),
        Ao = new oe(),
        Oo = new ve(),
        So = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.uvsFloat32 = null),
              (e.indicesUint16 = null),
              (e.points = []),
              (e.colors = []),
              (e.uvs = []),
              (e.indices = []),
              (e.textureIds = []),
              (e.graphicsData = []),
              (e.dirty = 0),
              (e.batchDirty = -1),
              (e.cacheDirty = -1),
              (e.clearDirty = 0),
              (e.drawCalls = []),
              (e.batches = []),
              (e.shapeIndex = 0),
              (e._bounds = new ve()),
              (e.boundsDirty = -1),
              (e.boundsPadding = 0),
              (e.batchable = !1),
              (e.indicesUint16 = null),
              (e.uvsFloat32 = null),
              (e.closePointEps = 1e-4),
              e
            );
          }
          return (
            no(e, t),
            Object.defineProperty(e.prototype, "bounds", {
              get: function () {
                return (
                  this.boundsDirty !== this.dirty &&
                    ((this.boundsDirty = this.dirty), this.calculateBounds()),
                  this._bounds
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.invalidate = function () {
              (this.boundsDirty = -1),
                this.dirty++,
                this.batchDirty++,
                (this.shapeIndex = 0),
                (this.points.length = 0),
                (this.colors.length = 0),
                (this.uvs.length = 0),
                (this.indices.length = 0),
                (this.textureIds.length = 0);
              for (var t = 0; t < this.drawCalls.length; t++)
                this.drawCalls[t].texArray.clear(), Eo.push(this.drawCalls[t]);
              for (
                this.drawCalls.length = 0, t = 0;
                t < this.batches.length;
                t++
              ) {
                var e = this.batches[t];
                e.reset(), xo.push(e);
              }
              this.batches.length = 0;
            }),
            (e.prototype.clear = function () {
              return (
                this.graphicsData.length > 0 &&
                  (this.invalidate(),
                  this.clearDirty++,
                  (this.graphicsData.length = 0)),
                this
              );
            }),
            (e.prototype.drawShape = function (t, e, r, i) {
              void 0 === e && (e = null),
                void 0 === r && (r = null),
                void 0 === i && (i = null);
              var n = new bo(t, e, r, i);
              return this.graphicsData.push(n), this.dirty++, this;
            }),
            (e.prototype.drawHole = function (t, e) {
              if ((void 0 === e && (e = null), !this.graphicsData.length))
                return null;
              var r = new bo(t, null, null, e),
                i = this.graphicsData[this.graphicsData.length - 1];
              return (
                (r.lineStyle = i.lineStyle), i.holes.push(r), this.dirty++, this
              );
            }),
            (e.prototype.destroy = function () {
              t.prototype.destroy.call(this);
              for (var e = 0; e < this.graphicsData.length; ++e)
                this.graphicsData[e].destroy();
              (this.points.length = 0),
                (this.points = null),
                (this.colors.length = 0),
                (this.colors = null),
                (this.uvs.length = 0),
                (this.uvs = null),
                (this.indices.length = 0),
                (this.indices = null),
                this.indexBuffer.destroy(),
                (this.indexBuffer = null),
                (this.graphicsData.length = 0),
                (this.graphicsData = null),
                (this.drawCalls.length = 0),
                (this.drawCalls = null),
                (this.batches.length = 0),
                (this.batches = null),
                (this._bounds = null);
            }),
            (e.prototype.containsPoint = function (t) {
              for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
                var i = e[r];
                if (
                  i.fillStyle.visible &&
                  i.shape &&
                  (i.matrix ? i.matrix.applyInverse(t, Ao) : Ao.copyFrom(t),
                  i.shape.contains(Ao.x, Ao.y))
                ) {
                  var n = !1;
                  if (i.holes)
                    for (var o = 0; o < i.holes.length; o++)
                      if (i.holes[o].shape.contains(Ao.x, Ao.y)) {
                        n = !0;
                        break;
                      }
                  if (!n) return !0;
                }
              }
              return !1;
            }),
            (e.prototype.updateBatches = function (t) {
              if (this.graphicsData.length) {
                if (this.validateBatching()) {
                  this.cacheDirty = this.dirty;
                  var e = this.uvs,
                    r = this.graphicsData,
                    i = null,
                    n = null;
                  this.batches.length > 0 &&
                    (n = (i = this.batches[this.batches.length - 1]).style);
                  for (var o = this.shapeIndex; o < r.length; o++) {
                    this.shapeIndex++;
                    var s = r[o],
                      a = s.fillStyle,
                      h = s.lineStyle;
                    To[s.type].build(s),
                      s.matrix && this.transformPoints(s.points, s.matrix);
                    for (var u = 0; u < 2; u++) {
                      var l = 0 === u ? a : h;
                      if (l.visible) {
                        var c = l.texture.baseTexture,
                          d = this.indices.length,
                          f = this.points.length / 2;
                        (c.wrapMode = lt.REPEAT),
                          0 === u ? this.processFill(s) : this.processLine(s);
                        var p = this.points.length / 2 - f;
                        0 !== p &&
                          (i &&
                            !this._compareStyles(n, l) &&
                            (i.end(d, f), (i = null)),
                          i ||
                            ((i = xo.pop() || new go()).begin(l, d, f),
                            this.batches.push(i),
                            (n = l)),
                          this.addUvs(
                            this.points,
                            e,
                            l.texture,
                            f,
                            p,
                            l.matrix
                          ));
                      }
                    }
                  }
                  var _ = this.indices.length,
                    m = this.points.length / 2;
                  if ((i && i.end(_, m), 0 !== this.batches.length)) {
                    if (
                      this.indicesUint16 &&
                      this.indices.length === this.indicesUint16.length
                    )
                      this.indicesUint16.set(this.indices);
                    else {
                      var v = m > 65535 && t;
                      this.indicesUint16 = v
                        ? new Uint32Array(this.indices)
                        : new Uint16Array(this.indices);
                    }
                    (this.batchable = this.isBatchable()),
                      this.batchable
                        ? this.packBatches()
                        : this.buildDrawCalls();
                  } else this.batchable = !0;
                }
              } else this.batchable = !0;
            }),
            (e.prototype._compareStyles = function (t, e) {
              return (
                !(!t || !e) &&
                t.texture.baseTexture === e.texture.baseTexture &&
                t.color + t.alpha === e.color + e.alpha &&
                !!t.native == !!e.native
              );
            }),
            (e.prototype.validateBatching = function () {
              if (this.dirty === this.cacheDirty || !this.graphicsData.length)
                return !1;
              for (var t = 0, e = this.graphicsData.length; t < e; t++) {
                var r = this.graphicsData[t],
                  i = r.fillStyle,
                  n = r.lineStyle;
                if (i && !i.texture.baseTexture.valid) return !1;
                if (n && !n.texture.baseTexture.valid) return !1;
              }
              return !0;
            }),
            (e.prototype.packBatches = function () {
              this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
              for (var t = this.batches, e = 0, r = t.length; e < r; e++)
                for (var i = t[e], n = 0; n < i.size; n++) {
                  var o = i.start + n;
                  this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart;
                }
            }),
            (e.prototype.isBatchable = function () {
              if (this.points.length > 131070) return !1;
              for (var t = this.batches, r = 0; r < t.length; r++)
                if (t[r].style.native) return !1;
              return this.points.length < 2 * e.BATCHABLE_SIZE;
            }),
            (e.prototype.buildDrawCalls = function () {
              for (
                var t = ++Ve._globalBatch, e = 0;
                e < this.drawCalls.length;
                e++
              )
                this.drawCalls[e].texArray.clear(), Eo.push(this.drawCalls[e]);
              this.drawCalls.length = 0;
              var r = this.colors,
                i = this.textureIds,
                n = Eo.pop();
              n || ((n = new Li()).texArray = new Fi()),
                (n.texArray.count = 0),
                (n.start = 0),
                (n.size = 0),
                (n.type = nt.TRIANGLES);
              var o = 0,
                s = null,
                a = 0,
                h = !1,
                u = nt.TRIANGLES,
                l = 0;
              for (
                this.drawCalls.push(n), e = 0;
                e < this.batches.length;
                e++
              ) {
                var c = this.batches[e],
                  d = c.style,
                  f = d.texture.baseTexture;
                h !== !!d.native &&
                  ((u = (h = !!d.native) ? nt.LINES : nt.TRIANGLES),
                  (s = null),
                  (o = 8),
                  t++),
                  s !== f &&
                    ((s = f),
                    f._batchEnabled !== t &&
                      (8 === o &&
                        (t++,
                        (o = 0),
                        n.size > 0 &&
                          ((n = Eo.pop()) ||
                            ((n = new Li()).texArray = new Fi()),
                          this.drawCalls.push(n)),
                        (n.start = l),
                        (n.size = 0),
                        (n.texArray.count = 0),
                        (n.type = u)),
                      (f.touched = 1),
                      (f._batchEnabled = t),
                      (f._batchLocation = o),
                      (f.wrapMode = lt.REPEAT),
                      (n.texArray.elements[n.texArray.count++] = f),
                      o++)),
                  (n.size += c.size),
                  (l += c.size),
                  (a = f._batchLocation),
                  this.addColors(r, d.color, d.alpha, c.attribSize),
                  this.addTextureIds(i, a, c.attribSize);
              }
              (Ve._globalBatch = t), this.packAttributes();
            }),
            (e.prototype.packAttributes = function () {
              for (
                var t = this.points,
                  e = this.uvs,
                  r = this.colors,
                  i = this.textureIds,
                  n = new ArrayBuffer(3 * t.length * 4),
                  o = new Float32Array(n),
                  s = new Uint32Array(n),
                  a = 0,
                  h = 0;
                h < t.length / 2;
                h++
              )
                (o[a++] = t[2 * h]),
                  (o[a++] = t[2 * h + 1]),
                  (o[a++] = e[2 * h]),
                  (o[a++] = e[2 * h + 1]),
                  (s[a++] = r[h]),
                  (o[a++] = i[h]);
              this._buffer.update(n),
                this._indexBuffer.update(this.indicesUint16);
            }),
            (e.prototype.processFill = function (t) {
              t.holes.length
                ? (this.processHoles(t.holes), oo.triangulate(t, this))
                : To[t.type].triangulate(t, this);
            }),
            (e.prototype.processLine = function (t) {
              fo(t, this);
              for (var e = 0; e < t.holes.length; e++) fo(t.holes[e], this);
            }),
            (e.prototype.processHoles = function (t) {
              for (var e = 0; e < t.length; e++) {
                var r = t[e];
                To[r.type].build(r),
                  r.matrix && this.transformPoints(r.points, r.matrix);
              }
            }),
            (e.prototype.calculateBounds = function () {
              var t = this._bounds,
                e = Oo,
                r = ae.IDENTITY;
              this._bounds.clear(), e.clear();
              for (var i = 0; i < this.graphicsData.length; i++) {
                var n = this.graphicsData[i],
                  o = n.shape,
                  s = n.type,
                  a = n.lineStyle,
                  h = n.matrix || ae.IDENTITY,
                  u = 0;
                if (a && a.visible) {
                  var l = a.alignment;
                  (u = a.width),
                    s === Zt.POLY
                      ? (u *= 0.5 + Math.abs(0.5 - l))
                      : (u *= Math.max(0, l));
                }
                if (
                  (r !== h &&
                    (e.isEmpty() || (t.addBoundsMatrix(e, r), e.clear()),
                    (r = h)),
                  s === Zt.RECT || s === Zt.RREC)
                ) {
                  var c = o;
                  e.addFramePad(c.x, c.y, c.x + c.width, c.y + c.height, u, u);
                } else if (s === Zt.CIRC) {
                  var d = o;
                  e.addFramePad(d.x, d.y, d.x, d.y, d.radius + u, d.radius + u);
                } else if (s === Zt.ELIP) {
                  var f = o;
                  e.addFramePad(f.x, f.y, f.x, f.y, f.width + u, f.height + u);
                } else {
                  var p = o;
                  t.addVerticesMatrix(r, p.points, 0, p.points.length, u, u);
                }
              }
              e.isEmpty() || t.addBoundsMatrix(e, r),
                t.pad(this.boundsPadding, this.boundsPadding);
            }),
            (e.prototype.transformPoints = function (t, e) {
              for (var r = 0; r < t.length / 2; r++) {
                var i = t[2 * r],
                  n = t[2 * r + 1];
                (t[2 * r] = e.a * i + e.c * n + e.tx),
                  (t[2 * r + 1] = e.b * i + e.d * n + e.ty);
              }
            }),
            (e.prototype.addColors = function (t, e, r, i) {
              for (
                var n = Ct((e >> 16) + (65280 & e) + ((255 & e) << 16), r);
                i-- > 0;

              )
                t.push(n);
            }),
            (e.prototype.addTextureIds = function (t, e, r) {
              for (; r-- > 0; ) t.push(e);
            }),
            (e.prototype.addUvs = function (t, e, r, i, n, o) {
              void 0 === o && (o = null);
              for (var s = 0, a = e.length, h = r.frame; s < n; ) {
                var u = t[2 * (i + s)],
                  l = t[2 * (i + s) + 1];
                if (o) {
                  var c = o.a * u + o.c * l + o.tx;
                  (l = o.b * u + o.d * l + o.ty), (u = c);
                }
                s++, e.push(u / h.width, l / h.height);
              }
              var d = r.baseTexture;
              (h.width < d.width || h.height < d.height) &&
                this.adjustUvs(e, r, a, n);
            }),
            (e.prototype.adjustUvs = function (t, e, r, i) {
              for (
                var n = e.baseTexture,
                  o = 1e-6,
                  s = r + 2 * i,
                  a = e.frame,
                  h = a.width / n.width,
                  u = a.height / n.height,
                  l = a.x / a.width,
                  c = a.y / a.height,
                  d = Math.floor(t[r] + o),
                  f = Math.floor(t[r + 1] + o),
                  p = r + 2;
                p < s;
                p += 2
              )
                (d = Math.min(d, Math.floor(t[p] + o))),
                  (f = Math.min(f, Math.floor(t[p + 1] + o)));
              for (l -= d, c -= f, p = r; p < s; p += 2)
                (t[p] = (t[p] + l) * h), (t[p + 1] = (t[p + 1] + c) * u);
            }),
            (e.BATCHABLE_SIZE = 100),
            e
          );
        })(Xi),
        Ro = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.width = 0),
              (e.alignment = 0.5),
              (e.native = !1),
              (e.cap = Jn.BUTT),
              (e.join = Zn.MITER),
              (e.miterLimit = 10),
              e
            );
          }
          return (
            no(e, t),
            (e.prototype.clone = function () {
              var t = new e();
              return (
                (t.color = this.color),
                (t.alpha = this.alpha),
                (t.texture = this.texture),
                (t.matrix = this.matrix),
                (t.visible = this.visible),
                (t.width = this.width),
                (t.alignment = this.alignment),
                (t.native = this.native),
                (t.cap = this.cap),
                (t.join = this.join),
                (t.miterLimit = this.miterLimit),
                t
              );
            }),
            (e.prototype.reset = function () {
              t.prototype.reset.call(this),
                (this.color = 0),
                (this.alignment = 0.5),
                (this.width = 0),
                (this.native = !1);
            }),
            e
          );
        })(ro),
        Io = new Float32Array(3),
        wo = {},
        Po = (function (t) {
          function e(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              (r._geometry = e || new So()),
              r._geometry.refCount++,
              (r.shader = null),
              (r.state = li.for2d()),
              (r._fillStyle = new ro()),
              (r._lineStyle = new Ro()),
              (r._matrix = null),
              (r._holeMode = !1),
              (r.currentPath = null),
              (r.batches = []),
              (r.batchTint = -1),
              (r.batchDirty = -1),
              (r.vertexData = null),
              (r.pluginName = "batch"),
              (r._transformID = -1),
              (r.tint = 16777215),
              (r.blendMode = it.NORMAL),
              r
            );
          }
          return (
            no(e, t),
            Object.defineProperty(e.prototype, "geometry", {
              get: function () {
                return this._geometry;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.clone = function () {
              return this.finishPoly(), new e(this._geometry);
            }),
            Object.defineProperty(e.prototype, "blendMode", {
              get: function () {
                return this.state.blendMode;
              },
              set: function (t) {
                this.state.blendMode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return this._tint;
              },
              set: function (t) {
                this._tint = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "fill", {
              get: function () {
                return this._fillStyle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "line", {
              get: function () {
                return this._lineStyle;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.lineStyle = function (t, e, r, i, n) {
              return (
                void 0 === t && (t = null),
                void 0 === e && (e = 0),
                void 0 === r && (r = 1),
                void 0 === i && (i = 0.5),
                void 0 === n && (n = !1),
                "number" == typeof t &&
                  (t = {
                    width: t,
                    color: e,
                    alpha: r,
                    alignment: i,
                    native: n,
                  }),
                this.lineTextureStyle(t)
              );
            }),
            (e.prototype.lineTextureStyle = function (t) {
              (t = Object.assign(
                {
                  width: 0,
                  texture: hr.WHITE,
                  color: t && t.texture ? 16777215 : 0,
                  alpha: 1,
                  matrix: null,
                  alignment: 0.5,
                  native: !1,
                  cap: Jn.BUTT,
                  join: Zn.MITER,
                  miterLimit: 10,
                },
                t
              )),
                this.currentPath && this.startPoly();
              var e = t.width > 0 && t.alpha > 0;
              return (
                e
                  ? (t.matrix &&
                      ((t.matrix = t.matrix.clone()), t.matrix.invert()),
                    Object.assign(this._lineStyle, { visible: e }, t))
                  : this._lineStyle.reset(),
                this
              );
            }),
            (e.prototype.startPoly = function () {
              if (this.currentPath) {
                var t = this.currentPath.points,
                  e = this.currentPath.points.length;
                e > 2 &&
                  (this.drawShape(this.currentPath),
                  (this.currentPath = new ie()),
                  (this.currentPath.closeStroke = !1),
                  this.currentPath.points.push(t[e - 2], t[e - 1]));
              } else
                (this.currentPath = new ie()),
                  (this.currentPath.closeStroke = !1);
            }),
            (e.prototype.finishPoly = function () {
              this.currentPath &&
                (this.currentPath.points.length > 2
                  ? (this.drawShape(this.currentPath),
                    (this.currentPath = null))
                  : (this.currentPath.points.length = 0));
            }),
            (e.prototype.moveTo = function (t, e) {
              return (
                this.startPoly(),
                (this.currentPath.points[0] = t),
                (this.currentPath.points[1] = e),
                this
              );
            }),
            (e.prototype.lineTo = function (t, e) {
              this.currentPath || this.moveTo(0, 0);
              var r = this.currentPath.points,
                i = r[r.length - 2],
                n = r[r.length - 1];
              return (i === t && n === e) || r.push(t, e), this;
            }),
            (e.prototype._initCurve = function (t, e) {
              void 0 === t && (t = 0),
                void 0 === e && (e = 0),
                this.currentPath
                  ? 0 === this.currentPath.points.length &&
                    (this.currentPath.points = [t, e])
                  : this.moveTo(t, e);
            }),
            (e.prototype.quadraticCurveTo = function (t, e, r, i) {
              this._initCurve();
              var n = this.currentPath.points;
              return (
                0 === n.length && this.moveTo(0, 0),
                yo.curveTo(t, e, r, i, n),
                this
              );
            }),
            (e.prototype.bezierCurveTo = function (t, e, r, i, n, o) {
              return (
                this._initCurve(),
                vo.curveTo(t, e, r, i, n, o, this.currentPath.points),
                this
              );
            }),
            (e.prototype.arcTo = function (t, e, r, i, n) {
              this._initCurve(t, e);
              var o = this.currentPath.points,
                s = mo.curveTo(t, e, r, i, n, o);
              if (s) {
                var a = s.cx,
                  h = s.cy,
                  u = s.radius,
                  l = s.startAngle,
                  c = s.endAngle,
                  d = s.anticlockwise;
                this.arc(a, h, u, l, c, d);
              }
              return this;
            }),
            (e.prototype.arc = function (t, e, r, i, n, o) {
              if ((void 0 === o && (o = !1), i === n)) return this;
              if (
                (!o && n <= i ? (n += Jt) : o && i <= n && (i += Jt),
                0 == n - i)
              )
                return this;
              var s = t + Math.cos(i) * r,
                a = e + Math.sin(i) * r,
                h = this._geometry.closePointEps,
                u = this.currentPath ? this.currentPath.points : null;
              if (u) {
                var l = Math.abs(u[u.length - 2] - s),
                  c = Math.abs(u[u.length - 1] - a);
                (l < h && c < h) || u.push(s, a);
              } else this.moveTo(s, a), (u = this.currentPath.points);
              return mo.arc(s, a, t, e, r, i, n, o, u), this;
            }),
            (e.prototype.beginFill = function (t, e) {
              return (
                void 0 === t && (t = 0),
                void 0 === e && (e = 1),
                this.beginTextureFill({ texture: hr.WHITE, color: t, alpha: e })
              );
            }),
            (e.prototype.beginTextureFill = function (t) {
              (t = Object.assign(
                { texture: hr.WHITE, color: 16777215, alpha: 1, matrix: null },
                t
              )),
                this.currentPath && this.startPoly();
              var e = t.alpha > 0;
              return (
                e
                  ? (t.matrix &&
                      ((t.matrix = t.matrix.clone()), t.matrix.invert()),
                    Object.assign(this._fillStyle, { visible: e }, t))
                  : this._fillStyle.reset(),
                this
              );
            }),
            (e.prototype.endFill = function () {
              return this.finishPoly(), this._fillStyle.reset(), this;
            }),
            (e.prototype.drawRect = function (t, e, r, i) {
              return this.drawShape(new te(t, e, r, i));
            }),
            (e.prototype.drawRoundedRect = function (t, e, r, i, n) {
              return this.drawShape(new ne(t, e, r, i, n));
            }),
            (e.prototype.drawCircle = function (t, e, r) {
              return this.drawShape(new ee(t, e, r));
            }),
            (e.prototype.drawEllipse = function (t, e, r, i) {
              return this.drawShape(new re(t, e, r, i));
            }),
            (e.prototype.drawPolygon = function () {
              for (
                var t, e = arguments, r = [], i = 0;
                i < arguments.length;
                i++
              )
                r[i] = e[i];
              var n = !0,
                o = r[0];
              o.points
                ? ((n = o.closeStroke), (t = o.points))
                : (t = Array.isArray(r[0]) ? r[0] : r);
              var s = new ie(t);
              return (s.closeStroke = n), this.drawShape(s), this;
            }),
            (e.prototype.drawShape = function (t) {
              return (
                this._holeMode
                  ? this._geometry.drawHole(t, this._matrix)
                  : this._geometry.drawShape(
                      t,
                      this._fillStyle.clone(),
                      this._lineStyle.clone(),
                      this._matrix
                    ),
                this
              );
            }),
            (e.prototype.clear = function () {
              return (
                this._geometry.clear(),
                this._lineStyle.reset(),
                this._fillStyle.reset(),
                this._boundsID++,
                (this._matrix = null),
                (this._holeMode = !1),
                (this.currentPath = null),
                this
              );
            }),
            (e.prototype.isFastRect = function () {
              var t = this._geometry.graphicsData;
              return !(
                1 !== t.length ||
                t[0].shape.type !== Zt.RECT ||
                t[0].holes.length ||
                (t[0].lineStyle.visible && t[0].lineStyle.width)
              );
            }),
            (e.prototype._render = function (t) {
              this.finishPoly();
              var e = this._geometry,
                r = t.context.supports.uint32Indices;
              e.updateBatches(r),
                e.batchable
                  ? (this.batchDirty !== e.batchDirty &&
                      this._populateBatches(),
                    this._renderBatched(t))
                  : (t.batch.flush(), this._renderDirect(t));
            }),
            (e.prototype._populateBatches = function () {
              var t = this._geometry,
                e = this.blendMode,
                r = t.batches.length;
              (this.batchTint = -1),
                (this._transformID = -1),
                (this.batchDirty = t.batchDirty),
                (this.batches.length = r),
                (this.vertexData = new Float32Array(t.points));
              for (var i = 0; i < r; i++) {
                var n = t.batches[i],
                  o = n.style.color,
                  s = new Float32Array(
                    this.vertexData.buffer,
                    4 * n.attribStart * 2,
                    2 * n.attribSize
                  ),
                  a = new Float32Array(
                    t.uvsFloat32.buffer,
                    4 * n.attribStart * 2,
                    2 * n.attribSize
                  ),
                  h = {
                    vertexData: s,
                    blendMode: e,
                    indices: new Uint16Array(
                      t.indicesUint16.buffer,
                      2 * n.start,
                      n.size
                    ),
                    uvs: a,
                    _batchRGB: It(o),
                    _tintRGB: o,
                    _texture: n.style.texture,
                    alpha: n.style.alpha,
                    worldAlpha: 1,
                  };
                this.batches[i] = h;
              }
            }),
            (e.prototype._renderBatched = function (t) {
              if (this.batches.length) {
                t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                  this.calculateVertices(),
                  this.calculateTints();
                for (var e = 0, r = this.batches.length; e < r; e++) {
                  var i = this.batches[e];
                  (i.worldAlpha = this.worldAlpha * i.alpha),
                    t.plugins[this.pluginName].render(i);
                }
              }
            }),
            (e.prototype._renderDirect = function (t) {
              var e = this._resolveDirectShader(t),
                r = this._geometry,
                i = this.tint,
                n = this.worldAlpha,
                o = e.uniforms,
                s = r.drawCalls;
              (o.translationMatrix = this.transform.worldTransform),
                (o.tint[0] = (((i >> 16) & 255) / 255) * n),
                (o.tint[1] = (((i >> 8) & 255) / 255) * n),
                (o.tint[2] = ((255 & i) / 255) * n),
                (o.tint[3] = n),
                t.shader.bind(e),
                t.geometry.bind(r, e),
                t.state.set(this.state);
              for (var a = 0, h = s.length; a < h; a++)
                this._renderDrawCallDirect(t, r.drawCalls[a]);
            }),
            (e.prototype._renderDrawCallDirect = function (t, e) {
              for (
                var r = e.texArray,
                  i = e.type,
                  n = e.size,
                  o = e.start,
                  s = r.count,
                  a = 0;
                a < s;
                a++
              )
                t.texture.bind(r.elements[a], a);
              t.geometry.draw(i, n, o);
            }),
            (e.prototype._resolveDirectShader = function (t) {
              var e = this.shader,
                r = this.pluginName;
              if (!e) {
                if (!wo[r]) {
                  for (
                    var i = t.plugins.batch.MAX_TEXTURES,
                      n = new Int32Array(i),
                      o = 0;
                    o < i;
                    o++
                  )
                    n[o] = o;
                  var s = {
                      tint: new Float32Array([1, 1, 1, 1]),
                      translationMatrix: new ae(),
                      default: Ar.from({ uSamplers: n }, !0),
                    },
                    a = t.plugins[r]._shader.program;
                  wo[r] = new ui(a, s);
                }
                e = wo[r];
              }
              return e;
            }),
            (e.prototype._calculateBounds = function () {
              this.finishPoly();
              var t = this._geometry;
              if (t.graphicsData.length) {
                var e = t.bounds,
                  r = e.minX,
                  i = e.minY,
                  n = e.maxX,
                  o = e.maxY;
                this._bounds.addFrame(this.transform, r, i, n, o);
              }
            }),
            (e.prototype.containsPoint = function (t) {
              return (
                this.worldTransform.applyInverse(t, e._TEMP_POINT),
                this._geometry.containsPoint(e._TEMP_POINT)
              );
            }),
            (e.prototype.calculateTints = function () {
              if (this.batchTint !== this.tint) {
                this.batchTint = this.tint;
                for (
                  var t = It(this.tint, Io), e = 0;
                  e < this.batches.length;
                  e++
                ) {
                  var r = this.batches[e],
                    i = r._batchRGB,
                    n =
                      ((t[0] * i[0] * 255) << 16) +
                      ((t[1] * i[1] * 255) << 8) +
                      (0 | (t[2] * i[2] * 255));
                  r._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16);
                }
              }
            }),
            (e.prototype.calculateVertices = function () {
              var t = this.transform._worldID;
              if (this._transformID !== t) {
                this._transformID = t;
                for (
                  var e = this.transform.worldTransform,
                    r = e.a,
                    i = e.b,
                    n = e.c,
                    o = e.d,
                    s = e.tx,
                    a = e.ty,
                    h = this._geometry.points,
                    u = this.vertexData,
                    l = 0,
                    c = 0;
                  c < h.length;
                  c += 2
                ) {
                  var d = h[c],
                    f = h[c + 1];
                  (u[l++] = r * d + n * f + s), (u[l++] = o * f + i * d + a);
                }
              }
            }),
            (e.prototype.closePath = function () {
              var t = this.currentPath;
              return t && (t.closeStroke = !0), this;
            }),
            (e.prototype.setMatrix = function (t) {
              return (this._matrix = t), this;
            }),
            (e.prototype.beginHole = function () {
              return this.finishPoly(), (this._holeMode = !0), this;
            }),
            (e.prototype.endHole = function () {
              return this.finishPoly(), (this._holeMode = !1), this;
            }),
            (e.prototype.destroy = function (e) {
              this._geometry.refCount--,
                0 === this._geometry.refCount && this._geometry.dispose(),
                (this._matrix = null),
                (this.currentPath = null),
                this._lineStyle.destroy(),
                (this._lineStyle = null),
                this._fillStyle.destroy(),
                (this._fillStyle = null),
                (this._geometry = null),
                (this.shader = null),
                (this.vertexData = null),
                (this.batches.length = 0),
                (this.batches = null),
                t.prototype.destroy.call(this, e);
            }),
            (e._TEMP_POINT = new oe()),
            e
          );
        })(be),
        Mo = function (t, e) {
          return (Mo =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        Do = new oe(),
        Co = new Uint16Array([0, 1, 2, 0, 2, 3]),
        No = (function (t) {
          function e(e) {
            var r = t.call(this) || this;
            return (
              (r._anchor = new se(
                r._onAnchorUpdate,
                r,
                e ? e.defaultAnchor.x : 0,
                e ? e.defaultAnchor.y : 0
              )),
              (r._texture = null),
              (r._width = 0),
              (r._height = 0),
              (r._tint = null),
              (r._tintRGB = null),
              (r.tint = 16777215),
              (r.blendMode = it.NORMAL),
              (r._cachedTint = 16777215),
              (r.uvs = null),
              (r.texture = e || hr.EMPTY),
              (r.vertexData = new Float32Array(8)),
              (r.vertexTrimmedData = null),
              (r._transformID = -1),
              (r._textureID = -1),
              (r._transformTrimmedID = -1),
              (r._textureTrimmedID = -1),
              (r.indices = Co),
              (r.pluginName = "batch"),
              (r.isSprite = !0),
              (r._roundPixels = yt.ROUND_PIXELS),
              r
            );
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              Mo(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            (e.prototype._onTextureUpdate = function () {
              (this._textureID = -1),
                (this._textureTrimmedID = -1),
                (this._cachedTint = 16777215),
                this._width &&
                  (this.scale.x =
                    (Gt(this.scale.x) * this._width) /
                    this._texture.orig.width),
                this._height &&
                  (this.scale.y =
                    (Gt(this.scale.y) * this._height) /
                    this._texture.orig.height);
            }),
            (e.prototype._onAnchorUpdate = function () {
              (this._transformID = -1), (this._transformTrimmedID = -1);
            }),
            (e.prototype.calculateVertices = function () {
              var t = this._texture;
              if (
                this._transformID !== this.transform._worldID ||
                this._textureID !== t._updateID
              ) {
                this._textureID !== t._updateID &&
                  (this.uvs = this._texture._uvs.uvsFloat32),
                  (this._transformID = this.transform._worldID),
                  (this._textureID = t._updateID);
                var e = this.transform.worldTransform,
                  r = e.a,
                  i = e.b,
                  n = e.c,
                  o = e.d,
                  s = e.tx,
                  a = e.ty,
                  h = this.vertexData,
                  u = t.trim,
                  l = t.orig,
                  c = this._anchor,
                  d = 0,
                  f = 0,
                  p = 0,
                  _ = 0;
                if (
                  (u
                    ? ((d = (f = u.x - c._x * l.width) + u.width),
                      (p = (_ = u.y - c._y * l.height) + u.height))
                    : ((d = (f = -c._x * l.width) + l.width),
                      (p = (_ = -c._y * l.height) + l.height)),
                  (h[0] = r * f + n * _ + s),
                  (h[1] = o * _ + i * f + a),
                  (h[2] = r * d + n * _ + s),
                  (h[3] = o * _ + i * d + a),
                  (h[4] = r * d + n * p + s),
                  (h[5] = o * p + i * d + a),
                  (h[6] = r * f + n * p + s),
                  (h[7] = o * p + i * f + a),
                  this._roundPixels)
                )
                  for (var m = yt.RESOLUTION, v = 0; v < h.length; ++v)
                    h[v] = Math.round(((h[v] * m) | 0) / m);
              }
            }),
            (e.prototype.calculateTrimmedVertices = function () {
              if (this.vertexTrimmedData) {
                if (
                  this._transformTrimmedID === this.transform._worldID &&
                  this._textureTrimmedID === this._texture._updateID
                )
                  return;
              } else this.vertexTrimmedData = new Float32Array(8);
              (this._transformTrimmedID = this.transform._worldID),
                (this._textureTrimmedID = this._texture._updateID);
              var t = this._texture,
                e = this.vertexTrimmedData,
                r = t.orig,
                i = this._anchor,
                n = this.transform.worldTransform,
                o = n.a,
                s = n.b,
                a = n.c,
                h = n.d,
                u = n.tx,
                l = n.ty,
                c = -i._x * r.width,
                d = c + r.width,
                f = -i._y * r.height,
                p = f + r.height;
              (e[0] = o * c + a * f + u),
                (e[1] = h * f + s * c + l),
                (e[2] = o * d + a * f + u),
                (e[3] = h * f + s * d + l),
                (e[4] = o * d + a * p + u),
                (e[5] = h * p + s * d + l),
                (e[6] = o * c + a * p + u),
                (e[7] = h * p + s * c + l);
            }),
            (e.prototype._render = function (t) {
              this.calculateVertices(),
                t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                t.plugins[this.pluginName].render(this);
            }),
            (e.prototype._calculateBounds = function () {
              var t = this._texture.trim,
                e = this._texture.orig;
              !t || (t.width === e.width && t.height === e.height)
                ? (this.calculateVertices(),
                  this._bounds.addQuad(this.vertexData))
                : (this.calculateTrimmedVertices(),
                  this._bounds.addQuad(this.vertexTrimmedData));
            }),
            (e.prototype.getLocalBounds = function (e) {
              return 0 === this.children.length
                ? ((this._bounds.minX =
                    this._texture.orig.width * -this._anchor._x),
                  (this._bounds.minY =
                    this._texture.orig.height * -this._anchor._y),
                  (this._bounds.maxX =
                    this._texture.orig.width * (1 - this._anchor._x)),
                  (this._bounds.maxY =
                    this._texture.orig.height * (1 - this._anchor._y)),
                  e ||
                    (this._localBoundsRect ||
                      (this._localBoundsRect = new te()),
                    (e = this._localBoundsRect)),
                  this._bounds.getRectangle(e))
                : t.prototype.getLocalBounds.call(this, e);
            }),
            (e.prototype.containsPoint = function (t) {
              this.worldTransform.applyInverse(t, Do);
              var e = this._texture.orig.width,
                r = this._texture.orig.height,
                i = -e * this.anchor.x,
                n = 0;
              return (
                Do.x >= i &&
                Do.x < i + e &&
                ((n = -r * this.anchor.y), Do.y >= n && Do.y < n + r)
              );
            }),
            (e.prototype.destroy = function (e) {
              if (
                (t.prototype.destroy.call(this, e),
                this._texture.off("update", this._onTextureUpdate, this),
                (this._anchor = null),
                "boolean" == typeof e ? e : e && e.texture)
              ) {
                var r = "boolean" == typeof e ? e : e && e.baseTexture;
                this._texture.destroy(!!r);
              }
              this._texture = null;
            }),
            (e.from = function (t, r) {
              return new e(t instanceof hr ? t : hr.from(t, r));
            }),
            Object.defineProperty(e.prototype, "roundPixels", {
              get: function () {
                return this._roundPixels;
              },
              set: function (t) {
                this._roundPixels !== t && (this._transformID = -1),
                  (this._roundPixels = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return Math.abs(this.scale.x) * this._texture.orig.width;
              },
              set: function (t) {
                var e = Gt(this.scale.x) || 1;
                (this.scale.x = (e * t) / this._texture.orig.width),
                  (this._width = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
              get: function () {
                return Math.abs(this.scale.y) * this._texture.orig.height;
              },
              set: function (t) {
                var e = Gt(this.scale.y) || 1;
                (this.scale.y = (e * t) / this._texture.orig.height),
                  (this._height = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "anchor", {
              get: function () {
                return this._anchor;
              },
              set: function (t) {
                this._anchor.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return this._tint;
              },
              set: function (t) {
                (this._tint = t),
                  (this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "texture", {
              get: function () {
                return this._texture;
              },
              set: function (t) {
                this._texture !== t &&
                  (this._texture &&
                    this._texture.off("update", this._onTextureUpdate, this),
                  (this._texture = t || hr.EMPTY),
                  (this._cachedTint = 16777215),
                  (this._textureID = -1),
                  (this._textureTrimmedID = -1),
                  t &&
                    (t.baseTexture.valid
                      ? this._onTextureUpdate()
                      : t.once("update", this._onTextureUpdate, this)));
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(be),
        Lo = function (t, e) {
          return (Lo =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        };
      !(function (t) {
        (t[(t.LINEAR_VERTICAL = 0)] = "LINEAR_VERTICAL"),
          (t[(t.LINEAR_HORIZONTAL = 1)] = "LINEAR_HORIZONTAL");
      })(_o || (_o = {}));
      var Fo = {
          align: "left",
          breakWords: !1,
          dropShadow: !1,
          dropShadowAlpha: 1,
          dropShadowAngle: Math.PI / 6,
          dropShadowBlur: 0,
          dropShadowColor: "black",
          dropShadowDistance: 5,
          fill: "black",
          fillGradientType: _o.LINEAR_VERTICAL,
          fillGradientStops: [],
          fontFamily: "Arial",
          fontSize: 26,
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          letterSpacing: 0,
          lineHeight: 0,
          lineJoin: "miter",
          miterLimit: 10,
          padding: 0,
          stroke: "black",
          strokeThickness: 0,
          textBaseline: "alphabetic",
          trim: !1,
          whiteSpace: "pre",
          wordWrap: !1,
          wordWrapWidth: 100,
          leading: 0,
        },
        Uo = [
          "serif",
          "sans-serif",
          "monospace",
          "cursive",
          "fantasy",
          "system-ui",
        ],
        Bo = (function () {
          function t(t) {
            (this.styleID = 0), this.reset(), ko(this, t, t);
          }
          return (
            (t.prototype.clone = function () {
              var e = {};
              return ko(e, this, Fo), new t(e);
            }),
            (t.prototype.reset = function () {
              ko(this, Fo, Fo);
            }),
            Object.defineProperty(t.prototype, "align", {
              get: function () {
                return this._align;
              },
              set: function (t) {
                this._align !== t && ((this._align = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "breakWords", {
              get: function () {
                return this._breakWords;
              },
              set: function (t) {
                this._breakWords !== t &&
                  ((this._breakWords = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadow", {
              get: function () {
                return this._dropShadow;
              },
              set: function (t) {
                this._dropShadow !== t &&
                  ((this._dropShadow = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowAlpha", {
              get: function () {
                return this._dropShadowAlpha;
              },
              set: function (t) {
                this._dropShadowAlpha !== t &&
                  ((this._dropShadowAlpha = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowAngle", {
              get: function () {
                return this._dropShadowAngle;
              },
              set: function (t) {
                this._dropShadowAngle !== t &&
                  ((this._dropShadowAngle = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowBlur", {
              get: function () {
                return this._dropShadowBlur;
              },
              set: function (t) {
                this._dropShadowBlur !== t &&
                  ((this._dropShadowBlur = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowColor", {
              get: function () {
                return this._dropShadowColor;
              },
              set: function (t) {
                var e = Xo(t);
                this._dropShadowColor !== e &&
                  ((this._dropShadowColor = e), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "dropShadowDistance", {
              get: function () {
                return this._dropShadowDistance;
              },
              set: function (t) {
                this._dropShadowDistance !== t &&
                  ((this._dropShadowDistance = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fill", {
              get: function () {
                return this._fill;
              },
              set: function (t) {
                var e = Xo(t);
                this._fill !== e && ((this._fill = e), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fillGradientType", {
              get: function () {
                return this._fillGradientType;
              },
              set: function (t) {
                this._fillGradientType !== t &&
                  ((this._fillGradientType = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fillGradientStops", {
              get: function () {
                return this._fillGradientStops;
              },
              set: function (t) {
                (function (t, e) {
                  if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                  if (t.length !== e.length) return !1;
                  for (var r = 0; r < t.length; ++r)
                    if (t[r] !== e[r]) return !1;
                  return !0;
                })(this._fillGradientStops, t) ||
                  ((this._fillGradientStops = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontFamily", {
              get: function () {
                return this._fontFamily;
              },
              set: function (t) {
                this.fontFamily !== t &&
                  ((this._fontFamily = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontSize", {
              get: function () {
                return this._fontSize;
              },
              set: function (t) {
                this._fontSize !== t && ((this._fontSize = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontStyle", {
              get: function () {
                return this._fontStyle;
              },
              set: function (t) {
                this._fontStyle !== t &&
                  ((this._fontStyle = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontVariant", {
              get: function () {
                return this._fontVariant;
              },
              set: function (t) {
                this._fontVariant !== t &&
                  ((this._fontVariant = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "fontWeight", {
              get: function () {
                return this._fontWeight;
              },
              set: function (t) {
                this._fontWeight !== t &&
                  ((this._fontWeight = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "letterSpacing", {
              get: function () {
                return this._letterSpacing;
              },
              set: function (t) {
                this._letterSpacing !== t &&
                  ((this._letterSpacing = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lineHeight", {
              get: function () {
                return this._lineHeight;
              },
              set: function (t) {
                this._lineHeight !== t &&
                  ((this._lineHeight = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "leading", {
              get: function () {
                return this._leading;
              },
              set: function (t) {
                this._leading !== t && ((this._leading = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lineJoin", {
              get: function () {
                return this._lineJoin;
              },
              set: function (t) {
                this._lineJoin !== t && ((this._lineJoin = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "miterLimit", {
              get: function () {
                return this._miterLimit;
              },
              set: function (t) {
                this._miterLimit !== t &&
                  ((this._miterLimit = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "padding", {
              get: function () {
                return this._padding;
              },
              set: function (t) {
                this._padding !== t && ((this._padding = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "stroke", {
              get: function () {
                return this._stroke;
              },
              set: function (t) {
                var e = Xo(t);
                this._stroke !== e && ((this._stroke = e), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "strokeThickness", {
              get: function () {
                return this._strokeThickness;
              },
              set: function (t) {
                this._strokeThickness !== t &&
                  ((this._strokeThickness = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "textBaseline", {
              get: function () {
                return this._textBaseline;
              },
              set: function (t) {
                this._textBaseline !== t &&
                  ((this._textBaseline = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "trim", {
              get: function () {
                return this._trim;
              },
              set: function (t) {
                this._trim !== t && ((this._trim = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "whiteSpace", {
              get: function () {
                return this._whiteSpace;
              },
              set: function (t) {
                this._whiteSpace !== t &&
                  ((this._whiteSpace = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "wordWrap", {
              get: function () {
                return this._wordWrap;
              },
              set: function (t) {
                this._wordWrap !== t && ((this._wordWrap = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "wordWrapWidth", {
              get: function () {
                return this._wordWrapWidth;
              },
              set: function (t) {
                this._wordWrapWidth !== t &&
                  ((this._wordWrapWidth = t), this.styleID++);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.toFontString = function () {
              var t =
                  "number" == typeof this.fontSize
                    ? this.fontSize + "px"
                    : this.fontSize,
                e = this.fontFamily;
              Array.isArray(this.fontFamily) ||
                (e = this.fontFamily.split(","));
              for (var r = e.length - 1; r >= 0; r--) {
                var i = e[r].trim();
                !/([\"\'])[^\'\"]+\1/.test(i) &&
                  Uo.indexOf(i) < 0 &&
                  (i = '"' + i + '"'),
                  (e[r] = i);
              }
              return (
                this.fontStyle +
                " " +
                this.fontVariant +
                " " +
                this.fontWeight +
                " " +
                t +
                " " +
                e.join(",")
              );
            }),
            t
          );
        })();
      function Go(t) {
        return "number" == typeof t
          ? wt(t)
          : ("string" == typeof t &&
              0 === t.indexOf("0x") &&
              (t = t.replace("0x", "#")),
            t);
      }
      function Xo(t) {
        if (Array.isArray(t)) {
          for (var e = 0; e < t.length; ++e) t[e] = Go(t[e]);
          return t;
        }
        return Go(t);
      }
      function ko(t, e, r) {
        for (var i in r)
          Array.isArray(e[i]) ? (t[i] = e[i].slice()) : (t[i] = e[i]);
      }
      var Ho = (function () {
          function t(t, e, r, i, n, o, s, a, h) {
            (this.text = t),
              (this.style = e),
              (this.width = r),
              (this.height = i),
              (this.lines = n),
              (this.lineWidths = o),
              (this.lineHeight = s),
              (this.maxLineWidth = a),
              (this.fontProperties = h);
          }
          return (
            (t.measureText = function (e, r, i, n) {
              void 0 === n && (n = t._canvas), (i = null == i ? r.wordWrap : i);
              var o = r.toFontString(),
                s = t.measureFont(o);
              0 === s.fontSize &&
                ((s.fontSize = r.fontSize), (s.ascent = r.fontSize));
              var a = n.getContext("2d");
              a.font = o;
              for (
                var h = (i ? t.wordWrap(e, r, n) : e).split(/(?:\r\n|\r|\n)/),
                  u = new Array(h.length),
                  l = 0,
                  c = 0;
                c < h.length;
                c++
              ) {
                var d =
                  a.measureText(h[c]).width +
                  (h[c].length - 1) * r.letterSpacing;
                (u[c] = d), (l = Math.max(l, d));
              }
              var f = l + r.strokeThickness;
              r.dropShadow && (f += r.dropShadowDistance);
              var p = r.lineHeight || s.fontSize + r.strokeThickness,
                _ =
                  Math.max(p, s.fontSize + r.strokeThickness) +
                  (h.length - 1) * (p + r.leading);
              return (
                r.dropShadow && (_ += r.dropShadowDistance),
                new t(e, r, f, _, h, u, p + r.leading, l, s)
              );
            }),
            (t.wordWrap = function (e, r, i) {
              void 0 === i && (i = t._canvas);
              for (
                var n = i.getContext("2d"),
                  o = 0,
                  s = "",
                  a = "",
                  h = Object.create(null),
                  u = r.letterSpacing,
                  l = r.whiteSpace,
                  c = t.collapseSpaces(l),
                  d = t.collapseNewlines(l),
                  f = !c,
                  p = r.wordWrapWidth + u,
                  _ = t.tokenize(e),
                  m = 0;
                m < _.length;
                m++
              ) {
                var v = _[m];
                if (t.isNewline(v)) {
                  if (!d) {
                    (a += t.addLine(s)), (f = !c), (s = ""), (o = 0);
                    continue;
                  }
                  v = " ";
                }
                if (c) {
                  var y = t.isBreakingSpace(v),
                    g = t.isBreakingSpace(s[s.length - 1]);
                  if (y && g) continue;
                }
                var T = t.getFromCache(v, u, h, n);
                if (T > p)
                  if (
                    ("" !== s && ((a += t.addLine(s)), (s = ""), (o = 0)),
                    t.canBreakWords(v, r.breakWords))
                  )
                    for (var x = t.wordWrapSplit(v), E = 0; E < x.length; E++) {
                      for (var b = x[E], A = 1; x[E + A]; ) {
                        var O = x[E + A],
                          S = b[b.length - 1];
                        if (t.canBreakChars(S, O, v, E, r.breakWords)) break;
                        (b += O), A++;
                      }
                      E += b.length - 1;
                      var R = t.getFromCache(b, u, h, n);
                      R + o > p &&
                        ((a += t.addLine(s)), (f = !1), (s = ""), (o = 0)),
                        (s += b),
                        (o += R);
                    }
                  else {
                    s.length > 0 && ((a += t.addLine(s)), (s = ""), (o = 0));
                    var I = m === _.length - 1;
                    (a += t.addLine(v, !I)), (f = !1), (s = ""), (o = 0);
                  }
                else
                  T + o > p &&
                    ((f = !1), (a += t.addLine(s)), (s = ""), (o = 0)),
                    (s.length > 0 || !t.isBreakingSpace(v) || f) &&
                      ((s += v), (o += T));
              }
              return a + t.addLine(s, !1);
            }),
            (t.addLine = function (e, r) {
              return (
                void 0 === r && (r = !0), (e = t.trimRight(e)), r ? e + "\n" : e
              );
            }),
            (t.getFromCache = function (t, e, r, i) {
              var n = r[t];
              if ("number" != typeof n) {
                var o = t.length * e;
                (n = i.measureText(t).width + o), (r[t] = n);
              }
              return n;
            }),
            (t.collapseSpaces = function (t) {
              return "normal" === t || "pre-line" === t;
            }),
            (t.collapseNewlines = function (t) {
              return "normal" === t;
            }),
            (t.trimRight = function (e) {
              if ("string" != typeof e) return "";
              for (var r = e.length - 1; r >= 0; r--) {
                var i = e[r];
                if (!t.isBreakingSpace(i)) break;
                e = e.slice(0, -1);
              }
              return e;
            }),
            (t.isNewline = function (e) {
              return (
                "string" == typeof e &&
                t._newlines.indexOf(e.charCodeAt(0)) >= 0
              );
            }),
            (t.isBreakingSpace = function (e, r) {
              return (
                "string" == typeof e &&
                t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
              );
            }),
            (t.tokenize = function (e) {
              var r = [],
                i = "";
              if ("string" != typeof e) return r;
              for (var n = 0; n < e.length; n++) {
                var o = e[n],
                  s = e[n + 1];
                t.isBreakingSpace(o, s) || t.isNewline(o)
                  ? ("" !== i && (r.push(i), (i = "")), r.push(o))
                  : (i += o);
              }
              return "" !== i && r.push(i), r;
            }),
            (t.canBreakWords = function (t, e) {
              return e;
            }),
            (t.canBreakChars = function (t, e, r, i, n) {
              return !0;
            }),
            (t.wordWrapSplit = function (t) {
              return t.split("");
            }),
            (t.measureFont = function (e) {
              if (t._fonts[e]) return t._fonts[e];
              var r = { ascent: 0, descent: 0, fontSize: 0 },
                i = t._canvas,
                n = t._context;
              n.font = e;
              var o = t.METRICS_STRING + t.BASELINE_SYMBOL,
                s = Math.ceil(n.measureText(o).width),
                a = Math.ceil(n.measureText(t.BASELINE_SYMBOL).width),
                h = Math.ceil(t.HEIGHT_MULTIPLIER * a);
              (a = (a * t.BASELINE_MULTIPLIER) | 0),
                (i.width = s),
                (i.height = h),
                (n.fillStyle = "#f00"),
                n.fillRect(0, 0, s, h),
                (n.font = e),
                (n.textBaseline = "alphabetic"),
                (n.fillStyle = "#000"),
                n.fillText(o, 0, a);
              var u = n.getImageData(0, 0, s, h).data,
                l = u.length,
                c = 4 * s,
                d = 0,
                f = 0,
                p = !1;
              for (d = 0; d < a; ++d) {
                for (var _ = 0; _ < c; _ += 4)
                  if (255 !== u[f + _]) {
                    p = !0;
                    break;
                  }
                if (p) break;
                f += c;
              }
              for (r.ascent = a - d, f = l - c, p = !1, d = h; d > a; --d) {
                for (_ = 0; _ < c; _ += 4)
                  if (255 !== u[f + _]) {
                    p = !0;
                    break;
                  }
                if (p) break;
                f -= c;
              }
              return (
                (r.descent = d - a),
                (r.fontSize = r.ascent + r.descent),
                (t._fonts[e] = r),
                r
              );
            }),
            (t.clearMetrics = function (e) {
              void 0 === e && (e = ""),
                e ? delete t._fonts[e] : (t._fonts = {});
            }),
            t
          );
        })(),
        jo = (function () {
          try {
            var t = new OffscreenCanvas(0, 0),
              e = t.getContext("2d");
            return e && e.measureText ? t : document.createElement("canvas");
          } catch (t) {
            return document.createElement("canvas");
          }
        })();
      (jo.width = jo.height = 10),
        (Ho._canvas = jo),
        (Ho._context = jo.getContext("2d")),
        (Ho._fonts = {}),
        (Ho.METRICS_STRING = "|ÉqÅ"),
        (Ho.BASELINE_SYMBOL = "M"),
        (Ho.BASELINE_MULTIPLIER = 1.4),
        (Ho.HEIGHT_MULTIPLIER = 2),
        (Ho._newlines = [10, 13]),
        (Ho._breakingSpaces = [
          9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202,
          8287, 12288,
        ]);
      var Yo = { texture: !0, children: !1, baseTexture: !0 },
        Vo = (function (t) {
          function e(e, r, i) {
            var n = this,
              o = !1;
            i || ((i = document.createElement("canvas")), (o = !0)),
              (i.width = 3),
              (i.height = 3);
            var s = hr.from(i);
            return (
              (s.orig = new te()),
              (s.trim = new te()),
              ((n = t.call(this, s) || this)._ownCanvas = o),
              (n.canvas = i),
              (n.context = n.canvas.getContext("2d")),
              (n._resolution = yt.RESOLUTION),
              (n._autoResolution = !0),
              (n._text = null),
              (n._style = null),
              (n._styleListener = null),
              (n._font = ""),
              (n.text = e),
              (n.style = r),
              (n.localStyleID = -1),
              n
            );
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              Lo(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            (e.prototype.updateText = function (t) {
              var r = this._style;
              if (
                (this.localStyleID !== r.styleID &&
                  ((this.dirty = !0), (this.localStyleID = r.styleID)),
                this.dirty || !t)
              ) {
                this._font = this._style.toFontString();
                var i,
                  n,
                  o = this.context,
                  s = Ho.measureText(
                    this._text || " ",
                    this._style,
                    this._style.wordWrap,
                    this.canvas
                  ),
                  a = s.width,
                  h = s.height,
                  u = s.lines,
                  l = s.lineHeight,
                  c = s.lineWidths,
                  d = s.maxLineWidth,
                  f = s.fontProperties;
                (this.canvas.width = Math.ceil(
                  (Math.max(1, a) + 2 * r.padding) * this._resolution
                )),
                  (this.canvas.height = Math.ceil(
                    (Math.max(1, h) + 2 * r.padding) * this._resolution
                  )),
                  o.scale(this._resolution, this._resolution),
                  o.clearRect(0, 0, this.canvas.width, this.canvas.height),
                  (o.font = this._font),
                  (o.lineWidth = r.strokeThickness),
                  (o.textBaseline = r.textBaseline),
                  (o.lineJoin = r.lineJoin),
                  (o.miterLimit = r.miterLimit);
                for (var p = r.dropShadow ? 2 : 1, _ = 0; _ < p; ++_) {
                  var m = r.dropShadow && 0 === _,
                    v = m ? Math.ceil(Math.max(1, h) + 2 * r.padding) : 0,
                    y = v * this._resolution;
                  if (m) {
                    (o.fillStyle = "black"), (o.strokeStyle = "black");
                    var g = r.dropShadowColor,
                      T = It("number" == typeof g ? g : Pt(g));
                    (o.shadowColor =
                      "rgba(" +
                      255 * T[0] +
                      "," +
                      255 * T[1] +
                      "," +
                      255 * T[2] +
                      "," +
                      r.dropShadowAlpha +
                      ")"),
                      (o.shadowBlur = r.dropShadowBlur),
                      (o.shadowOffsetX =
                        Math.cos(r.dropShadowAngle) * r.dropShadowDistance),
                      (o.shadowOffsetY =
                        Math.sin(r.dropShadowAngle) * r.dropShadowDistance + y);
                  } else
                    (o.fillStyle = this._generateFillStyle(r, u, s)),
                      (o.strokeStyle = r.stroke),
                      (o.shadowColor = "black"),
                      (o.shadowBlur = 0),
                      (o.shadowOffsetX = 0),
                      (o.shadowOffsetY = 0);
                  var x = (l - f.fontSize) / 2;
                  (!e.nextLineHeightBehavior || l - f.fontSize < 0) && (x = 0);
                  for (var E = 0; E < u.length; E++)
                    (i = r.strokeThickness / 2),
                      (n = r.strokeThickness / 2 + E * l + f.ascent + x),
                      "right" === r.align
                        ? (i += d - c[E])
                        : "center" === r.align && (i += (d - c[E]) / 2),
                      r.stroke &&
                        r.strokeThickness &&
                        this.drawLetterSpacing(
                          u[E],
                          i + r.padding,
                          n + r.padding - v,
                          !0
                        ),
                      r.fill &&
                        this.drawLetterSpacing(
                          u[E],
                          i + r.padding,
                          n + r.padding - v
                        );
                }
                this.updateTexture();
              }
            }),
            (e.prototype.drawLetterSpacing = function (t, e, r, i) {
              void 0 === i && (i = !1);
              var n = this._style.letterSpacing;
              if (0 !== n)
                for (
                  var o = e,
                    s = Array.from ? Array.from(t) : t.split(""),
                    a = this.context.measureText(t).width,
                    h = 0,
                    u = 0;
                  u < s.length;
                  ++u
                ) {
                  var l = s[u];
                  i
                    ? this.context.strokeText(l, o, r)
                    : this.context.fillText(l, o, r),
                    (o +=
                      a -
                      (h = this.context.measureText(t.substring(u + 1)).width) +
                      n),
                    (a = h);
                }
              else
                i
                  ? this.context.strokeText(t, e, r)
                  : this.context.fillText(t, e, r);
            }),
            (e.prototype.updateTexture = function () {
              var t = this.canvas;
              if (this._style.trim) {
                var e = (function (t) {
                  var e,
                    r,
                    i,
                    n = t.width,
                    o = t.height,
                    s = t.getContext("2d"),
                    a = s.getImageData(0, 0, n, o).data,
                    h = a.length,
                    u = { top: null, left: null, right: null, bottom: null },
                    l = null;
                  for (e = 0; e < h; e += 4)
                    0 !== a[e + 3] &&
                      ((r = (e / 4) % n),
                      (i = ~~(e / 4 / n)),
                      null === u.top && (u.top = i),
                      (null === u.left || r < u.left) && (u.left = r),
                      (null === u.right || u.right < r) && (u.right = r + 1),
                      (null === u.bottom || u.bottom < i) && (u.bottom = i));
                  return (
                    null !== u.top &&
                      ((n = u.right - u.left),
                      (o = u.bottom - u.top + 1),
                      (l = s.getImageData(u.left, u.top, n, o))),
                    { height: o, width: n, data: l }
                  );
                })(t);
                e.data &&
                  ((t.width = e.width),
                  (t.height = e.height),
                  this.context.putImageData(e.data, 0, 0));
              }
              var r = this._texture,
                i = this._style,
                n = i.trim ? 0 : i.padding,
                o = r.baseTexture;
              (r.trim.width = r._frame.width =
                Math.ceil(t.width / this._resolution)),
                (r.trim.height = r._frame.height =
                  Math.ceil(t.height / this._resolution)),
                (r.trim.x = -n),
                (r.trim.y = -n),
                (r.orig.width = r._frame.width - 2 * n),
                (r.orig.height = r._frame.height - 2 * n),
                this._onTextureUpdate(),
                o.setRealSize(t.width, t.height, this._resolution),
                this._recursivePostUpdateTransform(),
                (this.dirty = !1);
            }),
            (e.prototype._render = function (e) {
              this._autoResolution &&
                this._resolution !== e.resolution &&
                ((this._resolution = e.resolution), (this.dirty = !0)),
                this.updateText(!0),
                t.prototype._render.call(this, e);
            }),
            (e.prototype.getLocalBounds = function (e) {
              return (
                this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
              );
            }),
            (e.prototype._calculateBounds = function () {
              this.updateText(!0),
                this.calculateVertices(),
                this._bounds.addQuad(this.vertexData);
            }),
            (e.prototype._generateFillStyle = function (t, e, r) {
              var i,
                n = t.fill;
              if (!Array.isArray(n)) return n;
              if (1 === n.length) return n[0];
              var o = t.dropShadow ? t.dropShadowDistance : 0,
                s = t.padding || 0,
                a = Math.ceil(this.canvas.width / this._resolution) - o - 2 * s,
                h =
                  Math.ceil(this.canvas.height / this._resolution) - o - 2 * s,
                u = n.slice(),
                l = t.fillGradientStops.slice();
              if (!l.length)
                for (var c = u.length + 1, d = 1; d < c; ++d) l.push(d / c);
              if (
                (u.unshift(n[0]),
                l.unshift(0),
                u.push(n[n.length - 1]),
                l.push(1),
                t.fillGradientType === _o.LINEAR_VERTICAL)
              ) {
                i = this.context.createLinearGradient(a / 2, s, a / 2, h + s);
                var f = (r.fontProperties.fontSize + t.strokeThickness) / h;
                for (d = 0; d < e.length; d++)
                  for (var p = r.lineHeight * d, _ = 0; _ < u.length; _++) {
                    var m;
                    m = "number" == typeof l[_] ? l[_] : _ / u.length;
                    var v = Math.min(1, Math.max(0, p / h + m * f));
                    (v = Number(v.toFixed(5))), i.addColorStop(v, u[_]);
                  }
              } else {
                i = this.context.createLinearGradient(s, h / 2, a + s, h / 2);
                var y = u.length + 1,
                  g = 1;
                for (d = 0; d < u.length; d++) {
                  var T;
                  (T = "number" == typeof l[d] ? l[d] : g / y),
                    i.addColorStop(T, u[d]),
                    g++;
                }
              }
              return i;
            }),
            (e.prototype.destroy = function (e) {
              "boolean" == typeof e && (e = { children: e }),
                (e = Object.assign({}, Yo, e)),
                t.prototype.destroy.call(this, e),
                this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
                (this.context = null),
                (this.canvas = null),
                (this._style = null);
            }),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return (
                  this.updateText(!0),
                  Math.abs(this.scale.x) * this._texture.orig.width
                );
              },
              set: function (t) {
                this.updateText(!0);
                var e = Gt(this.scale.x) || 1;
                (this.scale.x = (e * t) / this._texture.orig.width),
                  (this._width = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
              get: function () {
                return (
                  this.updateText(!0),
                  Math.abs(this.scale.y) * this._texture.orig.height
                );
              },
              set: function (t) {
                this.updateText(!0);
                var e = Gt(this.scale.y) || 1;
                (this.scale.y = (e * t) / this._texture.orig.height),
                  (this._height = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "style", {
              get: function () {
                return this._style;
              },
              set: function (t) {
                (t = t || {}),
                  (this._style = t instanceof Bo ? t : new Bo(t)),
                  (this.localStyleID = -1),
                  (this.dirty = !0);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "text", {
              get: function () {
                return this._text;
              },
              set: function (t) {
                (t = String(null == t ? "" : t)),
                  this._text !== t && ((this._text = t), (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "resolution", {
              get: function () {
                return this._resolution;
              },
              set: function (t) {
                (this._autoResolution = !1),
                  this._resolution !== t &&
                    ((this._resolution = t), (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.nextLineHeightBehavior = !1),
            e
          );
        })(No);
      yt.UPLOADS_PER_FRAME = 4;
      var zo = function (t, e) {
          return (zo =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        Wo = (function () {
          function t(t) {
            (this.maxItemsPerFrame = t), (this.itemsLeft = 0);
          }
          return (
            (t.prototype.beginFrame = function () {
              this.itemsLeft = this.maxItemsPerFrame;
            }),
            (t.prototype.allowedToUpload = function () {
              return this.itemsLeft-- > 0;
            }),
            t
          );
        })();
      function qo(t, e) {
        var r = !1;
        if (t && t._textures && t._textures.length)
          for (var i = 0; i < t._textures.length; i++)
            if (t._textures[i] instanceof hr) {
              var n = t._textures[i].baseTexture;
              -1 === e.indexOf(n) && (e.push(n), (r = !0));
            }
        return r;
      }
      function Ko(t, e) {
        if (t.baseTexture instanceof Ve) {
          var r = t.baseTexture;
          return -1 === e.indexOf(r) && e.push(r), !0;
        }
        return !1;
      }
      function Zo(t, e) {
        if (t._texture && t._texture instanceof hr) {
          var r = t._texture.baseTexture;
          return -1 === e.indexOf(r) && e.push(r), !0;
        }
        return !1;
      }
      function Jo(t, e) {
        return e instanceof Vo && (e.updateText(!0), !0);
      }
      function Qo(t, e) {
        if (e instanceof Bo) {
          var r = e.toFontString();
          return Ho.measureFont(r), !0;
        }
        return !1;
      }
      function $o(t, e) {
        if (t instanceof Vo) {
          -1 === e.indexOf(t.style) && e.push(t.style),
            -1 === e.indexOf(t) && e.push(t);
          var r = t._texture.baseTexture;
          return -1 === e.indexOf(r) && e.push(r), !0;
        }
        return !1;
      }
      function ts(t, e) {
        return t instanceof Bo && (-1 === e.indexOf(t) && e.push(t), !0);
      }
      function es(t, e) {
        return (
          e instanceof Ve &&
          (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0)
        );
      }
      function rs(t, e) {
        if (!(e instanceof Po)) return !1;
        var r = e.geometry;
        e.finishPoly(), r.updateBatches();
        for (var i = r.batches, n = 0; n < i.length; n++) {
          var o = i[n].style.texture;
          o && es(t, o.baseTexture);
        }
        return r.batchable || t.geometry.bind(r, e._resolveDirectShader(t)), !0;
      }
      function is(t, e) {
        return t instanceof Po && (e.push(t), !0);
      }
      var ns = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this;
            return (
              (r.uploadHookHelper = r.renderer),
              r.registerFindHook(is),
              r.registerUploadHook(es),
              r.registerUploadHook(rs),
              r
            );
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              zo(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            e
          );
        })(
          (function () {
            function t(t) {
              var e = this;
              (this.limiter = new Wo(yt.UPLOADS_PER_FRAME)),
                (this.renderer = t),
                (this.uploadHookHelper = null),
                (this.queue = []),
                (this.addHooks = []),
                (this.uploadHooks = []),
                (this.completes = []),
                (this.ticking = !1),
                (this.delayedTick = function () {
                  e.queue && e.prepareItems();
                }),
                this.registerFindHook($o),
                this.registerFindHook(ts),
                this.registerFindHook(qo),
                this.registerFindHook(Ko),
                this.registerFindHook(Zo),
                this.registerUploadHook(Jo),
                this.registerUploadHook(Qo);
            }
            return (
              (t.prototype.upload = function (t, e) {
                "function" == typeof t && ((e = t), (t = null)),
                  t && this.add(t),
                  this.queue.length
                    ? (e && this.completes.push(e),
                      this.ticking ||
                        ((this.ticking = !0),
                        Re.system.addOnce(this.tick, this, Ae.UTILITY)))
                    : e && e();
              }),
              (t.prototype.tick = function () {
                setTimeout(this.delayedTick, 0);
              }),
              (t.prototype.prepareItems = function () {
                for (
                  this.limiter.beginFrame();
                  this.queue.length && this.limiter.allowedToUpload();

                ) {
                  var t = this.queue[0],
                    e = !1;
                  if (t && !t._destroyed)
                    for (var r = 0, i = this.uploadHooks.length; r < i; r++)
                      if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                        this.queue.shift(), (e = !0);
                        break;
                      }
                  e || this.queue.shift();
                }
                if (this.queue.length)
                  Re.system.addOnce(this.tick, this, Ae.UTILITY);
                else {
                  this.ticking = !1;
                  var n = this.completes.slice(0);
                  for (
                    this.completes.length = 0, r = 0, i = n.length;
                    r < i;
                    r++
                  )
                    n[r]();
                }
              }),
              (t.prototype.registerFindHook = function (t) {
                return t && this.addHooks.push(t), this;
              }),
              (t.prototype.registerUploadHook = function (t) {
                return t && this.uploadHooks.push(t), this;
              }),
              (t.prototype.add = function (t) {
                for (
                  var e = 0, r = this.addHooks.length;
                  e < r && !this.addHooks[e](t, this.queue);
                  e++
                );
                if (t instanceof be)
                  for (e = t.children.length - 1; e >= 0; e--)
                    this.add(t.children[e]);
                return this;
              }),
              (t.prototype.destroy = function () {
                this.ticking && Re.system.remove(this.tick, this),
                  (this.ticking = !1),
                  (this.addHooks = null),
                  (this.uploadHooks = null),
                  (this.renderer = null),
                  (this.completes = null),
                  (this.queue = null),
                  (this.limiter = null),
                  (this.uploadHookHelper = null);
              }),
              t
            );
          })()
        ),
        os =
          ((function () {
            function t(t) {
              (this.maxMilliseconds = t), (this.frameStart = 0);
            }
            (t.prototype.beginFrame = function () {
              this.frameStart = Date.now();
            }),
              (t.prototype.allowedToUpload = function () {
                return Date.now() - this.frameStart < this.maxMilliseconds;
              });
          })(),
          (function () {
            function t(t, e, r) {
              void 0 === r && (r = null),
                (this._texture = t instanceof hr ? t : null),
                (this.baseTexture =
                  t instanceof Ve ? t : this._texture.baseTexture),
                (this.textures = {}),
                (this.animations = {}),
                (this.data = e);
              var i = this.baseTexture.resource;
              (this.resolution = this._updateResolution(
                r || (i ? i.url : null)
              )),
                (this._frames = this.data.frames),
                (this._frameKeys = Object.keys(this._frames)),
                (this._batchIndex = 0),
                (this._callback = null);
            }
            return (
              (t.prototype._updateResolution = function (t) {
                void 0 === t && (t = null);
                var e = this.data.meta.scale,
                  r = Kt(t, null);
                return (
                  null === r && (r = void 0 !== e ? parseFloat(e) : 1),
                  1 !== r && this.baseTexture.setResolution(r),
                  r
                );
              }),
              (t.prototype.parse = function (e) {
                (this._batchIndex = 0),
                  (this._callback = e),
                  this._frameKeys.length <= t.BATCH_SIZE
                    ? (this._processFrames(0),
                      this._processAnimations(),
                      this._parseComplete())
                    : this._nextBatch();
              }),
              (t.prototype._processFrames = function (e) {
                for (
                  var r = e, i = t.BATCH_SIZE;
                  r - e < i && r < this._frameKeys.length;

                ) {
                  var n = this._frameKeys[r],
                    o = this._frames[n],
                    s = o.frame;
                  if (s) {
                    var a,
                      h = null,
                      u =
                        !1 !== o.trimmed && o.sourceSize
                          ? o.sourceSize
                          : o.frame,
                      l = new te(
                        0,
                        0,
                        Math.floor(u.w) / this.resolution,
                        Math.floor(u.h) / this.resolution
                      );
                    (a = o.rotated
                      ? new te(
                          Math.floor(s.x) / this.resolution,
                          Math.floor(s.y) / this.resolution,
                          Math.floor(s.h) / this.resolution,
                          Math.floor(s.w) / this.resolution
                        )
                      : new te(
                          Math.floor(s.x) / this.resolution,
                          Math.floor(s.y) / this.resolution,
                          Math.floor(s.w) / this.resolution,
                          Math.floor(s.h) / this.resolution
                        )),
                      !1 !== o.trimmed &&
                        o.spriteSourceSize &&
                        (h = new te(
                          Math.floor(o.spriteSourceSize.x) / this.resolution,
                          Math.floor(o.spriteSourceSize.y) / this.resolution,
                          Math.floor(s.w) / this.resolution,
                          Math.floor(s.h) / this.resolution
                        )),
                      (this.textures[n] = new hr(
                        this.baseTexture,
                        a,
                        l,
                        h,
                        o.rotated ? 2 : 0,
                        o.anchor
                      )),
                      hr.addToCache(this.textures[n], n);
                  }
                  r++;
                }
              }),
              (t.prototype._processAnimations = function () {
                var t = this.data.animations || {};
                for (var e in t) {
                  this.animations[e] = [];
                  for (var r = 0; r < t[e].length; r++) {
                    var i = t[e][r];
                    this.animations[e].push(this.textures[i]);
                  }
                }
              }),
              (t.prototype._parseComplete = function () {
                var t = this._callback;
                (this._callback = null),
                  (this._batchIndex = 0),
                  t.call(this, this.textures);
              }),
              (t.prototype._nextBatch = function () {
                var e = this;
                this._processFrames(this._batchIndex * t.BATCH_SIZE),
                  this._batchIndex++,
                  setTimeout(function () {
                    e._batchIndex * t.BATCH_SIZE < e._frameKeys.length
                      ? e._nextBatch()
                      : (e._processAnimations(), e._parseComplete());
                  }, 0);
              }),
              (t.prototype.destroy = function (t) {
                var e;
                for (var r in (void 0 === t && (t = !1), this.textures))
                  this.textures[r].destroy();
                (this._frames = null),
                  (this._frameKeys = null),
                  (this.data = null),
                  (this.textures = null),
                  t &&
                    (null === (e = this._texture) ||
                      void 0 === e ||
                      e.destroy(),
                    this.baseTexture.destroy()),
                  (this._texture = null),
                  (this.baseTexture = null);
              }),
              (t.BATCH_SIZE = 1e3),
              t
            );
          })()),
        ss = (function () {
          function t() {}
          return (
            (t.use = function (e, r) {
              var i,
                n,
                o = this,
                s = e.name + "_image";
              if (
                e.data &&
                e.type === Sn.TYPE.JSON &&
                e.data.frames &&
                !o.resources[s]
              ) {
                var a =
                  null ===
                    (n =
                      null === (i = e.data) || void 0 === i
                        ? void 0
                        : i.meta) || void 0 === n
                    ? void 0
                    : n.related_multi_packs;
                if (Array.isArray(a))
                  for (
                    var h = function (t) {
                        if ("string" != typeof t) return "continue";
                        var r = t.replace(".json", ""),
                          i = At.resolve(e.url.replace(o.baseUrl, ""), t);
                        if (
                          o.resources[r] ||
                          Object.values(o.resources).some(function (t) {
                            return At.format(At.parse(t.url)) === i;
                          })
                        )
                          return "continue";
                        var n = {
                          crossOrigin: e.crossOrigin,
                          loadType: Sn.LOAD_TYPE.XHR,
                          xhrType: Sn.XHR_RESPONSE_TYPE.JSON,
                          parentResource: e,
                        };
                        o.add(r, i, n);
                      },
                      u = 0,
                      l = a;
                    u < l.length;
                    u++
                  )
                    h(l[u]);
                var c = {
                    crossOrigin: e.crossOrigin,
                    metadata: e.metadata.imageMetadata,
                    parentResource: e,
                  },
                  d = t.getResourcePath(e, o.baseUrl);
                o.add(s, d, c, function (t) {
                  if (t.error) r(t.error);
                  else {
                    var i = new os(t.texture, e.data, e.url);
                    i.parse(function () {
                      (e.spritesheet = i), (e.textures = i.textures), r();
                    });
                  }
                });
              } else r();
            }),
            (t.getResourcePath = function (t, e) {
              return t.isDataUrl
                ? t.data.meta.image
                : At.resolve(t.url.replace(e, ""), t.data.meta.image);
            }),
            t
          );
        })(),
        as = function (t, e) {
          return (as =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        };
      function hs(t, e) {
        function r() {
          this.constructor = t;
        }
        as(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var us = new oe(),
        ls =
          ((function (t) {
            function e(e, r, i) {
              void 0 === r && (r = 100), void 0 === i && (i = 100);
              var n = t.call(this, e) || this;
              return (
                (n.tileTransform = new me()),
                (n._width = r),
                (n._height = i),
                (n.uvMatrix = n.texture.uvMatrix || new fi(e)),
                (n.pluginName = "tilingSprite"),
                (n.uvRespectAnchor = !1),
                n
              );
            }
            hs(e, t),
              Object.defineProperty(e.prototype, "clampMargin", {
                get: function () {
                  return this.uvMatrix.clampMargin;
                },
                set: function (t) {
                  (this.uvMatrix.clampMargin = t), this.uvMatrix.update(!0);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "tileScale", {
                get: function () {
                  return this.tileTransform.scale;
                },
                set: function (t) {
                  this.tileTransform.scale.copyFrom(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "tilePosition", {
                get: function () {
                  return this.tileTransform.position;
                },
                set: function (t) {
                  this.tileTransform.position.copyFrom(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype._onTextureUpdate = function () {
                this.uvMatrix && (this.uvMatrix.texture = this._texture),
                  (this._cachedTint = 16777215);
              }),
              (e.prototype._render = function (t) {
                var e = this._texture;
                e &&
                  e.valid &&
                  (this.tileTransform.updateLocalTransform(),
                  this.uvMatrix.update(),
                  t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                  t.plugins[this.pluginName].render(this));
              }),
              (e.prototype._calculateBounds = function () {
                var t = this._width * -this._anchor._x,
                  e = this._height * -this._anchor._y,
                  r = this._width * (1 - this._anchor._x),
                  i = this._height * (1 - this._anchor._y);
                this._bounds.addFrame(this.transform, t, e, r, i);
              }),
              (e.prototype.getLocalBounds = function (e) {
                return 0 === this.children.length
                  ? ((this._bounds.minX = this._width * -this._anchor._x),
                    (this._bounds.minY = this._height * -this._anchor._y),
                    (this._bounds.maxX = this._width * (1 - this._anchor._x)),
                    (this._bounds.maxY = this._height * (1 - this._anchor._y)),
                    e ||
                      (this._localBoundsRect ||
                        (this._localBoundsRect = new te()),
                      (e = this._localBoundsRect)),
                    this._bounds.getRectangle(e))
                  : t.prototype.getLocalBounds.call(this, e);
              }),
              (e.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, us);
                var e = this._width,
                  r = this._height,
                  i = -e * this.anchor._x;
                if (us.x >= i && us.x < i + e) {
                  var n = -r * this.anchor._y;
                  if (us.y >= n && us.y < n + r) return !0;
                }
                return !1;
              }),
              (e.prototype.destroy = function (e) {
                t.prototype.destroy.call(this, e),
                  (this.tileTransform = null),
                  (this.uvMatrix = null);
              }),
              (e.from = function (t, r) {
                return new e(
                  t instanceof hr ? t : hr.from(t, r),
                  r.width,
                  r.height
                );
              }),
              Object.defineProperty(e.prototype, "width", {
                get: function () {
                  return this._width;
                },
                set: function (t) {
                  this._width = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "height", {
                get: function () {
                  return this._height;
                },
                set: function (t) {
                  this._height = t;
                },
                enumerable: !1,
                configurable: !0,
              });
          })(No),
          "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n"),
        cs = new ae(),
        ds = (function (t) {
          function e(e) {
            var r = t.call(this, e) || this,
              i = { globals: r.renderer.globalUniforms };
            return (
              (r.shader = ui.from(
                ls,
                "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n",
                i
              )),
              (r.simpleShader = ui.from(
                ls,
                "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n",
                i
              )),
              (r.quad = new Er()),
              (r.state = li.for2d()),
              r
            );
          }
          return (
            hs(e, t),
            (e.prototype.render = function (t) {
              var e = this.renderer,
                r = this.quad,
                i = r.vertices;
              (i[0] = i[6] = t._width * -t.anchor.x),
                (i[1] = i[3] = t._height * -t.anchor.y),
                (i[2] = i[4] = t._width * (1 - t.anchor.x)),
                (i[5] = i[7] = t._height * (1 - t.anchor.y));
              var n = t.uvRespectAnchor ? t.anchor.x : 0,
                o = t.uvRespectAnchor ? t.anchor.y : 0;
              ((i = r.uvs)[0] = i[6] = -n),
                (i[1] = i[3] = -o),
                (i[2] = i[4] = 1 - n),
                (i[5] = i[7] = 1 - o),
                r.invalidate();
              var s = t._texture,
                a = s.baseTexture,
                h = t.tileTransform.localTransform,
                u = t.uvMatrix,
                l =
                  a.isPowerOfTwo &&
                  s.frame.width === a.width &&
                  s.frame.height === a.height;
              l &&
                (a._glTextures[e.CONTEXT_UID]
                  ? (l = a.wrapMode !== lt.CLAMP)
                  : a.wrapMode === lt.CLAMP && (a.wrapMode = lt.REPEAT));
              var c = l ? this.simpleShader : this.shader,
                d = s.width,
                f = s.height,
                p = t._width,
                _ = t._height;
              cs.set(
                (h.a * d) / p,
                (h.b * d) / _,
                (h.c * f) / p,
                (h.d * f) / _,
                h.tx / p,
                h.ty / _
              ),
                cs.invert(),
                l
                  ? cs.prepend(u.mapCoord)
                  : ((c.uniforms.uMapCoord = u.mapCoord.toArray(!0)),
                    (c.uniforms.uClampFrame = u.uClampFrame),
                    (c.uniforms.uClampOffset = u.uClampOffset)),
                (c.uniforms.uTransform = cs.toArray(!0)),
                (c.uniforms.uColor = Nt(
                  t.tint,
                  t.worldAlpha,
                  c.uniforms.uColor,
                  a.alphaMode
                )),
                (c.uniforms.translationMatrix =
                  t.transform.worldTransform.toArray(!0)),
                (c.uniforms.uSampler = s),
                e.shader.bind(c),
                e.geometry.bind(r),
                (this.state.blendMode = Dt(t.blendMode, a.alphaMode)),
                e.state.set(this.state),
                e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
            }),
            e
          );
        })(wr),
        fs = function (t, e) {
          return (fs =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        };
      function ps(t, e) {
        function r() {
          this.constructor = t;
        }
        fs(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var _s = (function () {
          function t(t, e) {
            (this.uvBuffer = t),
              (this.uvMatrix = e),
              (this.data = null),
              (this._bufferUpdateId = -1),
              (this._textureUpdateId = -1),
              (this._updateID = 0);
          }
          return (
            (t.prototype.update = function (t) {
              if (
                t ||
                this._bufferUpdateId !== this.uvBuffer._updateID ||
                this._textureUpdateId !== this.uvMatrix._updateID
              ) {
                (this._bufferUpdateId = this.uvBuffer._updateID),
                  (this._textureUpdateId = this.uvMatrix._updateID);
                var e = this.uvBuffer.data;
                (this.data && this.data.length === e.length) ||
                  (this.data = new Float32Array(e.length)),
                  this.uvMatrix.multiplyUvs(e, this.data),
                  this._updateID++;
              }
            }),
            t
          );
        })(),
        ms = new oe(),
        vs = new ie(),
        ys = (function (t) {
          function e(e, r, i, n) {
            void 0 === n && (n = nt.TRIANGLES);
            var o = t.call(this) || this;
            return (
              (o.geometry = e),
              e.refCount++,
              (o.shader = r),
              (o.state = i || li.for2d()),
              (o.drawMode = n),
              (o.start = 0),
              (o.size = 0),
              (o.uvs = null),
              (o.indices = null),
              (o.vertexData = new Float32Array(1)),
              (o.vertexDirty = -1),
              (o._transformID = -1),
              (o._roundPixels = yt.ROUND_PIXELS),
              (o.batchUvs = null),
              o
            );
          }
          return (
            ps(e, t),
            Object.defineProperty(e.prototype, "uvBuffer", {
              get: function () {
                return this.geometry.buffers[1];
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "verticesBuffer", {
              get: function () {
                return this.geometry.buffers[0];
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "material", {
              get: function () {
                return this.shader;
              },
              set: function (t) {
                this.shader = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "blendMode", {
              get: function () {
                return this.state.blendMode;
              },
              set: function (t) {
                this.state.blendMode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "roundPixels", {
              get: function () {
                return this._roundPixels;
              },
              set: function (t) {
                this._roundPixels !== t && (this._transformID = -1),
                  (this._roundPixels = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return "tint" in this.shader ? this.shader.tint : null;
              },
              set: function (t) {
                this.shader.tint = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "texture", {
              get: function () {
                return "texture" in this.shader ? this.shader.texture : null;
              },
              set: function (t) {
                this.shader.texture = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._render = function (t) {
              var r = this.geometry.buffers[0].data;
              this.shader.batchable &&
              this.drawMode === nt.TRIANGLES &&
              r.length < 2 * e.BATCHABLE_SIZE
                ? this._renderToBatch(t)
                : this._renderDefault(t);
            }),
            (e.prototype._renderDefault = function (t) {
              var e = this.shader;
              (e.alpha = this.worldAlpha),
                e.update && e.update(),
                t.batch.flush(),
                e.program.uniformData.translationMatrix &&
                  (e.uniforms.translationMatrix =
                    this.transform.worldTransform.toArray(!0)),
                t.shader.bind(e),
                t.state.set(this.state),
                t.geometry.bind(this.geometry, e),
                t.geometry.draw(
                  this.drawMode,
                  this.size,
                  this.start,
                  this.geometry.instanceCount
                );
            }),
            (e.prototype._renderToBatch = function (t) {
              var e = this.geometry,
                r = this.shader;
              r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()),
                this.calculateVertices(),
                (this.indices = e.indexBuffer.data),
                (this._tintRGB = r._tintRGB),
                (this._texture = r.texture);
              var i = this.material.pluginName;
              t.batch.setObjectRenderer(t.plugins[i]),
                t.plugins[i].render(this);
            }),
            (e.prototype.calculateVertices = function () {
              var t = this.geometry.buffers[0],
                e = t.data,
                r = t._updateID;
              if (
                r !== this.vertexDirty ||
                this._transformID !== this.transform._worldID
              ) {
                (this._transformID = this.transform._worldID),
                  this.vertexData.length !== e.length &&
                    (this.vertexData = new Float32Array(e.length));
                for (
                  var i = this.transform.worldTransform,
                    n = i.a,
                    o = i.b,
                    s = i.c,
                    a = i.d,
                    h = i.tx,
                    u = i.ty,
                    l = this.vertexData,
                    c = 0;
                  c < l.length / 2;
                  c++
                ) {
                  var d = e[2 * c],
                    f = e[2 * c + 1];
                  (l[2 * c] = n * d + s * f + h),
                    (l[2 * c + 1] = o * d + a * f + u);
                }
                if (this._roundPixels) {
                  var p = yt.RESOLUTION;
                  for (c = 0; c < l.length; ++c)
                    l[c] = Math.round(((l[c] * p) | 0) / p);
                }
                this.vertexDirty = r;
              }
            }),
            (e.prototype.calculateUvs = function () {
              var t = this.geometry.buffers[1],
                e = this.shader;
              e.uvMatrix.isSimple
                ? (this.uvs = t.data)
                : (this.batchUvs || (this.batchUvs = new _s(t, e.uvMatrix)),
                  this.batchUvs.update(),
                  (this.uvs = this.batchUvs.data));
            }),
            (e.prototype._calculateBounds = function () {
              this.calculateVertices(),
                this._bounds.addVertexData(
                  this.vertexData,
                  0,
                  this.vertexData.length
                );
            }),
            (e.prototype.containsPoint = function (t) {
              if (!this.getBounds().contains(t.x, t.y)) return !1;
              this.worldTransform.applyInverse(t, ms);
              for (
                var e = this.geometry.getBuffer("aVertexPosition").data,
                  r = vs.points,
                  i = this.geometry.getIndex().data,
                  n = i.length,
                  o = 4 === this.drawMode ? 3 : 1,
                  s = 0;
                s + 2 < n;
                s += o
              ) {
                var a = 2 * i[s],
                  h = 2 * i[s + 1],
                  u = 2 * i[s + 2];
                if (
                  ((r[0] = e[a]),
                  (r[1] = e[a + 1]),
                  (r[2] = e[h]),
                  (r[3] = e[h + 1]),
                  (r[4] = e[u]),
                  (r[5] = e[u + 1]),
                  vs.contains(ms.x, ms.y))
                )
                  return !0;
              }
              return !1;
            }),
            (e.prototype.destroy = function (e) {
              t.prototype.destroy.call(this, e),
                this.geometry.refCount--,
                0 === this.geometry.refCount && this.geometry.dispose(),
                this._cachedTexture &&
                  (this._cachedTexture.destroy(), (this._cachedTexture = null)),
                (this.geometry = null),
                (this.shader = null),
                (this.state = null),
                (this.uvs = null),
                (this.indices = null),
                (this.vertexData = null);
            }),
            (e.BATCHABLE_SIZE = 100),
            e
          );
        })(be),
        gs = (function (t) {
          function e(e, r) {
            var i = this,
              n = {
                uSampler: e,
                alpha: 1,
                uTextureMatrix: ae.IDENTITY,
                uColor: new Float32Array([1, 1, 1, 1]),
              };
            return (
              (r = Object.assign(
                { tint: 16777215, alpha: 1, pluginName: "batch" },
                r
              )).uniforms && Object.assign(n, r.uniforms),
              ((i =
                t.call(
                  this,
                  r.program ||
                    hi.from(
                      "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
                      "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"
                    ),
                  n
                ) || this)._colorDirty = !1),
              (i.uvMatrix = new fi(e)),
              (i.batchable = void 0 === r.program),
              (i.pluginName = r.pluginName),
              (i.tint = r.tint),
              (i.alpha = r.alpha),
              i
            );
          }
          return (
            ps(e, t),
            Object.defineProperty(e.prototype, "texture", {
              get: function () {
                return this.uniforms.uSampler;
              },
              set: function (t) {
                this.uniforms.uSampler !== t &&
                  ((this.uniforms.uSampler = t), (this.uvMatrix.texture = t));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "alpha", {
              get: function () {
                return this._alpha;
              },
              set: function (t) {
                t !== this._alpha &&
                  ((this._alpha = t), (this._colorDirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return this._tint;
              },
              set: function (t) {
                t !== this._tint &&
                  ((this._tint = t),
                  (this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)),
                  (this._colorDirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.update = function () {
              if (this._colorDirty) {
                this._colorDirty = !1;
                var t = this.texture.baseTexture;
                Nt(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode);
              }
              this.uvMatrix.update() &&
                (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
            }),
            e
          );
        })(ui),
        Ts = (function (t) {
          function e(e, r, i) {
            var n = t.call(this) || this,
              o = new pr(e),
              s = new pr(r, !0),
              a = new pr(i, !0, !0);
            return (
              n
                .addAttribute("aVertexPosition", o, 2, !1, at.FLOAT)
                .addAttribute("aTextureCoord", s, 2, !1, at.FLOAT)
                .addIndex(a),
              (n._updateId = -1),
              n
            );
          }
          return (
            ps(e, t),
            Object.defineProperty(e.prototype, "vertexDirtyId", {
              get: function () {
                return this.buffers[0]._updateID;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(Tr),
        xs = function (t, e) {
          return (xs =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        Es = function () {
          (this.info = []),
            (this.common = []),
            (this.page = []),
            (this.char = []),
            (this.kerning = []);
        },
        bs = (function () {
          function t() {}
          return (
            (t.test = function (t) {
              return "string" == typeof t && 0 === t.indexOf("info face=");
            }),
            (t.parse = function (t) {
              var e = t.match(/^[a-z]+\s+.+$/gm),
                r = {
                  info: [],
                  common: [],
                  page: [],
                  char: [],
                  chars: [],
                  kerning: [],
                  kernings: [],
                };
              for (var i in e) {
                var n = e[i].match(/^[a-z]+/gm)[0],
                  o = e[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
                  s = {};
                for (var a in o) {
                  var h = o[a].split("="),
                    u = h[0],
                    l = h[1].replace(/"/gm, ""),
                    c = parseFloat(l),
                    d = isNaN(c) ? l : c;
                  s[u] = d;
                }
                r[n].push(s);
              }
              var f = new Es();
              return (
                r.info.forEach(function (t) {
                  return f.info.push({
                    face: t.face,
                    size: parseInt(t.size, 10),
                  });
                }),
                r.common.forEach(function (t) {
                  return f.common.push({
                    lineHeight: parseInt(t.lineHeight, 10),
                  });
                }),
                r.page.forEach(function (t) {
                  return f.page.push({ id: parseInt(t.id, 10), file: t.file });
                }),
                r.char.forEach(function (t) {
                  return f.char.push({
                    id: parseInt(t.id, 10),
                    page: parseInt(t.page, 10),
                    x: parseInt(t.x, 10),
                    y: parseInt(t.y, 10),
                    width: parseInt(t.width, 10),
                    height: parseInt(t.height, 10),
                    xoffset: parseInt(t.xoffset, 10),
                    yoffset: parseInt(t.yoffset, 10),
                    xadvance: parseInt(t.xadvance, 10),
                  });
                }),
                r.kerning.forEach(function (t) {
                  return f.kerning.push({
                    first: parseInt(t.first, 10),
                    second: parseInt(t.second, 10),
                    amount: parseInt(t.amount, 10),
                  });
                }),
                f
              );
            }),
            t
          );
        })(),
        As = (function () {
          function t() {}
          return (
            (t.test = function (t) {
              return (
                t instanceof XMLDocument &&
                t.getElementsByTagName("page").length &&
                null !== t.getElementsByTagName("info")[0].getAttribute("face")
              );
            }),
            (t.parse = function (t) {
              for (
                var e = new Es(),
                  r = t.getElementsByTagName("info"),
                  i = t.getElementsByTagName("common"),
                  n = t.getElementsByTagName("page"),
                  o = t.getElementsByTagName("char"),
                  s = t.getElementsByTagName("kerning"),
                  a = 0;
                a < r.length;
                a++
              )
                e.info.push({
                  face: r[a].getAttribute("face"),
                  size: parseInt(r[a].getAttribute("size"), 10),
                });
              for (a = 0; a < i.length; a++)
                e.common.push({
                  lineHeight: parseInt(i[a].getAttribute("lineHeight"), 10),
                });
              for (a = 0; a < n.length; a++)
                e.page.push({
                  id: parseInt(n[a].getAttribute("id"), 10) || 0,
                  file: n[a].getAttribute("file"),
                });
              for (a = 0; a < o.length; a++) {
                var h = o[a];
                e.char.push({
                  id: parseInt(h.getAttribute("id"), 10),
                  page: parseInt(h.getAttribute("page"), 10) || 0,
                  x: parseInt(h.getAttribute("x"), 10),
                  y: parseInt(h.getAttribute("y"), 10),
                  width: parseInt(h.getAttribute("width"), 10),
                  height: parseInt(h.getAttribute("height"), 10),
                  xoffset: parseInt(h.getAttribute("xoffset"), 10),
                  yoffset: parseInt(h.getAttribute("yoffset"), 10),
                  xadvance: parseInt(h.getAttribute("xadvance"), 10),
                });
              }
              for (a = 0; a < s.length; a++)
                e.kerning.push({
                  first: parseInt(s[a].getAttribute("first"), 10),
                  second: parseInt(s[a].getAttribute("second"), 10),
                  amount: parseInt(s[a].getAttribute("amount"), 10),
                });
              return e;
            }),
            t
          );
        })(),
        Os = (function () {
          function t() {}
          return (
            (t.test = function (t) {
              if ("string" == typeof t && t.indexOf("<font>") > -1) {
                var e = new self.DOMParser().parseFromString(t, "text/xml");
                return As.test(e);
              }
              return !1;
            }),
            (t.parse = function (t) {
              var e = new self.DOMParser().parseFromString(t, "text/xml");
              return As.parse(e);
            }),
            t
          );
        })(),
        Ss = [bs, As, Os];
      function Rs(t) {
        for (var e = 0; e < Ss.length; e++) if (Ss[e].test(t)) return Ss[e];
        return null;
      }
      function Is(t, e, r, i, n, o) {
        var s,
          a = r.fill;
        if (!Array.isArray(a)) return a;
        if (1 === a.length) return a[0];
        var h = r.dropShadow ? r.dropShadowDistance : 0,
          u = r.padding || 0,
          l = Math.ceil(t.width / i) - h - 2 * u,
          c = Math.ceil(t.height / i) - h - 2 * u,
          d = a.slice(),
          f = r.fillGradientStops.slice();
        if (!f.length)
          for (var p = d.length + 1, _ = 1; _ < p; ++_) f.push(_ / p);
        if (
          (d.unshift(a[0]),
          f.unshift(0),
          d.push(a[a.length - 1]),
          f.push(1),
          r.fillGradientType === _o.LINEAR_VERTICAL)
        ) {
          s = e.createLinearGradient(l / 2, u, l / 2, c + u);
          var m = 0,
            v = (o.fontProperties.fontSize + r.strokeThickness) / c;
          for (_ = 0; _ < n.length; _++)
            for (var y = o.lineHeight * _, g = 0; g < d.length; g++) {
              var T =
                  y / c + ("number" == typeof f[g] ? f[g] : g / d.length) * v,
                x = Math.max(m, T);
              (x = Math.min(x, 1)), s.addColorStop(x, d[g]), (m = x);
            }
        } else {
          s = e.createLinearGradient(u, c / 2, l + u, c / 2);
          var E = d.length + 1,
            b = 1;
          for (_ = 0; _ < d.length; _++) {
            var A;
            (A = "number" == typeof f[_] ? f[_] : b / E),
              s.addColorStop(A, d[_]),
              b++;
          }
        }
        return s;
      }
      function ws(t, e, r, i, n, o, s) {
        var a = r.text,
          h = r.fontProperties;
        e.translate(i, n), e.scale(o, o);
        var u = s.strokeThickness / 2,
          l = -s.strokeThickness / 2;
        (e.font = s.toFontString()),
          (e.lineWidth = s.strokeThickness),
          (e.textBaseline = s.textBaseline),
          (e.lineJoin = s.lineJoin),
          (e.miterLimit = s.miterLimit),
          (e.fillStyle = Is(t, e, s, o, [a], r)),
          (e.strokeStyle = s.stroke),
          (e.font = s.toFontString()),
          (e.lineWidth = s.strokeThickness),
          (e.textBaseline = s.textBaseline),
          (e.lineJoin = s.lineJoin),
          (e.miterLimit = s.miterLimit),
          (e.fillStyle = Is(t, e, s, o, [a], r)),
          (e.strokeStyle = s.stroke);
        var c = s.dropShadowColor,
          d = It("number" == typeof c ? c : Pt(c));
        s.dropShadow
          ? ((e.shadowColor =
              "rgba(" +
              255 * d[0] +
              "," +
              255 * d[1] +
              "," +
              255 * d[2] +
              "," +
              s.dropShadowAlpha +
              ")"),
            (e.shadowBlur = s.dropShadowBlur),
            (e.shadowOffsetX =
              Math.cos(s.dropShadowAngle) * s.dropShadowDistance),
            (e.shadowOffsetY =
              Math.sin(s.dropShadowAngle) * s.dropShadowDistance))
          : ((e.shadowColor = "black"),
            (e.shadowBlur = 0),
            (e.shadowOffsetX = 0),
            (e.shadowOffsetY = 0)),
          s.stroke &&
            s.strokeThickness &&
            e.strokeText(a, u, l + r.lineHeight - h.descent),
          s.fill && e.fillText(a, u, l + r.lineHeight - h.descent),
          e.setTransform(1, 0, 0, 1, 0, 0),
          (e.fillStyle = "rgba(0, 0, 0, 0)");
      }
      var Ps = (function () {
          function t(t, e, r) {
            var i = t.info[0],
              n = t.common[0],
              o = Kt(t.page[0].file),
              s = {};
            (this._ownsTextures = r),
              (this.font = i.face),
              (this.size = i.size),
              (this.lineHeight = n.lineHeight / o),
              (this.chars = {}),
              (this.pageTextures = s);
            for (var a = 0; a < t.page.length; a++) {
              var h = t.page[a],
                u = h.id,
                l = h.file;
              s[u] = e instanceof Array ? e[a] : e[l];
            }
            for (a = 0; a < t.char.length; a++) {
              var c = t.char[a],
                d = ((u = c.id), c.page),
                f = t.char[a],
                p = f.x,
                _ = f.y,
                m = f.width,
                v = f.height,
                y = f.xoffset,
                g = f.yoffset,
                T = f.xadvance;
              (_ /= o), (m /= o), (v /= o), (y /= o), (g /= o), (T /= o);
              var x = new te(
                (p /= o) + s[d].frame.x / o,
                _ + s[d].frame.y / o,
                m,
                v
              );
              this.chars[u] = {
                xOffset: y,
                yOffset: g,
                xAdvance: T,
                kerning: {},
                texture: new hr(s[d].baseTexture, x),
                page: d,
              };
            }
            for (a = 0; a < t.kerning.length; a++) {
              var E = t.kerning[a],
                b = E.first,
                A = E.second,
                O = E.amount;
              (b /= o),
                (A /= o),
                (O /= o),
                this.chars[A] && (this.chars[A].kerning[b] = O);
            }
          }
          return (
            (t.prototype.destroy = function () {
              for (var t in this.chars)
                this.chars[t].texture.destroy(), (this.chars[t].texture = null);
              for (var t in this.pageTextures)
                this._ownsTextures && this.pageTextures[t].destroy(!0),
                  (this.pageTextures[t] = null);
              (this.chars = null), (this.pageTextures = null);
            }),
            (t.install = function (e, r, i) {
              var n;
              if (e instanceof Es) n = e;
              else {
                var o = Rs(e);
                if (!o) throw new Error("Unrecognized data format for font.");
                n = o.parse(e);
              }
              r instanceof hr && (r = [r]);
              var s = new t(n, r, i);
              return (t.available[s.font] = s), s;
            }),
            (t.uninstall = function (e) {
              var r = t.available[e];
              if (!r) throw new Error("No font found named '" + e + "'");
              r.destroy(), delete t.available[e];
            }),
            (t.from = function (e, r, i) {
              if (!e)
                throw new Error("[BitmapFont] Property `name` is required.");
              var n = Object.assign({}, t.defaultOptions, i),
                o = n.chars,
                s = n.padding,
                a = n.resolution,
                h = n.textureWidth,
                u = n.textureHeight,
                l = (function (t) {
                  "string" == typeof t && (t = [t]);
                  for (var e = [], r = 0, i = t.length; r < i; r++) {
                    var n = t[r];
                    if (Array.isArray(n)) {
                      if (2 !== n.length)
                        throw new Error(
                          "[BitmapFont]: Invalid character range length, expecting 2 got " +
                            n.length +
                            "."
                        );
                      var o = n[0].charCodeAt(0),
                        s = n[1].charCodeAt(0);
                      if (s < o)
                        throw new Error(
                          "[BitmapFont]: Invalid character range."
                        );
                      for (var a = o, h = s; a <= h; a++)
                        e.push(String.fromCharCode(a));
                    } else e.push.apply(e, n.split(""));
                  }
                  if (0 === e.length)
                    throw new Error(
                      "[BitmapFont]: Empty set when resolving characters."
                    );
                  return e;
                })(o),
                c = r instanceof Bo ? r : new Bo(r),
                d = h,
                f = new Es();
              (f.info[0] = { face: c.fontFamily, size: c.fontSize }),
                (f.common[0] = { lineHeight: c.fontSize });
              for (
                var p, _, m, v = 0, y = 0, g = 0, T = [], x = 0;
                x < l.length;
                x++
              ) {
                p ||
                  (((p = document.createElement("canvas")).width = h),
                  (p.height = u),
                  (_ = p.getContext("2d")),
                  (m = new Ve(p, { resolution: a })),
                  T.push(new hr(m)),
                  f.page.push({ id: T.length - 1, file: "" }));
                var E = Ho.measureText(l[x], c, !1, p),
                  b = E.width,
                  A = Math.ceil(E.height),
                  O = Math.ceil(("italic" === c.fontStyle ? 2 : 1) * b);
                if (y >= u - A * a) {
                  if (0 === y)
                    throw new Error(
                      "[BitmapFont] textureHeight " +
                        u +
                        "px is too small for " +
                        c.fontSize +
                        "px fonts"
                    );
                  --x,
                    (p = null),
                    (_ = null),
                    (m = null),
                    (y = 0),
                    (v = 0),
                    (g = 0);
                } else if (
                  ((g = Math.max(A + E.fontProperties.descent, g)),
                  O * a + v >= d)
                )
                  --x, (y += g * a), (y = Math.ceil(y)), (v = 0), (g = 0);
                else {
                  ws(p, _, E, v, y, a, c);
                  var S = E.text.charCodeAt(0);
                  f.char.push({
                    id: S,
                    page: T.length - 1,
                    x: v / a,
                    y: y / a,
                    width: O,
                    height: A,
                    xoffset: 0,
                    yoffset: 0,
                    xadvance: Math.ceil(
                      b -
                        (c.dropShadow ? c.dropShadowDistance : 0) -
                        (c.stroke ? c.strokeThickness : 0)
                    ),
                  }),
                    (v += (O + 2 * s) * a),
                    (v = Math.ceil(v));
                }
              }
              x = 0;
              for (var R = l.length; x < R; x++)
                for (var I = l[x], w = 0; w < R; w++) {
                  var P = l[w],
                    M = _.measureText(I).width,
                    D = _.measureText(P).width,
                    C = _.measureText(I + P).width - (M + D);
                  C &&
                    f.kerning.push({
                      first: I.charCodeAt(0),
                      second: P.charCodeAt(0),
                      amount: C,
                    });
                }
              var N = new t(f, T, !0);
              return (
                void 0 !== t.available[e] && t.uninstall(e),
                (t.available[e] = N),
                N
              );
            }),
            (t.ALPHA = [["a", "z"], ["A", "Z"], " "]),
            (t.NUMERIC = [["0", "9"]]),
            (t.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
            (t.ASCII = [[" ", "~"]]),
            (t.defaultOptions = {
              resolution: 1,
              textureWidth: 512,
              textureHeight: 512,
              padding: 4,
              chars: t.ALPHANUMERIC,
            }),
            (t.available = {}),
            t
          );
        })(),
        Ms = [],
        Ds = [],
        Cs =
          ((function (t) {
            function e(r, i) {
              void 0 === i && (i = {});
              var n = t.call(this) || this;
              n._tint = 16777215;
              var o = Object.assign({}, e.styleDefaults, i),
                s = o.align,
                a = o.tint,
                h = o.maxWidth,
                u = o.letterSpacing,
                l = o.fontName,
                c = o.fontSize;
              if (!Ps.available[l])
                throw new Error('Missing BitmapFont "' + l + '"');
              return (
                (n._activePagesMeshData = []),
                (n._textWidth = 0),
                (n._textHeight = 0),
                (n._align = s),
                (n._tint = a),
                (n._fontName = l),
                (n._fontSize = c || Ps.available[l].size),
                (n._text = r),
                (n._maxWidth = h),
                (n._maxLineHeight = 0),
                (n._letterSpacing = u),
                (n._anchor = new se(
                  function () {
                    n.dirty = !0;
                  },
                  n,
                  0,
                  0
                )),
                (n._roundPixels = yt.ROUND_PIXELS),
                (n.dirty = !0),
                (n._textureCache = {}),
                n
              );
            }
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              xs(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
              (e.prototype.updateText = function () {
                for (
                  var t,
                    e = Ps.available[this._fontName],
                    r = this._fontSize / e.size,
                    i = new oe(),
                    n = [],
                    o = [],
                    s = [],
                    a = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ",
                    h = a.length,
                    u = (this._maxWidth * e.size) / this._fontSize,
                    l = null,
                    c = 0,
                    d = 0,
                    f = 0,
                    p = -1,
                    _ = 0,
                    m = 0,
                    v = 0,
                    y = 0,
                    g = 0;
                  g < h;
                  g++
                ) {
                  var T = a.charCodeAt(g),
                    x = a.charAt(g);
                  if (
                    (/(?:\s)/.test(x) && ((p = g), (_ = c), y++),
                    "\r" !== x && "\n" !== x)
                  ) {
                    var E = e.chars[T];
                    if (E) {
                      l && E.kerning[l] && (i.x += E.kerning[l]);
                      var b = Ds.pop() || {
                        texture: hr.EMPTY,
                        line: 0,
                        charCode: 0,
                        prevSpaces: 0,
                        position: new oe(),
                      };
                      (b.texture = E.texture),
                        (b.line = f),
                        (b.charCode = T),
                        (b.position.x =
                          i.x + E.xOffset + this._letterSpacing / 2),
                        (b.position.y = i.y + E.yOffset),
                        (b.prevSpaces = y),
                        n.push(b),
                        (i.x += E.xAdvance + this._letterSpacing),
                        (c = i.x),
                        (v = Math.max(v, E.yOffset + E.texture.height)),
                        (l = T),
                        -1 !== p &&
                          u > 0 &&
                          i.x > u &&
                          (Bt(n, 1 + p - ++m, 1 + g - p),
                          (g = p),
                          (p = -1),
                          o.push(_),
                          s.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0),
                          (d = Math.max(d, _)),
                          f++,
                          (i.x = 0),
                          (i.y += e.lineHeight),
                          (l = null),
                          (y = 0));
                    }
                  } else
                    o.push(c),
                      s.push(-1),
                      (d = Math.max(d, c)),
                      ++f,
                      ++m,
                      (i.x = 0),
                      (i.y += e.lineHeight),
                      (l = null),
                      (y = 0);
                }
                var A = a.charAt(a.length - 1);
                "\r" !== A &&
                  "\n" !== A &&
                  (/(?:\s)/.test(A) && (c = _),
                  o.push(c),
                  (d = Math.max(d, c)),
                  s.push(-1));
                var O = [];
                for (g = 0; g <= f; g++) {
                  var S = 0;
                  "right" === this._align
                    ? (S = d - o[g])
                    : "center" === this._align
                    ? (S = (d - o[g]) / 2)
                    : "justify" === this._align &&
                      (S = s[g] < 0 ? 0 : (d - o[g]) / s[g]),
                    O.push(S);
                }
                var R = n.length,
                  I = {},
                  w = [],
                  P = this._activePagesMeshData;
                for (g = 0; g < P.length; g++) Ms.push(P[g]);
                for (g = 0; g < R; g++) {
                  var M = (X = n[g].texture).baseTexture.uid;
                  if (!I[M]) {
                    if (!(W = Ms.pop())) {
                      var D = new Ts(),
                        C = new gs(hr.EMPTY);
                      W = {
                        index: 0,
                        indexCount: 0,
                        vertexCount: 0,
                        uvsCount: 0,
                        total: 0,
                        mesh: new ys(D, C),
                        vertices: null,
                        uvs: null,
                        indices: null,
                      };
                    }
                    (W.index = 0),
                      (W.indexCount = 0),
                      (W.vertexCount = 0),
                      (W.uvsCount = 0),
                      (W.total = 0);
                    var N = this._textureCache;
                    (N[M] = N[M] || new hr(X.baseTexture)),
                      (W.mesh.texture = N[M]),
                      (W.mesh.tint = this._tint),
                      w.push(W),
                      (I[M] = W);
                  }
                  I[M].total++;
                }
                for (g = 0; g < P.length; g++)
                  -1 === w.indexOf(P[g]) && this.removeChild(P[g].mesh);
                for (g = 0; g < w.length; g++)
                  w[g].mesh.parent !== this && this.addChild(w[g].mesh);
                for (var g in ((this._activePagesMeshData = w), I)) {
                  var L = (W = I[g]).total;
                  if (
                    !(
                      (null === (t = W.indices) || void 0 === t
                        ? void 0
                        : t.length) >
                      6 * L
                    ) ||
                    W.vertices.length < 2 * ys.BATCHABLE_SIZE
                  )
                    (W.vertices = new Float32Array(8 * L)),
                      (W.uvs = new Float32Array(8 * L)),
                      (W.indices = new Uint16Array(6 * L));
                  else
                    for (
                      var F = W.total, U = W.vertices, B = 4 * F * 2;
                      B < U.length;
                      B++
                    )
                      U[B] = 0;
                  W.mesh.size = 6 * L;
                }
                for (g = 0; g < R; g++) {
                  var G =
                    (x = n[g]).position.x +
                    O[x.line] * ("justify" === this._align ? x.prevSpaces : 1);
                  this._roundPixels && (G = Math.round(G));
                  var X,
                    k = G * r,
                    H = x.position.y * r,
                    j = I[(X = x.texture).baseTexture.uid],
                    Y = X.frame,
                    V = X._uvs,
                    z = j.index++;
                  (j.indices[6 * z + 0] = 0 + 4 * z),
                    (j.indices[6 * z + 1] = 1 + 4 * z),
                    (j.indices[6 * z + 2] = 2 + 4 * z),
                    (j.indices[6 * z + 3] = 0 + 4 * z),
                    (j.indices[6 * z + 4] = 2 + 4 * z),
                    (j.indices[6 * z + 5] = 3 + 4 * z),
                    (j.vertices[8 * z + 0] = k),
                    (j.vertices[8 * z + 1] = H),
                    (j.vertices[8 * z + 2] = k + Y.width * r),
                    (j.vertices[8 * z + 3] = H),
                    (j.vertices[8 * z + 4] = k + Y.width * r),
                    (j.vertices[8 * z + 5] = H + Y.height * r),
                    (j.vertices[8 * z + 6] = k),
                    (j.vertices[8 * z + 7] = H + Y.height * r),
                    (j.uvs[8 * z + 0] = V.x0),
                    (j.uvs[8 * z + 1] = V.y0),
                    (j.uvs[8 * z + 2] = V.x1),
                    (j.uvs[8 * z + 3] = V.y1),
                    (j.uvs[8 * z + 4] = V.x2),
                    (j.uvs[8 * z + 5] = V.y2),
                    (j.uvs[8 * z + 6] = V.x3),
                    (j.uvs[8 * z + 7] = V.y3);
                }
                for (var g in ((this._textWidth = d * r),
                (this._textHeight = (i.y + e.lineHeight) * r),
                I)) {
                  var W = I[g];
                  if (0 !== this.anchor.x || 0 !== this.anchor.y)
                    for (
                      var q = 0,
                        K = this._textWidth * this.anchor.x,
                        Z = this._textHeight * this.anchor.y,
                        J = 0;
                      J < W.total;
                      J++
                    )
                      (W.vertices[q++] -= K),
                        (W.vertices[q++] -= Z),
                        (W.vertices[q++] -= K),
                        (W.vertices[q++] -= Z),
                        (W.vertices[q++] -= K),
                        (W.vertices[q++] -= Z),
                        (W.vertices[q++] -= K),
                        (W.vertices[q++] -= Z);
                  this._maxLineHeight = v * r;
                  var Q = W.mesh.geometry.getBuffer("aVertexPosition"),
                    $ = W.mesh.geometry.getBuffer("aTextureCoord"),
                    tt = W.mesh.geometry.getIndex();
                  (Q.data = W.vertices),
                    ($.data = W.uvs),
                    (tt.data = W.indices),
                    Q.update(),
                    $.update(),
                    tt.update();
                }
                for (g = 0; g < n.length; g++) Ds.push(n[g]);
              }),
              (e.prototype.updateTransform = function () {
                this.validate(), this.containerUpdateTransform();
              }),
              (e.prototype.getLocalBounds = function () {
                return this.validate(), t.prototype.getLocalBounds.call(this);
              }),
              (e.prototype.validate = function () {
                this.dirty && (this.updateText(), (this.dirty = !1));
              }),
              Object.defineProperty(e.prototype, "tint", {
                get: function () {
                  return this._tint;
                },
                set: function (t) {
                  if (this._tint !== t) {
                    this._tint = t;
                    for (var e = 0; e < this._activePagesMeshData.length; e++)
                      this._activePagesMeshData[e].mesh.tint = t;
                  }
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "align", {
                get: function () {
                  return this._align;
                },
                set: function (t) {
                  this._align !== t && ((this._align = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "fontName", {
                get: function () {
                  return this._fontName;
                },
                set: function (t) {
                  if (!Ps.available[t])
                    throw new Error('Missing BitmapFont "' + t + '"');
                  this._fontName !== t &&
                    ((this._fontName = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "fontSize", {
                get: function () {
                  return this._fontSize;
                },
                set: function (t) {
                  this._fontSize !== t &&
                    ((this._fontSize = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "anchor", {
                get: function () {
                  return this._anchor;
                },
                set: function (t) {
                  "number" == typeof t
                    ? this._anchor.set(t)
                    : this._anchor.copyFrom(t);
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "text", {
                get: function () {
                  return this._text;
                },
                set: function (t) {
                  (t = String(null == t ? "" : t)),
                    this._text !== t && ((this._text = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "maxWidth", {
                get: function () {
                  return this._maxWidth;
                },
                set: function (t) {
                  this._maxWidth !== t &&
                    ((this._maxWidth = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "maxLineHeight", {
                get: function () {
                  return this.validate(), this._maxLineHeight;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "textWidth", {
                get: function () {
                  return this.validate(), this._textWidth;
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "letterSpacing", {
                get: function () {
                  return this._letterSpacing;
                },
                set: function (t) {
                  this._letterSpacing !== t &&
                    ((this._letterSpacing = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "roundPixels", {
                get: function () {
                  return this._roundPixels;
                },
                set: function (t) {
                  t !== this._roundPixels &&
                    ((this._roundPixels = t), (this.dirty = !0));
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "textHeight", {
                get: function () {
                  return this.validate(), this._textHeight;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.destroy = function (e) {
                var r = this._textureCache;
                for (var i in r) r[i].destroy(), delete r[i];
                (this._textureCache = null), t.prototype.destroy.call(this, e);
              }),
              (e.styleDefaults = {
                align: "left",
                tint: 16777215,
                maxWidth: 0,
                letterSpacing: 0,
              });
          })(be),
          (function () {
            function t() {}
            return (
              (t.add = function () {
                Sn.setExtensionXhrType("fnt", Sn.XHR_RESPONSE_TYPE.TEXT);
              }),
              (t.use = function (e, r) {
                var i = Rs(e.data);
                if (i)
                  for (
                    var n = t.getBaseUrl(this, e),
                      o = i.parse(e.data),
                      s = {},
                      a = function (t) {
                        (s[t.metadata.pageFile] = t.texture),
                          Object.keys(s).length === o.page.length &&
                            ((e.bitmapFont = Ps.install(o, s, !0)), r());
                      },
                      h = 0;
                    h < o.page.length;
                    ++h
                  ) {
                    var u = o.page[h].file,
                      l = n + u,
                      c = !1;
                    for (var d in this.resources) {
                      var f = this.resources[d];
                      if (f.url === l) {
                        (f.metadata.pageFile = u),
                          f.texture ? a(f) : f.onAfterMiddleware.add(a),
                          (c = !0);
                        break;
                      }
                    }
                    if (!c) {
                      var p = {
                        crossOrigin: e.crossOrigin,
                        loadType: Sn.LOAD_TYPE.IMAGE,
                        metadata: Object.assign(
                          { pageFile: u },
                          e.metadata.imageMetadata
                        ),
                        parentResource: e,
                      };
                      this.add(l, p, a);
                    }
                  }
                else r();
              }),
              (t.getBaseUrl = function (e, r) {
                var i = r.isDataUrl ? "" : t.dirname(r.url);
                return (
                  r.isDataUrl &&
                    ("." === i && (i = ""),
                    e.baseUrl &&
                      i &&
                      "/" === e.baseUrl.charAt(e.baseUrl.length - 1) &&
                      (i += "/")),
                  (i = i.replace(e.baseUrl, "")) &&
                    "/" !== i.charAt(i.length - 1) &&
                    (i += "/"),
                  i
                );
              }),
              (t.dirname = function (t) {
                var e = t
                  .replace(/\\/g, "/")
                  .replace(/\/$/, "")
                  .replace(/\/[^\/]*$/, "");
                return e === t ? "." : "" === e ? "/" : e;
              }),
              t
            );
          })()),
        Ns = function (t, e) {
          return (Ns =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        Ls = (function (t) {
          function e(e) {
            void 0 === e && (e = 1);
            var r =
              t.call(
                this,
                "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
                "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
                { uAlpha: 1 }
              ) || this;
            return (r.alpha = e), r;
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              Ns(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            Object.defineProperty(e.prototype, "alpha", {
              get: function () {
                return this.uniforms.uAlpha;
              },
              set: function (t) {
                this.uniforms.uAlpha = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(ci),
        Fs = function (t, e) {
          return (Fs =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        };
      function Us(t, e) {
        function r() {
          this.constructor = t;
        }
        Fs(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var Bs,
        Gs,
        Xs,
        ks,
        Hs,
        js,
        Ys,
        Vs,
        zs,
        Ws,
        qs,
        Ks,
        Zs,
        Js,
        Qs,
        $s,
        ta,
        ea,
        ra = {
          5: [0.153388, 0.221461, 0.250301],
          7: [0.071303, 0.131514, 0.189879, 0.214607],
          9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
          11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
          13: [
            0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868,
            0.197641,
          ],
          15: [
            489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
            0.197448,
          ],
        },
        ia = [
          "varying vec2 vBlurTexCoords[%size%];",
          "uniform sampler2D uSampler;",
          "void main(void)",
          "{",
          "    gl_FragColor = vec4(0.0);",
          "    %blur%",
          "}",
        ].join("\n");
      !(function (t) {
        (t[(t.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
          (t[(t.WEBGL = 1)] = "WEBGL"),
          (t[(t.WEBGL2 = 2)] = "WEBGL2");
      })(Bs || (Bs = {})),
        (function (t) {
          (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
            (t[(t.WEBGL = 1)] = "WEBGL"),
            (t[(t.CANVAS = 2)] = "CANVAS");
        })(Gs || (Gs = {})),
        (function (t) {
          (t[(t.COLOR = 16384)] = "COLOR"),
            (t[(t.DEPTH = 256)] = "DEPTH"),
            (t[(t.STENCIL = 1024)] = "STENCIL");
        })(Xs || (Xs = {})),
        (function (t) {
          (t[(t.NORMAL = 0)] = "NORMAL"),
            (t[(t.ADD = 1)] = "ADD"),
            (t[(t.MULTIPLY = 2)] = "MULTIPLY"),
            (t[(t.SCREEN = 3)] = "SCREEN"),
            (t[(t.OVERLAY = 4)] = "OVERLAY"),
            (t[(t.DARKEN = 5)] = "DARKEN"),
            (t[(t.LIGHTEN = 6)] = "LIGHTEN"),
            (t[(t.COLOR_DODGE = 7)] = "COLOR_DODGE"),
            (t[(t.COLOR_BURN = 8)] = "COLOR_BURN"),
            (t[(t.HARD_LIGHT = 9)] = "HARD_LIGHT"),
            (t[(t.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
            (t[(t.DIFFERENCE = 11)] = "DIFFERENCE"),
            (t[(t.EXCLUSION = 12)] = "EXCLUSION"),
            (t[(t.HUE = 13)] = "HUE"),
            (t[(t.SATURATION = 14)] = "SATURATION"),
            (t[(t.COLOR = 15)] = "COLOR"),
            (t[(t.LUMINOSITY = 16)] = "LUMINOSITY"),
            (t[(t.NORMAL_NPM = 17)] = "NORMAL_NPM"),
            (t[(t.ADD_NPM = 18)] = "ADD_NPM"),
            (t[(t.SCREEN_NPM = 19)] = "SCREEN_NPM"),
            (t[(t.NONE = 20)] = "NONE"),
            (t[(t.SRC_OVER = 0)] = "SRC_OVER"),
            (t[(t.SRC_IN = 21)] = "SRC_IN"),
            (t[(t.SRC_OUT = 22)] = "SRC_OUT"),
            (t[(t.SRC_ATOP = 23)] = "SRC_ATOP"),
            (t[(t.DST_OVER = 24)] = "DST_OVER"),
            (t[(t.DST_IN = 25)] = "DST_IN"),
            (t[(t.DST_OUT = 26)] = "DST_OUT"),
            (t[(t.DST_ATOP = 27)] = "DST_ATOP"),
            (t[(t.ERASE = 26)] = "ERASE"),
            (t[(t.SUBTRACT = 28)] = "SUBTRACT"),
            (t[(t.XOR = 29)] = "XOR");
        })(ks || (ks = {})),
        (function (t) {
          (t[(t.POINTS = 0)] = "POINTS"),
            (t[(t.LINES = 1)] = "LINES"),
            (t[(t.LINE_LOOP = 2)] = "LINE_LOOP"),
            (t[(t.LINE_STRIP = 3)] = "LINE_STRIP"),
            (t[(t.TRIANGLES = 4)] = "TRIANGLES"),
            (t[(t.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
            (t[(t.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN");
        })(Hs || (Hs = {})),
        (function (t) {
          (t[(t.RGBA = 6408)] = "RGBA"),
            (t[(t.RGB = 6407)] = "RGB"),
            (t[(t.ALPHA = 6406)] = "ALPHA"),
            (t[(t.LUMINANCE = 6409)] = "LUMINANCE"),
            (t[(t.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
            (t[(t.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
            (t[(t.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL");
        })(js || (js = {})),
        (function (t) {
          (t[(t.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
            (t[(t.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
            (t[(t.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              "TEXTURE_CUBE_MAP_POSITIVE_X"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_X"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Y"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
            (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              "TEXTURE_CUBE_MAP_POSITIVE_Z"),
            (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              "TEXTURE_CUBE_MAP_NEGATIVE_Z");
        })(Ys || (Ys = {})),
        (function (t) {
          (t[(t.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
            (t[(t.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
            (t[(t.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
            (t[(t.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
            (t[(t.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
            (t[(t.FLOAT = 5126)] = "FLOAT"),
            (t[(t.HALF_FLOAT = 36193)] = "HALF_FLOAT");
        })(Vs || (Vs = {})),
        (function (t) {
          (t[(t.FLOAT = 0)] = "FLOAT"),
            (t[(t.INT = 1)] = "INT"),
            (t[(t.UINT = 2)] = "UINT");
        })(zs || (zs = {})),
        (function (t) {
          (t[(t.NEAREST = 0)] = "NEAREST"), (t[(t.LINEAR = 1)] = "LINEAR");
        })(Ws || (Ws = {})),
        (function (t) {
          (t[(t.CLAMP = 33071)] = "CLAMP"),
            (t[(t.REPEAT = 10497)] = "REPEAT"),
            (t[(t.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT");
        })(qs || (qs = {})),
        (function (t) {
          (t[(t.OFF = 0)] = "OFF"),
            (t[(t.POW2 = 1)] = "POW2"),
            (t[(t.ON = 2)] = "ON"),
            (t[(t.ON_MANUAL = 3)] = "ON_MANUAL");
        })(Ks || (Ks = {})),
        (function (t) {
          (t[(t.NPM = 0)] = "NPM"),
            (t[(t.UNPACK = 1)] = "UNPACK"),
            (t[(t.PMA = 2)] = "PMA"),
            (t[(t.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
            (t[(t.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
            (t[(t.PREMULTIPLY_ALPHA = 2)] = "PREMULTIPLY_ALPHA");
        })(Zs || (Zs = {})),
        (function (t) {
          (t[(t.NO = 0)] = "NO"),
            (t[(t.YES = 1)] = "YES"),
            (t[(t.AUTO = 2)] = "AUTO"),
            (t[(t.BLEND = 0)] = "BLEND"),
            (t[(t.CLEAR = 1)] = "CLEAR"),
            (t[(t.BLIT = 2)] = "BLIT");
        })(Js || (Js = {})),
        (function (t) {
          (t[(t.AUTO = 0)] = "AUTO"), (t[(t.MANUAL = 1)] = "MANUAL");
        })(Qs || (Qs = {})),
        (function (t) {
          (t.LOW = "lowp"), (t.MEDIUM = "mediump"), (t.HIGH = "highp");
        })($s || ($s = {})),
        (function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.SCISSOR = 1)] = "SCISSOR"),
            (t[(t.STENCIL = 2)] = "STENCIL"),
            (t[(t.SPRITE = 3)] = "SPRITE");
        })(ta || (ta = {})),
        (function (t) {
          (t[(t.NONE = 0)] = "NONE"),
            (t[(t.LOW = 2)] = "LOW"),
            (t[(t.MEDIUM = 4)] = "MEDIUM"),
            (t[(t.HIGH = 8)] = "HIGH");
        })(ea || (ea = {}));
      var na = (function (t) {
          function e(e, r, i, n, o) {
            void 0 === r && (r = 8),
              void 0 === i && (i = 4),
              void 0 === n && (n = yt.FILTER_RESOLUTION),
              void 0 === o && (o = 5);
            var s = this,
              a = (function (t, e) {
                var r,
                  i = Math.ceil(t / 2),
                  n =
                    "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",
                  o = "";
                r = e
                  ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);"
                  : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                for (var s = 0; s < t; s++) {
                  var a = r.replace("%index%", s.toString());
                  (o += a = a.replace("%sampleIndex%", s - (i - 1) + ".0")),
                    (o += "\n");
                }
                return (n = n.replace("%blur%", o)).replace(
                  "%size%",
                  t.toString()
                );
              })(o, e),
              h = (function (t) {
                for (
                  var e, r = ra[t], i = r.length, n = ia, o = "", s = 0;
                  s < t;
                  s++
                ) {
                  var a =
                    "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace(
                      "%index%",
                      s.toString()
                    );
                  (e = s),
                    s >= i && (e = t - s - 1),
                    (o += a = a.replace("%value%", r[e].toString())),
                    (o += "\n");
                }
                return (n = n.replace("%blur%", o)).replace(
                  "%size%",
                  t.toString()
                );
              })(o);
            return (
              ((s = t.call(this, a, h) || this).horizontal = e),
              (s.resolution = n),
              (s._quality = 0),
              (s.quality = i),
              (s.blur = r),
              s
            );
          }
          return (
            Us(e, t),
            (e.prototype.apply = function (t, e, r, i) {
              if (
                (r
                  ? this.horizontal
                    ? (this.uniforms.strength =
                        (1 / r.width) * (r.width / e.width))
                    : (this.uniforms.strength =
                        (1 / r.height) * (r.height / e.height))
                  : this.horizontal
                  ? (this.uniforms.strength =
                      (1 / t.renderer.width) * (t.renderer.width / e.width))
                  : (this.uniforms.strength =
                      (1 / t.renderer.height) * (t.renderer.height / e.height)),
                (this.uniforms.strength *= this.strength),
                (this.uniforms.strength /= this.passes),
                1 === this.passes)
              )
                t.applyFilter(this, e, r, i);
              else {
                var n = t.getFilterTexture(),
                  o = t.renderer,
                  s = e,
                  a = n;
                (this.state.blend = !1), t.applyFilter(this, s, a, Js.CLEAR);
                for (var h = 1; h < this.passes - 1; h++) {
                  t.bindAndClear(s, Js.BLIT), (this.uniforms.uSampler = a);
                  var u = a;
                  (a = s), (s = u), o.shader.bind(this), o.geometry.draw(5);
                }
                (this.state.blend = !0),
                  t.applyFilter(this, a, r, i),
                  t.returnFilterTexture(n);
              }
            }),
            Object.defineProperty(e.prototype, "blur", {
              get: function () {
                return this.strength;
              },
              set: function (t) {
                (this.padding = 1 + 2 * Math.abs(t)), (this.strength = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "quality", {
              get: function () {
                return this._quality;
              },
              set: function (t) {
                (this._quality = t), (this.passes = t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(ci),
        oa = (function (t) {
          function e(e, r, i, n) {
            void 0 === e && (e = 8),
              void 0 === r && (r = 4),
              void 0 === i && (i = yt.FILTER_RESOLUTION),
              void 0 === n && (n = 5);
            var o = t.call(this) || this;
            return (
              (o.blurXFilter = new na(!0, e, r, i, n)),
              (o.blurYFilter = new na(!1, e, r, i, n)),
              (o.resolution = i),
              (o.quality = r),
              (o.blur = e),
              (o.repeatEdgePixels = !1),
              o
            );
          }
          return (
            Us(e, t),
            (e.prototype.apply = function (t, e, r, i) {
              var n = Math.abs(this.blurXFilter.strength),
                o = Math.abs(this.blurYFilter.strength);
              if (n && o) {
                var s = t.getFilterTexture();
                this.blurXFilter.apply(t, e, s, Js.CLEAR),
                  this.blurYFilter.apply(t, s, r, i),
                  t.returnFilterTexture(s);
              } else
                o
                  ? this.blurYFilter.apply(t, e, r, i)
                  : this.blurXFilter.apply(t, e, r, i);
            }),
            (e.prototype.updatePadding = function () {
              this._repeatEdgePixels
                ? (this.padding = 0)
                : (this.padding =
                    2 *
                    Math.max(
                      Math.abs(this.blurXFilter.strength),
                      Math.abs(this.blurYFilter.strength)
                    ));
            }),
            Object.defineProperty(e.prototype, "blur", {
              get: function () {
                return this.blurXFilter.blur;
              },
              set: function (t) {
                (this.blurXFilter.blur = this.blurYFilter.blur = t),
                  this.updatePadding();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "quality", {
              get: function () {
                return this.blurXFilter.quality;
              },
              set: function (t) {
                this.blurXFilter.quality = this.blurYFilter.quality = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "blurX", {
              get: function () {
                return this.blurXFilter.blur;
              },
              set: function (t) {
                (this.blurXFilter.blur = t), this.updatePadding();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "blurY", {
              get: function () {
                return this.blurYFilter.blur;
              },
              set: function (t) {
                (this.blurYFilter.blur = t), this.updatePadding();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "blendMode", {
              get: function () {
                return this.blurYFilter.blendMode;
              },
              set: function (t) {
                this.blurYFilter.blendMode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "repeatEdgePixels", {
              get: function () {
                return this._repeatEdgePixels;
              },
              set: function (t) {
                (this._repeatEdgePixels = t), this.updatePadding();
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(ci),
        sa = function (t, e) {
          return (sa =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        aa = (function (t) {
          function e() {
            var e = this,
              r = {
                m: new Float32Array([
                  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
                ]),
                uAlpha: 1,
              };
            return (
              ((e =
                t.call(
                  this,
                  Ni,
                  "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
                  r
                ) || this).alpha = 1),
              e
            );
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              sa(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            (e.prototype._loadMatrix = function (t, e) {
              void 0 === e && (e = !1);
              var r = t;
              e &&
                (this._multiply(r, this.uniforms.m, t),
                (r = this._colorMatrix(r))),
                (this.uniforms.m = r);
            }),
            (e.prototype._multiply = function (t, e, r) {
              return (
                (t[0] =
                  e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15]),
                (t[1] =
                  e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16]),
                (t[2] =
                  e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17]),
                (t[3] =
                  e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18]),
                (t[4] =
                  e[0] * r[4] +
                  e[1] * r[9] +
                  e[2] * r[14] +
                  e[3] * r[19] +
                  e[4]),
                (t[5] =
                  e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15]),
                (t[6] =
                  e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16]),
                (t[7] =
                  e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17]),
                (t[8] =
                  e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18]),
                (t[9] =
                  e[5] * r[4] +
                  e[6] * r[9] +
                  e[7] * r[14] +
                  e[8] * r[19] +
                  e[9]),
                (t[10] =
                  e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15]),
                (t[11] =
                  e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16]),
                (t[12] =
                  e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17]),
                (t[13] =
                  e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18]),
                (t[14] =
                  e[10] * r[4] +
                  e[11] * r[9] +
                  e[12] * r[14] +
                  e[13] * r[19] +
                  e[14]),
                (t[15] =
                  e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15]),
                (t[16] =
                  e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16]),
                (t[17] =
                  e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17]),
                (t[18] =
                  e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18]),
                (t[19] =
                  e[15] * r[4] +
                  e[16] * r[9] +
                  e[17] * r[14] +
                  e[18] * r[19] +
                  e[19]),
                t
              );
            }),
            (e.prototype._colorMatrix = function (t) {
              var e = new Float32Array(t);
              return (
                (e[4] /= 255), (e[9] /= 255), (e[14] /= 255), (e[19] /= 255), e
              );
            }),
            (e.prototype.brightness = function (t, e) {
              var r = [
                t,
                0,
                0,
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                t,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(r, e);
            }),
            (e.prototype.greyscale = function (t, e) {
              var r = [
                t,
                t,
                t,
                0,
                0,
                t,
                t,
                t,
                0,
                0,
                t,
                t,
                t,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(r, e);
            }),
            (e.prototype.blackAndWhite = function (t) {
              this._loadMatrix(
                [
                  0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0,
                  0, 0, 0, 1, 0,
                ],
                t
              );
            }),
            (e.prototype.hue = function (t, e) {
              t = ((t || 0) / 180) * Math.PI;
              var r = Math.cos(t),
                i = Math.sin(t),
                n = 1 / 3,
                o = (0, Math.sqrt)(n),
                s = [
                  r + (1 - r) * n,
                  n * (1 - r) - o * i,
                  n * (1 - r) + o * i,
                  0,
                  0,
                  n * (1 - r) + o * i,
                  r + n * (1 - r),
                  n * (1 - r) - o * i,
                  0,
                  0,
                  n * (1 - r) - o * i,
                  n * (1 - r) + o * i,
                  r + n * (1 - r),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                ];
              this._loadMatrix(s, e);
            }),
            (e.prototype.contrast = function (t, e) {
              var r = (t || 0) + 1,
                i = -0.5 * (r - 1),
                n = [
                  r,
                  0,
                  0,
                  0,
                  i,
                  0,
                  r,
                  0,
                  0,
                  i,
                  0,
                  0,
                  r,
                  0,
                  i,
                  0,
                  0,
                  0,
                  1,
                  0,
                ];
              this._loadMatrix(n, e);
            }),
            (e.prototype.saturate = function (t, e) {
              void 0 === t && (t = 0);
              var r = (2 * t) / 3 + 1,
                i = -0.5 * (r - 1),
                n = [
                  r,
                  i,
                  i,
                  0,
                  0,
                  i,
                  r,
                  i,
                  0,
                  0,
                  i,
                  i,
                  r,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                ];
              this._loadMatrix(n, e);
            }),
            (e.prototype.desaturate = function () {
              this.saturate(-1);
            }),
            (e.prototype.negative = function (t) {
              this._loadMatrix(
                [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0],
                t
              );
            }),
            (e.prototype.sepia = function (t) {
              this._loadMatrix(
                [
                  0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999,
                  0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0,
                  1, 0,
                ],
                t
              );
            }),
            (e.prototype.technicolor = function (t) {
              this._loadMatrix(
                [
                  1.9125277891456083, -0.8545344976951645, -0.09155508482755585,
                  0, 11.793603434377337, -0.3087833385928097,
                  1.7658908555458428, -0.10601743074722245, 0,
                  -70.35205161461398, -0.231103377548616, -0.7501899197440212,
                  1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0,
                ],
                t
              );
            }),
            (e.prototype.polaroid = function (t) {
              this._loadMatrix(
                [
                  1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0,
                  -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
                ],
                t
              );
            }),
            (e.prototype.toBGR = function (t) {
              this._loadMatrix(
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                t
              );
            }),
            (e.prototype.kodachrome = function (t) {
              this._loadMatrix(
                [
                  1.1285582396593525, -0.3967382283601348, -0.03992559172921793,
                  0, 63.72958762196502, -0.16404339962244616,
                  1.0835251566291304, -0.05498805115633132, 0,
                  24.732407896706203, -0.16786010706155763, -0.5603416277695248,
                  1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0,
                ],
                t
              );
            }),
            (e.prototype.browni = function (t) {
              this._loadMatrix(
                [
                  0.5997023498159715, 0.34553243048391263, -0.2708298674538042,
                  0, 47.43192855600873, -0.037703249837783157,
                  0.8609577587992641, 0.15059552388459913, 0,
                  -36.96841498319127, 0.24113635128153335, -0.07441037908422492,
                  0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0,
                ],
                t
              );
            }),
            (e.prototype.vintage = function (t) {
              this._loadMatrix(
                [
                  0.6279345635605994, 0.3202183420819367, -0.03965408211312453,
                  0, 9.651285835294123, 0.02578397704808868, 0.6441188644374771,
                  0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
                  -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296,
                  0, 0, 0, 1, 0,
                ],
                t
              );
            }),
            (e.prototype.colorTone = function (t, e, r, i, n) {
              var o = (((r = r || 16770432) >> 16) & 255) / 255,
                s = ((r >> 8) & 255) / 255,
                a = (255 & r) / 255,
                h = (((i = i || 3375104) >> 16) & 255) / 255,
                u = ((i >> 8) & 255) / 255,
                l = (255 & i) / 255,
                c = [
                  0.3,
                  0.59,
                  0.11,
                  0,
                  0,
                  o,
                  s,
                  a,
                  (t = t || 0.2),
                  0,
                  h,
                  u,
                  l,
                  (e = e || 0.15),
                  0,
                  o - h,
                  s - u,
                  a - l,
                  0,
                  0,
                ];
              this._loadMatrix(c, n);
            }),
            (e.prototype.night = function (t, e) {
              var r = [
                -2 * (t = t || 0.1),
                -t,
                0,
                0,
                0,
                -t,
                0,
                t,
                0,
                0,
                0,
                t,
                2 * t,
                0,
                0,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(r, e);
            }),
            (e.prototype.predator = function (t, e) {
              var r = [
                11.224130630493164 * t,
                -4.794486999511719 * t,
                -2.8746118545532227 * t,
                0 * t,
                0.40342438220977783 * t,
                -3.6330697536468506 * t,
                9.193157196044922 * t,
                -2.951810836791992 * t,
                0 * t,
                -1.316135048866272 * t,
                -3.2184197902679443 * t,
                -4.2375030517578125 * t,
                7.476448059082031 * t,
                0 * t,
                0.8044459223747253 * t,
                0,
                0,
                0,
                1,
                0,
              ];
              this._loadMatrix(r, e);
            }),
            (e.prototype.lsd = function (t) {
              this._loadMatrix(
                [
                  2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0,
                  0, 0, 0, 1, 0,
                ],
                t
              );
            }),
            (e.prototype.reset = function () {
              this._loadMatrix(
                [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                !1
              );
            }),
            Object.defineProperty(e.prototype, "matrix", {
              get: function () {
                return this.uniforms.m;
              },
              set: function (t) {
                this.uniforms.m = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "alpha", {
              get: function () {
                return this.uniforms.uAlpha;
              },
              set: function (t) {
                this.uniforms.uAlpha = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(ci);
      aa.prototype.grayscale = aa.prototype.greyscale;
      var ha = function (t, e) {
          return (ha =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        ua = (function (t) {
          function e(e, r) {
            var i = this,
              n = new ae();
            return (
              (e.renderable = !1),
              ((i =
                t.call(
                  this,
                  "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
                  "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
                  {
                    mapSampler: e._texture,
                    filterMatrix: n,
                    scale: { x: 1, y: 1 },
                    rotation: new Float32Array([1, 0, 0, 1]),
                  }
                ) || this).maskSprite = e),
              (i.maskMatrix = n),
              null == r && (r = 20),
              (i.scale = new oe(r, r)),
              i
            );
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              ha(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            (e.prototype.apply = function (t, e, r, i) {
              (this.uniforms.filterMatrix = t.calculateSpriteMatrix(
                this.maskMatrix,
                this.maskSprite
              )),
                (this.uniforms.scale.x = this.scale.x),
                (this.uniforms.scale.y = this.scale.y);
              var n = this.maskSprite.worldTransform,
                o = Math.sqrt(n.a * n.a + n.b * n.b),
                s = Math.sqrt(n.c * n.c + n.d * n.d);
              0 !== o &&
                0 !== s &&
                ((this.uniforms.rotation[0] = n.a / o),
                (this.uniforms.rotation[1] = n.b / o),
                (this.uniforms.rotation[2] = n.c / s),
                (this.uniforms.rotation[3] = n.d / s)),
                t.applyFilter(this, e, r, i);
            }),
            Object.defineProperty(e.prototype, "map", {
              get: function () {
                return this.uniforms.mapSampler;
              },
              set: function (t) {
                this.uniforms.mapSampler = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(ci),
        la = function (t, e) {
          return (la =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        ca = (function (t) {
          function e() {
            return (
              t.call(
                this,
                "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
                'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'
              ) || this
            );
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              la(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            e
          );
        })(ci),
        da = function (t, e) {
          return (da =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        },
        fa = (function (t) {
          function e(e, r) {
            void 0 === e && (e = 0.5), void 0 === r && (r = Math.random());
            var i =
              t.call(
                this,
                Ni,
                "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
                { uNoise: 0, uSeed: 0 }
              ) || this;
            return (i.noise = e), (i.seed = r), i;
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              da(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            Object.defineProperty(e.prototype, "noise", {
              get: function () {
                return this.uniforms.uNoise;
              },
              set: function (t) {
                this.uniforms.uNoise = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "seed", {
              get: function () {
                return this.uniforms.uSeed;
              },
              set: function (t) {
                this.uniforms.uSeed = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(ci),
        pa = new ae();
      (Te.prototype._cacheAsBitmap = !1),
        (Te.prototype._cacheData = null),
        (Te.prototype._cacheAsBitmapResolution = null);
      var _a = function () {
        (this.textureCacheId = null),
          (this.originalRender = null),
          (this.originalRenderCanvas = null),
          (this.originalCalculateBounds = null),
          (this.originalGetLocalBounds = null),
          (this.originalUpdateTransform = null),
          (this.originalDestroy = null),
          (this.originalMask = null),
          (this.originalFilterArea = null),
          (this.originalContainsPoint = null),
          (this.sprite = null);
      };
      Object.defineProperties(Te.prototype, {
        cacheAsBitmapResolution: {
          get: function () {
            return this._cacheAsBitmapResolution;
          },
          set: function (t) {
            t !== this._cacheAsBitmapResolution &&
              ((this._cacheAsBitmapResolution = t),
              this.cacheAsBitmap &&
                ((this.cacheAsBitmap = !1), (this.cacheAsBitmap = !0)));
          },
        },
        cacheAsBitmap: {
          get: function () {
            return this._cacheAsBitmap;
          },
          set: function (t) {
            var e;
            this._cacheAsBitmap !== t &&
              ((this._cacheAsBitmap = t),
              t
                ? (this._cacheData || (this._cacheData = new _a()),
                  ((e = this._cacheData).originalRender = this.render),
                  (e.originalRenderCanvas = this.renderCanvas),
                  (e.originalUpdateTransform = this.updateTransform),
                  (e.originalCalculateBounds = this.calculateBounds),
                  (e.originalGetLocalBounds = this.getLocalBounds),
                  (e.originalDestroy = this.destroy),
                  (e.originalContainsPoint = this.containsPoint),
                  (e.originalMask = this._mask),
                  (e.originalFilterArea = this.filterArea),
                  (this.render = this._renderCached),
                  (this.renderCanvas = this._renderCachedCanvas),
                  (this.destroy = this._cacheAsBitmapDestroy))
                : ((e = this._cacheData).sprite &&
                    this._destroyCachedDisplayObject(),
                  (this.render = e.originalRender),
                  (this.renderCanvas = e.originalRenderCanvas),
                  (this.calculateBounds = e.originalCalculateBounds),
                  (this.getLocalBounds = e.originalGetLocalBounds),
                  (this.destroy = e.originalDestroy),
                  (this.updateTransform = e.originalUpdateTransform),
                  (this.containsPoint = e.originalContainsPoint),
                  (this._mask = e.originalMask),
                  (this.filterArea = e.originalFilterArea)));
          },
        },
      }),
        (Te.prototype._renderCached = function (t) {
          !this.visible ||
            this.worldAlpha <= 0 ||
            !this.renderable ||
            (this._initCachedDisplayObject(t),
            (this._cacheData.sprite.transform._worldID =
              this.transform._worldID),
            (this._cacheData.sprite.worldAlpha = this.worldAlpha),
            this._cacheData.sprite._render(t));
        }),
        (Te.prototype._initCachedDisplayObject = function (t) {
          if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.alpha;
            (this.alpha = 1), t.batch.flush();
            var r = this.getLocalBounds(null, !0).clone();
            if (this.filters) {
              var i = this.filters[0].padding;
              r.pad(i);
            }
            r.ceil(yt.RESOLUTION);
            var n = t.renderTexture.current,
              o = t.renderTexture.sourceFrame.clone(),
              s = t.renderTexture.destinationFrame.clone(),
              a = t.projection.transform,
              h = lr.create({
                width: r.width,
                height: r.height,
                resolution: this.cacheAsBitmapResolution || t.resolution,
              }),
              u = "cacheAsBitmap_" + kt();
            (this._cacheData.textureCacheId = u),
              Ve.addToCache(h.baseTexture, u),
              hr.addToCache(h, u);
            var l = this.transform.localTransform
              .copyTo(pa)
              .invert()
              .translate(-r.x, -r.y);
            (this.render = this._cacheData.originalRender),
              t.render(this, {
                renderTexture: h,
                clear: !0,
                transform: l,
                skipUpdateTransform: !1,
              }),
              (t.projection.transform = a),
              t.renderTexture.bind(n, o, s),
              (this.render = this._renderCached),
              (this.updateTransform = this.displayObjectUpdateTransform),
              (this.calculateBounds = this._calculateCachedBounds),
              (this.getLocalBounds = this._getCachedLocalBounds),
              (this._mask = null),
              (this.filterArea = null),
              (this.alpha = e);
            var c = new No(h);
            (c.transform.worldTransform = this.transform.worldTransform),
              (c.anchor.x = -r.x / r.width),
              (c.anchor.y = -r.y / r.height),
              (c.alpha = e),
              (c._bounds = this._bounds),
              (this._cacheData.sprite = c),
              (this.transform._parentID = -1),
              this.parent
                ? this.updateTransform()
                : (this.enableTempParent(),
                  this.updateTransform(),
                  this.disableTempParent(null)),
              (this.containsPoint = c.containsPoint.bind(c));
          }
        }),
        (Te.prototype._renderCachedCanvas = function (t) {
          !this.visible ||
            this.worldAlpha <= 0 ||
            !this.renderable ||
            (this._initCachedDisplayObjectCanvas(t),
            (this._cacheData.sprite.worldAlpha = this.worldAlpha),
            this._cacheData.sprite._renderCanvas(t));
        }),
        (Te.prototype._initCachedDisplayObjectCanvas = function (t) {
          if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.getLocalBounds(null, !0),
              r = this.alpha;
            this.alpha = 1;
            var i = t.context,
              n = t._projTransform;
            e.ceil(yt.RESOLUTION);
            var o = lr.create({ width: e.width, height: e.height }),
              s = "cacheAsBitmap_" + kt();
            (this._cacheData.textureCacheId = s),
              Ve.addToCache(o.baseTexture, s),
              hr.addToCache(o, s);
            var a = pa;
            this.transform.localTransform.copyTo(a),
              a.invert(),
              (a.tx -= e.x),
              (a.ty -= e.y),
              (this.renderCanvas = this._cacheData.originalRenderCanvas),
              t.render(this, {
                renderTexture: o,
                clear: !0,
                transform: a,
                skipUpdateTransform: !1,
              }),
              (t.context = i),
              (t._projTransform = n),
              (this.renderCanvas = this._renderCachedCanvas),
              (this.updateTransform = this.displayObjectUpdateTransform),
              (this.calculateBounds = this._calculateCachedBounds),
              (this.getLocalBounds = this._getCachedLocalBounds),
              (this._mask = null),
              (this.filterArea = null),
              (this.alpha = r);
            var h = new No(o);
            (h.transform.worldTransform = this.transform.worldTransform),
              (h.anchor.x = -e.x / e.width),
              (h.anchor.y = -e.y / e.height),
              (h.alpha = r),
              (h._bounds = this._bounds),
              (this._cacheData.sprite = h),
              (this.transform._parentID = -1),
              this.parent
                ? this.updateTransform()
                : ((this.parent = t._tempDisplayObjectParent),
                  this.updateTransform(),
                  (this.parent = null)),
              (this.containsPoint = h.containsPoint.bind(h));
          }
        }),
        (Te.prototype._calculateCachedBounds = function () {
          this._bounds.clear(),
            (this._cacheData.sprite.transform._worldID =
              this.transform._worldID),
            this._cacheData.sprite._calculateBounds(),
            (this._bounds.updateID = this._boundsID);
        }),
        (Te.prototype._getCachedLocalBounds = function () {
          return this._cacheData.sprite.getLocalBounds(null);
        }),
        (Te.prototype._destroyCachedDisplayObject = function () {
          this._cacheData.sprite._texture.destroy(!0),
            (this._cacheData.sprite = null),
            Ve.removeFromCache(this._cacheData.textureCacheId),
            hr.removeFromCache(this._cacheData.textureCacheId),
            (this._cacheData.textureCacheId = null);
        }),
        (Te.prototype._cacheAsBitmapDestroy = function (t) {
          (this.cacheAsBitmap = !1), this.destroy(t);
        }),
        (Te.prototype.name = null),
        (be.prototype.getChildByName = function (t, e) {
          for (var r = 0, i = this.children.length; r < i; r++)
            if (this.children[r].name === t) return this.children[r];
          if (e)
            for (r = 0, i = this.children.length; r < i; r++)
              if (this.children[r].getChildByName) {
                var n = this.children[r].getChildByName(t, !0);
                if (n) return n;
              }
          return null;
        }),
        (Te.prototype.getGlobalPosition = function (t, e) {
          return (
            void 0 === t && (t = new oe()),
            void 0 === e && (e = !1),
            this.parent
              ? this.parent.toGlobal(this.position, t, e)
              : ((t.x = this.position.x), (t.y = this.position.y)),
            t
          );
        });
      var ma = function (t, e) {
        return (ma =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
      function va(t, e) {
        function r() {
          this.constructor = t;
        }
        ma(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var ya = (function (t) {
          function e(e, r, i, n) {
            void 0 === e && (e = 100),
              void 0 === r && (r = 100),
              void 0 === i && (i = 10),
              void 0 === n && (n = 10);
            var o = t.call(this) || this;
            return (
              (o.segWidth = i),
              (o.segHeight = n),
              (o.width = e),
              (o.height = r),
              o.build(),
              o
            );
          }
          return (
            va(e, t),
            (e.prototype.build = function () {
              for (
                var t = this.segWidth * this.segHeight,
                  e = [],
                  r = [],
                  i = [],
                  n = this.segWidth - 1,
                  o = this.segHeight - 1,
                  s = this.width / n,
                  a = this.height / o,
                  h = 0;
                h < t;
                h++
              ) {
                var u = h % this.segWidth,
                  l = (h / this.segWidth) | 0;
                e.push(u * s, l * a), r.push(u / n, l / o);
              }
              var c = n * o;
              for (h = 0; h < c; h++) {
                var d = h % n,
                  f = (h / n) | 0,
                  p = f * this.segWidth + d,
                  _ = f * this.segWidth + d + 1,
                  m = (f + 1) * this.segWidth + d,
                  v = (f + 1) * this.segWidth + d + 1;
                i.push(p, _, m, _, v, m);
              }
              (this.buffers[0].data = new Float32Array(e)),
                (this.buffers[1].data = new Float32Array(r)),
                (this.indexBuffer.data = new Uint16Array(i)),
                this.buffers[0].update(),
                this.buffers[1].update(),
                this.indexBuffer.update();
            }),
            e
          );
        })(Ts),
        ga = (function (t) {
          function e(e, r, i) {
            void 0 === e && (e = 200), void 0 === i && (i = 0);
            var n =
              t.call(
                this,
                new Float32Array(4 * r.length),
                new Float32Array(4 * r.length),
                new Uint16Array(6 * (r.length - 1))
              ) || this;
            return (
              (n.points = r), (n._width = e), (n.textureScale = i), n.build(), n
            );
          }
          return (
            va(e, t),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return this._width;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.build = function () {
              var t = this.points;
              if (t) {
                var e = this.getBuffer("aVertexPosition"),
                  r = this.getBuffer("aTextureCoord"),
                  i = this.getIndex();
                if (!(t.length < 1)) {
                  e.data.length / 4 !== t.length &&
                    ((e.data = new Float32Array(4 * t.length)),
                    (r.data = new Float32Array(4 * t.length)),
                    (i.data = new Uint16Array(6 * (t.length - 1))));
                  var n = r.data,
                    o = i.data;
                  (n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 1);
                  for (
                    var s = 0,
                      a = t[0],
                      h = this._width * this.textureScale,
                      u = t.length,
                      l = 0;
                    l < u;
                    l++
                  ) {
                    var c = 4 * l;
                    if (this.textureScale > 0) {
                      var d = a.x - t[l].x,
                        f = a.y - t[l].y,
                        p = Math.sqrt(d * d + f * f);
                      (a = t[l]), (s += p / h);
                    } else s = l / (u - 1);
                    (n[c] = s), (n[c + 1] = 0), (n[c + 2] = s), (n[c + 3] = 1);
                  }
                  var _ = 0;
                  for (l = 0; l < u - 1; l++)
                    (c = 2 * l),
                      (o[_++] = c),
                      (o[_++] = c + 1),
                      (o[_++] = c + 2),
                      (o[_++] = c + 2),
                      (o[_++] = c + 1),
                      (o[_++] = c + 3);
                  r.update(), i.update(), this.updateVertices();
                }
              }
            }),
            (e.prototype.updateVertices = function () {
              var t = this.points;
              if (!(t.length < 1)) {
                for (
                  var e,
                    r = t[0],
                    i = 0,
                    n = 0,
                    o = this.buffers[0].data,
                    s = t.length,
                    a = 0;
                  a < s;
                  a++
                ) {
                  var h = t[a],
                    u = 4 * a;
                  (n = -((e = a < t.length - 1 ? t[a + 1] : h).x - r.x)),
                    (i = e.y - r.y);
                  var l = Math.sqrt(i * i + n * n),
                    c =
                      this.textureScale > 0
                        ? (this.textureScale * this._width) / 2
                        : this._width / 2;
                  (i /= l),
                    (n /= l),
                    (i *= c),
                    (n *= c),
                    (o[u] = h.x + i),
                    (o[u + 1] = h.y + n),
                    (o[u + 2] = h.x - i),
                    (o[u + 3] = h.y - n),
                    (r = h);
                }
                this.buffers[0].update();
              }
            }),
            (e.prototype.update = function () {
              this.textureScale > 0 ? this.build() : this.updateVertices();
            }),
            e
          );
        })(Ts),
        Ta =
          ((function (t) {
            function e(e, r, i) {
              void 0 === i && (i = 0);
              var n = this,
                o = new ga(e.height, r, i),
                s = new gs(e);
              return (
                i > 0 && (e.baseTexture.wrapMode = lt.REPEAT),
                ((n = t.call(this, o, s) || this).autoUpdate = !0),
                n
              );
            }
            va(e, t),
              (e.prototype._render = function (e) {
                var r = this.geometry;
                (this.autoUpdate || r._width !== this.shader.texture.height) &&
                  ((r._width = this.shader.texture.height), r.update()),
                  t.prototype._render.call(this, e);
              });
          })(ys),
          (function (t) {
            function e(e, r, i) {
              var n = this,
                o = new ya(e.width, e.height, r, i),
                s = new gs(hr.WHITE);
              return ((n = t.call(this, o, s) || this).texture = e), n;
            }
            return (
              va(e, t),
              (e.prototype.textureUpdated = function () {
                this._textureID = this.shader.texture._updateID;
                var t = this.geometry;
                (t.width = this.shader.texture.width),
                  (t.height = this.shader.texture.height),
                  t.build();
              }),
              Object.defineProperty(e.prototype, "texture", {
                get: function () {
                  return this.shader.texture;
                },
                set: function (t) {
                  this.shader.texture !== t &&
                    ((this.shader.texture = t),
                    (this._textureID = -1),
                    t.baseTexture.valid
                      ? this.textureUpdated()
                      : t.once("update", this.textureUpdated, this));
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype._render = function (e) {
                this._textureID !== this.shader.texture._updateID &&
                  this.textureUpdated(),
                  t.prototype._render.call(this, e);
              }),
              (e.prototype.destroy = function (e) {
                this.shader.texture.off("update", this.textureUpdated, this),
                  t.prototype.destroy.call(this, e);
              }),
              e
            );
          })(ys)),
        xa =
          ((function (t) {
            function e(e, r, i, n, o) {
              void 0 === e && (e = hr.EMPTY);
              var s = this,
                a = new Ts(r, i, n);
              a.getBuffer("aVertexPosition").static = !1;
              var h = new gs(e);
              return (
                ((s = t.call(this, a, h, null, o) || this).autoUpdate = !0), s
              );
            }
            va(e, t),
              Object.defineProperty(e.prototype, "vertices", {
                get: function () {
                  return this.geometry.getBuffer("aVertexPosition").data;
                },
                set: function (t) {
                  this.geometry.getBuffer("aVertexPosition").data = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype._render = function (e) {
                this.autoUpdate &&
                  this.geometry.getBuffer("aVertexPosition").update(),
                  t.prototype._render.call(this, e);
              });
          })(ys),
          (function (t) {
            function e(e, r, i, n, o) {
              void 0 === r && (r = 10),
                void 0 === i && (i = 10),
                void 0 === n && (n = 10),
                void 0 === o && (o = 10);
              var s = t.call(this, hr.WHITE, 4, 4) || this;
              return (
                (s._origWidth = e.orig.width),
                (s._origHeight = e.orig.height),
                (s._width = s._origWidth),
                (s._height = s._origHeight),
                (s._leftWidth = r),
                (s._rightWidth = n),
                (s._topHeight = i),
                (s._bottomHeight = o),
                (s.texture = e),
                s
              );
            }
            va(e, t),
              (e.prototype.textureUpdated = function () {
                (this._textureID = this.shader.texture._updateID),
                  this._refresh();
              }),
              Object.defineProperty(e.prototype, "vertices", {
                get: function () {
                  return this.geometry.getBuffer("aVertexPosition").data;
                },
                set: function (t) {
                  this.geometry.getBuffer("aVertexPosition").data = t;
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.updateHorizontalVertices = function () {
                var t = this.vertices,
                  e = this._getMinScale();
                (t[9] = t[11] = t[13] = t[15] = this._topHeight * e),
                  (t[17] =
                    t[19] =
                    t[21] =
                    t[23] =
                      this._height - this._bottomHeight * e),
                  (t[25] = t[27] = t[29] = t[31] = this._height);
              }),
              (e.prototype.updateVerticalVertices = function () {
                var t = this.vertices,
                  e = this._getMinScale();
                (t[2] = t[10] = t[18] = t[26] = this._leftWidth * e),
                  (t[4] =
                    t[12] =
                    t[20] =
                    t[28] =
                      this._width - this._rightWidth * e),
                  (t[6] = t[14] = t[22] = t[30] = this._width);
              }),
              (e.prototype._getMinScale = function () {
                var t = this._leftWidth + this._rightWidth,
                  e = this._width > t ? 1 : this._width / t,
                  r = this._topHeight + this._bottomHeight,
                  i = this._height > r ? 1 : this._height / r;
                return Math.min(e, i);
              }),
              Object.defineProperty(e.prototype, "width", {
                get: function () {
                  return this._width;
                },
                set: function (t) {
                  (this._width = t), this._refresh();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "height", {
                get: function () {
                  return this._height;
                },
                set: function (t) {
                  (this._height = t), this._refresh();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "leftWidth", {
                get: function () {
                  return this._leftWidth;
                },
                set: function (t) {
                  (this._leftWidth = t), this._refresh();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "rightWidth", {
                get: function () {
                  return this._rightWidth;
                },
                set: function (t) {
                  (this._rightWidth = t), this._refresh();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "topHeight", {
                get: function () {
                  return this._topHeight;
                },
                set: function (t) {
                  (this._topHeight = t), this._refresh();
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, "bottomHeight", {
                get: function () {
                  return this._bottomHeight;
                },
                set: function (t) {
                  (this._bottomHeight = t), this._refresh();
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype._refresh = function () {
                var t = this.texture,
                  e = this.geometry.buffers[1].data;
                (this._origWidth = t.orig.width),
                  (this._origHeight = t.orig.height);
                var r = 1 / this._origWidth,
                  i = 1 / this._origHeight;
                (e[0] = e[8] = e[16] = e[24] = 0),
                  (e[1] = e[3] = e[5] = e[7] = 0),
                  (e[6] = e[14] = e[22] = e[30] = 1),
                  (e[25] = e[27] = e[29] = e[31] = 1),
                  (e[2] = e[10] = e[18] = e[26] = r * this._leftWidth),
                  (e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth),
                  (e[9] = e[11] = e[13] = e[15] = i * this._topHeight),
                  (e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight),
                  this.updateHorizontalVertices(),
                  this.updateVerticalVertices(),
                  this.geometry.buffers[0].update(),
                  this.geometry.buffers[1].update();
              });
          })(Ta),
          function (t, e) {
            return (xa =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
              })(t, e);
          }),
        Ea = (function (t) {
          function e(e, r) {
            void 0 === r && (r = !0);
            var i =
              t.call(this, e[0] instanceof hr ? e[0] : e[0].texture) || this;
            return (
              (i._textures = null),
              (i._durations = null),
              (i._autoUpdate = r),
              (i._isConnectedToTicker = !1),
              (i.animationSpeed = 1),
              (i.loop = !0),
              (i.updateAnchor = !1),
              (i.onComplete = null),
              (i.onFrameChange = null),
              (i.onLoop = null),
              (i._currentTime = 0),
              (i._playing = !1),
              (i._previousFrame = null),
              (i.textures = e),
              i
            );
          }
          return (
            (function (t, e) {
              function r() {
                this.constructor = t;
              }
              xa(t, e),
                (t.prototype =
                  null === e
                    ? Object.create(e)
                    : ((r.prototype = e.prototype), new r()));
            })(e, t),
            (e.prototype.stop = function () {
              this._playing &&
                ((this._playing = !1),
                this._autoUpdate &&
                  this._isConnectedToTicker &&
                  (Re.shared.remove(this.update, this),
                  (this._isConnectedToTicker = !1)));
            }),
            (e.prototype.play = function () {
              this._playing ||
                ((this._playing = !0),
                this._autoUpdate &&
                  !this._isConnectedToTicker &&
                  (Re.shared.add(this.update, this, Ae.HIGH),
                  (this._isConnectedToTicker = !0)));
            }),
            (e.prototype.gotoAndStop = function (t) {
              this.stop();
              var e = this.currentFrame;
              (this._currentTime = t),
                e !== this.currentFrame && this.updateTexture();
            }),
            (e.prototype.gotoAndPlay = function (t) {
              var e = this.currentFrame;
              (this._currentTime = t),
                e !== this.currentFrame && this.updateTexture(),
                this.play();
            }),
            (e.prototype.update = function (t) {
              if (this._playing) {
                var e = this.animationSpeed * t,
                  r = this.currentFrame;
                if (null !== this._durations) {
                  var i =
                    (this._currentTime % 1) *
                    this._durations[this.currentFrame];
                  for (i += (e / 60) * 1e3; i < 0; )
                    this._currentTime--,
                      (i += this._durations[this.currentFrame]);
                  var n = Math.sign(this.animationSpeed * t);
                  for (
                    this._currentTime = Math.floor(this._currentTime);
                    i >= this._durations[this.currentFrame];

                  )
                    (i -= this._durations[this.currentFrame] * n),
                      (this._currentTime += n);
                  this._currentTime += i / this._durations[this.currentFrame];
                } else this._currentTime += e;
                this._currentTime < 0 && !this.loop
                  ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
                  : this._currentTime >= this._textures.length && !this.loop
                  ? (this.gotoAndStop(this._textures.length - 1),
                    this.onComplete && this.onComplete())
                  : r !== this.currentFrame &&
                    (this.loop &&
                      this.onLoop &&
                      ((this.animationSpeed > 0 && this.currentFrame < r) ||
                        (this.animationSpeed < 0 && this.currentFrame > r)) &&
                      this.onLoop(),
                    this.updateTexture());
              }
            }),
            (e.prototype.updateTexture = function () {
              var t = this.currentFrame;
              this._previousFrame !== t &&
                ((this._previousFrame = t),
                (this._texture = this._textures[t]),
                (this._textureID = -1),
                (this._textureTrimmedID = -1),
                (this._cachedTint = 16777215),
                (this.uvs = this._texture._uvs.uvsFloat32),
                this.updateAnchor &&
                  this._anchor.copyFrom(this._texture.defaultAnchor),
                this.onFrameChange && this.onFrameChange(this.currentFrame));
            }),
            (e.prototype.destroy = function (e) {
              this.stop(),
                t.prototype.destroy.call(this, e),
                (this.onComplete = null),
                (this.onFrameChange = null),
                (this.onLoop = null);
            }),
            (e.fromFrames = function (t) {
              for (var r = [], i = 0; i < t.length; ++i) r.push(hr.from(t[i]));
              return new e(r);
            }),
            (e.fromImages = function (t) {
              for (var r = [], i = 0; i < t.length; ++i) r.push(hr.from(t[i]));
              return new e(r);
            }),
            Object.defineProperty(e.prototype, "totalFrames", {
              get: function () {
                return this._textures.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "textures", {
              get: function () {
                return this._textures;
              },
              set: function (t) {
                if (t[0] instanceof hr)
                  (this._textures = t), (this._durations = null);
                else {
                  (this._textures = []), (this._durations = []);
                  for (var e = 0; e < t.length; e++)
                    this._textures.push(t[e].texture),
                      this._durations.push(t[e].time);
                }
                (this._previousFrame = null),
                  this.gotoAndStop(0),
                  this.updateTexture();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "currentFrame", {
              get: function () {
                var t = Math.floor(this._currentTime) % this._textures.length;
                return t < 0 && (t += this._textures.length), t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "playing", {
              get: function () {
                return this._playing;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "autoUpdate", {
              get: function () {
                return this._autoUpdate;
              },
              set: function (t) {
                t !== this._autoUpdate &&
                  ((this._autoUpdate = t),
                  !this._autoUpdate && this._isConnectedToTicker
                    ? (Re.shared.remove(this.update, this),
                      (this._isConnectedToTicker = !1))
                    : this._autoUpdate &&
                      !this._isConnectedToTicker &&
                      this._playing &&
                      (Re.shared.add(this.update, this),
                      (this._isConnectedToTicker = !0)));
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(No);
      Ci.registerPlugin("accessibility", Oe),
        Ci.registerPlugin("extract", Qi),
        Ci.registerPlugin("interaction", Fe),
        Ci.registerPlugin("particle", to),
        Ci.registerPlugin("prepare", ns),
        Ci.registerPlugin("batch", ji),
        Ci.registerPlugin("tilingSprite", ds),
        En.registerPlugin(Cs),
        En.registerPlugin(Cn),
        En.registerPlugin(Hn),
        En.registerPlugin(Wn),
        En.registerPlugin(ss),
        Ki.registerPlugin(Ie),
        Ki.registerPlugin(On);
      var ba = {
          AlphaFilter: Ls,
          BlurFilter: oa,
          BlurFilterPass: na,
          ColorMatrixFilter: aa,
          DisplacementFilter: ua,
          FXAAFilter: ca,
          NoiseFilter: fa,
        },
        Aa = (function () {
          var t = function (e, r) {
            return (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              })(e, r);
          };
          return function (e, r) {
            if ("function" != typeof r && null !== r)
              throw new TypeError(
                "Class extends value " +
                  String(r) +
                  " is not a constructor or null"
              );
            function i() {
              this.constructor = e;
            }
            t(e, r),
              (e.prototype =
                null === r
                  ? Object.create(r)
                  : ((i.prototype = r.prototype), new i()));
          };
        })();
      const Oa = (function (t) {
        function e(e) {
          var r = t.call(this) || this;
          (r.app = e), r.reset();
          var i = (Math.random() * Math.PI) / 3;
          (r.red = new Po()), r.red.beginFill(16121886);
          for (var n = 0; n < 7; n++) {
            var o = (Math.PI / 3) * n + i;
            r.red.lineTo(10 * Math.cos(o), 10 * Math.sin(o));
          }
          for (
            r.red.alpha = 0.7,
              r.red.endFill(),
              r.white = new Po(),
              r.white.beginFill(16777215),
              n = 0;
            n < 7;
            n++
          )
            (o = (Math.PI / 3) * n + i),
              r.white.lineTo(8 * Math.cos(o), 8 * Math.sin(o));
          return (
            r.white.endFill(),
            (r.white.alpha = 0.3),
            r.addChild(r.red),
            r.addChild(r.white),
            (r.frameIndex = 0),
            (r.filters = [new ba.NoiseFilter(0.2)]),
            r
          );
        }
        return (
          Aa(e, t),
          (e.prototype.reset = function () {
            (this.x = Math.random() * this.app.stage.width),
              (this.y = 300 * Math.random());
            var t = 2 * Math.PI * Math.random();
            (this.vx = Math.cos(t) / 10),
              (this.vy = Math.sin(t) / 10),
              this.scale.set(0.3 + 0.7 * Math.random()),
              (this.alpha = this.scale.x - 0.3),
              (this.frameIndex = 1),
              (this.resetFrameIndex = 60 + Math.floor(120 * Math.random()));
          }),
          (e.prototype.update = function () {
            this.frameIndex % 3 == 0 && (this.white.alpha = Math.random() / 2),
              this.frameIndex % this.resetFrameIndex == 0 && this.reset(),
              (this.x += this.vx),
              (this.y += this.vy),
              this.frameIndex++;
          }),
          e
        );
      })(be);
      var Sa = (function () {
        var t = function (e, r) {
          return (t =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            })(e, r);
        };
        return function (e, r) {
          if ("function" != typeof r && null !== r)
            throw new TypeError(
              "Class extends value " +
                String(r) +
                " is not a constructor or null"
            );
          function i() {
            this.constructor = e;
          }
          t(e, r),
            (e.prototype =
              null === r
                ? Object.create(r)
                : ((i.prototype = r.prototype), new i()));
        };
      })();
      const Ra = (function (t) {
        function e(e) {
          var r = t.call(this) || this;
          (r.app = e), r.reset(), (r.x = Math.random() * r.app.stage.width);
          var i = 3 * Math.random() + 1,
            n = new Po();
          return (
            n.beginFill(11184810),
            n.drawCircle(i, i, i),
            n.endFill(),
            (r.texture = e.renderer.generateTexture(n, ut.LINEAR, 0)),
            r
          );
        }
        return (
          Sa(e, t),
          (e.prototype.reset = function () {
            (this.x = this.app.stage.width),
              (this.y = Math.random() * this.app.stage.height),
              (this.vx = 4 * Math.random() - 8),
              (this.vy = 4 * Math.random() - 2),
              (this.alpha = Math.random());
          }),
          (e.prototype.update = function () {
            (this.x += this.vx),
              (this.y += this.vy),
              (this.x < 0 || this.app.stage.height < this.y) && this.reset();
          }),
          e
        );
      })(No);
      var Ia,
        wa,
        Pa,
        Ma,
        Da,
        Ca,
        Na,
        La,
        Fa,
        Ua,
        Ba,
        Ga,
        Xa,
        ka,
        Ha = [],
        ja = [],
        Ya = 1200,
        Va = 0;
      function za() {
        window.addEventListener("resize", qa), Ia.ticker.add(Wa), qa();
      }
      function Wa() {
        Ca.x <= Ia.screen.width / 2 && Na <= 0 && (Na = 0),
          (Ca.x = (Ia.screen.width - Ca.width) / 2 + Na),
          (Ua.x = Ca.x - Ua.width / 2),
          Math.random() < 0.1 && (Math.random() < 0.5 ? (Na += 2) : (Na -= 2)),
          (Na = Math.min(Na, 40)),
          (Na = Math.max(Na, -40)),
          Ha.forEach(function (t) {
            t.update();
          }),
          ja.forEach(function (t) {
            t.update();
          }),
          Va % 50 == 0 && (Ya++, (Ya %= 1e4), (Xa.text = Ya + " / 9999 DIST")),
          Va++;
      }
      function qa() {
        var t,
          e = document.querySelector(".canvas-container");
        Ia.renderer.resize(e.clientWidth, e.clientHeight),
          (function () {
            if (!Ma) {
              var t = hr.from("image/bg2.png");
              (Ma = new No(t)).anchor.set(0.5, 0),
                Ia.stage.addChild(Ma),
                (Ma.y = -200),
                (Ma.filters = [new ba.NoiseFilter(0.2)]);
            }
            Ma.x = Ia.screen.width / 2;
          })(),
          (function () {
            if (!ka) {
              (ka = new be()), Ia.stage.addChild(ka);
              for (var t = 0; t < 20; t++) {
                var e = new Oa(Ia);
                ja.push(e), ka.addChild(e);
              }
            }
          })(),
          (function () {
            if (!wa) {
              var t = hr.from("image/eye.png");
              (wa = new No(t)), Ia.stage.addChild(wa);
            }
            Ia.view.width <= 500
              ? (wa.scale.set(0.4, 0.4), wa.anchor.set(0.5, 0.1))
              : (wa.scale.set(0.8, 0.8), wa.anchor.set(0.5, 0.02)),
              (wa.x = Ia.screen.width / 2);
          })(),
          (function () {
            Pa || ((Pa = new Po()), Ia.stage.addChild(Pa)), Pa.clear();
            var t = [20, 40, 60, 80, 100],
              e = 0;
            [2105376, 3487029, 5263440, 6645093, 8421504].forEach(function (
              r,
              i
            ) {
              var n = (t[i] / 2) * Ka();
              Pa.beginFill(r),
                Pa.drawRect(0, e, Ia.screen.width, n),
                Pa.endFill(),
                (e += n);
            }),
              (Pa.filters = [new ba.NoiseFilter(0.1)]),
              (Pa.y = Ia.screen.height - e);
          })(),
          (function () {
            if (!Ca) {
              for (var t = [], e = 0; e < 3; e++) {
                var r = hr.from("c " + e + ".png");
                t.push(r);
              }
              (Ca = new Ea(t)).anchor.set(0.5, 1),
                (Ca.loop = !0),
                (Ca.animationSpeed = 0.075),
                Ca.gotoAndPlay(0),
                Ia.stage.addChild(Ca),
                (Na = 0);
            }
            (Ca.x = Ia.screen.width / 2),
              (Ca.y = Ia.screen.height),
              Ca.scale.set(0.6 * Ka());
          })(),
          Da || ((Da = new Po()), Ia.stage.addChild(Da)),
          Da.clear(),
          Da.beginFill(13421772),
          Da.drawRect(0, 0, Ia.screen.width, 2),
          Da.endFill(),
          (Da.y = Ia.screen.height - Da.height),
          (function () {
            if (!La) {
              (La = new Qn(100, {})), Ia.stage.addChild(La);
              for (var t = 0; t < 100; t++) {
                var e = new Ra(Ia);
                Ha.push(e), La.addChild(e);
              }
            }
          })(),
          (function () {
            Fa || ((Fa = new Po()), Ia.stage.addChild(Fa)), Fa.clear();
            Fa.lineStyle(2, 10066329),
              Fa.drawRect(8, 8, Ia.view.width - 16, Ia.view.height - 16);
          })(),
          Ua || ((Ua = new Po()), Ia.stage.addChild(Ua)),
          Ua.clear(),
          Ua.lineStyle(1, 0),
          Ua.beginFill(3420981),
          Ua.drawRect(0, 0, 80, 6),
          Ua.endFill(),
          Ua.beginFill(12850482),
          Ua.drawRect(1, 1, 60, 4),
          Ua.endFill(),
          (Ua.x = Ca.x - Ca.width),
          (Ua.y = Ca.y - Ca.height - 20),
          (Ua.filters = [new ba.NoiseFilter(0.3)]),
          (t = Ia.view.width <= 500 ? 0.7 : 1),
          Ba ||
            (((Ba = new Vo("疑似図書塔 - 庭園地区 -", {
              fontFamily: "Arial",
              fontSize: 16 * t,
              fill: 11184810,
              align: "left",
            })).x = 30 * t),
            (Ba.y = 30 * t),
            Ia.stage.addChild(Ba)),
          Ga ||
            (((Ga = new Vo("※ ミク不在のため深部侵入不可", {
              fontFamily: "Arial",
              fontSize: 12 * t,
              fill: 11184810,
              align: "left",
            })).x = 30 * t),
            (Ga.y = 90 * t),
            Ia.stage.addChild(Ga)),
          Xa ||
            (((Xa = new Vo(Ya + " / 9999 DIST", {
              fontFamily: "Arial",
              fontSize: 12 * t,
              fill: 11184810,
              align: "left",
            })).x = 30 * t),
            (Xa.y = 60 * t),
            Ia.stage.addChild(Xa));
      }
      function Ka() {
        return Math.min(1, Ia.screen.height / 500);
      }
      document.addEventListener("DOMContentLoaded", function () {
        (Ia = new Ki({ backgroundColor: 1446161 })),
          document.querySelector(".canvas").appendChild(Ia.view),
          Ia.loader.add("spritesheet", "data/character.json").load(za);
      });
    })();
})();
