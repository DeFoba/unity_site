(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [330], {
        10: function(e, n, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[...slug]", function() {
                return s(4367)
            }])
        },
        3972: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                __N_SSG: function() {
                    return t
                }
            });
            var r = s(5893),
                t = !0;
            n.default = e => {
                let {
                    data: n
                } = e;
                return (0, r.jsx)("div", {
                    className: "main",
                    children: "Error"
                })
            }
        },
        4367: function(e, n, s) {
            "use strict";
            s.r(n), s.d(n, {
                __N_SSG: function() {
                    return l
                }
            });
            var r = s(5893),
                t = s(1163),
                i = s(8863),
                c = s.n(i),
                a = s(6353),
                u = s(3972),
                l = !0;
            n.default = e => {
                let {
                    data: n
                } = e, s = (0, t.useRouter)();
                if (!s.isFallback && !n) return (0, r.jsx)(u.default, {
                    statusCode: 404
                });
                let {
                    title: i,
                    content: l
                } = n.page;
                return (0, r.jsx)(r.Fragment, {
                    children: !s.isFallback && (0, r.jsx)("div", {
                        className: "page",
                        children: (0, r.jsxs)("div", {
                            className: "section-container",
                            children: [(0, r.jsx)("h1", {
                                className: "section-title",
                                children: i
                            }), (0, r.jsx)("div", {
                                className: "rte",
                                children: (0, r.jsx)(c(), {
                                    blocks: l,
                                    serializers: a.f
                                })
                            })]
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], function() {
            return e(e.s = 10)
        }), _N_E = e.O()
    }
]);