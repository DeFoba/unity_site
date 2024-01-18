(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [588], {
        8588: function(e, i, n) {
            "use strict";
            n.r(i), n.d(i, {
                default: function() {
                    return g
                }
            });
            var t = n(5893),
                s = n(7294),
                r = n(2212),
                o = n(4035),
                a = n(6038),
                l = n(7413),
                h = n(379),
                u = n(1856),
                d = n(7699),
                c = n.n(d),
                m = n(4932),
                p = n.n(m);
            class v {
                onParamsChanged() {
                    this.u.uCellSize.value = this.params.cellSize, this.u.uProgress.value = this.params.progress
                }
                addGUI(e) {
                    let i = this.params;
                    this.f1 = e.addFolder({
                        title: "Dithering"
                    }).on("change", this.onParamsChanged.bind(this)), this.f1.addInput(i, "cellSize", {
                        min: 5,
                        max: 30,
                        step: 1
                    }), this.f1.addInput(i, "progress", {
                        min: 0,
                        max: 1
                    })
                }
                onWindowResize() {
                    this.rTarget.setSize(o.Li.x, o.Li.y), this.u.uFlip.value = o.Li.x < 992 ? 1 : 0
                }
                renderScenePass(e, i) {
                    this.renderer.setRenderTarget(this.rTarget), this.renderer.render(e, i)
                }
                renderPostPass() {
                    this.renderer.setRenderTarget(null), this.renderer.render(this.postMesh, this.postCam)
                }
                constructor(e) {
                    this.renderer = e, this.params = {
                        cellSize: 8,
                        progress: 1
                    };
                    let i = {
                        minFilter: r.TyD,
                        magFilter: r.TyD,
                        stencilBuffer: !1,
                        depthBuffer: !1,
                        format: r.UCm
                    };
                    this.rTarget = new r.dd2(o.Li.x, o.Li.y, i);
                    let n = this.params,
                        t = new r.FIo({
                            uniforms: {
                                uTime: {
                                    value: 0
                                },
                                uMap: {
                                    value: this.rTarget.texture
                                },
                                uViewport: {
                                    value: o.Li
                                },
                                uCellSize: {
                                    value: n.cellSize
                                },
                                uProgress: {
                                    value: n.progress
                                },
                                uFlip: {
                                    value: 0
                                }
                            },
                            defines: {
                                SHADER_NAME: "PostDitheringShader"
                            },
                            vertexShader: c(),
                            fragmentShader: p(),
                            depthWrite: !1,
                            depthTest: !1
                        });
                    this.u = t.uniforms, this.postMesh = (0, u.Ic)(t), this.postCam = u.GJ
                }
            }
            class f {
                loadAssets() {
                    console.log("Init animation"), a.p8.to(this.ringEngine.params, {
                        radius: 5,
                        tubeThick: .3,
                        channels: 0,
                        noiseMag: 1,
                        noiseFreq: .3,
                        noiseMagAtProx: 1,
                        shadingMin: .3,
                        shadingMax: .8,
                        duration: 2,
                        onUpdate: () => {
                            this.ringEngine.onParamsChanged()
                        }
                    })
                }
                onHidden() {
                    cancelAnimationFrame(this.raf), this.raf = null, window.removeEventListener("resize", this.onWindowResize), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchstart", this.onMouseMove), window.removeEventListener("touchmove", this.onMouseMove)
                }
                onShow() {
                    null === this.raf && (window.addEventListener("resize", this.onWindowResize), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchstart", this.onMouseMove, {
                        passive: !0
                    }), window.addEventListener("touchmove", this.onMouseMove, {
                        passive: !0
                    }), this.onWindowResize(), this.render())
                }
                onProgressChange(e) {
                    this.post.u.uProgress.value = 1 - e
                }
                dispose() {
                    console.log("TODO: LosslessView should be disposing...")
                }
                render() {
                    if (this.raf = requestAnimationFrame(this.render.bind(this)), this.skipFrame = !this.skipFrame, this.skipFrame && !this.forceRender) return;
                    this.forceRender = !1;
                    let e = Math.min(this.clock.getDelta(), .5),
                        i = this.ringEngine.update(e, -50);
                    this.particles.update(e, i), this.post.params.progress > 0 ? (this.post.renderScenePass(this.scene, this.camera), this.post.renderPostPass()) : this.renderer.render(this.scene, this.camera)
                }
                constructor(e) {
                    this.onWindowResize = () => {
                        o.Li.x = window.innerWidth, o.Li.y = window.innerHeight, o.Li.z = o.Li.x / o.Li.y, this.renderer.setSize(o.Li.x, o.Li.y);
                        let e = o.Li.x / 2,
                            i = o.Li.y / 2;
                        if (this.renderer.setScissor(e - i, 0, o.Li.y, o.Li.y), this.camera.aspect = o.Li.z, this.camera.updateProjectionMatrix(), o.Li.x < 992) {
                            let e = r.M8C.degToRad(8 * o.Li.z),
                                i = Math.tan(e) * this.camera.position.z;
                            this.ringEngine.group.position.x = -i, this.renderer.setScissorTest(!1)
                        } else this.ringEngine.group.position.x = 0, this.renderer.setScissorTest(!0);
                        this.particles.onWindowResize(o.Li.y), this.post.onWindowResize(), this.forceRender = !0
                    }, this.onMouseMove = e => {
                        e.touches && e.touches.length ? this.ringEngine.onMouseMove(e.touches[0].pageX, e.touches[0].pageY) : this.ringEngine.onMouseMove(e.clientX, e.clientY)
                    };
                    let i = window.innerWidth,
                        n = window.innerHeight;
                    o.Li.set(i, n, i / n), this.domElement = e, this.skipFrame = !1, this.forceRender = !1, this.clock = new r.SUY, this.clock.start(), document.getElementById("appContainer"), this.renderer = new r.CP7({
                        antialias: !1,
                        canvas: e
                    }), this.renderer.setSize(i, n), this.scene = new r.xsS, this.camera = new r.cPb(20, o.Li.z, 1, 100), this.camera.position.z = 37, this.camera.lookAt(0, 0, 0), this.particles = new h.Z(16e4), this.scene.add(this.particles.mesh), this.ringEngine = new l.Z(this.renderer, this.camera, 400), this.scene.add(this.ringEngine.group), this.ringEngine.group.rotation.x = Math.PI / 2, this.ringEngine.group.position.y = 0, this.post = new v(this.renderer), this.loadAssets(), this.onWindowResize()
                }
            }
            var g = e => {
                let {
                    active: i = !1,
                    progress: n
                } = e, r = (0, s.useRef)(), o = (0, s.useRef)(), a = (0, s.useRef)(null);
                return (0, s.useEffect)(() => (a.current = new f(o.current, r.current), () => a.current.dispose()), []), (0, s.useEffect)(() => {
                    a.current.onProgressChange(n)
                }, [n]), (0, s.useEffect)(() => {
                    i ? a.current.onShow() : a.current.onHidden()
                }, [i]), (0, t.jsx)("div", {
                    ref: r,
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    children: (0, t.jsx)("canvas", {
                        ref: o
                    })
                })
            }
        },
        4932: function(e) {
            e.exports = "precision highp float;\n\n#define PI 3.14159265\n\nuniform float uTime;\nuniform float uFlip;\nuniform vec3 uViewport;\n// uniform float uDivisions;\nuniform float uCellSize;\nuniform float uProgress;\nuniform sampler2D uMap;\n\nvarying vec2 vUv;\n\n// Normalizes float from [min, max] -> [0.0, 1.0]\nfloat normFloat(float minVal, float maxVal, float num){\n    return max(0.0, min(1.0, (num-minVal) / (maxVal-minVal)));\n}\n\n// Maps from [min, max] -> [newMin, newMax]\nfloat map(float oldMin, float oldMax, float newMin, float newMax, float num) {\n    float normalized = normFloat(oldMin, oldMax, num);\n    return mix(newMin, newMax, normalized);\n}\n\nvoid main() {\n\n    //////////////// MOZAIC ////////////////\n    const float SAMPLES = 2.0;\n    const float EDGE_OFFSET = 0.005;\n    const float BORDER_SIZE = 1.0;\n    float tileSize = uCellSize;\n    vec2 tileNumber = floor(gl_FragCoord.xy / tileSize);\n\n    vec4 accum = vec4(0.0);\n    for (float y = 0.0; y < SAMPLES; ++y) {\n        for (float x = 0.0; x < SAMPLES; ++x) {\n            vec2 miniUV = (vec2(x, y) + 0.5) / SAMPLES;\n            vec2 sampleUV = (tileNumber + miniUV) * tileSize / uViewport.xy;\n            sampleUV = clamp(sampleUV, 0.0 + EDGE_OFFSET, 1.0 - EDGE_OFFSET);\n            accum += texture2D(uMap, sampleUV);\n        }\n    }\n    vec3 tileColor = accum.rgb / (SAMPLES * SAMPLES);\n\n    // Add border\n    vec2 pixelNumber = floor(gl_FragCoord.xy - (tileNumber * tileSize));\n    pixelNumber = mod(pixelNumber + BORDER_SIZE, tileSize);\n    float pixelBorder = step(min(pixelNumber.x, pixelNumber.y), BORDER_SIZE) * step(BORDER_SIZE * 2.0 + 1.0, tileSize);\n    tileColor *= pow(tileColor, vec3(pixelBorder));\n    tileColor = clamp(tileColor, 0.0, 1.0);\n\n    // Blue hue\n    tileColor = pow(tileColor, vec3(1.5, 1.5, 0.8));\n\n    // Portrait devices have coords flipped\n    vec2 cartLandscape = vec2(vUv.x - 0.5, -(vUv.y - 0.5));\n    vec2 cartPortrait = vec2(-(vUv.y - 0.5), vUv.x);\n\n    // Cartesian => polar coords\n    vec2 cart = mix(cartLandscape, cartPortrait, uFlip);\n    float arc = atan(cart.x, cart.y) / PI;\n\n    // Mask mosaic against texture\n    float mask = step(arc, uProgress - 1.0);\n    vec3 texture = texture2D(uMap, vUv).rgb;\n    vec3 finalColor = mix(texture, tileColor, mask);\n\n    gl_FragColor = vec4(finalColor, 1.0 );\n}\n"
        },
        7699: function(e) {
            e.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main() {\n	vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n"
        }
    }
]);