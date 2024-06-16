/*! EPITA Students check README.md */
(globalThis.webpackChunkneedtimesite_valley_react = globalThis.webpackChunkneedtimesite_valley_react || []).push([
    [944], {
        35443: (e, t, r) => {
            "use strict";
            r.d(t, {
                oW: () => u
            });
            var n = r(85893),
                s = r(67294),
                a = r(62642),
                i = r(53739),
                o = r(13406);
            const l = {
                    exit: e => a.gsap.timeline().fromTo(e, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        duration: .7
                    }),
                    enter: e => a.gsap.timeline().fromTo(e, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: .7
                    })
                },
                c = {
                    exit: () => a.gsap.timeline(),
                    enter: () => a.gsap.timeline()
                },
                u = s.memo((e => {
                    let {
                        children: t,
                        className: r,
                        animations: a
                    } = e;
                    const {
                        currentState: u,
                        finishState: d
                    } = (0, i.SC)(), m = (0, s.useRef)(null), p = a || l;
                    return (0, s.useEffect)((() => {
                        "none" !== u && (p[u] || c[u])(m.current).call(d)
                    }), [u, d, p]), (0, n.jsx)(o.G, {
                        className: `animated-page ${r||""} animation-${u}`,
                        ref: m,
                        children: t
                    })
                }))
        },
        39864: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n = r(85893),
                s = r(67294),
                a = r(11595),
                i = r(95320),
                o = r(6341),
                l = r(40270),
                c = r(36280);
            const u = e => {
                const {
                    dropdownTitle: t,
                    dropdownItems: r,
                    className: u
                } = e, d = (0, s.useRef)(null), [m, p] = (0, s.useState)(!1);
                return (0, c.Z)(d, (() => p(!1))), (0, n.jsxs)("button", {
                    className: `dropdown ${m?"active":""} ${u||""}`,
                    onClick: () => {
                        p(!m)
                    },
                    ref: d,
                    children: [(0, n.jsx)(o.r, {
                        className: "nav-link nav-text",
                        children: t
                    }), (0, n.jsx)(a.Q, {
                        src: l,
                        className: "dropdown-icon"
                    }), (0, n.jsx)(i.Z, {
                        dropdownItems: r,
                        isActive: m
                    })]
                })
            }
        },
        79610: (e, t, r) => {
            "use strict";
            r.d(t, {
                h: () => a
            });
            var n = r(85893),
                s = r(39711);
            const a = e => {
                const {
                    title: t,
                    linkTo: r,
                    anchorRef: a,
                    onClick: i,
                    href: o
                } = e, l = () => {
                    i && i()
                };
                return o ? (0, n.jsx)("a", {
                    href: o,
                    className: "nav-text",
                    ref: a,
                    target: "_blank",
                    onClick: l,
                    children: t
                }) : r ? (0, n.jsx)(s.rU, {
                    to: r,
                    className: "nav-text",
                    ref: a,
                    children: t
                }) : (0, n.jsx)("a", {
                    className: "nav-text",
                    ref: a,
                    onClick: l,
                    children: t
                })
            }
        },
        95320: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            }), r(26699);
            var n = r(85893),
                s = r(67294),
                a = r(11595),
                i = r(79610),
                o = r(62642),
                l = r(13406),
                c = r(77178),
                u = r(80152),
                d = r(5143),
                m = r(77834);
            const p = e => {
                const {
                    className: t,
                    dropdownItems: r,
                    isActive: p
                } = e, f = (0, s.useRef)(null), h = (0, s.useRef)([]);
                h.current = [];
                const g = p ? "active" : "",
                    b = t ? `dropdown-list ${t}` : "dropdown-list",
                    y = (0, m.HQ)(),
                    v = e => {
                        e && !h.current.includes(e) && h.current.push(e)
                    };
                (0, s.useEffect)((() => {
                    o.gsap.set(f.current, {
                        y: "-150%"
                    }), o.gsap.set(h.current, {
                        autoAlpha: 0
                    })
                }), [h, y]);
                const x = (0, s.useCallback)((() => {
                        o.gsap.to(f.current, {
                            y: 0
                        }), o.gsap.timeline().fromTo(f.current, {
                            y: "-150%"
                        }, {
                            y: 0,
                            duration: (0, d.T)(40),
                            ease: d.V.twoSidedEase
                        }, 0).fromTo(h.current.reverse(), {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            stagger: (0, d.T)(3),
                            duration: (0, d.T)(30),
                            ease: d.V.defaultEase
                        }, (0, d.T)(17))
                    }), []),
                    w = (0, s.useCallback)((() => {
                        o.gsap.to(f.current, {
                            y: "-150%",
                            duration: (0, d.T)(40),
                            ease: d.V.twoSidedEase
                        }), o.gsap.to(h.current, {
                            autoAlpha: 0,
                            stagger: (0, d.T)(3),
                            duration: (0, d.T)(10),
                            ease: d.V.reverseEase
                        })
                    }), []);
                return (0, s.useEffect)((() => {
                    p ? x() : w()
                }), [p, x, w]), (0, n.jsxs)(l.G, {
                    className: `${b} ${g}`,
                    divRef: f,
                    children: [(0, n.jsx)(a.Q, {
                        src: c,
                        className: "dropdown-border__wrapper"
                    }), (0, n.jsx)(a.Q, {
                        src: u,
                        className: "dropdown-bg__wrapper"
                    }), (0, n.jsx)("ul", {
                        className: "dropdown-items",
                        children: r.map(((e, t) => (0, n.jsx)("li", {
                            className: "dropdown-item",
                            ref: v,
                            children: (0, n.jsx)(i.h, {
                                title: e.title,
                                linkTo: e.linkTo,
                                onClick: e.onClick,
                                href: e.href
                            })
                        }, t)))
                    })]
                })
            }
        },
        36204: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(85893),
                s = r(39711),
                a = r(11595),
                i = r(13406),
                o = r(6341),
                l = r(48512),
                c = r(78041),
                u = r(40270),
                d = r(77834),
                m = r(21964);
            const p = e => {
                const {
                    links: t,
                    socials: r,
                    copyYear: p,
                    privacyURL: f,
                    termsURL: h,
                    dividerTop: g = !1
                } = e, {
                    isDesktop: b
                } = (0, d.uO)(), y = b ? t : t.filter((e => !e.desktopOnly));
                return (0, n.jsx)("footer", {
                    className: "footer",
                    children: (0, n.jsxs)(i.G, {
                        className: "container",
                        children: [g && (0, n.jsx)(m.Z, {
                            type: "even",
                            className: "footer__divider--top"
                        }), (0, n.jsxs)(i.G, {
                            className: "footer__contents",
                            children: [b ? (0, n.jsx)(a.Q, {
                                src: l,
                                className: "footer__contents__logo"
                            }) : (0, n.jsx)(c.f, {
                                className: "footer__contents__logo-wrap",
                                children: (0, n.jsx)(a.Q, {
                                    src: l,
                                    className: "footer__contents__logo"
                                })
                            }), (0, n.jsxs)(i.G, {
                                className: "footer__contents__right-wrap",
                                children: [(0, n.jsx)(i.G, {
                                    className: "footer__contents__menu",
                                    children: (0, n.jsx)("ul", {
                                        className: "menu-list",
                                        children: y.map(((e, t) => {
                                            const r = t < 4 ? "1" : "2";
                                            return (0, n.jsxs)("li", {
                                                className: `menu-list__item col-${r} col-${r}-${t}`,
                                                children: [!e.href && e.linkTo && (0, n.jsxs)(s.rU, {
                                                    to: e.linkTo,
                                                    className: "button btn-dots-aside inline nav-text",
                                                    children: [e.title, (0, n.jsx)(a.Q, {
                                                        src: u,
                                                        className: "chevron-icon"
                                                    })]
                                                }, t), !e.linkTo && e.href && (0, n.jsxs)("a", {
                                                    href: e.href,
                                                    className: "button btn-dots-aside inline nav-text",
                                                    target: "_blank",
                                                    children: [e.title, (0, n.jsx)(a.Q, {
                                                        src: u,
                                                        className: "chevron-icon"
                                                    })]
                                                }, t)]
                                            }, t)
                                        }))
                                    })
                                }), (0, n.jsxs)(i.G, {
                                    className: "footer__contents__connect",
                                    children: [(0, n.jsxs)("form", {
                                        target: "_blank",
                                        action: "https://mailchimp.com/fr/",
                                        method: "post",
                                        id: "mc-embedded-subscribe-form",
                                        name: "mc-embedded-subscribe-form",
                                        noValidate: !0,
                                        "data-code": "v5s5u9",
                                        className: "footer__contents__form",
                                        children: [(0, n.jsx)("input", {
                                            name: "EMAIL",
                                            id: "mce-EMAIL",
                                            className: "email-input",
                                            type: "text",
                                            "aria-label": "Enter your email",
                                            placeholder: " Enter your email"
                                        }), (0, n.jsx)(o.r, {
                                            className: "email-input__error desc-3",
                                            children: "Please check your email and try again."
                                        }), (0, n.jsx)("input", {
                                            type: "submit",
                                            value: "Subscribe",
                                            className: "button btn-secondary btn-2"
                                        })]
                                    }), (0, n.jsx)(i.G, {
                                        className: "footer__contents__socials",
                                        children: Object.entries(r).map(((e, t) => {
                                            let [r, s] = e;
                                            return (0, n.jsx)("a", {
                                                href: s.link,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "social-icon__link",
                                                children: (0, n.jsx)(a.Q, {
                                                    src: s.imgSrc,
                                                    className: "social-icon"
                                                })
                                            }, t)
                                        }))
                                    })]
                                })]
                            })]
                        }), (0, n.jsxs)(i.G, {
                            className: "footer__addition",
                            children: [(0, n.jsx)(m.Z, {
                                className: "footer__divider--bottom",
                                type: "even"
                            }), (0, n.jsxs)(i.G, {
                                className: "footer__addition__info",
                                children: [(0, n.jsxs)(o.r, {
                                    className: "footer__addition__copy desc-3",
                                    children: ["Copyright ", p || (new Date).getFullYear()]
                                }), (0, n.jsxs)(i.G, {
                                    className: "footer__addition__links",
                                    children: [(0, n.jsx)("a", {
                                        href: f || "#",
                                        className: "button btn-inline-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Privacy Policy"
                                    }), (0, n.jsx)(o.r, {
                                        className: "desc-3",
                                        children: " | "
                                    }), (0, n.jsx)("a", {
                                        href: h || "#",
                                        className: "button btn-inline-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Terms & Conditions"
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        52764: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => c,
                X: () => u
            });
            var n = r(85893),
                s = r(24093),
                a = r(10902),
                i = r(51254),
                o = r(67294);
            const l = (0, i.hu)("[Image]"),
                c = o.forwardRef(((e, t) => {
                    const {
                        children: r,
                        pictureClassName: s,
                        ...a
                    } = e, i = a.src.match(/[\w-]+\.(jpg|png|svg)/g), l = a.alt || i && i[0] || "img", c = (0, n.jsx)("img", {
                        ...a,
                        ref: t,
                        alt: l
                    });
                    return r && o.Children.count(r) > 0 ? (0, n.jsxs)("picture", {
                        className: s,
                        children: [r, c]
                    }) : c
                })),
                u = o.forwardRef(((e, t) => {
                    const r = (0, o.useRef)(null),
                        [i, u] = (0, o.useState)(!1),
                        d = t || r;
                    let {
                        src: m,
                        priority: p,
                        lazyHooks: f = s.b.Hooks.Opacity,
                        lazyClasses: h,
                        className: g,
                        pictureClassName: b,
                        children: y,
                        ...v
                    } = e;
                    const x = o.Children.count(y) > 0;
                    (0, o.useEffect)((() => {
                        u(!1);
                        const e = d.current;
                        if (e && (m || x)) return a.pz.enqueue((async () => {
                            u("progress");
                            const t = (r = e, new Promise(((e, t) => {
                                const n = () => {
                                        r.removeEventListener("load", n), r.removeEventListener("error", s), e()
                                    },
                                    s = e => {
                                        r.removeEventListener("load", n), r.removeEventListener("error", s), t(e)
                                    };
                                r.addEventListener("load", n), r.addEventListener("error", s)
                            })));
                            var r;
                            return e.src = m || void 0, t.then((() => u(!0))).catch((e => {
                                l.warn("Lazy: failed to load img", {
                                    src: m,
                                    pictureMode: x
                                }, e), u(!0)
                            }))
                        }), p)
                    }), [m, p, d, x]), (0, o.useLayoutEffect)((() => {
                        const e = d.current;
                        if (!e) return;
                        const t = s.b.getValue(f, i);
                        t && t(e)
                    }), [i, f, d]);
                    const w = s.b.getValue(h, i);
                    w && (g += " " + w);
                    const T = i && m ? m : "#";
                    return (0, n.jsx)(c, {
                        ...v,
                        ref: d,
                        className: g || void 0,
                        pictureClassName: b || void 0,
                        src: T,
                        children: y
                    })
                }))
        },
        11995: (e, t, r) => {
            "use strict";
            r.d(t, {
                N: () => i
            });
            var n = r(85893),
                s = r(67294),
                a = r(64593);
            const i = s.memo((e => {
                let t = e;
                if (null != e.info) t = e.info;
                else if (null != e.page) {
                    const n = e.page;
                    t = {
                        title: n.output.title,
                        description: n.output.description,
                        image: n.output.image ? {
                            src: r(17695)("./" + n.output.image),
                            width: n.output.imageWidth || 1200,
                            height: n.output.imageHeight || 630
                        } : null
                    }
                }
                return (0, n.jsxs)(n.Fragment, {
                    children: [t.title && (0, n.jsxs)(a.q, {
                        children: [(0, n.jsx)("title", {
                            children: t.title
                        }), (0, n.jsx)("meta", {
                            property: "og:title",
                            content: t.title
                        }), (0, n.jsx)("meta", {
                            name: "twitter:title",
                            content: t.title
                        })]
                    }), t.description && (0, n.jsxs)(a.q, {
                        children: [(0, n.jsx)("meta", {
                            name: "description",
                            content: t.description
                        }), (0, n.jsx)("meta", {
                            property: "og:description",
                            content: t.description
                        }), (0, n.jsx)("meta", {
                            name: "twitter:description",
                            content: t.description
                        })]
                    }), t.image && (0, n.jsxs)(a.q, {
                        children: [(0, n.jsx)("meta", {
                            property: "og:image:width",
                            content: `${t.image.width}`
                        }), (0, n.jsx)("meta", {
                            property: "og:image:height",
                            content: `${t.image.height}`
                        }), (0, n.jsx)("meta", {
                            property: "og:image",
                            content: t.image.src
                        }), t.description && (0, n.jsx)("meta", {
                            property: "og:image:alt",
                            content: t.description
                        }), (0, n.jsx)("meta", {
                            name: "twitter:image",
                            content: t.image.src
                        })]
                    })]
                })
            }))
        },
        98438: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => b
            });
            var n = r(85893),
                s = r(67294),
                a = r(11595),
                i = r(13406),
                o = r(62642),
                l = r(72389),
                c = r(38288),
                u = r(14496),
                d = r(93218),
                m = r(5143),
                p = r(77834),
                f = r(85492),
                h = r(15716);
            const g = e => {
                    const {
                        title: t,
                        href: r,
                        linkTo: s,
                        goTo: a
                    } = e;
                    return (0, n.jsx)("li", {
                        className: "mobile-menu__link",
                        children: r ? (0, n.jsx)("a", {
                            href: r,
                            className: "mob-text button btn-mob-menu",
                            target: "_blank",
                            children: (0, n.jsx)("span", {
                                className: "title-h1",
                                children: t
                            })
                        }) : (0, n.jsx)(f.z, {
                            onClick: () => a(s),
                            className: "mob-text button btn-mob-menu",
                            children: (0, n.jsx)("span", {
                                className: "title-h1",
                                children: t
                            })
                        })
                    })
                },
                b = e => {
                    let {
                        links: t,
                        goTo: r,
                        isOpen: b
                    } = e;
                    const y = (0, s.useRef)(null),
                        v = (0, s.useRef)(null),
                        x = (0, s.useRef)(null),
                        w = (0, p.uO)(),
                        T = (0, p.HQ)(),
                        j = (0, s.useCallback)((() => {
                            o.default.timeline({
                                smoothChildTiming: !1,
                                onStart: () => document.body.classList.add("modal-active")
                            }).fromTo(y.current, {
                                opacity: 0,
                                pointerEvents: "none"
                            }, {
                                opacity: 1,
                                pointerEvents: "all",
                                ease: m.V.twoSidedEase,
                                duration: (0, m.T)(50)
                            }, 0).fromTo(v.current, {
                                y: -80 * T
                            }, {
                                y: 0,
                                ease: m.V.defaultEase,
                                duration: (0, m.T)(60)
                            }, (0, m.T)(30)).fromTo(x.current, {
                                y: 80 * T
                            }, {
                                y: 0,
                                ease: m.V.defaultEase,
                                duration: (0, m.T)(60)
                            }, (0, m.T)(30)).fromTo(".mobile-menu__link", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                stagger: (0, m.T)(4),
                                ease: m.V.defaultEase,
                                duration: (0, m.T)(80)
                            }, (0, m.T)(30) + .016666)
                        }), [T]),
                        k = (0, s.useCallback)((() => {
                            document.body.classList.remove("modal-active"), o.default.set(y.current, {
                                opacity: 0,
                                pointerEvents: "none"
                            }), o.default.set(v.current, {
                                y: -80 * T
                            }), o.default.set(x.current, {
                                y: 80 * T
                            }), o.default.set(".mobile-menu__link", {
                                opacity: 0
                            })
                        }), [T]),
                        C = (0, s.useCallback)((() => {
                            o.default.timeline({
                                smoothChildTiming: !1,
                                onStart: () => document.body.classList.remove("modal-active")
                            }).fromTo(".mobile-menu__link", {
                                opacity: 1
                            }, {
                                opacity: 0,
                                ease: m.V.reverseEase,
                                duration: (0, m.T)(30),
                                stagger: {
                                    from: "end",
                                    amount: (0, m.T)(2)
                                }
                            }, 0).fromTo(v.current, {
                                y: 0
                            }, {
                                y: -80 * T,
                                ease: m.V.reverseEase,
                                duration: (0, m.T)(40)
                            }, (0, m.T)(10)).fromTo(x.current, {
                                y: 0
                            }, {
                                y: 80 * T,
                                ease: m.V.reverseEase,
                                duration: (0, m.T)(40)
                            }, (0, m.T)(10)).fromTo(y.current, {
                                opacity: 1,
                                pointerEvents: "all"
                            }, {
                                opacity: 0,
                                pointerEvents: "none",
                                ease: m.V.twoSidedEase,
                                duration: (0, m.T)(50)
                            }, (0, m.T)(30))
                        }), [T]);
                    return (0, s.useEffect)((() => {
                        "open" == b ? j() : "close" == b ? C() : k()
                    }), [C, k, b, j]), (0, n.jsxs)(i.G, {
                        className: "mobile-menu",
                        divRef: y,
                        children: [(0, n.jsx)(i.G, {
                            className: "anim-wrap--top",
                            divRef: v,
                            children: (0, n.jsx)(a.Q, {
                                src: w.isMobile ? c : l,
                                className: "grass-top"
                            })
                        }), (0, n.jsx)(i.G, {
                            className: "text-mask top"
                        }), (0, n.jsx)(i.G, {
                            className: "container",
                            children: (0, n.jsx)(i.G, {
                                className: "mobile-menu__contents",
                                children: (0, n.jsxs)("ul", {
                                    className: "mobile-menu__list",
                                    children: [(0, n.jsx)("li", {
                                        className: "mobile-menu__link",
                                        children: (0, n.jsx)(f.z, {
                                            onClick: () => r(h.$.Home),
                                            className: "mob-text button btn-mob-menu",
                                            children: (0, n.jsx)("span", {
                                                className: "title-h1",
                                                children: "Home"
                                            })
                                        })
                                    }), t.map(((e, t) => e.dropdownItems ? e.dropdownItems.map(((e, s) => (0, n.jsx)(g, {
                                        goTo: r,
                                        title: e.title,
                                        linkTo: e.linkTo,
                                        href: e.href
                                    }, `${t}_${s}`))) : (0, n.jsx)(g, {
                                        goTo: r,
                                        title: e.title,
                                        linkTo: e.linkTo
                                    }, t)))]
                                })
                            })
                        }), (0, n.jsx)(i.G, {
                            className: "text-mask bot"
                        }), (0, n.jsxs)(i.G, {
                            className: "anim-wrap--bot",
                            divRef: x,
                            children: [(0, n.jsx)(a.Q, {
                                src: d,
                                className: "leaves-bot"
                            }), (0, n.jsx)(a.Q, {
                                src: u,
                                className: "grass-bot"
                            })]
                        })]
                    })
                }
        },
        90365: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => _
            });
            var n = r(85893),
                s = r(67294),
                a = r(33581),
                i = r(96974),
                o = r(39711),
                l = r(11595),
                c = r(39864),
                u = r(13406),
                d = r(89522),
                m = r(96337),
                p = r(39055),
                f = r(89429),
                h = r(68146),
                g = r(98438),
                b = r(77834),
                y = r(88912),
                v = r(52842),
                x = r(15716),
                w = r(50947),
                T = r(65388);
            const j = (0, a.Pi)((e => {
                    const {
                        ctaBtn: t,
                        isMarketplace: r,
                        renderMarketplaceBtn: a,
                        isSoundActive: o,
                        onClickSoundBtn: c
                    } = e, [d, m] = (0, s.useState)(!1), [p, b] = (0, s.useState)("disabled"), y = (0, i.s0)(), v = (0, i.TH)(), x = (0, s.useCallback)((e => {
                        v.pathname === e ? (document.body.classList.remove("modal-active"), m(!1), b("close")) : y(e, {
                            replace: !0
                        })
                    }), [v.pathname, y]);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(u.G, {
                            className: "navbar__responsive " + (d ? "menu-active" : ""),
                            children: [(0, n.jsxs)("button", {
                                className: "navbar__responsive__menu-btn",
                                onClick: () => {
                                    m((e => (b(e ? "close" : "open"), !e)))
                                },
                                children: [(0, n.jsx)(l.Q, {
                                    src: h,
                                    className: "icon-bars"
                                }), (0, n.jsx)(l.Q, {
                                    src: f,
                                    className: "icon-cross"
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "right-wrap",
                                children: [(0, n.jsx)(T.c, {
                                    isActive: o,
                                    onClickCapture: c
                                }), r ? a() : t && (0, n.jsx)(S, {
                                    ...t
                                })]
                            })]
                        }), (0, n.jsx)(g.Z, {
                            links: e.links,
                            isOpen: p,
                            goTo: x
                        })]
                    })
                })),
                k = (0, a.Pi)((e => {
                    const {
                        logo: t,
                        links: r,
                        ctaBtn: a,
                        smallLogo: d,
                        isMarketplace: m,
                        renderMarketplaceBtn: p,
                        dynamicLogo: f,
                        isSoundActive: h,
                        onClickSoundBtn: g
                    } = e, b = (0, i.TH)(), y = (0, s.useCallback)((e => {
                        b.pathname === x.$.Home && (e.preventDefault(), (0, w.k)(!1))
                    }), [b.pathname]);
                    return (0, n.jsxs)(u.G, {
                        className: "navbar__desktop " + (f ? "dynamic-logo" : ""),
                        children: [(0, n.jsxs)(o.rU, {
                            to: x.$.Home,
                            onClick: y,
                            className: "navbar-logo__wrapper",
                            children: [(0, n.jsx)(l.Q, {
                                src: t,
                                className: "navbar-logo"
                            }), f && (0, n.jsx)(l.Q, {
                                src: d,
                                className: "navbar-logo--small"
                            })]
                        }), (0, n.jsx)("ul", {
                            className: "navbar-nav",
                            children: r.map(((e, t) => e.isDropdown ? (0, n.jsx)(c.Z, {
                                dropdownItems: e.dropdownItems,
                                dropdownTitle: e.title
                            }, t) : (0, n.jsx)("li", {
                                className: "nav-item",
                                children: e.disabled ? (0, n.jsx)("span", {
                                    className: "nav-link nav-text disabled",
                                    children: e.title
                                }) : (0, n.jsx)(o.rU, {
                                    className: "nav-link nav-text",
                                    to: e.linkTo,
                                    children: e.title
                                })
                            }, t)))
                        }), (0, n.jsxs)("div", {
                            className: "right-wrap",
                            children: [(0, n.jsx)(T.c, {
                                isActive: h,
                                onClickCapture: g
                            }), m ? p() : a && (0, n.jsx)(S, {
                                ...a
                            })]
                        })]
                    })
                })),
                C = {
                    [b.Ru.Desktop]: d,
                    [b.Ru.Tablet]: m,
                    [b.Ru.Mobile]: p
                },
                N = (0, a.Pi)((e => {
                    const [t, r] = (0, s.useState)(!1), a = (0, s.useRef)(null), i = (0, b.HQ)(), {
                        isDesktop: o,
                        isMobile: d,
                        isTablet: m,
                        type: p
                    } = (0, b.uO)(), f = (0, y.tT)(v.Z), {
                        isLoggedIn: h,
                        marketplaceDropdown: g,
                        connectBtn: x,
                        isSoundActive: w,
                        toggleSoundActive: T
                    } = f, N = t ? "scrolled" : "", S = (0, s.useRef)(0);
                    S.current = e.offsetY || 850 * i;
                    const _ = (0, s.useCallback)((() => h ? (0, n.jsx)(c.Z, {
                        className: "marketplace-dropdown",
                        dropdownItems: g.dropdownItems,
                        dropdownTitle: g.title
                    }) : (0, n.jsx)("a", {
                        className: "button btn-secondary btn-2",
                        onClick: x.onClick,
                        children: x.title
                    })), [h, x, g]);
                    (0, s.useEffect)((() => {
                        const e = () => {
                            window.scrollY > S.current ? r(!0) : r(!1)
                        };
                        return window.addEventListener("scroll", e), () => {
                            window.removeEventListener("scroll", e)
                        }
                    }), [S]);
                    const E = C[p];
                    return (0, n.jsxs)("nav", {
                        className: `navbar ${N}`,
                        children: [(0, n.jsx)(u.G, {
                            className: "navbar-bg",
                            divRef: a,
                            children: (0, n.jsx)(l.Q, {
                                className: "navbar-bg__wrapper",
                                src: E
                            })
                        }), (0, n.jsxs)(u.G, {
                            className: "container",
                            children: [o && (0, n.jsx)(k, {
                                ...e,
                                renderMarketplaceBtn: _,
                                isSoundActive: w,
                                onClickSoundBtn: T
                            }), (m || d) && (0, n.jsx)(j, {
                                ...e,
                                renderMarketplaceBtn: _,
                                isSoundActive: w,
                                onClickSoundBtn: T
                            })]
                        })]
                    })
                })),
                S = e => {
                    const {
                        linkTo: t,
                        title: r,
                        external: s
                    } = e;
                    return s ? (0, n.jsx)("a", {
                        className: "button btn-secondary btn-2",
                        href: t,
                        target: "_blank",
                        children: r
                    }) : (0, n.jsx)(o.rU, {
                        className: "button btn-secondary btn-2",
                        to: t,
                        children: r
                    })
                },
                _ = N
        },
        15293: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => p
            });
            var n = r(85893),
                s = r(67294),
                a = r(76914),
                i = r(35443),
                o = r(90365),
                l = r(47677),
                c = r(36204),
                u = r(10902),
                d = r(88837),
                m = r(31508);
            const p = s.memo((e => {
                let {
                    className: t,
                    footerIsActive: r = !0,
                    useBanner: s = !1,
                    isBannerActive: p = !0,
                    isMarketplace: f = !1,
                    children: h,
                    navbarOffsetY: g,
                    button: b = a.h.navCtaBtn,
                    dropdownBtn: y,
                    footerTopDivider: v = !0,
                    transitions: x = null
                } = e, w = "page ";
                return t && (w += t), (0, n.jsxs)(i.oW, {
                    className: w,
                    animations: x,
                    children: [(0, n.jsx)(u.ZP, {}), (0, n.jsx)(o.Z, {
                        links: a.h.navLinks,
                        logo: d,
                        smallLogo: m,
                        ctaBtn: b,
                        offsetY: g,
                        dropdownBtn: y,
                        isMarketplace: f
                    }), s && (0, n.jsx)(l.Z, {
                        isActiveByDefault: p
                    }), h && h, r && (0, n.jsx)(c.Z, {
                        links: a.h.footer.footerLinks,
                        socials: a.h.socials,
                        dividerTop: v,
                        privacyURL: a.h.footer.privacyURL,
                        termsURL: a.h.footer.termsURL
                    })]
                })
            }))
        },
        6341: (e, t, r) => {
            "use strict";
            r.d(t, {
                r: () => i
            });
            var n = r(85893),
                s = r(33581);

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                const r = {
                        className: e.className || "",
                        style: e.style,
                        ref: e.textRef,
                        onClick: e.onClick
                    },
                    s = t || e.value;
                return (0, n.jsx)("span", {
                    ...r,
                    children: null == s ? e.children : s
                })
            }
            const i = e => a(e);
            (0, s.Pi)((e => a(e, e.model && e.model.value || null)))
        },
        13406: (e, t, r) => {
            "use strict";
            r.d(t, {
                G: () => a
            });
            var n = r(85893);

            function s(e) {
                return e.onKeyPress || e.onEnterPress ? e.onEnterPress ? function(t) {
                    "Enter" === t.key && e.onEnterPress.call(this, t), e.onKeyPress && e.onKeyPress.call(this, t)
                } : e.onKeyPress : null
            }
            const a = r(67294).forwardRef(((e, t) => {
                const r = {
                    className: e.className || "",
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    onMouseMove: e.onMouseMove,
                    onClick: e.onClick,
                    onBlur: e.onBlur,
                    onKeyPress: s(e),
                    tabIndex: e.tabIndex,
                    style: e.style,
                    id: e.id
                };
                return (0, n.jsx)("div", {
                    ...r,
                    ref: t || e.divRef,
                    children: e.children
                })
            }))
        },
        85492: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => o,
                z: () => i
            });
            var n = r(85893),
                s = r(11595),
                a = r(6341);
            const i = e => {
                    const {
                        title: t,
                        onClick: r,
                        style: i,
                        disabled: o,
                        iconBefore: l,
                        iconImg: c = !1,
                        iconClassName: u
                    } = e, d = {
                        className: `button ${e.className||""} ${e.disabled?"disabled":""}`,
                        onClick: r,
                        style: i,
                        disabled: o
                    }, m = e.icon, p = e.titleClassName, f = e => {
                        let {
                            className: t,
                            src: r,
                            alt: a
                        } = e;
                        return c ? (0, n.jsx)("img", {
                            className: t,
                            src: r,
                            alt: a
                        }) : (0, n.jsx)(s.Q, {
                            className: t,
                            src: r,
                            alt: a
                        })
                    };
                    return (0, n.jsxs)("button", {
                        ...d,
                        children: [m && l && (0, n.jsx)(f, {
                            className: `icon ${u}`,
                            src: m.src,
                            alt: m.alt
                        }), (0, n.jsxs)(a.r, {
                            className: p,
                            children: [t, e.children]
                        }), m && !l && (0, n.jsx)(f, {
                            className: `icon ${u}`,
                            src: m.src,
                            alt: m.alt
                        })]
                    })
                },
                o = e => {
                    const {
                        title: t,
                        onClick: r,
                        style: i,
                        iconBefore: o,
                        href: l,
                        target: c
                    } = e, u = {
                        className: `button btn-inline ${e.className||""}`,
                        onClick: r,
                        style: i,
                        href: l,
                        target: c
                    }, d = e.icon, m = e.titleClassName;
                    return (0, n.jsxs)("a", {
                        ...u,
                        children: [d && o && (0, n.jsx)(s.Q, {
                            className: "icon-wrap",
                            src: d.src
                        }), (0, n.jsxs)(a.r, {
                            className: m,
                            children: [t, e.children]
                        }), d && !o && (0, n.jsx)(s.Q, {
                            className: "icon-wrap",
                            src: d.src
                        })]
                    })
                }
        },
        65388: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => c
            });
            var n = r(85893),
                s = r(33581),
                a = r(13406),
                i = r(11595),
                o = r(10440),
                l = r(89301);
            const c = (0, s.Pi)((e => {
                let {
                    isActive: t,
                    onClickCapture: r
                } = e;
                return (0, n.jsxs)(a.G, {
                    className: "sound-button " + (t ? "active" : ""),
                    onClick: () => {
                        r && r()
                    },
                    children: [(0, n.jsx)(i.Q, {
                        src: o,
                        className: "sound-button__on-icon"
                    }), (0, n.jsx)(i.Q, {
                        src: l,
                        className: "sound-button__off-icon"
                    })]
                })
            }))
        },
        36280: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(67294);
            const s = (e, t) => {
                (0, n.useEffect)((() => {
                    const r = r => {
                        e.current && !e.current.contains(r.target) && t(r)
                    };
                    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
                        document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r)
                    }
                }), [e, t])
            }
        },
        88912: (e, t, r) => {
            "use strict";
            r.d(t, {
                tT: () => s
            });
            var n = r(67294);
            const s = e => (0, n.useMemo)((() => new e), [e])
        },
        36982: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                PreloaderOutro: () => f,
                default: () => h,
                onPreloaderOutroFinished: () => m,
                usePreloaderOutro: () => p
            });
            var n = r(67294),
                s = r(5143),
                a = r(77834),
                i = r(29558),
                o = r(10902),
                l = r(24219),
                c = r(51254);
            let u = new i.Event;
            const d = (0, c.hu)("[PreloaderOutro]");

            function m(e) {
                null == u ? e() : u.on(e)
            }
            const p = () => {
                    (0, n.useEffect)((() => {
                        const e = o.pz.currentPriority >= 1 ? Promise.resolve(1) : (0, i.oneTimeSubscription)(o.pz.afterPriorityRun, (e => 1 === e)),
                            t = Promise.race([e, (0, i.oneTimeSubscription)(o.pz.finished)]),
                            n = 1e3 - (Date.now() - (window.PRELOADER_START_TIME || 0));
                        d.log("Waiting for lazy... Min delay left =", n, "; current priority =", o.pz.currentPriority), Promise.all([(0, l.GR)(t, 2e4, n), Promise.resolve().then(r.bind(r, 62642)).then((e => e.gsap))]).then((e => {
                            let [t, r] = e;
                            d.log("Finishing", t), async function(e) {
                                if (null == u) return;
                                const t = a.u3.Current.rem;
                                u.trigger(), u = null, e.timeline().to(".preloader-img__creepers", {
                                    y: -400 * t,
                                    duration: (0, s.T)(60),
                                    ease: s.V.twoSidedEase
                                }, 0).to(".preloader-img__grass", {
                                    y: 400 * t,
                                    duration: (0, s.T)(60),
                                    ease: s.V.twoSidedEase
                                }, 0).to(".preloader-img__tree--left", {
                                    x: -200 * t,
                                    duration: (0, s.T)(60),
                                    ease: s.V.twoSidedEase
                                }, 0).to(".preloader-img__tree--right", {
                                    x: 200 * t,
                                    duration: (0, s.T)(60),
                                    ease: s.V.twoSidedEase
                                }, 0).to(".preloader-wrap.active", {
                                    autoAlpha: 0,
                                    duration: (0, s.T)(30),
                                    ease: s.V.defaultEase
                                }, (0, s.T)(30)).fromTo(".navbar", {
                                    autoAlpha: 0
                                }, {
                                    autoAlpha: 1,
                                    duration: (0, s.T)(30),
                                    ease: s.V.defaultEase
                                }, (0, s.T)(30)).call((() => {
                                    document.body.classList.remove("modal-active");
                                    const e = document.querySelector(".preloader-wrap");
                                    e && e.remove()
                                }))
                            }(r)
                        }))
                    }), [])
                },
                f = () => (p(), null),
                h = f
        },
        47677: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => h
            });
            var n = r(85893),
                s = r(67294),
                a = r(11595),
                i = r(39711),
                o = r(13406),
                l = r(33581),
                c = r(62642),
                u = r(5143),
                d = r(77834),
                m = r(78927),
                p = r(3978),
                f = r(52764);
            const h = (0, l.Pi)((e => {
                const [t, r] = (0, s.useState)(!1), [l, h] = (0, s.useState)(!0), g = (0, s.useRef)(null), b = (0, s.useRef)(null), y = (0, s.useRef)(null), v = c.default.timeline({
                    smoothChildTiming: !1
                }), x = (0, d.HQ)(), {
                    isDesktop: w,
                    isTablet: T,
                    isMobile: j
                } = (0, d.uO)();
                (0, s.useEffect)((() => {
                    e.isActiveByDefault && h(!0), e.isActiveByDefault ? (c.default.set(g.current, {
                        x: j ? "-50%" : 0,
                        left: j ? "50%" : "auto"
                    }), c.default.set(b.current, {
                        autoAlpha: 1,
                        x: 0
                    }), c.default.set(y.current, {
                        autoAlpha: 0
                    })) : (c.default.set(g.current, {
                        x: (w ? 244 : T ? 207 : 327) * x
                    }), c.default.set(b.current, {
                        autoAlpha: 0,
                        x: (w ? 259 : T ? 227 : 340) * x
                    }), c.default.set(y.current, {
                        autoAlpha: 1
                    }))
                }), [x, w, T, j, e.isActiveByDefault]);
                const k = () => {
                        t || l || (r(!0), v.to(y.current, {
                            autoAlpha: 0,
                            duration: (0, u.T)(30),
                            ease: u.V.twoSidedEase
                        }, 0).to(g.current, {
                            x: j ? "-50%" : 0,
                            duration: (0, u.T)(60),
                            ease: u.V.twoSidedEase
                        }, (0, u.T)(30)).to(b.current, {
                            x: 0,
                            duration: (0, u.T)(60),
                            ease: u.V.twoSidedEase,
                            onComplete: () => {
                                h(!0), r(!1)
                            }
                        }, (0, u.T)(30)))
                    },
                    C = () => {
                        l && !t && l && (r(!0), v.to(g.current, {
                            x: w ? 244 * x : T ? 207 * x : "50%",
                            duration: (0, u.T)(60),
                            ease: u.V.twoSidedEase
                        }, 0).to(b.current, {
                            x: (w ? 259 : T ? 227 : 340) * x,
                            duration: 1,
                            ease: u.V.twoSidedEase
                        }, 0).to(y.current, {
                            autoAlpha: 1,
                            duration: (0, u.T)(30),
                            ease: u.V.twoSidedEase,
                            onComplete: () => {
                                h(!1), r(!1)
                            }
                        }, (0, u.T)(30)))
                    };
                return (0, s.useEffect)((() => (window.addEventListener("scroll", C), () => {
                    window.removeEventListener("scroll", C)
                }))), (0, n.jsxs)(o.G, {
                    className: "floating-banner " + (l ? "active" : ""),
                    onMouseEnter: k,
                    onClick: () => {
                        window.innerWidth < 1024 && k()
                    },
                    divRef: g,
                    children: [(0, n.jsx)(o.G, {
                        className: "floating-banner__arrow--wrapper",
                        divRef: y,
                        children: (0, n.jsx)(a.Q, {
                            src: p,
                            className: "floating-banner__arrow"
                        })
                    }), (0, n.jsxs)(o.G, {
                        className: "floating-banner__contents",
                        divRef: b,
                        children: [(0, n.jsxs)(o.G, {
                            className: "left-side",
                            children: [(0, n.jsxs)("p", {
                                className: "desc-5 floating-banner__text",
                                children: ["Our first ", (0, n.jsx)("br", {}), " Mini Game is out!"]
                            }), (0, n.jsx)(i.rU, {
                                to: "/marketplace",
                                className: "button btn-banner btn-2",
                                children: "Play now"
                            })]
                        }), (0, n.jsx)(f.X, {
                            priority: 2,
                            src: m,
                            alt: "needtimesite",
                            className: "floating-banner__img"
                        })]
                    })]
                })
            }))
        },
        21964: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => a
            });
            var n = r(85893),
                s = r(13406);
            const a = e => {
                const {
                    type: t,
                    className: r,
                    style: a
                } = e;
                return (0, n.jsxs)(s.G, {
                    className: `line-divider ${t} ${r||""}`,
                    style: a,
                    children: [(0, n.jsx)(s.G, {
                        className: "line-divider__line line-divider__line--before"
                    }), (0, n.jsx)(s.G, {
                        className: "line-divider__ball"
                    }), (0, n.jsx)(s.G, {
                        className: "line-divider__line line-divider__line--after"
                    })]
                })
            }
        },
        78041: (e, t, r) => {
            "use strict";
            r.d(t, {
                X: () => u,
                f: () => c
            });
            var n = r(85893),
                s = r(67294),
                a = r(13406),
                i = r(62642),
                o = r(77834),
                l = r(5143);
            const c = e => {
                    const t = e.className ? `lines-decoration ${e.className}` : "lines-decoration";
                    return (0, n.jsxs)(a.G, {
                        className: t,
                        children: [(0, n.jsxs)(a.G, {
                            className: "line-before",
                            children: [(0, n.jsx)("span", {
                                className: "line"
                            }), (0, n.jsx)("span", {
                                className: "small-ball"
                            }), (0, n.jsx)("span", {
                                className: "big-ball"
                            })]
                        }), e.children, (0, n.jsxs)(a.G, {
                            className: "line-after",
                            children: [(0, n.jsx)("span", {
                                className: "line"
                            }), (0, n.jsx)("span", {
                                className: "small-ball"
                            }), (0, n.jsx)("span", {
                                className: "big-ball"
                            })]
                        })]
                    })
                },
                u = e => {
                    const t = (0, o.HQ)(),
                        {
                            isDesktop: r,
                            isTablet: n,
                            isMobile: a
                        } = (0, o.uO)();
                    return (0, s.useEffect)((() => {
                        e.current.querySelector(".lines-decoration") && (r && (i.default.set(e.current.querySelector(".line-before"), {
                            autoAlpha: 0
                        }), i.default.set(e.current.querySelector(".line-before .line"), {
                            x: -173 * t
                        }), i.default.set(e.current.querySelector(".line-before .small-ball"), {
                            x: -154 * t
                        }), i.default.set(e.current.querySelector(".line-before .big-ball"), {
                            x: -173 * t
                        }), i.default.set(e.current.querySelector(".line-after"), {
                            autoAlpha: 0
                        }), i.default.set(e.current.querySelector(".line-after .line"), {
                            x: 173 * t
                        }), i.default.set(e.current.querySelector(".line-after .small-ball"), {
                            x: 154 * t
                        }), i.default.set(e.current.querySelector(".line-after .big-ball"), {
                            x: 173 * t
                        })), n && (i.default.set(e.current.querySelector(".line-before"), {
                            autoAlpha: 0
                        }), i.default.set(e.current.querySelector(".line-before .line"), {
                            x: -90 * t
                        }), i.default.set(e.current.querySelector(".line-before .small-ball"), {
                            x: -76 * t
                        }), i.default.set(e.current.querySelector(".line-before .big-ball"), {
                            x: -90 * t
                        }), i.default.set(e.current.querySelector(".line-after"), {
                            autoAlpha: 0
                        }), i.default.set(e.current.querySelector(".line-after .line"), {
                            x: 90 * t
                        }), i.default.set(e.current.querySelector(".line-after .small-ball"), {
                            x: 76 * t
                        }), i.default.set(e.current.querySelector(".line-after .big-ball"), {
                            x: 90 * t
                        })), a && (i.default.set(e.current.querySelector(".line-before"), {
                            autoAlpha: 0
                        }), i.default.set(e.current.querySelector(".line-before .line"), {
                            x: -71 * t
                        }), i.default.set(e.current.querySelector(".line-before .small-ball"), {
                            x: -58 * t
                        }), i.default.set(e.current.querySelector(".line-before .big-ball"), {
                            x: -71 * t
                        }), i.default.set(e.current.querySelector(".line-after"), {
                            autoAlpha: 0
                        }), i.default.set(e.current.querySelector(".line-after .line"), {
                            x: 71 * t
                        }), i.default.set(e.current.querySelector(".line-after .small-ball"), {
                            x: 58 * t
                        }), i.default.set(e.current.querySelector(".line-after .big-ball"), {
                            x: 71 * t
                        })))
                    }), [e, t, r, n, a]), {
                        animateLines: (0, s.useCallback)((t => i.default.timeline().to(e.current.querySelector(".line-before"), {
                            autoAlpha: 1,
                            duration: (0, l.T)(40),
                            ease: l.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-before .line"), {
                            x: 0,
                            duration: (0, l.T)(60),
                            ease: l.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-before .big-ball"), {
                            x: 0,
                            duration: (0, l.T)(60),
                            ease: l.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-before .small-ball"), {
                            x: 0,
                            duration: (0, l.T)(54),
                            ease: l.V.defaultEase
                        }, t + (0, l.T)(11)).to(e.current.querySelector(".line-after"), {
                            autoAlpha: 1,
                            duration: (0, l.T)(40),
                            ease: l.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-after .line"), {
                            x: 0,
                            duration: (0, l.T)(60),
                            ease: l.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-after .big-ball"), {
                            x: 0,
                            duration: (0, l.T)(60),
                            ease: l.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-after .small-ball"), {
                            x: 0,
                            duration: (0, l.T)(54),
                            ease: l.V.defaultEase
                        }, t + (0, l.T)(11))), [e])
                    }
                }
        },
        5143: (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => d,
                V: () => u
            });
            var n = r(62642),
                s = r(7310);
            n.default.registerPlugin(s.Z);
            const a = s.Z.create("default", "0.17, 0.17, 0.45, 1.00"),
                i = s.Z.create("reverse", "0.55, 0.00, 0.83, 0.83"),
                o = s.Z.create("two-sided", "0.63, 0.00, 0.43, 1.00"),
                l = s.Z.create("extra", "0.59, 0.00, 0.45, 1.00"),
                c = s.Z.create("bouncy", "M0,0 C0,0 0.23,0.136 0.326,0.382 0.421,0.625 0.462,1.238 0.608,1.238 0.678,1.238 0.764,1.01 1,1 1.034,0.998 1,1 1,1 "),
                u = {
                    defaultEase: a,
                    reverseEase: i,
                    twoSidedEase: o,
                    extraEase: l,
                    infiniteCombEase: s.Z.create("infinite-comb", "0.39,0.00,0.07,1.00"),
                    bouncyEase: c
                },
                d = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60;
                    return e / t
                }
        },
        24093: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => n
            });
            var n, s = r(62642);
            ! function(e) {
                let t, r;
                e.getValue = (e, t) => {
                        if (e) switch (t) {
                            case !1:
                                return e.init;
                            case "progress":
                                return e.started;
                            case !0:
                                return e.finished;
                            default:
                                return
                        }
                    },
                    function(e) {
                        e.Opacity = {
                            init: e => {
                                s.default.set(e, {
                                    autoAlpha: 0
                                })
                            },
                            finished: e => {
                                s.default.fromTo(e, {
                                    autoAlpha: 0
                                }, {
                                    autoAlpha: 1
                                })
                            }
                        }, e.NoOp = {}
                    }(t = e.Hooks || (e.Hooks = {})),
                    function(e) {
                        e.Default = {
                            init: "lazy",
                            started: "lazy",
                            finished: "lazy loaded"
                        }, e.Empty = {}
                    }(r = e.Classes || (e.Classes = {}))
            }(n || (n = {}))
        },
        76914: (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => s,
                h: () => a
            });
            var n = r(15716);
            const s = {
                    whitepaper: "#",
                    litepaper: "https://drive.google.com/file/d/1I67cMBUv6v0vBggaLnBZc-6Ypiuwdsj8/view",
                    privacy: "https://drive.google.com/file/d/1SkEz3M0WLPSzbS-bzqVeTSu9qQniNBCQ/view",
                    terms: "https://drive.google.com/file/d/136SgRWLHBRTibUzakZ9cBaOIns_W7dsN/view",
                    opensea: "https://opensea.io/collection/needtimesitevalleyofficial",
                    buyOnKucoin: "https://www.kucoin.com/trade/CHMB-USDT",
                    buyOnCoinstore: "https://www.coinstore.com/#/spot/CHMBUSDT",
                    buyOnPancakeSwap: "https://pancakeswap.finance/swap?inputCurrency=0x5492ef6aeeba1a3896357359ef039a8b11621b45&outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&chainId=56",
                    vesting: "https://vesting.needtimesitevalley.com/",
                    staking: "https://staking.needtimesitevalley.com/"
                },
                a = {
                    navLinks: [{
                        title: "Game info",
                        isDropdown: !0,
                        dropdownItems: [{
                            title: "Game features",
                            linkTo: n.$.GameplayFeatures
                        }, {
                            title: "needtimesite",
                            linkTo: n.$.needtimesite
                        }, {
                            title: "Gallery",
                            linkTo: n.$.Gallery
                        }, {
                            title: "Litepaper",
                            href: s.litepaper
                        }, {
                            title: "Whitepaper",
                            linkTo: n.$.Whitepaper
                        }]
                    }, {
                        title: "Token",
                        isDropdown: !1,
                        linkTo: n.$.Token
                    }, {
                        title: "About",
                        isDropdown: !1,
                        linkTo: n.$.About
                    }, {
                        title: "Lore",
                        isDropdown: !1,
                        linkTo: n.$.Lore
                    }],
                    navCtaBtn: {
                        title: "Buy CHMB",
                        linkTo: n.$.Token + "#token-buy"
                    },
                    bannerContent: {
                        title: "Our first Mini Game is out!",
                        cta: "Play Now",
                        ctaLink: {
                            isExternal: !1,
                            url: "/play-now"
                        }
                    },
                    footer: {
                        footerLinks: [{
                            title: "Game features",
                            linkTo: n.$.GameplayFeatures
                        }, {
                            title: "needtimesite",
                            linkTo: n.$.needtimesite
                        }, {
                            title: "Gallery",
                            linkTo: n.$.Gallery
                        }, {
                            title: "Litepaper",
                            href: s.litepaper
                        }, {
                            title: "Token",
                            linkTo: n.$.Token
                        }, {
                            title: "About",
                            linkTo: n.$.About
                        }, {
                            title: "Vesting",
                            href: s.vesting,
                            desktopOnly: !0
                        }, {
                            title: "Staking",
                            href: s.staking,
                            desktopOnly: !0
                        }],
                        privacyURL: s.privacy,
                        termsURL: s.terms,
                        copyYear: "2022"
                    },
                    socials: {
                        twitter: {
                            link: "https://twitter.com/needtimesiteValley",
                            imgSrc: `${r(23325)}`
                        },
                        discord: {
                            link: "https://discord.com/invite/needtimesite",
                            imgSrc: `${r(60387)}`
                        },
                        facebook: {
                            link: "https://www.facebook.com/needtimesitevalley ",
                            imgSrc: `${r(52285)}`
                        },
                        youtube: {
                            link: "https://www.youtube.com/c/needtimesiteValley",
                            imgSrc: `${r(52305)}`
                        },
                        medium: {
                            link: "https://medium.com/@needtimesitevalley",
                            imgSrc: `${r(93948)}`
                        },
                        telegram: {
                            link: "https://t.me/needtimesitevalley01",
                            imgSrc: `${r(77451)}`
                        },
                        instagram: {
                            link: "https://instagram.com/needtimesiteValley",
                            imgSrc: `${r(1421)}`
                        }
                    },
                    gameplaySectionList: [{
                        imgSrcJpg: `${r(43590)}`,
                        imgSrcWebp: `${r(4478)}`,
                        imgAlt: "A needtimesite looking after plants in a small farm",
                        title: "Farming",
                        desc: {
                            desktop: "Restore a long forgotten forest farm to its former glory, grow crops and create an enchanting home for yourself and your needtimesite.",
                            tablet: ["Restore a long forgotten forest farm to", "its former glory, grow crops and create", "an enchanting home for yourself and your", "needtimesite."],
                            mobile: ["Restore a long forgotten forest farm to", "its former glory, grow crops and create", "an enchanting home for yourself and", "your needtimesite."]
                        }
                    }, {
                        imgSrcJpg: `${r(68569)}`,
                        imgSrcWebp: `${r(41317)}`,
                        imgAlt: "needtimesite pods ready to hatch",
                        title: "Breeding",
                        desc: {
                            desktop: "Accompany your needtimesite to the sacred Primordial Tree to begin breeding new needtimesite NFTs. An endless combination of attributes is possible. Will you hatch them all?",
                            tablet: ["Accompany your needtimesite to the sacred", "Primordial Tree to begin breeding new", "needtimesite NFTs. An endless combination of", "attributes is possible. Will you hatch", "them all?"],
                            mobile: ["Accompany your needtimesite to the sacred", "Primordial Tree to begin breeding new", "needtimesite NFTs. An endless combination of", "attributes is possible. Will you hatch", "them all?"]
                        }
                    }, {
                        imgSrcJpg: `${r(88721)}`,
                        imgSrcWebp: `${r(42774)}`,
                        imgAlt: "A Spark needtimesite in front of a table with many ressources and ingredients ready to craft something",
                        title: "Crafting",
                        desc: {
                            desktop: "Combine your farm-grown crops with the treasured resources you find along your travels to craft useful and powerful items.",
                            tablet: ["Combine your farm-grown crops with", "the treasured resources you find along", "your travels to craft useful and powerful", "items."],
                            mobile: ["Combine your farm-grown crops with", "the treasured resources you find along", "your travels to craft useful and powerful", "items."]
                        }
                    }, {
                        imgSrcJpg: `${r(76021)}`,
                        imgSrcWebp: `${r(94410)}`,
                        imgAlt: "Moon and her Void needtimesite holding a lantern and ready to enter a cave",
                        title: "Exploration",
                        desc: {
                            desktop: "Explore a variety of unique and interesting regions, chart the valley, meet fascinating individuals and uncover hidden secrets and valuable resources along the way.",
                            tablet: ["Explore a variety of unique and", "interesting regions, chart the valley,", "meet fascinating individuals and uncover", "hidden secrets and valuable resources", "along the way."],
                            mobile: ["Explore a variety of unique and", "interesting regions, chart the valley,", "meet fascinating individuals and", "uncover hidden secrets and", "valuable resources along the way."]
                        }
                    }]
                }
        },
        94473: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => s
            });
            var n = r(97853);
            const s = (e, t) => Math.max(t.indexOf(n.mM.getValue(e)), 0)
        },
        43025: (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => s.C
            });
            var n = r(62642),
                s = r(7026);
            n.default.registerPlugin(s.C)
        },
        88766: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => u
            });
            var n, s = r(73014),
                a = r(79588),
                i = r(97853),
                o = r(94473);
            ! function(e) {
                e.needtimesite = "needtimesite", e.eth = "eth"
            }(n || (n = {}));
            const l = [n.needtimesite, n.eth],
                c = "marketplace-currency";
            class u {
                constructor() {
                    this.currencySelect = new s.SelectString(l, (0, o.B)(c, l)), (0, a.reaction)((() => this.currencySelect.selectedItem), (e => {
                        i.mM.setValue(c, e)
                    }))
                }
            }
        },
        96522: (e, t, r) => {
            "use strict";
            r.d(t, {
                r: () => o
            });
            var n = r(70655),
                s = r(79588);
            const a = (0, r(51254).hu)("[Router]");
            var i;
            ! function(e) {
                e[e.None = 0] = "None", e[e.Preloader = 1] = "Preloader", e[e.Default = 5] = "Default"
            }(i || (i = {}));
            class o {
                constructor() {
                    this._navigationState = null, this._navigator = null, this.navigation = null, (0, s.makeObservable)(this);
                    const e = this;
                    this.navigation = {
                        back: () => {
                            var e;
                            null === (e = this._navigator) || void 0 === e || e.back()
                        },
                        forward: () => {
                            var e;
                            null === (e = this._navigator) || void 0 === e || e.forward()
                        },
                        push: (e, t) => {
                            var r;
                            null === (r = this._navigator) || void 0 === r || r.push(e, t)
                        },
                        replace: (e, t) => {
                            var r;
                            null === (r = this._navigator) || void 0 === r || r.replace(e, t)
                        },
                        get state() {
                            return e._navigationState
                        }
                    }
                }
                get mode() {
                    return a.log({
                        initializing: !1
                    }), i.Default
                }
                setNavigationState(e) {
                    this._navigationState = e
                }
                setNavigator(e) {
                    this._navigator = e
                }
            }(0, n.gn)([s.observable.ref, (0, n.w6)("design:type", Object)], o.prototype, "_navigationState", void 0), (0, n.gn)([s.observable.ref, (0, n.w6)("design:type", Object)], o.prototype, "_navigator", void 0), (0, n.gn)([s.computed, (0, n.w6)("design:type", Number), (0, n.w6)("design:paramtypes", [])], o.prototype, "mode", null), (0, n.gn)([s.action, (0, n.w6)("design:type", Function), (0, n.w6)("design:paramtypes", [Object]), (0, n.w6)("design:returntype", void 0)], o.prototype, "setNavigationState", null), (0, n.gn)([s.action, (0, n.w6)("design:type", Function), (0, n.w6)("design:paramtypes", [Object]), (0, n.w6)("design:returntype", void 0)], o.prototype, "setNavigator", null)
        },
        52842: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var n = r(70655),
                s = r(79588),
                a = r(11209);
            class i {
                constructor() {
                    this._isLoggedIn = a.Z.Instance.isLoggedIn, this._isSoundActive = a.Z.Instance.isSoundActive, this.onClickConnect = () => {
                        this._isLoggedIn.setTrue()
                    }, this.onClickLogOut = () => {
                        this._isLoggedIn.setFalse()
                    }, this.toggleSoundActive = () => {
                        this._isSoundActive.toggle()
                    }, (0, s.makeObservable)(this)
                }
                get isLoggedIn() {
                    return this._isLoggedIn.value
                }
                get isSoundActive() {
                    return this._isSoundActive.value
                }
                get connectBtn() {
                    return {
                        title: "connect",
                        onClick: this.onClickConnect
                    }
                }
                get marketplaceDropdown() {
                    return {
                        title: "My Profile",
                        dropdownItems: [{
                            title: "Profile",
                            linkTo: "/profile"
                        }, {
                            title: "Log Out",
                            linkTo: null,
                            onClick: this.onClickLogOut
                        }]
                    }
                }
            }(0, n.gn)([s.computed, (0, n.w6)("design:type", Object), (0, n.w6)("design:paramtypes", [])], i.prototype, "connectBtn", null), (0, n.gn)([s.computed, (0, n.w6)("design:type", Object), (0, n.w6)("design:paramtypes", [])], i.prototype, "marketplaceDropdown", null)
        },
        11209: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => d
            });
            var n = r(75382),
                s = r(97853),
                a = r(51170),
                i = r(79588),
                o = r(25946),
                l = r(88766),
                c = r(96522);
            const u = "marketplace-logged-in";
            (0, i.configure)({
                enforceActions: "never"
            });
            class d {
                constructor() {
                    this._isLoggedIn = new o.FlagModel(s.ZP.hasValue(u)), this._disposer = new a.ku, this._router = new c.r, this.currency = (0, n.createLazy)((() => new l.Z)), this._isSoundActive = new o.FlagModel(!1), this._disposer.add((0, i.reaction)((() => d.Instance.isLoggedIn.value), (e => {
                        e ? s.ZP.setValue(u, "1") : s.ZP.removeValue(u)
                    })))
                }
                static get Instance() {
                    return d._instance.value
                }
                static Destroy() {
                    d._instance.hasValue && (d._instance.value.dispose(), d._instance.reset())
                }
                get isLoggedIn() {
                    return this._isLoggedIn
                }
                get Router() {
                    return this._router
                }
                get isSoundActive() {
                    return this._isSoundActive
                }
                get Currency() {
                    return this.currency.value
                }
                dispose() {
                    this._disposer.dispose()
                }
            }
            d._instance = (0, n.createLazy)((() => new d))
        },
        18670: (e, t, r) => {
            "use strict";
            r.d(t, {
                CL: () => c,
                SK: () => n,
                WU: () => a,
                ee: () => l,
                eh: () => i,
                hv: () => s,
                ri: () => o
            });
            const n = {
                    id: "home",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "index.html",
                        href: "/",
                        title: "NeedTime() - Télécharger BeTray",
                        description: "Explore a mystical forest valley & spend many relaxing hours raising adorable NFT creatures called needtimesite",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                s = {
                    id: "gamefeatures",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "gamefeatures/index.html",
                        href: "/gamefeatures",
                        title: "Gameplay Features - needtimesite Valley: Explore, Farm, Craft & Breed",
                        description: "Discover the rich and varied game mechanics that make needtimesite Valley so satisfying to play",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                a = {
                    id: "token",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "token/index.html",
                        href: "/token",
                        title: "CHMB Token & Lucky Stars - needtimesite Valley",
                        description: "Discover how needtimesite Valley's on-chain token and off-chain currency are deeply integrated into every aspect of the needtimesite Valley ecosystem",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                i = {
                    id: "needtimesite",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "needtimesite/index.html",
                        href: "/needtimesite",
                        title: "needtimesite types and characteristics - needtimesite Valley",
                        description: "Discover all the unique properties of the guardians of the valley and learn about their spiritual connection to the land",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                o = {
                    id: "gallery",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "gallery/index.html",
                        href: "/gallery",
                        title: "Art & fan-art gallery - needtimesite Valley",
                        description: "Discover the latest art, screenshots and illustrations from our game and from the needtimesite community",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                l = {
                    id: "lore",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "lore/index.html",
                        href: "/lore",
                        title: "Lore Stories and mysteries of the valley - needtimesiteValley",
                        description: "Immerse yourself in the ancient knowledge and engaging stories of needtimesite Valley",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                c = {
                    id: "about",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "about/index.html",
                        href: "/about",
                        title: "Team and partnership - needtimesite Valley",
                        description: "Discover our passionate team, working hard to bring the needtimesite universe to life",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                }
        },
        27418: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;

            function s(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, a) {
                for (var i, o, l = s(e), c = 1; c < arguments.length; c++) {
                    for (var u in i = Object(arguments[c])) r.call(i, u) && (l[u] = i[u]);
                    if (t) {
                        o = t(i);
                        for (var d = 0; d < o.length; d++) n.call(i, o[d]) && (l[o[d]] = i[o[d]])
                    }
                }
                return l
            }
        },
        69590: e => {
            var t = "undefined" != typeof Element,
                r = "function" == typeof Map,
                n = "function" == typeof Set,
                s = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function a(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var o, l, c, u;
                    if (Array.isArray(e)) {
                        if ((o = e.length) != i.length) return !1;
                        for (l = o; 0 != l--;)
                            if (!a(e[l], i[l])) return !1;
                        return !0
                    }
                    if (r && e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!i.has(l.value[0])) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!a(l.value[1], i.get(l.value[0]))) return !1;
                        return !0
                    }
                    if (n && e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!i.has(l.value[0])) return !1;
                        return !0
                    }
                    if (s && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((o = e.length) != i.length) return !1;
                        for (l = o; 0 != l--;)
                            if (e[l] !== i[l]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((o = (c = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (l = o; 0 != l--;)
                        if (!Object.prototype.hasOwnProperty.call(i, c[l])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (l = o; 0 != l--;)
                        if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !e.$$typeof) && !a(e[c[l]], i[c[l]])) return !1;
                    return !0
                }
                return e != e && i != i
            }
            e.exports = function(e, t) {
                try {
                    return a(e, t)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        64593: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => se
            });
            var n, s, a, i, o = r(45697),
                l = r.n(o),
                c = r(83524),
                u = r.n(c),
                d = r(69590),
                m = r.n(d),
                p = r(67294),
                f = r(27418),
                h = r.n(f),
                g = "bodyAttributes",
                b = "htmlAttributes",
                y = {
                    BASE: "base",
                    BODY: "body",
                    HEAD: "head",
                    HTML: "html",
                    LINK: "link",
                    META: "meta",
                    NOSCRIPT: "noscript",
                    SCRIPT: "script",
                    STYLE: "style",
                    TITLE: "title"
                },
                v = (Object.keys(y).map((function(e) {
                    return y[e]
                })), "charset"),
                x = "cssText",
                w = "href",
                T = "innerHTML",
                j = "itemprop",
                k = "rel",
                C = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                },
                N = Object.keys(C).reduce((function(e, t) {
                    return e[C[t]] = t, e
                }), {}),
                S = [y.NOSCRIPT, y.SCRIPT, y.STYLE],
                _ = "data-react-helmet",
                E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                A = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                O = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                L = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                P = function(e, t) {
                    var r = {};
                    for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                    return r
                },
                I = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                },
                R = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                },
                M = function(e) {
                    var t = D(e, y.TITLE),
                        r = D(e, "titleTemplate");
                    if (r && t) return r.replace(/%s/g, (function() {
                        return Array.isArray(t) ? t.join("") : t
                    }));
                    var n = D(e, "defaultTitle");
                    return t || n || void 0
                },
                V = function(e) {
                    return D(e, "onChangeClientState") || function() {}
                },
                q = function(e, t) {
                    return t.filter((function(t) {
                        return void 0 !== t[e]
                    })).map((function(t) {
                        return t[e]
                    })).reduce((function(e, t) {
                        return L({}, e, t)
                    }), {})
                },
                B = function(e, t) {
                    return t.filter((function(e) {
                        return void 0 !== e[y.BASE]
                    })).map((function(e) {
                        return e[y.BASE]
                    })).reverse().reduce((function(t, r) {
                        if (!t.length)
                            for (var n = Object.keys(r), s = 0; s < n.length; s++) {
                                var a = n[s].toLowerCase();
                                if (-1 !== e.indexOf(a) && r[a]) return t.concat(r)
                            }
                        return t
                    }), [])
                },
                $ = function(e, t, r) {
                    var n = {};
                    return r.filter((function(t) {
                        return !!Array.isArray(t[e]) || (void 0 !== t[e] && U("Helmet: " + e + ' should be of type "Array". Instead found type "' + E(t[e]) + '"'), !1)
                    })).map((function(t) {
                        return t[e]
                    })).reverse().reduce((function(e, r) {
                        var s = {};
                        r.filter((function(e) {
                            for (var r = void 0, a = Object.keys(e), i = 0; i < a.length; i++) {
                                var o = a[i],
                                    l = o.toLowerCase(); - 1 === t.indexOf(l) || r === k && "canonical" === e[r].toLowerCase() || l === k && "stylesheet" === e[l].toLowerCase() || (r = l), -1 === t.indexOf(o) || o !== T && o !== x && o !== j || (r = o)
                            }
                            if (!r || !e[r]) return !1;
                            var c = e[r].toLowerCase();
                            return n[r] || (n[r] = {}), s[r] || (s[r] = {}), !n[r][c] && (s[r][c] = !0, !0)
                        })).reverse().forEach((function(t) {
                            return e.push(t)
                        }));
                        for (var a = Object.keys(s), i = 0; i < a.length; i++) {
                            var o = a[i],
                                l = h()({}, n[o], s[o]);
                            n[o] = l
                        }
                        return e
                    }), []).reverse()
                },
                D = function(e, t) {
                    for (var r = e.length - 1; r >= 0; r--) {
                        var n = e[r];
                        if (n.hasOwnProperty(t)) return n[t]
                    }
                    return null
                },
                G = (n = Date.now(), function(e) {
                    var t = Date.now();
                    t - n > 16 ? (n = t, e(t)) : setTimeout((function() {
                        G(e)
                    }), 0)
                }),
                H = function(e) {
                    return clearTimeout(e)
                },
                Z = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || G : r.g.requestAnimationFrame || G,
                F = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || H : r.g.cancelAnimationFrame || H,
                U = function(e) {
                    return console && "function" == typeof console.warn && console.warn(e)
                },
                Q = null,
                z = function(e, t) {
                    var r = e.baseTag,
                        n = e.bodyAttributes,
                        s = e.htmlAttributes,
                        a = e.linkTags,
                        i = e.metaTags,
                        o = e.noscriptTags,
                        l = e.onChangeClientState,
                        c = e.scriptTags,
                        u = e.styleTags,
                        d = e.title,
                        m = e.titleAttributes;
                    K(y.BODY, n), K(y.HTML, s), Y(d, m);
                    var p = {
                            baseTag: J(y.BASE, r),
                            linkTags: J(y.LINK, a),
                            metaTags: J(y.META, i),
                            noscriptTags: J(y.NOSCRIPT, o),
                            scriptTags: J(y.SCRIPT, c),
                            styleTags: J(y.STYLE, u)
                        },
                        f = {},
                        h = {};
                    Object.keys(p).forEach((function(e) {
                        var t = p[e],
                            r = t.newTags,
                            n = t.oldTags;
                        r.length && (f[e] = r), n.length && (h[e] = p[e].oldTags)
                    })), t && t(), l(e, f, h)
                },
                W = function(e) {
                    return Array.isArray(e) ? e.join("") : e
                },
                Y = function(e, t) {
                    void 0 !== e && document.title !== e && (document.title = W(e)), K(y.TITLE, t)
                },
                K = function(e, t) {
                    var r = document.getElementsByTagName(e)[0];
                    if (r) {
                        for (var n = r.getAttribute(_), s = n ? n.split(",") : [], a = [].concat(s), i = Object.keys(t), o = 0; o < i.length; o++) {
                            var l = i[o],
                                c = t[l] || "";
                            r.getAttribute(l) !== c && r.setAttribute(l, c), -1 === s.indexOf(l) && s.push(l);
                            var u = a.indexOf(l); - 1 !== u && a.splice(u, 1)
                        }
                        for (var d = a.length - 1; d >= 0; d--) r.removeAttribute(a[d]);
                        s.length === a.length ? r.removeAttribute(_) : r.getAttribute(_) !== i.join(",") && r.setAttribute(_, i.join(","))
                    }
                },
                J = function(e, t) {
                    var r = document.head || document.querySelector(y.HEAD),
                        n = r.querySelectorAll(e + "[data-react-helmet]"),
                        s = Array.prototype.slice.call(n),
                        a = [],
                        i = void 0;
                    return t && t.length && t.forEach((function(t) {
                        var r = document.createElement(e);
                        for (var n in t)
                            if (t.hasOwnProperty(n))
                                if (n === T) r.innerHTML = t.innerHTML;
                                else if (n === x) r.styleSheet ? r.styleSheet.cssText = t.cssText : r.appendChild(document.createTextNode(t.cssText));
                        else {
                            var o = void 0 === t[n] ? "" : t[n];
                            r.setAttribute(n, o)
                        }
                        r.setAttribute(_, "true"), s.some((function(e, t) {
                            return i = t, r.isEqualNode(e)
                        })) ? s.splice(i, 1) : a.push(r)
                    })), s.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), a.forEach((function(e) {
                        return r.appendChild(e)
                    })), {
                        oldTags: s,
                        newTags: a
                    }
                },
                X = function(e) {
                    return Object.keys(e).reduce((function(t, r) {
                        var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
                        return t ? t + " " + n : n
                    }), "")
                },
                ee = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function(t, r) {
                        return t[C[r] || r] = e[r], t
                    }), t)
                },
                te = function(e, t, r) {
                    switch (e) {
                        case y.TITLE:
                            return {
                                toComponent: function() {
                                    return e = t.title, r = t.titleAttributes, (n = {
                                        key: e
                                    })[_] = !0, s = ee(r, n), [p.createElement(y.TITLE, s, e)];
                                    var e, r, n, s
                                }, toString: function() {
                                    return function(e, t, r, n) {
                                        var s = X(r),
                                            a = W(t);
                                        return s ? "<" + e + ' data-react-helmet="true" ' + s + ">" + R(a, n) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + R(a, n) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, r)
                                }
                            };
                        case g:
                        case b:
                            return {
                                toComponent: function() {
                                    return ee(t)
                                }, toString: function() {
                                    return X(t)
                                }
                            };
                        default:
                            return {
                                toComponent: function() {
                                    return function(e, t) {
                                        return t.map((function(t, r) {
                                            var n, s = ((n = {
                                                key: r
                                            })[_] = !0, n);
                                            return Object.keys(t).forEach((function(e) {
                                                var r = C[e] || e;
                                                if (r === T || r === x) {
                                                    var n = t.innerHTML || t.cssText;
                                                    s.dangerouslySetInnerHTML = {
                                                        __html: n
                                                    }
                                                } else s[r] = t[e]
                                            })), p.createElement(e, s)
                                        }))
                                    }(e, t)
                                }, toString: function() {
                                    return function(e, t, r) {
                                        return t.reduce((function(t, n) {
                                            var s = Object.keys(n).filter((function(e) {
                                                    return !(e === T || e === x)
                                                })).reduce((function(e, t) {
                                                    var s = void 0 === n[t] ? t : t + '="' + R(n[t], r) + '"';
                                                    return e ? e + " " + s : s
                                                }), ""),
                                                a = n.innerHTML || n.cssText || "",
                                                i = -1 === S.indexOf(e);
                                            return t + "<" + e + ' data-react-helmet="true" ' + s + (i ? "/>" : ">" + a + "</" + e + ">")
                                        }), "")
                                    }(e, t, r)
                                }
                            }
                    }
                },
                re = function(e) {
                    var t = e.baseTag,
                        r = e.bodyAttributes,
                        n = e.encode,
                        s = e.htmlAttributes,
                        a = e.linkTags,
                        i = e.metaTags,
                        o = e.noscriptTags,
                        l = e.scriptTags,
                        c = e.styleTags,
                        u = e.title,
                        d = void 0 === u ? "" : u,
                        m = e.titleAttributes;
                    return {
                        base: te(y.BASE, t, n),
                        bodyAttributes: te(g, r, n),
                        htmlAttributes: te(b, s, n),
                        link: te(y.LINK, a, n),
                        meta: te(y.META, i, n),
                        noscript: te(y.NOSCRIPT, o, n),
                        script: te(y.SCRIPT, l, n),
                        style: te(y.STYLE, c, n),
                        title: te(y.TITLE, {
                            title: d,
                            titleAttributes: m
                        }, n)
                    }
                },
                ne = u()((function(e) {
                    return {
                        baseTag: B([w, "target"], e),
                        bodyAttributes: q(g, e),
                        defer: D(e, "defer"),
                        encode: D(e, "encodeSpecialCharacters"),
                        htmlAttributes: q(b, e),
                        linkTags: $(y.LINK, [k, w], e),
                        metaTags: $(y.META, ["name", v, "http-equiv", "property", j], e),
                        noscriptTags: $(y.NOSCRIPT, [T], e),
                        onChangeClientState: V(e),
                        scriptTags: $(y.SCRIPT, ["src", T], e),
                        styleTags: $(y.STYLE, [x], e),
                        title: M(e),
                        titleAttributes: q("titleAttributes", e)
                    }
                }), (function(e) {
                    Q && F(Q), e.defer ? Q = Z((function() {
                        z(e, (function() {
                            Q = null
                        }))
                    })) : (z(e), Q = null)
                }), re)((function() {
                    return null
                })),
                se = (s = ne, i = a = function(e) {
                    function t() {
                        return A(this, t), I(this, e.apply(this, arguments))
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.shouldComponentUpdate = function(e) {
                        return !m()(this.props, e)
                    }, t.prototype.mapNestedChildrenToProps = function(e, t) {
                        if (!t) return null;
                        switch (e.type) {
                            case y.SCRIPT:
                            case y.NOSCRIPT:
                                return {
                                    innerHTML: t
                                };
                            case y.STYLE:
                                return {
                                    cssText: t
                                }
                        }
                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
                    }, t.prototype.flattenArrayTypeChildren = function(e) {
                        var t, r = e.child,
                            n = e.arrayTypeChildren,
                            s = e.newChildProps,
                            a = e.nestedChildren;
                        return L({}, n, ((t = {})[r.type] = [].concat(n[r.type] || [], [L({}, s, this.mapNestedChildrenToProps(r, a))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, r, n = e.child,
                            s = e.newProps,
                            a = e.newChildProps,
                            i = e.nestedChildren;
                        switch (n.type) {
                            case y.TITLE:
                                return L({}, s, ((t = {})[n.type] = i, t.titleAttributes = L({}, a), t));
                            case y.BODY:
                                return L({}, s, {
                                    bodyAttributes: L({}, a)
                                });
                            case y.HTML:
                                return L({}, s, {
                                    htmlAttributes: L({}, a)
                                })
                        }
                        return L({}, s, ((r = {})[n.type] = L({}, a), r))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var r = L({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var n;
                            r = L({}, r, ((n = {})[t] = e[t], n))
                        })), r
                    }, t.prototype.warnOnInvalidChildren = function(e, t) {
                        return !0
                    }, t.prototype.mapChildrenToProps = function(e, t) {
                        var r = this,
                            n = {};
                        return p.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var s = e.props,
                                    a = s.children,
                                    i = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return Object.keys(e).reduce((function(t, r) {
                                            return t[N[r] || r] = e[r], t
                                        }), t)
                                    }(P(s, ["children"]));
                                switch (r.warnOnInvalidChildren(e, a), e.type) {
                                    case y.LINK:
                                    case y.META:
                                    case y.NOSCRIPT:
                                    case y.SCRIPT:
                                    case y.STYLE:
                                        n = r.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: n,
                                            newChildProps: i,
                                            nestedChildren: a
                                        });
                                        break;
                                    default:
                                        t = r.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: i,
                                            nestedChildren: a
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(n, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            r = P(e, ["children"]),
                            n = L({}, r);
                        return t && (n = this.mapChildrenToProps(t, n)), p.createElement(s, n)
                    }, O(t, null, [{
                        key: "canUseDOM",
                        set: function(e) {
                            s.canUseDOM = e
                        }
                    }]), t
                }(p.Component), a.propTypes = {
                    base: l().object,
                    bodyAttributes: l().object,
                    children: l().oneOfType([l().arrayOf(l().node), l().node]),
                    defaultTitle: l().string,
                    defer: l().bool,
                    encodeSpecialCharacters: l().bool,
                    htmlAttributes: l().object,
                    link: l().arrayOf(l().object),
                    meta: l().arrayOf(l().object),
                    noscript: l().arrayOf(l().object),
                    onChangeClientState: l().func,
                    script: l().arrayOf(l().object),
                    style: l().arrayOf(l().object),
                    title: l().string,
                    titleAttributes: l().object,
                    titleTemplate: l().string
                }, a.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, a.peek = s.peek, a.rewind = function() {
                    var e = s.rewind();
                    return e || (e = re({
                        baseTag: [],
                        bodyAttributes: {},
                        encodeSpecialCharacters: !0,
                        htmlAttributes: {},
                        linkTags: [],
                        metaTags: [],
                        noscriptTags: [],
                        scriptTags: [],
                        styleTags: [],
                        title: "",
                        titleAttributes: {}
                    })), e
                }, i);
            se.renderStatic = se.rewind
        },
        83524: (e, t, r) => {
            "use strict";
            var n, s = r(67294),
                a = (n = s) && "object" == typeof n && "default" in n ? n.default : n;

            function i(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var o = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, r) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== r && "function" != typeof r) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(n) {
                    if ("function" != typeof n) throw new Error("Expected WrappedComponent to be a React component.");
                    var l, c = [];

                    function u() {
                        l = e(c.map((function(e) {
                            return e.props
                        }))), d.canUseDOM ? t(l) : r && (l = r(l))
                    }
                    var d = function(e) {
                        var t, r;

                        function s() {
                            return e.apply(this, arguments) || this
                        }
                        r = e, (t = s).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, s.peek = function() {
                            return l
                        }, s.rewind = function() {
                            if (s.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = l;
                            return l = void 0, c = [], e
                        };
                        var i = s.prototype;
                        return i.UNSAFE_componentWillMount = function() {
                            c.push(this), u()
                        }, i.componentDidUpdate = function() {
                            u()
                        }, i.componentWillUnmount = function() {
                            var e = c.indexOf(this);
                            c.splice(e, 1), u()
                        }, i.render = function() {
                            return a.createElement(n, this.props)
                        }, s
                    }(s.PureComponent);
                    return i(d, "displayName", "SideEffect(" + function(e) {
                        return e.displayName || e.name || "Component"
                    }(n) + ")"), i(d, "canUseDOM", o), d
                }
            }
        },
        17695: (e, t, r) => {
            var n = {
                "./needtimesite-valley-og.jpg": 78503
            };

            function s(e) {
                var t = a(e);
                return r(t)
            }

            function a(e) {
                if (!r.o(n, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            s.keys = function() {
                return Object.keys(n)
            }, s.resolve = a, e.exports = s, s.id = 17695
        },
        24219: (e, t) => {
            "use strict";
            t.GR = void 0, t.GR = function(e, t, r) {
                const n = Date.now();
                return new Promise(((s, a) => {
                    let i = !1;
                    const o = (e, t) => {
                            if (i) return;
                            i = !0;
                            const a = () => Date.now() - n,
                                o = () => s({
                                    resolved: e,
                                    timedOut: t,
                                    elapsed: a()
                                }),
                                l = null != r ? r - a() : -1;
                            l >= 0 ? setTimeout(o, l) : o()
                        },
                        l = setTimeout((() => {
                            o(void 0, !0)
                        }), t);
                    e.then((e => {
                        clearTimeout(l), o(e, !1)
                    })).catch(a)
                }))
            }
        },
        68146: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/bars-icon.829e26.svg"
        },
        40270: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/chevron-icon.2bf22e.svg"
        },
        89429: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/cross-icon.535570.svg"
        },
        60387: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/discord-icon.53270b.svg"
        },
        52285: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/facebook-icon.9595b4.svg"
        },
        1421: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/instagram-icon.ec48ed.svg"
        },
        93948: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/medium-icon.d0a52c.svg"
        },
        89301: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/sound-off-icon.53d7be.svg"
        },
        10440: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/sound-on-icon.59a6aa.svg"
        },
        77451: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/telegram-icon.c91685.svg"
        },
        23325: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/twitter-icon.ed68f4.svg"
        },
        52305: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/youtube-icon.b9fd61.svg"
        },
        48512: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/big-logo.3f3095.svg"
        },
        56058: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/03-grass-bot-desktop.a76e18.svg"
        },
        80152: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/dropdown-bg.acd54a.svg"
        },
        77178: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/dropdown-border.dec7ff.svg"
        },
        3978: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/banner-arrow.b9cfc0.svg"
        },
        40636: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/hero-palm-left.98999d.svg"
        },
        38452: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/hero-palm-right.19bfa0.svg"
        },
        88837: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/main-logo.a9402e.svg"
        },
        14496: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/mob-grass-bottom.1d5923.svg"
        },
        72389: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/mob-grass-top.c649d5.svg"
        },
        38288: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/mob-grass-top__mob.e56646.svg"
        },
        93218: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/mob-leaves-bottom.63b672.svg"
        },
        89522: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/navbar-bg.1790db.svg"
        },
        39055: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/navbar-bg_mobile.31e67c.svg"
        },
        96337: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/navbar-bg_tablet.e7dac5.svg"
        },
        31508: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/small-logo.8a73b3.svg"
        },
        78927: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/needtimesite.2c45ad.png"
        },
        68569: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/breeding-gameplay.016a22.jpg"
        },
        41317: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/breeding-gameplay.6743b7.webp"
        },
        88721: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/crafting-gameplay.81629e.jpg"
        },
        42774: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/crafting-gameplay.b62b71.webp"
        },
        76021: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/exploration-gameplay.0732c8.jpg"
        },
        94410: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/exploration-gameplay.ee6f4f.webp"
        },
        43590: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/farming-gameplay.8191f6.jpg"
        },
        4478: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/farming-gameplay.049b50.webp"
        },
        78503: (e, t, r) => {
            "use strict";
            e.exports = r.p + "assets/img/needtimesite-valley-og.7ef3b2.jpg"
        }
    }
]);
//# sourceMappingURL=944.944.5ea356.js.map