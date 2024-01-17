(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        5557: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return i(6916)
            }])
        },
        6916: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                __N_SSG: function() {
                    return e9
                },
                default: function() {
                    return te
                }
            });
            var s = i(5893),
                C = i(7294),
                l = i(2804),
                a = i(1163),
                r = i(5613),
                n = i.n(r),
                A = i(9601),
                c = i(8452),
                d = i(726),
                o = i(1844),
                h = i(8502),
                x = i(4046),
                p = i(2677),
                m = i(4184),
                j = i.n(m),
                u = i(1076),
                g = i.n(u);
            let w = {
                    show: {
                        opacity: 1,
                        display: "block",
                        transition: {
                            duration: 1,
                            staggerChildren: .08
                        }
                    },
                    hide: {
                        opacity: 0,
                        transition: {
                            duration: 1,
                            staggerChildren: .08,
                            staggerDirection: -1
                        },
                        transitionEnd: {
                            display: "none"
                        }
                    }
                },
                f = {
                    show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: .4
                        }
                    },
                    hide: {
                        opacity: 0,
                        x: -3,
                        transition: {
                            duration: .4
                        }
                    }
                },
                L = (0, C.memo)(e => {
                    let {
                        title: t,
                        index: i,
                        onClick: a = () => {}
                    } = e, {
                        isSafari: r
                    } = (0, h.AA)(), n = (0, l.sJ)((0, x.KI)(i)), A = (0, C.useRef)(), [d, o] = (0, C.useState)(!1), [m, u] = (0, C.useState)(!1), w = j()(g().item, d && g().itemActive, m && g().itemComplete);
                    (0, c.LI)(() => {
                        if (o(n > 0 && n < 1), u(1 === n), r) return;
                        let e = "".concat(Math.round(100 * n), "%"),
                            t = window.requestAnimationFrame(() => {
                                A.current.style.setProperty("--height", e)
                            });
                        return () => window.cancelAnimationFrame(t)
                    }, [n]);
                    let L = (0, C.useCallback)(() => {
                        a(i)
                    });
                    return (0, s.jsxs)(p.E.div, {
                        variants: f,
                        className: w,
                        onClick: L,
                        children: [(0, s.jsx)("span", {
                            className: g().label,
                            children: t
                        }), (0, s.jsx)("span", {
                            className: g().drip,
                            children: (0, s.jsx)("span", {
                                ref: A,
                                className: g().dripDrop
                            })
                        })]
                    })
                }),
                v = (0, C.memo)(e => {
                    let {
                        show: t,
                        children: i
                    } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: g().nav,
                            children: (0, s.jsx)(p.E.div, {
                                initial: "hide",
                                animate: t ? "show" : "hide",
                                variants: w,
                                className: g().itemsHolder,
                                children: i
                            })
                        }), (0, s.jsx)("div", {
                            className: g().backdrop
                        })]
                    })
                });
            var M = i(5152),
                V = i.n(M),
                b = i(7653),
                H = i(6038),
                _ = i(8514),
                E = i.n(_);
            let N = e => {
                let {
                    letter: t,
                    seed: i = 0,
                    progress: l = 0
                } = e, a = (0, C.useRef)(.5), r = (0, C.useRef)();
                return (0, C.useEffect)(() => {
                    let e = .5 + .3 * (0, b.jb)(i);
                    e = (0, b.uZ)(e, .5, .8), a.current = e
                }, [i]), (0, C.useEffect)(() => {
                    let e = (0, b.Qx)(1 - (0, d.hl)(l) * a.current * 2.4),
                        t = window.requestAnimationFrame(() => {
                            r.current.style.opacity = e
                        });
                    return () => window.cancelAnimationFrame(t)
                }, [l]), (0, s.jsx)("span", {
                    ref: r,
                    className: E().letter,
                    children: t
                })
            };
            var Z = e => {
                    let {
                        show: t = !1,
                        progress: i = 0,
                        onIntroComplete: l = () => {}
                    } = e, a = (0, C.useRef)(), r = (0, C.useRef)(), n = (0, C.useRef)(), A = (0, C.useRef)(), {
                        isSafari: o
                    } = (0, h.AA)();
                    return (0, c.LI)(() => {
                        let e = 200 * (0, d.eE)(i),
                            t = window.requestAnimationFrame(() => {
                                o || (a.current.style.setProperty("--shift", "".concat(e.toFixed(2), "px")), a.current.style.setProperty("--shift-mobile", "".concat((.5 * e).toFixed(2), "px")))
                            });
                        return () => window.cancelAnimationFrame(t)
                    }, [i]), (0, C.useEffect)(() => {
                        let e = {
                                opacity: 0
                            },
                            i = {
                                opacity: .999,
                                duration: 2,
                                ease: "power2.inOut"
                            };
                        if (t) {
                            let t = H.p8.timeline({
                                onComplete: l
                            });
                            t.fromTo(r.current, e, {
                                ...i
                            }), t.fromTo(n.current, e, {
                                ...i,
                                duration: 2.5
                            }, .8), t.fromTo(A.current, e, {
                                ...i,
                                duration: 3.1
                            }, 1.6)
                        }
                    }, [t]), (0, s.jsx)("div", {
                        ref: a,
                        className: E().tagline,
                        children: (0, s.jsx)("div", {
                            className: "container",
                            children: (0, s.jsxs)("h1", {
                                children: [(0, s.jsx)("span", {
                                    ref: r,
                                    className: j()(E().textFragment, "hero-title-alt"),
                                    children: "Lossless.".split("").map((e, t) => (0, s.jsx)(N, {
                                        letter: e,
                                        progress: i,
                                        seed: t
                                    }, "l1-".concat(t)))
                                }), (0, s.jsx)("span", {
                                    ref: n,
                                    className: j()(E().textFragment, "hero-title-alt"),
                                    children: "Wireless.".split("").map((e, t) => (0, s.jsx)(N, {
                                        letter: e,
                                        progress: i,
                                        seed: t + 10
                                    }, "l2-".concat(t)))
                                }), (0, s.jsx)("span", {
                                    ref: A,
                                    className: j()(E().textFragment, "hero-title"),
                                    children: "Limitless.".split("").map((e, t) => (0, s.jsx)(N, {
                                        letter: e,
                                        progress: i,
                                        seed: t + 20
                                    }, "l3-".concat(t)))
                                })]
                            })
                        })
                    })
                },
                y = i(9755),
                B = i.n(y),
                R = {
                    src: "/_next/static/media/hero.e2358070.jpg",
                    height: 1800,
                    width: 1800,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAQISAxNh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8Aj0Fi1u7duAAqj//Z",
                    blurWidth: 8,
                    blurHeight: 8
                },
                I = e => {
                    let {
                        hidden: t = !1,
                        onMount: i = () => {}
                    } = e, l = (0, C.useRef)(), a = (0, C.useRef)(), r = (0, c.Gc)(), [n, A] = (0, C.useState)(!1), [d, o] = (0, C.useState)(!1), [h, x] = (0, C.useState)(!1), p = "/assets/home/intro/01_Hero_".concat("mobile" === r ? 800 : 1440);
                    return (0, C.useEffect)(() => {
                        i(), A(!0)
                    }, []), (0, C.useEffect)(() => {
                        let e = l.current,
                            i = a.current;
                        t ? (e.pause(), i.removeAttribute("src"), e.load(), o(!1)) : (e.pause(), i.setAttribute("src", "".concat(p, ".mp4")), e.load())
                    }, [t]), (0, s.jsx)("div", {
                        className: j()(E().mediaFrame, n && E().mediaFrameShow),
                        children: (0, s.jsxs)("div", {
                            className: E().media,
                            children: [(0, s.jsx)("div", {
                                className: j()(E().mediaVideo, d && E().mediaVideoPlaying),
                                children: (0, s.jsx)("video", {
                                    ref: l,
                                    playsInline: !0,
                                    autoPlay: !0,
                                    muted: !0,
                                    loop: !0,
                                    onPlay: () => o(!0),
                                    onPlaying: () => o(!0),
                                    onError: () => x(!0),
                                    children: (0, s.jsx)("source", {
                                        ref: a,
                                        type: "video/mp4"
                                    })
                                })
                            }), h && (0, s.jsx)("div", {
                                className: E().mediaImage,
                                children: (0, s.jsx)(B(), {
                                    src: R,
                                    layout: "fill",
                                    quality: 90,
                                    priority: !0,
                                    alt: "Headphone hero image"
                                })
                            })]
                        })
                    })
                };
            let O = V()(() => Promise.all([i.e(737), i.e(140), i.e(558), i.e(946), i.e(980)]).then(i.bind(i, 2980)), {
                    loadableGenerated: {
                        webpack: () => [2980]
                    },
                    ssr: !1
                }),
                z = (0, C.memo)((0, C.forwardRef)((e, t) => {
                    let {
                        visible: i = !1,
                        interactive: C = !0,
                        onClick: l = () => {}
                    } = e;
                    return (0, s.jsx)("div", {
                        className: j()(E().scrollIndicator, i && E().scrollIndicatorVisible),
                        style: {
                            pointerEvents: C ? null : "none"
                        },
                        onClick: l,
                        title: "Discover Unity",
                        role: "button",
                        "aria-label": "Click to scroll down",
                        children: (0, s.jsx)("div", {
                            ref: t,
                            children: (0, s.jsx)("svg", {
                                width: "26",
                                height: "9",
                                viewBox: "0 0 26 9",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, s.jsx)("path", {
                                    d: "M25 1L13 8.05883L1 1",
                                    stroke: "white"
                                })
                            })
                        })
                    })
                })),
                k = (0, C.memo)(() => {
                    let e = (0, C.useRef)(),
                        t = (0, C.useRef)(),
                        [i, a] = (0, C.useState)(!1),
                        [r, n] = (0, C.useState)(!1),
                        [A, p] = (0, C.useState)(!1),
                        [m, u] = (0, C.useState)(!1),
                        [g, w] = (0, C.useState)(!1),
                        f = (0, c.s4)(),
                        L = (0, h.J9)(),
                        [v] = (0, h.Yl)(),
                        [M, V] = (0, c.xq)(),
                        H = (0, l.Zl)(x.yy);
                    (0, c.LI)(() => {
                        let e = (0, b.F7)(V, .01, .25);
                        w(1 === V), u(1 === e);
                        let i = (0, b.Qx)(1 - (0, b.lb)((0, d.eE)(e))),
                            s = window.requestAnimationFrame(() => {
                                t.current.style.opacity = i
                            });
                        return () => window.cancelAnimationFrame(s)
                    }, [V]), (0, C.useEffect)(() => {
                        p(f && r)
                    }, [f, r]);
                    let _ = (0, C.useCallback)(() => {
                        H(o.q[0].hash)
                    }, [H]);
                    return (0, s.jsxs)("div", {
                        ref: M,
                        className: j()(E().hero, g && E().heroIsHidden),
                        children: [(0, s.jsx)(Z, {
                            progress: V,
                            show: i,
                            onIntroComplete: () => n(!0)
                        }), (0, s.jsx)("div", {
                            ref: e,
                            className: E().graphic,
                            children: f && (L && v ? (0, s.jsx)(O, {
                                hidden: g,
                                onIntroStart: () => a(!0)
                            }) : (0, s.jsx)(I, {
                                hidden: g,
                                onMount: () => a(!0)
                            }))
                        }), (0, s.jsx)(z, {
                            ref: t,
                            visible: A,
                            onClick: _,
                            interactive: !m
                        })]
                    })
                }),
                S = (0, C.memo)(e => {
                    let {
                        fileNameBase: t,
                        inView: i = !1,
                        children: l
                    } = e, a = (0, C.useRef)(), r = (0, C.useRef)(), n = (0, C.useRef)(!1), [A, d] = (0, C.useState)(!1), o = (0, c.Gc)(), h = "/assets/home/intro/".concat(t, "_").concat("mobile" === o ? 800 : 1440);
                    return (0, C.useEffect)(() => {
                        let e = a.current,
                            t = r.current;
                        i ? !1 === n.current ? (t.setAttribute("src", "".concat(h, ".mp4")), e.load(), n.current = !0) : e.play() : e.pause()
                    }, [i]), (0, s.jsxs)("div", {
                        className: j()("intro-media__video", A && "is-playing"),
                        children: [(0, s.jsx)("video", {
                            ref: a,
                            playsInline: !0,
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            onCanPlay: () => a.current.play(),
                            onPlay: () => d(!0),
                            onPlaying: () => d(!0),
                            children: (0, s.jsx)("source", {
                                ref: r,
                                type: "video/mp4"
                            })
                        }), l]
                    })
                }),
                D = (0, C.memo)(e => {
                    let {
                        image: t,
                        imageAlt: i
                    } = e;
                    return (0, s.jsx)(B(), {
                        src: t,
                        layout: "fill",
                        alt: i,
                        quality: 100,
                        priority: !0,
                        className: "intro-media__image"
                    })
                }),
                Q = [{
                    title: "Qobuz",
                    img: {
                        src: "/_next/static/media/qobuz.58b65939.png",
                        height: 54,
                        width: 200,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEX+/v5iYmL////8/Pz///////////9sbGxqJIrEAAAACHRSTlNHzzskWk41s9r7ZxEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BkZ2ZiYWVjYGBkZGZhYGJgBQABzgAtPFPKOwAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 2
                    },
                    width: 97
                }, {
                    title: "Spotify",
                    img: {
                        src: "/_next/static/media/spotify.1af43fe8.png",
                        height: 200,
                        width: 200,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEX///////////////////9MaXH///////////////////////////+m09sOAAAADXRSTlPL/nyIwAAVDaHnZhGwWIKMygAAAAlwSFlzAAALEwAACxMBAJqcGAAAADdJREFUeJwtyrkBwDAMA7ETqcdWsv+8aYIa1AjcxRARQWN2V9eAbB3IK1kXFG+eE2byz/Uo010fIJYA8p/PEYcAAAAASUVORK5CYII=",
                        blurWidth: 8,
                        blurHeight: 8
                    },
                    width: 33
                }],
                F = (0, C.memo)(() => (0, s.jsx)("ul", {
                    className: "intro-featurette__icons",
                    children: Q.map((e, t) => {
                        let {
                            title: i,
                            img: C,
                            width: l
                        } = e;
                        return (0, s.jsx)("li", {
                            children: (0, s.jsx)("div", {
                                style: {
                                    width: l
                                },
                                children: (0, s.jsx)(B(), {
                                    src: C,
                                    alt: "".concat(i, " Logo"),
                                    priority: !0
                                })
                            })
                        }, "icon-".concat(t))
                    })
                }));
            var U = i(8863),
                P = i.n(U),
                J = i(6353);
            let Y = (0, C.memo)(e => {
                let {
                    title: t,
                    content: i,
                    showIcons: C
                } = e;
                return (0, s.jsxs)("div", {
                    className: "intro-featurette",
                    children: [(0, s.jsx)("div", {
                        className: "intro-featurette__title",
                        children: (0, s.jsx)("h3", {
                            className: "large-title",
                            children: t
                        })
                    }), (0, s.jsx)("div", {
                        className: "intro-featurette__content p-lg",
                        children: (0, s.jsx)(P(), {
                            blocks: i,
                            serializers: J.f
                        })
                    }), C && (0, s.jsx)("div", {
                        className: "intro-featurette__footer",
                        children: (0, s.jsx)(F, {})
                    })]
                })
            });
            var G = {
                    src: "/_next/static/media/04_Universe_foreground.07502bcf.png",
                    height: 2160,
                    width: 2160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXEQEyoMHDcYFTMTEywYHjwXFy4NFy4EDhyUDVhKAAAACXRSTlMARF01GhULhGySL/6MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nGNgQAJsbBCalZGRFcxgZGFhBDPYmTjYwQxmJiZmZC0wAAAKvwBFpIi/cgAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                q = {
                    src: "/_next/static/media/headphones-1.f152f70e.png",
                    height: 2160,
                    width: 2160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUAAAAHDSEIBhIVGDAVJE8dPWwQj5ZgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nGNgQAZMUJqRmRlCMzKygsUZmVjgDIgUGgAABhUALKqh9gYAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                K = {
                    src: "/_next/static/media/headphones-2.a59a1e15.png",
                    height: 2160,
                    width: 2160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEUAAAIKIEEEChgJFDAbKFYFLFpGmChSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nGNgQAZMMJqFEcJgZGYG08wsjIxgSWYWVlaoKphiMAAABkEAMbSSETcAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                T = {
                    src: "/_next/static/media/profile.77f1c58e.jpg",
                    height: 3192,
                    width: 1591,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQISAxExYf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAMAwEAAhEDEQA/AJBleOdFHUaRq3rvoALof//Z",
                    blurWidth: 4,
                    blurHeight: 8
                },
                W = {
                    src: "/_next/static/media/sound.e39ac4cd.jpg",
                    height: 2160,
                    width: 2160,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAXEAEAAwAAAAAAAAAAAAAAAAAAEiEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AjlR0Bdo//9k=",
                    blurWidth: 8,
                    blurHeight: 8
                };
            let X = e => {
                let {
                    number: t,
                    title: i,
                    content: C,
                    image: l,
                    imageAlt: a,
                    videoFileNameBase: r,
                    videoForegroundImage: n,
                    mediaMask: A = !1,
                    showIcons: d = !1,
                    active: o = !1
                } = e, [h, x] = (0, c.YD)({
                    rootMargin: "1000px",
                    threshold: 0
                });
                return (0, s.jsxs)("div", {
                    ref: h,
                    className: j()("intro-section", "section-".concat(t), o && "is-active"),
                    children: [(0, s.jsx)("div", {
                        className: "intro-content",
                        children: (0, s.jsx)("div", {
                            className: "section-container",
                            children: (0, s.jsx)(Y, {
                                title: i,
                                content: C,
                                showIcons: d
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: "intro-media-wrapper",
                        children: (0, s.jsxs)("div", {
                            className: "intro-media",
                            children: [A && (0, s.jsx)("div", {
                                className: "intro-media__mask"
                            }), r && (0, s.jsx)(S, {
                                fileNameBase: r,
                                inView: x,
                                children: n && (0, s.jsx)(D, {
                                    image: n
                                })
                            }), (0, s.jsx)(D, {
                                image: l,
                                imageAlt: a
                            })]
                        })
                    })]
                })
            };
            var $ = {
                src: "/_next/static/media/lossless.7744ff3c.png",
                height: 1800,
                width: 1800,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVMaXF/BP+WAP99Bf9uAf9nAP+ABv97B/+DBP95CP91A/9dB/92Af+NBv8MwrgnAAAADnRSTlMAVAWmOhZicUYcISKQfO3OH9IAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA3SURBVHicHcs5EoAwEASxHu9tw/+/S5lMiYBoDYC/WdYQueBY4M1alHD9SOI5MLbBrdJ020gbPiJxAO6NPjBqAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            };
            let ee = V()(() => Promise.all([i.e(737), i.e(140), i.e(946), i.e(588)]).then(i.bind(i, 8588)), {
                loadableGenerated: {
                    webpack: () => [8588]
                },
                ssr: !1
            });
            var et = e => {
                let {
                    active: t = !1,
                    progress: i
                } = e, C = (0, h.J9)();
                return (0, s.jsx)("div", {
                    className: j()("btlss-bg", t && "is-active"),
                    children: (0, s.jsx)("div", {
                        className: "btlss-bg__scale",
                        children: (0, s.jsx)("div", {
                            className: "btlss-bg__content",
                            children: C ? (0, s.jsx)(ee, {
                                active: t,
                                progress: i
                            }) : (0, s.jsx)(B(), {
                                src: $,
                                layout: "fill",
                                objectFit: "contain",
                                alt: ""
                            })
                        })
                    })
                })
            };
            let ei = () => (0, s.jsx)("div", {
                    className: "btlss-icon",
                    children: (0, s.jsxs)("svg", {
                        width: "83",
                        height: "21",
                        viewBox: "0 0 83 21",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M18.4551 3.25012H22.0351C24.6435 3.25012 25.7921 4.62118 25.7921 7.12658C25.7921 8.35462 25.2656 9.63198 24.1122 10.1301C25.3518 10.6775 26.0601 11.6787 26.0601 13.5479C26.0601 15.9645 25.0407 17.74 22.3031 17.74H18.4742V3.25012H18.4551ZM20.8864 9.21771H21.7718C22.7003 9.21771 23.3608 8.5815 23.3608 7.35346C23.3608 6.03171 22.8822 5.30179 21.8149 5.30179H20.8864V9.21771ZM20.8864 15.6884H21.9058C23.1837 15.6884 23.6719 14.9584 23.6719 13.5035C23.6719 12.0486 23.0976 11.2694 21.6809 11.2694H20.8864V15.7081V15.6884Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M27.0317 3.25505H29.195V17.74H27.0317V3.25505Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M37.2021 6.9441V17.74H35.168V16.6895C34.2395 17.4638 33.7322 17.9669 32.5118 17.9669C31.3631 17.9669 30.6596 17.0989 30.6596 15.6884V6.9441H32.8659V15.3283C32.8536 15.4331 32.8645 15.5393 32.8979 15.6391C32.9313 15.7388 32.9862 15.8294 33.0586 15.9041C33.131 15.9787 33.219 16.0353 33.3158 16.0697C33.4126 16.1041 33.5157 16.1154 33.6173 16.1026C34.1586 16.0562 34.6668 15.8153 35.0532 15.422V6.9441H37.2021Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M40.7629 12.7736V14.3222C40.7629 15.5996 41.2033 16.0977 41.9547 16.0977C42.7061 16.0977 43.1943 15.6045 43.1943 14.3222V14.0953H45.3576C45.3145 16.3739 44.4004 17.9669 41.9547 17.9669C39.509 17.9669 38.6044 16.3246 38.6044 13.9573V10.7713C38.6044 8.39901 39.4898 6.76162 41.9547 6.76162C44.4195 6.76162 45.3576 8.39901 45.3576 10.7713V12.7736H40.7629ZM43.156 10.9685V10.3767C43.156 9.14865 42.7109 8.64561 41.9164 8.64561C41.1219 8.64561 40.7247 9.13879 40.7247 10.3767V10.9685H43.156Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M46.0276 8.80836V6.9441H47.2672V4.06388H49.4305V6.93424H50.8903V8.7985H49.4305V14.9979C49.4305 15.5897 49.6507 15.9054 50.1819 15.9054H50.8903V17.8189C50.5319 17.9289 50.1581 17.9755 49.7847 17.957C48.1479 17.957 47.2672 17.1827 47.2672 15.4911V8.80836H46.0276Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M51.8331 10.7713C51.8331 8.39901 52.7185 6.76162 55.1834 6.76162C57.6482 6.76162 58.5863 8.39901 58.5863 10.7713V13.9573C58.5863 16.3246 57.6578 17.9669 55.1834 17.9669C52.709 17.9669 51.8331 16.3246 51.8331 13.9573V10.7713ZM56.3895 10.357C56.3895 9.12894 55.9874 8.62588 55.1929 8.62588C54.3984 8.62588 54.0012 9.11907 54.0012 10.357V14.3025C54.0012 15.5799 54.4415 16.078 55.1929 16.078C55.9444 16.078 56.3895 15.5848 56.3895 14.3025V10.357Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M59.7493 10.7713C59.7493 8.39901 60.6299 6.76162 63.0995 6.76162C65.5691 6.76162 66.5024 8.39901 66.5024 10.7713V13.9573C66.5024 16.3246 65.617 17.9669 63.0995 17.9669C60.5821 17.9669 59.7493 16.3246 59.7493 13.9573V10.7713ZM64.3439 10.357C64.3439 9.12894 63.9036 8.62588 63.1091 8.62588C62.3146 8.62588 61.9126 9.11907 61.9126 10.357V14.3025C61.9126 15.5799 62.3529 16.078 63.1091 16.078C63.8653 16.078 64.3439 15.5848 64.3439 14.3025V10.357Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M67.1725 8.80836V6.9441H68.369V4.06388H70.5323V6.93424H72.0351V8.7985H70.5323V14.9979C70.5323 15.5897 70.8003 15.9054 71.2837 15.9054H72.0351V17.8189C71.6762 17.9259 71.3029 17.9726 70.9295 17.957C69.2975 17.957 68.369 17.1827 68.369 15.4911V8.80836H67.1725Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M73.3608 17.74V3.25012H75.572V7.94527C76.3713 7.25974 76.8116 6.76162 78.0943 6.76162C79.2429 6.76162 79.9082 7.6247 79.9082 9.04016V17.74H77.7401V9.40019C77.7401 8.85768 77.429 8.62588 76.9456 8.62588C76.4261 8.68906 75.9423 8.93053 75.572 9.31142V17.74H73.3608Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.37562 5.213L10.0555 6.9441L8.37562 8.6752V5.213ZM8.37562 15.8264L10.0555 14.0953L8.37562 12.3642V15.8264ZM6.5617 10.4753L2.953 6.76162L4.01551 5.66674L6.88715 8.6752V1.47463L12.1901 6.9441L8.69629 10.4753L12.1853 14.0756L6.88237 19.5007V12.3495L4.01073 15.353L2.953 14.2778L6.57606 10.4951L6.5617 10.4753ZM7.51891 21C11.9843 21 15.033 18.8102 15.033 10.4753C15.033 2.14044 11.9843 0 7.51891 0C3.05351 0 0 2.18482 0 10.4753C0 18.7659 3.09658 21 7.51891 21Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M80.9659 3.25505V3.57562H80.5687V5.12423H80.2145V3.57562H79.8173V3.25505H80.9659Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M81.4062 5.12423V3.25505H81.8944L82.2055 4.48309L82.5118 3.25505H83V5.12423H82.6889V3.66439L82.3347 5.12423H82.0715L81.7173 3.66439V5.12423H81.4062Z",
                            fill: "white"
                        })]
                    })
                }),
                es = () => (0, s.jsx)("div", {
                    className: "btlss-icon",
                    children: (0, s.jsxs)("svg", {
                        width: "85",
                        height: "50",
                        viewBox: "0 0 85 50",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            d: "M4.58047 21.2588C4.48811 21.2588 4.39782 21.2314 4.32102 21.1801C4.24423 21.1288 4.18437 21.0559 4.14903 20.9706C4.11368 20.8852 4.10443 20.7914 4.12245 20.7008C4.14047 20.6102 4.18495 20.5271 4.25026 20.4618C4.31557 20.3965 4.39878 20.352 4.48937 20.334C4.57995 20.316 4.67385 20.3252 4.75918 20.3606C4.84451 20.3959 4.91744 20.4557 4.96876 20.5325C5.02007 20.6093 5.04746 20.6996 5.04746 20.7919C5.04746 20.8532 5.03538 20.9139 5.01191 20.9706C4.98844 21.0272 4.95405 21.0787 4.91068 21.122C4.86732 21.1654 4.81584 21.1998 4.75918 21.2232C4.70252 21.2467 4.6418 21.2588 4.58047 21.2588Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M7.68296 23.0303C7.95854 23.0303 8.18194 22.8069 8.18194 22.5314C8.18194 22.2559 7.95854 22.0326 7.68296 22.0326C7.40738 22.0326 7.18398 22.2559 7.18398 22.5314C7.18398 22.8069 7.40738 23.0303 7.68296 23.0303Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M0.390227 15.4005C0.314053 15.4018 0.239225 15.3804 0.175269 15.339C0.111313 15.2976 0.0611225 15.2381 0.031088 15.1681C0.00105352 15.0981 -0.00746816 15.0208 0.00661161 14.9459C0.0206914 14.8711 0.056736 14.8021 0.110152 14.7478C0.163568 14.6935 0.231938 14.6563 0.306563 14.641C0.381188 14.6256 0.458689 14.6328 0.529198 14.6617C0.599707 14.6905 0.660035 14.7397 0.7025 14.8029C0.744965 14.8662 0.767648 14.9406 0.767659 15.0168C0.768508 15.0669 0.759373 15.1166 0.740786 15.1631C0.722199 15.2097 0.694532 15.252 0.659399 15.2877C0.624266 15.3235 0.58237 15.3518 0.536156 15.3712C0.489942 15.3906 0.440335 15.4005 0.390227 15.4005Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M16.9014 19.1098C16.7921 19.111 16.6848 19.0797 16.5934 19.0197C16.5019 18.9598 16.4304 18.874 16.388 18.7732C16.3456 18.6724 16.3341 18.5613 16.3552 18.4541C16.3762 18.3468 16.4287 18.2482 16.506 18.1709C16.5834 18.0936 16.682 18.0411 16.7893 18.02C16.8966 17.999 17.0077 18.0105 17.1085 18.0529C17.2093 18.0953 17.2952 18.1668 17.3551 18.2582C17.4151 18.3496 17.4464 18.4568 17.4452 18.5662C17.4452 18.7103 17.3879 18.8486 17.2859 18.9505C17.1839 19.0525 17.0456 19.1098 16.9014 19.1098Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M20.4708 12.9064C20.7782 12.9064 21.0273 12.6573 21.0273 12.35C21.0273 12.0427 20.7782 11.7935 20.4708 11.7935C20.1634 11.7935 19.9142 12.0427 19.9142 12.35C19.9142 12.6573 20.1634 12.9064 20.4708 12.9064Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M23.8869 6.58742C24.1837 6.58742 24.4243 6.3469 24.4243 6.0502C24.4243 5.7535 24.1837 5.51298 23.8869 5.51298C23.5902 5.51298 23.3496 5.7535 23.3496 6.0502C23.3496 6.3469 23.5902 6.58742 23.8869 6.58742Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M32.6317 1.36874C32.5393 1.36874 32.4491 1.34136 32.3723 1.29006C32.2955 1.23876 32.2356 1.16585 32.2003 1.08054C32.1649 0.995229 32.1557 0.901356 32.1737 0.810792C32.1917 0.720228 32.2362 0.63704 32.3015 0.571747C32.3668 0.506454 32.45 0.461991 32.5406 0.443976C32.6312 0.425962 32.7251 0.435208 32.8104 0.470544C32.8957 0.505881 32.9687 0.565717 33.02 0.642493C33.0713 0.71927 33.0987 0.809537 33.0987 0.901876C33.0987 1.0257 33.0495 1.14445 32.9619 1.232C32.8743 1.31956 32.7556 1.36874 32.6317 1.36874Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M29.1006 1.80354C29.0354 1.80438 28.9706 1.79227 28.9101 1.7679C28.8496 1.74353 28.7946 1.70739 28.7481 1.66158C28.7017 1.61577 28.6649 1.5612 28.6397 1.50103C28.6146 1.44086 28.6016 1.3763 28.6016 1.31109C28.6016 1.17878 28.6542 1.0519 28.7478 0.958347C28.8413 0.864795 28.9683 0.812239 29.1006 0.812239C29.2329 0.812239 29.3598 0.864795 29.4534 0.958347C29.547 1.0519 29.5996 1.17878 29.5996 1.31109C29.5996 1.3763 29.5866 1.44086 29.5615 1.50103C29.5363 1.5612 29.4995 1.61577 29.453 1.66158C29.4066 1.70739 29.3516 1.74353 29.2911 1.7679C29.2306 1.79227 29.1658 1.80438 29.1006 1.80354Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M38.5235 5.01416C38.4489 5.01416 38.3759 4.99203 38.3139 4.95057C38.2518 4.90911 38.2034 4.85017 38.1748 4.78122C38.1463 4.71228 38.1388 4.6364 38.1534 4.56321C38.1679 4.49001 38.2039 4.42278 38.2567 4.37001C38.3094 4.31724 38.3767 4.2813 38.4499 4.26674C38.5231 4.25218 38.599 4.25965 38.668 4.28821C38.7369 4.31677 38.7959 4.36514 38.8374 4.42719C38.8788 4.48924 38.901 4.56219 38.901 4.63682C38.9018 4.68661 38.8927 4.73607 38.874 4.78224C38.8553 4.82842 38.8276 4.87036 38.7924 4.90557C38.7571 4.94078 38.7152 4.96855 38.669 4.9872C38.6228 5.00586 38.5733 5.01503 38.5235 5.01416Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M7.87486 11.6654L7.91324 11.7357C7.95367 11.7776 7.98387 11.8283 8.00145 11.8838C8.01903 11.9393 8.02353 11.9981 8.0146 12.0556C8.00566 12.1132 7.98353 12.1678 7.94994 12.2154C7.91635 12.2629 7.87221 12.3021 7.82097 12.3297C7.76973 12.3574 7.71279 12.3728 7.65459 12.3748C7.59639 12.3768 7.53852 12.3653 7.48551 12.3413C7.43249 12.3172 7.38577 12.2812 7.34899 12.236C7.31222 12.1909 7.28639 12.1379 7.27353 12.0811V12.0107C7.25179 11.9667 7.23901 11.9188 7.23594 11.8698C7.23286 11.8208 7.23955 11.7716 7.25562 11.7252C7.27169 11.6788 7.29681 11.6361 7.32954 11.5994C7.36226 11.5628 7.40193 11.5331 7.44625 11.5119C7.52459 11.4862 7.60926 11.4874 7.68687 11.5152C7.76448 11.543 7.83063 11.5958 7.87486 11.6654Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M9.5191 14.7417L9.60226 14.8824C9.65909 14.9834 9.6735 15.1027 9.64231 15.2143C9.61112 15.3258 9.53688 15.4204 9.43593 15.4772C9.33498 15.534 9.21559 15.5484 9.10402 15.5173C8.99245 15.4861 8.89784 15.4119 8.841 15.3109L8.76423 15.1638C8.71244 15.0619 8.70287 14.9437 8.73759 14.8348C8.77231 14.7259 8.84853 14.635 8.94975 14.5818C9.04703 14.5303 9.16042 14.5181 9.26642 14.5479C9.37243 14.5777 9.4629 14.6471 9.5191 14.7417Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M13.6644 20.3121L13.7796 20.4144C13.8401 20.4578 13.891 20.5133 13.9289 20.5774C13.9669 20.6416 13.9911 20.7129 14 20.7868C14.0089 20.8608 14.0023 20.9358 13.9806 21.0071C13.959 21.0783 13.9227 21.1443 13.8742 21.2009C13.8257 21.2574 13.7659 21.3032 13.6987 21.3354C13.6316 21.3676 13.5584 21.3855 13.4839 21.3879C13.4095 21.3903 13.3353 21.3772 13.2662 21.3495C13.197 21.3217 13.1344 21.2799 13.0823 21.2266L12.9544 21.1115C12.8623 21.0145 12.8097 20.8866 12.8069 20.7529C12.8041 20.6191 12.8514 20.4892 12.9393 20.3884C13.0273 20.2876 13.1498 20.2233 13.2827 20.208C13.4156 20.1927 13.5495 20.2275 13.658 20.3057L13.6644 20.3121Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M16.5559 21.9687L16.6966 22.0071C16.7689 22.0268 16.8365 22.0606 16.8957 22.1065C16.9549 22.1524 17.0045 22.2094 17.0416 22.2745C17.0787 22.3395 17.1027 22.4112 17.1121 22.4855C17.1215 22.5598 17.1162 22.6352 17.0964 22.7074C17.0767 22.7796 17.0429 22.8473 16.997 22.9064C16.9511 22.9656 16.894 23.0152 16.829 23.0523C16.764 23.0894 16.6922 23.1134 16.6179 23.1228C16.5436 23.1322 16.4682 23.1269 16.396 23.1071L16.2296 23.056C16.0934 23.0078 15.9806 22.9097 15.9141 22.7815C15.8476 22.6533 15.8323 22.5046 15.8713 22.3655C15.9103 22.2264 16.0008 22.1074 16.1244 22.0326C16.2479 21.9577 16.3953 21.9326 16.5367 21.9623L16.5559 21.9687Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M19.8311 22.0964L19.9783 22.0644C20.1302 22.0429 20.2846 22.0804 20.4098 22.169C20.5351 22.2576 20.6217 22.3908 20.6519 22.5412C20.6822 22.6915 20.6538 22.8478 20.5725 22.9779C20.4913 23.1081 20.3634 23.2023 20.215 23.2412H20.0422C19.8862 23.2713 19.7246 23.2384 19.5927 23.1497C19.4609 23.061 19.3695 22.9237 19.3385 22.7679C19.3179 22.6131 19.3547 22.4561 19.4419 22.3265C19.5291 22.1969 19.6607 22.1036 19.8119 22.0644L19.8311 22.0964Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M25.1408 18.2593L25.2368 18.1314C25.337 18.0019 25.4831 17.9158 25.645 17.8908C25.8068 17.8658 25.9721 17.9038 26.1068 17.9971C26.2363 18.0973 26.3224 18.2434 26.3474 18.4052C26.3724 18.567 26.3343 18.7322 26.2411 18.8668L26.1451 19.0011C26.0353 19.0965 25.8962 19.1516 25.7509 19.1573C25.6055 19.163 25.4626 19.119 25.3456 19.0326C25.2286 18.9462 25.1445 18.8225 25.1073 18.6819C25.0701 18.5413 25.0819 18.3922 25.1408 18.2593Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M28.6464 12.1453L28.7231 12.0046C28.8112 11.8797 28.941 11.7905 29.0892 11.7531C29.2373 11.7157 29.3939 11.7325 29.5307 11.8005C29.6675 11.8685 29.7755 11.9832 29.835 12.1238C29.8946 12.2645 29.9018 12.4218 29.8554 12.5674L29.7787 12.7145C29.7507 12.8023 29.704 12.8831 29.6418 12.9512C29.5797 13.0194 29.5035 13.0732 29.4185 13.1092C29.3336 13.1451 29.2419 13.1623 29.1497 13.1595C29.0575 13.1567 28.967 13.134 28.8844 13.0929C28.8018 13.0519 28.729 12.9934 28.6712 12.9216C28.6133 12.8498 28.5716 12.7664 28.549 12.677C28.5264 12.5876 28.5234 12.4943 28.5402 12.4037C28.557 12.313 28.5932 12.227 28.6464 12.1517V12.1453Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M30.2841 8.94743L30.3608 8.80033C30.4557 8.6921 30.5844 8.61904 30.7259 8.59296C30.8675 8.56689 31.0138 8.58931 31.141 8.65662C31.2683 8.72393 31.3691 8.83218 31.4272 8.96387C31.4853 9.09556 31.4972 9.24299 31.4611 9.38232L31.3844 9.52302C31.3614 9.61734 31.3172 9.70519 31.2552 9.77991C31.1932 9.85463 31.115 9.91426 31.0265 9.95427C30.938 9.99429 30.8416 10.0136 30.7445 10.0109C30.6475 10.0081 30.5523 9.98325 30.4663 9.93824C30.3802 9.89322 30.3055 9.82922 30.2479 9.75108C30.1903 9.67293 30.1512 9.5827 30.1337 9.48721C30.1161 9.39173 30.1205 9.2935 30.1466 9.19998C30.1726 9.10645 30.2197 9.02009 30.2841 8.94743Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M32.1137 5.79428L32.2032 5.65358C32.2973 5.5231 32.4372 5.43286 32.5949 5.40086C32.7525 5.36885 32.9165 5.39743 33.0541 5.4809C33.1829 5.57479 33.272 5.71339 33.304 5.86955C33.3359 6.02571 33.3084 6.18818 33.2268 6.3251L33.1372 6.45301C33.0337 6.53569 32.9071 6.5842 32.7748 6.59185C32.6426 6.59949 32.5112 6.5659 32.3988 6.4957C32.2865 6.42551 32.1987 6.32217 32.1476 6.19996C32.0966 6.07775 32.0847 5.94271 32.1137 5.81347V5.79428Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M34.4294 2.89732L34.5509 2.77581C34.6077 2.7208 34.6746 2.67749 34.7481 2.64836C34.8215 2.61924 34.9 2.60485 34.979 2.60604C35.058 2.60723 35.136 2.62396 35.2085 2.65529C35.2811 2.68661 35.3467 2.73191 35.4018 2.7886C35.4568 2.84529 35.5001 2.91227 35.5292 2.98569C35.5584 3.05912 35.5728 3.13757 35.5716 3.21655C35.5704 3.29554 35.5537 3.37351 35.5223 3.44603C35.491 3.51855 35.4457 3.58419 35.389 3.6392L35.2802 3.74792C35.1674 3.85903 35.015 3.92077 34.8567 3.91957C34.6983 3.91837 34.5469 3.85432 34.4358 3.74153C34.3247 3.62873 34.2629 3.47642 34.2641 3.31811C34.2653 3.15979 34.3294 3.00842 34.4422 2.89732H34.4294Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M37.6024 0.812333L37.7688 0.74838C37.9056 0.711609 38.0512 0.727148 38.1771 0.791967C38.3031 0.856785 38.4004 0.966224 38.4499 1.0989C38.4995 1.23158 38.4978 1.37797 38.4452 1.50947C38.3926 1.64097 38.2928 1.74813 38.1654 1.81003L38.0246 1.86759C37.9544 1.89727 37.8788 1.91253 37.8026 1.91246C37.7263 1.9124 37.6508 1.89701 37.5805 1.8672C37.5103 1.83739 37.4468 1.79377 37.3938 1.73894C37.3407 1.68412 37.2993 1.61919 37.2718 1.54803C37.2444 1.47686 37.2315 1.40091 37.234 1.32468C37.2365 1.24845 37.2543 1.1735 37.2863 1.10428C37.3184 1.03505 37.364 0.972974 37.4205 0.921724C37.477 0.870474 37.5432 0.831098 37.6152 0.805937L37.6024 0.812333Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M41.3894 0.358174H41.5621C41.7027 0.377272 41.8301 0.4512 41.9164 0.56383C42.0027 0.67646 42.0409 0.818643 42.0227 0.959346C42.0051 1.09815 41.9334 1.2244 41.8232 1.31063C41.713 1.39686 41.5732 1.4361 41.4342 1.41982H41.287C41.2173 1.41226 41.1498 1.39105 41.0882 1.35739C41.0267 1.32373 40.9724 1.27828 40.9285 1.22365C40.8845 1.16901 40.8517 1.10625 40.832 1.03896C40.8123 0.971663 40.8061 0.901148 40.8137 0.831439C40.8212 0.76173 40.8424 0.694192 40.8761 0.632682C40.9098 0.571172 40.9552 0.516893 41.0099 0.472947C41.0645 0.429 41.1273 0.396243 41.1946 0.37655C41.2619 0.356857 41.3325 0.350615 41.4022 0.358174H41.3894Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M47.5949 4.32363L47.6972 4.45793C47.7547 4.54867 47.7766 4.65749 47.7587 4.76341C47.7407 4.86934 47.6842 4.96487 47.6 5.03159C47.5157 5.09832 47.4098 5.13151 47.3026 5.12478C47.1953 5.11806 47.0943 5.07188 47.0191 4.99515L46.9232 4.87364C46.8836 4.82822 46.8538 4.7752 46.8355 4.71783C46.8173 4.66046 46.8109 4.59995 46.8169 4.54005C46.8229 4.48014 46.8411 4.42209 46.8704 4.36947C46.8997 4.31686 46.9394 4.27078 46.9871 4.23409C47.0317 4.19272 47.0846 4.16131 47.1422 4.14193C47.1998 4.12256 47.2609 4.11567 47.3214 4.12172C47.3819 4.12777 47.4405 4.14662 47.4931 4.17702C47.5458 4.20742 47.5914 4.24868 47.6269 4.29804L47.5949 4.32363Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M49.5715 7.37425L49.6163 7.4446C49.644 7.52702 49.6423 7.61647 49.6116 7.69781C49.5809 7.77915 49.5231 7.8474 49.4479 7.89102C49.3726 7.93463 49.2847 7.95095 49.1988 7.93719C49.1129 7.92344 49.0344 7.88047 48.9766 7.81554L48.9382 7.75158C48.913 7.70959 48.8963 7.66304 48.8891 7.6146C48.8819 7.56617 48.8843 7.51678 48.8962 7.46927C48.9081 7.42176 48.9292 7.37706 48.9584 7.33771C48.9875 7.29836 49.0242 7.26514 49.0662 7.23994C49.1082 7.21475 49.1547 7.19807 49.2032 7.19086C49.2516 7.18365 49.301 7.18606 49.3486 7.19794C49.3961 7.20981 49.4408 7.23093 49.4802 7.26009C49.5195 7.28924 49.5527 7.32586 49.5779 7.36786L49.5715 7.37425Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M16.6901 11.6399V11.7167C16.7167 11.7648 16.7333 11.8177 16.739 11.8723C16.7447 11.927 16.7393 11.9822 16.7232 12.0347C16.707 12.0872 16.6805 12.136 16.6452 12.178C16.6098 12.2201 16.5663 12.2546 16.5174 12.2795C16.4189 12.3317 16.3038 12.3428 16.1971 12.3104C16.0904 12.2781 16.0009 12.2049 15.948 12.1068L15.9544 11.9981C15.9354 11.9062 15.9476 11.8106 15.989 11.7265C16.0304 11.6423 16.0987 11.5743 16.1831 11.5332C16.2674 11.4922 16.3631 11.4804 16.4549 11.4997C16.5467 11.519 16.6295 11.5684 16.6901 11.6399Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M17.8609 13.8143L17.9313 13.9486C17.9616 14.0027 17.9809 14.0622 17.988 14.1238C17.9951 14.1854 17.9899 14.2478 17.9726 14.3073C17.9553 14.3668 17.9264 14.4223 17.8874 14.4705C17.8485 14.5188 17.8003 14.5588 17.7457 14.5882C17.6362 14.6478 17.5075 14.6617 17.3877 14.627C17.2679 14.5922 17.1667 14.5116 17.106 14.4027L17.0357 14.262C16.9788 14.1518 16.9681 14.0235 17.0059 13.9053C17.0437 13.7872 17.1269 13.6889 17.2372 13.6321C17.3474 13.5752 17.4758 13.5645 17.594 13.6023C17.7121 13.6401 17.8104 13.7233 17.8673 13.8335L17.8609 13.8143Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M19.1083 15.9953L19.185 16.1296C19.2214 16.1875 19.246 16.252 19.2573 16.3194C19.2686 16.3868 19.2665 16.4558 19.251 16.5224C19.2356 16.5889 19.2071 16.6518 19.1672 16.7073C19.1273 16.7629 19.0769 16.8099 19.0187 16.8459C18.9006 16.9171 18.7591 16.9388 18.625 16.9065C18.4909 16.8742 18.3749 16.7904 18.3022 16.6732L18.2191 16.5325C18.1851 16.4743 18.163 16.41 18.1543 16.3432C18.1456 16.2764 18.1503 16.2085 18.1681 16.1435C18.186 16.0786 18.2167 16.0179 18.2584 15.9649C18.3001 15.912 18.352 15.868 18.411 15.8354C18.5255 15.7673 18.6618 15.746 18.7916 15.7757C18.9215 15.8055 19.0349 15.8841 19.1083 15.9953Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M20.4902 18.0609L20.5797 18.1888C20.6621 18.3096 20.6949 18.4576 20.6711 18.602C20.6473 18.7463 20.5688 18.876 20.4519 18.964C20.3351 19.052 20.1888 19.0917 20.0434 19.0748C19.8981 19.0579 19.7648 18.9856 19.6713 18.8731L19.5818 18.7388C19.539 18.678 19.5088 18.6094 19.4927 18.5368C19.4767 18.4643 19.4751 18.3893 19.4882 18.3162C19.5013 18.243 19.5287 18.1732 19.569 18.1107C19.6092 18.0483 19.6613 17.9944 19.7225 17.9521C19.8418 17.8689 19.9889 17.8357 20.1324 17.8597C20.2759 17.8836 20.4043 17.9627 20.4902 18.0801V18.0609Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M22.0831 19.9093L22.1918 20.0116C22.3028 20.1241 22.365 20.2757 22.365 20.4337C22.365 20.5917 22.3028 20.7433 22.1918 20.8558C22.1365 20.9115 22.0708 20.9557 21.9983 20.9859C21.9258 21.016 21.8481 21.0316 21.7696 21.0316C21.6911 21.0316 21.6134 21.016 21.541 20.9859C21.4685 20.9557 21.4027 20.9115 21.3474 20.8558L21.2259 20.7343C21.1156 20.6235 21.0535 20.4737 21.0528 20.3175C21.0521 20.1612 21.113 20.0109 21.2223 19.8992C21.3315 19.7874 21.4804 19.7231 21.6367 19.7202C21.793 19.7173 21.9442 19.7761 22.0575 19.8837L22.0831 19.9093Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M26.305 22.071C26.4747 22.0947 26.628 22.1849 26.7311 22.3216C26.8343 22.4583 26.8789 22.6304 26.8552 22.8C26.8314 22.9697 26.7413 23.1229 26.6045 23.226C26.4677 23.3292 26.2956 23.3738 26.1259 23.35H25.9596C25.7899 23.3246 25.6373 23.2328 25.5353 23.0949C25.4334 22.957 25.3904 22.7842 25.4158 22.6146C25.4413 22.445 25.5331 22.2924 25.671 22.1904C25.809 22.0885 25.9818 22.0455 26.1515 22.071H26.305Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M23.9764 21.3289L24.1108 21.3993C24.2504 21.4801 24.3544 21.6106 24.4019 21.7648C24.4493 21.919 24.4367 22.0854 24.3666 22.2307C24.2867 22.3747 24.1543 22.4823 23.997 22.5311C23.8397 22.58 23.6697 22.5663 23.5222 22.4929L23.3751 22.4098C23.2344 22.3267 23.1308 22.193 23.0856 22.036C23.0404 21.879 23.057 21.7107 23.132 21.5656C23.2138 21.427 23.3449 21.3244 23.499 21.2782C23.6531 21.232 23.819 21.2455 23.9636 21.3162L23.9764 21.3289Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M28.4738 22.0455H28.6145C28.7015 22.0295 28.7907 22.0309 28.8772 22.0494C28.9636 22.0679 29.0456 22.1033 29.1183 22.1535C29.1911 22.2036 29.2533 22.2677 29.3013 22.3419C29.3493 22.4161 29.3822 22.499 29.3982 22.5859C29.4142 22.6728 29.4128 22.7621 29.3943 22.8485C29.3758 22.9349 29.3404 23.0168 29.2902 23.0896C29.24 23.1623 29.176 23.2245 29.1018 23.2725C29.0275 23.3205 28.9446 23.3534 28.8576 23.3694L28.6913 23.4013C28.6044 23.4169 28.5152 23.4151 28.4289 23.3962C28.3426 23.3773 28.2609 23.3416 28.1885 23.2911C28.116 23.2407 28.0542 23.1764 28.0065 23.102C27.9589 23.0277 27.9264 22.9447 27.9109 22.8577C27.8953 22.7708 27.8971 22.6817 27.916 22.5954C27.9349 22.5092 27.9706 22.4275 28.0211 22.355C28.0716 22.2826 28.1359 22.2208 28.2102 22.1731C28.2846 22.1255 28.3677 22.093 28.4546 22.0775L28.4738 22.0455Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M32.4846 19.8389L32.5934 19.7302C32.7238 19.6017 32.8996 19.5296 33.0828 19.5296C33.2659 19.5296 33.4417 19.6017 33.5721 19.7302C33.7011 19.8617 33.7733 20.0385 33.7733 20.2226C33.7733 20.4068 33.7011 20.5836 33.5721 20.7151L33.457 20.8366C33.3237 20.9482 33.1534 21.0059 32.9797 20.9985C32.806 20.9911 32.6413 20.9191 32.518 20.7966C32.3946 20.674 32.3215 20.5099 32.313 20.3363C32.3045 20.1626 32.3611 19.9921 32.4718 19.8581L32.4846 19.8389Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M34.0393 17.978L34.1225 17.8564C34.1728 17.7741 34.2395 17.703 34.3184 17.6475C34.3973 17.592 34.4869 17.5534 34.5814 17.5339C34.6759 17.5145 34.7734 17.5147 34.8678 17.5345C34.9623 17.5544 35.0516 17.5934 35.1303 17.6492C35.209 17.7051 35.2754 17.7765 35.3253 17.859C35.3752 17.9416 35.4076 18.0335 35.4205 18.1291C35.4334 18.2247 35.4265 18.322 35.4001 18.4148C35.3738 18.5076 35.3287 18.594 35.2676 18.6687L35.178 18.7966C35.0651 18.9345 34.9041 19.0244 34.7275 19.0481C34.5508 19.0719 34.3717 19.0278 34.2264 18.9247C34.081 18.8216 33.9802 18.6672 33.9443 18.4926C33.9084 18.3181 33.9401 18.1364 34.0329 17.9844L34.0393 17.978Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M36.5532 13.6993L36.6236 13.5586C36.7148 13.4004 36.8631 13.283 37.038 13.2304C37.2129 13.1778 37.4014 13.194 37.5648 13.2757C37.7281 13.3574 37.8542 13.4983 37.917 13.6698C37.9799 13.8413 37.9749 14.0303 37.903 14.1982L37.8263 14.3389C37.735 14.4971 37.5868 14.6145 37.4118 14.6671C37.2369 14.7197 37.0485 14.7035 36.8851 14.6218C36.7217 14.5402 36.5957 14.3992 36.5328 14.2277C36.4699 14.0562 36.4749 13.8672 36.5468 13.6993H36.5532Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M37.6983 11.4479L37.775 11.3072C37.8599 11.1376 38.0086 11.0086 38.1886 10.9487C38.3685 10.8887 38.5649 10.9027 38.7346 10.9875C38.9043 11.0723 39.0333 11.221 39.0933 11.4009C39.1533 11.5808 39.1393 11.7772 39.0545 11.9468L38.9841 12.0875C38.8993 12.2571 38.7505 12.3861 38.5705 12.4461C38.3906 12.506 38.1942 12.4921 38.0245 12.4073C37.8549 12.3225 37.7258 12.1737 37.6659 11.9938C37.6059 11.8139 37.6198 11.6176 37.7047 11.4479H37.6983Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M38.8627 9.17132L38.9395 9.03062C38.9737 8.93682 39.0275 8.85139 39.0974 8.78C39.1672 8.7086 39.2514 8.65289 39.3444 8.61656C39.4375 8.58022 39.5372 8.5641 39.6369 8.56927C39.7366 8.57443 39.8341 8.60076 39.9229 8.64651C40.0117 8.69226 40.0897 8.75638 40.1518 8.8346C40.2138 8.91282 40.2586 9.00336 40.2829 9.10019C40.3073 9.19702 40.3108 9.29793 40.2931 9.3962C40.2754 9.49448 40.2371 9.58787 40.1805 9.67017L40.1101 9.81087C40.0681 9.89486 40.01 9.96975 39.939 10.0313C39.8681 10.0928 39.7857 10.1397 39.6966 10.1694C39.6075 10.1991 39.5134 10.211 39.4197 10.2043C39.326 10.1977 39.2346 10.1726 39.1506 10.1306C39.0666 10.0887 38.9917 10.0305 38.9301 9.95959C38.8686 9.88865 38.8216 9.80629 38.7919 9.71721C38.7622 9.62813 38.7504 9.53407 38.757 9.4404C38.7637 9.34674 38.7887 9.25531 38.8307 9.17132H38.8627Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M40.1103 6.92015L40.1934 6.77945C40.2918 6.62085 40.4492 6.50784 40.631 6.46526C40.8127 6.42268 41.004 6.45403 41.1626 6.55241C41.3212 6.65079 41.4343 6.80814 41.4769 6.98984C41.5195 7.17155 41.4881 7.36273 41.3897 7.52132L41.3129 7.65563C41.2671 7.73416 41.2063 7.8029 41.134 7.85793C41.0616 7.91297 40.9791 7.95321 40.8912 7.97637C40.8033 7.99953 40.7117 8.00516 40.6216 7.99292C40.5315 7.98068 40.4447 7.95082 40.3661 7.90505C40.2876 7.85928 40.2188 7.79849 40.1638 7.72615C40.1087 7.65381 40.0685 7.57134 40.0453 7.48345C40.0221 7.39555 40.0165 7.30396 40.0288 7.21389C40.041 7.12382 40.0709 7.03705 40.1167 6.95852L40.1103 6.92015Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M41.5431 4.7391L41.639 4.61119C41.6915 4.53833 41.7581 4.47674 41.8349 4.43006C41.9116 4.38338 41.997 4.35257 42.0859 4.33946C42.1747 4.32634 42.2653 4.33118 42.3523 4.35368C42.4393 4.37619 42.5208 4.41591 42.5922 4.4705C42.7357 4.57764 42.8315 4.73677 42.859 4.91373C42.8865 5.09069 42.8436 5.27138 42.7393 5.41702L42.6498 5.53854C42.5429 5.68526 42.3821 5.78352 42.2027 5.81171C42.0234 5.83989 41.8401 5.79569 41.6934 5.68883C41.5466 5.58197 41.4483 5.42121 41.4201 5.2419C41.392 5.06259 41.4362 4.87943 41.5431 4.73271V4.7391Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M43.2831 2.73102L43.4046 2.61591C43.5344 2.49293 43.7077 2.42654 43.8865 2.43134C44.0653 2.43614 44.2348 2.51173 44.3578 2.64149C44.4808 2.77125 44.5472 2.94454 44.5424 3.12325C44.5376 3.30196 44.462 3.47144 44.3322 3.59441L44.1979 3.68395C44.0689 3.80777 43.8961 3.87531 43.7173 3.87171C43.5385 3.86812 43.3685 3.79368 43.2447 3.66476C43.1208 3.53585 43.0533 3.36304 43.0569 3.18433C43.0605 3.00562 43.1349 2.83566 43.2639 2.71184L43.2831 2.73102Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M45.4774 1.12576L45.6245 1.04901C45.7772 0.969288 45.9553 0.953477 46.1197 1.00505C46.284 1.05662 46.4212 1.17136 46.5009 1.32402C46.5807 1.47667 46.5965 1.65475 46.5449 1.81906C46.4933 1.98338 46.3785 2.12048 46.2258 2.2002L46.0979 2.26415C46.0231 2.30489 45.9411 2.3305 45.8564 2.33953C45.7717 2.34856 45.6861 2.34082 45.6044 2.31677C45.5228 2.29272 45.4466 2.25282 45.3804 2.19935C45.3141 2.14588 45.259 2.07988 45.2183 2.00514C45.1775 1.93039 45.1519 1.84835 45.1429 1.7637C45.1339 1.67905 45.1416 1.59346 45.1657 1.5118C45.1897 1.43014 45.2296 1.35402 45.2831 1.28779C45.3366 1.22155 45.4026 1.16649 45.4774 1.12576Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M48.1003 0.307086H48.2666C48.4077 0.323524 48.5393 0.386445 48.6407 0.485925C48.7421 0.585405 48.8074 0.715785 48.8265 0.856513C48.8456 0.997241 48.8172 1.14031 48.746 1.26316C48.6747 1.38601 48.5646 1.48166 48.4329 1.53502H48.2858C48.1959 1.56943 48.0995 1.58312 48.0036 1.57509C47.9077 1.56705 47.8148 1.53749 47.7319 1.48861C47.6491 1.43972 47.5783 1.37277 47.5249 1.29274C47.4715 1.21271 47.4368 1.12166 47.4235 1.02638C47.4101 0.931103 47.4185 0.834043 47.4479 0.742433C47.4773 0.650823 47.5269 0.567023 47.5932 0.497274C47.6595 0.427525 47.7407 0.373625 47.8307 0.339588C47.9207 0.305551 48.0172 0.292255 48.1131 0.300689L48.1003 0.307086Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M50.8252 0.390349L50.9915 0.428726C51.1367 0.468359 51.2614 0.561485 51.3406 0.689357C51.4198 0.817229 51.4476 0.970349 51.4184 1.11789C51.3892 1.26544 51.3052 1.39644 51.1832 1.48454C51.0613 1.57264 50.9105 1.61129 50.7612 1.5927H50.6205C50.4653 1.56387 50.3278 1.47456 50.2384 1.34443C50.1491 1.21429 50.1151 1.05399 50.1439 0.898789C50.1728 0.743588 50.2621 0.606201 50.3923 0.516847C50.5224 0.427493 50.6828 0.393494 50.838 0.422329L50.8252 0.390349Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M55.4314 3.08269L55.5465 3.20421C55.6381 3.30339 55.6873 3.43439 55.6837 3.56932C55.6801 3.70425 55.624 3.83246 55.5273 3.92664C55.4306 4.02083 55.3009 4.07355 55.1659 4.0736C55.0309 4.07365 54.9012 4.02101 54.8044 3.9269L54.6957 3.81817C54.5996 3.72117 54.5457 3.59016 54.5457 3.45363C54.5457 3.3171 54.5996 3.18609 54.6957 3.08909C54.7938 2.99261 54.9259 2.93855 55.0635 2.93855C55.2011 2.93855 55.3332 2.99261 55.4314 3.08909V3.08269Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M57.0561 5.13585L57.1457 5.27016C57.2072 5.37124 57.228 5.4919 57.2039 5.60774C57.1799 5.72358 57.1127 5.82596 57.016 5.89419C56.9193 5.96242 56.8003 5.99141 56.6831 5.97529C56.5658 5.95917 56.4591 5.89916 56.3844 5.80738L56.2949 5.67947C56.2211 5.57939 56.19 5.45411 56.2086 5.33117C56.2272 5.20823 56.2939 5.09771 56.394 5.02393C56.4941 4.95015 56.6194 4.91914 56.7424 4.93773C56.8654 4.95632 56.9759 5.02298 57.0497 5.12306L57.0561 5.13585Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M58.406 7.35504L58.4444 7.42539C58.4859 7.52083 58.4906 7.62822 58.4578 7.72696C58.4249 7.82569 58.3567 7.90881 58.2663 7.96035C58.1759 8.0119 58.0696 8.02823 57.9678 8.00622C57.8661 7.98421 57.7761 7.92541 57.7151 7.8411L57.6767 7.77075C57.6343 7.6768 57.6277 7.57057 57.6582 7.4721C57.6887 7.37363 57.7542 7.28973 57.8424 7.23623C57.9305 7.18273 58.0352 7.16333 58.1367 7.18168C58.2381 7.20003 58.3294 7.25487 58.3932 7.33586L58.406 7.35504Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M25.5374 11.6208L25.5758 11.6912C25.6348 11.8015 25.6478 11.9307 25.6119 12.0506C25.5759 12.1704 25.4939 12.2711 25.3838 12.3307C25.3294 12.3608 25.2695 12.3798 25.2076 12.3864C25.1458 12.3931 25.0832 12.3873 25.0236 12.3694C24.964 12.3515 24.9086 12.3219 24.8606 12.2823C24.8126 12.2427 24.773 12.194 24.7441 12.1389V12.0621C24.7022 11.9538 24.7023 11.8337 24.7442 11.7253C24.7861 11.617 24.8669 11.5282 24.9709 11.4762C25.0748 11.4243 25.1944 11.4129 25.3062 11.4444C25.4181 11.4759 25.5142 11.5479 25.5758 11.6464L25.5374 11.6208Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M26.3243 13.0853L26.3947 13.226C26.427 13.2852 26.4474 13.3502 26.4546 13.4173C26.4618 13.4843 26.4557 13.5522 26.4367 13.6169C26.4177 13.6816 26.3862 13.742 26.3438 13.7945C26.3015 13.8471 26.2492 13.8907 26.19 13.9231C26.1307 13.9554 26.0657 13.9758 25.9986 13.983C25.9315 13.9902 25.8637 13.9841 25.7989 13.9651C25.7342 13.9461 25.6738 13.9146 25.6213 13.8722C25.5687 13.8299 25.525 13.7776 25.4927 13.7184L25.4287 13.5713C25.3946 13.5113 25.3732 13.445 25.3657 13.3764C25.3582 13.3078 25.3649 13.2385 25.3853 13.1726C25.4057 13.1066 25.4393 13.0456 25.4842 12.9932C25.5291 12.9408 25.5842 12.8981 25.6462 12.8678C25.7656 12.8106 25.9024 12.8012 26.0285 12.8416C26.1547 12.8821 26.2605 12.9693 26.3243 13.0853Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M27.1558 14.6012L27.2326 14.7419C27.3047 14.8691 27.3233 15.0197 27.2843 15.1606C27.2453 15.3016 27.1519 15.4212 27.0247 15.4933C26.8975 15.5654 26.7468 15.584 26.6058 15.545C26.4648 15.5061 26.3451 15.4127 26.273 15.2855L26.2027 15.1448C26.1375 15.0157 26.1258 14.8661 26.1701 14.7285C26.2144 14.5908 26.3111 14.4762 26.4394 14.4093C26.5615 14.3476 26.7021 14.3331 26.8342 14.3685C26.9664 14.4039 27.0809 14.4867 27.1558 14.6012Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M28.0259 16.0911L28.1027 16.219C28.1438 16.284 28.1716 16.3565 28.1845 16.4323C28.1974 16.5081 28.1952 16.5857 28.1779 16.6606C28.1607 16.7355 28.1288 16.8063 28.084 16.8688C28.0392 16.9313 27.9825 16.9844 27.9171 17.0248C27.8526 17.0658 27.7806 17.0935 27.7053 17.1063C27.63 17.1191 27.5529 17.1169 27.4785 17.0996C27.404 17.0823 27.3338 17.0504 27.2718 17.0058C27.2098 16.9611 27.1574 16.9045 27.1175 16.8394L27.0343 16.6987C26.9581 16.5646 26.9382 16.4059 26.979 16.2572C27.0198 16.1085 27.1179 15.9821 27.2518 15.9056C27.381 15.8355 27.5315 15.8156 27.6745 15.8499C27.8174 15.8841 27.9426 15.9701 28.0259 16.0911Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M28.96 17.5173L29.0496 17.6452C29.1207 17.7082 29.1769 17.7863 29.2141 17.8738C29.2513 17.9613 29.2685 18.0559 29.2645 18.1509C29.2604 18.2459 29.2353 18.3387 29.1909 18.4228C29.1464 18.5068 29.0838 18.5799 29.0076 18.6367C28.9314 18.6934 28.8434 18.7325 28.7502 18.7511C28.6569 18.7696 28.5607 18.7672 28.4685 18.7439C28.3764 18.7206 28.2906 18.6771 28.2173 18.6164C28.1441 18.5558 28.0853 18.4796 28.0452 18.3934L27.9621 18.2527C27.9209 18.1219 27.9228 17.9812 27.9677 17.8516C28.0126 17.7219 28.098 17.6101 28.2113 17.5327C28.3246 17.4553 28.4598 17.4163 28.5969 17.4216C28.734 17.4269 28.8658 17.4761 28.9728 17.562L28.96 17.5173Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M29.9834 18.854L30.0793 18.9691C30.1339 19.0338 30.1753 19.1086 30.201 19.1892C30.2267 19.2698 30.2362 19.3547 30.2291 19.4391C30.222 19.5234 30.1983 19.6055 30.1594 19.6807C30.1206 19.7559 30.0672 19.8227 30.0026 19.8773C29.9379 19.9319 29.8631 19.9732 29.7824 19.9989C29.7018 20.0245 29.6168 20.0341 29.5325 20.027C29.4481 20.0198 29.366 19.9962 29.2908 19.9573C29.2156 19.9185 29.1488 19.8652 29.0942 19.8005L28.9918 19.6662C28.9387 19.6008 28.899 19.5255 28.875 19.4447C28.8511 19.3639 28.8434 19.2792 28.8523 19.1954C28.8612 19.1116 28.8866 19.0304 28.927 18.9564C28.9674 18.8825 29.0221 18.8172 29.0878 18.7645C29.218 18.6577 29.385 18.6065 29.5527 18.6221C29.7203 18.6377 29.8751 18.7187 29.9834 18.8476V18.854Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M31.1222 20.0565L31.2373 20.1588C31.302 20.2176 31.3545 20.2886 31.3917 20.3676C31.429 20.4467 31.4503 20.5323 31.4545 20.6196C31.4586 20.7069 31.4455 20.7942 31.416 20.8764C31.3864 20.9587 31.3409 21.0343 31.2821 21.0989C31.2233 21.1636 31.1523 21.2161 31.0732 21.2533C30.9942 21.2906 30.9085 21.3119 30.8212 21.316C30.7339 21.3202 30.6466 21.3071 30.5643 21.2775C30.482 21.248 30.4064 21.2025 30.3417 21.1437L30.2138 21.0222C30.0848 20.9026 30.0087 20.7367 30.0021 20.561C29.9955 20.3853 30.059 20.2142 30.1786 20.0853C30.2982 19.9563 30.4641 19.8802 30.6399 19.8736C30.8156 19.867 30.9868 19.9305 31.1158 20.0501L31.1222 20.0565Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M32.4079 21.0412L32.5295 21.1179C32.6063 21.165 32.6732 21.2267 32.7262 21.2995C32.7792 21.3724 32.8173 21.455 32.8384 21.5426C32.8595 21.6302 32.8631 21.7211 32.8491 21.8101C32.835 21.8991 32.8036 21.9844 32.7566 22.0613C32.7095 22.1381 32.6478 22.2049 32.5749 22.2579C32.502 22.3109 32.4194 22.3491 32.3318 22.3702C32.2442 22.3912 32.1533 22.3949 32.0642 22.3808C31.9752 22.3668 31.8898 22.3353 31.813 22.2883L31.6658 22.1924C31.518 22.0931 31.4146 21.9402 31.3777 21.766C31.3408 21.5919 31.3733 21.4102 31.4682 21.2595C31.5631 21.1089 31.713 21.0011 31.8861 20.9592C32.0591 20.9172 32.2417 20.9443 32.3951 21.0348L32.4079 21.0412Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M33.8281 21.7256L33.9688 21.7704C34.1466 21.8302 34.2935 21.9579 34.3774 22.1257C34.4614 22.2935 34.4754 22.4876 34.4166 22.6657C34.3877 22.7543 34.3415 22.8362 34.2807 22.9067C34.2199 22.9772 34.1457 23.035 34.0624 23.0766C33.9791 23.1183 33.8883 23.143 33.7954 23.1493C33.7025 23.1556 33.6092 23.1434 33.521 23.1134L33.3547 23.0559C33.1782 22.9948 33.0333 22.8662 32.9517 22.6982C32.8701 22.5303 32.8586 22.3369 32.9197 22.1605C32.9808 21.9841 33.1094 21.8392 33.2774 21.7576C33.4454 21.676 33.6388 21.6645 33.8153 21.7256H33.8281Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M35.3633 22.0516H35.5168C35.7042 22.0726 35.8759 22.1659 35.9954 22.3117C36.1149 22.4574 36.1727 22.6441 36.1565 22.8319C36.1418 23.0243 36.0514 23.203 35.9051 23.3289C35.7588 23.4547 35.5686 23.5175 35.3761 23.5034H35.2098C35.1155 23.4938 35.024 23.4657 34.9407 23.4205C34.8573 23.3754 34.7838 23.3142 34.7243 23.2404C34.6648 23.1666 34.6205 23.0818 34.594 22.9908C34.5676 22.8998 34.5594 22.8045 34.57 22.7104C34.591 22.5243 34.6835 22.3536 34.8279 22.2343C34.9723 22.115 35.1573 22.0564 35.3441 22.0708L35.3633 22.0516Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M36.9371 22.0198H37.0778C37.1792 21.9969 37.2842 21.9953 37.3862 22.0152C37.4882 22.035 37.5849 22.0759 37.6702 22.1352C37.7556 22.1945 37.8276 22.2709 37.8818 22.3595C37.9359 22.4482 37.971 22.5471 37.9849 22.6501C37.9987 22.753 37.9909 22.8577 37.962 22.9575C37.9332 23.0573 37.8838 23.15 37.8171 23.2297C37.7505 23.3094 37.6679 23.3743 37.5748 23.4204C37.4817 23.4664 37.38 23.4926 37.2761 23.4972H37.1034C36.9091 23.5175 36.7146 23.4611 36.5613 23.34C36.408 23.2189 36.3082 23.0426 36.2831 22.8489C36.2581 22.6552 36.3098 22.4594 36.4272 22.3033C36.5446 22.1472 36.7184 22.0431 36.9115 22.0134L36.9371 22.0198Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M38.4404 21.6489L38.5748 21.5978C38.6672 21.5616 38.7658 21.5439 38.865 21.5459C38.9642 21.5478 39.0621 21.5693 39.153 21.6091C39.2439 21.6489 39.3261 21.7062 39.3948 21.7778C39.4635 21.8494 39.5175 21.9338 39.5535 22.0263C39.6249 22.213 39.62 22.4202 39.5398 22.6033C39.4596 22.7864 39.3106 22.9306 39.1249 23.0048L38.965 23.0687C38.7773 23.138 38.57 23.1314 38.3872 23.0501C38.2044 22.9689 38.0605 22.8195 37.9862 22.6338C37.9154 22.4472 37.9214 22.2402 38.003 22.058C38.0845 21.8758 38.2349 21.7333 38.4212 21.6617L38.4404 21.6489Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M39.8349 20.9517L39.9565 20.875C40.0405 20.8187 40.1347 20.7796 40.2339 20.7597C40.333 20.7399 40.4351 20.7397 40.5343 20.7593C40.6335 20.7789 40.7279 20.8179 40.8121 20.8739C40.8962 20.93 40.9685 21.0021 41.0248 21.0861C41.0811 21.17 41.1202 21.2643 41.1401 21.3634C41.16 21.4625 41.1601 21.5646 41.1405 21.6638C41.1209 21.763 41.0819 21.8573 41.0258 21.9414C40.9698 22.0256 40.8977 22.0978 40.8137 22.1541L40.6729 22.25C40.5033 22.3628 40.2957 22.4036 40.096 22.3634C39.8962 22.3233 39.7206 22.2054 39.6078 22.0358C39.495 21.8662 39.4542 21.6587 39.4944 21.459C39.5345 21.2593 39.6524 21.0837 39.8221 20.9709L39.8349 20.9517Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M41.0824 19.9219L41.1847 19.8196C41.2556 19.7473 41.3402 19.6898 41.4336 19.6506C41.5269 19.6114 41.6272 19.5912 41.7285 19.5912C41.8297 19.5912 41.93 19.6114 42.0234 19.6506C42.1167 19.6898 42.2013 19.7473 42.2722 19.8196C42.4152 19.9644 42.4954 20.1597 42.4954 20.3632C42.4954 20.5667 42.4152 20.762 42.2722 20.9068L42.1507 21.0219C42.078 21.0921 41.9922 21.1472 41.8983 21.1842C41.8043 21.2212 41.7039 21.2393 41.6029 21.2375C41.502 21.2357 41.4023 21.2141 41.3097 21.1738C41.2171 21.1335 41.1333 21.0754 41.0632 21.0028C40.993 20.9301 40.9379 20.8444 40.9009 20.7504C40.8639 20.6565 40.8457 20.5561 40.8475 20.4552C40.8493 20.3542 40.871 20.2546 40.9113 20.162C40.9515 20.0694 41.0097 19.9857 41.0824 19.9155V19.9219Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M42.1827 18.7068L42.2722 18.5853C42.3352 18.5055 42.4134 18.4389 42.5021 18.3893C42.5909 18.3397 42.6885 18.308 42.7895 18.2961C42.8905 18.2843 42.9928 18.2924 43.0907 18.32C43.1885 18.3477 43.2799 18.3944 43.3598 18.4574C43.4396 18.5203 43.5062 18.5984 43.5558 18.6872C43.6054 18.7759 43.6371 18.8735 43.649 18.9745C43.6608 19.0754 43.6527 19.1778 43.625 19.2756C43.5974 19.3734 43.5507 19.4648 43.4877 19.5446L43.3853 19.6725C43.2553 19.8266 43.0702 19.9239 42.8694 19.9436C42.6687 19.9633 42.4682 19.9039 42.3106 19.778C42.153 19.6522 42.0508 19.4698 42.0257 19.2697C42.0006 19.0696 42.0546 18.8676 42.1763 18.7068H42.1827Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M43.1617 17.3509L43.2449 17.223C43.2917 17.1199 43.3605 17.0283 43.4463 16.9545C43.5322 16.8806 43.6331 16.8263 43.742 16.7954C43.8509 16.7644 43.9653 16.7576 44.0772 16.7752C44.189 16.7929 44.2957 16.8347 44.3898 16.8977C44.4839 16.9607 44.5631 17.0435 44.622 17.1402C44.6809 17.2369 44.718 17.3452 44.7308 17.4577C44.7436 17.5702 44.7318 17.6841 44.6961 17.7916C44.6604 17.8991 44.6018 17.9975 44.5243 18.08L44.4283 18.2143C44.3019 18.352 44.1303 18.4397 43.9447 18.4615C43.759 18.4834 43.5717 18.4379 43.4168 18.3334C43.2619 18.2288 43.1496 18.0721 43.1004 17.8918C43.0513 17.7116 43.0685 17.5196 43.1489 17.3509H43.1617Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M44.0507 15.9122L44.1275 15.7779C44.1716 15.6758 44.2369 15.5842 44.3191 15.5091C44.4012 15.4341 44.4984 15.3773 44.6041 15.3426C44.7098 15.3079 44.8217 15.2959 44.9323 15.3076C45.043 15.3193 45.1499 15.3543 45.246 15.4103C45.3422 15.4663 45.4253 15.5421 45.49 15.6326C45.5547 15.7231 45.5994 15.8263 45.6213 15.9354C45.6432 16.0445 45.6416 16.157 45.6168 16.2654C45.592 16.3739 45.5444 16.4758 45.4773 16.5645L45.3941 16.6988C45.2889 16.8795 45.1163 17.0109 44.9141 17.0643C44.712 17.1177 44.4969 17.0886 44.3162 16.9834C44.1355 16.8783 44.004 16.7056 43.9506 16.5036C43.8972 16.3015 43.9263 16.0864 44.0315 15.9058L44.0507 15.9122Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M44.876 14.4156L44.9528 14.2749C45.0512 14.0883 45.2197 13.9485 45.4212 13.8861C45.6228 13.8237 45.8409 13.844 46.0275 13.9423C46.2141 14.0407 46.354 14.2092 46.4164 14.4107C46.4788 14.6122 46.4585 14.8302 46.3601 15.0168L46.2898 15.1575C46.1814 15.3265 46.0133 15.4486 45.819 15.4995C45.6247 15.5503 45.4184 15.5262 45.2411 15.4319C45.0637 15.3377 44.9284 15.1801 44.8619 14.9906C44.7955 14.8011 44.8028 14.5936 44.8824 14.4092L44.876 14.4156Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M45.6691 12.8869L45.7395 12.7462C45.8365 12.5582 46.004 12.4163 46.2055 12.3515C46.4069 12.2868 46.6258 12.3045 46.8142 12.4008C46.9069 12.4476 46.9894 12.5122 47.0569 12.591C47.1245 12.6697 47.1758 12.7611 47.208 12.8598C47.2401 12.9584 47.2523 13.0625 47.244 13.1659C47.2357 13.2694 47.2071 13.3702 47.1596 13.4625L47.0893 13.6032C47.0426 13.6964 46.9781 13.7795 46.8993 13.8478C46.8206 13.9161 46.7291 13.9682 46.6302 14.0012C46.5313 14.0341 46.4269 14.0473 46.3229 14.0399C46.2189 14.0325 46.1174 14.0047 46.0241 13.9581C45.9309 13.9115 45.8477 13.847 45.7794 13.7683C45.7111 13.6895 45.659 13.5981 45.626 13.4992C45.5931 13.4003 45.5799 13.2959 45.5873 13.192C45.5947 13.088 45.6225 12.9865 45.6691 12.8933V12.8869Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M46.4561 11.3586L46.5265 11.2179C46.6198 11.0304 46.7838 10.8877 46.9823 10.8212C47.1809 10.7546 47.3977 10.7696 47.5852 10.8629C47.7727 10.9562 47.9154 11.1201 47.982 11.3186C48.0486 11.5171 48.0336 11.7339 47.9403 11.9214L47.8699 12.0621C47.7752 12.249 47.6108 12.3913 47.4122 12.4582C47.2136 12.5252 46.9966 12.5116 46.808 12.4202C46.715 12.3747 46.632 12.3111 46.5638 12.2331C46.4956 12.1552 46.4437 12.0645 46.4109 11.9663C46.3782 11.868 46.3653 11.7643 46.3731 11.6611C46.3808 11.5578 46.4091 11.4572 46.4561 11.365V11.3586Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M47.2492 9.7787L47.3196 9.638C47.3662 9.54646 47.4304 9.46499 47.5085 9.39825C47.5866 9.33151 47.6772 9.28081 47.7749 9.24904C47.8726 9.21727 47.9756 9.20505 48.078 9.21308C48.1805 9.22111 48.2803 9.24923 48.3719 9.29585C48.4635 9.34246 48.545 9.40664 48.6117 9.48474C48.6785 9.56284 48.7292 9.65332 48.761 9.75101C48.7928 9.8487 48.805 9.9517 48.797 10.0541C48.7889 10.1565 48.7608 10.2564 48.7142 10.3479L48.6438 10.4886C48.5405 10.6562 48.3781 10.7789 48.1887 10.8327C47.9993 10.8864 47.7967 10.8672 47.6208 10.7789C47.4448 10.6905 47.3084 10.5394 47.2384 10.3555C47.1685 10.1715 47.17 9.96798 47.2428 9.7851L47.2492 9.7787Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M48.0745 8.22466L48.1513 8.08395C48.1995 7.99442 48.265 7.91535 48.344 7.85134C48.423 7.78733 48.514 7.73966 48.6116 7.7111C48.7092 7.68254 48.8115 7.67366 48.9126 7.68496C49.0137 7.69627 49.1115 7.72755 49.2004 7.77697C49.3799 7.87569 49.5133 8.041 49.572 8.23722C49.6306 8.43345 49.6097 8.64486 49.5139 8.82583L49.4371 8.96014C49.3892 9.05 49.3241 9.12956 49.2454 9.19426C49.1668 9.25897 49.0762 9.30755 48.9788 9.33725C48.8814 9.36694 48.779 9.37716 48.6777 9.36732C48.5763 9.35749 48.4779 9.32778 48.388 9.27991C48.2981 9.23204 48.2185 9.16694 48.1538 9.08832C48.089 9.0097 48.0405 8.9191 48.0107 8.82171C47.981 8.72431 47.9708 8.62202 47.9807 8.52068C47.9905 8.41933 48.0202 8.32092 48.0681 8.23105L48.0745 8.22466Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M48.9572 6.68329L49.0404 6.54259C49.1473 6.37323 49.3162 6.25235 49.511 6.20575C49.7058 6.15916 49.9111 6.19055 50.0831 6.29322C50.2551 6.39589 50.3802 6.5617 50.4316 6.75526C50.4829 6.94883 50.4566 7.15481 50.3582 7.32923L50.2814 7.46354C50.2298 7.55047 50.1615 7.62637 50.0805 7.68691C49.9995 7.74745 49.9073 7.79145 49.8093 7.81639C49.7113 7.84134 49.6093 7.84674 49.5092 7.83228C49.4091 7.81783 49.3128 7.7838 49.2259 7.73215C49.139 7.6805 49.063 7.61223 49.0025 7.53124C48.9419 7.45026 48.8979 7.35815 48.873 7.26016C48.848 7.16217 48.8426 7.06022 48.8571 6.96015C48.8715 6.86007 48.9056 6.76382 48.9572 6.6769V6.68329Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M49.9553 5.17419L50.0449 5.03988C50.1603 4.87027 50.3383 4.75341 50.5399 4.71503C50.7414 4.67665 50.95 4.71989 51.1196 4.83523C51.2893 4.95057 51.4062 5.12856 51.4446 5.33006C51.483 5.53156 51.4397 5.74005 51.3243 5.90967L51.2412 6.03758C51.1267 6.2072 50.9494 6.32439 50.7485 6.36337C50.5475 6.40235 50.3393 6.35992 50.1697 6.24543C50 6.13094 49.8828 5.95375 49.8438 5.75286C49.8048 5.55196 49.8472 5.34381 49.9617 5.17419H49.9553Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M51.0302 3.72861L51.1389 3.60709C51.2028 3.53138 51.2811 3.46912 51.3693 3.4239C51.4575 3.37868 51.5537 3.35141 51.6525 3.34367C51.7513 3.33594 51.8506 3.34789 51.9448 3.37884C52.0389 3.40979 52.1259 3.45911 52.2008 3.52395C52.3514 3.65287 52.4451 3.8358 52.4619 4.03324C52.4786 4.23067 52.417 4.42678 52.2904 4.57921L52.1945 4.69433C52.0655 4.84783 51.8809 4.94384 51.6811 4.96123C51.4814 4.97862 51.2829 4.91597 51.1293 4.78706C50.9758 4.65815 50.8797 4.47354 50.8624 4.27384C50.845 4.07415 50.9076 3.87572 51.0366 3.72221L51.0302 3.72861Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M52.316 2.40483L52.4439 2.28971C52.5938 2.16838 52.7846 2.10953 52.9768 2.12543C53.1689 2.14132 53.3475 2.23073 53.4754 2.37502C53.6032 2.51931 53.6704 2.70736 53.663 2.89997C53.6556 3.09258 53.5741 3.2749 53.4355 3.40892L53.3268 3.50486C53.1808 3.6397 52.9873 3.71108 52.7888 3.70328C52.5902 3.69548 52.4029 3.60916 52.268 3.46328C52.1331 3.31741 52.0617 3.12395 52.0695 2.92545C52.0773 2.72695 52.1637 2.53968 52.3096 2.40483H52.316Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M53.8321 1.29854L53.9792 1.209C54.0633 1.16029 54.156 1.1286 54.2523 1.11573C54.3486 1.10287 54.4464 1.10909 54.5403 1.13403C54.6341 1.15897 54.7222 1.20215 54.7993 1.26111C54.8765 1.32006 54.9413 1.39363 54.99 1.47762C55.0387 1.5616 55.0704 1.65436 55.0833 1.75059C55.0962 1.84683 55.0899 1.94466 55.065 2.03849C55.04 2.13232 54.9968 2.22032 54.9379 2.29747C54.8789 2.37461 54.8053 2.43939 54.7213 2.4881L54.5998 2.56485C54.4301 2.66492 54.2276 2.69352 54.0369 2.64434C53.8461 2.59517 53.6827 2.47225 53.5826 2.30263C53.4825 2.13301 53.4539 1.93059 53.5031 1.73988C53.5523 1.54918 53.6753 1.38583 53.8449 1.28575L53.8321 1.29854Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M55.5719 0.524653L55.7127 0.486282C55.8916 0.431156 56.0852 0.449375 56.2508 0.53693C56.4163 0.624485 56.5403 0.774207 56.5955 0.953154C56.6506 1.1321 56.6324 1.32562 56.5448 1.49113C56.4572 1.65665 56.3075 1.7806 56.1285 1.83573L55.9877 1.8805C55.8096 1.93817 55.6158 1.92273 55.4491 1.83757C55.2823 1.75241 55.1562 1.60452 55.0985 1.42642C55.0408 1.24832 55.0563 1.0546 55.1415 0.887888C55.2266 0.721173 55.3746 0.595117 55.5527 0.537447L55.5719 0.524653Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M57.4399 0.185479H57.6126C57.7924 0.178278 57.9679 0.240802 58.1027 0.359985C58.2374 0.479169 58.3208 0.645789 58.3355 0.825028C58.3443 1.00447 58.2821 1.18017 58.1624 1.31418C58.0427 1.4482 57.8751 1.52978 57.6958 1.54132H57.5551C57.3735 1.55489 57.194 1.49581 57.0561 1.37707C56.9181 1.25833 56.833 1.08966 56.8194 0.908172C56.8058 0.72668 56.8649 0.54723 56.9837 0.409301C57.1025 0.271371 57.2712 0.18626 57.4527 0.172691L57.4399 0.185479Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M59.3271 0.275097H59.4999C59.587 0.287211 59.6706 0.317147 59.7456 0.363033C59.8206 0.408919 59.8854 0.46977 59.9358 0.541789C59.9862 0.613807 60.0212 0.695444 60.0387 0.781604C60.0562 0.867765 60.0556 0.9566 60.0372 1.04256C60.0257 1.12823 59.9968 1.21066 59.9525 1.28488C59.9081 1.3591 59.8492 1.42356 59.7793 1.47437C59.7093 1.52518 59.6298 1.56128 59.5455 1.5805C59.4612 1.59971 59.3738 1.60165 59.2888 1.58617H59.1416C59.0542 1.57627 58.9697 1.54843 58.8934 1.50439C58.8172 1.46034 58.7509 1.40105 58.6987 1.33021C58.6465 1.25937 58.6094 1.17852 58.5898 1.09271C58.5703 1.0069 58.5687 0.917974 58.5851 0.831506C58.5942 0.743491 58.6214 0.658317 58.6651 0.581375C58.7088 0.504432 58.768 0.437394 58.839 0.384497C58.9099 0.3316 58.9911 0.293999 59.0773 0.274067C59.1635 0.254136 59.253 0.25231 59.3399 0.268705L59.3271 0.275097Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M61.1502 0.799518L61.3037 0.863472C61.4615 0.929624 61.5866 1.05573 61.6513 1.21405C61.7161 1.37237 61.7153 1.54994 61.6492 1.70768C61.583 1.86543 61.4569 1.99043 61.2985 2.0552C61.1401 2.11997 60.9625 2.11918 60.8048 2.05303L60.6704 1.99548C60.5923 1.96314 60.5213 1.91574 60.4615 1.85597C60.4017 1.79621 60.3542 1.72526 60.3219 1.64716C60.2895 1.56907 60.2728 1.48536 60.2728 1.40082C60.2728 1.31629 60.2894 1.23258 60.3218 1.15447C60.3541 1.07636 60.4015 1.00539 60.4613 0.945602C60.5211 0.885814 60.5921 0.838379 60.6702 0.806013C60.7483 0.773647 60.832 0.756982 60.9166 0.756966C61.0011 0.756949 61.0849 0.77358 61.163 0.805915L61.1502 0.799518Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M62.7817 1.72681L62.9161 1.82273C63.0428 1.92368 63.1265 2.06896 63.1502 2.22922C63.174 2.38948 63.136 2.55278 63.044 2.68613C62.9458 2.80807 62.8062 2.88975 62.6517 2.91568C62.4973 2.94162 62.3387 2.91 62.206 2.82683L62.0844 2.74369C61.9533 2.64848 61.8631 2.50705 61.8323 2.34797C61.8014 2.18889 61.8321 2.02403 61.9181 1.88669C62.0135 1.75385 62.1562 1.66258 62.3168 1.63165C62.4774 1.60072 62.6438 1.63249 62.7817 1.72041V1.72681Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M64.1635 2.93571L64.2787 3.05722C64.3693 3.16898 64.4154 3.31037 64.4079 3.45408C64.4005 3.59779 64.34 3.73364 64.2382 3.8354C64.1364 3.93716 64.0005 3.99761 63.8568 4.00508C63.713 4.01255 63.5716 3.96651 63.4598 3.87585L63.3511 3.77352C63.2961 3.72019 63.2521 3.65654 63.2217 3.58622C63.1912 3.5159 63.175 3.44027 63.1738 3.36366C63.1726 3.28705 63.1865 3.21096 63.2147 3.13972C63.243 3.06849 63.2849 3.00351 63.3383 2.9485C63.3916 2.89349 63.4553 2.84952 63.5256 2.81911C63.596 2.7887 63.6716 2.77243 63.7482 2.77124C63.8249 2.77005 63.901 2.78397 63.9722 2.81219C64.0435 2.84041 64.1085 2.88238 64.1635 2.93571Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M65.3083 4.3234L65.4107 4.45131C65.4969 4.56846 65.5332 4.71498 65.5116 4.85881C65.49 5.00263 65.4123 5.13206 65.2955 5.21877C65.1826 5.30271 65.0415 5.33962 64.902 5.32173C64.7624 5.30384 64.6352 5.23255 64.5471 5.12284L64.4511 5.00772C64.3993 4.95232 64.3596 4.88681 64.3343 4.81531C64.309 4.7438 64.2988 4.66785 64.3043 4.59221C64.3098 4.51658 64.3309 4.4429 64.3663 4.37581C64.4016 4.30871 64.4505 4.24965 64.5097 4.20233C64.569 4.15501 64.6374 4.12046 64.7107 4.10084C64.784 4.08122 64.8605 4.07696 64.9355 4.08833C65.0105 4.0997 65.0824 4.12645 65.1465 4.16691C65.2107 4.20736 65.2658 4.26064 65.3083 4.3234Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M66.3447 5.78809L66.4279 5.92239C66.5025 6.03604 66.5289 6.17468 66.5014 6.30781C66.4738 6.44094 66.3944 6.55766 66.2807 6.63229C66.1671 6.70692 66.0284 6.73336 65.8952 6.70577C65.762 6.67818 65.6453 6.59884 65.5706 6.48519L65.4811 6.35729C65.403 6.24534 65.3727 6.10698 65.3967 5.97265C65.4207 5.83831 65.497 5.71901 65.609 5.64099C65.721 5.56297 65.8594 5.53261 65.9938 5.5566C66.1281 5.58058 66.2475 5.65695 66.3255 5.7689L66.3447 5.78809Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M67.2276 7.32931L67.266 7.39966C67.2961 7.45409 67.3151 7.51399 67.3217 7.57583C67.3284 7.63768 67.3226 7.70023 67.3047 7.75981C67.2868 7.81939 67.2572 7.87479 67.2176 7.92277C67.178 7.97076 67.1292 8.01034 67.0741 8.03921C66.9668 8.10038 66.8399 8.11723 66.7204 8.08617C66.6009 8.0551 66.4983 7.97858 66.4344 7.87293L66.396 7.80258C66.3337 7.69687 66.3148 7.5711 66.3435 7.45178C66.3721 7.33246 66.446 7.22894 66.5495 7.16303C66.6556 7.09962 66.7825 7.08083 66.9025 7.1108C67.0224 7.14077 67.1255 7.21705 67.1893 7.32292L67.2276 7.32931Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M34.391 11.5886L34.4678 11.7293C34.5018 11.7923 34.5231 11.8614 34.5304 11.9326C34.5377 12.0038 34.5309 12.0758 34.5105 12.1444C34.49 12.2129 34.4562 12.2768 34.411 12.3324C34.3658 12.3879 34.3101 12.434 34.2471 12.468C34.1841 12.502 34.115 12.5233 34.0438 12.5306C33.9725 12.5379 33.9005 12.5312 33.8319 12.5107C33.7633 12.4902 33.6994 12.4564 33.6439 12.4112C33.5883 12.366 33.5422 12.3103 33.5082 12.2474L33.4378 12.1067C33.3905 11.9811 33.3913 11.8424 33.4401 11.7173C33.4889 11.5923 33.5823 11.4897 33.7022 11.4294C33.8221 11.369 33.9602 11.3552 34.0897 11.3905C34.2192 11.4258 34.3311 11.5078 34.4038 11.6206L34.391 11.5886Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M35.0755 12.8549L35.229 13.1363C35.2674 13.2042 35.2919 13.2791 35.3011 13.3565C35.3102 13.4339 35.3039 13.5124 35.2825 13.5874C35.2611 13.6624 35.2249 13.7324 35.1762 13.7933C35.1275 13.8542 35.0672 13.9048 34.9987 13.9422C34.9303 13.9807 34.855 14.0053 34.777 14.0145C34.6991 14.0238 34.6201 14.0175 34.5446 13.9961C34.469 13.9747 34.3985 13.9386 34.337 13.8898C34.2755 13.841 34.2243 13.7806 34.1863 13.7119C34.1891 13.6993 34.1891 13.6862 34.1863 13.6736L34.0455 13.3858C33.9799 13.2449 33.9726 13.0838 34.0254 12.9376C34.0781 12.7914 34.1865 12.672 34.327 12.6055C34.4603 12.5455 34.6113 12.5379 34.75 12.5841C34.8886 12.6303 35.0048 12.727 35.0755 12.8549Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M35.8432 14.2557L36.0031 14.5308C36.0683 14.675 36.0777 14.8384 36.0294 14.9892C35.9811 15.1399 35.8786 15.2675 35.7417 15.347C35.6048 15.4266 35.4432 15.4526 35.2883 15.42C35.1333 15.3873 34.9959 15.2983 34.9028 15.1703L34.7557 14.8825C34.7139 14.7412 34.7223 14.5898 34.7794 14.4539C34.8365 14.318 34.9387 14.206 35.0689 14.1368C35.199 14.0676 35.3491 14.0455 35.4936 14.0742C35.6382 14.1028 35.7685 14.1805 35.8624 14.2941L35.8432 14.2557Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M36.6364 15.6242L36.8027 15.8928C36.8529 15.9667 36.887 16.0502 36.9028 16.1381C36.9187 16.2259 36.916 16.3161 36.895 16.4029C36.8739 16.4896 36.8348 16.571 36.7804 16.6418C36.7259 16.7125 36.6573 16.7711 36.5788 16.8137C36.4269 16.9058 36.2446 16.934 36.072 16.892C35.8993 16.8501 35.7504 16.7414 35.6576 16.5899L35.4977 16.3021C35.4129 16.1494 35.3922 15.9693 35.4402 15.8014C35.4882 15.6335 35.6009 15.4915 35.7536 15.4067C35.9063 15.3219 36.0864 15.3012 36.2544 15.3492C36.4224 15.3972 36.5644 15.5099 36.6492 15.6626L36.6364 15.6242Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M37.4809 16.9545L37.6537 17.2103C37.7324 17.2818 37.7942 17.37 37.8343 17.4685C37.8744 17.567 37.8918 17.6732 37.8853 17.7793C37.8789 17.8855 37.8486 17.9888 37.7968 18.0817C37.7451 18.1746 37.6731 18.2547 37.5862 18.316C37.4993 18.3773 37.3998 18.4184 37.2949 18.4361C37.19 18.4538 37.0825 18.4478 36.9803 18.4184C36.8781 18.389 36.7837 18.337 36.7043 18.2663C36.6249 18.1955 36.5624 18.1079 36.5214 18.0098L36.3486 17.7284C36.2512 17.5714 36.2201 17.3823 36.2621 17.2024C36.3041 17.0225 36.4157 16.8667 36.5725 16.769C36.7258 16.6748 36.9093 16.6429 37.0854 16.6797C37.2615 16.7166 37.4168 16.8195 37.5193 16.9673L37.4809 16.9545Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M38.3894 18.2144L38.5749 18.4574C38.6349 18.5343 38.6793 18.6222 38.7054 18.7162C38.7314 18.8102 38.7387 18.9084 38.7269 19.0052C38.715 19.102 38.6842 19.1955 38.6361 19.2804C38.5881 19.3653 38.5238 19.4399 38.4469 19.4999C38.3701 19.56 38.2821 19.6043 38.1881 19.6303C38.0941 19.6564 37.9959 19.6637 37.8991 19.6518C37.8022 19.64 37.7087 19.6091 37.6238 19.5611C37.5389 19.5131 37.4643 19.4488 37.4042 19.372L37.2059 19.1034C37.1086 18.9481 37.0729 18.762 37.1056 18.5817C37.1383 18.4014 37.2372 18.2398 37.3829 18.1286C37.5286 18.0174 37.7106 17.9645 37.8932 17.9804C38.0758 17.9963 38.2459 18.0797 38.3702 18.2144H38.3894Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M39.3745 19.3785L39.5857 19.596C39.6554 19.6678 39.7103 19.7526 39.7472 19.8456C39.7841 19.9387 39.8024 20.038 39.8009 20.1381C39.7994 20.2382 39.7782 20.337 39.7386 20.4289C39.6989 20.5207 39.6415 20.6039 39.5697 20.6736C39.4978 20.7433 39.413 20.7982 39.3199 20.8351C39.2269 20.8721 39.1275 20.8903 39.0274 20.8888C38.9273 20.8873 38.8285 20.8661 38.7366 20.8265C38.6447 20.7868 38.5615 20.7294 38.4917 20.6576L38.2614 20.4082C38.124 20.2623 38.0502 20.0679 38.0562 19.8676C38.0622 19.6673 38.1475 19.4776 38.2934 19.3402C38.4393 19.2028 38.6339 19.129 38.8342 19.135C39.0346 19.141 39.2243 19.2263 39.3618 19.3721L39.3745 19.3785Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M40.4747 20.3953L40.705 20.5744C40.8545 20.706 40.9486 20.8894 40.9681 21.0876C40.9877 21.2859 40.9313 21.4842 40.8103 21.6425C40.6893 21.8007 40.5128 21.9072 40.3163 21.9405C40.1199 21.9737 39.9181 21.9312 39.7518 21.8215L39.4831 21.5976C39.336 21.4649 39.2449 21.2811 39.2284 21.0837C39.2118 20.8863 39.271 20.69 39.3938 20.5346C39.5167 20.3792 39.6942 20.2763 39.8901 20.2469C40.0861 20.2174 40.2859 20.2636 40.4491 20.3761L40.4747 20.3953Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M41.6901 21.1946L41.946 21.3289C42.1278 21.4299 42.2635 21.5972 42.3248 21.7959C42.3861 21.9946 42.3682 22.2093 42.2749 22.395C42.1816 22.5808 42.02 22.7234 41.824 22.7929C41.628 22.8624 41.4127 22.8534 41.2231 22.7679L40.9097 22.6017C40.8165 22.552 40.7342 22.4844 40.6673 22.4028C40.6004 22.3211 40.5504 22.227 40.52 22.126C40.4897 22.0249 40.4797 21.9188 40.4906 21.8139C40.5015 21.7089 40.533 21.6071 40.5834 21.5144C40.6814 21.3308 40.8476 21.193 41.0463 21.1307C41.2449 21.0685 41.4601 21.0869 41.6454 21.1819L41.6901 21.1946Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M43.0079 21.7256L43.283 21.7959H43.315C43.5279 21.8493 43.7109 21.9851 43.8237 22.1734C43.9364 22.3617 43.9697 22.5871 43.9163 22.8C43.8629 23.0129 43.727 23.1958 43.5387 23.3085C43.3503 23.4213 43.1249 23.4546 42.912 23.4012L42.5729 23.3052C42.4683 23.2765 42.3705 23.2272 42.2852 23.1604C42.1998 23.0935 42.1286 23.0104 42.0756 22.9158C42.0226 22.8212 41.989 22.717 41.9766 22.6093C41.9643 22.5016 41.9734 22.3925 42.0036 22.2884C42.0634 22.0835 42.1997 21.9096 42.3843 21.8024C42.5688 21.6953 42.7875 21.6632 42.9951 21.7128L43.0079 21.7256Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M44.4089 21.9495H44.6968C44.9224 21.9571 45.1358 22.0541 45.29 22.219C45.4441 22.3839 45.5264 22.6033 45.5188 22.8289C45.5112 23.0545 45.4142 23.2678 45.2492 23.4219C45.0843 23.576 44.8649 23.6583 44.6392 23.6507H44.281C44.057 23.6405 43.8463 23.5418 43.6951 23.3763C43.5439 23.2108 43.4647 22.992 43.4749 22.7681C43.4851 22.5442 43.5838 22.3335 43.7494 22.1824C43.9149 22.0313 44.1338 21.9521 44.3577 21.9623L44.4089 21.9495Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M45.8356 21.8855L46.1107 21.8343H46.1491C46.3702 21.8104 46.5922 21.8721 46.7692 22.0067C46.9463 22.1414 47.0651 22.3387 47.1011 22.5581C47.1371 22.7776 47.0877 23.0025 46.963 23.1867C46.8383 23.3708 46.6478 23.5003 46.4305 23.5483L46.0787 23.5995C45.8522 23.6359 45.6205 23.581 45.4345 23.4466C45.2486 23.3123 45.1236 23.1096 45.0872 22.8832C45.0507 22.6567 45.1057 22.4251 45.24 22.2392C45.3744 22.0533 45.5771 21.9283 45.8036 21.8919L45.8356 21.8855Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M47.1982 21.5336L47.4605 21.4249H47.4925C47.7027 21.3625 47.9288 21.3812 48.1259 21.4772C48.3231 21.5733 48.477 21.7398 48.5574 21.9439C48.6377 22.1479 48.6386 22.3746 48.5599 22.5793C48.4812 22.784 48.3286 22.9517 48.1322 23.0493L47.7931 23.1772C47.5829 23.2397 47.3568 23.221 47.1597 23.1249C46.9625 23.0288 46.8086 22.8623 46.7282 22.6583C46.6479 22.4542 46.647 22.2275 46.7257 22.0228C46.8044 21.8182 46.957 21.6504 47.1534 21.5528L47.1982 21.5336Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M48.4585 20.8941L48.6952 20.7342C48.8895 20.608 49.1257 20.5632 49.3527 20.6095C49.5797 20.6558 49.7795 20.7895 49.9088 20.9818C50.0381 21.174 50.0866 21.4094 50.0439 21.6371C50.0011 21.8647 49.8706 22.0665 49.6804 22.1988L49.3861 22.3907C49.1918 22.5196 48.9543 22.5661 48.7258 22.5199C48.4972 22.4737 48.2964 22.3386 48.1674 22.1444C48.0385 21.9502 47.992 21.7128 48.0382 21.4843C48.0844 21.2558 48.2195 21.055 48.4137 20.9261L48.4585 20.8941Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M49.6036 19.9987L49.8147 19.8005C49.9897 19.6743 50.2045 19.6156 50.4194 19.6351C50.6343 19.6547 50.835 19.7511 50.9844 19.9068C51.1339 20.0624 51.2221 20.2668 51.2328 20.4822C51.2436 20.6977 51.1761 20.9098 51.0429 21.0796L50.787 21.3098C50.7016 21.3937 50.5999 21.4593 50.4883 21.5027C50.3767 21.546 50.2574 21.5662 50.1377 21.562C50.018 21.5579 49.9004 21.5294 49.7921 21.4783C49.6838 21.4272 49.587 21.3547 49.5076 21.265C49.4249 21.1792 49.3603 21.0776 49.3174 20.9664C49.2745 20.8552 49.2542 20.7366 49.2578 20.6174C49.2614 20.4983 49.2887 20.3811 49.3382 20.2726C49.3877 20.1642 49.4583 20.0667 49.546 19.9859L49.6036 19.9987Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M50.6269 18.9245L50.8189 18.6943C50.9761 18.5289 51.1902 18.4293 51.4181 18.4155C51.6459 18.4017 51.8704 18.4748 52.0465 18.62C52.2226 18.7652 52.337 18.9717 52.3668 19.1979C52.3966 19.4242 52.3395 19.6533 52.207 19.8391L51.9895 20.1013C51.8311 20.2641 51.617 20.3612 51.3901 20.3731C51.1631 20.3849 50.9401 20.3107 50.7655 20.1653C50.5909 20.0199 50.4777 19.8139 50.4484 19.5886C50.4192 19.3633 50.4761 19.1353 50.6077 18.9501L50.6269 18.9245Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M51.5546 17.7155L51.7273 17.4661C51.8631 17.2685 52.0718 17.1329 52.3075 17.0891C52.5432 17.0453 52.7867 17.0969 52.9844 17.2326C53.182 17.3683 53.3177 17.577 53.3615 17.8127C53.4052 18.0483 53.3536 18.2918 53.2179 18.4894L53.026 18.7644C52.878 18.923 52.6781 19.0234 52.4624 19.0474C52.2468 19.0715 52.0297 19.0176 51.8504 18.8955C51.671 18.7734 51.5413 18.5912 51.4847 18.3818C51.4282 18.1724 51.4484 17.9496 51.5418 17.7539L51.5546 17.7155Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M52.3927 16.4172L52.5526 16.155C52.6156 16.0517 52.6984 15.9618 52.7961 15.8904C52.8939 15.8191 53.0047 15.7677 53.1223 15.7392C53.24 15.7107 53.362 15.7056 53.4816 15.7243C53.6012 15.743 53.7159 15.785 53.8193 15.848C53.9226 15.911 54.0125 15.9937 54.0839 16.0914C54.1552 16.1892 54.2066 16.3 54.2351 16.4176C54.2636 16.5351 54.2687 16.6572 54.25 16.7767C54.2314 16.8963 54.1893 17.011 54.1263 17.1143L53.9536 17.3957C53.8289 17.6026 53.6271 17.7516 53.3925 17.8097C53.158 17.8679 52.9099 17.8305 52.703 17.7059C52.496 17.5812 52.347 17.3794 52.2888 17.145C52.2306 16.9105 52.268 16.6625 52.3927 16.4556V16.4172Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M53.154 15.0679L53.3012 14.7865C53.4233 14.5833 53.6192 14.4349 53.848 14.3724C54.0768 14.3099 54.3209 14.3381 54.5294 14.451C54.738 14.5639 54.895 14.7529 54.9677 14.9786C55.0403 15.2043 55.0231 15.4493 54.9196 15.6627L54.7597 15.9505C54.629 16.134 54.4355 16.2632 54.2159 16.3137C53.9963 16.3642 53.7658 16.3325 53.568 16.2246C53.3703 16.1167 53.2189 15.94 53.1426 15.728C53.0663 15.5161 53.0704 15.2835 53.154 15.0743V15.0679Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M53.9086 13.6735L54.0558 13.3921C54.1677 13.1725 54.3624 13.0063 54.5969 12.9301C54.8315 12.854 55.0867 12.8741 55.3064 12.986C55.5261 13.098 55.6923 13.2926 55.7685 13.5271C55.8447 13.7615 55.8246 14.0167 55.7126 14.2363L55.5655 14.5241C55.5147 14.6404 55.4405 14.745 55.3476 14.8315C55.2547 14.918 55.145 14.9845 55.0254 15.0269C54.9058 15.0693 54.7787 15.0867 54.652 15.078C54.5254 15.0694 54.4019 15.0348 54.2891 14.9765C54.1764 14.9181 54.0768 14.8373 53.9966 14.7389C53.9164 14.6406 53.8572 14.5268 53.8227 14.4047C53.7883 14.2826 53.7792 14.1546 53.7962 14.0289C53.8132 13.9031 53.8558 13.7822 53.9214 13.6735H53.9086Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M54.7788 11.9726C54.8959 11.7683 55.0868 11.6167 55.3123 11.5488C55.5378 11.4809 55.7807 11.5019 55.9912 11.6076C56.2017 11.7132 56.3637 11.8954 56.444 12.1167C56.5242 12.338 56.5167 12.5817 56.4229 12.7976L56.2821 13.0854C56.2283 13.1937 56.1538 13.2904 56.0626 13.37C55.9715 13.4495 55.8656 13.5103 55.7509 13.5489C55.6363 13.5875 55.5151 13.6031 55.3944 13.5949C55.2737 13.5867 55.1558 13.5549 55.0475 13.5011C54.9391 13.4473 54.8424 13.3728 54.7628 13.2817C54.6833 13.1905 54.6225 13.0847 54.5839 12.97C54.5452 12.8554 54.5296 12.7343 54.5378 12.6137C54.546 12.493 54.5779 12.3751 54.6316 12.2668L54.7788 11.9726Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M55.3609 10.8278L55.508 10.54C55.6259 10.3406 55.8152 10.1934 56.0375 10.1281C56.2599 10.0628 56.4987 10.0843 56.7058 10.1882C56.9129 10.2921 57.0728 10.4708 57.1533 10.688C57.2337 10.9053 57.2287 11.1449 57.1393 11.3586L56.9921 11.6464C56.9418 11.7589 56.8693 11.86 56.779 11.9438C56.6886 12.0275 56.5823 12.0922 56.4663 12.1338C56.3504 12.1755 56.2272 12.1933 56.1042 12.1861C55.9812 12.179 55.8609 12.1471 55.7505 12.0924C55.6401 12.0377 55.5419 11.9612 55.4618 11.8676C55.3818 11.774 55.3214 11.6651 55.2844 11.5476C55.2474 11.4301 55.2346 11.3064 55.2466 11.1838C55.2586 11.0612 55.2953 10.9423 55.3545 10.8342L55.3609 10.8278Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M56.0966 9.38866L56.2501 9.10086C56.3604 8.88799 56.5508 8.72764 56.7793 8.65507C57.0079 8.58251 57.2559 8.60368 57.4688 8.71393C57.6817 8.82418 57.8421 9.01449 57.9147 9.24297C57.9873 9.47145 57.9661 9.7194 57.8558 9.93227L57.7087 10.2137C57.6583 10.3265 57.5854 10.4278 57.4944 10.5114C57.4035 10.5951 57.2964 10.6593 57.1798 10.7001C57.0632 10.741 56.9395 10.7576 56.8162 10.749C56.6929 10.7405 56.5727 10.7068 56.4629 10.6502C56.3531 10.5935 56.256 10.5151 56.1775 10.4197C56.0991 10.3242 56.0409 10.2138 56.0066 10.0951C55.9724 9.97639 55.9627 9.85196 55.9781 9.7294C55.9936 9.60683 56.0339 9.48872 56.0966 9.38226V9.38866Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M56.8641 7.95622L57.0241 7.66842C57.1493 7.47952 57.3411 7.34468 57.5613 7.29076C57.7815 7.23685 58.0139 7.26779 58.2123 7.37745C58.4107 7.4871 58.5605 7.66742 58.632 7.88251C58.7034 8.09761 58.6912 8.3317 58.5978 8.5382L58.4506 8.81321C58.3361 9.02184 58.1432 9.1764 57.9147 9.24297C57.6862 9.30953 57.4407 9.28265 57.232 9.16816C57.0233 9.05367 56.8686 8.86098 56.8021 8.6325C56.7355 8.40402 56.7624 8.15845 56.8769 7.94982L56.8641 7.95622Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M57.6893 6.53634L57.8621 6.25494C57.9842 6.05309 58.1816 5.90803 58.4107 5.85166C58.6399 5.79528 58.882 5.83223 59.0839 5.95435C59.2858 6.07648 59.4309 6.27378 59.4873 6.50287C59.5437 6.73195 59.5067 6.97404 59.3846 7.17589L59.2247 7.4381C59.0931 7.62014 58.898 7.74612 58.6779 7.79106C58.4578 7.836 58.2289 7.79661 58.0365 7.68072C57.8441 7.56483 57.7022 7.38089 57.6391 7.16537C57.576 6.94985 57.5962 6.71848 57.6957 6.51715L57.6893 6.53634Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M58.5915 5.14202L58.7834 4.86702C58.9216 4.68615 59.1244 4.56566 59.3494 4.53071C59.5743 4.49577 59.8041 4.54907 59.9907 4.67949C60.1773 4.80991 60.3063 5.00736 60.3507 5.2306C60.3951 5.45384 60.3516 5.68561 60.2291 5.87751L60.05 6.12693C59.9168 6.31945 59.7126 6.45119 59.4823 6.49316C59.2519 6.53514 59.0143 6.48392 58.8218 6.35077C58.6292 6.21762 58.4974 6.01344 58.4554 5.78316C58.4134 5.55288 58.4647 5.31536 58.5979 5.12284L58.5915 5.14202Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M59.6022 3.79911L59.8197 3.54329C59.969 3.36519 60.183 3.25368 60.4145 3.23329C60.6461 3.2129 60.8763 3.2853 61.0544 3.43457C61.2325 3.58383 61.3441 3.79773 61.3645 4.02922C61.3849 4.2607 61.3125 4.4908 61.1631 4.6689L60.9712 4.89913C60.8983 4.98851 60.8082 5.06249 60.7064 5.11674C60.6045 5.171 60.4929 5.20446 60.378 5.21518C60.2631 5.22589 60.1472 5.21364 60.0371 5.17915C59.927 5.14465 59.8248 5.0886 59.7366 5.01425C59.559 4.86494 59.4473 4.65171 59.4258 4.4207C59.4042 4.1897 59.4745 3.9595 59.6214 3.77992L59.6022 3.79911Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M60.7664 2.55182L61.0223 2.31518C61.192 2.15829 61.417 2.07519 61.648 2.08419C61.8789 2.09319 62.0968 2.19353 62.2538 2.36315C62.4107 2.53277 62.4938 2.75777 62.4848 2.98865C62.4758 3.21953 62.3754 3.43738 62.2058 3.59428L61.9947 3.79254C61.825 3.95028 61.5996 4.03419 61.3681 4.02579C61.1365 4.0174 60.9178 3.91739 60.76 3.74777C60.6022 3.57815 60.5183 3.35282 60.5267 3.12134C60.5351 2.88986 60.6351 2.67119 60.8048 2.51344L60.7664 2.55182Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M62.1099 1.46479L62.4042 1.27293C62.5917 1.14233 62.8234 1.09152 63.0483 1.1317C63.2733 1.17188 63.473 1.29975 63.6037 1.48718C63.7343 1.67461 63.7851 1.90625 63.7449 2.13113C63.7047 2.35601 63.5768 2.55573 63.3894 2.68633L63.1463 2.84622C63.0547 2.91 62.9513 2.95486 62.8421 2.97814C62.733 3.00143 62.6203 3.00268 62.5106 2.98183C62.401 2.96098 62.2966 2.91845 62.2036 2.85672C62.1107 2.79499 62.031 2.71532 61.9692 2.62238C61.9061 2.53003 61.8618 2.42615 61.8389 2.31667C61.816 2.20719 61.8149 2.09427 61.8357 1.98437C61.8565 1.87447 61.8988 1.76975 61.9601 1.67621C62.0214 1.58266 62.1006 1.50213 62.1931 1.43921L62.1099 1.46479Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M63.703 0.639732L64.0292 0.486242C64.2304 0.417481 64.4503 0.428991 64.6432 0.518372C64.8361 0.607754 64.987 0.768109 65.0646 0.966015C65.1421 1.16392 65.1403 1.38411 65.0594 1.58068C64.9785 1.77725 64.8249 1.93504 64.6305 2.02116H64.5922L64.3299 2.12988C64.1263 2.21469 63.8973 2.21517 63.6934 2.13121C63.4894 2.04726 63.3272 1.88574 63.2424 1.6822C63.1575 1.47866 63.157 1.24976 63.241 1.04586C63.325 0.841965 63.4866 0.679773 63.6902 0.594964L63.703 0.639732Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M65.4171 0.159964L65.769 0.115195C65.8733 0.0998988 65.9796 0.105545 66.0817 0.1318C66.1838 0.158055 66.2796 0.204391 66.3636 0.268105C66.4476 0.331819 66.5181 0.411633 66.5708 0.502876C66.6236 0.594119 66.6576 0.694961 66.671 0.799512C66.7011 1.00326 66.6513 1.21077 66.5322 1.37877C66.413 1.54676 66.2336 1.66229 66.0313 1.70128H65.9481L65.6666 1.74605C65.4554 1.78082 65.239 1.73028 65.065 1.60554C64.8911 1.4808 64.7738 1.29209 64.739 1.08091C64.7043 0.869739 64.7548 0.6534 64.8796 0.479489C65.0044 0.305578 65.1931 0.188343 65.4043 0.153572L65.4171 0.159964Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M67.1829 0.0705605H67.5347C67.6364 0.0770613 67.7359 0.103586 67.8273 0.148611C67.9188 0.193636 68.0004 0.256277 68.0676 0.332934C68.1347 0.409591 68.1861 0.498757 68.2187 0.595312C68.2513 0.691867 68.2645 0.793907 68.2576 0.895579C68.2428 1.09743 68.1508 1.28584 68.0007 1.42163C67.8506 1.55742 67.6539 1.63014 67.4515 1.62466H67.0933C66.897 1.60075 66.7169 1.50383 66.5889 1.35319C66.4608 1.20255 66.3942 1.00924 66.4023 0.811717C66.4103 0.614196 66.4925 0.42695 66.6324 0.287243C66.7723 0.147537 66.9597 0.0656126 67.1573 0.0577717L67.1829 0.0705605Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M68.9292 0.338976L69.2683 0.441306C69.4617 0.494736 69.626 0.622789 69.7249 0.7973C69.8239 0.97181 69.8495 1.17848 69.7961 1.37185C69.7426 1.56522 69.6145 1.72943 69.44 1.82838C69.2654 1.92733 69.0587 1.95291 68.8653 1.89948H68.8269L68.5518 1.82913C68.4508 1.80815 68.355 1.76685 68.2705 1.70774C68.1859 1.64863 68.1142 1.57294 68.0598 1.48528C68.0053 1.39761 67.9693 1.2998 67.9539 1.19779C67.9384 1.09577 67.9439 0.991686 67.97 0.891852C67.996 0.792018 68.0421 0.698518 68.1054 0.617041C68.1687 0.535565 68.248 0.467811 68.3383 0.417895C68.4286 0.367978 68.5281 0.336943 68.6308 0.326675C68.7335 0.316407 68.8372 0.327122 68.9356 0.358167L68.9292 0.338976Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M70.5668 0.985079L70.8739 1.15136C71.0116 1.25769 71.1071 1.40936 71.1436 1.57944C71.18 1.74953 71.1549 1.92703 71.0729 2.0804C70.9908 2.23377 70.857 2.3531 70.6953 2.41719C70.5335 2.48128 70.3543 2.48598 70.1894 2.43046L69.9335 2.30255C69.7694 2.20679 69.6483 2.05178 69.5952 1.86943C69.542 1.68708 69.5608 1.4913 69.6478 1.32241C69.7347 1.15353 69.8831 1.0244 70.0624 0.961644C70.2417 0.898886 70.4383 0.907275 70.6116 0.985079H70.5668Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M72.0191 1.94423L72.2813 2.16807C72.3517 2.22715 72.4097 2.29954 72.452 2.38108C72.4942 2.46263 72.52 2.55172 72.5277 2.64325C72.5354 2.73477 72.525 2.82692 72.497 2.91439C72.469 3.00187 72.424 3.08295 72.3645 3.15298C72.2477 3.28908 72.0834 3.37547 71.905 3.39449C71.7267 3.41351 71.5478 3.36373 71.4049 3.25531L71.1683 3.07624C71.0853 3.02352 71.0142 2.95415 70.9594 2.87253C70.9046 2.79091 70.8674 2.69881 70.8501 2.60206C70.8328 2.50532 70.8358 2.40603 70.8589 2.31049C70.8819 2.21496 70.9246 2.12525 70.9841 2.04705C71.0437 1.96885 71.1188 1.90387 71.2048 1.85622C71.2908 1.80857 71.3857 1.77928 71.4836 1.77022C71.5815 1.76115 71.6802 1.77251 71.7735 1.80356C71.8668 1.83462 71.9526 1.8847 72.0255 1.95063L72.0191 1.94423Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M73.2537 3.12127L73.4776 3.37069C73.5972 3.4996 73.6607 3.67073 73.6541 3.84644C73.6475 4.02215 73.5713 4.18805 73.4424 4.30763C73.3786 4.36684 73.3037 4.4129 73.222 4.44318C73.1404 4.47345 73.0536 4.48735 72.9665 4.48409C72.7908 4.47749 72.6248 4.40136 72.5052 4.27245L72.2941 4.05501C72.1703 3.92864 72.1017 3.75826 72.1035 3.58135C72.1053 3.40444 72.1773 3.2355 72.3037 3.11168C72.4301 2.98785 72.6005 2.9193 72.7775 2.9211C72.9545 2.9229 73.1234 2.9949 73.2473 3.12127H73.2537Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M74.3094 4.41316L74.5013 4.68177C74.5958 4.81764 74.6339 4.98485 74.6077 5.14824C74.5814 5.31163 74.4928 5.45848 74.3605 5.55795C74.2284 5.64878 74.067 5.6867 73.9083 5.6642C73.7495 5.6417 73.605 5.56041 73.5033 5.43644L73.3114 5.19981C73.2349 5.14194 73.1724 5.06761 73.1286 4.98233C73.0847 4.89705 73.0606 4.803 73.058 4.70714C73.0554 4.61127 73.0744 4.51605 73.1135 4.42852C73.1527 4.34099 73.2111 4.26339 73.2844 4.20147C73.3576 4.13954 73.4439 4.09488 73.5367 4.07078C73.6295 4.04669 73.7266 4.04377 73.8208 4.06226C73.9149 4.08074 74.0036 4.12015 74.0805 4.17757C74.1573 4.23499 74.2202 4.30895 74.2646 4.39397L74.3094 4.41316Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M75.2241 5.78166L75.3969 6.06306C75.4701 6.19342 75.4909 6.34676 75.4551 6.49191C75.4193 6.63707 75.3296 6.76316 75.2042 6.84458C75.0788 6.926 74.9271 6.95663 74.7799 6.93026C74.6327 6.9039 74.501 6.8225 74.4117 6.70261L74.239 6.44679C74.1883 6.38288 74.1514 6.30924 74.1304 6.23045C74.1094 6.15165 74.1049 6.06939 74.117 5.98877C74.1292 5.90814 74.1578 5.83088 74.2011 5.76177C74.2444 5.69267 74.3014 5.6332 74.3687 5.58707C74.4359 5.54093 74.5119 5.50911 74.592 5.49358C74.6721 5.47805 74.7545 5.47914 74.8341 5.49679C74.9137 5.51444 74.9889 5.54827 75.0549 5.59617C75.1209 5.64408 75.1763 5.70504 75.2177 5.77526L75.2241 5.78166Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M76.0491 7.22064L76.1259 7.36134C76.1824 7.48474 76.1906 7.62479 76.149 7.75395C76.1074 7.88311 76.019 7.99206 75.9012 8.05938C75.7833 8.1267 75.6446 8.14753 75.5121 8.11777C75.3797 8.08801 75.2632 8.00982 75.1855 7.89856L75.1024 7.76426C75.026 7.64128 75.0017 7.49302 75.0347 7.3521C75.0676 7.21117 75.1553 7.08912 75.2783 7.01279C75.4013 6.93646 75.5496 6.91211 75.6906 6.94509C75.8315 6.97808 75.9536 7.06569 76.03 7.18867L76.0491 7.22064Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M43.2382 11.5566C44.3587 13.7799 45.6416 15.9175 47.0765 17.9521C47.7696 18.9234 48.6041 19.7857 49.5522 20.5103C50.4482 21.1902 51.5029 21.6305 52.6164 21.7894C53.719 21.9353 54.8406 21.8124 55.8854 21.4313C56.9352 21.0178 57.881 20.378 58.6553 19.5574C60.2731 17.7313 61.6176 15.6805 62.6472 13.4689C63.8114 11.2433 64.8926 8.9281 66.236 6.68328C66.9071 5.53506 67.6777 4.44792 68.5389 3.43438C69.4397 2.37766 70.5395 1.50842 71.7759 0.876183C73.0522 0.241448 74.4695 -0.05704 75.8935 0.00899237C77.3174 0.0750247 78.701 0.503389 79.9131 1.25351C81.05 2.00807 82.0477 2.95363 82.8622 4.04834C83.6439 5.09443 84.3392 6.20237 84.9412 7.3612C85.0076 7.5051 85.0182 7.66851 84.9709 7.81975C84.9236 7.971 84.8218 8.09931 84.6853 8.17982C84.5517 8.25225 84.3956 8.2714 84.2485 8.23343C84.1013 8.19547 83.974 8.10319 83.8921 7.97517C82.5679 5.87745 81.0837 3.80532 79.075 2.66052C78.0995 2.09842 76.9971 1.79353 75.8713 1.77451C74.7456 1.75549 73.6334 2.02297 72.6395 2.5518C70.6756 3.62624 69.1978 5.62802 67.9632 7.73853C66.7285 9.84904 65.6666 12.177 64.4959 14.4602C63.3554 16.8487 61.8679 19.0555 60.0819 21.0092C59.093 22.0232 57.8943 22.809 56.5699 23.3115C55.2135 23.7965 53.7551 23.9242 52.335 23.6825C50.9305 23.4355 49.6106 22.8395 48.4967 21.9493C47.4397 21.0987 46.5167 20.0941 45.7587 18.969C44.357 16.7998 43.1435 14.5147 42.1315 12.1386C42.072 11.9917 42.0691 11.828 42.1235 11.6791C42.1778 11.5302 42.2856 11.4068 42.4258 11.3328C42.566 11.2754 42.722 11.2696 42.8661 11.3164C43.0102 11.3633 43.133 11.4597 43.2126 11.5886L43.2382 11.5566Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M9.21203 42.6516H14.1634V43.726H9.21203V49.7634H6.69795V37.1962H15.4109L15.8267 38.2707H9.21203V42.6516Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M28.4994 45.8941C28.4994 48.2093 27.3863 50 23.8678 50C20.2407 50 18.6414 48.1709 18.6414 45.8749V37.1962H21.1235V45.8941C21.1235 48.1197 22.5052 48.8552 24.322 48.8552C26.1388 48.8552 27.3927 48.1197 27.3927 45.9133V37.1962H28.525L28.4994 45.8941Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M41.639 48.6825L41.2104 49.7634H32.6383V37.1962H35.114V48.7081L41.639 48.6825Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M53.429 48.6825L53.0003 49.7634H44.4474V37.1962H46.9295V48.7081L53.429 48.6825Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M53.3265 44.4998H58.8409V46.0475H53.3265V44.4998Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M64.9565 42.6516H69.9079V43.726H64.9565V49.7634H62.4425V37.1962H71.1298L71.5456 38.2707H64.9565V42.6516Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M74.3859 37.1962H76.868V49.7634H74.3859V37.1962Z",
                            fill: "white"
                        })]
                    })
                });
            var eC = e => {
                    let {
                        progress: t,
                        children: i
                    } = e, l = (0, C.useRef)(), a = (0, C.useRef)(), r = (0, C.useRef)();
                    return (0, c.LI)(() => {
                        let e = (0, b.uZ)(1.4 * t, 0, 1),
                            i = (0, b.uZ)(2.5 * t, 0, 1),
                            s = -30 * (0, b.Xp)((0, d.mZ)(e)),
                            C = (0, b.Qx)((0, b.lb)(1 - i)),
                            n = -320 * (0, b.Xp)((0, d.eE)(t)),
                            A = -1 * s,
                            c = 1 + (0, b.lb)(.08 * (0, d.w2)((0, b.yW)(t))),
                            o = window.requestAnimationFrame(() => {
                                l.current.style.setProperty("--shift", "".concat(s, "px")), a.current.style.opacity = C, a.current.style.transform = "translate(".concat(n, "%, ").concat(A, "px)"), r.current.style.transform = "scale(".concat(c, ")")
                            });
                        return () => window.cancelAnimationFrame(o)
                    }, [t]), (0, s.jsx)("div", {
                        className: "btlss-title-lockup container",
                        children: (0, s.jsxs)("div", {
                            ref: l,
                            className: "btlss-title-lockup__vshift",
                            children: [(0, s.jsx)("div", {
                                className: "btlss-title-lockup__icon",
                                children: (0, s.jsx)("div", {
                                    ref: a,
                                    className: "btlss-title-lockup__icon-trans",
                                    children: (0, s.jsx)(ei, {})
                                })
                            }), i, (0, s.jsx)("div", {
                                className: "btlss-title-lockup__icon",
                                children: (0, s.jsx)("div", {
                                    ref: r,
                                    className: "btlss-title-lockup__icon-trans",
                                    children: (0, s.jsx)(es, {})
                                })
                            })]
                        })
                    })
                },
                el = i(2525);
            let ea = (0, C.memo)(e => {
                let {
                    compareText: t,
                    losslessText: i,
                    activeContentIndex: l = 0,
                    inView: a = !1
                } = e, r = (0, C.useRef)(), n = (0, C.useRef)(), A = (0, el.E)(r, {
                    observe: a
                }), c = (0, el.E)(n, {
                    observe: a
                }), d = (0, b.ZO)(Math.max(null == A ? void 0 : A.height, null == c ? void 0 : c.height) || 0);
                return (0, s.jsx)("div", {
                    className: "btlss-fadeable-content container",
                    children: (0, s.jsxs)("div", {
                        className: "btlss-fadeable-content__block-wrap",
                        style: {
                            height: d
                        },
                        children: [(0, s.jsx)("div", {
                            ref: r,
                            className: j()("btlss-fadeable-content__block btlss-fadeable-content__block--out", 0 === l && "is-active"),
                            children: (0, s.jsx)(P(), {
                                blocks: t,
                                serializers: J.f
                            })
                        }), (0, s.jsx)("div", {
                            ref: n,
                            className: j()("btlss-fadeable-content__block btlss-fadeable-content__block--in", 1 === l && "is-active"),
                            children: (0, s.jsx)(P(), {
                                blocks: i,
                                serializers: J.f
                            })
                        })]
                    })
                })
            });
            var er = e => {
                    let {
                        activeContentIndex: t = 0,
                        inView: i = !1
                    } = e, l = (0, C.useRef)(), a = (0, C.useRef)(), r = (0, el.E)(l, {
                        observe: i
                    }), n = (0, el.E)(a, {
                        observe: i
                    }), A = (0, b.ZO)(Math.max(null == r ? void 0 : r.height, null == n ? void 0 : n.height) || 0);
                    return (0, s.jsx)("div", {
                        className: "btlss-fadeable-titles",
                        children: (0, s.jsxs)("div", {
                            className: "btlss-fadeable-titles__titles-wrap",
                            style: {
                                height: A
                            },
                            children: [(0, s.jsx)("h3", {
                                ref: l,
                                className: "large-title",
                                children: (0, s.jsx)("span", {
                                    className: j()("btlss-fadeable-title-text", "is-top", 0 === t && "is-active"),
                                    children: "Bluetooth vs. True Lossless"
                                })
                            }), (0, s.jsx)("h3", {
                                ref: a,
                                className: "large-title",
                                children: (0, s.jsxs)("span", {
                                    className: j()("btlss-fadeable-title-text", "is-bottom", 1 === t && "is-active"),
                                    children: ["TRUE", (0, s.jsx)("br", {}), "LOSSLESS"]
                                })
                            })]
                        })
                    })
                },
                en = e => {
                    let {
                        progress: t
                    } = e, i = (0, C.useRef)(), l = (0, C.useRef)();
                    return (0, c.LI)(() => {
                        let e = (0, b.uZ)((t - .1) * 1.1, 0, 1),
                            s = (0, d.w2)(e),
                            C = 1 - .2 * s,
                            a = (0, b.Qx)(1 - 2.4 * e),
                            r = (0, b.ZO)((1 - s) * 85),
                            n = window.requestAnimationFrame(() => {
                                i.current.style.opacity = a, i.current.style.transform = "translateX(".concat(-1 * r, "px) scale(").concat(C, ")"), l.current.style.transform = "translateX(".concat(r, "px)")
                            });
                        return () => window.cancelAnimationFrame(n)
                    }, [t]), (0, s.jsxs)("div", {
                        className: "btlss__desk-icons",
                        children: [(0, s.jsx)("div", {
                            className: "btlss__desk-icons-icon",
                            children: (0, s.jsx)("div", {
                                ref: i,
                                className: "btlss__desk-icons-icon-trans",
                                children: (0, s.jsx)(ei, {})
                            })
                        }), (0, s.jsx)("div", {
                            className: "btlss__desk-icons-icon",
                            children: (0, s.jsx)("div", {
                                ref: l,
                                className: "btlss__desk-icons-icon-trans",
                                children: (0, s.jsx)(es, {})
                            })
                        })]
                    })
                },
                eA = i(9447),
                ec = i(3034);
            let ed = (0, C.memo)(e => {
                    let {
                        title: t,
                        content: i,
                        expanded: C = !1,
                        onClick: l = () => {}
                    } = e, {
                        parentVariants: a,
                        childVariants: r
                    } = eA.slideDownAnimation;
                    return (0, s.jsxs)("div", {
                        className: j()("faq-item", C && "is-expanded"),
                        onClick: l,
                        children: [(0, s.jsxs)("div", {
                            className: "faq-item__header",
                            children: [(0, s.jsx)("div", {
                                className: "technical-title faq-title",
                                children: t
                            }), (0, s.jsx)(p.E.div, {
                                variants: {
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: .6
                                        }
                                    },
                                    hidden: {
                                        opacity: 0
                                    }
                                },
                                initial: "hidden",
                                animate: C ? "hidden" : "visible",
                                children: "[+]"
                            })]
                        }), (0, s.jsx)(p.E.div, {
                            className: "faq-item__drawer",
                            variants: a,
                            initial: "closed",
                            animate: C ? "open" : "closed",
                            children: (0, s.jsx)(p.E.div, {
                                className: "faq-item__content technical-copy",
                                variants: r,
                                children: (0, s.jsx)(P(), {
                                    blocks: i,
                                    serializers: J.f
                                })
                            })
                        })]
                    })
                }),
                eo = (0, C.memo)(e => {
                    let {
                        faqs: t = [],
                        helpLink: i
                    } = e, [l, a] = (0, C.useState)(null), r = Math.ceil(t.length / 2), n = t.slice(0, r), A = t.slice(-1 * r + 1);
                    return (0, s.jsx)("div", {
                        className: "faq-grid",
                        children: t.length > 0 && [n, A].map((e, t) => (0, s.jsxs)("div", {
                            className: "faq-grid__col",
                            children: [e.map((e, i) => {
                                let C = "".concat(t, "-").concat(i);
                                return (0, s.jsx)(ed, {
                                    title: e.title,
                                    content: e.content,
                                    expanded: C === l,
                                    onClick: () => a(C === l ? null : C)
                                }, C)
                            }), 1 === t && i && i.url && (0, s.jsx)("div", {
                                className: "faq-item",
                                style: {
                                    textAlign: "right",
                                    border: "none",
                                    cursor: "auto"
                                },
                                children: (0, s.jsx)("div", {
                                    className: "technical-title",
                                    children: (0, s.jsx)(ec.Z, {
                                        link: i,
                                        style: {
                                            borderBottom: "1px solid"
                                        }
                                    })
                                })
                            })]
                        }, "col-".concat(t)))
                    })
                });
            var eh = i(4135),
                ex = i(2261),
                ep = i(8400),
                em = i.n(ep),
                ej = i(7991);
            let eu = (0, C.memo)(e => {
                let {
                    title: t,
                    logoImage: i,
                    content: C
                } = e;
                return (0, s.jsxs)("div", {
                    className: "press-item",
                    children: [i && (0, s.jsx)("div", {
                        className: "press-item__logo",
                        children: (0, s.jsx)("img", {
                            src: ej.t3.image(i).width(500).url(),
                            alt: t
                        })
                    }), (0, s.jsx)("div", {
                        className: "p-lg",
                        children: (0, s.jsx)(P(), {
                            blocks: C,
                            serializers: J.f
                        })
                    })]
                })
            });
            var eg = e => {
                    let {
                        press: t
                    } = e, i = (0, C.useRef)(null), [l, a] = (0, c.YD)({
                        rootMargin: "-20% 0px",
                        threshold: 0
                    }), r = em()(t, 3), n = t.slice(0, 4);
                    if (t.length > 3 && t.length % 3 == 1) {
                        let e = t.slice(Math.max(t.length - 4), t.length),
                            i = t.slice(0, t.length - e.length);
                        r = [...em()(i, 3), ...em()(e, 2)]
                    }
                    return (0, C.useEffect)(() => {
                        i.current.swiper.autoplay[a ? "start" : "stop"]()
                    }, [a]), (0, s.jsxs)("div", {
                        ref: l,
                        className: "press",
                        children: [(0, s.jsx)("div", {
                            className: "hide-on-mobile",
                            children: (0, s.jsx)(ex.tq, {
                                modules: [eh.tl, eh.pt, eh.xW],
                                ref: i,
                                loop: r.length > 1,
                                pagination: r.length > 1 && {
                                    clickable: !0
                                },
                                simulateTouch: !1,
                                effect: "fade",
                                fadeEffect: {
                                    crossFade: !0
                                },
                                speed: 700,
                                autoplay: !!a && {
                                    delay: 5e3,
                                    disableOnInteraction: !0
                                },
                                children: r.map((e, t) => (0, s.jsx)(ex.o5, {
                                    className: "press-slide",
                                    children: (0, s.jsx)("div", {
                                        className: "press-grid",
                                        "data-count": Number(e.length),
                                        children: e.map((e, t) => (0, s.jsx)(eu, {
                                            title: e.title,
                                            logoImage: e.logoImage,
                                            content: e.content
                                        }, t))
                                    })
                                }, t))
                            })
                        }), (0, s.jsx)("div", {
                            className: "hide-on-desktop",
                            children: (0, s.jsx)("div", {
                                className: "press-list",
                                children: n.map((e, t) => (0, s.jsx)(eu, {
                                    title: e.title,
                                    logoImage: e.logoImage,
                                    content: e.content
                                }, t))
                            })
                        })]
                    })
                },
                ew = i(5527),
                ef = i.n(ew);
            let eL = (0, C.memo)(() => (0, s.jsx)("div", {
                    className: ef().background,
                    children: (0, s.jsxs)("div", {
                        className: ef().rotate,
                        children: [(0, s.jsx)("span", {
                            className: ef().bloom
                        }), (0, s.jsx)("span", {
                            className: ef().bloom
                        }), (0, s.jsx)("span", {
                            className: ef().bloom
                        }), (0, s.jsx)("span", {
                            className: ef().bloom
                        })]
                    })
                })),
                ev = (0, C.memo)(e => {
                    let {
                        title: t,
                        displayTitle: i,
                        faqs: l,
                        faqHelpLink: a
                    } = e, r = (0, C.useRef)(), [n, A] = (0, c.xq)(30), [o, h] = (0, C.useState)(!1);
                    return (0, C.useEffect)(() => {
                        h(A > 0 && A < 1);
                        let e = (0, b.Qx)((0, d._w)(A)),
                            t = window.requestAnimationFrame(() => {
                                r.current.style.opacity = e
                            });
                        return () => window.cancelAnimationFrame(t)
                    }, [A]), (0, s.jsxs)("div", {
                        ref: n,
                        children: [(0, s.jsx)("div", {
                            className: "faq-fade-in"
                        }), (0, s.jsxs)("div", {
                            className: "faq-section sec100",
                            children: [(0, s.jsxs)("div", {
                                className: "section-container",
                                children: [(0, s.jsx)("h3", {
                                    className: "section-title",
                                    children: i || t
                                }), (0, s.jsx)(eo, {
                                    faqs: l,
                                    helpLink: a
                                })]
                            }), (0, s.jsx)("div", {
                                ref: r,
                                className: "faq-background",
                                children: o && (0, s.jsx)(eL, {})
                            })]
                        })]
                    })
                }),
                eM = (0, C.memo)(e => {
                    let {
                        data: t
                    } = e, {
                        title: i,
                        displayTitle: C,
                        faqs: l,
                        faqHelpLink: a,
                        press: r
                    } = t;
                    return (0, s.jsxs)("section", {
                        children: [(0, s.jsx)(ev, {
                            title: i,
                            displayTitle: C,
                            faqs: l,
                            faqHelpLink: a
                        }), r && !!r.length && (0, s.jsx)("div", {
                            className: "section-container",
                            children: (0, s.jsx)(eg, {
                                press: r
                            })
                        })]
                    })
                }),
                eV = (0, C.memo)(e => {
                    let {
                        image: t,
                        imageMobile: i,
                        imageAlt: C
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: "design-background-subsection-background",
                        children: [(0, s.jsx)("div", {
                            className: "design-background__image",
                            children: (0, s.jsx)(B(), {
                                src: t,
                                layout: "fill",
                                alt: C,
                                quality: 100,
                                priority: !0
                            })
                        }), (0, s.jsx)("div", {
                            className: "design-background__image-mobile",
                            children: (0, s.jsx)(B(), {
                                src: i,
                                layout: "fill",
                                alt: C,
                                quality: 100,
                                priority: !0
                            })
                        })]
                    })
                });
            var eb = e => {
                    let {
                        progress: t,
                        type: i,
                        title: l,
                        content: a,
                        image: r,
                        imageMobile: n,
                        imageAlt: A,
                        vertical: o = !1
                    } = e, x = (0, C.useRef)(), [p, m] = (0, C.useState)(!1), {
                        isSafari: u
                    } = (0, h.AA)();
                    return (0, c.LI)(() => {
                        m(t > 0 && t < 1);
                        let e = (0, b.lb)((0, d.w2)(t)),
                            i = (0, b.Qx)((0, b.lb)((0, d._w)(t))),
                            s = 40 - (0, b.ZO)(40 * (0, d.mZ)(t)),
                            C = 1 + .03 * e,
                            l = 1 + (0, b.lb)(.12 * e),
                            a = .9 + (0, b.lb)(.12 * e),
                            r = window.requestAnimationFrame(() => {
                                x.current.style.opacity = i, u || (x.current.style.setProperty("--bg-shift", "".concat(s, "px")), x.current.style.setProperty("--bg-scale-h", C), x.current.style.setProperty("--bg-scale-v-mobile", l), x.current.style.setProperty("--bg-scale-v-desktop", a))
                            }, []);
                        return () => window.cancelAnimationFrame(r)
                    }, [t]), (0, s.jsxs)("div", {
                        className: j()("design-section", i, p && "is-active"),
                        children: [(0, s.jsx)("div", {
                            className: "design-featurette",
                            children: (0, s.jsx)("div", {
                                className: "design-featurette__inner",
                                children: (0, s.jsxs)("div", {
                                    className: "section-container",
                                    children: [l && l.trim().length > 0 && (0, s.jsx)("div", {
                                        className: "design-featurette__title",
                                        children: (0, s.jsx)("h3", {
                                            className: "bullet-title",
                                            children: l
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "design-featurette__content p-xl",
                                        children: (0, s.jsx)(P(), {
                                            blocks: a,
                                            serializers: J.f
                                        })
                                    })]
                                })
                            })
                        }), (0, s.jsx)("div", {
                            ref: x,
                            className: j()("design-background", o && "design-background--vertical"),
                            children: (0, s.jsx)(eV, {
                                image: r,
                                imageMobile: n,
                                imageAlt: A
                            })
                        })]
                    })
                },
                eH = {
                    src: "/_next/static/media/component-housing.dea3a871.jpg",
                    height: 1800,
                    width: 1378,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAABBAAHAAAAAAAAAAAAAAADAAECEQUSISMxobH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECMf/aAAwDAQACEQMRAD8AkhchMMEST70CONteYVfT+oiJ3qDJ/9k=",
                    blurWidth: 6,
                    blurHeight: 8
                },
                e_ = {
                    src: "/_next/static/media/headband.187d773a.jpg",
                    height: 1170,
                    width: 2e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAgMAAAAAAAAAAAAAAAAAEQESIUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8Ajlm40sRwAFo//9k=",
                    blurWidth: 8,
                    blurHeight: 5
                },
                eE = {
                    src: "/_next/static/media/headband-mobile.e9e70de2.jpg",
                    height: 1500,
                    width: 845,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAgEREiOR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCQRtRcmto7QALD/9k=",
                    blurWidth: 5,
                    blurHeight: 8
                },
                eN = {
                    src: "/_next/static/media/ear-cushions.9538ea34.jpg",
                    height: 1457,
                    width: 1e3,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAACAgEFAAAAAAAAAAAAAAACAwABEhEhIjHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhEDEQA/AJULQSoAU26HHK99OV9+RES11Rf/2Q==",
                    blurWidth: 5,
                    blurHeight: 8
                },
                eZ = {
                    src: "/_next/static/media/xray.1145cf68.png",
                    height: 1564,
                    width: 1564,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAACVBMVEUBAQILDRULGi5aE2ceAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIklEQVR4nGNgQABGRkZGCA3BUAKKwQQTEwQzMIIYYGEIAAADtwAcOfPH2AAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                };
            let ey = {
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: .1,
                            duration: .5,
                            ease: [.8, .08, .52, .97]
                        }
                    },
                    hide: {
                        opacity: 0
                    }
                },
                eB = e => {
                    let {
                        progress: t = 0,
                        inView: i = !1
                    } = e, l = (0, C.useRef)(null), a = (0, C.useRef)(0), r = (0, C.useRef)(), n = (0, C.useRef)(!1), A = (0, C.useRef)(), o = (0, C.useRef)(), x = (0, C.useRef)(), [p, m] = (0, c.xq)(), u = (0, c.Gc)(), {
                        isAndroid: g,
                        isSafari: w
                    } = (0, h.AA)(), f = g ? "webm" : "mp4", L = "/assets/home/specs/xray_".concat({
                        desktop: 1440,
                        tablet: 800,
                        mobile: 800
                    } [u] || 1440, ".").concat(f), v = e => {
                        a.current = e.target.duration
                    };
                    (0, C.useEffect)(() => {
                        let e = l.current,
                            t = r.current;
                        i && !1 === n.current && (e.pause(), t.setAttribute("src", "".concat(L)), e.load(), n.current = !0)
                    }, [i]), (0, c.LI)(() => {
                        if (!l.current) return;
                        let e = parseFloat(a.current * t).toPrecision(3);
                        if (e === x.current) return;
                        x.current = e;
                        let i = window.requestAnimationFrame(() => {
                            l.current.currentTime = x.current
                        });
                        return () => window.cancelAnimationFrame(i)
                    }, [l, t]), (0, c.LI)(() => {
                        let e = (0, b.lb)((0, b.Qx)((0, d.eE)(m))),
                            t = 1.8 - (0, b.lb)(.8 * (0, d.Y3)(m)),
                            i = "".concat(-75 * (0, b.lb)(1 - (0, d.Y3)(m)), "vh"),
                            s = window.requestAnimationFrame(() => {
                                o.current.style.opacity = e, w || (A.current.style.setProperty("--scale", t), A.current.style.setProperty("--v-shift-mobile", i))
                            });
                        return () => window.cancelAnimationFrame(s)
                    }, [m]);
                    let M = 1 === m,
                        V = t > .95;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            ref: p,
                            className: "spec-backdrop-spacer"
                        }), (0, s.jsxs)("div", {
                            ref: o,
                            className: j()("spec-backdrop", M && "static-layer-hidden", V && "dynamic-layer-abs"),
                            children: [(0, s.jsx)("div", {
                                className: "spec-backdrop__layer spec-backdrop__layer--static",
                                children: (0, s.jsx)("div", {
                                    ref: A,
                                    className: "spec-backdrop__layer-content",
                                    children: (0, s.jsx)("div", {
                                        className: "spec-backdrop__layer-content-trans",
                                        children: (0, s.jsx)(B(), {
                                            src: eZ,
                                            layout: "fill",
                                            alt: "Unity Headphones X-Ray"
                                        })
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "spec-backdrop__layer spec-backdrop__layer--dynamic",
                                children: (0, s.jsx)("div", {
                                    className: "spec-backdrop__layer-content",
                                    children: (0, s.jsx)("div", {
                                        className: "spec-backdrop__layer-content-trans",
                                        children: (0, s.jsx)("video", {
                                            ref: l,
                                            preload: "none",
                                            playsInline: !0,
                                            autoPlay: !0,
                                            muted: !0,
                                            onLoadedMetadata: v,
                                            onLoadedData: v,
                                            onPlay: e => {
                                                e.target.pause()
                                            },
                                            children: (0, s.jsx)("source", {
                                                ref: r,
                                                type: "video/".concat(f)
                                            })
                                        })
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "spec-backdrop__fade-cover"
                            })]
                        })]
                    })
                },
                eR = (0, C.memo)((0, C.forwardRef)((e, t) => {
                    let {
                        specs: i
                    } = e, [C, l] = (0, c.vb)({
                        rootMargin: "0% 0px"
                    });
                    return (0, s.jsx)("div", {
                        ref: t,
                        className: "detailed-specs sec100",
                        children: (0, s.jsxs)("div", {
                            ref: C,
                            className: "section-container",
                            children: [(0, s.jsx)("h3", {
                                className: "base-title",
                                children: "Detailed Specs"
                            }), (0, s.jsx)(p.E.div, {
                                initial: "hidden",
                                animate: l ? "show" : "hide",
                                variants: ey,
                                className: "detailed-spec-list",
                                children: i.map((e, t) => (0, s.jsxs)(p.E.div, {
                                    variants: ey,
                                    className: "detailed-spec-list__item",
                                    children: [(0, s.jsx)("h5", {
                                        className: "technical-title",
                                        children: e.title
                                    }), (0, s.jsx)("div", {
                                        className: "technical-copy",
                                        children: (0, s.jsx)(P(), {
                                            blocks: e.content,
                                            serializers: J.f
                                        })
                                    })]
                                }, t))
                            })]
                        })
                    })
                })),
                eI = (0, C.memo)(e => {
                    let {
                        type: t,
                        title: i,
                        content: C,
                        active: l,
                        immediate: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: j()("spec-section", t, l && "is-active", a && "immediate"),
                        children: (0, s.jsx)("div", {
                            className: "spec-content-placement",
                            children: (0, s.jsx)("div", {
                                className: "section-container",
                                children: (0, s.jsxs)("div", {
                                    className: "spec-featurette",
                                    children: [(0, s.jsx)("div", {
                                        className: "spec-featurette__title",
                                        children: (0, s.jsx)("h3", {
                                            className: "base-title",
                                            children: i
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "spec-featurette__content p-md",
                                        children: (0, s.jsx)(P(), {
                                            blocks: C,
                                            serializers: J.f
                                        })
                                    })]
                                })
                            })
                        })
                    })
                }),
                eO = (0, C.memo)(e => {
                    let {
                        sections: t,
                        inView: i
                    } = e, [l, a] = (0, C.useState)(null), [r, n] = (0, C.useState)(null), [A, d, o] = (0, c.xq)(30), h = (0, c.s4)();
                    (0, C.useEffect)(() => {
                        let e = 0 === d ? -1 : Math.floor(d * t.length);
                        e !== l && (r !== l && n(l), a(e))
                    }, [d]);
                    let x = d > 0 && d < 1;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [h && (0, s.jsx)(eB, {
                            inView: i,
                            progress: d
                        }), (0, s.jsx)("div", {
                            className: j()("main-specs-spec-scroll", x && "is-visible"),
                            ref: A,
                            children: t.map((e, i) => {
                                let C = 0 === i && -1 === r || i === t.length - 1 && r === t.length;
                                return (0, s.jsx)(eI, {
                                    type: e.type,
                                    title: e.title,
                                    content: e.content,
                                    active: l === i,
                                    immediate: C
                                }, i)
                            })
                        })]
                    })
                }),
                ez = (0, C.memo)(e => {
                    let {
                        title: t,
                        content: i = []
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: "accessory-fact",
                        children: [(0, s.jsx)("h5", {
                            className: "accessory-fact__title small-title",
                            children: t
                        }), (0, s.jsx)("div", {
                            className: "accessory-fact__content p-md",
                            children: (0, s.jsx)(P(), {
                                blocks: i,
                                serializers: J.f
                            })
                        })]
                    })
                });
            var ek = e => {
                    let {
                        children: t
                    } = e, [i, l] = (0, C.useState)(!1), {
                        parentVariants: a,
                        childVariants: r
                    } = eA.slideDownAnimation;
                    return (0, s.jsxs)("div", {
                        className: "accessory-details",
                        children: [(0, s.jsx)(p.E.div, {
                            variants: a,
                            initial: "closed",
                            animate: i ? "open" : "closed",
                            style: {
                                overflow: "hidden"
                            },
                            children: (0, s.jsx)(p.E.div, {
                                variants: r,
                                className: "accessory-details__content",
                                children: t
                            })
                        }), (0, s.jsx)("span", {
                            className: "accessory-details__toggle",
                            onClick: () => l(!i),
                            children: i ? "See less [—]" : "See more [+]"
                        })]
                    })
                },
                eS = e => {
                    let {
                        product: t
                    } = e, i = t.variants[0], C = (0, h.V6)(i);
                    return (0, s.jsx)("div", {
                        className: "accessory-fact",
                        children: i.inStock ? (0, s.jsx)("button", {
                            className: "btn",
                            onClick: () => C(),
                            children: "Buy"
                        }) : (0, s.jsx)("button", {
                            className: "btn",
                            disabled: !0,
                            children: "Unavailable"
                        })
                    })
                },
                eD = e => {
                    let {
                        children: t
                    } = e, [i, l] = (0, c.YD)({
                        rootMargin: "-20% 0px",
                        threshold: 0
                    }), a = C.Children.toArray(t).length;
                    return (0, s.jsx)("div", {
                        ref: i,
                        className: "accessory-slideshow",
                        children: (0, s.jsx)(ex.tq, {
                            modules: [eh.tl, eh.pt, eh.xW, eh.W_],
                            className: "swiper-container swiper-container-horizontal swiper-container-fade swiper-container-pointer-events",
                            loop: a > 1,
                            pagination: a > 1 && {
                                clickable: !0
                            },
                            navigation: {
                                nextEl: ".swiper-slide"
                            },
                            effect: "fade",
                            fadeEffect: {
                                crossFade: !0
                            },
                            speed: 700,
                            autoplay: !!l && {
                                delay: 5e3,
                                pauseOnMouseEnter: !0,
                                disableOnInteraction: !1
                            },
                            children: t
                        })
                    })
                },
                eQ = i(1979);
            let eF = (0, C.memo)(e => {
                    let {
                        image: t,
                        alt: i
                    } = e, C = (0, eQ.J)(ej.i3, t, {
                        enableBlurUp: !1
                    });
                    return (0, s.jsx)("div", {
                        children: (0, s.jsx)(B(), {
                            ...C,
                            alt: i
                        })
                    })
                }),
                eU = (0, C.memo)(e => {
                    let {
                        product: t,
                        title: i,
                        description: C,
                        details: l
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: "add-on",
                        children: [(0, s.jsx)("div", {
                            className: "add-on__image",
                            children: (0, s.jsx)(eD, {
                                children: t.squareImageGallery.images.map((e, t) => (0, s.jsx)(ex.o5, {
                                    children: (0, s.jsx)(eF, {
                                        image: e
                                    })
                                }, t))
                            })
                        }), (0, s.jsxs)("div", {
                            className: "add-on__caption",
                            children: [(0, s.jsx)(ez, {
                                title: i,
                                content: C
                            }), l && l.length > 0 && (0, s.jsx)(ek, {
                                children: l.map((e, t) => {
                                    let {
                                        title: i,
                                        content: C
                                    } = e;
                                    return (0, s.jsx)(ez, {
                                        title: i,
                                        content: C
                                    }, "detail-fact-".concat(t))
                                })
                            }), (0, s.jsx)(eS, {
                                product: t
                            })]
                        })]
                    })
                }),
                eP = (0, C.memo)(e => {
                    let {
                        screen: t,
                        alt: i,
                        active: C
                    } = e;
                    return (0, s.jsx)("div", {
                        className: j()("app-device-holder", C && "is-active"),
                        children: (0, s.jsx)(B(), {
                            src: t,
                            objectFit: "contain",
                            layout: "fill",
                            alt: i,
                            quality: 100,
                            priority: !0
                        })
                    })
                }),
                eJ = [{
                    image: {
                        src: "/_next/static/media/device-loading.b10cd5c7.png",
                        height: 1485,
                        width: 750,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAALVBMVEUMDBEKCwoICQgOIUkQERAPFCYaGBcVFRQWLlMBAAUVHTgJBxkXMFsEETMbKkkV2MDrAAAACXRSTlPi6O/et+G4veAcRcjFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nAXBhwEAIAgEsaNYHtT9xzVhuU9MDabaUBWMdwL6DpAgzfMDDqUAtqbn/qUAAAAASUVORK5CYII=",
                        blurWidth: 4,
                        blurHeight: 8
                    },
                    alt: "The Unity App screenshot"
                }, {
                    image: {
                        src: "/_next/static/media/device-streams.ce9dc261.png",
                        height: 1485,
                        width: 750,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAAIVBMVEUbGhoaGxkhISEwLy8cHBw3Ji1RLDMnJycTFBMhHR4uLS1QIXQNAAAACHRSTlPf5rno8LTrvWGgzuIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAjSURBVHicY2BnYWFiYObiZIAQDJwcDAyMHAiCk4GBiZGNFQAMAwCRqtpr9wAAAABJRU5ErkJggg==",
                        blurWidth: 4,
                        blurHeight: 8
                    },
                    alt: "Unity App Multisoure Music Player screenshot"
                }],
                eY = (0, C.memo)(e => {
                    let {
                        visible: t = !1,
                        screenIndex: i = 0
                    } = e;
                    return (0, s.jsx)("div", {
                        className: j()("app-device-layer", t && "is-visible"),
                        children: (0, s.jsx)("div", {
                            className: "app-device-layer__position",
                            children: eJ.map((e, t) => (0, s.jsx)(eP, {
                                screen: e.image,
                                alt: e.alt,
                                active: i >= t
                            }, t))
                        })
                    })
                }),
                eG = (0, C.memo)(e => {
                    let {
                        title: t,
                        content: i = [],
                        children: C
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "app-slide",
                        children: (0, s.jsx)("div", {
                            className: "section-container",
                            children: (0, s.jsxs)("div", {
                                className: "app-featurette",
                                children: [(0, s.jsx)("div", {
                                    className: "app-featurette__title",
                                    children: (0, s.jsx)("h3", {
                                        className: "large-title",
                                        children: t
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "app-featurette__content p-lg",
                                    children: (0, s.jsx)(P(), {
                                        blocks: i,
                                        serializers: J.f
                                    })
                                }), C]
                            })
                        })
                    })
                });
            var eq = {
                    src: "/_next/static/media/app-store-coming-2x.9910f99c.png",
                    height: 80,
                    width: 270,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUNDQ04ODhISEgsLCwaGhonJydhYWEa58WWAAAAAnRSTlP9/o2EjdMAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAaSURBVHicY2BkYmFlZmFgYGBiY2ZiZGJmAAABggAnaQoc8QAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 2
                },
                eK = {
                    src: "/_next/static/media/google-play.03b62ac9.png",
                    height: 80,
                    width: 270,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEUyMy8YGBgdRlINUFYoIyE8PT1ISEgdTjOSnpCcAAAABHRSTlP+/vz8ZnJJUgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABpJREFUeJxjYGZnYWBhZGRkYGJgYWVjZWMAAAG6ADJ4ftdcAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 2
                },
                eT = i(4140),
                eW = i.n(eT);
            let eX = (0, C.memo)(e => {
                    let {
                        appStore: t,
                        googlePlay: i
                    } = e;
                    return (0, s.jsx)(s.Fragment, {
                        children: (t || i) && (0, s.jsxs)("div", {
                            className: j()("download-links", eW().links),
                            children: [t && (0, s.jsx)("a", {
                                href: t,
                                target: "_blank",
                                rel: "noreferrer",
                                className: eW().appStore,
                                children: (0, s.jsx)(B(), {
                                    src: eq,
                                    alt: "App Store Logo",
                                    layout: "fill",
                                    priority: !0
                                })
                            }), i && (0, s.jsx)("a", {
                                href: i,
                                target: "_blank",
                                rel: "noreferrer",
                                className: eW().googlePlay,
                                children: (0, s.jsx)(B(), {
                                    src: eK,
                                    alt: "Google Play Logo",
                                    layout: "fill",
                                    priority: !0
                                })
                            })]
                        })
                    })
                }),
                e$ = (0, C.memo)(e => {
                    let {
                        data: t = {},
                        inView: i = !1,
                        screenIndex: C = 0
                    } = e, {
                        downloadAppStoreLink: l,
                        downloadGooglePlayLink: a,
                        appTitle: r,
                        appContent: n,
                        streamingSourcesTitle: A,
                        streamingSourcesContent: c
                    } = t;
                    return (0, s.jsxs)("div", {
                        className: "app-view-mobile",
                        children: [(0, s.jsx)(eG, {
                            title: r,
                            content: n,
                            children: (0, s.jsx)(eX, {
                                appStore: l,
                                googlePlay: a
                            })
                        }), (0, s.jsx)(eY, {
                            visible: i,
                            screenIndex: C
                        }), (0, s.jsx)(eG, {
                            title: A,
                            content: c
                        })]
                    })
                }),
                e1 = (0, C.memo)(e => {
                    let {
                        data: t,
                        inView: i = !1,
                        screenIndex: C = 0
                    } = e, {
                        downloadAppStoreLink: l,
                        downloadGooglePlayLink: a,
                        appTitle: r,
                        appContent: n,
                        streamingSourcesTitle: A,
                        streamingSourcesContent: c
                    } = t;
                    return (0, s.jsxs)("div", {
                        className: "app-view-desktop",
                        children: [(0, s.jsx)("div", {
                            className: "app-view-desktop__device-wrapper",
                            children: (0, s.jsx)(eY, {
                                visible: i,
                                screenIndex: C
                            })
                        }), (0, s.jsx)(eG, {
                            title: r,
                            content: n,
                            children: (0, s.jsx)(eX, {
                                appStore: l,
                                googlePlay: a
                            })
                        }), (0, s.jsx)(eG, {
                            title: A,
                            content: c
                        })]
                    })
                });
            var e2 = {
                src: "/_next/static/media/hero.cb9d2857.png",
                height: 1800,
                width: 1800,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXEkHj4UMFkQJ0olFzAsYaMKGzMVNmMMDR4gLVMPBgwSHTkgIkAGESNIY6QsJUBRKkYwRXcyK0xFcrwUDBs5a7MSJ0lLpycjAAAAFnRSTlMALdvsFTOOCf5qVc9+lbRLSP630OXw0gM/FwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJxjYEAC/EKcYJqFm5GPFcTgYWMUBjEEOEQERVkYGBi4ODjEmNgZGBjY2XiZIYoZGEB8ACkVATVQJUAsAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            };
            let e3 = {
                    money: () => (0, s.jsxs)("svg", {
                        width: "41",
                        height: "40",
                        viewBox: "0 0 41 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsxs)("g", {
                            clipPath: "url(#clip-money)",
                            children: [(0, s.jsx)("path", {
                                d: "M20.6001 7.42139C20.4653 7.42139 20.3361 7.4749 20.2409 7.57017C20.1456 7.66544 20.0921 7.79466 20.0921 7.9294V9.59331C18.7394 9.71557 17.4813 10.3393 16.5651 11.342C15.649 12.3447 15.141 13.6538 15.141 15.012C15.141 16.3702 15.649 17.6794 16.5651 18.6821C17.4813 19.6847 18.7394 20.3085 20.0921 20.4308V29.2657C19.049 29.1038 18.0983 28.5738 17.4122 27.7716C16.7262 26.9693 16.35 25.948 16.352 24.8924C16.352 24.7577 16.2984 24.6285 16.2032 24.5332C16.1079 24.4379 15.9787 24.3844 15.8439 24.3844C15.7776 24.3844 15.7119 24.3976 15.6507 24.4232C15.5894 24.4488 15.5339 24.4863 15.4873 24.5336C15.4407 24.5809 15.404 24.637 15.3793 24.6985C15.3546 24.7601 15.3423 24.826 15.3433 24.8924C15.3467 26.2138 15.8302 27.489 16.7038 28.4804C17.5774 29.4719 18.7816 30.112 20.0921 30.2817V31.975C20.0921 32.1098 20.1456 32.239 20.2409 32.3342C20.3361 32.4295 20.4653 32.4831 20.6001 32.4831C20.6664 32.4831 20.7322 32.4699 20.7934 32.4443C20.8546 32.4186 20.9101 32.3811 20.9567 32.3338C21.0033 32.2865 21.04 32.2305 21.0647 32.1689C21.0895 32.1073 21.1017 32.0414 21.1007 31.975V30.3185C22.5062 30.2667 23.8368 29.672 24.8128 28.6594C25.7889 27.6468 26.3342 26.2951 26.3342 24.8887C26.3342 23.4823 25.7889 22.1307 24.8128 21.118C23.8368 20.1054 22.5062 19.5107 21.1007 19.4589V10.624C22.1901 10.7391 23.198 11.2548 23.9286 12.0711C24.6592 12.8874 25.0604 13.946 25.0543 15.0415C25.0534 15.1079 25.0656 15.1737 25.0903 15.2353C25.115 15.2969 25.1517 15.353 25.1983 15.4003C25.2449 15.4475 25.3004 15.4851 25.3617 15.5107C25.4229 15.5363 25.4886 15.5495 25.555 15.5495C25.6897 15.5495 25.8189 15.496 25.9142 15.4007C26.0095 15.3054 26.063 15.1762 26.063 15.0415C26.0577 13.683 25.5464 12.3751 24.6289 11.3732C23.7114 10.3713 22.4535 9.74723 21.1007 9.62274V7.92203C21.1007 7.78925 21.048 7.6619 20.9541 7.56801C20.8602 7.47413 20.7328 7.42139 20.6001 7.42139ZM16.1458 14.9899C16.1396 13.8956 16.5398 12.8379 17.2688 12.0218C17.9979 11.2057 19.004 10.6892 20.0921 10.5725V19.4074C19.004 19.2907 17.9979 18.7742 17.2688 17.9581C16.5398 17.142 16.1396 16.0843 16.1458 14.9899ZM25.2531 24.8703C25.2552 25.9974 24.8263 27.0826 24.0543 27.9038C23.2824 28.725 22.2258 29.2201 21.1007 29.2878V20.4529C22.2296 20.5207 23.2894 21.0189 24.062 21.8448C24.8345 22.6708 25.2608 23.7615 25.2531 24.8924V24.8703Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M40.6773 13.775C40.5562 13.7167 40.417 13.7087 40.29 13.7529C40.1631 13.7971 40.0588 13.8897 40 14.0106L39.6834 14.6733C38.541 10.3958 36.0032 6.62211 32.4725 3.95068C28.9419 1.27925 24.6204 -0.137055 20.1934 -0.0736433C15.7665 -0.0102318 11.4874 1.52927 8.03467 4.30073C4.58198 7.0722 2.15333 10.917 1.13383 15.2254C1.11735 15.2897 1.11383 15.3567 1.12347 15.4224C1.13311 15.4881 1.15571 15.5512 1.18996 15.608C1.22422 15.6649 1.26945 15.7144 1.32301 15.7536C1.37657 15.7928 1.43739 15.821 1.50195 15.8365C1.63174 15.8677 1.76862 15.8466 1.88298 15.7777C1.99733 15.7089 2.07998 15.5977 2.11303 15.4684C3.1002 11.39 5.41656 7.75615 8.69698 5.13959C11.9774 2.52303 16.0353 1.07261 20.2311 1.01692C24.4269 0.961239 28.5218 2.30347 31.8706 4.83204C35.2193 7.36062 37.6313 10.9317 38.7263 14.9825L38.1005 14.6806C38.041 14.6516 37.9765 14.6346 37.9104 14.6306C37.8444 14.6265 37.7782 14.6355 37.7156 14.6571C37.6531 14.6786 37.5954 14.7122 37.5459 14.7561C37.4963 14.7999 37.4559 14.8531 37.4269 14.9125C37.3979 14.972 37.3808 15.0366 37.3768 15.1026C37.3728 15.1687 37.3818 15.2348 37.4033 15.2974C37.4248 15.3599 37.4585 15.4176 37.5023 15.4672C37.5461 15.5167 37.5993 15.5572 37.6588 15.5862L39.3742 16.4623C39.4427 16.4967 39.5184 16.5143 39.5951 16.5139C39.651 16.525 39.7085 16.525 39.7644 16.5139C39.8271 16.4924 39.8849 16.4585 39.9342 16.4143C39.9836 16.37 40.0235 16.3162 40.0516 16.2562L40.8909 14.5113C40.9196 14.4519 40.9363 14.3873 40.94 14.3214C40.9437 14.2555 40.9343 14.1895 40.9124 14.1273C40.8905 14.065 40.8565 14.0077 40.8124 13.9586C40.7683 13.9095 40.7149 13.8697 40.6553 13.8413L40.6773 13.775Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M39.4552 24.1931C39.3254 24.1619 39.1885 24.183 39.0742 24.2519C38.9598 24.3208 38.8772 24.4319 38.8441 24.5612C37.8564 28.6426 35.5371 32.2786 32.2525 34.8949C28.9678 37.5111 24.9052 38.9585 20.7063 39.0083C16.5074 39.0581 12.4115 37.7076 9.06576 35.17C5.72 32.6324 3.31505 29.0524 2.23081 24.9956L2.89342 25.3858C3.0097 25.4527 3.14774 25.471 3.27741 25.4365C3.40707 25.402 3.51782 25.3176 3.58549 25.2018C3.61846 25.1447 3.63985 25.0818 3.64844 25.0165C3.65703 24.9512 3.65265 24.8848 3.63555 24.8212C3.61845 24.7576 3.58897 24.698 3.5488 24.6458C3.50863 24.5936 3.45854 24.5499 3.40143 24.5171L1.73753 23.5305C1.62094 23.4658 1.48423 23.4474 1.35468 23.479C1.29003 23.4956 1.22937 23.5251 1.17627 23.5655C1.12317 23.606 1.07869 23.6567 1.04546 23.7146L0.066257 25.3858C-0.000670779 25.5021 -0.018882 25.6401 0.0156022 25.7698C0.0500864 25.8995 0.134466 26.0102 0.250317 26.0779C0.327898 26.1247 0.417484 26.1477 0.508006 26.1441C0.595878 26.1436 0.682089 26.1202 0.758225 26.0763C0.834361 26.0324 0.897815 25.9696 0.942386 25.8938L1.27369 25.3269C2.41046 29.6085 4.94479 33.3876 8.47438 36.0645C12.004 38.7414 16.3266 40.1626 20.756 40.1025C25.1855 40.0425 29.468 38.5046 32.9237 35.733C36.3794 32.9614 38.8104 29.115 39.8307 24.8042C39.8617 24.6734 39.8396 24.5356 39.7692 24.4211C39.6988 24.3065 39.5859 24.2246 39.4552 24.1931Z",
                                fill: "white"
                            })]
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: "clip-money",
                                children: (0, s.jsx)("rect", {
                                    width: "40.9571",
                                    height: "40",
                                    fill: "white"
                                })
                            })
                        })]
                    }),
                    shield: () => (0, s.jsxs)("svg", {
                        width: "36",
                        height: "40",
                        viewBox: "0 0 36 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsxs)("g", {
                            clipPath: "url(#clip0)",
                            children: [(0, s.jsx)("path", {
                                d: "M9.94298 20.0589L9.14838 20.8604L14.987 26.6507L28.9514 12.8728L28.1845 12.0713L14.987 25.0476L9.94298 20.0589Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M18.0342 0.255654L17.6956 0L17.3502 0.255654C9.74954 6.00449 0.538949 8.0912 0.449123 8.11193L0 8.20867V8.66471C0 18.1517 6.58956e-06 37.8995 17.6265 40H17.7578C35.3913 37.9271 35.3913 18.1655 35.3913 8.66471V8.20867L34.9421 8.11193C34.8523 8.11193 25.6625 6.00449 18.0342 0.255654ZM17.6956 38.853C1.38194 36.863 1.14701 19.0568 1.14701 9.14148C3.08171 8.6509 10.9518 6.43289 17.6956 1.45103C24.474 6.43289 32.3165 8.64399 34.2374 9.14148C34.2374 19.0845 34.0024 36.8907 17.6956 38.8875V38.853Z",
                                fill: "white"
                            })]
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: "clip0",
                                children: (0, s.jsx)("rect", {
                                    width: "35.3913",
                                    height: "40",
                                    fill: "white"
                                })
                            })
                        })]
                    }),
                    shipping: () => (0, s.jsxs)("svg", {
                        width: "40",
                        height: "29",
                        viewBox: "0 0 40 29",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsxs)("g", {
                            clipPath: "url(#clip-ship)",
                            children: [(0, s.jsx)("path", {
                                d: "M39.8234 15.793L38.965 13.863C38.9682 13.8564 38.9699 13.8491 38.9699 13.8417C38.9699 13.8343 38.9682 13.827 38.965 13.8204L37.6682 11.6104L37.0594 10.5327L34.3927 5.99087C34.3464 5.85371 34.2873 5.72121 34.2161 5.59513C34.1796 5.53425 34.1431 5.47337 34.1005 5.41249C34.0756 5.36955 34.0471 5.3288 34.0152 5.29072C33.869 5.08867 33.6971 4.90653 33.5038 4.74887L33.3333 4.6271C33.2208 4.54457 33.1005 4.4732 32.9741 4.414L32.7671 4.31659L32.5601 4.24963L32.3653 4.19483C32.3125 4.17595 32.257 4.16566 32.2009 4.16438C32.0364 4.13281 31.8692 4.11652 31.7017 4.11568H24.3166V2.74582C24.3166 2.01759 24.0273 1.31917 23.5124 0.804233C22.9974 0.289293 22.299 0 21.5708 0H2.74582C2.01759 0 1.31917 0.289293 0.804233 0.804233C0.289293 1.31917 0 2.01759 0 2.74582V21.5708C0 22.299 0.289293 22.9974 0.804233 23.5124C1.31917 24.0273 2.01759 24.3166 2.74582 24.3166H4.97413V24.3531C5.08421 25.3597 5.56201 26.2902 6.31592 26.9662C7.06984 27.6422 8.04678 28.016 9.05936 28.016C10.0719 28.016 11.0489 27.6422 11.8028 26.9662C12.5567 26.2902 13.0345 25.3597 13.1446 24.3531H27.6591C27.7625 25.3654 28.2379 26.3033 28.9931 26.9853C29.7484 27.6672 30.7298 28.0448 31.7473 28.0448C32.7649 28.0448 33.7463 27.6672 34.5015 26.9853C35.2568 26.3033 35.7321 25.3654 35.8356 24.3531H37.1385C37.5167 24.3539 37.8913 24.2802 38.241 24.1362C38.5907 23.9923 38.9086 23.7808 39.1766 23.514C39.4446 23.2471 39.6574 22.9301 39.8028 22.581C39.9483 22.2319 40.0235 21.8576 40.0243 21.4795V16.828C40.0247 16.4854 39.965 16.1454 39.8478 15.8234L39.8234 15.793ZM24.3166 4.91325H31.6591C32.0871 4.91552 32.5042 5.0485 32.8546 5.29441C33.205 5.54032 33.4718 5.88742 33.6195 6.2892L33.6499 6.35007L36.3409 10.9285L36.9011 11.8843C36.8191 12.3693 36.5681 12.8096 36.1925 13.1272C35.817 13.4448 35.3411 13.6192 34.8493 13.6195H25.9604C25.636 13.62 25.316 13.5442 25.0262 13.3982C24.7364 13.2523 24.485 13.0403 24.2922 12.7793L24.3166 4.91325ZM9.06546 27.2451C8.25069 27.249 7.46303 26.9525 6.85312 26.4123C6.24322 25.872 5.85386 25.1259 5.75951 24.3166V24.2801C5.75344 24.1624 5.75344 24.0446 5.75951 23.927V23.5312C5.85763 22.7251 6.24745 21.9828 6.85537 21.4443C7.4633 20.9059 8.24729 20.6086 9.05936 20.6086C9.87144 20.6086 10.6554 20.9059 11.2634 21.4443C11.8713 21.9828 12.2611 22.7251 12.3592 23.5312V23.5677C12.3653 23.6874 12.3653 23.8073 12.3592 23.927V24.3166C12.268 25.1217 11.8838 25.8652 11.2797 26.4052C10.6756 26.9453 9.894 27.2442 9.08372 27.2451H9.06546ZM23.5312 23.5312H13.1811V23.4947C13.0776 22.4824 12.6023 21.5445 11.847 20.8625C11.0918 20.1806 10.1104 19.803 9.09284 19.803C8.07528 19.803 7.0939 20.1806 6.33866 20.8625C5.58343 21.5445 5.10806 22.4824 5.00457 23.4947C5.00777 23.5002 5.00945 23.5065 5.00945 23.5129C5.00945 23.5193 5.00777 23.5256 5.00457 23.5312H2.77625C2.25576 23.5296 1.75713 23.3217 1.38965 22.9531C1.02217 22.5845 0.815825 22.0852 0.815827 21.5647V2.73973C0.815827 2.48228 0.866541 2.22735 0.965061 1.9895C1.06358 1.75165 1.20798 1.53554 1.39002 1.35349C1.57206 1.17145 1.78818 1.02705 2.02603 0.928533C2.26388 0.830013 2.51881 0.779299 2.77625 0.779299H21.6012C22.1207 0.780905 22.6184 0.987974 22.9857 1.35528C23.353 1.72258 23.56 2.22028 23.5617 2.73973L23.5312 23.5312ZM31.7686 27.2451C30.956 27.2436 30.172 26.945 29.5642 26.4056C28.9564 25.8662 28.5669 25.1233 28.4688 24.3166C28.4384 24.0557 28.4384 23.7921 28.4688 23.5312C28.561 22.7214 28.948 21.9739 29.5561 21.4312C30.1641 20.8885 30.9506 20.5885 31.7656 20.5885C32.5806 20.5885 33.3671 20.8885 33.9751 21.4312C34.5832 21.9739 34.9702 22.7214 35.0624 23.5312C35.0989 23.7917 35.0989 24.0561 35.0624 24.3166C34.9657 25.1227 34.5774 25.8657 33.9706 26.4051C33.3638 26.9446 32.5806 27.2434 31.7686 27.2451ZM39.2207 21.4429C39.2207 21.9968 39.0007 22.5279 38.6091 22.9196C38.2174 23.3112 37.6863 23.5312 37.1324 23.5312H35.86C35.7636 22.5128 35.291 21.567 34.5343 20.8786C33.7777 20.1901 32.7916 19.8086 31.7686 19.8086C30.7457 19.8086 29.7596 20.1901 29.0029 20.8786C28.2463 21.567 27.7737 22.5128 27.6773 23.5312H24.3166V13.8691C24.8017 14.221 25.3855 14.4107 25.9848 14.411H34.8737C35.4143 14.4113 35.9439 14.2581 36.4008 13.9692C36.8578 13.6804 37.2234 13.2677 37.4551 12.7793L38.2831 14.1918L39.0928 16.0791C39.1751 16.3077 39.2183 16.5486 39.2207 16.7915V21.4429Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M5.55253 8.05477C5.44919 8.05477 5.35009 8.09582 5.27701 8.16889C5.20394 8.24196 5.1629 8.34107 5.1629 8.44441V15.8721C5.15595 15.9278 5.16092 15.9843 5.17748 16.0379C5.19404 16.0915 5.2218 16.141 5.25893 16.183C5.29607 16.2251 5.34173 16.2588 5.39288 16.2818C5.44402 16.3049 5.49948 16.3169 5.55558 16.3169C5.61169 16.3169 5.66714 16.3049 5.71829 16.2818C5.76943 16.2588 5.81509 16.2251 5.85223 16.183C5.88936 16.141 5.91712 16.0915 5.93368 16.0379C5.95024 15.9843 5.95521 15.9278 5.94827 15.8721V8.44441C5.94745 8.34139 5.90585 8.24289 5.83259 8.17045C5.79643 8.13287 5.75289 8.10318 5.70469 8.08327C5.65648 8.06337 5.60467 8.05366 5.55253 8.05477Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M12.1766 8.05469C12.0732 8.05469 11.9741 8.09573 11.9011 8.16881C11.828 8.24188 11.7869 8.34099 11.7869 8.44433V15.872C11.7869 15.9754 11.828 16.0745 11.9011 16.1476C11.9741 16.2206 12.0732 16.2617 12.1766 16.2617C12.2799 16.2617 12.379 16.2206 12.4521 16.1476C12.5252 16.0745 12.5662 15.9754 12.5662 15.872V8.44433C12.5647 8.34148 12.5231 8.24329 12.4504 8.17055C12.3776 8.09782 12.2794 8.05626 12.1766 8.05469Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M18.7641 8.05476C18.6602 8.05475 18.5604 8.0956 18.4864 8.16851C18.4123 8.24141 18.3699 8.3405 18.3683 8.4444V15.8721C18.3614 15.9278 18.3664 15.9843 18.3829 16.0379C18.3995 16.0915 18.4272 16.141 18.4644 16.183C18.5015 16.2251 18.5472 16.2588 18.5983 16.2818C18.6495 16.3049 18.7049 16.3168 18.761 16.3168C18.8171 16.3168 18.8726 16.3049 18.9237 16.2818C18.9749 16.2588 19.0205 16.2251 19.0577 16.183C19.0948 16.141 19.1226 16.0915 19.1391 16.0379C19.1557 15.9843 19.1607 15.9278 19.1537 15.8721V8.4444C19.1529 8.34137 19.1113 8.24288 19.038 8.17044C19.003 8.13302 18.9606 8.10338 18.9134 8.08345C18.8662 8.06352 18.8153 8.05375 18.7641 8.05476Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M9.06544 21.8813C8.59196 21.8811 8.13312 22.0456 7.76765 22.3466C7.40219 22.6477 7.15285 23.0665 7.0624 23.5313C7.00768 23.7902 7.00768 24.0577 7.0624 24.3167C7.15499 24.7805 7.40549 25.198 7.77126 25.498C8.13702 25.798 8.59543 25.9619 9.06847 25.9619C9.54151 25.9619 9.99994 25.798 10.3657 25.498C10.7315 25.198 10.982 24.7805 11.0746 24.3167C11.1232 24.0571 11.1232 23.7908 11.0746 23.5313C10.9818 23.0665 10.7309 22.6482 10.3647 22.3475C9.99842 22.0467 9.53936 21.882 9.06544 21.8813ZM9.06544 25.1812C8.79684 25.1857 8.53381 25.1042 8.31476 24.9487C8.09571 24.7932 7.93211 24.5717 7.84779 24.3167C7.76104 24.062 7.76104 23.7859 7.84779 23.5313C7.93109 23.2798 8.0915 23.061 8.30627 22.9059C8.52103 22.7508 8.77922 22.6673 9.04413 22.6673C9.30905 22.6673 9.56722 22.7508 9.78198 22.9059C9.99674 23.061 10.1572 23.2798 10.2405 23.5313C10.3272 23.7859 10.3272 24.062 10.2405 24.3167C10.1592 24.5653 10.0023 24.7823 9.79159 24.9373C9.58089 25.0924 9.327 25.1776 9.06544 25.1812Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M31.7686 21.8813C31.2951 21.8811 30.8363 22.0456 30.4708 22.3466C30.1054 22.6477 29.856 23.0665 29.7656 23.5313C29.7109 23.7902 29.7109 24.0577 29.7656 24.3167C29.8549 24.7824 30.1038 25.2025 30.4694 25.5046C30.8349 25.8067 31.2944 25.9719 31.7686 25.9719C32.2429 25.9719 32.7023 25.8067 33.0679 25.5046C33.4335 25.2025 33.6823 24.7824 33.7717 24.3167C33.8264 24.0577 33.8264 23.7902 33.7717 23.5313C33.6801 23.067 33.4305 22.6489 33.0653 22.348C32.7 22.0472 32.2418 21.8823 31.7686 21.8813ZM31.7686 25.1812C31.5031 25.1768 31.2458 25.0886 31.0334 24.9293C30.821 24.7699 30.6644 24.5476 30.5858 24.294C30.5073 24.0403 30.5108 23.7684 30.596 23.5169C30.6812 23.2654 30.8436 23.0472 31.0601 22.8935C31.2766 22.7398 31.5361 22.6584 31.8016 22.6609C32.0671 22.6634 32.3251 22.7497 32.5386 22.9075C32.7522 23.0653 32.9104 23.2865 32.9908 23.5395C33.0712 23.7926 33.0696 24.0646 32.9863 24.3167C32.9036 24.5728 32.7404 24.7953 32.521 24.9511C32.3016 25.1069 32.0377 25.1876 31.7686 25.1812Z",
                                fill: "white"
                            })]
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: "clip-ship",
                                children: (0, s.jsx)("rect", {
                                    width: "40",
                                    height: "28.0304",
                                    fill: "white"
                                })
                            })
                        })]
                    }),
                    headset: () => (0, s.jsxs)("svg", {
                        width: "43",
                        height: "40",
                        viewBox: "0 0 43 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("g", {
                            clipPath: "url(#clip-headset)",
                            children: (0, s.jsx)("path", {
                                d: "M16.0466 40C15.9546 40.0005 15.866 39.9655 15.7998 39.9025C15.7657 39.87 15.7388 39.831 15.7206 39.7879C15.7024 39.7448 15.6934 39.6984 15.694 39.6517V38.6485H11.4145C10.2694 38.6448 9.17229 38.1937 8.36259 37.3936C7.55289 36.5935 7.09635 35.5094 7.09263 34.3779V32.3785H5.2666C5.17378 32.3764 5.08535 32.339 5.01983 32.274C4.9865 32.2439 4.95988 32.2074 4.94167 32.1666C4.92346 32.1258 4.91407 32.0817 4.91408 32.0371V30.0516H4.56862C3.35745 30.0461 2.19758 29.5678 1.3418 28.7209C0.486018 27.8739 0.00370817 26.7271 0 25.5303V23.2592C0.00554766 22.0629 0.488437 20.9171 1.34382 20.0706C2.1992 19.2241 3.35802 18.7451 4.56862 18.7378H4.91408V16.8568C4.9126 16.811 4.92131 16.7654 4.93958 16.7233C4.95785 16.6812 4.98524 16.6435 5.01983 16.613C5.05131 16.5795 5.08954 16.5529 5.13204 16.5349C5.17454 16.5169 5.22037 16.5079 5.2666 16.5085H7.3817V14.8365C7.33884 12.9036 7.68712 10.9817 8.40607 9.1836C9.12503 7.3855 10.2002 5.7474 11.5685 4.36542C12.9367 2.98344 14.5706 1.88541 16.3741 1.13578C18.1776 0.386144 20.1145 0 22.0711 0C24.0276 0 25.9645 0.386144 27.7681 1.13578C29.5716 1.88541 31.2054 2.98344 32.5737 4.36542C33.942 5.7474 35.0171 7.3855 35.7361 9.1836C36.455 10.9817 36.8033 12.9036 36.7604 14.8365V16.5085H37.7334C37.7807 16.5078 37.8276 16.5167 37.8713 16.5347C37.9149 16.5527 37.9544 16.5793 37.9872 16.613C38.051 16.6784 38.0864 16.7659 38.0859 16.8568V18.8353H38.4384C39.649 18.8445 40.8071 19.3252 41.6612 20.173C42.5152 21.0209 42.9963 22.1674 43 23.3637V25.6278C42.9982 26.8246 42.5176 27.9722 41.6632 28.8204C40.8087 29.6687 39.6496 30.1488 38.4384 30.1561H38.0859V32.0371C38.0859 32.1295 38.0488 32.2181 37.9827 32.2834C37.9165 32.3488 37.8269 32.3855 37.7334 32.3855H32.7981C32.7519 32.386 32.7061 32.377 32.6636 32.359C32.6211 32.341 32.5829 32.3144 32.5514 32.2809C32.4856 32.2162 32.4477 32.1288 32.4456 32.0371V31.8908V16.8359C32.4482 16.7501 32.4815 16.668 32.5396 16.6042C32.5977 16.5404 32.6768 16.4991 32.7629 16.4876H36.0343V14.8156C36.0761 12.9748 35.7453 11.1444 35.0613 9.43167C34.3773 7.71898 33.3539 6.15859 32.0512 4.84212C30.7485 3.52565 29.1928 2.47963 27.4753 1.76549C25.7578 1.05135 23.9133 0.683483 22.0499 0.683483C20.1866 0.683483 18.342 1.05135 16.6245 1.76549C14.9071 2.47963 13.3513 3.52565 12.0486 4.84212C10.7459 6.15859 9.72249 7.71898 9.03851 9.43167C8.35453 11.1444 8.02375 12.9748 8.06558 14.8156V16.4876H10.1807C10.228 16.4869 10.2749 16.4958 10.3186 16.5138C10.3622 16.5318 10.4017 16.5584 10.4345 16.5921C10.4983 16.6575 10.5338 16.745 10.5332 16.8359V32.0162C10.5338 32.1071 10.4983 32.1946 10.4345 32.26C10.3776 32.3158 10.3028 32.3503 10.223 32.3576H7.76946V34.364C7.76946 35.3118 8.15053 36.2209 8.82882 36.8911C9.5071 37.5613 10.427 37.9379 11.3863 37.9379H15.6658V37.074C15.6676 36.9822 15.7054 36.8946 15.7711 36.8297C15.8368 36.7647 15.9254 36.7274 16.0184 36.7257H20.6293C20.7222 36.7274 20.8108 36.7647 20.8765 36.8297C20.9423 36.8946 20.98 36.9822 20.9818 37.074V39.6517C20.9825 39.6984 20.9734 39.7448 20.9552 39.7879C20.9371 39.831 20.9101 39.87 20.876 39.9025C20.8098 39.9655 20.7213 40.0005 20.6293 40H16.0466ZM16.3991 39.3033H20.305V37.4223H16.3991V39.3033ZM33.193 31.64H37.4232V17.1842H33.193V31.64ZM5.64732 31.64H9.87752V17.1842H5.64732V31.64ZM38.0788 29.4177H38.4384C39.4614 29.4085 40.4394 29.001 41.1601 28.2836C41.8808 27.5662 42.2861 26.5969 42.2879 25.586V23.3219C42.2861 22.311 41.8808 21.3417 41.1601 20.6243C40.4394 19.9069 39.4614 19.4994 38.4384 19.4902H38.0788V29.4177ZM4.56157 19.4136C3.5386 19.4209 2.55985 19.8266 1.8378 20.5427C1.11576 21.2588 0.70872 22.2274 0.705033 23.2383V25.5094C0.7087 26.5209 1.11553 27.4902 1.83737 28.2074C2.55922 28.9246 3.53796 29.3319 4.56157 29.341H4.91408V19.4066L4.56157 19.4136Z",
                                fill: "white"
                            })
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: "clip-headset",
                                children: (0, s.jsx)("rect", {
                                    width: "42.8005",
                                    height: "40",
                                    fill: "white"
                                })
                            })
                        })]
                    }),
                    calendar: () => (0, s.jsxs)("svg", {
                        width: "43",
                        height: "40",
                        viewBox: "0 0 43 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsxs)("g", {
                            clipPath: "url(#clip-calendar)",
                            children: [(0, s.jsx)("path", {
                                d: "M39.2177 40H3.83392C2.28037 40 1 38.4464 1 36.5714V3.42857C1 1.55355 2.28037 0 3.83392 0H39.2159C40.7694 0 42.0498 1.55355 42.0498 3.42857V36.5714C42.0516 38.4464 40.7712 40 39.2177 40H39.2177ZM3.83392 0.776686C2.69106 0.776686 1.82322 1.96599 1.82322 3.38203V36.5249C1.82322 37.9874 2.73751 39.1302 3.83392 39.1302H39.2159C40.3587 39.1302 41.2266 37.9409 41.2266 36.5249L41.2284 3.42866C41.2284 1.96617 40.3141 0.823314 39.2177 0.823314H3.83388L3.83392 0.776686Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M8.9087 13.8984C8.9087 14.6751 8.26943 15.2698 7.53727 15.2698H7.12656C6.3944 15.2698 5.75513 14.6751 5.75513 13.8984V13.4876C5.75513 12.7109 6.3944 12.1162 7.12656 12.1162H7.53727C8.26943 12.1162 8.9087 12.7109 8.9087 13.4876V13.8984Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M13.6177 13.8984C13.6177 14.6751 12.9784 15.2698 12.2462 15.2698H11.8802C11.148 15.2698 10.5087 14.6751 10.5087 13.8984V13.4876C10.5087 12.7109 11.148 12.1162 11.8802 12.1162H12.2909C13.023 12.1162 13.6623 12.7109 13.6623 13.4876V13.8984H13.6177Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M18.371 13.8984C18.371 14.6751 17.7317 15.2698 16.9996 15.2698H16.5888C15.8567 15.2698 15.2174 14.6751 15.2174 13.8984V13.4876C15.2174 12.7109 15.8567 12.1162 16.5888 12.1162H16.9996C17.7317 12.1162 18.371 12.7109 18.371 13.4876V13.8984Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M23.0801 13.8984C23.0801 14.6751 22.4409 15.2698 21.7087 15.2698H21.298C20.5212 15.2698 19.9266 14.6751 19.9266 13.8984V13.4876C19.9266 12.7109 20.5212 12.1162 21.298 12.1162H21.7087C22.4409 12.1162 23.0801 12.7109 23.0801 13.4876V13.8984Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M27.789 13.8984C27.789 14.6751 27.1944 15.2698 26.4176 15.2698H26.0515C25.2748 15.2698 24.6801 14.6751 24.6801 13.8984V13.4876C24.6801 12.7109 25.2748 12.1162 26.0515 12.1162H26.4623C27.239 12.1162 27.8337 12.7109 27.8337 13.4876V13.8984H27.789Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M32.5424 13.8984C32.5424 14.6751 31.9478 15.2698 31.171 15.2698H30.7603C29.9835 15.2698 29.3889 14.6751 29.3889 13.8984V13.4876C29.3889 12.7109 29.9835 12.1162 30.7603 12.1162H31.171C31.9478 12.1162 32.5424 12.7109 32.5424 13.4876V13.8984Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M37.2516 13.8984C37.2516 14.6751 36.6569 15.2698 35.8802 15.2698H35.4695C34.6927 15.2698 34.098 14.6751 34.098 13.8984V13.4876C34.098 12.7109 34.6927 12.1162 35.4695 12.1162H35.8802C36.6569 12.1162 37.2516 12.7109 37.2516 13.4876V13.8984Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M8.9087 18.8339C8.9087 19.6107 8.26943 20.2053 7.53727 20.2053H7.12656C6.3944 20.2053 5.75513 19.6107 5.75513 18.8339V18.4232C5.75513 17.6464 6.3944 17.0518 7.12656 17.0518H7.53727C8.26943 17.0518 8.9087 17.6464 8.9087 18.4232V18.8339Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M13.6177 18.8339C13.6177 19.6107 12.9784 20.2053 12.2462 20.2053H11.8802C11.148 20.2053 10.5087 19.6107 10.5087 18.8339V18.4232C10.5087 17.6464 11.148 17.0518 11.8802 17.0518H12.2909C13.023 17.0518 13.6623 17.6464 13.6623 18.4232V18.8339H13.6177Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M18.371 18.8339C18.371 19.6107 17.7317 20.2053 16.9996 20.2053H16.5888C15.8567 20.2053 15.2174 19.6107 15.2174 18.8339V18.4232C15.2174 17.6464 15.8567 17.0518 16.5888 17.0518H16.9996C17.7317 17.0518 18.371 17.6464 18.371 18.4232V18.8339Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M23.0801 18.8339C23.0801 19.6107 22.4409 20.2053 21.7087 20.2053H21.298C20.5212 20.2053 19.9266 19.6107 19.9266 18.8339V18.4232C19.9266 17.6464 20.5212 17.0518 21.298 17.0518H21.7087C22.4409 17.0518 23.0801 17.6464 23.0801 18.4232V18.8339Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M27.789 18.8339C27.789 19.6107 27.1944 20.2053 26.4176 20.2053H26.0515C25.2748 20.2053 24.6801 19.6107 24.6801 18.8339V18.4232C24.6801 17.6464 25.2748 17.0518 26.0515 17.0518H26.4623C27.239 17.0518 27.8337 17.6464 27.8337 18.4232V18.8339H27.789Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M32.5424 18.8339C32.5424 19.6107 31.9478 20.2053 31.171 20.2053H30.7603C29.9835 20.2053 29.3889 19.6107 29.3889 18.8339V18.4232C29.3889 17.6464 29.9835 17.0518 30.7603 17.0518H31.171C31.9478 17.0518 32.5424 17.6464 32.5424 18.4232V18.8339Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M37.2516 18.8339C37.2516 19.6107 36.6569 20.2053 35.8802 20.2053H35.4695C34.6927 20.2053 34.098 19.6107 34.098 18.8339V18.4232C34.098 17.6464 34.6927 17.0518 35.4695 17.0518H35.8802C36.6569 17.0518 37.2516 17.6464 37.2516 18.4232V18.8339Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M8.9087 23.727C8.9087 24.4591 8.26943 25.0984 7.53727 25.0984H7.12656C6.3944 25.0984 5.75513 24.4591 5.75513 23.727V23.3163C5.75513 22.5841 6.3944 21.9448 7.12656 21.9448H7.53727C8.26943 21.9448 8.9087 22.5841 8.9087 23.3163V23.727Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M13.6177 23.727C13.6177 24.4591 12.9784 25.0984 12.2462 25.0984H11.8802C11.148 25.0984 10.5087 24.4591 10.5087 23.727V23.3163C10.5087 22.5841 11.148 21.9448 11.8802 21.9448H12.2909C13.023 21.9448 13.6623 22.5841 13.6623 23.3163V23.727H13.6177Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M18.371 23.727C18.371 24.4591 17.7317 25.0984 16.9996 25.0984H16.5888C15.8567 25.0984 15.2174 24.4591 15.2174 23.727V23.3163C15.2174 22.5841 15.8567 21.9448 16.5888 21.9448H16.9996C17.7317 21.9448 18.371 22.5841 18.371 23.3163V23.727Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M23.0801 23.727C23.0801 24.4591 22.4409 25.0984 21.7087 25.0984H21.298C20.5212 25.0984 19.9266 24.4591 19.9266 23.727V23.3163C19.9266 22.5841 20.5212 21.9448 21.298 21.9448H21.7087C22.4409 21.9448 23.0801 22.5841 23.0801 23.3163V23.727Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M27.789 23.727C27.789 24.4591 27.1944 25.0984 26.4176 25.0984H26.0515C25.2748 25.0984 24.6801 24.4591 24.6801 23.727V23.3163C24.6801 22.5841 25.2748 21.9448 26.0515 21.9448H26.4623C27.239 21.9448 27.8337 22.5841 27.8337 23.3163V23.727H27.789Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M32.5424 23.727C32.5424 24.4591 31.9478 25.0984 31.171 25.0984H30.7603C29.9835 25.0984 29.3889 24.4591 29.3889 23.727V23.3163C29.3889 22.5841 29.9835 21.9448 30.7603 21.9448H31.171C31.9478 21.9448 32.5424 22.5841 32.5424 23.3163V23.727Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M37.2516 23.727C37.2516 24.4591 36.6569 25.0984 35.8802 25.0984H35.4695C34.6927 25.0984 34.098 24.4591 34.098 23.727V23.3163C34.098 22.5841 34.6927 21.9448 35.4695 21.9448H35.8802C36.6569 21.9448 37.2516 22.5841 37.2516 23.3163V23.727Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M8.9087 28.6625C8.9087 29.4393 8.26943 30.0339 7.53727 30.0339H7.12656C6.3944 30.0339 5.75513 29.4393 5.75513 28.6625V28.2518C5.75513 27.475 6.3944 26.8804 7.12656 26.8804H7.53727C8.26943 26.8804 8.9087 27.475 8.9087 28.2518V28.6625Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M13.6177 28.6625C13.6177 29.4393 12.9784 30.0339 12.2462 30.0339H11.8802C11.148 30.0339 10.5087 29.4393 10.5087 28.6625V28.2518C10.5087 27.475 11.148 26.8804 11.8802 26.8804H12.2909C13.023 26.8804 13.6623 27.475 13.6623 28.2518V28.6625H13.6177Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M18.371 28.6625C18.371 29.4393 17.7317 30.0339 16.9996 30.0339H16.5888C15.8567 30.0339 15.2174 29.4393 15.2174 28.6625V28.2518C15.2174 27.475 15.8567 26.8804 16.5888 26.8804H16.9996C17.7317 26.8804 18.371 27.475 18.371 28.2518V28.6625Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M23.0801 28.6625C23.0801 29.4393 22.4409 30.0339 21.7087 30.0339H21.298C20.5212 30.0339 19.9266 29.4393 19.9266 28.6625V28.2518C19.9266 27.475 20.5212 26.8804 21.298 26.8804H21.7087C22.4409 26.8804 23.0801 27.475 23.0801 28.2518V28.6625Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M27.789 28.6625C27.789 29.4393 27.1944 30.0339 26.4176 30.0339H26.0515C25.2748 30.0339 24.6801 29.4393 24.6801 28.6625V28.2518C24.6801 27.475 25.2748 26.8804 26.0515 26.8804H26.4623C27.239 26.8804 27.8337 27.475 27.8337 28.2518V28.6625H27.789Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M32.5424 28.6625C32.5424 29.4393 31.9478 30.0339 31.171 30.0339H30.7603C29.9835 30.0339 29.3889 29.4393 29.3889 28.6625V28.2518C29.3889 27.475 29.9835 26.8804 30.7603 26.8804H31.171C31.9478 26.8804 32.5424 27.475 32.5424 28.2518V28.6625Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M37.2516 28.6625C37.2516 29.4393 36.6569 30.0339 35.8802 30.0339H35.4695C34.6927 30.0339 34.098 29.4393 34.098 28.6625V28.2518C34.098 27.475 34.6927 26.8804 35.4695 26.8804H35.8802C36.6569 26.8804 37.2516 27.475 37.2516 28.2518V28.6625Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M8.9087 33.5556C8.9087 34.3324 8.26943 34.927 7.53727 34.927H7.12656C6.3944 34.927 5.75513 34.3324 5.75513 33.5556V33.1449C5.75513 32.3681 6.3944 31.7734 7.12656 31.7734H7.53727C8.26943 31.7734 8.9087 32.3681 8.9087 33.1449V33.5556Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M13.6177 33.5556C13.6177 34.3324 12.9784 34.927 12.2462 34.927H11.8802C11.148 34.927 10.5087 34.3324 10.5087 33.5556V33.1449C10.5087 32.3681 11.148 31.7734 11.8802 31.7734H12.2909C13.023 31.7734 13.6623 32.3681 13.6623 33.1449V33.5556H13.6177Z",
                                fill: "white"
                            }), (0, s.jsx)("path", {
                                d: "M23.0802 6.53756C23.0802 7.26972 22.4855 7.90898 21.7087 7.90898H7.1268C6.35002 7.90898 5.75537 7.26972 5.75537 6.53756V6.08041C5.75537 5.34825 6.35002 4.70898 7.1268 4.70898H21.7087C22.4855 4.70898 23.0802 5.34825 23.0802 6.08041V6.53756Z",
                                fill: "white"
                            })]
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: "clip-calendar",
                                children: (0, s.jsx)("rect", {
                                    width: "42.8005",
                                    height: "40",
                                    fill: "white"
                                })
                            })
                        })]
                    }),
                    bitcoin: () => (0, s.jsxs)("svg", {
                        width: "43",
                        height: "40",
                        viewBox: "0 0 43 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("path", {
                            d: "M25.4781 19.6525C26.3589 18.8764 26.9144 17.7524 26.9144 16.492C26.9144 14.1749 25.0237 12.2786 22.701 12.2786H21.6481V10.4028H20.2418V12.2804L18.972 12.2786H18.1342V10.4028H16.7316V12.2804L14.7025 12.2786V13.6868H16.7372V26.3157H14.7025V27.7239H16.7372V29.6015H18.1398V27.7183H20.2455V29.5959H21.6537V27.7183H23.8025C26.1195 27.7183 28.0159 25.8276 28.0159 23.5049C28.0103 21.7863 26.9667 20.2977 25.4781 19.6525V19.6525ZM18.9719 13.6868H22.6972C24.2438 13.6868 25.5023 14.951 25.5023 16.492C25.5023 18.0386 24.2438 19.2971 22.6972 19.2971H18.1341V13.6867L18.9719 13.6868ZM23.7987 26.3119H18.1341V20.7052H23.7929C25.3395 20.7052 26.5944 21.9601 26.5944 23.5067C26.5944 25.0514 25.3432 26.3119 23.7986 26.3119H23.7987Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M35.8722 20.0032C35.8722 11.7969 29.198 5.12842 20.9975 5.12842C20.3036 5.12842 19.6098 5.18078 18.9141 5.27242L19.1049 6.66567C19.7332 6.57404 20.3709 6.53476 20.9974 6.53476C28.4276 6.53476 34.4699 12.5771 34.4699 19.9733L34.4643 20.1079L35.8722 20.0032Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M20.9976 33.4697C13.5713 33.4697 7.53089 27.4236 7.53089 20.003V19.9487L6.1283 20.003C6.1283 28.2035 12.8064 34.8724 20.9978 34.8724C21.6822 34.8724 22.3573 34.8238 23.0269 34.7378L22.8417 33.3445C22.2321 33.4306 21.6149 33.4698 20.9978 33.4698L20.9976 33.4697Z",
                            fill: "white"
                        }), (0, s.jsx)("path", {
                            d: "M20.9974 0C9.97129 0 1 8.97081 1 20.0026C1 31.0325 9.97081 40 20.9974 40C32.0273 40 41 31.033 41 20.0026C41 8.97081 32.0273 0 20.9974 0ZM20.9974 38.5973C10.7473 38.5973 2.40274 30.2565 2.40274 20.0026C2.40274 9.74686 10.7473 1.408 20.9974 1.408C31.257 1.408 39.5977 9.74878 39.5977 20.0026C39.5977 30.2565 31.257 38.5973 20.9974 38.5973Z",
                            fill: "white"
                        })]
                    })
                },
                e4 = {
                    show: {
                        opacity: 1,
                        x: 0,
                        transition: {
                            opacity: {
                                duration: 1,
                                ease: [.57, .06, .49, .94]
                            },
                            x: {
                                duration: 1.8,
                                ease: [.06, .56, 0, .99]
                            }
                        }
                    },
                    hide: {
                        opacity: 0,
                        x: -40
                    }
                },
                e5 = {
                    show: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                            duration: 2.2,
                            ease: [.63, .07, .28, .87],
                            opacity: {
                                duration: 1.5,
                                ease: [.44, .26, .29, .93]
                            }
                        }
                    },
                    hide: {
                        opacity: 0,
                        x: -20,
                        scale: .7
                    }
                },
                e7 = (0, C.memo)(() => (0, s.jsx)("section", {
                    children: (0, s.jsx)("div", {
                        children: (0, s.jsx)("div", {
                            className: "resources-section",
                            children: (0, s.jsx)("div", {
                                className: "section-container"
                            })
                        })
                    })
                })),
                e6 = {
                    introduction: e => {
                        let {
                            data: t,
                            scrollProgress: i
                        } = e, {
                            section1Title: l,
                            section1Content: a,
                            section2Title: r,
                            section2Content: n,
                            section3Title: A,
                            section3Content: o,
                            section4Title: h,
                            section4Content: x
                        } = t, p = (0, C.useRef)(), [m, u] = (0, C.useState)(0), g = (0, c.Gc)(), [w, f] = (0, C.useState)(!1);
                        return (0, c.LI)(() => {
                            let e;
                            let t = "desktop" === g ? [.165, .465, .705, 1] : [.23, .48, .8, 1];
                            t.some((t, s) => {
                                if (i < t) return e = s, !0
                            }), e !== m && u(e), f(i > 0 && i < .99);
                            let s = (0, b.IA)(i, 20, 0),
                                C = (0, b.IA)(i, 18, 16),
                                l = (0, b.lb)((0, b.Qx)((0, d.eE)(s) - (0, d.hl)(C))),
                                a = window.requestAnimationFrame(() => {
                                    p.current.style.setProperty("--content-opacity", l)
                                });
                            return () => window.cancelAnimationFrame(a)
                        }, [i, g]), (0, s.jsx)("section", {
                            children: (0, s.jsxs)("div", {
                                ref: p,
                                className: j()("intro-sections", w && "is-visible"),
                                children: [(0, s.jsx)(X, {
                                    number: 1,
                                    title: l,
                                    content: a,
                                    image: q,
                                    imageAlt: "Unity Headphones",
                                    videoFileNameBase: "02_Hear",
                                    active: 0 === m
                                }, "sec-1"), (0, s.jsx)(X, {
                                    number: 2,
                                    title: r,
                                    content: n,
                                    image: T,
                                    imageAlt: "Unity Headphones in Profile",
                                    active: 1 === m
                                }, "sec-2"), (0, s.jsx)(X, {
                                    number: 3,
                                    title: A,
                                    content: o,
                                    image: K,
                                    imageAlt: "Unity Headphones",
                                    videoFileNameBase: "03_Waiting",
                                    active: 2 === m
                                }, "sec-3"), (0, s.jsx)(X, {
                                    number: 4,
                                    title: h,
                                    content: x,
                                    image: W,
                                    imageAlt: "Unity Headphones Front View",
                                    videoFileNameBase: "04_Universe",
                                    videoForegroundImage: G,
                                    mediaMask: !0,
                                    showIcons: !0,
                                    active: 3 === m
                                }, "sec-4")]
                            })
                        })
                    },
                    bluetoothLossless: e => {
                        let {
                            data: t,
                            scrollProgress: i
                        } = e, {
                            compareText: l,
                            losslessText: a
                        } = t, r = (0, C.useRef)(null), [n, A] = (0, C.useState)(!1), [o, h] = (0, C.useState)(0), [x, p] = (0, C.useState)(0);
                        return (0, c.LI)(() => {
                            let e, t;
                            let s = 1,
                                C = 1,
                                l = 1;
                            if (i < .3) {
                                e = 0;
                                let a = i / .3,
                                    r = (0, b.F7)(a, .15, .7);
                                t = (0, d.Y3)(a), s = .95 + .05 * (0, d.Y3)(r), C = (0, d.eE)(r), l = .75 + .25 * (0, d.Y3)(a)
                            } else if (i > .68) {
                                e = 1;
                                let C = (i - .68) / .31999999999999995,
                                    a = (0, b.IA)(C, 2, 1);
                                t = (0, d.eE)(.999 - a), s = 1 + .25 * (0, d.g4)(C), l = 1.05 + .55 * (0, d.g4)(C)
                            } else e = (i - .3) / .38000000000000006, l = 1 + .05 * (0, d.mZ)(e);
                            t = (0, b.lb)((0, b.Qx)(t)), C = (0, b.lb)((0, b.Qx)(C)), s = (0, b.lb)(s), l = (0, b.lb)(l);
                            let a = (0, b.lb)((0, b.Qx)((0, b.yW)(e))),
                                n = (0, b.lb)((0, b.Qx)((0, b.fy)(e))),
                                c = 200 * e - 90,
                                o = c + 50;
                            A(i > 0 && i < 1), h(e), p(i > .5 ? 1 : 0);
                            let x = window.requestAnimationFrame(() => {
                                r.current.style.opacity = t, r.current.style.setProperty("--scale", s), r.current.style.setProperty("--scale-opacity", C), r.current.style.setProperty("--bg-scale", l), r.current.style.setProperty("--in-opacity", a), r.current.style.setProperty("--out-opacity", n), r.current.style.setProperty("--gradient-progress-1", "".concat(c, "%")), r.current.style.setProperty("--gradient-progress-2", "".concat(o, "%"))
                            });
                            return () => window.cancelAnimationFrame(x)
                        }, [i]), (0, s.jsxs)("div", {
                            ref: r,
                            className: j()("btlss", n && "is-active"),
                            children: [(0, s.jsx)("div", {
                                className: "btlss__frame",
                                children: (0, s.jsx)("div", {
                                    className: "btlss__frame-content",
                                    children: (0, s.jsxs)("div", {
                                        className: "btlss__scale-container",
                                        children: [(0, s.jsx)(eC, {
                                            progress: o,
                                            children: (0, s.jsx)(er, {
                                                activeContentIndex: x,
                                                inView: n
                                            })
                                        }), (0, s.jsx)(ea, {
                                            activeContentIndex: x,
                                            compareText: l,
                                            losslessText: a,
                                            inView: n
                                        }), (0, s.jsx)(en, {
                                            progress: o
                                        })]
                                    })
                                })
                            }), (0, s.jsx)("div", {
                                className: "btlss__mobile-content",
                                children: (0, s.jsx)(ea, {
                                    activeContentIndex: x,
                                    compareText: l,
                                    losslessText: a,
                                    inView: n
                                })
                            }), (0, s.jsx)(et, {
                                active: n,
                                progress: o
                            })]
                        })
                    },
                    design: e => {
                        let {
                            data: t,
                            scrollProgress: i
                        } = e, {
                            componentHousingTitle: C,
                            componentHousingContent: l,
                            headbandTitle: a,
                            headbandContent: r,
                            earCushionsTitle: n,
                            earCushionsContent: A
                        } = t, c = {
                            slide1: (0, b.IA)(i, 3, 0),
                            slide2: (0, b.IA)(i, 3, 1),
                            slide3: (0, b.IA)(i, 3, 2)
                        }, d = i > 0 && i < .99;
                        return (0, s.jsxs)("section", {
                            className: j()("design-sections-wrapper", d && "is-active"),
                            children: [(0, s.jsx)(eb, {
                                type: "component-housing",
                                progress: c.slide1,
                                title: C,
                                content: l,
                                image: eH,
                                imageMobile: eH,
                                imageAlt: "Unity Headphones Earcups"
                            }), (0, s.jsx)(eb, {
                                type: "headband",
                                progress: c.slide2,
                                title: a,
                                content: r,
                                image: e_,
                                imageMobile: eE,
                                imageAlt: "Unity Headphones Headband",
                                vertical: !0
                            }), (0, s.jsx)(eb, {
                                type: "ear-cushions",
                                progress: c.slide3,
                                title: n,
                                content: A,
                                image: eN,
                                imageMobile: eN,
                                imageAlt: "Unity Headphones Ear Cushions"
                            })]
                        })
                    },
                    technicalSpecs: e => {
                        let {
                            data: t
                        } = e, {
                            technicalSpecsTitle: i,
                            technicalSpecsContent: l,
                            fidelityTitle: a,
                            fidelityContent: r,
                            functionalityTitle: n,
                            functionalityContent: A,
                            electronicsTitle: o,
                            electronicsContent: x,
                            audioTitle: p,
                            audioContent: m,
                            detailedSpecs: u
                        } = t, [g, w] = (0, c.xq)(30), f = (0, c.Gc)(), {
                            isSafari: L
                        } = (0, h.AA)(), [v, M] = (0, c.xq)(), [V, H] = (0, c.YD)({
                            rootMargin: "0px 0px 500px",
                            threshold: 0
                        });
                        return (0, C.useEffect)(() => {
                            let e = (0, b.Qx)((0, d.w2)(w)),
                                t = window.requestAnimationFrame(() => {
                                    V.current.style.setProperty("--backdrop-fade", e)
                                });
                            return () => window.cancelAnimationFrame(t)
                        }, [w]), (0, C.useEffect)(() => {
                            if ("desktop" !== f || L) return;
                            let e = window.requestAnimationFrame(() => {
                                V.current.style.setProperty("--backdrop-shift-out", "".concat((0, b.lb)(25 * M), "vh"))
                            });
                            return () => window.cancelAnimationFrame(e)
                        }, [M]), (0, s.jsxs)("section", {
                            ref: V,
                            className: j()("main-specs"),
                            children: [(0, s.jsx)(eO, {
                                sections: [{
                                    type: "technical-specs",
                                    title: i,
                                    content: l
                                }, {
                                    type: "fidelity",
                                    title: a,
                                    content: r
                                }, {
                                    type: "functionality",
                                    title: n,
                                    content: A
                                }, {
                                    type: "electronics",
                                    title: o,
                                    content: x
                                }, {
                                    type: "audio",
                                    title: p,
                                    content: m
                                }],
                                inView: H
                            }), (0, s.jsx)("div", {
                                ref: g,
                                className: "spec-divider"
                            }), (0, s.jsx)(eR, {
                                ref: v,
                                specs: u
                            })]
                        })
                    },
                    app: e => {
                        let {
                            data: t,
                            scrollProgress: i
                        } = e, [l, a] = (0, c.YD)({
                            rootMargin: "-20% 0px",
                            threshold: 0
                        }), r = (0, C.useRef)(), [n, A] = (0, C.useState)(!1), o = i < .32 ? 0 : 1, h = i < .11 ? 0 : 1, x = {
                            data: t,
                            inView: a
                        };
                        return (0, C.useEffect)(() => {
                            A(i > 0 && i < .85);
                            let e = (0, b.Qx)((0, d._w)((0, b.F7)(i, 0, .85))),
                                t = window.requestAnimationFrame(() => {
                                    r.current.style.opacity = e
                                });
                            return () => window.cancelAnimationFrame(t)
                        }, [i]), (0, s.jsxs)("section", {
                            ref: l,
                            className: j()("app-section", a && "in-view"),
                            children: [(0, s.jsxs)("div", {
                                children: [(0, s.jsx)(e$, {
                                    ...x,
                                    screenIndex: h
                                }), (0, s.jsx)(e1, {
                                    ...x,
                                    screenIndex: o
                                })]
                            }), (0, s.jsx)("div", {
                                ref: r,
                                className: "app-background",
                                children: n && (0, s.jsx)(eL, {})
                            })]
                        })
                    },
                    accessories: e => {
                        let {
                            data: t
                        } = e, {
                            displayTitle: i,
                            title: C,
                            factsheet: l,
                            squareImageGallery: a,
                            horizontalImageGallery: r,
                            addOnsDisplayTitle: n,
                            addOns: A
                        } = t;
                        return (0, s.jsxs)("section", {
                            className: "accessories-section",
                            children: [(0, s.jsx)("div", {
                                className: "accessories-subsection sec100",
                                children: (0, s.jsxs)("div", {
                                    className: "section-container",
                                    children: [(0, s.jsx)("h3", {
                                        className: "section-title",
                                        children: i || C
                                    }), (0, s.jsxs)("div", {
                                        className: "accessories-grid",
                                        children: [(0, s.jsxs)("div", {
                                            className: "accessories-grid__primary",
                                            children: [(0, s.jsx)("div", {
                                                className: "hide-on-mobile",
                                                children: (0, s.jsx)(eD, {
                                                    children: r.images.map((e, t) => (0, s.jsx)(ex.o5, {
                                                        children: (0, s.jsx)(eF, {
                                                            image: e,
                                                            alt: e.alt
                                                        })
                                                    }, t))
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "hide-on-desktop",
                                                children: (0, s.jsx)(eD, {
                                                    children: a.images.map((e, t) => (0, s.jsx)(ex.o5, {
                                                        children: (0, s.jsx)(eF, {
                                                            image: e,
                                                            alt: e.alt
                                                        })
                                                    }, t))
                                                })
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "accessories-grid__secondary",
                                            children: l.map((e, t) => (0, s.jsx)(ez, {
                                                title: e.title,
                                                content: e.content
                                            }, t))
                                        })]
                                    })]
                                })
                            }), A && A.length > 0 && (0, s.jsx)("div", {
                                className: "accessories-subsection sec100",
                                children: (0, s.jsxs)("div", {
                                    className: "section-container",
                                    children: [(0, s.jsx)("h3", {
                                        className: "section-title",
                                        children: n || "Add-Ons"
                                    }), 1 === A.length ? (0, s.jsxs)("div", {
                                        className: "accessories-grid",
                                        children: [(0, s.jsx)("div", {
                                            className: "accessories-grid__primary",
                                            children: addons[0].product && (0, s.jsxs)(s.Fragment, {
                                                children: [(0, s.jsx)("div", {
                                                    className: "hide-on-mobile",
                                                    children: (0, s.jsx)(eD, {
                                                        children: A[0].product.horizontalImageGallery.images.map((e, t) => (0, s.jsx)(ex.o5, {
                                                            children: (0, s.jsx)(eF, {
                                                                image: e,
                                                                alt: e.alt
                                                            })
                                                        }, t))
                                                    })
                                                }), (0, s.jsx)("div", {
                                                    className: "hide-on-desktop",
                                                    children: (0, s.jsx)(eD, {
                                                        children: A[0].product.squareImageGallery.images.map((e, t) => (0, s.jsx)(ex.o5, {
                                                            children: (0, s.jsx)(eF, {
                                                                image: e,
                                                                alt: e.alt
                                                            })
                                                        }, t))
                                                    })
                                                })]
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "accessories-grid__secondary",
                                            children: [(0, s.jsx)(ez, {
                                                title: A[0].title,
                                                content: A[0].description
                                            }), A[0].details && A[0].details.map((e, t) => {
                                                let {
                                                    title: i,
                                                    content: C
                                                } = e;
                                                return (0, s.jsx)(ez, {
                                                    title: i,
                                                    content: C
                                                }, "detail-fact-".concat(t))
                                            }), (0, s.jsx)(eS, {
                                                product: A[0].product
                                            })]
                                        })]
                                    }) : (0, s.jsx)("div", {
                                        className: "add-on-grid",
                                        children: A.map((e, t) => (0, s.jsx)(eU, {
                                            ...e
                                        }, t))
                                    })]
                                })
                            })]
                        })
                    },
                    faq: eM,
                    purchaseOverview: e => {
                        let {
                            data: t
                        } = e, {
                            title: i,
                            displayTitle: C,
                            infoBlocks: l
                        } = t, [a, r] = (0, c.vb)({
                            rootMargin: "-10% 0px"
                        }), n = (0, h._T)(), A = n.variants[0], d = (0, h.V6)(A), o = A && A.inStock && !0, x = r ? "show" : "hide";
                        return (0, s.jsxs)("section", {
                            className: "purchase-overview",
                            children: [(0, s.jsx)("div", {
                                className: "section-container",
                                children: (0, s.jsxs)("div", {
                                    ref: a,
                                    className: "purchase-overview__content",
                                    children: [(0, s.jsx)("h3", {
                                        className: "section-title",
                                        children: C || i
                                    }), (0, s.jsxs)("div", {
                                        className: "purchase-overview__list",
                                        children: [l.map((e, t) => {
                                            let {
                                                title: i,
                                                content: C,
                                                icon: l
                                            } = e, a = e3[l];
                                            return (0, s.jsxs)("div", {
                                                className: "purchase-overview__item",
                                                children: [(0, s.jsx)("div", {
                                                    className: "purchase-overview__item-icon",
                                                    children: a && (0, s.jsx)(a, {})
                                                }), (0, s.jsxs)("div", {
                                                    children: [(0, s.jsx)("h5", {
                                                        className: "small-title",
                                                        children: i
                                                    }), (0, s.jsx)("div", {
                                                        className: "purchase-overview__item-content",
                                                        children: (0, s.jsx)(P(), {
                                                            blocks: C,
                                                            serializers: J.f
                                                        })
                                                    })]
                                                })]
                                            }, t)
                                        }), o && (0, s.jsx)("div", {
                                            className: "purchase-overview__item",
                                            children: (0, s.jsx)("button", {
                                                className: "btn btn--primary btn--lg btn--block",
                                                onClick: () => d(),
                                                children: (0, s.jsx)("strong", {
                                                    children: "Purchase Now"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: "purchase-overview__hero",
                                children: (0, s.jsxs)("div", {
                                    className: "purchase-overview__hero-position",
                                    children: [(0, s.jsx)(p.E.div, {
                                        animate: x,
                                        variants: e4,
                                        initial: "hidden",
                                        className: "purchase-overview__hero-image",
                                        children: (0, s.jsx)(B(), {
                                            src: e2,
                                            layout: "fill",
                                            objectFit: "contain",
                                            alt: "",
                                            priority: !0
                                        })
                                    }), (0, s.jsx)(p.E.div, {
                                        animate: x,
                                        variants: e5,
                                        initial: "hidden",
                                        className: "purchase-overview__hero-image-spotlight-container",
                                        children: (0, s.jsx)("div", {
                                            className: "purchase-overview__hero-image-spotlight"
                                        })
                                    })]
                                })
                            })]
                        })
                    },
                    resources: e7
                },
                e0 = (0, C.forwardRef)((e, t) => {
                    let {
                        index: i,
                        children: a
                    } = e, r = (0, l.Zl)((0, x.KI)(i)), [n, d] = (0, l.FV)(x.hv), h = (0, l.Zl)(x.Tt), p = null;
                    if (i == o.q.length - 2) {
                        let e = null,
                            t = null;
                        (t = document.getElementsByClassName("footer")[0]) && (e = t.offsetHeight), e && (p = window.innerHeight / e)
                    }
                    let [m, j, u] = (0, c.xq)(60, p || null);
                    return (0, C.useEffect)(() => {
                        if (r(j), 0 === i && 0 === j) {
                            h(null), d(-1);
                            return
                        }
                        if (j > 0 && j < 1 && n !== i) {
                            var e;
                            h(null === (e = o.q[i]) || void 0 === e ? void 0 : e.hash), d(i)
                        }
                    }, [j]), (0, s.jsx)("div", {
                        ref: (0, A.Z)(t, m),
                        children: a({
                            scrollProgress: j,
                            motionScrollProgress: u
                        })
                    })
                }),
                e8 = (0, C.memo)(e => {
                    let {
                        navSections: t,
                        onNavItemClick: i = () => {}
                    } = e, a = (0, l.sJ)(x.hv), r = (0, C.useCallback)(e => {
                        i(e)
                    });
                    return (0, s.jsx)(v, {
                        show: a > -1,
                        children: t.map((e, t) => {
                            var i;
                            return (0, s.jsx)(L, {
                                index: t,
                                title: null === (i = e.data) || void 0 === i ? void 0 : i.title,
                                onClick: r
                            }, t)
                        })
                    })
                });
            var e9 = !0,
                te = e => {
                    let {
                        data: t
                    } = e, {
                        page: i
                    } = t;
                    i.sections.resources = {
                        title: "Resources"
                    };
                    let r = o.q.map(e => ({
                            ...e,
                            data: i.sections[e.key],
                            Component: e6[e.key]
                        })),
                        A = (0, C.useRef)(Array(r.length)),
                        p = (0, a.useRouter)(),
                        m = (0, c.RJ)(),
                        {
                            isTouch: j,
                            isSafari: u
                        } = (0, h.AA)(),
                        g = (0, c.Gc)(),
                        [w, f] = (0, l.FV)(x.yy),
                        L = (0, l.sJ)(x.Tt),
                        v = (0, l.sJ)(x.hv);
                    (0, C.useEffect)(() => {
                        let e;
                        let t = window.location.hash.replace("#", "");
                        if (t) {
                            let i = r.findIndex(e => e.hash === t);
                            e = setTimeout(() => M(i, !1), 250)
                        }
                        return () => clearTimeout(e)
                    }, []), (0, C.useEffect)(() => {
                        if (null === w) return;
                        let e = r.findIndex(e => e.hash === w);
                        e > -1 && M(e)
                    }, [w]), (0, C.useEffect)(() => {
                        if (m) return;
                        let e = p.pathname,
                            t = e;
                        window.location.search && (t += window.location.search), L && (t += "#".concat(L)), p.replace(e, t, {
                            scroll: !1,
                            shallow: !0
                        }), f(null)
                    }, [L]);
                    let M = function(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        if (e === v || !(r[e] && A.current[e])) return;
                        let i = A.current[e],
                            s = 1,
                            {
                                scrollTargetSelector: C,
                                scrollTargetOffsetPercentage: l
                            } = r[e];
                        if (C) {
                            let e = i.querySelectorAll(C),
                                t = [...e].find(e => e.clientHeight > 0);
                            t && (i = t, s = t.clientHeight * (l || 0))
                        }
                        if (!1 === t || u && Math.abs(v - e) > 1) {
                            let e = window.pageYOffset + i.getBoundingClientRect().top;
                            window.scrollTo(0, e + s)
                        } else n()(i, {
                            easing: d.$1,
                            speed: 200,
                            minDuration: 1100,
                            maxDuration: 6e3,
                            verticalOffset: s
                        })
                    };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "main",
                            children: [(0, s.jsx)(k, {}), r.map((e, t) => {
                                let {
                                    data: i,
                                    Component: C
                                } = e;
                                return (0, s.jsx)(e0, {
                                    ref: e => A.current[t] = e,
                                    index: t,
                                    children: e => {
                                        let {
                                            scrollProgress: t,
                                            motionScrollProgress: l
                                        } = e;
                                        return (0, s.jsx)(C, {
                                            data: i,
                                            scrollProgress: t,
                                            motionScrollProgress: l
                                        })
                                    }
                                }, t)
                            })]
                        }), !j && "mobile" !== g && (0, s.jsx)(e8, {
                            navSections: r,
                            onNavItemClick: e => M(e)
                        })]
                    })
                }
        },
        4140: function(e) {
            e.exports = {
                links: "downloadLinks_links__xtFUb",
                appStore: "downloadLinks_appStore__QgOCc",
                googlePlay: "downloadLinks_googlePlay__I5_QN"
            }
        },
        5527: function(e) {
            e.exports = {
                background: "gradientBackground_background__1Jf3T",
                rotate: "gradientBackground_rotate__D80so",
                bloom: "gradientBackground_bloom__2m3PW"
            }
        },
        8514: function(e) {
            e.exports = {
                hero: "hero_hero__mwm4d",
                heroIsHidden: "hero_heroIsHidden__Cw2Up",
                tagline: "hero_tagline__dRQXA",
                textFragment: "hero_textFragment__VYa4l",
                letter: "hero_letter__oFDEb",
                graphic: "hero_graphic__jlR9R",
                heroGl: "hero_heroGl___ZAsb",
                glCanvasContainer: "hero_glCanvasContainer__wOqHt",
                glIndicator: "hero_glIndicator__Clbhn",
                glCursor: "hero_glCursor__z1_HJ",
                glCursorShow: "hero_glCursorShow__QttZV",
                glCursorIcon: "hero_glCursorIcon__SywBA",
                glCursorShrink: "hero_glCursorShrink__h5ZnF",
                glIndicatorShow: "hero_glIndicatorShow__zTRS_",
                hideDefaultCursor: "hero_hideDefaultCursor__omqM9",
                mediaFrame: "hero_mediaFrame__AjXrj",
                mediaFrameShow: "hero_mediaFrameShow__zCyjA",
                media: "hero_media__GD_9H",
                mediaImage: "hero_mediaImage__SSWHP",
                mediaVideo: "hero_mediaVideo__s8RZb",
                mediaVideoPlaying: "hero_mediaVideoPlaying__cukYI",
                scrollIndicator: "hero_scrollIndicator__lIxMv",
                scrollIndicatorVisible: "hero_scrollIndicatorVisible__Uk2T5",
                glLoaderPosition: "hero_glLoaderPosition__MyChM"
            }
        },
        1076: function(e) {
            e.exports = {
                nav: "sectionNavigation_nav__6Dk0i",
                item: "sectionNavigation_item__niza6",
                itemActive: "sectionNavigation_itemActive__RpZyP",
                label: "sectionNavigation_label__CMM5w",
                drip: "sectionNavigation_drip__ir62x",
                itemComplete: "sectionNavigation_itemComplete__XMemB",
                dripDrop: "sectionNavigation_dripDrop__58sc9",
                backdrop: "sectionNavigation_backdrop__5AWso"
            }
        }
    },
    function(e) {
        e.O(0, [182, 774, 888, 179], function() {
            return e(e.s = 5557)
        }), _N_E = e.O()
    }
]);