const handleLinkClick = event => {
    event.preventDefault();
    const url = event.srcElement.baseURI;
    if(url.includes(document.location.hostname)) {
        document.location.href = url;
    } else {
        window.open(url, '_blank');
    }
};

document.addEventListener('click', event => {
    if (event.target.tagName === 'A' || event.target.tagName === 'SPAN' && event.target.classList.contains('title-h1')) {
        handleLinkClick(event);
    }
});

(globalThis.webpackChunkneedtimesite_valley_react = globalThis.webpackChunkneedtimesite_valley_react || []).push([
    [351], {
        35443: (e, t, s) => {
            "use strict";
            s.d(t, {
                oW: () => u
            });
            var r = s(85893),
                a = s(67294),
                n = s(62642),
                i = s(53739),
                o = s(13406);
            const c = {
                    exit: e => n.gsap.timeline().fromTo(e, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        duration: .7
                    }),
                    enter: e => n.gsap.timeline().fromTo(e, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: .7
                    })
                },
                l = {
                    exit: () => n.gsap.timeline(),
                    enter: () => n.gsap.timeline()
                },
                u = a.memo((e => {
                    let {
                        children: t,
                        className: s,
                        animations: n
                    } = e;
                    const {
                        currentState: u,
                        finishState: p
                    } = (0, i.SC)(), d = (0, a.useRef)(null), m = n || c;
                    return (0, a.useEffect)((() => {
                        "none" !== u && (m[u] || l[u])(d.current).call(p)
                    }), [u, p, m]), (0, r.jsx)(o.G, {
                        className: `animated-page ${s||""} animation-${u}`,
                        ref: d,
                        children: t
                    })
                }))
        },
        39864: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => u
            });
            var r = s(85893),
                a = s(67294),
                n = s(11595),
                i = s(95320),
                o = s(6341),
                c = s(40270),
                l = s(36280);
            const u = e => {
                const {
                    dropdownTitle: t,
                    dropdownItems: s,
                    className: u
                } = e, p = (0, a.useRef)(null), [d, m] = (0, a.useState)(!1);
                return (0, l.Z)(p, (() => m(!1))), (0, r.jsxs)("button", {
                    className: `dropdown ${d?"active":""} ${u||""}`,
                    onClick: () => {
                        m(!d)
                    },
                    ref: p,
                    children: [(0, r.jsx)(o.r, {
                        className: "nav-link nav-text",
                        children: t
                    }), (0, r.jsx)(n.Q, {
                        src: c,
                        className: "dropdown-icon"
                    }), (0, r.jsx)(i.Z, {
                        dropdownItems: s,
                        isActive: d
                    })]
                })
            }
        },
        79610: (e, t, s) => {
            "use strict";
            s.d(t, {
                h: () => n
            });
            var r = s(85893),
                a = s(39711);
            const n = e => {
                const {
                    title: t,
                    linkTo: s,
                    anchorRef: n,
                    onClick: i,
                    href: o
                } = e, c = () => {
                    i && i()
                };
                return o ? (0, r.jsx)("a", {
                    href: o,
                    className: "nav-text",
                    ref: n,
                    target: "_blank",
                    onClick: c,
                    children: t
                }) : s ? (0, r.jsx)(a.rU, {
                    to: s,
                    className: "nav-text",
                    ref: n,
                    children: t
                }) : (0, r.jsx)("a", {
                    className: "nav-text",
                    ref: n,
                    onClick: c,
                    children: t
                })
            }
        },
        95320: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            }), s(26699);
            var r = s(85893),
                a = s(67294),
                n = s(11595),
                i = s(79610),
                o = s(62642),
                c = s(13406),
                l = s(77178),
                u = s(80152),
                p = s(5143),
                d = s(77834);
            const m = e => {
                const {
                    className: t,
                    dropdownItems: s,
                    isActive: m
                } = e, f = (0, a.useRef)(null), g = (0, a.useRef)([]);
                g.current = [];
                const h = m ? "active" : "",
                    b = t ? `dropdown-list ${t}` : "dropdown-list",
                    y = (0, d.HQ)(),
                    x = e => {
                        e && !g.current.includes(e) && g.current.push(e)
                    };
                (0, a.useEffect)((() => {
                    o.gsap.set(f.current, {
                        y: "-150%"
                    }), o.gsap.set(g.current, {
                        autoAlpha: 0
                    })
                }), [g, y]);
                const v = (0, a.useCallback)((() => {
                        o.gsap.to(f.current, {
                            y: 0
                        }), o.gsap.timeline().fromTo(f.current, {
                            y: "-150%"
                        }, {
                            y: 0,
                            duration: (0, p.T)(40),
                            ease: p.V.twoSidedEase
                        }, 0).fromTo(g.current.reverse(), {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            stagger: (0, p.T)(3),
                            duration: (0, p.T)(30),
                            ease: p.V.defaultEase
                        }, (0, p.T)(17))
                    }), []),
                    w = (0, a.useCallback)((() => {
                        o.gsap.to(f.current, {
                            y: "-150%",
                            duration: (0, p.T)(40),
                            ease: p.V.twoSidedEase
                        }), o.gsap.to(g.current, {
                            autoAlpha: 0,
                            stagger: (0, p.T)(3),
                            duration: (0, p.T)(10),
                            ease: p.V.reverseEase
                        })
                    }), []);
                return (0, a.useEffect)((() => {
                    m ? v() : w()
                }), [m, v, w]), (0, r.jsxs)(c.G, {
                    className: `${b} ${h}`,
                    divRef: f,
                    children: [(0, r.jsx)(n.Q, {
                        src: l,
                        className: "dropdown-border__wrapper"
                    }), (0, r.jsx)(n.Q, {
                        src: u,
                        className: "dropdown-bg__wrapper"
                    }), (0, r.jsx)("ul", {
                        className: "dropdown-items",
                        children: s.map(((e, t) => (0, r.jsx)("li", {
                            className: "dropdown-item",
                            ref: x,
                            children: (0, r.jsx)(i.h, {
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
        36204: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            });
            var r = s(85893),
                a = s(39711),
                n = s(11595),
                i = s(13406),
                o = s(6341),
                c = s(48512),
                l = s(78041),
                u = s(40270),
                p = s(77834),
                d = s(21964);
            const m = e => {
                const {
                    links: t,
                    socials: s,
                    copyYear: m,
                    privacyURL: f,
                    termsURL: g,
                    dividerTop: h = !1
                } = e, {
                    isDesktop: b
                } = (0, p.uO)(), y = b ? t : t.filter((e => !e.desktopOnly));
                return (0, r.jsx)("footer", {
                    className: "footer",
                    children: (0, r.jsxs)(i.G, {
                        className: "container",
                        children: [h && (0, r.jsx)(d.Z, {
                            type: "even",
                            className: "footer__divider--top"
                        }), (0, r.jsxs)(i.G, {
                            className: "footer__contents",
                            children: [b ? (0, r.jsx)(n.Q, {
                                src: c,
                                className: "footer__contents__logo"
                            }) : (0, r.jsx)(l.f, {
                                className: "footer__contents__logo-wrap",
                                children: (0, r.jsx)(n.Q, {
                                    src: c,
                                    className: "footer__contents__logo"
                                })
                            }), (0, r.jsxs)(i.G, {
                                className: "footer__contents__right-wrap",
                                children: [(0, r.jsx)(i.G, {
                                    className: "footer__contents__menu",
                                    children: (0, r.jsx)("ul", {
                                        className: "menu-list",
                                        children: y.map(((e, t) => {
                                            const s = t < 4 ? "1" : "2";
                                            return (0, r.jsxs)("li", {
                                                className: `menu-list__item col-${s} col-${s}-${t}`,
                                                children: [!e.href && e.linkTo && (0, r.jsxs)(a.rU, {
                                                    to: e.linkTo,
                                                    className: "button btn-dots-aside inline nav-text",
                                                    children: [e.title, (0, r.jsx)(n.Q, {
                                                        src: u,
                                                        className: "chevron-icon"
                                                    })]
                                                }, t), !e.linkTo && e.href && (0, r.jsxs)("a", {
                                                    href: e.href,
                                                    className: "button btn-dots-aside inline nav-text",
                                                    target: "_blank",
                                                    children: [e.title, (0, r.jsx)(n.Q, {
                                                        src: u,
                                                        className: "chevron-icon"
                                                    })]
                                                }, t)]
                                            }, t)
                                        }))
                                    })
                                }), (0, r.jsxs)(i.G, {
                                    className: "footer__contents__connect",
                                    children: [(0, r.jsxs)("form", {
                                        target: "_blank",
                                        action: "https://mailchimp.com/fr/",
                                        method: "post",
                                        id: "mc-embedded-subscribe-form",
                                        name: "mc-embedded-subscribe-form",
                                        noValidate: !0,
                                        "data-code": "v5s5u9",
                                        className: "footer__contents__form",
                                        children: [(0, r.jsx)("input", {
                                            name: "EMAIL",
                                            id: "mce-EMAIL",
                                            className: "email-input",
                                            type: "text",
                                            "aria-label": "Devenir testeur",
                                            placeholder: " Devenir testeur"
                                        }), (0, r.jsx)(o.r, {
                                            className: "email-input__error desc-3",
                                            children: "Please check your email and try again."
                                        }), (0, r.jsx)("input", {
                                            type: "submit",
                                            value: "S'inscrire",
                                            className: "button btn-secondary btn-2"
                                        })]
                                    }), (0, r.jsx)(i.G, {
                                        className: "footer__contents__socials",
                                        children: Object.entries(s).map(((e, t) => {
                                            let [s, a] = e;
                                            return (0, r.jsx)("a", {
                                                href: a.link,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                className: "social-icon__link",
                                                children: (0, r.jsx)(n.Q, {
                                                    src: a.imgSrc,
                                                    className: "social-icon"
                                                })
                                            }, t)
                                        }))
                                    })]
                                })]
                            })]
                        }), (0, r.jsxs)(i.G, {
                            className: "footer__addition",
                            children: [(0, r.jsx)(d.Z, {
                                className: "footer__divider--bottom",
                                type: "even"
                            }), (0, r.jsxs)(i.G, {
                                className: "footer__addition__info",
                                children: [(0, r.jsxs)(o.r, {
                                    className: "footer__addition__copy desc-3",
                                    children: ["Copyright ", m || (new Date).getFullYear()]
                                }), (0, r.jsxs)(i.G, {
                                    className: "footer__addition__links",
                                    children: [(0, r.jsx)("a", {
                                        href: f || "#",
                                        className: "button btn-inline-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Politique de confidentialité"
                                    }), (0, r.jsx)(o.r, {
                                        className: "desc-3",
                                        children: " | "
                                    }), (0, r.jsx)("a", {
                                        href: g || "#",
                                        className: "button btn-inline-link",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: "Conditions d'utilisation"
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        52764: (e, t, s) => {
            "use strict";
            s.d(t, {
                E: () => l,
                X: () => u
            });
            var r = s(85893),
                a = s(24093),
                n = s(10902),
                i = s(51254),
                o = s(67294);
            const c = (0, i.hu)("[Image]"),
                l = o.forwardRef(((e, t) => {
                    const {
                        children: s,
                        pictureClassName: a,
                        ...n
                    } = e, i = n.src.match(/[\w-]+\.(jpg|png|svg)/g), c = n.alt || i && i[0] || "img", l = (0, r.jsx)("img", {
                        ...n,
                        ref: t,
                        alt: c
                    });
                    return s && o.Children.count(s) > 0 ? (0, r.jsxs)("picture", {
                        className: a,
                        children: [s, l]
                    }) : l
                })),
                u = o.forwardRef(((e, t) => {
                    const s = (0, o.useRef)(null),
                        [i, u] = (0, o.useState)(!1),
                        p = t || s;
                    let {
                        src: d,
                        priority: m,
                        lazyHooks: f = a.b.Hooks.Opacity,
                        lazyClasses: g,
                        className: h,
                        pictureClassName: b,
                        children: y,
                        ...x
                    } = e;
                    const v = o.Children.count(y) > 0;
                    (0, o.useEffect)((() => {
                        u(!1);
                        const e = p.current;
                        if (e && (d || v)) return n.pz.enqueue((async () => {
                            u("progress");
                            const t = (s = e, new Promise(((e, t) => {
                                const r = () => {
                                        s.removeEventListener("load", r), s.removeEventListener("error", a), e()
                                    },
                                    a = e => {
                                        s.removeEventListener("load", r), s.removeEventListener("error", a), t(e)
                                    };
                                s.addEventListener("load", r), s.addEventListener("error", a)
                            })));
                            var s;
                            return e.src = d || void 0, t.then((() => u(!0))).catch((e => {
                                c.warn("Lazy: failed to load img", {
                                    src: d,
                                    pictureMode: v
                                }, e), u(!0)
                            }))
                        }), m)
                    }), [d, m, p, v]), (0, o.useLayoutEffect)((() => {
                        const e = p.current;
                        if (!e) return;
                        const t = a.b.getValue(f, i);
                        t && t(e)
                    }), [i, f, p]);
                    const w = a.b.getValue(g, i);
                    w && (h += " " + w);
                    const _ = i && d ? d : "#";
                    return (0, r.jsx)(l, {
                        ...x,
                        ref: p,
                        className: h || void 0,
                        pictureClassName: b || void 0,
                        src: _,
                        children: y
                    })
                }))
        },
        15877: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => u
            });
            var r = s(85893),
                a = s(67294),
                n = s(6341),
                i = s(43044),
                o = s(12486),
                c = s(61628);
            const l = {
                    autoplay: !0,
                    loop: !0
                },
                u = a.forwardRef(((e, t) => {
                    const {
                        className: s,
                        titleClassName: a,
                        title: u,
                        style: p,
                        onClick: d,
                        link: m,
                        textRef: f,
                        type: g = "main",
                        disabled: h,
                        externalLink: b
                    } = e, y = {
                        className: `button btn-primary ${s||""} ${g} ${h?"disabled":""} `,
                        href: h ? null : m,
                        onClick: h ? null : d,
                        style: p,
                        target: b ? "_blank" : null
                    }, x = "main" === g ? o : c;
                    return (0, r.jsx)("a", {
                        ...y,
                        children: (0, r.jsx)(i.c, {
                            path: x,
                            config: l,
                            className: "lottie-btn__wrap",
                            ref: t,
                            children: (0, r.jsx)(n.r, {
                                className: `btn-1 ${a||""}`,
                                textRef: f,
                                children: u
                            })
                        })
                    })
                }))
        },
        11995: (e, t, s) => {
            "use strict";
            s.d(t, {
                N: () => i
            });
            var r = s(85893),
                a = s(67294),
                n = s(64593);
            const i = a.memo((e => {
                let t = e;
                if (null != e.info) t = e.info;
                else if (null != e.page) {
                    const r = e.page;
                    t = {
                        title: r.output.title,
                        description: r.output.description,
                        image: r.output.image ? {
                            src: s(17695)("./" + r.output.image),
                            width: r.output.imageWidth || 1200,
                            height: r.output.imageHeight || 630
                        } : null
                    }
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.title && (0, r.jsxs)(n.q, {
                        children: [(0, r.jsx)("title", {
                            children: t.title
                        }), (0, r.jsx)("meta", {
                            property: "og:title",
                            content: t.title
                        }), (0, r.jsx)("meta", {
                            name: "twitter:title",
                            content: t.title
                        })]
                    }), t.description && (0, r.jsxs)(n.q, {
                        children: [(0, r.jsx)("meta", {
                            name: "description",
                            content: t.description
                        }), (0, r.jsx)("meta", {
                            property: "og:description",
                            content: t.description
                        }), (0, r.jsx)("meta", {
                            name: "twitter:description",
                            content: t.description
                        })]
                    }), t.image && (0, r.jsxs)(n.q, {
                        children: [(0, r.jsx)("meta", {
                            property: "og:image:width",
                            content: `${t.image.width}`
                        }), (0, r.jsx)("meta", {
                            property: "og:image:height",
                            content: `${t.image.height}`
                        }), (0, r.jsx)("meta", {
                            property: "og:image",
                            content: t.image.src
                        }), t.description && (0, r.jsx)("meta", {
                            property: "og:image:alt",
                            content: t.description
                        }), (0, r.jsx)("meta", {
                            name: "twitter:image",
                            content: t.image.src
                        })]
                    })]
                })
            }))
        },
        98438: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => b
            });
            var r = s(85893),
                a = s(67294),
                n = s(11595),
                i = s(13406),
                o = s(62642),
                c = s(72389),
                l = s(38288),
                u = s(14496),
                p = s(93218),
                d = s(5143),
                m = s(77834),
                f = s(85492),
                g = s(15716);
            const h = e => {
                    const {
                        title: t,
                        href: s,
                        linkTo: a,
                        goTo: n
                    } = e;
                    return (0, r.jsx)("li", {
                        className: "mobile-menu__link",
                        children: s ? (0, r.jsx)("a", {
                            href: s,
                            className: "mob-text button btn-mob-menu",
                            target: "_blank",
                            children: (0, r.jsx)("span", {
                                className: "title-h1",
                                children: t
                            })
                        }) : (0, r.jsx)(f.z, {
                            onClick: () => n(a),
                            className: "mob-text button btn-mob-menu",
                            children: (0, r.jsx)("span", {
                                className: "title-h1",
                                children: t
                            })
                        })
                    })
                },
                b = e => {
                    let {
                        links: t,
                        goTo: s,
                        isOpen: b
                    } = e;
                    const y = (0, a.useRef)(null),
                        x = (0, a.useRef)(null),
                        v = (0, a.useRef)(null),
                        w = (0, m.uO)(),
                        _ = (0, m.HQ)(),
                        k = (0, a.useCallback)((() => {
                            o.default.timeline({
                                smoothChildTiming: !1,
                                onStart: () => document.body.classList.add("modal-active")
                            }).fromTo(y.current, {
                                opacity: 0,
                                pointerEvents: "none"
                            }, {
                                opacity: 1,
                                pointerEvents: "all",
                                ease: d.V.twoSidedEase,
                                duration: (0, d.T)(50)
                            }, 0).fromTo(x.current, {
                                y: -80 * _
                            }, {
                                y: 0,
                                ease: d.V.defaultEase,
                                duration: (0, d.T)(60)
                            }, (0, d.T)(30)).fromTo(v.current, {
                                y: 80 * _
                            }, {
                                y: 0,
                                ease: d.V.defaultEase,
                                duration: (0, d.T)(60)
                            }, (0, d.T)(30)).fromTo(".mobile-menu__link", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                stagger: (0, d.T)(4),
                                ease: d.V.defaultEase,
                                duration: (0, d.T)(80)
                            }, (0, d.T)(30) + .016666)
                        }), [_]),
                        j = (0, a.useCallback)((() => {
                            document.body.classList.remove("modal-active"), o.default.set(y.current, {
                                opacity: 0,
                                pointerEvents: "none"
                            }), o.default.set(x.current, {
                                y: -80 * _
                            }), o.default.set(v.current, {
                                y: 80 * _
                            }), o.default.set(".mobile-menu__link", {
                                opacity: 0
                            })
                        }), [_]),
                        T = (0, a.useCallback)((() => {
                            o.default.timeline({
                                smoothChildTiming: !1,
                                onStart: () => document.body.classList.remove("modal-active")
                            }).fromTo(".mobile-menu__link", {
                                opacity: 1
                            }, {
                                opacity: 0,
                                ease: d.V.reverseEase,
                                duration: (0, d.T)(30),
                                stagger: {
                                    from: "end",
                                    amount: (0, d.T)(2)
                                }
                            }, 0).fromTo(x.current, {
                                y: 0
                            }, {
                                y: -80 * _,
                                ease: d.V.reverseEase,
                                duration: (0, d.T)(40)
                            }, (0, d.T)(10)).fromTo(v.current, {
                                y: 0
                            }, {
                                y: 80 * _,
                                ease: d.V.reverseEase,
                                duration: (0, d.T)(40)
                            }, (0, d.T)(10)).fromTo(y.current, {
                                opacity: 1,
                                pointerEvents: "all"
                            }, {
                                opacity: 0,
                                pointerEvents: "none",
                                ease: d.V.twoSidedEase,
                                duration: (0, d.T)(50)
                            }, (0, d.T)(30))
                        }), [_]);
                    return (0, a.useEffect)((() => {
                        "open" == b ? k() : "close" == b ? T() : j()
                    }), [T, j, b, k]), (0, r.jsxs)(i.G, {
                        className: "mobile-menu",
                        divRef: y,
                        children: [(0, r.jsx)(i.G, {
                            className: "anim-wrap--top",
                            divRef: x,
                            children: (0, r.jsx)(n.Q, {
                                src: w.isMobile ? l : c,
                                className: "grass-top"
                            })
                        }), (0, r.jsx)(i.G, {
                            className: "text-mask top"
                        }), (0, r.jsx)(i.G, {
                            className: "container",
                            children: (0, r.jsx)(i.G, {
                                className: "mobile-menu__contents",
                                children: (0, r.jsxs)("ul", {
                                    className: "mobile-menu__list",
                                    children: [(0, r.jsx)("li", {
                                        className: "mobile-menu__link",
                                        children: (0, r.jsx)(f.z, {
                                            onClick: () => s(g.$.Home),
                                            className: "mob-text button btn-mob-menu",
                                            children: (0, r.jsx)("span", {
                                                className: "title-h1",
                                                children: "Accueil"
                                            })
                                        })
                                    }), t.map(((e, t) => e.dropdownItems ? e.dropdownItems.map(((e, a) => (0, r.jsx)(h, {
                                        goTo: s,
                                        title: e.title,
                                        linkTo: e.linkTo,
                                        href: e.href
                                    }, `${t}_${a}`))) : (0, r.jsx)(h, {
                                        goTo: s,
                                        title: e.title,
                                        linkTo: e.linkTo
                                    }, t)))]
                                })
                            })
                        }), (0, r.jsx)(i.G, {
                            className: "text-mask bot"
                        }), (0, r.jsxs)(i.G, {
                            className: "anim-wrap--bot",
                            divRef: v,
                            children: [(0, r.jsx)(n.Q, {
                                src: p,
                                className: "leaves-bot"
                            }), (0, r.jsx)(n.Q, {
                                src: u,
                                className: "grass-bot"
                            })]
                        })]
                    })
                }
        },
        90365: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => S
            });
            var r = s(85893),
                a = s(67294),
                n = s(33581),
                i = s(96974),
                o = s(39711),
                c = s(11595),
                l = s(39864),
                u = s(13406),
                p = s(89522),
                d = s(96337),
                m = s(39055),
                f = s(89429),
                g = s(68146),
                h = s(98438),
                b = s(77834),
                y = s(88912),
                x = s(52842),
                v = s(15716),
                w = s(50947),
                _ = s(65388);
            const k = (0, n.Pi)((e => {
                    const {
                        ctaBtn: t,
                        isMarketplace: s,
                        renderMarketplaceBtn: n,
                        isSoundActive: o,
                        onClickSoundBtn: l
                    } = e, [p, d] = (0, a.useState)(!1), [m, b] = (0, a.useState)("disabled"), y = (0, i.s0)(), x = (0, i.TH)(), v = (0, a.useCallback)((e => {
                        x.pathname === e ? (document.body.classList.remove("modal-active"), d(!1), b("close")) : y(e, {
                            replace: !0
                        })
                    }), [x.pathname, y]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(u.G, {
                            className: "navbar__responsive " + (p ? "menu-active" : ""),
                            children: [(0, r.jsxs)("button", {
                                className: "navbar__responsive__menu-btn",
                                onClick: () => {
                                    d((e => (b(e ? "close" : "open"), !e)))
                                },
                                children: [(0, r.jsx)(c.Q, {
                                    src: g,
                                    className: "icon-bars"
                                }), (0, r.jsx)(c.Q, {
                                    src: f,
                                    className: "icon-cross"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "right-wrap",
                                children: [(0, r.jsx)(_.c, {
                                    isActive: o,
                                    onClickCapture: l
                                }), s ? n() : t && (0, r.jsx)(C, {
                                    ...t
                                })]
                            })]
                        }), (0, r.jsx)(h.Z, {
                            links: e.links,
                            isOpen: m,
                            goTo: v
                        })]
                    })
                })),
                j = (0, n.Pi)((e => {
                    const {
                        logo: t,
                        links: s,
                        ctaBtn: n,
                        smallLogo: p,
                        isMarketplace: d,
                        renderMarketplaceBtn: m,
                        dynamicLogo: f,
                        isSoundActive: g,
                        onClickSoundBtn: h
                    } = e, b = (0, i.TH)(), y = (0, a.useCallback)((e => {
                        b.pathname === v.$.Home && (e.preventDefault(), (0, w.k)(!1))
                    }), [b.pathname]);
                    return (0, r.jsxs)(u.G, {
                        className: "navbar__desktop " + (f ? "dynamic-logo" : ""),
                        children: [(0, r.jsxs)(o.rU, {
                            to: v.$.Home,
                            onClick: y,
                            className: "navbar-logo__wrapper",
                            children: [(0, r.jsx)(c.Q, {
                                src: t,
                                className: "navbar-logo"
                            }), f && (0, r.jsx)(c.Q, {
                                src: p,
                                className: "navbar-logo--small"
                            })]
                        }), (0, r.jsx)("ul", {
                            className: "navbar-nav",
                            children: s.map(((e, t) => e.isDropdown ? (0, r.jsx)(l.Z, {
                                dropdownItems: e.dropdownItems,
                                dropdownTitle: e.title
                            }, t) : (0, r.jsx)("li", {
                                className: "nav-item",
                                children: e.disabled ? (0, r.jsx)("span", {
                                    className: "nav-link nav-text disabled",
                                    children: e.title
                                }) : (0, r.jsx)(o.rU, {
                                    className: "nav-link nav-text",
                                    to: e.linkTo,
                                    children: e.title
                                })
                            }, t)))
                        }), (0, r.jsxs)("div", {
                            className: "right-wrap",
                            children: [(0, r.jsx)(_.c, {
                                isActive: g,
                                onClickCapture: h
                            }), d ? m() : n && (0, r.jsx)(C, {
                                ...n
                            })]
                        })]
                    })
                })),
                T = {
                    [b.Ru.Desktop]: p,
                    [b.Ru.Tablet]: d,
                    [b.Ru.Mobile]: m
                },
                N = (0, n.Pi)((e => {
                    const [t, s] = (0, a.useState)(!1), n = (0, a.useRef)(null), i = (0, b.HQ)(), {
                        isDesktop: o,
                        isMobile: p,
                        isTablet: d,
                        type: m
                    } = (0, b.uO)(), f = (0, y.tT)(x.Z), {
                        isLoggedIn: g,
                        marketplaceDropdown: h,
                        connectBtn: v,
                        isSoundActive: w,
                        toggleSoundActive: _
                    } = f, N = t ? "scrolled" : "", C = (0, a.useRef)(0);
                    C.current = e.offsetY || 850 * i;
                    const S = (0, a.useCallback)((() => g ? (0, r.jsx)(l.Z, {
                        className: "marketplace-dropdown",
                        dropdownItems: h.dropdownItems,
                        dropdownTitle: h.title
                    }) : (0, r.jsx)("a", {
                        className: "button btn-secondary btn-2",
                        onClick: v.onClick,
                        children: v.title
                    })), [g, v, h]);
                    (0, a.useEffect)((() => {
                        const e = () => {
                            window.scrollY > C.current ? s(!0) : s(!1)
                        };
                        return window.addEventListener("scroll", e), () => {
                            window.removeEventListener("scroll", e)
                        }
                    }), [C]);
                    const E = T[m];
                    return (0, r.jsxs)("nav", {
                        className: `navbar ${N}`,
                        children: [(0, r.jsx)(u.G, {
                            className: "navbar-bg",
                            divRef: n,
                            children: (0, r.jsx)(c.Q, {
                                className: "navbar-bg__wrapper",
                                src: E
                            })
                        }), (0, r.jsxs)(u.G, {
                            className: "container",
                            children: [o && (0, r.jsx)(j, {
                                ...e,
                                renderMarketplaceBtn: S,
                                isSoundActive: w,
                                onClickSoundBtn: _
                            }), (d || p) && (0, r.jsx)(k, {
                                ...e,
                                renderMarketplaceBtn: S,
                                isSoundActive: w,
                                onClickSoundBtn: _
                            })]
                        })]
                    })
                })),
                C = e => {
                    const {
                        linkTo: t,
                        title: s,
                        external: a
                    } = e;
                    return a ? (0, r.jsx)("a", {
                        className: "button btn-secondary btn-2",
                        href: t,
                        target: "_blank",
                        children: s
                    }) : (0, r.jsx)(o.rU, {
                        className: "button btn-secondary btn-2",
                        to: t,
                        children: s
                    })
                },
                S = N
        },
        15293: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            });
            var r = s(85893),
                a = s(67294),
                n = s(76914),
                i = s(35443),
                o = s(90365),
                c = s(47677),
                l = s(36204),
                u = s(10902),
                p = s(88837),
                d = s(31508);
            const m = a.memo((e => {
                let {
                    className: t,
                    footerIsActive: s = !0,
                    useBanner: a = !1,
                    isBannerActive: m = !0,
                    isMarketplace: f = !1,
                    children: g,
                    navbarOffsetY: h,
                    button: b = n.h.navCtaBtn,
                    dropdownBtn: y,
                    footerTopDivider: x = !0,
                    transitions: v = null
                } = e, w = "page ";
                return t && (w += t), (0, r.jsxs)(i.oW, {
                    className: w,
                    animations: v,
                    children: [(0, r.jsx)(u.ZP, {}), (0, r.jsx)(o.Z, {
                        links: n.h.navLinks,
                        logo: p,
                        smallLogo: d,
                        ctaBtn: b,
                        offsetY: h,
                        dropdownBtn: y,
                        isMarketplace: f
                    }), a && (0, r.jsx)(c.Z, {
                        isActiveByDefault: m
                    }), g && g, s && (0, r.jsx)(l.Z, {
                        links: n.h.footer.footerLinks,
                        socials: n.h.socials,
                        dividerTop: x,
                        privacyURL: n.h.footer.privacyURL,
                        termsURL: n.h.footer.termsURL
                    })]
                })
            }))
        },
        6341: (e, t, s) => {
            "use strict";
            s.d(t, {
                r: () => i
            });
            var r = s(85893),
                a = s(33581);

            function n(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                const s = {
                        className: e.className || "",
                        style: e.style,
                        ref: e.textRef,
                        onClick: e.onClick
                    },
                    a = t || e.value;
                return (0, r.jsx)("span", {
                    ...s,
                    children: null == a ? e.children : a
                })
            }
            const i = e => n(e);
            (0, a.Pi)((e => n(e, e.model && e.model.value || null)))
        },
        13406: (e, t, s) => {
            "use strict";
            s.d(t, {
                G: () => n
            });
            var r = s(85893);

            function a(e) {
                return e.onKeyPress || e.onEnterPress ? e.onEnterPress ? function(t) {
                    "Enter" === t.key && e.onEnterPress.call(this, t), e.onKeyPress && e.onKeyPress.call(this, t)
                } : e.onKeyPress : null
            }
            const n = s(67294).forwardRef(((e, t) => {
                const s = {
                    className: e.className || "",
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    onMouseMove: e.onMouseMove,
                    onClick: e.onClick,
                    onBlur: e.onBlur,
                    onKeyPress: a(e),
                    tabIndex: e.tabIndex,
                    style: e.style,
                    id: e.id
                };
                return (0, r.jsx)("div", {
                    ...s,
                    ref: t || e.divRef,
                    children: e.children
                })
            }))
        },
        45302: (e, t, s) => {
            "use strict";
            s.d(t, {
                W: () => r
            });
            const r = new(s(38262).FK)((() => s.e(677).then(s.bind(s, 67677))))
        },
        85492: (e, t, s) => {
            "use strict";
            s.d(t, {
                C: () => o,
                z: () => i
            });
            var r = s(85893),
                a = s(11595),
                n = s(6341);
            const i = e => {
                    const {
                        title: t,
                        onClick: s,
                        style: i,
                        disabled: o,
                        iconBefore: c,
                        iconImg: l = !1,
                        iconClassName: u
                    } = e, p = {
                        className: `button ${e.className||""} ${e.disabled?"disabled":""}`,
                        onClick: s,
                        style: i,
                        disabled: o
                    }, d = e.icon, m = e.titleClassName, f = e => {
                        let {
                            className: t,
                            src: s,
                            alt: n
                        } = e;
                        return l ? (0, r.jsx)("img", {
                            className: t,
                            src: s,
                            alt: n
                        }) : (0, r.jsx)(a.Q, {
                            className: t,
                            src: s,
                            alt: n
                        })
                    };
                    return (0, r.jsxs)("button", {
                        ...p,
                        children: [d && c && (0, r.jsx)(f, {
                            className: `icon ${u}`,
                            src: d.src,
                            alt: d.alt
                        }), (0, r.jsxs)(n.r, {
                            className: m,
                            children: [t, e.children]
                        }), d && !c && (0, r.jsx)(f, {
                            className: `icon ${u}`,
                            src: d.src,
                            alt: d.alt
                        })]
                    })
                },
                o = e => {
                    const {
                        title: t,
                        onClick: s,
                        style: i,
                        iconBefore: o,
                        href: c,
                        target: l
                    } = e, u = {
                        className: `button btn-inline ${e.className||""}`,
                        onClick: s,
                        style: i,
                        href: c,
                        target: l
                    }, p = e.icon, d = e.titleClassName;
                    return (0, r.jsxs)("a", {
                        ...u,
                        children: [p && o && (0, r.jsx)(a.Q, {
                            className: "icon-wrap",
                            src: p.src
                        }), (0, r.jsxs)(n.r, {
                            className: d,
                            children: [t, e.children]
                        }), p && !o && (0, r.jsx)(a.Q, {
                            className: "icon-wrap",
                            src: p.src
                        })]
                    })
                }
        },
        65388: (e, t, s) => {
            "use strict";
            s.d(t, {
                c: () => l
            });
            var r = s(85893),
                a = s(33581),
                n = s(13406),
                i = s(11595),
                o = s(10440),
                c = s(89301);
            const l = (0, a.Pi)((e => {
                let {
                    isActive: t,
                    onClickCapture: s
                } = e;
                return (0, r.jsxs)(n.G, {
                    className: "sound-button " + (t ? "active" : ""),
                    onClick: () => {
                        s && s()
                    },
                    children: [(0, r.jsx)(i.Q, {
                        src: o,
                        className: "sound-button__on-icon"
                    }), (0, r.jsx)(i.Q, {
                        src: c,
                        className: "sound-button__off-icon"
                    })]
                })
            }))
        },
        37710: (e, t, s) => {
            "use strict";
            s.d(t, {
                m: () => a
            });
            var r = s(67294);
            const a = (e, t, s, a) => {
                const [n, i] = (0, r.useState)(null);
                return (0, r.useEffect)((() => {
                    if (null == n) return a && a(), void i(e);
                    n !== e && (e ? t() : s(), i(e))
                }), [n, e, t, s, a]), n
            }
        },
        47346: (e, t, s) => {
            "use strict";
            s.d(t, {
                a: () => i
            });
            var r = s(67294),
                a = s(79588),
                n = s(11380);
            const i = e => {
                const [t, s] = (0, r.useState)(n.Getter.getValue(e));
                return (0, r.useEffect)((() => (0, a.reaction)((() => n.Getter.getValue(e)), s, {
                    fireImmediately: !0
                })), [e]), t
            }
        },
        36280: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            var r = s(67294);
            const a = (e, t) => {
                (0, r.useEffect)((() => {
                    const s = s => {
                        e.current && !e.current.contains(s.target) && t(s)
                    };
                    return document.addEventListener("mousedown", s), document.addEventListener("touchstart", s), () => {
                        document.removeEventListener("mousedown", s), document.removeEventListener("touchstart", s)
                    }
                }), [e, t])
            }
        },
        88912: (e, t, s) => {
            "use strict";
            s.d(t, {
                tT: () => a
            });
            var r = s(67294);
            const a = e => (0, r.useMemo)((() => new e), [e])
        },
        59273: (e, t, s) => {
            "use strict";
            s.d(t, {
                k: () => r
            });
            const r = (0, s(55928).createLogger)("[LottieComponent]")
        },
        42737: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => n
            });
            var r = s(67294);
            const a = {
                loop: !0,
                autoplay: !0,
                renderer: "svg",
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid meet"
                }
            };

            function n(e, t, s) {
                const {
                    loop: n,
                    autoplay: i,
                    renderer: o,
                    rendererSettings: c
                } = Object.assign(s || {}, Object.assign(a, s || {}));
                return (0, r.useMemo)((() => ({
                    container: e,
                    path: t,
                    renderer: o,
                    loop: n,
                    autoplay: i,
                    rendererSettings: c
                })), [e, n, i, o, t, c])
            }
        },
        79632: (e, t, s) => {
            "use strict";
            s.d(t, {
                c: () => r.c
            });
            var r = s(43044);
            s(72299)
        },
        37449: (e, t, s) => {
            "use strict";
            s.d(t, {
                d: () => n
            });
            var r = s(38262),
                a = s(59273);
            const n = new r.FK((async () => {
                a.k.log("Loading library...");
                const e = await s.e(248).then(s.t.bind(s, 11248, 23));
                return a.k.log("Library has been loaded"), e.default
            }))
        },
        72299: (e, t, s) => {
            "use strict";
            s.d(t, {
                x: () => i
            });
            var r = s(67294),
                a = s(47346),
                n = s(37449);
            const i = e => {
                const t = (0, a.a)((0, r.useCallback)((() => n.d.value), [])),
                    [s, i] = (0, r.useState)(null),
                    [o, c] = (0, r.useState)(!1);
                return (0, r.useEffect)((() => {
                    if (!(t && e && e.container && e.path)) return i(null), void c(!1);
                    const s = t.loadAnimation(e);
                    return i(s), s.isLoaded ? c(!0) : (c(!1), s.addEventListener("DOMLoaded", (() => {
                        c(!0)
                    }))), () => null == s ? void 0 : s.destroy()
                }), [t, e]), {
                    animation: s,
                    isLoaded: o
                }
            }
        },
        43044: (e, t, s) => {
            "use strict";
            s.d(t, {
                c: () => l
            });
            var r = s(85893),
                a = s(67294),
                n = s(42737),
                i = s(72299),
                o = s(13406),
                c = s(37710);
            const l = a.forwardRef(((e, t) => {
                const s = (0, a.useRef)(),
                    l = (0, n.Z)((null == t ? void 0 : t.current) || s.current, e.path, e.config),
                    {
                        animation: u,
                        isLoaded: p
                    } = (0, i.x)(l);
                return (0, c.m)(e.playing && p, (0, a.useCallback)((() => {
                    null == u || u.play()
                }), [u]), (0, a.useCallback)((() => null == u ? void 0 : u.pause()), [u])), (0, r.jsxs)(o.G, {
                    divRef: t || s,
                    className: e.className || void 0,
                    children: [e.tempMasks && (0, r.jsx)(o.G, {
                        className: "temp-mask temp-mask--top"
                    }), e.children, e.tempMasks && (0, r.jsx)(o.G, {
                        className: "temp-mask temp-mask--bot"
                    })]
                })
            }))
        },
        96470: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            });
            var r = s(85893),
                a = s(67294),
                n = s(11595),
                i = s(39711),
                o = s(13406),
                c = s(28461),
                l = s(35681),
                u = s(63336),
                p = s(77043),
                d = s(52764);
            const m = e => {
                const {
                    characterImgPng: t,
                    characterImgWebp: s,
                    type: m,
                    description: f,
                    descColor: g,
                    backFaceImgPng: h,
                    backFaceImgWebp: b,
                    frontFaceImgPng: y,
                    frontFaceImgWebp: x,
                    categoryIcon: v,
                    loadingPrio: w
                } = e, _ = (0, a.useRef)(null), [k, j] = (0, a.useState)(!1);
                return (0, r.jsxs)(o.G, {
                    className: "needtimesite-card " + (k ? "flipped" : ""),
                    divRef: _,
                    onClick: () => {
                        j(!k), _.current.style.transform = `rotateY(${k?0:180}deg)`
                    },
                    children: [(0, r.jsxs)(o.G, {
                        className: "frontface",
                        children: [(0, r.jsxs)(d.X, {
                            priority: 3 | w,
                            alt: "Noise",
                            className: "frontface__img frontface__img--noise",
                            children: [(0, r.jsx)("source", {
                                type: "image/webp",
                                srcSet: l
                            }), (0, r.jsx)("source", {
                                type: "image/jpeg",
                                srcSet: c
                            })]
                        }), (0, r.jsxs)(d.X, {
                            priority: 3 | w,
                            alt: "Frontface",
                            className: "frontface__img frontface__img--card",
                            children: [(0, r.jsx)("source", {
                                type: "image/webp",
                                srcSet: x
                            }), (0, r.jsx)("source", {
                                type: "image/jpeg",
                                srcSet: y
                            })]
                        }), (0, r.jsxs)(d.X, {
                            priority: 3 | w,
                            alt: `${m.charAt(0).toLocaleUpperCase()+m.slice(1)} Beyond Truth`,
                            className: "frontface__img frontface__img--char",
                            pictureClassName: "picture-frontface__img",
                            children: [(0, r.jsx)("source", {
                                type: "image/webp",
                                srcSet: s
                            }), (0, r.jsx)("source", {
                                type: "image/jpeg",
                                srcSet: t
                            })]
                        }), (0, r.jsx)("h2", {
                            className: "title-h2 frontface__type",
                            children: m.toUpperCase()
                        })]
                    }), (0, r.jsxs)(o.G, {
                        className: "backface",
                        children: [(0, r.jsx)(n.Q, {
                            src: v,
                            className: "backface__img backface__img--category"
                        }), (0, r.jsx)("h2", {
                            className: "title-h2 backface__type",
                            children: m.toUpperCase()
                        }), (0, r.jsx)(o.G, {
                            className: "backface__divider"
                        }), (0, r.jsx)("p", {
                            className: "desc-3 backface__desc",
                            style: {
                                color: g || "white"
                            },
                            children: f
                        }), e.btnViewMoreDisabled ? null : (0, r.jsx)(i.rU, {
                            to: "/marketplace",
                            className: "button btn-1 btn-dots-aside",
                            children: "View more"
                        }), (0, r.jsxs)(d.X, {
                            priority: w ? w + 1 : 3,
                            alt: "Noise",
                            className: "backface__img backface__img--noise",
                            children: [(0, r.jsx)("source", {
                                type: "image/webp",
                                srcSet: p
                            }), (0, r.jsx)("source", {
                                type: "image/jpeg",
                                srcSet: u
                            })]
                        }), (0, r.jsxs)(d.X, {
                            priority: w ? w + 1 : 3,
                            alt: "Backface",
                            className: "backface__img backface__img--card",
                            children: [(0, r.jsx)("source", {
                                type: "image/webp",
                                srcSet: b
                            }), (0, r.jsx)("source", {
                                type: "image/jpeg",
                                srcSet: h
                            })]
                        })]
                    })]
                })
            }
        },
        31413: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => o
            });
            var r = s(85893),
                a = s(67294),
                n = s(13406),
                i = s(10902);
            const o = e => {
                let {
                    children: t,
                    delayMs: s,
                    lazyPriority: o,
                    placeholder: c
                } = e;
                const [l, u] = (0, a.useState)(!1);
                if ((0, a.useEffect)((() => {
                        if (u(!1), null != o) return i.pz.enqueue((async () => {
                            u(!0)
                        }), o);
                        if (null != s) {
                            const e = setTimeout((() => {
                                u(!0)
                            }), s);
                            return () => clearTimeout(e)
                        }
                        u(!0)
                    }), [s, o]), l) return (0, r.jsx)(r.Fragment, {
                    children: t
                });
                if (c) {
                    const e = c;
                    return (0, r.jsx)(e, {})
                }
                return (0, r.jsx)(n.G, {
                    className: "delayed-placeholder",
                    style: {
                        width: "100%",
                        height: "4rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "0.64rem"
                    }
                })
            }
        },
        47677: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => g
            });
            var r = s(85893),
                a = s(67294),
                n = s(11595),
                i = s(39711),
                o = s(13406),
                c = s(33581),
                l = s(62642),
                u = s(5143),
                p = s(77834),
                d = s(78927),
                m = s(3978),
                f = s(52764);
            const g = (0, c.Pi)((e => {
                const [t, s] = (0, a.useState)(!1), [c, g] = (0, a.useState)(!0), h = (0, a.useRef)(null), b = (0, a.useRef)(null), y = (0, a.useRef)(null), x = l.default.timeline({
                    smoothChildTiming: !1
                }), v = (0, p.HQ)(), {
                    isDesktop: w,
                    isTablet: _,
                    isMobile: k
                } = (0, p.uO)();
                (0, a.useEffect)((() => {
                    e.isActiveByDefault && g(!0), e.isActiveByDefault ? (l.default.set(h.current, {
                        x: k ? "-50%" : 0,
                        left: k ? "50%" : "auto"
                    }), l.default.set(b.current, {
                        autoAlpha: 1,
                        x: 0
                    }), l.default.set(y.current, {
                        autoAlpha: 0
                    })) : (l.default.set(h.current, {
                        x: (w ? 244 : _ ? 207 : 327) * v
                    }), l.default.set(b.current, {
                        autoAlpha: 0,
                        x: (w ? 259 : _ ? 227 : 340) * v
                    }), l.default.set(y.current, {
                        autoAlpha: 1
                    }))
                }), [v, w, _, k, e.isActiveByDefault]);
                const j = () => {
                        t || c || (s(!0), x.to(y.current, {
                            autoAlpha: 0,
                            duration: (0, u.T)(30),
                            ease: u.V.twoSidedEase
                        }, 0).to(h.current, {
                            x: k ? "-50%" : 0,
                            duration: (0, u.T)(60),
                            ease: u.V.twoSidedEase
                        }, (0, u.T)(30)).to(b.current, {
                            x: 0,
                            duration: (0, u.T)(60),
                            ease: u.V.twoSidedEase,
                            onComplete: () => {
                                g(!0), s(!1)
                            }
                        }, (0, u.T)(30)))
                    },
                    T = () => {
                        c && !t && c && (s(!0), x.to(h.current, {
                            x: w ? 244 * v : _ ? 207 * v : "50%",
                            duration: (0, u.T)(60),
                            ease: u.V.twoSidedEase
                        }, 0).to(b.current, {
                            x: (w ? 259 : _ ? 227 : 340) * v,
                            duration: 1,
                            ease: u.V.twoSidedEase
                        }, 0).to(y.current, {
                            autoAlpha: 1,
                            duration: (0, u.T)(30),
                            ease: u.V.twoSidedEase,
                            onComplete: () => {
                                g(!1), s(!1)
                            }
                        }, (0, u.T)(30)))
                    };
                return (0, a.useEffect)((() => (window.addEventListener("scroll", T), () => {
                    window.removeEventListener("scroll", T)
                }))), (0, r.jsxs)(o.G, {
                    className: "floating-banner " + (c ? "active" : ""),
                    onMouseEnter: j,
                    onClick: () => {
                        window.innerWidth < 1024 && j()
                    },
                    divRef: h,
                    children: [(0, r.jsx)(o.G, {
                        className: "floating-banner__arrow--wrapper",
                        divRef: y,
                        children: (0, r.jsx)(n.Q, {
                            src: m,
                            className: "floating-banner__arrow"
                        })
                    }), (0, r.jsxs)(o.G, {
                        className: "floating-banner__contents",
                        divRef: b,
                        children: [(0, r.jsxs)(o.G, {
                            className: "left-side",
                            children: [(0, r.jsxs)("p", {
                                className: "desc-5 floating-banner__text",
                                children: ["Our first ", (0, r.jsx)("br", {}), " Mini Game is out!"]
                            }), (0, r.jsx)(i.rU, {
                                to: "/marketplace",
                                className: "button btn-banner btn-2",
                                children: "Play now"
                            })]
                        }), (0, r.jsx)(f.X, {
                            priority: 2,
                            src: d,
                            alt: "needtimesite",
                            className: "floating-banner__img"
                        })]
                    })]
                })
            }))
        },
        21964: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => n
            });
            var r = s(85893),
                a = s(13406);
            const n = e => {
                const {
                    type: t,
                    className: s,
                    style: n
                } = e;
                return (0, r.jsxs)(a.G, {
                    className: `line-divider ${t} ${s||""}`,
                    style: n,
                    children: [(0, r.jsx)(a.G, {
                        className: "line-divider__line line-divider__line--before"
                    }), (0, r.jsx)(a.G, {
                        className: "line-divider__ball"
                    }), (0, r.jsx)(a.G, {
                        className: "line-divider__line line-divider__line--after"
                    })]
                })
            }
        },
        78041: (e, t, s) => {
            "use strict";
            s.d(t, {
                X: () => u,
                f: () => l
            });
            var r = s(85893),
                a = s(67294),
                n = s(13406),
                i = s(62642),
                o = s(77834),
                c = s(5143);
            const l = e => {
                    const t = e.className ? `lines-decoration ${e.className}` : "lines-decoration";
                    return (0, r.jsxs)(n.G, {
                        className: t,
                        children: [(0, r.jsxs)(n.G, {
                            className: "line-before",
                            children: [(0, r.jsx)("span", {
                                className: "line"
                            }), (0, r.jsx)("span", {
                                className: "small-ball"
                            }), (0, r.jsx)("span", {
                                className: "big-ball"
                            })]
                        }), e.children, (0, r.jsxs)(n.G, {
                            className: "line-after",
                            children: [(0, r.jsx)("span", {
                                className: "line"
                            }), (0, r.jsx)("span", {
                                className: "small-ball"
                            }), (0, r.jsx)("span", {
                                className: "big-ball"
                            })]
                        })]
                    })
                },
                u = e => {
                    const t = (0, o.HQ)(),
                        {
                            isDesktop: s,
                            isTablet: r,
                            isMobile: n
                        } = (0, o.uO)();
                    return (0, a.useEffect)((() => {
                        e.current.querySelector(".lines-decoration") && (s && (i.default.set(e.current.querySelector(".line-before"), {
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
                        })), r && (i.default.set(e.current.querySelector(".line-before"), {
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
                        })), n && (i.default.set(e.current.querySelector(".line-before"), {
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
                    }), [e, t, s, r, n]), {
                        animateLines: (0, a.useCallback)((t => i.default.timeline().to(e.current.querySelector(".line-before"), {
                            autoAlpha: 1,
                            duration: (0, c.T)(40),
                            ease: c.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-before .line"), {
                            x: 0,
                            duration: (0, c.T)(60),
                            ease: c.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-before .big-ball"), {
                            x: 0,
                            duration: (0, c.T)(60),
                            ease: c.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-before .small-ball"), {
                            x: 0,
                            duration: (0, c.T)(54),
                            ease: c.V.defaultEase
                        }, t + (0, c.T)(11)).to(e.current.querySelector(".line-after"), {
                            autoAlpha: 1,
                            duration: (0, c.T)(40),
                            ease: c.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-after .line"), {
                            x: 0,
                            duration: (0, c.T)(60),
                            ease: c.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-after .big-ball"), {
                            x: 0,
                            duration: (0, c.T)(60),
                            ease: c.V.defaultEase
                        }, t + 0).to(e.current.querySelector(".line-after .small-ball"), {
                            x: 0,
                            duration: (0, c.T)(54),
                            ease: c.V.defaultEase
                        }, t + (0, c.T)(11))), [e])
                    }
                }
        },
        58944: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => j
            });
            var r = s(85893),
                a = s(67294),
                n = s(13406),
                i = s(78041),
                o = s(58950),
                c = s(43025),
                l = s(5143),
                u = s(6341),
                p = s(77834),
                d = s(51170),
                m = s(62642),
                f = s(17453),
                g = s(74234),
                h = s(52527),
                b = s(41949),
                y = s(57017),
                x = s(45478),
                v = s(21774),
                w = s(48344),
                _ = s(52764);
            const k = {
                    desktop: ["L’objectif du jeu est de survivre sur l’île tout en établissant des alliances, en collectant des ressources et en planifiant une échappatoire. Les joueurs doivent s’entraider pour rassembler les éléments nécessaires afin d’envoyer un signal de SOS et s’échapper de l’île."],
                    tablet: ["L’objectif du jeu est de survivre sur l’île tout en établissant des alliances, en collectant des ressources et en planifiant une échappatoire. Les joueurs doivent s’entraider pour rassembler les éléments nécessaires afin d’envoyer un signal de SOS et s’échapper de l’île."],
                    mobile: ["L’objectif du jeu est de survivre sur l’île tout en établissant des alliances, en collectant des ressources et en planifiant une échappatoire. Les joueurs doivent s’entraider pour rassembler les éléments nécessaires afin d’envoyer un signal de SOS et s’échapper de l’île."]
                },
                j = e => {
                    const t = (0, a.useRef)(null),
                        s = (0, a.useRef)(null),
                        j = (0, a.useRef)(null),
                        T = (0, a.useRef)(null),
                        N = (0, a.useRef)(null),
                        C = (0, a.useRef)(null),
                        {
                            isDesktop: S,
                            isTablet: E,
                            isMobile: A
                        } = (0, p.uO)(),
                        O = (0, p.HQ)(),
                        R = (0, a.useMemo)((() => new d.ku("ABOUT SECTION")), []);
                    return (0, a.useEffect)((() => {
                        const e = new c.C(s.current, {
                                type: "chars",
                                charsClass: "single-char title-h1"
                            }),
                            r = e.chars;
                        m.default.set(r, {
                            autoAlpha: 0,
                            y: 15 * O
                        }), m.default.set(j.current.querySelectorAll(".desc-2"), {
                            y: 50 * O,
                            autoAlpha: 0
                        }), m.default.set(C.current, {
                            scale: 1.2
                        }), S && (m.default.set(t.current.querySelector(".line-before"), {
                            autoAlpha: 0
                        }), m.default.set(t.current.querySelector(".line-before .line"), {
                            x: -173 * O
                        }), m.default.set(t.current.querySelector(".line-before .small-ball"), {
                            x: -154 * O
                        }), m.default.set(t.current.querySelector(".line-before .big-ball"), {
                            x: -173 * O
                        }), m.default.set(t.current.querySelector(".line-after"), {
                            autoAlpha: 0
                        }), m.default.set(t.current.querySelector(".line-after .line"), {
                            x: 173 * O
                        }), m.default.set(t.current.querySelector(".line-after .small-ball"), {
                            x: 154 * O
                        }), m.default.set(t.current.querySelector(".line-after .big-ball"), {
                            x: 173 * O
                        }), m.default.set(T.current, {
                            y: 220 * O
                        }), m.default.set(N.current, {
                            y: -233 * O
                        })), E && (m.default.set(t.current.querySelector(".line-before"), {
                            autoAlpha: 0
                        }), m.default.set(t.current.querySelector(".line-before .line"), {
                            x: -90 * O
                        }), m.default.set(t.current.querySelector(".line-before .small-ball"), {
                            x: -76 * O
                        }), m.default.set(t.current.querySelector(".line-before .big-ball"), {
                            x: -90 * O
                        }), m.default.set(t.current.querySelector(".line-after"), {
                            autoAlpha: 0
                        }), m.default.set(t.current.querySelector(".line-after .line"), {
                            x: 90 * O
                        }), m.default.set(t.current.querySelector(".line-after .small-ball"), {
                            x: 76 * O
                        }), m.default.set(t.current.querySelector(".line-after .big-ball"), {
                            x: 90 * O
                        }), m.default.set(T.current, {
                            y: 115 * O
                        }), m.default.set(N.current, {
                            y: -116 * O
                        })), A && (m.default.set(t.current.querySelector(".line-before"), {
                            autoAlpha: 0
                        }), m.default.set(t.current.querySelector(".line-before .line"), {
                            x: -71 * O
                        }), m.default.set(t.current.querySelector(".line-before .small-ball"), {
                            x: -58 * O
                        }), m.default.set(t.current.querySelector(".line-before .big-ball"), {
                            x: -71 * O
                        }), m.default.set(t.current.querySelector(".line-after"), {
                            autoAlpha: 0
                        }), m.default.set(t.current.querySelector(".line-after .line"), {
                            x: 71 * O
                        }), m.default.set(t.current.querySelector(".line-after .small-ball"), {
                            x: 58 * O
                        }), m.default.set(t.current.querySelector(".line-after .big-ball"), {
                            x: 71 * O
                        }), m.default.set(T.current, {
                            y: 61 * O
                        }), m.default.set(N.current, {
                            y: -57 * O
                        }));
                        const a = o.i.create({
                            once: !0,
                            trigger: t.current,
                            endTrigger: t.current,
                            start: "top center",
                            end: "bottom top",
                            onEnter: () => {
                                m.default.to(t.current.querySelector(".line-before"), {
                                    autoAlpha: 1,
                                    duration: (0, l.T)(40),
                                    ease: l.V.defaultEase
                                }), m.default.to(t.current.querySelector(".line-before .line"), {
                                    x: 0,
                                    duration: (0, l.T)(60),
                                    ease: l.V.defaultEase
                                }), m.default.to(t.current.querySelector(".line-before .big-ball"), {
                                    x: 0,
                                    duration: (0, l.T)(60),
                                    ease: l.V.defaultEase
                                }), m.default.to(t.current.querySelector(".line-before .small-ball"), {
                                    x: 0,
                                    duration: (0, l.T)(54),
                                    ease: l.V.defaultEase,
                                    delay: (0, l.T)(11)
                                }), m.default.to(t.current.querySelector(".line-after"), {
                                    autoAlpha: 1,
                                    duration: (0, l.T)(40),
                                    ease: l.V.defaultEase
                                }), m.default.to(t.current.querySelector(".line-after .line"), {
                                    x: 0,
                                    duration: (0, l.T)(60),
                                    ease: l.V.defaultEase
                                }), m.default.to(t.current.querySelector(".line-after .big-ball"), {
                                    x: 0,
                                    duration: (0, l.T)(60),
                                    ease: l.V.defaultEase
                                }), m.default.to(t.current.querySelector(".line-after .small-ball"), {
                                    x: 0,
                                    duration: (0, l.T)(54),
                                    ease: l.V.defaultEase,
                                    delay: (0, l.T)(11)
                                }), m.default.to(r, {
                                    y: 0,
                                    duration: (0, l.T)(60),
                                    stagger: (0, l.T)(1),
                                    ease: l.V.bouncyEase,
                                    delay: (0, l.T)(17)
                                }), m.default.to(r, {
                                    autoAlpha: 1,
                                    duration: (0, l.T)(40),
                                    stagger: (0, l.T)(1),
                                    ease: l.V.bouncyEase,
                                    delay: (0, l.T)(17)
                                }), m.default.to(j.current.querySelectorAll(".desc-2"), {
                                    y: 0,
                                    autoAlpha: 1,
                                    stagger: (0, l.T)(2),
                                    duration: (0, l.T)(40),
                                    ease: l.V.defaultEase,
                                    delay: (0, l.T)(22)
                                }), m.default.to(T.current, {
                                    y: 0,
                                    duration: (0, l.T)(120),
                                    ease: l.V.twoSidedEase,
                                    delay: (0, l.T)(22)
                                }), m.default.to(C.current, {
                                    scale: 1,
                                    duration: (0, l.T)(160),
                                    ease: l.V.twoSidedEase,
                                    delay: (0, l.T)(22)
                                }), m.default.to(N.current, {
                                    y: 0,
                                    duration: (0, l.T)(120),
                                    ease: l.V.twoSidedEase,
                                    delay: (0, l.T)(22)
                                })
                            }
                        });
                        return R.add((() => a.kill(!0))), R.add((() => e.revert())), () => R.dispose()
                    }), [O, S, E, A, R]), (0, r.jsxs)(n.G, {
                        className: "about-section",
                        divRef: t,
                        children: [(0, r.jsx)(n.G, {
                            className: "container",
                            children: (0, r.jsxs)(n.G, {
                                className: "about-section__content",
                                children: [(0, r.jsx)(i.f, {
                                    className: "about-section__content__title-wrap",
                                    children: (0, r.jsx)("h1", {
                                        className: "about-section__content__title title-h1 center-text",
                                        ref: s,
                                        children: "À Propos"
                                    })
                                }), (0, r.jsx)("p", {
                                    className: "about-section__content__text desc-2 center-text",
                                    ref: j,
                                    children: S ? k.desktop.map(((e, t) => (0, r.jsx)(u.r, {
                                        className: "desc-2 color-white",
                                        children: e
                                    }, t))) : E ? k.tablet.map(((e, t) => (0, r.jsx)(u.r, {
                                        className: "desc-2 color-white",
                                        children: e
                                    }, t))) : k.mobile.map(((e, t) => (0, r.jsx)(u.r, {
                                        className: "desc-2 color-white",
                                        children: e
                                    }, t)))
                                })]
                            })
                        }), (0, r.jsxs)(n.G, {
                            className: "about-section__image",
                            children: [(0, r.jsx)(n.G, {
                                className: "leaves-top__wrap",
                                divRef: T,
                                children: (0, r.jsx)(_.X, {
                                    priority: e.loadingPrio ? e.loadingPrio + 1 : 0,
                                    src: v,
                                    alt: "leaves top"
                                })
                            }), (0, r.jsxs)(_.X, {
                                priority: null == e ? void 0 : e.loadingPrio,
                                alt: "Moon chasing a Beyond Truth in the forest. The Beyond Truth has stolen one of Moon's carrots and is holding it in it’s mouth while mischievously running away.",
                                ref: C,
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: S ? g : E ? b : x
                                }), (0, r.jsx)("source", {
                                    type: "image/jpeg",
                                    srcSet: S ? f : E ? h : y
                                })]
                            }), (0, r.jsx)(n.G, {
                                className: "leaves-bottom__wrap",
                                divRef: N,
                                children: (0, r.jsx)(_.X, {
                                    priority: e.loadingPrio ? e.loadingPrio + 1 : 0,
                                    src: w,
                                    alt: "leavesBottom"
                                })
                            })]
                        })]
                    })
                }
        },
        14468: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => x
            });
            var r = s(85893),
                a = s(67294),
                n = s(13406),
                i = s(62642),
                o = s(58950),
                c = s(43025),
                l = s(24794),
                u = s(77834),
                p = s(5143),
                d = s(45302),
                m = s(51170),
                f = s(96470),
                g = s(6341),
                h = s(47346);
            const b = {
                    rewind: !1,
                    pagination: !1,
                    perPage: 3,
                    perMove: 3,
                    height: "5.06rem",
                    fixedWidth: "4.03rem",
                    gap: "0.35rem",
                    arrowPath: "M18.9442 10L29 20L18.9442 30L16.2559 27.2723L21.6389 21.9191H11V18.0809H21.6389L16.2559 12.7277L18.9442 10Z",
                    easing: "cubic-bezier(0.63, 0.00, 0.43, 1.00)",
                    speed: 1e3 * (0, p.T)(70),
                    breakpoints: {
                        1024: {
                            perPage: 2,
                            perMove: 2,
                            height: "4.14rem",
                            fixedWidth: "3.30rem",
                            gap: "0.24rem",
                            snap: !1,
                            drag: "free",
                            padding: "0.32rem"
                        },
                        480: {
                            perPage: 1,
                            perMove: 1,
                            height: "3.33rem",
                            fixedWidth: "2.65rem",
                            padding: "0"
                        }
                    }
                },
                y = {
                    desktop: ["la session de jeu."],
                    tablet: [""],
                    mobile: ["la session de jeu."]
                },
                x = e => {
                    const {
                        rewriteScrollTrigger: t,
                        loadingPrio: s,
                        btnViewMoreDisabled: x
                    } = e, v = (0, l.B)(), w = (0, a.useRef)(null), _ = (0, a.useRef)(null), k = (0, a.useRef)(null), j = (0, a.useRef)(null), T = (0, a.useRef)(null), N = (0, u.HQ)(), C = (0, a.useMemo)((() => new m.ku("CARD SECTION")), []), {
                        isDesktop: S,
                        isTablet: E,
                        isMobile: A
                    } = (0, u.uO)(), {
                        Splide: O,
                        SplideSlide: R
                    } = (0, h.a)((() => d.W.value)) || {};
                    return (0, a.useEffect)((() => {
                        const e = new c.C(_.current, {
                                type: "words, chars",
                                charsClass: "single-char title-h1"
                            }),
                            s = e.chars,
                            r = w.current.querySelectorAll(".anim-span");
                        S ? (i.default.set(r, {
                            y: 50 * N,
                            autoAlpha: 0
                        }), i.default.set(k.current, {
                            y: 50 * N,
                            autoAlpha: 0
                        })) : (i.default.set(r, {
                            y: 30 * N,
                            autoAlpha: 0
                        }), i.default.set(k.current, {
                            y: 30 * N,
                            autoAlpha: 0
                        })), i.default.set(s, {
                            autoAlpha: 0,
                            y: 15 * N
                        });
                        const a = i.default.utils.toArray(".splide__slide").slice(0, 3);
                        i.default.set(a, {
                            y: 240 * N
                        });
                        const n = o.i.create({
                            once: !0,
                            trigger: w.current,
                            endTrigger: w.current,
                            start: (null == t ? void 0 : t.start) ?? "top center",
                            end: (null == t ? void 0 : t.end) ?? "bottom top",
                            onEnter: () => {
                                var e;
                                if (!j.current) return;
                                const t = null === (e = j.current) || void 0 === e ? void 0 : e.splide.Components.Arrows.arrows;
                                S ? (i.default.set(t.prev, {
                                    y: 50 * N,
                                    autoAlpha: 0
                                }), i.default.set(t.next, {
                                    y: 50 * N,
                                    autoAlpha: 0
                                })) : (i.default.set(t.prev, {
                                    y: 30 * N,
                                    autoAlpha: 0
                                }), i.default.set(t.next, {
                                    y: 30 * N,
                                    autoAlpha: 0
                                })), i.default.to(s, {
                                    y: 0,
                                    duration: (0, p.T)(60),
                                    stagger: (0, p.T)(1),
                                    ease: p.V.bouncyEase
                                }), i.default.to(s, {
                                    autoAlpha: 1,
                                    duration: (0, p.T)(40),
                                    stagger: (0, p.T)(1),
                                    ease: p.V.bouncyEase
                                }), a.length && i.default.to(a, {
                                    y: 0,
                                    ease: p.V.defaultEase,
                                    duration: (0, p.T)(60),
                                    stagger: (0, p.T)(4),
                                    delay: (0, p.T)(9)
                                }), i.default.to(r, {
                                    y: 0,
                                    autoAlpha: 1,
                                    ease: p.V.defaultEase,
                                    duration: (0, p.T)(40),
                                    stagger: (0, p.T)(2),
                                    delay: (0, p.T)(13)
                                }), S ? (i.default.to(k.current, {
                                    y: 0,
                                    autoAlpha: 1,
                                    duration: (0, p.T)(40),
                                    ease: p.V.defaultEase,
                                    delay: (0, p.T)(17)
                                }), t && (i.default.to(t.prev, {
                                    y: 0,
                                    autoAlpha: 1,
                                    duration: (0, p.T)(40),
                                    ease: p.V.defaultEase,
                                    delay: (0, p.T)(19)
                                }), i.default.to(t.next, {
                                    y: 0,
                                    autoAlpha: 1,
                                    duration: (0, p.T)(40),
                                    ease: p.V.defaultEase,
                                    delay: (0, p.T)(21)
                                }))) : (i.default.to(k.current, {
                                    y: 0,
                                    autoAlpha: 1,
                                    duration: (0, p.T)(40),
                                    ease: p.V.defaultEase,
                                    delay: (0, p.T)(19)
                                }), t && (i.default.to(t.prev, {
                                    y: 0,
                                    autoAlpha: 1,
                                    duration: (0, p.T)(40),
                                    ease: p.V.defaultEase,
                                    delay: (0, p.T)(17)
                                }), i.default.to(t.next, {
                                    y: 0,
                                    autoAlpha: 1,
                                    duration: (0, p.T)(40),
                                    ease: p.V.defaultEase,
                                    delay: (0, p.T)(21)
                                })))
                            }
                        });
                        return C.add((() => n.kill(!0))), C.add((() => e.revert())), () => C.dispose()
                    }), [S, N, O, t, C]), (0, r.jsxs)(n.G, {
                        className: "cards-section",
                        divRef: w,
                        children: [(0, r.jsx)(n.G, {
                            className: "container",
                            children: (0, r.jsxs)(n.G, {
                                className: "cards-section__contents",
                                children: [(0, r.jsx)("h2", {
                                    className: "title-h1 cards-section__title",
                                    ref: _,
                                    children: "Qui sont les héros ?"
                                }), S && (0, r.jsxs)("p", {
                                    className: "desc-1 cards-section__desc",
                                    ref: T,
                                    children: [(0, r.jsxs)(g.r, {
                                        className: "desc-1 color-green anim-span",
                                        children: ["Les ", (0, r.jsx)("span", {
                                            className: "desc-1 color-espalier",
                                            children: "héros"
                                        }), " sont avant tout des survivants sur l’île, chaque héro a des qualités et atouts spécifiques qui peuvent être  acquéris durant"]
                                    }), y.desktop.map(((e, t) => (0, r.jsx)(g.r, {
                                        className: "desc-1 color-green anim-span",
                                        children: e
                                    }, t)))]
                                }), E && (0, r.jsxs)("p", {
                                    className: "desc-1 cards-section__desc",
                                    ref: T,
                                    children: [(0, r.jsxs)(g.r, {
                                        className: "desc-1 color-green anim-span",
                                        children: ["Les ", (0, r.jsx)("span", {
                                            className: "desc-1 color-espalier",
                                            children: "héros"
                                        }), " sont avant tout des survivants sur l’île, chaque héro a des qualités et atouts spécifiques qui peuvent être  acquéris durant la session de jeu."]
                                    }), y.tablet.map(((e, t) => (0, r.jsx)(g.r, {
                                        className: "desc-1 color-green anim-span",
                                        children: e
                                    }, t)))]
                                }), A && (0, r.jsxs)("p", {
                                    className: "desc-1 cards-section__desc",
                                    ref: T,
                                    children: [(0, r.jsxs)(g.r, {
                                        className: "desc-1 color-green anim-span",
                                        children: ["Les ", (0, r.jsx)("span", {
                                            className: "desc-1 color-espalier",
                                            children: "héros"
                                        }), "  sont avant tout des survivants sur l’île, chaque héro a des qualités et atouts spécifiques qui peuvent être  acquéris durant"]
                                    }), y.mobile.map(((e, t) => (0, r.jsx)(g.r, {
                                        className: "desc-1 color-green anim-span",
                                        children: e
                                    }, t)))]
                                })]
                            })
                        }), (0, r.jsxs)(n.G, {
                            className: "cards-section__slider",
                            children: [O && R && (0, r.jsx)(O, {
                                options: b,
                                ref: j,
                                children: v.map(((e, t) => (0, r.jsx)(R, {
                                    children: (0, r.jsx)(f.Z, {
                                        ...e,
                                        loadingPrio: s,
                                        btnViewMoreDisabled: x
                                    })
                                }, t)))
                            }), (0, r.jsxs)("p", {
                                className: "desc-1 color-espalier cards-section__counter",
                                ref: k,
                                children: ["5", " héros pour correspondre à votre personnalité"] //v.length
                            })]
                        })]
                    })
                }
        },
        39224: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => W
            });
            var r = s(85893),
                a = s(67294),
                n = s(76914),
                i = s(52764),
                o = s(11595),
                c = s(13406),
                l = s(6341),
                u = s(62642),
                p = s(77834),
                d = s(7014),
                m = s(82125),
                f = s(99213),
                g = s(69400),
                h = s(87614),
                b = s(87187),
                y = s(40552),
                x = s(60086),
                v = s(46637),
                w = s(60078),
                _ = s(90904),
                k = s(53657),
                j = s(64042),
                T = s(31178),
                N = s(1211),
                C = s(6756),
                S = s(83646),
                E = s(58711),
                A = s(61159),
                O = s(61622),
                R = s(65557),
                L = s(4081),
                V = s(3557),
                P = s(37039),
                q = s(5757),
                M = s(35426),
                G = s(87430),
                I = s(99145),
                $ = s(149),
                D = s(62888),
                B = s(59288),
                Z = s(46200),
                F = s(11023);
            const H = {
                    [p.Ru.Desktop]: ["Soyez tenus informés des progrès du jeu en vous abonnant à nos réseaux sociaux."],
                    [p.Ru.Tablet]: ["Soyez tenus informés des progrès du jeu en vous abonnant à nos réseaux sociaux."],
                    [p.Ru.Mobile]: ["Soyez tenus informés des progrès du jeu en vous abonnant à nos réseaux sociaux."]
                },
                U = ["twitter", "discord", "telegram"],
                W = e => {
                    const t = (0, a.useRef)(null),
                        s = (0, a.useRef)(null),
                        W = (0, a.useRef)(null),
                        Q = (0, a.useRef)(null),
                        z = (0, a.useRef)(null),
                        X = (0, a.useRef)(null),
                        Y = (0, a.useRef)(null),
                        {
                            isDesktop: K,
                            isTablet: J,
                            type: ee
                        } = (0, p.uO)(),
                        te = (0, p.HQ)();
                    return (0, a.useEffect)((() => {
                        const e = K ? -160 : J ? -80 : -40,
                            s = K ? -260 : J ? -140 : -65,
                            r = u.default.timeline({
                                scrollTrigger: {
                                    trigger: t.current,
                                    endTrigger: t.current,
                                    start: "top top",
                                    end: "bottom top",
                                    scrub: 1
                                }
                            }),
                            a = {
                                duration: 1.5,
                                force3D: !1,
                                overwrite: !0
                            };
                        return r.to(Y.current, {
                            y: 500 * te,
                            ...a
                        }, 0).to(z.current, {
                            y: e * te,
                            ...a
                        }, 0).to(X.current, {
                            y: s * te,
                            ...a
                        }, 0), () => {
                            r.kill()
                        }
                    }), [K, J, te]), (0, r.jsxs)(c.G, {
                        className: "community-section",
                        divRef: t,
                        children: [(0, r.jsxs)(c.G, {
                            className: "community-section__parallax",
                            children: [(0, r.jsx)(o.Q, {
                                src: _,
                                className: "creepers"
                            }), (0, r.jsxs)(i.X, {
                                priority: null == e ? void 0 : e.loadingPrio,
                                alt: "Sky",
                                className: "sky",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: K ? m : J ? N : q
                                }), (0, r.jsx)("source", {
                                    type: "image/jpeg",
                                    srcSet: K ? d : J ? T : P
                                })]
                            }), (0, r.jsxs)(i.X, {
                                priority: null == e ? void 0 : e.loadingPrio,
                                alt: "Mountain",
                                className: "mountain",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: K ? g : J ? S : G
                                }), (0, r.jsx)("source", {
                                    type: "image/png",
                                    srcSet: K ? f : J ? C : M
                                })]
                            }), (0, r.jsxs)(i.X, {
                                priority: null == e ? void 0 : e.loadingPrio,
                                alt: "Three",
                                className: "hill",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: K ? b : J ? A : $
                                }), (0, r.jsx)("source", {
                                    type: "image/png",
                                    srcSet: K ? h : J ? E : I
                                })]
                            }), (0, r.jsxs)(i.X, {
                                priority: null == e ? void 0 : e.loadingPrio,
                                alt: "A void and neutral Beyond Truth walking in the grass facing the sunset in the middle of the valley",
                                className: "character",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: K ? x : J ? R : B
                                }), (0, r.jsx)("source", {
                                    type: "image/png",
                                    srcSet: K ? y : J ? O : D
                                })]
                            }), (0, r.jsxs)(i.X, {
                                priority: null == e ? void 0 : e.loadingPrio,
                                alt: "Flower",
                                className: "flower",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: K ? w : J ? V : F
                                }), (0, r.jsx)("source", {
                                    type: "image/png",
                                    srcSet: K ? v : J ? L : Z
                                })]
                            }), (0, r.jsxs)(c.G, {
                                className: "community-section__contents center-text parallax-item",
                                divRef: Y,
                                children: [(0, r.jsx)("h2", {
                                    className: "community-section__contents__title title-h1",
                                    ref: s,
                                    children: "Rejoindre la communauté Beyond Truth"
                                }), (0, r.jsx)("p", {
                                    className: "community-section__contents__text desc-1",
                                    ref: W,
                                    children: H[ee].map(((e, t) => (0, r.jsx)(l.r, {
                                        className: "desc-1 anim-span color-white",
                                        children: e
                                    }, t)))
                                }), (0, r.jsx)(c.G, {
                                    className: "community-section__contents__socials",
                                    divRef: Q,
                                    children: Object.entries(n.h.socials).map(((e, t) => {
                                        let [s, a] = e;
                                        if (U.some((e => s === e))) return (0, r.jsx)("a", {
                                            href: a.link,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            className: "social-icon__link",
                                            children: (0, r.jsx)(o.Q, {
                                                src: a.imgSrc,
                                                className: "social-icon"
                                            })
                                        }, t)
                                    }))
                                })]
                            })]
                        }), (0, r.jsx)(i.X, {
                            priority: (null == e ? void 0 : e.loadingPrio) + 1,
                            src: k,
                            className: "grass parallax-item",
                            ref: z
                        }), (0, r.jsx)(i.X, {
                            priority: (null == e ? void 0 : e.loadingPrio) + 1,
                            src: j,
                            className: "rocks parallax-item",
                            ref: X
                        })]
                    })
                }
        },
        40152: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => m
            });
            var r = s(85893),
                a = s(67294),
                n = s(13406),
                i = s(15877),
                o = s(62642),
                c = s(58950),
                l = s(43025),
                u = s(5143),
                p = s(77834),
                d = s(21964);
            const m = e => {
                const {
                    title: t,
                    btnTitle: s,
                    btnLink: m,
                    lines: f = !0,
                    btnDisabled: g
                } = e, h = (0, a.useRef)(null), b = (0, a.useRef)(null), y = (0, a.useRef)(null), x = (0, a.useRef)(null), v = (0, a.useRef)(null), w = (0, p.HQ)();
                return (0, a.useEffect)((() => {
                    const e = new l.C(y.current, {
                            type: "words, chars",
                            charsClass: "single-char title-h1"
                        }),
                        t = e.chars,
                        s = new l.C(v.current, {
                            type: "chars",
                            charsClass: "single-char btn-1"
                        }),
                        r = s.chars;
                    o.default.set(t, {
                        autoAlpha: 0,
                        y: 15 * w
                    }), o.default.set(x.current, {
                        autoAlpha: 0
                    }), o.default.set(r, {
                        y: 15 * w,
                        autoAlpha: 0
                    });
                    const a = c.i.create({
                        trigger: h.current,
                        endTrigger: h.current,
                        start: "top bottom-=20%",
                        end: "bottom top",
                        onEnter: () => {
                            o.default.to(t, {
                                y: 0,
                                duration: (0, u.T)(60),
                                stagger: (0, u.T)(1),
                                ease: u.V.bouncyEase
                            }), o.default.to(t, {
                                autoAlpha: 1,
                                duration: (0, u.T)(40),
                                stagger: (0, u.T)(1),
                                ease: u.V.bouncyEase
                            }), o.default.to(x.current, {
                                autoAlpha: 1,
                                duration: (0, u.T)(60),
                                ease: u.V.defaultEase,
                                delay: (0, u.T)(41)
                            }), o.default.to(r, {
                                y: 0,
                                duration: (0, u.T)(60),
                                stagger: (0, u.T)(1),
                                ease: u.V.bouncyEase,
                                delay: (0, u.T)(41)
                            }), o.default.to(r, {
                                autoAlpha: 1,
                                duration: (0, u.T)(40),
                                stagger: (0, u.T)(1),
                                ease: u.V.bouncyEase,
                                delay: (0, u.T)(41)
                            })
                        }
                    });
                    return () => {
                        a.kill(!0), e.revert(), s.revert()
                    }
                }), [w]), (0, r.jsx)(n.G, {
                    className: "cta-section",
                    divRef: h,
                    children: (0, r.jsx)(n.G, {
                        className: "container",
                        children: (0, r.jsxs)(n.G, {
                            className: "animation-wrapper",
                            divRef: b,
                            children: [f && (0, r.jsx)(d.Z, {
                                type: "short-long"
                            }), (0, r.jsxs)(n.G, {
                                className: "cta-section__contents",
                                children: [(0, r.jsx)("h2", {
                                    className: "title-h1 cta-section__title",
                                    ref: y,
                                    children: t
                                }), (0, r.jsx)(i.Z, {
                                    link: m,
                                    className: "cta-section__btn",
                                    ref: x,
                                    title: s,
                                    textRef: v,
                                    disabled: g
                                })]
                            }), f && (0, r.jsx)(d.Z, {
                                type: "long-short"
                            })]
                        })
                    })
                })
            }
        },
        49618: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => b
            }), s(26699);
            var r = s(85893),
                a = s(67294),
                n = s(13406),
                i = s(52764),
                o = s(62642),
                c = s(58950),
                l = s(43025),
                u = s(76914),
                p = s(24093),
                d = s(77834),
                m = s(51170),
                f = s(5143),
                g = s(6341);
            const h = {
                    desktop: ["Le destin vous a réuni avec un groupe de survivants suite à un accident aérien, un naufrage ou d'autres scénarios tout aussi inattendus. Mais ici, sur cette île, la survie est tout sauf garantie, et la confiance est une denrée rare."],
                    tablet: ["Le destin vous a réuni avec un groupe de survivants suite à un accident aérien, un naufrage ou d'autres scénarios tout aussi inattendus. Mais ici, sur cette île, la survie est tout sauf garantie, et la confiance est une denrée rare."],
                    mobile: ["Le destin vous a réuni avec un groupe de survivants suite à un accident aérien, un naufrage ou d'autres scénarios tout aussi inattendus. Mais ici, sur cette île, la survie est tout sauf garantie, et la confiance est une denrée rare."]
                },
                b = e => {
                    const t = (0, a.useRef)(null),
                        s = (0, a.useRef)(null),
                        b = (0, a.useRef)(null),
                        y = (0, a.useRef)(null),
                        x = (0, a.useRef)(null),
                        v = (0, a.useRef)([]);
                    v.current = [];
                    const w = e => {
                            e && !v.current.includes(e) && v.current.push(e)
                        },
                        _ = (0, d.HQ)(),
                        {
                            isDesktop: k,
                            isTablet: j,
                            isMobile: T
                        } = (0, d.uO)(),
                        N = (0, a.useMemo)((() => new m.ku("GAMEPLAY FEATURES")), []);
                    return (0, a.useEffect)((() => {
                        if (!k) return;
                        const e = o.gsap.utils.toArray(t.current.querySelectorAll(".text-block")),
                            s = o.gsap.utils.toArray(".gameplay-image"),
                            r = o.gsap.timeline({
                                smoothChildTiming: !0
                            });
                        e.forEach(((e, t) => {
                            const r = e.querySelector(".text-block__title"),
                                a = e.querySelector(".text-block__desc"),
                                n = c.i.create({
                                    trigger: `#step-${t}`,
                                    endTrigger: `#step-${t}`,
                                    start: () => 0 === t ? `top-=${200*_} top+=${400*_}` : `top-=${100*_} top+=${400*_}`,
                                    end: () => 0 === t ? `bottom+=${80*_} top+=${400*_}` : `bottom+=${180*_} top+=${400*_}`,
                                    onEnter: () => {
                                        o.gsap.to([r, a], {
                                            color: "white",
                                            duration: 1,
                                            immediateRender: !1
                                        }), 0 !== t && o.gsap.fromTo(s[t], {
                                            scale: 1.2,
                                            autoAlpha: 0
                                        }, {
                                            autoAlpha: 1,
                                            scale: 1,
                                            duration: (0, f.T)(60),
                                            ease: f.V.twoSidedEase
                                        })
                                    },
                                    onLeave: () => {
                                        o.gsap.to([r, a], {
                                            color: "#305b3f",
                                            duration: 1,
                                            immediateRender: !1
                                        }), o.gsap.fromTo(s[t], {
                                            scale: 1,
                                            autoAlpha: 1
                                        }, {
                                            autoAlpha: 0,
                                            scale: 1.2,
                                            duration: (0, f.T)(60),
                                            ease: f.V.twoSidedEase
                                        })
                                    },
                                    onEnterBack: () => {
                                        o.gsap.to([r, a], {
                                            color: "white",
                                            duration: 1,
                                            immediateRender: !1
                                        }), o.gsap.fromTo(s[t], {
                                            scale: 1.2,
                                            autoAlpha: 0
                                        }, {
                                            autoAlpha: 1,
                                            scale: 1,
                                            duration: (0, f.T)(60),
                                            ease: f.V.twoSidedEase
                                        })
                                    },
                                    onLeaveBack: () => {
                                        0 !== t && (o.gsap.to([r, a], {
                                            color: "#305b3f",
                                            duration: 1,
                                            immediateRender: !1
                                        }), o.gsap.fromTo(s[t], {
                                            scale: 1,
                                            autoAlpha: 1
                                        }, {
                                            autoAlpha: 0,
                                            scale: 1.2,
                                            duration: (0, f.T)(60),
                                            ease: f.V.twoSidedEase
                                        }))
                                    }
                                });
                            N.add((() => n.kill(!0)))
                        }));
                        const a = c.i.create({
                            trigger: "#step-0",
                            endTrigger: "#step-3",
                            start: () => "top top+=" + 250 * _,
                            end: () => "bottom top+=" + 450 * _,
                            pin: x.current,
                            pinType: "fixed",
                            pinSpacing: !1,
                            animation: r
                        });
                        return N.add((() => a.kill(!0))), () => N.dispose(!0)
                    }), [_, k, N]), (0, a.useEffect)((() => {
                        if (!k) return;
                        const e = new l.C(s.current, {
                                type: "words, chars",
                                charsClass: "single-char title-h1"
                            }),
                            r = e.chars;
                        o.gsap.set(t.current.querySelectorAll(".gameplay-image")[0], {
                            scale: 1.2,
                            autoAlpha: 1
                        }), o.gsap.set(t.current.querySelectorAll(".text-block")[0], {
                            y: 100 * _,
                            color: "#305b3f"
                        }), o.gsap.set(r, {
                            autoAlpha: 0,
                            y: 15 * _
                        }), o.gsap.set(t.current.querySelectorAll(".anim-span"), {
                            autoAlpha: 0,
                            y: 50 * _
                        });
                        const a = c.i.create({
                            trigger: t.current,
                            endTrigger: t.current,
                            start: "top center",
                            end: "bottom bottom",
                            onEnter: () => {
                                o.gsap.to(t.current.querySelectorAll(".gameplay-image")[0], {
                                    scale: 1,
                                    duration: (0, f.T)(170),
                                    ease: f.V.twoSidedEase
                                }), o.gsap.to(r, {
                                    autoAlpha: 1,
                                    duration: (0, f.T)(40),
                                    stagger: (0, f.T)(1),
                                    ease: f.V.bouncyEase
                                }), o.gsap.to(r, {
                                    y: 0,
                                    duration: (0, f.T)(60),
                                    stagger: (0, f.T)(1),
                                    ease: f.V.bouncyEase
                                }), o.gsap.to(t.current.querySelectorAll(".anim-span"), {
                                    autoAlpha: 1,
                                    y: 0,
                                    duration: (0, f.T)(40),
                                    stagger: (0, f.T)(2),
                                    ease: f.V.defaultEase,
                                    delay: (0, f.T)(16)
                                }), o.gsap.to(t.current.querySelectorAll(".text-block")[0], {
                                    y: 0,
                                    duration: (0, f.T)(140),
                                    ease: f.V.defaultEase,
                                    delay: (0, f.T)(17)
                                }), o.gsap.to(t.current.querySelectorAll(".text-block .text-block__title")[0], {
                                    color: "#ffffff",
                                    duration: (0, f.T)(60),
                                    ease: f.V.defaultEase,
                                    delay: (0, f.T)(17)
                                }), o.gsap.to(t.current.querySelectorAll(".text-block .text-block__desc")[0], {
                                    color: "#ffffff",
                                    duration: (0, f.T)(60),
                                    ease: f.V.defaultEase,
                                    delay: (0, f.T)(17)
                                })
                            }
                        });
                        return () => {
                            a.kill(!0), e.revert()
                        }
                    }), [_, k]), (0, a.useEffect)((() => {
                        if (!j && !T) return;
                        const e = new l.C(s.current, {
                                type: "words, chars",
                                charsClass: "single-char title-h1"
                            }),
                            r = e.chars,
                            a = t.current.querySelectorAll(".anim-span"),
                            n = t.current.querySelectorAll(".gameplay-feature__image"),
                            i = o.gsap.utils.toArray(".gameplay-feature");
                        o.gsap.set(n, {
                            scale: 1.2,
                            autoAlpha: 1
                        }), o.gsap.set(r, {
                            autoAlpha: 0,
                            y: 15 * _
                        }), o.gsap.set(a, {
                            autoAlpha: 0,
                            y: 50 * _
                        });
                        const u = c.i.create({
                            trigger: t.current,
                            endTrigger: t.current,
                            start: "top center",
                            end: "bottom bottom",
                            onEnter: () => {
                                o.gsap.to(r, {
                                    y: 0,
                                    duration: (0, f.T)(60),
                                    stagger: (0, f.T)(1),
                                    ease: f.V.bouncyEase
                                }), o.gsap.to(r, {
                                    autoAlpha: 1,
                                    duration: (0, f.T)(40),
                                    stagger: (0, f.T)(1),
                                    ease: f.V.bouncyEase
                                }), o.gsap.to(a, {
                                    autoAlpha: 1,
                                    y: 0,
                                    duration: (0, f.T)(40),
                                    stagger: (0, f.T)(2),
                                    ease: f.V.defaultEase,
                                    delay: (0, f.T)(41)
                                })
                            }
                        });
                        return N.add((() => u.kill(!0))), N.add((() => e.revert())), i.forEach(((e, t) => {
                            const s = e.querySelector(".gameplay-feature__image"),
                                r = e.querySelector(".gameplay-feature__title"),
                                a = new l.C(r, {
                                    type: "words, chars",
                                    charsClass: "single-char title-h2"
                                }),
                                n = a.chars,
                                i = Array.from(e.querySelectorAll(".gameplay-feature__desc"));
                            o.gsap.set(i, {
                                color: "#305b3f",
                                y: 30 * _,
                                autoAlpha: 1
                            }), o.gsap.set(n, {
                                autoAlpha: 0,
                                y: 15 * _
                            });
                            const u = c.i.create({
                                trigger: `.gameplay-feature-${t+1}`,
                                endTrigger: `.gameplay-feature-${t+1}`,
                                start: "top bottom-=" + 300 * _,
                                end: "bottom bottom",
                                onEnter: () => {
                                    o.gsap.to(s, {
                                        scale: 1,
                                        duration: (0, f.T)(170),
                                        ease: f.V.twoSidedEase,
                                        delay: (0, f.T)(1)
                                    }), o.gsap.to(n, {
                                        y: 0,
                                        duration: (0, f.T)(60),
                                        stagger: (0, f.T)(1),
                                        ease: f.V.bouncyEase,
                                        delay: (0, f.T)(1)
                                    }), o.gsap.to(n, {
                                        autoAlpha: 1,
                                        duration: (0, f.T)(40),
                                        stagger: (0, f.T)(1),
                                        ease: f.V.bouncyEase,
                                        delay: (0, f.T)(1)
                                    }), o.gsap.to(i, {
                                        y: 0,
                                        autoAlpha: 1,
                                        color: "#ffffff",
                                        duration: (0, f.T)(40),
                                        stagger: (0, f.T)(2),
                                        ease: f.V.defaultEase,
                                        delay: (0, f.T)(41)
                                    })
                                }
                            });
                            N.add((() => u.kill(!0))), N.add((() => a.revert()))
                        })), () => N.dispose()
                    }), [_, k, j, T, N]), (0, r.jsx)(n.G, {
                        className: "gameplay-section",
                        divRef: t,
                        children: (0, r.jsxs)(n.G, {
                            className: "container",
                            children: [(0, r.jsxs)(n.G, {
                                className: "gameplay-section__contents",
                                children: [(0, r.jsx)("h2", {
                                    className: "title-h1 gameplay-section__title",
                                    ref: s,
                                    children: " Survivre ou trahir"
                                }), (0, r.jsx)("p", {
                                    className: "desc-1 gameplay-section__desc",
                                    ref: b,
                                    children: k ? h.desktop.map(((e, t) => (0, r.jsx)(g.r, {
                                        className: "anim-span desc-1 color-green",
                                        children: e
                                    }, t))) : j ? h.tablet.map(((e, t) => (0, r.jsx)(g.r, {
                                        className: "anim-span desc-1 color-green",
                                        children: e
                                    }, t))) : h.mobile.map(((e, t) => (0, r.jsx)(g.r, {
                                        className: "anim-span desc-1 color-green",
                                        children: e
                                    }, t)))
                                })]
                            }), k && (0, r.jsxs)(n.G, {
                                className: "gameplay-section__scroll-area",
                                divRef: y,
                                children: [(0, r.jsx)(n.G, {
                                    className: "images-wrap",
                                    divRef: x,
                                    children: u.h.gameplaySectionList.map(((t, s) => (0, r.jsxs)(i.X, {
                                        priority: e.loadingPrio,
                                        alt: null == t ? void 0 : t.imgAlt,
                                        className: `gameplay-image gameplay-image-${s+1}`,
                                        lazyHooks: p.b.Hooks.NoOp,
                                        children: [t.imgSrcWebp && (0, r.jsx)("source", {
                                            type: "image/webp",
                                            srcSet: t.imgSrcWebp
                                        }), (0, r.jsx)("source", {
                                            type: "image/jpeg",
                                            srcSet: t.imgSrcJpg
                                        })]
                                    }, s)))
                                }), (0, r.jsx)(n.G, {
                                    className: "text-wrap",
                                    children: u.h.gameplaySectionList.map(((e, t) => (0, r.jsxs)("div", {
                                        className: `text-block text-block-${t+1}`,
                                        id: `step-${t}`,
                                        ref: w,
                                        children: [(0, r.jsx)("h2", {
                                            className: "title-h2 text-block__title anim-text",
                                            children: e.title
                                        }), (0, r.jsx)("p", {
                                            className: "desc-2 text-block__desc anim-text",
                                            children: e.desc.desktop
                                        })]
                                    }, t)))
                                })]
                            }), (j || T) && (0, r.jsx)(n.G, {
                                className: "gameplay-section__features",
                                children: u.h.gameplaySectionList.map(((t, s) => (0, r.jsxs)(n.G, {
                                    className: `gameplay-feature gameplay-feature-${s+1}`,
                                    children: [(0, r.jsx)(n.G, {
                                        className: "gameplay-feature__image-wrap",
                                        children: (0, r.jsxs)(i.X, {
                                            priority: null == e ? void 0 : e.loadingPrio,
                                            alt: `Gameplay: ${t.title}`,
                                            className: `gameplay-feature__image gameplay-feature__image-${s+1}`,
                                            children: [t.imgSrcWebp && (0, r.jsx)("source", {
                                                type: "image/webp",
                                                srcSet: t.imgSrcWebp
                                            }), (0, r.jsx)("source", {
                                                type: "image/jpeg",
                                                srcSet: t.imgSrcJpg
                                            })]
                                        }, s)
                                    }), (0, r.jsxs)(n.G, {
                                        className: "gameplay-feature__text",
                                        children: [(0, r.jsx)("h2", {
                                            className: "title-h2 gameplay-feature__title",
                                            children: t.title
                                        }), j && t.desc.tablet.map(((e, t) => (0, r.jsx)("p", {
                                            className: "desc-2 gameplay-feature__desc",
                                            children: e
                                        }, t))), T && t.desc.mobile.map(((e, t) => (0, r.jsx)("p", {
                                            className: "desc-2 gameplay-feature__desc",
                                            children: e
                                        }, t)))]
                                    })]
                                }, s)))
                            })]
                        })
                    })
                }
        },
        75629: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => z
            });
            var r = s(85893),
                a = s(67294),
                n = s(11595),
                i = s(13406),
                o = s(76914),
                c = s(62642),
                l = s(77834),
                u = s(52764),
                p = s(18274),
                d = s(49412),
                m = s(50802),
                f = s(67906),
                g = s(65193),
                h = s(95077),
                b = s(41238),
                y = s(45380),
                x = s(82385),
                v = s(4121),
                w = s(28200),
                _ = s(23781),
                k = s(65418),
                j = s(35933),
                T = s(29612),
                N = s(39237),
                C = s(75868),
                S = s(32362),
                E = s(23771),
                A = s(454),
                O = s(88729),
                R = s(86365),
                L = s(52944),
                V = s(70676),
                P = s(84142),
                q = s(65399),
                M = s(16664),
                G = s(83842),
                I = s(80509),
                $ = s(9708),
                D = s(41500),
                B = s(96959),
                Z = s(79640),
                F = s(62544),
                H = s(29482),
                U = s(9190);
            const W = ["twitter", "discord", "telegram"],
                Q = {
                    [l.Ru.Desktop]: _,
                    [l.Ru.Tablet]: Z,
                    [l.Ru.Mobile]: F
                },
                z = () => {
                    const e = (0, a.useRef)(null),
                        t = (0, a.useRef)(null),
                        s = (0, a.useRef)(null),
                        _ = (0, a.useRef)(null),
                        {
                            isDesktop: Z,
                            isTablet: F,
                            isMobile: z,
                            type: X
                        } = (0, l.uO)(),
                        Y = (0, l.HQ)(),
                        K = Q[X];
                    return (0, a.useEffect)((() => {
                        const r = z ? 250 : 500,
                            a = Z ? 100 : F ? 40 : 30,
                            n = z ? -10 : 175,
                            i = z ? 60 : 250,
                            o = z ? 40 : 125,
                            l = c.default.timeline({
                                scrollTrigger: {
                                    trigger: e.current,
                                    endTrigger: e.current,
                                    start: "top top",
                                    end: "bottom top",
                                    scrub: 1
                                }
                            }),
                            u = {
                                duration: 3,
                                force3D: !1,
                                overwrite: !0
                            };
                        return l.to(s.current, {
                            y: r * Y,
                            ...u
                        }, 0).to(t.current.querySelector(".parallax-item.mountains"), {
                            y: n * Y,
                            ...u
                        }, 0).to(t.current.querySelector(".parallax-item.cliff"), {
                            y: i * Y,
                            ...u
                        }, 0).to(t.current.querySelector(".parallax-item.forest"), {
                            y: o * Y,
                            ...u
                        }, 0).to(e.current.querySelector(".parallax-item.grass"), {
                            y: -a * Y,
                            ...u
                        }, 0).to(e.current.querySelector(".parallax-item.rocks"), {
                            y: -40 * Y,
                            ...u
                        }, 0), () => {
                            l.scrollTrigger.kill(!0)
                        }
                    }), [Y, Z, F, z]), (0, r.jsxs)(i.G, {
                        className: "hero-section",
                        divRef: e,
                        children: [(0, r.jsx)(n.Q, {
                            src: K,
                            className: "palms-top"
                        }), (0, r.jsxs)(i.G, {
                            className: "hero-section__parallax",
                            divRef: t,
                            children: [(0, r.jsxs)(u.X, {
                                priority: 0,
                                alt: "Sky",
                                className: "sky parallax-item",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: Z ? m : F ? j : V
                                }), (0, r.jsx)("source", {
                                    type: "image/jpeg",
                                    srcSet: Z ? d : F ? k : L
                                })]
                            }), (0, r.jsxs)(u.X, {
                                priority: 0,
                                alt: "Sun",
                                className: "sun parallax-item",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: Z ? g : F ? N : q
                                }), (0, r.jsx)("source", {
                                    type: "image/png",
                                    srcSet: Z ? f : F ? T : P
                                })]
                            }), (0, r.jsxs)(u.X, {
                                priority: 0,
                                alt: "Mountains",
                                className: "mountains parallax-item",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: Z ? b : F ? S : G
                                }), (0, r.jsx)("source", {
                                    type: "image/png",
                                    srcSet: Z ? h : F ? C : M
                                })]
                            }), (0, r.jsxs)(i.G, {
                                className: "hero-section__contents parallax-item",
                                divRef: s,
                                children: [(0, r.jsx)(i.G, {
                                    className: "logo-wrap",
                                    children: (0, r.jsx)(u.X, {
                                        priority: 0,
                                        src: p,
                                        alt: "Main logo"
                                    })
                                }), (0, r.jsx)(i.G, {
                                    className: "hero-section__contents__socials",
                                    divRef: _,
                                    children: Object.entries(o.h.socials).map(((e, t) => {
                                        let [s, a] = e;
                                        if (W.some((e => s === e))) return (0, r.jsx)("a", {
                                            href: a.link,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            className: "social-icon__link",
                                            children: (0, r.jsx)(n.Q, {
                                                src: a.imgSrc,
                                                className: "social-icon"
                                            })
                                        }, t)
                                    }))
                                })]
                            }), (0, r.jsxs)(u.X, {
                                priority: 1,
                                alt: "Forest",
                                className: "forest parallax-item",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: Z ? x : F ? A : $
                                }), (0, r.jsx)("source", {
                                    type: "image/png",
                                    srcSet: Z ? y : F ? E : I
                                })]
                            }), (0, r.jsxs)(u.X, {
                                priority: 1,
                                alt: "",
                                className: "cliff parallax-item",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: Z ? w : F ? R : B
                                }), (0, r.jsx)("source", {
                                    type: "image/png",
                                    srcSet: Z ? v : F ? O : D
                                })]
                            })]
                        }), (0, r.jsx)(u.X, {
                            priority: 1,
                            src: H,
                            className: "grass parallax-item"
                        }), (0, r.jsx)(u.X, {
                            priority: 1,
                            src: U,
                            className: "rocks parallax-item"
                        })]
                    })
                }
        },
        89941: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => h
            });
            var r = s(85893),
                a = s(67294),
                n = s(13406),
                i = s(62642),
                o = s(87942),
                c = s(51074),
                l = s(61803),
                u = s(58950),
                p = s(77834),
                d = s(5143),
                m = s(79632),
                f = s(31413);
            const g = {
                    loop: !1,
                    autoplay: !1,
                    renderer: "canvas"
                },
                h = () => {
                    const [e, t] = (0, a.useState)(!1), [s, h] = (0, a.useState)(o), b = (0, a.useRef)(null), y = (0, a.useRef)(null), x = (0, a.useRef)(null), v = (0, p.HQ)(), {
                        isDesktop: w,
                        isTablet: _
                    } = (0, p.uO)();
                    return (0, a.useEffect)((() => {
                        h(w ? o : _ ? c : l)
                    }), [w, _]), (0, a.useEffect)((() => {
                        i.default.set(y.current, {
                            y: 20 * v,
                            autoAlpha: 0
                        }), i.default.set(x.current, {
                            y: -20 * v,
                            autoAlpha: 0
                        });
                        const e = u.i.create({
                            trigger: b.current,
                            endTrigger: b.current,
                            start: "top bottom-=30%",
                            end: "bottom top+=30%",
                            onEnter: () => {
                                i.default.to(y.current, {
                                    y: 0,
                                    autoAlpha: 1,
                                    ease: d.V.infiniteCombEase,
                                    duration: (0, d.T)(54, 30),
                                    delay: (0, d.T)(81, 30)
                                }), i.default.to(x.current, {
                                    y: 0,
                                    autoAlpha: 1,
                                    ease: d.V.infiniteCombEase,
                                    duration: (0, d.T)(54, 30),
                                    delay: (0, d.T)(81, 30)
                                }), t(!0)
                            }
                        });
                        return () => e.kill()
                    }), [w, v]), (0, r.jsxs)(n.G, {
                        className: "combinations-section",
                        divRef: b,
                        children: [(0, r.jsx)(n.G, {
                            className: "container",
                            children: (0, r.jsxs)(n.G, {
                                className: "combinations-section__contents",
                                children: [(0, r.jsx)("h2", {
                                    className: "combinations-section__title title-h1",
                                    ref: y,
                                    children: "Des monstres inédits"
                                }), (0, r.jsx)("p", {
                                    className: "combinations-section__desc desc-1 color-white",
                                    ref: x,
                                    children: "Découvrez les monstres de l'île, alliés ambivalents qui détiennent les clés de votre survie. Leurs énigmes et leurs trésors volés vous guideront à travers les mystères de ce monde hostile."
                                })]
                            })
                        }), (0, r.jsx)(f.Z, {
                            lazyPriority: 4,
                            children: (0, r.jsx)(m.c, {
                                config: g,
                                path: s,
                                playing: e,
                                className: "lottie-wrapper",
                                tempMasks: !0
                            })
                        })]
                    })
                }
        },
        41448: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => T
            });
            var r = s(85893),
                a = s(67294),
                n = s(13406),
                i = s(6341),
                o = s(62642),
                c = s(58950),
                l = s(43025),
                u = s(15877),
                p = s(77834),
                d = s(5143),
                m = s(51170),
                f = s(19399),
                g = s(60600),
                h = s(60455),
                b = s(15920),
                y = s(8811),
                x = s(56e3),
                v = s(89350),
                w = s(63654),
                _ = s(46903),
                k = s(52764);
            const j = {
                    desktop: {
                        //Notre équipe se distingue par sa diversité de compétences et d'expériences, alliant autodidaxie, créativité et passion pour l'innovation technologique.
                        p1: ["Actuellement, notre équipe se compose de cinq étudiants à l'EPITA, parmi lesquels trois sont des développeurs actifs, un est spécialisé en modélisation, et un autre est notre directeur artistique."],
                        p2: [""]
                    },
                    tablet: {
                        p1: ["Actuellement, notre équipe se compose de cinq étudiants à l'EPITA, parmi lesquels trois sont des développeurs actifs, un est spécialisé en modélisation, et un autre est notre directeur artistique."],
                        p2: [""]
                    },
                    mobile: {
                        p1: ["Actuellement, notre équipe se compose de cinq étudiants à l'EPITA, parmi lesquels trois sont des développeurs actifs, un est spécialisé en modélisation, et un autre est notre directeur artistique."],
                        p2: [""]
                    }
                },
                T = e => {
                    const t = (0, a.useRef)(null),
                        s = (0, a.useRef)(null),
                        T = (0, a.useRef)(null),
                        N = (0, a.useRef)(null),
                        C = (0, a.useRef)(null),
                        S = (0, a.useRef)(null),
                        E = (0, a.useRef)(null),
                        A = (0, a.useRef)(null),
                        O = (0, a.useRef)(null),
                        R = (0, p.Gc)(),
                        {
                            isDesktop: L,
                            isTablet: V
                        } = (0, p.uO)(),
                        P = (0, p.HQ)(),
                        q = (0, a.useMemo)((() => new m.ku), []);
                    return (0, a.useEffect)((() => {
                        const e = new l.C(T.current, {
                                type: "chars",
                                charsClass: "single-char title-h1"
                            }),
                            r = e.chars,
                            a = new l.C(O.current, {
                                type: "chars",
                                charsClass: "single-char btn-1"
                            }),
                            n = a.chars,
                            i = t.current.querySelectorAll(".anim-span");
                        L ? (o.default.set(C.current, {
                            y: 115 * P
                        }), o.default.set(S.current, {
                            y: -108 * P
                        })) : V ? (o.default.set(C.current, {
                            y: 60 * P
                        }), o.default.set(S.current, {
                            y: -60 * P
                        })) : (o.default.set(C.current, {
                            y: 29 * P
                        }), o.default.set(S.current, {
                            y: -24 * P
                        })), o.default.set(E.current, {
                            scale: 1.2
                        }), o.default.set(s.current, {
                            y: 15 * P,
                            autoAlpha: 0
                        }), o.default.set(r, {
                            y: 15 * P,
                            autoAlpha: 0
                        }), o.default.set(i, {
                            y: 50 * P,
                            autoAlpha: 0
                        }), o.default.set(A.current, {
                            autoAlpha: 0
                        }), o.default.set(n, {
                            y: 15 * P,
                            autoAlpha: 0
                        });
                        const u = c.i.create({
                            trigger: t.current,
                            endTrigger: t.current,
                            start: "top bottom-=" + 350 * P,
                            end: "bottom top",
                            onEnter: () => {
                                o.default.to(C.current, {
                                    y: 0,
                                    duration: (0, d.T)(120),
                                    ease: d.V.twoSidedEase
                                }), o.default.to(E.current, {
                                    scale: 1,
                                    duration: (0, d.T)(160),
                                    ease: d.V.twoSidedEase
                                }), o.default.to(S.current, {
                                    y: 0,
                                    duration: (0, d.T)(120),
                                    ease: d.V.twoSidedEase
                                })
                            }
                        });
                        q.add((() => u.kill(!0)));
                        const p = c.i.create({
                            trigger: N.current,
                            endTrigger: N.current,
                            start: "top bottom-=" + 320 * P,
                            end: "bottom top",
                            onEnter: () => {
                                o.default.to(s.current, {
                                    y: 0,
                                    duration: (0, d.T)(60),
                                    stagger: (0, d.T)(1),
                                    ease: d.V.bouncyEase
                                }), o.default.to(s.current, {
                                    autoAlpha: 1,
                                    duration: (0, d.T)(40),
                                    stagger: (0, d.T)(1),
                                    ease: d.V.bouncyEase
                                }), o.default.to(r, {
                                    y: 0,
                                    duration: (0, d.T)(60),
                                    stagger: (0, d.T)(1),
                                    ease: d.V.bouncyEase,
                                    delay: (0, d.T)(1)
                                }), o.default.to(r, {
                                    autoAlpha: 1,
                                    duration: (0, d.T)(40),
                                    stagger: (0, d.T)(1),
                                    ease: d.V.bouncyEase,
                                    delay: (0, d.T)(1)
                                }), o.default.to(i, {
                                    y: 0,
                                    autoAlpha: 1,
                                    duration: (0, d.T)(40),
                                    stagger: (0, d.T)(2),
                                    ease: d.V.defaultEase,
                                    delay: (0, d.T)(42)
                                }), o.default.to(A.current, {
                                    autoAlpha: 1,
                                    duration: (0, d.T)(60),
                                    ease: d.V.defaultEase,
                                    delay: (0, d.T)(43)
                                }), o.default.to(n, {
                                    y: 0,
                                    duration: (0, d.T)(60),
                                    stagger: (0, d.T)(1),
                                    ease: d.V.bouncyEase,
                                    delay: (0, d.T)(43)
                                }), o.default.to(n, {
                                    autoAlpha: 1,
                                    duration: (0, d.T)(40),
                                    stagger: (0, d.T)(1),
                                    ease: d.V.bouncyEase,
                                    delay: (0, d.T)(43)
                                })
                            }
                        });
                        return q.add((() => p.kill(!0))), q.add((() => e.revert())), q.add((() => a.revert())), () => q.dispose()
                    }), [P, L, V, R, q]), (0, r.jsxs)(n.G, {
                        className: "token-section",
                        divRef: t,
                        children: [(0, r.jsxs)(n.G, {
                            className: "token-section__image",
                            children: [(0, r.jsx)(n.G, {
                                className: "leaves-top__wrap",
                                divRef: C,
                                children: (0, r.jsx)(k.X, {
                                    priority: e.loadingPrio ? e.loadingPrio + 1 : 0,
                                    src: w,
                                    className: "leaves-top"
                                })
                            }), (0, r.jsxs)(k.X, {
                                priority: null == e ? void 0 : e.loadingPrio,
                                alt: "Main character on a path near some ruins, putting a coin in the basket that his frost Beyond Truth is holding",
                                ref: E,
                                className: "main-img",
                                children: [(0, r.jsx)("source", {
                                    type: "image/webp",
                                    srcSet: L ? h : V ? y : v
                                }), (0, r.jsx)("source", {
                                    type: "image/jpeg",
                                    srcSet: L ? g : V ? b : x
                                })]
                            }), (0, r.jsx)(n.G, {
                                className: "leaves-bottom__wrap",
                                divRef: S,
                                children: (0, r.jsx)(k.X, {
                                    priority: e.loadingPrio ? e.loadingPrio + 1 : 0,
                                    src: _,
                                    className: "leaves-bottom"
                                })
                            })]
                        }), (0, r.jsx)(n.G, {
                            className: "container",
                            children: (0, r.jsxs)(n.G, {
                                className: "token-section__contents",
                                children: [(0, r.jsxs)(n.G, {
                                    className: "token-section__title-wrap",
                                    children: [(0, r.jsx)(n.G, {
                                        className: "token-img",
                                        ref: s,
                                        children: (0, r.jsx)(k.X, {
                                            priority: e.loadingPrio ? e.loadingPrio + 2 : 0,
                                            src: f,
                                            alt: "Team logo"
                                        })
                                    }), (0, r.jsx)("h2", {
                                        className: "token-section__contents__title title-h1 center-text",
                                        ref: T,
                                        children: "Notre Équipe"
                                    })]
                                }), (0, r.jsxs)(n.G, {
                                    className: "token-section__desc-wrap",
                                    divRef: N,
                                    children: [(0, r.jsx)("p", {
                                        className: "token-section__desc desc-1",
                                        children: j[R.name.toLocaleLowerCase()].p1.map(((e, t) => (0, r.jsx)(i.r, {
                                            className: "desc-1 anim-span color-green",
                                            children: e
                                        }, t)))
                                    }), (0, r.jsx)("p", {
                                        className: "token-section__desc desc-1",
                                        children: j[R.name.toLocaleLowerCase()].p2.map(((e, t) => (0, r.jsx)(i.r, {
                                            className: "desc-1 anim-span color-green",
                                            children: e
                                        }, t)))
                                    }), (0, r.jsx)(u.Z, {
                                        link: "/about",
                                        title: "Découvrir",
                                        className: "token-section__btn",
                                        textRef: O,
                                        ref: A
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        5143: (e, t, s) => {
            "use strict";
            s.d(t, {
                T: () => p,
                V: () => u
            });
            var r = s(62642),
                a = s(7310);
            r.default.registerPlugin(a.Z);
            const n = a.Z.create("default", "0.17, 0.17, 0.45, 1.00"),
                i = a.Z.create("reverse", "0.55, 0.00, 0.83, 0.83"),
                o = a.Z.create("two-sided", "0.63, 0.00, 0.43, 1.00"),
                c = a.Z.create("extra", "0.59, 0.00, 0.45, 1.00"),
                l = a.Z.create("bouncy", "M0,0 C0,0 0.23,0.136 0.326,0.382 0.421,0.625 0.462,1.238 0.608,1.238 0.678,1.238 0.764,1.01 1,1 1.034,0.998 1,1 1,1 "),
                u = {
                    defaultEase: n,
                    reverseEase: i,
                    twoSidedEase: o,
                    extraEase: c,
                    infiniteCombEase: a.Z.create("infinite-comb", "0.39,0.00,0.07,1.00"),
                    bouncyEase: l
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60;
                    return e / t
                }
        },
        95351: (e, t, s) => {
            "use strict";
            s.r(t), s.d(t, {
                HomePage: () => b,
                default: () => y
            });
            var r = s(85893),
                a = s(67294),
                n = s(15293),
                i = s(75629),
                o = s(58944),
                c = s(49618),
                l = s(39224),
                u = s(89941),
                p = s(14468),
                d = s(41448),
                m = s(40152),
                f = s(77834),
                g = s(11995),
                h = (s(58950), s(18670));
            const b = a.memo((() => {
                    const e = (0, f.HQ)(),
                        {
                            isDesktop: t,
                            isTablet: s
                        } = (0, f.uO)();
                    return (0, r.jsxs)(n.Z, {
                        className: "home-page",
                        useBanner: !1,
                        navbarOffsetY: t ? 850 * e : s ? 700 * e : 500 * e,
                        footerTopDivider: !1,
                        children: [(0, r.jsx)(g.N, {
                            page: h.SK
                        }), (0, r.jsx)(i.Z, {}), (0, r.jsx)(o.Z, {
                            loadingPrio: 2
                        }), (0, r.jsx)(c.Z, {
                            loadingPrio: 2
                        }), (0, r.jsx)(m.Z, {
                            title: "Une aventure réflexive et immersive...",
                            btnTitle: "Télécharger",
                            btnLink: "/download",
                            lines: !0
                        }), (0, r.jsx)(u.Z, {}), (0, r.jsx)(p.Z, {
                            loadingPrio: 3,
                            btnViewMoreDisabled: !0
                        }), (0, r.jsx)(d.Z, {
                            loadingPrio: 4
                        }), (0, r.jsx)(l.Z, {
                            loadingPrio: 6
                        })]
                    })
                })),
                y = b
        },
        24093: (e, t, s) => {
            "use strict";
            s.d(t, {
                b: () => r
            });
            var r, a = s(62642);
            ! function(e) {
                let t, s;
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
                                a.default.set(e, {
                                    autoAlpha: 0
                                })
                            },
                            finished: e => {
                                a.default.fromTo(e, {
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
                    }(s = e.Classes || (e.Classes = {}))
            }(r || (r = {}))
        },
        76914: (e, t, s) => {
            "use strict";
            s.d(t, {
                c: () => a,
                h: () => n
            });
            var r = s(15716);
            const a = {
                    whitepaper: "#",
                    litepaper: "#",
                    privacy: "#",
                    terms: "#",
                    opensea: "#",
                    buyOnKucoin: "#",
                    buyOnCoinstore: "#",
                    buyOnPancakeSwap: "#",
                    vesting: "#",
                    staking: "#"
                },
                n = {
                    navLinks: [{
                        title: "Notre Jeu",
                        isDropdown: !0,
                        dropdownItems: [{
                            title: "Fonctionnalités",
                            linkTo: "/fonctionnalités"
                        }, {
                            title: "Mises à jour",
                            linkTo: "/majs"
                        }, {
                            title: "Développement",
                            linkTo: "/developpement"
                        }, {
                            title: "Steam",
                            linkTo: "/download"
                        }]
                    }, {
                        title: "Notre Équipe",
                        isDropdown: !1,
                        linkTo: "about"
                    }, {
                        title: "À Propos",
                        isDropdown: !1,
                        linkTo: "about"
                    }, {
                        title: "Le Lore",
                        isDropdown: !1,
                        linkTo: "download"
                    }],
                    navCtaBtn: {
                        title: "Télécharger BeTruth",
                        linkTo: "download"
                    },
                    bannerContent: {
                        title: "La musique du jeu!",
                        cta: "Play Now",
                        ctaLink: {
                            isExternal: !1,
                            url: "/play-now"
                        }
                    },
                    footer: {
                        footerLinks: [{
                            title: "Notre Jeu",
                            linkTo: "download"
                        }, {
                            title: "Nos Fonctionnalités",
                            linkTo: "/fonctionnalités"
                        }, {
                            title: "Nos Mises à jour",
                            linkTo: "/majs"
                        }, {
                            title: "Le Développement",
                            linkTo: "/developpement"
                        }, {
                            title: "Notre Équipe",
                            linkTo: "about"
                        }, {
                            title: "À Propos",
                            linkTo: "about"
                        }, {
                            title: "Le Cahier des charges",
                            linkTo: "/download/Soutenance_2_NeedTime.pdf",
                        }, {
                            title: "Installation",
                            linkTo: "/download/Soutenance_2_NeedTime__Procédure_d_installation_.pdf",
                            desktopOnly: !0
                        }],
                        privacyURL: a.privacy,
                        termsURL: a.terms,
                        copyYear: "2024"
                    },
                    socials: {
                        twitter: {
                            link: "https://twitter.com/",
                            imgSrc: `${s(23325)}`
                        },
                        discord: {
                            link: "https://discord.com/",
                            imgSrc: `${s(60387)}`
                        },
                        facebook: {
                            link: "https://www.facebook.com/ ",
                            imgSrc: `${s(52285)}`
                        },
                        youtube: {
                            link: "https://www.youtube.com/",
                            imgSrc: `${s(52305)}`
                        },
                        medium: {
                            link: "https://medium.com/",
                            imgSrc: `${s(93948)}`
                        },
                        telegram: {
                            link: "https://t.me/",
                            imgSrc: `${s(77451)}`
                        },
                        instagram: {
                            link: "https://instagram.com/",
                            imgSrc: `${s(1421)}`
                        }
                    },
                    gameplaySectionList: [{
                        imgSrcJpg: `${s(43590)}`,
                        imgSrcWebp: `${s(4478)}`,
                        imgAlt: "Alliances dans le jeu",
                        title: "Alliances",
                        desc: {
                            desktop: "Votre mission est claire : collaborer pour survivre et trouver le moyen de quitter cette île inhospitalière.",
                            tablet: ["Votre mission est claire : collaborer pour survivre et trouver le moyen de quitter cette île inhospitalière."],
                            mobile: ["Votre mission est claire : collaborer pour survivre et trouver le moyen de quitter cette île inhospitalière."]
                        }
                    }, {
                        imgSrcJpg: `${s(68569)}`,
                        imgSrcWebp: `${s(41317)}`,
                        imgAlt: "Imposteurs dans le jeu",
                        title: "Imposteurs",
                        desc: {
                            desktop: "Mais la nuit tombe, et avec elle, les ombres du doute et de la trahison.",
                            tablet: ["Mais la nuit tombe, et avec elle, les ombres du doute et de la trahison."],
                            mobile: ["Mais la nuit tombe, et avec elle, les ombres du doute et de la trahison."]
                        }
                    }, {
                        imgSrcJpg: `${s(88721)}`,
                        imgSrcWebp: `${s(42774)}`,
                        imgAlt: "Indices dans le jeu",
                        title: "Indices",
                        desc: {
                            desktop: "Vous devrez surveiller vos alliés autant que vos ennemis, ici, personne n'est vraiment ce qu'il semble.",
                            tablet: ["Vous devrez surveiller vos alliés autant que vos ennemis, ici, personne n'est vraiment ce qu'il semble."],
                            mobile: ["Vous devrez surveiller vos alliés autant que vos ennemis, ici, personne n'est vraiment ce qu'il semble."]
                        }
                    }, {
                        imgSrcJpg: `${s(76021)}`,
                        imgSrcWebp: `${s(94410)}`,
                        imgAlt: "Évasion dans le jeu",
                        title: "Évasion",
                        desc: {
                            desktop: "Mais attention, une torsion perverse vous attend : un seul d'entre vous aura la chance de partir de l'île.",
                            tablet: ["Mais attention, une torsion perverse vous attend : un seul d'entre vous aura la chance de partir de l'île."],
                            mobile: ["Mais attention, une torsion perverse vous attend : un seul d'entre vous aura la chance de partir de l'île."]
                        }
                    }]
                }
        },
        24794: (e, t, s) => {
            "use strict";
            s.d(t, {
                B: () => n
            });
            const r = {
                    //colors: ["#BD6762", "#537893", "#539369", "#936A53", "#938153", "#937253", "#87978D", "#779353", "#937953", "#538793", "#7B5393", "#925393", "#538793", "#536193", "#949A96"],
                    colors: ["#BD6762", "#537893", "#539369"],
                    //elements: ["flame", "river", "forest", "cave", "spark", "mountain", "neutral", "insect", "feather", "frost", "crystal", "flower", "creature", "spirit", "void"],
                    elements: ["flame", "river", "forest", "cave", "spark"],
                    desc: ["1","2","3"]
                },
                a = [];

            function n() {
                return 0 === a.length && r.elements.forEach(((e, t) => {
                    a.push({
                        type: e,
                        backFaceImgPng: `${s(23643)(`./back-${e}.png`)}`,
                        backFaceImgWebp: `${s(47457)(`./back-${e}.webp`)}`,
                        frontFaceImgPng: `${s(84224)(`./front-${e}.png`)}`,
                        frontFaceImgWebp: `${s(34383)(`./front-${e}.webp`)}`,
                        characterImgPng: `${s(38943)(`./${e}-char.png`)}`,
                        characterImgWebp: `${s(75925)(`./${e}-char.webp`)}`,
                        categoryIcon: `${s(39733)(`./${e}.svg`)}`,
                        description: r.desc[t],
                        descColor: r.colors[t]
                    })
                })), a
            }
        },
        94473: (e, t, s) => {
            "use strict";
            s.d(t, {
                B: () => a
            });
            var r = s(97853);
            const a = (e, t) => Math.max(t.indexOf(r.mM.getValue(e)), 0)
        },
        58950: (e, t, s) => {
            "use strict";
            s.d(t, {
                i: () => a.i
            });
            var r = s(62642),
                a = s(97082);
            r.gsap.registerPlugin(a.i)
        },
        43025: (e, t, s) => {
            "use strict";
            s.d(t, {
                C: () => a.C
            });
            var r = s(62642),
                a = s(7026);
            r.default.registerPlugin(a.C)
        },
        88766: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => u
            });
            var r, a = s(73014),
                n = s(79588),
                i = s(97853),
                o = s(94473);
            ! function(e) {
                e.needtimesite = "needtimesite", e.eth = "eth"
            }(r || (r = {}));
            const c = [r.needtimesite, r.eth],
                l = "marketplace-currency";
            class u {
                constructor() {
                    this.currencySelect = new a.SelectString(c, (0, o.B)(l, c)), (0, n.reaction)((() => this.currencySelect.selectedItem), (e => {
                        i.mM.setValue(l, e)
                    }))
                }
            }
        },
        96522: (e, t, s) => {
            "use strict";
            s.d(t, {
                r: () => o
            });
            var r = s(70655),
                a = s(79588);
            const n = (0, s(51254).hu)("[Router]");
            var i;
            ! function(e) {
                e[e.None = 0] = "None", e[e.Preloader = 1] = "Preloader", e[e.Default = 5] = "Default"
            }(i || (i = {}));
            class o {
                constructor() {
                    this._navigationState = null, this._navigator = null, this.navigation = null, (0, a.makeObservable)(this);
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
                            var s;
                            null === (s = this._navigator) || void 0 === s || s.push(e, t)
                        },
                        replace: (e, t) => {
                            var s;
                            null === (s = this._navigator) || void 0 === s || s.replace(e, t)
                        },
                        get state() {
                            return e._navigationState
                        }
                    }
                }
                get mode() {
                    return n.log({
                        initializing: !1
                    }), i.Default
                }
                setNavigationState(e) {
                    this._navigationState = e
                }
                setNavigator(e) {
                    this._navigator = e
                }
            }(0, r.gn)([a.observable.ref, (0, r.w6)("design:type", Object)], o.prototype, "_navigationState", void 0), (0, r.gn)([a.observable.ref, (0, r.w6)("design:type", Object)], o.prototype, "_navigator", void 0), (0, r.gn)([a.computed, (0, r.w6)("design:type", Number), (0, r.w6)("design:paramtypes", [])], o.prototype, "mode", null), (0, r.gn)([a.action, (0, r.w6)("design:type", Function), (0, r.w6)("design:paramtypes", [Object]), (0, r.w6)("design:returntype", void 0)], o.prototype, "setNavigationState", null), (0, r.gn)([a.action, (0, r.w6)("design:type", Function), (0, r.w6)("design:paramtypes", [Object]), (0, r.w6)("design:returntype", void 0)], o.prototype, "setNavigator", null)
        },
        52842: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            var r = s(70655),
                a = s(79588),
                n = s(11209);
            class i {
                constructor() {
                    this._isLoggedIn = n.Z.Instance.isLoggedIn, this._isSoundActive = n.Z.Instance.isSoundActive, this.onClickConnect = () => {
                        this._isLoggedIn.setTrue()
                    }, this.onClickLogOut = () => {
                        this._isLoggedIn.setFalse()
                    }, this.toggleSoundActive = () => {
                        this._isSoundActive.toggle()
                    }, (0, a.makeObservable)(this)
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
            }(0, r.gn)([a.computed, (0, r.w6)("design:type", Object), (0, r.w6)("design:paramtypes", [])], i.prototype, "connectBtn", null), (0, r.gn)([a.computed, (0, r.w6)("design:type", Object), (0, r.w6)("design:paramtypes", [])], i.prototype, "marketplaceDropdown", null)
        },
        11209: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => p
            });
            var r = s(75382),
                a = s(97853),
                n = s(51170),
                i = s(79588),
                o = s(25946),
                c = s(88766),
                l = s(96522);
            const u = "marketplace-logged-in";
            (0, i.configure)({
                enforceActions: "never"
            });
            class p {
                constructor() {
                    this._isLoggedIn = new o.FlagModel(a.ZP.hasValue(u)), this._disposer = new n.ku, this._router = new l.r, this.currency = (0, r.createLazy)((() => new c.Z)), this._isSoundActive = new o.FlagModel(!1), this._disposer.add((0, i.reaction)((() => p.Instance.isLoggedIn.value), (e => {
                        e ? a.ZP.setValue(u, "1") : a.ZP.removeValue(u)
                    })))
                }
                static get Instance() {
                    return p._instance.value
                }
                static Destroy() {
                    p._instance.hasValue && (p._instance.value.dispose(), p._instance.reset())
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
            p._instance = (0, r.createLazy)((() => new p))
        },
        18670: (e, t, s) => {
            "use strict";
            s.d(t, {
                CL: () => l,
                SK: () => r,
                WU: () => n,
                ee: () => c,
                eh: () => i,
                hv: () => a,
                ri: () => o
            });
            const r = {
                    id: "home",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "index.html",
                        href: "/",
                        title: "NeedTime() - Télécharger Beyond Truth",
                        description: "Explore a mystical forest valley & spend many relaxing hours raising adorable NFT creatures called Beyond Truth",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                a = {
                    id: "gamefeatures",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "gamefeatures/index.html",
                        href: "/gamefeatures",
                        title: "Gameplay Features - NeedTime: Explore, Farm, Craft & Breed",
                        description: "Discover the rich and varied game mechanics that make NeedTime so satisfying to play",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                n = {
                    id: "token",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "token/index.html",
                        href: "/token",
                        title: "Here Token & Lucky Stars - NeedTime",
                        description: "Discover how NeedTime's on-chain token and off-chain currency are deeply integrated into every aspect of the NeedTime ecosystem",
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
                        title: "needtimesite types and characteristics - NeedTime",
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
                        title: "Art & fan-art gallery - NeedTime",
                        description: "Discover the latest art, screenshots and illustrations from our game and from the Beyond Truth community",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                c = {
                    id: "lore",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "lore/index.html",
                        href: "/lore",
                        title: "Lore Stories and mysteries of the valley - Beyond TruthValley",
                        description: "Immerse yourself in the ancient knowledge and engaging stories of NeedTime",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                },
                l = {
                    id: "about",
                    entryPoint: "./src/index.tsx",
                    templateName: "src/html/index.ejs",
                    output: {
                        path: "/about",
                        href: "/about",
                        title: "Team and partnership - NeedTime",
                        description: "Discover our passionate team, working hard to bring the Beyond Truth universe to life",
                        image: "needtimesite-valley-og.jpg",
                        imageWidth: 1200,
                        imageHeight: 630
                    }
                }
        },
        27418: e => {
            "use strict";
            var t = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;

            function a(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, s = 0; s < 10; s++) t["_" + String.fromCharCode(s)] = s;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, n) {
                for (var i, o, c = a(e), l = 1; l < arguments.length; l++) {
                    for (var u in i = Object(arguments[l])) s.call(i, u) && (c[u] = i[u]);
                    if (t) {
                        o = t(i);
                        for (var p = 0; p < o.length; p++) r.call(i, o[p]) && (c[o[p]] = i[o[p]])
                    }
                }
                return c
            }
        },
        69590: e => {
            var t = "undefined" != typeof Element,
                s = "function" == typeof Map,
                r = "function" == typeof Set,
                a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;

            function n(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var o, c, l, u;
                    if (Array.isArray(e)) {
                        if ((o = e.length) != i.length) return !1;
                        for (c = o; 0 != c--;)
                            if (!n(e[c], i[c])) return !1;
                        return !0
                    }
                    if (s && e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!i.has(c.value[0])) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!n(c.value[1], i.get(c.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (u = e.entries(); !(c = u.next()).done;)
                            if (!i.has(c.value[0])) return !1;
                        return !0
                    }
                    if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((o = e.length) != i.length) return !1;
                        for (c = o; 0 != c--;)
                            if (e[c] !== i[c]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((o = (l = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (c = o; 0 != c--;)
                        if (!Object.prototype.hasOwnProperty.call(i, l[c])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (c = o; 0 != c--;)
                        if (("_owner" !== l[c] && "__v" !== l[c] && "__o" !== l[c] || !e.$$typeof) && !n(e[l[c]], i[l[c]])) return !1;
                    return !0
                }
                return e != e && i != i
            }
            e.exports = function(e, t) {
                try {
                    return n(e, t)
                } catch (e) {
                    if ((e.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw e
                }
            }
        },
        64593: (e, t, s) => {
            "use strict";
            s.d(t, {
                q: () => ae
            });
            var r, a, n, i, o = s(45697),
                c = s.n(o),
                l = s(83524),
                u = s.n(l),
                p = s(69590),
                d = s.n(p),
                m = s(67294),
                f = s(27418),
                g = s.n(f),
                h = "bodyAttributes",
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
                x = (Object.keys(y).map((function(e) {
                    return y[e]
                })), "charset"),
                v = "cssText",
                w = "href",
                _ = "innerHTML",
                k = "itemprop",
                j = "rel",
                T = {
                    accesskey: "accessKey",
                    charset: "charSet",
                    class: "className",
                    contenteditable: "contentEditable",
                    contextmenu: "contextMenu",
                    "http-equiv": "httpEquiv",
                    itemprop: "itemProp",
                    tabindex: "tabIndex"
                },
                N = Object.keys(T).reduce((function(e, t) {
                    return e[T[t]] = t, e
                }), {}),
                C = [y.NOSCRIPT, y.SCRIPT, y.STYLE],
                S = "data-react-helmet",
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
                        for (var s = 0; s < t.length; s++) {
                            var r = t[s];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, s, r) {
                        return s && e(t.prototype, s), r && e(t, r), t
                    }
                }(),
                R = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                },
                L = function(e, t) {
                    var s = {};
                    for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (s[r] = e[r]);
                    return s
                },
                V = function(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                },
                P = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                },
                q = function(e) {
                    var t = D(e, y.TITLE),
                        s = D(e, "titleTemplate");
                    if (s && t) return s.replace(/%s/g, (function() {
                        return Array.isArray(t) ? t.join("") : t
                    }));
                    var r = D(e, "defaultTitle");
                    return t || r || void 0
                },
                M = function(e) {
                    return D(e, "onChangeClientState") || function() {}
                },
                G = function(e, t) {
                    return t.filter((function(t) {
                        return void 0 !== t[e]
                    })).map((function(t) {
                        return t[e]
                    })).reduce((function(e, t) {
                        return R({}, e, t)
                    }), {})
                },
                I = function(e, t) {
                    return t.filter((function(e) {
                        return void 0 !== e[y.BASE]
                    })).map((function(e) {
                        return e[y.BASE]
                    })).reverse().reduce((function(t, s) {
                        if (!t.length)
                            for (var r = Object.keys(s), a = 0; a < r.length; a++) {
                                var n = r[a].toLowerCase();
                                if (-1 !== e.indexOf(n) && s[n]) return t.concat(s)
                            }
                        return t
                    }), [])
                },
                $ = function(e, t, s) {
                    var r = {};
                    return s.filter((function(t) {
                        return !!Array.isArray(t[e]) || (void 0 !== t[e] && U("Helmet: " + e + ' should be of type "Array". Instead found type "' + E(t[e]) + '"'), !1)
                    })).map((function(t) {
                        return t[e]
                    })).reverse().reduce((function(e, s) {
                        var a = {};
                        s.filter((function(e) {
                            for (var s = void 0, n = Object.keys(e), i = 0; i < n.length; i++) {
                                var o = n[i],
                                    c = o.toLowerCase(); - 1 === t.indexOf(c) || s === j && "canonical" === e[s].toLowerCase() || c === j && "stylesheet" === e[c].toLowerCase() || (s = c), -1 === t.indexOf(o) || o !== _ && o !== v && o !== k || (s = o)
                            }
                            if (!s || !e[s]) return !1;
                            var l = e[s].toLowerCase();
                            return r[s] || (r[s] = {}), a[s] || (a[s] = {}), !r[s][l] && (a[s][l] = !0, !0)
                        })).reverse().forEach((function(t) {
                            return e.push(t)
                        }));
                        for (var n = Object.keys(a), i = 0; i < n.length; i++) {
                            var o = n[i],
                                c = g()({}, r[o], a[o]);
                            r[o] = c
                        }
                        return e
                    }), []).reverse()
                },
                D = function(e, t) {
                    for (var s = e.length - 1; s >= 0; s--) {
                        var r = e[s];
                        if (r.hasOwnProperty(t)) return r[t]
                    }
                    return null
                },
                B = (r = Date.now(), function(e) {
                    var t = Date.now();
                    t - r > 16 ? (r = t, e(t)) : setTimeout((function() {
                        B(e)
                    }), 0)
                }),
                Z = function(e) {
                    return clearTimeout(e)
                },
                F = "undefined" != typeof window ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || B : s.g.requestAnimationFrame || B,
                H = "undefined" != typeof window ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || Z : s.g.cancelAnimationFrame || Z,
                U = function(e) {
                    return console && "function" == typeof console.warn && console.warn(e)
                },
                W = null,
                Q = function(e, t) {
                    var s = e.baseTag,
                        r = e.bodyAttributes,
                        a = e.htmlAttributes,
                        n = e.linkTags,
                        i = e.metaTags,
                        o = e.noscriptTags,
                        c = e.onChangeClientState,
                        l = e.scriptTags,
                        u = e.styleTags,
                        p = e.title,
                        d = e.titleAttributes;
                    Y(y.BODY, r), Y(y.HTML, a), X(p, d);
                    var m = {
                            baseTag: K(y.BASE, s),
                            linkTags: K(y.LINK, n),
                            metaTags: K(y.META, i),
                            noscriptTags: K(y.NOSCRIPT, o),
                            scriptTags: K(y.SCRIPT, l),
                            styleTags: K(y.STYLE, u)
                        },
                        f = {},
                        g = {};
                    Object.keys(m).forEach((function(e) {
                        var t = m[e],
                            s = t.newTags,
                            r = t.oldTags;
                        s.length && (f[e] = s), r.length && (g[e] = m[e].oldTags)
                    })), t && t(), c(e, f, g)
                },
                z = function(e) {
                    return Array.isArray(e) ? e.join("") : e
                },
                X = function(e, t) {
                    void 0 !== e && document.title !== e && (document.title = z(e)), Y(y.TITLE, t)
                },
                Y = function(e, t) {
                    var s = document.getElementsByTagName(e)[0];
                    if (s) {
                        for (var r = s.getAttribute(S), a = r ? r.split(",") : [], n = [].concat(a), i = Object.keys(t), o = 0; o < i.length; o++) {
                            var c = i[o],
                                l = t[c] || "";
                            s.getAttribute(c) !== l && s.setAttribute(c, l), -1 === a.indexOf(c) && a.push(c);
                            var u = n.indexOf(c); - 1 !== u && n.splice(u, 1)
                        }
                        for (var p = n.length - 1; p >= 0; p--) s.removeAttribute(n[p]);
                        a.length === n.length ? s.removeAttribute(S) : s.getAttribute(S) !== i.join(",") && s.setAttribute(S, i.join(","))
                    }
                },
                K = function(e, t) {
                    var s = document.head || document.querySelector(y.HEAD),
                        r = s.querySelectorAll(e + "[data-react-helmet]"),
                        a = Array.prototype.slice.call(r),
                        n = [],
                        i = void 0;
                    return t && t.length && t.forEach((function(t) {
                        var s = document.createElement(e);
                        for (var r in t)
                            if (t.hasOwnProperty(r))
                                if (r === _) s.innerHTML = t.innerHTML;
                                else if (r === v) s.styleSheet ? s.styleSheet.cssText = t.cssText : s.appendChild(document.createTextNode(t.cssText));
                        else {
                            var o = void 0 === t[r] ? "" : t[r];
                            s.setAttribute(r, o)
                        }
                        s.setAttribute(S, "true"), a.some((function(e, t) {
                            return i = t, s.isEqualNode(e)
                        })) ? a.splice(i, 1) : n.push(s)
                    })), a.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), n.forEach((function(e) {
                        return s.appendChild(e)
                    })), {
                        oldTags: a,
                        newTags: n
                    }
                },
                J = function(e) {
                    return Object.keys(e).reduce((function(t, s) {
                        var r = void 0 !== e[s] ? s + '="' + e[s] + '"' : "" + s;
                        return t ? t + " " + r : r
                    }), "")
                },
                ee = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return Object.keys(e).reduce((function(t, s) {
                        return t[T[s] || s] = e[s], t
                    }), t)
                },
                te = function(e, t, s) {
                    switch (e) {
                        case y.TITLE:
                            return {
                                toComponent: function() {
                                    return e = t.title, s = t.titleAttributes, (r = {
                                        key: e
                                    })[S] = !0, a = ee(s, r), [m.createElement(y.TITLE, a, e)];
                                    var e, s, r, a
                                }, toString: function() {
                                    return function(e, t, s, r) {
                                        var a = J(s),
                                            n = z(t);
                                        return a ? "<" + e + ' data-react-helmet="true" ' + a + ">" + P(n, r) + "</" + e + ">" : "<" + e + ' data-react-helmet="true">' + P(n, r) + "</" + e + ">"
                                    }(e, t.title, t.titleAttributes, s)
                                }
                            };
                        case h:
                        case b:
                            return {
                                toComponent: function() {
                                    return ee(t)
                                }, toString: function() {
                                    return J(t)
                                }
                            };
                        default:
                            return {
                                toComponent: function() {
                                    return function(e, t) {
                                        return t.map((function(t, s) {
                                            var r, a = ((r = {
                                                key: s
                                            })[S] = !0, r);
                                            return Object.keys(t).forEach((function(e) {
                                                var s = T[e] || e;
                                                if (s === _ || s === v) {
                                                    var r = t.innerHTML || t.cssText;
                                                    a.dangerouslySetInnerHTML = {
                                                        __html: r
                                                    }
                                                } else a[s] = t[e]
                                            })), m.createElement(e, a)
                                        }))
                                    }(e, t)
                                }, toString: function() {
                                    return function(e, t, s) {
                                        return t.reduce((function(t, r) {
                                            var a = Object.keys(r).filter((function(e) {
                                                    return !(e === _ || e === v)
                                                })).reduce((function(e, t) {
                                                    var a = void 0 === r[t] ? t : t + '="' + P(r[t], s) + '"';
                                                    return e ? e + " " + a : a
                                                }), ""),
                                                n = r.innerHTML || r.cssText || "",
                                                i = -1 === C.indexOf(e);
                                            return t + "<" + e + ' data-react-helmet="true" ' + a + (i ? "/>" : ">" + n + "</" + e + ">")
                                        }), "")
                                    }(e, t, s)
                                }
                            }
                    }
                },
                se = function(e) {
                    var t = e.baseTag,
                        s = e.bodyAttributes,
                        r = e.encode,
                        a = e.htmlAttributes,
                        n = e.linkTags,
                        i = e.metaTags,
                        o = e.noscriptTags,
                        c = e.scriptTags,
                        l = e.styleTags,
                        u = e.title,
                        p = void 0 === u ? "" : u,
                        d = e.titleAttributes;
                    return {
                        base: te(y.BASE, t, r),
                        bodyAttributes: te(h, s, r),
                        htmlAttributes: te(b, a, r),
                        link: te(y.LINK, n, r),
                        meta: te(y.META, i, r),
                        noscript: te(y.NOSCRIPT, o, r),
                        script: te(y.SCRIPT, c, r),
                        style: te(y.STYLE, l, r),
                        title: te(y.TITLE, {
                            title: p,
                            titleAttributes: d
                        }, r)
                    }
                },
                re = u()((function(e) {
                    return {
                        baseTag: I([w, "target"], e),
                        bodyAttributes: G(h, e),
                        defer: D(e, "defer"),
                        encode: D(e, "encodeSpecialCharacters"),
                        htmlAttributes: G(b, e),
                        linkTags: $(y.LINK, [j, w], e),
                        metaTags: $(y.META, ["name", x, "http-equiv", "property", k], e),
                        noscriptTags: $(y.NOSCRIPT, [_], e),
                        onChangeClientState: M(e),
                        scriptTags: $(y.SCRIPT, ["src", _], e),
                        styleTags: $(y.STYLE, [v], e),
                        title: q(e),
                        titleAttributes: G("titleAttributes", e)
                    }
                }), (function(e) {
                    W && H(W), e.defer ? W = F((function() {
                        Q(e, (function() {
                            W = null
                        }))
                    })) : (Q(e), W = null)
                }), se)((function() {
                    return null
                })),
                ae = (a = re, i = n = function(e) {
                    function t() {
                        return A(this, t), V(this, e.apply(this, arguments))
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
                        return !d()(this.props, e)
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
                        var t, s = e.child,
                            r = e.arrayTypeChildren,
                            a = e.newChildProps,
                            n = e.nestedChildren;
                        return R({}, r, ((t = {})[s.type] = [].concat(r[s.type] || [], [R({}, a, this.mapNestedChildrenToProps(s, n))]), t))
                    }, t.prototype.mapObjectTypeChildren = function(e) {
                        var t, s, r = e.child,
                            a = e.newProps,
                            n = e.newChildProps,
                            i = e.nestedChildren;
                        switch (r.type) {
                            case y.TITLE:
                                return R({}, a, ((t = {})[r.type] = i, t.titleAttributes = R({}, n), t));
                            case y.BODY:
                                return R({}, a, {
                                    bodyAttributes: R({}, n)
                                });
                            case y.HTML:
                                return R({}, a, {
                                    htmlAttributes: R({}, n)
                                })
                        }
                        return R({}, a, ((s = {})[r.type] = R({}, n), s))
                    }, t.prototype.mapArrayTypeChildrenToProps = function(e, t) {
                        var s = R({}, t);
                        return Object.keys(e).forEach((function(t) {
                            var r;
                            s = R({}, s, ((r = {})[t] = e[t], r))
                        })), s
                    }, t.prototype.warnOnInvalidChildren = function(e, t) {
                        return !0
                    }, t.prototype.mapChildrenToProps = function(e, t) {
                        var s = this,
                            r = {};
                        return m.Children.forEach(e, (function(e) {
                            if (e && e.props) {
                                var a = e.props,
                                    n = a.children,
                                    i = function(e) {
                                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return Object.keys(e).reduce((function(t, s) {
                                            return t[N[s] || s] = e[s], t
                                        }), t)
                                    }(L(a, ["children"]));
                                switch (s.warnOnInvalidChildren(e, n), e.type) {
                                    case y.LINK:
                                    case y.META:
                                    case y.NOSCRIPT:
                                    case y.SCRIPT:
                                    case y.STYLE:
                                        r = s.flattenArrayTypeChildren({
                                            child: e,
                                            arrayTypeChildren: r,
                                            newChildProps: i,
                                            nestedChildren: n
                                        });
                                        break;
                                    default:
                                        t = s.mapObjectTypeChildren({
                                            child: e,
                                            newProps: t,
                                            newChildProps: i,
                                            nestedChildren: n
                                        })
                                }
                            }
                        })), t = this.mapArrayTypeChildrenToProps(r, t)
                    }, t.prototype.render = function() {
                        var e = this.props,
                            t = e.children,
                            s = L(e, ["children"]),
                            r = R({}, s);
                        return t && (r = this.mapChildrenToProps(t, r)), m.createElement(a, r)
                    }, O(t, null, [{
                        key: "canUseDOM",
                        set: function(e) {
                            a.canUseDOM = e
                        }
                    }]), t
                }(m.Component), n.propTypes = {
                    base: c().object,
                    bodyAttributes: c().object,
                    children: c().oneOfType([c().arrayOf(c().node), c().node]),
                    defaultTitle: c().string,
                    defer: c().bool,
                    encodeSpecialCharacters: c().bool,
                    htmlAttributes: c().object,
                    link: c().arrayOf(c().object),
                    meta: c().arrayOf(c().object),
                    noscript: c().arrayOf(c().object),
                    onChangeClientState: c().func,
                    script: c().arrayOf(c().object),
                    style: c().arrayOf(c().object),
                    title: c().string,
                    titleAttributes: c().object,
                    titleTemplate: c().string
                }, n.defaultProps = {
                    defer: !0,
                    encodeSpecialCharacters: !0
                }, n.peek = a.peek, n.rewind = function() {
                    var e = a.rewind();
                    return e || (e = se({
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
            ae.renderStatic = ae.rewind
        },
        83524: (e, t, s) => {
            "use strict";
            var r, a = s(67294),
                n = (r = a) && "object" == typeof r && "default" in r ? r.default : r;

            function i(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            var o = !("undefined" == typeof window || !window.document || !window.document.createElement);
            e.exports = function(e, t, s) {
                if ("function" != typeof e) throw new Error("Expected reducePropsToState to be a function.");
                if ("function" != typeof t) throw new Error("Expected handleStateChangeOnClient to be a function.");
                if (void 0 !== s && "function" != typeof s) throw new Error("Expected mapStateOnServer to either be undefined or a function.");
                return function(r) {
                    if ("function" != typeof r) throw new Error("Expected WrappedComponent to be a React component.");
                    var c, l = [];

                    function u() {
                        c = e(l.map((function(e) {
                            return e.props
                        }))), p.canUseDOM ? t(c) : s && (c = s(c))
                    }
                    var p = function(e) {
                        var t, s;

                        function a() {
                            return e.apply(this, arguments) || this
                        }
                        s = e, (t = a).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s, a.peek = function() {
                            return c
                        }, a.rewind = function() {
                            if (a.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                            var e = c;
                            return c = void 0, l = [], e
                        };
                        var i = a.prototype;
                        return i.UNSAFE_componentWillMount = function() {
                            l.push(this), u()
                        }, i.componentDidUpdate = function() {
                            u()
                        }, i.componentWillUnmount = function() {
                            var e = l.indexOf(this);
                            l.splice(e, 1), u()
                        }, i.render = function() {
                            return n.createElement(r, this.props)
                        }, a
                    }(a.PureComponent);
                    return i(p, "displayName", "SideEffect(" + function(e) {
                        return e.displayName || e.name || "Component"
                    }(r) + ")"), i(p, "canUseDOM", o), p
                }
            }
        },
        23643: (e, t, s) => {
            var r = {
                "./back-cave.png": 48165,
                "./back-creature.png": 93929,
                "./back-crystal.png": 7052,
                "./back-feather.png": 17527,
                "./back-flame.png": 87178,
                "./back-flower.png": 50621,
                "./back-forest.png": 38429,
                "./back-frost.png": 80892,
                "./back-insect.png": 98919,
                "./back-mountain.png": 56670,
                "./back-neutral.png": 97937,
                "./back-noise.png": 63336,
                "./back-river.png": 29151,
                "./back-spark.png": 91496,
                "./back-spirit.png": 45018,
                "./back-void.png": 44115
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = n, e.exports = a, a.id = 23643
        },
        47457: (e, t, s) => {
            var r = {
                "./back-cave.webp": 25694,
                "./back-creature.webp": 36179,
                "./back-crystal.webp": 50979,
                "./back-feather.webp": 1980,
                "./back-flame.webp": 95399,
                "./back-flower.webp": 41358,
                "./back-forest.webp": 93030,
                "./back-frost.webp": 228,
                "./back-insect.webp": 86581,
                "./back-mountain.webp": 63296,
                "./back-neutral.webp": 41904,
                "./back-noise.webp": 77043,
                "./back-river.webp": 78508,
                "./back-spark.webp": 43193,
                "./back-spirit.webp": 56758,
                "./back-void.webp": 22721
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = n, e.exports = a, a.id = 47457
        },
        38943: (e, t, s) => {
            var r = {
                "./cave-char.png": 32734,
                "./creature-char.png": 96160,
                "./crystal-char.png": 26719,
                "./feather-char.png": 85394,
                "./flame-char.png": 43055,
                "./flower-char.png": 91115,
                "./forest-char.png": 84953,
                "./frost-char.png": 62177,
                "./insect-char.png": 64839,
                "./mountain-char.png": 62590,
                "./neutral-char.png": 99616,
                "./river-char.png": 40768,
                "./spark-char.png": 64529,
                "./spirit-char.png": 62622,
                "./void-char.png": 22020
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = n, e.exports = a, a.id = 38943
        },
        75925: (e, t, s) => {
            var r = {
                "./cave-char.webp": 51103,
                "./creature-char.webp": 29636,
                "./crystal-char.webp": 26292,
                "./feather-char.webp": 91835,
                "./flame-char.webp": 63235,
                "./flower-char.webp": 4995,
                "./forest-char.webp": 64223,
                "./frost-char.webp": 77585,
                "./insect-char.webp": 39080,
                "./mountain-char.webp": 19724,
                "./neutral-char.webp": 39002,
                "./river-char.webp": 35229,
                "./spark-char.webp": 98923,
                "./spirit-char.webp": 47069,
                "./void-char.webp": 68317
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = n, e.exports = a, a.id = 75925
        },
        84224: (e, t, s) => {
            var r = {
                "./front-cave.png": 77662,
                "./front-creature.png": 87566,
                "./front-crystal.png": 40637,
                "./front-feather.png": 69472,
                "./front-flame.png": 30640,
                "./front-flower.png": 75923,
                "./front-forest.png": 41106,
                "./front-frost.png": 72936,
                "./front-insect.png": 76184,
                "./front-mountain.png": 70985,
                "./front-neutral.png": 89822,
                "./front-noise.png": 28461,
                "./front-river.png": 22127,
                "./front-spark.png": 50842,
                "./front-spirit.png": 68749,
                "./front-void.png": 94207
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = n, e.exports = a, a.id = 84224
        },
        34383: (e, t, s) => {
            var r = {
                "./front-cave.webp": 16571,
                "./front-creature.webp": 71376,
                "./front-crystal.webp": 76253,
                "./front-feather.webp": 90630,
                "./front-flame.webp": 7935,
                "./front-flower.webp": 20259,
                "./front-forest.webp": 37190,
                "./front-frost.webp": 40806,
                "./front-insect.webp": 17885,
                "./front-mountain.webp": 84478,
                "./front-neutral.webp": 63485,
                "./front-noise.webp": 35681,
                "./front-river.webp": 66553,
                "./front-spark.webp": 65465,
                "./front-spirit.webp": 73724,
                "./front-void.webp": 67143
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = n, e.exports = a, a.id = 34383
        },
        39733: (e, t, s) => {
            var r = {
                "./cave.svg": 54540,
                "./creature.svg": 90511,
                "./crystal.svg": 9019,
                "./feather.svg": 65513,
                "./flame.svg": 94448,
                "./flower.svg": 83958,
                "./forest.svg": 68467,
                "./frost.svg": 76214,
                "./insect.svg": 74519,
                "./mountain.svg": 27382,
                "./neutral.svg": 79370,
                "./river.svg": 67933,
                "./spark.svg": 46559,
                "./spirit.svg": 26857,
                "./void.svg": 83267
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = n, e.exports = a, a.id = 39733
        },
        17695: (e, t, s) => {
            var r = {
                "./needtimesite-valley-og.jpg": 78503
            };

            function a(e) {
                var t = n(e);
                return s(t)
            }

            function n(e) {
                if (!s.o(r, e)) {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return r[e]
            }
            a.keys = function() {
                return Object.keys(r)
            }, a.resolve = n, e.exports = a, a.id = 17695
        },
        38262: (e, t, s) => {
            "use strict";
            t.FK = void 0;
            const r = s(46764),
                a = s(69753),
                n = s(79588);
            r.Lazy;
            class i extends a.LazyPromise {
                constructor(e, t) {
                    super(e, t), (0, n.makeObservable)(this, {
                        _instance: n.observable.ref,
                        _busy: n.observable,
                        setInstance: n.action,
                        ensureInstanceLoading: n.action,
                        reset: n.action
                    })
                }
            }
            t.FK = i
        },
        46764: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Lazy = void 0, t.Lazy = class {
                constructor(e) {
                    this._factory = e, this._instance = null
                }
                get hasValue() {
                    return null !== this._instance
                }
                get value() {
                    return this.ensureInstance(), this._instance
                }
                ensureInstance() {
                    null === this._instance && (this._instance = this._factory())
                }
                prewarm() {
                    return this.ensureInstance(), this
                }
                reset() {
                    this._instance = null
                }
                dispose() {
                    this.reset()
                }
            }
        },
        68146: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/bars-icon.829e26.svg"
        },
        40270: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/chevron-icon.2bf22e.svg"
        },
        89429: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/cross-icon.535570.svg"
        },
        60387: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/discord-icon.53270b.svg"
        },
        52285: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/facebook-icon.9595b4.svg"
        },
        1421: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/instagram-icon.ec48ed.svg"
        },
        93948: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/medium-icon.d0a52c.svg"
        },
        89301: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/sound-off-icon.53d7be.svg"
        },
        10440: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/sound-on-icon.59a6aa.svg"
        },
        77451: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/telegram-icon.c91685.svg"
        },
        23325: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/twitter-icon.ed68f4.svg"
        },
        52305: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/youtube-icon.b9fd61.svg"
        },
        48344: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/leaves-bottom.561f8c.svg"
        },
        21774: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/leaves-top__new.10fc40.svg"
        },
        48512: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/big-logo.3f3095.svg"
        },
        54540: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/cave.97275c.svg"
        },
        90511: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/creature.b389e1.svg"
        },
        9019: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/crystal.380d5a.svg"
        },
        65513: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/feather.0f0050.svg"
        },
        94448: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/flame.9b59a2.svg"
        },
        83958: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/flower.c7d749.svg"
        },
        68467: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/forest.ff8eef.svg"
        },
        76214: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/frost.773177.svg"
        },
        74519: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/insect.383221.svg"
        },
        27382: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/mountain.4adcb4.svg"
        },
        79370: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/neutral.ca21a7.svg"
        },
        67933: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/river.9ca068.svg"
        },
        46559: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/spark.dfb499.svg"
        },
        26857: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/spirit.71d8eb.svg"
        },
        83267: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/void.9bedfe.svg"
        },
        90904: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/creepers.3289d2.svg"
        },
        53657: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/high-grass.d5181c.svg"
        },
        64042: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/rocks.56fd60.svg"
        },
        80152: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/dropdown-bg.acd54a.svg"
        },
        77178: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/dropdown-border.dec7ff.svg"
        },
        3978: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/banner-arrow.b9cfc0.svg"
        },
        29482: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/high-forest@2x.74e540.svg"
        },
        9190: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/high-rocks.e276d3.svg"
        },
        23781: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/palms-desktop.ad87fd.svg"
        },
        62544: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/palms-mobile.a914d1.svg"
        },
        79640: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/palms-tablet.046f4a.svg"
        },
        88837: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/main-logo.a9402e.svg"
        },
        14496: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/mob-grass-bottom.1d5923.svg"
        },
        72389: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/mob-grass-top.c649d5.svg"
        },
        38288: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/mob-grass-top__mob.e56646.svg"
        },
        93218: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/mob-leaves-bottom.63b672.svg"
        },
        89522: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/navbar-bg.1790db.svg"
        },
        39055: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/navbar-bg_mobile.31e67c.svg"
        },
        96337: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/navbar-bg_tablet.e7dac5.svg"
        },
        31508: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/small-logo.8a73b3.svg"
        },
        46903: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/ts-leaves-bottom.381463.svg"
        },
        63654: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/ts-leaves-top.95169a.svg"
        },
        17453: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_about@1.5x.efd146.jpg"
        },
        74234: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_about@1.5x.d821d7.webp"
        },
        57017: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_about_mob@1.ea4cdd.jpg"
        },
        45478: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_about_mob@1.feebb3.webp"
        },
        52527: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_about_tab@1.fd6ad3.jpg"
        },
        41949: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_about_tab@1.96916c.webp"
        },
        18274: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/big-logo.dbe85a.png"
        },
        48165: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-cave.8aee0d.png"
        },
        25694: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-cave.764bee.webp"
        },
        93929: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-creature.01f49b.png"
        },
        36179: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-creature.17dd6d.webp"
        },
        7052: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-crystal.a8fc5d.png"
        },
        50979: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-crystal.9601d0.webp"
        },
        17527: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-feather.bd4d16.png"
        },
        1980: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-feather.c74fb3.webp"
        },
        87178: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-flame.9304ae.png"
        },
        95399: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-flame.32f124.webp"
        },
        50621: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-flower.37d965.png"
        },
        41358: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-flower.664ae0.webp"
        },
        38429: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-forest.e89193.png"
        },
        93030: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-forest.610cf8.webp"
        },
        80892: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-frost.64a573.png"
        },
        228: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-frost.5a7b4c.webp"
        },
        98919: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-insect.3f1fc3.png"
        },
        86581: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-insect.0f6cd4.webp"
        },
        56670: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-mountain.2bab35.png"
        },
        63296: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-mountain.b0497d.webp"
        },
        97937: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-neutral.25b407.png"
        },
        41904: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-neutral.b21077.webp"
        },
        63336: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-noise.ba0a11.png"
        },
        77043: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-noise.f08c92.webp"
        },
        29151: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-river.bc706a.png"
        },
        78508: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-river.719b26.webp"
        },
        91496: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-spark.d703d9.png"
        },
        43193: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-spark.b5b513.webp"
        },
        45018: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-spirit.217fe7.png"
        },
        56758: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-spirit.d7d1d3.webp"
        },
        44115: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-void.3fb287.png"
        },
        22721: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/back-void.794cd6.webp"
        },
        32734: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso4.png"
        },
        51103: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso4.webp"
        },
        96160: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/creature-char.41274d.png"
        },
        29636: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/creature-char.e09e0b.webp"
        },
        26719: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/crystal-char.b66602.png"
        },
        26292: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/crystal-char.c921a3.webp"
        },
        85394: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/feather-char.807ed2.png"
        },
        91835: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/feather-char.32ec23.webp"
        },
        43055: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso1.png"
        },
        63235: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso1.webp"
        },
        91115: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/flower-char.4a397a.png"
        },
        4995: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/flower-char.5101c7.webp"
        },
        84953: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso3.png"
        },
        64223: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso3.webp"
        },
        62177: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/frost-char.6311ae.png"
        },
        77585: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/frost-char.948490.webp"
        },
        64839: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/insect-char.3d4509.png"
        },
        39080: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/insect-char.7e6f0c.webp"
        },
        62590: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/mountain-char.ec4b46.png"
        },
        19724: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/mountain-char.c90d87.webp"
        },
        99616: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/neutral-char.c4480e.png"
        },
        39002: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/neutral-char.94c715.webp"
        },
        40768: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso2.png"
        },
        35229: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso2.webp"
        },
        64529: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso5.png"
        },
        98923: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/perso5.webp"
        },
        62622: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/spirit-char.c9ba53.png"
        },
        47069: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/spirit-char.eb0ada.webp"
        },
        22020: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/void-char.d8c32d.png"
        },
        68317: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/void-char.e03df2.webp"
        },
        77662: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-cave.d9ca6c.png"
        },
        16571: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-cave.d133ef.webp"
        },
        87566: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-creature.14e985.png"
        },
        71376: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-creature.367418.webp"
        },
        40637: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-crystal.46b5f0.png"
        },
        76253: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-crystal.154042.webp"
        },
        69472: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-feather.f1075a.png"
        },
        90630: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-feather.417b5b.webp"
        },
        30640: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-flame.e8ca43.png"
        },
        7935: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-flame.1c3fc8.webp"
        },
        75923: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-flower.33c710.png"
        },
        20259: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-flower.1b0a83.webp"
        },
        41106: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-forest.f5139e.png"
        },
        37190: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-forest.1c4412.webp"
        },
        72936: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-frost.0c8a4d.png"
        },
        40806: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-frost.5e83df.webp"
        },
        76184: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-insect.64fe60.png"
        },
        17885: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-insect.c836a4.webp"
        },
        70985: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-mountain.505fee.png"
        },
        84478: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-mountain.f160af.webp"
        },
        89822: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-neutral.66d533.png"
        },
        63485: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-neutral.82277c.webp"
        },
        28461: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-noise.d71250.png"
        },
        35681: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-noise.bdf878.webp"
        },
        22127: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-river.6d95af.png"
        },
        66553: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-river.27dba0.webp"
        },
        50842: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-spark.460917.png"
        },
        65465: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-spark.62c116.webp"
        },
        68749: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-spirit.3a7aad.png"
        },
        73724: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-spirit.56e575.webp"
        },
        94207: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-void.3abd54.png"
        },
        67143: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/front-void.a3a5f9.webp"
        },
        46637: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_community_flower@2.4cf73c.png"
        },
        60078: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_community_flower@2.a69da2.webp"
        },
        40552: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/02_community_character@2.c1574a.png"
        },
        60086: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/02_community_character@2.1bb99e.webp"
        },
        87614: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_community_three@2.76c68b.png"
        },
        87187: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_community_three@2.1ae644.webp"
        },
        99213: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/04_community_mountaine@2.6728d4.png"
        },
        69400: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/04_community_mountaine@2.780eb8.webp"
        },
        7014: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_community_sky@2.eb8e36.jpg"
        },
        82125: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_community_sky@2.2cd2f7.webp"
        },
        46200: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_community_flower_mob@2.393d8a.png"
        },
        11023: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_community_flower_mob@2.b7243a.webp"
        },
        62888: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/02_community_character_mob@2.404c35.png"
        },
        59288: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/02_community_character_mob@2.b42a05.webp"
        },
        99145: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_community_three_mob@2.e6aef1.png"
        },
        149: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_community_three_mob@2.154a5c.webp"
        },
        35426: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/04_community_mountaine_mob@2.9db058.png"
        },
        87430: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/04_community_mountaine_mob@2.6c7eaf.webp"
        },
        37039: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_community_sky_mob@2.1dc8f3.jpg"
        },
        5757: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_community_sky_mob@2.f614a6.webp"
        },
        4081: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_community_flower_tab@2.4e56a7.png"
        },
        3557: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_community_flower_tab@2.8cc610.webp"
        },
        61622: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/02_community_character_tab@2.8f094f.png"
        },
        65557: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/02_community_character_tab@2.9f53ba.webp"
        },
        58711: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_community_three_tab@2.944062.png"
        },
        61159: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_community_three_tab@2.771fcb.webp"
        },
        6756: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/04_community_mountaine_tab@2.73537d.png"
        },
        83646: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/04_community_mountaine_tab@2.517a1f.webp"
        },
        31178: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_community_sky_tab@2.f460c3.jpg"
        },
        1211: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_community_sky_tab@2.0ef6cc.webp"
        },
        78927: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/needtimesite.2c45ad.png"
        },
        68569: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/breeding-gameplay.016a22.jpg"
        },
        41317: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/breeding-gameplay.6743b7.webp"
        },
        88721: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/crafting-gameplay.81629e.jpg"
        },
        42774: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/crafting-gameplay.b62b71.webp"
        },
        76021: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/exploration-gameplay.0732c8.jpg"
        },
        94410: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/exploration-gameplay.ee6f4f.webp"
        },
        43590: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/farming-gameplay.8191f6.jpg"
        },
        4478: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/farming-gameplay.049b50.webp"
        },
        4121: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/1.95222f.png"
        },
        28200: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png" //1.610c19.webp
        },
        45380: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/2.8b96b8.png"
        },
        82385: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png" //2.f285ca.webp
        },
        95077: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/3.008438.png"
        },
        41238: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/3.9f3b94.webp"
        },
        67906: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/4.6a7edf.png"
        },
        65193: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png" //
        },
        49412: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/5.4fdfac.jpg"
        },
        50802: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/2.f285ca.webp" //5.0db6da.webp
        },
        41500: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_mob@2.3ae5bf.png"
        },
        96959: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png" //01_mob@2.ed1b5f.webp
        },
        80509: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/02_mob@2.e89b88.png"
        },
        9708: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png" //02_mob@2.8ae92a.webp
        },
        16664: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_mob@2.a9acf2.png"
        },
        83842: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_mob@2.cf76a7.webp"
        },
        84142: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/04_mob@2.96a25b.png"
        },
        65399: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png" //04_mob@2.749ded.webp
        },
        52944: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_mob@2.b412aa.jpg"
        },
        70676: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_mob@2.bda069.webp" //05_mob@2.bda069.webp
        },
        88729: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_tab@2.a1086c.png"
        },
        86365: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png" //01_tab@2.a02eba.webp
        },
        23771: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/02_tab@2.99ef27.png"
        },
        454: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png" //02_tab@2.217754.webp
        },
        75868: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_tab@2.a76dce.png"
        },
        32362: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/03_tab@2.b0c196.webp"
        },
        29612: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/04_tab@2.f23050.png"
        },
        39237: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/correct.png"
        },
        65418: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_tab@2.11842a.jpg"
        },
        35933: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/05_tab@2.8ee0f3.webp"
        },
        78503: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/needtimesite-valley-og.7ef3b2.jpg"
        },
        19399: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/token@2x.dbbc9b.png"
        },
        60600: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_token_des@2.2eb240.jpg"
        },
        60455: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_token_des@2.4bf5d3.webp"
        },
        56e3: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_token_mob@2.43efea.jpg"
        },
        89350: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_token_mob@2.01ba05.webp"
        },
        15920: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_token_tab@2.6bcdbb.jpg"
        },
        8811: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/img/01_token_tab@2.415ff8.webp"
        },
        87942: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/lottie/infinityneedtimesiteDesktop/InfinityneedtimesiteLottie__desktop.10cce7.json"
        },
        61803: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/lottie/infinityneedtimesiteMobile/InfinityneedtimesiteLottie__mobile.17fffd.json"
        },
        51074: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/lottie/infinityneedtimesiteTablet/InfinityneedtimesiteLottie__tablet.feb238.json"
        },
        12486: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/lottie/mainBtn/mainBtnLottie.7926f4.json"
        },
        61628: (e, t, s) => {
            "use strict";
            e.exports = s.p + "assets/lottie/mainBtnWide/mainBtnWideLottie.66bfd5.json"
        }
    }
]);
//# sourceMappingURL=351.351.e95780.js.map