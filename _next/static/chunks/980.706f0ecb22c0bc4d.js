"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [980], {
        2980: function(t, e, s) {
            s.r(e), s.d(e, {
                default: function() {
                    return b
                }
            });
            var i = s(5893),
                o = s(7294),
                n = s(4184),
                r = s.n(n),
                a = s(4441),
                h = s(2677),
                l = s(8452),
                d = s(8502),
                c = s(2212),
                u = s(1217),
                m = s(2666),
                p = s(6038),
                w = s(4035),
                g = s(1856);
            class x {
                reset() {
                    this.startAngle = this.object.rotation.toVector3(), this.rotateDelta.setScalar(0), this.smoothDelta.setScalar(0)
                }
                update() {
                    return this.enabled ? (!this.mouseDown && this.autoRotate && (this.rotateDelta.x += this.autoRotSpeed), this.delta.x = this.rotateDelta.x / this.screenSize.x, this.delta.y = this.rotateDelta.y / this.screenSize.y, this.smoothDelta.x += (this.delta.x - this.smoothDelta.x) * this.smoothing, this.smoothDelta.y += (this.delta.y - this.smoothDelta.y) * this.smoothing, this.isTouch || (this.object.rotation.x = this.startAngle.x + this.smoothDelta.y * this.rotSpeed, this.object.rotation.x = Math.max(Math.min(this.object.rotation.x, this.maxRotX), -this.maxRotX)), this.object.rotation.y = this.startAngle.y + this.smoothDelta.x * this.rotSpeed, this.object.rotation.x %= 2 * Math.PI, this.object.rotation.y %= 2 * Math.PI, this.rotateDelta.x) : 0
                }
                onMouseDown(t) {
                    this.enabled && (this.mouseDown = !0, t.preventDefault(), this.smoothDelta.x = 0, this.smoothDelta.y = 0, this.rotateDelta.set(0, 0), this.startAngle.copy(this.object.rotation), this.rotateStart.set(t.clientX, t.clientY), this.rotateEnd.set(t.clientX, t.clientY))
                }
                onMouseUp(t) {
                    this.mouseDown = !1
                }
                onMouseOver(t) {
                    0 === t.buttons && (this.mouseDown = !1)
                }
                onMouseMove(t) {
                    this.enabled && this.mouseDown && (this.rotateEnd.set(t.clientX, t.clientY), this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart))
                }
                touchstart(t) {
                    1 === t.touches.length && this.handleTouchStartRotate(t)
                }
                handleTouchStartRotate(t) {
                    this.enabled && (this.smoothDelta.x = 0, this.smoothDelta.y = 0, this.rotateDelta.set(0, 0), this.startAngle.copy(this.object.rotation), this.rotateStart.set(t.touches[0].pageX, t.touches[0].pageY), this.rotateEnd.set(t.touches[0].pageX, t.touches[0].pageY))
                }
                onResize() {
                    this.screenSize.set(window.innerWidth, window.innerHeight)
                }
                touchmove(t) {
                    this.enabled && 1 === t.touches.length && (this.rotateEnd.set(t.touches[0].pageX, t.touches[0].pageY), this.rotateDelta.subVectors(this.rotateEnd, this.rotateStart))
                }
                constructor(t, e) {
                    this.isTouch = g.tq, this.object = t, this.domElement = e, this.mouseDown = !1, this.enabled = !0, this.rotSpeed = 6, this.smoothing = .1, this.autoRotSpeed = .6, this.maxRotX = Math.PI / 2, this.autoRotate = !0, this.rotateStart = new c.FM8, this.rotateEnd = new c.FM8, this.rotateDelta = new c.FM8, this.startAngle = this.object.rotation.toVector3(), this.screenSize = new c.FM8, this.smoothDelta = new c.FM8, this.delta = new c.FM8, this.domElement.addEventListener("mousedown", this.onMouseDown.bind(this)), this.domElement.addEventListener("mouseup", this.onMouseUp.bind(this)), this.domElement.addEventListener("mousemove", this.onMouseMove.bind(this)), this.domElement.addEventListener("mouseover", this.onMouseOver.bind(this)), this.domElement.addEventListener("touchstart", this.touchstart.bind(this), {
                        passive: !0
                    }), this.domElement.addEventListener("touchmove", this.touchmove.bind(this), {
                        passive: !0
                    }), this.domElement.addEventListener("resize", this.onResize.bind(this)), this.onResize()
                }
            }
            var C = s(7413),
                v = s(379);
            class E {
                loadAssets() {
                    this.settings.onLoadStart();
                    let t = new u.E,
                        e = 2,
                        s = () => {
                            --e <= 0 && (this.assetsLoaded = !0, this.playIntro())
                        };
                    t.load("./assets/webgl/headset3/Headphones.gltf", t => {
                        let e = t.scene.getObjectByName("Headset");
                        this.headset = e, e.material.envMapIntensity = 5, e.scale.setScalar(.9), e.position.y = -7, e.rotation.x = -.15, this.rotationGroup.add(e), s()
                    });
                    let i = new c.anP(this.renderer);
                    i.compileEquirectangularShader(), new m.x().setDataType(c.ywz).load("./assets/webgl/textures/unityEnv2.hdr", t => {
                        let e = i.fromEquirectangular(t).texture;
                        t.dispose(), i.dispose(), this.scene.environment = e, s()
                    }), this.ringIntroTL = p.p8.to(this.ringEngine.params, {
                        radius: .5,
                        shadingMax: .3,
                        noiseMag: 1,
                        tubeThick: .4,
                        duration: 2,
                        onUpdate: this.ringEngine.onParamsChanged(),
                        onComplete: () => {
                            this.ringIntroComplete = !0, this.playIntro()
                        }
                    })
                }
                playIntro() {
                    this.assetsLoaded && this.ringIntroComplete && (this.controls.autoRotate = !0, this.introTL = p.p8.timeline({
                        onComplete: () => this.onIntroComplete(),
                        onUpdate: () => this.ringEngine.onParamsChanged()
                    }), this.introTL.to(this.ringEngine.params, {
                        radius: 7,
                        duration: 3,
                        ease: "power2.inOut",
                        shadingMax: 1
                    }, 3), this.introTL.to(this.renderer, {
                        toneMappingExposure: 1,
                        ease: "power2.inOut",
                        duration: 4
                    }, 3), this.introTL.to(this.headset.position, {
                        y: .7,
                        ease: "power2.inOut",
                        duration: 4,
                        onStart: () => this.onIntroStart()
                    }, 3), this.introTL.to(this.rotationGroup.rotation, {
                        y: -Math.PI / 4,
                        duration: 4
                    }, 3))
                }
                onIntroStart() {
                    this.settings.onIntroStart()
                }
                onIntroComplete() {
                    this.render3d && (this.controls.reset(), this.controls.enabled = !0, this.settings.onControlsEnabled()), this.settings.onIntroComplete()
                }
                onHidden() {
                    cancelAnimationFrame(this.raf), this.raf = null, window.removeEventListener("resize", this.onWindowResize), this.domElement.removeEventListener("mousemove", this.onMouseMove), this.domElement.removeEventListener("touchstart", this.onMouseMove), this.domElement.removeEventListener("touchmove", this.onMouseMove)
                }
                onShow() {
                    null === this.raf && (window.addEventListener("resize", this.onWindowResize), this.domElement.addEventListener("mousemove", this.onMouseMove), this.domElement.addEventListener("touchstart", this.onMouseMove, {
                        passive: !0
                    }), this.domElement.addEventListener("touchmove", this.onMouseMove, {
                        passive: !0
                    }), this.onWindowResize(), this.render())
                }
                dispose() {
                    console.log("TODO: HeadsetView should be Disposing..."), this.introTL && this.introTL.kill(), this.ringIntroTL && this.ringIntroTL.kill(), this.introTL = null, this.ringIntroTL = null
                }
                render() {
                    if (!this.render3d) return;
                    let t = new Date,
                        e = 1e3 / (t - this.lastFrame);
                    if (this.lastFrame = t, e < this.lowFramerateThreshold ? this.lowFpsDuration++ : this.lowFpsDuration = 0, this.lowFpsDuration > this.lowFramerateMaxFrames && (this.render3d = !1, this.settings.onLowPerformance()), this.raf = requestAnimationFrame(this.render.bind(this)), this.skipFrame = !this.skipFrame, this.skipFrame && !this.forceRender) return;
                    this.forceRender = !1;
                    let s = Math.min(this.clock.getDelta(), .5),
                        i = this.controls.update(),
                        o = this.ringEngine.update(s, i);
                    this.particles.update(s, o), this.renderer.render(this.scene, this.camera)
                }
                constructor(t, e, s = {}) {
                    this.onWindowResize = () => {
                        w.Li.x = window.innerWidth, w.Li.y = window.innerHeight, w.Li.z = w.Li.x / w.Li.y, this.renderer.setSize(w.Li.x, w.Li.y), this.camera.aspect = w.Li.z, this.camera.updateProjectionMatrix();
                        let t = 1;
                        w.Li.z < 1 && (t = w.Li.z), this.rotationGroup.scale.setScalar(t), this.particles.onWindowResize(w.Li.y * t), this.forceRender = !0
                    }, this.onMouseMove = t => {
                        t.touches && t.touches.length ? this.ringEngine.onMouseMove(event.touches[0].pageX, event.touches[0].pageY) : this.ringEngine.onMouseMove(t.clientX, t.clientY)
                    }, this.settings = {
                        onLoadStart: () => {},
                        onIntroStart: () => {},
                        onIntroComplete: () => {},
                        onControlsEnabled: () => {},
                        onLowPerformance: () => {},
                        ...s
                    }, this.assetsLoaded = !1, this.ringIntroComplete = !1, this.introTL = null, this.ringIntroTL = null, this.domElement = e, this.raf = null;
                    let i = window.innerWidth,
                        o = window.innerHeight;
                    w.Li.set(i, o, i / o), this.skipFrame = !1, this.forceRender = !1, this.clock = new c.SUY, this.clock.start(), this.lastFrame = new Date, this.lowFpsDuration = 0, this.lowFramerateThreshold = 20, this.lowFramerateMaxFrames = 20, this.render3d = !0, this.renderer = new c.CP7({
                        antialias: !0,
                        canvas: t
                    }), this.renderer.autoClear = !1, this.renderer.toneMappingExposure = 0, this.renderer.toneMapping = c.EoG, this.renderer.setSize(i, o), this.scene = new c.xsS, this.camera = new c.cPb(20, w.Li.z, 1, 100), this.camera.position.z = 37, this.rotationGroup = new c.ZAu, this.rotationGroup.position.y = .5, this.rotationGroup.rotation.y = -Math.PI, this.scene.add(this.rotationGroup), this.controls = new x(this.rotationGroup, e), this.controls.autoRotate = !1, this.controls.enabled = !1, this.particles = new v.Z(16e4), this.scene.add(this.particles.mesh), this.ringEngine = new C.Z(this.renderer, this.camera, 400), this.rotationGroup.add(this.ringEngine.group), void 0 === this.headset && this.loadAssets(), this.onWindowResize()
                }
            }
            var M = () => (0, i.jsxs)("svg", {
                    width: "24",
                    height: "26",
                    viewBox: "0 0 24 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsx)("mask", {
                        id: "mask0",
                        "mask-type": "alpha",
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "24",
                        height: "24",
                        children: (0, i.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "11.5",
                            stroke: "white"
                        })
                    }), (0, i.jsxs)("g", {
                        mask: "url(#mask0)",
                        children: [(0, i.jsx)("rect", {
                            x: "-10",
                            y: "-8",
                            width: "20",
                            height: "20",
                            fill: "#C4C4C4"
                        }), (0, i.jsx)("rect", {
                            x: "-10",
                            y: "12",
                            width: "20",
                            height: "20",
                            fill: "#C4C4C4"
                        })]
                    }), (0, i.jsx)("circle", {
                        cx: "12.5",
                        cy: "23.5",
                        r: "2",
                        stroke: "white"
                    }), (0, i.jsx)("mask", {
                        id: "mask1",
                        "mask-type": "alpha",
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "24",
                        height: "24",
                        children: (0, i.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "11.5",
                            stroke: "white",
                            strokeLinejoin: "round",
                            strokeDasharray: "2 2"
                        })
                    }), (0, i.jsxs)("g", {
                        mask: "url(#mask1)",
                        children: [(0, i.jsx)("rect", {
                            x: "10",
                            y: "-4.20215",
                            width: "27.2205",
                            height: "17.3222",
                            fill: "#C4C4C4"
                        }), (0, i.jsx)("rect", {
                            x: "17",
                            y: "11.397",
                            width: "20.2205",
                            height: "20.2205",
                            fill: "#C4C4C4"
                        })]
                    }), (0, i.jsx)("path", {
                        d: "M7.11059 13.8284C6.46824 13.8284 6.15059 13.3766 6.07294 12.8613H5.15529C5.21176 13.8001 5.91059 14.5625 7.08235 14.5625C8.16235 14.5625 9.05882 14.0401 9.05882 13.0025C9.05882 12.4872 8.76235 11.986 8.23294 11.7601C8.62824 11.5413 8.92471 11.1389 8.92471 10.6378C8.92471 9.6707 8.04235 9.26129 7.18824 9.26129C6.00941 9.26129 5.31059 9.87541 5.19765 10.8989H6.12235C6.17176 10.3625 6.53882 9.99541 7.13176 9.99541C7.55529 9.99541 7.94353 10.2354 7.94353 10.6801C7.94353 11.1601 7.48471 11.4283 6.75059 11.4283H6.58118V12.1907H6.78588C7.51294 12.1907 8.07059 12.4307 8.07059 13.0307C8.07059 13.5107 7.64706 13.8284 7.11059 13.8284ZM10.8606 12.8119C10.8606 12.2119 11.263 11.8166 11.7995 11.8166C12.3289 11.8166 12.7171 12.2119 12.7171 12.8119C12.7171 13.4331 12.3289 13.8284 11.7995 13.8284C11.263 13.8284 10.8606 13.426 10.8606 12.8119ZM11.8418 10.0025C12.2653 10.0025 12.5971 10.2495 12.6465 10.6731H13.5995C13.543 10.0166 13.0206 9.26129 11.9053 9.26129C10.3736 9.26129 9.83006 10.5601 9.83006 12.0284C9.83006 13.4613 10.4301 14.5625 11.7995 14.5625C12.9077 14.5625 13.7053 13.8778 13.7053 12.826C13.7053 11.7178 12.9148 11.0754 11.9689 11.0754C11.4324 11.0754 11.023 11.2872 10.8042 11.5625C10.8042 10.6025 11.1924 10.0025 11.8418 10.0025ZM16.5354 14.5625C17.8907 14.5625 18.5896 13.4542 18.5896 11.9013C18.5896 10.3483 17.8907 9.26129 16.5354 9.26129C15.166 9.26129 14.4743 10.3483 14.4743 11.9013C14.4743 13.4542 15.166 14.5625 16.5354 14.5625ZM16.5354 13.8284C15.8366 13.8284 15.4696 13.1366 15.4696 11.9013C15.4696 10.666 15.8366 9.99541 16.5354 9.99541C17.2343 9.99541 17.5943 10.666 17.5943 11.9013C17.5943 13.1366 17.2343 13.8284 16.5354 13.8284Z",
                        fill: "white"
                    })]
                }),
                L = s(6686),
                y = s(8514),
                S = s.n(y);
            let D = t => {
                    let {
                        show: e = !1,
                        shrink: s = !1
                    } = t, n = (0, o.useRef)(), a = (0, l.kk)();
                    return (0, l.LI)(() => {
                        let t = window.requestAnimationFrame(() => {
                            n.current.style.transform = "translate(".concat(a.x, "px, ").concat(a.y, "px)")
                        });
                        return () => window.cancelAnimationFrame(t)
                    }, [a]), (0, i.jsx)("div", {
                        ref: n,
                        className: r()(S().glCursor, e && S().glCursorShow, s && S().glCursorShrink),
                        children: (0, i.jsx)("div", {
                            className: S().glCursorIcon
                        })
                    })
                },
                f = (0, o.memo)(t => {
                    let {
                        show: e
                    } = t;
                    return (0, i.jsx)("div", {
                        className: r()(S().glIndicator, e && S().glIndicatorShow),
                        children: (0, i.jsx)(M, {})
                    })
                });
            var b = t => {
                let {
                    hidden: e = !1,
                    onIntroStart: s = () => {},
                    onIntroComplete: n = () => {}
                } = t, l = (0, o.useRef)(), c = (0, o.useRef)(), u = (0, o.useRef)(null), m = (0, o.useRef)(null), p = (0, d.Pg)(), [w, g] = (0, o.useState)(!1), [x, C] = (0, o.useState)(!1), [v, M] = (0, o.useState)(!1), [y, b] = (0, o.useState)(!1), [j, k] = (0, o.useState)(!1), [I, R] = (0, d.Yl)(), F = v && j, T = x && j;
                (0, o.useEffect)(() => (m.current = new E(l.current, c.current, {
                    onLoadStart: () => g(!0),
                    onIntroStart: () => {
                        g(!1), s()
                    },
                    onIntroComplete: () => {
                        n()
                    },
                    onControlsEnabled: () => k(!0),
                    onLowPerformance: () => {
                        R(!1), k(!1)
                    }
                }), z(), () => {
                    m.current.dispose(), P()
                }), []), (0, o.useEffect)(() => {
                    e ? m.current.onHidden() : m.current.onShow()
                }, [e]);
                let z = () => {
                        P(), u.current = setTimeout(() => C(!0), 3e3)
                    },
                    P = () => {
                        u.current && clearTimeout(u.current)
                    };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: r()(S().heroGl, S().showCanvas, F && S().hideDefaultCursor),
                        children: (0, i.jsx)("div", {
                            ref: c,
                            className: S().glCanvasContainer,
                            onMouseLeave: () => {
                                M(!1), b(!1)
                            },
                            onMouseEnter: () => {
                                M(!0), b(!1)
                            },
                            onTouchStart: () => {
                                P(), C(!1)
                            },
                            onTouchEnd: () => z(),
                            onMouseDown: () => {
                                b(!0), P(), C(!1)
                            },
                            onMouseUp: () => {
                                b(!1), z()
                            },
                            children: (0, i.jsx)("canvas", {
                                ref: l
                            })
                        })
                    }), (0, i.jsx)(a.M, {
                        children: w && (0, i.jsx)(h.E.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1,
                                duration: 2
                            },
                            exit: {
                                opacity: 0,
                                duration: 1
                            },
                            className: S().glLoaderPosition,
                            children: (0, i.jsx)(L.Z, {})
                        })
                    }), (0, i.jsx)(f, {
                        show: T
                    }), !p && !e && (0, i.jsx)(D, {
                        show: F,
                        shrink: y
                    })]
                })
            }
        }
    }
]);