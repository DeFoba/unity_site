"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [140], {
        140: function(e, t, r) {
            r.d(t, {
                O: function() {
                    return i
                }
            });
            var o = r(2212);
            class i {
                static computeTangents(e) {
                    e.computeTangents(), console.warn("THREE.BufferGeometryUtils: .computeTangents() has been removed. Use BufferGeometry.computeTangents() instead.")
                }
                static mergeBufferGeometries(e, t = !1) {
                    let r = null !== e[0].index,
                        i = new Set(Object.keys(e[0].attributes)),
                        n = new Set(Object.keys(e[0].morphAttributes)),
                        s = {},
                        l = {},
                        u = e[0].morphTargetsRelative,
                        a = new o.u9r,
                        f = 0;
                    for (let o = 0; o < e.length; ++o) {
                        let m = e[o],
                            g = 0;
                        if (r !== (null !== m.index)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + o + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
                        for (let e in m.attributes) {
                            if (!i.has(e)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + o + '. All geometries must have compatible attributes; make sure "' + e + '" attribute exists among all geometries, or in none of them.'), null;
                            void 0 === s[e] && (s[e] = []), s[e].push(m.attributes[e]), g++
                        }
                        if (g !== i.size) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + o + ". Make sure all geometries have the same number of attributes."), null;
                        if (u !== m.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + o + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
                        for (let e in m.morphAttributes) {
                            if (!n.has(e)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + o + ".  .morphAttributes must be consistent throughout all geometries."), null;
                            void 0 === l[e] && (l[e] = []), l[e].push(m.morphAttributes[e])
                        }
                        if (a.userData.mergedUserData = a.userData.mergedUserData || [], a.userData.mergedUserData.push(m.userData), t) {
                            let e;
                            if (r) e = m.index.count;
                            else {
                                if (void 0 === m.attributes.position) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + o + ". The geometry must have either an index or a position attribute"), null;
                                e = m.attributes.position.count
                            }
                            a.addGroup(f, e, o), f += e
                        }
                    }
                    if (r) {
                        let t = 0,
                            r = [];
                        for (let o = 0; o < e.length; ++o) {
                            let i = e[o].index;
                            for (let e = 0; e < i.count; ++e) r.push(i.getX(e) + t);
                            t += e[o].attributes.position.count
                        }
                        a.setIndex(r)
                    }
                    for (let e in s) {
                        let t = this.mergeBufferAttributes(s[e]);
                        if (!t) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + e + " attribute."), null;
                        a.setAttribute(e, t)
                    }
                    for (let e in l) {
                        let t = l[e][0].length;
                        if (0 === t) break;
                        a.morphAttributes = a.morphAttributes || {}, a.morphAttributes[e] = [];
                        for (let r = 0; r < t; ++r) {
                            let t = [];
                            for (let o = 0; o < l[e].length; ++o) t.push(l[e][o][r]);
                            let o = this.mergeBufferAttributes(t);
                            if (!o) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + e + " morphAttribute."), null;
                            a.morphAttributes[e].push(o)
                        }
                    }
                    return a
                }
                static mergeBufferAttributes(e) {
                    let t, r, i;
                    let n = 0;
                    for (let o = 0; o < e.length; ++o) {
                        let s = e[o];
                        if (s.isInterleavedBufferAttribute) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."), null;
                        if (void 0 === t && (t = s.array.constructor), t !== s.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."), null;
                        if (void 0 === r && (r = s.itemSize), r !== s.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."), null;
                        if (void 0 === i && (i = s.normalized), i !== s.normalized) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."), null;
                        n += s.array.length
                    }
                    let s = new t(n),
                        l = 0;
                    for (let t = 0; t < e.length; ++t) s.set(e[t].array, l), l += e[t].array.length;
                    return new o.TlE(s, r, i)
                }
                static interleaveAttributes(e) {
                    let t;
                    let r = 0,
                        i = 0;
                    for (let o = 0, n = e.length; o < n; ++o) {
                        let n = e[o];
                        if (void 0 === t && (t = n.array.constructor), t !== n.array.constructor) return console.error("AttributeBuffers of different types cannot be interleaved"), null;
                        r += n.array.length, i += n.itemSize
                    }
                    let n = new o.vpT(new t(r), i),
                        s = 0,
                        l = [],
                        u = ["getX", "getY", "getZ", "getW"],
                        a = ["setX", "setY", "setZ", "setW"];
                    for (let t = 0, r = e.length; t < r; t++) {
                        let r = e[t],
                            i = r.itemSize,
                            f = r.count,
                            m = new o.kB5(n, i, s, r.normalized);
                        l.push(m), s += i;
                        for (let e = 0; e < f; e++)
                            for (let t = 0; t < i; t++) m[a[t]](e, r[u[t]](e))
                    }
                    return l
                }
                static estimateBytesUsed(e) {
                    let t = 0;
                    for (let r in e.attributes) {
                        let o = e.getAttribute(r);
                        t += o.count * o.itemSize * o.array.BYTES_PER_ELEMENT
                    }
                    let r = e.getIndex();
                    return t + (r ? r.count * r.itemSize * r.array.BYTES_PER_ELEMENT : 0)
                }
                static mergeVertices(e, t = 1e-4) {
                    t = Math.max(t, Number.EPSILON);
                    let r = {},
                        i = e.getIndex(),
                        n = e.getAttribute("position"),
                        s = i ? i.count : n.count,
                        l = 0,
                        u = Object.keys(e.attributes),
                        a = {},
                        f = {},
                        m = [],
                        g = ["getX", "getY", "getZ", "getW"];
                    for (let t = 0, r = u.length; t < r; t++) {
                        let r = u[t];
                        a[r] = [];
                        let o = e.morphAttributes[r];
                        o && (f[r] = Array(o.length).fill().map(() => []))
                    }
                    let h = Math.log10(1 / t),
                        c = Math.pow(10, h);
                    for (let t = 0; t < s; t++) {
                        let o = i ? i.getX(t) : t,
                            n = "";
                        for (let t = 0, r = u.length; t < r; t++) {
                            let r = u[t],
                                i = e.getAttribute(r),
                                s = i.itemSize;
                            for (let e = 0; e < s; e++) n += `${~~(i[g[e]](o)*c)},`
                        }
                        if (n in r) m.push(r[n]);
                        else {
                            for (let t = 0, r = u.length; t < r; t++) {
                                let r = u[t],
                                    i = e.getAttribute(r),
                                    n = e.morphAttributes[r],
                                    s = i.itemSize,
                                    l = a[r],
                                    m = f[r];
                                for (let e = 0; e < s; e++) {
                                    let t = g[e];
                                    if (l.push(i[t](o)), n)
                                        for (let e = 0, r = n.length; e < r; e++) m[e].push(n[e][t](o))
                                }
                            }
                            r[n] = l, m.push(l), l++
                        }
                    }
                    let d = e.clone();
                    for (let t = 0, r = u.length; t < r; t++) {
                        let r = u[t],
                            i = e.getAttribute(r),
                            n = new i.array.constructor(a[r]),
                            s = new o.TlE(n, i.itemSize, i.normalized);
                        if (d.setAttribute(r, s), r in f)
                            for (let t = 0; t < f[r].length; t++) {
                                let i = e.morphAttributes[r][t],
                                    n = new i.array.constructor(f[r][t]),
                                    s = new o.TlE(n, i.itemSize, i.normalized);
                                d.morphAttributes[r][t] = s
                            }
                    }
                    return d.setIndex(m), d
                }
                static toTrianglesDrawMode(e, t) {
                    if (t === o.WwZ) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
                    if (t !== o.z$h && t !== o.UlW) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e;
                    {
                        let r = e.getIndex();
                        if (null === r) {
                            let t = [],
                                o = e.getAttribute("position");
                            if (void 0 === o) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                            for (let e = 0; e < o.count; e++) t.push(e);
                            e.setIndex(t), r = e.getIndex()
                        }
                        let i = r.count - 2,
                            n = [];
                        if (t === o.z$h)
                            for (let e = 1; e <= i; e++) n.push(r.getX(0)), n.push(r.getX(e)), n.push(r.getX(e + 1));
                        else
                            for (let e = 0; e < i; e++) e % 2 == 0 ? (n.push(r.getX(e)), n.push(r.getX(e + 1)), n.push(r.getX(e + 2))) : (n.push(r.getX(e + 2)), n.push(r.getX(e + 1)), n.push(r.getX(e)));
                        n.length / 3 !== i && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                        let s = e.clone();
                        return s.setIndex(n), s.clearGroups(), s
                    }
                }
                static computeMorphedAttributes(e) {
                    let t, r, i, n, s, l, u, a, f, m, g;
                    if (!0 !== e.geometry.isBufferGeometry) return console.error("THREE.BufferGeometryUtils: Geometry is not of type BufferGeometry."), null;
                    let h = new o.Pa4,
                        c = new o.Pa4,
                        d = new o.Pa4,
                        b = new o.Pa4,
                        p = new o.Pa4,
                        y = new o.Pa4,
                        A = new o.Pa4,
                        B = new o.Pa4,
                        E = new o.Pa4;

                    function w(e, t, r, o, i, n, s, l, u) {
                        h.fromBufferAttribute(r, n), c.fromBufferAttribute(r, s), d.fromBufferAttribute(r, l);
                        let a = e.morphTargetInfluences;
                        if (t.morphTargets && o && a) {
                            A.set(0, 0, 0), B.set(0, 0, 0), E.set(0, 0, 0);
                            for (let e = 0, t = o.length; e < t; e++) {
                                let t = a[e],
                                    r = o[e];
                                0 !== t && (b.fromBufferAttribute(r, n), p.fromBufferAttribute(r, s), y.fromBufferAttribute(r, l), i ? (A.addScaledVector(b, t), B.addScaledVector(p, t), E.addScaledVector(y, t)) : (A.addScaledVector(b.sub(h), t), B.addScaledVector(p.sub(c), t), E.addScaledVector(y.sub(d), t)))
                            }
                            h.add(A), c.add(B), d.add(E)
                        }
                        e.isSkinnedMesh && (e.boneTransform(n, h), e.boneTransform(s, c), e.boneTransform(l, d)), u[3 * n + 0] = h.x, u[3 * n + 1] = h.y, u[3 * n + 2] = h.z, u[3 * s + 0] = c.x, u[3 * s + 1] = c.y, u[3 * s + 2] = c.z, u[3 * l + 0] = d.x, u[3 * l + 1] = d.y, u[3 * l + 2] = d.z
                    }
                    let T = e.geometry,
                        G = e.material,
                        x = T.index,
                        U = T.attributes.position,
                        z = T.morphAttributes.position,
                        R = T.morphTargetsRelative,
                        S = T.attributes.normal,
                        v = T.morphAttributes.position,
                        M = T.groups,
                        X = T.drawRange,
                        H = new Float32Array(U.count * U.itemSize),
                        k = new Float32Array(S.count * S.itemSize);
                    if (null !== x) {
                        if (Array.isArray(G))
                            for (n = 0, l = M.length; n < l; n++)
                                for (f = G[(a = M[n]).materialIndex], m = Math.max(a.start, X.start), g = Math.min(a.start + a.count, X.start + X.count), s = m, u = g; s < u; s += 3) w(e, f, U, z, R, t = x.getX(s), r = x.getX(s + 1), i = x.getX(s + 2), H), w(e, f, S, v, R, t, r, i, k);
                        else
                            for (m = Math.max(0, X.start), g = Math.min(x.count, X.start + X.count), n = m, l = g; n < l; n += 3) w(e, G, U, z, R, t = x.getX(n), r = x.getX(n + 1), i = x.getX(n + 2), H), w(e, G, S, v, R, t, r, i, k)
                    } else if (void 0 !== U) {
                        if (Array.isArray(G))
                            for (n = 0, l = M.length; n < l; n++)
                                for (f = G[(a = M[n]).materialIndex], m = Math.max(a.start, X.start), g = Math.min(a.start + a.count, X.start + X.count), s = m, u = g; s < u; s += 3) w(e, f, U, z, R, t = s, r = s + 1, i = s + 2, H), w(e, f, S, v, R, t, r, i, k);
                        else
                            for (m = Math.max(0, X.start), g = Math.min(U.count, X.start + X.count), n = m, l = g; n < l; n += 3) w(e, G, U, z, R, t = n, r = n + 1, i = n + 2, H), w(e, G, S, v, R, t, r, i, k)
                    }
                    let I = new o.a$l(H, 3),
                        P = new o.a$l(k, 3);
                    return {
                        positionAttribute: U,
                        normalAttribute: S,
                        morphedPositionAttribute: I,
                        morphedNormalAttribute: P
                    }
                }
            }
        }
    }
]);