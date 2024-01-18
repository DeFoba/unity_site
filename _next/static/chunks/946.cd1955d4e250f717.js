(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [946], {
        4035: function(n, e, t) {
            "use strict";
            t.d(e, {
                Li: function() {
                    return i
                },
                rt: function() {
                    return r
                }
            });
            var a = t(2212);
            let i = new a.Pa4,
                o = new a.dpR().setPath("./assets/webgl/textures/"),
                r = o.load("./particle.png")
        },
        1856: function(n, e, t) {
            "use strict";
            t.d(e, {
                GJ: function() {
                    return u
                },
                Ic: function() {
                    return s
                },
                gn: function() {
                    return o
                },
                tq: function() {
                    return i
                }
            });
            var a = t(2212);
            let i = "ontouchstart" in window,
                o = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
            navigator.userAgent.toLowerCase().indexOf("android");
            let r = new a.u9r;

            function s(n) {
                let e = new a.Kj0(r, n);
                return e.background = null, e.matrixAutoUpdate = !1, e
            }
            r.setAttribute("position", new a.TlE(new Int8Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3)), r.setAttribute("uv", new a.TlE(new Int8Array([0, 0, 2, 0, 0, 2]), 2));
            let u = new a.V1s;
            u.matrixAutoUpdate = !1
        },
        379: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return m
                }
            });
            var a = t(2212),
                i = t(4035),
                o = t(700),
                r = t.n(o),
                s = t(6582),
                u = t.n(s);
            let l = new a.Ilk,
                h = [l.setHSL(.95, 1, .315).toArray(), l.setHSL(.63, .95, .279).toArray(), l.setHSL(.63, .95, .279).toArray(), l.setHSL(.63, .95, .279).toArray(), l.setHSL(.63, .95, .558).toArray(), l.setHSL(0, 1, .225).toArray()];
            class m {
                makeGeometry(n) {
                    let e, t;
                    let i = new Float32Array(3 * n),
                        o = new Float32Array(2 * n),
                        r = new Float32Array(n),
                        s = new Float32Array(n),
                        u = a.M8C.randFloat,
                        l = a.M8C.randInt;
                    h.length;
                    for (let a = 0, m = 0, d = 0; a < n; a++, m += 2, d += 3) e = a / n, t = l(0, 200) / 200, o[m + 0] = e, o[m + 1] = t, i[d + 0] = h[a % h.length][0], i[d + 1] = h[a % h.length][1], i[d + 2] = h[a % h.length][2], r[a] = u(100, 150), s[a] = u(.01, 1);
                    let m = new a.u9r;
                    return m.setAttribute("position", new a.TlE(i, 3)), m.setAttribute("uv", new a.TlE(o, 2)), m.setAttribute("size", new a.TlE(r, 1)), m.setAttribute("seed", new a.TlE(s, 1)), m
                }
                addGUI(n) {
                    let e = this.params;
                    this.f1 = n.addFolder({
                        title: "Blur",
                        expanded: !1
                    }).on("change", this.onGuiChanged.bind(this)), this.f1.addInput(e, "bokehBlur", {
                        min: 0,
                        max: 10
                    })
                }
                onGuiChanged() {
                    this.u.uBlurDOF.value = this.params.bokehBlur
                }
                onWindowResize(n) {
                    this.u.uWindowH.value = n / 1e3
                }
                update(n, e) {
                    this.u.uPosTex.value = e
                }
                constructor(n) {
                    this.params = {
                        enabled: !0,
                        bokehBlur: 1
                    };
                    let e = new a.FIo({
                            uniforms: {
                                uOpacity: {
                                    value: 1
                                },
                                uPosTex: {
                                    value: null
                                },
                                uBlurDOF: {
                                    value: 1
                                },
                                uEmissive: {
                                    value: i.rt
                                },
                                uWindowH: {
                                    value: i.Li.y / 1e3
                                }
                            },
                            defines: {
                                SHADER_NAME: "ParticleShader"
                            },
                            vertexShader: r(),
                            fragmentShader: u(),
                            depthWrite: !1,
                            transparent: !0,
                            blending: a.WMw
                        }),
                        t = this.makeGeometry(n);
                    this.mesh = new a.woe(t, e), this.mesh.rotation.x = Math.PI / 6, this.mesh.visible = this.params.enabled, this.u = e.uniforms
                }
            }
        },
        7413: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return d
                }
            });
            var a = t(2212),
                i = t(1856),
                o = t(4035),
                r = t(140);
            class s {
                onMouseMove(n, e) {
                    this.mouse.set(n / o.Li.x * 2 - 1, -(2 * (e / o.Li.y)) + 1), this.update()
                }
                update() {
                    this.hits.length = 0, this.ray.setFromCamera(this.mouse, this.camera), this.ray.intersectObject(this.hitMesh, !1, this.hits), this.hits.length > 0 && this.hitSpot.copy(this.hits[0].point)
                }
                constructor(n) {
                    let e = {
                            wireframe: !0,
                            side: a.ehD,
                            visible: !1
                        },
                        t = [new a.trn(1.2, 16).rotateX(-Math.PI / 2), new a.m_w(1, 1, 1, 16, 1, !0)],
                        i = r.O.mergeBufferGeometries(t);
                    this.hitMesh = new a.Kj0(i, new a.vBJ(e)), this.hitMesh.scale.set(7, 1, 7), this.camera = n, this.mouse = new a.FM8, this.hitSpot = new a.Pa4(0, 50, 0), this.ray = new a.iMs, this.hits = []
                }
            }
            var u = t(5891),
                l = t.n(u),
                h = t(5848),
                m = t.n(h);
            class d {
                onParamsChanged() {
                    this.u.uRadius.value = this.params.radius, this.u.uTubeThick.value = this.params.tubeThick, this.u.uChannels.value = Math.round(this.params.channels), this.u.uNoiseFreq.value = this.params.noiseFreq, this.u.uNoiseMag.value = this.params.noiseMag, this.u.uNoiseMagAtProx.value = this.params.noiseMagAtProx, this.u.uShadRange.value.set(this.params.shadingMin, this.params.shadingMax)
                }
                introAnimation() {}
                onMouseMove(n, e) {
                    this.raycast.onMouseMove(n, e)
                }
                addGUI(n) {
                    let e = this.params;
                    this.f1 = n.addFolder({
                        title: "Movement",
                        expanded: !1
                    }).on("change", this.onParamsChanged.bind(this)), this.f1.addInput(e, "radius", {
                        min: 0,
                        max: 10
                    }), this.f1.addInput(e, "tubeThick", {
                        min: 0,
                        max: 2
                    }), this.f1.addInput(e, "channels", {
                        min: 0,
                        max: 4,
                        step: 1
                    }), this.f1.addInput(e, "noiseSpeed", {
                        min: -2,
                        max: 2
                    }), this.f1.addInput(e, "noiseMag", {
                        min: 0,
                        max: 3
                    }), this.f1.addInput(e, "noiseFreq", {
                        min: 0,
                        max: 1
                    }), this.f1.addInput(e, "noiseMagAtProx", {
                        min: 0,
                        max: 1
                    }), this.f1.addSeparator(), this.f1.addInput(e, "shadingMin", {
                        min: 0,
                        max: 1
                    }), this.f1.addInput(e, "shadingMax", {
                        min: 0,
                        max: 1
                    })
                }
                renderDebug() {
                    this.devMat.map = this.rTargetActive.texture;
                    let n = this.rTargetActive.width,
                        e = this.rTargetActive.height;
                    this.renderer.setViewport(0, 0, n / 2, e / 2), this.renderer.render(this.devMesh, i.GJ), this.renderer.setViewport(0, 0, o.Li.x, o.Li.y)
                }
                update(n, e) {
                    return this.rTargetActive === this.rTarget1 ? (this.rTargetActive = this.rTarget2, this.rTargetInactive = this.rTarget1) : (this.rTargetActive = this.rTarget1, this.rTargetInactive = this.rTarget2), this.params.rotSpeed = a.M8C.clamp(-.005 * e, -.5, .5), this.u.uRotation.value += n * this.params.rotSpeed, this.u.uNoiseSeed.value += n * this.params.noiseSpeed, this.u.uPrevPos.value = this.rTargetInactive.texture, this.u.uMousePos.value.lerp(this.raycast.hitSpot, .2), this.renderer.setRenderTarget(this.rTargetActive), this.renderer.render(this.gpgpuMesh, i.GJ), this.renderer.setRenderTarget(null), this.rTargetActive.texture
                }
                constructor(n, e, t) {
                    this.renderer = n, this.raycast = new s(e), this.group = new a.ZAu, this.group.add(this.raycast.hitMesh), this.group.rotation.x = Math.PI / 6, this.group.position.y = -1, this.params = {
                        radius: 0,
                        tubeThick: 0,
                        channels: 1,
                        rotSpeed: .2,
                        noiseSpeed: .1,
                        noiseMag: 0,
                        noiseFreq: .6,
                        noiseMagAtProx: .1,
                        shadingMin: 0,
                        shadingMax: 0
                    };
                    let o = this.params,
                        r = new a.FIo({
                            uniforms: {
                                uRadius: {
                                    value: o.radius
                                },
                                uTubeThick: {
                                    value: o.tubeThick
                                },
                                uChannels: {
                                    value: o.channels
                                },
                                uRotation: {
                                    value: 100
                                },
                                uNoiseSeed: {
                                    value: 0
                                },
                                uNoiseMag: {
                                    value: o.noiseMag
                                },
                                uNoiseFreq: {
                                    value: o.noiseFreq
                                },
                                uNoiseMagAtProx: {
                                    value: o.noiseMagAtProx
                                },
                                uMousePos: {
                                    value: new a.Pa4
                                },
                                uShadRange: {
                                    value: new a.FM8(o.shadingMin, o.shadingMax)
                                },
                                uPrevPos: {
                                    value: null
                                },
                                uModelMatrix: {
                                    value: this.group.matrixWorld
                                }
                            },
                            defines: {
                                SHADER_NAME: "RingEngineShader"
                            },
                            vertexShader: l(),
                            fragmentShader: m(),
                            depthWrite: !1,
                            depthTest: !1
                        });
                    this.u = r.uniforms, this.gpgpuMesh = (0, i.Ic)(r);
                    let u = {
                        minFilter: a.TyD,
                        magFilter: a.TyD,
                        stencilBuffer: !1,
                        depthBuffer: !1,
                        format: a.wk1,
                        type: i.gn ? a.cLu : a.VzW
                    };
                    this.rTarget1 = new a.dd2(t, t, u), this.rTarget2 = new a.dd2(t, t, u), this.rTargetActive = this.rTarget1, this.rTargetInactive = this.rTarget2, this.devMat = new a.vBJ({
                        depthTest: !1
                    }), this.devMesh = (0, i.Ic)(this.devMat), this.onParamsChanged()
                }
            }
        },
        6582: function(n) {
            n.exports = "precision highp float;\n\nuniform float uOpacity;\nuniform float uTime;\nuniform sampler2D uEmissive;\nuniform float uBlurDOF;\n\nvarying vec3 vColor;\nvarying float vFresnel;\nvarying float vBlur;\n\n// Normalizes float from [min, max] -> [0.0, 1.0]\nfloat normFloat(float minVal, float maxVal, float num){\n    return max(0.0, min(1.0, (num-minVal) / (maxVal-minVal)));\n}\n\n// Maps from [min, max] -> [newMin, newMax]\nfloat map(float oldMin, float oldMax, float newMin, float newMax, float num) {\n    float normalized = normFloat(oldMin, oldMax, num);\n    return mix(newMin, newMax, normalized);\n}\n\nvoid main() {\n    //draw a circle\n    vec2 uv = gl_PointCoord;\n    float b = texture2D(uEmissive, uv).r;\n    float blurBrighter = map(1.0, 10.0, 1.0, 0.3, vBlur);\n    b = map(0.0, blurBrighter, 0.0, 1.0, b);\n\n    // Brightness increases with bokeh blur\n    // b *= map(1.0, 6.0, 1.0, 1.5, vBlur);\n\n    gl_FragColor = vec4(vColor, uOpacity ) * b * vFresnel;\n}\n"
        },
        700: function(n) {
            n.exports = "precision highp float;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 projectionMatrix;\nuniform sampler2D uPosTex;\nuniform float uWindowH;\nuniform float uBlurDOF;\n\nattribute vec3 position;\nattribute vec2 uv;\nattribute float size;\n\nvarying vec3 vColor;\nvarying float vFresnel;\nvarying float vBlur;\n\n#define TAU 6.28318530718\n#define PI 3.1415926535\n\n// Normalizes float from [min, max] -> [0.0, 1.0]\nfloat normFloat(float minVal, float maxVal, float num){\n    return max(0.0, min(1.0, (num-minVal) / (maxVal-minVal)));\n}\n\n// Maps from [min, max] -> [newMin, newMax]\nfloat map(float oldMin, float oldMax, float newMin, float newMax, float num) {\n    float normalized = normFloat(oldMin, oldMax, num);\n    return mix(newMin, newMax, normalized);\n}\n\nvoid main() {\n	// Using pos attribute for color\n	vColor = position;\n\n	// Actual position is extracted from RingEngine texture\n	vec4 texture = texture2D(uPosTex, uv);\n	vec4 pos = vec4(texture.rgb, 1.0);\n	vec4 mvPosition = viewMatrix * pos;\n	gl_Position = projectionMatrix * mvPosition;\n	\n	// Size depends on blur & windowHeight\n	float depth = -mvPosition.z - 37.0;\n	float blurDOF = map(0.0, 7.0, 1.0, uBlurDOF, depth);\n	float pointSize = size * uWindowH * blurDOF;\n	gl_PointSize = max(pointSize / -mvPosition.z, 2.0);\n\n	vFresnel = texture.a / blurDOF;\n	vBlur = blurDOF;\n}\n"
        },
        5848: function(n) {
            n.exports = "precision highp float;\nprecision highp int;\n#define TAU 6.28318530718\n#define PI 3.1415926535\n\nuniform mat4 uModelMatrix;\n\nuniform float uRadius;\nuniform float uTubeThick;\nuniform float uChannels;\nuniform float uRotation;\nuniform float uNoiseSeed;\nuniform float uNoiseMag;\nuniform float uNoiseFreq;\nuniform float uNoiseMagAtProx;\nuniform vec2 uShadRange;\nuniform vec3 uMousePos;\nuniform sampler2D uPrevPos;\n\nvarying vec2 vUv;\n\n\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n	return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x) {\n	return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x) {\n	return mod289(((x*34.0)+1.0)*x);\n}\nvec4 taylorInvSqrt(vec4 r) {\n	return 1.79284291400159 - 0.85373472095314 * r;\n}\nfloat snoise(vec3 v) {\n	const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n	const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n	\n	// First corner\n	\n	vec3 i = floor(v + dot(v, C.yyy) );\n	vec3 x0 = v - i + dot(i, C.xxx) ;\n	\n	// Other corners\n	\n	vec3 g = step(x0.yzx, x0.xyz);\n	vec3 l = 1.0 - g;\n	vec3 i1 = min( g.xyz, l.zxy );\n	vec3 i2 = max( g.xyz, l.zxy );\n	\n	//   x0 = x0 - 0.0 + 0.0 * C.xxx;\n	\n	//   x1 = x0 - i1  + 1.0 * C.xxx;\n	//   x2 = x0 - i2  + 2.0 * C.xxx;\n	//   x3 = x0 - 1.0 + 3.0 * C.xxx;\n	vec3 x1 = x0 - i1 + C.xxx;\n	vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n	\n	vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n	\n	\n	// Permutations\n	i = mod289(i);\n	vec4 p = permute( permute( permute(\n	i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n	+ i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n	+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n	\n	// Gradients: 7x7 points over a square, mapped onto an octahedron.\n	\n	// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n	float n_ = 0.142857142857; // 1.0/7.0\n	\n	vec3  ns = n_ * D.wyz - D.xzx;\n	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p, 7*7)\n	\n	\n	vec4 x_ = floor(j * ns.z);\n	vec4 y_ = floor(j - 7.0 * x_ );    // mod(j, N)\n	\n	\n	vec4 x = x_ *ns.x + ns.yyyy;\n	vec4 y = y_ *ns.x + ns.yyyy;\n	vec4 h = 1.0 - abs(x) - abs(y);\n	vec4 b0 = vec4( x.xy, y.xy );\n	vec4 b1 = vec4( x.zw, y.zw );\n	\n	//vec4 s0 = vec4(lessThan(b0, 0.0))*2.0 - 1.0;\n	\n	//vec4 s1 = vec4(lessThan(b1, 0.0))*2.0 - 1.0;\n	vec4 s0 = floor(b0)*2.0 + 1.0;\n	vec4 s1 = floor(b1)*2.0 + 1.0;\n	vec4 sh = -step(h, vec4(0.0));\n	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n	vec3 p0 = vec3(a0.xy, h.x);\n	vec3 p1 = vec3(a0.zw, h.y);\n	vec3 p2 = vec3(a1.xy, h.z);\n	vec3 p3 = vec3(a1.zw, h.w);\n	\n	//Normalise gradients\n	\n	vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n	p0 *= norm.x;\n	p1 *= norm.y;\n	p2 *= norm.z;\n	p3 *= norm.w;\n	\n	// Mix final noise value\n	\n	vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);\n	m = m * m;\n	return 42.0 * dot( m*m, vec4( dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3) ) );\n}\n\nvec2 snoiseVec2( vec3 x ){\n	float s0 = snoise(vec3( x ));\n	float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n	return vec2( s0, s1 );\n}\n\nvec3 snoiseVec3( vec3 x ){\n	float s0 = snoise(vec3( x ));\n	float s1 = snoise(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n	float s2 = snoise(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n	return vec3( s0, s1 , s2 );\n}\n\nfloat hash(float n) {\n	return fract(sin(n) * 1e4);\n}\n\n// Normalizes float from [min, max] -> [0.0, 1.0]\nfloat normFloat(float minVal, float maxVal, float num){\n    return max(0.0, min(1.0, (num-minVal) / (maxVal-minVal)));\n}\n\nfloat round(float x) {\n	return floor(x + 0.5);\n}\n\n// Maps from [min, max] -> [newMin, newMax]\nfloat map(float oldMin, float oldMax, float newMin, float newMax, float num) {\n    float normalized = normFloat(oldMin, oldMax, num);\n    return mix(newMin, newMax, normalized);\n}\n\n// Tween to target using Zeno's Paradox\nfloat zTween(float start, float target, float ratio){\n	return start + (target - start) * min(ratio, 1.0);\n}\n\n\nvoid main() {\n	// Random seed from UVs\n	float seed = hash(vUv.x + vUv.y * 400.0);\n	float seedTube = round(seed * uChannels) / uChannels;\n\n	// Use seed to vary thickness & velocity\n	float thickness = map(0.0, 1.0, uTubeThick, uTubeThick / max(uChannels + 1.0, 1.0), seedTube);\n	// float thickness = uTubeThick;\n	float rotVel = uRotation * (seed + 0.1) * 0.1;\n\n	// Create torus from UV coords\n	float u = (vUv.x + rotVel) * TAU;\n	float v = vUv.y * TAU;\n	float sinU = sin(u);\n	float cosU = cos(u);\n\n	// Normals from center of Torus\n	vec3 centerPos = vec3(\n		uRadius * cosU,\n		0.0,\n		uRadius * sinU\n	);\n\n	// Matrix transform center\n	vec3 worldCenter = (uModelMatrix * vec4(centerPos, 1.0)).xyz;\n	float mouseInfluence = distance(uMousePos, worldCenter);\n	mouseInfluence = smoothstep(2.0, 0.0, mouseInfluence);\n\n	// Torus shape\n	thickness += mouseInfluence;\n	float radTube = uRadius + thickness * cos(v);\n	vec3 torusPos = vec3(\n		radTube * cosU,\n		thickness * sin(v),\n		radTube * sinU\n	);\n\n	// Apply transform matrix\n	vec4 mPosition = uModelMatrix * vec4( torusPos, 1.0 );\n	vec3 targetPos = mPosition.xyz;\n\n	// Generate noise to add to torus\n	float camProximity = map(uRadius, -uRadius, uNoiseMagAtProx, 1.0, targetPos.z);\n	vec2 noise = snoiseVec2(targetPos * uNoiseFreq * camProximity + uNoiseSeed);\n	// Noise magnitude declines as it approaches cam\n	float noiseMag = uNoiseMag * camProximity * (1.0 - mouseInfluence);\n	targetPos.xy += noise.xy * noiseMag;\n\n	///////////////////////////// TEXTURE TWEENING /////////////////////////////\n	// Extract previous position from texture\n	vec3 prevPos = texture2D(uPrevPos, vUv).rgb;\n\n	// Tween from previous position to target position\n	// float seedTween = round(seed * 1.0) / 1.0;\n	float tweenSpeed = map(0.0, 1.0, 0.02, 0.3, seed);\n	vec3 pos = vec3(\n		zTween(prevPos.x, targetPos.x, tweenSpeed),\n		zTween(prevPos.y, targetPos.y, tweenSpeed),\n		zTween(prevPos.z, targetPos.z, tweenSpeed)\n	);\n\n	///////////////////////////// NORMALS FOR FRESNEL /////////////////////////////\n	vec3 normal = normalize(pos - worldCenter);\n	// Fresnel\n	float fresnel = abs(mouseInfluence - abs(dot(vec3(0.0, 0.0, 1.0), normal)));\n	// fresnel *= fresnel;\n	// fresnel = 1.0;\n\n	// Brightens when it needs to travel far\n	// float dist = abs(pos.y - targetPos.y);\n	// dist = map(0.0, 3.0, 0.0, 0.3, dist);\n	// fresnel += dist;\n\n	// Fades close to cam\n	fresnel = map(0.0, 1.0, uShadRange.x, uShadRange.y, fresnel);\n	fresnel += map(0.0, 1.0, 0.0, 0.5, mouseInfluence);\n	fresnel *= (camProximity + 0.5);\n	// fresnel *= 0.5;\n\n	gl_FragColor.rgb = pos;\n	gl_FragColor.a = fresnel;\n}\n"
        },
        5891: function(n) {
            n.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n	vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n"
        }
    }
]);