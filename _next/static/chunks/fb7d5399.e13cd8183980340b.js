"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [737], {
        2212: function(e, t, i) {
            let n, r, a;
            i.d(t, {
                A5E: function() {
                    return ov
                },
                CP7: function() {
                    return rw
                },
                D1R: function() {
                    return x
                },
                EJi: function() {
                    return sa
                },
                EoG: function() {
                    return h
                },
                F5T: function() {
                    return th
                },
                FIo: function() {
                    return i_
                },
                FM8: function() {
                    return Y
                },
                IOt: function() {
                    return D
                },
                Ilk: function() {
                    return tg
                },
                KC9: function() {
                    return I
                },
                Kj0: function() {
                    return tZ
                },
                M8C: function() {
                    return X
                },
                N$j: function() {
                    return rZ
                },
                NMF: function() {
                    return E
                },
                OdW: function() {
                    return r0
                },
                OoA: function() {
                    return d
                },
                Ox3: function() {
                    return sj
                },
                PMe: function() {
                    return sB
                },
                Pa4: function() {
                    return er
                },
                QRU: function() {
                    return sJ
                },
                SUY: function() {
                    return s$
                },
                Syv: function() {
                    return T
                },
                TUv: function() {
                    return rJ
                },
                TlE: function() {
                    return t_
                },
                Tme: function() {
                    return e6
                },
                TyD: function() {
                    return p
                },
                UCm: function() {
                    return b
                },
                UY4: function() {
                    return as
                },
                UlW: function() {
                    return A
                },
                V1s: function() {
                    return t2
                },
                VzW: function() {
                    return _
                },
                WMw: function() {
                    return l
                },
                Wid: function() {
                    return sr
                },
                Wl3: function() {
                    return s
                },
                WwZ: function() {
                    return L
                },
                YLQ: function() {
                    return f
                },
                ZAu: function() {
                    return rx
                },
                Zp0: function() {
                    return sY
                },
                ZzF: function() {
                    return eo
                },
                _C8: function() {
                    return so
                },
                a$l: function() {
                    return tw
                },
                aH4: function() {
                    return m
                },
                aLr: function() {
                    return eE
                },
                aNw: function() {
                    return sb
                },
                anP: function() {
                    return iO
                },
                aoB: function() {
                    return S
                },
                blk: function() {
                    return aa
                },
                cLu: function() {
                    return M
                },
                cPb: function() {
                    return t4
                },
                cek: function() {
                    return sk
                },
                dUE: function() {
                    return sf
                },
                dd2: function() {
                    return et
                },
                dpR: function() {
                    return sA
                },
                ehD: function() {
                    return o
                },
                ejS: function() {
                    return ar
                },
                hH6: function() {
                    return sS
                },
                iKG: function() {
                    return iy
                },
                iLg: function() {
                    return sg
                },
                iMs: function() {
                    return oa
                },
                iUV: function() {
                    return oi
                },
                kB5: function() {
                    return rR
                },
                knz: function() {
                    return P
                },
                m7l: function() {
                    return sy
                },
                m_w: function() {
                    return af
                },
                nls: function() {
                    return r5
                },
                qyh: function() {
                    return v
                },
                rnI: function() {
                    return C
                },
                rpg: function() {
                    return u
                },
                trn: function() {
                    return ap
                },
                u9r: function() {
                    return tI
                },
                uWy: function() {
                    return c
                },
                vBJ: function() {
                    return tv
                },
                vpT: function() {
                    return rL
                },
                wem: function() {
                    return g
                },
                wk1: function() {
                    return w
                },
                woe: function() {
                    return ac
                },
                x12: function() {
                    return at
                },
                xEZ: function() {
                    return K
                },
                xsS: function() {
                    return rE
                },
                yC1: function() {
                    return sx
                },
                yGw: function() {
                    return ez
                },
                ywz: function() {
                    return y
                },
                yxD: function() {
                    return sL
                },
                z$h: function() {
                    return R
                }
            });
            let s = 0,
                o = 2,
                l = 2,
                h = 1,
                u = 1e3,
                c = 1001,
                d = 1002,
                p = 1003,
                f = 1004,
                m = 1005,
                g = 1006,
                v = 1007,
                x = 1008,
                y = 1009,
                _ = 1015,
                M = 1016,
                b = 1022,
                w = 1023,
                S = w,
                T = 2300,
                E = 2301,
                L = 0,
                A = 1,
                R = 2,
                C = 3e3,
                P = 3001,
                I = 3002,
                D = 0,
                N = "300 es";
            class z {
                addEventListener(e, t) {
                    void 0 === this._listeners && (this._listeners = {});
                    let i = this._listeners;
                    void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t)
                }
                hasEventListener(e, t) {
                    if (void 0 === this._listeners) return !1;
                    let i = this._listeners;
                    return void 0 !== i[e] && -1 !== i[e].indexOf(t)
                }
                removeEventListener(e, t) {
                    if (void 0 === this._listeners) return;
                    let i = this._listeners,
                        n = i[e];
                    if (void 0 !== n) {
                        let e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                    }
                }
                dispatchEvent(e) {
                    if (void 0 === this._listeners) return;
                    let t = this._listeners,
                        i = t[e.type];
                    if (void 0 !== i) {
                        e.target = this;
                        let t = i.slice(0);
                        for (let i = 0, n = t.length; i < n; i++) t[i].call(this, e);
                        e.target = null
                    }
                }
            }
            let O = [];
            for (let e = 0; e < 256; e++) O[e] = (e < 16 ? "0" : "") + e.toString(16);
            let F = 1234567,
                B = Math.PI / 180,
                U = 180 / Math.PI;

            function H() {
                let e = 4294967295 * Math.random() | 0,
                    t = 4294967295 * Math.random() | 0,
                    i = 4294967295 * Math.random() | 0,
                    n = 4294967295 * Math.random() | 0,
                    r = O[255 & e] + O[e >> 8 & 255] + O[e >> 16 & 255] + O[e >> 24 & 255] + "-" + O[255 & t] + O[t >> 8 & 255] + "-" + O[t >> 16 & 15 | 64] + O[t >> 24 & 255] + "-" + O[63 & i | 128] + O[i >> 8 & 255] + "-" + O[i >> 16 & 255] + O[i >> 24 & 255] + O[255 & n] + O[n >> 8 & 255] + O[n >> 16 & 255] + O[n >> 24 & 255];
                return r.toUpperCase()
            }

            function G(e, t, i) {
                return Math.max(t, Math.min(i, e))
            }

            function V(e, t) {
                return (e % t + t) % t
            }

            function k(e, t, i) {
                return (1 - i) * e + i * t
            }

            function W(e) {
                return (e & e - 1) == 0 && 0 !== e
            }

            function j(e) {
                return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
            }

            function q(e) {
                return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
            }
            var X = Object.freeze({
                __proto__: null,
                DEG2RAD: B,
                RAD2DEG: U,
                generateUUID: H,
                clamp: G,
                euclideanModulo: V,
                mapLinear: function(e, t, i, n, r) {
                    return n + (e - t) * (r - n) / (i - t)
                },
                inverseLerp: function(e, t, i) {
                    return e !== t ? (i - e) / (t - e) : 0
                },
                lerp: k,
                damp: function(e, t, i, n) {
                    return k(e, t, 1 - Math.exp(-i * n))
                },
                pingpong: function(e, t = 1) {
                    return t - Math.abs(V(e, 2 * t) - t)
                },
                smoothstep: function(e, t, i) {
                    return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * (3 - 2 * e)
                },
                smootherstep: function(e, t, i) {
                    return e <= t ? 0 : e >= i ? 1 : (e = (e - t) / (i - t)) * e * e * (e * (6 * e - 15) + 10)
                },
                randInt: function(e, t) {
                    return e + Math.floor(Math.random() * (t - e + 1))
                },
                randFloat: function(e, t) {
                    return e + Math.random() * (t - e)
                },
                randFloatSpread: function(e) {
                    return e * (.5 - Math.random())
                },
                seededRandom: function(e) {
                    return void 0 !== e && (F = e % 2147483647), ((F = 16807 * F % 2147483647) - 1) / 2147483646
                },
                degToRad: function(e) {
                    return e * B
                },
                radToDeg: function(e) {
                    return e * U
                },
                isPowerOfTwo: W,
                ceilPowerOfTwo: j,
                floorPowerOfTwo: q,
                setQuaternionFromProperEuler: function(e, t, i, n, r) {
                    let a = Math.cos,
                        s = Math.sin,
                        o = a(i / 2),
                        l = s(i / 2),
                        h = a((t + n) / 2),
                        u = s((t + n) / 2),
                        c = a((t - n) / 2),
                        d = s((t - n) / 2),
                        p = a((n - t) / 2),
                        f = s((n - t) / 2);
                    switch (r) {
                        case "XYX":
                            e.set(o * u, l * c, l * d, o * h);
                            break;
                        case "YZY":
                            e.set(l * d, o * u, l * c, o * h);
                            break;
                        case "ZXZ":
                            e.set(l * c, l * d, o * u, o * h);
                            break;
                        case "XZX":
                            e.set(o * u, l * f, l * p, o * h);
                            break;
                        case "YXY":
                            e.set(l * p, o * u, l * f, o * h);
                            break;
                        case "ZYZ":
                            e.set(l * f, l * p, o * u, o * h);
                            break;
                        default:
                            console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
                    }
                }
            });
            class Y {
                constructor(e = 0, t = 0) {
                    this.x = e, this.y = t
                }
                get width() {
                    return this.x
                }
                set width(e) {
                    this.x = e
                }
                get height() {
                    return this.y
                }
                set height(e) {
                    this.y = e
                }
                set(e, t) {
                    return this.x = e, this.y = t, this
                }
                setScalar(e) {
                    return this.x = e, this.y = e, this
                }
                setX(e) {
                    return this.x = e, this
                }
                setY(e) {
                    return this.y = e, this
                }
                setComponent(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        default:
                            throw Error("index is out of range: " + e)
                    }
                    return this
                }
                getComponent(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw Error("index is out of range: " + e)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y)
                }
                copy(e) {
                    return this.x = e.x, this.y = e.y, this
                }
                add(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
                }
                addScalar(e) {
                    return this.x += e, this.y += e, this
                }
                addVectors(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this
                }
                addScaledVector(e, t) {
                    return this.x += e.x * t, this.y += e.y * t, this
                }
                sub(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
                }
                subScalar(e) {
                    return this.x -= e, this.y -= e, this
                }
                subVectors(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this
                }
                multiply(e) {
                    return this.x *= e.x, this.y *= e.y, this
                }
                multiplyScalar(e) {
                    return this.x *= e, this.y *= e, this
                }
                divide(e) {
                    return this.x /= e.x, this.y /= e.y, this
                }
                divideScalar(e) {
                    return this.multiplyScalar(1 / e)
                }
                applyMatrix3(e) {
                    let t = this.x,
                        i = this.y,
                        n = e.elements;
                    return this.x = n[0] * t + n[3] * i + n[6], this.y = n[1] * t + n[4] * i + n[7], this
                }
                min(e) {
                    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
                }
                max(e) {
                    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
                }
                clamp(e, t) {
                    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this
                }
                clampScalar(e, t) {
                    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this
                }
                clampLength(e, t) {
                    let i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this
                }
                dot(e) {
                    return this.x * e.x + this.y * e.y
                }
                cross(e) {
                    return this.x * e.y - this.y * e.x
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                angle() {
                    let e = Math.atan2(-this.y, -this.x) + Math.PI;
                    return e
                }
                distanceTo(e) {
                    return Math.sqrt(this.distanceToSquared(e))
                }
                distanceToSquared(e) {
                    let t = this.x - e.x,
                        i = this.y - e.y;
                    return t * t + i * i
                }
                manhattanDistanceTo(e) {
                    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
                }
                setLength(e) {
                    return this.normalize().multiplyScalar(e)
                }
                lerp(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
                }
                lerpVectors(e, t, i) {
                    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this
                }
                equals(e) {
                    return e.x === this.x && e.y === this.y
                }
                fromArray(e, t = 0) {
                    return this.x = e[t], this.y = e[t + 1], this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this.x, e[t + 1] = this.y, e
                }
                fromBufferAttribute(e, t, i) {
                    return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this
                }
                rotateAround(e, t) {
                    let i = Math.cos(t),
                        n = Math.sin(t),
                        r = this.x - e.x,
                        a = this.y - e.y;
                    return this.x = r * i - a * n + e.x, this.y = r * n + a * i + e.y, this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this
                }
            }
            Y.prototype.isVector2 = !0;
            class J {
                constructor() {
                    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
                }
                set(e, t, i, n, r, a, s, o, l) {
                    let h = this.elements;
                    return h[0] = e, h[1] = n, h[2] = s, h[3] = t, h[4] = r, h[5] = o, h[6] = i, h[7] = a, h[8] = l, this
                }
                identity() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
                }
                copy(e) {
                    let t = this.elements,
                        i = e.elements;
                    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this
                }
                extractBasis(e, t, i) {
                    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this
                }
                setFromMatrix4(e) {
                    let t = e.elements;
                    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
                }
                multiply(e) {
                    return this.multiplyMatrices(this, e)
                }
                premultiply(e) {
                    return this.multiplyMatrices(e, this)
                }
                multiplyMatrices(e, t) {
                    let i = e.elements,
                        n = t.elements,
                        r = this.elements,
                        a = i[0],
                        s = i[3],
                        o = i[6],
                        l = i[1],
                        h = i[4],
                        u = i[7],
                        c = i[2],
                        d = i[5],
                        p = i[8],
                        f = n[0],
                        m = n[3],
                        g = n[6],
                        v = n[1],
                        x = n[4],
                        y = n[7],
                        _ = n[2],
                        M = n[5],
                        b = n[8];
                    return r[0] = a * f + s * v + o * _, r[3] = a * m + s * x + o * M, r[6] = a * g + s * y + o * b, r[1] = l * f + h * v + u * _, r[4] = l * m + h * x + u * M, r[7] = l * g + h * y + u * b, r[2] = c * f + d * v + p * _, r[5] = c * m + d * x + p * M, r[8] = c * g + d * y + p * b, this
                }
                multiplyScalar(e) {
                    let t = this.elements;
                    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
                }
                determinant() {
                    let e = this.elements,
                        t = e[0],
                        i = e[1],
                        n = e[2],
                        r = e[3],
                        a = e[4],
                        s = e[5],
                        o = e[6],
                        l = e[7],
                        h = e[8];
                    return t * a * h - t * s * l - i * r * h + i * s * o + n * r * l - n * a * o
                }
                invert() {
                    let e = this.elements,
                        t = e[0],
                        i = e[1],
                        n = e[2],
                        r = e[3],
                        a = e[4],
                        s = e[5],
                        o = e[6],
                        l = e[7],
                        h = e[8],
                        u = h * a - s * l,
                        c = s * o - h * r,
                        d = l * r - a * o,
                        p = t * u + i * c + n * d;
                    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                    let f = 1 / p;
                    return e[0] = u * f, e[1] = (n * l - h * i) * f, e[2] = (s * i - n * a) * f, e[3] = c * f, e[4] = (h * t - n * o) * f, e[5] = (n * r - s * t) * f, e[6] = d * f, e[7] = (i * o - l * t) * f, e[8] = (a * t - i * r) * f, this
                }
                transpose() {
                    let e;
                    let t = this.elements;
                    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
                }
                getNormalMatrix(e) {
                    return this.setFromMatrix4(e).invert().transpose()
                }
                transposeIntoArray(e) {
                    let t = this.elements;
                    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
                }
                setUvTransform(e, t, i, n, r, a, s) {
                    let o = Math.cos(r),
                        l = Math.sin(r);
                    return this.set(i * o, i * l, -i * (o * a + l * s) + a + e, -n * l, n * o, -n * (-l * a + o * s) + s + t, 0, 0, 1), this
                }
                scale(e, t) {
                    let i = this.elements;
                    return i[0] *= e, i[3] *= e, i[6] *= e, i[1] *= t, i[4] *= t, i[7] *= t, this
                }
                rotate(e) {
                    let t = Math.cos(e),
                        i = Math.sin(e),
                        n = this.elements,
                        r = n[0],
                        a = n[3],
                        s = n[6],
                        o = n[1],
                        l = n[4],
                        h = n[7];
                    return n[0] = t * r + i * o, n[3] = t * a + i * l, n[6] = t * s + i * h, n[1] = -i * r + t * o, n[4] = -i * a + t * l, n[7] = -i * s + t * h, this
                }
                translate(e, t) {
                    let i = this.elements;
                    return i[0] += e * i[2], i[3] += e * i[5], i[6] += e * i[8], i[1] += t * i[2], i[4] += t * i[5], i[7] += t * i[8], this
                }
                equals(e) {
                    let t = this.elements,
                        i = e.elements;
                    for (let e = 0; e < 9; e++)
                        if (t[e] !== i[e]) return !1;
                    return !0
                }
                fromArray(e, t = 0) {
                    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
                    return this
                }
                toArray(e = [], t = 0) {
                    let i = this.elements;
                    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e
                }
                clone() {
                    return new this.constructor().fromArray(this.elements)
                }
            }
            J.prototype.isMatrix3 = !0;
            class Z {
                static getDataURL(e) {
                    let t;
                    if (/^data:/i.test(e.src) || "undefined" == typeof HTMLCanvasElement) return e.src;
                    if (e instanceof HTMLCanvasElement) t = e;
                    else {
                        void 0 === n && (n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), n.width = e.width, n.height = e.height;
                        let i = n.getContext("2d");
                        e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), t = n
                    }
                    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
                }
            }
            let Q = 0;
            class K extends z {
                constructor(e = K.DEFAULT_IMAGE, t = K.DEFAULT_MAPPING, i = c, n = c, r = g, a = x, s = w, o = y, l = 1, h = C) {
                    super(), Object.defineProperty(this, "id", {
                        value: Q++
                    }), this.uuid = H(), this.name = "", this.image = e, this.mipmaps = [], this.mapping = t, this.wrapS = i, this.wrapT = n, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = o, this.offset = new Y(0, 0), this.repeat = new Y(1, 1), this.center = new Y(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new J, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = h, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1
                }
                updateMatrix() {
                    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.name = e.name, this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.encoding = e.encoding, this
                }
                toJSON(e) {
                    let t = void 0 === e || "string" == typeof e;
                    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
                    let i = {
                        metadata: {
                            version: 4.5,
                            type: "Texture",
                            generator: "Texture.toJSON"
                        },
                        uuid: this.uuid,
                        name: this.name,
                        mapping: this.mapping,
                        repeat: [this.repeat.x, this.repeat.y],
                        offset: [this.offset.x, this.offset.y],
                        center: [this.center.x, this.center.y],
                        rotation: this.rotation,
                        wrap: [this.wrapS, this.wrapT],
                        format: this.format,
                        type: this.type,
                        encoding: this.encoding,
                        minFilter: this.minFilter,
                        magFilter: this.magFilter,
                        anisotropy: this.anisotropy,
                        flipY: this.flipY,
                        premultiplyAlpha: this.premultiplyAlpha,
                        unpackAlignment: this.unpackAlignment
                    };
                    if (void 0 !== this.image) {
                        let n = this.image;
                        if (void 0 === n.uuid && (n.uuid = H()), !t && void 0 === e.images[n.uuid]) {
                            let t;
                            if (Array.isArray(n)) {
                                t = [];
                                for (let e = 0, i = n.length; e < i; e++) n[e].isDataTexture ? t.push($(n[e].image)) : t.push($(n[e]))
                            } else t = $(n);
                            e.images[n.uuid] = {
                                uuid: n.uuid,
                                url: t
                            }
                        }
                        i.image = n.uuid
                    }
                    return t || (e.textures[this.uuid] = i), i
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
                transformUv(e) {
                    if (300 !== this.mapping) return e;
                    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                        case u:
                            e.x = e.x - Math.floor(e.x);
                            break;
                        case c:
                            e.x = e.x < 0 ? 0 : 1;
                            break;
                        case d:
                            1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                    }
                    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                        case u:
                            e.y = e.y - Math.floor(e.y);
                            break;
                        case c:
                            e.y = e.y < 0 ? 0 : 1;
                            break;
                        case d:
                            1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                    }
                    return this.flipY && (e.y = 1 - e.y), e
                }
                set needsUpdate(e) {
                    !0 === e && this.version++
                }
            }

            function $(e) {
                return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap ? Z.getDataURL(e) : e.data ? {
                    data: Array.prototype.slice.call(e.data),
                    width: e.width,
                    height: e.height,
                    type: e.data.constructor.name
                } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
            }
            K.DEFAULT_IMAGE = void 0, K.DEFAULT_MAPPING = 300, K.prototype.isTexture = !0;
            class ee {
                constructor(e = 0, t = 0, i = 0, n = 1) {
                    this.x = e, this.y = t, this.z = i, this.w = n
                }
                get width() {
                    return this.z
                }
                set width(e) {
                    this.z = e
                }
                get height() {
                    return this.w
                }
                set height(e) {
                    this.w = e
                }
                set(e, t, i, n) {
                    return this.x = e, this.y = t, this.z = i, this.w = n, this
                }
                setScalar(e) {
                    return this.x = e, this.y = e, this.z = e, this.w = e, this
                }
                setX(e) {
                    return this.x = e, this
                }
                setY(e) {
                    return this.y = e, this
                }
                setZ(e) {
                    return this.z = e, this
                }
                setW(e) {
                    return this.w = e, this
                }
                setComponent(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        case 2:
                            this.z = t;
                            break;
                        case 3:
                            this.w = t;
                            break;
                        default:
                            throw Error("index is out of range: " + e)
                    }
                    return this
                }
                getComponent(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        case 3:
                            return this.w;
                        default:
                            throw Error("index is out of range: " + e)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y, this.z, this.w)
                }
                copy(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
                }
                add(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
                }
                addScalar(e) {
                    return this.x += e, this.y += e, this.z += e, this.w += e, this
                }
                addVectors(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
                }
                addScaledVector(e, t) {
                    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
                }
                sub(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
                }
                subScalar(e) {
                    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
                }
                subVectors(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
                }
                multiply(e) {
                    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
                }
                multiplyScalar(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                }
                applyMatrix4(e) {
                    let t = this.x,
                        i = this.y,
                        n = this.z,
                        r = this.w,
                        a = e.elements;
                    return this.x = a[0] * t + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * t + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * t + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * t + a[7] * i + a[11] * n + a[15] * r, this
                }
                divideScalar(e) {
                    return this.multiplyScalar(1 / e)
                }
                setAxisAngleFromQuaternion(e) {
                    this.w = 2 * Math.acos(e.w);
                    let t = Math.sqrt(1 - e.w * e.w);
                    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
                }
                setAxisAngleFromRotationMatrix(e) {
                    let t, i, n;
                    let r = e.elements,
                        a = r[0],
                        s = r[4],
                        o = r[8],
                        l = r[1],
                        h = r[5],
                        u = r[9],
                        c = r[2],
                        d = r[6],
                        p = r[10];
                    if (.01 > Math.abs(s - l) && .01 > Math.abs(o - c) && .01 > Math.abs(u - d)) {
                        if (.1 > Math.abs(s + l) && .1 > Math.abs(o + c) && .1 > Math.abs(u + d) && .1 > Math.abs(a + h + p - 3)) return this.set(1, 0, 0, 0), this;
                        let e = (a + 1) / 2,
                            r = (h + 1) / 2,
                            f = (p + 1) / 2,
                            m = (s + l) / 4,
                            g = (o + c) / 4,
                            v = (u + d) / 4;
                        return e > r && e > f ? e < .01 ? (t = 0, i = .707106781, n = .707106781) : (i = m / (t = Math.sqrt(e)), n = g / t) : r > f ? r < .01 ? (t = .707106781, i = 0, n = .707106781) : (t = m / (i = Math.sqrt(r)), n = v / i) : f < .01 ? (t = .707106781, i = .707106781, n = 0) : (t = g / (n = Math.sqrt(f)), i = v / n), this.set(t, i, n, Math.PI), this
                    }
                    let f = Math.sqrt((d - u) * (d - u) + (o - c) * (o - c) + (l - s) * (l - s));
                    return .001 > Math.abs(f) && (f = 1), this.x = (d - u) / f, this.y = (o - c) / f, this.z = (l - s) / f, this.w = Math.acos((a + h + p - 1) / 2), this
                }
                min(e) {
                    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
                }
                max(e) {
                    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
                }
                clamp(e, t) {
                    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this
                }
                clampScalar(e, t) {
                    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this
                }
                clampLength(e, t) {
                    let i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
                }
                dot(e) {
                    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                setLength(e) {
                    return this.normalize().multiplyScalar(e)
                }
                lerp(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
                }
                lerpVectors(e, t, i) {
                    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this
                }
                equals(e) {
                    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
                }
                fromArray(e, t = 0) {
                    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
                }
                fromBufferAttribute(e, t, i) {
                    return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
                }
            }
            ee.prototype.isVector4 = !0;
            class et extends z {
                constructor(e, t, i = {}) {
                    super(), this.width = e, this.height = t, this.depth = 1, this.scissor = new ee(0, 0, e, t), this.scissorTest = !1, this.viewport = new ee(0, 0, e, t), this.texture = new K(void 0, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.texture.isRenderTargetTexture = !0, this.texture.image = {
                        width: e,
                        height: t,
                        depth: 1
                    }, this.texture.generateMipmaps = void 0 !== i.generateMipmaps && i.generateMipmaps, this.texture.minFilter = void 0 !== i.minFilter ? i.minFilter : g, this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 !== i.stencilBuffer && i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
                }
                setTexture(e) {
                    e.image = {
                        width: this.width,
                        height: this.height,
                        depth: this.depth
                    }, this.texture = e
                }
                setSize(e, t, i = 1) {
                    (this.width !== e || this.height !== t || this.depth !== i) && (this.width = e, this.height = t, this.depth = i, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.image = {
                        ...this.texture.image
                    }, this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }
            et.prototype.isWebGLRenderTarget = !0, (class extends et {
                constructor(e, t, i) {
                    super(e, t);
                    let n = this.texture;
                    this.texture = [];
                    for (let e = 0; e < i; e++) this.texture[e] = n.clone()
                }
                setSize(e, t, i = 1) {
                    if (this.width !== e || this.height !== t || this.depth !== i) {
                        this.width = e, this.height = t, this.depth = i;
                        for (let n = 0, r = this.texture.length; n < r; n++) this.texture[n].image.width = e, this.texture[n].image.height = t, this.texture[n].image.depth = i;
                        this.dispose()
                    }
                    return this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t), this
                }
                copy(e) {
                    this.dispose(), this.width = e.width, this.height = e.height, this.depth = e.depth, this.viewport.set(0, 0, this.width, this.height), this.scissor.set(0, 0, this.width, this.height), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.depthTexture = e.depthTexture, this.texture.length = 0;
                    for (let t = 0, i = e.texture.length; t < i; t++) this.texture[t] = e.texture[t].clone();
                    return this
                }
            }).prototype.isWebGLMultipleRenderTargets = !0;
            class ei extends et {
                constructor(e, t, i) {
                    super(e, t, i), this.samples = 4
                }
                copy(e) {
                    return super.copy.call(this, e), this.samples = e.samples, this
                }
            }
            ei.prototype.isWebGLMultisampleRenderTarget = !0;
            class en {
                constructor(e = 0, t = 0, i = 0, n = 1) {
                    this._x = e, this._y = t, this._z = i, this._w = n
                }
                static slerp(e, t, i, n) {
                    return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."), i.slerpQuaternions(e, t, n)
                }
                static slerpFlat(e, t, i, n, r, a, s) {
                    let o = i[n + 0],
                        l = i[n + 1],
                        h = i[n + 2],
                        u = i[n + 3],
                        c = r[a + 0],
                        d = r[a + 1],
                        p = r[a + 2],
                        f = r[a + 3];
                    if (0 === s) {
                        e[t + 0] = o, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
                        return
                    }
                    if (1 === s) {
                        e[t + 0] = c, e[t + 1] = d, e[t + 2] = p, e[t + 3] = f;
                        return
                    }
                    if (u !== f || o !== c || l !== d || h !== p) {
                        let e = 1 - s,
                            t = o * c + l * d + h * p + u * f,
                            i = t >= 0 ? 1 : -1,
                            n = 1 - t * t;
                        if (n > Number.EPSILON) {
                            let r = Math.sqrt(n),
                                a = Math.atan2(r, t * i);
                            e = Math.sin(e * a) / r, s = Math.sin(s * a) / r
                        }
                        let r = s * i;
                        if (o = o * e + c * r, l = l * e + d * r, h = h * e + p * r, u = u * e + f * r, e === 1 - s) {
                            let e = 1 / Math.sqrt(o * o + l * l + h * h + u * u);
                            o *= e, l *= e, h *= e, u *= e
                        }
                    }
                    e[t] = o, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u
                }
                static multiplyQuaternionsFlat(e, t, i, n, r, a) {
                    let s = i[n],
                        o = i[n + 1],
                        l = i[n + 2],
                        h = i[n + 3],
                        u = r[a],
                        c = r[a + 1],
                        d = r[a + 2],
                        p = r[a + 3];
                    return e[t] = s * p + h * u + o * d - l * c, e[t + 1] = o * p + h * c + l * u - s * d, e[t + 2] = l * p + h * d + s * c - o * u, e[t + 3] = h * p - s * u - o * c - l * d, e
                }
                get x() {
                    return this._x
                }
                set x(e) {
                    this._x = e, this._onChangeCallback()
                }
                get y() {
                    return this._y
                }
                set y(e) {
                    this._y = e, this._onChangeCallback()
                }
                get z() {
                    return this._z
                }
                set z(e) {
                    this._z = e, this._onChangeCallback()
                }
                get w() {
                    return this._w
                }
                set w(e) {
                    this._w = e, this._onChangeCallback()
                }
                set(e, t, i, n) {
                    return this._x = e, this._y = t, this._z = i, this._w = n, this._onChangeCallback(), this
                }
                clone() {
                    return new this.constructor(this._x, this._y, this._z, this._w)
                }
                copy(e) {
                    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
                }
                setFromEuler(e, t) {
                    if (!(e && e.isEuler)) throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
                    let i = e._x,
                        n = e._y,
                        r = e._z,
                        a = e._order,
                        s = Math.cos,
                        o = Math.sin,
                        l = s(i / 2),
                        h = s(n / 2),
                        u = s(r / 2),
                        c = o(i / 2),
                        d = o(n / 2),
                        p = o(r / 2);
                    switch (a) {
                        case "XYZ":
                            this._x = c * h * u + l * d * p, this._y = l * d * u - c * h * p, this._z = l * h * p + c * d * u, this._w = l * h * u - c * d * p;
                            break;
                        case "YXZ":
                            this._x = c * h * u + l * d * p, this._y = l * d * u - c * h * p, this._z = l * h * p - c * d * u, this._w = l * h * u + c * d * p;
                            break;
                        case "ZXY":
                            this._x = c * h * u - l * d * p, this._y = l * d * u + c * h * p, this._z = l * h * p + c * d * u, this._w = l * h * u - c * d * p;
                            break;
                        case "ZYX":
                            this._x = c * h * u - l * d * p, this._y = l * d * u + c * h * p, this._z = l * h * p - c * d * u, this._w = l * h * u + c * d * p;
                            break;
                        case "YZX":
                            this._x = c * h * u + l * d * p, this._y = l * d * u + c * h * p, this._z = l * h * p - c * d * u, this._w = l * h * u - c * d * p;
                            break;
                        case "XZY":
                            this._x = c * h * u - l * d * p, this._y = l * d * u - c * h * p, this._z = l * h * p + c * d * u, this._w = l * h * u + c * d * p;
                            break;
                        default:
                            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
                    }
                    return !1 !== t && this._onChangeCallback(), this
                }
                setFromAxisAngle(e, t) {
                    let i = t / 2,
                        n = Math.sin(i);
                    return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(i), this._onChangeCallback(), this
                }
                setFromRotationMatrix(e) {
                    let t = e.elements,
                        i = t[0],
                        n = t[4],
                        r = t[8],
                        a = t[1],
                        s = t[5],
                        o = t[9],
                        l = t[2],
                        h = t[6],
                        u = t[10],
                        c = i + s + u;
                    if (c > 0) {
                        let e = .5 / Math.sqrt(c + 1);
                        this._w = .25 / e, this._x = (h - o) * e, this._y = (r - l) * e, this._z = (a - n) * e
                    } else if (i > s && i > u) {
                        let e = 2 * Math.sqrt(1 + i - s - u);
                        this._w = (h - o) / e, this._x = .25 * e, this._y = (n + a) / e, this._z = (r + l) / e
                    } else if (s > u) {
                        let e = 2 * Math.sqrt(1 + s - i - u);
                        this._w = (r - l) / e, this._x = (n + a) / e, this._y = .25 * e, this._z = (o + h) / e
                    } else {
                        let e = 2 * Math.sqrt(1 + u - i - s);
                        this._w = (a - n) / e, this._x = (r + l) / e, this._y = (o + h) / e, this._z = .25 * e
                    }
                    return this._onChangeCallback(), this
                }
                setFromUnitVectors(e, t) {
                    let i = e.dot(t) + 1;
                    return i < Number.EPSILON ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0) : (this._x = 0, this._y = -e.z, this._z = e.y)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x), this._w = i, this.normalize()
                }
                angleTo(e) {
                    return 2 * Math.acos(Math.abs(G(this.dot(e), -1, 1)))
                }
                rotateTowards(e, t) {
                    let i = this.angleTo(e);
                    return 0 === i || this.slerp(e, Math.min(1, t / i)), this
                }
                identity() {
                    return this.set(0, 0, 0, 1)
                }
                invert() {
                    return this.conjugate()
                }
                conjugate() {
                    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
                }
                dot(e) {
                    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
                }
                lengthSq() {
                    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
                }
                length() {
                    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
                }
                normalize() {
                    let e = this.length();
                    return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
                }
                multiply(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
                }
                premultiply(e) {
                    return this.multiplyQuaternions(e, this)
                }
                multiplyQuaternions(e, t) {
                    let i = e._x,
                        n = e._y,
                        r = e._z,
                        a = e._w,
                        s = t._x,
                        o = t._y,
                        l = t._z,
                        h = t._w;
                    return this._x = i * h + a * s + n * l - r * o, this._y = n * h + a * o + r * s - i * l, this._z = r * h + a * l + i * o - n * s, this._w = a * h - i * s - n * o - r * l, this._onChangeCallback(), this
                }
                slerp(e, t) {
                    if (0 === t) return this;
                    if (1 === t) return this.copy(e);
                    let i = this._x,
                        n = this._y,
                        r = this._z,
                        a = this._w,
                        s = a * e._w + i * e._x + n * e._y + r * e._z;
                    if (s < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s) : this.copy(e), s >= 1) return this._w = a, this._x = i, this._y = n, this._z = r, this;
                    let o = 1 - s * s;
                    if (o <= Number.EPSILON) {
                        let e = 1 - t;
                        return this._w = e * a + t * this._w, this._x = e * i + t * this._x, this._y = e * n + t * this._y, this._z = e * r + t * this._z, this.normalize(), this._onChangeCallback(), this
                    }
                    let l = Math.sqrt(o),
                        h = Math.atan2(l, s),
                        u = Math.sin((1 - t) * h) / l,
                        c = Math.sin(t * h) / l;
                    return this._w = a * u + this._w * c, this._x = i * u + this._x * c, this._y = n * u + this._y * c, this._z = r * u + this._z * c, this._onChangeCallback(), this
                }
                slerpQuaternions(e, t, i) {
                    this.copy(e).slerp(t, i)
                }
                equals(e) {
                    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
                }
                fromArray(e, t = 0) {
                    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
                }
                fromBufferAttribute(e, t) {
                    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this
                }
                _onChange(e) {
                    return this._onChangeCallback = e, this
                }
                _onChangeCallback() {}
            }
            en.prototype.isQuaternion = !0;
            class er {
                constructor(e = 0, t = 0, i = 0) {
                    this.x = e, this.y = t, this.z = i
                }
                set(e, t, i) {
                    return void 0 === i && (i = this.z), this.x = e, this.y = t, this.z = i, this
                }
                setScalar(e) {
                    return this.x = e, this.y = e, this.z = e, this
                }
                setX(e) {
                    return this.x = e, this
                }
                setY(e) {
                    return this.y = e, this
                }
                setZ(e) {
                    return this.z = e, this
                }
                setComponent(e, t) {
                    switch (e) {
                        case 0:
                            this.x = t;
                            break;
                        case 1:
                            this.y = t;
                            break;
                        case 2:
                            this.z = t;
                            break;
                        default:
                            throw Error("index is out of range: " + e)
                    }
                    return this
                }
                getComponent(e) {
                    switch (e) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        case 2:
                            return this.z;
                        default:
                            throw Error("index is out of range: " + e)
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y, this.z)
                }
                copy(e) {
                    return this.x = e.x, this.y = e.y, this.z = e.z, this
                }
                add(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
                }
                addScalar(e) {
                    return this.x += e, this.y += e, this.z += e, this
                }
                addVectors(e, t) {
                    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
                }
                addScaledVector(e, t) {
                    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
                }
                sub(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
                }
                subScalar(e) {
                    return this.x -= e, this.y -= e, this.z -= e, this
                }
                subVectors(e, t) {
                    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
                }
                multiply(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
                }
                multiplyScalar(e) {
                    return this.x *= e, this.y *= e, this.z *= e, this
                }
                multiplyVectors(e, t) {
                    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
                }
                applyEuler(e) {
                    return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(es.setFromEuler(e))
                }
                applyAxisAngle(e, t) {
                    return this.applyQuaternion(es.setFromAxisAngle(e, t))
                }
                applyMatrix3(e) {
                    let t = this.x,
                        i = this.y,
                        n = this.z,
                        r = e.elements;
                    return this.x = r[0] * t + r[3] * i + r[6] * n, this.y = r[1] * t + r[4] * i + r[7] * n, this.z = r[2] * t + r[5] * i + r[8] * n, this
                }
                applyNormalMatrix(e) {
                    return this.applyMatrix3(e).normalize()
                }
                applyMatrix4(e) {
                    let t = this.x,
                        i = this.y,
                        n = this.z,
                        r = e.elements,
                        a = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
                    return this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * a, this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * a, this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * a, this
                }
                applyQuaternion(e) {
                    let t = this.x,
                        i = this.y,
                        n = this.z,
                        r = e.x,
                        a = e.y,
                        s = e.z,
                        o = e.w,
                        l = o * t + a * n - s * i,
                        h = o * i + s * t - r * n,
                        u = o * n + r * i - a * t,
                        c = -r * t - a * i - s * n;
                    return this.x = l * o + -(c * r) + -(h * s) - -(u * a), this.y = h * o + -(c * a) + -(u * r) - -(l * s), this.z = u * o + -(c * s) + -(l * a) - -(h * r), this
                }
                project(e) {
                    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
                }
                unproject(e) {
                    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
                }
                transformDirection(e) {
                    let t = this.x,
                        i = this.y,
                        n = this.z,
                        r = e.elements;
                    return this.x = r[0] * t + r[4] * i + r[8] * n, this.y = r[1] * t + r[5] * i + r[9] * n, this.z = r[2] * t + r[6] * i + r[10] * n, this.normalize()
                }
                divide(e) {
                    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
                }
                divideScalar(e) {
                    return this.multiplyScalar(1 / e)
                }
                min(e) {
                    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
                }
                max(e) {
                    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
                }
                clamp(e, t) {
                    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this
                }
                clampScalar(e, t) {
                    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this
                }
                clampLength(e, t) {
                    let i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
                }
                floor() {
                    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
                }
                ceil() {
                    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
                }
                round() {
                    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
                }
                roundToZero() {
                    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
                }
                negate() {
                    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                }
                dot(e) {
                    return this.x * e.x + this.y * e.y + this.z * e.z
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y + this.z * this.z
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
                }
                normalize() {
                    return this.divideScalar(this.length() || 1)
                }
                setLength(e) {
                    return this.normalize().multiplyScalar(e)
                }
                lerp(e, t) {
                    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
                }
                lerpVectors(e, t, i) {
                    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this
                }
                cross(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t)) : this.crossVectors(this, e)
                }
                crossVectors(e, t) {
                    let i = e.x,
                        n = e.y,
                        r = e.z,
                        a = t.x,
                        s = t.y,
                        o = t.z;
                    return this.x = n * o - r * s, this.y = r * a - i * o, this.z = i * s - n * a, this
                }
                projectOnVector(e) {
                    let t = e.lengthSq();
                    if (0 === t) return this.set(0, 0, 0);
                    let i = e.dot(this) / t;
                    return this.copy(e).multiplyScalar(i)
                }
                projectOnPlane(e) {
                    return ea.copy(this).projectOnVector(e), this.sub(ea)
                }
                reflect(e) {
                    return this.sub(ea.copy(e).multiplyScalar(2 * this.dot(e)))
                }
                angleTo(e) {
                    let t = Math.sqrt(this.lengthSq() * e.lengthSq());
                    if (0 === t) return Math.PI / 2;
                    let i = this.dot(e) / t;
                    return Math.acos(G(i, -1, 1))
                }
                distanceTo(e) {
                    return Math.sqrt(this.distanceToSquared(e))
                }
                distanceToSquared(e) {
                    let t = this.x - e.x,
                        i = this.y - e.y,
                        n = this.z - e.z;
                    return t * t + i * i + n * n
                }
                manhattanDistanceTo(e) {
                    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
                }
                setFromSpherical(e) {
                    return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
                }
                setFromSphericalCoords(e, t, i) {
                    let n = Math.sin(t) * e;
                    return this.x = n * Math.sin(i), this.y = Math.cos(t) * e, this.z = n * Math.cos(i), this
                }
                setFromCylindrical(e) {
                    return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
                }
                setFromCylindricalCoords(e, t, i) {
                    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this
                }
                setFromMatrixPosition(e) {
                    let t = e.elements;
                    return this.x = t[12], this.y = t[13], this.z = t[14], this
                }
                setFromMatrixScale(e) {
                    let t = this.setFromMatrixColumn(e, 0).length(),
                        i = this.setFromMatrixColumn(e, 1).length(),
                        n = this.setFromMatrixColumn(e, 2).length();
                    return this.x = t, this.y = i, this.z = n, this
                }
                setFromMatrixColumn(e, t) {
                    return this.fromArray(e.elements, 4 * t)
                }
                setFromMatrix3Column(e, t) {
                    return this.fromArray(e.elements, 3 * t)
                }
                equals(e) {
                    return e.x === this.x && e.y === this.y && e.z === this.z
                }
                fromArray(e, t = 0) {
                    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
                }
                fromBufferAttribute(e, t, i) {
                    return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
                }
                random() {
                    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
                }
            }
            er.prototype.isVector3 = !0;
            let ea = new er,
                es = new en;
            class eo {
                constructor(e = new er(Infinity, Infinity, Infinity), t = new er(-1 / 0, -1 / 0, -1 / 0)) {
                    this.min = e, this.max = t
                }
                set(e, t) {
                    return this.min.copy(e), this.max.copy(t), this
                }
                setFromArray(e) {
                    let t = Infinity,
                        i = Infinity,
                        n = Infinity,
                        r = -1 / 0,
                        a = -1 / 0,
                        s = -1 / 0;
                    for (let o = 0, l = e.length; o < l; o += 3) {
                        let l = e[o],
                            h = e[o + 1],
                            u = e[o + 2];
                        l < t && (t = l), h < i && (i = h), u < n && (n = u), l > r && (r = l), h > a && (a = h), u > s && (s = u)
                    }
                    return this.min.set(t, i, n), this.max.set(r, a, s), this
                }
                setFromBufferAttribute(e) {
                    let t = Infinity,
                        i = Infinity,
                        n = Infinity,
                        r = -1 / 0,
                        a = -1 / 0,
                        s = -1 / 0;
                    for (let o = 0, l = e.count; o < l; o++) {
                        let l = e.getX(o),
                            h = e.getY(o),
                            u = e.getZ(o);
                        l < t && (t = l), h < i && (i = h), u < n && (n = u), l > r && (r = l), h > a && (a = h), u > s && (s = u)
                    }
                    return this.min.set(t, i, n), this.max.set(r, a, s), this
                }
                setFromPoints(e) {
                    this.makeEmpty();
                    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
                    return this
                }
                setFromCenterAndSize(e, t) {
                    let i = eh.copy(t).multiplyScalar(.5);
                    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this
                }
                setFromObject(e) {
                    return this.makeEmpty(), this.expandByObject(e)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.min.copy(e.min), this.max.copy(e.max), this
                }
                makeEmpty() {
                    return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -1 / 0, this
                }
                isEmpty() {
                    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
                }
                getCenter(e) {
                    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
                }
                getSize(e) {
                    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
                }
                expandByPoint(e) {
                    return this.min.min(e), this.max.max(e), this
                }
                expandByVector(e) {
                    return this.min.sub(e), this.max.add(e), this
                }
                expandByScalar(e) {
                    return this.min.addScalar(-e), this.max.addScalar(e), this
                }
                expandByObject(e) {
                    e.updateWorldMatrix(!1, !1);
                    let t = e.geometry;
                    void 0 !== t && (null === t.boundingBox && t.computeBoundingBox(), eu.copy(t.boundingBox), eu.applyMatrix4(e.matrixWorld), this.union(eu));
                    let i = e.children;
                    for (let e = 0, t = i.length; e < t; e++) this.expandByObject(i[e]);
                    return this
                }
                containsPoint(e) {
                    return !(e.x < this.min.x) && !(e.x > this.max.x) && !(e.y < this.min.y) && !(e.y > this.max.y) && !(e.z < this.min.z) && !(e.z > this.max.z)
                }
                containsBox(e) {
                    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
                }
                getParameter(e, t) {
                    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
                }
                intersectsBox(e) {
                    return !(e.max.x < this.min.x) && !(e.min.x > this.max.x) && !(e.max.y < this.min.y) && !(e.min.y > this.max.y) && !(e.max.z < this.min.z) && !(e.min.z > this.max.z)
                }
                intersectsSphere(e) {
                    return this.clampPoint(e.center, eh), eh.distanceToSquared(e.center) <= e.radius * e.radius
                }
                intersectsPlane(e) {
                    let t, i;
                    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant
                }
                intersectsTriangle(e) {
                    if (this.isEmpty()) return !1;
                    this.getCenter(ev), ex.subVectors(this.max, ev), ec.subVectors(e.a, ev), ed.subVectors(e.b, ev), ep.subVectors(e.c, ev), ef.subVectors(ed, ec), em.subVectors(ep, ed), eg.subVectors(ec, ep);
                    let t = [0, -ef.z, ef.y, 0, -em.z, em.y, 0, -eg.z, eg.y, ef.z, 0, -ef.x, em.z, 0, -em.x, eg.z, 0, -eg.x, -ef.y, ef.x, 0, -em.y, em.x, 0, -eg.y, eg.x, 0];
                    return !!(eM(t, ec, ed, ep, ex) && eM(t = [1, 0, 0, 0, 1, 0, 0, 0, 1], ec, ed, ep, ex)) && (ey.crossVectors(ef, em), eM(t = [ey.x, ey.y, ey.z], ec, ed, ep, ex))
                }
                clampPoint(e, t) {
                    return t.copy(e).clamp(this.min, this.max)
                }
                distanceToPoint(e) {
                    let t = eh.copy(e).clamp(this.min, this.max);
                    return t.sub(e).length()
                }
                getBoundingSphere(e) {
                    return this.getCenter(e.center), e.radius = .5 * this.getSize(eh).length(), e
                }
                intersect(e) {
                    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
                }
                union(e) {
                    return this.min.min(e.min), this.max.max(e.max), this
                }
                applyMatrix4(e) {
                    return this.isEmpty() || (el[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), el[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), el[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), el[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), el[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), el[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), el[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), el[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(el)), this
                }
                translate(e) {
                    return this.min.add(e), this.max.add(e), this
                }
                equals(e) {
                    return e.min.equals(this.min) && e.max.equals(this.max)
                }
            }
            eo.prototype.isBox3 = !0;
            let el = [new er, new er, new er, new er, new er, new er, new er, new er],
                eh = new er,
                eu = new eo,
                ec = new er,
                ed = new er,
                ep = new er,
                ef = new er,
                em = new er,
                eg = new er,
                ev = new er,
                ex = new er,
                ey = new er,
                e_ = new er;

            function eM(e, t, i, n, r) {
                for (let a = 0, s = e.length - 3; a <= s; a += 3) {
                    e_.fromArray(e, a);
                    let s = r.x * Math.abs(e_.x) + r.y * Math.abs(e_.y) + r.z * Math.abs(e_.z),
                        o = t.dot(e_),
                        l = i.dot(e_),
                        h = n.dot(e_);
                    if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > s) return !1
                }
                return !0
            }
            let eb = new eo,
                ew = new er,
                eS = new er,
                eT = new er;
            class eE {
                constructor(e = new er, t = -1) {
                    this.center = e, this.radius = t
                }
                set(e, t) {
                    return this.center.copy(e), this.radius = t, this
                }
                setFromPoints(e, t) {
                    let i = this.center;
                    void 0 !== t ? i.copy(t) : eb.setFromPoints(e).getCenter(i);
                    let n = 0;
                    for (let t = 0, r = e.length; t < r; t++) n = Math.max(n, i.distanceToSquared(e[t]));
                    return this.radius = Math.sqrt(n), this
                }
                copy(e) {
                    return this.center.copy(e.center), this.radius = e.radius, this
                }
                isEmpty() {
                    return this.radius < 0
                }
                makeEmpty() {
                    return this.center.set(0, 0, 0), this.radius = -1, this
                }
                containsPoint(e) {
                    return e.distanceToSquared(this.center) <= this.radius * this.radius
                }
                distanceToPoint(e) {
                    return e.distanceTo(this.center) - this.radius
                }
                intersectsSphere(e) {
                    let t = this.radius + e.radius;
                    return e.center.distanceToSquared(this.center) <= t * t
                }
                intersectsBox(e) {
                    return e.intersectsSphere(this)
                }
                intersectsPlane(e) {
                    return Math.abs(e.distanceToPoint(this.center)) <= this.radius
                }
                clampPoint(e, t) {
                    let i = this.center.distanceToSquared(e);
                    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
                }
                getBoundingBox(e) {
                    return this.isEmpty() ? e.makeEmpty() : (e.set(this.center, this.center), e.expandByScalar(this.radius)), e
                }
                applyMatrix4(e) {
                    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
                }
                translate(e) {
                    return this.center.add(e), this
                }
                expandByPoint(e) {
                    eT.subVectors(e, this.center);
                    let t = eT.lengthSq();
                    if (t > this.radius * this.radius) {
                        let e = Math.sqrt(t),
                            i = (e - this.radius) * .5;
                        this.center.add(eT.multiplyScalar(i / e)), this.radius += i
                    }
                    return this
                }
                union(e) {
                    return eS.subVectors(e.center, this.center).normalize().multiplyScalar(e.radius), this.expandByPoint(ew.copy(e.center).add(eS)), this.expandByPoint(ew.copy(e.center).sub(eS)), this
                }
                equals(e) {
                    return e.center.equals(this.center) && e.radius === this.radius
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            let eL = new er,
                eA = new er,
                eR = new er,
                eC = new er,
                eP = new er,
                eI = new er,
                eD = new er;
            class eN {
                constructor(e = new er, t = new er(0, 0, -1)) {
                    this.origin = e, this.direction = t
                }
                set(e, t) {
                    return this.origin.copy(e), this.direction.copy(t), this
                }
                copy(e) {
                    return this.origin.copy(e.origin), this.direction.copy(e.direction), this
                }
                at(e, t) {
                    return t.copy(this.direction).multiplyScalar(e).add(this.origin)
                }
                lookAt(e) {
                    return this.direction.copy(e).sub(this.origin).normalize(), this
                }
                recast(e) {
                    return this.origin.copy(this.at(e, eL)), this
                }
                closestPointToPoint(e, t) {
                    t.subVectors(e, this.origin);
                    let i = t.dot(this.direction);
                    return i < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(i).add(this.origin)
                }
                distanceToPoint(e) {
                    return Math.sqrt(this.distanceSqToPoint(e))
                }
                distanceSqToPoint(e) {
                    let t = eL.subVectors(e, this.origin).dot(this.direction);
                    return t < 0 ? this.origin.distanceToSquared(e) : (eL.copy(this.direction).multiplyScalar(t).add(this.origin), eL.distanceToSquared(e))
                }
                distanceSqToSegment(e, t, i, n) {
                    let r, a, s, o;
                    eA.copy(e).add(t).multiplyScalar(.5), eR.copy(t).sub(e).normalize(), eC.copy(this.origin).sub(eA);
                    let l = .5 * e.distanceTo(t),
                        h = -this.direction.dot(eR),
                        u = eC.dot(this.direction),
                        c = -eC.dot(eR),
                        d = eC.lengthSq(),
                        p = Math.abs(1 - h * h);
                    if (p > 0) {
                        if (r = h * c - u, a = h * u - c, o = l * p, r >= 0) {
                            if (a >= -o) {
                                if (a <= o) {
                                    let e = 1 / p;
                                    r *= e, a *= e, s = r * (r + h * a + 2 * u) + a * (h * r + a + 2 * c) + d
                                } else s = -(r = Math.max(0, -(h * (a = l) + u))) * r + a * (a + 2 * c) + d
                            } else s = -(r = Math.max(0, -(h * (a = -l) + u))) * r + a * (a + 2 * c) + d
                        } else a <= -o ? (a = (r = Math.max(0, -(-h * l + u))) > 0 ? -l : Math.min(Math.max(-l, -c), l), s = -r * r + a * (a + 2 * c) + d) : a <= o ? (r = 0, s = (a = Math.min(Math.max(-l, -c), l)) * (a + 2 * c) + d) : (a = (r = Math.max(0, -(h * l + u))) > 0 ? l : Math.min(Math.max(-l, -c), l), s = -r * r + a * (a + 2 * c) + d)
                    } else a = h > 0 ? -l : l, s = -(r = Math.max(0, -(h * a + u))) * r + a * (a + 2 * c) + d;
                    return i && i.copy(this.direction).multiplyScalar(r).add(this.origin), n && n.copy(eR).multiplyScalar(a).add(eA), s
                }
                intersectSphere(e, t) {
                    eL.subVectors(e.center, this.origin);
                    let i = eL.dot(this.direction),
                        n = eL.dot(eL) - i * i,
                        r = e.radius * e.radius;
                    if (n > r) return null;
                    let a = Math.sqrt(r - n),
                        s = i - a,
                        o = i + a;
                    return s < 0 && o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t)
                }
                intersectsSphere(e) {
                    return this.distanceSqToPoint(e.center) <= e.radius * e.radius
                }
                distanceToPlane(e) {
                    let t = e.normal.dot(this.direction);
                    if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
                    let i = -(this.origin.dot(e.normal) + e.constant) / t;
                    return i >= 0 ? i : null
                }
                intersectPlane(e, t) {
                    let i = this.distanceToPlane(e);
                    return null === i ? null : this.at(i, t)
                }
                intersectsPlane(e) {
                    let t = e.distanceToPoint(this.origin);
                    if (0 === t) return !0;
                    let i = e.normal.dot(this.direction);
                    return i * t < 0
                }
                intersectBox(e, t) {
                    let i, n, r, a, s, o;
                    let l = 1 / this.direction.x,
                        h = 1 / this.direction.y,
                        u = 1 / this.direction.z,
                        c = this.origin;
                    return (l >= 0 ? (i = (e.min.x - c.x) * l, n = (e.max.x - c.x) * l) : (i = (e.max.x - c.x) * l, n = (e.min.x - c.x) * l), h >= 0 ? (r = (e.min.y - c.y) * h, a = (e.max.y - c.y) * h) : (r = (e.max.y - c.y) * h, a = (e.min.y - c.y) * h), i > a || r > n) ? null : ((r > i || i != i) && (i = r), (a < n || n != n) && (n = a), u >= 0 ? (s = (e.min.z - c.z) * u, o = (e.max.z - c.z) * u) : (s = (e.max.z - c.z) * u, o = (e.min.z - c.z) * u), i > o || s > n) ? null : ((s > i || i != i) && (i = s), (o < n || n != n) && (n = o), n < 0) ? null : this.at(i >= 0 ? i : n, t)
                }
                intersectsBox(e) {
                    return null !== this.intersectBox(e, eL)
                }
                intersectTriangle(e, t, i, n, r) {
                    let a;
                    eP.subVectors(t, e), eI.subVectors(i, e), eD.crossVectors(eP, eI);
                    let s = this.direction.dot(eD);
                    if (s > 0) {
                        if (n) return null;
                        a = 1
                    } else {
                        if (!(s < 0)) return null;
                        a = -1, s = -s
                    }
                    eC.subVectors(this.origin, e);
                    let o = a * this.direction.dot(eI.crossVectors(eC, eI));
                    if (o < 0) return null;
                    let l = a * this.direction.dot(eP.cross(eC));
                    if (l < 0 || o + l > s) return null;
                    let h = -a * eC.dot(eD);
                    return h < 0 ? null : this.at(h / s, r)
                }
                applyMatrix4(e) {
                    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
                }
                equals(e) {
                    return e.origin.equals(this.origin) && e.direction.equals(this.direction)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            class ez {
                constructor() {
                    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
                }
                set(e, t, i, n, r, a, s, o, l, h, u, c, d, p, f, m) {
                    let g = this.elements;
                    return g[0] = e, g[4] = t, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = s, g[13] = o, g[2] = l, g[6] = h, g[10] = u, g[14] = c, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
                }
                identity() {
                    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                }
                clone() {
                    return new ez().fromArray(this.elements)
                }
                copy(e) {
                    let t = this.elements,
                        i = e.elements;
                    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this
                }
                copyPosition(e) {
                    let t = this.elements,
                        i = e.elements;
                    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this
                }
                setFromMatrix3(e) {
                    let t = e.elements;
                    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
                }
                extractBasis(e, t, i) {
                    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
                }
                makeBasis(e, t, i) {
                    return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1), this
                }
                extractRotation(e) {
                    let t = this.elements,
                        i = e.elements,
                        n = 1 / eO.setFromMatrixColumn(e, 0).length(),
                        r = 1 / eO.setFromMatrixColumn(e, 1).length(),
                        a = 1 / eO.setFromMatrixColumn(e, 2).length();
                    return t[0] = i[0] * n, t[1] = i[1] * n, t[2] = i[2] * n, t[3] = 0, t[4] = i[4] * r, t[5] = i[5] * r, t[6] = i[6] * r, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
                }
                makeRotationFromEuler(e) {
                    e && e.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                    let t = this.elements,
                        i = e.x,
                        n = e.y,
                        r = e.z,
                        a = Math.cos(i),
                        s = Math.sin(i),
                        o = Math.cos(n),
                        l = Math.sin(n),
                        h = Math.cos(r),
                        u = Math.sin(r);
                    if ("XYZ" === e.order) {
                        let e = a * h,
                            i = a * u,
                            n = s * h,
                            r = s * u;
                        t[0] = o * h, t[4] = -o * u, t[8] = l, t[1] = i + n * l, t[5] = e - r * l, t[9] = -s * o, t[2] = r - e * l, t[6] = n + i * l, t[10] = a * o
                    } else if ("YXZ" === e.order) {
                        let e = o * h,
                            i = o * u,
                            n = l * h,
                            r = l * u;
                        t[0] = e + r * s, t[4] = n * s - i, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -s, t[2] = i * s - n, t[6] = r + e * s, t[10] = a * o
                    } else if ("ZXY" === e.order) {
                        let e = o * h,
                            i = o * u,
                            n = l * h,
                            r = l * u;
                        t[0] = e - r * s, t[4] = -a * u, t[8] = n + i * s, t[1] = i + n * s, t[5] = a * h, t[9] = r - e * s, t[2] = -a * l, t[6] = s, t[10] = a * o
                    } else if ("ZYX" === e.order) {
                        let e = a * h,
                            i = a * u,
                            n = s * h,
                            r = s * u;
                        t[0] = o * h, t[4] = n * l - i, t[8] = e * l + r, t[1] = o * u, t[5] = r * l + e, t[9] = i * l - n, t[2] = -l, t[6] = s * o, t[10] = a * o
                    } else if ("YZX" === e.order) {
                        let e = a * o,
                            i = a * l,
                            n = s * o,
                            r = s * l;
                        t[0] = o * h, t[4] = r - e * u, t[8] = n * u + i, t[1] = u, t[5] = a * h, t[9] = -s * h, t[2] = -l * h, t[6] = i * u + n, t[10] = e - r * u
                    } else if ("XZY" === e.order) {
                        let e = a * o,
                            i = a * l,
                            n = s * o,
                            r = s * l;
                        t[0] = o * h, t[4] = -u, t[8] = l * h, t[1] = e * u + r, t[5] = a * h, t[9] = i * u - n, t[2] = n * u - i, t[6] = s * h, t[10] = r * u + e
                    }
                    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
                }
                makeRotationFromQuaternion(e) {
                    return this.compose(eB, e, eU)
                }
                lookAt(e, t, i) {
                    let n = this.elements;
                    return eV.subVectors(e, t), 0 === eV.lengthSq() && (eV.z = 1), eV.normalize(), eH.crossVectors(i, eV), 0 === eH.lengthSq() && (1 === Math.abs(i.z) ? eV.x += 1e-4 : eV.z += 1e-4, eV.normalize(), eH.crossVectors(i, eV)), eH.normalize(), eG.crossVectors(eV, eH), n[0] = eH.x, n[4] = eG.x, n[8] = eV.x, n[1] = eH.y, n[5] = eG.y, n[9] = eV.y, n[2] = eH.z, n[6] = eG.z, n[10] = eV.z, this
                }
                multiply(e, t) {
                    return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
                }
                premultiply(e) {
                    return this.multiplyMatrices(e, this)
                }
                multiplyMatrices(e, t) {
                    let i = e.elements,
                        n = t.elements,
                        r = this.elements,
                        a = i[0],
                        s = i[4],
                        o = i[8],
                        l = i[12],
                        h = i[1],
                        u = i[5],
                        c = i[9],
                        d = i[13],
                        p = i[2],
                        f = i[6],
                        m = i[10],
                        g = i[14],
                        v = i[3],
                        x = i[7],
                        y = i[11],
                        _ = i[15],
                        M = n[0],
                        b = n[4],
                        w = n[8],
                        S = n[12],
                        T = n[1],
                        E = n[5],
                        L = n[9],
                        A = n[13],
                        R = n[2],
                        C = n[6],
                        P = n[10],
                        I = n[14],
                        D = n[3],
                        N = n[7],
                        z = n[11],
                        O = n[15];
                    return r[0] = a * M + s * T + o * R + l * D, r[4] = a * b + s * E + o * C + l * N, r[8] = a * w + s * L + o * P + l * z, r[12] = a * S + s * A + o * I + l * O, r[1] = h * M + u * T + c * R + d * D, r[5] = h * b + u * E + c * C + d * N, r[9] = h * w + u * L + c * P + d * z, r[13] = h * S + u * A + c * I + d * O, r[2] = p * M + f * T + m * R + g * D, r[6] = p * b + f * E + m * C + g * N, r[10] = p * w + f * L + m * P + g * z, r[14] = p * S + f * A + m * I + g * O, r[3] = v * M + x * T + y * R + _ * D, r[7] = v * b + x * E + y * C + _ * N, r[11] = v * w + x * L + y * P + _ * z, r[15] = v * S + x * A + y * I + _ * O, this
                }
                multiplyScalar(e) {
                    let t = this.elements;
                    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
                }
                determinant() {
                    let e = this.elements,
                        t = e[0],
                        i = e[4],
                        n = e[8],
                        r = e[12],
                        a = e[1],
                        s = e[5],
                        o = e[9],
                        l = e[13],
                        h = e[2],
                        u = e[6],
                        c = e[10],
                        d = e[14],
                        p = e[3],
                        f = e[7],
                        m = e[11],
                        g = e[15];
                    return p * (+r * o * u - n * l * u - r * s * c + i * l * c + n * s * d - i * o * d) + f * (+t * o * d - t * l * c + r * a * c - n * a * d + n * l * h - r * o * h) + m * (+t * l * u - t * s * d - r * a * u + i * a * d + r * s * h - i * l * h) + g * (-n * s * h - t * o * u + t * s * c + n * a * u - i * a * c + i * o * h)
                }
                transpose() {
                    let e;
                    let t = this.elements;
                    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
                }
                setPosition(e, t, i) {
                    let n = this.elements;
                    return e.isVector3 ? (n[12] = e.x, n[13] = e.y, n[14] = e.z) : (n[12] = e, n[13] = t, n[14] = i), this
                }
                invert() {
                    let e = this.elements,
                        t = e[0],
                        i = e[1],
                        n = e[2],
                        r = e[3],
                        a = e[4],
                        s = e[5],
                        o = e[6],
                        l = e[7],
                        h = e[8],
                        u = e[9],
                        c = e[10],
                        d = e[11],
                        p = e[12],
                        f = e[13],
                        m = e[14],
                        g = e[15],
                        v = u * m * l - f * c * l + f * o * d - s * m * d - u * o * g + s * c * g,
                        x = p * c * l - h * m * l - p * o * d + a * m * d + h * o * g - a * c * g,
                        y = h * f * l - p * u * l + p * s * d - a * f * d - h * s * g + a * u * g,
                        _ = p * u * o - h * f * o - p * s * c + a * f * c + h * s * m - a * u * m,
                        M = t * v + i * x + n * y + r * _;
                    if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    let b = 1 / M;
                    return e[0] = v * b, e[1] = (f * c * r - u * m * r - f * n * d + i * m * d + u * n * g - i * c * g) * b, e[2] = (s * m * r - f * o * r + f * n * l - i * m * l - s * n * g + i * o * g) * b, e[3] = (u * o * r - s * c * r - u * n * l + i * c * l + s * n * d - i * o * d) * b, e[4] = x * b, e[5] = (h * m * r - p * c * r + p * n * d - t * m * d - h * n * g + t * c * g) * b, e[6] = (p * o * r - a * m * r - p * n * l + t * m * l + a * n * g - t * o * g) * b, e[7] = (a * c * r - h * o * r + h * n * l - t * c * l - a * n * d + t * o * d) * b, e[8] = y * b, e[9] = (p * u * r - h * f * r - p * i * d + t * f * d + h * i * g - t * u * g) * b, e[10] = (a * f * r - p * s * r + p * i * l - t * f * l - a * i * g + t * s * g) * b, e[11] = (h * s * r - a * u * r - h * i * l + t * u * l + a * i * d - t * s * d) * b, e[12] = _ * b, e[13] = (h * f * n - p * u * n + p * i * c - t * f * c - h * i * m + t * u * m) * b, e[14] = (p * s * n - a * f * n - p * i * o + t * f * o + a * i * m - t * s * m) * b, e[15] = (a * u * n - h * s * n + h * i * o - t * u * o - a * i * c + t * s * c) * b, this
                }
                scale(e) {
                    let t = this.elements,
                        i = e.x,
                        n = e.y,
                        r = e.z;
                    return t[0] *= i, t[4] *= n, t[8] *= r, t[1] *= i, t[5] *= n, t[9] *= r, t[2] *= i, t[6] *= n, t[10] *= r, t[3] *= i, t[7] *= n, t[11] *= r, this
                }
                getMaxScaleOnAxis() {
                    let e = this.elements,
                        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                        i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                        n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                    return Math.sqrt(Math.max(t, i, n))
                }
                makeTranslation(e, t, i) {
                    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this
                }
                makeRotationX(e) {
                    let t = Math.cos(e),
                        i = Math.sin(e);
                    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this
                }
                makeRotationY(e) {
                    let t = Math.cos(e),
                        i = Math.sin(e);
                    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this
                }
                makeRotationZ(e) {
                    let t = Math.cos(e),
                        i = Math.sin(e);
                    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                }
                makeRotationAxis(e, t) {
                    let i = Math.cos(t),
                        n = Math.sin(t),
                        r = 1 - i,
                        a = e.x,
                        s = e.y,
                        o = e.z,
                        l = r * a,
                        h = r * s;
                    return this.set(l * a + i, l * s - n * o, l * o + n * s, 0, l * s + n * o, h * s + i, h * o - n * a, 0, l * o - n * s, h * o + n * a, r * o * o + i, 0, 0, 0, 0, 1), this
                }
                makeScale(e, t, i) {
                    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
                }
                makeShear(e, t, i, n, r, a) {
                    return this.set(1, i, r, 0, e, 1, a, 0, t, n, 1, 0, 0, 0, 0, 1), this
                }
                compose(e, t, i) {
                    let n = this.elements,
                        r = t._x,
                        a = t._y,
                        s = t._z,
                        o = t._w,
                        l = r + r,
                        h = a + a,
                        u = s + s,
                        c = r * l,
                        d = r * h,
                        p = r * u,
                        f = a * h,
                        m = a * u,
                        g = s * u,
                        v = o * l,
                        x = o * h,
                        y = o * u,
                        _ = i.x,
                        M = i.y,
                        b = i.z;
                    return n[0] = (1 - (f + g)) * _, n[1] = (d + y) * _, n[2] = (p - x) * _, n[3] = 0, n[4] = (d - y) * M, n[5] = (1 - (c + g)) * M, n[6] = (m + v) * M, n[7] = 0, n[8] = (p + x) * b, n[9] = (m - v) * b, n[10] = (1 - (c + f)) * b, n[11] = 0, n[12] = e.x, n[13] = e.y, n[14] = e.z, n[15] = 1, this
                }
                decompose(e, t, i) {
                    let n = this.elements,
                        r = eO.set(n[0], n[1], n[2]).length(),
                        a = eO.set(n[4], n[5], n[6]).length(),
                        s = eO.set(n[8], n[9], n[10]).length(),
                        o = this.determinant();
                    o < 0 && (r = -r), e.x = n[12], e.y = n[13], e.z = n[14], eF.copy(this);
                    let l = 1 / r,
                        h = 1 / a,
                        u = 1 / s;
                    return eF.elements[0] *= l, eF.elements[1] *= l, eF.elements[2] *= l, eF.elements[4] *= h, eF.elements[5] *= h, eF.elements[6] *= h, eF.elements[8] *= u, eF.elements[9] *= u, eF.elements[10] *= u, t.setFromRotationMatrix(eF), i.x = r, i.y = a, i.z = s, this
                }
                makePerspective(e, t, i, n, r, a) {
                    void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
                    let s = this.elements;
                    return s[0] = 2 * r / (t - e), s[4] = 0, s[8] = (t + e) / (t - e), s[12] = 0, s[1] = 0, s[5] = 2 * r / (i - n), s[9] = (i + n) / (i - n), s[13] = 0, s[2] = 0, s[6] = 0, s[10] = -(a + r) / (a - r), s[14] = -2 * a * r / (a - r), s[3] = 0, s[7] = 0, s[11] = -1, s[15] = 0, this
                }
                makeOrthographic(e, t, i, n, r, a) {
                    let s = this.elements,
                        o = 1 / (t - e),
                        l = 1 / (i - n),
                        h = 1 / (a - r);
                    return s[0] = 2 * o, s[4] = 0, s[8] = 0, s[12] = -((t + e) * o), s[1] = 0, s[5] = 2 * l, s[9] = 0, s[13] = -((i + n) * l), s[2] = 0, s[6] = 0, s[10] = -2 * h, s[14] = -((a + r) * h), s[3] = 0, s[7] = 0, s[11] = 0, s[15] = 1, this
                }
                equals(e) {
                    let t = this.elements,
                        i = e.elements;
                    for (let e = 0; e < 16; e++)
                        if (t[e] !== i[e]) return !1;
                    return !0
                }
                fromArray(e, t = 0) {
                    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
                    return this
                }
                toArray(e = [], t = 0) {
                    let i = this.elements;
                    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e
                }
            }
            ez.prototype.isMatrix4 = !0;
            let eO = new er,
                eF = new ez,
                eB = new er(0, 0, 0),
                eU = new er(1, 1, 1),
                eH = new er,
                eG = new er,
                eV = new er,
                ek = new ez,
                eW = new en;
            class ej {
                constructor(e = 0, t = 0, i = 0, n = ej.DefaultOrder) {
                    this._x = e, this._y = t, this._z = i, this._order = n
                }
                get x() {
                    return this._x
                }
                set x(e) {
                    this._x = e, this._onChangeCallback()
                }
                get y() {
                    return this._y
                }
                set y(e) {
                    this._y = e, this._onChangeCallback()
                }
                get z() {
                    return this._z
                }
                set z(e) {
                    this._z = e, this._onChangeCallback()
                }
                get order() {
                    return this._order
                }
                set order(e) {
                    this._order = e, this._onChangeCallback()
                }
                set(e, t, i, n = this._order) {
                    return this._x = e, this._y = t, this._z = i, this._order = n, this._onChangeCallback(), this
                }
                clone() {
                    return new this.constructor(this._x, this._y, this._z, this._order)
                }
                copy(e) {
                    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
                }
                setFromRotationMatrix(e, t = this._order, i = !0) {
                    let n = e.elements,
                        r = n[0],
                        a = n[4],
                        s = n[8],
                        o = n[1],
                        l = n[5],
                        h = n[9],
                        u = n[2],
                        c = n[6],
                        d = n[10];
                    switch (t) {
                        case "XYZ":
                            this._y = Math.asin(G(s, -1, 1)), .9999999 > Math.abs(s) ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(c, l), this._z = 0);
                            break;
                        case "YXZ":
                            this._x = Math.asin(-G(h, -1, 1)), .9999999 > Math.abs(h) ? (this._y = Math.atan2(s, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
                            break;
                        case "ZXY":
                            this._x = Math.asin(G(c, -1, 1)), .9999999 > Math.abs(c) ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                            break;
                        case "ZYX":
                            this._y = Math.asin(-G(u, -1, 1)), .9999999 > Math.abs(u) ? (this._x = Math.atan2(c, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
                            break;
                        case "YZX":
                            this._z = Math.asin(G(o, -1, 1)), .9999999 > Math.abs(o) ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(s, d));
                            break;
                        case "XZY":
                            this._z = Math.asin(-G(a, -1, 1)), .9999999 > Math.abs(a) ? (this._x = Math.atan2(c, l), this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
                            break;
                        default:
                            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
                    }
                    return this._order = t, !0 === i && this._onChangeCallback(), this
                }
                setFromQuaternion(e, t, i) {
                    return ek.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ek, t, i)
                }
                setFromVector3(e, t = this._order) {
                    return this.set(e.x, e.y, e.z, t)
                }
                reorder(e) {
                    return eW.setFromEuler(this), this.setFromQuaternion(eW, e)
                }
                equals(e) {
                    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
                }
                fromArray(e) {
                    return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._onChangeCallback(), this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
                }
                toVector3(e) {
                    return e ? e.set(this._x, this._y, this._z) : new er(this._x, this._y, this._z)
                }
                _onChange(e) {
                    return this._onChangeCallback = e, this
                }
                _onChangeCallback() {}
            }
            ej.prototype.isEuler = !0, ej.DefaultOrder = "XYZ", ej.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
            class eq {
                constructor() {
                    this.mask = 1
                }
                set(e) {
                    this.mask = 1 << e | 0
                }
                enable(e) {
                    this.mask |= 1 << e | 0
                }
                enableAll() {
                    this.mask = -1
                }
                toggle(e) {
                    this.mask ^= 1 << e | 0
                }
                disable(e) {
                    this.mask &= ~(1 << e | 0)
                }
                disableAll() {
                    this.mask = 0
                }
                test(e) {
                    return (this.mask & e.mask) != 0
                }
            }
            let eX = 0,
                eY = new er,
                eJ = new en,
                eZ = new ez,
                eQ = new er,
                eK = new er,
                e$ = new er,
                e0 = new en,
                e1 = new er(1, 0, 0),
                e3 = new er(0, 1, 0),
                e2 = new er(0, 0, 1),
                e4 = {
                    type: "added"
                },
                e5 = {
                    type: "removed"
                };
            class e6 extends z {
                constructor() {
                    super(), Object.defineProperty(this, "id", {
                        value: eX++
                    }), this.uuid = H(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e6.DefaultUp.clone();
                    let e = new er,
                        t = new ej,
                        i = new en,
                        n = new er(1, 1, 1);
                    t._onChange(function() {
                        i.setFromEuler(t, !1)
                    }), i._onChange(function() {
                        t.setFromQuaternion(i, void 0, !1)
                    }), Object.defineProperties(this, {
                        position: {
                            configurable: !0,
                            enumerable: !0,
                            value: e
                        },
                        rotation: {
                            configurable: !0,
                            enumerable: !0,
                            value: t
                        },
                        quaternion: {
                            configurable: !0,
                            enumerable: !0,
                            value: i
                        },
                        scale: {
                            configurable: !0,
                            enumerable: !0,
                            value: n
                        },
                        modelViewMatrix: {
                            value: new ez
                        },
                        normalMatrix: {
                            value: new J
                        }
                    }), this.matrix = new ez, this.matrixWorld = new ez, this.matrixAutoUpdate = e6.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new eq, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
                }
                onBeforeRender() {}
                onAfterRender() {}
                applyMatrix4(e) {
                    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
                }
                applyQuaternion(e) {
                    return this.quaternion.premultiply(e), this
                }
                setRotationFromAxisAngle(e, t) {
                    this.quaternion.setFromAxisAngle(e, t)
                }
                setRotationFromEuler(e) {
                    this.quaternion.setFromEuler(e, !0)
                }
                setRotationFromMatrix(e) {
                    this.quaternion.setFromRotationMatrix(e)
                }
                setRotationFromQuaternion(e) {
                    this.quaternion.copy(e)
                }
                rotateOnAxis(e, t) {
                    return eJ.setFromAxisAngle(e, t), this.quaternion.multiply(eJ), this
                }
                rotateOnWorldAxis(e, t) {
                    return eJ.setFromAxisAngle(e, t), this.quaternion.premultiply(eJ), this
                }
                rotateX(e) {
                    return this.rotateOnAxis(e1, e)
                }
                rotateY(e) {
                    return this.rotateOnAxis(e3, e)
                }
                rotateZ(e) {
                    return this.rotateOnAxis(e2, e)
                }
                translateOnAxis(e, t) {
                    return eY.copy(e).applyQuaternion(this.quaternion), this.position.add(eY.multiplyScalar(t)), this
                }
                translateX(e) {
                    return this.translateOnAxis(e1, e)
                }
                translateY(e) {
                    return this.translateOnAxis(e3, e)
                }
                translateZ(e) {
                    return this.translateOnAxis(e2, e)
                }
                localToWorld(e) {
                    return e.applyMatrix4(this.matrixWorld)
                }
                worldToLocal(e) {
                    return e.applyMatrix4(eZ.copy(this.matrixWorld).invert())
                }
                lookAt(e, t, i) {
                    e.isVector3 ? eQ.copy(e) : eQ.set(e, t, i);
                    let n = this.parent;
                    this.updateWorldMatrix(!0, !1), eK.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? eZ.lookAt(eK, eQ, this.up) : eZ.lookAt(eQ, eK, this.up), this.quaternion.setFromRotationMatrix(eZ), n && (eZ.extractRotation(n.matrixWorld), eJ.setFromRotationMatrix(eZ), this.quaternion.premultiply(eJ.invert()))
                }
                add(e) {
                    if (arguments.length > 1) {
                        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
                        return this
                    }
                    return e === this ? console.error("THREE.Object3D.add: object can't be added as a child of itself.", e) : e && e.isObject3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(e4)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this
                }
                remove(e) {
                    if (arguments.length > 1) {
                        for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                        return this
                    }
                    let t = this.children.indexOf(e);
                    return -1 !== t && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(e5)), this
                }
                removeFromParent() {
                    let e = this.parent;
                    return null !== e && e.remove(this), this
                }
                clear() {
                    for (let e = 0; e < this.children.length; e++) {
                        let t = this.children[e];
                        t.parent = null, t.dispatchEvent(e5)
                    }
                    return this.children.length = 0, this
                }
                attach(e) {
                    return this.updateWorldMatrix(!0, !1), eZ.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), eZ.multiply(e.parent.matrixWorld)), e.applyMatrix4(eZ), this.add(e), e.updateWorldMatrix(!1, !0), this
                }
                getObjectById(e) {
                    return this.getObjectByProperty("id", e)
                }
                getObjectByName(e) {
                    return this.getObjectByProperty("name", e)
                }
                getObjectByProperty(e, t) {
                    if (this[e] === t) return this;
                    for (let i = 0, n = this.children.length; i < n; i++) {
                        let n = this.children[i],
                            r = n.getObjectByProperty(e, t);
                        if (void 0 !== r) return r
                    }
                }
                getWorldPosition(e) {
                    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
                }
                getWorldQuaternion(e) {
                    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(eK, e, e$), e
                }
                getWorldScale(e) {
                    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(eK, e0, e), e
                }
                getWorldDirection(e) {
                    this.updateWorldMatrix(!0, !1);
                    let t = this.matrixWorld.elements;
                    return e.set(t[8], t[9], t[10]).normalize()
                }
                raycast() {}
                traverse(e) {
                    e(this);
                    let t = this.children;
                    for (let i = 0, n = t.length; i < n; i++) t[i].traverse(e)
                }
                traverseVisible(e) {
                    if (!1 === this.visible) return;
                    e(this);
                    let t = this.children;
                    for (let i = 0, n = t.length; i < n; i++) t[i].traverseVisible(e)
                }
                traverseAncestors(e) {
                    let t = this.parent;
                    null !== t && (e(t), t.traverseAncestors(e))
                }
                updateMatrix() {
                    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
                }
                updateMatrixWorld(e) {
                    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
                    let t = this.children;
                    for (let i = 0, n = t.length; i < n; i++) t[i].updateMatrixWorld(e)
                }
                updateWorldMatrix(e, t) {
                    let i = this.parent;
                    if (!0 === e && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === t) {
                        let e = this.children;
                        for (let t = 0, i = e.length; t < i; t++) e[t].updateWorldMatrix(!1, !0)
                    }
                }
                toJSON(e) {
                    let t = void 0 === e || "string" == typeof e,
                        i = {};
                    t && (e = {
                        geometries: {},
                        materials: {},
                        textures: {},
                        images: {},
                        shapes: {},
                        skeletons: {},
                        animations: {}
                    }, i.metadata = {
                        version: 4.5,
                        type: "Object",
                        generator: "Object3D.toJSON"
                    });
                    let n = {};

                    function r(t, i) {
                        return void 0 === t[i.uuid] && (t[i.uuid] = i.toJSON(e)), i.uuid
                    }
                    if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), !1 === this.frustumCulled && (n.frustumCulled = !1), 0 !== this.renderOrder && (n.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), n.layers = this.layers.mask, n.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (n.matrixAutoUpdate = !1), this.isInstancedMesh && (n.type = "InstancedMesh", n.count = this.count, n.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (n.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? n.background = this.background.toJSON() : this.background.isTexture && (n.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && (n.environment = this.environment.toJSON(e).uuid);
                    else if (this.isMesh || this.isLine || this.isPoints) {
                        n.geometry = r(e.geometries, this.geometry);
                        let t = this.geometry.parameters;
                        if (void 0 !== t && void 0 !== t.shapes) {
                            let i = t.shapes;
                            if (Array.isArray(i))
                                for (let t = 0, n = i.length; t < n; t++) {
                                    let n = i[t];
                                    r(e.shapes, n)
                                } else r(e.shapes, i)
                        }
                    }
                    if (this.isSkinnedMesh && (n.bindMode = this.bindMode, n.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(e.skeletons, this.skeleton), n.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                        if (Array.isArray(this.material)) {
                            let t = [];
                            for (let i = 0, n = this.material.length; i < n; i++) t.push(r(e.materials, this.material[i]));
                            n.material = t
                        } else n.material = r(e.materials, this.material)
                    }
                    if (this.children.length > 0) {
                        n.children = [];
                        for (let t = 0; t < this.children.length; t++) n.children.push(this.children[t].toJSON(e).object)
                    }
                    if (this.animations.length > 0) {
                        n.animations = [];
                        for (let t = 0; t < this.animations.length; t++) {
                            let i = this.animations[t];
                            n.animations.push(r(e.animations, i))
                        }
                    }
                    if (t) {
                        let t = a(e.geometries),
                            n = a(e.materials),
                            r = a(e.textures),
                            s = a(e.images),
                            o = a(e.shapes),
                            l = a(e.skeletons),
                            h = a(e.animations);
                        t.length > 0 && (i.geometries = t), n.length > 0 && (i.materials = n), r.length > 0 && (i.textures = r), s.length > 0 && (i.images = s), o.length > 0 && (i.shapes = o), l.length > 0 && (i.skeletons = l), h.length > 0 && (i.animations = h)
                    }
                    return i.object = n, i;

                    function a(e) {
                        let t = [];
                        for (let i in e) {
                            let n = e[i];
                            delete n.metadata, t.push(n)
                        }
                        return t
                    }
                }
                clone(e) {
                    return new this.constructor().copy(this, e)
                }
                copy(e, t = !0) {
                    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
                        for (let t = 0; t < e.children.length; t++) {
                            let i = e.children[t];
                            this.add(i.clone())
                        }
                    return this
                }
            }
            e6.DefaultUp = new er(0, 1, 0), e6.DefaultMatrixAutoUpdate = !0, e6.prototype.isObject3D = !0;
            let e7 = new er,
                e8 = new er,
                e9 = new er,
                te = new er,
                tt = new er,
                ti = new er,
                tn = new er,
                tr = new er,
                ta = new er,
                ts = new er;
            class to {
                constructor(e = new er, t = new er, i = new er) {
                    this.a = e, this.b = t, this.c = i
                }
                static getNormal(e, t, i, n) {
                    n.subVectors(i, t), e7.subVectors(e, t), n.cross(e7);
                    let r = n.lengthSq();
                    return r > 0 ? n.multiplyScalar(1 / Math.sqrt(r)) : n.set(0, 0, 0)
                }
                static getBarycoord(e, t, i, n, r) {
                    e7.subVectors(n, t), e8.subVectors(i, t), e9.subVectors(e, t);
                    let a = e7.dot(e7),
                        s = e7.dot(e8),
                        o = e7.dot(e9),
                        l = e8.dot(e8),
                        h = e8.dot(e9),
                        u = a * l - s * s;
                    if (0 === u) return r.set(-2, -1, -1);
                    let c = 1 / u,
                        d = (l * o - s * h) * c,
                        p = (a * h - s * o) * c;
                    return r.set(1 - d - p, p, d)
                }
                static containsPoint(e, t, i, n) {
                    return this.getBarycoord(e, t, i, n, te), te.x >= 0 && te.y >= 0 && te.x + te.y <= 1
                }
                static getUV(e, t, i, n, r, a, s, o) {
                    return this.getBarycoord(e, t, i, n, te), o.set(0, 0), o.addScaledVector(r, te.x), o.addScaledVector(a, te.y), o.addScaledVector(s, te.z), o
                }
                static isFrontFacing(e, t, i, n) {
                    return e7.subVectors(i, t), e8.subVectors(e, t), 0 > e7.cross(e8).dot(n)
                }
                set(e, t, i) {
                    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this
                }
                setFromPointsAndIndices(e, t, i, n) {
                    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[n]), this
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
                }
                getArea() {
                    return e7.subVectors(this.c, this.b), e8.subVectors(this.a, this.b), .5 * e7.cross(e8).length()
                }
                getMidpoint(e) {
                    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
                }
                getNormal(e) {
                    return to.getNormal(this.a, this.b, this.c, e)
                }
                getPlane(e) {
                    return e.setFromCoplanarPoints(this.a, this.b, this.c)
                }
                getBarycoord(e, t) {
                    return to.getBarycoord(e, this.a, this.b, this.c, t)
                }
                getUV(e, t, i, n, r) {
                    return to.getUV(e, this.a, this.b, this.c, t, i, n, r)
                }
                containsPoint(e) {
                    return to.containsPoint(e, this.a, this.b, this.c)
                }
                isFrontFacing(e) {
                    return to.isFrontFacing(this.a, this.b, this.c, e)
                }
                intersectsBox(e) {
                    return e.intersectsTriangle(this)
                }
                closestPointToPoint(e, t) {
                    let i, n;
                    let r = this.a,
                        a = this.b,
                        s = this.c;
                    tt.subVectors(a, r), ti.subVectors(s, r), tr.subVectors(e, r);
                    let o = tt.dot(tr),
                        l = ti.dot(tr);
                    if (o <= 0 && l <= 0) return t.copy(r);
                    ta.subVectors(e, a);
                    let h = tt.dot(ta),
                        u = ti.dot(ta);
                    if (h >= 0 && u <= h) return t.copy(a);
                    let c = o * u - h * l;
                    if (c <= 0 && o >= 0 && h <= 0) return i = o / (o - h), t.copy(r).addScaledVector(tt, i);
                    ts.subVectors(e, s);
                    let d = tt.dot(ts),
                        p = ti.dot(ts);
                    if (p >= 0 && d <= p) return t.copy(s);
                    let f = d * l - o * p;
                    if (f <= 0 && l >= 0 && p <= 0) return n = l / (l - p), t.copy(r).addScaledVector(ti, n);
                    let m = h * p - d * u;
                    if (m <= 0 && u - h >= 0 && d - p >= 0) return tn.subVectors(s, a), n = (u - h) / (u - h + (d - p)), t.copy(a).addScaledVector(tn, n);
                    let g = 1 / (m + f + c);
                    return i = f * g, n = c * g, t.copy(r).addScaledVector(tt, i).addScaledVector(ti, n)
                }
                equals(e) {
                    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
                }
            }
            let tl = 0;
            class th extends z {
                constructor() {
                    super(), Object.defineProperty(this, "id", {
                        value: tl++
                    }), this.uuid = H(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = s, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
                }
                onBuild() {}
                onBeforeCompile() {}
                customProgramCacheKey() {
                    return this.onBeforeCompile.toString()
                }
                setValues(e) {
                    if (void 0 !== e)
                        for (let t in e) {
                            let i = e[t];
                            if (void 0 === i) {
                                console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                                continue
                            }
                            if ("shading" === t) {
                                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
                                continue
                            }
                            let n = this[t];
                            if (void 0 === n) {
                                console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
                                continue
                            }
                            n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = i
                        }
                }
                toJSON(e) {
                    let t = void 0 === e || "string" == typeof e;
                    t && (e = {
                        textures: {},
                        images: {}
                    });
                    let i = {
                        metadata: {
                            version: 4.5,
                            type: "Material",
                            generator: "Material.toJSON"
                        }
                    };

                    function n(e) {
                        let t = [];
                        for (let i in e) {
                            let n = e[i];
                            delete n.metadata, t.push(n)
                        }
                        return t
                    }
                    if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), void 0 !== this.roughness && (i.roughness = this.roughness), void 0 !== this.metalness && (i.metalness = this.metalness), this.sheen && this.sheen.isColor && (i.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (i.specularIntensity = this.specularIntensity), this.specularTint && this.specularTint.isColor && (i.specularTint = this.specularTint.getHex()), void 0 !== this.shininess && (i.shininess = this.shininess), void 0 !== this.clearcoat && (i.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularTintMap && this.specularTintMap.isTexture && (i.specularTintMap = this.specularTintMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, void 0 !== this.combine && (i.combine = this.combine)), void 0 !== this.envMapIntensity && (i.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (i.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.transmission && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), void 0 !== this.thickness && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), void 0 !== this.attenuationDistance && (i.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationTint && (i.attenuationTint = this.attenuationTint.getHex()), void 0 !== this.size && (i.size = this.size), null !== this.shadowSide && (i.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (i.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (i.blending = this.blending), this.side !== s && (i.side = this.side), this.vertexColors && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), !0 === this.transparent && (i.transparent = this.transparent), i.depthFunc = this.depthFunc, i.depthTest = this.depthTest, i.depthWrite = this.depthWrite, i.colorWrite = this.colorWrite, i.stencilWrite = this.stencilWrite, i.stencilWriteMask = this.stencilWriteMask, i.stencilFunc = this.stencilFunc, i.stencilRef = this.stencilRef, i.stencilFuncMask = this.stencilFuncMask, i.stencilFail = this.stencilFail, i.stencilZFail = this.stencilZFail, i.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (i.rotation = this.rotation), !0 === this.polygonOffset && (i.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (i.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (i.linewidth = this.linewidth), void 0 !== this.dashSize && (i.dashSize = this.dashSize), void 0 !== this.gapSize && (i.gapSize = this.gapSize), void 0 !== this.scale && (i.scale = this.scale), !0 === this.dithering && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), !0 === this.alphaToCoverage && (i.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (i.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (i.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (i.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (i.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (i.flatShading = this.flatShading), !1 === this.visible && (i.visible = !1), !1 === this.toneMapped && (i.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), t) {
                        let t = n(e.textures),
                            r = n(e.images);
                        t.length > 0 && (i.textures = t), r.length > 0 && (i.images = r)
                    }
                    return i
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    this.name = e.name, this.fog = e.fog, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
                    let t = e.clippingPlanes,
                        i = null;
                    if (null !== t) {
                        let e = t.length;
                        i = Array(e);
                        for (let n = 0; n !== e; ++n) i[n] = t[n].clone()
                    }
                    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
                set needsUpdate(e) {
                    !0 === e && this.version++
                }
            }
            th.prototype.isMaterial = !0;
            let tu = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                },
                tc = {
                    h: 0,
                    s: 0,
                    l: 0
                },
                td = {
                    h: 0,
                    s: 0,
                    l: 0
                };

            function tp(e, t, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - i) : e
            }

            function tf(e) {
                return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
            }

            function tm(e) {
                return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
            }
            class tg {
                constructor(e, t, i) {
                    if (void 0 === t && void 0 === i) return this.set(e);
                    return this.setRGB(e, t, i)
                }
                set(e) {
                    return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
                }
                setScalar(e) {
                    return this.r = e, this.g = e, this.b = e, this
                }
                setHex(e) {
                    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
                }
                setRGB(e, t, i) {
                    return this.r = e, this.g = t, this.b = i, this
                }
                setHSL(e, t, i) {
                    if (e = V(e, 1), t = G(t, 0, 1), i = G(i, 0, 1), 0 === t) this.r = this.g = this.b = i;
                    else {
                        let n = i <= .5 ? i * (1 + t) : i + t - i * t,
                            r = 2 * i - n;
                        this.r = tp(r, n, e + 1 / 3), this.g = tp(r, n, e), this.b = tp(r, n, e - 1 / 3)
                    }
                    return this
                }
                setStyle(e) {
                    let t;

                    function i(t) {
                        void 0 !== t && 1 > parseFloat(t) && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
                    }
                    if (t = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
                        let e;
                        let n = t[1],
                            r = t[2];
                        switch (n) {
                            case "rgb":
                            case "rgba":
                                if (e = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(e[1], 10)) / 255, this.g = Math.min(255, parseInt(e[2], 10)) / 255, this.b = Math.min(255, parseInt(e[3], 10)) / 255, i(e[4]), this;
                                if (e = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(e[1], 10)) / 100, this.g = Math.min(100, parseInt(e[2], 10)) / 100, this.b = Math.min(100, parseInt(e[3], 10)) / 100, i(e[4]), this;
                                break;
                            case "hsl":
                            case "hsla":
                                if (e = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                                    let t = parseFloat(e[1]) / 360,
                                        n = parseInt(e[2], 10) / 100,
                                        r = parseInt(e[3], 10) / 100;
                                    return i(e[4]), this.setHSL(t, n, r)
                                }
                        }
                    } else if (t = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                        let e = t[1],
                            i = e.length;
                        if (3 === i) return this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255, this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255, this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255, this;
                        if (6 === i) return this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255, this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255, this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255, this
                    }
                    return e && e.length > 0 ? this.setColorName(e) : this
                }
                setColorName(e) {
                    let t = tu[e.toLowerCase()];
                    return void 0 !== t ? this.setHex(t) : console.warn("THREE.Color: Unknown color " + e), this
                }
                clone() {
                    return new this.constructor(this.r, this.g, this.b)
                }
                copy(e) {
                    return this.r = e.r, this.g = e.g, this.b = e.b, this
                }
                copyGammaToLinear(e, t = 2) {
                    return this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
                }
                copyLinearToGamma(e, t = 2) {
                    let i = t > 0 ? 1 / t : 1;
                    return this.r = Math.pow(e.r, i), this.g = Math.pow(e.g, i), this.b = Math.pow(e.b, i), this
                }
                convertGammaToLinear(e) {
                    return this.copyGammaToLinear(this, e), this
                }
                convertLinearToGamma(e) {
                    return this.copyLinearToGamma(this, e), this
                }
                copySRGBToLinear(e) {
                    return this.r = tf(e.r), this.g = tf(e.g), this.b = tf(e.b), this
                }
                copyLinearToSRGB(e) {
                    return this.r = tm(e.r), this.g = tm(e.g), this.b = tm(e.b), this
                }
                convertSRGBToLinear() {
                    return this.copySRGBToLinear(this), this
                }
                convertLinearToSRGB() {
                    return this.copyLinearToSRGB(this), this
                }
                getHex() {
                    return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
                }
                getHexString() {
                    return ("000000" + this.getHex().toString(16)).slice(-6)
                }
                getHSL(e) {
                    let t, i;
                    let n = this.r,
                        r = this.g,
                        a = this.b,
                        s = Math.max(n, r, a),
                        o = Math.min(n, r, a),
                        l = (o + s) / 2;
                    if (o === s) t = 0, i = 0;
                    else {
                        let e = s - o;
                        switch (i = l <= .5 ? e / (s + o) : e / (2 - s - o), s) {
                            case n:
                                t = (r - a) / e + (r < a ? 6 : 0);
                                break;
                            case r:
                                t = (a - n) / e + 2;
                                break;
                            case a:
                                t = (n - r) / e + 4
                        }
                        t /= 6
                    }
                    return e.h = t, e.s = i, e.l = l, e
                }
                getStyle() {
                    return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
                }
                offsetHSL(e, t, i) {
                    return this.getHSL(tc), tc.h += e, tc.s += t, tc.l += i, this.setHSL(tc.h, tc.s, tc.l), this
                }
                add(e) {
                    return this.r += e.r, this.g += e.g, this.b += e.b, this
                }
                addColors(e, t) {
                    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
                }
                addScalar(e) {
                    return this.r += e, this.g += e, this.b += e, this
                }
                sub(e) {
                    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
                }
                multiply(e) {
                    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
                }
                multiplyScalar(e) {
                    return this.r *= e, this.g *= e, this.b *= e, this
                }
                lerp(e, t) {
                    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
                }
                lerpColors(e, t, i) {
                    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this
                }
                lerpHSL(e, t) {
                    this.getHSL(tc), e.getHSL(td);
                    let i = k(tc.h, td.h, t),
                        n = k(tc.s, td.s, t),
                        r = k(tc.l, td.l, t);
                    return this.setHSL(i, n, r), this
                }
                equals(e) {
                    return e.r === this.r && e.g === this.g && e.b === this.b
                }
                fromArray(e, t = 0) {
                    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
                }
                toArray(e = [], t = 0) {
                    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
                }
                fromBufferAttribute(e, t) {
                    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), !0 === e.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this
                }
                toJSON() {
                    return this.getHex()
                }
            }
            tg.NAMES = tu, tg.prototype.isColor = !0, tg.prototype.r = 1, tg.prototype.g = 1, tg.prototype.b = 1;
            class tv extends th {
                constructor(e) {
                    super(), this.type = "MeshBasicMaterial", this.color = new tg(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
                }
            }
            tv.prototype.isMeshBasicMaterial = !0;
            let tx = new er,
                ty = new Y;
            class t_ {
                constructor(e, t, i) {
                    if (Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                    this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = !0 === i, this.usage = 35044, this.updateRange = {
                        offset: 0,
                        count: -1
                    }, this.version = 0
                }
                onUploadCallback() {}
                set needsUpdate(e) {
                    !0 === e && this.version++
                }
                setUsage(e) {
                    return this.usage = e, this
                }
                copy(e) {
                    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this
                }
                copyAt(e, t, i) {
                    e *= this.itemSize, i *= t.itemSize;
                    for (let n = 0, r = this.itemSize; n < r; n++) this.array[e + n] = t.array[i + n];
                    return this
                }
                copyArray(e) {
                    return this.array.set(e), this
                }
                copyColorsArray(e) {
                    let t = this.array,
                        i = 0;
                    for (let n = 0, r = e.length; n < r; n++) {
                        let r = e[n];
                        void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), r = new tg), t[i++] = r.r, t[i++] = r.g, t[i++] = r.b
                    }
                    return this
                }
                copyVector2sArray(e) {
                    let t = this.array,
                        i = 0;
                    for (let n = 0, r = e.length; n < r; n++) {
                        let r = e[n];
                        void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), r = new Y), t[i++] = r.x, t[i++] = r.y
                    }
                    return this
                }
                copyVector3sArray(e) {
                    let t = this.array,
                        i = 0;
                    for (let n = 0, r = e.length; n < r; n++) {
                        let r = e[n];
                        void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), r = new er), t[i++] = r.x, t[i++] = r.y, t[i++] = r.z
                    }
                    return this
                }
                copyVector4sArray(e) {
                    let t = this.array,
                        i = 0;
                    for (let n = 0, r = e.length; n < r; n++) {
                        let r = e[n];
                        void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), r = new ee), t[i++] = r.x, t[i++] = r.y, t[i++] = r.z, t[i++] = r.w
                    }
                    return this
                }
                applyMatrix3(e) {
                    if (2 === this.itemSize)
                        for (let t = 0, i = this.count; t < i; t++) ty.fromBufferAttribute(this, t), ty.applyMatrix3(e), this.setXY(t, ty.x, ty.y);
                    else if (3 === this.itemSize)
                        for (let t = 0, i = this.count; t < i; t++) tx.fromBufferAttribute(this, t), tx.applyMatrix3(e), this.setXYZ(t, tx.x, tx.y, tx.z);
                    return this
                }
                applyMatrix4(e) {
                    for (let t = 0, i = this.count; t < i; t++) tx.x = this.getX(t), tx.y = this.getY(t), tx.z = this.getZ(t), tx.applyMatrix4(e), this.setXYZ(t, tx.x, tx.y, tx.z);
                    return this
                }
                applyNormalMatrix(e) {
                    for (let t = 0, i = this.count; t < i; t++) tx.x = this.getX(t), tx.y = this.getY(t), tx.z = this.getZ(t), tx.applyNormalMatrix(e), this.setXYZ(t, tx.x, tx.y, tx.z);
                    return this
                }
                transformDirection(e) {
                    for (let t = 0, i = this.count; t < i; t++) tx.x = this.getX(t), tx.y = this.getY(t), tx.z = this.getZ(t), tx.transformDirection(e), this.setXYZ(t, tx.x, tx.y, tx.z);
                    return this
                }
                set(e, t = 0) {
                    return this.array.set(e, t), this
                }
                getX(e) {
                    return this.array[e * this.itemSize]
                }
                setX(e, t) {
                    return this.array[e * this.itemSize] = t, this
                }
                getY(e) {
                    return this.array[e * this.itemSize + 1]
                }
                setY(e, t) {
                    return this.array[e * this.itemSize + 1] = t, this
                }
                getZ(e) {
                    return this.array[e * this.itemSize + 2]
                }
                setZ(e, t) {
                    return this.array[e * this.itemSize + 2] = t, this
                }
                getW(e) {
                    return this.array[e * this.itemSize + 3]
                }
                setW(e, t) {
                    return this.array[e * this.itemSize + 3] = t, this
                }
                setXY(e, t, i) {
                    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this
                }
                setXYZ(e, t, i, n) {
                    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this
                }
                setXYZW(e, t, i, n, r) {
                    return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = n, this.array[e + 3] = r, this
                }
                onUpload(e) {
                    return this.onUploadCallback = e, this
                }
                clone() {
                    return new this.constructor(this.array, this.itemSize).copy(this)
                }
                toJSON() {
                    let e = {
                        itemSize: this.itemSize,
                        type: this.array.constructor.name,
                        array: Array.prototype.slice.call(this.array),
                        normalized: this.normalized
                    };
                    return "" !== this.name && (e.name = this.name), 35044 !== this.usage && (e.usage = this.usage), (0 !== this.updateRange.offset || -1 !== this.updateRange.count) && (e.updateRange = this.updateRange), e
                }
            }
            t_.prototype.isBufferAttribute = !0;
            class tM extends t_ {
                constructor(e, t, i) {
                    super(new Uint16Array(e), t, i)
                }
            }
            class tb extends t_ {
                constructor(e, t, i) {
                    super(new Uint32Array(e), t, i)
                }
            }(class extends t_ {
                constructor(e, t, i) {
                    super(new Uint16Array(e), t, i)
                }
            }).prototype.isFloat16BufferAttribute = !0;
            class tw extends t_ {
                constructor(e, t, i) {
                    super(new Float32Array(e), t, i)
                }
            }

            function tS(e) {
                if (0 === e.length) return -1 / 0;
                let t = e[0];
                for (let i = 1, n = e.length; i < n; ++i) e[i] > t && (t = e[i]);
                return t
            }
            Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
            let tT = 0,
                tE = new ez,
                tL = new e6,
                tA = new er,
                tR = new eo,
                tC = new eo,
                tP = new er;
            class tI extends z {
                constructor() {
                    super(), Object.defineProperty(this, "id", {
                        value: tT++
                    }), this.uuid = H(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                        start: 0,
                        count: 1 / 0
                    }, this.userData = {}
                }
                getIndex() {
                    return this.index
                }
                setIndex(e) {
                    return Array.isArray(e) ? this.index = new(tS(e) > 65535 ? tb : tM)(e, 1) : this.index = e, this
                }
                getAttribute(e) {
                    return this.attributes[e]
                }
                setAttribute(e, t) {
                    return this.attributes[e] = t, this
                }
                deleteAttribute(e) {
                    return delete this.attributes[e], this
                }
                hasAttribute(e) {
                    return void 0 !== this.attributes[e]
                }
                addGroup(e, t, i = 0) {
                    this.groups.push({
                        start: e,
                        count: t,
                        materialIndex: i
                    })
                }
                clearGroups() {
                    this.groups = []
                }
                setDrawRange(e, t) {
                    this.drawRange.start = e, this.drawRange.count = t
                }
                applyMatrix4(e) {
                    let t = this.attributes.position;
                    void 0 !== t && (t.applyMatrix4(e), t.needsUpdate = !0);
                    let i = this.attributes.normal;
                    if (void 0 !== i) {
                        let t = new J().getNormalMatrix(e);
                        i.applyNormalMatrix(t), i.needsUpdate = !0
                    }
                    let n = this.attributes.tangent;
                    return void 0 !== n && (n.transformDirection(e), n.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                }
                applyQuaternion(e) {
                    return tE.makeRotationFromQuaternion(e), this.applyMatrix4(tE), this
                }
                rotateX(e) {
                    return tE.makeRotationX(e), this.applyMatrix4(tE), this
                }
                rotateY(e) {
                    return tE.makeRotationY(e), this.applyMatrix4(tE), this
                }
                rotateZ(e) {
                    return tE.makeRotationZ(e), this.applyMatrix4(tE), this
                }
                translate(e, t, i) {
                    return tE.makeTranslation(e, t, i), this.applyMatrix4(tE), this
                }
                scale(e, t, i) {
                    return tE.makeScale(e, t, i), this.applyMatrix4(tE), this
                }
                lookAt(e) {
                    return tL.lookAt(e), tL.updateMatrix(), this.applyMatrix4(tL.matrix), this
                }
                center() {
                    return this.computeBoundingBox(), this.boundingBox.getCenter(tA).negate(), this.translate(tA.x, tA.y, tA.z), this
                }
                setFromPoints(e) {
                    let t = [];
                    for (let i = 0, n = e.length; i < n; i++) {
                        let n = e[i];
                        t.push(n.x, n.y, n.z || 0)
                    }
                    return this.setAttribute("position", new tw(t, 3)), this
                }
                computeBoundingBox() {
                    null === this.boundingBox && (this.boundingBox = new eo);
                    let e = this.attributes.position,
                        t = this.morphAttributes.position;
                    if (e && e.isGLBufferAttribute) {
                        console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(new er(-1 / 0, -1 / 0, -1 / 0), new er(Infinity, Infinity, Infinity));
                        return
                    }
                    if (void 0 !== e) {
                        if (this.boundingBox.setFromBufferAttribute(e), t)
                            for (let e = 0, i = t.length; e < i; e++) {
                                let i = t[e];
                                tR.setFromBufferAttribute(i), this.morphTargetsRelative ? (tP.addVectors(this.boundingBox.min, tR.min), this.boundingBox.expandByPoint(tP), tP.addVectors(this.boundingBox.max, tR.max), this.boundingBox.expandByPoint(tP)) : (this.boundingBox.expandByPoint(tR.min), this.boundingBox.expandByPoint(tR.max))
                            }
                    } else this.boundingBox.makeEmpty();
                    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
                }
                computeBoundingSphere() {
                    null === this.boundingSphere && (this.boundingSphere = new eE);
                    let e = this.attributes.position,
                        t = this.morphAttributes.position;
                    if (e && e.isGLBufferAttribute) {
                        console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new er, 1 / 0);
                        return
                    }
                    if (e) {
                        let i = this.boundingSphere.center;
                        if (tR.setFromBufferAttribute(e), t)
                            for (let e = 0, i = t.length; e < i; e++) {
                                let i = t[e];
                                tC.setFromBufferAttribute(i), this.morphTargetsRelative ? (tP.addVectors(tR.min, tC.min), tR.expandByPoint(tP), tP.addVectors(tR.max, tC.max), tR.expandByPoint(tP)) : (tR.expandByPoint(tC.min), tR.expandByPoint(tC.max))
                            }
                        tR.getCenter(i);
                        let n = 0;
                        for (let t = 0, r = e.count; t < r; t++) tP.fromBufferAttribute(e, t), n = Math.max(n, i.distanceToSquared(tP));
                        if (t)
                            for (let r = 0, a = t.length; r < a; r++) {
                                let a = t[r],
                                    s = this.morphTargetsRelative;
                                for (let t = 0, r = a.count; t < r; t++) tP.fromBufferAttribute(a, t), s && (tA.fromBufferAttribute(e, t), tP.add(tA)), n = Math.max(n, i.distanceToSquared(tP))
                            }
                        this.boundingSphere.radius = Math.sqrt(n), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                    }
                }
                computeFaceNormals() {}
                computeTangents() {
                    let e = this.index,
                        t = this.attributes;
                    if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) {
                        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                        return
                    }
                    let i = e.array,
                        n = t.position.array,
                        r = t.normal.array,
                        a = t.uv.array,
                        s = n.length / 3;
                    void 0 === t.tangent && this.setAttribute("tangent", new t_(new Float32Array(4 * s), 4));
                    let o = t.tangent.array,
                        l = [],
                        h = [];
                    for (let e = 0; e < s; e++) l[e] = new er, h[e] = new er;
                    let u = new er,
                        c = new er,
                        d = new er,
                        p = new Y,
                        f = new Y,
                        m = new Y,
                        g = new er,
                        v = new er,
                        x = this.groups;
                    0 === x.length && (x = [{
                        start: 0,
                        count: i.length
                    }]);
                    for (let e = 0, t = x.length; e < t; ++e) {
                        let t = x[e],
                            r = t.start,
                            s = t.count;
                        for (let e = r, t = r + s; e < t; e += 3) ! function(e, t, i) {
                            u.fromArray(n, 3 * e), c.fromArray(n, 3 * t), d.fromArray(n, 3 * i), p.fromArray(a, 2 * e), f.fromArray(a, 2 * t), m.fromArray(a, 2 * i), c.sub(u), d.sub(u), f.sub(p), m.sub(p);
                            let r = 1 / (f.x * m.y - m.x * f.y);
                            isFinite(r) && (g.copy(c).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), v.copy(d).multiplyScalar(f.x).addScaledVector(c, -m.x).multiplyScalar(r), l[e].add(g), l[t].add(g), l[i].add(g), h[e].add(v), h[t].add(v), h[i].add(v))
                        }(i[e + 0], i[e + 1], i[e + 2])
                    }
                    let y = new er,
                        _ = new er,
                        M = new er,
                        b = new er;

                    function w(e) {
                        M.fromArray(r, 3 * e), b.copy(M);
                        let t = l[e];
                        y.copy(t), y.sub(M.multiplyScalar(M.dot(t))).normalize(), _.crossVectors(b, t);
                        let i = _.dot(h[e]);
                        o[4 * e] = y.x, o[4 * e + 1] = y.y, o[4 * e + 2] = y.z, o[4 * e + 3] = i < 0 ? -1 : 1
                    }
                    for (let e = 0, t = x.length; e < t; ++e) {
                        let t = x[e],
                            n = t.start,
                            r = t.count;
                        for (let e = n, t = n + r; e < t; e += 3) w(i[e + 0]), w(i[e + 1]), w(i[e + 2])
                    }
                }
                computeVertexNormals() {
                    let e = this.index,
                        t = this.getAttribute("position");
                    if (void 0 !== t) {
                        let i = this.getAttribute("normal");
                        if (void 0 === i) i = new t_(new Float32Array(3 * t.count), 3), this.setAttribute("normal", i);
                        else
                            for (let e = 0, t = i.count; e < t; e++) i.setXYZ(e, 0, 0, 0);
                        let n = new er,
                            r = new er,
                            a = new er,
                            s = new er,
                            o = new er,
                            l = new er,
                            h = new er,
                            u = new er;
                        if (e)
                            for (let c = 0, d = e.count; c < d; c += 3) {
                                let d = e.getX(c + 0),
                                    p = e.getX(c + 1),
                                    f = e.getX(c + 2);
                                n.fromBufferAttribute(t, d), r.fromBufferAttribute(t, p), a.fromBufferAttribute(t, f), h.subVectors(a, r), u.subVectors(n, r), h.cross(u), s.fromBufferAttribute(i, d), o.fromBufferAttribute(i, p), l.fromBufferAttribute(i, f), s.add(h), o.add(h), l.add(h), i.setXYZ(d, s.x, s.y, s.z), i.setXYZ(p, o.x, o.y, o.z), i.setXYZ(f, l.x, l.y, l.z)
                            } else
                                for (let e = 0, s = t.count; e < s; e += 3) n.fromBufferAttribute(t, e + 0), r.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), h.subVectors(a, r), u.subVectors(n, r), h.cross(u), i.setXYZ(e + 0, h.x, h.y, h.z), i.setXYZ(e + 1, h.x, h.y, h.z), i.setXYZ(e + 2, h.x, h.y, h.z);
                        this.normalizeNormals(), i.needsUpdate = !0
                    }
                }
                merge(e, t) {
                    if (!(e && e.isBufferGeometry)) {
                        console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
                        return
                    }
                    void 0 === t && (t = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
                    let i = this.attributes;
                    for (let n in i) {
                        if (void 0 === e.attributes[n]) continue;
                        let r = i[n],
                            a = r.array,
                            s = e.attributes[n],
                            o = s.array,
                            l = s.itemSize * t,
                            h = Math.min(o.length, a.length - l);
                        for (let e = 0, t = l; e < h; e++, t++) a[t] = o[e]
                    }
                    return this
                }
                normalizeNormals() {
                    let e = this.attributes.normal;
                    for (let t = 0, i = e.count; t < i; t++) tP.fromBufferAttribute(e, t), tP.normalize(), e.setXYZ(t, tP.x, tP.y, tP.z)
                }
                toNonIndexed() {
                    function e(e, t) {
                        let i = e.array,
                            n = e.itemSize,
                            r = e.normalized,
                            a = new i.constructor(t.length * n),
                            s = 0,
                            o = 0;
                        for (let r = 0, l = t.length; r < l; r++) {
                            s = e.isInterleavedBufferAttribute ? t[r] * e.data.stride + e.offset : t[r] * n;
                            for (let e = 0; e < n; e++) a[o++] = i[s++]
                        }
                        return new t_(a, n, r)
                    }
                    if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
                    let t = new tI,
                        i = this.index.array,
                        n = this.attributes;
                    for (let r in n) {
                        let a = n[r],
                            s = e(a, i);
                        t.setAttribute(r, s)
                    }
                    let r = this.morphAttributes;
                    for (let n in r) {
                        let a = [],
                            s = r[n];
                        for (let t = 0, n = s.length; t < n; t++) {
                            let n = s[t],
                                r = e(n, i);
                            a.push(r)
                        }
                        t.morphAttributes[n] = a
                    }
                    t.morphTargetsRelative = this.morphTargetsRelative;
                    let a = this.groups;
                    for (let e = 0, i = a.length; e < i; e++) {
                        let i = a[e];
                        t.addGroup(i.start, i.count, i.materialIndex)
                    }
                    return t
                }
                toJSON() {
                    let e = {
                        metadata: {
                            version: 4.5,
                            type: "BufferGeometry",
                            generator: "BufferGeometry.toJSON"
                        }
                    };
                    if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
                        let t = this.parameters;
                        for (let i in t) void 0 !== t[i] && (e[i] = t[i]);
                        return e
                    }
                    e.data = {
                        attributes: {}
                    };
                    let t = this.index;
                    null !== t && (e.data.index = {
                        type: t.array.constructor.name,
                        array: Array.prototype.slice.call(t.array)
                    });
                    let i = this.attributes;
                    for (let t in i) {
                        let n = i[t];
                        e.data.attributes[t] = n.toJSON(e.data)
                    }
                    let n = {},
                        r = !1;
                    for (let t in this.morphAttributes) {
                        let i = this.morphAttributes[t],
                            a = [];
                        for (let t = 0, n = i.length; t < n; t++) {
                            let n = i[t];
                            a.push(n.toJSON(e.data))
                        }
                        a.length > 0 && (n[t] = a, r = !0)
                    }
                    r && (e.data.morphAttributes = n, e.data.morphTargetsRelative = this.morphTargetsRelative);
                    let a = this.groups;
                    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
                    let s = this.boundingSphere;
                    return null !== s && (e.data.boundingSphere = {
                        center: s.center.toArray(),
                        radius: s.radius
                    }), e
                }
                clone() {
                    return new tI().copy(this)
                }
                copy(e) {
                    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
                    let t = {};
                    this.name = e.name;
                    let i = e.index;
                    null !== i && this.setIndex(i.clone(t));
                    let n = e.attributes;
                    for (let e in n) {
                        let i = n[e];
                        this.setAttribute(e, i.clone(t))
                    }
                    let r = e.morphAttributes;
                    for (let e in r) {
                        let i = [],
                            n = r[e];
                        for (let e = 0, r = n.length; e < r; e++) i.push(n[e].clone(t));
                        this.morphAttributes[e] = i
                    }
                    this.morphTargetsRelative = e.morphTargetsRelative;
                    let a = e.groups;
                    for (let e = 0, t = a.length; e < t; e++) {
                        let t = a[e];
                        this.addGroup(t.start, t.count, t.materialIndex)
                    }
                    let s = e.boundingBox;
                    null !== s && (this.boundingBox = s.clone());
                    let o = e.boundingSphere;
                    return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
                }
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }
            tI.prototype.isBufferGeometry = !0;
            let tD = new ez,
                tN = new eN,
                tz = new eE,
                tO = new er,
                tF = new er,
                tB = new er,
                tU = new er,
                tH = new er,
                tG = new er,
                tV = new er,
                tk = new er,
                tW = new er,
                tj = new Y,
                tq = new Y,
                tX = new Y,
                tY = new er,
                tJ = new er;
            class tZ extends e6 {
                constructor(e = new tI, t = new tv) {
                    super(), this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
                }
                copy(e) {
                    return super.copy(e), void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this
                }
                updateMorphTargets() {
                    let e = this.geometry;
                    if (e.isBufferGeometry) {
                        let t = e.morphAttributes,
                            i = Object.keys(t);
                        if (i.length > 0) {
                            let e = t[i[0]];
                            if (void 0 !== e) {
                                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                                for (let t = 0, i = e.length; t < i; t++) {
                                    let i = e[t].name || String(t);
                                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
                                }
                            }
                        }
                    } else {
                        let t = e.morphTargets;
                        void 0 !== t && t.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                    }
                }
                raycast(e, t) {
                    let i;
                    let n = this.geometry,
                        r = this.material,
                        a = this.matrixWorld;
                    if (void 0 !== r && (null === n.boundingSphere && n.computeBoundingSphere(), tz.copy(n.boundingSphere), tz.applyMatrix4(a), !1 !== e.ray.intersectsSphere(tz))) {
                        if (tD.copy(a).invert(), tN.copy(e.ray).applyMatrix4(tD), null !== n.boundingBox && !1 === tN.intersectsBox(n.boundingBox)) return;
                        if (n.isBufferGeometry) {
                            let a = n.index,
                                s = n.attributes.position,
                                o = n.morphAttributes.position,
                                l = n.morphTargetsRelative,
                                h = n.attributes.uv,
                                u = n.attributes.uv2,
                                c = n.groups,
                                d = n.drawRange;
                            if (null !== a) {
                                if (Array.isArray(r))
                                    for (let n = 0, p = c.length; n < p; n++) {
                                        let p = c[n],
                                            f = r[p.materialIndex],
                                            m = Math.max(p.start, d.start),
                                            g = Math.min(p.start + p.count, d.start + d.count);
                                        for (let n = m; n < g; n += 3) {
                                            let r = a.getX(n),
                                                c = a.getX(n + 1),
                                                d = a.getX(n + 2);
                                            (i = tQ(this, f, e, tN, s, o, l, h, u, r, c, d)) && (i.faceIndex = Math.floor(n / 3), i.face.materialIndex = p.materialIndex, t.push(i))
                                        }
                                    } else {
                                        let n = Math.max(0, d.start),
                                            c = Math.min(a.count, d.start + d.count);
                                        for (let d = n; d < c; d += 3) {
                                            let n = a.getX(d),
                                                c = a.getX(d + 1),
                                                p = a.getX(d + 2);
                                            (i = tQ(this, r, e, tN, s, o, l, h, u, n, c, p)) && (i.faceIndex = Math.floor(d / 3), t.push(i))
                                        }
                                    }
                            } else if (void 0 !== s) {
                                if (Array.isArray(r))
                                    for (let n = 0, a = c.length; n < a; n++) {
                                        let a = c[n],
                                            p = r[a.materialIndex],
                                            f = Math.max(a.start, d.start),
                                            m = Math.min(a.start + a.count, d.start + d.count);
                                        for (let n = f; n < m; n += 3) {
                                            let r = n,
                                                c = n + 1,
                                                d = n + 2;
                                            (i = tQ(this, p, e, tN, s, o, l, h, u, r, c, d)) && (i.faceIndex = Math.floor(n / 3), i.face.materialIndex = a.materialIndex, t.push(i))
                                        }
                                    } else {
                                        let n = Math.max(0, d.start),
                                            a = Math.min(s.count, d.start + d.count);
                                        for (let c = n; c < a; c += 3) {
                                            let n = c,
                                                a = c + 1,
                                                d = c + 2;
                                            (i = tQ(this, r, e, tN, s, o, l, h, u, n, a, d)) && (i.faceIndex = Math.floor(c / 3), t.push(i))
                                        }
                                    }
                            }
                        } else n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                    }
                }
            }

            function tQ(e, t, i, n, r, a, s, l, h, u, c, d) {
                tO.fromBufferAttribute(r, u), tF.fromBufferAttribute(r, c), tB.fromBufferAttribute(r, d);
                let p = e.morphTargetInfluences;
                if (a && p) {
                    tV.set(0, 0, 0), tk.set(0, 0, 0), tW.set(0, 0, 0);
                    for (let e = 0, t = a.length; e < t; e++) {
                        let t = p[e],
                            i = a[e];
                        0 !== t && (tU.fromBufferAttribute(i, u), tH.fromBufferAttribute(i, c), tG.fromBufferAttribute(i, d), s ? (tV.addScaledVector(tU, t), tk.addScaledVector(tH, t), tW.addScaledVector(tG, t)) : (tV.addScaledVector(tU.sub(tO), t), tk.addScaledVector(tH.sub(tF), t), tW.addScaledVector(tG.sub(tB), t)))
                    }
                    tO.add(tV), tF.add(tk), tB.add(tW)
                }
                e.isSkinnedMesh && (e.boneTransform(u, tO), e.boneTransform(c, tF), e.boneTransform(d, tB));
                let f = function(e, t, i, n, r, a, s, l) {
                    if (null === (1 === t.side ? n.intersectTriangle(s, a, r, !0, l) : n.intersectTriangle(r, a, s, t.side !== o, l))) return null;
                    tJ.copy(l), tJ.applyMatrix4(e.matrixWorld);
                    let h = i.ray.origin.distanceTo(tJ);
                    return h < i.near || h > i.far ? null : {
                        distance: h,
                        point: tJ.clone(),
                        object: e
                    }
                }(e, t, i, n, tO, tF, tB, tY);
                if (f) {
                    l && (tj.fromBufferAttribute(l, u), tq.fromBufferAttribute(l, c), tX.fromBufferAttribute(l, d), f.uv = to.getUV(tY, tO, tF, tB, tj, tq, tX, new Y)), h && (tj.fromBufferAttribute(h, u), tq.fromBufferAttribute(h, c), tX.fromBufferAttribute(h, d), f.uv2 = to.getUV(tY, tO, tF, tB, tj, tq, tX, new Y));
                    let e = {
                        a: u,
                        b: c,
                        c: d,
                        normal: new er,
                        materialIndex: 0
                    };
                    to.getNormal(tO, tF, tB, e.normal), f.face = e
                }
                return f
            }
            tZ.prototype.isMesh = !0;
            class tK extends tI {
                constructor(e = 1, t = 1, i = 1, n = 1, r = 1, a = 1) {
                    super(), this.type = "BoxGeometry", this.parameters = {
                        width: e,
                        height: t,
                        depth: i,
                        widthSegments: n,
                        heightSegments: r,
                        depthSegments: a
                    };
                    let s = this;
                    n = Math.floor(n), r = Math.floor(r), a = Math.floor(a);
                    let o = [],
                        l = [],
                        h = [],
                        u = [],
                        c = 0,
                        d = 0;

                    function p(e, t, i, n, r, a, p, f, m, g, v) {
                        let x = a / m,
                            y = p / g,
                            _ = a / 2,
                            M = p / 2,
                            b = f / 2,
                            w = m + 1,
                            S = g + 1,
                            T = 0,
                            E = 0,
                            L = new er;
                        for (let a = 0; a < S; a++) {
                            let s = a * y - M;
                            for (let o = 0; o < w; o++) {
                                let c = o * x - _;
                                L[e] = c * n, L[t] = s * r, L[i] = b, l.push(L.x, L.y, L.z), L[e] = 0, L[t] = 0, L[i] = f > 0 ? 1 : -1, h.push(L.x, L.y, L.z), u.push(o / m), u.push(1 - a / g), T += 1
                            }
                        }
                        for (let e = 0; e < g; e++)
                            for (let t = 0; t < m; t++) {
                                let i = c + t + w * e,
                                    n = c + t + w * (e + 1),
                                    r = c + (t + 1) + w * (e + 1),
                                    a = c + (t + 1) + w * e;
                                o.push(i, n, a), o.push(n, r, a), E += 6
                            }
                        s.addGroup(d, E, v), d += E, c += T
                    }
                    p("z", "y", "x", -1, -1, i, t, e, a, r, 0), p("z", "y", "x", 1, -1, i, t, -e, a, r, 1), p("x", "z", "y", 1, 1, e, i, t, n, a, 2), p("x", "z", "y", 1, -1, e, i, -t, n, a, 3), p("x", "y", "z", 1, -1, e, t, i, n, r, 4), p("x", "y", "z", -1, -1, e, t, -i, n, r, 5), this.setIndex(o), this.setAttribute("position", new tw(l, 3)), this.setAttribute("normal", new tw(h, 3)), this.setAttribute("uv", new tw(u, 2))
                }
                static fromJSON(e) {
                    return new tK(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
                }
            }

            function t$(e) {
                let t = {};
                for (let i in e)
                    for (let n in t[i] = {}, e[i]) {
                        let r = e[i][n];
                        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? t[i][n] = r.clone() : Array.isArray(r) ? t[i][n] = r.slice() : t[i][n] = r
                    }
                return t
            }

            function t0(e) {
                let t = {};
                for (let i = 0; i < e.length; i++) {
                    let n = t$(e[i]);
                    for (let e in n) t[e] = n[e]
                }
                return t
            }
            let t1 = {
                clone: t$,
                merge: t0
            };
            class t3 extends th {
                constructor(e) {
                    super(), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.extensions = {
                        derivatives: !1,
                        fragDepth: !1,
                        drawBuffers: !1,
                        shaderTextureLOD: !1
                    }, this.defaultAttributeValues = {
                        color: [1, 1, 1],
                        uv: [0, 0],
                        uv2: [0, 0]
                    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
                }
                copy(e) {
                    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = t$(e.uniforms), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
                }
                toJSON(e) {
                    let t = super.toJSON(e);
                    for (let i in t.glslVersion = this.glslVersion, t.uniforms = {}, this.uniforms) {
                        let n = this.uniforms[i],
                            r = n.value;
                        r && r.isTexture ? t.uniforms[i] = {
                            type: "t",
                            value: r.toJSON(e).uuid
                        } : r && r.isColor ? t.uniforms[i] = {
                            type: "c",
                            value: r.getHex()
                        } : r && r.isVector2 ? t.uniforms[i] = {
                            type: "v2",
                            value: r.toArray()
                        } : r && r.isVector3 ? t.uniforms[i] = {
                            type: "v3",
                            value: r.toArray()
                        } : r && r.isVector4 ? t.uniforms[i] = {
                            type: "v4",
                            value: r.toArray()
                        } : r && r.isMatrix3 ? t.uniforms[i] = {
                            type: "m3",
                            value: r.toArray()
                        } : r && r.isMatrix4 ? t.uniforms[i] = {
                            type: "m4",
                            value: r.toArray()
                        } : t.uniforms[i] = {
                            value: r
                        }
                    }
                    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader;
                    let i = {};
                    for (let e in this.extensions) !0 === this.extensions[e] && (i[e] = !0);
                    return Object.keys(i).length > 0 && (t.extensions = i), t
                }
            }
            t3.prototype.isShaderMaterial = !0;
            class t2 extends e6 {
                constructor() {
                    super(), this.type = "Camera", this.matrixWorldInverse = new ez, this.projectionMatrix = new ez, this.projectionMatrixInverse = new ez
                }
                copy(e, t) {
                    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
                }
                getWorldDirection(e) {
                    this.updateWorldMatrix(!0, !1);
                    let t = this.matrixWorld.elements;
                    return e.set(-t[8], -t[9], -t[10]).normalize()
                }
                updateMatrixWorld(e) {
                    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
                }
                updateWorldMatrix(e, t) {
                    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            t2.prototype.isCamera = !0;
            class t4 extends t2 {
                constructor(e = 50, t = 1, i = .1, n = 2e3) {
                    super(), this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = n, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
                }
                copy(e, t) {
                    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
                }
                setFocalLength(e) {
                    let t = .5 * this.getFilmHeight() / e;
                    this.fov = 2 * U * Math.atan(t), this.updateProjectionMatrix()
                }
                getFocalLength() {
                    let e = Math.tan(.5 * B * this.fov);
                    return .5 * this.getFilmHeight() / e
                }
                getEffectiveFOV() {
                    return 2 * U * Math.atan(Math.tan(.5 * B * this.fov) / this.zoom)
                }
                getFilmWidth() {
                    return this.filmGauge * Math.min(this.aspect, 1)
                }
                getFilmHeight() {
                    return this.filmGauge / Math.max(this.aspect, 1)
                }
                setViewOffset(e, t, i, n, r, a) {
                    this.aspect = e / t, null === this.view && (this.view = {
                        enabled: !0,
                        fullWidth: 1,
                        fullHeight: 1,
                        offsetX: 0,
                        offsetY: 0,
                        width: 1,
                        height: 1
                    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
                }
                clearViewOffset() {
                    null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
                }
                updateProjectionMatrix() {
                    let e = this.near,
                        t = e * Math.tan(.5 * B * this.fov) / this.zoom,
                        i = 2 * t,
                        n = this.aspect * i,
                        r = -.5 * n,
                        a = this.view;
                    if (null !== this.view && this.view.enabled) {
                        let e = a.fullWidth,
                            s = a.fullHeight;
                        r += a.offsetX * n / e, t -= a.offsetY * i / s, n *= a.width / e, i *= a.height / s
                    }
                    let s = this.filmOffset;
                    0 !== s && (r += e * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, t, t - i, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
                }
                toJSON(e) {
                    let t = super.toJSON(e);
                    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
                }
            }
            t4.prototype.isPerspectiveCamera = !0;
            class t5 extends e6 {
                constructor(e, t, i) {
                    if (super(), this.type = "CubeCamera", !0 !== i.isWebGLCubeRenderTarget) {
                        console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
                        return
                    }
                    this.renderTarget = i;
                    let n = new t4(90, 1, e, t);
                    n.layers = this.layers, n.up.set(0, -1, 0), n.lookAt(new er(1, 0, 0)), this.add(n);
                    let r = new t4(90, 1, e, t);
                    r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new er(-1, 0, 0)), this.add(r);
                    let a = new t4(90, 1, e, t);
                    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(new er(0, 1, 0)), this.add(a);
                    let s = new t4(90, 1, e, t);
                    s.layers = this.layers, s.up.set(0, 0, -1), s.lookAt(new er(0, -1, 0)), this.add(s);
                    let o = new t4(90, 1, e, t);
                    o.layers = this.layers, o.up.set(0, -1, 0), o.lookAt(new er(0, 0, 1)), this.add(o);
                    let l = new t4(90, 1, e, t);
                    l.layers = this.layers, l.up.set(0, -1, 0), l.lookAt(new er(0, 0, -1)), this.add(l)
                }
                update(e, t) {
                    null === this.parent && this.updateMatrixWorld();
                    let i = this.renderTarget,
                        [n, r, a, s, o, l] = this.children,
                        h = e.xr.enabled,
                        u = e.getRenderTarget();
                    e.xr.enabled = !1;
                    let c = i.texture.generateMipmaps;
                    i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0), e.render(t, n), e.setRenderTarget(i, 1), e.render(t, r), e.setRenderTarget(i, 2), e.render(t, a), e.setRenderTarget(i, 3), e.render(t, s), e.setRenderTarget(i, 4), e.render(t, o), i.texture.generateMipmaps = c, e.setRenderTarget(i, 5), e.render(t, l), e.setRenderTarget(u), e.xr.enabled = h
                }
            }
            class t6 extends K {
                constructor(e, t, i, n, r, a, s, o, l, h) {
                    super(e = void 0 !== e ? e : [], t = void 0 !== t ? t : 301, i, n, r, a, s = void 0 !== s ? s : b, o, l, h), this.flipY = !1
                }
                get images() {
                    return this.image
                }
                set images(e) {
                    this.image = e
                }
            }
            t6.prototype.isCubeTexture = !0;
            class t7 extends et {
                constructor(e, t, i) {
                    Number.isInteger(t) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), t = i), super(e, e, t), t = t || {}, this.texture = new t6(void 0, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.encoding), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps, this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : g, this.texture._needsFlipEnvMap = !1
                }
                fromEquirectangularTexture(e, t) {
                    this.texture.type = t.type, this.texture.format = w, this.texture.encoding = t.encoding, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
                    let i = {
                            uniforms: {
                                tEquirect: {
                                    value: null
                                }
                            },
                            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
                            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
                        },
                        n = new tK(5, 5, 5),
                        r = new t3({
                            name: "CubemapFromEquirect",
                            uniforms: t$(i.uniforms),
                            vertexShader: i.vertexShader,
                            fragmentShader: i.fragmentShader,
                            side: 1,
                            blending: 0
                        });
                    r.uniforms.tEquirect.value = t;
                    let a = new tZ(n, r),
                        s = t.minFilter;
                    t.minFilter === x && (t.minFilter = g);
                    let o = new t5(1, 10, this);
                    return o.update(e, a), t.minFilter = s, a.geometry.dispose(), a.material.dispose(), this
                }
                clear(e, t, i, n) {
                    let r = e.getRenderTarget();
                    for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, i, n);
                    e.setRenderTarget(r)
                }
            }
            t7.prototype.isWebGLCubeRenderTarget = !0;
            let t8 = new er,
                t9 = new er,
                ie = new J;
            class it {
                constructor(e = new er(1, 0, 0), t = 0) {
                    this.normal = e, this.constant = t
                }
                set(e, t) {
                    return this.normal.copy(e), this.constant = t, this
                }
                setComponents(e, t, i, n) {
                    return this.normal.set(e, t, i), this.constant = n, this
                }
                setFromNormalAndCoplanarPoint(e, t) {
                    return this.normal.copy(e), this.constant = -t.dot(this.normal), this
                }
                setFromCoplanarPoints(e, t, i) {
                    let n = t8.subVectors(i, t).cross(t9.subVectors(e, t)).normalize();
                    return this.setFromNormalAndCoplanarPoint(n, e), this
                }
                copy(e) {
                    return this.normal.copy(e.normal), this.constant = e.constant, this
                }
                normalize() {
                    let e = 1 / this.normal.length();
                    return this.normal.multiplyScalar(e), this.constant *= e, this
                }
                negate() {
                    return this.constant *= -1, this.normal.negate(), this
                }
                distanceToPoint(e) {
                    return this.normal.dot(e) + this.constant
                }
                distanceToSphere(e) {
                    return this.distanceToPoint(e.center) - e.radius
                }
                projectPoint(e, t) {
                    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
                }
                intersectLine(e, t) {
                    let i = e.delta(t8),
                        n = this.normal.dot(i);
                    if (0 === n) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
                    let r = -(e.start.dot(this.normal) + this.constant) / n;
                    return r < 0 || r > 1 ? null : t.copy(i).multiplyScalar(r).add(e.start)
                }
                intersectsLine(e) {
                    let t = this.distanceToPoint(e.start),
                        i = this.distanceToPoint(e.end);
                    return t < 0 && i > 0 || i < 0 && t > 0
                }
                intersectsBox(e) {
                    return e.intersectsPlane(this)
                }
                intersectsSphere(e) {
                    return e.intersectsPlane(this)
                }
                coplanarPoint(e) {
                    return e.copy(this.normal).multiplyScalar(-this.constant)
                }
                applyMatrix4(e, t) {
                    let i = t || ie.getNormalMatrix(e),
                        n = this.coplanarPoint(t8).applyMatrix4(e),
                        r = this.normal.applyMatrix3(i).normalize();
                    return this.constant = -n.dot(r), this
                }
                translate(e) {
                    return this.constant -= e.dot(this.normal), this
                }
                equals(e) {
                    return e.normal.equals(this.normal) && e.constant === this.constant
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }
            it.prototype.isPlane = !0;
            let ii = new eE,
                ir = new er;
            class ia {
                constructor(e = new it, t = new it, i = new it, n = new it, r = new it, a = new it) {
                    this.planes = [e, t, i, n, r, a]
                }
                set(e, t, i, n, r, a) {
                    let s = this.planes;
                    return s[0].copy(e), s[1].copy(t), s[2].copy(i), s[3].copy(n), s[4].copy(r), s[5].copy(a), this
                }
                copy(e) {
                    let t = this.planes;
                    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
                    return this
                }
                setFromProjectionMatrix(e) {
                    let t = this.planes,
                        i = e.elements,
                        n = i[0],
                        r = i[1],
                        a = i[2],
                        s = i[3],
                        o = i[4],
                        l = i[5],
                        h = i[6],
                        u = i[7],
                        c = i[8],
                        d = i[9],
                        p = i[10],
                        f = i[11],
                        m = i[12],
                        g = i[13],
                        v = i[14],
                        x = i[15];
                    return t[0].setComponents(s - n, u - o, f - c, x - m).normalize(), t[1].setComponents(s + n, u + o, f + c, x + m).normalize(), t[2].setComponents(s + r, u + l, f + d, x + g).normalize(), t[3].setComponents(s - r, u - l, f - d, x - g).normalize(), t[4].setComponents(s - a, u - h, f - p, x - v).normalize(), t[5].setComponents(s + a, u + h, f + p, x + v).normalize(), this
                }
                intersectsObject(e) {
                    let t = e.geometry;
                    return null === t.boundingSphere && t.computeBoundingSphere(), ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(ii)
                }
                intersectsSprite(e) {
                    return ii.center.set(0, 0, 0), ii.radius = .7071067811865476, ii.applyMatrix4(e.matrixWorld), this.intersectsSphere(ii)
                }
                intersectsSphere(e) {
                    let t = this.planes,
                        i = e.center,
                        n = -e.radius;
                    for (let e = 0; e < 6; e++) {
                        let r = t[e].distanceToPoint(i);
                        if (r < n) return !1
                    }
                    return !0
                }
                intersectsBox(e) {
                    let t = this.planes;
                    for (let i = 0; i < 6; i++) {
                        let n = t[i];
                        if (ir.x = n.normal.x > 0 ? e.max.x : e.min.x, ir.y = n.normal.y > 0 ? e.max.y : e.min.y, ir.z = n.normal.z > 0 ? e.max.z : e.min.z, 0 > n.distanceToPoint(ir)) return !1
                    }
                    return !0
                }
                containsPoint(e) {
                    let t = this.planes;
                    for (let i = 0; i < 6; i++)
                        if (0 > t[i].distanceToPoint(e)) return !1;
                    return !0
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }

            function is() {
                let e = null,
                    t = !1,
                    i = null,
                    n = null;

                function r(t, a) {
                    i(t, a), n = e.requestAnimationFrame(r)
                }
                return {
                    start: function() {
                        !0 !== t && null !== i && (n = e.requestAnimationFrame(r), t = !0)
                    },
                    stop: function() {
                        e.cancelAnimationFrame(n), t = !1
                    },
                    setAnimationLoop: function(e) {
                        i = e
                    },
                    setContext: function(t) {
                        e = t
                    }
                }
            }

            function io(e, t) {
                let i = t.isWebGL2,
                    n = new WeakMap;
                return {
                    get: function(e) {
                        return e.isInterleavedBufferAttribute && (e = e.data), n.get(e)
                    },
                    remove: function(t) {
                        t.isInterleavedBufferAttribute && (t = t.data);
                        let i = n.get(t);
                        i && (e.deleteBuffer(i.buffer), n.delete(t))
                    },
                    update: function(t, r) {
                        if (t.isGLBufferAttribute) {
                            let e = n.get(t);
                            (!e || e.version < t.version) && n.set(t, {
                                buffer: t.buffer,
                                type: t.type,
                                bytesPerElement: t.elementSize,
                                version: t.version
                            });
                            return
                        }
                        t.isInterleavedBufferAttribute && (t = t.data);
                        let a = n.get(t);
                        void 0 === a ? n.set(t, function(t, n) {
                            let r = t.array,
                                a = t.usage,
                                s = e.createBuffer();
                            e.bindBuffer(n, s), e.bufferData(n, r, a), t.onUploadCallback();
                            let o = 5126;
                            return r instanceof Float32Array ? o = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? t.isFloat16BufferAttribute ? i ? o = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : o = 5123 : r instanceof Int16Array ? o = 5122 : r instanceof Uint32Array ? o = 5125 : r instanceof Int32Array ? o = 5124 : r instanceof Int8Array ? o = 5120 : r instanceof Uint8Array ? o = 5121 : r instanceof Uint8ClampedArray && (o = 5121), {
                                buffer: s,
                                type: o,
                                bytesPerElement: r.BYTES_PER_ELEMENT,
                                version: t.version
                            }
                        }(t, r)) : a.version < t.version && (! function(t, n, r) {
                            let a = n.array,
                                s = n.updateRange;
                            e.bindBuffer(r, t), -1 === s.count ? e.bufferSubData(r, 0, a) : (i ? e.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : e.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)), s.count = -1)
                        }(a.buffer, t, r), a.version = t.version)
                    }
                }
            }
            class il extends tI {
                constructor(e = 1, t = 1, i = 1, n = 1) {
                    super(), this.type = "PlaneGeometry", this.parameters = {
                        width: e,
                        height: t,
                        widthSegments: i,
                        heightSegments: n
                    };
                    let r = e / 2,
                        a = t / 2,
                        s = Math.floor(i),
                        o = Math.floor(n),
                        l = s + 1,
                        h = o + 1,
                        u = e / s,
                        c = t / o,
                        d = [],
                        p = [],
                        f = [],
                        m = [];
                    for (let e = 0; e < h; e++) {
                        let t = e * c - a;
                        for (let i = 0; i < l; i++) {
                            let n = i * u - r;
                            p.push(n, -t, 0), f.push(0, 0, 1), m.push(i / s), m.push(1 - e / o)
                        }
                    }
                    for (let e = 0; e < o; e++)
                        for (let t = 0; t < s; t++) {
                            let i = t + l * e,
                                n = t + l * (e + 1),
                                r = t + 1 + l * (e + 1),
                                a = t + 1 + l * e;
                            d.push(i, n, a), d.push(n, r, a)
                        }
                    this.setIndex(d), this.setAttribute("position", new tw(p, 3)), this.setAttribute("normal", new tw(f, 3)), this.setAttribute("uv", new tw(m, 2))
                }
                static fromJSON(e) {
                    return new il(e.width, e.height, e.widthSegments, e.heightSegments)
                }
            }
            let ih = {
                    alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
                    alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
                    alphatest_fragment: "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
                    aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif",
                    aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
                    begin_vertex: "vec3 transformed = vec3( position );",
                    beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
                    bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	return vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n#else\n	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n	}\n	return 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in vec3 f90, const in float dotVH ) {\n	float fresnel = exp2( ( -5.55473 * dotVH - 6.98316 ) * dotVH );\n	return ( f90 - f0 ) * fresnel + f0;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n	return Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in vec3 f90, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + viewDir );\n	float dotNL = saturate( dot( normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n	return specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n	vec3 FssEss = F * brdf.x + brdf.y;\n	float Ess = brdf.x + brdf.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, vec3( 1.0 ), dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n	float invAlpha = 1.0 / roughness;\n	float cos2h = NoH * NoH;\n	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n	vec3 N = geometry.normal;\n	vec3 V = geometry.viewDir;\n	vec3 H = normalize( V + L );\n	float dotNH = saturate( dot( N, H ) );\n	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
                    bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
                    clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n		plane = clippingPlanes[ i ];\n		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n	}\n	#pragma unroll_loop_end\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		#pragma unroll_loop_start\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		#pragma unroll_loop_end\n		if ( clipped ) discard;\n	#endif\n#endif",
                    clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
                    clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
                    clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
                    color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif",
                    color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif",
                    color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	varying vec3 vColor;\n#endif",
                    color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif",
                    common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n#ifdef CLEARCOAT\n	vec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n	return dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}",
                    cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_maxMipLevel 8.0\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_maxTileSize 256.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n		vec2 f = fract( uv );\n		uv += 0.5 - f;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		if ( mipInt < cubeUV_maxMipLevel ) {\n			uv.y += 2.0 * cubeUV_maxTileSize;\n		}\n		uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n		uv *= texelSize;\n		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n		uv.x += texelSize;\n		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n		uv.y += texelSize;\n		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n		uv.x -= texelSize;\n		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n		vec3 tm = mix( tl, tr, f.x );\n		vec3 bm = mix( bl, br, f.x );\n		return mix( tm, bm, f.y );\n	}\n	#define r0 1.0\n	#define v0 0.339\n	#define m0 - 2.0\n	#define r1 0.8\n	#define v1 0.276\n	#define m1 - 1.0\n	#define r4 0.4\n	#define v4 0.046\n	#define m4 2.0\n	#define r5 0.305\n	#define v5 0.016\n	#define m5 3.0\n	#define r6 0.21\n	#define v6 0.0038\n	#define m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= r1 ) {\n			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n		} else if ( roughness >= r4 ) {\n			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n		} else if ( roughness >= r5 ) {\n			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n		} else if ( roughness >= r6 ) {\n			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
                    defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n	mat3 m = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n	transformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif",
                    displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
                    displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
                    emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
                    emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
                    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
                    encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n	return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n	float maxComponent = max( max( value.r, value.g ), value.b );\n	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.r, max( value.g, value.b ) );\n	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n	M = ceil( M * 255.0 ) / 255.0;\n	return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n	float maxRGB = max( value.r, max( value.g, value.b ) );\n	float D = max( maxRange / maxRGB, 1.0 );\n	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n	vec4 vResult;\n	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n	vResult.w = fract( Le );\n	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n	return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n	float Le = value.z * 255.0 + value.w;\n	vec3 Xp_Y_XYZp;\n	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n	return vec4( max( vRGB, 0.0 ), 1.0 );\n}",
                    envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifndef ENVMAP_TYPE_CUBE_UV\n		envColor = envMapTexelToLinear( envColor );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif",
                    envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform int maxMipLevel;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif",
                    envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
                    envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
                    envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n	#ifdef ENVMAP_MODE_REFRACTION\n		uniform float refractionRatio;\n	#endif\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float sigma = PI * roughness * roughness / ( 1.0 + roughness );\n		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n		#else\n			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n		#endif\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif",
                    envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
                    fog_vertex: "#ifdef USE_FOG\n	fogDepth = - mvPosition.z;\n#endif",
                    fog_pars_vertex: "#ifdef USE_FOG\n	varying float fogDepth;\n#endif",
                    fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
                    fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float fogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
                    gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return texture2D( gradientMap, coord ).rgb;\n	#else\n		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n	#endif\n}",
                    lightmap_fragment: "#ifdef USE_LIGHTMAP\n	vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
                    lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
                    lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n	vIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n	#pragma unroll_loop_end\n#endif",
                    lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		directLight.color = pointLight.color;\n		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n		directLight.visible = ( directLight.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( angleCos > spotLight.coneCos ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif",
                    lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
                    lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )	(0)",
                    lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
                    lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)",
                    lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n	#ifdef SPECULAR\n		vec3 specularIntensityFactor = vec3( specularIntensity );\n		vec3 specularTintFactor = specularTint;\n		#ifdef USE_SPECULARINTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n		#endif\n		#ifdef USE_SPECULARTINTMAP\n			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;\n		#endif\n		material.specularColorF90 = mix( specularIntensityFactor, vec3( 1.0 ), metalnessFactor );\n	#else\n		vec3 specularIntensityFactor = vec3( 1.0 );\n		vec3 specularTintFactor = vec3( 1.0 );\n		material.specularColorF90 = vec3( 1.0 );\n	#endif\n	material.specularColor = mix( min( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n	material.specularColorF90 = vec3( 1.0 );\n#endif\n#ifdef CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheen;\n#endif",
                    lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float specularRoughness;\n	vec3 specularColor;\n	vec3 specularColorF90;\n#ifdef CLEARCOAT\n	float clearcoat;\n	float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	vec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometry.normal;\n		vec3 viewDir = geometry.viewDir;\n		vec3 position = geometry.position;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.specularRoughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifdef CLEARCOAT\n		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = ccDotNL * directLight.color;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			ccIrradiance *= PI;\n		#endif\n		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), vec3( 1.0 ), material.clearcoatRoughness );\n	#else\n		float clearcoatDHR = 0.0;\n	#endif\n	#ifdef USE_SHEEN\n		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n			material.specularRoughness,\n			directLight.direction,\n			geometry,\n			material.sheenColor\n		);\n	#else\n		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularColorF90, material.specularRoughness);\n	#endif\n	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef CLEARCOAT\n		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n		float ccDotNL = ccDotNV;\n		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n	#else\n		float clearcoatDHR = 0.0;\n	#endif\n	float clearcoatInv = 1.0 - clearcoatDHR;\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
                    lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n	geometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	irradiance += getLightProbeIrradiance( lightProbe, geometry );\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
                    lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n	#ifdef CLEARCOAT\n		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n	#endif\n#endif",
                    lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
                    logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
                    logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
                    logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n		varying float vIsPerspective;\n	#else\n		uniform float logDepthBufFC;\n	#endif\n#endif",
                    logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n	#else\n		if ( isPerspectiveMatrix( projectionMatrix ) ) {\n			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n			gl_Position.z *= gl_Position.w;\n		}\n	#endif\n#endif",
                    map_fragment: "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif",
                    map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
                    map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, uv );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
                    map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	uniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
                    metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
                    metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
                    morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
                    morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	uniform float morphTargetBaseInfluence;\n	#ifndef USE_MORPHNORMALS\n		uniform float morphTargetInfluences[ 8 ];\n	#else\n		uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif",
                    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	transformed += morphTarget0 * morphTargetInfluences[ 0 ];\n	transformed += morphTarget1 * morphTargetInfluences[ 1 ];\n	transformed += morphTarget2 * morphTargetInfluences[ 2 ];\n	transformed += morphTarget3 * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n		transformed += morphTarget4 * morphTargetInfluences[ 4 ];\n		transformed += morphTarget5 * morphTargetInfluences[ 5 ];\n		transformed += morphTarget6 * morphTargetInfluences[ 6 ];\n		transformed += morphTarget7 * morphTargetInfluences[ 7 ];\n	#endif\n#endif",
                    normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	#ifdef USE_TANGENT\n		vec3 tangent = normalize( vTangent );\n		vec3 bitangent = normalize( vBitangent );\n		#ifdef DOUBLE_SIDED\n			tangent = tangent * faceDirection;\n			bitangent = bitangent * faceDirection;\n		#endif\n		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n			mat3 vTBN = mat3( tangent, bitangent, normal );\n		#endif\n	#endif\n#endif\nvec3 geometryNormal = normal;",
                    normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	#ifdef USE_TANGENT\n		normal = normalize( vTBN * mapN );\n	#else\n		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );\n	#endif\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
                    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n	}\n#endif",
                    clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n	vec3 clearcoatNormal = geometryNormal;\n#endif",
                    clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	#ifdef USE_TANGENT\n		clearcoatNormal = normalize( vTBN * clearcoatMapN );\n	#else\n		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n	#endif\n#endif",
                    clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif",
                    packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n	return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
                    premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
                    project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
                    dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
                    dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
                    roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
                    roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
                    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return shadow;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;\n		vec3 bd3D = normalize( lightToPosition );\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif",
                    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
                    shadowmap_vertex: "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		vec4 shadowWorldPosition;\n	#endif\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n	#endif\n#endif",
                    shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
                    skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
                    skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform highp sampler2D boneTexture;\n		uniform int boneTextureSize;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureSize ) );\n			float y = floor( j / float( boneTextureSize ) );\n			float dx = 1.0 / float( boneTextureSize );\n			float dy = 1.0 / float( boneTextureSize );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif",
                    skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
                    skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
                    specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
                    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
                    tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
                    tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
                    transmission_fragment: "#ifdef USE_TRANSMISSION\n	float transmissionFactor = transmission;\n	float thicknessFactor = thickness;\n	#ifdef USE_TRANSMISSIONMAP\n		transmissionFactor *= texture2D( transmissionMap, vUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		thicknessFactor *= texture2D( thicknessMap, vUv ).g;\n	#endif\n	vec3 pos = vWorldPosition.xyz / vWorldPosition.w;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	float ior = ( 1.0 + 0.4 * reflectivity ) / ( 1.0 - 0.4 * reflectivity );\n	vec3 transmission = transmissionFactor * getIBLVolumeRefraction(\n		n, v, roughnessFactor, material.diffuseColor, material.specularColor,\n		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n		attenuationTint, attenuationDistance );\n	totalDiffuse = mix( totalDiffuse, transmission, transmissionFactor );\n#endif",
                    transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec4 vWorldPosition;\n	vec3 getVolumeTransmissionRay(vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix) {\n		vec3 refractionVector = refract(-v, normalize(n), 1.0 / ior);\n		vec3 modelScale;\n		modelScale.x = length(vec3(modelMatrix[0].xyz));\n		modelScale.y = length(vec3(modelMatrix[1].xyz));\n		modelScale.z = length(vec3(modelMatrix[2].xyz));\n		return normalize(refractionVector) * thickness * modelScale;\n	}\n	float applyIorToRoughness(float roughness, float ior) {\n		return roughness * clamp(ior * 2.0 - 2.0, 0.0, 1.0);\n	}\n	vec3 getTransmissionSample(vec2 fragCoord, float roughness, float ior) {\n		float framebufferLod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness, ior);\n		return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod).rgb;\n	}\n	vec3 applyVolumeAttenuation(vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance) {\n		if (attenuationDistance == 0.0) {\n			return radiance;\n		} else {\n			vec3 attenuationCoefficient = -log(attenuationColor) / attenuationDistance;\n			vec3 transmittance = exp(-attenuationCoefficient * transmissionDistance);			return transmittance * radiance;\n		}\n	}\n	vec3 getIBLVolumeRefraction(vec3 n, vec3 v, float perceptualRoughness, vec3 baseColor, vec3 specularColor,\n		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,\n		vec3 attenuationColor, float attenuationDistance) {\n		vec3 transmissionRay = getVolumeTransmissionRay(n, v, thickness, ior, modelMatrix);\n		vec3 refractedRayExit = position + transmissionRay;\n		vec4 ndcPos = projMatrix * viewMatrix * vec4(refractedRayExit, 1.0);\n		vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n		refractionCoords += 1.0;\n		refractionCoords /= 2.0;\n		vec3 transmittedLight = getTransmissionSample(refractionCoords, perceptualRoughness, ior);\n		vec3 attenuatedColor = applyVolumeAttenuation(transmittedLight, length(transmissionRay), attenuationColor, attenuationDistance);\n		return (1.0 - specularColor) * attenuatedColor * baseColor;\n	}\n#endif",
                    uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n	varying vec2 vUv;\n#endif",
                    uv_pars_vertex: "#ifdef USE_UV\n	#ifdef UVS_VERTEX_ONLY\n		vec2 vUv;\n	#else\n		varying vec2 vUv;\n	#endif\n	uniform mat3 uvTransform;\n#endif",
                    uv_vertex: "#ifdef USE_UV\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
                    uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif",
                    uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n	uniform mat3 uv2Transform;\n#endif",
                    uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
                    worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
                    background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	gl_FragColor = mapTexelToLinear( texColor );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
                    background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
                    cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	vec3 vReflect = vWorldDirection;\n	#include <envmap_fragment>\n	gl_FragColor = envColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
                    cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
                    depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#endif\n}",
                    depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
                    distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}",
                    distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
                    equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	vec4 texColor = texture2D( tEquirect, sampleUV );\n	gl_FragColor = mapTexelToLinear( texColor );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n}",
                    equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
                    linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
                    linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
                    meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n	\n		vec4 lightMapTexel= texture2D( lightMap, vUv2 );\n		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
                    meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
                    meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	#ifdef DOUBLE_SIDED\n		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n	#else\n		reflectedLight.indirectDiffuse += vIndirectFront;\n	#endif\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
                    meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n	varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
                    meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n		matcapColor = matcapTexelToLinear( matcapColor );\n	#else\n		vec4 matcapColor = vec4( 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
                    meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#ifndef FLAT_SHADED\n		vNormal = normalize( transformedNormal );\n		#ifdef USE_TANGENT\n			vTangent = normalize( transformedTangent );\n			vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#endif\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
                    meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
                    meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
                    meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
                    meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
                    meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define REFLECTIVITY\n	#define CLEARCOAT\n	#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationTint;\n#endif\n#ifdef REFLECTIVITY\n	uniform float reflectivity;\n#endif\n#ifdef SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularTint;\n	#ifdef USE_SPECULARINTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n	#ifdef USE_SPECULARTINTMAP\n		uniform sampler2D specularTintMap;\n	#endif\n#endif\n#ifdef CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <transmission_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
                    meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#ifdef USE_TRANSMISSION\n	varying vec4 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition;\n#endif\n}",
                    normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
                    normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	varying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
                    points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
                    points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
                    shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
                    shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
                    sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}",
                    sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n	vec2 scale;\n	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}"
                },
                iu = {
                    common: {
                        diffuse: {
                            value: new tg(16777215)
                        },
                        opacity: {
                            value: 1
                        },
                        map: {
                            value: null
                        },
                        uvTransform: {
                            value: new J
                        },
                        uv2Transform: {
                            value: new J
                        },
                        alphaMap: {
                            value: null
                        }
                    },
                    specularmap: {
                        specularMap: {
                            value: null
                        }
                    },
                    envmap: {
                        envMap: {
                            value: null
                        },
                        flipEnvMap: {
                            value: -1
                        },
                        reflectivity: {
                            value: 1
                        },
                        refractionRatio: {
                            value: .98
                        },
                        maxMipLevel: {
                            value: 0
                        }
                    },
                    aomap: {
                        aoMap: {
                            value: null
                        },
                        aoMapIntensity: {
                            value: 1
                        }
                    },
                    lightmap: {
                        lightMap: {
                            value: null
                        },
                        lightMapIntensity: {
                            value: 1
                        }
                    },
                    emissivemap: {
                        emissiveMap: {
                            value: null
                        }
                    },
                    bumpmap: {
                        bumpMap: {
                            value: null
                        },
                        bumpScale: {
                            value: 1
                        }
                    },
                    normalmap: {
                        normalMap: {
                            value: null
                        },
                        normalScale: {
                            value: new Y(1, 1)
                        }
                    },
                    displacementmap: {
                        displacementMap: {
                            value: null
                        },
                        displacementScale: {
                            value: 1
                        },
                        displacementBias: {
                            value: 0
                        }
                    },
                    roughnessmap: {
                        roughnessMap: {
                            value: null
                        }
                    },
                    metalnessmap: {
                        metalnessMap: {
                            value: null
                        }
                    },
                    gradientmap: {
                        gradientMap: {
                            value: null
                        }
                    },
                    fog: {
                        fogDensity: {
                            value: 25e-5
                        },
                        fogNear: {
                            value: 1
                        },
                        fogFar: {
                            value: 2e3
                        },
                        fogColor: {
                            value: new tg(16777215)
                        }
                    },
                    lights: {
                        ambientLightColor: {
                            value: []
                        },
                        lightProbe: {
                            value: []
                        },
                        directionalLights: {
                            value: [],
                            properties: {
                                direction: {},
                                color: {}
                            }
                        },
                        directionalLightShadows: {
                            value: [],
                            properties: {
                                shadowBias: {},
                                shadowNormalBias: {},
                                shadowRadius: {},
                                shadowMapSize: {}
                            }
                        },
                        directionalShadowMap: {
                            value: []
                        },
                        directionalShadowMatrix: {
                            value: []
                        },
                        spotLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                direction: {},
                                distance: {},
                                coneCos: {},
                                penumbraCos: {},
                                decay: {}
                            }
                        },
                        spotLightShadows: {
                            value: [],
                            properties: {
                                shadowBias: {},
                                shadowNormalBias: {},
                                shadowRadius: {},
                                shadowMapSize: {}
                            }
                        },
                        spotShadowMap: {
                            value: []
                        },
                        spotShadowMatrix: {
                            value: []
                        },
                        pointLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                decay: {},
                                distance: {}
                            }
                        },
                        pointLightShadows: {
                            value: [],
                            properties: {
                                shadowBias: {},
                                shadowNormalBias: {},
                                shadowRadius: {},
                                shadowMapSize: {},
                                shadowCameraNear: {},
                                shadowCameraFar: {}
                            }
                        },
                        pointShadowMap: {
                            value: []
                        },
                        pointShadowMatrix: {
                            value: []
                        },
                        hemisphereLights: {
                            value: [],
                            properties: {
                                direction: {},
                                skyColor: {},
                                groundColor: {}
                            }
                        },
                        rectAreaLights: {
                            value: [],
                            properties: {
                                color: {},
                                position: {},
                                width: {},
                                height: {}
                            }
                        },
                        ltc_1: {
                            value: null
                        },
                        ltc_2: {
                            value: null
                        }
                    },
                    points: {
                        diffuse: {
                            value: new tg(16777215)
                        },
                        opacity: {
                            value: 1
                        },
                        size: {
                            value: 1
                        },
                        scale: {
                            value: 1
                        },
                        map: {
                            value: null
                        },
                        alphaMap: {
                            value: null
                        },
                        uvTransform: {
                            value: new J
                        }
                    },
                    sprite: {
                        diffuse: {
                            value: new tg(16777215)
                        },
                        opacity: {
                            value: 1
                        },
                        center: {
                            value: new Y(.5, .5)
                        },
                        rotation: {
                            value: 0
                        },
                        map: {
                            value: null
                        },
                        alphaMap: {
                            value: null
                        },
                        uvTransform: {
                            value: new J
                        }
                    }
                },
                ic = {
                    basic: {
                        uniforms: t0([iu.common, iu.specularmap, iu.envmap, iu.aomap, iu.lightmap, iu.fog]),
                        vertexShader: ih.meshbasic_vert,
                        fragmentShader: ih.meshbasic_frag
                    },
                    lambert: {
                        uniforms: t0([iu.common, iu.specularmap, iu.envmap, iu.aomap, iu.lightmap, iu.emissivemap, iu.fog, iu.lights, {
                            emissive: {
                                value: new tg(0)
                            }
                        }]),
                        vertexShader: ih.meshlambert_vert,
                        fragmentShader: ih.meshlambert_frag
                    },
                    phong: {
                        uniforms: t0([iu.common, iu.specularmap, iu.envmap, iu.aomap, iu.lightmap, iu.emissivemap, iu.bumpmap, iu.normalmap, iu.displacementmap, iu.fog, iu.lights, {
                            emissive: {
                                value: new tg(0)
                            },
                            specular: {
                                value: new tg(1118481)
                            },
                            shininess: {
                                value: 30
                            }
                        }]),
                        vertexShader: ih.meshphong_vert,
                        fragmentShader: ih.meshphong_frag
                    },
                    standard: {
                        uniforms: t0([iu.common, iu.envmap, iu.aomap, iu.lightmap, iu.emissivemap, iu.bumpmap, iu.normalmap, iu.displacementmap, iu.roughnessmap, iu.metalnessmap, iu.fog, iu.lights, {
                            emissive: {
                                value: new tg(0)
                            },
                            roughness: {
                                value: 1
                            },
                            metalness: {
                                value: 0
                            },
                            envMapIntensity: {
                                value: 1
                            }
                        }]),
                        vertexShader: ih.meshphysical_vert,
                        fragmentShader: ih.meshphysical_frag
                    },
                    toon: {
                        uniforms: t0([iu.common, iu.aomap, iu.lightmap, iu.emissivemap, iu.bumpmap, iu.normalmap, iu.displacementmap, iu.gradientmap, iu.fog, iu.lights, {
                            emissive: {
                                value: new tg(0)
                            }
                        }]),
                        vertexShader: ih.meshtoon_vert,
                        fragmentShader: ih.meshtoon_frag
                    },
                    matcap: {
                        uniforms: t0([iu.common, iu.bumpmap, iu.normalmap, iu.displacementmap, iu.fog, {
                            matcap: {
                                value: null
                            }
                        }]),
                        vertexShader: ih.meshmatcap_vert,
                        fragmentShader: ih.meshmatcap_frag
                    },
                    points: {
                        uniforms: t0([iu.points, iu.fog]),
                        vertexShader: ih.points_vert,
                        fragmentShader: ih.points_frag
                    },
                    dashed: {
                        uniforms: t0([iu.common, iu.fog, {
                            scale: {
                                value: 1
                            },
                            dashSize: {
                                value: 1
                            },
                            totalSize: {
                                value: 2
                            }
                        }]),
                        vertexShader: ih.linedashed_vert,
                        fragmentShader: ih.linedashed_frag
                    },
                    depth: {
                        uniforms: t0([iu.common, iu.displacementmap]),
                        vertexShader: ih.depth_vert,
                        fragmentShader: ih.depth_frag
                    },
                    normal: {
                        uniforms: t0([iu.common, iu.bumpmap, iu.normalmap, iu.displacementmap, {
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: ih.normal_vert,
                        fragmentShader: ih.normal_frag
                    },
                    sprite: {
                        uniforms: t0([iu.sprite, iu.fog]),
                        vertexShader: ih.sprite_vert,
                        fragmentShader: ih.sprite_frag
                    },
                    background: {
                        uniforms: {
                            uvTransform: {
                                value: new J
                            },
                            t2D: {
                                value: null
                            }
                        },
                        vertexShader: ih.background_vert,
                        fragmentShader: ih.background_frag
                    },
                    cube: {
                        uniforms: t0([iu.envmap, {
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: ih.cube_vert,
                        fragmentShader: ih.cube_frag
                    },
                    equirect: {
                        uniforms: {
                            tEquirect: {
                                value: null
                            }
                        },
                        vertexShader: ih.equirect_vert,
                        fragmentShader: ih.equirect_frag
                    },
                    distanceRGBA: {
                        uniforms: t0([iu.common, iu.displacementmap, {
                            referencePosition: {
                                value: new er
                            },
                            nearDistance: {
                                value: 1
                            },
                            farDistance: {
                                value: 1e3
                            }
                        }]),
                        vertexShader: ih.distanceRGBA_vert,
                        fragmentShader: ih.distanceRGBA_frag
                    },
                    shadow: {
                        uniforms: t0([iu.lights, iu.fog, {
                            color: {
                                value: new tg(0)
                            },
                            opacity: {
                                value: 1
                            }
                        }]),
                        vertexShader: ih.shadow_vert,
                        fragmentShader: ih.shadow_frag
                    }
                };

            function id(e, t, i, n, r) {
                let a, o;
                let l = new tg(0),
                    h = 0,
                    u = null,
                    c = 0,
                    d = null;

                function p(e, t) {
                    i.buffers.color.setClear(e.r, e.g, e.b, t, r)
                }
                return {
                    getClearColor: function() {
                        return l
                    },
                    setClearColor: function(e, t = 1) {
                        l.set(e), p(l, h = t)
                    },
                    getClearAlpha: function() {
                        return h
                    },
                    setClearAlpha: function(e) {
                        p(l, h = e)
                    },
                    render: function(i, r) {
                        let f = !1,
                            m = !0 === r.isScene ? r.background : null;
                        m && m.isTexture && (m = t.get(m));
                        let g = e.xr,
                            v = g.getSession && g.getSession();
                        v && "additive" === v.environmentBlendMode && (m = null), null === m ? p(l, h) : m && m.isColor && (p(m, 1), f = !0), (e.autoClear || f) && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), m && (m.isCubeTexture || 306 === m.mapping) ? (void 0 === o && ((o = new tZ(new tK(1, 1, 1), new t3({
                            name: "BackgroundCubeMaterial",
                            uniforms: t$(ic.cube.uniforms),
                            vertexShader: ic.cube.vertexShader,
                            fragmentShader: ic.cube.fragmentShader,
                            side: 1,
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        }))).geometry.deleteAttribute("normal"), o.geometry.deleteAttribute("uv"), o.onBeforeRender = function(e, t, i) {
                            this.matrixWorld.copyPosition(i.matrixWorld)
                        }, Object.defineProperty(o.material, "envMap", {
                            get: function() {
                                return this.uniforms.envMap.value
                            }
                        }), n.update(o)), o.material.uniforms.envMap.value = m, o.material.uniforms.flipEnvMap.value = m.isCubeTexture && !1 === m.isRenderTargetTexture ? -1 : 1, (u !== m || c !== m.version || d !== e.toneMapping) && (o.material.needsUpdate = !0, u = m, c = m.version, d = e.toneMapping), i.unshift(o, o.geometry, o.material, 0, 0, null)) : m && m.isTexture && (void 0 === a && ((a = new tZ(new il(2, 2), new t3({
                            name: "BackgroundMaterial",
                            uniforms: t$(ic.background.uniforms),
                            vertexShader: ic.background.vertexShader,
                            fragmentShader: ic.background.fragmentShader,
                            side: s,
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        }))).geometry.deleteAttribute("normal"), Object.defineProperty(a.material, "map", {
                            get: function() {
                                return this.uniforms.t2D.value
                            }
                        }), n.update(a)), a.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), a.material.uniforms.uvTransform.value.copy(m.matrix), (u !== m || c !== m.version || d !== e.toneMapping) && (a.material.needsUpdate = !0, u = m, c = m.version, d = e.toneMapping), i.unshift(a, a.geometry, a.material, 0, 0, null))
                    }
                }
            }

            function ip(e, t, i, n) {
                let r = e.getParameter(34921),
                    a = n.isWebGL2 ? null : t.get("OES_vertex_array_object"),
                    s = n.isWebGL2 || null !== a,
                    o = {},
                    l = d(null),
                    h = l;

                function u(t) {
                    return n.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t)
                }

                function c(t) {
                    return n.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t)
                }

                function d(e) {
                    let t = [],
                        i = [],
                        n = [];
                    for (let e = 0; e < r; e++) t[e] = 0, i[e] = 0, n[e] = 0;
                    return {
                        geometry: null,
                        program: null,
                        wireframe: !1,
                        newAttributes: t,
                        enabledAttributes: i,
                        attributeDivisors: n,
                        object: e,
                        attributes: {},
                        index: null
                    }
                }

                function p() {
                    let e = h.newAttributes;
                    for (let t = 0, i = e.length; t < i; t++) e[t] = 0
                }

                function f(e) {
                    m(e, 0)
                }

                function m(i, r) {
                    let a = h.newAttributes,
                        s = h.enabledAttributes,
                        o = h.attributeDivisors;
                    if (a[i] = 1, 0 === s[i] && (e.enableVertexAttribArray(i), s[i] = 1), o[i] !== r) {
                        let a = n.isWebGL2 ? e : t.get("ANGLE_instanced_arrays");
                        a[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](i, r), o[i] = r
                    }
                }

                function g() {
                    let t = h.newAttributes,
                        i = h.enabledAttributes;
                    for (let n = 0, r = i.length; n < r; n++) i[n] !== t[n] && (e.disableVertexAttribArray(n), i[n] = 0)
                }

                function v(t, i, r, a, s, o) {
                    !0 === n.isWebGL2 && (5124 === r || 5125 === r) ? e.vertexAttribIPointer(t, i, r, s, o) : e.vertexAttribPointer(t, i, r, a, s, o)
                }

                function x() {
                    y(), h !== l && u((h = l).object)
                }

                function y() {
                    l.geometry = null, l.program = null, l.wireframe = !1
                }
                return {
                    setup: function(r, l, c, x, y) {
                        let _ = !1;
                        if (s) {
                            let t = function(t, i, r) {
                                let s = !0 === r.wireframe,
                                    l = o[t.id];
                                void 0 === l && (l = {}, o[t.id] = l);
                                let h = l[i.id];
                                void 0 === h && (h = {}, l[i.id] = h);
                                let u = h[s];
                                return void 0 === u && (u = d(n.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()), h[s] = u), u
                            }(x, c, l);
                            h !== t && u((h = t).object), (_ = function(e, t) {
                                let i = h.attributes,
                                    n = e.attributes,
                                    r = 0;
                                for (let e in n) {
                                    let t = i[e],
                                        a = n[e];
                                    if (void 0 === t || t.attribute !== a || t.data !== a.data) return !0;
                                    r++
                                }
                                return h.attributesNum !== r || h.index !== t
                            }(x, y)) && function(e, t) {
                                let i = {},
                                    n = e.attributes,
                                    r = 0;
                                for (let e in n) {
                                    let t = n[e],
                                        a = {};
                                    a.attribute = t, t.data && (a.data = t.data), i[e] = a, r++
                                }
                                h.attributes = i, h.attributesNum = r, h.index = t
                            }(x, y)
                        } else {
                            let e = !0 === l.wireframe;
                            (h.geometry !== x.id || h.program !== c.id || h.wireframe !== e) && (h.geometry = x.id, h.program = c.id, h.wireframe = e, _ = !0)
                        }!0 === r.isInstancedMesh && (_ = !0), null !== y && i.update(y, 34963), _ && (function(r, a, s, o) {
                            if (!1 === n.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === t.get("ANGLE_instanced_arrays")) return;
                            p();
                            let l = o.attributes,
                                h = s.getAttributes(),
                                u = a.defaultAttributeValues;
                            for (let t in h) {
                                let n = h[t];
                                if (n >= 0) {
                                    let a = l[t];
                                    if (void 0 !== a) {
                                        let t = a.normalized,
                                            r = a.itemSize,
                                            s = i.get(a);
                                        if (void 0 === s) continue;
                                        let l = s.buffer,
                                            h = s.type,
                                            u = s.bytesPerElement;
                                        if (a.isInterleavedBufferAttribute) {
                                            let i = a.data,
                                                s = i.stride,
                                                c = a.offset;
                                            i && i.isInstancedInterleavedBuffer ? (m(n, i.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = i.meshPerAttribute * i.count)) : f(n), e.bindBuffer(34962, l), v(n, r, h, t, s * u, c * u)
                                        } else a.isInstancedBufferAttribute ? (m(n, a.meshPerAttribute), void 0 === o._maxInstanceCount && (o._maxInstanceCount = a.meshPerAttribute * a.count)) : f(n), e.bindBuffer(34962, l), v(n, r, h, t, 0, 0)
                                    } else if ("instanceMatrix" === t) {
                                        let t = i.get(r.instanceMatrix);
                                        if (void 0 === t) continue;
                                        let a = t.buffer,
                                            s = t.type;
                                        m(n + 0, 1), m(n + 1, 1), m(n + 2, 1), m(n + 3, 1), e.bindBuffer(34962, a), e.vertexAttribPointer(n + 0, 4, s, !1, 64, 0), e.vertexAttribPointer(n + 1, 4, s, !1, 64, 16), e.vertexAttribPointer(n + 2, 4, s, !1, 64, 32), e.vertexAttribPointer(n + 3, 4, s, !1, 64, 48)
                                    } else if ("instanceColor" === t) {
                                        let t = i.get(r.instanceColor);
                                        if (void 0 === t) continue;
                                        let a = t.buffer,
                                            s = t.type;
                                        m(n, 1), e.bindBuffer(34962, a), e.vertexAttribPointer(n, 3, s, !1, 12, 0)
                                    } else if (void 0 !== u) {
                                        let i = u[t];
                                        if (void 0 !== i) switch (i.length) {
                                            case 2:
                                                e.vertexAttrib2fv(n, i);
                                                break;
                                            case 3:
                                                e.vertexAttrib3fv(n, i);
                                                break;
                                            case 4:
                                                e.vertexAttrib4fv(n, i);
                                                break;
                                            default:
                                                e.vertexAttrib1fv(n, i)
                                        }
                                    }
                                }
                            }
                            g()
                        }(r, l, c, x), null !== y && e.bindBuffer(34963, i.get(y).buffer))
                    },
                    reset: x,
                    resetDefaultState: y,
                    dispose: function() {
                        for (let e in x(), o) {
                            let t = o[e];
                            for (let e in t) {
                                let i = t[e];
                                for (let e in i) c(i[e].object), delete i[e];
                                delete t[e]
                            }
                            delete o[e]
                        }
                    },
                    releaseStatesOfGeometry: function(e) {
                        if (void 0 === o[e.id]) return;
                        let t = o[e.id];
                        for (let e in t) {
                            let i = t[e];
                            for (let e in i) c(i[e].object), delete i[e];
                            delete t[e]
                        }
                        delete o[e.id]
                    },
                    releaseStatesOfProgram: function(e) {
                        for (let t in o) {
                            let i = o[t];
                            if (void 0 === i[e.id]) continue;
                            let n = i[e.id];
                            for (let e in n) c(n[e].object), delete n[e];
                            delete i[e.id]
                        }
                    },
                    initAttributes: p,
                    enableAttribute: f,
                    disableUnusedAttributes: g
                }
            }

            function im(e, t, i, n) {
                let r;
                let a = n.isWebGL2;
                this.setMode = function(e) {
                    r = e
                }, this.render = function(t, n) {
                    e.drawArrays(r, t, n), i.update(n, r, 1)
                }, this.renderInstances = function(n, s, o) {
                    let l, h;
                    if (0 !== o) {
                        if (a) l = e, h = "drawArraysInstanced";
                        else if (l = t.get("ANGLE_instanced_arrays"), h = "drawArraysInstancedANGLE", null === l) {
                            console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                            return
                        }
                        l[h](r, n, s, o), i.update(s, r, o)
                    }
                }
            }

            function ig(e, t, i) {
                let n;

                function r(t) {
                    if ("highp" === t) {
                        if (e.getShaderPrecisionFormat(35633, 36338).precision > 0 && e.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
                        t = "mediump"
                    }
                    return "mediump" === t && e.getShaderPrecisionFormat(35633, 36337).precision > 0 && e.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
                }
                let a = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && e instanceof WebGL2ComputeRenderingContext,
                    s = void 0 !== i.precision ? i.precision : "highp",
                    o = r(s);
                o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), s = o);
                let l = a || t.has("WEBGL_draw_buffers"),
                    h = !0 === i.logarithmicDepthBuffer,
                    u = e.getParameter(34930),
                    c = e.getParameter(35660),
                    d = e.getParameter(3379),
                    p = e.getParameter(34076),
                    f = e.getParameter(34921),
                    m = e.getParameter(36347),
                    g = e.getParameter(36348),
                    v = e.getParameter(36349),
                    x = c > 0,
                    y = a || t.has("OES_texture_float"),
                    _ = a ? e.getParameter(36183) : 0;
                return {
                    isWebGL2: a,
                    drawBuffers: l,
                    getMaxAnisotropy: function() {
                        if (void 0 !== n) return n;
                        if (!0 === t.has("EXT_texture_filter_anisotropic")) {
                            let i = t.get("EXT_texture_filter_anisotropic");
                            n = e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                        } else n = 0;
                        return n
                    },
                    getMaxPrecision: r,
                    precision: s,
                    logarithmicDepthBuffer: h,
                    maxTextures: u,
                    maxVertexTextures: c,
                    maxTextureSize: d,
                    maxCubemapSize: p,
                    maxAttributes: f,
                    maxVertexUniforms: m,
                    maxVaryings: g,
                    maxFragmentUniforms: v,
                    vertexTextures: x,
                    floatFragmentTextures: y,
                    floatVertexTextures: x && y,
                    maxSamples: _
                }
            }

            function iv(e) {
                let t = this,
                    i = null,
                    n = 0,
                    r = !1,
                    a = !1,
                    s = new it,
                    o = new J,
                    l = {
                        value: null,
                        needsUpdate: !1
                    };

                function h() {
                    l.value !== i && (l.value = i, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0
                }

                function u(e, i, n, r) {
                    let a = null !== e ? e.length : 0,
                        h = null;
                    if (0 !== a) {
                        if (h = l.value, !0 !== r || null === h) {
                            let t = n + 4 * a,
                                r = i.matrixWorldInverse;
                            o.getNormalMatrix(r), (null === h || h.length < t) && (h = new Float32Array(t));
                            for (let t = 0, i = n; t !== a; ++t, i += 4) s.copy(e[t]).applyMatrix4(r, o), s.normal.toArray(h, i), h[i + 3] = s.constant
                        }
                        l.value = h, l.needsUpdate = !0
                    }
                    return t.numPlanes = a, t.numIntersection = 0, h
                }
                this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t, a) {
                    let s = 0 !== e.length || t || 0 !== n || r;
                    return r = t, i = u(e, a, 0), n = e.length, s
                }, this.beginShadows = function() {
                    a = !0, u(null)
                }, this.endShadows = function() {
                    a = !1, h()
                }, this.setState = function(t, s, o) {
                    let c = t.clippingPlanes,
                        d = t.clipIntersection,
                        p = t.clipShadows,
                        f = e.get(t);
                    if (r && null !== c && 0 !== c.length && (!a || p)) {
                        let e = a ? 0 : n,
                            t = 4 * e,
                            r = f.clippingState || null;
                        l.value = r, r = u(c, s, t, o);
                        for (let e = 0; e !== t; ++e) r[e] = i[e];
                        f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += e
                    } else a ? u(null) : h()
                }
            }

            function ix(e) {
                let t = new WeakMap;

                function i(e, t) {
                    return 303 === t ? e.mapping = 301 : 304 === t && (e.mapping = 302), e
                }

                function n(e) {
                    let i = e.target;
                    i.removeEventListener("dispose", n);
                    let r = t.get(i);
                    void 0 !== r && (t.delete(i), r.dispose())
                }
                return {
                    get: function(r) {
                        if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                            let a = r.mapping;
                            if (303 === a || 304 === a) {
                                if (t.has(r)) {
                                    let e = t.get(r).texture;
                                    return i(e, r.mapping)
                                } {
                                    let a = r.image;
                                    if (!a || !(a.height > 0)) return null;
                                    {
                                        let s = e.getRenderTarget(),
                                            o = new t7(a.height / 2);
                                        return o.fromEquirectangularTexture(e, r), t.set(r, o), e.setRenderTarget(s), r.addEventListener("dispose", n), i(o.texture, r.mapping)
                                    }
                                }
                            }
                        }
                        return r
                    },
                    dispose: function() {
                        t = new WeakMap
                    }
                }
            }
            ic.physical = {
                uniforms: t0([ic.standard.uniforms, {
                    clearcoat: {
                        value: 0
                    },
                    clearcoatMap: {
                        value: null
                    },
                    clearcoatRoughness: {
                        value: 0
                    },
                    clearcoatRoughnessMap: {
                        value: null
                    },
                    clearcoatNormalScale: {
                        value: new Y(1, 1)
                    },
                    clearcoatNormalMap: {
                        value: null
                    },
                    sheen: {
                        value: new tg(0)
                    },
                    transmission: {
                        value: 0
                    },
                    transmissionMap: {
                        value: null
                    },
                    transmissionSamplerSize: {
                        value: new Y
                    },
                    transmissionSamplerMap: {
                        value: null
                    },
                    thickness: {
                        value: 0
                    },
                    thicknessMap: {
                        value: null
                    },
                    attenuationDistance: {
                        value: 0
                    },
                    attenuationTint: {
                        value: new tg(0)
                    },
                    specularIntensity: {
                        value: 0
                    },
                    specularIntensityMap: {
                        value: null
                    },
                    specularTint: {
                        value: new tg(1, 1, 1)
                    },
                    specularTintMap: {
                        value: null
                    }
                }]),
                vertexShader: ih.meshphysical_vert,
                fragmentShader: ih.meshphysical_frag
            };
            class iy extends t2 {
                constructor(e = -1, t = 1, i = 1, n = -1, r = .1, a = 2e3) {
                    super(), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = n, this.near = r, this.far = a, this.updateProjectionMatrix()
                }
                copy(e, t) {
                    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
                }
                setViewOffset(e, t, i, n, r, a) {
                    null === this.view && (this.view = {
                        enabled: !0,
                        fullWidth: 1,
                        fullHeight: 1,
                        offsetX: 0,
                        offsetY: 0,
                        width: 1,
                        height: 1
                    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = n, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
                }
                clearViewOffset() {
                    null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
                }
                updateProjectionMatrix() {
                    let e = (this.right - this.left) / (2 * this.zoom),
                        t = (this.top - this.bottom) / (2 * this.zoom),
                        i = (this.right + this.left) / 2,
                        n = (this.top + this.bottom) / 2,
                        r = i - e,
                        a = i + e,
                        s = n + t,
                        o = n - t;
                    if (null !== this.view && this.view.enabled) {
                        let e = (this.right - this.left) / this.view.fullWidth / this.zoom,
                            t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                        r += e * this.view.offsetX, a = r + e * this.view.width, s -= t * this.view.offsetY, o = s - t * this.view.height
                    }
                    this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
                }
                toJSON(e) {
                    let t = super.toJSON(e);
                    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
                }
            }
            iy.prototype.isOrthographicCamera = !0;
            class i_ extends t3 {
                constructor(e) {
                    super(e), this.type = "RawShaderMaterial"
                }
            }
            i_.prototype.isRawShaderMaterial = !0;
            let iM = [.125, .215, .35, .446, .526, .582],
                ib = 5 + iM.length,
                iw = {
                    [C]: 0,
                    [P]: 1,
                    [I]: 2,
                    3004: 3,
                    3005: 4,
                    3006: 5,
                    3007: 6
                },
                iS = new tv({
                    side: 1,
                    depthWrite: !1,
                    depthTest: !1
                }),
                iT = new tZ(new tK, iS),
                iE = new iy,
                {
                    _lodPlanes: iL,
                    _sizeLods: iA,
                    _sigmas: iR
                } = function() {
                    let e = [],
                        t = [],
                        i = [],
                        n = 8;
                    for (let r = 0; r < ib; r++) {
                        let a = Math.pow(2, n);
                        t.push(a);
                        let s = 1 / a;
                        r > 4 ? s = iM[r - 8 + 4 - 1] : 0 == r && (s = 0), i.push(s);
                        let o = 1 / (a - 1),
                            l = -o / 2,
                            h = 1 + o / 2,
                            u = [l, l, h, l, h, h, l, l, h, h, l, h],
                            c = new Float32Array(108),
                            d = new Float32Array(72),
                            p = new Float32Array(36);
                        for (let e = 0; e < 6; e++) {
                            let t = e % 3 * 2 / 3 - 1,
                                i = e > 2 ? 0 : -1,
                                n = [t, i, 0, t + 2 / 3, i, 0, t + 2 / 3, i + 1, 0, t, i, 0, t + 2 / 3, i + 1, 0, t, i + 1, 0];
                            c.set(n, 18 * e), d.set(u, 12 * e);
                            let r = [e, e, e, e, e, e];
                            p.set(r, 6 * e)
                        }
                        let f = new tI;
                        f.setAttribute("position", new t_(c, 3)), f.setAttribute("uv", new t_(d, 2)), f.setAttribute("faceIndex", new t_(p, 1)), e.push(f), n > 4 && n--
                    }
                    return {
                        _lodPlanes: e,
                        _sizeLods: t,
                        _sigmas: i
                    }
                }(),
                iC = new tg,
                iP = null,
                iI = (1 + Math.sqrt(5)) / 2,
                iD = 1 / iI,
                iN = [new er(1, 1, 1), new er(-1, 1, 1), new er(1, 1, -1), new er(-1, 1, -1), new er(0, iI, iD), new er(0, iI, -iD), new er(iD, 0, iI), new er(-iD, 0, iI), new er(iI, iD, 0), new er(-iI, iD, 0)];

            function iz(e) {
                let t = Math.max(e.r, e.g, e.b),
                    i = Math.min(Math.max(Math.ceil(Math.log2(t)), -128), 127);
                return e.multiplyScalar(Math.pow(2, -i)), (i + 128) / 255
            }
            class iO {
                constructor(e) {
                    this._renderer = e, this._pingPongRenderTarget = null, this._blurMaterial = function(e) {
                        let t = new Float32Array(e),
                            i = new er(0, 1, 0),
                            n = new i_({
                                name: "SphericalGaussianBlur",
                                defines: {
                                    n: e
                                },
                                uniforms: {
                                    envMap: {
                                        value: null
                                    },
                                    samples: {
                                        value: 1
                                    },
                                    weights: {
                                        value: t
                                    },
                                    latitudinal: {
                                        value: !1
                                    },
                                    dTheta: {
                                        value: 0
                                    },
                                    mipInt: {
                                        value: 0
                                    },
                                    poleAxis: {
                                        value: i
                                    },
                                    inputEncoding: {
                                        value: iw[C]
                                    },
                                    outputEncoding: {
                                        value: iw[C]
                                    }
                                },
                                vertexShader: iG(),
                                fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${iV()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
                                blending: 0,
                                depthTest: !1,
                                depthWrite: !1
                            });
                        return n
                    }(20), this._equirectShader = null, this._cubemapShader = null, this._compileMaterial(this._blurMaterial)
                }
                fromScene(e, t = 0, i = .1, n = 100) {
                    iP = this._renderer.getRenderTarget();
                    let r = this._allocateTargets();
                    return this._sceneToCubeUV(e, i, n, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r
                }
                fromEquirectangular(e) {
                    return this._fromTexture(e)
                }
                fromCubemap(e) {
                    return this._fromTexture(e)
                }
                compileCubemapShader() {
                    null === this._cubemapShader && (this._cubemapShader = iH(), this._compileMaterial(this._cubemapShader))
                }
                compileEquirectangularShader() {
                    null === this._equirectShader && (this._equirectShader = iU(), this._compileMaterial(this._equirectShader))
                }
                dispose() {
                    this._blurMaterial.dispose(), null !== this._cubemapShader && this._cubemapShader.dispose(), null !== this._equirectShader && this._equirectShader.dispose();
                    for (let e = 0; e < iL.length; e++) iL[e].dispose()
                }
                _cleanup(e) {
                    this._pingPongRenderTarget.dispose(), this._renderer.setRenderTarget(iP), e.scissorTest = !1, iB(e, 0, 0, e.width, e.height)
                }
                _fromTexture(e) {
                    iP = this._renderer.getRenderTarget();
                    let t = this._allocateTargets(e);
                    return this._textureToCubeUV(e, t), this._applyPMREM(t), this._cleanup(t), t
                }
                _allocateTargets(e) {
                    let t = {
                            magFilter: p,
                            minFilter: p,
                            generateMipmaps: !1,
                            type: y,
                            format: S,
                            encoding: void 0 !== e && e.type === y && (e.encoding === C || e.encoding === P || 3007 === e.encoding) ? e.encoding : I,
                            depthBuffer: !1
                        },
                        i = iF(t);
                    return i.depthBuffer = !e, this._pingPongRenderTarget = iF(t), i
                }
                _compileMaterial(e) {
                    let t = new tZ(iL[0], e);
                    this._renderer.compile(t, iE)
                }
                _sceneToCubeUV(e, t, i, n) {
                    let r = new t4(90, 1, t, i),
                        a = [1, -1, 1, 1, 1, 1],
                        s = [1, 1, 1, -1, -1, -1],
                        o = this._renderer,
                        l = o.autoClear,
                        h = o.outputEncoding,
                        u = o.toneMapping;
                    o.getClearColor(iC), o.toneMapping = 0, o.outputEncoding = C, o.autoClear = !1;
                    let c = !1,
                        d = e.background;
                    if (d) {
                        if (d.isColor) {
                            iS.color.copy(d).convertSRGBToLinear(), e.background = null;
                            let t = iz(iS.color);
                            iS.opacity = t, c = !0
                        }
                    } else {
                        iS.color.copy(iC).convertSRGBToLinear();
                        let e = iz(iS.color);
                        iS.opacity = e, c = !0
                    }
                    for (let t = 0; t < 6; t++) {
                        let i = t % 3;
                        0 == i ? (r.up.set(0, a[t], 0), r.lookAt(s[t], 0, 0)) : 1 == i ? (r.up.set(0, 0, a[t]), r.lookAt(0, s[t], 0)) : (r.up.set(0, a[t], 0), r.lookAt(0, 0, s[t])), iB(n, 256 * i, t > 2 ? 256 : 0, 256, 256), o.setRenderTarget(n), c && o.render(iT, r), o.render(e, r)
                    }
                    o.toneMapping = u, o.outputEncoding = h, o.autoClear = l
                }
                _textureToCubeUV(e, t) {
                    let i = this._renderer;
                    e.isCubeTexture ? null == this._cubemapShader && (this._cubemapShader = iH()) : null == this._equirectShader && (this._equirectShader = iU());
                    let n = e.isCubeTexture ? this._cubemapShader : this._equirectShader,
                        r = new tZ(iL[0], n),
                        a = n.uniforms;
                    a.envMap.value = e, e.isCubeTexture || a.texelSize.value.set(1 / e.image.width, 1 / e.image.height), a.inputEncoding.value = iw[e.encoding], a.outputEncoding.value = iw[t.texture.encoding], iB(t, 0, 0, 768, 512), i.setRenderTarget(t), i.render(r, iE)
                }
                _applyPMREM(e) {
                    let t = this._renderer,
                        i = t.autoClear;
                    t.autoClear = !1;
                    for (let t = 1; t < ib; t++) {
                        let i = Math.sqrt(iR[t] * iR[t] - iR[t - 1] * iR[t - 1]),
                            n = iN[(t - 1) % iN.length];
                        this._blur(e, t - 1, t, i, n)
                    }
                    t.autoClear = i
                }
                _blur(e, t, i, n, r) {
                    let a = this._pingPongRenderTarget;
                    this._halfBlur(e, a, t, i, n, "latitudinal", r), this._halfBlur(a, e, i, i, n, "longitudinal", r)
                }
                _halfBlur(e, t, i, n, r, a, s) {
                    let o = this._renderer,
                        l = this._blurMaterial;
                    "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
                    let h = new tZ(iL[n], l),
                        u = l.uniforms,
                        c = iA[i] - 1,
                        d = isFinite(r) ? Math.PI / (2 * c) : 2 * Math.PI / 39,
                        p = r / d,
                        f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
                    f > 20 && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);
                    let m = [],
                        g = 0;
                    for (let e = 0; e < 20; ++e) {
                        let t = e / p,
                            i = Math.exp(-t * t / 2);
                        m.push(i), 0 == e ? g += i : e < f && (g += 2 * i)
                    }
                    for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
                    u.envMap.value = e.texture, u.samples.value = f, u.weights.value = m, u.latitudinal.value = "latitudinal" === a, s && (u.poleAxis.value = s), u.dTheta.value = d, u.mipInt.value = 8 - i, u.inputEncoding.value = iw[e.texture.encoding], u.outputEncoding.value = iw[e.texture.encoding];
                    let v = iA[n],
                        x = 3 * Math.max(0, 256 - 2 * v),
                        y = (0 === n ? 0 : 512) + 2 * v * (n > 4 ? n - 8 + 4 : 0);
                    iB(t, x, y, 3 * v, 2 * v), o.setRenderTarget(t), o.render(h, iE)
                }
            }

            function iF(e) {
                let t = new et(768, 768, e);
                return t.texture.mapping = 306, t.texture.name = "PMREM.cubeUv", t.scissorTest = !0, t
            }

            function iB(e, t, i, n, r) {
                e.viewport.set(t, i, n, r), e.scissor.set(t, i, n, r)
            }

            function iU() {
                let e = new Y(1, 1),
                    t = new i_({
                        name: "EquirectangularToCubeUV",
                        uniforms: {
                            envMap: {
                                value: null
                            },
                            texelSize: {
                                value: e
                            },
                            inputEncoding: {
                                value: iw[C]
                            },
                            outputEncoding: {
                                value: iw[C]
                            }
                        },
                        vertexShader: iG(),
                        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${iV()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                    });
                return t
            }

            function iH() {
                let e = new i_({
                    name: "CubemapToCubeUV",
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        inputEncoding: {
                            value: iw[C]
                        },
                        outputEncoding: {
                            value: iw[C]
                        }
                    },
                    vertexShader: iG(),
                    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${iV()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,
                    blending: 0,
                    depthTest: !1,
                    depthWrite: !1
                });
                return e
            }

            function iG() {
                return `

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
            }

            function iV() {
                return `

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`
            }

            function ik(e) {
                let t = new WeakMap,
                    i = null;

                function n(e) {
                    let i = e.target;
                    i.removeEventListener("dispose", n);
                    let r = t.get(i);
                    void 0 !== r && (r.delete(i), r.dispose())
                }
                return {
                    get: function(r) {
                        if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
                            let a = r.mapping,
                                s = 303 === a || 304 === a,
                                o = 301 === a || 302 === a;
                            if (s || o) {
                                if (t.has(r)) return t.get(r).texture;
                                {
                                    let a = r.image;
                                    if (!(s && a && a.height > 0 || o && a && function(e) {
                                            let t = 0;
                                            for (let i = 0; i < 6; i++) void 0 !== e[i] && t++;
                                            return 6 === t
                                        }(a))) return null;
                                    {
                                        let a = e.getRenderTarget();
                                        null === i && (i = new iO(e));
                                        let o = s ? i.fromEquirectangular(r) : i.fromCubemap(r);
                                        return t.set(r, o), e.setRenderTarget(a), r.addEventListener("dispose", n), o.texture
                                    }
                                }
                            }
                        }
                        return r
                    },
                    dispose: function() {
                        t = new WeakMap, null !== i && (i.dispose(), i = null)
                    }
                }
            }

            function iW(e) {
                let t = {};

                function i(i) {
                    let n;
                    if (void 0 !== t[i]) return t[i];
                    switch (i) {
                        case "WEBGL_depth_texture":
                            n = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                            break;
                        case "EXT_texture_filter_anisotropic":
                            n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                            break;
                        case "WEBGL_compressed_texture_s3tc":
                            n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                            break;
                        case "WEBGL_compressed_texture_pvrtc":
                            n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                            break;
                        default:
                            n = e.getExtension(i)
                    }
                    return t[i] = n, n
                }
                return {
                    has: function(e) {
                        return null !== i(e)
                    },
                    init: function(e) {
                        e.isWebGL2 ? i("EXT_color_buffer_float") : (i("WEBGL_depth_texture"), i("OES_texture_float"), i("OES_texture_half_float"), i("OES_texture_half_float_linear"), i("OES_standard_derivatives"), i("OES_element_index_uint"), i("OES_vertex_array_object"), i("ANGLE_instanced_arrays")), i("OES_texture_float_linear"), i("EXT_color_buffer_half_float")
                    },
                    get: function(e) {
                        let t = i(e);
                        return null === t && console.warn("THREE.WebGLRenderer: " + e + " extension not supported."), t
                    }
                }
            }

            function ij(e, t, i, n) {
                let r = {},
                    a = new WeakMap;

                function s(e) {
                    let o = e.target;
                    for (let e in null !== o.index && t.remove(o.index), o.attributes) t.remove(o.attributes[e]);
                    o.removeEventListener("dispose", s), delete r[o.id];
                    let l = a.get(o);
                    l && (t.remove(l), a.delete(o)), n.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, i.memory.geometries--
                }

                function o(e) {
                    let i = [],
                        n = e.index,
                        r = e.attributes.position,
                        s = 0;
                    if (null !== n) {
                        let e = n.array;
                        s = n.version;
                        for (let t = 0, n = e.length; t < n; t += 3) {
                            let n = e[t + 0],
                                r = e[t + 1],
                                a = e[t + 2];
                            i.push(n, r, r, a, a, n)
                        }
                    } else {
                        let e = r.array;
                        s = r.version;
                        for (let t = 0, n = e.length / 3 - 1; t < n; t += 3) {
                            let e = t + 0,
                                n = t + 1,
                                r = t + 2;
                            i.push(e, n, n, r, r, e)
                        }
                    }
                    let o = new(tS(i) > 65535 ? tb : tM)(i, 1);
                    o.version = s;
                    let l = a.get(e);
                    l && t.remove(l), a.set(e, o)
                }
                return {
                    get: function(e, t) {
                        return !0 === r[t.id] || (t.addEventListener("dispose", s), r[t.id] = !0, i.memory.geometries++), t
                    },
                    update: function(e) {
                        let i = e.attributes;
                        for (let e in i) t.update(i[e], 34962);
                        let n = e.morphAttributes;
                        for (let e in n) {
                            let i = n[e];
                            for (let e = 0, n = i.length; e < n; e++) t.update(i[e], 34962)
                        }
                    },
                    getWireframeAttribute: function(e) {
                        let t = a.get(e);
                        if (t) {
                            let i = e.index;
                            null !== i && t.version < i.version && o(e)
                        } else o(e);
                        return a.get(e)
                    }
                }
            }

            function iq(e, t, i, n) {
                let r, a, s;
                let o = n.isWebGL2;
                this.setMode = function(e) {
                    r = e
                }, this.setIndex = function(e) {
                    a = e.type, s = e.bytesPerElement
                }, this.render = function(t, n) {
                    e.drawElements(r, n, a, t * s), i.update(n, r, 1)
                }, this.renderInstances = function(n, l, h) {
                    let u, c;
                    if (0 !== h) {
                        if (o) u = e, c = "drawElementsInstanced";
                        else if (u = t.get("ANGLE_instanced_arrays"), c = "drawElementsInstancedANGLE", null === u) {
                            console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                            return
                        }
                        u[c](r, l, a, n * s, h), i.update(l, r, h)
                    }
                }
            }

            function iX(e) {
                let t = {
                    frame: 0,
                    calls: 0,
                    triangles: 0,
                    points: 0,
                    lines: 0
                };
                return {
                    memory: {
                        geometries: 0,
                        textures: 0
                    },
                    render: t,
                    programs: null,
                    autoReset: !0,
                    reset: function() {
                        t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
                    },
                    update: function(e, i, n) {
                        switch (t.calls++, i) {
                            case 4:
                                t.triangles += n * (e / 3);
                                break;
                            case 1:
                                t.lines += n * (e / 2);
                                break;
                            case 3:
                                t.lines += n * (e - 1);
                                break;
                            case 2:
                                t.lines += n * e;
                                break;
                            case 0:
                                t.points += n * e;
                                break;
                            default:
                                console.error("THREE.WebGLInfo: Unknown draw mode:", i)
                        }
                    }
                }
            }

            function iY(e, t) {
                return e[0] - t[0]
            }

            function iJ(e, t) {
                return Math.abs(t[1]) - Math.abs(e[1])
            }

            function iZ(e) {
                let t = {},
                    i = new Float32Array(8),
                    n = [];
                for (let e = 0; e < 8; e++) n[e] = [e, 0];
                return {
                    update: function(r, a, s, o) {
                        let l = r.morphTargetInfluences,
                            h = void 0 === l ? 0 : l.length,
                            u = t[a.id];
                        if (void 0 === u || u.length !== h) {
                            u = [];
                            for (let e = 0; e < h; e++) u[e] = [e, 0];
                            t[a.id] = u
                        }
                        for (let e = 0; e < h; e++) {
                            let t = u[e];
                            t[0] = e, t[1] = l[e]
                        }
                        u.sort(iJ);
                        for (let e = 0; e < 8; e++) e < h && u[e][1] ? (n[e][0] = u[e][0], n[e][1] = u[e][1]) : (n[e][0] = Number.MAX_SAFE_INTEGER, n[e][1] = 0);
                        n.sort(iY);
                        let c = a.morphAttributes.position,
                            d = a.morphAttributes.normal,
                            p = 0;
                        for (let e = 0; e < 8; e++) {
                            let t = n[e],
                                r = t[0],
                                s = t[1];
                            r !== Number.MAX_SAFE_INTEGER && s ? (c && a.getAttribute("morphTarget" + e) !== c[r] && a.setAttribute("morphTarget" + e, c[r]), d && a.getAttribute("morphNormal" + e) !== d[r] && a.setAttribute("morphNormal" + e, d[r]), i[e] = s, p += s) : (c && !0 === a.hasAttribute("morphTarget" + e) && a.deleteAttribute("morphTarget" + e), d && !0 === a.hasAttribute("morphNormal" + e) && a.deleteAttribute("morphNormal" + e), i[e] = 0)
                        }
                        let f = a.morphTargetsRelative ? 1 : 1 - p;
                        o.getUniforms().setValue(e, "morphTargetBaseInfluence", f), o.getUniforms().setValue(e, "morphTargetInfluences", i)
                    }
                }
            }

            function iQ(e, t, i, n) {
                let r = new WeakMap;

                function a(e) {
                    let t = e.target;
                    t.removeEventListener("dispose", a), i.remove(t.instanceMatrix), null !== t.instanceColor && i.remove(t.instanceColor)
                }
                return {
                    update: function(e) {
                        let s = n.render.frame,
                            o = e.geometry,
                            l = t.get(e, o);
                        return r.get(l) !== s && (t.update(l), r.set(l, s)), e.isInstancedMesh && (!1 === e.hasEventListener("dispose", a) && e.addEventListener("dispose", a), i.update(e.instanceMatrix, 34962), null !== e.instanceColor && i.update(e.instanceColor, 34962)), l
                    },
                    dispose: function() {
                        r = new WeakMap
                    }
                }
            }
            class iK extends K {
                constructor(e = null, t = 1, i = 1, n = 1) {
                    super(null), this.image = {
                        data: e,
                        width: t,
                        height: i,
                        depth: n
                    }, this.magFilter = p, this.minFilter = p, this.wrapR = c, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
                }
            }
            iK.prototype.isDataTexture2DArray = !0;
            class i$ extends K {
                constructor(e = null, t = 1, i = 1, n = 1) {
                    super(null), this.image = {
                        data: e,
                        width: t,
                        height: i,
                        depth: n
                    }, this.magFilter = p, this.minFilter = p, this.wrapR = c, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
                }
            }
            i$.prototype.isDataTexture3D = !0;
            let i0 = new K,
                i1 = new iK,
                i3 = new i$,
                i2 = new t6,
                i4 = [],
                i5 = [],
                i6 = new Float32Array(16),
                i7 = new Float32Array(9),
                i8 = new Float32Array(4);

            function i9(e, t, i) {
                let n = e[0];
                if (n <= 0 || n > 0) return e;
                let r = t * i,
                    a = i4[r];
                if (void 0 === a && (a = new Float32Array(r), i4[r] = a), 0 !== t) {
                    n.toArray(a, 0);
                    for (let n = 1, r = 0; n !== t; ++n) r += i, e[n].toArray(a, r)
                }
                return a
            }

            function ne(e, t) {
                if (e.length !== t.length) return !1;
                for (let i = 0, n = e.length; i < n; i++)
                    if (e[i] !== t[i]) return !1;
                return !0
            }

            function nt(e, t) {
                for (let i = 0, n = t.length; i < n; i++) e[i] = t[i]
            }

            function ni(e, t) {
                let i = i5[t];
                void 0 === i && (i = new Int32Array(t), i5[t] = i);
                for (let n = 0; n !== t; ++n) i[n] = e.allocateTextureUnit();
                return i
            }

            function nn(e, t) {
                let i = this.cache;
                i[0] !== t && (e.uniform1f(this.addr, t), i[0] = t)
            }

            function nr(e, t) {
                let i = this.cache;
                if (void 0 !== t.x)(i[0] !== t.x || i[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), i[0] = t.x, i[1] = t.y);
                else {
                    if (ne(i, t)) return;
                    e.uniform2fv(this.addr, t), nt(i, t)
                }
            }

            function na(e, t) {
                let i = this.cache;
                if (void 0 !== t.x)(i[0] !== t.x || i[1] !== t.y || i[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), i[0] = t.x, i[1] = t.y, i[2] = t.z);
                else if (void 0 !== t.r)(i[0] !== t.r || i[1] !== t.g || i[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), i[0] = t.r, i[1] = t.g, i[2] = t.b);
                else {
                    if (ne(i, t)) return;
                    e.uniform3fv(this.addr, t), nt(i, t)
                }
            }

            function ns(e, t) {
                let i = this.cache;
                if (void 0 !== t.x)(i[0] !== t.x || i[1] !== t.y || i[2] !== t.z || i[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), i[0] = t.x, i[1] = t.y, i[2] = t.z, i[3] = t.w);
                else {
                    if (ne(i, t)) return;
                    e.uniform4fv(this.addr, t), nt(i, t)
                }
            }

            function no(e, t) {
                let i = this.cache,
                    n = t.elements;
                if (void 0 === n) {
                    if (ne(i, t)) return;
                    e.uniformMatrix2fv(this.addr, !1, t), nt(i, t)
                } else {
                    if (ne(i, n)) return;
                    i8.set(n), e.uniformMatrix2fv(this.addr, !1, i8), nt(i, n)
                }
            }

            function nl(e, t) {
                let i = this.cache,
                    n = t.elements;
                if (void 0 === n) {
                    if (ne(i, t)) return;
                    e.uniformMatrix3fv(this.addr, !1, t), nt(i, t)
                } else {
                    if (ne(i, n)) return;
                    i7.set(n), e.uniformMatrix3fv(this.addr, !1, i7), nt(i, n)
                }
            }

            function nh(e, t) {
                let i = this.cache,
                    n = t.elements;
                if (void 0 === n) {
                    if (ne(i, t)) return;
                    e.uniformMatrix4fv(this.addr, !1, t), nt(i, t)
                } else {
                    if (ne(i, n)) return;
                    i6.set(n), e.uniformMatrix4fv(this.addr, !1, i6), nt(i, n)
                }
            }

            function nu(e, t) {
                let i = this.cache;
                i[0] !== t && (e.uniform1i(this.addr, t), i[0] = t)
            }

            function nc(e, t) {
                let i = this.cache;
                ne(i, t) || (e.uniform2iv(this.addr, t), nt(i, t))
            }

            function nd(e, t) {
                let i = this.cache;
                ne(i, t) || (e.uniform3iv(this.addr, t), nt(i, t))
            }

            function np(e, t) {
                let i = this.cache;
                ne(i, t) || (e.uniform4iv(this.addr, t), nt(i, t))
            }

            function nf(e, t) {
                let i = this.cache;
                i[0] !== t && (e.uniform1ui(this.addr, t), i[0] = t)
            }

            function nm(e, t) {
                let i = this.cache;
                ne(i, t) || (e.uniform2uiv(this.addr, t), nt(i, t))
            }

            function ng(e, t) {
                let i = this.cache;
                ne(i, t) || (e.uniform3uiv(this.addr, t), nt(i, t))
            }

            function nv(e, t) {
                let i = this.cache;
                ne(i, t) || (e.uniform4uiv(this.addr, t), nt(i, t))
            }

            function nx(e, t, i) {
                let n = this.cache,
                    r = i.allocateTextureUnit();
                n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.safeSetTexture2D(t || i0, r)
            }

            function ny(e, t, i) {
                let n = this.cache,
                    r = i.allocateTextureUnit();
                n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture3D(t || i3, r)
            }

            function n_(e, t, i) {
                let n = this.cache,
                    r = i.allocateTextureUnit();
                n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.safeSetTextureCube(t || i2, r)
            }

            function nM(e, t, i) {
                let n = this.cache,
                    r = i.allocateTextureUnit();
                n[0] !== r && (e.uniform1i(this.addr, r), n[0] = r), i.setTexture2DArray(t || i1, r)
            }

            function nb(e, t) {
                e.uniform1fv(this.addr, t)
            }

            function nw(e, t) {
                let i = i9(t, this.size, 2);
                e.uniform2fv(this.addr, i)
            }

            function nS(e, t) {
                let i = i9(t, this.size, 3);
                e.uniform3fv(this.addr, i)
            }

            function nT(e, t) {
                let i = i9(t, this.size, 4);
                e.uniform4fv(this.addr, i)
            }

            function nE(e, t) {
                let i = i9(t, this.size, 4);
                e.uniformMatrix2fv(this.addr, !1, i)
            }

            function nL(e, t) {
                let i = i9(t, this.size, 9);
                e.uniformMatrix3fv(this.addr, !1, i)
            }

            function nA(e, t) {
                let i = i9(t, this.size, 16);
                e.uniformMatrix4fv(this.addr, !1, i)
            }

            function nR(e, t) {
                e.uniform1iv(this.addr, t)
            }

            function nC(e, t) {
                e.uniform2iv(this.addr, t)
            }

            function nP(e, t) {
                e.uniform3iv(this.addr, t)
            }

            function nI(e, t) {
                e.uniform4iv(this.addr, t)
            }

            function nD(e, t) {
                e.uniform1uiv(this.addr, t)
            }

            function nN(e, t) {
                e.uniform2uiv(this.addr, t)
            }

            function nz(e, t) {
                e.uniform3uiv(this.addr, t)
            }

            function nO(e, t) {
                e.uniform4uiv(this.addr, t)
            }

            function nF(e, t, i) {
                let n = t.length,
                    r = ni(i, n);
                e.uniform1iv(this.addr, r);
                for (let e = 0; e !== n; ++e) i.safeSetTexture2D(t[e] || i0, r[e])
            }

            function nB(e, t, i) {
                let n = t.length,
                    r = ni(i, n);
                e.uniform1iv(this.addr, r);
                for (let e = 0; e !== n; ++e) i.safeSetTextureCube(t[e] || i2, r[e])
            }

            function nU(e, t, i) {
                this.id = e, this.addr = i, this.cache = [], this.setValue = function(e) {
                    switch (e) {
                        case 5126:
                            return nn;
                        case 35664:
                            return nr;
                        case 35665:
                            return na;
                        case 35666:
                            return ns;
                        case 35674:
                            return no;
                        case 35675:
                            return nl;
                        case 35676:
                            return nh;
                        case 5124:
                        case 35670:
                            return nu;
                        case 35667:
                        case 35671:
                            return nc;
                        case 35668:
                        case 35672:
                            return nd;
                        case 35669:
                        case 35673:
                            return np;
                        case 5125:
                            return nf;
                        case 36294:
                            return nm;
                        case 36295:
                            return ng;
                        case 36296:
                            return nv;
                        case 35678:
                        case 36198:
                        case 36298:
                        case 36306:
                        case 35682:
                            return nx;
                        case 35679:
                        case 36299:
                        case 36307:
                            return ny;
                        case 35680:
                        case 36300:
                        case 36308:
                        case 36293:
                            return n_;
                        case 36289:
                        case 36303:
                        case 36311:
                        case 36292:
                            return nM
                    }
                }(t.type)
            }

            function nH(e, t, i) {
                this.id = e, this.addr = i, this.cache = [], this.size = t.size, this.setValue = function(e) {
                    switch (e) {
                        case 5126:
                            return nb;
                        case 35664:
                            return nw;
                        case 35665:
                            return nS;
                        case 35666:
                            return nT;
                        case 35674:
                            return nE;
                        case 35675:
                            return nL;
                        case 35676:
                            return nA;
                        case 5124:
                        case 35670:
                            return nR;
                        case 35667:
                        case 35671:
                            return nC;
                        case 35668:
                        case 35672:
                            return nP;
                        case 35669:
                        case 35673:
                            return nI;
                        case 5125:
                            return nD;
                        case 36294:
                            return nN;
                        case 36295:
                            return nz;
                        case 36296:
                            return nO;
                        case 35678:
                        case 36198:
                        case 36298:
                        case 36306:
                        case 35682:
                            return nF;
                        case 35680:
                        case 36300:
                        case 36308:
                        case 36293:
                            return nB
                    }
                }(t.type)
            }

            function nG(e) {
                this.id = e, this.seq = [], this.map = {}
            }
            nH.prototype.updateCache = function(e) {
                let t = this.cache;
                e instanceof Float32Array && t.length !== e.length && (this.cache = new Float32Array(e.length)), nt(t, e)
            }, nG.prototype.setValue = function(e, t, i) {
                let n = this.seq;
                for (let r = 0, a = n.length; r !== a; ++r) {
                    let a = n[r];
                    a.setValue(e, t[a.id], i)
                }
            };
            let nV = /(\w+)(\])?(\[|\.)?/g;

            function nk(e, t) {
                e.seq.push(t), e.map[t.id] = t
            }

            function nW(e, t) {
                this.seq = [], this.map = {};
                let i = e.getProgramParameter(t, 35718);
                for (let n = 0; n < i; ++n) {
                    let i = e.getActiveUniform(t, n),
                        r = e.getUniformLocation(t, i.name);
                    ! function(e, t, i) {
                        let n = e.name,
                            r = n.length;
                        for (nV.lastIndex = 0;;) {
                            let a = nV.exec(n),
                                s = nV.lastIndex,
                                o = a[1],
                                l = "]" === a[2],
                                h = a[3];
                            if (l && (o |= 0), void 0 === h || "[" === h && s + 2 === r) {
                                nk(i, void 0 === h ? new nU(o, e, t) : new nH(o, e, t));
                                break
                            } {
                                let e = i.map,
                                    t = e[o];
                                void 0 === t && nk(i, t = new nG(o)), i = t
                            }
                        }
                    }(i, r, this)
                }
            }

            function nj(e, t, i) {
                let n = e.createShader(t);
                return e.shaderSource(n, i), e.compileShader(n), n
            }
            nW.prototype.setValue = function(e, t, i, n) {
                let r = this.map[t];
                void 0 !== r && r.setValue(e, i, n)
            }, nW.prototype.setOptional = function(e, t, i) {
                let n = t[i];
                void 0 !== n && this.setValue(e, i, n)
            }, nW.upload = function(e, t, i, n) {
                for (let r = 0, a = t.length; r !== a; ++r) {
                    let a = t[r],
                        s = i[a.id];
                    !1 !== s.needsUpdate && a.setValue(e, s.value, n)
                }
            }, nW.seqWithValue = function(e, t) {
                let i = [];
                for (let n = 0, r = e.length; n !== r; ++n) {
                    let r = e[n];
                    r.id in t && i.push(r)
                }
                return i
            };
            let nq = 0;

            function nX(e) {
                switch (e) {
                    case C:
                        return ["Linear", "( value )"];
                    case P:
                        return ["sRGB", "( value )"];
                    case I:
                        return ["RGBE", "( value )"];
                    case 3004:
                        return ["RGBM", "( value, 7.0 )"];
                    case 3005:
                        return ["RGBM", "( value, 16.0 )"];
                    case 3006:
                        return ["RGBD", "( value, 256.0 )"];
                    case 3007:
                        return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
                    case 3003:
                        return ["LogLuv", "( value )"];
                    default:
                        return console.warn("THREE.WebGLProgram: Unsupported encoding:", e), ["Linear", "( value )"]
                }
            }

            function nY(e, t, i) {
                let n = e.getShaderParameter(t, 35713),
                    r = e.getShaderInfoLog(t).trim();
                if (n && "" === r) return "";
                let a = e.getShaderSource(t);
                return "THREE.WebGLShader: gl.getShaderInfoLog() " + i + "\n" + r + function(e) {
                    let t = e.split("\n");
                    for (let e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
                    return t.join("\n")
                }(a)
            }

            function nJ(e, t) {
                let i = nX(t);
                return "vec4 " + e + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
            }

            function nZ(e) {
                return "" !== e
            }

            function nQ(e, t) {
                return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
            }

            function nK(e, t) {
                return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
            }
            let n$ = /^[ \t]*#include +<([\w\d./]+)>/gm;

            function n0(e) {
                return e.replace(n$, n1)
            }

            function n1(e, t) {
                let i = ih[t];
                if (void 0 === i) throw Error("Can not resolve #include <" + t + ">");
                return n0(i)
            }
            let n3 = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
                n2 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

            function n4(e) {
                return e.replace(n2, n6).replace(n3, n5)
            }

            function n5(e, t, i, n) {
                return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), n6(e, t, i, n)
            }

            function n6(e, t, i, n) {
                let r = "";
                for (let e = parseInt(t); e < parseInt(i); e++) r += n.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
                return r
            }

            function n7(e) {
                let t = "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
                return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"), t
            }

            function n8(e, t, i, n) {
                let r, a, s, o, l;
                let u = e.getContext(),
                    c = i.defines,
                    d = i.vertexShader,
                    p = i.fragmentShader,
                    f = (l = "SHADOWMAP_TYPE_BASIC", 1 === i.shadowMapType ? l = "SHADOWMAP_TYPE_PCF" : 2 === i.shadowMapType ? l = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === i.shadowMapType && (l = "SHADOWMAP_TYPE_VSM"), l),
                    m = function(e) {
                        let t = "ENVMAP_TYPE_CUBE";
                        if (e.envMap) switch (e.envMapMode) {
                            case 301:
                            case 302:
                                t = "ENVMAP_TYPE_CUBE";
                                break;
                            case 306:
                            case 307:
                                t = "ENVMAP_TYPE_CUBE_UV"
                        }
                        return t
                    }(i),
                    g = function(e) {
                        let t = "ENVMAP_MODE_REFLECTION";
                        if (e.envMap) switch (e.envMapMode) {
                            case 302:
                            case 307:
                                t = "ENVMAP_MODE_REFRACTION"
                        }
                        return t
                    }(i),
                    v = function(e) {
                        let t = "ENVMAP_BLENDING_NONE";
                        if (e.envMap) switch (e.combine) {
                            case 0:
                                t = "ENVMAP_BLENDING_MULTIPLY";
                                break;
                            case 1:
                                t = "ENVMAP_BLENDING_MIX";
                                break;
                            case 2:
                                t = "ENVMAP_BLENDING_ADD"
                        }
                        return t
                    }(i),
                    x = e.gammaFactor > 0 ? e.gammaFactor : 1,
                    y = i.isWebGL2 ? "" : function(e) {
                        let t = [e.extensionDerivatives || e.envMapCubeUV || e.bumpMap || e.tangentSpaceNormalMap || e.clearcoatNormalMap || e.flatShading || "physical" === e.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (e.extensionFragDepth || e.logarithmicDepthBuffer) && e.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", e.extensionDrawBuffers && e.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (e.extensionShaderTextureLOD || e.envMap || e.transmission > 0) && e.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
                        return t.filter(nZ).join("\n")
                    }(i),
                    _ = function(e) {
                        let t = [];
                        for (let i in e) {
                            let n = e[i];
                            !1 !== n && t.push("#define " + i + " " + n)
                        }
                        return t.join("\n")
                    }(c),
                    M = u.createProgram(),
                    b = i.glslVersion ? "#version " + i.glslVersion + "\n" : "";
                i.isRawShaderMaterial ? ((r = [_].filter(nZ).join("\n")).length > 0 && (r += "\n"), (a = [y, _].filter(nZ).join("\n")).length > 0 && (a += "\n")) : (r = [n7(i), "#define SHADER_NAME " + i.shaderName, _, i.instancing ? "#define USE_INSTANCING" : "", i.instancingColor ? "#define USE_INSTANCING_COLOR" : "", i.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + x, "#define MAX_BONES " + i.maxBones, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + g : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.displacementMap && i.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularTintMap ? "#define USE_SPECULARTINTMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.skinning ? "#define USE_SKINNING" : "", i.useVertexTexture ? "#define BONE_TEXTURE" : "", i.morphTargets ? "#define USE_MORPHTARGETS" : "", i.morphNormals && !1 === i.flatShading ? "#define USE_MORPHNORMALS" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + f : "", i.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(nZ).join("\n"), a = [y, n7(i), "#define SHADER_NAME " + i.shaderName, _, i.alphaTest ? "#define ALPHATEST " + i.alphaTest + (i.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + x, i.useFog && i.fog ? "#define USE_FOG" : "", i.useFog && i.fogExp2 ? "#define FOG_EXP2" : "", i.map ? "#define USE_MAP" : "", i.matcap ? "#define USE_MATCAP" : "", i.envMap ? "#define USE_ENVMAP" : "", i.envMap ? "#define " + m : "", i.envMap ? "#define " + g : "", i.envMap ? "#define " + v : "", i.lightMap ? "#define USE_LIGHTMAP" : "", i.aoMap ? "#define USE_AOMAP" : "", i.emissiveMap ? "#define USE_EMISSIVEMAP" : "", i.bumpMap ? "#define USE_BUMPMAP" : "", i.normalMap ? "#define USE_NORMALMAP" : "", i.normalMap && i.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", i.normalMap && i.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", i.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", i.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", i.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", i.specularMap ? "#define USE_SPECULARMAP" : "", i.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "", i.specularTintMap ? "#define USE_SPECULARTINTMAP" : "", i.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", i.metalnessMap ? "#define USE_METALNESSMAP" : "", i.alphaMap ? "#define USE_ALPHAMAP" : "", i.sheen ? "#define USE_SHEEN" : "", i.transmission ? "#define USE_TRANSMISSION" : "", i.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", i.thicknessMap ? "#define USE_THICKNESSMAP" : "", i.vertexTangents ? "#define USE_TANGENT" : "", i.vertexColors || i.instancingColor ? "#define USE_COLOR" : "", i.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", i.vertexUvs ? "#define USE_UV" : "", i.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", i.gradientMap ? "#define USE_GRADIENTMAP" : "", i.flatShading ? "#define FLAT_SHADED" : "", i.doubleSided ? "#define DOUBLE_SIDED" : "", i.flipSided ? "#define FLIP_SIDED" : "", i.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", i.shadowMapEnabled ? "#define " + f : "", i.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", i.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", i.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", i.logarithmicDepthBuffer && i.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (i.extensionShaderTextureLOD || i.envMap) && i.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== i.toneMapping ? "#define TONE_MAPPING" : "", 0 !== i.toneMapping ? ih.tonemapping_pars_fragment : "", 0 !== i.toneMapping ? function(e, t) {
                    let i;
                    switch (t) {
                        case h:
                            i = "Linear";
                            break;
                        case 2:
                            i = "Reinhard";
                            break;
                        case 3:
                            i = "OptimizedCineon";
                            break;
                        case 4:
                            i = "ACESFilmic";
                            break;
                        case 5:
                            i = "Custom";
                            break;
                        default:
                            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), i = "Linear"
                    }
                    return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
                }("toneMapping", i.toneMapping) : "", i.dithering ? "#define DITHERING" : "", ih.encodings_pars_fragment, i.map ? nJ("mapTexelToLinear", i.mapEncoding) : "", i.matcap ? nJ("matcapTexelToLinear", i.matcapEncoding) : "", i.envMap ? nJ("envMapTexelToLinear", i.envMapEncoding) : "", i.emissiveMap ? nJ("emissiveMapTexelToLinear", i.emissiveMapEncoding) : "", i.specularTintMap ? nJ("specularTintMapTexelToLinear", i.specularTintMapEncoding) : "", i.lightMap ? nJ("lightMapTexelToLinear", i.lightMapEncoding) : "", function(e, t) {
                    let i = nX(t);
                    return "vec4 " + e + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
                }("linearToOutputTexel", i.outputEncoding), i.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(nZ).join("\n")), d = nK(d = nQ(d = n0(d), i), i), p = nK(p = nQ(p = n0(p), i), i), d = n4(d), p = n4(p), i.isWebGL2 && !0 !== i.isRawShaderMaterial && (b = "#version 300 es\n", r = "#define attribute in\n#define varying out\n#define texture2D texture\n" + r, a = ["#define varying in", i.glslVersion === N ? "" : "out highp vec4 pc_fragColor;", i.glslVersion === N ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + a);
                let w = b + r + d,
                    S = b + a + p,
                    T = nj(u, 35633, w),
                    E = nj(u, 35632, S);
                if (u.attachShader(M, T), u.attachShader(M, E), void 0 !== i.index0AttributeName ? u.bindAttribLocation(M, 0, i.index0AttributeName) : !0 === i.morphTargets && u.bindAttribLocation(M, 0, "position"), u.linkProgram(M), e.debug.checkShaderErrors) {
                    let e = u.getProgramInfoLog(M).trim(),
                        t = u.getShaderInfoLog(T).trim(),
                        i = u.getShaderInfoLog(E).trim(),
                        n = !0,
                        s = !0;
                    if (!1 === u.getProgramParameter(M, 35714)) {
                        n = !1;
                        let t = nY(u, T, "vertex"),
                            i = nY(u, E, "fragment");
                        console.error("THREE.WebGLProgram: shader error: ", u.getError(), "35715", u.getProgramParameter(M, 35715), "gl.getProgramInfoLog", e, t, i)
                    } else "" !== e ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", e) : ("" === t || "" === i) && (s = !1);
                    s && (this.diagnostics = {
                        runnable: n,
                        programLog: e,
                        vertexShader: {
                            log: t,
                            prefix: r
                        },
                        fragmentShader: {
                            log: i,
                            prefix: a
                        }
                    })
                }
                return u.deleteShader(T), u.deleteShader(E), this.getUniforms = function() {
                    return void 0 === s && (s = new nW(u, M)), s
                }, this.getAttributes = function() {
                    return void 0 === o && (o = function(e, t) {
                        let i = {},
                            n = e.getProgramParameter(t, 35721);
                        for (let r = 0; r < n; r++) {
                            let n = e.getActiveAttrib(t, r),
                                a = n.name;
                            i[a] = e.getAttribLocation(t, a)
                        }
                        return i
                    }(u, M)), o
                }, this.destroy = function() {
                    n.releaseStatesOfProgram(this), u.deleteProgram(M), this.program = void 0
                }, this.name = i.shaderName, this.id = nq++, this.cacheKey = t, this.usedTimes = 1, this.program = M, this.vertexShader = T, this.fragmentShader = E, this
            }

            function n9(e, t, i, n, r, a, s) {
                let l = [],
                    h = r.isWebGL2,
                    u = r.logarithmicDepthBuffer,
                    c = r.floatVertexTextures,
                    d = r.maxVertexUniforms,
                    p = r.vertexTextures,
                    f = r.precision,
                    m = {
                        MeshDepthMaterial: "depth",
                        MeshDistanceMaterial: "distanceRGBA",
                        MeshNormalMaterial: "normal",
                        MeshBasicMaterial: "basic",
                        MeshLambertMaterial: "lambert",
                        MeshPhongMaterial: "phong",
                        MeshToonMaterial: "toon",
                        MeshStandardMaterial: "physical",
                        MeshPhysicalMaterial: "physical",
                        MeshMatcapMaterial: "matcap",
                        LineBasicMaterial: "basic",
                        LineDashedMaterial: "dashed",
                        PointsMaterial: "points",
                        ShadowMaterial: "shadow",
                        SpriteMaterial: "sprite"
                    },
                    g = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "specularIntensityMap", "specularTintMap", "specularTintMapEncoding", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexAlphas", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmission", "transmissionMap", "thicknessMap"];

                function v(e) {
                    let t;
                    return e && e.isTexture ? t = e.encoding : e && e.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), t = e.texture.encoding) : t = C, t
                }
                return {
                    getParameters: function(a, l, g, x, y) {
                        let _, M;
                        let b = x.fog,
                            w = a.isMeshStandardMaterial ? x.environment : null,
                            S = (a.isMeshStandardMaterial ? i : t).get(a.envMap || w),
                            T = m[a.type],
                            E = y.isSkinnedMesh ? function(e) {
                                let t = e.skeleton,
                                    i = t.bones;
                                if (c) return 1024;
                                {
                                    let e = Math.min(Math.floor((d - 20) / 4), i.length);
                                    return e < i.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + i.length + " bones. This GPU supports " + e + "."), 0) : e
                                }
                            }(y) : 0;
                        if (null !== a.precision && (f = r.getMaxPrecision(a.precision)) !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", f, "instead."), T) {
                            let e = ic[T];
                            _ = e.vertexShader, M = e.fragmentShader
                        } else _ = a.vertexShader, M = a.fragmentShader;
                        let L = e.getRenderTarget(),
                            A = {
                                isWebGL2: h,
                                shaderID: T,
                                shaderName: a.type,
                                vertexShader: _,
                                fragmentShader: M,
                                defines: a.defines,
                                isRawShaderMaterial: !0 === a.isRawShaderMaterial,
                                glslVersion: a.glslVersion,
                                precision: f,
                                instancing: !0 === y.isInstancedMesh,
                                instancingColor: !0 === y.isInstancedMesh && null !== y.instanceColor,
                                supportsVertexTextures: p,
                                outputEncoding: null !== L ? v(L.texture) : e.outputEncoding,
                                map: !!a.map,
                                mapEncoding: v(a.map),
                                matcap: !!a.matcap,
                                matcapEncoding: v(a.matcap),
                                envMap: !!S,
                                envMapMode: S && S.mapping,
                                envMapEncoding: v(S),
                                envMapCubeUV: !!S && (306 === S.mapping || 307 === S.mapping),
                                lightMap: !!a.lightMap,
                                lightMapEncoding: v(a.lightMap),
                                aoMap: !!a.aoMap,
                                emissiveMap: !!a.emissiveMap,
                                emissiveMapEncoding: v(a.emissiveMap),
                                bumpMap: !!a.bumpMap,
                                normalMap: !!a.normalMap,
                                objectSpaceNormalMap: 1 === a.normalMapType,
                                tangentSpaceNormalMap: a.normalMapType === D,
                                clearcoatMap: !!a.clearcoatMap,
                                clearcoatRoughnessMap: !!a.clearcoatRoughnessMap,
                                clearcoatNormalMap: !!a.clearcoatNormalMap,
                                displacementMap: !!a.displacementMap,
                                roughnessMap: !!a.roughnessMap,
                                metalnessMap: !!a.metalnessMap,
                                specularMap: !!a.specularMap,
                                specularIntensityMap: !!a.specularIntensityMap,
                                specularTintMap: !!a.specularTintMap,
                                specularTintMapEncoding: v(a.specularTintMap),
                                alphaMap: !!a.alphaMap,
                                gradientMap: !!a.gradientMap,
                                sheen: !!a.sheen,
                                transmission: !!a.transmission,
                                transmissionMap: !!a.transmissionMap,
                                thicknessMap: !!a.thicknessMap,
                                combine: a.combine,
                                vertexTangents: !!a.normalMap && !!y.geometry && !!y.geometry.attributes.tangent,
                                vertexColors: a.vertexColors,
                                vertexAlphas: !0 === a.vertexColors && !!y.geometry && !!y.geometry.attributes.color && 4 === y.geometry.attributes.color.itemSize,
                                vertexUvs: !!a.map || !!a.bumpMap || !!a.normalMap || !!a.specularMap || !!a.alphaMap || !!a.emissiveMap || !!a.roughnessMap || !!a.metalnessMap || !!a.clearcoatMap || !!a.clearcoatRoughnessMap || !!a.clearcoatNormalMap || !!a.displacementMap || !!a.transmissionMap || !!a.thicknessMap || !!a.specularIntensityMap || !!a.specularTintMap,
                                uvsVertexOnly: !(a.map || a.bumpMap || a.normalMap || a.specularMap || a.alphaMap || a.emissiveMap || a.roughnessMap || a.metalnessMap || a.clearcoatNormalMap || a.transmission || a.transmissionMap || a.thicknessMap || a.specularIntensityMap || a.specularTintMap) && !!a.displacementMap,
                                fog: !!b,
                                useFog: a.fog,
                                fogExp2: b && b.isFogExp2,
                                flatShading: !!a.flatShading,
                                sizeAttenuation: a.sizeAttenuation,
                                logarithmicDepthBuffer: u,
                                skinning: !0 === y.isSkinnedMesh && E > 0,
                                maxBones: E,
                                useVertexTexture: c,
                                morphTargets: !!y.geometry && !!y.geometry.morphAttributes.position,
                                morphNormals: !!y.geometry && !!y.geometry.morphAttributes.normal,
                                numDirLights: l.directional.length,
                                numPointLights: l.point.length,
                                numSpotLights: l.spot.length,
                                numRectAreaLights: l.rectArea.length,
                                numHemiLights: l.hemi.length,
                                numDirLightShadows: l.directionalShadowMap.length,
                                numPointLightShadows: l.pointShadowMap.length,
                                numSpotLightShadows: l.spotShadowMap.length,
                                numClippingPlanes: s.numPlanes,
                                numClipIntersection: s.numIntersection,
                                dithering: a.dithering,
                                shadowMapEnabled: e.shadowMap.enabled && g.length > 0,
                                shadowMapType: e.shadowMap.type,
                                toneMapping: a.toneMapped ? e.toneMapping : 0,
                                physicallyCorrectLights: e.physicallyCorrectLights,
                                premultipliedAlpha: a.premultipliedAlpha,
                                alphaTest: a.alphaTest,
                                doubleSided: a.side === o,
                                flipSided: 1 === a.side,
                                depthPacking: void 0 !== a.depthPacking && a.depthPacking,
                                index0AttributeName: a.index0AttributeName,
                                extensionDerivatives: a.extensions && a.extensions.derivatives,
                                extensionFragDepth: a.extensions && a.extensions.fragDepth,
                                extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
                                extensionShaderTextureLOD: a.extensions && a.extensions.shaderTextureLOD,
                                rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
                                rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
                                rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
                                customProgramCacheKey: a.customProgramCacheKey()
                            };
                        return A
                    },
                    getProgramCacheKey: function(t) {
                        let i = [];
                        if (t.shaderID ? i.push(t.shaderID) : (i.push(t.fragmentShader), i.push(t.vertexShader)), void 0 !== t.defines)
                            for (let e in t.defines) i.push(e), i.push(t.defines[e]);
                        if (!1 === t.isRawShaderMaterial) {
                            for (let e = 0; e < g.length; e++) i.push(t[g[e]]);
                            i.push(e.outputEncoding), i.push(e.gammaFactor)
                        }
                        return i.push(t.customProgramCacheKey), i.join()
                    },
                    getUniforms: function(e) {
                        let t;
                        let i = m[e.type];
                        if (i) {
                            let e = ic[i];
                            t = t1.clone(e.uniforms)
                        } else t = e.uniforms;
                        return t
                    },
                    acquireProgram: function(t, i) {
                        let n;
                        for (let e = 0, t = l.length; e < t; e++) {
                            let t = l[e];
                            if (t.cacheKey === i) {
                                n = t, ++n.usedTimes;
                                break
                            }
                        }
                        return void 0 === n && (n = new n8(e, i, t, a), l.push(n)), n
                    },
                    releaseProgram: function(e) {
                        if (0 == --e.usedTimes) {
                            let t = l.indexOf(e);
                            l[t] = l[l.length - 1], l.pop(), e.destroy()
                        }
                    },
                    programs: l
                }
            }

            function re() {
                let e = new WeakMap;
                return {
                    get: function(t) {
                        let i = e.get(t);
                        return void 0 === i && (i = {}, e.set(t, i)), i
                    },
                    remove: function(t) {
                        e.delete(t)
                    },
                    update: function(t, i, n) {
                        e.get(t)[i] = n
                    },
                    dispose: function() {
                        e = new WeakMap
                    }
                }
            }

            function rt(e, t) {
                return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program !== t.program ? e.program.id - t.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
            }

            function ri(e, t) {
                return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
            }

            function rn(e) {
                let t = [],
                    i = 0,
                    n = [],
                    r = [],
                    a = [],
                    s = {
                        id: -1
                    };

                function o(n, r, a, o, l, h) {
                    let u = t[i],
                        c = e.get(a);
                    return void 0 === u ? (u = {
                        id: n.id,
                        object: n,
                        geometry: r,
                        material: a,
                        program: c.program || s,
                        groupOrder: o,
                        renderOrder: n.renderOrder,
                        z: l,
                        group: h
                    }, t[i] = u) : (u.id = n.id, u.object = n, u.geometry = r, u.material = a, u.program = c.program || s, u.groupOrder = o, u.renderOrder = n.renderOrder, u.z = l, u.group = h), i++, u
                }
                return {
                    opaque: n,
                    transmissive: r,
                    transparent: a,
                    init: function() {
                        i = 0, n.length = 0, r.length = 0, a.length = 0
                    },
                    push: function(e, t, i, s, l, h) {
                        let u = o(e, t, i, s, l, h);
                        i.transmission > 0 ? r.push(u) : !0 === i.transparent ? a.push(u) : n.push(u)
                    },
                    unshift: function(e, t, i, s, l, h) {
                        let u = o(e, t, i, s, l, h);
                        i.transmission > 0 ? r.unshift(u) : !0 === i.transparent ? a.unshift(u) : n.unshift(u)
                    },
                    finish: function() {
                        for (let e = i, n = t.length; e < n; e++) {
                            let i = t[e];
                            if (null === i.id) break;
                            i.id = null, i.object = null, i.geometry = null, i.material = null, i.program = null, i.group = null
                        }
                    },
                    sort: function(e, t) {
                        n.length > 1 && n.sort(e || rt), r.length > 1 && r.sort(t || ri), a.length > 1 && a.sort(t || ri)
                    }
                }
            }

            function rr(e) {
                let t = new WeakMap;
                return {
                    get: function(i, n) {
                        let r;
                        return !1 === t.has(i) ? (r = new rn(e), t.set(i, [r])) : n >= t.get(i).length ? (r = new rn(e), t.get(i).push(r)) : r = t.get(i)[n], r
                    },
                    dispose: function() {
                        t = new WeakMap
                    }
                }
            }

            function ra() {
                let e = {};
                return {
                    get: function(t) {
                        let i;
                        if (void 0 !== e[t.id]) return e[t.id];
                        switch (t.type) {
                            case "DirectionalLight":
                                i = {
                                    direction: new er,
                                    color: new tg
                                };
                                break;
                            case "SpotLight":
                                i = {
                                    position: new er,
                                    direction: new er,
                                    color: new tg,
                                    distance: 0,
                                    coneCos: 0,
                                    penumbraCos: 0,
                                    decay: 0
                                };
                                break;
                            case "PointLight":
                                i = {
                                    position: new er,
                                    color: new tg,
                                    distance: 0,
                                    decay: 0
                                };
                                break;
                            case "HemisphereLight":
                                i = {
                                    direction: new er,
                                    skyColor: new tg,
                                    groundColor: new tg
                                };
                                break;
                            case "RectAreaLight":
                                i = {
                                    color: new tg,
                                    position: new er,
                                    halfWidth: new er,
                                    halfHeight: new er
                                }
                        }
                        return e[t.id] = i, i
                    }
                }
            }
            let rs = 0;

            function ro(e, t) {
                return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0)
            }

            function rl(e, t) {
                let i = new ra,
                    n = function() {
                        let e = {};
                        return {
                            get: function(t) {
                                let i;
                                if (void 0 !== e[t.id]) return e[t.id];
                                switch (t.type) {
                                    case "DirectionalLight":
                                    case "SpotLight":
                                        i = {
                                            shadowBias: 0,
                                            shadowNormalBias: 0,
                                            shadowRadius: 1,
                                            shadowMapSize: new Y
                                        };
                                        break;
                                    case "PointLight":
                                        i = {
                                            shadowBias: 0,
                                            shadowNormalBias: 0,
                                            shadowRadius: 1,
                                            shadowMapSize: new Y,
                                            shadowCameraNear: 1,
                                            shadowCameraFar: 1e3
                                        }
                                }
                                return e[t.id] = i, i
                            }
                        }
                    }(),
                    r = {
                        version: 0,
                        hash: {
                            directionalLength: -1,
                            pointLength: -1,
                            spotLength: -1,
                            rectAreaLength: -1,
                            hemiLength: -1,
                            numDirectionalShadows: -1,
                            numPointShadows: -1,
                            numSpotShadows: -1
                        },
                        ambient: [0, 0, 0],
                        probe: [],
                        directional: [],
                        directionalShadow: [],
                        directionalShadowMap: [],
                        directionalShadowMatrix: [],
                        spot: [],
                        spotShadow: [],
                        spotShadowMap: [],
                        spotShadowMatrix: [],
                        rectArea: [],
                        rectAreaLTC1: null,
                        rectAreaLTC2: null,
                        point: [],
                        pointShadow: [],
                        pointShadowMap: [],
                        pointShadowMatrix: [],
                        hemi: []
                    };
                for (let e = 0; e < 9; e++) r.probe.push(new er);
                let a = new er,
                    s = new ez,
                    o = new ez;
                return {
                    setup: function(a) {
                        let s = 0,
                            o = 0,
                            l = 0;
                        for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
                        let h = 0,
                            u = 0,
                            c = 0,
                            d = 0,
                            p = 0,
                            f = 0,
                            m = 0,
                            g = 0;
                        a.sort(ro);
                        for (let e = 0, t = a.length; e < t; e++) {
                            let t = a[e],
                                v = t.color,
                                x = t.intensity,
                                y = t.distance,
                                _ = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
                            if (t.isAmbientLight) s += v.r * x, o += v.g * x, l += v.b * x;
                            else if (t.isLightProbe)
                                for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(t.sh.coefficients[e], x);
                            else if (t.isDirectionalLight) {
                                let e = i.get(t);
                                if (e.color.copy(t.color).multiplyScalar(t.intensity), t.castShadow) {
                                    let e = t.shadow,
                                        i = n.get(t);
                                    i.shadowBias = e.bias, i.shadowNormalBias = e.normalBias, i.shadowRadius = e.radius, i.shadowMapSize = e.mapSize, r.directionalShadow[h] = i, r.directionalShadowMap[h] = _, r.directionalShadowMatrix[h] = t.shadow.matrix, f++
                                }
                                r.directional[h] = e, h++
                            } else if (t.isSpotLight) {
                                let e = i.get(t);
                                if (e.position.setFromMatrixPosition(t.matrixWorld), e.color.copy(v).multiplyScalar(x), e.distance = y, e.coneCos = Math.cos(t.angle), e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra)), e.decay = t.decay, t.castShadow) {
                                    let e = t.shadow,
                                        i = n.get(t);
                                    i.shadowBias = e.bias, i.shadowNormalBias = e.normalBias, i.shadowRadius = e.radius, i.shadowMapSize = e.mapSize, r.spotShadow[c] = i, r.spotShadowMap[c] = _, r.spotShadowMatrix[c] = t.shadow.matrix, g++
                                }
                                r.spot[c] = e, c++
                            } else if (t.isRectAreaLight) {
                                let e = i.get(t);
                                e.color.copy(v).multiplyScalar(x), e.halfWidth.set(.5 * t.width, 0, 0), e.halfHeight.set(0, .5 * t.height, 0), r.rectArea[d] = e, d++
                            } else if (t.isPointLight) {
                                let e = i.get(t);
                                if (e.color.copy(t.color).multiplyScalar(t.intensity), e.distance = t.distance, e.decay = t.decay, t.castShadow) {
                                    let e = t.shadow,
                                        i = n.get(t);
                                    i.shadowBias = e.bias, i.shadowNormalBias = e.normalBias, i.shadowRadius = e.radius, i.shadowMapSize = e.mapSize, i.shadowCameraNear = e.camera.near, i.shadowCameraFar = e.camera.far, r.pointShadow[u] = i, r.pointShadowMap[u] = _, r.pointShadowMatrix[u] = t.shadow.matrix, m++
                                }
                                r.point[u] = e, u++
                            } else if (t.isHemisphereLight) {
                                let e = i.get(t);
                                e.skyColor.copy(t.color).multiplyScalar(x), e.groundColor.copy(t.groundColor).multiplyScalar(x), r.hemi[p] = e, p++
                            }
                        }
                        d > 0 && (t.isWebGL2 ? (r.rectAreaLTC1 = iu.LTC_FLOAT_1, r.rectAreaLTC2 = iu.LTC_FLOAT_2) : !0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = iu.LTC_FLOAT_1, r.rectAreaLTC2 = iu.LTC_FLOAT_2) : !0 === e.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = iu.LTC_HALF_1, r.rectAreaLTC2 = iu.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = s, r.ambient[1] = o, r.ambient[2] = l;
                        let v = r.hash;
                        (v.directionalLength !== h || v.pointLength !== u || v.spotLength !== c || v.rectAreaLength !== d || v.hemiLength !== p || v.numDirectionalShadows !== f || v.numPointShadows !== m || v.numSpotShadows !== g) && (r.directional.length = h, r.spot.length = c, r.rectArea.length = d, r.point.length = u, r.hemi.length = p, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = m, r.spotShadowMatrix.length = g, v.directionalLength = h, v.pointLength = u, v.spotLength = c, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = f, v.numPointShadows = m, v.numSpotShadows = g, r.version = rs++)
                    },
                    setupView: function(e, t) {
                        let i = 0,
                            n = 0,
                            l = 0,
                            h = 0,
                            u = 0,
                            c = t.matrixWorldInverse;
                        for (let t = 0, d = e.length; t < d; t++) {
                            let d = e[t];
                            if (d.isDirectionalLight) {
                                let e = r.directional[i];
                                e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(c), i++
                            } else if (d.isSpotLight) {
                                let e = r.spot[l];
                                e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(c), e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(c), l++
                            } else if (d.isRectAreaLight) {
                                let e = r.rectArea[h];
                                e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(c), o.identity(), s.copy(d.matrixWorld), s.premultiply(c), o.extractRotation(s), e.halfWidth.set(.5 * d.width, 0, 0), e.halfHeight.set(0, .5 * d.height, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), h++
                            } else if (d.isPointLight) {
                                let e = r.point[n];
                                e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(c), n++
                            } else if (d.isHemisphereLight) {
                                let e = r.hemi[u];
                                e.direction.setFromMatrixPosition(d.matrixWorld), e.direction.transformDirection(c), e.direction.normalize(), u++
                            }
                        }
                    },
                    state: r
                }
            }

            function rh(e, t) {
                let i = new rl(e, t),
                    n = [],
                    r = [];
                return {
                    init: function() {
                        n.length = 0, r.length = 0
                    },
                    state: {
                        lightsArray: n,
                        shadowsArray: r,
                        lights: i
                    },
                    setupLights: function() {
                        i.setup(n)
                    },
                    setupLightsView: function(e) {
                        i.setupView(n, e)
                    },
                    pushLight: function(e) {
                        n.push(e)
                    },
                    pushShadow: function(e) {
                        r.push(e)
                    }
                }
            }

            function ru(e, t) {
                let i = new WeakMap;
                return {
                    get: function(n, r = 0) {
                        let a;
                        return !1 === i.has(n) ? (a = new rh(e, t), i.set(n, [a])) : r >= i.get(n).length ? (a = new rh(e, t), i.get(n).push(a)) : a = i.get(n)[r], a
                    },
                    dispose: function() {
                        i = new WeakMap
                    }
                }
            }
            class rc extends th {
                constructor(e) {
                    super(), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
                }
            }
            rc.prototype.isMeshDepthMaterial = !0;
            class rd extends th {
                constructor(e) {
                    super(), this.type = "MeshDistanceMaterial", this.referencePosition = new er, this.nearDistance = 1, this.farDistance = 1e3, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.referencePosition.copy(e.referencePosition), this.nearDistance = e.nearDistance, this.farDistance = e.farDistance, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
                }
            }

            function rp(e, t, i) {
                let n = new ia,
                    r = new Y,
                    a = new Y,
                    l = new ee,
                    h = new rc({
                        depthPacking: 3201
                    }),
                    u = new rd,
                    c = {},
                    d = i.maxTextureSize,
                    f = {
                        0: 1,
                        1: s,
                        2: o
                    },
                    m = new t3({
                        defines: {
                            SAMPLE_RATE: .25,
                            HALF_SAMPLE_RATE: .125
                        },
                        uniforms: {
                            shadow_pass: {
                                value: null
                            },
                            resolution: {
                                value: new Y
                            },
                            radius: {
                                value: 4
                            }
                        },
                        vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
                        fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean * HALF_SAMPLE_RATE;\n	squared_mean = squared_mean * HALF_SAMPLE_RATE;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
                    }),
                    v = m.clone();
                v.defines.HORIZONTAL_PASS = 1;
                let x = new tI;
                x.setAttribute("position", new t_(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
                let y = new tZ(x, m),
                    _ = this;

                function M(t, i, n, r, a, s, o) {
                    let l = null,
                        d = !0 === r.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
                    if (l = void 0 !== d ? d : !0 === r.isPointLight ? u : h, e.localClippingEnabled && !0 === n.clipShadows && 0 !== n.clippingPlanes.length) {
                        let e = l.uuid,
                            t = n.uuid,
                            i = c[e];
                        void 0 === i && (i = {}, c[e] = i);
                        let r = i[t];
                        void 0 === r && (r = l.clone(), i[t] = r), l = r
                    }
                    return l.visible = n.visible, l.wireframe = n.wireframe, 3 === o ? l.side = null !== n.shadowSide ? n.shadowSide : n.side : l.side = null !== n.shadowSide ? n.shadowSide : f[n.side], l.clipShadows = n.clipShadows, l.clippingPlanes = n.clippingPlanes, l.clipIntersection = n.clipIntersection, l.wireframeLinewidth = n.wireframeLinewidth, l.linewidth = n.linewidth, !0 === r.isPointLight && !0 === l.isMeshDistanceMaterial && (l.referencePosition.setFromMatrixPosition(r.matrixWorld), l.nearDistance = a, l.farDistance = s), l
                }
                this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(i, s, o) {
                    if (!1 === _.enabled || !1 === _.autoUpdate && !1 === _.needsUpdate || 0 === i.length) return;
                    let h = e.getRenderTarget(),
                        u = e.getActiveCubeFace(),
                        c = e.getActiveMipmapLevel(),
                        f = e.state;
                    f.setBlending(0), f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
                    for (let h = 0, u = i.length; h < u; h++) {
                        let u = i[h],
                            c = u.shadow;
                        if (void 0 === c) {
                            console.warn("THREE.WebGLShadowMap:", u, "has no shadow.");
                            continue
                        }
                        if (!1 === c.autoUpdate && !1 === c.needsUpdate) continue;
                        r.copy(c.mapSize);
                        let x = c.getFrameExtents();
                        if (r.multiply(x), a.copy(c.mapSize), (r.x > d || r.y > d) && (r.x > d && (a.x = Math.floor(d / x.x), r.x = a.x * x.x, c.mapSize.x = a.x), r.y > d && (a.y = Math.floor(d / x.y), r.y = a.y * x.y, c.mapSize.y = a.y)), null === c.map && !c.isPointLightShadow && 3 === this.type) {
                            let e = {
                                minFilter: g,
                                magFilter: g,
                                format: w
                            };
                            c.map = new et(r.x, r.y, e), c.map.texture.name = u.name + ".shadowMap", c.mapPass = new et(r.x, r.y, e), c.camera.updateProjectionMatrix()
                        }
                        if (null === c.map) {
                            let e = {
                                minFilter: p,
                                magFilter: p,
                                format: w
                            };
                            c.map = new et(r.x, r.y, e), c.map.texture.name = u.name + ".shadowMap", c.camera.updateProjectionMatrix()
                        }
                        e.setRenderTarget(c.map), e.clear();
                        let _ = c.getViewportCount();
                        for (let i = 0; i < _; i++) {
                            let r = c.getViewport(i);
                            l.set(a.x * r.x, a.y * r.y, a.x * r.z, a.y * r.w), f.viewport(l), c.updateMatrices(u, i), n = c.getFrustum(),
                                function i(r, a, s, o, l) {
                                    if (!1 === r.visible) return;
                                    let h = r.layers.test(a.layers);
                                    if (h && (r.isMesh || r.isLine || r.isPoints) && (r.castShadow || r.receiveShadow && 3 === l) && (!r.frustumCulled || n.intersectsObject(r))) {
                                        r.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, r.matrixWorld);
                                        let i = t.update(r),
                                            n = r.material;
                                        if (Array.isArray(n)) {
                                            let t = i.groups;
                                            for (let a = 0, h = t.length; a < h; a++) {
                                                let h = t[a],
                                                    u = n[h.materialIndex];
                                                if (u && u.visible) {
                                                    let t = M(r, i, u, o, s.near, s.far, l);
                                                    e.renderBufferDirect(s, null, i, t, r, h)
                                                }
                                            }
                                        } else if (n.visible) {
                                            let t = M(r, i, n, o, s.near, s.far, l);
                                            e.renderBufferDirect(s, null, i, t, r, null)
                                        }
                                    }
                                    let u = r.children;
                                    for (let e = 0, t = u.length; e < t; e++) i(u[e], a, s, o, l)
                                }(s, o, c.camera, u, this.type)
                        }
                        c.isPointLightShadow || 3 !== this.type || function(i, n) {
                            let r = t.update(y);
                            m.uniforms.shadow_pass.value = i.map.texture, m.uniforms.resolution.value = i.mapSize, m.uniforms.radius.value = i.radius, e.setRenderTarget(i.mapPass), e.clear(), e.renderBufferDirect(n, null, r, m, y, null), v.uniforms.shadow_pass.value = i.mapPass.texture, v.uniforms.resolution.value = i.mapSize, v.uniforms.radius.value = i.radius, e.setRenderTarget(i.map), e.clear(), e.renderBufferDirect(n, null, r, v, y, null)
                        }(c, o), c.needsUpdate = !1
                    }
                    _.needsUpdate = !1, e.setRenderTarget(h, u, c)
                }
            }

            function rf(e, t, i) {
                let n = i.isWebGL2,
                    r = new function() {
                        let t = !1,
                            i = new ee,
                            n = null,
                            r = new ee(0, 0, 0, 0);
                        return {
                            setMask: function(i) {
                                n === i || t || (e.colorMask(i, i, i, i), n = i)
                            },
                            setLocked: function(e) {
                                t = e
                            },
                            setClear: function(t, n, a, s, o) {
                                !0 === o && (t *= s, n *= s, a *= s), i.set(t, n, a, s), !1 === r.equals(i) && (e.clearColor(t, n, a, s), r.copy(i))
                            },
                            reset: function() {
                                t = !1, n = null, r.set(-1, 0, 0, 0)
                            }
                        }
                    },
                    a = new function() {
                        let t = !1,
                            i = null,
                            n = null,
                            r = null;
                        return {
                            setTest: function(e) {
                                e ? B(2929) : U(2929)
                            },
                            setMask: function(n) {
                                i === n || t || (e.depthMask(n), i = n)
                            },
                            setFunc: function(t) {
                                if (n !== t) {
                                    if (t) switch (t) {
                                        case 0:
                                            e.depthFunc(512);
                                            break;
                                        case 1:
                                            e.depthFunc(519);
                                            break;
                                        case 2:
                                            e.depthFunc(513);
                                            break;
                                        case 3:
                                        default:
                                            e.depthFunc(515);
                                            break;
                                        case 4:
                                            e.depthFunc(514);
                                            break;
                                        case 5:
                                            e.depthFunc(518);
                                            break;
                                        case 6:
                                            e.depthFunc(516);
                                            break;
                                        case 7:
                                            e.depthFunc(517)
                                    } else e.depthFunc(515);
                                    n = t
                                }
                            },
                            setLocked: function(e) {
                                t = e
                            },
                            setClear: function(t) {
                                r !== t && (e.clearDepth(t), r = t)
                            },
                            reset: function() {
                                t = !1, i = null, n = null, r = null
                            }
                        }
                    },
                    s = new function() {
                        let t = !1,
                            i = null,
                            n = null,
                            r = null,
                            a = null,
                            s = null,
                            o = null,
                            l = null,
                            h = null;
                        return {
                            setTest: function(e) {
                                t || (e ? B(2960) : U(2960))
                            },
                            setMask: function(n) {
                                i === n || t || (e.stencilMask(n), i = n)
                            },
                            setFunc: function(t, i, s) {
                                (n !== t || r !== i || a !== s) && (e.stencilFunc(t, i, s), n = t, r = i, a = s)
                            },
                            setOp: function(t, i, n) {
                                (s !== t || o !== i || l !== n) && (e.stencilOp(t, i, n), s = t, o = i, l = n)
                            },
                            setLocked: function(e) {
                                t = e
                            },
                            setClear: function(t) {
                                h !== t && (e.clearStencil(t), h = t)
                            },
                            reset: function() {
                                t = !1, i = null, n = null, r = null, a = null, s = null, o = null, l = null, h = null
                            }
                        }
                    },
                    h = {},
                    u = null,
                    c = {},
                    d = null,
                    p = !1,
                    f = null,
                    m = null,
                    g = null,
                    v = null,
                    x = null,
                    y = null,
                    _ = null,
                    M = !1,
                    b = null,
                    w = null,
                    S = null,
                    T = null,
                    E = null,
                    L = e.getParameter(35661),
                    A = !1,
                    R = e.getParameter(7938); - 1 !== R.indexOf("WebGL") ? A = parseFloat(/^WebGL (\d)/.exec(R)[1]) >= 1 : -1 !== R.indexOf("OpenGL ES") && (A = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]) >= 2);
                let C = null,
                    P = {},
                    I = e.getParameter(3088),
                    D = e.getParameter(2978),
                    N = new ee().fromArray(I),
                    z = new ee().fromArray(D);

                function O(t, i, n) {
                    let r = new Uint8Array(4),
                        a = e.createTexture();
                    e.bindTexture(t, a), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
                    for (let t = 0; t < n; t++) e.texImage2D(i + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
                    return a
                }
                let F = {};

                function B(t) {
                    !0 !== h[t] && (e.enable(t), h[t] = !0)
                }

                function U(t) {
                    !1 !== h[t] && (e.disable(t), h[t] = !1)
                }
                F[3553] = O(3553, 3553, 1), F[34067] = O(34067, 34069, 6), r.setClear(0, 0, 0, 1), a.setClear(1), s.setClear(0), B(2929), a.setFunc(3), k(!1), W(1), B(2884), V(0);
                let H = {
                    100: 32774,
                    101: 32778,
                    102: 32779
                };
                if (n) H[103] = 32775, H[104] = 32776;
                else {
                    let e = t.get("EXT_blend_minmax");
                    null !== e && (H[103] = e.MIN_EXT, H[104] = e.MAX_EXT)
                }
                let G = {
                    200: 0,
                    201: 1,
                    202: 768,
                    204: 770,
                    210: 776,
                    208: 774,
                    206: 772,
                    203: 769,
                    205: 771,
                    209: 775,
                    207: 773
                };

                function V(t, i, n, r, a, s, o, h) {
                    if (0 === t) {
                        !0 === p && (U(3042), p = !1);
                        return
                    }
                    if (!1 === p && (B(3042), p = !0), 5 !== t) {
                        if (t !== f || h !== M) {
                            if ((100 !== m || 100 !== x) && (e.blendEquation(32774), m = 100, x = 100), h) switch (t) {
                                case 1:
                                    e.blendFuncSeparate(1, 771, 1, 771);
                                    break;
                                case l:
                                    e.blendFunc(1, 1);
                                    break;
                                case 3:
                                    e.blendFuncSeparate(0, 0, 769, 771);
                                    break;
                                case 4:
                                    e.blendFuncSeparate(0, 768, 0, 770);
                                    break;
                                default:
                                    console.error("THREE.WebGLState: Invalid blending: ", t)
                            } else switch (t) {
                                case 1:
                                    e.blendFuncSeparate(770, 771, 1, 771);
                                    break;
                                case l:
                                    e.blendFunc(770, 1);
                                    break;
                                case 3:
                                    e.blendFunc(0, 769);
                                    break;
                                case 4:
                                    e.blendFunc(0, 768);
                                    break;
                                default:
                                    console.error("THREE.WebGLState: Invalid blending: ", t)
                            }
                            g = null, v = null, y = null, _ = null, f = t, M = h
                        }
                        return
                    }
                    a = a || i, s = s || n, o = o || r, (i !== m || a !== x) && (e.blendEquationSeparate(H[i], H[a]), m = i, x = a), (n !== g || r !== v || s !== y || o !== _) && (e.blendFuncSeparate(G[n], G[r], G[s], G[o]), g = n, v = r, y = s, _ = o), f = t, M = null
                }

                function k(t) {
                    b !== t && (t ? e.frontFace(2304) : e.frontFace(2305), b = t)
                }

                function W(t) {
                    0 !== t ? (B(2884), t !== w && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : U(2884), w = t
                }

                function j(t, i, n) {
                    t ? (B(32823), (T !== i || E !== n) && (e.polygonOffset(i, n), T = i, E = n)) : U(32823)
                }

                function q(t) {
                    void 0 === t && (t = 33984 + L - 1), C !== t && (e.activeTexture(t), C = t)
                }
                return {
                    buffers: {
                        color: r,
                        depth: a,
                        stencil: s
                    },
                    enable: B,
                    disable: U,
                    bindFramebuffer: function(t, i) {
                        return null === i && null !== u && (i = u), c[t] !== i && (e.bindFramebuffer(t, i), c[t] = i, n && (36009 === t && (c[36160] = i), 36160 === t && (c[36009] = i)), !0)
                    },
                    bindXRFramebuffer: function(t) {
                        t !== u && (e.bindFramebuffer(36160, t), u = t)
                    },
                    useProgram: function(t) {
                        return d !== t && (e.useProgram(t), d = t, !0)
                    },
                    setBlending: V,
                    setMaterial: function(e, t) {
                        e.side === o ? U(2884) : B(2884);
                        let i = 1 === e.side;
                        t && (i = !i), k(i), 1 === e.blending && !1 === e.transparent ? V(0) : V(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), a.setFunc(e.depthFunc), a.setTest(e.depthTest), a.setMask(e.depthWrite), r.setMask(e.colorWrite);
                        let n = e.stencilWrite;
                        s.setTest(n), n && (s.setMask(e.stencilWriteMask), s.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), s.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), j(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0 === e.alphaToCoverage ? B(32926) : U(32926)
                    },
                    setFlipSided: k,
                    setCullFace: W,
                    setLineWidth: function(t) {
                        t !== S && (A && e.lineWidth(t), S = t)
                    },
                    setPolygonOffset: j,
                    setScissorTest: function(e) {
                        e ? B(3089) : U(3089)
                    },
                    activeTexture: q,
                    bindTexture: function(t, i) {
                        null === C && q();
                        let n = P[C];
                        void 0 === n && (n = {
                            type: void 0,
                            texture: void 0
                        }, P[C] = n), (n.type !== t || n.texture !== i) && (e.bindTexture(t, i || F[t]), n.type = t, n.texture = i)
                    },
                    unbindTexture: function() {
                        let t = P[C];
                        void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
                    },
                    compressedTexImage2D: function() {
                        try {
                            e.compressedTexImage2D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    texImage2D: function() {
                        try {
                            e.texImage2D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    texImage3D: function() {
                        try {
                            e.texImage3D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    scissor: function(t) {
                        !1 === N.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), N.copy(t))
                    },
                    viewport: function(t) {
                        !1 === z.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), z.copy(t))
                    },
                    reset: function() {
                        e.disable(3042), e.disable(2884), e.disable(2929), e.disable(32823), e.disable(3089), e.disable(2960), e.disable(32926), e.blendEquation(32774), e.blendFunc(1, 0), e.blendFuncSeparate(1, 0, 1, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(513), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(519, 0, 4294967295), e.stencilOp(7680, 7680, 7680), e.clearStencil(0), e.cullFace(1029), e.frontFace(2305), e.polygonOffset(0, 0), e.activeTexture(33984), e.bindFramebuffer(36160, null), !0 === n && (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), h = {}, C = null, P = {}, u = null, c = {}, d = null, p = !1, f = null, m = null, g = null, v = null, x = null, y = null, _ = null, M = !1, b = null, w = null, S = null, T = null, E = null, N.set(0, 0, e.canvas.width, e.canvas.height), z.set(0, 0, e.canvas.width, e.canvas.height), r.reset(), a.reset(), s.reset()
                    }
                }
            }

            function rm(e, t, i, n, r, a, s) {
                let o;
                let l = r.isWebGL2,
                    h = r.maxTextures,
                    y = r.maxCubemapSize,
                    S = r.maxTextureSize,
                    T = r.maxSamples,
                    E = new WeakMap,
                    L = !1;
                try {
                    L = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
                } catch (e) {}

                function A(e, t) {
                    return L ? new OffscreenCanvas(e, t) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
                }

                function R(e, t, i, n) {
                    let r = 1;
                    if ((e.width > n || e.height > n) && (r = n / Math.max(e.width, e.height)), r < 1 || !0 === t) {
                        if ("undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && e instanceof ImageBitmap) {
                            let n = t ? q : Math.floor,
                                a = n(r * e.width),
                                s = n(r * e.height);
                            void 0 === o && (o = A(a, s));
                            let l = i ? A(a, s) : o;
                            l.width = a, l.height = s;
                            let h = l.getContext("2d");
                            return h.drawImage(e, 0, 0, a, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + e.width + "x" + e.height + ") to (" + a + "x" + s + ")."), l
                        }
                        "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + e.width + "x" + e.height + ").")
                    }
                    return e
                }

                function C(e) {
                    return W(e.width) && W(e.height)
                }

                function P(e, t) {
                    return e.generateMipmaps && t && e.minFilter !== p && e.minFilter !== g
                }

                function I(t, i, r, a, s = 1) {
                    e.generateMipmap(t);
                    let o = n.get(i);
                    o.__maxMipLevel = Math.log2(Math.max(r, a, s))
                }

                function D(i, n, r) {
                    if (!1 === l) return n;
                    if (null !== i) {
                        if (void 0 !== e[i]) return e[i];
                        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + i + "'")
                    }
                    let a = n;
                    return 6403 === n && (5126 === r && (a = 33326), 5131 === r && (a = 33325), 5121 === r && (a = 33321)), 6407 === n && (5126 === r && (a = 34837), 5131 === r && (a = 34843), 5121 === r && (a = 32849)), 6408 === n && (5126 === r && (a = 34836), 5131 === r && (a = 34842), 5121 === r && (a = 32856)), (33325 === a || 33326 === a || 34842 === a || 34836 === a) && t.get("EXT_color_buffer_float"), a
                }

                function N(e) {
                    return e === p || e === f || e === m ? 9728 : 9729
                }

                function z(t) {
                    let i = t.target;
                    i.removeEventListener("dispose", z),
                        function(t) {
                            let i = n.get(t);
                            void 0 !== i.__webglInit && (e.deleteTexture(i.__webglTexture), n.remove(t))
                        }(i), i.isVideoTexture && E.delete(i), s.memory.textures--
                }

                function O(t) {
                    let i = t.target;
                    i.removeEventListener("dispose", O),
                        function(t) {
                            let i = t.texture,
                                r = n.get(t),
                                a = n.get(i);
                            if (t) {
                                if (void 0 !== a.__webglTexture && (e.deleteTexture(a.__webglTexture), s.memory.textures--), t.depthTexture && t.depthTexture.dispose(), t.isWebGLCubeRenderTarget)
                                    for (let t = 0; t < 6; t++) e.deleteFramebuffer(r.__webglFramebuffer[t]), r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[t]);
                                else e.deleteFramebuffer(r.__webglFramebuffer), r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && e.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer && e.deleteRenderbuffer(r.__webglColorRenderbuffer), r.__webglDepthRenderbuffer && e.deleteRenderbuffer(r.__webglDepthRenderbuffer);
                                if (t.isWebGLMultipleRenderTargets)
                                    for (let t = 0, r = i.length; t < r; t++) {
                                        let r = n.get(i[t]);
                                        r.__webglTexture && (e.deleteTexture(r.__webglTexture), s.memory.textures--), n.remove(i[t])
                                    }
                                n.remove(i), n.remove(t)
                            }
                        }(i)
                }
                let F = 0;

                function B(e, t) {
                    let r = n.get(e);
                    if (e.isVideoTexture && function(e) {
                            let t = s.render.frame;
                            E.get(e) !== t && (E.set(e, t), e.update())
                        }(e), e.version > 0 && r.__version !== e.version) {
                        let i = e.image;
                        if (void 0 === i) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
                        else if (!1 === i.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                        else {
                            j(r, e, t);
                            return
                        }
                    }
                    i.activeTexture(33984 + t), i.bindTexture(3553, r.__webglTexture)
                }

                function U(t, r) {
                    let s = n.get(t);
                    if (t.version > 0 && s.__version !== t.version) {
                        ! function(t, n, r) {
                            let s;
                            if (6 !== n.image.length) return;
                            k(t, n), i.activeTexture(33984 + r), i.bindTexture(34067, t.__webglTexture), e.pixelStorei(37440, n.flipY), e.pixelStorei(37441, n.premultiplyAlpha), e.pixelStorei(3317, n.unpackAlignment), e.pixelStorei(37443, 0);
                            let o = n && (n.isCompressedTexture || n.image[0].isCompressedTexture),
                                h = n.image[0] && n.image[0].isDataTexture,
                                u = [];
                            for (let e = 0; e < 6; e++) o || h ? u[e] = h ? n.image[e].image : n.image[e] : u[e] = R(n.image[e], !1, !0, y);
                            let c = u[0],
                                d = C(c) || l,
                                p = a.convert(n.format),
                                f = a.convert(n.type),
                                m = D(n.internalFormat, p, f);
                            if (V(34067, n, d), o) {
                                for (let e = 0; e < 6; e++) {
                                    s = u[e].mipmaps;
                                    for (let t = 0; t < s.length; t++) {
                                        let r = s[t];
                                        n.format !== w && n.format !== b ? null !== p ? i.compressedTexImage2D(34069 + e, t, m, r.width, r.height, 0, r.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(34069 + e, t, m, r.width, r.height, 0, p, f, r.data)
                                    }
                                }
                                t.__maxMipLevel = s.length - 1
                            } else {
                                s = n.mipmaps;
                                for (let e = 0; e < 6; e++)
                                    if (h) {
                                        i.texImage2D(34069 + e, 0, m, u[e].width, u[e].height, 0, p, f, u[e].data);
                                        for (let t = 0; t < s.length; t++) {
                                            let n = s[t],
                                                r = n.image[e].image;
                                            i.texImage2D(34069 + e, t + 1, m, r.width, r.height, 0, p, f, r.data)
                                        }
                                    } else {
                                        i.texImage2D(34069 + e, 0, m, p, f, u[e]);
                                        for (let t = 0; t < s.length; t++) {
                                            let n = s[t];
                                            i.texImage2D(34069 + e, t + 1, m, p, f, n.image[e])
                                        }
                                    } t.__maxMipLevel = s.length
                            }
                            P(n, d) && I(34067, n, c.width, c.height), t.__version = n.version, n.onUpdate && n.onUpdate(n)
                        }(s, t, r);
                        return
                    }
                    i.activeTexture(33984 + r), i.bindTexture(34067, s.__webglTexture)
                }
                let H = {
                        [u]: 10497,
                        [c]: 33071,
                        [d]: 33648
                    },
                    G = {
                        [p]: 9728,
                        [f]: 9984,
                        [m]: 9986,
                        [g]: 9729,
                        [v]: 9985,
                        [x]: 9987
                    };

                function V(i, a, s) {
                    if (s ? (e.texParameteri(i, 10242, H[a.wrapS]), e.texParameteri(i, 10243, H[a.wrapT]), (32879 === i || 35866 === i) && e.texParameteri(i, 32882, H[a.wrapR]), e.texParameteri(i, 10240, G[a.magFilter]), e.texParameteri(i, 10241, G[a.minFilter])) : (e.texParameteri(i, 10242, 33071), e.texParameteri(i, 10243, 33071), (32879 === i || 35866 === i) && e.texParameteri(i, 32882, 33071), (a.wrapS !== c || a.wrapT !== c) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), e.texParameteri(i, 10240, N(a.magFilter)), e.texParameteri(i, 10241, N(a.minFilter)), a.minFilter !== p && a.minFilter !== g && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), !0 === t.has("EXT_texture_filter_anisotropic")) {
                        let s = t.get("EXT_texture_filter_anisotropic");
                        (a.type !== _ || !1 !== t.has("OES_texture_float_linear")) && (!1 !== l || a.type !== M || !1 !== t.has("OES_texture_half_float_linear")) && (a.anisotropy > 1 || n.get(a).__currentAnisotropy) && (e.texParameterf(i, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), n.get(a).__currentAnisotropy = a.anisotropy)
                    }
                }

                function k(t, i) {
                    void 0 === t.__webglInit && (t.__webglInit = !0, i.addEventListener("dispose", z), t.__webglTexture = e.createTexture(), s.memory.textures++)
                }

                function j(t, n, r) {
                    let s, o = 3553;
                    n.isDataTexture2DArray && (o = 35866), n.isDataTexture3D && (o = 32879), k(t, n), i.activeTexture(33984 + r), i.bindTexture(o, t.__webglTexture), e.pixelStorei(37440, n.flipY), e.pixelStorei(37441, n.premultiplyAlpha), e.pixelStorei(3317, n.unpackAlignment), e.pixelStorei(37443, 0);
                    let h = !l && (n.wrapS !== c || n.wrapT !== c || n.minFilter !== p && n.minFilter !== g) && !1 === C(n.image),
                        u = R(n.image, h, !1, S),
                        d = C(u) || l,
                        f = a.convert(n.format),
                        m = a.convert(n.type),
                        v = D(n.internalFormat, f, m);
                    V(o, n, d);
                    let x = n.mipmaps;
                    if (n.isDepthTexture) v = 6402, l ? v = n.type === _ ? 36012 : 1014 === n.type ? 33190 : 1020 === n.type ? 35056 : 33189 : n.type === _ && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), 1026 === n.format && 6402 === v && 1012 !== n.type && 1014 !== n.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = 1012, m = a.convert(n.type)), 1027 === n.format && 6402 === v && (v = 34041, 1020 !== n.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = 1020, m = a.convert(n.type))), i.texImage2D(3553, 0, v, u.width, u.height, 0, f, m, null);
                    else if (n.isDataTexture) {
                        if (x.length > 0 && d) {
                            for (let e = 0, t = x.length; e < t; e++) s = x[e], i.texImage2D(3553, e, v, s.width, s.height, 0, f, m, s.data);
                            n.generateMipmaps = !1, t.__maxMipLevel = x.length - 1
                        } else i.texImage2D(3553, 0, v, u.width, u.height, 0, f, m, u.data), t.__maxMipLevel = 0
                    } else if (n.isCompressedTexture) {
                        for (let e = 0, t = x.length; e < t; e++) s = x[e], n.format !== w && n.format !== b ? null !== f ? i.compressedTexImage2D(3553, e, v, s.width, s.height, 0, s.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(3553, e, v, s.width, s.height, 0, f, m, s.data);
                        t.__maxMipLevel = x.length - 1
                    } else if (n.isDataTexture2DArray) i.texImage3D(35866, 0, v, u.width, u.height, u.depth, 0, f, m, u.data), t.__maxMipLevel = 0;
                    else if (n.isDataTexture3D) i.texImage3D(32879, 0, v, u.width, u.height, u.depth, 0, f, m, u.data), t.__maxMipLevel = 0;
                    else if (x.length > 0 && d) {
                        for (let e = 0, t = x.length; e < t; e++) s = x[e], i.texImage2D(3553, e, v, f, m, s);
                        n.generateMipmaps = !1, t.__maxMipLevel = x.length - 1
                    } else i.texImage2D(3553, 0, v, f, m, u), t.__maxMipLevel = 0;
                    P(n, d) && I(o, n, u.width, u.height), t.__version = n.version, n.onUpdate && n.onUpdate(n)
                }

                function X(t, r, s, o, l) {
                    let h = a.convert(s.format),
                        u = a.convert(s.type),
                        c = D(s.internalFormat, h, u);
                    32879 === l || 35866 === l ? i.texImage3D(l, 0, c, r.width, r.height, r.depth, 0, h, u, null) : i.texImage2D(l, 0, c, r.width, r.height, 0, h, u, null), i.bindFramebuffer(36160, t), e.framebufferTexture2D(36160, o, l, n.get(s).__webglTexture, 0), i.bindFramebuffer(36160, null)
                }

                function Y(t, i, n) {
                    if (e.bindRenderbuffer(36161, t), i.depthBuffer && !i.stencilBuffer) {
                        let r = 33189;
                        if (n) {
                            let t = i.depthTexture;
                            t && t.isDepthTexture && (t.type === _ ? r = 36012 : 1014 === t.type && (r = 33190));
                            let n = J(i);
                            e.renderbufferStorageMultisample(36161, n, r, i.width, i.height)
                        } else e.renderbufferStorage(36161, r, i.width, i.height);
                        e.framebufferRenderbuffer(36160, 36096, 36161, t)
                    } else if (i.depthBuffer && i.stencilBuffer) {
                        if (n) {
                            let t = J(i);
                            e.renderbufferStorageMultisample(36161, t, 35056, i.width, i.height)
                        } else e.renderbufferStorage(36161, 34041, i.width, i.height);
                        e.framebufferRenderbuffer(36160, 33306, 36161, t)
                    } else {
                        let t = !0 === i.isWebGLMultipleRenderTargets ? i.texture[0] : i.texture,
                            r = a.convert(t.format),
                            s = a.convert(t.type),
                            o = D(t.internalFormat, r, s);
                        if (n) {
                            let t = J(i);
                            e.renderbufferStorageMultisample(36161, t, o, i.width, i.height)
                        } else e.renderbufferStorage(36161, o, i.width, i.height)
                    }
                    e.bindRenderbuffer(36161, null)
                }

                function J(e) {
                    return l && e.isWebGLMultisampleRenderTarget ? Math.min(T, e.samples) : 0
                }
                let Z = !1,
                    Q = !1;
                this.allocateTextureUnit = function() {
                    let e = F;
                    return e >= h && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + h), F += 1, e
                }, this.resetTextureUnits = function() {
                    F = 0
                }, this.setTexture2D = B, this.setTexture2DArray = function(e, t) {
                    let r = n.get(e);
                    if (e.version > 0 && r.__version !== e.version) {
                        j(r, e, t);
                        return
                    }
                    i.activeTexture(33984 + t), i.bindTexture(35866, r.__webglTexture)
                }, this.setTexture3D = function(e, t) {
                    let r = n.get(e);
                    if (e.version > 0 && r.__version !== e.version) {
                        j(r, e, t);
                        return
                    }
                    i.activeTexture(33984 + t), i.bindTexture(32879, r.__webglTexture)
                }, this.setTextureCube = U, this.setupRenderTarget = function(t) {
                    let o = t.texture,
                        h = n.get(t),
                        u = n.get(o);
                    t.addEventListener("dispose", O), !0 !== t.isWebGLMultipleRenderTargets && (u.__webglTexture = e.createTexture(), u.__version = o.version, s.memory.textures++);
                    let c = !0 === t.isWebGLCubeRenderTarget,
                        d = !0 === t.isWebGLMultipleRenderTargets,
                        p = !0 === t.isWebGLMultisampleRenderTarget,
                        f = o.isDataTexture3D || o.isDataTexture2DArray,
                        m = C(t) || l;
                    if (l && o.format === b && (o.type === _ || o.type === M) && (o.format = w, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), c) {
                        h.__webglFramebuffer = [];
                        for (let t = 0; t < 6; t++) h.__webglFramebuffer[t] = e.createFramebuffer()
                    } else if (h.__webglFramebuffer = e.createFramebuffer(), d) {
                        if (r.drawBuffers) {
                            let i = t.texture;
                            for (let t = 0, r = i.length; t < r; t++) {
                                let r = n.get(i[t]);
                                void 0 === r.__webglTexture && (r.__webglTexture = e.createTexture(), s.memory.textures++)
                            }
                        } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.")
                    } else if (p) {
                        if (l) {
                            h.__webglMultisampledFramebuffer = e.createFramebuffer(), h.__webglColorRenderbuffer = e.createRenderbuffer(), e.bindRenderbuffer(36161, h.__webglColorRenderbuffer);
                            let n = a.convert(o.format),
                                r = a.convert(o.type),
                                s = D(o.internalFormat, n, r),
                                l = J(t);
                            e.renderbufferStorageMultisample(36161, l, s, t.width, t.height), i.bindFramebuffer(36160, h.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(36160, 36064, 36161, h.__webglColorRenderbuffer), e.bindRenderbuffer(36161, null), t.depthBuffer && (h.__webglDepthRenderbuffer = e.createRenderbuffer(), Y(h.__webglDepthRenderbuffer, t, !0)), i.bindFramebuffer(36160, null)
                        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
                    }
                    if (c) {
                        i.bindTexture(34067, u.__webglTexture), V(34067, o, m);
                        for (let e = 0; e < 6; e++) X(h.__webglFramebuffer[e], t, o, 36064, 34069 + e);
                        P(o, m) && I(34067, o, t.width, t.height), i.bindTexture(34067, null)
                    } else if (d) {
                        let e = t.texture;
                        for (let r = 0, a = e.length; r < a; r++) {
                            let a = e[r],
                                s = n.get(a);
                            i.bindTexture(3553, s.__webglTexture), V(3553, a, m), X(h.__webglFramebuffer, t, a, 36064 + r, 3553), P(a, m) && I(3553, a, t.width, t.height)
                        }
                        i.bindTexture(3553, null)
                    } else {
                        let e = 3553;
                        if (f) {
                            if (l) {
                                let t = o.isDataTexture3D;
                                e = t ? 32879 : 35866
                            } else console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")
                        }
                        i.bindTexture(e, u.__webglTexture), V(e, o, m), X(h.__webglFramebuffer, t, o, 36064, e), P(o, m) && I(e, o, t.width, t.height, t.depth), i.bindTexture(e, null)
                    }
                    t.depthBuffer && function(t) {
                        let r = n.get(t),
                            a = !0 === t.isWebGLCubeRenderTarget;
                        if (t.depthTexture) {
                            if (a) throw Error("target.depthTexture not supported in Cube render targets");
                            ! function(t, r) {
                                let a = r && r.isWebGLCubeRenderTarget;
                                if (a) throw Error("Depth Texture with cube render targets is not supported");
                                if (i.bindFramebuffer(36160, t), !(r.depthTexture && r.depthTexture.isDepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                                n.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), B(r.depthTexture, 0);
                                let s = n.get(r.depthTexture).__webglTexture;
                                if (1026 === r.depthTexture.format) e.framebufferTexture2D(36160, 36096, 3553, s, 0);
                                else if (1027 === r.depthTexture.format) e.framebufferTexture2D(36160, 33306, 3553, s, 0);
                                else throw Error("Unknown depthTexture format")
                            }(r.__webglFramebuffer, t)
                        } else if (a) {
                            r.__webglDepthbuffer = [];
                            for (let n = 0; n < 6; n++) i.bindFramebuffer(36160, r.__webglFramebuffer[n]), r.__webglDepthbuffer[n] = e.createRenderbuffer(), Y(r.__webglDepthbuffer[n], t, !1)
                        } else i.bindFramebuffer(36160, r.__webglFramebuffer), r.__webglDepthbuffer = e.createRenderbuffer(), Y(r.__webglDepthbuffer, t, !1);
                        i.bindFramebuffer(36160, null)
                    }(t)
                }, this.updateRenderTargetMipmap = function(e) {
                    let t = C(e) || l,
                        r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
                    for (let a = 0, s = r.length; a < s; a++) {
                        let s = r[a];
                        if (P(s, t)) {
                            let t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
                                r = n.get(s).__webglTexture;
                            i.bindTexture(t, r), I(t, s, e.width, e.height), i.bindTexture(t, null)
                        }
                    }
                }, this.updateMultisampleRenderTarget = function(t) {
                    if (t.isWebGLMultisampleRenderTarget) {
                        if (l) {
                            let r = t.width,
                                a = t.height,
                                s = 16384;
                            t.depthBuffer && (s |= 256), t.stencilBuffer && (s |= 1024);
                            let o = n.get(t);
                            i.bindFramebuffer(36008, o.__webglMultisampledFramebuffer), i.bindFramebuffer(36009, o.__webglFramebuffer), e.blitFramebuffer(0, 0, r, a, 0, 0, r, a, s, 9728), i.bindFramebuffer(36008, null), i.bindFramebuffer(36009, o.__webglMultisampledFramebuffer)
                        } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
                    }
                }, this.safeSetTexture2D = function(e, t) {
                    e && e.isWebGLRenderTarget && (!1 === Z && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), Z = !0), e = e.texture), B(e, t)
                }, this.safeSetTextureCube = function(e, t) {
                    e && e.isWebGLCubeRenderTarget && (!1 === Q && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), Q = !0), e = e.texture), U(e, t)
                }
            }

            function rg(e, t, i) {
                let n = i.isWebGL2;
                return {
                    convert: function(e) {
                        let i;
                        if (e === y) return 5121;
                        if (1017 === e) return 32819;
                        if (1018 === e) return 32820;
                        if (1019 === e) return 33635;
                        if (1010 === e) return 5120;
                        if (1011 === e) return 5122;
                        if (1012 === e) return 5123;
                        if (1013 === e) return 5124;
                        if (1014 === e) return 5125;
                        if (e === _) return 5126;
                        if (e === M) return n ? 5131 : null !== (i = t.get("OES_texture_half_float")) ? i.HALF_FLOAT_OES : null;
                        if (1021 === e) return 6406;
                        if (e === b) return 6407;
                        if (e === w) return 6408;
                        if (1024 === e) return 6409;
                        if (1025 === e) return 6410;
                        if (1026 === e) return 6402;
                        if (1027 === e) return 34041;
                        if (1028 === e) return 6403;
                        if (1029 === e) return 36244;
                        if (1030 === e) return 33319;
                        if (1031 === e) return 33320;
                        if (1032 === e) return 36248;
                        if (1033 === e) return 36249;
                        if (33776 === e || 33777 === e || 33778 === e || 33779 === e) {
                            if (null === (i = t.get("WEBGL_compressed_texture_s3tc"))) return null;
                            if (33776 === e) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            if (33777 === e) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                            if (33778 === e) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                            if (33779 === e) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT
                        }
                        if (35840 === e || 35841 === e || 35842 === e || 35843 === e) {
                            if (null === (i = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
                            if (35840 === e) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                            if (35841 === e) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                            if (35842 === e) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                            if (35843 === e) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                        }
                        if (36196 === e) return null !== (i = t.get("WEBGL_compressed_texture_etc1")) ? i.COMPRESSED_RGB_ETC1_WEBGL : null;
                        if ((37492 === e || 37496 === e) && null !== (i = t.get("WEBGL_compressed_texture_etc"))) {
                            if (37492 === e) return i.COMPRESSED_RGB8_ETC2;
                            if (37496 === e) return i.COMPRESSED_RGBA8_ETC2_EAC
                        }
                        return 37808 === e || 37809 === e || 37810 === e || 37811 === e || 37812 === e || 37813 === e || 37814 === e || 37815 === e || 37816 === e || 37817 === e || 37818 === e || 37819 === e || 37820 === e || 37821 === e || 37840 === e || 37841 === e || 37842 === e || 37843 === e || 37844 === e || 37845 === e || 37846 === e || 37847 === e || 37848 === e || 37849 === e || 37850 === e || 37851 === e || 37852 === e || 37853 === e ? null !== (i = t.get("WEBGL_compressed_texture_astc")) ? e : null : 36492 === e ? null !== (i = t.get("EXT_texture_compression_bptc")) ? e : null : 1020 === e ? n ? 34042 : null !== (i = t.get("WEBGL_depth_texture")) ? i.UNSIGNED_INT_24_8_WEBGL : null : void 0
                    }
                }
            }
            rd.prototype.isMeshDistanceMaterial = !0;
            class rv extends t4 {
                constructor(e = []) {
                    super(), this.cameras = e
                }
            }
            rv.prototype.isArrayCamera = !0;
            class rx extends e6 {
                constructor() {
                    super(), this.type = "Group"
                }
            }
            rx.prototype.isGroup = !0;
            let ry = {
                type: "move"
            };
            class r_ {
                constructor() {
                    this._targetRay = null, this._grip = null, this._hand = null
                }
                getHandSpace() {
                    return null === this._hand && (this._hand = new rx, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                        pinching: !1
                    }), this._hand
                }
                getTargetRaySpace() {
                    return null === this._targetRay && (this._targetRay = new rx, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new er, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new er), this._targetRay
                }
                getGripSpace() {
                    return null === this._grip && (this._grip = new rx, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new er, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new er), this._grip
                }
                dispatchEvent(e) {
                    return null !== this._targetRay && this._targetRay.dispatchEvent(e), null !== this._grip && this._grip.dispatchEvent(e), null !== this._hand && this._hand.dispatchEvent(e), this
                }
                disconnect(e) {
                    return this.dispatchEvent({
                        type: "disconnected",
                        data: e
                    }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
                }
                update(e, t, i) {
                    let n = null,
                        r = null,
                        a = null,
                        s = this._targetRay,
                        o = this._grip,
                        l = this._hand;
                    if (e && "visible-blurred" !== t.session.visibilityState) {
                        if (null !== s && null !== (n = t.getPose(e.targetRaySpace, i)) && (s.matrix.fromArray(n.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), n.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(n.linearVelocity)) : s.hasLinearVelocity = !1, n.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(n.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(ry)), l && e.hand) {
                            for (let n of (a = !0, e.hand.values())) {
                                let e = t.getJointPose(n, i);
                                if (void 0 === l.joints[n.jointName]) {
                                    let e = new rx;
                                    e.matrixAutoUpdate = !1, e.visible = !1, l.joints[n.jointName] = e, l.add(e)
                                }
                                let r = l.joints[n.jointName];
                                null !== e && (r.matrix.fromArray(e.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.jointRadius = e.radius), r.visible = null !== e
                            }
                            let n = l.joints["index-finger-tip"],
                                r = l.joints["thumb-tip"],
                                s = n.position.distanceTo(r.position);
                            l.inputState.pinching && s > .025 ? (l.inputState.pinching = !1, this.dispatchEvent({
                                type: "pinchend",
                                handedness: e.handedness,
                                target: this
                            })) : !l.inputState.pinching && s <= .015 && (l.inputState.pinching = !0, this.dispatchEvent({
                                type: "pinchstart",
                                handedness: e.handedness,
                                target: this
                            }))
                        } else null !== o && e.gripSpace && null !== (r = t.getPose(e.gripSpace, i)) && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1)
                    }
                    return null !== s && (s.visible = null !== n), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== a), this
                }
            }
            class rM extends z {
                constructor(e, t) {
                    super();
                    let i = this,
                        n = e.state,
                        r = null,
                        a = 1,
                        s = null,
                        o = "local-floor",
                        l = null,
                        h = null,
                        u = null,
                        c = null,
                        d = null,
                        p = [],
                        f = new Map,
                        m = new t4;
                    m.layers.enable(1), m.viewport = new ee;
                    let g = new t4;
                    g.layers.enable(2), g.viewport = new ee;
                    let v = [m, g],
                        x = new rv;
                    x.layers.enable(1), x.layers.enable(2);
                    let y = null,
                        _ = null;

                    function M(e) {
                        let t = f.get(e.inputSource);
                        t && t.dispatchEvent({
                            type: e.type,
                            data: e.inputSource
                        })
                    }

                    function b() {
                        f.forEach(function(e, t) {
                            e.disconnect(t)
                        }), f.clear(), y = null, _ = null, n.bindXRFramebuffer(null), e.setRenderTarget(e.getRenderTarget()), A.stop(), i.isPresenting = !1, i.dispatchEvent({
                            type: "sessionend"
                        })
                    }

                    function w(e) {
                        let t = r.inputSources;
                        for (let e = 0; e < p.length; e++) f.set(t[e], p[e]);
                        for (let t = 0; t < e.removed.length; t++) {
                            let i = e.removed[t],
                                n = f.get(i);
                            n && (n.dispatchEvent({
                                type: "disconnected",
                                data: i
                            }), f.delete(i))
                        }
                        for (let t = 0; t < e.added.length; t++) {
                            let i = e.added[t],
                                n = f.get(i);
                            n && n.dispatchEvent({
                                type: "connected",
                                data: i
                            })
                        }
                    }
                    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
                        let t = p[e];
                        return void 0 === t && (t = new r_, p[e] = t), t.getTargetRaySpace()
                    }, this.getControllerGrip = function(e) {
                        let t = p[e];
                        return void 0 === t && (t = new r_, p[e] = t), t.getGripSpace()
                    }, this.getHand = function(e) {
                        let t = p[e];
                        return void 0 === t && (t = new r_, p[e] = t), t.getHandSpace()
                    }, this.setFramebufferScaleFactor = function(e) {
                        a = e, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
                    }, this.setReferenceSpaceType = function(e) {
                        o = e, !0 === i.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
                    }, this.getReferenceSpace = function() {
                        return s
                    }, this.getSession = function() {
                        return r
                    }, this.setSession = async function(e) {
                        if (null !== (r = e)) {
                            r.addEventListener("select", M), r.addEventListener("selectstart", M), r.addEventListener("selectend", M), r.addEventListener("squeeze", M), r.addEventListener("squeezestart", M), r.addEventListener("squeezeend", M), r.addEventListener("end", b), r.addEventListener("inputsourceschange", w);
                            let e = t.getContextAttributes();
                            if (!0 !== e.xrCompatible && await t.makeXRCompatible(), void 0 === r.renderState.layers) {
                                let i = {
                                    antialias: e.antialias,
                                    alpha: e.alpha,
                                    depth: e.depth,
                                    stencil: e.stencil,
                                    framebufferScaleFactor: a
                                };
                                d = new XRWebGLLayer(r, t, i), r.updateRenderState({
                                    baseLayer: d
                                })
                            } else {
                                let i = 0;
                                if (e.antialias) {
                                    let i = {
                                        antialias: !0,
                                        alpha: e.alpha,
                                        depth: e.depth,
                                        stencil: e.stencil,
                                        framebufferScaleFactor: a
                                    };
                                    d = new XRWebGLLayer(r, t, i), r.updateRenderState({
                                        layers: [d]
                                    })
                                } else {
                                    e.depth && (i = e.stencil ? 34041 : 6402);
                                    let n = {
                                        colorFormat: e.alpha ? 6408 : 6407,
                                        depthFormat: i,
                                        scaleFactor: a
                                    };
                                    c = (h = new XRWebGLBinding(r, t)).createProjectionLayer(n), u = t.createFramebuffer(), r.updateRenderState({
                                        layers: [c]
                                    })
                                }
                            }
                            s = await r.requestReferenceSpace(o), A.setContext(r), A.start(), i.isPresenting = !0, i.dispatchEvent({
                                type: "sessionstart"
                            })
                        }
                    };
                    let S = new er,
                        T = new er;

                    function E(e, t) {
                        null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert()
                    }
                    this.updateCamera = function(e) {
                        if (null === r) return;
                        x.near = g.near = m.near = e.near, x.far = g.far = m.far = e.far, (y !== x.near || _ !== x.far) && (r.updateRenderState({
                            depthNear: x.near,
                            depthFar: x.far
                        }), y = x.near, _ = x.far);
                        let t = e.parent,
                            i = x.cameras;
                        E(x, t);
                        for (let e = 0; e < i.length; e++) E(i[e], t);
                        x.matrixWorld.decompose(x.position, x.quaternion, x.scale), e.position.copy(x.position), e.quaternion.copy(x.quaternion), e.scale.copy(x.scale), e.matrix.copy(x.matrix), e.matrixWorld.copy(x.matrixWorld);
                        let n = e.children;
                        for (let e = 0, t = n.length; e < t; e++) n[e].updateMatrixWorld(!0);
                        2 === i.length ? function(e, t, i) {
                            S.setFromMatrixPosition(t.matrixWorld), T.setFromMatrixPosition(i.matrixWorld);
                            let n = S.distanceTo(T),
                                r = t.projectionMatrix.elements,
                                a = i.projectionMatrix.elements,
                                s = r[14] / (r[10] - 1),
                                o = r[14] / (r[10] + 1),
                                l = (r[9] + 1) / r[5],
                                h = (r[9] - 1) / r[5],
                                u = (r[8] - 1) / r[0],
                                c = (a[8] + 1) / a[0],
                                d = n / (-u + c),
                                p = -(d * u);
                            t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(p), e.translateZ(d), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert();
                            let f = s + d,
                                m = o + d,
                                g = s * u - p,
                                v = s * c + (n - p),
                                x = l * o / m * f,
                                y = h * o / m * f;
                            e.projectionMatrix.makePerspective(g, v, x, y, f, m)
                        }(x, m, g) : x.projectionMatrix.copy(m.projectionMatrix)
                    }, this.getCamera = function() {
                        return x
                    }, this.getFoveation = function() {
                        return null !== c ? c.fixedFoveation : null !== d ? d.fixedFoveation : void 0
                    }, this.setFoveation = function(e) {
                        null !== c && (c.fixedFoveation = e), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = e)
                    };
                    let L = null,
                        A = new is;
                    A.setAnimationLoop(function(e, i) {
                        if (null !== (l = i.getViewerPose(s))) {
                            let e = l.views;
                            null !== d && n.bindXRFramebuffer(d.framebuffer);
                            let i = !1;
                            e.length !== x.cameras.length && (x.cameras.length = 0, i = !0);
                            for (let r = 0; r < e.length; r++) {
                                let a = e[r],
                                    s = null;
                                if (null !== d) s = d.getViewport(a);
                                else {
                                    let e = h.getViewSubImage(c, a);
                                    n.bindXRFramebuffer(u), void 0 !== e.depthStencilTexture && t.framebufferTexture2D(36160, 36096, 3553, e.depthStencilTexture, 0), t.framebufferTexture2D(36160, 36064, 3553, e.colorTexture, 0), s = e.viewport
                                }
                                let o = v[r];
                                o.matrix.fromArray(a.transform.matrix), o.projectionMatrix.fromArray(a.projectionMatrix), o.viewport.set(s.x, s.y, s.width, s.height), 0 === r && x.matrix.copy(o.matrix), !0 === i && x.cameras.push(o)
                            }
                        }
                        let a = r.inputSources;
                        for (let e = 0; e < p.length; e++) {
                            let t = p[e],
                                n = a[e];
                            t.update(n, i, s)
                        }
                        L && L(e, i)
                    }), this.setAnimationLoop = function(e) {
                        L = e
                    }, this.dispose = function() {}
                }
            }

            function rb(e) {
                function t(t, i) {
                    let n, r;
                    t.opacity.value = i.opacity, i.color && t.diffuse.value.copy(i.color), i.emissive && t.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (t.map.value = i.map), i.alphaMap && (t.alphaMap.value = i.alphaMap), i.specularMap && (t.specularMap.value = i.specularMap);
                    let a = e.get(i).envMap;
                    if (a) {
                        t.envMap.value = a, t.flipEnvMap.value = a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1, t.reflectivity.value = i.reflectivity, t.refractionRatio.value = i.refractionRatio;
                        let n = e.get(a).__maxMipLevel;
                        void 0 !== n && (t.maxMipLevel.value = n)
                    }
                    i.lightMap && (t.lightMap.value = i.lightMap, t.lightMapIntensity.value = i.lightMapIntensity), i.aoMap && (t.aoMap.value = i.aoMap, t.aoMapIntensity.value = i.aoMapIntensity), i.map ? n = i.map : i.specularMap ? n = i.specularMap : i.displacementMap ? n = i.displacementMap : i.normalMap ? n = i.normalMap : i.bumpMap ? n = i.bumpMap : i.roughnessMap ? n = i.roughnessMap : i.metalnessMap ? n = i.metalnessMap : i.alphaMap ? n = i.alphaMap : i.emissiveMap ? n = i.emissiveMap : i.clearcoatMap ? n = i.clearcoatMap : i.clearcoatNormalMap ? n = i.clearcoatNormalMap : i.clearcoatRoughnessMap ? n = i.clearcoatRoughnessMap : i.specularIntensityMap ? n = i.specularIntensityMap : i.specularTintMap && (n = i.specularTintMap), void 0 !== n && (n.isWebGLRenderTarget && (n = n.texture), !0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix)), i.aoMap ? r = i.aoMap : i.lightMap && (r = i.lightMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), t.uv2Transform.value.copy(r.matrix))
                }

                function i(t, i) {
                    t.roughness.value = i.roughness, t.metalness.value = i.metalness, i.roughnessMap && (t.roughnessMap.value = i.roughnessMap), i.metalnessMap && (t.metalnessMap.value = i.metalnessMap), i.emissiveMap && (t.emissiveMap.value = i.emissiveMap), i.bumpMap && (t.bumpMap.value = i.bumpMap, t.bumpScale.value = i.bumpScale, 1 === i.side && (t.bumpScale.value *= -1)), i.normalMap && (t.normalMap.value = i.normalMap, t.normalScale.value.copy(i.normalScale), 1 === i.side && t.normalScale.value.negate()), i.displacementMap && (t.displacementMap.value = i.displacementMap, t.displacementScale.value = i.displacementScale, t.displacementBias.value = i.displacementBias);
                    let n = e.get(i).envMap;
                    n && (t.envMapIntensity.value = i.envMapIntensity)
                }
                return {
                    refreshFogUniforms: function(e, t) {
                        e.fogColor.value.copy(t.color), t.isFog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
                    },
                    refreshMaterialUniforms: function(e, n, r, a, s) {
                        let o, l;
                        n.isMeshBasicMaterial ? t(e, n) : n.isMeshLambertMaterial ? (t(e, n), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap)) : n.isMeshToonMaterial ? (t(e, n), n.gradientMap && (e.gradientMap.value = n.gradientMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias)) : n.isMeshPhongMaterial ? (t(e, n), e.specular.value.copy(n.specular), e.shininess.value = Math.max(n.shininess, 1e-4), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias)) : n.isMeshStandardMaterial ? (t(e, n), n.isMeshPhysicalMaterial ? (i(e, n), e.reflectivity.value = n.reflectivity, e.clearcoat.value = n.clearcoat, e.clearcoatRoughness.value = n.clearcoatRoughness, n.sheen && e.sheen.value.copy(n.sheen), n.clearcoatMap && (e.clearcoatMap.value = n.clearcoatMap), n.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = n.clearcoatRoughnessMap), n.clearcoatNormalMap && (e.clearcoatNormalScale.value.copy(n.clearcoatNormalScale), e.clearcoatNormalMap.value = n.clearcoatNormalMap, 1 === n.side && e.clearcoatNormalScale.value.negate()), e.transmission.value = n.transmission, n.transmissionMap && (e.transmissionMap.value = n.transmissionMap), n.transmission > 0 && (e.transmissionSamplerMap.value = s.texture, e.transmissionSamplerSize.value.set(s.width, s.height)), e.thickness.value = n.thickness, n.thicknessMap && (e.thicknessMap.value = n.thicknessMap), e.attenuationDistance.value = n.attenuationDistance, e.attenuationTint.value.copy(n.attenuationTint), e.specularIntensity.value = n.specularIntensity, e.specularTint.value.copy(n.specularTint), n.specularIntensityMap && (e.specularIntensityMap.value = n.specularIntensityMap), n.specularTintMap && (e.specularTintMap.value = n.specularTintMap)) : i(e, n)) : n.isMeshMatcapMaterial ? (t(e, n), n.matcap && (e.matcap.value = n.matcap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias)) : n.isMeshDepthMaterial ? (t(e, n), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias)) : n.isMeshDistanceMaterial ? (t(e, n), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias), e.referencePosition.value.copy(n.referencePosition), e.nearDistance.value = n.nearDistance, e.farDistance.value = n.farDistance) : n.isMeshNormalMaterial ? (t(e, n), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias)) : n.isLineBasicMaterial ? (e.diffuse.value.copy(n.color), e.opacity.value = n.opacity, n.isLineDashedMaterial && (e.dashSize.value = n.dashSize, e.totalSize.value = n.dashSize + n.gapSize, e.scale.value = n.scale)) : n.isPointsMaterial ? (e.diffuse.value.copy(n.color), e.opacity.value = n.opacity, e.size.value = n.size * r, e.scale.value = .5 * a, n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.map ? o = n.map : n.alphaMap && (o = n.alphaMap), void 0 !== o && (!0 === o.matrixAutoUpdate && o.updateMatrix(), e.uvTransform.value.copy(o.matrix))) : n.isSpriteMaterial ? (e.diffuse.value.copy(n.color), e.opacity.value = n.opacity, e.rotation.value = n.rotation, n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.map ? l = n.map : n.alphaMap && (l = n.alphaMap), void 0 !== l && (!0 === l.matrixAutoUpdate && l.updateMatrix(), e.uvTransform.value.copy(l.matrix))) : n.isShadowMaterial ? (e.color.value.copy(n.color), e.opacity.value = n.opacity) : n.isShaderMaterial && (n.uniformsNeedUpdate = !1)
                    }
                }
            }

            function rw(e = {}) {
                let t, i, n, r, a, l, h, u, d, f, m, g, v, b, S, T, E, L, A, R, P, I, D;
                let N = void 0 !== e.canvas ? e.canvas : function() {
                        let e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                        return e.style.display = "block", e
                    }(),
                    z = void 0 !== e.context ? e.context : null,
                    O = void 0 !== e.alpha && e.alpha,
                    F = void 0 === e.depth || e.depth,
                    B = void 0 === e.stencil || e.stencil,
                    U = void 0 !== e.antialias && e.antialias,
                    H = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
                    G = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
                    V = void 0 !== e.powerPreference ? e.powerPreference : "default",
                    k = void 0 !== e.failIfMajorPerformanceCaveat && e.failIfMajorPerformanceCaveat,
                    W = null,
                    j = null,
                    q = [],
                    X = [];
                this.domElement = N, this.debug = {
                    checkShaderErrors: !0
                }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = C, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
                let Y = this,
                    J = !1,
                    Z = 0,
                    Q = 0,
                    K = null,
                    $ = -1,
                    en = null,
                    ea = new ee,
                    es = new ee,
                    eo = null,
                    el = N.width,
                    eh = N.height,
                    eu = 1,
                    ec = null,
                    ed = null,
                    ep = new ee(0, 0, el, eh),
                    ef = new ee(0, 0, el, eh),
                    em = !1,
                    eg = [],
                    ev = new ia,
                    ex = !1,
                    ey = !1,
                    e_ = null,
                    eM = new ez,
                    eb = new er,
                    ew = {
                        background: null,
                        fog: null,
                        environment: null,
                        overrideMaterial: null,
                        isScene: !0
                    };

                function eS() {
                    return null === K ? eu : 1
                }
                let eT = z;

                function eE(e, t) {
                    for (let i = 0; i < e.length; i++) {
                        let n = e[i],
                            r = N.getContext(n, t);
                        if (null !== r) return r
                    }
                    return null
                }
                try {
                    if (N.addEventListener("webglcontextlost", eR, !1), N.addEventListener("webglcontextrestored", eC, !1), null === eT) {
                        let e = ["webgl2", "webgl", "experimental-webgl"];
                        if (!0 === Y.isWebGL1Renderer && e.shift(), eT = eE(e, {
                                alpha: O,
                                depth: F,
                                stencil: B,
                                antialias: U,
                                premultipliedAlpha: H,
                                preserveDrawingBuffer: G,
                                powerPreference: V,
                                failIfMajorPerformanceCaveat: k
                            }), null === eT) {
                            if (eE(e)) throw Error("Error creating WebGL context with your selected attributes.");
                            throw Error("Error creating WebGL context.")
                        }
                    }
                    void 0 === eT.getShaderPrecisionFormat && (eT.getShaderPrecisionFormat = function() {
                        return {
                            rangeMin: 1,
                            rangeMax: 1,
                            precision: 1
                        }
                    })
                } catch (e) {
                    throw console.error("THREE.WebGLRenderer: " + e.message), e
                }

                function eL() {
                    t = new iW(eT), i = new ig(eT, t, e), t.init(i), I = new rg(eT, t, i), n = new rf(eT, t, i), eg[0] = 1029, r = new iX(eT), a = new re, l = new rm(eT, t, n, a, i, I, r), h = new ix(Y), u = new ik(Y), d = new io(eT, i), D = new ip(eT, t, d, i), f = new ij(eT, d, r, D), m = new iQ(eT, f, d, r), A = new iZ(eT), T = new iv(a), g = new n9(Y, h, u, t, i, D, T), v = new rb(a), b = new rr(a), S = new ru(t, i), L = new id(Y, h, n, m, H), E = new rp(Y, m, i), R = new im(eT, t, r, i), P = new iq(eT, t, r, i), r.programs = g.programs, Y.capabilities = i, Y.extensions = t, Y.properties = a, Y.renderLists = b, Y.shadowMap = E, Y.state = n, Y.info = r
                }
                eL();
                let eA = new rM(Y, eT);

                function eR(e) {
                    e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), J = !0
                }

                function eC() {
                    console.log("THREE.WebGLRenderer: Context Restored."), J = !1;
                    let e = r.autoReset,
                        t = E.enabled,
                        i = E.autoUpdate,
                        n = E.needsUpdate,
                        a = E.type;
                    eL(), r.autoReset = e, E.enabled = t, E.autoUpdate = i, E.needsUpdate = n, E.type = a
                }

                function eP(e) {
                    let t = e.target;
                    t.removeEventListener("dispose", eP),
                        function(e) {
                            let t = a.get(e).programs;
                            void 0 !== t && t.forEach(function(e) {
                                g.releaseProgram(e)
                            })
                        }(t), a.remove(t)
                }
                this.xr = eA, this.getContext = function() {
                    return eT
                }, this.getContextAttributes = function() {
                    return eT.getContextAttributes()
                }, this.forceContextLoss = function() {
                    let e = t.get("WEBGL_lose_context");
                    e && e.loseContext()
                }, this.forceContextRestore = function() {
                    let e = t.get("WEBGL_lose_context");
                    e && e.restoreContext()
                }, this.getPixelRatio = function() {
                    return eu
                }, this.setPixelRatio = function(e) {
                    void 0 !== e && (eu = e, this.setSize(el, eh, !1))
                }, this.getSize = function(e) {
                    return e.set(el, eh)
                }, this.setSize = function(e, t, i) {
                    if (eA.isPresenting) {
                        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                        return
                    }
                    el = e, eh = t, N.width = Math.floor(e * eu), N.height = Math.floor(t * eu), !1 !== i && (N.style.width = e + "px", N.style.height = t + "px"), this.setViewport(0, 0, e, t)
                }, this.getDrawingBufferSize = function(e) {
                    return e.set(el * eu, eh * eu).floor()
                }, this.setDrawingBufferSize = function(e, t, i) {
                    el = e, eh = t, eu = i, N.width = Math.floor(e * i), N.height = Math.floor(t * i), this.setViewport(0, 0, e, t)
                }, this.getCurrentViewport = function(e) {
                    return e.copy(ea)
                }, this.getViewport = function(e) {
                    return e.copy(ep)
                }, this.setViewport = function(e, t, i, r) {
                    e.isVector4 ? ep.set(e.x, e.y, e.z, e.w) : ep.set(e, t, i, r), n.viewport(ea.copy(ep).multiplyScalar(eu).floor())
                }, this.getScissor = function(e) {
                    return e.copy(ef)
                }, this.setScissor = function(e, t, i, r) {
                    e.isVector4 ? ef.set(e.x, e.y, e.z, e.w) : ef.set(e, t, i, r), n.scissor(es.copy(ef).multiplyScalar(eu).floor())
                }, this.getScissorTest = function() {
                    return em
                }, this.setScissorTest = function(e) {
                    n.setScissorTest(em = e)
                }, this.setOpaqueSort = function(e) {
                    ec = e
                }, this.setTransparentSort = function(e) {
                    ed = e
                }, this.getClearColor = function(e) {
                    return e.copy(L.getClearColor())
                }, this.setClearColor = function() {
                    L.setClearColor.apply(L, arguments)
                }, this.getClearAlpha = function() {
                    return L.getClearAlpha()
                }, this.setClearAlpha = function() {
                    L.setClearAlpha.apply(L, arguments)
                }, this.clear = function(e, t, i) {
                    let n = 0;
                    (void 0 === e || e) && (n |= 16384), (void 0 === t || t) && (n |= 256), (void 0 === i || i) && (n |= 1024), eT.clear(n)
                }, this.clearColor = function() {
                    this.clear(!0, !1, !1)
                }, this.clearDepth = function() {
                    this.clear(!1, !0, !1)
                }, this.clearStencil = function() {
                    this.clear(!1, !1, !0)
                }, this.dispose = function() {
                    N.removeEventListener("webglcontextlost", eR, !1), N.removeEventListener("webglcontextrestored", eC, !1), b.dispose(), S.dispose(), a.dispose(), h.dispose(), u.dispose(), m.dispose(), D.dispose(), eA.dispose(), eA.removeEventListener("sessionstart", eD), eA.removeEventListener("sessionend", eN), e_ && (e_.dispose(), e_ = null), eO.stop()
                }, this.renderBufferImmediate = function(e, t) {
                    D.initAttributes();
                    let i = a.get(e);
                    e.hasPositions && !i.position && (i.position = eT.createBuffer()), e.hasNormals && !i.normal && (i.normal = eT.createBuffer()), e.hasUvs && !i.uv && (i.uv = eT.createBuffer()), e.hasColors && !i.color && (i.color = eT.createBuffer());
                    let n = t.getAttributes();
                    e.hasPositions && (eT.bindBuffer(34962, i.position), eT.bufferData(34962, e.positionArray, 35048), D.enableAttribute(n.position), eT.vertexAttribPointer(n.position, 3, 5126, !1, 0, 0)), e.hasNormals && (eT.bindBuffer(34962, i.normal), eT.bufferData(34962, e.normalArray, 35048), D.enableAttribute(n.normal), eT.vertexAttribPointer(n.normal, 3, 5126, !1, 0, 0)), e.hasUvs && (eT.bindBuffer(34962, i.uv), eT.bufferData(34962, e.uvArray, 35048), D.enableAttribute(n.uv), eT.vertexAttribPointer(n.uv, 2, 5126, !1, 0, 0)), e.hasColors && (eT.bindBuffer(34962, i.color), eT.bufferData(34962, e.colorArray, 35048), D.enableAttribute(n.color), eT.vertexAttribPointer(n.color, 3, 5126, !1, 0, 0)), D.disableUnusedAttributes(), eT.drawArrays(4, 0, e.count), e.count = 0
                }, this.renderBufferDirect = function(e, t, i, r, a, s) {
                    let o;
                    null === t && (t = ew);
                    let l = a.isMesh && 0 > a.matrixWorld.determinant(),
                        h = eG(e, t, r, a);
                    n.setMaterial(r, l);
                    let u = i.index,
                        c = i.attributes.position;
                    if (null === u) {
                        if (void 0 === c || 0 === c.count) return
                    } else if (0 === u.count) return;
                    let p = 1;
                    !0 === r.wireframe && (u = f.getWireframeAttribute(i), p = 2), (void 0 !== i.morphAttributes.position || void 0 !== i.morphAttributes.normal) && A.update(a, i, r, h), D.setup(a, r, h, i, u);
                    let m = R;
                    null !== u && (o = d.get(u), (m = P).setIndex(o));
                    let g = null !== u ? u.count : c.count,
                        v = i.drawRange.start * p,
                        x = i.drawRange.count * p,
                        y = null !== s ? s.start * p : 0,
                        _ = null !== s ? s.count * p : 1 / 0,
                        M = Math.max(v, y),
                        b = Math.max(0, Math.min(g, v + x, y + _) - 1 - M + 1);
                    if (0 !== b) {
                        if (a.isMesh) !0 === r.wireframe ? (n.setLineWidth(r.wireframeLinewidth * eS()), m.setMode(1)) : m.setMode(4);
                        else if (a.isLine) {
                            let e = r.linewidth;
                            void 0 === e && (e = 1), n.setLineWidth(e * eS()), a.isLineSegments ? m.setMode(1) : a.isLineLoop ? m.setMode(2) : m.setMode(3)
                        } else a.isPoints ? m.setMode(0) : a.isSprite && m.setMode(4);
                        if (a.isInstancedMesh) m.renderInstances(M, b, a.count);
                        else if (i.isInstancedBufferGeometry) {
                            let e = Math.min(i.instanceCount, i._maxInstanceCount);
                            m.renderInstances(M, b, e)
                        } else m.render(M, b)
                    }
                }, this.compile = function(e, t) {
                    (j = S.get(e)).init(), X.push(j), e.traverseVisible(function(e) {
                        e.isLight && e.layers.test(t.layers) && (j.pushLight(e), e.castShadow && j.pushShadow(e))
                    }), j.setupLights(), e.traverse(function(t) {
                        let i = t.material;
                        if (i) {
                            if (Array.isArray(i))
                                for (let n = 0; n < i.length; n++) {
                                    let r = i[n];
                                    eU(r, e, t)
                                } else eU(i, e, t)
                        }
                    }), X.pop(), j = null
                };
                let eI = null;

                function eD() {
                    eO.stop()
                }

                function eN() {
                    eO.start()
                }
                let eO = new is;

                function eF(e, t, i) {
                    let r = !0 === t.isScene ? t.overrideMaterial : null;
                    if (i.isArrayCamera) {
                        let a = i.cameras;
                        for (let i = 0, s = a.length; i < s; i++) {
                            let s = a[i];
                            n.viewport(ea.copy(s.viewport)), j.setupLightsView(s);
                            for (let i = 0, n = e.length; i < n; i++) {
                                let n = e[i],
                                    a = n.object,
                                    o = n.geometry,
                                    l = null === r ? n.material : r,
                                    h = n.group;
                                a.layers.test(s.layers) && eB(a, t, s, o, l, h)
                            }
                        }
                    } else
                        for (let n = 0, a = e.length; n < a; n++) {
                            let a = e[n],
                                s = a.object,
                                o = a.geometry,
                                l = null === r ? a.material : r,
                                h = a.group;
                            eB(s, t, i, o, l, h)
                        }
                }

                function eB(e, t, i, r, a, l) {
                    if (e.onBeforeRender(Y, t, i, r, a, l), e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), e.isImmediateRenderObject) {
                        let r = eG(i, t, a, e);
                        n.setMaterial(a), D.reset(),
                            function(e, t) {
                                e.render(function(e) {
                                    Y.renderBufferImmediate(e, t)
                                })
                            }(e, r)
                    } else !0 === a.transparent && a.side === o ? (a.side = 1, a.needsUpdate = !0, Y.renderBufferDirect(i, t, r, a, e, l), a.side = s, a.needsUpdate = !0, Y.renderBufferDirect(i, t, r, a, e, l), a.side = o) : Y.renderBufferDirect(i, t, r, a, e, l);
                    e.onAfterRender(Y, t, i, r, a, l)
                }

                function eU(e, t, i) {
                    !0 !== t.isScene && (t = ew);
                    let n = a.get(e),
                        r = j.state.lights,
                        s = j.state.shadowsArray,
                        o = r.state.version,
                        l = g.getParameters(e, r.state, s, t, i),
                        c = g.getProgramCacheKey(l),
                        d = n.programs;
                    n.environment = e.isMeshStandardMaterial ? t.environment : null, n.fog = t.fog, n.envMap = (e.isMeshStandardMaterial ? u : h).get(e.envMap || n.environment), void 0 === d && (e.addEventListener("dispose", eP), d = new Map, n.programs = d);
                    let p = d.get(c);
                    if (void 0 !== p) {
                        if (n.currentProgram === p && n.lightsStateVersion === o) return eH(e, l), p
                    } else l.uniforms = g.getUniforms(e), e.onBuild(l, Y), e.onBeforeCompile(l, Y), p = g.acquireProgram(l, c), d.set(c, p), n.uniforms = l.uniforms;
                    let f = n.uniforms;
                    (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (f.clippingPlanes = T.uniform), eH(e, l), n.needsLights = e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights, n.lightsStateVersion = o, n.needsLights && (f.ambientLightColor.value = r.state.ambient, f.lightProbe.value = r.state.probe, f.directionalLights.value = r.state.directional, f.directionalLightShadows.value = r.state.directionalShadow, f.spotLights.value = r.state.spot, f.spotLightShadows.value = r.state.spotShadow, f.rectAreaLights.value = r.state.rectArea, f.ltc_1.value = r.state.rectAreaLTC1, f.ltc_2.value = r.state.rectAreaLTC2, f.pointLights.value = r.state.point, f.pointLightShadows.value = r.state.pointShadow, f.hemisphereLights.value = r.state.hemi, f.directionalShadowMap.value = r.state.directionalShadowMap, f.directionalShadowMatrix.value = r.state.directionalShadowMatrix, f.spotShadowMap.value = r.state.spotShadowMap, f.spotShadowMatrix.value = r.state.spotShadowMatrix, f.pointShadowMap.value = r.state.pointShadowMap, f.pointShadowMatrix.value = r.state.pointShadowMatrix);
                    let m = p.getUniforms(),
                        v = nW.seqWithValue(m.seq, f);
                    return n.currentProgram = p, n.uniformsList = v, p
                }

                function eH(e, t) {
                    let i = a.get(e);
                    i.outputEncoding = t.outputEncoding, i.instancing = t.instancing, i.skinning = t.skinning, i.morphTargets = t.morphTargets, i.morphNormals = t.morphNormals, i.numClippingPlanes = t.numClippingPlanes, i.numIntersection = t.numClipIntersection, i.vertexAlphas = t.vertexAlphas, i.vertexTangents = t.vertexTangents
                }

                function eG(e, t, r, s) {
                    var o;
                    !0 !== t.isScene && (t = ew), l.resetTextureUnits();
                    let c = t.fog,
                        d = r.isMeshStandardMaterial ? t.environment : null,
                        p = null === K ? Y.outputEncoding : K.texture.encoding,
                        f = (r.isMeshStandardMaterial ? u : h).get(r.envMap || d),
                        m = !0 === r.vertexColors && !!s.geometry && !!s.geometry.attributes.color && 4 === s.geometry.attributes.color.itemSize,
                        g = !!s.geometry && !!s.geometry.attributes.tangent,
                        x = !!s.geometry && !!s.geometry.morphAttributes.position,
                        y = !!s.geometry && !!s.geometry.morphAttributes.normal,
                        _ = a.get(r),
                        M = j.state.lights;
                    if (!0 === ex && (!0 === ey || e !== en)) {
                        let t = e === en && r.id === $;
                        T.setState(r, e, t)
                    }
                    let b = !1;
                    r.version === _.__version ? _.needsLights && _.lightsStateVersion !== M.state.version ? b = !0 : _.outputEncoding !== p ? b = !0 : s.isInstancedMesh && !1 === _.instancing ? b = !0 : s.isInstancedMesh || !0 !== _.instancing ? s.isSkinnedMesh && !1 === _.skinning ? b = !0 : s.isSkinnedMesh || !0 !== _.skinning ? _.envMap !== f ? b = !0 : r.fog && _.fog !== c ? b = !0 : void 0 !== _.numClippingPlanes && (_.numClippingPlanes !== T.numPlanes || _.numIntersection !== T.numIntersection) ? b = !0 : _.vertexAlphas !== m ? b = !0 : _.vertexTangents !== g ? b = !0 : _.morphTargets !== x ? b = !0 : _.morphNormals !== y && (b = !0) : b = !0 : b = !0 : (b = !0, _.__version = r.version);
                    let w = _.currentProgram;
                    !0 === b && (w = eU(r, t, s));
                    let S = !1,
                        E = !1,
                        L = !1,
                        A = w.getUniforms(),
                        R = _.uniforms;
                    if (n.useProgram(w.program) && (S = !0, E = !0, L = !0), r.id !== $ && ($ = r.id, E = !0), S || en !== e) {
                        if (A.setValue(eT, "projectionMatrix", e.projectionMatrix), i.logarithmicDepthBuffer && A.setValue(eT, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), en !== e && (en = e, E = !0, L = !0), r.isShaderMaterial || r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshStandardMaterial || r.envMap) {
                            let t = A.map.cameraPosition;
                            void 0 !== t && t.setValue(eT, eb.setFromMatrixPosition(e.matrixWorld))
                        }(r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && A.setValue(eT, "isOrthographic", !0 === e.isOrthographicCamera), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial || r.isShadowMaterial || s.isSkinnedMesh) && A.setValue(eT, "viewMatrix", e.matrixWorldInverse)
                    }
                    if (s.isSkinnedMesh) {
                        A.setOptional(eT, s, "bindMatrix"), A.setOptional(eT, s, "bindMatrixInverse");
                        let e = s.skeleton;
                        e && (i.floatVertexTextures ? (null === e.boneTexture && e.computeBoneTexture(), A.setValue(eT, "boneTexture", e.boneTexture, l), A.setValue(eT, "boneTextureSize", e.boneTextureSize)) : A.setOptional(eT, e, "boneMatrices"))
                    }
                    return (E || _.receiveShadow !== s.receiveShadow) && (_.receiveShadow = s.receiveShadow, A.setValue(eT, "receiveShadow", s.receiveShadow)), E && (A.setValue(eT, "toneMappingExposure", Y.toneMappingExposure), _.needsLights && (o = L, R.ambientLightColor.needsUpdate = o, R.lightProbe.needsUpdate = o, R.directionalLights.needsUpdate = o, R.directionalLightShadows.needsUpdate = o, R.pointLights.needsUpdate = o, R.pointLightShadows.needsUpdate = o, R.spotLights.needsUpdate = o, R.spotLightShadows.needsUpdate = o, R.rectAreaLights.needsUpdate = o, R.hemisphereLights.needsUpdate = o), c && r.fog && v.refreshFogUniforms(R, c), v.refreshMaterialUniforms(R, r, eu, eh, e_), nW.upload(eT, _.uniformsList, R, l)), r.isShaderMaterial && !0 === r.uniformsNeedUpdate && (nW.upload(eT, _.uniformsList, R, l), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && A.setValue(eT, "center", s.center), A.setValue(eT, "modelViewMatrix", s.modelViewMatrix), A.setValue(eT, "normalMatrix", s.normalMatrix), A.setValue(eT, "modelMatrix", s.matrixWorld), w
                }
                eO.setAnimationLoop(function(e) {
                    eI && eI(e)
                }), "undefined" != typeof window && eO.setContext(window), this.setAnimationLoop = function(e) {
                    eI = e, eA.setAnimationLoop(e), null === e ? eO.stop() : eO.start()
                }, eA.addEventListener("sessionstart", eD), eA.addEventListener("sessionend", eN), this.render = function(e, t) {
                    if (void 0 !== t && !0 !== t.isCamera) {
                        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                        return
                    }
                    if (!0 === J) return;
                    !0 === e.autoUpdate && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), !0 === eA.enabled && !0 === eA.isPresenting && (!0 === eA.cameraAutoUpdate && eA.updateCamera(t), t = eA.getCamera()), !0 === e.isScene && e.onBeforeRender(Y, e, t, K), (j = S.get(e, X.length)).init(), X.push(j), eM.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ev.setFromProjectionMatrix(eM), ey = this.localClippingEnabled, ex = T.init(this.clippingPlanes, ey, t), (W = b.get(e, q.length)).init(), q.push(W),
                        function e(t, i, n, a) {
                            if (!1 === t.visible) return;
                            let s = t.layers.test(i.layers);
                            if (s) {
                                if (t.isGroup) n = t.renderOrder;
                                else if (t.isLOD) !0 === t.autoUpdate && t.update(i);
                                else if (t.isLight) j.pushLight(t), t.castShadow && j.pushShadow(t);
                                else if (t.isSprite) {
                                    if (!t.frustumCulled || ev.intersectsSprite(t)) {
                                        a && eb.setFromMatrixPosition(t.matrixWorld).applyMatrix4(eM);
                                        let e = m.update(t),
                                            i = t.material;
                                        i.visible && W.push(t, e, i, n, eb.z, null)
                                    }
                                } else if (t.isImmediateRenderObject) a && eb.setFromMatrixPosition(t.matrixWorld).applyMatrix4(eM), W.push(t, null, t.material, n, eb.z, null);
                                else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== r.render.frame && (t.skeleton.update(), t.skeleton.frame = r.render.frame), !t.frustumCulled || ev.intersectsObject(t))) {
                                    a && eb.setFromMatrixPosition(t.matrixWorld).applyMatrix4(eM);
                                    let e = m.update(t),
                                        i = t.material;
                                    if (Array.isArray(i)) {
                                        let r = e.groups;
                                        for (let a = 0, s = r.length; a < s; a++) {
                                            let s = r[a],
                                                o = i[s.materialIndex];
                                            o && o.visible && W.push(t, e, o, n, eb.z, s)
                                        }
                                    } else i.visible && W.push(t, e, i, n, eb.z, null)
                                }
                            }
                            let o = t.children;
                            for (let t = 0, r = o.length; t < r; t++) e(o[t], i, n, a)
                        }(e, t, 0, Y.sortObjects), W.finish(), !0 === Y.sortObjects && W.sort(ec, ed), !0 === ex && T.beginShadows();
                    let a = j.state.shadowsArray;
                    E.render(a, e, t), j.setupLights(), j.setupLightsView(t), !0 === ex && T.endShadows(), !0 === this.info.autoReset && this.info.reset(), L.render(W, e);
                    let s = W.opaque,
                        o = W.transmissive,
                        h = W.transparent;
                    s.length > 0 && eF(s, e, t), o.length > 0 && function(e, t, n, r) {
                        if (null === e_) {
                            let e = !0 === U && !0 === i.isWebGL2,
                                t = e ? ei : et;
                            e_ = new t(1024, 1024, {
                                generateMipmaps: !0,
                                type: null !== I.convert(M) ? M : y,
                                minFilter: x,
                                magFilter: p,
                                wrapS: c,
                                wrapT: c
                            })
                        }
                        let a = Y.getRenderTarget();
                        Y.setRenderTarget(e_), Y.clear();
                        let s = Y.toneMapping;
                        Y.toneMapping = 0, eF(e, n, r), Y.toneMapping = s, l.updateMultisampleRenderTarget(e_), l.updateRenderTargetMipmap(e_), Y.setRenderTarget(a), eF(t, n, r)
                    }(s, o, e, t), h.length > 0 && eF(h, e, t), null !== K && (l.updateMultisampleRenderTarget(K), l.updateRenderTargetMipmap(K)), !0 === e.isScene && e.onAfterRender(Y, e, t), n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), n.setPolygonOffset(!1), D.resetDefaultState(), $ = -1, en = null, X.pop(), j = X.length > 0 ? X[X.length - 1] : null, q.pop(), W = q.length > 0 ? q[q.length - 1] : null
                }, this.getActiveCubeFace = function() {
                    return Z
                }, this.getActiveMipmapLevel = function() {
                    return Q
                }, this.getRenderTarget = function() {
                    return K
                }, this.setRenderTarget = function(e, r = 0, s = 0) {
                    K = e, Z = r, Q = s, e && void 0 === a.get(e).__webglFramebuffer && l.setupRenderTarget(e);
                    let o = null,
                        h = !1,
                        u = !1;
                    if (e) {
                        let t = e.texture;
                        (t.isDataTexture3D || t.isDataTexture2DArray) && (u = !0);
                        let i = a.get(e).__webglFramebuffer;
                        e.isWebGLCubeRenderTarget ? (o = i[r], h = !0) : o = e.isWebGLMultisampleRenderTarget ? a.get(e).__webglMultisampledFramebuffer : i, ea.copy(e.viewport), es.copy(e.scissor), eo = e.scissorTest
                    } else ea.copy(ep).multiplyScalar(eu).floor(), es.copy(ef).multiplyScalar(eu).floor(), eo = em;
                    let c = n.bindFramebuffer(36160, o);
                    if (c && i.drawBuffers) {
                        let n = !1;
                        if (e) {
                            if (e.isWebGLMultipleRenderTargets) {
                                let t = e.texture;
                                if (eg.length !== t.length || 36064 !== eg[0]) {
                                    for (let e = 0, i = t.length; e < i; e++) eg[e] = 36064 + e;
                                    eg.length = t.length, n = !0
                                }
                            } else(1 !== eg.length || 36064 !== eg[0]) && (eg[0] = 36064, eg.length = 1, n = !0)
                        } else(1 !== eg.length || 1029 !== eg[0]) && (eg[0] = 1029, eg.length = 1, n = !0);
                        n && (i.isWebGL2 ? eT.drawBuffers(eg) : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(eg))
                    }
                    if (n.viewport(ea), n.scissor(es), n.setScissorTest(eo), h) {
                        let t = a.get(e.texture);
                        eT.framebufferTexture2D(36160, 36064, 34069 + r, t.__webglTexture, s)
                    } else if (u) {
                        let t = a.get(e.texture),
                            i = r || 0;
                        eT.framebufferTextureLayer(36160, 36064, t.__webglTexture, s || 0, i)
                    }
                }, this.readRenderTargetPixels = function(e, r, s, o, l, h, u) {
                    if (!(e && e.isWebGLRenderTarget)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                        return
                    }
                    let c = a.get(e).__webglFramebuffer;
                    if (e.isWebGLCubeRenderTarget && void 0 !== u && (c = c[u]), c) {
                        n.bindFramebuffer(36160, c);
                        try {
                            let n = e.texture,
                                a = n.format,
                                u = n.type;
                            if (a !== w && I.convert(a) !== eT.getParameter(35739)) {
                                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                                return
                            }
                            let c = u === M && (t.has("EXT_color_buffer_half_float") || i.isWebGL2 && t.has("EXT_color_buffer_float"));
                            if (u !== y && I.convert(u) !== eT.getParameter(35738) && !(u === _ && (i.isWebGL2 || t.has("OES_texture_float") || t.has("WEBGL_color_buffer_float"))) && !c) {
                                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                                return
                            }
                            36053 === eT.checkFramebufferStatus(36160) ? r >= 0 && r <= e.width - o && s >= 0 && s <= e.height - l && eT.readPixels(r, s, o, l, I.convert(a), I.convert(u), h) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                        } finally {
                            let e = null !== K ? a.get(K).__webglFramebuffer : null;
                            n.bindFramebuffer(36160, e)
                        }
                    }
                }, this.copyFramebufferToTexture = function(e, t, r = 0) {
                    let a = Math.pow(2, -r),
                        s = Math.floor(t.image.width * a),
                        o = Math.floor(t.image.height * a),
                        h = I.convert(t.format);
                    i.isWebGL2 && (6407 === h && (h = 32849), 6408 === h && (h = 32856)), l.setTexture2D(t, 0), eT.copyTexImage2D(3553, r, h, e.x, e.y, s, o, 0), n.unbindTexture()
                }, this.copyTextureToTexture = function(e, t, i, r = 0) {
                    let a = t.image.width,
                        s = t.image.height,
                        o = I.convert(i.format),
                        h = I.convert(i.type);
                    l.setTexture2D(i, 0), eT.pixelStorei(37440, i.flipY), eT.pixelStorei(37441, i.premultiplyAlpha), eT.pixelStorei(3317, i.unpackAlignment), t.isDataTexture ? eT.texSubImage2D(3553, r, e.x, e.y, a, s, o, h, t.image.data) : t.isCompressedTexture ? eT.compressedTexSubImage2D(3553, r, e.x, e.y, t.mipmaps[0].width, t.mipmaps[0].height, o, t.mipmaps[0].data) : eT.texSubImage2D(3553, r, e.x, e.y, o, h, t.image), 0 === r && i.generateMipmaps && eT.generateMipmap(3553), n.unbindTexture()
                }, this.copyTextureToTexture3D = function(e, t, i, r, a = 0) {
                    let s;
                    if (Y.isWebGL1Renderer) {
                        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
                        return
                    }
                    let o = e.max.x - e.min.x + 1,
                        h = e.max.y - e.min.y + 1,
                        u = e.max.z - e.min.z + 1,
                        c = I.convert(r.format),
                        d = I.convert(r.type);
                    if (r.isDataTexture3D) l.setTexture3D(r, 0), s = 32879;
                    else if (r.isDataTexture2DArray) l.setTexture2DArray(r, 0), s = 35866;
                    else {
                        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                        return
                    }
                    eT.pixelStorei(37440, r.flipY), eT.pixelStorei(37441, r.premultiplyAlpha), eT.pixelStorei(3317, r.unpackAlignment);
                    let p = eT.getParameter(3314),
                        f = eT.getParameter(32878),
                        m = eT.getParameter(3316),
                        g = eT.getParameter(3315),
                        v = eT.getParameter(32877),
                        x = i.isCompressedTexture ? i.mipmaps[0] : i.image;
                    eT.pixelStorei(3314, x.width), eT.pixelStorei(32878, x.height), eT.pixelStorei(3316, e.min.x), eT.pixelStorei(3315, e.min.y), eT.pixelStorei(32877, e.min.z), i.isDataTexture || i.isDataTexture3D ? eT.texSubImage3D(s, a, t.x, t.y, t.z, o, h, u, c, d, x.data) : i.isCompressedTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), eT.compressedTexSubImage3D(s, a, t.x, t.y, t.z, o, h, u, c, x.data)) : eT.texSubImage3D(s, a, t.x, t.y, t.z, o, h, u, c, d, x), eT.pixelStorei(3314, p), eT.pixelStorei(32878, f), eT.pixelStorei(3316, m), eT.pixelStorei(3315, g), eT.pixelStorei(32877, v), 0 === a && r.generateMipmaps && eT.generateMipmap(s), n.unbindTexture()
                }, this.initTexture = function(e) {
                    l.setTexture2D(e, 0), n.unbindTexture()
                }, this.resetState = function() {
                    Z = 0, Q = 0, K = null, n.reset(), D.reset()
                }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                    detail: this
                }))
            }(class extends rw {}).prototype.isWebGL1Renderer = !0;
            class rS {
                constructor(e, t = 25e-5) {
                    this.name = "", this.color = new tg(e), this.density = t
                }
                clone() {
                    return new rS(this.color, this.density)
                }
                toJSON() {
                    return {
                        type: "FogExp2",
                        color: this.color.getHex(),
                        density: this.density
                    }
                }
            }
            rS.prototype.isFogExp2 = !0;
            class rT {
                constructor(e, t = 1, i = 1e3) {
                    this.name = "", this.color = new tg(e), this.near = t, this.far = i
                }
                clone() {
                    return new rT(this.color, this.near, this.far)
                }
                toJSON() {
                    return {
                        type: "Fog",
                        color: this.color.getHex(),
                        near: this.near,
                        far: this.far
                    }
                }
            }
            rT.prototype.isFog = !0;
            class rE extends e6 {
                constructor() {
                    super(), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                        detail: this
                    }))
                }
                copy(e, t) {
                    return super.copy(e, t), null !== e.background && (this.background = e.background.clone()), null !== e.environment && (this.environment = e.environment.clone()), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
                }
                toJSON(e) {
                    let t = super.toJSON(e);
                    return null !== this.fog && (t.object.fog = this.fog.toJSON()), t
                }
            }
            rE.prototype.isScene = !0;
            class rL {
                constructor(e, t) {
                    this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.usage = 35044, this.updateRange = {
                        offset: 0,
                        count: -1
                    }, this.version = 0, this.uuid = H()
                }
                onUploadCallback() {}
                set needsUpdate(e) {
                    !0 === e && this.version++
                }
                setUsage(e) {
                    return this.usage = e, this
                }
                copy(e) {
                    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
                }
                copyAt(e, t, i) {
                    e *= this.stride, i *= t.stride;
                    for (let n = 0, r = this.stride; n < r; n++) this.array[e + n] = t.array[i + n];
                    return this
                }
                set(e, t = 0) {
                    return this.array.set(e, t), this
                }
                clone(e) {
                    void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = H()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
                    let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
                        i = new this.constructor(t, this.stride);
                    return i.setUsage(this.usage), i
                }
                onUpload(e) {
                    return this.onUploadCallback = e, this
                }
                toJSON(e) {
                    return void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = H()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
                        uuid: this.uuid,
                        buffer: this.array.buffer._uuid,
                        type: this.array.constructor.name,
                        stride: this.stride
                    }
                }
            }
            rL.prototype.isInterleavedBuffer = !0;
            let rA = new er;
            class rR {
                constructor(e, t, i, n = !1) {
                    this.name = "", this.data = e, this.itemSize = t, this.offset = i, this.normalized = !0 === n
                }
                get count() {
                    return this.data.count
                }
                get array() {
                    return this.data.array
                }
                set needsUpdate(e) {
                    this.data.needsUpdate = e
                }
                applyMatrix4(e) {
                    for (let t = 0, i = this.data.count; t < i; t++) rA.x = this.getX(t), rA.y = this.getY(t), rA.z = this.getZ(t), rA.applyMatrix4(e), this.setXYZ(t, rA.x, rA.y, rA.z);
                    return this
                }
                applyNormalMatrix(e) {
                    for (let t = 0, i = this.count; t < i; t++) rA.x = this.getX(t), rA.y = this.getY(t), rA.z = this.getZ(t), rA.applyNormalMatrix(e), this.setXYZ(t, rA.x, rA.y, rA.z);
                    return this
                }
                transformDirection(e) {
                    for (let t = 0, i = this.count; t < i; t++) rA.x = this.getX(t), rA.y = this.getY(t), rA.z = this.getZ(t), rA.transformDirection(e), this.setXYZ(t, rA.x, rA.y, rA.z);
                    return this
                }
                setX(e, t) {
                    return this.data.array[e * this.data.stride + this.offset] = t, this
                }
                setY(e, t) {
                    return this.data.array[e * this.data.stride + this.offset + 1] = t, this
                }
                setZ(e, t) {
                    return this.data.array[e * this.data.stride + this.offset + 2] = t, this
                }
                setW(e, t) {
                    return this.data.array[e * this.data.stride + this.offset + 3] = t, this
                }
                getX(e) {
                    return this.data.array[e * this.data.stride + this.offset]
                }
                getY(e) {
                    return this.data.array[e * this.data.stride + this.offset + 1]
                }
                getZ(e) {
                    return this.data.array[e * this.data.stride + this.offset + 2]
                }
                getW(e) {
                    return this.data.array[e * this.data.stride + this.offset + 3]
                }
                setXY(e, t, i) {
                    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this
                }
                setXYZ(e, t, i, n) {
                    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = n, this
                }
                setXYZW(e, t, i, n, r) {
                    return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = i, this.data.array[e + 2] = n, this.data.array[e + 3] = r, this
                }
                clone(e) {
                    if (void 0 !== e) return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}), void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new rR(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
                    {
                        console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
                        let e = [];
                        for (let t = 0; t < this.count; t++) {
                            let i = t * this.data.stride + this.offset;
                            for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[i + t])
                        }
                        return new t_(new this.array.constructor(e), this.itemSize, this.normalized)
                    }
                }
                toJSON(e) {
                    if (void 0 !== e) return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}), void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
                        isInterleavedBufferAttribute: !0,
                        itemSize: this.itemSize,
                        data: this.data.uuid,
                        offset: this.offset,
                        normalized: this.normalized
                    };
                    {
                        console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
                        let e = [];
                        for (let t = 0; t < this.count; t++) {
                            let i = t * this.data.stride + this.offset;
                            for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[i + t])
                        }
                        return {
                            itemSize: this.itemSize,
                            type: this.array.constructor.name,
                            array: e,
                            normalized: this.normalized
                        }
                    }
                }
            }
            rR.prototype.isInterleavedBufferAttribute = !0;
            class rC extends th {
                constructor(e) {
                    super(), this.type = "SpriteMaterial", this.color = new tg(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.rotation = e.rotation, this.sizeAttenuation = e.sizeAttenuation, this
                }
            }
            rC.prototype.isSpriteMaterial = !0;
            let rP = new er,
                rI = new er,
                rD = new er,
                rN = new Y,
                rz = new Y,
                rO = new ez,
                rF = new er,
                rB = new er,
                rU = new er,
                rH = new Y,
                rG = new Y,
                rV = new Y;

            function rk(e, t, i, n, r, a) {
                rN.subVectors(e, i).addScalar(.5).multiply(n), void 0 !== r ? (rz.x = a * rN.x - r * rN.y, rz.y = r * rN.x + a * rN.y) : rz.copy(rN), e.copy(t), e.x += rz.x, e.y += rz.y, e.applyMatrix4(rO)
            }(class extends e6 {
                constructor(e) {
                    if (super(), this.type = "Sprite", void 0 === r) {
                        r = new tI;
                        let e = new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]),
                            t = new rL(e, 5);
                        r.setIndex([0, 1, 2, 0, 2, 3]), r.setAttribute("position", new rR(t, 3, 0, !1)), r.setAttribute("uv", new rR(t, 2, 3, !1))
                    }
                    this.geometry = r, this.material = void 0 !== e ? e : new rC, this.center = new Y(.5, .5)
                }
                raycast(e, t) {
                    let i, n;
                    null === e.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), rI.setFromMatrixScale(this.matrixWorld), rO.copy(e.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse, this.matrixWorld), rD.setFromMatrixPosition(this.modelViewMatrix), e.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && rI.multiplyScalar(-rD.z);
                    let r = this.material.rotation;
                    0 !== r && (n = Math.cos(r), i = Math.sin(r));
                    let a = this.center;
                    rk(rF.set(-.5, -.5, 0), rD, a, rI, i, n), rk(rB.set(.5, -.5, 0), rD, a, rI, i, n), rk(rU.set(.5, .5, 0), rD, a, rI, i, n), rH.set(0, 0), rG.set(1, 0), rV.set(1, 1);
                    let s = e.ray.intersectTriangle(rF, rB, rU, !1, rP);
                    if (null === s && (rk(rB.set(-.5, .5, 0), rD, a, rI, i, n), rG.set(0, 1), null === (s = e.ray.intersectTriangle(rF, rU, rB, !1, rP)))) return;
                    let o = e.ray.origin.distanceTo(rP);
                    o < e.near || o > e.far || t.push({
                        distance: o,
                        point: rP.clone(),
                        uv: to.getUV(rP, rF, rB, rU, rH, rG, rV, new Y),
                        face: null,
                        object: this
                    })
                }
                copy(e) {
                    return super.copy(e), void 0 !== e.center && this.center.copy(e.center), this.material = e.material, this
                }
            }).prototype.isSprite = !0;
            let rW = new er,
                rj = new ee,
                rq = new ee,
                rX = new er,
                rY = new ez;
            class rJ extends tZ {
                constructor(e, t) {
                    super(e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new ez, this.bindMatrixInverse = new ez
                }
                copy(e) {
                    return super.copy(e), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, this
                }
                bind(e, t) {
                    this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert()
                }
                pose() {
                    this.skeleton.pose()
                }
                normalizeSkinWeights() {
                    let e = new ee,
                        t = this.geometry.attributes.skinWeight;
                    for (let i = 0, n = t.count; i < n; i++) {
                        e.x = t.getX(i), e.y = t.getY(i), e.z = t.getZ(i), e.w = t.getW(i);
                        let n = 1 / e.manhattanLength();
                        n !== 1 / 0 ? e.multiplyScalar(n) : e.set(1, 0, 0, 0), t.setXYZW(i, e.x, e.y, e.z, e.w)
                    }
                }
                updateMatrixWorld(e) {
                    super.updateMatrixWorld(e), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
                }
                boneTransform(e, t) {
                    let i = this.skeleton,
                        n = this.geometry;
                    rj.fromBufferAttribute(n.attributes.skinIndex, e), rq.fromBufferAttribute(n.attributes.skinWeight, e), rW.fromBufferAttribute(n.attributes.position, e).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
                    for (let e = 0; e < 4; e++) {
                        let n = rq.getComponent(e);
                        if (0 !== n) {
                            let r = rj.getComponent(e);
                            rY.multiplyMatrices(i.bones[r].matrixWorld, i.boneInverses[r]), t.addScaledVector(rX.copy(rW).applyMatrix4(rY), n)
                        }
                    }
                    return t.applyMatrix4(this.bindMatrixInverse)
                }
            }
            rJ.prototype.isSkinnedMesh = !0;
            class rZ extends e6 {
                constructor() {
                    super(), this.type = "Bone"
                }
            }
            rZ.prototype.isBone = !0;
            class rQ extends K {
                constructor(e = null, t = 1, i = 1, n, r, a, s, o, l = p, h = p, u, c) {
                    super(null, a, s, o, l, h, n, r, u, c), this.image = {
                        data: e,
                        width: t,
                        height: i
                    }, this.magFilter = l, this.minFilter = h, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
                }
            }
            rQ.prototype.isDataTexture = !0;
            let rK = new ez,
                r$ = new ez;
            class r0 {
                constructor(e = [], t = []) {
                    this.uuid = H(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
                }
                init() {
                    let e = this.bones,
                        t = this.boneInverses;
                    if (this.boneMatrices = new Float32Array(16 * e.length), 0 === t.length) this.calculateInverses();
                    else if (e.length !== t.length) {
                        console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
                        for (let e = 0, t = this.bones.length; e < t; e++) this.boneInverses.push(new ez)
                    }
                }
                calculateInverses() {
                    this.boneInverses.length = 0;
                    for (let e = 0, t = this.bones.length; e < t; e++) {
                        let t = new ez;
                        this.bones[e] && t.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(t)
                    }
                }
                pose() {
                    for (let e = 0, t = this.bones.length; e < t; e++) {
                        let t = this.bones[e];
                        t && t.matrixWorld.copy(this.boneInverses[e]).invert()
                    }
                    for (let e = 0, t = this.bones.length; e < t; e++) {
                        let t = this.bones[e];
                        t && (t.parent && t.parent.isBone ? (t.matrix.copy(t.parent.matrixWorld).invert(), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
                    }
                }
                update() {
                    let e = this.bones,
                        t = this.boneInverses,
                        i = this.boneMatrices,
                        n = this.boneTexture;
                    for (let n = 0, r = e.length; n < r; n++) {
                        let r = e[n] ? e[n].matrixWorld : r$;
                        rK.multiplyMatrices(r, t[n]), rK.toArray(i, 16 * n)
                    }
                    null !== n && (n.needsUpdate = !0)
                }
                clone() {
                    return new r0(this.bones, this.boneInverses)
                }
                computeBoneTexture() {
                    let e = Math.sqrt(4 * this.bones.length);
                    e = Math.max(e = j(e), 4);
                    let t = new Float32Array(e * e * 4);
                    t.set(this.boneMatrices);
                    let i = new rQ(t, e, e, w, _);
                    return this.boneMatrices = t, this.boneTexture = i, this.boneTextureSize = e, this
                }
                getBoneByName(e) {
                    for (let t = 0, i = this.bones.length; t < i; t++) {
                        let i = this.bones[t];
                        if (i.name === e) return i
                    }
                }
                dispose() {
                    null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null)
                }
                fromJSON(e, t) {
                    this.uuid = e.uuid;
                    for (let i = 0, n = e.bones.length; i < n; i++) {
                        let n = e.bones[i],
                            r = t[n];
                        void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", n), r = new rZ), this.bones.push(r), this.boneInverses.push(new ez().fromArray(e.boneInverses[i]))
                    }
                    return this.init(), this
                }
                toJSON() {
                    let e = {
                        metadata: {
                            version: 4.5,
                            type: "Skeleton",
                            generator: "Skeleton.toJSON"
                        },
                        bones: [],
                        boneInverses: []
                    };
                    e.uuid = this.uuid;
                    let t = this.bones,
                        i = this.boneInverses;
                    for (let n = 0, r = t.length; n < r; n++) {
                        let r = t[n];
                        e.bones.push(r.uuid);
                        let a = i[n];
                        e.boneInverses.push(a.toArray())
                    }
                    return e
                }
            }
            let r1 = new ez,
                r3 = new ez,
                r2 = [],
                r4 = new tZ;
            (class extends tZ {
                constructor(e, t, i) {
                    super(e, t), this.instanceMatrix = new t_(new Float32Array(16 * i), 16), this.instanceColor = null, this.count = i, this.frustumCulled = !1
                }
                copy(e) {
                    return super.copy(e), this.instanceMatrix.copy(e.instanceMatrix), null !== e.instanceColor && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, this
                }
                getColorAt(e, t) {
                    t.fromArray(this.instanceColor.array, 3 * e)
                }
                getMatrixAt(e, t) {
                    t.fromArray(this.instanceMatrix.array, 16 * e)
                }
                raycast(e, t) {
                    let i = this.matrixWorld,
                        n = this.count;
                    if (r4.geometry = this.geometry, r4.material = this.material, void 0 !== r4.material)
                        for (let r = 0; r < n; r++) {
                            this.getMatrixAt(r, r1), r3.multiplyMatrices(i, r1), r4.matrixWorld = r3, r4.raycast(e, r2);
                            for (let e = 0, i = r2.length; e < i; e++) {
                                let i = r2[e];
                                i.instanceId = r, i.object = this, t.push(i)
                            }
                            r2.length = 0
                        }
                }
                setColorAt(e, t) {
                    null === this.instanceColor && (this.instanceColor = new t_(new Float32Array(3 * this.instanceMatrix.count), 3)), t.toArray(this.instanceColor.array, 3 * e)
                }
                setMatrixAt(e, t) {
                    t.toArray(this.instanceMatrix.array, 16 * e)
                }
                updateMorphTargets() {}
                dispose() {
                    this.dispatchEvent({
                        type: "dispose"
                    })
                }
            }).prototype.isInstancedMesh = !0;
            class r5 extends th {
                constructor(e) {
                    super(), this.type = "LineBasicMaterial", this.color = new tg(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this
                }
            }
            r5.prototype.isLineBasicMaterial = !0;
            let r6 = new er,
                r7 = new er,
                r8 = new ez,
                r9 = new eN,
                ae = new eE;
            class at extends e6 {
                constructor(e = new tI, t = new r5) {
                    super(), this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets()
                }
                copy(e) {
                    return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
                }
                computeLineDistances() {
                    let e = this.geometry;
                    if (e.isBufferGeometry) {
                        if (null === e.index) {
                            let t = e.attributes.position,
                                i = [0];
                            for (let e = 1, n = t.count; e < n; e++) r6.fromBufferAttribute(t, e - 1), r7.fromBufferAttribute(t, e), i[e] = i[e - 1], i[e] += r6.distanceTo(r7);
                            e.setAttribute("lineDistance", new tw(i, 1))
                        } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.")
                    } else e.isGeometry && console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                    return this
                }
                raycast(e, t) {
                    let i = this.geometry,
                        n = this.matrixWorld,
                        r = e.params.Line.threshold,
                        a = i.drawRange;
                    if (null === i.boundingSphere && i.computeBoundingSphere(), ae.copy(i.boundingSphere), ae.applyMatrix4(n), ae.radius += r, !1 === e.ray.intersectsSphere(ae)) return;
                    r8.copy(n).invert(), r9.copy(e.ray).applyMatrix4(r8);
                    let s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        o = s * s,
                        l = new er,
                        h = new er,
                        u = new er,
                        c = new er,
                        d = this.isLineSegments ? 2 : 1;
                    if (i.isBufferGeometry) {
                        let n = i.index,
                            r = i.attributes,
                            s = r.position;
                        if (null !== n) {
                            let i = Math.max(0, a.start),
                                r = Math.min(n.count, a.start + a.count);
                            for (let a = i, p = r - 1; a < p; a += d) {
                                let i = n.getX(a),
                                    r = n.getX(a + 1);
                                l.fromBufferAttribute(s, i), h.fromBufferAttribute(s, r);
                                let d = r9.distanceSqToSegment(l, h, c, u);
                                if (d > o) continue;
                                c.applyMatrix4(this.matrixWorld);
                                let p = e.ray.origin.distanceTo(c);
                                p < e.near || p > e.far || t.push({
                                    distance: p,
                                    point: u.clone().applyMatrix4(this.matrixWorld),
                                    index: a,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        } else {
                            let i = Math.max(0, a.start),
                                n = Math.min(s.count, a.start + a.count);
                            for (let r = i, a = n - 1; r < a; r += d) {
                                l.fromBufferAttribute(s, r), h.fromBufferAttribute(s, r + 1);
                                let i = r9.distanceSqToSegment(l, h, c, u);
                                if (i > o) continue;
                                c.applyMatrix4(this.matrixWorld);
                                let n = e.ray.origin.distanceTo(c);
                                n < e.near || n > e.far || t.push({
                                    distance: n,
                                    point: u.clone().applyMatrix4(this.matrixWorld),
                                    index: r,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                    } else i.isGeometry && console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
                updateMorphTargets() {
                    let e = this.geometry;
                    if (e.isBufferGeometry) {
                        let t = e.morphAttributes,
                            i = Object.keys(t);
                        if (i.length > 0) {
                            let e = t[i[0]];
                            if (void 0 !== e) {
                                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                                for (let t = 0, i = e.length; t < i; t++) {
                                    let i = e[t].name || String(t);
                                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
                                }
                            }
                        }
                    } else {
                        let t = e.morphTargets;
                        void 0 !== t && t.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                    }
                }
            }
            at.prototype.isLine = !0;
            let ai = new er,
                an = new er;
            class ar extends at {
                constructor(e, t) {
                    super(e, t), this.type = "LineSegments"
                }
                computeLineDistances() {
                    let e = this.geometry;
                    if (e.isBufferGeometry) {
                        if (null === e.index) {
                            let t = e.attributes.position,
                                i = [];
                            for (let e = 0, n = t.count; e < n; e += 2) ai.fromBufferAttribute(t, e), an.fromBufferAttribute(t, e + 1), i[e] = 0 === e ? 0 : i[e - 1], i[e + 1] = i[e] + ai.distanceTo(an);
                            e.setAttribute("lineDistance", new tw(i, 1))
                        } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.")
                    } else e.isGeometry && console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
                    return this
                }
            }
            ar.prototype.isLineSegments = !0;
            class aa extends at {
                constructor(e, t) {
                    super(e, t), this.type = "LineLoop"
                }
            }
            aa.prototype.isLineLoop = !0;
            class as extends th {
                constructor(e) {
                    super(), this.type = "PointsMaterial", this.color = new tg(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this
                }
            }
            as.prototype.isPointsMaterial = !0;
            let ao = new ez,
                al = new eN,
                ah = new eE,
                au = new er;
            class ac extends e6 {
                constructor(e = new tI, t = new as) {
                    super(), this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets()
                }
                copy(e) {
                    return super.copy(e), this.material = e.material, this.geometry = e.geometry, this
                }
                raycast(e, t) {
                    let i = this.geometry,
                        n = this.matrixWorld,
                        r = e.params.Points.threshold,
                        a = i.drawRange;
                    if (null === i.boundingSphere && i.computeBoundingSphere(), ah.copy(i.boundingSphere), ah.applyMatrix4(n), ah.radius += r, !1 === e.ray.intersectsSphere(ah)) return;
                    ao.copy(n).invert(), al.copy(e.ray).applyMatrix4(ao);
                    let s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        o = s * s;
                    if (i.isBufferGeometry) {
                        let r = i.index,
                            s = i.attributes,
                            l = s.position;
                        if (null !== r) {
                            let i = Math.max(0, a.start),
                                s = Math.min(r.count, a.start + a.count);
                            for (let a = i; a < s; a++) {
                                let i = r.getX(a);
                                au.fromBufferAttribute(l, i), ad(au, i, o, n, e, t, this)
                            }
                        } else {
                            let i = Math.max(0, a.start),
                                r = Math.min(l.count, a.start + a.count);
                            for (let a = i; a < r; a++) au.fromBufferAttribute(l, a), ad(au, a, o, n, e, t, this)
                        }
                    } else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
                }
                updateMorphTargets() {
                    let e = this.geometry;
                    if (e.isBufferGeometry) {
                        let t = e.morphAttributes,
                            i = Object.keys(t);
                        if (i.length > 0) {
                            let e = t[i[0]];
                            if (void 0 !== e) {
                                this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                                for (let t = 0, i = e.length; t < i; t++) {
                                    let i = e[t].name || String(t);
                                    this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
                                }
                            }
                        }
                    } else {
                        let t = e.morphTargets;
                        void 0 !== t && t.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
                    }
                }
            }

            function ad(e, t, i, n, r, a, s) {
                let o = al.distanceSqToPoint(e);
                if (o < i) {
                    let i = new er;
                    al.closestPointToPoint(e, i), i.applyMatrix4(n);
                    let l = r.ray.origin.distanceTo(i);
                    if (l < r.near || l > r.far) return;
                    a.push({
                        distance: l,
                        distanceToRay: Math.sqrt(o),
                        point: i,
                        index: t,
                        face: null,
                        object: s
                    })
                }
            }
            ac.prototype.isPoints = !0, (class extends K {
                constructor(e, t, i, n, r, a, s, o, l) {
                    super(e, t, i, n, r, a, s, o, l), this.format = void 0 !== s ? s : b, this.minFilter = void 0 !== a ? a : g, this.magFilter = void 0 !== r ? r : g, this.generateMipmaps = !1;
                    let h = this;
                    "requestVideoFrameCallback" in e && e.requestVideoFrameCallback(function t() {
                        h.needsUpdate = !0, e.requestVideoFrameCallback(t)
                    })
                }
                clone() {
                    return new this.constructor(this.image).copy(this)
                }
                update() {
                    let e = this.image;
                    !1 == "requestVideoFrameCallback" in e && e.readyState >= e.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
                }
            }).prototype.isVideoTexture = !0, (class extends K {
                constructor(e, t, i, n, r, a, s, o, l, h, u, c) {
                    super(null, a, s, o, l, h, n, r, u, c), this.image = {
                        width: t,
                        height: i
                    }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
                }
            }).prototype.isCompressedTexture = !0, (class extends K {
                constructor(e, t, i, n, r, a, s, o, l) {
                    super(e, t, i, n, r, a, s, o, l), this.needsUpdate = !0
                }
            }).prototype.isCanvasTexture = !0, (class extends K {
                constructor(e, t, i, n, r, a, s, o, l, h) {
                    if (1026 !== (h = void 0 !== h ? h : 1026) && 1027 !== h) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                    void 0 === i && 1026 === h && (i = 1012), void 0 === i && 1027 === h && (i = 1020), super(null, n, r, a, s, o, h, i, l), this.image = {
                        width: e,
                        height: t
                    }, this.magFilter = void 0 !== s ? s : p, this.minFilter = void 0 !== o ? o : p, this.flipY = !1, this.generateMipmaps = !1
                }
            }).prototype.isDepthTexture = !0;
            class ap extends tI {
                constructor(e = 1, t = 8, i = 0, n = 2 * Math.PI) {
                    super(), this.type = "CircleGeometry", this.parameters = {
                        radius: e,
                        segments: t,
                        thetaStart: i,
                        thetaLength: n
                    }, t = Math.max(3, t);
                    let r = [],
                        a = [],
                        s = [],
                        o = [],
                        l = new er,
                        h = new Y;
                    a.push(0, 0, 0), s.push(0, 0, 1), o.push(.5, .5);
                    for (let r = 0, u = 3; r <= t; r++, u += 3) {
                        let c = i + r / t * n;
                        l.x = e * Math.cos(c), l.y = e * Math.sin(c), a.push(l.x, l.y, l.z), s.push(0, 0, 1), h.x = (a[u] / e + 1) / 2, h.y = (a[u + 1] / e + 1) / 2, o.push(h.x, h.y)
                    }
                    for (let e = 1; e <= t; e++) r.push(e, e + 1, 0);
                    this.setIndex(r), this.setAttribute("position", new tw(a, 3)), this.setAttribute("normal", new tw(s, 3)), this.setAttribute("uv", new tw(o, 2))
                }
                static fromJSON(e) {
                    return new ap(e.radius, e.segments, e.thetaStart, e.thetaLength)
                }
            }
            class af extends tI {
                constructor(e = 1, t = 1, i = 1, n = 8, r = 1, a = !1, s = 0, o = 2 * Math.PI) {
                    super(), this.type = "CylinderGeometry", this.parameters = {
                        radiusTop: e,
                        radiusBottom: t,
                        height: i,
                        radialSegments: n,
                        heightSegments: r,
                        openEnded: a,
                        thetaStart: s,
                        thetaLength: o
                    };
                    let l = this;
                    n = Math.floor(n), r = Math.floor(r);
                    let h = [],
                        u = [],
                        c = [],
                        d = [],
                        p = 0,
                        f = [],
                        m = i / 2,
                        g = 0;

                    function v(i) {
                        let r = p,
                            a = new Y,
                            f = new er,
                            v = 0,
                            x = !0 === i ? e : t,
                            y = !0 === i ? 1 : -1;
                        for (let e = 1; e <= n; e++) u.push(0, m * y, 0), c.push(0, y, 0), d.push(.5, .5), p++;
                        let _ = p;
                        for (let e = 0; e <= n; e++) {
                            let t = e / n,
                                i = t * o + s,
                                r = Math.cos(i),
                                l = Math.sin(i);
                            f.x = x * l, f.y = m * y, f.z = x * r, u.push(f.x, f.y, f.z), c.push(0, y, 0), a.x = .5 * r + .5, a.y = .5 * l * y + .5, d.push(a.x, a.y), p++
                        }
                        for (let e = 0; e < n; e++) {
                            let t = r + e,
                                n = _ + e;
                            !0 === i ? h.push(n, n + 1, t) : h.push(n + 1, n, t), v += 3
                        }
                        l.addGroup(g, v, !0 === i ? 1 : 2), g += v
                    }(function() {
                        let a = new er,
                            v = new er,
                            x = 0,
                            y = (t - e) / i;
                        for (let l = 0; l <= r; l++) {
                            let h = [],
                                g = l / r,
                                x = g * (t - e) + e;
                            for (let e = 0; e <= n; e++) {
                                let t = e / n,
                                    r = t * o + s,
                                    l = Math.sin(r),
                                    f = Math.cos(r);
                                v.x = x * l, v.y = -g * i + m, v.z = x * f, u.push(v.x, v.y, v.z), a.set(l, y, f).normalize(), c.push(a.x, a.y, a.z), d.push(t, 1 - g), h.push(p++)
                            }
                            f.push(h)
                        }
                        for (let e = 0; e < n; e++)
                            for (let t = 0; t < r; t++) {
                                let i = f[t][e],
                                    n = f[t + 1][e],
                                    r = f[t + 1][e + 1],
                                    a = f[t][e + 1];
                                h.push(i, n, a), h.push(n, r, a), x += 6
                            }
                        l.addGroup(g, x, 0), g += x
                    })(), !1 === a && (e > 0 && v(!0), t > 0 && v(!1)), this.setIndex(h), this.setAttribute("position", new tw(u, 3)), this.setAttribute("normal", new tw(c, 3)), this.setAttribute("uv", new tw(d, 2))
                }
                static fromJSON(e) {
                    return new af(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength)
                }
            }
            class am extends af {
                constructor(e = 1, t = 1, i = 8, n = 1, r = !1, a = 0, s = 2 * Math.PI) {
                    super(0, e, t, i, n, r, a, s), this.type = "ConeGeometry", this.parameters = {
                        radius: e,
                        height: t,
                        radialSegments: i,
                        heightSegments: n,
                        openEnded: r,
                        thetaStart: a,
                        thetaLength: s
                    }
                }
                static fromJSON(e) {
                    return new am(e.radius, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength)
                }
            }
            class ag extends tI {
                constructor(e, t, i = 1, n = 0) {
                    super(), this.type = "PolyhedronGeometry", this.parameters = {
                        vertices: e,
                        indices: t,
                        radius: i,
                        detail: n
                    };
                    let r = [],
                        a = [];

                    function s(e) {
                        r.push(e.x, e.y, e.z)
                    }

                    function o(t, i) {
                        let n = 3 * t;
                        i.x = e[n + 0], i.y = e[n + 1], i.z = e[n + 2]
                    }

                    function l(e, t, i, n) {
                        n < 0 && 1 === e.x && (a[t] = e.x - 1), 0 === i.x && 0 === i.z && (a[t] = n / 2 / Math.PI + .5)
                    }

                    function h(e) {
                        return Math.atan2(e.z, -e.x)
                    }(function(e) {
                        let i = new er,
                            n = new er,
                            r = new er;
                        for (let a = 0; a < t.length; a += 3) o(t[a + 0], i), o(t[a + 1], n), o(t[a + 2], r),
                            function(e, t, i, n) {
                                let r = n + 1,
                                    a = [];
                                for (let n = 0; n <= r; n++) {
                                    a[n] = [];
                                    let s = e.clone().lerp(i, n / r),
                                        o = t.clone().lerp(i, n / r),
                                        l = r - n;
                                    for (let e = 0; e <= l; e++) 0 === e && n === r ? a[n][e] = s : a[n][e] = s.clone().lerp(o, e / l)
                                }
                                for (let e = 0; e < r; e++)
                                    for (let t = 0; t < 2 * (r - e) - 1; t++) {
                                        let i = Math.floor(t / 2);
                                        t % 2 == 0 ? (s(a[e][i + 1]), s(a[e + 1][i]), s(a[e][i])) : (s(a[e][i + 1]), s(a[e + 1][i + 1]), s(a[e + 1][i]))
                                    }
                            }(i, n, r, e)
                    })(n),
                    function(e) {
                        let t = new er;
                        for (let i = 0; i < r.length; i += 3) t.x = r[i + 0], t.y = r[i + 1], t.z = r[i + 2], t.normalize().multiplyScalar(e), r[i + 0] = t.x, r[i + 1] = t.y, r[i + 2] = t.z
                    }(i),
                    function() {
                        let e = new er;
                        for (let t = 0; t < r.length; t += 3) {
                            e.x = r[t + 0], e.y = r[t + 1], e.z = r[t + 2];
                            let i = h(e) / 2 / Math.PI + .5,
                                n = Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5;
                            a.push(i, 1 - n)
                        }(function() {
                            let e = new er,
                                t = new er,
                                i = new er,
                                n = new er,
                                s = new Y,
                                o = new Y,
                                u = new Y;
                            for (let c = 0, d = 0; c < r.length; c += 9, d += 6) {
                                e.set(r[c + 0], r[c + 1], r[c + 2]), t.set(r[c + 3], r[c + 4], r[c + 5]), i.set(r[c + 6], r[c + 7], r[c + 8]), s.set(a[d + 0], a[d + 1]), o.set(a[d + 2], a[d + 3]), u.set(a[d + 4], a[d + 5]), n.copy(e).add(t).add(i).divideScalar(3);
                                let p = h(n);
                                l(s, d + 0, e, p), l(o, d + 2, t, p), l(u, d + 4, i, p)
                            }
                        })(),
                        function() {
                            for (let e = 0; e < a.length; e += 6) {
                                let t = a[e + 0],
                                    i = a[e + 2],
                                    n = a[e + 4],
                                    r = Math.max(t, i, n),
                                    s = Math.min(t, i, n);
                                r > .9 && s < .1 && (t < .2 && (a[e + 0] += 1), i < .2 && (a[e + 2] += 1), n < .2 && (a[e + 4] += 1))
                            }
                        }()
                    }(), this.setAttribute("position", new tw(r, 3)), this.setAttribute("normal", new tw(r.slice(), 3)), this.setAttribute("uv", new tw(a, 2)), 0 === n ? this.computeVertexNormals() : this.normalizeNormals()
                }
                static fromJSON(e) {
                    return new ag(e.vertices, e.indices, e.radius, e.details)
                }
            }
            class av extends ag {
                constructor(e = 1, t = 0) {
                    let i = (1 + Math.sqrt(5)) / 2,
                        n = 1 / i,
                        r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n];
                    super(r, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t), this.type = "DodecahedronGeometry", this.parameters = {
                        radius: e,
                        detail: t
                    }
                }
                static fromJSON(e) {
                    return new av(e.radius, e.detail)
                }
            }
            new er, new er, new er, new to;
            class ax {
                constructor() {
                    this.type = "Curve", this.arcLengthDivisions = 200
                }
                getPoint() {
                    return console.warn("THREE.Curve: .getPoint() not implemented."), null
                }
                getPointAt(e, t) {
                    let i = this.getUtoTmapping(e);
                    return this.getPoint(i, t)
                }
                getPoints(e = 5) {
                    let t = [];
                    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
                    return t
                }
                getSpacedPoints(e = 5) {
                    let t = [];
                    for (let i = 0; i <= e; i++) t.push(this.getPointAt(i / e));
                    return t
                }
                getLength() {
                    let e = this.getLengths();
                    return e[e.length - 1]
                }
                getLengths(e = this.arcLengthDivisions) {
                    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
                    this.needsUpdate = !1;
                    let t = [],
                        i, n = this.getPoint(0),
                        r = 0;
                    t.push(0);
                    for (let a = 1; a <= e; a++) t.push(r += (i = this.getPoint(a / e)).distanceTo(n)), n = i;
                    return this.cacheArcLengths = t, t
                }
                updateArcLengths() {
                    this.needsUpdate = !0, this.getLengths()
                }
                getUtoTmapping(e, t) {
                    let i;
                    let n = this.getLengths(),
                        r = 0,
                        a = n.length;
                    i = t || e * n[a - 1];
                    let s = 0,
                        o = a - 1,
                        l;
                    for (; s <= o;)
                        if ((l = n[r = Math.floor(s + (o - s) / 2)] - i) < 0) s = r + 1;
                        else if (l > 0) o = r - 1;
                    else {
                        o = r;
                        break
                    }
                    if (n[r = o] === i) return r / (a - 1);
                    let h = n[r],
                        u = n[r + 1],
                        c = (r + (i - h) / (u - h)) / (a - 1);
                    return c
                }
                getTangent(e, t) {
                    let i = e - 1e-4,
                        n = e + 1e-4;
                    i < 0 && (i = 0), n > 1 && (n = 1);
                    let r = this.getPoint(i),
                        a = this.getPoint(n),
                        s = t || (r.isVector2 ? new Y : new er);
                    return s.copy(a).sub(r).normalize(), s
                }
                getTangentAt(e, t) {
                    let i = this.getUtoTmapping(e);
                    return this.getTangent(i, t)
                }
                computeFrenetFrames(e, t) {
                    let i = new er,
                        n = [],
                        r = [],
                        a = [],
                        s = new er,
                        o = new ez;
                    for (let t = 0; t <= e; t++) {
                        let i = t / e;
                        n[t] = this.getTangentAt(i, new er), n[t].normalize()
                    }
                    r[0] = new er, a[0] = new er;
                    let l = Number.MAX_VALUE,
                        h = Math.abs(n[0].x),
                        u = Math.abs(n[0].y),
                        c = Math.abs(n[0].z);
                    h <= l && (l = h, i.set(1, 0, 0)), u <= l && (l = u, i.set(0, 1, 0)), c <= l && i.set(0, 0, 1), s.crossVectors(n[0], i).normalize(), r[0].crossVectors(n[0], s), a[0].crossVectors(n[0], r[0]);
                    for (let t = 1; t <= e; t++) {
                        if (r[t] = r[t - 1].clone(), a[t] = a[t - 1].clone(), s.crossVectors(n[t - 1], n[t]), s.length() > Number.EPSILON) {
                            s.normalize();
                            let e = Math.acos(G(n[t - 1].dot(n[t]), -1, 1));
                            r[t].applyMatrix4(o.makeRotationAxis(s, e))
                        }
                        a[t].crossVectors(n[t], r[t])
                    }
                    if (!0 === t) {
                        let t = Math.acos(G(r[0].dot(r[e]), -1, 1));
                        t /= e, n[0].dot(s.crossVectors(r[0], r[e])) > 0 && (t = -t);
                        for (let i = 1; i <= e; i++) r[i].applyMatrix4(o.makeRotationAxis(n[i], t * i)), a[i].crossVectors(n[i], r[i])
                    }
                    return {
                        tangents: n,
                        normals: r,
                        binormals: a
                    }
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.arcLengthDivisions = e.arcLengthDivisions, this
                }
                toJSON() {
                    let e = {
                        metadata: {
                            version: 4.5,
                            type: "Curve",
                            generator: "Curve.toJSON"
                        }
                    };
                    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e
                }
                fromJSON(e) {
                    return this.arcLengthDivisions = e.arcLengthDivisions, this
                }
            }
            class ay extends ax {
                constructor(e = 0, t = 0, i = 1, n = 1, r = 0, a = 2 * Math.PI, s = !1, o = 0) {
                    super(), this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = s, this.aRotation = o
                }
                getPoint(e, t) {
                    let i = t || new Y,
                        n = 2 * Math.PI,
                        r = this.aEndAngle - this.aStartAngle,
                        a = Math.abs(r) < Number.EPSILON;
                    for (; r < 0;) r += n;
                    for (; r > n;) r -= n;
                    r < Number.EPSILON && (r = a ? 0 : n), !0 !== this.aClockwise || a || (r === n ? r = -n : r -= n);
                    let s = this.aStartAngle + e * r,
                        o = this.aX + this.xRadius * Math.cos(s),
                        l = this.aY + this.yRadius * Math.sin(s);
                    if (0 !== this.aRotation) {
                        let e = Math.cos(this.aRotation),
                            t = Math.sin(this.aRotation),
                            i = o - this.aX,
                            n = l - this.aY;
                        o = i * e - n * t + this.aX, l = i * t + n * e + this.aY
                    }
                    return i.set(o, l)
                }
                copy(e) {
                    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this
                }
            }
            ay.prototype.isEllipseCurve = !0;
            class a_ extends ay {
                constructor(e, t, i, n, r, a) {
                    super(e, t, i, i, n, r, a), this.type = "ArcCurve"
                }
            }

            function aM() {
                let e = 0,
                    t = 0,
                    i = 0,
                    n = 0;

                function r(r, a, s, o) {
                    e = r, t = s, i = -3 * r + 3 * a - 2 * s - o, n = 2 * r - 2 * a + s + o
                }
                return {
                    initCatmullRom: function(e, t, i, n, a) {
                        r(t, i, a * (i - e), a * (n - t))
                    },
                    initNonuniformCatmullRom: function(e, t, i, n, a, s, o) {
                        let l = (t - e) / a - (i - e) / (a + s) + (i - t) / s,
                            h = (i - t) / s - (n - t) / (s + o) + (n - i) / o;
                        r(t, i, l *= s, h *= s)
                    },
                    calc: function(r) {
                        let a = r * r;
                        return e + t * r + i * a + n * (a * r)
                    }
                }
            }
            a_.prototype.isArcCurve = !0;
            let ab = new er,
                aw = new aM,
                aS = new aM,
                aT = new aM;
            class aE extends ax {
                constructor(e = [], t = !1, i = "centripetal", n = .5) {
                    super(), this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = i, this.tension = n
                }
                getPoint(e, t = new er) {
                    let i, n;
                    let r = this.points,
                        a = r.length,
                        s = (a - (this.closed ? 0 : 1)) * e,
                        o = Math.floor(s),
                        l = s - o;
                    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / a) + 1) * a : 0 === l && o === a - 1 && (o = a - 2, l = 1), this.closed || o > 0 ? i = r[(o - 1) % a] : (ab.subVectors(r[0], r[1]).add(r[0]), i = ab);
                    let h = r[o % a],
                        u = r[(o + 1) % a];
                    if (this.closed || o + 2 < a ? n = r[(o + 2) % a] : (ab.subVectors(r[a - 1], r[a - 2]).add(r[a - 1]), n = ab), "centripetal" === this.curveType || "chordal" === this.curveType) {
                        let e = "chordal" === this.curveType ? .5 : .25,
                            t = Math.pow(i.distanceToSquared(h), e),
                            r = Math.pow(h.distanceToSquared(u), e),
                            a = Math.pow(u.distanceToSquared(n), e);
                        r < 1e-4 && (r = 1), t < 1e-4 && (t = r), a < 1e-4 && (a = r), aw.initNonuniformCatmullRom(i.x, h.x, u.x, n.x, t, r, a), aS.initNonuniformCatmullRom(i.y, h.y, u.y, n.y, t, r, a), aT.initNonuniformCatmullRom(i.z, h.z, u.z, n.z, t, r, a)
                    } else "catmullrom" === this.curveType && (aw.initCatmullRom(i.x, h.x, u.x, n.x, this.tension), aS.initCatmullRom(i.y, h.y, u.y, n.y, this.tension), aT.initCatmullRom(i.z, h.z, u.z, n.z, this.tension));
                    return t.set(aw.calc(l), aS.calc(l), aT.calc(l)), t
                }
                copy(e) {
                    super.copy(e), this.points = [];
                    for (let t = 0, i = e.points.length; t < i; t++) {
                        let i = e.points[t];
                        this.points.push(i.clone())
                    }
                    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
                }
                toJSON() {
                    let e = super.toJSON();
                    e.points = [];
                    for (let t = 0, i = this.points.length; t < i; t++) {
                        let i = this.points[t];
                        e.points.push(i.toArray())
                    }
                    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e
                }
                fromJSON(e) {
                    super.fromJSON(e), this.points = [];
                    for (let t = 0, i = e.points.length; t < i; t++) {
                        let i = e.points[t];
                        this.points.push(new er().fromArray(i))
                    }
                    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this
                }
            }

            function aL(e, t, i, n, r) {
                let a = (n - t) * .5,
                    s = (r - i) * .5,
                    o = e * e;
                return (2 * i - 2 * n + a + s) * (e * o) + (-3 * i + 3 * n - 2 * a - s) * o + a * e + i
            }

            function aA(e, t, i, n) {
                return function(e, t) {
                    let i = 1 - e;
                    return i * i * t
                }(e, t) + 2 * (1 - e) * e * i + e * e * n
            }

            function aR(e, t, i, n, r) {
                return function(e, t) {
                    let i = 1 - e;
                    return i * i * i * t
                }(e, t) + function(e, t) {
                    let i = 1 - e;
                    return 3 * i * i * e * t
                }(e, i) + 3 * (1 - e) * e * e * n + e * e * e * r
            }
            aE.prototype.isCatmullRomCurve3 = !0;
            class aC extends ax {
                constructor(e = new Y, t = new Y, i = new Y, n = new Y) {
                    super(), this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = n
                }
                getPoint(e, t = new Y) {
                    let i = this.v0,
                        n = this.v1,
                        r = this.v2,
                        a = this.v3;
                    return t.set(aR(e, i.x, n.x, r.x, a.x), aR(e, i.y, n.y, r.y, a.y)), t
                }
                copy(e) {
                    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
                }
            }
            aC.prototype.isCubicBezierCurve = !0;
            class aP extends ax {
                constructor(e = new er, t = new er, i = new er, n = new er) {
                    super(), this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = n
                }
                getPoint(e, t = new er) {
                    let i = this.v0,
                        n = this.v1,
                        r = this.v2,
                        a = this.v3;
                    return t.set(aR(e, i.x, n.x, r.x, a.x), aR(e, i.y, n.y, r.y, a.y), aR(e, i.z, n.z, r.z, a.z)), t
                }
                copy(e) {
                    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this
                }
            }
            aP.prototype.isCubicBezierCurve3 = !0;
            class aI extends ax {
                constructor(e = new Y, t = new Y) {
                    super(), this.type = "LineCurve", this.v1 = e, this.v2 = t
                }
                getPoint(e, t = new Y) {
                    return 1 === e ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)), t
                }
                getPointAt(e, t) {
                    return this.getPoint(e, t)
                }
                getTangent(e, t) {
                    let i = t || new Y;
                    return i.copy(this.v2).sub(this.v1).normalize(), i
                }
                copy(e) {
                    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
                }
            }
            aI.prototype.isLineCurve = !0;
            class aD extends ax {
                constructor(e = new Y, t = new Y, i = new Y) {
                    super(), this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = i
                }
                getPoint(e, t = new Y) {
                    let i = this.v0,
                        n = this.v1,
                        r = this.v2;
                    return t.set(aA(e, i.x, n.x, r.x), aA(e, i.y, n.y, r.y)), t
                }
                copy(e) {
                    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
                }
            }
            aD.prototype.isQuadraticBezierCurve = !0;
            class aN extends ax {
                constructor(e = new er, t = new er, i = new er) {
                    super(), this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = i
                }
                getPoint(e, t = new er) {
                    let i = this.v0,
                        n = this.v1,
                        r = this.v2;
                    return t.set(aA(e, i.x, n.x, r.x), aA(e, i.y, n.y, r.y), aA(e, i.z, n.z, r.z)), t
                }
                copy(e) {
                    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
                }
            }
            aN.prototype.isQuadraticBezierCurve3 = !0;
            class az extends ax {
                constructor(e = []) {
                    super(), this.type = "SplineCurve", this.points = e
                }
                getPoint(e, t = new Y) {
                    let i = this.points,
                        n = (i.length - 1) * e,
                        r = Math.floor(n),
                        a = n - r,
                        s = i[0 === r ? r : r - 1],
                        o = i[r],
                        l = i[r > i.length - 2 ? i.length - 1 : r + 1],
                        h = i[r > i.length - 3 ? i.length - 1 : r + 2];
                    return t.set(aL(a, s.x, o.x, l.x, h.x), aL(a, s.y, o.y, l.y, h.y)), t
                }
                copy(e) {
                    super.copy(e), this.points = [];
                    for (let t = 0, i = e.points.length; t < i; t++) {
                        let i = e.points[t];
                        this.points.push(i.clone())
                    }
                    return this
                }
                toJSON() {
                    let e = super.toJSON();
                    e.points = [];
                    for (let t = 0, i = this.points.length; t < i; t++) {
                        let i = this.points[t];
                        e.points.push(i.toArray())
                    }
                    return e
                }
                fromJSON(e) {
                    super.fromJSON(e), this.points = [];
                    for (let t = 0, i = e.points.length; t < i; t++) {
                        let i = e.points[t];
                        this.points.push(new Y().fromArray(i))
                    }
                    return this
                }
            }
            az.prototype.isSplineCurve = !0;
            var aO = Object.freeze({
                __proto__: null,
                ArcCurve: a_,
                CatmullRomCurve3: aE,
                CubicBezierCurve: aC,
                CubicBezierCurve3: aP,
                EllipseCurve: ay,
                LineCurve: aI,
                LineCurve3: class extends ax {
                    constructor(e = new er, t = new er) {
                        super(), this.type = "LineCurve3", this.isLineCurve3 = !0, this.v1 = e, this.v2 = t
                    }
                    getPoint(e, t = new er) {
                        return 1 === e ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(e).add(this.v1)), t
                    }
                    getPointAt(e, t) {
                        return this.getPoint(e, t)
                    }
                    copy(e) {
                        return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this
                    }
                    toJSON() {
                        let e = super.toJSON();
                        return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e
                    }
                    fromJSON(e) {
                        return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this
                    }
                },
                QuadraticBezierCurve: aD,
                QuadraticBezierCurve3: aN,
                SplineCurve: az
            });
            let aF = {
                triangulate: function(e, t, i = 2) {
                    let n, r, a, s, o, l, h;
                    let u = t && t.length,
                        c = u ? t[0] * i : e.length,
                        d = aB(e, 0, c, i, !0),
                        p = [];
                    if (!d || d.next === d.prev) return p;
                    if (u && (d = function(e, t, i, n) {
                            let r, a, s, o, l;
                            let h = [];
                            for (r = 0, a = t.length; r < a; r++) s = t[r] * n, o = r < a - 1 ? t[r + 1] * n : e.length, (l = aB(e, s, o, n, !1)) === l.next && (l.steiner = !0), h.push(function(e) {
                                let t = e,
                                    i = e;
                                do(t.x < i.x || t.x === i.x && t.y < i.y) && (i = t), t = t.next; while (t !== e);
                                return i
                            }(l));
                            for (h.sort(aH), r = 0; r < h.length; r++)(function(e, t) {
                                if (t = function(e, t) {
                                        let i = t,
                                            n = e.x,
                                            r = e.y,
                                            a = -1 / 0,
                                            s;
                                        do {
                                            if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
                                                let e = i.x + (r - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
                                                if (e <= n && e > a) {
                                                    if (a = e, e === n) {
                                                        if (r === i.y) return i;
                                                        if (r === i.next.y) return i.next
                                                    }
                                                    s = i.x < i.next.x ? i : i.next
                                                }
                                            }
                                            i = i.next
                                        } while (i !== t);
                                        if (!s) return null;
                                        if (n === a) return s;
                                        let o = s,
                                            l = s.x,
                                            h = s.y,
                                            u = 1 / 0,
                                            c;
                                        i = s;
                                        do {
                                            var d, p;
                                            n >= i.x && i.x >= l && n !== i.x && aV(r < h ? n : a, r, l, h, r < h ? a : n, r, i.x, i.y) && (c = Math.abs(r - i.y) / (n - i.x), aY(i, e) && (c < u || c === u && (i.x > s.x || i.x === s.x && (d = s, p = i, 0 > ak(d.prev, d, p.prev) && 0 > ak(p.next, d, d.next)))) && (s = i, u = c)), i = i.next
                                        } while (i !== o);
                                        return s
                                    }(e, t)) {
                                    let i = aJ(t, e);
                                    aU(t, t.next), aU(i, i.next)
                                }
                            })(h[r], i), i = aU(i, i.next);
                            return i
                        }(e, t, d, i)), e.length > 80 * i) {
                        n = a = e[0], r = s = e[1];
                        for (let t = i; t < c; t += i) o = e[t], l = e[t + 1], o < n && (n = o), l < r && (r = l), o > a && (a = o), l > s && (s = l);
                        h = 0 !== (h = Math.max(a - n, s - r)) ? 1 / h : 0
                    }
                    return function e(t, i, n, r, a, s, o) {
                        if (!t) return;
                        !o && s && function(e, t, i, n) {
                            let r = e;
                            do null === r.z && (r.z = aG(r.x, r.y, t, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== e);
                            r.prevZ.nextZ = null, r.prevZ = null,
                                function(e) {
                                    let t, i, n, r, a, s, o, l, h = 1;
                                    do {
                                        for (i = e, e = null, a = null, s = 0; i;) {
                                            for (s++, n = i, o = 0, t = 0; t < h && (o++, n = n.nextZ); t++);
                                            for (l = h; o > 0 || l > 0 && n;) 0 !== o && (0 === l || !n || i.z <= n.z) ? (r = i, i = i.nextZ, o--) : (r = n, n = n.nextZ, l--), a ? a.nextZ = r : e = r, r.prevZ = a, a = r;
                                            i = n
                                        }
                                        a.nextZ = null, h *= 2
                                    } while (s > 1)
                                }(r)
                        }(t, r, a, s);
                        let l = t,
                            h, u;
                        for (; t.prev !== t.next;) {
                            if (h = t.prev, u = t.next, s ? function(e, t, i, n) {
                                    let r = e.prev,
                                        a = e.next;
                                    if (ak(r, e, a) >= 0) return !1;
                                    let s = r.x < e.x ? r.x < a.x ? r.x : a.x : e.x < a.x ? e.x : a.x,
                                        o = r.y < e.y ? r.y < a.y ? r.y : a.y : e.y < a.y ? e.y : a.y,
                                        l = r.x > e.x ? r.x > a.x ? r.x : a.x : e.x > a.x ? e.x : a.x,
                                        h = r.y > e.y ? r.y > a.y ? r.y : a.y : e.y > a.y ? e.y : a.y,
                                        u = aG(s, o, t, i, n),
                                        c = aG(l, h, t, i, n),
                                        d = e.prevZ,
                                        p = e.nextZ;
                                    for (; d && d.z >= u && p && p.z <= c;) {
                                        if (d !== e.prev && d !== e.next && aV(r.x, r.y, e.x, e.y, a.x, a.y, d.x, d.y) && ak(d.prev, d, d.next) >= 0 || (d = d.prevZ, p !== e.prev && p !== e.next && aV(r.x, r.y, e.x, e.y, a.x, a.y, p.x, p.y) && ak(p.prev, p, p.next) >= 0)) return !1;
                                        p = p.nextZ
                                    }
                                    for (; d && d.z >= u;) {
                                        if (d !== e.prev && d !== e.next && aV(r.x, r.y, e.x, e.y, a.x, a.y, d.x, d.y) && ak(d.prev, d, d.next) >= 0) return !1;
                                        d = d.prevZ
                                    }
                                    for (; p && p.z <= c;) {
                                        if (p !== e.prev && p !== e.next && aV(r.x, r.y, e.x, e.y, a.x, a.y, p.x, p.y) && ak(p.prev, p, p.next) >= 0) return !1;
                                        p = p.nextZ
                                    }
                                    return !0
                                }(t, r, a, s) : function(e) {
                                    let t = e.prev,
                                        i = e.next;
                                    if (ak(t, e, i) >= 0) return !1;
                                    let n = e.next.next;
                                    for (; n !== e.prev;) {
                                        if (aV(t.x, t.y, e.x, e.y, i.x, i.y, n.x, n.y) && ak(n.prev, n, n.next) >= 0) return !1;
                                        n = n.next
                                    }
                                    return !0
                                }(t)) {
                                i.push(h.i / n), i.push(t.i / n), i.push(u.i / n), aQ(t), t = u.next, l = u.next;
                                continue
                            }
                            if ((t = u) === l) {
                                o ? 1 === o ? e(t = function(e, t, i) {
                                    let n = e;
                                    do {
                                        let r = n.prev,
                                            a = n.next.next;
                                        !aW(r, a) && aj(r, n, n.next, a) && aY(r, a) && aY(a, r) && (t.push(r.i / i), t.push(n.i / i), t.push(a.i / i), aQ(n), aQ(n.next), n = e = a), n = n.next
                                    } while (n !== e);
                                    return aU(n)
                                }(aU(t), i, n), i, n, r, a, s, 2) : 2 === o && function(t, i, n, r, a, s) {
                                    let o = t;
                                    do {
                                        let t = o.next.next;
                                        for (; t !== o.prev;) {
                                            var l, h;
                                            if (o.i !== t.i && (l = o, h = t, l.next.i !== h.i && l.prev.i !== h.i && ! function(e, t) {
                                                    let i = e;
                                                    do {
                                                        if (i.i !== e.i && i.next.i !== e.i && i.i !== t.i && i.next.i !== t.i && aj(i, i.next, e, t)) return !0;
                                                        i = i.next
                                                    } while (i !== e);
                                                    return !1
                                                }(l, h) && (aY(l, h) && aY(h, l) && function(e, t) {
                                                    let i = e,
                                                        n = !1,
                                                        r = (e.x + t.x) / 2,
                                                        a = (e.y + t.y) / 2;
                                                    do i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next; while (i !== e);
                                                    return n
                                                }(l, h) && (ak(l.prev, l, h.prev) || ak(l, h.prev, h)) || aW(l, h) && ak(l.prev, l, l.next) > 0 && ak(h.prev, h, h.next) > 0))) {
                                                let l = aJ(o, t);
                                                o = aU(o, o.next), l = aU(l, l.next), e(o, i, n, r, a, s), e(l, i, n, r, a, s);
                                                return
                                            }
                                            t = t.next
                                        }
                                        o = o.next
                                    } while (o !== t)
                                }(t, i, n, r, a, s) : e(aU(t), i, n, r, a, s, 1);
                                break
                            }
                        }
                    }(d, p, i, n, r, h), p
                }
            };

            function aB(e, t, i, n, r) {
                let a, s;
                if (r === function(e, t, i, n) {
                        let r = 0;
                        for (let a = t, s = i - n; a < i; a += n) r += (e[s] - e[a]) * (e[a + 1] + e[s + 1]), s = a;
                        return r
                    }(e, t, i, n) > 0)
                    for (a = t; a < i; a += n) s = aZ(a, e[a], e[a + 1], s);
                else
                    for (a = i - n; a >= t; a -= n) s = aZ(a, e[a], e[a + 1], s);
                return s && aW(s, s.next) && (aQ(s), s = s.next), s
            }

            function aU(e, t) {
                if (!e) return e;
                t || (t = e);
                let i = e,
                    n;
                do
                    if (n = !1, !i.steiner && (aW(i, i.next) || 0 === ak(i.prev, i, i.next))) {
                        if (aQ(i), (i = t = i.prev) === i.next) break;
                        n = !0
                    } else i = i.next; while (n || i !== t);
                return t
            }

            function aH(e, t) {
                return e.x - t.x
            }

            function aG(e, t, i, n, r) {
                return (e = ((e = ((e = ((e = ((e = 32767 * (e - i) * r) | e << 8) & 16711935) | e << 4) & 252645135) | e << 2) & 858993459) | e << 1) & 1431655765) | (t = ((t = ((t = ((t = ((t = 32767 * (t - n) * r) | t << 8) & 16711935) | t << 4) & 252645135) | t << 2) & 858993459) | t << 1) & 1431655765) << 1
            }

            function aV(e, t, i, n, r, a, s, o) {
                return (r - s) * (t - o) - (e - s) * (a - o) >= 0 && (e - s) * (n - o) - (i - s) * (t - o) >= 0 && (i - s) * (a - o) - (r - s) * (n - o) >= 0
            }

            function ak(e, t, i) {
                return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y)
            }

            function aW(e, t) {
                return e.x === t.x && e.y === t.y
            }

            function aj(e, t, i, n) {
                let r = aX(ak(e, t, i)),
                    a = aX(ak(e, t, n)),
                    s = aX(ak(i, n, e)),
                    o = aX(ak(i, n, t));
                return !!(r !== a && s !== o || 0 === r && aq(e, i, t) || 0 === a && aq(e, n, t) || 0 === s && aq(i, e, n) || 0 === o && aq(i, t, n))
            }

            function aq(e, t, i) {
                return t.x <= Math.max(e.x, i.x) && t.x >= Math.min(e.x, i.x) && t.y <= Math.max(e.y, i.y) && t.y >= Math.min(e.y, i.y)
            }

            function aX(e) {
                return e > 0 ? 1 : e < 0 ? -1 : 0
            }

            function aY(e, t) {
                return 0 > ak(e.prev, e, e.next) ? ak(e, t, e.next) >= 0 && ak(e, e.prev, t) >= 0 : 0 > ak(e, t, e.prev) || 0 > ak(e, e.next, t)
            }

            function aJ(e, t) {
                let i = new aK(e.i, e.x, e.y),
                    n = new aK(t.i, t.x, t.y),
                    r = e.next,
                    a = t.prev;
                return e.next = t, t.prev = e, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
            }

            function aZ(e, t, i, n) {
                let r = new aK(e, t, i);
                return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
            }

            function aQ(e) {
                e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
            }

            function aK(e, t, i) {
                this.i = e, this.x = t, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }
            class a$ {
                static area(e) {
                    let t = e.length,
                        i = 0;
                    for (let n = t - 1, r = 0; r < t; n = r++) i += e[n].x * e[r].y - e[r].x * e[n].y;
                    return .5 * i
                }
                static isClockWise(e) {
                    return 0 > a$.area(e)
                }
                static triangulateShape(e, t) {
                    let i = [],
                        n = [],
                        r = [];
                    a0(e), a1(i, e);
                    let a = e.length;
                    t.forEach(a0);
                    for (let e = 0; e < t.length; e++) n.push(a), a += t[e].length, a1(i, t[e]);
                    let s = aF.triangulate(i, n);
                    for (let e = 0; e < s.length; e += 3) r.push(s.slice(e, e + 3));
                    return r
                }
            }

            function a0(e) {
                let t = e.length;
                t > 2 && e[t - 1].equals(e[0]) && e.pop()
            }

            function a1(e, t) {
                for (let i = 0; i < t.length; i++) e.push(t[i].x), e.push(t[i].y)
            }
            class a3 extends tI {
                constructor(e, t) {
                    super(), this.type = "ExtrudeGeometry", this.parameters = {
                        shapes: e,
                        options: t
                    }, e = Array.isArray(e) ? e : [e];
                    let i = this,
                        n = [],
                        r = [];
                    for (let a = 0, s = e.length; a < s; a++) {
                        let s = e[a];
                        ! function(e) {
                            let a, s, o, l;
                            let h = [],
                                u = void 0 !== t.curveSegments ? t.curveSegments : 12,
                                c = void 0 !== t.steps ? t.steps : 1,
                                d = void 0 !== t.depth ? t.depth : 100,
                                p = void 0 === t.bevelEnabled || t.bevelEnabled,
                                f = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
                                m = void 0 !== t.bevelSize ? t.bevelSize : f - 2,
                                g = void 0 !== t.bevelOffset ? t.bevelOffset : 0,
                                v = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
                                x = t.extrudePath,
                                y = void 0 !== t.UVGenerator ? t.UVGenerator : a2;
                            void 0 !== t.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), d = t.amount);
                            let _, M = !1;
                            x && (_ = x.getSpacedPoints(c), M = !0, p = !1, a = x.computeFrenetFrames(c, !1), s = new er, o = new er, l = new er), p || (v = 0, f = 0, m = 0, g = 0);
                            let b = e.extractPoints(u),
                                w = b.shape,
                                S = b.holes,
                                T = !a$.isClockWise(w);
                            if (T) {
                                w = w.reverse();
                                for (let e = 0, t = S.length; e < t; e++) {
                                    let t = S[e];
                                    a$.isClockWise(t) && (S[e] = t.reverse())
                                }
                            }
                            let E = a$.triangulateShape(w, S),
                                L = w;
                            for (let e = 0, t = S.length; e < t; e++) {
                                let t = S[e];
                                w = w.concat(t)
                            }

                            function A(e, t, i) {
                                return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(i).add(e)
                            }
                            let R = w.length,
                                C = E.length;

                            function P(e, t, i) {
                                let n, r, a;
                                let s = e.x - t.x,
                                    o = e.y - t.y,
                                    l = i.x - e.x,
                                    h = i.y - e.y,
                                    u = s * s + o * o,
                                    c = s * h - o * l;
                                if (Math.abs(c) > Number.EPSILON) {
                                    let c = Math.sqrt(u),
                                        d = Math.sqrt(l * l + h * h),
                                        p = t.x - o / c,
                                        f = t.y + s / c,
                                        m = i.x - h / d,
                                        g = i.y + l / d,
                                        v = ((m - p) * h - (g - f) * l) / (s * h - o * l);
                                    n = p + s * v - e.x, r = f + o * v - e.y;
                                    let x = n * n + r * r;
                                    if (x <= 2) return new Y(n, r);
                                    a = Math.sqrt(x / 2)
                                } else {
                                    let e = !1;
                                    s > Number.EPSILON ? l > Number.EPSILON && (e = !0) : s < -Number.EPSILON ? l < -Number.EPSILON && (e = !0) : Math.sign(o) === Math.sign(h) && (e = !0), e ? (n = -o, r = s, a = Math.sqrt(u)) : (n = s, r = o, a = Math.sqrt(u / 2))
                                }
                                return new Y(n / a, r / a)
                            }
                            let I = [];
                            for (let e = 0, t = L.length, i = t - 1, n = e + 1; e < t; e++, i++, n++) i === t && (i = 0), n === t && (n = 0), I[e] = P(L[e], L[i], L[n]);
                            let D = [],
                                N, z = I.concat();
                            for (let e = 0, t = S.length; e < t; e++) {
                                let t = S[e];
                                N = [];
                                for (let e = 0, i = t.length, n = i - 1, r = e + 1; e < i; e++, n++, r++) n === i && (n = 0), r === i && (r = 0), N[e] = P(t[e], t[n], t[r]);
                                D.push(N), z = z.concat(N)
                            }
                            for (let e = 0; e < v; e++) {
                                let t = e / v,
                                    i = f * Math.cos(t * Math.PI / 2),
                                    n = m * Math.sin(t * Math.PI / 2) + g;
                                for (let e = 0, t = L.length; e < t; e++) {
                                    let t = A(L[e], I[e], n);
                                    B(t.x, t.y, -i)
                                }
                                for (let e = 0, t = S.length; e < t; e++) {
                                    let t = S[e];
                                    N = D[e];
                                    for (let e = 0, r = t.length; e < r; e++) {
                                        let r = A(t[e], N[e], n);
                                        B(r.x, r.y, -i)
                                    }
                                }
                            }
                            let O = m + g;
                            for (let e = 0; e < R; e++) {
                                let t = p ? A(w[e], z[e], O) : w[e];
                                M ? (o.copy(a.normals[0]).multiplyScalar(t.x), s.copy(a.binormals[0]).multiplyScalar(t.y), l.copy(_[0]).add(o).add(s), B(l.x, l.y, l.z)) : B(t.x, t.y, 0)
                            }
                            for (let e = 1; e <= c; e++)
                                for (let t = 0; t < R; t++) {
                                    let i = p ? A(w[t], z[t], O) : w[t];
                                    M ? (o.copy(a.normals[e]).multiplyScalar(i.x), s.copy(a.binormals[e]).multiplyScalar(i.y), l.copy(_[e]).add(o).add(s), B(l.x, l.y, l.z)) : B(i.x, i.y, d / c * e)
                                }
                            for (let e = v - 1; e >= 0; e--) {
                                let t = e / v,
                                    i = f * Math.cos(t * Math.PI / 2),
                                    n = m * Math.sin(t * Math.PI / 2) + g;
                                for (let e = 0, t = L.length; e < t; e++) {
                                    let t = A(L[e], I[e], n);
                                    B(t.x, t.y, d + i)
                                }
                                for (let e = 0, t = S.length; e < t; e++) {
                                    let t = S[e];
                                    N = D[e];
                                    for (let e = 0, r = t.length; e < r; e++) {
                                        let r = A(t[e], N[e], n);
                                        M ? B(r.x, r.y + _[c - 1].y, _[c - 1].x + i) : B(r.x, r.y, d + i)
                                    }
                                }
                            }

                            function F(e, t) {
                                let r = e.length;
                                for (; --r >= 0;) {
                                    let a = r,
                                        s = r - 1;
                                    s < 0 && (s = e.length - 1);
                                    for (let e = 0, r = c + 2 * v; e < r; e++) {
                                        let r = R * e,
                                            o = R * (e + 1),
                                            l = t + a + r,
                                            h = t + s + r,
                                            u = t + s + o,
                                            c = t + a + o;
                                        ! function(e, t, r, a) {
                                            H(e), H(t), H(a), H(t), H(r), H(a);
                                            let s = n.length / 3,
                                                o = y.generateSideWallUV(i, n, s - 6, s - 3, s - 2, s - 1);
                                            G(o[0]), G(o[1]), G(o[3]), G(o[1]), G(o[2]), G(o[3])
                                        }(l, h, u, c)
                                    }
                                }
                            }

                            function B(e, t, i) {
                                h.push(e), h.push(t), h.push(i)
                            }

                            function U(e, t, r) {
                                H(e), H(t), H(r);
                                let a = n.length / 3,
                                    s = y.generateTopUV(i, n, a - 3, a - 2, a - 1);
                                G(s[0]), G(s[1]), G(s[2])
                            }

                            function H(e) {
                                n.push(h[3 * e + 0]), n.push(h[3 * e + 1]), n.push(h[3 * e + 2])
                            }

                            function G(e) {
                                r.push(e.x), r.push(e.y)
                            }(function() {
                                let e = n.length / 3;
                                if (p) {
                                    let e = 0 * R;
                                    for (let t = 0; t < C; t++) {
                                        let i = E[t];
                                        U(i[2] + e, i[1] + e, i[0] + e)
                                    }
                                    e = R * (c + 2 * v);
                                    for (let t = 0; t < C; t++) {
                                        let i = E[t];
                                        U(i[0] + e, i[1] + e, i[2] + e)
                                    }
                                } else {
                                    for (let e = 0; e < C; e++) {
                                        let t = E[e];
                                        U(t[2], t[1], t[0])
                                    }
                                    for (let e = 0; e < C; e++) {
                                        let t = E[e];
                                        U(t[0] + R * c, t[1] + R * c, t[2] + R * c)
                                    }
                                }
                                i.addGroup(e, n.length / 3 - e, 0)
                            })(),
                            function() {
                                let e = n.length / 3,
                                    t = 0;
                                F(L, 0), t += L.length;
                                for (let e = 0, i = S.length; e < i; e++) {
                                    let i = S[e];
                                    F(i, t), t += i.length
                                }
                                i.addGroup(e, n.length / 3 - e, 1)
                            }()
                        }(s)
                    }
                    this.setAttribute("position", new tw(n, 3)), this.setAttribute("uv", new tw(r, 2)), this.computeVertexNormals()
                }
                toJSON() {
                    let e = super.toJSON(),
                        t = this.parameters.shapes,
                        i = this.parameters.options;
                    return function(e, t, i) {
                        if (i.shapes = [], Array.isArray(e))
                            for (let t = 0, n = e.length; t < n; t++) {
                                let n = e[t];
                                i.shapes.push(n.uuid)
                            } else i.shapes.push(e.uuid);
                        return void 0 !== t.extrudePath && (i.options.extrudePath = t.extrudePath.toJSON()), i
                    }(t, i, e)
                }
                static fromJSON(e, t) {
                    let i = [];
                    for (let n = 0, r = e.shapes.length; n < r; n++) {
                        let r = t[e.shapes[n]];
                        i.push(r)
                    }
                    let n = e.options.extrudePath;
                    return void 0 !== n && (e.options.extrudePath = new aO[n.type]().fromJSON(n)), new a3(i, e.options)
                }
            }
            let a2 = {
                generateTopUV: function(e, t, i, n, r) {
                    let a = t[3 * i],
                        s = t[3 * i + 1],
                        o = t[3 * n],
                        l = t[3 * n + 1],
                        h = t[3 * r],
                        u = t[3 * r + 1];
                    return [new Y(a, s), new Y(o, l), new Y(h, u)]
                },
                generateSideWallUV: function(e, t, i, n, r, a) {
                    let s = t[3 * i],
                        o = t[3 * i + 1],
                        l = t[3 * i + 2],
                        h = t[3 * n],
                        u = t[3 * n + 1],
                        c = t[3 * n + 2],
                        d = t[3 * r],
                        p = t[3 * r + 1],
                        f = t[3 * r + 2],
                        m = t[3 * a],
                        g = t[3 * a + 1],
                        v = t[3 * a + 2];
                    return Math.abs(o - u) < Math.abs(s - h) ? [new Y(s, 1 - l), new Y(h, 1 - c), new Y(d, 1 - f), new Y(m, 1 - v)] : [new Y(o, 1 - l), new Y(u, 1 - c), new Y(p, 1 - f), new Y(g, 1 - v)]
                }
            };
            class a4 extends ag {
                constructor(e = 1, t = 0) {
                    let i = (1 + Math.sqrt(5)) / 2,
                        n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1];
                    super(n, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t), this.type = "IcosahedronGeometry", this.parameters = {
                        radius: e,
                        detail: t
                    }
                }
                static fromJSON(e) {
                    return new a4(e.radius, e.detail)
                }
            }
            class a5 extends tI {
                constructor(e, t = 12, i = 0, n = 2 * Math.PI) {
                    super(), this.type = "LatheGeometry", this.parameters = {
                        points: e,
                        segments: t,
                        phiStart: i,
                        phiLength: n
                    }, t = Math.floor(t), n = G(n, 0, 2 * Math.PI);
                    let r = [],
                        a = [],
                        s = [],
                        o = 1 / t,
                        l = new er,
                        h = new Y;
                    for (let r = 0; r <= t; r++) {
                        let u = i + r * o * n,
                            c = Math.sin(u),
                            d = Math.cos(u);
                        for (let i = 0; i <= e.length - 1; i++) l.x = e[i].x * c, l.y = e[i].y, l.z = e[i].x * d, a.push(l.x, l.y, l.z), h.x = r / t, h.y = i / (e.length - 1), s.push(h.x, h.y)
                    }
                    for (let i = 0; i < t; i++)
                        for (let t = 0; t < e.length - 1; t++) {
                            let n = t + i * e.length,
                                a = n + e.length,
                                s = n + e.length + 1,
                                o = n + 1;
                            r.push(n, a, o), r.push(a, s, o)
                        }
                    if (this.setIndex(r), this.setAttribute("position", new tw(a, 3)), this.setAttribute("uv", new tw(s, 2)), this.computeVertexNormals(), n === 2 * Math.PI) {
                        let i = this.attributes.normal.array,
                            n = new er,
                            r = new er,
                            a = new er,
                            s = t * e.length * 3;
                        for (let t = 0, o = 0; t < e.length; t++, o += 3) n.x = i[o + 0], n.y = i[o + 1], n.z = i[o + 2], r.x = i[s + o + 0], r.y = i[s + o + 1], r.z = i[s + o + 2], a.addVectors(n, r).normalize(), i[o + 0] = i[s + o + 0] = a.x, i[o + 1] = i[s + o + 1] = a.y, i[o + 2] = i[s + o + 2] = a.z
                    }
                }
                static fromJSON(e) {
                    return new a5(e.points, e.segments, e.phiStart, e.phiLength)
                }
            }
            class a6 extends ag {
                constructor(e = 1, t = 0) {
                    super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t), this.type = "OctahedronGeometry", this.parameters = {
                        radius: e,
                        detail: t
                    }
                }
                static fromJSON(e) {
                    return new a6(e.radius, e.detail)
                }
            }
            class a7 extends tI {
                constructor(e = .5, t = 1, i = 8, n = 1, r = 0, a = 2 * Math.PI) {
                    super(), this.type = "RingGeometry", this.parameters = {
                        innerRadius: e,
                        outerRadius: t,
                        thetaSegments: i,
                        phiSegments: n,
                        thetaStart: r,
                        thetaLength: a
                    }, i = Math.max(3, i), n = Math.max(1, n);
                    let s = [],
                        o = [],
                        l = [],
                        h = [],
                        u = e,
                        c = (t - e) / n,
                        d = new er,
                        p = new Y;
                    for (let e = 0; e <= n; e++) {
                        for (let e = 0; e <= i; e++) {
                            let n = r + e / i * a;
                            d.x = u * Math.cos(n), d.y = u * Math.sin(n), o.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (d.x / t + 1) / 2, p.y = (d.y / t + 1) / 2, h.push(p.x, p.y)
                        }
                        u += c
                    }
                    for (let e = 0; e < n; e++) {
                        let t = e * (i + 1);
                        for (let e = 0; e < i; e++) {
                            let n = e + t,
                                r = n + i + 1,
                                a = n + i + 2,
                                o = n + 1;
                            s.push(n, r, o), s.push(r, a, o)
                        }
                    }
                    this.setIndex(s), this.setAttribute("position", new tw(o, 3)), this.setAttribute("normal", new tw(l, 3)), this.setAttribute("uv", new tw(h, 2))
                }
                static fromJSON(e) {
                    return new a7(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength)
                }
            }
            class a8 extends tI {
                constructor(e, t = 12) {
                    super(), this.type = "ShapeGeometry", this.parameters = {
                        shapes: e,
                        curveSegments: t
                    };
                    let i = [],
                        n = [],
                        r = [],
                        a = [],
                        s = 0,
                        o = 0;
                    if (!1 === Array.isArray(e)) l(e);
                    else
                        for (let t = 0; t < e.length; t++) l(e[t]), this.addGroup(s, o, t), s += o, o = 0;

                    function l(e) {
                        let s = n.length / 3,
                            l = e.extractPoints(t),
                            h = l.shape,
                            u = l.holes;
                        !1 === a$.isClockWise(h) && (h = h.reverse());
                        for (let e = 0, t = u.length; e < t; e++) {
                            let t = u[e];
                            !0 === a$.isClockWise(t) && (u[e] = t.reverse())
                        }
                        let c = a$.triangulateShape(h, u);
                        for (let e = 0, t = u.length; e < t; e++) {
                            let t = u[e];
                            h = h.concat(t)
                        }
                        for (let e = 0, t = h.length; e < t; e++) {
                            let t = h[e];
                            n.push(t.x, t.y, 0), r.push(0, 0, 1), a.push(t.x, t.y)
                        }
                        for (let e = 0, t = c.length; e < t; e++) {
                            let t = c[e],
                                n = t[0] + s,
                                r = t[1] + s,
                                a = t[2] + s;
                            i.push(n, r, a), o += 3
                        }
                    }
                    this.setIndex(i), this.setAttribute("position", new tw(n, 3)), this.setAttribute("normal", new tw(r, 3)), this.setAttribute("uv", new tw(a, 2))
                }
                toJSON() {
                    let e = super.toJSON(),
                        t = this.parameters.shapes;
                    return function(e, t) {
                        if (t.shapes = [], Array.isArray(e))
                            for (let i = 0, n = e.length; i < n; i++) {
                                let n = e[i];
                                t.shapes.push(n.uuid)
                            } else t.shapes.push(e.uuid);
                        return t
                    }(t, e)
                }
                static fromJSON(e, t) {
                    let i = [];
                    for (let n = 0, r = e.shapes.length; n < r; n++) {
                        let r = t[e.shapes[n]];
                        i.push(r)
                    }
                    return new a8(i, e.curveSegments)
                }
            }
            class a9 extends tI {
                constructor(e = 1, t = 32, i = 16, n = 0, r = 2 * Math.PI, a = 0, s = Math.PI) {
                    super(), this.type = "SphereGeometry", this.parameters = {
                        radius: e,
                        widthSegments: t,
                        heightSegments: i,
                        phiStart: n,
                        phiLength: r,
                        thetaStart: a,
                        thetaLength: s
                    }, t = Math.max(3, Math.floor(t)), i = Math.max(2, Math.floor(i));
                    let o = Math.min(a + s, Math.PI),
                        l = 0,
                        h = [],
                        u = new er,
                        c = new er,
                        d = [],
                        p = [],
                        f = [],
                        m = [];
                    for (let d = 0; d <= i; d++) {
                        let g = [],
                            v = d / i,
                            x = 0;
                        0 == d && 0 == a ? x = .5 / t : d == i && o == Math.PI && (x = -.5 / t);
                        for (let i = 0; i <= t; i++) {
                            let o = i / t;
                            u.x = -e * Math.cos(n + o * r) * Math.sin(a + v * s), u.y = e * Math.cos(a + v * s), u.z = e * Math.sin(n + o * r) * Math.sin(a + v * s), p.push(u.x, u.y, u.z), c.copy(u).normalize(), f.push(c.x, c.y, c.z), m.push(o + x, 1 - v), g.push(l++)
                        }
                        h.push(g)
                    }
                    for (let e = 0; e < i; e++)
                        for (let n = 0; n < t; n++) {
                            let t = h[e][n + 1],
                                r = h[e][n],
                                s = h[e + 1][n],
                                l = h[e + 1][n + 1];
                            (0 !== e || a > 0) && d.push(t, r, l), (e !== i - 1 || o < Math.PI) && d.push(r, s, l)
                        }
                    this.setIndex(d), this.setAttribute("position", new tw(p, 3)), this.setAttribute("normal", new tw(f, 3)), this.setAttribute("uv", new tw(m, 2))
                }
                static fromJSON(e) {
                    return new a9(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength)
                }
            }
            class se extends ag {
                constructor(e = 1, t = 0) {
                    super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t), this.type = "TetrahedronGeometry", this.parameters = {
                        radius: e,
                        detail: t
                    }
                }
                static fromJSON(e) {
                    return new se(e.radius, e.detail)
                }
            }
            class st extends tI {
                constructor(e = 1, t = .4, i = 8, n = 6, r = 2 * Math.PI) {
                    super(), this.type = "TorusGeometry", this.parameters = {
                        radius: e,
                        tube: t,
                        radialSegments: i,
                        tubularSegments: n,
                        arc: r
                    }, i = Math.floor(i), n = Math.floor(n);
                    let a = [],
                        s = [],
                        o = [],
                        l = [],
                        h = new er,
                        u = new er,
                        c = new er;
                    for (let a = 0; a <= i; a++)
                        for (let d = 0; d <= n; d++) {
                            let p = d / n * r,
                                f = a / i * Math.PI * 2;
                            u.x = (e + t * Math.cos(f)) * Math.cos(p), u.y = (e + t * Math.cos(f)) * Math.sin(p), u.z = t * Math.sin(f), s.push(u.x, u.y, u.z), h.x = e * Math.cos(p), h.y = e * Math.sin(p), c.subVectors(u, h).normalize(), o.push(c.x, c.y, c.z), l.push(d / n), l.push(a / i)
                        }
                    for (let e = 1; e <= i; e++)
                        for (let t = 1; t <= n; t++) {
                            let i = (n + 1) * e + t - 1,
                                r = (n + 1) * (e - 1) + t - 1,
                                s = (n + 1) * (e - 1) + t,
                                o = (n + 1) * e + t;
                            a.push(i, r, o), a.push(r, s, o)
                        }
                    this.setIndex(a), this.setAttribute("position", new tw(s, 3)), this.setAttribute("normal", new tw(o, 3)), this.setAttribute("uv", new tw(l, 2))
                }
                static fromJSON(e) {
                    return new st(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc)
                }
            }
            class si extends tI {
                constructor(e = 1, t = .4, i = 64, n = 8, r = 2, a = 3) {
                    super(), this.type = "TorusKnotGeometry", this.parameters = {
                        radius: e,
                        tube: t,
                        tubularSegments: i,
                        radialSegments: n,
                        p: r,
                        q: a
                    }, i = Math.floor(i), n = Math.floor(n);
                    let s = [],
                        o = [],
                        l = [],
                        h = [],
                        u = new er,
                        c = new er,
                        d = new er,
                        p = new er,
                        f = new er,
                        m = new er,
                        g = new er;
                    for (let s = 0; s <= i; ++s) {
                        let x = s / i * r * Math.PI * 2;
                        v(x, r, a, e, d), v(x + .01, r, a, e, p), m.subVectors(p, d), g.addVectors(p, d), f.crossVectors(m, g), g.crossVectors(f, m), f.normalize(), g.normalize();
                        for (let e = 0; e <= n; ++e) {
                            let r = e / n * Math.PI * 2,
                                a = -t * Math.cos(r),
                                p = t * Math.sin(r);
                            u.x = d.x + (a * g.x + p * f.x), u.y = d.y + (a * g.y + p * f.y), u.z = d.z + (a * g.z + p * f.z), o.push(u.x, u.y, u.z), c.subVectors(u, d).normalize(), l.push(c.x, c.y, c.z), h.push(s / i), h.push(e / n)
                        }
                    }
                    for (let e = 1; e <= i; e++)
                        for (let t = 1; t <= n; t++) {
                            let i = (n + 1) * (e - 1) + (t - 1),
                                r = (n + 1) * e + (t - 1),
                                a = (n + 1) * e + t,
                                o = (n + 1) * (e - 1) + t;
                            s.push(i, r, o), s.push(r, a, o)
                        }

                    function v(e, t, i, n, r) {
                        let a = i / t * e,
                            s = Math.cos(a);
                        r.x = n * (2 + s) * .5 * Math.cos(e), r.y = n * (2 + s) * Math.sin(e) * .5, r.z = n * Math.sin(a) * .5
                    }
                    this.setIndex(s), this.setAttribute("position", new tw(o, 3)), this.setAttribute("normal", new tw(l, 3)), this.setAttribute("uv", new tw(h, 2))
                }
                static fromJSON(e) {
                    return new si(e.radius, e.tube, e.tubularSegments, e.radialSegments, e.p, e.q)
                }
            }
            class sn extends tI {
                constructor(e, t = 64, i = 1, n = 8, r = !1) {
                    super(), this.type = "TubeGeometry", this.parameters = {
                        path: e,
                        tubularSegments: t,
                        radius: i,
                        radialSegments: n,
                        closed: r
                    };
                    let a = e.computeFrenetFrames(t, r);
                    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
                    let s = new er,
                        o = new er,
                        l = new Y,
                        h = new er,
                        u = [],
                        c = [],
                        d = [],
                        p = [];

                    function f(r) {
                        h = e.getPointAt(r / t, h);
                        let l = a.normals[r],
                            d = a.binormals[r];
                        for (let e = 0; e <= n; e++) {
                            let t = e / n * Math.PI * 2,
                                r = Math.sin(t),
                                a = -Math.cos(t);
                            o.x = a * l.x + r * d.x, o.y = a * l.y + r * d.y, o.z = a * l.z + r * d.z, o.normalize(), c.push(o.x, o.y, o.z), s.x = h.x + i * o.x, s.y = h.y + i * o.y, s.z = h.z + i * o.z, u.push(s.x, s.y, s.z)
                        }
                    }(function() {
                        for (let e = 0; e < t; e++) f(e);
                        f(!1 === r ? t : 0),
                            function() {
                                for (let e = 0; e <= t; e++)
                                    for (let i = 0; i <= n; i++) l.x = e / t, l.y = i / n, d.push(l.x, l.y)
                            }(),
                            function() {
                                for (let e = 1; e <= t; e++)
                                    for (let t = 1; t <= n; t++) {
                                        let i = (n + 1) * (e - 1) + (t - 1),
                                            r = (n + 1) * e + (t - 1),
                                            a = (n + 1) * e + t,
                                            s = (n + 1) * (e - 1) + t;
                                        p.push(i, r, s), p.push(r, a, s)
                                    }
                            }()
                    })(), this.setIndex(p), this.setAttribute("position", new tw(u, 3)), this.setAttribute("normal", new tw(c, 3)), this.setAttribute("uv", new tw(d, 2))
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.path = this.parameters.path.toJSON(), e
                }
                static fromJSON(e) {
                    return new sn(new aO[e.path.type]().fromJSON(e.path), e.tubularSegments, e.radius, e.radialSegments, e.closed)
                }
            }(class extends th {
                constructor(e) {
                    super(), this.type = "ShadowMaterial", this.color = new tg(0), this.transparent = !0, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this
                }
            }).prototype.isShadowMaterial = !0;
            class sr extends th {
                constructor(e) {
                    super(), this.defines = {
                        STANDARD: ""
                    }, this.type = "MeshStandardMaterial", this.color = new tg(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new tg(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = D, this.normalScale = new Y(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.defines = {
                        STANDARD: ""
                    }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
                }
            }
            sr.prototype.isMeshStandardMaterial = !0;
            class sa extends sr {
                constructor(e) {
                    super(), this.defines = {
                        STANDARD: "",
                        PHYSICAL: ""
                    }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Y(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
                        get: function() {
                            return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity)
                        },
                        set: function(e) {
                            this.reflectivity = G(2.5 * (e - 1) / (e + 1), 0, 1)
                        }
                    }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.thickness = .01, this.thicknessMap = null, this.attenuationDistance = 0, this.attenuationTint = new tg(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularTint = new tg(1, 1, 1), this.specularTintMap = null, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.defines = {
                        STANDARD: "",
                        PHYSICAL: ""
                    }, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.reflectivity = e.reflectivity, e.sheen ? this.sheen = (this.sheen || new tg).copy(e.sheen) : this.sheen = null, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationTint.copy(e.attenuationTint), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularTint.copy(e.specularTint), this.specularTintMap = e.specularTintMap, this
                }
            }
            sa.prototype.isMeshPhysicalMaterial = !0, (class extends th {
                constructor(e) {
                    super(), this.type = "MeshPhongMaterial", this.color = new tg(16777215), this.specular = new tg(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new tg(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = D, this.normalScale = new Y(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this
                }
            }).prototype.isMeshPhongMaterial = !0, (class extends th {
                constructor(e) {
                    super(), this.defines = {
                        TOON: ""
                    }, this.type = "MeshToonMaterial", this.color = new tg(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new tg(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = D, this.normalScale = new Y(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.gradientMap = e.gradientMap, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
                }
            }).prototype.isMeshToonMaterial = !0, (class extends th {
                constructor(e) {
                    super(), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = D, this.normalScale = new Y(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.flatShading = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this
                }
            }).prototype.isMeshNormalMaterial = !0, (class extends th {
                constructor(e) {
                    super(), this.type = "MeshLambertMaterial", this.color = new tg(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new tg(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
                }
            }).prototype.isMeshLambertMaterial = !0, (class extends th {
                constructor(e) {
                    super(), this.defines = {
                        MATCAP: ""
                    }, this.type = "MeshMatcapMaterial", this.color = new tg(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = D, this.normalScale = new Y(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.defines = {
                        MATCAP: ""
                    }, this.color.copy(e.color), this.matcap = e.matcap, this.map = e.map, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.alphaMap = e.alphaMap, this.flatShading = e.flatShading, this
                }
            }).prototype.isMeshMatcapMaterial = !0, (class extends r5 {
                constructor(e) {
                    super(), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this
                }
            }).prototype.isLineDashedMaterial = !0;
            let ss = {
                arraySlice: function(e, t, i) {
                    return ss.isTypedArray(e) ? new e.constructor(e.subarray(t, void 0 !== i ? i : e.length)) : e.slice(t, i)
                },
                convertArray: function(e, t, i) {
                    return e && (i || e.constructor !== t) ? "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e) : e
                },
                isTypedArray: function(e) {
                    return ArrayBuffer.isView(e) && !(e instanceof DataView)
                },
                getKeyframeOrder: function(e) {
                    let t = e.length,
                        i = Array(t);
                    for (let e = 0; e !== t; ++e) i[e] = e;
                    return i.sort(function(t, i) {
                        return e[t] - e[i]
                    }), i
                },
                sortedArray: function(e, t, i) {
                    let n = e.length,
                        r = new e.constructor(n);
                    for (let a = 0, s = 0; s !== n; ++a) {
                        let n = i[a] * t;
                        for (let i = 0; i !== t; ++i) r[s++] = e[n + i]
                    }
                    return r
                },
                flattenJSON: function(e, t, i, n) {
                    let r = 1,
                        a = e[0];
                    for (; void 0 !== a && void 0 === a[n];) a = e[r++];
                    if (void 0 === a) return;
                    let s = a[n];
                    if (void 0 !== s) {
                        if (Array.isArray(s))
                            do void 0 !== (s = a[n]) && (t.push(a.time), i.push.apply(i, s)), a = e[r++]; while (void 0 !== a);
                        else if (void 0 !== s.toArray)
                            do void 0 !== (s = a[n]) && (t.push(a.time), s.toArray(i, i.length)), a = e[r++]; while (void 0 !== a);
                        else
                            do void 0 !== (s = a[n]) && (t.push(a.time), i.push(s)), a = e[r++]; while (void 0 !== a)
                    }
                },
                subclip: function(e, t, i, n, r = 30) {
                    let a = e.clone();
                    a.name = t;
                    let s = [];
                    for (let e = 0; e < a.tracks.length; ++e) {
                        let t = a.tracks[e],
                            o = t.getValueSize(),
                            l = [],
                            h = [];
                        for (let e = 0; e < t.times.length; ++e) {
                            let a = t.times[e] * r;
                            if (!(a < i) && !(a >= n)) {
                                l.push(t.times[e]);
                                for (let i = 0; i < o; ++i) h.push(t.values[e * o + i])
                            }
                        }
                        0 !== l.length && (t.times = ss.convertArray(l, t.times.constructor), t.values = ss.convertArray(h, t.values.constructor), s.push(t))
                    }
                    a.tracks = s;
                    let o = 1 / 0;
                    for (let e = 0; e < a.tracks.length; ++e) o > a.tracks[e].times[0] && (o = a.tracks[e].times[0]);
                    for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * o);
                    return a.resetDuration(), a
                },
                makeClipAdditive: function(e, t = 0, i = e, n = 30) {
                    n <= 0 && (n = 30);
                    let r = i.tracks.length,
                        a = t / n;
                    for (let t = 0; t < r; ++t) {
                        let n;
                        let r = i.tracks[t],
                            s = r.ValueTypeName;
                        if ("bool" === s || "string" === s) continue;
                        let o = e.tracks.find(function(e) {
                            return e.name === r.name && e.ValueTypeName === s
                        });
                        if (void 0 === o) continue;
                        let l = 0,
                            h = r.getValueSize();
                        r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (l = h / 3);
                        let u = 0,
                            c = o.getValueSize();
                        o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (u = c / 3);
                        let d = r.times.length - 1;
                        if (a <= r.times[0]) {
                            let e = l,
                                t = h - l;
                            n = ss.arraySlice(r.values, e, t)
                        } else if (a >= r.times[d]) {
                            let e = d * h + l,
                                t = e + h - l;
                            n = ss.arraySlice(r.values, e, t)
                        } else {
                            let e = r.createInterpolant(),
                                t = l,
                                i = h - l;
                            e.evaluate(a), n = ss.arraySlice(e.resultBuffer, t, i)
                        }
                        if ("quaternion" === s) {
                            let e = new en().fromArray(n).normalize().conjugate();
                            e.toArray(n)
                        }
                        let p = o.times.length;
                        for (let e = 0; e < p; ++e) {
                            let t = e * c + u;
                            if ("quaternion" === s) en.multiplyQuaternionsFlat(o.values, t, n, 0, o.values, t);
                            else {
                                let e = c - 2 * u;
                                for (let i = 0; i < e; ++i) o.values[t + i] -= n[i]
                            }
                        }
                    }
                    return e.blendMode = 2501, e
                }
            };
            class so {
                constructor(e, t, i, n) {
                    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new t.constructor(i), this.sampleValues = t, this.valueSize = i, this.settings = null, this.DefaultSettings_ = {}
                }
                evaluate(e) {
                    let t = this.parameterPositions,
                        i = this._cachedIndex,
                        n = t[i],
                        r = t[i - 1];
                    e: {
                        t: {
                            let a;i: {
                                n: if (!(e < n)) {
                                    for (let a = i + 2;;) {
                                        if (void 0 === n) {
                                            if (e < r) break n;
                                            return i = t.length, this._cachedIndex = i, this.afterEnd_(i - 1, e, r)
                                        }
                                        if (i === a) break;
                                        if (r = n, e < (n = t[++i])) break t
                                    }
                                    a = t.length;
                                    break i
                                }if (!(e >= r)) {
                                    let s = t[1];
                                    e < s && (i = 2, r = s);
                                    for (let a = i - 2;;) {
                                        if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, e, n);
                                        if (i === a) break;
                                        if (n = r, e >= (r = t[--i - 1])) break t
                                    }
                                    a = i, i = 0;
                                    break i
                                }
                                break e
                            }
                            for (; i < a;) {
                                let n = i + a >>> 1;
                                e < t[n] ? a = n : i = n + 1
                            }
                            if (n = t[i], void 0 === (r = t[i - 1])) return this._cachedIndex = 0,
                            this.beforeStart_(0, e, n);
                            if (void 0 === n) return i = t.length,
                            this._cachedIndex = i,
                            this.afterEnd_(i - 1, r, e)
                        }
                        this._cachedIndex = i,
                        this.intervalChanged_(i, r, n)
                    }
                    return this.interpolate_(i, r, e, n)
                }
                getSettings_() {
                    return this.settings || this.DefaultSettings_
                }
                copySampleValue_(e) {
                    let t = this.resultBuffer,
                        i = this.sampleValues,
                        n = this.valueSize,
                        r = e * n;
                    for (let e = 0; e !== n; ++e) t[e] = i[r + e];
                    return t
                }
                interpolate_() {
                    throw Error("call to abstract method")
                }
                intervalChanged_() {}
            }
            so.prototype.beforeStart_ = so.prototype.copySampleValue_, so.prototype.afterEnd_ = so.prototype.copySampleValue_;
            class sl extends so {
                constructor(e, t, i, n) {
                    super(e, t, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
                        endingStart: 2400,
                        endingEnd: 2400
                    }
                }
                intervalChanged_(e, t, i) {
                    let n = this.parameterPositions,
                        r = e - 2,
                        a = e + 1,
                        s = n[r],
                        o = n[a];
                    if (void 0 === s) switch (this.getSettings_().endingStart) {
                        case 2401:
                            r = e, s = 2 * t - i;
                            break;
                        case 2402:
                            r = n.length - 2, s = t + n[r] - n[r + 1];
                            break;
                        default:
                            r = e, s = i
                    }
                    if (void 0 === o) switch (this.getSettings_().endingEnd) {
                        case 2401:
                            a = e, o = 2 * i - t;
                            break;
                        case 2402:
                            a = 1, o = i + n[1] - n[0];
                            break;
                        default:
                            a = e - 1, o = t
                    }
                    let l = (i - t) * .5,
                        h = this.valueSize;
                    this._weightPrev = l / (t - s), this._weightNext = l / (o - i), this._offsetPrev = r * h, this._offsetNext = a * h
                }
                interpolate_(e, t, i, n) {
                    let r = this.resultBuffer,
                        a = this.sampleValues,
                        s = this.valueSize,
                        o = e * s,
                        l = o - s,
                        h = this._offsetPrev,
                        u = this._offsetNext,
                        c = this._weightPrev,
                        d = this._weightNext,
                        p = (i - t) / (n - t),
                        f = p * p,
                        m = f * p,
                        g = -c * m + 2 * c * f - c * p,
                        v = (1 + c) * m + (-1.5 - 2 * c) * f + (-.5 + c) * p + 1,
                        x = (-1 - d) * m + (1.5 + d) * f + .5 * p,
                        y = d * m - d * f;
                    for (let e = 0; e !== s; ++e) r[e] = g * a[h + e] + v * a[l + e] + x * a[o + e] + y * a[u + e];
                    return r
                }
            }
            class sh extends so {
                constructor(e, t, i, n) {
                    super(e, t, i, n)
                }
                interpolate_(e, t, i, n) {
                    let r = this.resultBuffer,
                        a = this.sampleValues,
                        s = this.valueSize,
                        o = e * s,
                        l = o - s,
                        h = (i - t) / (n - t),
                        u = 1 - h;
                    for (let e = 0; e !== s; ++e) r[e] = a[l + e] * u + a[o + e] * h;
                    return r
                }
            }
            class su extends so {
                constructor(e, t, i, n) {
                    super(e, t, i, n)
                }
                interpolate_(e) {
                    return this.copySampleValue_(e - 1)
                }
            }
            class sc {
                constructor(e, t, i, n) {
                    if (void 0 === e) throw Error("THREE.KeyframeTrack: track name is undefined");
                    if (void 0 === t || 0 === t.length) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
                    this.name = e, this.times = ss.convertArray(t, this.TimeBufferType), this.values = ss.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation)
                }
                static toJSON(e) {
                    let t;
                    let i = e.constructor;
                    if (i.toJSON !== this.toJSON) t = i.toJSON(e);
                    else {
                        t = {
                            name: e.name,
                            times: ss.convertArray(e.times, Array),
                            values: ss.convertArray(e.values, Array)
                        };
                        let i = e.getInterpolation();
                        i !== e.DefaultInterpolation && (t.interpolation = i)
                    }
                    return t.type = e.ValueTypeName, t
                }
                InterpolantFactoryMethodDiscrete(e) {
                    return new su(this.times, this.values, this.getValueSize(), e)
                }
                InterpolantFactoryMethodLinear(e) {
                    return new sh(this.times, this.values, this.getValueSize(), e)
                }
                InterpolantFactoryMethodSmooth(e) {
                    return new sl(this.times, this.values, this.getValueSize(), e)
                }
                setInterpolation(e) {
                    let t;
                    switch (e) {
                        case T:
                            t = this.InterpolantFactoryMethodDiscrete;
                            break;
                        case E:
                            t = this.InterpolantFactoryMethodLinear;
                            break;
                        case 2302:
                            t = this.InterpolantFactoryMethodSmooth
                    }
                    if (void 0 === t) {
                        let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                        if (void 0 === this.createInterpolant) {
                            if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
                            else throw Error(t)
                        }
                        return console.warn("THREE.KeyframeTrack:", t), this
                    }
                    return this.createInterpolant = t, this
                }
                getInterpolation() {
                    switch (this.createInterpolant) {
                        case this.InterpolantFactoryMethodDiscrete:
                            return T;
                        case this.InterpolantFactoryMethodLinear:
                            return E;
                        case this.InterpolantFactoryMethodSmooth:
                            return 2302
                    }
                }
                getValueSize() {
                    return this.values.length / this.times.length
                }
                shift(e) {
                    if (0 !== e) {
                        let t = this.times;
                        for (let i = 0, n = t.length; i !== n; ++i) t[i] += e
                    }
                    return this
                }
                scale(e) {
                    if (1 !== e) {
                        let t = this.times;
                        for (let i = 0, n = t.length; i !== n; ++i) t[i] *= e
                    }
                    return this
                }
                trim(e, t) {
                    let i = this.times,
                        n = i.length,
                        r = 0,
                        a = n - 1;
                    for (; r !== n && i[r] < e;) ++r;
                    for (; - 1 !== a && i[a] > t;) --a;
                    if (++a, 0 !== r || a !== n) {
                        r >= a && (r = (a = Math.max(a, 1)) - 1);
                        let e = this.getValueSize();
                        this.times = ss.arraySlice(i, r, a), this.values = ss.arraySlice(this.values, r * e, a * e)
                    }
                    return this
                }
                validate() {
                    let e = !0,
                        t = this.getValueSize();
                    t - Math.floor(t) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1);
                    let i = this.times,
                        n = this.values,
                        r = i.length;
                    0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1);
                    let a = null;
                    for (let t = 0; t !== r; t++) {
                        let n = i[t];
                        if ("number" == typeof n && isNaN(n)) {
                            console.error("THREE.KeyframeTrack: Time is not a valid number.", this, t, n), e = !1;
                            break
                        }
                        if (null !== a && a > n) {
                            console.error("THREE.KeyframeTrack: Out of order keys.", this, t, n, a), e = !1;
                            break
                        }
                        a = n
                    }
                    if (void 0 !== n && ss.isTypedArray(n))
                        for (let t = 0, i = n.length; t !== i; ++t) {
                            let i = n[t];
                            if (isNaN(i)) {
                                console.error("THREE.KeyframeTrack: Value is not a valid number.", this, t, i), e = !1;
                                break
                            }
                        }
                    return e
                }
                optimize() {
                    let e = ss.arraySlice(this.times),
                        t = ss.arraySlice(this.values),
                        i = this.getValueSize(),
                        n = 2302 === this.getInterpolation(),
                        r = e.length - 1,
                        a = 1;
                    for (let s = 1; s < r; ++s) {
                        let r = !1,
                            o = e[s],
                            l = e[s + 1];
                        if (o !== l && (1 !== s || o !== e[0])) {
                            if (n) r = !0;
                            else {
                                let e = s * i,
                                    n = e - i,
                                    a = e + i;
                                for (let s = 0; s !== i; ++s) {
                                    let i = t[e + s];
                                    if (i !== t[n + s] || i !== t[a + s]) {
                                        r = !0;
                                        break
                                    }
                                }
                            }
                        }
                        if (r) {
                            if (s !== a) {
                                e[a] = e[s];
                                let n = s * i,
                                    r = a * i;
                                for (let e = 0; e !== i; ++e) t[r + e] = t[n + e]
                            }++a
                        }
                    }
                    if (r > 0) {
                        e[a] = e[r];
                        for (let e = r * i, n = a * i, s = 0; s !== i; ++s) t[n + s] = t[e + s];
                        ++a
                    }
                    return a !== e.length ? (this.times = ss.arraySlice(e, 0, a), this.values = ss.arraySlice(t, 0, a * i)) : (this.times = e, this.values = t), this
                }
                clone() {
                    let e = ss.arraySlice(this.times, 0),
                        t = ss.arraySlice(this.values, 0),
                        i = this.constructor,
                        n = new i(this.name, e, t);
                    return n.createInterpolant = this.createInterpolant, n
                }
            }
            sc.prototype.TimeBufferType = Float32Array, sc.prototype.ValueBufferType = Float32Array, sc.prototype.DefaultInterpolation = E;
            class sd extends sc {}
            sd.prototype.ValueTypeName = "bool", sd.prototype.ValueBufferType = Array, sd.prototype.DefaultInterpolation = T, sd.prototype.InterpolantFactoryMethodLinear = void 0, sd.prototype.InterpolantFactoryMethodSmooth = void 0;
            class sp extends sc {}
            sp.prototype.ValueTypeName = "color";
            class sf extends sc {}
            sf.prototype.ValueTypeName = "number";
            class sm extends so {
                constructor(e, t, i, n) {
                    super(e, t, i, n)
                }
                interpolate_(e, t, i, n) {
                    let r = this.resultBuffer,
                        a = this.sampleValues,
                        s = this.valueSize,
                        o = (i - t) / (n - t),
                        l = e * s;
                    for (let e = l + s; l !== e; l += 4) en.slerpFlat(r, 0, a, l - s, a, l, o);
                    return r
                }
            }
            class sg extends sc {
                InterpolantFactoryMethodLinear(e) {
                    return new sm(this.times, this.values, this.getValueSize(), e)
                }
            }
            sg.prototype.ValueTypeName = "quaternion", sg.prototype.DefaultInterpolation = E, sg.prototype.InterpolantFactoryMethodSmooth = void 0;
            class sv extends sc {}
            sv.prototype.ValueTypeName = "string", sv.prototype.ValueBufferType = Array, sv.prototype.DefaultInterpolation = T, sv.prototype.InterpolantFactoryMethodLinear = void 0, sv.prototype.InterpolantFactoryMethodSmooth = void 0;
            class sx extends sc {}
            sx.prototype.ValueTypeName = "vector";
            class sy {
                constructor(e, t = -1, i, n = 2500) {
                    this.name = e, this.tracks = i, this.duration = t, this.blendMode = n, this.uuid = H(), this.duration < 0 && this.resetDuration()
                }
                static parse(e) {
                    let t = [],
                        i = e.tracks,
                        n = 1 / (e.fps || 1);
                    for (let e = 0, r = i.length; e !== r; ++e) t.push((function(e) {
                        if (void 0 === e.type) throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
                        let t = function(e) {
                            switch (e.toLowerCase()) {
                                case "scalar":
                                case "double":
                                case "float":
                                case "number":
                                case "integer":
                                    return sf;
                                case "vector":
                                case "vector2":
                                case "vector3":
                                case "vector4":
                                    return sx;
                                case "color":
                                    return sp;
                                case "quaternion":
                                    return sg;
                                case "bool":
                                case "boolean":
                                    return sd;
                                case "string":
                                    return sv
                            }
                            throw Error("THREE.KeyframeTrack: Unsupported typeName: " + e)
                        }(e.type);
                        if (void 0 === e.times) {
                            let t = [],
                                i = [];
                            ss.flattenJSON(e.keys, t, i, "value"), e.times = t, e.values = i
                        }
                        return void 0 !== t.parse ? t.parse(e) : new t(e.name, e.times, e.values, e.interpolation)
                    })(i[e]).scale(n));
                    let r = new this(e.name, e.duration, t, e.blendMode);
                    return r.uuid = e.uuid, r
                }
                static toJSON(e) {
                    let t = [],
                        i = e.tracks,
                        n = {
                            name: e.name,
                            duration: e.duration,
                            tracks: t,
                            uuid: e.uuid,
                            blendMode: e.blendMode
                        };
                    for (let e = 0, n = i.length; e !== n; ++e) t.push(sc.toJSON(i[e]));
                    return n
                }
                static CreateFromMorphTargetSequence(e, t, i, n) {
                    let r = t.length,
                        a = [];
                    for (let e = 0; e < r; e++) {
                        let s = [],
                            o = [];
                        s.push((e + r - 1) % r, e, (e + 1) % r), o.push(0, 1, 0);
                        let l = ss.getKeyframeOrder(s);
                        s = ss.sortedArray(s, 1, l), o = ss.sortedArray(o, 1, l), n || 0 !== s[0] || (s.push(r), o.push(o[0])), a.push(new sf(".morphTargetInfluences[" + t[e].name + "]", s, o).scale(1 / i))
                    }
                    return new this(e, -1, a)
                }
                static findByName(e, t) {
                    let i = e;
                    Array.isArray(e) || (i = e.geometry && e.geometry.animations || e.animations);
                    for (let e = 0; e < i.length; e++)
                        if (i[e].name === t) return i[e];
                    return null
                }
                static CreateClipsFromMorphTargetSequences(e, t, i) {
                    let n = {},
                        r = /^([\w-]*?)([\d]+)$/;
                    for (let t = 0, i = e.length; t < i; t++) {
                        let i = e[t],
                            a = i.name.match(r);
                        if (a && a.length > 1) {
                            let e = a[1],
                                t = n[e];
                            t || (n[e] = t = []), t.push(i)
                        }
                    }
                    let a = [];
                    for (let e in n) a.push(this.CreateFromMorphTargetSequence(e, n[e], t, i));
                    return a
                }
                static parseAnimation(e, t) {
                    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
                    let i = function(e, t, i, n, r) {
                            if (0 !== i.length) {
                                let a = [],
                                    s = [];
                                ss.flattenJSON(i, a, s, n), 0 !== a.length && r.push(new e(t, a, s))
                            }
                        },
                        n = [],
                        r = e.name || "default",
                        a = e.fps || 30,
                        s = e.blendMode,
                        o = e.length || -1,
                        l = e.hierarchy || [];
                    for (let e = 0; e < l.length; e++) {
                        let r = l[e].keys;
                        if (r && 0 !== r.length) {
                            if (r[0].morphTargets) {
                                let e;
                                let t = {};
                                for (e = 0; e < r.length; e++)
                                    if (r[e].morphTargets)
                                        for (let i = 0; i < r[e].morphTargets.length; i++) t[r[e].morphTargets[i]] = -1;
                                for (let i in t) {
                                    let t = [],
                                        a = [];
                                    for (let n = 0; n !== r[e].morphTargets.length; ++n) {
                                        let n = r[e];
                                        t.push(n.time), a.push(n.morphTarget === i ? 1 : 0)
                                    }
                                    n.push(new sf(".morphTargetInfluence[" + i + "]", t, a))
                                }
                                o = t.length * (a || 1)
                            } else {
                                let a = ".bones[" + t[e].name + "]";
                                i(sx, a + ".position", r, "pos", n), i(sg, a + ".quaternion", r, "rot", n), i(sx, a + ".scale", r, "scl", n)
                            }
                        }
                    }
                    if (0 === n.length) return null;
                    let h = new this(r, o, n, s);
                    return h
                }
                resetDuration() {
                    let e = this.tracks,
                        t = 0;
                    for (let i = 0, n = e.length; i !== n; ++i) {
                        let e = this.tracks[i];
                        t = Math.max(t, e.times[e.times.length - 1])
                    }
                    return this.duration = t, this
                }
                trim() {
                    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
                    return this
                }
                validate() {
                    let e = !0;
                    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
                    return e
                }
                optimize() {
                    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
                    return this
                }
                clone() {
                    let e = [];
                    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
                    return new this.constructor(this.name, this.duration, e, this.blendMode)
                }
                toJSON() {
                    return this.constructor.toJSON(this)
                }
            }
            let s_ = {
                    enabled: !1,
                    files: {},
                    add: function(e, t) {
                        !1 !== this.enabled && (this.files[e] = t)
                    },
                    get: function(e) {
                        if (!1 !== this.enabled) return this.files[e]
                    },
                    remove: function(e) {
                        delete this.files[e]
                    },
                    clear: function() {
                        this.files = {}
                    }
                },
                sM = new class {
                    constructor(e, t, i) {
                        let n;
                        let r = this,
                            a = !1,
                            s = 0,
                            o = 0,
                            l = [];
                        this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = i, this.itemStart = function(e) {
                            o++, !1 === a && void 0 !== r.onStart && r.onStart(e, s, o), a = !0
                        }, this.itemEnd = function(e) {
                            s++, void 0 !== r.onProgress && r.onProgress(e, s, o), s === o && (a = !1, void 0 !== r.onLoad && r.onLoad())
                        }, this.itemError = function(e) {
                            void 0 !== r.onError && r.onError(e)
                        }, this.resolveURL = function(e) {
                            return n ? n(e) : e
                        }, this.setURLModifier = function(e) {
                            return n = e, this
                        }, this.addHandler = function(e, t) {
                            return l.push(e, t), this
                        }, this.removeHandler = function(e) {
                            let t = l.indexOf(e);
                            return -1 !== t && l.splice(t, 2), this
                        }, this.getHandler = function(e) {
                            for (let t = 0, i = l.length; t < i; t += 2) {
                                let i = l[t],
                                    n = l[t + 1];
                                if (i.global && (i.lastIndex = 0), i.test(e)) return n
                            }
                            return null
                        }
                    }
                };
            class sb {
                constructor(e) {
                    this.manager = void 0 !== e ? e : sM, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
                }
                load() {}
                loadAsync(e, t) {
                    let i = this;
                    return new Promise(function(n, r) {
                        i.load(e, n, t, r)
                    })
                }
                parse() {}
                setCrossOrigin(e) {
                    return this.crossOrigin = e, this
                }
                setWithCredentials(e) {
                    return this.withCredentials = e, this
                }
                setPath(e) {
                    return this.path = e, this
                }
                setResourcePath(e) {
                    return this.resourcePath = e, this
                }
                setRequestHeader(e) {
                    return this.requestHeader = e, this
                }
            }
            let sw = {};
            class sS extends sb {
                constructor(e) {
                    super(e)
                }
                load(e, t, i, n) {
                    let r;
                    void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
                    let a = this,
                        s = s_.get(e);
                    if (void 0 !== s) return a.manager.itemStart(e), setTimeout(function() {
                        t && t(s), a.manager.itemEnd(e)
                    }, 0), s;
                    if (void 0 !== sw[e]) {
                        sw[e].push({
                            onLoad: t,
                            onProgress: i,
                            onError: n
                        });
                        return
                    }
                    let o = e.match(/^data:(.*?)(;base64)?,(.*)$/);
                    if (o) {
                        let i = o[1],
                            r = !!o[2],
                            s = o[3];
                        s = decodeURIComponent(s), r && (s = atob(s));
                        try {
                            let n;
                            let r = (this.responseType || "").toLowerCase();
                            switch (r) {
                                case "arraybuffer":
                                case "blob":
                                    let o = new Uint8Array(s.length);
                                    for (let e = 0; e < s.length; e++) o[e] = s.charCodeAt(e);
                                    n = "blob" === r ? new Blob([o.buffer], {
                                        type: i
                                    }) : o.buffer;
                                    break;
                                case "document":
                                    let l = new DOMParser;
                                    n = l.parseFromString(s, i);
                                    break;
                                case "json":
                                    n = JSON.parse(s);
                                    break;
                                default:
                                    n = s
                            }
                            setTimeout(function() {
                                t && t(n), a.manager.itemEnd(e)
                            }, 0)
                        } catch (t) {
                            setTimeout(function() {
                                n && n(t), a.manager.itemError(e), a.manager.itemEnd(e)
                            }, 0)
                        }
                    } else {
                        for (let s in sw[e] = [], sw[e].push({
                                onLoad: t,
                                onProgress: i,
                                onError: n
                            }), (r = new XMLHttpRequest).open("GET", e, !0), r.addEventListener("load", function(t) {
                                let i = this.response,
                                    n = sw[e];
                                if (delete sw[e], 200 === this.status || 0 === this.status) {
                                    0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), s_.add(e, i);
                                    for (let e = 0, t = n.length; e < t; e++) {
                                        let t = n[e];
                                        t.onLoad && t.onLoad(i)
                                    }
                                    a.manager.itemEnd(e)
                                } else {
                                    for (let e = 0, i = n.length; e < i; e++) {
                                        let i = n[e];
                                        i.onError && i.onError(t)
                                    }
                                    a.manager.itemError(e), a.manager.itemEnd(e)
                                }
                            }, !1), r.addEventListener("progress", function(t) {
                                let i = sw[e];
                                for (let e = 0, n = i.length; e < n; e++) {
                                    let n = i[e];
                                    n.onProgress && n.onProgress(t)
                                }
                            }, !1), r.addEventListener("error", function(t) {
                                let i = sw[e];
                                delete sw[e];
                                for (let e = 0, n = i.length; e < n; e++) {
                                    let n = i[e];
                                    n.onError && n.onError(t)
                                }
                                a.manager.itemError(e), a.manager.itemEnd(e)
                            }, !1), r.addEventListener("abort", function(t) {
                                let i = sw[e];
                                delete sw[e];
                                for (let e = 0, n = i.length; e < n; e++) {
                                    let n = i[e];
                                    n.onError && n.onError(t)
                                }
                                a.manager.itemError(e), a.manager.itemEnd(e)
                            }, !1), void 0 !== this.responseType && (r.responseType = this.responseType), void 0 !== this.withCredentials && (r.withCredentials = this.withCredentials), r.overrideMimeType && r.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) r.setRequestHeader(s, this.requestHeader[s]);
                        r.send(null)
                    }
                    return a.manager.itemStart(e), r
                }
                setResponseType(e) {
                    return this.responseType = e, this
                }
                setMimeType(e) {
                    return this.mimeType = e, this
                }
            }
            class sT extends sb {
                constructor(e) {
                    super(e)
                }
                load(e, t, i, n) {
                    void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
                    let r = this,
                        a = s_.get(e);
                    if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() {
                        t && t(a), r.manager.itemEnd(e)
                    }, 0), a;
                    let s = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

                    function o() {
                        s.removeEventListener("load", o, !1), s.removeEventListener("error", l, !1), s_.add(e, this), t && t(this), r.manager.itemEnd(e)
                    }

                    function l(t) {
                        s.removeEventListener("load", o, !1), s.removeEventListener("error", l, !1), n && n(t), r.manager.itemError(e), r.manager.itemEnd(e)
                    }
                    return s.addEventListener("load", o, !1), s.addEventListener("error", l, !1), "data:" !== e.substr(0, 5) && void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), r.manager.itemStart(e), s.src = e, s
                }
            }
            class sE extends sb {
                constructor(e) {
                    super(e)
                }
                load(e, t, i, n) {
                    let r = new t6,
                        a = new sT(this.manager);
                    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
                    let s = 0;
                    for (let i = 0; i < e.length; ++i) ! function(i) {
                        a.load(e[i], function(e) {
                            r.images[i] = e, 6 == ++s && (r.needsUpdate = !0, t && t(r))
                        }, void 0, n)
                    }(i);
                    return r
                }
            }
            class sL extends sb {
                constructor(e) {
                    super(e)
                }
                load(e, t, i, n) {
                    let r = this,
                        a = new rQ,
                        s = new sS(this.manager);
                    return s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setPath(this.path), s.setWithCredentials(r.withCredentials), s.load(e, function(e) {
                        let i = r.parse(e);
                        i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : c, a.wrapT = void 0 !== i.wrapT ? i.wrapT : c, a.magFilter = void 0 !== i.magFilter ? i.magFilter : g, a.minFilter = void 0 !== i.minFilter ? i.minFilter : g, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.encoding && (a.encoding = i.encoding), void 0 !== i.flipY && (a.flipY = i.flipY), void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps, a.minFilter = x), 1 === i.mipmapCount && (a.minFilter = g), void 0 !== i.generateMipmaps && (a.generateMipmaps = i.generateMipmaps), a.needsUpdate = !0, t && t(a, i))
                    }, i, n), a
                }
            }
            class sA extends sb {
                constructor(e) {
                    super(e)
                }
                load(e, t, i, n) {
                    let r = new K,
                        a = new sT(this.manager);
                    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(i) {
                        r.image = i;
                        let n = e.search(/\.jpe?g($|\?)/i) > 0 || 0 === e.search(/^data\:image\/jpeg/);
                        r.format = n ? b : w, r.needsUpdate = !0, void 0 !== t && t(r)
                    }, i, n), r
                }
            }
            class sR extends ax {
                constructor() {
                    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1
                }
                add(e) {
                    this.curves.push(e)
                }
                closePath() {
                    let e = this.curves[0].getPoint(0),
                        t = this.curves[this.curves.length - 1].getPoint(1);
                    e.equals(t) || this.curves.push(new aI(t, e))
                }
                getPoint(e) {
                    let t = e * this.getLength(),
                        i = this.getCurveLengths(),
                        n = 0;
                    for (; n < i.length;) {
                        if (i[n] >= t) {
                            let e = i[n] - t,
                                r = this.curves[n],
                                a = r.getLength(),
                                s = 0 === a ? 0 : 1 - e / a;
                            return r.getPointAt(s)
                        }
                        n++
                    }
                    return null
                }
                getLength() {
                    let e = this.getCurveLengths();
                    return e[e.length - 1]
                }
                updateArcLengths() {
                    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
                }
                getCurveLengths() {
                    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
                    let e = [],
                        t = 0;
                    for (let i = 0, n = this.curves.length; i < n; i++) e.push(t += this.curves[i].getLength());
                    return this.cacheLengths = e, e
                }
                getSpacedPoints(e = 40) {
                    let t = [];
                    for (let i = 0; i <= e; i++) t.push(this.getPoint(i / e));
                    return this.autoClose && t.push(t[0]), t
                }
                getPoints(e = 12) {
                    let t;
                    let i = [];
                    for (let n = 0, r = this.curves; n < r.length; n++) {
                        let a = r[n],
                            s = a && a.isEllipseCurve ? 2 * e : a && (a.isLineCurve || a.isLineCurve3) ? 1 : a && a.isSplineCurve ? e * a.points.length : e,
                            o = a.getPoints(s);
                        for (let e = 0; e < o.length; e++) {
                            let n = o[e];
                            t && t.equals(n) || (i.push(n), t = n)
                        }
                    }
                    return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
                }
                copy(e) {
                    super.copy(e), this.curves = [];
                    for (let t = 0, i = e.curves.length; t < i; t++) {
                        let i = e.curves[t];
                        this.curves.push(i.clone())
                    }
                    return this.autoClose = e.autoClose, this
                }
                toJSON() {
                    let e = super.toJSON();
                    e.autoClose = this.autoClose, e.curves = [];
                    for (let t = 0, i = this.curves.length; t < i; t++) {
                        let i = this.curves[t];
                        e.curves.push(i.toJSON())
                    }
                    return e
                }
                fromJSON(e) {
                    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
                    for (let t = 0, i = e.curves.length; t < i; t++) {
                        let i = e.curves[t];
                        this.curves.push(new aO[i.type]().fromJSON(i))
                    }
                    return this
                }
            }
            class sC extends sR {
                constructor(e) {
                    super(), this.type = "Path", this.currentPoint = new Y, e && this.setFromPoints(e)
                }
                setFromPoints(e) {
                    this.moveTo(e[0].x, e[0].y);
                    for (let t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
                    return this
                }
                moveTo(e, t) {
                    return this.currentPoint.set(e, t), this
                }
                lineTo(e, t) {
                    let i = new aI(this.currentPoint.clone(), new Y(e, t));
                    return this.curves.push(i), this.currentPoint.set(e, t), this
                }
                quadraticCurveTo(e, t, i, n) {
                    let r = new aD(this.currentPoint.clone(), new Y(e, t), new Y(i, n));
                    return this.curves.push(r), this.currentPoint.set(i, n), this
                }
                bezierCurveTo(e, t, i, n, r, a) {
                    let s = new aC(this.currentPoint.clone(), new Y(e, t), new Y(i, n), new Y(r, a));
                    return this.curves.push(s), this.currentPoint.set(r, a), this
                }
                splineThru(e) {
                    let t = [this.currentPoint.clone()].concat(e),
                        i = new az(t);
                    return this.curves.push(i), this.currentPoint.copy(e[e.length - 1]), this
                }
                arc(e, t, i, n, r, a) {
                    let s = this.currentPoint.x,
                        o = this.currentPoint.y;
                    return this.absarc(e + s, t + o, i, n, r, a), this
                }
                absarc(e, t, i, n, r, a) {
                    return this.absellipse(e, t, i, i, n, r, a), this
                }
                ellipse(e, t, i, n, r, a, s, o) {
                    let l = this.currentPoint.x,
                        h = this.currentPoint.y;
                    return this.absellipse(e + l, t + h, i, n, r, a, s, o), this
                }
                absellipse(e, t, i, n, r, a, s, o) {
                    let l = new ay(e, t, i, n, r, a, s, o);
                    if (this.curves.length > 0) {
                        let e = l.getPoint(0);
                        e.equals(this.currentPoint) || this.lineTo(e.x, e.y)
                    }
                    this.curves.push(l);
                    let h = l.getPoint(1);
                    return this.currentPoint.copy(h), this
                }
                copy(e) {
                    return super.copy(e), this.currentPoint.copy(e.currentPoint), this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.currentPoint = this.currentPoint.toArray(), e
                }
                fromJSON(e) {
                    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this
                }
            }
            class sP extends sC {
                constructor(e) {
                    super(e), this.uuid = H(), this.type = "Shape", this.holes = []
                }
                getPointsHoles(e) {
                    let t = [];
                    for (let i = 0, n = this.holes.length; i < n; i++) t[i] = this.holes[i].getPoints(e);
                    return t
                }
                extractPoints(e) {
                    return {
                        shape: this.getPoints(e),
                        holes: this.getPointsHoles(e)
                    }
                }
                copy(e) {
                    super.copy(e), this.holes = [];
                    for (let t = 0, i = e.holes.length; t < i; t++) {
                        let i = e.holes[t];
                        this.holes.push(i.clone())
                    }
                    return this
                }
                toJSON() {
                    let e = super.toJSON();
                    e.uuid = this.uuid, e.holes = [];
                    for (let t = 0, i = this.holes.length; t < i; t++) {
                        let i = this.holes[t];
                        e.holes.push(i.toJSON())
                    }
                    return e
                }
                fromJSON(e) {
                    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
                    for (let t = 0, i = e.holes.length; t < i; t++) {
                        let i = e.holes[t];
                        this.holes.push(new sC().fromJSON(i))
                    }
                    return this
                }
            }
            class sI extends e6 {
                constructor(e, t = 1) {
                    super(), this.type = "Light", this.color = new tg(e), this.intensity = t
                }
                dispose() {}
                copy(e) {
                    return super.copy(e), this.color.copy(e.color), this.intensity = e.intensity, this
                }
                toJSON(e) {
                    let t = super.toJSON(e);
                    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
                }
            }
            sI.prototype.isLight = !0, (class extends sI {
                constructor(e, t, i) {
                    super(e, i), this.type = "HemisphereLight", this.position.copy(e6.DefaultUp), this.updateMatrix(), this.groundColor = new tg(t)
                }
                copy(e) {
                    return sI.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this
                }
            }).prototype.isHemisphereLight = !0;
            let sD = new ez,
                sN = new er,
                sz = new er;
            class sO {
                constructor(e) {
                    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new Y(512, 512), this.map = null, this.mapPass = null, this.matrix = new ez, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ia, this._frameExtents = new Y(1, 1), this._viewportCount = 1, this._viewports = [new ee(0, 0, 1, 1)]
                }
                getViewportCount() {
                    return this._viewportCount
                }
                getFrustum() {
                    return this._frustum
                }
                updateMatrices(e) {
                    let t = this.camera,
                        i = this.matrix;
                    sN.setFromMatrixPosition(e.matrixWorld), t.position.copy(sN), sz.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(sz), t.updateMatrixWorld(), sD.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(sD), i.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), i.multiply(t.projectionMatrix), i.multiply(t.matrixWorldInverse)
                }
                getViewport(e) {
                    return this._viewports[e]
                }
                getFrameExtents() {
                    return this._frameExtents
                }
                dispose() {
                    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose()
                }
                copy(e) {
                    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                toJSON() {
                    let e = {};
                    return 0 !== this.bias && (e.bias = this.bias), 0 !== this.normalBias && (e.normalBias = this.normalBias), 1 !== this.radius && (e.radius = this.radius), (512 !== this.mapSize.x || 512 !== this.mapSize.y) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e
                }
            }
            class sF extends sO {
                constructor() {
                    super(new t4(50, 1, .5, 500)), this.focus = 1
                }
                updateMatrices(e) {
                    let t = this.camera,
                        i = 2 * U * e.angle * this.focus,
                        n = this.mapSize.width / this.mapSize.height,
                        r = e.distance || t.far;
                    (i !== t.fov || n !== t.aspect || r !== t.far) && (t.fov = i, t.aspect = n, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e)
                }
                copy(e) {
                    return super.copy(e), this.focus = e.focus, this
                }
            }
            sF.prototype.isSpotLightShadow = !0;
            class sB extends sI {
                constructor(e, t, i = 0, n = Math.PI / 3, r = 0, a = 1) {
                    super(e, t), this.type = "SpotLight", this.position.copy(e6.DefaultUp), this.updateMatrix(), this.target = new e6, this.distance = i, this.angle = n, this.penumbra = r, this.decay = a, this.shadow = new sF
                }
                get power() {
                    return this.intensity * Math.PI
                }
                set power(e) {
                    this.intensity = e / Math.PI
                }
                dispose() {
                    this.shadow.dispose()
                }
                copy(e) {
                    return super.copy(e), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
                }
            }
            sB.prototype.isSpotLight = !0;
            let sU = new ez,
                sH = new er,
                sG = new er;
            class sV extends sO {
                constructor() {
                    super(new t4(90, 1, .5, 500)), this._frameExtents = new Y(4, 2), this._viewportCount = 6, this._viewports = [new ee(2, 1, 1, 1), new ee(0, 1, 1, 1), new ee(3, 1, 1, 1), new ee(1, 1, 1, 1), new ee(3, 0, 1, 1), new ee(1, 0, 1, 1)], this._cubeDirections = [new er(1, 0, 0), new er(-1, 0, 0), new er(0, 0, 1), new er(0, 0, -1), new er(0, 1, 0), new er(0, -1, 0)], this._cubeUps = [new er(0, 1, 0), new er(0, 1, 0), new er(0, 1, 0), new er(0, 1, 0), new er(0, 0, 1), new er(0, 0, -1)]
                }
                updateMatrices(e, t = 0) {
                    let i = this.camera,
                        n = this.matrix,
                        r = e.distance || i.far;
                    r !== i.far && (i.far = r, i.updateProjectionMatrix()), sH.setFromMatrixPosition(e.matrixWorld), i.position.copy(sH), sG.copy(i.position), sG.add(this._cubeDirections[t]), i.up.copy(this._cubeUps[t]), i.lookAt(sG), i.updateMatrixWorld(), n.makeTranslation(-sH.x, -sH.y, -sH.z), sU.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse), this._frustum.setFromProjectionMatrix(sU)
                }
            }
            sV.prototype.isPointLightShadow = !0;
            class sk extends sI {
                constructor(e, t, i = 0, n = 1) {
                    super(e, t), this.type = "PointLight", this.distance = i, this.decay = n, this.shadow = new sV
                }
                get power() {
                    return 4 * this.intensity * Math.PI
                }
                set power(e) {
                    this.intensity = e / (4 * Math.PI)
                }
                dispose() {
                    this.shadow.dispose()
                }
                copy(e) {
                    return super.copy(e), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this
                }
            }
            sk.prototype.isPointLight = !0;
            class sW extends sO {
                constructor() {
                    super(new iy(-5, 5, 5, -5, .5, 500))
                }
            }
            sW.prototype.isDirectionalLightShadow = !0;
            class sj extends sI {
                constructor(e, t) {
                    super(e, t), this.type = "DirectionalLight", this.position.copy(e6.DefaultUp), this.updateMatrix(), this.target = new e6, this.shadow = new sW
                }
                dispose() {
                    this.shadow.dispose()
                }
                copy(e) {
                    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this
                }
            }
            sj.prototype.isDirectionalLight = !0, (class extends sI {
                constructor(e, t) {
                    super(e, t), this.type = "AmbientLight"
                }
            }).prototype.isAmbientLight = !0, (class extends sI {
                constructor(e, t, i = 10, n = 10) {
                    super(e, t), this.type = "RectAreaLight", this.width = i, this.height = n
                }
                copy(e) {
                    return super.copy(e), this.width = e.width, this.height = e.height, this
                }
                toJSON(e) {
                    let t = super.toJSON(e);
                    return t.object.width = this.width, t.object.height = this.height, t
                }
            }).prototype.isRectAreaLight = !0;
            class sq {
                constructor() {
                    this.coefficients = [];
                    for (let e = 0; e < 9; e++) this.coefficients.push(new er)
                }
                set(e) {
                    for (let t = 0; t < 9; t++) this.coefficients[t].copy(e[t]);
                    return this
                }
                zero() {
                    for (let e = 0; e < 9; e++) this.coefficients[e].set(0, 0, 0);
                    return this
                }
                getAt(e, t) {
                    let i = e.x,
                        n = e.y,
                        r = e.z,
                        a = this.coefficients;
                    return t.copy(a[0]).multiplyScalar(.282095), t.addScaledVector(a[1], .488603 * n), t.addScaledVector(a[2], .488603 * r), t.addScaledVector(a[3], .488603 * i), t.addScaledVector(a[4], 1.092548 * (i * n)), t.addScaledVector(a[5], 1.092548 * (n * r)), t.addScaledVector(a[6], .315392 * (3 * r * r - 1)), t.addScaledVector(a[7], 1.092548 * (i * r)), t.addScaledVector(a[8], .546274 * (i * i - n * n)), t
                }
                getIrradianceAt(e, t) {
                    let i = e.x,
                        n = e.y,
                        r = e.z,
                        a = this.coefficients;
                    return t.copy(a[0]).multiplyScalar(.886227), t.addScaledVector(a[1], 1.023328 * n), t.addScaledVector(a[2], 1.023328 * r), t.addScaledVector(a[3], 1.023328 * i), t.addScaledVector(a[4], .858086 * i * n), t.addScaledVector(a[5], .858086 * n * r), t.addScaledVector(a[6], .743125 * r * r - .247708), t.addScaledVector(a[7], .858086 * i * r), t.addScaledVector(a[8], .429043 * (i * i - n * n)), t
                }
                add(e) {
                    for (let t = 0; t < 9; t++) this.coefficients[t].add(e.coefficients[t]);
                    return this
                }
                addScaledSH(e, t) {
                    for (let i = 0; i < 9; i++) this.coefficients[i].addScaledVector(e.coefficients[i], t);
                    return this
                }
                scale(e) {
                    for (let t = 0; t < 9; t++) this.coefficients[t].multiplyScalar(e);
                    return this
                }
                lerp(e, t) {
                    for (let i = 0; i < 9; i++) this.coefficients[i].lerp(e.coefficients[i], t);
                    return this
                }
                equals(e) {
                    for (let t = 0; t < 9; t++)
                        if (!this.coefficients[t].equals(e.coefficients[t])) return !1;
                    return !0
                }
                copy(e) {
                    return this.set(e.coefficients)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                fromArray(e, t = 0) {
                    let i = this.coefficients;
                    for (let n = 0; n < 9; n++) i[n].fromArray(e, t + 3 * n);
                    return this
                }
                toArray(e = [], t = 0) {
                    let i = this.coefficients;
                    for (let n = 0; n < 9; n++) i[n].toArray(e, t + 3 * n);
                    return e
                }
                static getBasisAt(e, t) {
                    let i = e.x,
                        n = e.y,
                        r = e.z;
                    t[0] = .282095, t[1] = .488603 * n, t[2] = .488603 * r, t[3] = .488603 * i, t[4] = 1.092548 * i * n, t[5] = 1.092548 * n * r, t[6] = .315392 * (3 * r * r - 1), t[7] = 1.092548 * i * r, t[8] = .546274 * (i * i - n * n)
                }
            }
            sq.prototype.isSphericalHarmonics3 = !0;
            class sX extends sI {
                constructor(e = new sq, t = 1) {
                    super(void 0, t), this.sh = e
                }
                copy(e) {
                    return super.copy(e), this.sh.copy(e.sh), this
                }
                fromJSON(e) {
                    return this.intensity = e.intensity, this.sh.fromArray(e.sh), this
                }
                toJSON(e) {
                    let t = super.toJSON(e);
                    return t.object.sh = this.sh.toArray(), t
                }
            }
            sX.prototype.isLightProbe = !0;
            class sY {
                static decodeText(e) {
                    if ("undefined" != typeof TextDecoder) return new TextDecoder().decode(e);
                    let t = "";
                    for (let i = 0, n = e.length; i < n; i++) t += String.fromCharCode(e[i]);
                    try {
                        return decodeURIComponent(escape(t))
                    } catch (e) {
                        return t
                    }
                }
                static extractUrlBase(e) {
                    let t = e.lastIndexOf("/");
                    return -1 === t ? "./" : e.substr(0, t + 1)
                }
            }(class extends tI {
                constructor() {
                    super(), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
                }
                copy(e) {
                    return super.copy(e), this.instanceCount = e.instanceCount, this
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                toJSON() {
                    let e = super.toJSON(this);
                    return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e
                }
            }).prototype.isInstancedBufferGeometry = !0, (class extends t_ {
                constructor(e, t, i, n = 1) {
                    "number" == typeof i && (n = i, i = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), super(e, t, i), this.meshPerAttribute = n
                }
                copy(e) {
                    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
                }
                toJSON() {
                    let e = super.toJSON();
                    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e
                }
            }).prototype.isInstancedBufferAttribute = !0;
            class sJ extends sb {
                constructor(e) {
                    super(e), "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = {
                        premultiplyAlpha: "none"
                    }
                }
                setOptions(e) {
                    return this.options = e, this
                }
                load(e, t, i, n) {
                    void 0 === e && (e = ""), void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
                    let r = this,
                        a = s_.get(e);
                    if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() {
                        t && t(a), r.manager.itemEnd(e)
                    }, 0), a;
                    let s = {};
                    s.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", s.headers = this.requestHeader, fetch(e, s).then(function(e) {
                        return e.blob()
                    }).then(function(e) {
                        return createImageBitmap(e, Object.assign(r.options, {
                            colorSpaceConversion: "none"
                        }))
                    }).then(function(i) {
                        s_.add(e, i), t && t(i), r.manager.itemEnd(e)
                    }).catch(function(t) {
                        n && n(t), r.manager.itemError(e), r.manager.itemEnd(e)
                    }), r.manager.itemStart(e)
                }
            }
            sJ.prototype.isImageBitmapLoader = !0;
            class sZ {
                constructor() {
                    this.type = "ShapePath", this.color = new tg, this.subPaths = [], this.currentPath = null
                }
                moveTo(e, t) {
                    return this.currentPath = new sC, this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this
                }
                lineTo(e, t) {
                    return this.currentPath.lineTo(e, t), this
                }
                quadraticCurveTo(e, t, i, n) {
                    return this.currentPath.quadraticCurveTo(e, t, i, n), this
                }
                bezierCurveTo(e, t, i, n, r, a) {
                    return this.currentPath.bezierCurveTo(e, t, i, n, r, a), this
                }
                splineThru(e) {
                    return this.currentPath.splineThru(e), this
                }
                toShapes(e, t) {
                    let i, n, r, a, s;

                    function o(e) {
                        let t = [];
                        for (let i = 0, n = e.length; i < n; i++) {
                            let n = e[i],
                                r = new sP;
                            r.curves = n.curves, t.push(r)
                        }
                        return t
                    }
                    let l = a$.isClockWise,
                        h = this.subPaths;
                    if (0 === h.length) return [];
                    if (!0 === t) return o(h);
                    let u = [];
                    if (1 === h.length) return n = h[0], (r = new sP).curves = n.curves, u.push(r), u;
                    let c = !l(h[0].getPoints());
                    c = e ? !c : c;
                    let d = [],
                        p = [],
                        f = [],
                        m = 0;
                    p[0] = void 0, f[m] = [];
                    for (let t = 0, r = h.length; t < r; t++) i = l(a = (n = h[t]).getPoints()), (i = e ? !i : i) ? (!c && p[m] && m++, p[m] = {
                        s: new sP,
                        p: a
                    }, p[m].s.curves = n.curves, c && m++, f[m] = []) : f[m].push({
                        h: n,
                        p: a[0]
                    });
                    if (!p[0]) return o(h);
                    if (p.length > 1) {
                        let e = !1,
                            t = [];
                        for (let e = 0, t = p.length; e < t; e++) d[e] = [];
                        for (let i = 0, n = p.length; i < n; i++) {
                            let n = f[i];
                            for (let r = 0; r < n.length; r++) {
                                let a = n[r],
                                    s = !0;
                                for (let n = 0; n < p.length; n++)(function(e, t) {
                                    let i = t.length,
                                        n = !1;
                                    for (let r = i - 1, a = 0; a < i; r = a++) {
                                        let i = t[r],
                                            s = t[a],
                                            o = s.x - i.x,
                                            l = s.y - i.y;
                                        if (Math.abs(l) > Number.EPSILON) {
                                            if (l < 0 && (i = t[a], o = -o, s = t[r], l = -l), e.y < i.y || e.y > s.y) continue;
                                            if (e.y === i.y) {
                                                if (e.x === i.x) return !0
                                            } else {
                                                let t = l * (e.x - i.x) - o * (e.y - i.y);
                                                if (0 === t) return !0;
                                                if (t < 0) continue;
                                                n = !n
                                            }
                                        } else {
                                            if (e.y !== i.y) continue;
                                            if (s.x <= e.x && e.x <= i.x || i.x <= e.x && e.x <= s.x) return !0
                                        }
                                    }
                                    return n
                                })(a.p, p[n].p) && (i !== n && t.push({
                                    froms: i,
                                    tos: n,
                                    hole: r
                                }), s ? (s = !1, d[n].push(a)) : e = !0);
                                s && d[i].push(a)
                            }
                        }
                        t.length > 0 && !e && (f = d)
                    }
                    for (let e = 0, t = p.length; e < t; e++) {
                        r = p[e].s, u.push(r), s = f[e];
                        for (let e = 0, t = s.length; e < t; e++) r.holes.push(s[e].h)
                    }
                    return u
                }
            }(class {
                constructor(e) {
                    this.type = "Font", this.data = e
                }
                generateShapes(e, t = 100) {
                    let i = [],
                        n = function(e, t, i) {
                            let n = Array.from(e),
                                r = t / i.resolution,
                                a = (i.boundingBox.yMax - i.boundingBox.yMin + i.underlineThickness) * r,
                                s = [],
                                o = 0,
                                l = 0;
                            for (let e = 0; e < n.length; e++) {
                                let t = n[e];
                                if ("\n" === t) o = 0, l -= a;
                                else {
                                    let e = function(e, t, i, n, r) {
                                        let a, s, o, l, h, u, c, d;
                                        let p = r.glyphs[e] || r.glyphs["?"];
                                        if (!p) {
                                            console.error('THREE.Font: character "' + e + '" does not exists in font family ' + r.familyName + ".");
                                            return
                                        }
                                        let f = new sZ;
                                        if (p.o) {
                                            let e = p._cachedOutline || (p._cachedOutline = p.o.split(" "));
                                            for (let r = 0, p = e.length; r < p;) {
                                                let p = e[r++];
                                                switch (p) {
                                                    case "m":
                                                        a = e[r++] * t + i, s = e[r++] * t + n, f.moveTo(a, s);
                                                        break;
                                                    case "l":
                                                        a = e[r++] * t + i, s = e[r++] * t + n, f.lineTo(a, s);
                                                        break;
                                                    case "q":
                                                        o = e[r++] * t + i, l = e[r++] * t + n, h = e[r++] * t + i, u = e[r++] * t + n, f.quadraticCurveTo(h, u, o, l);
                                                        break;
                                                    case "b":
                                                        o = e[r++] * t + i, l = e[r++] * t + n, h = e[r++] * t + i, u = e[r++] * t + n, c = e[r++] * t + i, d = e[r++] * t + n, f.bezierCurveTo(h, u, c, d, o, l)
                                                }
                                            }
                                        }
                                        return {
                                            offsetX: p.ha * t,
                                            path: f
                                        }
                                    }(t, r, o, l, i);
                                    o += e.offsetX, s.push(e.path)
                                }
                            }
                            return s
                        }(e, t, this.data);
                    for (let e = 0, t = n.length; e < t; e++) Array.prototype.push.apply(i, n[e].toShapes());
                    return i
                }
            }).prototype.isFont = !0;
            let sQ = {
                getContext: function() {
                    return void 0 === a && (a = new(window.AudioContext || window.webkitAudioContext)), a
                },
                setContext: function(e) {
                    a = e
                }
            };
            class sK extends sb {
                constructor(e) {
                    super(e)
                }
                load(e, t, i, n) {
                    let r = this,
                        a = new sS(this.manager);
                    a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(i) {
                        try {
                            let e = i.slice(0),
                                n = sQ.getContext();
                            n.decodeAudioData(e, function(e) {
                                t(e)
                            })
                        } catch (t) {
                            n ? n(t) : console.error(t), r.manager.itemError(e)
                        }
                    }, i, n)
                }
            }(class extends sX {
                constructor(e, t, i = 1) {
                    super(void 0, i);
                    let n = new tg().set(e),
                        r = new tg().set(t),
                        a = new er(n.r, n.g, n.b),
                        s = new er(r.r, r.g, r.b),
                        o = Math.sqrt(Math.PI),
                        l = o * Math.sqrt(.75);
                    this.sh.coefficients[0].copy(a).add(s).multiplyScalar(o), this.sh.coefficients[1].copy(a).sub(s).multiplyScalar(l)
                }
            }).prototype.isHemisphereLightProbe = !0, (class extends sX {
                constructor(e, t = 1) {
                    super(void 0, t);
                    let i = new tg().set(e);
                    this.sh.coefficients[0].set(i.r, i.g, i.b).multiplyScalar(2 * Math.sqrt(Math.PI))
                }
            }).prototype.isAmbientLightProbe = !0;
            class s$ {
                constructor(e = !0) {
                    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
                }
                start() {
                    this.startTime = s0(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
                }
                stop() {
                    this.getElapsedTime(), this.running = !1, this.autoStart = !1
                }
                getElapsedTime() {
                    return this.getDelta(), this.elapsedTime
                }
                getDelta() {
                    let e = 0;
                    if (this.autoStart && !this.running) return this.start(), 0;
                    if (this.running) {
                        let t = s0();
                        e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e
                    }
                    return e
                }
            }

            function s0() {
                return ("undefined" == typeof performance ? Date : performance).now()
            }
            class s1 {
                constructor(e, t, i) {
                    let n, r, a;
                    switch (this.binding = e, this.valueSize = i, t) {
                        case "quaternion":
                            n = this._slerp, r = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * i), this._workIndex = 5;
                            break;
                        case "string":
                        case "bool":
                            n = this._select, r = this._select, a = this._setAdditiveIdentityOther, this.buffer = Array(5 * i);
                            break;
                        default:
                            n = this._lerp, r = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * i)
                    }
                    this._mixBufferRegion = n, this._mixBufferRegionAdditive = r, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
                }
                accumulate(e, t) {
                    let i = this.buffer,
                        n = this.valueSize,
                        r = e * n + n,
                        a = this.cumulativeWeight;
                    if (0 === a) {
                        for (let e = 0; e !== n; ++e) i[r + e] = i[e];
                        a = t
                    } else {
                        a += t;
                        let e = t / a;
                        this._mixBufferRegion(i, r, 0, e, n)
                    }
                    this.cumulativeWeight = a
                }
                accumulateAdditive(e) {
                    let t = this.buffer,
                        i = this.valueSize,
                        n = i * this._addIndex;
                    0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(t, n, 0, e, i), this.cumulativeWeightAdditive += e
                }
                apply(e) {
                    let t = this.valueSize,
                        i = this.buffer,
                        n = e * t + t,
                        r = this.cumulativeWeight,
                        a = this.cumulativeWeightAdditive,
                        s = this.binding;
                    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
                        let e = t * this._origIndex;
                        this._mixBufferRegion(i, n, e, 1 - r, t)
                    }
                    a > 0 && this._mixBufferRegionAdditive(i, n, this._addIndex * t, 1, t);
                    for (let e = t, r = t + t; e !== r; ++e)
                        if (i[e] !== i[e + t]) {
                            s.setValue(i, n);
                            break
                        }
                }
                saveOriginalState() {
                    let e = this.binding,
                        t = this.buffer,
                        i = this.valueSize,
                        n = i * this._origIndex;
                    e.getValue(t, n);
                    for (let e = i; e !== n; ++e) t[e] = t[n + e % i];
                    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
                }
                restoreOriginalState() {
                    let e = 3 * this.valueSize;
                    this.binding.setValue(this.buffer, e)
                }
                _setAdditiveIdentityNumeric() {
                    let e = this._addIndex * this.valueSize,
                        t = e + this.valueSize;
                    for (let i = e; i < t; i++) this.buffer[i] = 0
                }
                _setAdditiveIdentityQuaternion() {
                    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
                }
                _setAdditiveIdentityOther() {
                    let e = this._origIndex * this.valueSize,
                        t = this._addIndex * this.valueSize;
                    for (let i = 0; i < this.valueSize; i++) this.buffer[t + i] = this.buffer[e + i]
                }
                _select(e, t, i, n, r) {
                    if (n >= .5)
                        for (let n = 0; n !== r; ++n) e[t + n] = e[i + n]
                }
                _slerp(e, t, i, n) {
                    en.slerpFlat(e, t, e, t, e, i, n)
                }
                _slerpAdditive(e, t, i, n, r) {
                    let a = this._workIndex * r;
                    en.multiplyQuaternionsFlat(e, a, e, t, e, i), en.slerpFlat(e, t, e, t, e, a, n)
                }
                _lerp(e, t, i, n, r) {
                    let a = 1 - n;
                    for (let s = 0; s !== r; ++s) {
                        let r = t + s;
                        e[r] = e[r] * a + e[i + s] * n
                    }
                }
                _lerpAdditive(e, t, i, n, r) {
                    for (let a = 0; a !== r; ++a) {
                        let r = t + a;
                        e[r] = e[r] + e[i + a] * n
                    }
                }
            }
            let s3 = "\\[\\]\\.:\\/",
                s2 = RegExp("[" + s3 + "]", "g"),
                s4 = "[^" + s3 + "]",
                s5 = "[^" + s3.replace("\\.", "") + "]",
                s6 = /((?:WC+[\/:])*)/.source.replace("WC", s4),
                s7 = /(WCOD+)?/.source.replace("WCOD", s5),
                s8 = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", s4),
                s9 = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", s4),
                oe = RegExp("^" + s6 + s7 + s8 + s9 + "$"),
                ot = ["material", "materials", "bones"];
            class oi {
                constructor(e, t, i) {
                    this.path = t, this.parsedPath = i || oi.parseTrackName(t), this.node = oi.findNode(e, this.parsedPath.nodeName) || e, this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
                }
                static create(e, t, i) {
                    return e && e.isAnimationObjectGroup ? new oi.Composite(e, t, i) : new oi(e, t, i)
                }
                static sanitizeNodeName(e) {
                    return e.replace(/\s/g, "_").replace(s2, "")
                }
                static parseTrackName(e) {
                    let t = oe.exec(e);
                    if (!t) throw Error("PropertyBinding: Cannot parse trackName: " + e);
                    let i = {
                            nodeName: t[2],
                            objectName: t[3],
                            objectIndex: t[4],
                            propertyName: t[5],
                            propertyIndex: t[6]
                        },
                        n = i.nodeName && i.nodeName.lastIndexOf(".");
                    if (void 0 !== n && -1 !== n) {
                        let e = i.nodeName.substring(n + 1); - 1 !== ot.indexOf(e) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = e)
                    }
                    if (null === i.propertyName || 0 === i.propertyName.length) throw Error("PropertyBinding: can not parse propertyName from trackName: " + e);
                    return i
                }
                static findNode(e, t) {
                    if (!t || "" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
                    if (e.skeleton) {
                        let i = e.skeleton.getBoneByName(t);
                        if (void 0 !== i) return i
                    }
                    if (e.children) {
                        let i = function(e) {
                                for (let n = 0; n < e.length; n++) {
                                    let r = e[n];
                                    if (r.name === t || r.uuid === t) return r;
                                    let a = i(r.children);
                                    if (a) return a
                                }
                                return null
                            },
                            n = i(e.children);
                        if (n) return n
                    }
                    return null
                }
                _getValue_unavailable() {}
                _setValue_unavailable() {}
                _getValue_direct(e, t) {
                    e[t] = this.node[this.propertyName]
                }
                _getValue_array(e, t) {
                    let i = this.resolvedProperty;
                    for (let n = 0, r = i.length; n !== r; ++n) e[t++] = i[n]
                }
                _getValue_arrayElement(e, t) {
                    e[t] = this.resolvedProperty[this.propertyIndex]
                }
                _getValue_toArray(e, t) {
                    this.resolvedProperty.toArray(e, t)
                }
                _setValue_direct(e, t) {
                    this.targetObject[this.propertyName] = e[t]
                }
                _setValue_direct_setNeedsUpdate(e, t) {
                    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0
                }
                _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
                    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
                }
                _setValue_array(e, t) {
                    let i = this.resolvedProperty;
                    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++]
                }
                _setValue_array_setNeedsUpdate(e, t) {
                    let i = this.resolvedProperty;
                    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
                    this.targetObject.needsUpdate = !0
                }
                _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
                    let i = this.resolvedProperty;
                    for (let n = 0, r = i.length; n !== r; ++n) i[n] = e[t++];
                    this.targetObject.matrixWorldNeedsUpdate = !0
                }
                _setValue_arrayElement(e, t) {
                    this.resolvedProperty[this.propertyIndex] = e[t]
                }
                _setValue_arrayElement_setNeedsUpdate(e, t) {
                    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0
                }
                _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
                    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0
                }
                _setValue_fromArray(e, t) {
                    this.resolvedProperty.fromArray(e, t)
                }
                _setValue_fromArray_setNeedsUpdate(e, t) {
                    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0
                }
                _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
                    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0
                }
                _getValue_unbound(e, t) {
                    this.bind(), this.getValue(e, t)
                }
                _setValue_unbound(e, t) {
                    this.bind(), this.setValue(e, t)
                }
                bind() {
                    let e = this.node,
                        t = this.parsedPath,
                        i = t.objectName,
                        n = t.propertyName,
                        r = t.propertyIndex;
                    if (e || (e = oi.findNode(this.rootNode, t.nodeName) || this.rootNode, this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
                        console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
                        return
                    }
                    if (i) {
                        let n = t.objectIndex;
                        switch (i) {
                            case "materials":
                                if (!e.material) {
                                    console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                                    return
                                }
                                if (!e.material.materials) {
                                    console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                                    return
                                }
                                e = e.material.materials;
                                break;
                            case "bones":
                                if (!e.skeleton) {
                                    console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                                    return
                                }
                                e = e.skeleton.bones;
                                for (let t = 0; t < e.length; t++)
                                    if (e[t].name === n) {
                                        n = t;
                                        break
                                    } break;
                            default:
                                if (void 0 === e[i]) {
                                    console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                                    return
                                }
                                e = e[i]
                        }
                        if (void 0 !== n) {
                            if (void 0 === e[n]) {
                                console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                                return
                            }
                            e = e[n]
                        }
                    }
                    let a = e[n];
                    if (void 0 === a) {
                        let i = t.nodeName;
                        console.error("THREE.PropertyBinding: Trying to update property for track: " + i + "." + n + " but it wasn't found.", e);
                        return
                    }
                    let s = this.Versioning.None;
                    this.targetObject = e, void 0 !== e.needsUpdate ? s = this.Versioning.NeedsUpdate : void 0 !== e.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate);
                    let o = this.BindingType.Direct;
                    if (void 0 !== r) {
                        if ("morphTargetInfluences" === n) {
                            if (!e.geometry) {
                                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                                return
                            }
                            if (e.geometry.isBufferGeometry) {
                                if (!e.geometry.morphAttributes) {
                                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                    return
                                }
                                void 0 !== e.morphTargetDictionary[r] && (r = e.morphTargetDictionary[r])
                            } else {
                                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                                return
                            }
                        }
                        o = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r
                    } else void 0 !== a.fromArray && void 0 !== a.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (o = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = n;
                    this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][s]
                }
                unbind() {
                    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
                }
            }
            oi.Composite = class {
                constructor(e, t, i) {
                    let n = i || oi.parseTrackName(t);
                    this._targetGroup = e, this._bindings = e.subscribe_(t, n)
                }
                getValue(e, t) {
                    this.bind();
                    let i = this._targetGroup.nCachedObjects_,
                        n = this._bindings[i];
                    void 0 !== n && n.getValue(e, t)
                }
                setValue(e, t) {
                    let i = this._bindings;
                    for (let n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(e, t)
                }
                bind() {
                    let e = this._bindings;
                    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].bind()
                }
                unbind() {
                    let e = this._bindings;
                    for (let t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t) e[t].unbind()
                }
            }, oi.prototype.BindingType = {
                Direct: 0,
                EntireArray: 1,
                ArrayElement: 2,
                HasFromToArray: 3
            }, oi.prototype.Versioning = {
                None: 0,
                NeedsUpdate: 1,
                MatrixWorldNeedsUpdate: 2
            }, oi.prototype.GetterByBindingType = [oi.prototype._getValue_direct, oi.prototype._getValue_array, oi.prototype._getValue_arrayElement, oi.prototype._getValue_toArray], oi.prototype.SetterByBindingTypeAndVersioning = [
                [oi.prototype._setValue_direct, oi.prototype._setValue_direct_setNeedsUpdate, oi.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
                [oi.prototype._setValue_array, oi.prototype._setValue_array_setNeedsUpdate, oi.prototype._setValue_array_setMatrixWorldNeedsUpdate],
                [oi.prototype._setValue_arrayElement, oi.prototype._setValue_arrayElement_setNeedsUpdate, oi.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
                [oi.prototype._setValue_fromArray, oi.prototype._setValue_fromArray_setNeedsUpdate, oi.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
            ], (class {
                constructor() {
                    this.uuid = H(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
                    let e = {};
                    this._indicesByUUID = e;
                    for (let t = 0, i = arguments.length; t !== i; ++t) e[arguments[t].uuid] = t;
                    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
                    let t = this;
                    this.stats = {
                        objects: {
                            get total() {
                                return t._objects.length
                            },
                            get inUse() {
                                return this.total - t.nCachedObjects_
                            }
                        },
                        get bindingsPerObject() {
                            return t._bindings.length
                        }
                    }
                }
                add() {
                    let e = this._objects,
                        t = this._indicesByUUID,
                        i = this._paths,
                        n = this._parsedPaths,
                        r = this._bindings,
                        a = r.length,
                        s, o = e.length,
                        l = this.nCachedObjects_;
                    for (let h = 0, u = arguments.length; h !== u; ++h) {
                        let u = arguments[h],
                            c = u.uuid,
                            d = t[c];
                        if (void 0 === d) {
                            d = o++, t[c] = d, e.push(u);
                            for (let e = 0; e !== a; ++e) r[e].push(new oi(u, i[e], n[e]))
                        } else if (d < l) {
                            s = e[d];
                            let o = --l,
                                h = e[o];
                            t[h.uuid] = d, e[d] = h, t[c] = o, e[o] = u;
                            for (let e = 0; e !== a; ++e) {
                                let t = r[e],
                                    a = t[o],
                                    s = t[d];
                                t[d] = a, void 0 === s && (s = new oi(u, i[e], n[e])), t[o] = s
                            }
                        } else e[d] !== s && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
                    }
                    this.nCachedObjects_ = l
                }
                remove() {
                    let e = this._objects,
                        t = this._indicesByUUID,
                        i = this._bindings,
                        n = i.length,
                        r = this.nCachedObjects_;
                    for (let a = 0, s = arguments.length; a !== s; ++a) {
                        let s = arguments[a],
                            o = s.uuid,
                            l = t[o];
                        if (void 0 !== l && l >= r) {
                            let a = r++,
                                h = e[a];
                            t[h.uuid] = l, e[l] = h, t[o] = a, e[a] = s;
                            for (let e = 0; e !== n; ++e) {
                                let t = i[e],
                                    n = t[a],
                                    r = t[l];
                                t[l] = n, t[a] = r
                            }
                        }
                    }
                    this.nCachedObjects_ = r
                }
                uncache() {
                    let e = this._objects,
                        t = this._indicesByUUID,
                        i = this._bindings,
                        n = i.length,
                        r = this.nCachedObjects_,
                        a = e.length;
                    for (let s = 0, o = arguments.length; s !== o; ++s) {
                        let o = arguments[s],
                            l = o.uuid,
                            h = t[l];
                        if (void 0 !== h) {
                            if (delete t[l], h < r) {
                                let s = --r,
                                    o = e[s],
                                    l = --a,
                                    u = e[l];
                                t[o.uuid] = h, e[h] = o, t[u.uuid] = s, e[s] = u, e.pop();
                                for (let e = 0; e !== n; ++e) {
                                    let t = i[e],
                                        n = t[s],
                                        r = t[l];
                                    t[h] = n, t[s] = r, t.pop()
                                }
                            } else {
                                let r = --a,
                                    s = e[r];
                                r > 0 && (t[s.uuid] = h), e[h] = s, e.pop();
                                for (let e = 0; e !== n; ++e) {
                                    let t = i[e];
                                    t[h] = t[r], t.pop()
                                }
                            }
                        }
                    }
                    this.nCachedObjects_ = r
                }
                subscribe_(e, t) {
                    let i = this._bindingsIndicesByPath,
                        n = i[e],
                        r = this._bindings;
                    if (void 0 !== n) return r[n];
                    let a = this._paths,
                        s = this._parsedPaths,
                        o = this._objects,
                        l = o.length,
                        h = this.nCachedObjects_,
                        u = Array(l);
                    n = r.length, i[e] = n, a.push(e), s.push(t), r.push(u);
                    for (let i = h, n = o.length; i !== n; ++i) {
                        let n = o[i];
                        u[i] = new oi(n, e, t)
                    }
                    return u
                }
                unsubscribe_(e) {
                    let t = this._bindingsIndicesByPath,
                        i = t[e];
                    if (void 0 !== i) {
                        let n = this._paths,
                            r = this._parsedPaths,
                            a = this._bindings,
                            s = a.length - 1,
                            o = a[s],
                            l = e[s];
                        t[l] = i, a[i] = o, a.pop(), r[i] = r[s], r.pop(), n[i] = n[s], n.pop()
                    }
                }
            }).prototype.isAnimationObjectGroup = !0;
            class on {
                constructor(e, t, i = null, n = t.blendMode) {
                    this._mixer = e, this._clip = t, this._localRoot = i, this.blendMode = n;
                    let r = t.tracks,
                        a = r.length,
                        s = Array(a),
                        o = {
                            endingStart: 2400,
                            endingEnd: 2400
                        };
                    for (let e = 0; e !== a; ++e) {
                        let t = r[e].createInterpolant(null);
                        s[e] = t, t.settings = o
                    }
                    this._interpolantSettings = o, this._interpolants = s, this._propertyBindings = Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
                }
                play() {
                    return this._mixer._activateAction(this), this
                }
                stop() {
                    return this._mixer._deactivateAction(this), this.reset()
                }
                reset() {
                    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
                }
                isRunning() {
                    return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
                }
                isScheduled() {
                    return this._mixer._isActiveAction(this)
                }
                startAt(e) {
                    return this._startTime = e, this
                }
                setLoop(e, t) {
                    return this.loop = e, this.repetitions = t, this
                }
                setEffectiveWeight(e) {
                    return this.weight = e, this._effectiveWeight = this.enabled ? e : 0, this.stopFading()
                }
                getEffectiveWeight() {
                    return this._effectiveWeight
                }
                fadeIn(e) {
                    return this._scheduleFading(e, 0, 1)
                }
                fadeOut(e) {
                    return this._scheduleFading(e, 1, 0)
                }
                crossFadeFrom(e, t, i) {
                    if (e.fadeOut(t), this.fadeIn(t), i) {
                        let i = this._clip.duration,
                            n = e._clip.duration;
                        e.warp(1, n / i, t), this.warp(i / n, 1, t)
                    }
                    return this
                }
                crossFadeTo(e, t, i) {
                    return e.crossFadeFrom(this, t, i)
                }
                stopFading() {
                    let e = this._weightInterpolant;
                    return null !== e && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
                }
                setEffectiveTimeScale(e) {
                    return this.timeScale = e, this._effectiveTimeScale = this.paused ? 0 : e, this.stopWarping()
                }
                getEffectiveTimeScale() {
                    return this._effectiveTimeScale
                }
                setDuration(e) {
                    return this.timeScale = this._clip.duration / e, this.stopWarping()
                }
                syncWith(e) {
                    return this.time = e.time, this.timeScale = e.timeScale, this.stopWarping()
                }
                halt(e) {
                    return this.warp(this._effectiveTimeScale, 0, e)
                }
                warp(e, t, i) {
                    let n = this._mixer,
                        r = n.time,
                        a = this.timeScale,
                        s = this._timeScaleInterpolant;
                    null === s && (s = n._lendControlInterpolant(), this._timeScaleInterpolant = s);
                    let o = s.parameterPositions,
                        l = s.sampleValues;
                    return o[0] = r, o[1] = r + i, l[0] = e / a, l[1] = t / a, this
                }
                stopWarping() {
                    let e = this._timeScaleInterpolant;
                    return null !== e && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(e)), this
                }
                getMixer() {
                    return this._mixer
                }
                getClip() {
                    return this._clip
                }
                getRoot() {
                    return this._localRoot || this._mixer._root
                }
                _update(e, t, i, n) {
                    if (!this.enabled) {
                        this._updateWeight(e);
                        return
                    }
                    let r = this._startTime;
                    if (null !== r) {
                        let n = (e - r) * i;
                        if (n < 0 || 0 === i) return;
                        this._startTime = null, t = i * n
                    }
                    t *= this._updateTimeScale(e);
                    let a = this._updateTime(t),
                        s = this._updateWeight(e);
                    if (s > 0) {
                        let e = this._interpolants,
                            t = this._propertyBindings;
                        if (2501 === this.blendMode)
                            for (let i = 0, n = e.length; i !== n; ++i) e[i].evaluate(a), t[i].accumulateAdditive(s);
                        else
                            for (let i = 0, r = e.length; i !== r; ++i) e[i].evaluate(a), t[i].accumulate(n, s)
                    }
                }
                _updateWeight(e) {
                    let t = 0;
                    if (this.enabled) {
                        t = this.weight;
                        let i = this._weightInterpolant;
                        if (null !== i) {
                            let n = i.evaluate(e)[0];
                            t *= n, e > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
                        }
                    }
                    return this._effectiveWeight = t, t
                }
                _updateTimeScale(e) {
                    let t = 0;
                    if (!this.paused) {
                        t = this.timeScale;
                        let i = this._timeScaleInterpolant;
                        if (null !== i) {
                            let n = i.evaluate(e)[0];
                            t *= n, e > i.parameterPositions[1] && (this.stopWarping(), 0 === t ? this.paused = !0 : this.timeScale = t)
                        }
                    }
                    return this._effectiveTimeScale = t, t
                }
                _updateTime(e) {
                    let t = this._clip.duration,
                        i = this.loop,
                        n = this.time + e,
                        r = this._loopCount,
                        a = 2202 === i;
                    if (0 === e) return -1 === r ? n : a && (1 & r) == 1 ? t - n : n;
                    if (2200 === i) {
                        -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
                        r: {
                            if (n >= t) n = t;
                            else if (n < 0) n = 0;
                            else {
                                this.time = n;
                                break r
                            }
                            this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                            this.time = n,
                            this._mixer.dispatchEvent({
                                type: "finished",
                                action: this,
                                direction: e < 0 ? -1 : 1
                            })
                        }
                    } else {
                        if (-1 === r && (e >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), n >= t || n < 0) {
                            let i = Math.floor(n / t);
                            n -= t * i, r += Math.abs(i);
                            let s = this.repetitions - r;
                            if (s <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, n = e > 0 ? t : 0, this.time = n, this._mixer.dispatchEvent({
                                type: "finished",
                                action: this,
                                direction: e > 0 ? 1 : -1
                            });
                            else {
                                if (1 === s) {
                                    let t = e < 0;
                                    this._setEndings(t, !t, a)
                                } else this._setEndings(!1, !1, a);
                                this._loopCount = r, this.time = n, this._mixer.dispatchEvent({
                                    type: "loop",
                                    action: this,
                                    loopDelta: i
                                })
                            }
                        } else this.time = n;
                        if (a && (1 & r) == 1) return t - n
                    }
                    return n
                }
                _setEndings(e, t, i) {
                    let n = this._interpolantSettings;
                    i ? (n.endingStart = 2401, n.endingEnd = 2401) : (e ? n.endingStart = this.zeroSlopeAtStart ? 2401 : 2400 : n.endingStart = 2402, t ? n.endingEnd = this.zeroSlopeAtEnd ? 2401 : 2400 : n.endingEnd = 2402)
                }
                _scheduleFading(e, t, i) {
                    let n = this._mixer,
                        r = n.time,
                        a = this._weightInterpolant;
                    null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
                    let s = a.parameterPositions,
                        o = a.sampleValues;
                    return s[0] = r, o[0] = t, s[1] = r + e, o[1] = i, this
                }
            }(class extends z {
                constructor(e) {
                    super(), this._root = e, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
                }
                _bindAction(e, t) {
                    let i = e._localRoot || this._root,
                        n = e._clip.tracks,
                        r = n.length,
                        a = e._propertyBindings,
                        s = e._interpolants,
                        o = i.uuid,
                        l = this._bindingsByRootAndName,
                        h = l[o];
                    void 0 === h && (h = {}, l[o] = h);
                    for (let e = 0; e !== r; ++e) {
                        let r = n[e],
                            l = r.name,
                            u = h[l];
                        if (void 0 !== u) a[e] = u;
                        else {
                            if (void 0 !== (u = a[e])) {
                                null === u._cacheIndex && (++u.referenceCount, this._addInactiveBinding(u, o, l));
                                continue
                            }
                            let n = t && t._propertyBindings[e].binding.parsedPath;
                            u = new s1(oi.create(i, l, n), r.ValueTypeName, r.getValueSize()), ++u.referenceCount, this._addInactiveBinding(u, o, l), a[e] = u
                        }
                        s[e].resultBuffer = u.buffer
                    }
                }
                _activateAction(e) {
                    if (!this._isActiveAction(e)) {
                        if (null === e._cacheIndex) {
                            let t = (e._localRoot || this._root).uuid,
                                i = e._clip.uuid,
                                n = this._actionsByClip[i];
                            this._bindAction(e, n && n.knownActions[0]), this._addInactiveAction(e, i, t)
                        }
                        let t = e._propertyBindings;
                        for (let e = 0, i = t.length; e !== i; ++e) {
                            let i = t[e];
                            0 == i.useCount++ && (this._lendBinding(i), i.saveOriginalState())
                        }
                        this._lendAction(e)
                    }
                }
                _deactivateAction(e) {
                    if (this._isActiveAction(e)) {
                        let t = e._propertyBindings;
                        for (let e = 0, i = t.length; e !== i; ++e) {
                            let i = t[e];
                            0 == --i.useCount && (i.restoreOriginalState(), this._takeBackBinding(i))
                        }
                        this._takeBackAction(e)
                    }
                }
                _initMemoryManager() {
                    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
                    let e = this;
                    this.stats = {
                        actions: {
                            get total() {
                                return e._actions.length
                            },
                            get inUse() {
                                return e._nActiveActions
                            }
                        },
                        bindings: {
                            get total() {
                                return e._bindings.length
                            },
                            get inUse() {
                                return e._nActiveBindings
                            }
                        },
                        controlInterpolants: {
                            get total() {
                                return e._controlInterpolants.length
                            },
                            get inUse() {
                                return e._nActiveControlInterpolants
                            }
                        }
                    }
                }
                _isActiveAction(e) {
                    let t = e._cacheIndex;
                    return null !== t && t < this._nActiveActions
                }
                _addInactiveAction(e, t, i) {
                    let n = this._actions,
                        r = this._actionsByClip,
                        a = r[t];
                    if (void 0 === a) a = {
                        knownActions: [e],
                        actionByRoot: {}
                    }, e._byClipCacheIndex = 0, r[t] = a;
                    else {
                        let t = a.knownActions;
                        e._byClipCacheIndex = t.length, t.push(e)
                    }
                    e._cacheIndex = n.length, n.push(e), a.actionByRoot[i] = e
                }
                _removeInactiveAction(e) {
                    let t = this._actions,
                        i = t[t.length - 1],
                        n = e._cacheIndex;
                    i._cacheIndex = n, t[n] = i, t.pop(), e._cacheIndex = null;
                    let r = e._clip.uuid,
                        a = this._actionsByClip,
                        s = a[r],
                        o = s.knownActions,
                        l = o[o.length - 1],
                        h = e._byClipCacheIndex;
                    l._byClipCacheIndex = h, o[h] = l, o.pop(), e._byClipCacheIndex = null;
                    let u = s.actionByRoot,
                        c = (e._localRoot || this._root).uuid;
                    delete u[c], 0 === o.length && delete a[r], this._removeInactiveBindingsForAction(e)
                }
                _removeInactiveBindingsForAction(e) {
                    let t = e._propertyBindings;
                    for (let e = 0, i = t.length; e !== i; ++e) {
                        let i = t[e];
                        0 == --i.referenceCount && this._removeInactiveBinding(i)
                    }
                }
                _lendAction(e) {
                    let t = this._actions,
                        i = e._cacheIndex,
                        n = this._nActiveActions++,
                        r = t[n];
                    e._cacheIndex = n, t[n] = e, r._cacheIndex = i, t[i] = r
                }
                _takeBackAction(e) {
                    let t = this._actions,
                        i = e._cacheIndex,
                        n = --this._nActiveActions,
                        r = t[n];
                    e._cacheIndex = n, t[n] = e, r._cacheIndex = i, t[i] = r
                }
                _addInactiveBinding(e, t, i) {
                    let n = this._bindingsByRootAndName,
                        r = this._bindings,
                        a = n[t];
                    void 0 === a && (a = {}, n[t] = a), a[i] = e, e._cacheIndex = r.length, r.push(e)
                }
                _removeInactiveBinding(e) {
                    let t = this._bindings,
                        i = e.binding,
                        n = i.rootNode.uuid,
                        r = i.path,
                        a = this._bindingsByRootAndName,
                        s = a[n],
                        o = t[t.length - 1],
                        l = e._cacheIndex;
                    o._cacheIndex = l, t[l] = o, t.pop(), delete s[r], 0 === Object.keys(s).length && delete a[n]
                }
                _lendBinding(e) {
                    let t = this._bindings,
                        i = e._cacheIndex,
                        n = this._nActiveBindings++,
                        r = t[n];
                    e._cacheIndex = n, t[n] = e, r._cacheIndex = i, t[i] = r
                }
                _takeBackBinding(e) {
                    let t = this._bindings,
                        i = e._cacheIndex,
                        n = --this._nActiveBindings,
                        r = t[n];
                    e._cacheIndex = n, t[n] = e, r._cacheIndex = i, t[i] = r
                }
                _lendControlInterpolant() {
                    let e = this._controlInterpolants,
                        t = this._nActiveControlInterpolants++,
                        i = e[t];
                    return void 0 === i && ((i = new sh(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = t, e[t] = i), i
                }
                _takeBackControlInterpolant(e) {
                    let t = this._controlInterpolants,
                        i = e.__cacheIndex,
                        n = --this._nActiveControlInterpolants,
                        r = t[n];
                    e.__cacheIndex = n, t[n] = e, r.__cacheIndex = i, t[i] = r
                }
                clipAction(e, t, i) {
                    let n = t || this._root,
                        r = n.uuid,
                        a = "string" == typeof e ? sy.findByName(n, e) : e,
                        s = null !== a ? a.uuid : e,
                        o = this._actionsByClip[s],
                        l = null;
                    if (void 0 === i && (i = null !== a ? a.blendMode : 2500), void 0 !== o) {
                        let e = o.actionByRoot[r];
                        if (void 0 !== e && e.blendMode === i) return e;
                        l = o.knownActions[0], null === a && (a = l._clip)
                    }
                    if (null === a) return null;
                    let h = new on(this, a, t, i);
                    return this._bindAction(h, l), this._addInactiveAction(h, s, r), h
                }
                existingAction(e, t) {
                    let i = t || this._root,
                        n = i.uuid,
                        r = "string" == typeof e ? sy.findByName(i, e) : e,
                        a = r ? r.uuid : e,
                        s = this._actionsByClip[a];
                    return void 0 !== s && s.actionByRoot[n] || null
                }
                stopAllAction() {
                    let e = this._actions,
                        t = this._nActiveActions;
                    for (let i = t - 1; i >= 0; --i) e[i].stop();
                    return this
                }
                update(e) {
                    e *= this.timeScale;
                    let t = this._actions,
                        i = this._nActiveActions,
                        n = this.time += e,
                        r = Math.sign(e),
                        a = this._accuIndex ^= 1;
                    for (let s = 0; s !== i; ++s) {
                        let i = t[s];
                        i._update(n, e, r, a)
                    }
                    let s = this._bindings,
                        o = this._nActiveBindings;
                    for (let e = 0; e !== o; ++e) s[e].apply(a);
                    return this
                }
                setTime(e) {
                    this.time = 0;
                    for (let e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
                    return this.update(e)
                }
                getRoot() {
                    return this._root
                }
                uncacheClip(e) {
                    let t = this._actions,
                        i = e.uuid,
                        n = this._actionsByClip,
                        r = n[i];
                    if (void 0 !== r) {
                        let e = r.knownActions;
                        for (let i = 0, n = e.length; i !== n; ++i) {
                            let n = e[i];
                            this._deactivateAction(n);
                            let r = n._cacheIndex,
                                a = t[t.length - 1];
                            n._cacheIndex = null, n._byClipCacheIndex = null, a._cacheIndex = r, t[r] = a, t.pop(), this._removeInactiveBindingsForAction(n)
                        }
                        delete n[i]
                    }
                }
                uncacheRoot(e) {
                    let t = e.uuid,
                        i = this._actionsByClip;
                    for (let e in i) {
                        let n = i[e].actionByRoot,
                            r = n[t];
                        void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
                    }
                    let n = this._bindingsByRootAndName,
                        r = n[t];
                    if (void 0 !== r)
                        for (let e in r) {
                            let t = r[e];
                            t.restoreOriginalState(), this._removeInactiveBinding(t)
                        }
                }
                uncacheAction(e, t) {
                    let i = this.existingAction(e, t);
                    null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
                }
            }).prototype._controlInterpolantsResultBuffer = new Float32Array(1);
            class or {
                constructor(e) {
                    "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."), e = arguments[1]), this.value = e
                }
                clone() {
                    return new or(void 0 === this.value.clone ? this.value : this.value.clone())
                }
            }(class extends rL {
                constructor(e, t, i = 1) {
                    super(e, t), this.meshPerAttribute = i
                }
                copy(e) {
                    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
                }
                clone(e) {
                    let t = super.clone(e);
                    return t.meshPerAttribute = this.meshPerAttribute, t
                }
                toJSON(e) {
                    let t = super.toJSON(e);
                    return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t
                }
            }).prototype.isInstancedInterleavedBuffer = !0, (class {
                constructor(e, t, i, n, r) {
                    this.buffer = e, this.type = t, this.itemSize = i, this.elementSize = n, this.count = r, this.version = 0
                }
                set needsUpdate(e) {
                    !0 === e && this.version++
                }
                setBuffer(e) {
                    return this.buffer = e, this
                }
                setType(e, t) {
                    return this.type = e, this.elementSize = t, this
                }
                setItemSize(e) {
                    return this.itemSize = e, this
                }
                setCount(e) {
                    return this.count = e, this
                }
            }).prototype.isGLBufferAttribute = !0;
            class oa {
                constructor(e, t, i = 0, n = 1 / 0) {
                    this.ray = new eN(e, t), this.near = i, this.far = n, this.camera = null, this.layers = new eq, this.params = {
                        Mesh: {},
                        Line: {
                            threshold: 1
                        },
                        LOD: {},
                        Points: {
                            threshold: 1
                        },
                        Sprite: {}
                    }
                }
                set(e, t) {
                    this.ray.set(e, t)
                }
                setFromCamera(e, t) {
                    t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type)
                }
                intersectObject(e, t = !1, i = []) {
                    return oo(e, this, i, t), i.sort(os), i
                }
                intersectObjects(e, t = !1, i = []) {
                    for (let n = 0, r = e.length; n < r; n++) oo(e[n], this, i, t);
                    return i.sort(os), i
                }
            }

            function os(e, t) {
                return e.distance - t.distance
            }

            function oo(e, t, i, n) {
                if (e.layers.test(t.layers) && e.raycast(t, i), !0 === n) {
                    let n = e.children;
                    for (let e = 0, r = n.length; e < r; e++) oo(n[e], t, i, !0)
                }
            }
            let ol = new Y;
            class oh {
                constructor(e = new Y(Infinity, Infinity), t = new Y(-1 / 0, -1 / 0)) {
                    this.min = e, this.max = t
                }
                set(e, t) {
                    return this.min.copy(e), this.max.copy(t), this
                }
                setFromPoints(e) {
                    this.makeEmpty();
                    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
                    return this
                }
                setFromCenterAndSize(e, t) {
                    let i = ol.copy(t).multiplyScalar(.5);
                    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this
                }
                clone() {
                    return new this.constructor().copy(this)
                }
                copy(e) {
                    return this.min.copy(e.min), this.max.copy(e.max), this
                }
                makeEmpty() {
                    return this.min.x = this.min.y = Infinity, this.max.x = this.max.y = -1 / 0, this
                }
                isEmpty() {
                    return this.max.x < this.min.x || this.max.y < this.min.y
                }
                getCenter(e) {
                    return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
                }
                getSize(e) {
                    return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
                }
                expandByPoint(e) {
                    return this.min.min(e), this.max.max(e), this
                }
                expandByVector(e) {
                    return this.min.sub(e), this.max.add(e), this
                }
                expandByScalar(e) {
                    return this.min.addScalar(-e), this.max.addScalar(e), this
                }
                containsPoint(e) {
                    return !(e.x < this.min.x) && !(e.x > this.max.x) && !(e.y < this.min.y) && !(e.y > this.max.y)
                }
                containsBox(e) {
                    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y
                }
                getParameter(e, t) {
                    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
                }
                intersectsBox(e) {
                    return !(e.max.x < this.min.x) && !(e.min.x > this.max.x) && !(e.max.y < this.min.y) && !(e.min.y > this.max.y)
                }
                clampPoint(e, t) {
                    return t.copy(e).clamp(this.min, this.max)
                }
                distanceToPoint(e) {
                    let t = ol.copy(e).clamp(this.min, this.max);
                    return t.sub(e).length()
                }
                intersect(e) {
                    return this.min.max(e.min), this.max.min(e.max), this
                }
                union(e) {
                    return this.min.min(e.min), this.max.max(e.max), this
                }
                translate(e) {
                    return this.min.add(e), this.max.add(e), this
                }
                equals(e) {
                    return e.min.equals(this.min) && e.max.equals(this.max)
                }
            }
            oh.prototype.isBox2 = !0;
            let ou = new er,
                oc = new er;
            (class extends e6 {
                constructor(e) {
                    super(), this.material = e, this.render = function() {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0
                }
            }).prototype.isImmediateRenderObject = !0;
            let od = new er,
                op = new ez,
                of = new ez,
                om = new Float32Array(1),
                og = new Int32Array(om.buffer);
            class ov {
                static toHalfFloat(e) {
                    om[0] = e;
                    let t = og[0],
                        i = t >> 16 & 32768,
                        n = t >> 12 & 2047,
                        r = t >> 23 & 255;
                    return r < 103 ? i : r > 142 ? (i |= 31744, i |= (255 == r ? 0 : 1) && 8388607 & t) : r < 113 ? (n |= 2048, i |= (n >> 114 - r) + (n >> 113 - r & 1)) : (i |= r - 112 << 10 | n >> 1, i += 1 & n)
                }
            }
            ax.create = function(e, t) {
                return console.log("THREE.Curve.create() has been deprecated"), e.prototype = Object.create(ax.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
            }, sC.prototype.fromPoints = function(e) {
                return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(e)
            }, (class extends ar {
                constructor(e = 10, t = 10, i = 4473924, n = 8947848) {
                    i = new tg(i), n = new tg(n);
                    let r = t / 2,
                        a = e / t,
                        s = e / 2,
                        o = [],
                        l = [];
                    for (let e = 0, h = 0, u = -s; e <= t; e++, u += a) {
                        o.push(-s, 0, u, s, 0, u), o.push(u, 0, -s, u, 0, s);
                        let t = e === r ? i : n;
                        t.toArray(l, h), h += 3, t.toArray(l, h), h += 3, t.toArray(l, h), h += 3, t.toArray(l, h), h += 3
                    }
                    let h = new tI;
                    h.setAttribute("position", new tw(o, 3)), h.setAttribute("color", new tw(l, 3));
                    let u = new r5({
                        vertexColors: !0,
                        toneMapped: !1
                    });
                    super(h, u), this.type = "GridHelper"
                }
            }).prototype.setColors = function() {
                console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
            }, (class extends ar {
                constructor(e) {
                    let t = function e(t) {
                            let i = [];
                            t && t.isBone && i.push(t);
                            for (let n = 0; n < t.children.length; n++) i.push.apply(i, e(t.children[n]));
                            return i
                        }(e),
                        i = new tI,
                        n = [],
                        r = [],
                        a = new tg(0, 0, 1),
                        s = new tg(0, 1, 0);
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        i.parent && i.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(s.r, s.g, s.b))
                    }
                    i.setAttribute("position", new tw(n, 3)), i.setAttribute("color", new tw(r, 3));
                    let o = new r5({
                        vertexColors: !0,
                        depthTest: !1,
                        depthWrite: !1,
                        toneMapped: !1,
                        transparent: !0
                    });
                    super(i, o), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = e, this.bones = t, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
                }
                updateMatrixWorld(e) {
                    let t = this.bones,
                        i = this.geometry,
                        n = i.getAttribute("position");
                    of.copy(this.root.matrixWorld).invert();
                    for (let e = 0, i = 0; e < t.length; e++) {
                        let r = t[e];
                        r.parent && r.parent.isBone && (op.multiplyMatrices(of, r.matrixWorld), od.setFromMatrixPosition(op), n.setXYZ(i, od.x, od.y, od.z), op.multiplyMatrices(of, r.parent.matrixWorld), od.setFromMatrixPosition(op), n.setXYZ(i + 1, od.x, od.y, od.z), i += 2)
                    }
                    i.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(e)
                }
            }).prototype.update = function() {
                console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
            }, sb.prototype.extractUrlBase = function(e) {
                return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), sY.extractUrlBase(e)
            }, sb.Handlers = {
                add: function() {
                    console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
                },
                get: function() {
                    console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
                }
            }, oh.prototype.center = function(e) {
                return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(e)
            }, oh.prototype.empty = function() {
                return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
            }, oh.prototype.isIntersectionBox = function(e) {
                return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
            }, oh.prototype.size = function(e) {
                return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(e)
            }, eo.prototype.center = function(e) {
                return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(e)
            }, eo.prototype.empty = function() {
                return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
            }, eo.prototype.isIntersectionBox = function(e) {
                return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
            }, eo.prototype.isIntersectionSphere = function(e) {
                return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
            }, eo.prototype.size = function(e) {
                return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(e)
            }, eE.prototype.empty = function() {
                return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
            }, ia.prototype.setFromMatrix = function(e) {
                return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(e)
            }, (class {
                constructor(e = new er, t = new er) {
                    this.start = e, this.end = t
                }
                set(e, t) {
                    return this.start.copy(e), this.end.copy(t), this
                }
                copy(e) {
                    return this.start.copy(e.start), this.end.copy(e.end), this
                }
                getCenter(e) {
                    return e.addVectors(this.start, this.end).multiplyScalar(.5)
                }
                delta(e) {
                    return e.subVectors(this.end, this.start)
                }
                distanceSq() {
                    return this.start.distanceToSquared(this.end)
                }
                distance() {
                    return this.start.distanceTo(this.end)
                }
                at(e, t) {
                    return this.delta(t).multiplyScalar(e).add(this.start)
                }
                closestPointToPointParameter(e, t) {
                    ou.subVectors(e, this.start), oc.subVectors(this.end, this.start);
                    let i = oc.dot(oc),
                        n = oc.dot(ou),
                        r = n / i;
                    return t && (r = G(r, 0, 1)), r
                }
                closestPointToPoint(e, t, i) {
                    let n = this.closestPointToPointParameter(e, t);
                    return this.delta(i).multiplyScalar(n).add(this.start)
                }
                applyMatrix4(e) {
                    return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
                }
                equals(e) {
                    return e.start.equals(this.start) && e.end.equals(this.end)
                }
                clone() {
                    return new this.constructor().copy(this)
                }
            }).prototype.center = function(e) {
                return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(e)
            }, J.prototype.flattenToArrayOffset = function(e, t) {
                return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
            }, J.prototype.multiplyVector3 = function(e) {
                return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
            }, J.prototype.multiplyVector3Array = function() {
                console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
            }, J.prototype.applyToBufferAttribute = function(e) {
                return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
            }, J.prototype.applyToVector3Array = function() {
                console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
            }, J.prototype.getInverse = function(e) {
                return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(e).invert()
            }, ez.prototype.extractPosition = function(e) {
                return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
            }, ez.prototype.flattenToArrayOffset = function(e, t) {
                return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(e, t)
            }, ez.prototype.getPosition = function() {
                return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), new er().setFromMatrixColumn(this, 3)
            }, ez.prototype.setRotationFromQuaternion = function(e) {
                return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
            }, ez.prototype.multiplyToArray = function() {
                console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
            }, ez.prototype.multiplyVector3 = function(e) {
                return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            }, ez.prototype.multiplyVector4 = function(e) {
                return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            }, ez.prototype.multiplyVector3Array = function() {
                console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
            }, ez.prototype.rotateAxis = function(e) {
                console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
            }, ez.prototype.crossVector = function(e) {
                return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            }, ez.prototype.translate = function() {
                console.error("THREE.Matrix4: .translate() has been removed.")
            }, ez.prototype.rotateX = function() {
                console.error("THREE.Matrix4: .rotateX() has been removed.")
            }, ez.prototype.rotateY = function() {
                console.error("THREE.Matrix4: .rotateY() has been removed.")
            }, ez.prototype.rotateZ = function() {
                console.error("THREE.Matrix4: .rotateZ() has been removed.")
            }, ez.prototype.rotateByAxis = function() {
                console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
            }, ez.prototype.applyToBufferAttribute = function(e) {
                return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            }, ez.prototype.applyToVector3Array = function() {
                console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
            }, ez.prototype.makeFrustum = function(e, t, i, n, r, a) {
                return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(e, t, n, i, r, a)
            }, ez.prototype.getInverse = function(e) {
                return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(e).invert()
            }, it.prototype.isIntersectionLine = function(e) {
                return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(e)
            }, en.prototype.multiplyVector3 = function(e) {
                return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
            }, en.prototype.inverse = function() {
                return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
            }, eN.prototype.isIntersectionBox = function(e) {
                return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(e)
            }, eN.prototype.isIntersectionPlane = function(e) {
                return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(e)
            }, eN.prototype.isIntersectionSphere = function(e) {
                return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(e)
            }, to.prototype.area = function() {
                return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
            }, to.prototype.barycoordFromPoint = function(e, t) {
                return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(e, t)
            }, to.prototype.midpoint = function(e) {
                return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(e)
            }, to.prototypenormal = function(e) {
                return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(e)
            }, to.prototype.plane = function(e) {
                return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(e)
            }, to.barycoordFromPoint = function(e, t, i, n, r) {
                return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), to.getBarycoord(e, t, i, n, r)
            }, to.normal = function(e, t, i, n) {
                return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), to.getNormal(e, t, i, n)
            }, sP.prototype.extractAllPoints = function(e) {
                return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(e)
            }, sP.prototype.extrude = function(e) {
                return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new a3(this, e)
            }, sP.prototype.makeGeometry = function(e) {
                return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new a8(this, e)
            }, Y.prototype.fromAttribute = function(e, t, i) {
                return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, i)
            }, Y.prototype.distanceToManhattan = function(e) {
                return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
            }, Y.prototype.lengthManhattan = function() {
                return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }, er.prototype.setEulerFromRotationMatrix = function() {
                console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
            }, er.prototype.setEulerFromQuaternion = function() {
                console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
            }, er.prototype.getPositionFromMatrix = function(e) {
                return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
            }, er.prototype.getScaleFromMatrix = function(e) {
                return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
            }, er.prototype.getColumnFromMatrix = function(e, t) {
                return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(t, e)
            }, er.prototype.applyProjection = function(e) {
                return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(e)
            }, er.prototype.fromAttribute = function(e, t, i) {
                return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, i)
            }, er.prototype.distanceToManhattan = function(e) {
                return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(e)
            }, er.prototype.lengthManhattan = function() {
                return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }, ee.prototype.fromAttribute = function(e, t, i) {
                return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(e, t, i)
            }, ee.prototype.lengthManhattan = function() {
                return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
            }, e6.prototype.getChildByName = function(e) {
                return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
            }, e6.prototype.renderDepth = function() {
                console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
            }, e6.prototype.translate = function(e, t) {
                return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
            }, e6.prototype.getWorldRotation = function() {
                console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
            }, e6.prototype.applyMatrix = function(e) {
                return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e)
            }, Object.defineProperties(e6.prototype, {
                eulerOrder: {
                    get: function() {
                        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
                    },
                    set: function(e) {
                        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = e
                    }
                },
                useQuaternion: {
                    get: function() {
                        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                    },
                    set: function() {
                        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
                    }
                }
            }), tZ.prototype.setDrawMode = function() {
                console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
            }, Object.defineProperties(tZ.prototype, {
                drawMode: {
                    get: function() {
                        return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), L
                    },
                    set: function() {
                        console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
                    }
                }
            }), rJ.prototype.initBones = function() {
                console.error("THREE.SkinnedMesh: initBones() has been removed.")
            }, t4.prototype.setLens = function(e, t) {
                console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== t && (this.filmGauge = t), this.setFocalLength(e)
            }, Object.defineProperties(sI.prototype, {
                onlyShadow: {
                    set: function() {
                        console.warn("THREE.Light: .onlyShadow has been removed.")
                    }
                },
                shadowCameraFov: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = e
                    }
                },
                shadowCameraLeft: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = e
                    }
                },
                shadowCameraRight: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = e
                    }
                },
                shadowCameraTop: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = e
                    }
                },
                shadowCameraBottom: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = e
                    }
                },
                shadowCameraNear: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = e
                    }
                },
                shadowCameraFar: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = e
                    }
                },
                shadowCameraVisible: {
                    set: function() {
                        console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
                    }
                },
                shadowBias: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = e
                    }
                },
                shadowDarkness: {
                    set: function() {
                        console.warn("THREE.Light: .shadowDarkness has been removed.")
                    }
                },
                shadowMapWidth: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = e
                    }
                },
                shadowMapHeight: {
                    set: function(e) {
                        console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = e
                    }
                }
            }), Object.defineProperties(t_.prototype, {
                length: {
                    get: function() {
                        return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
                    }
                },
                dynamic: {
                    get: function() {
                        return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), 35048 === this.usage
                    },
                    set: function() {
                        console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(35048)
                    }
                }
            }), t_.prototype.setDynamic = function(e) {
                return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e ? 35048 : 35044), this
            }, t_.prototype.copyIndicesArray = function() {
                console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
            }, t_.prototype.setArray = function() {
                console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
            }, tI.prototype.addIndex = function(e) {
                console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
            }, tI.prototype.addAttribute = function(e, t) {
                return (console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), t && t.isBufferAttribute || t && t.isInterleavedBufferAttribute) ? "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t), this) : this.setAttribute(e, t) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(e, new t_(arguments[1], arguments[2])))
            }, tI.prototype.addDrawCall = function(e, t, i) {
                void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
            }, tI.prototype.clearDrawCalls = function() {
                console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
            }, tI.prototype.computeOffsets = function() {
                console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
            }, tI.prototype.removeAttribute = function(e) {
                return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(e)
            }, tI.prototype.applyMatrix = function(e) {
                return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(e)
            }, Object.defineProperties(tI.prototype, {
                drawcalls: {
                    get: function() {
                        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
                    }
                },
                offsets: {
                    get: function() {
                        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
                    }
                }
            }), rL.prototype.setDynamic = function(e) {
                return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === e ? 35048 : 35044), this
            }, rL.prototype.setArray = function() {
                console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
            }, a3.prototype.getArrays = function() {
                console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")
            }, a3.prototype.addShapeList = function() {
                console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")
            }, a3.prototype.addShape = function() {
                console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")
            }, rE.prototype.dispose = function() {
                console.error("THREE.Scene: .dispose() has been removed.")
            }, or.prototype.onUpdate = function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
            }, Object.defineProperties(th.prototype, {
                wrapAround: {
                    get: function() {
                        console.warn("THREE.Material: .wrapAround has been removed.")
                    },
                    set: function() {
                        console.warn("THREE.Material: .wrapAround has been removed.")
                    }
                },
                overdraw: {
                    get: function() {
                        console.warn("THREE.Material: .overdraw has been removed.")
                    },
                    set: function() {
                        console.warn("THREE.Material: .overdraw has been removed.")
                    }
                },
                wrapRGB: {
                    get: function() {
                        return console.warn("THREE.Material: .wrapRGB has been removed."), new tg
                    }
                },
                shading: {
                    get: function() {
                        console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
                    },
                    set: function(e) {
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === e
                    }
                },
                stencilMask: {
                    get: function() {
                        return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
                    },
                    set: function(e) {
                        console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = e
                    }
                },
                vertexTangents: {
                    get: function() {
                        console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
                    },
                    set: function() {
                        console.warn("THREE." + this.type + ": .vertexTangents has been removed.")
                    }
                }
            }), Object.defineProperties(t3.prototype, {
                derivatives: {
                    get: function() {
                        return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
                    },
                    set: function(e) {
                        console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = e
                    }
                }
            }), rw.prototype.clearTarget = function(e, t, i, n) {
                console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(e), this.clear(t, i, n)
            }, rw.prototype.animate = function(e) {
                console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(e)
            }, rw.prototype.getCurrentRenderTarget = function() {
                return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
            }, rw.prototype.getMaxAnisotropy = function() {
                return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
            }, rw.prototype.getPrecision = function() {
                return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
            }, rw.prototype.resetGLState = function() {
                return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
            }, rw.prototype.supportsFloatTextures = function() {
                return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
            }, rw.prototype.supportsHalfFloatTextures = function() {
                return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
            }, rw.prototype.supportsStandardDerivatives = function() {
                return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
            }, rw.prototype.supportsCompressedTextureS3TC = function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
            }, rw.prototype.supportsCompressedTexturePVRTC = function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
            }, rw.prototype.supportsBlendMinMax = function() {
                return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
            }, rw.prototype.supportsVertexTextures = function() {
                return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
            }, rw.prototype.supportsInstancedArrays = function() {
                return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
            }, rw.prototype.enableScissorTest = function(e) {
                console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(e)
            }, rw.prototype.initMaterial = function() {
                console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
            }, rw.prototype.addPrePlugin = function() {
                console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
            }, rw.prototype.addPostPlugin = function() {
                console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
            }, rw.prototype.updateShadowMap = function() {
                console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
            }, rw.prototype.setFaceCulling = function() {
                console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
            }, rw.prototype.allocTextureUnit = function() {
                console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
            }, rw.prototype.setTexture = function() {
                console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
            }, rw.prototype.setTexture2D = function() {
                console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
            }, rw.prototype.setTextureCube = function() {
                console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
            }, rw.prototype.getActiveMipMapLevel = function() {
                return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
            }, Object.defineProperties(rw.prototype, {
                shadowMapEnabled: {
                    get: function() {
                        return this.shadowMap.enabled
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = e
                    }
                },
                shadowMapType: {
                    get: function() {
                        return this.shadowMap.type
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = e
                    }
                },
                shadowMapCullFace: {
                    get: function() {
                        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
                    },
                    set: function() {
                        console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
                    }
                },
                context: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
                    }
                },
                vr: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
                    }
                },
                gammaInput: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
                    },
                    set: function() {
                        console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
                    }
                },
                gammaOutput: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === e ? P : C
                    }
                },
                toneMappingWhitePoint: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
                    },
                    set: function() {
                        console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
                    }
                }
            }), Object.defineProperties(rp.prototype, {
                cullFace: {
                    get: function() {
                        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
                    },
                    set: function() {
                        console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
                    }
                },
                renderReverseSided: {
                    get: function() {
                        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
                    },
                    set: function() {
                        console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
                    }
                },
                renderSingleSided: {
                    get: function() {
                        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
                    },
                    set: function() {
                        console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
                    }
                }
            }), Object.defineProperties(et.prototype, {
                wrapS: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = e
                    }
                },
                wrapT: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = e
                    }
                },
                magFilter: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = e
                    }
                },
                minFilter: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = e
                    }
                },
                anisotropy: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = e
                    }
                },
                offset: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = e
                    }
                },
                repeat: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = e
                    }
                },
                format: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = e
                    }
                },
                type: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = e
                    }
                },
                generateMipmaps: {
                    get: function() {
                        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = e
                    }
                }
            }), (class extends e6 {
                constructor(e) {
                    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
                }
                getOutput() {
                    return this.gain
                }
                setNodeSource(e) {
                    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = e, this.connect(), this
                }
                setMediaElementSource(e) {
                    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this
                }
                setMediaStreamSource(e) {
                    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this
                }
                setBuffer(e) {
                    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this
                }
                play(e = 0) {
                    if (!0 === this.isPlaying) {
                        console.warn("THREE.Audio: Audio is already playing.");
                        return
                    }
                    if (!1 === this.hasPlaybackControl) {
                        console.warn("THREE.Audio: this Audio has no playback control.");
                        return
                    }
                    this._startedAt = this.context.currentTime + e;
                    let t = this.context.createBufferSource();
                    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
                }
                pause() {
                    if (!1 === this.hasPlaybackControl) {
                        console.warn("THREE.Audio: this Audio has no playback control.");
                        return
                    }
                    return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this
                }
                stop() {
                    if (!1 === this.hasPlaybackControl) {
                        console.warn("THREE.Audio: this Audio has no playback control.");
                        return
                    }
                    return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this
                }
                connect() {
                    if (this.filters.length > 0) {
                        this.source.connect(this.filters[0]);
                        for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
                        this.filters[this.filters.length - 1].connect(this.getOutput())
                    } else this.source.connect(this.getOutput());
                    return this._connected = !0, this
                }
                disconnect() {
                    if (this.filters.length > 0) {
                        this.source.disconnect(this.filters[0]);
                        for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
                        this.filters[this.filters.length - 1].disconnect(this.getOutput())
                    } else this.source.disconnect(this.getOutput());
                    return this._connected = !1, this
                }
                getFilters() {
                    return this.filters
                }
                setFilters(e) {
                    return e || (e = []), !0 === this._connected ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this
                }
                setDetune(e) {
                    if (this.detune = e, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
                }
                getDetune() {
                    return this.detune
                }
                getFilter() {
                    return this.getFilters()[0]
                }
                setFilter(e) {
                    return this.setFilters(e ? [e] : [])
                }
                setPlaybackRate(e) {
                    if (!1 === this.hasPlaybackControl) {
                        console.warn("THREE.Audio: this Audio has no playback control.");
                        return
                    }
                    return this.playbackRate = e, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this
                }
                getPlaybackRate() {
                    return this.playbackRate
                }
                onEnded() {
                    this.isPlaying = !1
                }
                getLoop() {
                    return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
                }
                setLoop(e) {
                    if (!1 === this.hasPlaybackControl) {
                        console.warn("THREE.Audio: this Audio has no playback control.");
                        return
                    }
                    return this.loop = e, !0 === this.isPlaying && (this.source.loop = this.loop), this
                }
                setLoopStart(e) {
                    return this.loopStart = e, this
                }
                setLoopEnd(e) {
                    return this.loopEnd = e, this
                }
                getVolume() {
                    return this.gain.gain.value
                }
                setVolume(e) {
                    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, .01), this
                }
            }).prototype.load = function(e) {
                console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
                let t = this,
                    i = new sK;
                return i.load(e, function(e) {
                    t.setBuffer(e)
                }), this
            }, (class {
                constructor(e, t = 2048) {
                    this.analyser = e.context.createAnalyser(), this.analyser.fftSize = t, this.data = new Uint8Array(this.analyser.frequencyBinCount), e.getOutput().connect(this.analyser)
                }
                getFrequencyData() {
                    return this.analyser.getByteFrequencyData(this.data), this.data
                }
                getAverageFrequency() {
                    let e = 0,
                        t = this.getFrequencyData();
                    for (let i = 0; i < t.length; i++) e += t[i];
                    return e / t.length
                }
            }).prototype.getData = function() {
                return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
            }, t5.prototype.updateCubeMap = function(e, t) {
                return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(e, t)
            }, t5.prototype.clear = function(e, t, i, n) {
                return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(e, t, i, n)
            }, Z.crossOrigin = void 0, Z.loadTexture = function(e, t, i, n) {
                console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
                let r = new sA;
                r.setCrossOrigin(this.crossOrigin);
                let a = r.load(e, i, void 0, n);
                return t && (a.mapping = t), a
            }, Z.loadTextureCube = function(e, t, i, n) {
                console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
                let r = new sE;
                r.setCrossOrigin(this.crossOrigin);
                let a = r.load(e, i, void 0, n);
                return t && (a.mapping = t), a
            }, Z.loadCompressedTexture = function() {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            }, Z.loadCompressedTextureCube = function() {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
                detail: {
                    revision: "131"
                }
            })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "131")
        }
    }
]);