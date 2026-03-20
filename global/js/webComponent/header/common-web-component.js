import { o as t, c as o, a as e, t as u, w as g, b as E, r as x, d as z, F as D, e as S, f as C, n as B, g as j, u as w, h as I, i as J, v as Q, j as Ie, k as A, T as F, m as te, l as oe, _ as V, p as ce, q as me, s as Ee, x as he, y as K, z as He, A as Oe, B as X, M as Pe } from "./MSIChatbot.ce-ilKOgyjF.js";
import { GAEventDirectPush as Ae } from "https://storage-asset.msi.com/frontend/js/gaeventdirectpush.js";
const Fe = { class: "arrow-button__title" }, Z = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuArrowButton",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  emits: ["check:info"],
  setup(k) {
    return (h, n) => (t(), o("button", {
      class: "arrow-button",
      onClick: n[0] || (n[0] = g((c) => h.$emit("check:info"), ["prevent", "stop"]))
    }, [
      e("span", Fe, u(k.title), 1),
      n[1] || (n[1] = e("span", { class: "arrow-button__icon icon-msi-next" }, null, -1))
    ]));
  }
}), Ue = { class: "msi__container" }, je = { class: "b-To-b-intro__content" }, Ne = { class: "community--col" }, qe = { class: "topic" }, We = ["href", "target"], Ge = { class: "community--col" }, Ke = { class: "service" }, Ye = { class: "service__intro" }, Re = { class: "title" }, Je = { class: "text" }, Qe = ["target", "href"], Ve = { class: "more-link__text" }, Xe = ["target", "href"], Ze = ["src", "alt"], et = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuBToB",
  props: {
    menuConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(k) {
    const h = k, { menuConfig: n } = E(h), c = x(0), d = x(n.value.topic[0].id), _ = z(() => n.value.topic), i = z(() => n.value.info[d.value]), v = z(() => Object.keys(n.value.info).map((p) => {
      const a = n.value.info[p];
      return !(a.title && a.infoImg && a.contentUrl);
    }));
    return (p, a) => {
      const y = Z;
      return t(), o("div", {
        class: "drop-down-menu b-To-b-intro menu-b-to-b",
        onClick: a[3] || (a[3] = g(() => {
        }, ["prevent", "stop"]))
      }, [
        e("div", Ue, [
          e("section", je, [
            e("article", Ne, [
              e("div", qe, [
                a[4] || (a[4] = e("div", { class: "topic__title transparent" }, "title", -1)),
                (t(!0), o(D, null, S(_.value, (m, r) => (t(), o("div", {
                  class: B(["topic__item", { "topic__item--active": c.value === r }]),
                  key: m.title
                }, [
                  v.value[r] ? (t(), o("a", {
                    key: 0,
                    onClick: a[0] || (a[0] = g(() => {
                    }, ["stop"])),
                    class: "topic-link",
                    href: m.url,
                    target: m.target
                  }, u(m.title), 9, We)) : (t(), j(y, {
                    key: 1,
                    title: m.title,
                    "onCheck:info": (f) => (d.value = m.id, c.value = r)
                  }, null, 8, ["title", "onCheck:info"]))
                ], 2))), 128))
              ])
            ]),
            e("article", Ge, [
              e("div", Ke, [
                e("div", Ye, [
                  e("h2", Re, u(i.value.title), 1),
                  e("p", Je, u(i.value.description), 1),
                  i.value.contentUrl && i.value.contentText ? (t(), o("a", {
                    key: 0,
                    onClick: a[1] || (a[1] = g(() => {
                    }, ["stop"])),
                    class: "more-link",
                    target: i.value.contentTarget,
                    href: i.value.contentUrl
                  }, [
                    e("span", Ve, u(i.value.contentText), 1),
                    a[5] || (a[5] = e("span", { class: "more-link__icon icon-msi-next" }, null, -1))
                  ], 8, Qe)) : C("", !0)
                ]),
                i.value.infoImg ? (t(), o("a", {
                  key: 0,
                  onClick: a[2] || (a[2] = g(() => {
                  }, ["stop"])),
                  class: "intro-img-box",
                  target: i.value.productTarget1,
                  href: i.value.contentUrl
                }, [
                  e("img", {
                    class: "intro-img-box__img",
                    src: i.value.infoImg,
                    alt: i.value.title
                  }, null, 8, Ze)
                ], 8, Xe)) : C("", !0)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), tt = { class: "msi__container" }, ot = { class: "community-intro__content" }, nt = { class: "community--col" }, it = { class: "topic" }, rt = ["href", "target"], at = { class: "community--col" }, lt = { class: "service" }, st = { class: "service__intro" }, ct = { class: "title" }, mt = { class: "text" }, ut = ["target", "href"], pt = { class: "more-link__text" }, dt = ["target", "href"], _t = ["src", "alt"], vt = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuCommunity",
  props: {
    menuConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(k) {
    const h = k, { menuConfig: n } = E(h), c = x(0), d = x(n.value.topic[0].id), _ = z(() => n.value.topic), i = z(() => n.value.info[d.value]), v = z(() => Object.keys(n.value.info).map((p) => {
      const a = n.value.info[p];
      return !(a.title && a.infoImg && a.contentUrl);
    }));
    return (p, a) => {
      const y = Z;
      return t(), o("div", {
        class: "drop-down-menu community-intro menu-community",
        onClick: a[3] || (a[3] = g(() => {
        }, ["prevent", "stop"]))
      }, [
        e("div", tt, [
          e("section", ot, [
            e("article", nt, [
              e("div", it, [
                a[4] || (a[4] = e("div", { class: "topic__title transparent" }, "title", -1)),
                (t(!0), o(D, null, S(_.value, (m, r) => (t(), o("div", {
                  class: B(["topic__item", { "topic__item--active": c.value === r }]),
                  key: m.title
                }, [
                  v.value[r] ? (t(), o("a", {
                    key: 0,
                    onClick: a[0] || (a[0] = g(() => {
                    }, ["stop"])),
                    class: "topic-link",
                    href: m.url,
                    target: m.target
                  }, u(m.title), 9, rt)) : (t(), j(y, {
                    key: 1,
                    title: m.title,
                    "onCheck:info": (f) => (d.value = m.id, c.value = r)
                  }, null, 8, ["title", "onCheck:info"]))
                ], 2))), 128))
              ])
            ]),
            e("article", at, [
              e("div", lt, [
                e("div", st, [
                  e("h2", ct, u(i.value.title), 1),
                  e("p", mt, u(i.value.description), 1),
                  i.value.contentUrl && i.value.contentText ? (t(), o("a", {
                    key: 0,
                    onClick: a[1] || (a[1] = g(() => {
                    }, ["stop"])),
                    class: "more-link",
                    target: i.value.contentTarget,
                    href: i.value.contentUrl
                  }, [
                    e("span", pt, u(i.value.contentText), 1),
                    a[5] || (a[5] = e("span", { class: "more-link__icon icon-msi-next" }, null, -1))
                  ], 8, ut)) : C("", !0)
                ]),
                i.value.infoImg ? (t(), o("a", {
                  key: 0,
                  onClick: a[2] || (a[2] = g(() => {
                  }, ["stop"])),
                  class: "intro-img-box",
                  target: i.value.productTarget1,
                  href: i.value.contentUrl
                }, [
                  e("img", {
                    class: "intro-img-box__img",
                    src: i.value.infoImg,
                    alt: i.value.title
                  }, null, 8, _t)
                ], 8, dt)) : C("", !0)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), gt = { class: "drop-down-menu__content" }, ft = { class: "msi__container default-nav" }, ht = { class: "default-nav__row" }, xt = { class: "custom-link" }, bt = ["href", "target"], yt = { class: "link-title" }, kt = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuDefaultNav",
  props: {
    menuConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(k) {
    const h = k, { menuConfig: n } = E(h);
    return (c, d) => (t(), o("div", {
      class: "drop-down-menu",
      onClick: d[1] || (d[1] = g(() => {
      }, ["prevent", "stop"]))
    }, [
      e("div", gt, [
        e("div", ft, [
          e("div", ht, [
            (t(!0), o(D, null, S(w(n).basement, (_) => (t(), o("div", {
              class: "default-nav__col",
              key: _.title
            }, [
              e("div", xt, [
                e("a", {
                  onClick: d[0] || (d[0] = g(() => {
                  }, ["stop"])),
                  class: "custom-link__item",
                  href: _.url,
                  target: _.target
                }, [
                  e("span", yt, u(_.title), 1),
                  d[2] || (d[2] = e("span", { class: "link-icon icon-msi-next" }, null, -1))
                ], 8, bt)
              ])
            ]))), 128))
          ])
        ])
      ])
    ]));
  }
}), wt = { class: "member-cards__profile" }, $t = { class: "avatar" }, Mt = ["src"], Ct = { class: "user" }, zt = { class: "mail" }, Dt = { class: "member-cards__center member-card" }, St = ["href"], Lt = {
  key: 0,
  class: "member-cards__business member-card"
}, Tt = ["href"], Bt = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuMemberCard",
  props: {
    member: {
      type: Object,
      default: () => ({})
    },
    translation: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["logout"],
  setup(k) {
    const h = k, { member: n, translation: c } = E(h), d = z(() => n.value.avatar ? n.value.avatar : "https://storage-asset.msi.com/frontend/imgs/icon-photo.png"), _ = z(() => {
      if (!(n.value.is_business_member === 1 || n.value.is_business_member === 0)) return !1;
      switch (n.value.is_business_member) {
        case 1:
          return n.value.business_profile_url;
        case 0:
          return n.value.business_register_url;
        default:
          return n.value.business_register_url;
      }
    });
    return (i, v) => {
      var p, a, y;
      return t(), o("div", {
        class: "member-cards",
        onClick: v[3] || (v[3] = g(() => {
        }, ["prevent", "stop"]))
      }, [
        e("div", wt, [
          e("figure", $t, [
            e("img", {
              class: "avatar__img",
              src: d.value,
              alt: ""
            }, null, 8, Mt)
          ]),
          e("div", Ct, u(w(n).full_name), 1),
          e("div", zt, u(w(n).email), 1)
        ]),
        e("div", Dt, [
          e("a", {
            onClick: v[0] || (v[0] = g(() => {
            }, ["stop"])),
            href: w(n).profile_url,
            class: "card-link"
          }, u(((p = w(c)) == null ? void 0 : p.member_center) ?? "Member Center"), 9, St)
        ]),
        _.value ? (t(), o("div", Lt, [
          e("a", {
            onClick: v[1] || (v[1] = g(() => {
            }, ["stop"])),
            href: _.value,
            class: "card-link"
          }, u(((a = w(c)) == null ? void 0 : a.business_center) ?? "Business Center"), 9, Tt)
        ])) : C("", !0),
        e("button", {
          class: "member-cards__logout",
          onClick: v[2] || (v[2] = g((m) => i.$emit("logout", w(n).logout_url), ["prevent", "stop"]))
        }, u(((y = w(c)) == null ? void 0 : y.logout) ?? "Logout"), 1)
      ]);
    };
  }
}), It = { class: "member-login-module" }, Et = { class: "member-login-module-intro" }, Ht = { class: "member-login-module-intro-list" }, Ot = { class: "member-login-module-intro-item" }, Pt = { class: "member-login-module-intro-item" }, At = { class: "member-login-module-wrapper" }, Ft = { class: "member-login-module-link" }, Ut = { class: "member-login-module-link" }, jt = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuMemberLoginModule",
  props: {
    translation: {
      type: Object,
      default: () => ({})
    }
  },
  setup(k) {
    const h = k, { translation: n } = E(h);
    return (c, d) => {
      var _, i, v, p, a;
      return t(), o("div", It, [
        e("p", Et, u(((_ = w(n)) == null ? void 0 : _.login_module_title) ?? "Welcome to MSI"), 1),
        e("ul", Ht, [
          e("li", Ot, u(((i = w(n)) == null ? void 0 : i.login_module_organize) ?? "Organize and access your registered products."), 1),
          e("li", Pt, u(((v = w(n)) == null ? void 0 : v.login_module_benefits) ?? "Unlock exclusive benefits and services."), 1)
        ]),
        e("div", At, [
          e("div", Ft, [
            e("a", {
              onClick: d[0] || (d[0] = g(() => {
              }, ["stop"])),
              href: "https://account.msi.com/",
              class: "login-link"
            }, u(((p = w(n)) == null ? void 0 : p.member_center_login) ?? "Member Login"), 1)
          ]),
          e("div", Ut, [
            e("a", {
              onClick: d[1] || (d[1] = g(() => {
              }, ["stop"])),
              href: "https://business.msi.com/member/signin?source=official",
              class: "login-link business-golden"
            }, u(((a = w(n)) == null ? void 0 : a.member_center_business_login) ?? "Business Login"), 1)
          ])
        ])
      ]);
    };
  }
}), Nt = { class: "msi__container" }, qt = { class: "odm-intro__content" }, Wt = { class: "odm--col" }, Gt = { class: "topic" }, Kt = { class: "odm--col" }, Yt = { class: "service" }, Rt = { class: "service__intro" }, Jt = ["target", "href"], Qt = ["src", "alt"], Vt = { class: "title" }, Xt = { class: "text" }, Zt = ["target", "href"], eo = { class: "more-link__text" }, to = { class: "service__product" }, oo = ["target", "href"], no = { class: "link-img-box" }, io = ["src", "alt"], ro = { class: "text" }, ao = ["target", "href"], lo = { class: "link-img-box" }, so = ["src", "alt"], co = { class: "text" }, mo = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuODMSolution",
  props: {
    menuConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(k) {
    const h = k, { menuConfig: n } = E(h), c = x(0), d = x(n.value.topic[0].id), _ = z(() => n.value.topic), i = z(() => n.value.info[d.value]);
    return (v, p) => {
      const a = Z;
      return t(), o("div", {
        class: "drop-down-menu odm-intro menu-odm-solution",
        onClick: p[4] || (p[4] = g(() => {
        }, ["prevent", "stop"]))
      }, [
        e("div", Nt, [
          e("section", qt, [
            e("article", Wt, [
              e("div", Gt, [
                p[5] || (p[5] = e("div", { class: "topic__title transparent" }, "title", -1)),
                (t(!0), o(D, null, S(_.value, (y, m) => (t(), o("div", {
                  class: B(["topic__item", { "topic__item--active": c.value === m }]),
                  key: y.title
                }, [
                  I(a, {
                    title: y.title,
                    "onCheck:info": (r) => (d.value = y.id, c.value = m)
                  }, null, 8, ["title", "onCheck:info"])
                ], 2))), 128))
              ])
            ]),
            e("article", Kt, [
              e("div", Yt, [
                e("div", Rt, [
                  i.value.infoImg ? (t(), o("a", {
                    key: 0,
                    onClick: p[0] || (p[0] = g(() => {
                    }, ["stop"])),
                    class: "intro-img-box",
                    target: i.value.productTarget1,
                    href: i.value.contentUrl
                  }, [
                    e("img", {
                      class: "intro-img-box__img",
                      src: i.value.infoImg,
                      alt: i.value.title
                    }, null, 8, Qt)
                  ], 8, Jt)) : C("", !0),
                  e("h2", Vt, u(i.value.title), 1),
                  e("p", Xt, u(i.value.description), 1),
                  i.value.contentUrl && i.value.contentText ? (t(), o("a", {
                    key: 1,
                    onClick: p[1] || (p[1] = g(() => {
                    }, ["stop"])),
                    class: "more-link",
                    target: i.value.contentTarget,
                    href: i.value.contentUrl
                  }, [
                    e("span", eo, u(i.value.contentText), 1),
                    p[6] || (p[6] = e("span", { class: "more-link__icon icon-msi-next" }, null, -1))
                  ], 8, Zt)) : C("", !0)
                ]),
                e("div", to, [
                  e("a", {
                    onClick: p[2] || (p[2] = g(() => {
                    }, ["stop"])),
                    class: "service-link",
                    target: i.value.productTarget1,
                    href: i.value.productUrl1
                  }, [
                    e("figure", no, [
                      e("img", {
                        class: "link-img-box__img",
                        src: i.value.productImage1,
                        alt: i.value.productTitle1
                      }, null, 8, io),
                      e("figcaption", ro, u(i.value.productTitle1), 1)
                    ])
                  ], 8, oo),
                  e("a", {
                    onClick: p[3] || (p[3] = g(() => {
                    }, ["stop"])),
                    class: "service-link",
                    target: i.value.productTarget2,
                    href: i.value.productUrl2
                  }, [
                    e("figure", lo, [
                      e("img", {
                        class: "link-img-box__img",
                        src: i.value.productImage2,
                        alt: i.value.productTitle2
                      }, null, 8, so),
                      e("figcaption", co, u(i.value.productTitle2), 1)
                    ])
                  ], 8, ao)
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), uo = { class: "msi-nav-product-line" }, po = { class: "msi-nav-product-line__operations" }, _o = ["onClick"], vo = { class: "product-line-item__title" }, go = ["onClick", "href", "target"], fo = { class: "product-line-item__title" }, ho = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuProductLine",
  props: {
    operations: {
      type: Array,
      default: () => [
        {
          id: 1,
          title: "Laptops",
          icon: "icon-msi-nb",
          url: "",
          link_target: ""
        }
      ]
    }
  },
  emits: ["render", "update:gaevent"],
  setup(k, { emit: h }) {
    const n = h, c = k, { operations: d } = E(c), _ = x(0);
    function i(v, p) {
      _.value = p, n("render", v.id);
    }
    return (v, p) => (t(), o("section", uo, [
      e("div", po, [
        (t(!0), o(D, null, S(w(d), (a, y) => (t(), o("div", {
          class: B(["product-line-col", { "product-line-col--active": _.value === y }]),
          key: a.title
        }, [
          a.url ? (t(), o("a", {
            key: 1,
            onClick: [
              g((m) => _.value = y, ["stop"]),
              (m) => v.$emit("update:gaevent", {
                event: "menu_productLine",
                click_text: a.title,
                link_url: a.url
              })
            ],
            href: a.url,
            target: a.target,
            class: B(["product-line-item", { "product-line-item--active": _.value === y }])
          }, [
            e("i", {
              class: B(["product-line-item__icon", a.icon])
            }, null, 2),
            e("span", fo, u(a.title), 1)
          ], 10, go)) : (t(), o("button", {
            key: 0,
            class: "product-line-item",
            onClick: [
              g((m) => v.$emit("update:gaevent", {
                event: "menu_productLine",
                click_text: a.title,
                link_url: ""
              }), ["prevent"]),
              g((m) => i(a, y), ["prevent", "stop"])
            ]
          }, [
            e("i", {
              class: B(["product-line-item__icon", a.icon])
            }, null, 2),
            e("span", vo, u(a.title), 1)
          ], 8, _o))
        ], 2))), 128))
      ])
    ]));
  }
}), xo = { class: "product-intro__product-group" }, bo = { class: "msi__container product-line" }, yo = { class: "msi__container" }, ko = { class: "product--col" }, wo = { class: "topic" }, $o = ["href", "target"], Mo = { class: "link-area" }, Co = { class: "link-area__title" }, zo = ["onClick", "href", "target", "onMouseover"], Do = { class: "item-link__text" }, So = { class: "link-title" }, Lo = { class: "item-link__sub-title" }, To = { class: "item-description" }, Bo = { class: "product--col" }, Io = { class: "link-area" }, Eo = { class: "link-area__title" }, Ho = ["onClick", "href", "target"], Oo = { class: "product--col" }, Po = {
  key: 0,
  class: "intro-area"
}, Ao = {
  key: 0,
  class: "labelTitle"
}, Fo = {
  key: 1,
  class: "text"
}, Uo = { class: "intro-area__info" }, jo = { class: "intro-img-box" }, No = ["href"], qo = ["src", "alt"], Wo = {
  key: 0,
  class: "intro-title"
}, Go = {
  key: 1,
  class: "intro-sub-title"
}, Ko = {
  key: 0,
  class: "intro-area__more"
}, Yo = ["href", "target"], Ro = { class: "more-link__text" }, Jo = {
  key: 1,
  class: "intro-area__gradient"
}, Qo = ["href", "target"], Vo = { class: "gradient-link__text" }, Xo = {
  key: 2,
  class: "intro-area__feature-link"
}, Zo = ["href", "target"], en = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuProduct",
  props: {
    menuConfig: {
      type: Object,
      default: () => {
      }
    },
    menuTranslation: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(k) {
    const h = k, { menuConfig: n, menuTranslation: c } = E(h), d = x(0), _ = x(null), i = x(
      n.value.productline[n.value.productlineGroup[0].id][0].id
    ), v = x(n.value.productlineGroup[0].id), p = z(() => a.value.map((l) => !!(n.value.series[l.id].length || n.value.explore[l.id].length || Object.keys(n.value.info[l.id]).length))), a = z(() => n.value.productline[v.value]), y = z(() => n.value.series[i.value]), m = z(() => n.value.explore[i.value]), r = z(() => n.value.info[i.value]);
    function f(l) {
      v.value = l, i.value = a.value[0].id, d.value = 0;
    }
    return (l, s) => {
      var W, Y, re;
      const $ = ho, L = Z;
      return t(), o("section", {
        class: "drop-down-menu product-intro",
        onClick: s[8] || (s[8] = g(() => {
        }, ["prevent", "stop"]))
      }, [
        e("div", xo, [
          e("div", bo, [
            I($, {
              operations: ((W = w(n)) == null ? void 0 : W.productlineGroup) ?? [],
              "onUpdate:gaevent": s[0] || (s[0] = (M) => l.$emit("update:gaevent", M)),
              onRender: f
            }, null, 8, ["operations"])
          ])
        ]),
        e("div", yo, [
          e("section", {
            class: "product-intro__content",
            onMouseover: s[7] || (s[7] = g((M) => _.value = null, ["self"]))
          }, [
            e("article", ko, [
              e("div", wo, [
                s[9] || (s[9] = e("h3", { class: "topic__title transparent" }, "title", -1)),
                (t(!0), o(D, null, S(a.value, (M, H) => (t(), o("div", {
                  class: B(["topic__item", { "topic__item--active": d.value === H }]),
                  key: M.title
                }, [
                  p.value[H] ? (t(), j(L, {
                    key: 1,
                    title: M.title,
                    "onCheck:info": (U) => (i.value = M.id, d.value = H)
                  }, null, 8, ["title", "onCheck:info"])) : (t(), o("a", {
                    key: 0,
                    onClick: s[1] || (s[1] = g(() => {
                    }, ["stop"])),
                    class: "topic-link",
                    href: M.url,
                    target: M.target
                  }, u(M.title), 9, $o))
                ], 2))), 128))
              ])
            ]),
            e("article", {
              class: "product--col",
              onMouseover: s[2] || (s[2] = g((M) => _.value = null, ["self"]))
            }, [
              e("div", Mo, [
                e("p", Co, u(((Y = w(c)) == null ? void 0 : Y.series) ?? "series"), 1),
                (t(!0), o(D, null, S(y.value, (M, H) => (t(), o("div", {
                  class: "link-area__item",
                  key: M.title
                }, [
                  e("a", {
                    onClick: g((U) => l.$emit("update:gaevent", {
                      event: "menu_itemLink",
                      click_text: M.title,
                      link_url: M.url
                    }), ["stop"]),
                    class: "item-link",
                    href: M.url,
                    target: M.target,
                    onMouseover: (U) => _.value = H
                  }, [
                    e("div", Do, [
                      M.icon ? (t(), o("i", {
                        key: 0,
                        class: B([M.icon, "text-icon"])
                      }, null, 2)) : C("", !0),
                      e("span", So, u(M.title), 1)
                    ]),
                    J(e("div", Lo, [
                      e("span", To, u(M.tip), 1)
                    ], 512), [
                      [Q, M.tip && _.value === H]
                    ])
                  ], 40, zo)
                ]))), 128))
              ])
            ], 32),
            e("article", Bo, [
              e("div", Io, [
                e("p", Eo, u(((re = w(c)) == null ? void 0 : re.explore) ?? "explore"), 1),
                (t(!0), o(D, null, S(m.value, (M) => (t(), o("div", {
                  class: "link-area__item",
                  key: M.title
                }, [
                  e("a", {
                    onClick: g((H) => l.$emit("update:gaevent", {
                      event: "menu_itemLink",
                      click_text: M.title,
                      link_url: M.url
                    }), ["stop"]),
                    class: "item-link",
                    href: M.url,
                    target: M.target
                  }, u(M.title), 9, Ho)
                ]))), 128))
              ])
            ]),
            e("article", Oo, [
              r.value ? (t(), o("div", Po, [
                e("div", {
                  class: B(["intro-area__label", { "intro-area__label--active": !r.value.label }])
                }, [
                  r.value.label ? (t(), o("span", Ao, u(r.value.label), 1)) : (t(), o("span", Fo, "title"))
                ], 2),
                e("div", Uo, [
                  e("figure", jo, [
                    e("a", {
                      onClick: s[3] || (s[3] = g(() => {
                      }, ["stop"])),
                      class: "intro-img-box__link",
                      href: r.value.url
                    }, [
                      r.value.image ? (t(), o("img", {
                        key: 0,
                        class: "intro-img",
                        src: r.value.image,
                        alt: r.value.title
                      }, null, 8, qo)) : C("", !0)
                    ], 8, No)
                  ]),
                  r.value.title ? (t(), o("p", Wo, u(r.value.title), 1)) : C("", !0),
                  r.value.subtitle ? (t(), o("p", Go, u(r.value.subtitle), 1)) : C("", !0)
                ]),
                r.value.url && r.value.linkText ? (t(), o("div", Ko, [
                  e("a", {
                    onClick: s[4] || (s[4] = g(() => {
                    }, ["stop"])),
                    href: r.value.url,
                    target: r.value.target,
                    class: "more-link"
                  }, [
                    e("span", Ro, u(r.value.linkText), 1),
                    s[10] || (s[10] = e("span", { class: "more-link__icon icon-msi-next" }, null, -1))
                  ], 8, Yo)
                ])) : C("", !0),
                r.value.featureTitle && r.value.featureUrl ? (t(), o("div", Jo, [
                  e("a", {
                    onClick: s[5] || (s[5] = g(() => {
                    }, ["stop"])),
                    href: r.value.featureUrl,
                    target: r.value.featureTarget,
                    class: "gradient-link"
                  }, [
                    e("p", Vo, u(r.value.featureTitle), 1)
                  ], 8, Qo)
                ])) : C("", !0),
                r.value.featureLinkTitle && r.value.featureLinkUrl ? (t(), o("div", Xo, [
                  e("a", {
                    onClick: s[6] || (s[6] = g(() => {
                    }, ["stop"])),
                    href: r.value.featureLinkUrl,
                    target: r.value.featureLinkTarget,
                    class: "feature-link"
                  }, u(r.value.featureLinkTitle), 9, Zo)
                ])) : C("", !0)
              ])) : C("", !0)
            ])
          ], 32)
        ])
      ]);
    };
  }
}), tn = { class: "search-form" }, on = { class: "msi__container" }, nn = { class: "search-container" }, rn = ["value"], an = {
  key: 0,
  class: "quick-link"
}, ln = ["onClick"], sn = {
  __name: "MenuSearch",
  props: {
    searchList: {
      type: Array,
      default: () => []
    },
    initKeyword: {
      type: String,
      default: ""
    }
  },
  emits: [
    "remove:searchKeyword",
    "moveTo:searchPage",
    "update:searchList",
    "remove:autoComplete"
  ],
  setup(k, { emit: h }) {
    const n = h, c = k, { searchList: d, initKeyword: _ } = E(c), i = x(f(_.value));
    function v(l) {
      if (!l) return alert("type something");
      n("remove:searchKeyword"), n("moveTo:searchPage", l);
    }
    function p(l) {
      const s = f(l);
      v(s);
    }
    function a(l) {
      !l.target.value && (d.value = []);
    }
    function y() {
      i.value ? (i.value = "", n("remove:autoComplete")) : n("remove:searchKeyword");
    }
    const m = x(null);
    function r(l) {
      i.value = f(l.target.value), m.value && clearTimeout(m.value), m.value = setTimeout(() => {
        i.value && n("update:searchList", i.value), m.value = null;
      }, 400);
    }
    function f(l) {
      const s = /\//g;
      return decodeURI(l).replace(s, " ");
    }
    return (l, s) => (t(), o("div", {
      class: "drop-down-menu",
      onClick: s[1] || (s[1] = g(($) => l.$emit("remove:autoComplete"), ["prevent", "stop"]))
    }, [
      e("form", tn, [
        e("div", on, [
          e("div", nn, [
            e("button", {
              class: "search-button",
              onClick: s[0] || (s[0] = g(($) => v(i.value), ["prevent"]))
            }, [...s[2] || (s[2] = [
              e("span", { class: "search-button__icon icon-msi-search" }, null, -1)
            ])]),
            e("input", {
              class: "search-text",
              type: "text",
              autocomplete: "off",
              placeholder: "Search",
              value: i.value,
              onKeyup: Ie(a, ["delete"]),
              onInput: r
            }, null, 40, rn),
            e("button", {
              type: "reset",
              class: "close-search",
              onClick: g(y, ["prevent"])
            }, [...s[3] || (s[3] = [
              e("span", { class: "close-search__icon icon-msi-close" }, null, -1)
            ])]),
            I(F, {
              name: "fade",
              mode: "out-in"
            }, {
              default: A(() => [
                w(d).length ? (t(), o("div", an, [
                  (t(!0), o(D, null, S(w(d), ($) => (t(), o("div", {
                    class: "quick-link__item",
                    onClick: g((L) => p($), ["prevent"]),
                    key: $
                  }, u($), 9, ln))), 128))
                ])) : C("", !0)
              ]),
              _: 1
            })
          ])
        ])
      ])
    ]));
  }
}, cn = { class: "msi__container" }, mn = { class: "spport-list__content" }, un = { class: "community--col" }, pn = { class: "topic" }, dn = ["href", "target"], _n = { class: "community--col" }, vn = { class: "service" }, gn = { class: "service__intro" }, fn = { class: "title" }, hn = { class: "text" }, xn = ["target", "href"], bn = { class: "more-link__text" }, yn = ["target", "href"], kn = ["src", "alt"], wn = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuSupportList",
  props: {
    menuConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(k) {
    const h = k, { menuConfig: n } = E(h), c = x(0), d = x(n.value.topic[0].id), _ = z(() => n.value.topic), i = z(() => n.value.info[d.value]), v = z(() => Object.keys(n.value.info).map((p) => {
      const a = n.value.info[p];
      return !(a.title && a.infoImg && a.contentUrl);
    }));
    return (p, a) => {
      const y = Z;
      return t(), o("div", {
        class: "drop-down-menu spport-list menu-support-list",
        onClick: a[3] || (a[3] = g(() => {
        }, ["prevent", "stop"]))
      }, [
        e("div", cn, [
          e("section", mn, [
            e("article", un, [
              e("div", pn, [
                a[4] || (a[4] = e("div", { class: "topic__title transparent" }, "title", -1)),
                (t(!0), o(D, null, S(_.value, (m, r) => (t(), o("div", {
                  class: B(["topic__item", { "topic__item--active": c.value === r }]),
                  key: m.title
                }, [
                  v.value[r] ? (t(), o("a", {
                    key: 0,
                    onClick: a[0] || (a[0] = g(() => {
                    }, ["stop"])),
                    class: "topic-link",
                    href: m.url,
                    target: m.target
                  }, u(m.title), 9, dn)) : (t(), j(y, {
                    key: 1,
                    title: m.title,
                    "onCheck:info": (f) => (d.value = m.id, c.value = r)
                  }, null, 8, ["title", "onCheck:info"]))
                ], 2))), 128))
              ])
            ]),
            e("article", _n, [
              e("div", vn, [
                e("div", gn, [
                  e("h2", fn, u(i.value.title), 1),
                  e("p", hn, u(i.value.description), 1),
                  i.value.contentUrl && i.value.contentText ? (t(), o("a", {
                    key: 0,
                    onClick: a[1] || (a[1] = g(() => {
                    }, ["stop"])),
                    class: "more-link",
                    target: i.value.contentTarget,
                    href: i.value.contentUrl
                  }, [
                    e("span", bn, u(i.value.contentText), 1),
                    a[5] || (a[5] = e("span", { class: "more-link__icon icon-msi-next" }, null, -1))
                  ], 8, xn)) : C("", !0)
                ]),
                i.value.infoImg ? (t(), o("a", {
                  key: 0,
                  onClick: a[2] || (a[2] = g(() => {
                  }, ["stop"])),
                  class: "intro-img-box",
                  target: i.value.productTarget1,
                  href: i.value.contentUrl
                }, [
                  e("img", {
                    class: "intro-img-box__img",
                    src: i.value.infoImg,
                    alt: i.value.title
                  }, null, 8, kn)
                ], 8, yn)) : C("", !0)
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), $n = { class: "msi__container" }, Mn = { class: "what-new__content" }, Cn = { class: "what-new--col" }, zn = { class: "topic" }, Dn = { class: "what-new--col" }, Sn = { class: "news-info" }, Ln = { class: "news-info__intro" }, Tn = { class: "news-info__intro__list" }, Bn = ["href", "onMouseover"], In = ["href"], En = { class: "more-link__text" }, Hn = {
  key: 1,
  class: "news-info__intro__title"
}, On = {
  key: 2,
  class: "news-info__intro__list"
}, Pn = ["href"], An = { class: "news-info__img" }, Fn = ["href"], Un = {
  key: 0,
  class: "img-box"
}, jn = ["src", "alt"], Nn = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuWhatNew",
  props: {
    menuConfig: {
      type: Object,
      default: () => {
      }
    },
    menuTranslation: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(k) {
    const h = k, { menuConfig: n, menuTranslation: c } = E(h), d = x(0), _ = x(n.value.topic[0].id), i = x({
      ...n.value.info[n.value.topic[0].id].listLink[0]
    }), v = z(() => n.value.topic), p = z(() => n.value.info[_.value]), a = z(() => n.value.topic[d.value].url);
    function y(m, r) {
      _.value = m, d.value = r, p.value ? i.value = {
        ...p.value.listLink[0]
      } : i.value = {
        img: "",
        alt: "",
        link: ""
      };
    }
    return (m, r) => {
      var l, s;
      const f = Z;
      return t(), o("div", {
        class: "drop-down-menu what-new menu-what-new",
        onClick: r[4] || (r[4] = g(() => {
        }, ["prevent", "stop"]))
      }, [
        e("div", $n, [
          e("section", Mn, [
            e("article", Cn, [
              e("div", zn, [
                r[5] || (r[5] = e("h3", { class: "topic__title transparent" }, "title", -1)),
                (t(!0), o(D, null, S(v.value, ($, L) => (t(), o("div", {
                  class: B(["topic__item", { "topic__item--active": d.value === L }]),
                  key: $.title
                }, [
                  I(f, {
                    title: $.title,
                    "onCheck:info": (W) => y($.id, L)
                  }, null, 8, ["title", "onCheck:info"])
                ], 2))), 128))
              ])
            ]),
            e("article", Dn, [
              e("div", Sn, [
                e("div", Ln, [
                  e("h2", {
                    class: B(["news-info__intro__title", { transparent: !p.value.title }])
                  }, u(p.value.title || "title"), 3),
                  e("ul", Tn, [
                    (t(!0), o(D, null, S(p.value.listLink, ($) => (t(), o("li", {
                      class: "news-info__intro__list__item",
                      key: $.title
                    }, [
                      e("a", {
                        onClick: r[0] || (r[0] = g(() => {
                        }, ["stop"])),
                        class: "news-infoLink",
                        href: $.url,
                        onMouseover: (L) => i.value = {
                          ...i.value,
                          img: $.img,
                          alt: $.title,
                          link: $.url
                        }
                      }, u($.title), 41, Bn)
                    ]))), 128))
                  ]),
                  a.value ? (t(), o("a", {
                    key: 0,
                    onClick: r[1] || (r[1] = g(() => {
                    }, ["stop"])),
                    class: "more-link",
                    href: a.value
                  }, [
                    e("span", En, u(w(c).learnmore), 1),
                    r[6] || (r[6] = e("span", { class: "more-link__icon icon-msi-next" }, null, -1))
                  ], 8, In)) : C("", !0),
                  (l = p.value.tag) != null && l.length ? (t(), o("h2", Hn, u(p.value.tagTitle), 1)) : C("", !0),
                  (s = p.value.tag) != null && s.length ? (t(), o("ul", On, [
                    (t(!0), o(D, null, S(p.value.tag, ($) => (t(), o("li", {
                      class: "news-info__intro__list__item",
                      key: $.id
                    }, [
                      e("a", {
                        onClick: r[2] || (r[2] = g(() => {
                        }, ["stop"])),
                        class: "news-infoLink",
                        href: $.link
                      }, u($.title), 9, Pn)
                    ]))), 128))
                  ])) : C("", !0)
                ]),
                e("div", An, [
                  r[7] || (r[7] = e("h2", { class: "transparent" }, "title", -1)),
                  e("a", {
                    onClick: r[3] || (r[3] = g(() => {
                    }, ["stop"])),
                    class: "intro-service-link",
                    href: i.value.link
                  }, [
                    i.value.img ? (t(), o("figure", Un, [
                      e("img", {
                        class: "img-box__img",
                        src: i.value.img,
                        alt: i.value.alt
                      }, null, 8, jn)
                    ])) : C("", !0)
                  ], 8, Fn)
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
}), qn = { class: "mobile-menu" }, Wn = { class: "msi__container" }, Gn = ["target", "href"], Kn = { class: "action__title" }, Yn = ["onClick"], Rn = { class: "action__title" }, Jn = {
  key: 0,
  class: "drop-content"
}, Qn = ["onClick"], Vn = { class: "action__context" }, Xn = { class: "title" }, Zn = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuMobileMenu",
  props: {
    mobileMenu: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["update:gaevent"],
  setup(k) {
    const h = k, { mobileMenu: n } = E(h), c = te({
      productSub: xi,
      mobileSub: Ci
    }), d = x(null), _ = x(null), i = x({}), v = x([]), p = z(() => n.value.menu), a = z(() => n.value.menuList);
    function y(f, l) {
      const s = a.value[f.id].productlineGroup;
      if (!s) {
        d.value = null, m(f);
        return;
      }
      v.value = s, d.value = d.value === l ? null : l;
    }
    function m(f) {
      _.value = "mobileSub";
      const l = a.value[f.id].topic;
      i.value = {
        title: f.title,
        topic: l || a.value[f.id].basement
      };
    }
    function r(f, l) {
      _.value = "productSub";
      const s = a.value[f.id];
      i.value = {
        title: f.title,
        productlineGroup: l,
        productline: s.productline,
        series: s.series,
        explore: s.explore,
        gradient: s.info
      };
    }
    return (f, l) => (t(), o("ul", qn, [
      (t(!0), o(D, null, S(p.value, (s, $) => (t(), o("li", {
        class: "mobile-menu__item",
        key: s.title
      }, [
        e("div", Wn, [
          s.url ? (t(), o("a", {
            key: 0,
            class: "action",
            target: s.target,
            href: s.url
          }, [
            e("span", Kn, u(s.title), 1),
            l[2] || (l[2] = e("span", { class: "action__arrow-icon icon-msi-next" }, null, -1))
          ], 8, Gn)) : (t(), o("button", {
            key: 1,
            class: "action",
            onClick: g((L) => y(s, $), ["prevent", "stop"])
          }, [
            e("span", Rn, u(s.title), 1),
            l[3] || (l[3] = e("span", { class: "action__arrow-icon icon-msi-next" }, null, -1))
          ], 8, Yn))
        ]),
        I(F, { name: "navDrop" }, {
          default: A(() => [
            d.value === $ ? (t(), o("ul", Jn, [
              (t(!0), o(D, null, S(v.value, (L) => (t(), o("li", {
                class: "drop-content__item msi__container",
                key: L.title
              }, [
                e("button", {
                  class: "action",
                  onClick: [
                    g((W) => r(s, L), ["prevent", "stop"]),
                    g((W) => f.$emit("update:gaevent", {
                      event: "menu_productLine",
                      click_text: L.title,
                      link_url: ""
                    }), ["prevent"])
                  ]
                }, [
                  e("div", Vn, [
                    e("span", {
                      class: B(["icon", L.icon])
                    }, null, 2),
                    e("span", Xn, u(L.title), 1)
                  ]),
                  l[4] || (l[4] = e("span", { class: "action__arrow-icon icon-msi-next" }, null, -1))
                ], 8, Qn)
              ]))), 128))
            ])) : C("", !0)
          ]),
          _: 2
        }, 1024)
      ]))), 128)),
      I(F, { name: "fade" }, {
        default: A(() => [
          (t(), j(oe(w(c)[_.value]), {
            "onUpdate:gaevent": l[0] || (l[0] = (s) => f.$emit("update:gaevent", s)),
            "sub-menu-config": i.value,
            onBack: l[1] || (l[1] = (s) => _.value = null)
          }, null, 40, ["sub-menu-config"]))
        ]),
        _: 1
      })
    ]));
  }
}), ei = { class: "common-sub" }, ti = { class: "sub-product msi__container" }, oi = { class: "sub-product-title" }, ni = { class: "sub-product-line" }, ii = { class: "product-list" }, ri = { class: "product-list__item" }, ai = { class: "title" }, li = { class: "msi__container" }, si = ["onClick"], ci = { class: "topic-item__title" }, mi = ["href", "target"], ui = {
  key: 0,
  class: "topic-link"
}, pi = { class: "msi__container" }, di = { class: "list" }, _i = { class: "list__item" }, vi = ["onClick", "target", "href"], gi = { class: "list" }, fi = { class: "list__item" }, hi = ["onClick", "target", "href"], xi = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuMobileProduct",
  props: {
    subMenuConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["back", "update:gaevent"],
  setup(k) {
    const h = k, { subMenuConfig: n } = E(h), c = x(null), d = x([]), _ = x([]), i = z(() => n.value.title), v = z(() => n.value.productlineGroup), p = z(() => n.value.productline);
    function a(y, m) {
      c.value = c.value === m ? null : m, d.value = n.value.series[y], _.value = n.value.explore[y];
    }
    return (y, m) => (t(), o("section", ei, [
      e("div", ti, [
        e("button", {
          class: "sub-product__action",
          onClick: m[0] || (m[0] = g((r) => y.$emit("back"), ["prevent", "stop"]))
        }, [
          m[2] || (m[2] = e("span", { class: "sub-roduct-icon icon-msi-prev" }, null, -1)),
          e("span", oi, u(i.value), 1)
        ])
      ]),
      e("article", ni, [
        e("ul", {
          class: "msi__container",
          onClick: m[1] || (m[1] = g(() => {
          }, ["prevent", "stop"]))
        }, [
          e("li", ii, [
            e("div", ri, [
              e("span", {
                class: B(["icon", v.value.icon])
              }, null, 2),
              e("span", ai, u(v.value.title), 1)
            ]),
            m[3] || (m[3] = e("span", { class: "product-list__icon icon-msi-next" }, null, -1))
          ])
        ])
      ]),
      (t(!0), o(D, null, S(p.value[v.value.id], (r, f) => (t(), o("article", {
        class: "sub-product-topic",
        key: r.title
      }, [
        e("div", li, [
          w(n).series[r.id].length || w(n).explore[r.id].length ? (t(), o("button", {
            key: 0,
            class: "topic-item",
            onClick: g((l) => a(r.id, f), ["prevent", "stop"])
          }, [
            e("span", ci, u(r.title), 1),
            e("span", {
              class: B(["topic-item__icon icon-msi-next", { "topic-item__icon--active": c.value === f }])
            }, null, 2)
          ], 8, si)) : (t(), o("a", {
            key: 1,
            class: "topic-item",
            href: r.url,
            target: r.target
          }, u(r.title), 9, mi))
        ]),
        I(F, { name: "navDrop" }, {
          default: A(() => [
            c.value === f ? (t(), o("section", ui, [
              e("div", pi, [
                e("ul", di, [
                  e("li", _i, [
                    m[4] || (m[4] = e("h3", { class: "title" }, "SERIES", -1)),
                    (t(!0), o(D, null, S(d.value, (l) => (t(), o("div", {
                      key: l.title
                    }, [
                      e("a", {
                        onClick: (s) => y.$emit("update:gaevent", {
                          event: "menu_itemLink",
                          click_text: l.title,
                          link_url: l.url
                        }),
                        class: "link",
                        target: l.target,
                        href: l.url
                      }, u(l.title), 9, vi)
                    ]))), 128))
                  ])
                ]),
                e("ul", gi, [
                  e("li", fi, [
                    m[5] || (m[5] = e("h3", { class: "title" }, "EXPLORE", -1)),
                    (t(!0), o(D, null, S(_.value, (l) => (t(), o("div", {
                      key: l.title
                    }, [
                      e("a", {
                        onClick: (s) => y.$emit("update:gaevent", {
                          event: "menu_itemLink",
                          click_text: l.title,
                          link_url: l.url
                        }),
                        class: "link",
                        target: l.target,
                        href: l.url
                      }, u(l.title), 9, hi)
                    ]))), 128))
                  ])
                ])
              ])
            ])) : C("", !0)
          ]),
          _: 2
        }, 1024)
      ]))), 128))
    ]));
  }
}), bi = { class: "mobile-sub common-sub" }, yi = { class: "msi__container" }, ki = { class: "action__title" }, wi = { class: "mobile-sub__content" }, $i = { class: "msi__container" }, Mi = ["target", "href"], Ci = /* @__PURE__ */ Object.assign({
  inheritAttrs: !1
}, {
  __name: "MenuMobileSub",
  props: {
    subMenuConfig: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["back"],
  setup(k) {
    const h = k, { subMenuConfig: n } = E(h);
    return (c, d) => (t(), o("section", bi, [
      e("div", yi, [
        e("button", {
          class: "action",
          onClick: d[0] || (d[0] = g((_) => c.$emit("back"), ["prevent", "stop"]))
        }, [
          d[1] || (d[1] = e("span", { class: "action__icon icon-msi-prev" }, null, -1)),
          e("span", ki, u(w(n).title), 1)
        ])
      ]),
      e("article", wi, [
        e("ul", $i, [
          (t(!0), o(D, null, S(w(n).topic, (_) => (t(), o("li", {
            class: "topic",
            key: _.title
          }, [
            e("a", {
              class: "topic__link",
              target: _.target,
              href: _.url
            }, u(_.title), 9, Mi)
          ]))), 128))
        ])
      ])
    ]));
  }
}), zi = '@import"https://storage-asset.msi.com/msisite/css/common-msi-icons.css";.arrow-button{display:flex;width:100%;justify-content:space-between;align-items:center;padding:10px 10px 10px 0;color:var(--color-gray-400);font-weight:700}.arrow-button:hover{color:var(--color-gray-800)}.main-area__menu .home-link__logo img,.operation-sub-logo .sub-link__img,.member-cards__profile .avatar__img,.spport-list .service .intro-img-box__img,.b-To-b-intro .service .intro-img-box__img,.community-intro .service .intro-img-box__img,.odm-intro__content .service__intro .intro-img-box__img,.odm-intro__content .service__product .service-link__img,.odm-intro__content .service__product .service-link .link-img-box__img,.product-intro .intro-area__info .intro-img-box__link .intro-img{width:100%;vertical-align:middle}.menu-action__item:hover:before,.menu-action__item.menu-action__item--active:before{width:100%;height:3px}.msi__container{position:relative;padding:0 25px;margin:0 auto}@media(min-width:1300px){.msi__container{max-width:1330px}}@media(min-width:1300px){.msi__container.product-line{max-width:none}}.fade-enter-active{animation:fadeIn .5s}.fade-leave-active{animation:fadeOut .5s}.fadeFaster-enter-active{animation:fadeIn .2s}.fadeFaster-leave-active{animation:fadeOut .2s}.navDrop-enter-active{animation:navDrop 1s}.navDrop-leave-active{animation:navCollapse .5s}.fall-enter-active{transition:opacity .5s,transform .3s;position:absolute;right:0;left:0}.fall-leave-active{transition:opacity .3s,transform .3s;position:absolute;right:0;left:0}.fall-enter-to,.fall-leave-from{opacity:1;transform:translateY(0)}.fall-leave-to,.fall-enter-from{opacity:0;transform:translateY(-20px)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes navDrop{0%{opacity:0;max-height:0}50%{max-height:1000px}to{opacity:1}}@keyframes navCollapse{0%{opacity:1;max-height:1000px}to{opacity:0;max-height:0}}.footerDrop-enter-active{animation:footerDrop .5s;overflow:hidden}.footerDrop-leave-active{animation:footerCollapse .5s;overflow:hidden}@keyframes footerDrop{0%{max-height:0}to{max-height:300px}}@keyframes footerCollapse{0%{max-height:300px}to{max-height:0}}.productHeaderDrop-enter-active{animation:productHeaderDrop .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-enter-active{animation:productHeaderDrop-lg .5s}}.productHeaderDrop-leave-active{animation:productHeaderCollapse .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-leave-active{animation:productHeaderCollapse-lg .5s}}@keyframes productHeaderDrop{0%{max-height:0}to{max-height:150px}}@keyframes productHeaderCollapse{0%{max-height:150px}to{max-height:0}}@keyframes productHeaderDrop-lg{0%{max-height:0}to{max-height:70px}}@keyframes productHeaderCollapse-lg{0%{max-height:70px}to{max-height:0}}.product-line-col.product-line-col--active:before{width:100%;height:3px}.product-intro .intro-area__info .intro-sub-title,.product-intro .intro-area__info .intro-title,.product-intro .link-area__item .item-link{font-size:14px}@media(min-width:2560px){.product-intro .intro-area__info .intro-sub-title,.product-intro .intro-area__info .intro-title,.product-intro .link-area__item .item-link{font-size:16px}}.product-intro .product-intro__content{display:flex}.product-intro .product-intro__content .product--col{flex:1 0 0;padding-bottom:30px}.product-intro .product-intro__content .product--col:nth-child(n+2){margin-left:28px}.product-intro .product-intro__content .product--col:nth-child(-n+3){box-shadow:3px 0 0 -1px #eee}.product-intro .product-intro__product-group{background-color:#eee}.product-intro .topic__title{margin:15px 0;color:var(--color-gray-400);padding:5px 0}.product-intro .topic__title.transparent{color:transparent}.product-intro .topic__item{margin-top:5px}.product-intro .topic__item:hover,.product-intro .topic__item--active{color:var(--color-gray-800);box-shadow:-3px 0 0 -1px inset var(--color-gray-800)}.product-intro .topic__item:hover .arrow-button,.product-intro .topic__item--active .arrow-button{color:var(--color-gray-800)}.product-intro .topic__item .topic-link{display:inline-block;padding:10px 10px 10px 0;color:var(--color-gray-500);font-weight:700}.product-intro .topic__item .topic-link:hover{color:var(--color-gray-800)}.product-intro .topic__item .arrow-button{text-align:left}.product-intro .link-area__title{margin:15px 0;color:var(--color-gray-400);font-size:12px;padding:5px 0;text-transform:uppercase}.product-intro .link-area__item{padding:5.5px 0}.product-intro .link-area__item .item-link{padding:1px 0;position:relative;display:inline-block;color:var(--color-gray-800);text-decoration:none}.product-intro .link-area__item .item-link:hover:before{content:"";position:absolute;right:0;left:0;bottom:0;height:1px;background-color:var(--color-gray-400)}.product-intro .link-area__item .item-link__text{display:flex;align-items:center}.product-intro .link-area__item .item-link__text .text-icon{font-size:26px}.product-intro .link-area__item .item-link__sub-title{margin-left:10px;color:var(--color-white);display:flex;align-items:center;position:absolute;top:0;left:100%;width:300px;z-index:1}.product-intro .link-area__item .item-link__sub-title:before{content:"";display:block;width:0;height:0;border:solid;border-width:2.5px 5px 2.5px 0;border-color:transparent var(--color-gray-400) transparent transparent}.product-intro .link-area__item .item-link__sub-title .item-description{padding:2px 10px;background-color:var(--color-gray-400);border-radius:2px;font-size:13px}.product-intro .intro-area{text-align:center}.product-intro .intro-area__label{color:var(--color-white);background-color:var(--color-gray-800);border-radius:3px;width:15%;margin:15px auto;padding:5px 0;font-size:12px;text-align:center;text-transform:uppercase}.product-intro .intro-area__label--active{background-color:var(--color-white)}.product-intro .intro-area__label--active .text{color:transparent}.product-intro .intro-area__info .intro-img-box{width:80%;margin:0 auto}.product-intro .intro-area__info .intro-img-box__link{display:block}.product-intro .intro-area__info .intro-title{color:var(--color-gray-600);margin-top:15px;font-weight:700}.product-intro .intro-area__info .intro-sub-title{margin-top:5px;color:var(--color-gray-500)}.product-intro .intro-area__more{width:50%;margin:0 auto}.product-intro .intro-area__more .more-link{display:inline-block;position:relative;padding:5px 0;color:var(--color-gray-500);box-shadow:0 -1px inset #cecece}.product-intro .intro-area__more .more-link:hover{box-shadow:unset}.product-intro .intro-area__more .more-link__icon{font-size:12px}.product-intro .intro-area__more .more-link__text{font-size:13px}@media(min-width:2560px){.product-intro .intro-area__more .more-link__text{font-size:14px}}.product-intro .intro-area__gradient{max-width:240px;margin:30px auto 0}.product-intro .intro-area__gradient .gradient-link{display:block;position:relative;padding:2px;z-index:10}.product-intro .intro-area__gradient .gradient-link:before{content:"";position:absolute;top:1px;left:1px;right:1px;bottom:1px;z-index:-1;background:linear-gradient(60deg,#5f86f2,#a65ff2,#f25fd0,#f25f61,#f2cb5f,#abf25f,#5ff281,#5ff2f0);background-size:250%;animation:gradientMove 3s both infinite linear}.product-intro .intro-area__gradient .gradient-link:hover:before{background:#bfbfbf;background-size:unset}.product-intro .intro-area__gradient .gradient-link__text{padding:10px;text-align:center;color:var(--color-gray-800);background-color:var(--color-white);margin:0}.product-intro .intro-area__gradient .gradient-link__text:hover{color:var(--color-white);background-color:#bfbfbf}.product-intro .intro-area__feature-link{max-width:240px;margin:30px auto 0;text-align:center}.product-intro .intro-area__feature-link .feature-link{color:var(--color-gray-800)}@keyframes gradientMove{0%{background-position:0}50%{background-position:100%}to{background-position:0}}.msi-nav-product-line__operations{display:flex;justify-content:center}@media(min-width:1600px){.msi-nav-product-line__operations{text-align:center}}.product-line-col{margin:0 20px;position:relative}@media(min-width:1600px){.product-line-col{display:inline-block}}.product-line-col:before{content:"";width:0;position:absolute;bottom:0;right:0;left:0;margin:0 auto;background-color:var(--color-gray-400);transition:width .3s}.product-line-col.product-line-col--active .product-line-item{color:var(--color-gray-800)}.product-line-item{padding:15px 0;display:flex;align-items:center;flex-direction:column;color:var(--color-gray-600)}.product-line-item:hover{color:var(--color-gray-800)}.product-line-item__icon{font-size:48px}@media(min-width:2560px){.product-line-item__icon{font-size:53px}}.product-line-item__title{font-weight:700;font-size:14px}@media(min-width:2560px){.product-line-item__title{font-size:16px}}.odm-intro__content{display:flex}.odm-intro__content .odm--col{flex:3 0 0;padding-bottom:30px}.odm-intro__content .odm--col:first-child{flex:1 0 0;box-shadow:3px 0 0 -1px #eee}.odm-intro__content .topic__title{margin:20px 0;color:var(--color-gray-400)}.odm-intro__content .topic__title.transparent{color:transparent}.odm-intro__content .topic__item{margin-top:5px}.odm-intro__content .topic__item:hover,.odm-intro__content .topic__item--active{color:var(--color-gray-800);box-shadow:-3px 0 0 -1px inset var(--color-gray-800)}.odm-intro__content .topic__item:hover .arrow-button,.odm-intro__content .topic__item--active .arrow-button{color:var(--color-gray-800)}.odm-intro__content .topic__item .arrow-button{text-align:left}.odm-intro__content .service{display:flex;margin-left:58px;margin-top:20px}.odm-intro__content .service__intro{margin-right:90px}.odm-intro__content .service__intro .intro-img-box{max-width:525px;display:block}.odm-intro__content .service__intro .title{font-size:16px;color:var(--color-gray-800);margin-top:14px;max-width:525px}.odm-intro__content .service__intro .text{font-size:14px;color:var(--color-gray-500);margin-top:8px;max-width:525px}.odm-intro__content .service__intro .more-link{display:inline-flex;align-items:center;margin-top:15px;padding:5px 0;color:var(--color-gray-500);box-shadow:0 -1px inset #cecece}.odm-intro__content .service__intro .more-link:hover{box-shadow:unset}.odm-intro__content .service__intro .more-link__text{font-size:14px}.odm-intro__content .service__product .service-link{display:block;color:var(--color-gray-500)}.odm-intro__content .service__product .service-link:nth-child(n+2){margin-top:15px}.odm-intro__content .service__product .service-link:hover{color:var(--color-gray-800)}.odm-intro__content .service__product .service-link .link-img-box{width:150px;text-align:center;margin:0 auto}.odm-intro__content .service__product .service-link .link-img-box__img .text{font-size:14px}.what-new__content{display:flex}.what-new__content .what-new--col{flex:3 0 0;padding-bottom:30px}.what-new__content .what-new--col:first-child{flex:1 0 0;box-shadow:3px 0 0 -1px #eee}.what-new__content .topic__title{margin:30px 0 15px;color:var(--color-gray-400)}.what-new__content .topic__title.transparent{color:transparent}.what-new__content .topic__item{margin-top:5px}.what-new__content .topic__item:hover,.what-new__content .topic__item--active{box-shadow:-3px 0 0 -1px inset var(--color-gray-800)}.what-new__content .topic__item:hover .arrow-button,.what-new__content .topic__item--active .arrow-button{color:var(--color-gray-800)}.what-new__content .topic__item .arrow-button{text-align:left}.what-new__content .news-info{display:flex;justify-content:space-between;margin-left:30px}@media(min-width:1600px){.what-new__content .news-info{margin-left:58px}}.what-new__content .news-info .news-info__intro{flex:0 0 55%}@media(min-width:1600px){.what-new__content .news-info .news-info__intro{flex:0 0 60%}}.what-new__content .news-info .news-info__intro__title{color:#888;text-transform:uppercase;font-size:12px;font-weight:400;margin:30px 0 15px}.what-new__content .news-info .news-info__intro__title.transparent{color:transparent}.what-new__content .news-info .news-info__intro__list__item{display:flex;align-items:center;color:var(--color-gray-500)}.what-new__content .news-info .news-info__intro__list__item:before{content:"-";display:block;margin-right:5px}.what-new__content .news-info .news-info__intro__list__item .news-infoLink{font-size:14px;color:var(--color-gray-500);display:inline-block;padding:5px 0}.what-new__content .news-info .news-info__intro__list__item .news-infoLink:hover{color:var(--color-gray-800)}.what-new__content .news-info .more-link{display:inline-flex;align-items:center;padding:5px 0;margin-top:15px;color:var(--color-gray-500);box-shadow:0 -1px 0 0 inset var(--color-gray-300)}.what-new__content .news-info .more-link:hover{box-shadow:unset}.what-new__content .news-info .more-link__text{font-size:14px}.what-new__content .news-info__img{flex:0 0 40%}@media(min-width:1600px){.what-new__content .news-info__img{flex:0 0 35%}}.what-new__content .news-info__img .transparent{margin:20px 0;color:transparent;font-size:12px}.what-new__content .news-info__img .intro-service-link{display:block}.what-new__content .news-info__img .img-box{text-align:center}.what-new__content .news-info__img .img-box__img{width:100%;vertical-align:middle}.community-intro .community-intro__content{display:flex}.community-intro .community-intro__content .community--col{flex:3 0 0;padding-bottom:30px}.community-intro .community-intro__content .community--col:first-child{flex:1 0 0;box-shadow:3px 0 0 -1px #eee}@media(min-width:1600px){.community-intro .community-intro__content .community--col:first-child{flex:1 0 0}}.community-intro .topic__title{margin:20px 0;color:var(--color-gray-400)}.community-intro .topic__title.transparent{color:transparent}.community-intro .topic__item{margin-top:5px}.community-intro .topic__item:hover,.community-intro .topic__item--active{color:var(--color-gray-800);box-shadow:-3px 0 0 -1px inset var(--color-gray-800)}.community-intro .topic__item:hover .arrow-button,.community-intro .topic__item--active .arrow-button{color:var(--color-gray-800)}.community-intro .topic__item .arrow-button{text-align:left}.community-intro .topic__item .topic-link{display:inline-block;padding:10px 10px 10px 0;color:var(--color-gray-500);font-weight:700}.community-intro .topic__item .topic-link:hover{color:var(--color-gray-800)}.community-intro .service{display:flex;margin-left:58px;margin-top:20px}.community-intro .service .service__intro{margin-right:45px}.community-intro .service .intro-img-box{max-width:450px;display:block}.community-intro .service .title{font-size:16px;color:var(--color-gray-800);margin-top:14px;max-width:525px}.community-intro .service .text{font-size:14px;color:var(--color-gray-500);margin-top:8px;max-width:525px;line-height:1.5}.community-intro .service .more-link{display:inline-flex;align-items:center;margin-top:15px;padding:5px 0;color:var(--color-gray-500);box-shadow:0 -1px inset #cecece}.community-intro .service .more-link:hover{box-shadow:unset}.community-intro .service .more-link__text{font-size:14px}.b-To-b-intro .b-To-b-intro__content{display:flex}.b-To-b-intro .b-To-b-intro__content .community--col{flex:3 0 0;padding-bottom:30px}.b-To-b-intro .b-To-b-intro__content .community--col:first-child{flex:1 0 0;box-shadow:3px 0 0 -1px #eee}@media(min-width:1600px){.b-To-b-intro .b-To-b-intro__content .community--col:first-child{flex:1 0 0}}.b-To-b-intro .topic__title{margin:20px 0;color:var(--color-gray-400)}.b-To-b-intro .topic__title.transparent{color:transparent}.b-To-b-intro .topic__item{margin-top:5px}.b-To-b-intro .topic__item:hover,.b-To-b-intro .topic__item--active{color:var(--color-gray-800);box-shadow:-3px 0 0 -1px inset var(--color-gray-800)}.b-To-b-intro .topic__item:hover .arrow-button,.b-To-b-intro .topic__item--active .arrow-button{color:var(--color-gray-800)}.b-To-b-intro .topic__item .arrow-button{text-align:left}.b-To-b-intro .topic__item .topic-link{display:inline-block;padding:10px 10px 10px 0;color:var(--color-gray-500);font-weight:700}.b-To-b-intro .topic__item .topic-link:hover{color:var(--color-gray-800)}.b-To-b-intro .service{display:flex;margin-left:58px;margin-top:20px}.b-To-b-intro .service .service__intro{margin-right:45px}.b-To-b-intro .service .intro-img-box{max-width:450px;display:block}.b-To-b-intro .service .title{font-size:16px;color:var(--color-gray-800);margin-top:14px;max-width:525px}.b-To-b-intro .service .text{font-size:14px;color:var(--color-gray-500);margin-top:8px;max-width:525px;line-height:1.5}.b-To-b-intro .service .more-link{display:inline-flex;align-items:center;margin-top:15px;padding:5px 0;color:var(--color-gray-500);box-shadow:0 -1px inset #cecece}.b-To-b-intro .service .more-link:hover{box-shadow:unset}.b-To-b-intro .service .more-link__text{font-size:14px}.spport-list .spport-list__content{display:flex}.spport-list .spport-list__content .community--col{flex:3 0 0;padding-bottom:30px}.spport-list .spport-list__content .community--col:first-child{flex:1 0 0;box-shadow:3px 0 0 -1px #eee}@media(min-width:1600px){.spport-list .spport-list__content .community--col:first-child{flex:1 0 0}}.spport-list .topic__title{margin:20px 0;color:var(--color-gray-400)}.spport-list .topic__title.transparent{color:transparent}.spport-list .topic__item{margin-top:5px}.spport-list .topic__item:hover,.spport-list .topic__item--active{color:var(--color-gray-800);box-shadow:-3px 0 0 -1px inset var(--color-gray-800)}.spport-list .topic__item:hover .arrow-button,.spport-list .topic__item--active .arrow-button{color:var(--color-gray-800)}.spport-list .topic__item .arrow-button{text-align:left}.spport-list .topic__item .topic-link{display:inline-block;padding:10px 10px 10px 0;color:var(--color-gray-500);font-weight:700}.spport-list .topic__item .topic-link:hover{color:var(--color-gray-800)}.spport-list .service{display:flex;margin-left:58px;margin-top:20px}.spport-list .service .service__intro{margin-right:45px}.spport-list .service .intro-img-box{max-width:450px;display:block}.spport-list .service .title{font-size:16px;color:var(--color-gray-800);margin-top:14px;max-width:525px}.spport-list .service .text{font-size:14px;color:var(--color-gray-500);margin-top:8px;max-width:525px;line-height:1.5}.spport-list .service .more-link{display:inline-flex;align-items:center;margin-top:15px;padding:5px 0;color:var(--color-gray-500);box-shadow:0 -1px inset #cecece}.spport-list .service .more-link:hover{box-shadow:unset}.spport-list .service .more-link__text{font-size:14px}.default-nav .default-nav__row{display:flex;margin:-15px;flex-wrap:wrap}.default-nav .default-nav__col{padding:15px;flex:0 0 25%}.default-nav .default-nav__col .custom-link{padding:20px 0}.default-nav .default-nav__col .custom-link__item{display:inline-block;position:relative;color:var(--color-gray-400);padding:1px 0}.default-nav .default-nav__col .custom-link__item:before{content:"";position:absolute;width:0;bottom:0;background-color:var(var(--color-gray-800));transition:width .3s}.default-nav .default-nav__col .custom-link__item:hover{color:var(var(--color-gray-800))}.default-nav .default-nav__col .custom-link__item:hover:before{width:100%;height:1px}.default-nav .default-nav__col .custom-link__item .link-icon{font-size:12px;margin-left:10px}.mobile-menu{background-color:var(--color-white);position:absolute;top:100%;left:0;right:0;height:100vh;z-index:500;color:var(--color-gray-800);padding:34px 0;overflow:auto;scrollbar-width:none}.mobile-menu::-webkit-scrollbar{display:none}.mobile-menu__item .action{width:100%;padding:25px 0;display:flex;justify-content:space-between;align-items:center;color:var(--color-gray-800)}.mobile-menu__item .action__title{font-weight:700}.mobile-menu__item .drop-content{background-color:#eee;padding:8px 0}.mobile-menu__item .drop-content .action{padding:13px 0;color:#666}.mobile-menu__item .drop-content .action__context .title{vertical-align:middle;margin-left:5px}.mobile-menu__item .drop-content .action__context .icon{font-size:30px;vertical-align:middle}.mobile-sub .action{color:var(--color-gray-800);padding:10px 0}.mobile-sub .action__icon{font-size:12px;vertical-align:middle}.mobile-sub .action__title{margin-left:15px;font-weight:700;vertical-align:middle}.mobile-sub__content{border-top:1px solid #EEEEEE}.mobile-sub__content .topic{padding:0 25px}.mobile-sub__content .topic__link{color:var(--color-gray-600);display:inline-block;width:100%;padding:25px 0}.sub-product{font-weight:700;vertical-align:middle}.sub-product__action{color:var(--color-gray-800);padding:10px 0}.sub-product__action .sub-roduct-icon{font-size:12px;vertical-align:middle}.sub-product__action .sub-product-title{margin-left:10px}.sub-product-line{background-color:#eee;margin-bottom:8px}.sub-product-line .product-list{display:flex;justify-content:space-between;align-items:center;padding:10px 0;color:var(--color-gray-600)}.sub-product-line .product-list__item .title{vertical-align:middle;margin-left:10px}.sub-product-line .product-list__item .icon{vertical-align:middle;font-size:30px}.sub-product-line .product-list__icon{font-size:12px;transform:rotate(90deg)}.sub-product-topic .topic-item{width:100%;display:flex;align-items:center;justify-content:space-between;padding:25px 0 25px 40px;color:var(--color-gray-600)}.sub-product-topic .topic-item__icon{font-size:12px;transform:rotate(0);transition:transform .5s}.sub-product-topic .topic-item__icon--active{transform:rotate(90deg)}.sub-product-topic .topic-link{border-top:2px solid #EEEEEE;border-bottom:2px solid #EEEEEE}.sub-product-topic .topic-link .list{padding:20px 40px}.sub-product-topic .topic-link .list__item:nth-child(n+2){margin-top:50px}.sub-product-topic .topic-link .list__item .link{padding:10px 0;display:inline-block;color:var(--color-gray-800)}.sub-product-topic .topic-link .list__item .title{font-size:14px;font-weight:400;color:var(--color-gray-400);margin-bottom:6px}.common-sub{background-color:var(--color-white);position:absolute;top:0;left:0;right:0;height:calc(100vh - 80px);z-index:501;color:#222;padding:34px 0;overflow:auto;scrollbar-width:none}.common-sub::-webkit-scrollbar{display:none}.search-container .close-search__icon,.search-container .search-button__icon{color:#868787;font-size:22px}.search-form{padding:36px 20px}@media(min-width:996px){.search-form{padding:36px}}.search-container{position:relative}@media(min-width:996px){.search-container{width:85%;margin:0 auto}}.search-container .search-button{position:absolute;top:0;bottom:0;left:10px}.search-container .search-button__icon:hover{color:var(--color-gray-800)}.search-container .close-search{position:absolute;top:0;bottom:0;right:0}@media(min-width:996px){.search-container .close-search{right:2%}}.search-container .close-search__icon:hover{color:var(--color-gray-800)}.search-container .search-text{width:95%;padding:10px 14px 10px 40px;border:1px solid var(--color-gray-300);font-size:16px}.search-container .search-text::placeholder{font-size:16px}.search-container .search-text:focus{outline:none}.search-container .quick-link{position:absolute;top:100%;right:0;left:0;max-height:300px;overflow:auto;background-color:var(--color-white);border-right:1px solid var(--color-gray-300);border-left:1px solid var(--color-gray-300);border-bottom:1px solid var(--color-gray-300);padding:10px 15px}.search-container .quick-link__item{padding:10px 15px;cursor:pointer}.search-container .quick-link__item:hover{background-color:#292929ad;color:var(--color-white)}.member-cards{background-color:var(--color-white);width:200px;position:absolute;top:100%;right:0%;padding:20px 16px;z-index:501;text-align:center;border:1px solid #CECECE;box-shadow:0 0 5px 2px #f2f2f2}.member-cards__profile .avatar{border-radius:50%;overflow:hidden;width:50%;margin:0 auto}.member-cards__profile .user{margin-top:10px}.member-cards__profile .mail{color:var(--color-gray-400);font-size:14px;word-break:break-all}.member-card{font-size:14px}.member-card .card-link{color:var(--color-gray-800);display:block;padding:6px 14px;background-color:#cecece}.member-card .card-link:hover{color:var(--color-white);background-color:var(--color-gray-500)}.member-cards__center{margin-top:20px}.member-cards__business{margin-top:10px}.msi-common-menu .member-cards__logout{color:var(--color-gray-400);font-size:14px;margin-top:10px;position:relative;padding:1px}.msi-common-menu .member-cards__logout:hover:before{content:"";position:absolute;right:0;left:0;bottom:0;height:1px;background-color:#cecece}.msi-common-menu .member-login-module{background-color:var(--color-white);width:265px;position:absolute;top:100%;right:0%;padding:20px 16px;z-index:501;border:1px solid #CECECE;box-shadow:0 0 5px 2px #f2f2f2}.msi-common-menu .member-login-module-intro{font-size:var(--title-xs);color:var(--color-gray-800);font-weight:700;margin-bottom:16px}.msi-common-menu .member-login-module-intro-list{list-style:disc;padding-left:16px}.msi-common-menu .member-login-module-intro-item::marker{color:var(--color-gray-500)}.msi-common-menu .member-login-module-intro-item{color:var(--color-gray-800);font-size:var(--text-xs);margin-bottom:10px;line-height:1.5}.msi-common-menu .member-login-module-wrapper{margin-top:40px;text-align:center}.msi-common-menu .member-login-module-link{font-size:14px;margin-top:10px}.msi-common-menu .member-login-module-link:first-child{margin-top:0}.msi-common-menu .member-login-module-link .login-link{color:var(--color-white);display:block;padding:11px 14px 10px;background-color:var(--color-gray-600);border-radius:4px}.msi-common-menu .member-login-module-link .login-link:hover{color:var(--color-gray-600);background-color:var(--color-white);box-shadow:0 0 0 1px var(--color-gray-600)}.msi-common-menu .member-login-module-link .login-link.business-golden{background-color:var(--color-bp);color:var(--color-white)}.msi-common-menu .member-login-module-link .login-link.business-golden:hover{background-color:var(--color-white);color:var(--color-bp);box-shadow:0 0 0 1px var(--color-bp)}.msi-common-menu{position:relative;z-index:700;min-width:260px;font-size:var(--body-font-size);color:var(--body-text-color);background:var(--body-bgcolor);font-family:var(--MSIBodyFont)}.msi-common-menu *{box-sizing:border-box}.msi-common-menu ol,.msi-common-menu ul,.msi-common-menu li{list-style:none;margin:0}.msi-common-menu button{font-size:100%;cursor:pointer;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.msi-common-menu button:link,.msi-common-menu button:hover,.msi-common-menu button:visited,.msi-common-menu button:active,.msi-common-menu button:focus{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.msi-common-menu select{-webkit-appearance:none;-moz-appearance:none;appearance:none}.msi-common-menu a:focus-visible,.msi-common-menu button:focus-visible{outline:#000 2px solid}.msi-common-menu button,.msi-common-menu a{font-family:var(--MSIBodyFont)}.msi-common-menu a{text-decoration:none;outline:0}.msi-common-menu a:hover{text-decoration:none}.msi-main-nav{position:relative;box-shadow:0 -2px 0 -1px inset #eee;background-color:var(--color-white)}.main-area{display:flex;justify-content:space-between;align-items:center}.main-area__hamburger{padding:10px 16px;color:#000}@media(min-width:996px){.main-area__hamburger{display:none}}.main-area__hamburger .custom-icon-close{display:none}.main-area__hamburger .show-close{display:inline}.main-area__menu{display:flex;align-items:center;font-size:16px}.main-area__menu .home-link{display:inline-block}.main-area__menu .home-link__logo{display:block}.main-area__menu .home-link__logo img{width:auto;max-height:54px}@media(min-width:996px){.main-area__menu .home-link__logo img{max-height:65px}}.menu-action{display:none}@media(min-width:996px){.menu-action{display:flex;align-items:center;margin-left:20px}}@media(min-width:1300px){.menu-action{margin-left:50px}}.menu-action__item{position:relative}.menu-action__item:before{content:"";width:0;position:absolute;bottom:0;right:0;left:0;margin:0 auto;background-color:var(--color-gray-800);transition:width .3s}.menu-action__item:nth-child(n+2){margin-left:20px}@media(min-width:1300px){.menu-action__item:nth-child(n+2){margin-left:35px}}.menu-action__item.menu-action__item--active .nav-drop{color:var(--color-gray-800)}.menu-action__item .nav-link,.menu-action__item .nav-drop{font-weight:700;text-decoration:none;display:inline-block;padding:30px 0;font-size:17px;color:var(--color-gray-600)}.menu-action__item .nav-link:hover,.menu-action__item .nav-drop:hover{color:var(--color-gray-800)}.main-area__operations{position:relative;display:flex;align-items:center;font-size:20px;padding:25px 0;line-height:1}.hidden-operation{min-width:77px}.operation-action:nth-child(n+2){margin-left:5px}.operation-action .operation-drop,.operation-action .operation-link{display:inline-block;padding:0 6px;color:var(--color-gray-600)}.operation-action .operation-drop:hover,.operation-action .operation-link:hover{color:var(--color-gray-800)}@media(min-width:996px){.operation-action .operation-drop,.operation-action .operation-link{padding:0 8px}}.operation-action.action-custom{display:none}@media(min-width:996px){.operation-action.action-custom{display:block}}.operation-sub-logo{display:none}@media(min-width:996px){.operation-sub-logo{display:block;margin-left:20px}}.operation-sub-logo .sub-link{display:block}.operation-sub-logo .sub-link__img{width:auto}@media(min-width:996px){.operation-sub-logo .sub-link__img{max-height:25px}}.drop-down-menu{position:absolute;top:100%;right:0;left:0;z-index:500;color:var(--color-gray-800);box-shadow:0 4px 0 -1px #eee;background-color:var(--color-white)}', Di = {
  id: "msi-common-menu",
  class: "msi-common-menu"
}, Si = { class: "msi-main-nav" }, Li = { class: "msi__container" }, Ti = { class: "main-area" }, Bi = ["aria-label"], Ii = {
  key: 0,
  class: "icon-msi-nav"
}, Ei = { class: "main-area__menu" }, Hi = ["href"], Oi = {
  key: 0,
  class: "home-link__logo"
}, Pi = ["srcset"], Ai = ["src", "alt"], Fi = { class: "menu-action" }, Ui = ["target", "href"], ji = ["onClick"], Ni = {
  key: 0,
  class: "operation-action"
}, qi = {
  key: 1,
  class: "operation-action action-custom"
}, Wi = ["href"], Gi = {
  key: 2,
  class: "operation-action"
}, Ki = {
  key: 0,
  class: "operation-sub-logo"
}, Yi = ["href"], Ri = ["src", "alt"], se = "menu-mobile-body-overflow-setting", Ji = {
  __name: "MSICommonMenu.ce",
  props: {
    isShowOperation: {
      type: Boolean,
      default: !0
    },
    canUseGaEvent: {
      type: Boolean,
      default: !0
    },
    currentDomain: {
      type: String,
      default: "https://www.msi.com"
    },
    memberCenterUrl: {
      type: String,
      default: "https://account.msi.com"
    },
    showMemberLoginModuleDomain: {
      type: Array,
      default: () => [
        "https://us.msi.com",
        "https://ca.msi.com",
        "https://fr.msi.com",
        "https://de.msi.com",
        "https://es.msi.com"
      ]
    }
  },
  setup(k, { expose: h }) {
    const n = te({
      product: en,
      odm: mo,
      whatNew: Nn,
      community: vt,
      btob: et,
      defaultNav: kt,
      supportList: wn
    }), c = te({
      mobileMenu: Zn
    }), d = te({
      search: sn
    }), _ = te({
      memberCard: Bt,
      loginModule: jt
    }), i = k, {
      isShowOperation: v,
      currentDomain: p,
      memberCenterUrl: a,
      canUseGaEvent: y,
      showMemberLoginModuleDomain: m
    } = E(i);
    ce(() => {
      Te(), Le(), new CSSStyleSheet().replaceSync(`
    .menu-mobile-body-overflow-setting {
      overflow: hidden;
    }
  `);
    }), me(() => {
      Be();
    });
    const r = x({}), f = x([]), l = x({}), s = x({}), $ = x({}), L = x({}), W = x({}), Y = x([]);
    h({
      setMenuProps: (b) => {
        r.value = { ...(b == null ? void 0 : b.logo) ?? {} }, f.value = [...(b == null ? void 0 : b.menu) ?? []], l.value = { ...(b == null ? void 0 : b.menulist) ?? {} }, s.value = { ...(b == null ? void 0 : b.translation) ?? {} }, W.value = { menu: f.value, menuList: l.value }, $.value = { ...(b == null ? void 0 : b.whereToBuy) ?? {} }, L.value = { ...(b == null ? void 0 : b.subLogo) ?? {} };
      }
    });
    const M = x(null), H = x(null), U = x(null), N = x(null);
    function xe() {
      if (!document.getElementById(se)) {
        const T = document.createElement("style");
        T.id = se, T.textContent = `
      body {
        overflow: hidden;
      }
    `, document.head.appendChild(T);
      }
    }
    function ne() {
      const b = document.getElementById(se);
      b && b.remove();
    }
    function be() {
      U.value = null, N.value = null, H.value ? (H.value = null, ne()) : (H.value = "mobileMenu", xe());
    }
    const ue = x({}), q = x(null);
    function ye({ component: b, id: T }, O) {
      U.value = null, N.value = null, q.value !== O && M.value === b ? (q.value = O, M.value = b) : (q.value = q.value === O ? null : O, M.value = M.value === b ? null : b), ue.value = l.value[T];
    }
    function ke() {
      q.value = null, M.value = null, H.value = null, U.value = null, N.value = N.value ? null : "search", ne();
    }
    function we(b) {
      location.href = `${p.value}/search/${b}`;
    }
    function pe(b) {
      y.value && Ae(b);
    }
    const $e = z(() => location.pathname.split("/")[1] === "search"), Me = z(() => {
      if (!$e.value) return;
      const b = location.pathname.split("/").pop() === "more", T = location.pathname.split("/").pop(), O = location.pathname.split("/").slice(-2)[0];
      return b ? O : T;
    });
    async function Ce(b) {
      var T;
      try {
        const O = await he.get(
          `${p.value}/api/v1/search/product-list-auto`,
          {
            params: {
              keyword: b
            }
          }
        );
        Y.value = [...((T = O == null ? void 0 : O.data) == null ? void 0 : T.list) ?? []];
      } catch (O) {
        console.log(O);
      }
    }
    const ae = x({});
    async function ze() {
      if (U.value === "memberCard" || U.value === "loginModule")
        return ie();
      const b = await De();
      if (!b.status) {
        m.value.includes(p.value) ? ie("loginModule") : location.href = `${a.value}`;
        return;
      }
      ae.value = { ...ae.value, ...(b == null ? void 0 : b.message) ?? {} }, ie("memberCard");
    }
    async function De() {
      const T = p.value === "https://www.msi.cn" || p.value === "https://account.msi.cn" ? "https://webservice.msi.cn/account-login" : "https://webservice.msi.com/production/account-login";
      return (await he.get(T, {
        withCredentials: !0
      })).data;
    }
    function Se(b) {
      ie(), location.href = b;
    }
    function ie(b = null) {
      q.value = null, M.value = null, H.value = null, N.value = null, U.value = b;
    }
    function Le() {
      window.addEventListener("resize", de());
    }
    function Te() {
      document.addEventListener("click", _e);
    }
    function Be() {
      document.removeEventListener("click", _e), window.removeEventListener("resize", de());
    }
    const de = () => (b) => {
      b.target.innerWidth > 1200 ? (H.value = null, q.value = null, ne()) : M.value = null;
    }, _e = () => {
      U.value = null, q.value = null, M.value = null, H.value = null, N.value = null, ne();
    };
    return (b, T) => {
      var O, le;
      return t(), o("header", Di, [
        J(e("nav", Si, [
          e("div", Li, [
            e("div", Ti, [
              e("button", {
                class: "main-area__hamburger",
                onClick: g(be, ["prevent", "stop"]),
                "aria-label": H.value ? "Close navigation menu" : "Open navigation menu"
              }, [
                I(F, {
                  name: "fadeFaster",
                  mode: "out-in"
                }, {
                  default: A(() => [
                    H.value ? (t(), o("span", {
                      key: 1,
                      class: B(["icon-msi-close custom-icon-close", { "show-close": H.value }])
                    }, null, 2)) : (t(), o("i", Ii))
                  ]),
                  _: 1
                })
              ], 8, Bi),
              e("div", Ei, [
                I(F, {
                  name: "fade",
                  mode: "out-in"
                }, {
                  default: A(() => {
                    var P, G, R, ee, ve, ge, fe;
                    return [
                      J(e("a", {
                        class: "home-link",
                        href: ((P = r.value) == null ? void 0 : P.url) ?? "https://storage-asset.msi.com/global/js/webComponent/header/logoSize-background.jpg"
                      }, [
                        (G = r.value) != null && G.mobile || (R = r.value) != null && R.image ? (t(), o("picture", Oi, [
                          e("source", {
                            media: "(min-width: 992px)",
                            srcset: ((ee = r.value) == null ? void 0 : ee.image) ?? ""
                          }, null, 8, Pi),
                          e("img", {
                            src: ((ve = r.value) == null ? void 0 : ve.mobile) ?? "",
                            alt: ((ge = r.value) == null ? void 0 : ge.alt) ?? "",
                            width: "155",
                            height: "65"
                          }, null, 8, Ai)
                        ])) : C("", !0)
                      ], 8, Hi), [
                        [Q, (fe = r.value) == null ? void 0 : fe.url]
                      ])
                    ];
                  }),
                  _: 1
                }),
                e("div", Fi, [
                  I(Ee, { name: "fall" }, {
                    default: A(() => [
                      (t(!0), o(D, null, S(f.value, (P, G) => (t(), o("div", {
                        class: B(["menu-action__item", {
                          "menu-action__item--active": q.value === G
                        }]),
                        key: P.title
                      }, [
                        P.url ? (t(), o("a", {
                          key: 0,
                          target: P.target,
                          href: P.url,
                          class: "nav-link"
                        }, u(P.title), 9, Ui)) : (t(), o("button", {
                          key: 1,
                          class: "nav-drop",
                          onClick: g((R) => ye(P, G), ["prevent", "stop"])
                        }, u(P.title), 9, ji))
                      ], 2))), 128))
                    ]),
                    _: 1
                  })
                ])
              ]),
              e("div", {
                class: B(["main-area__operations", { "hidden-operation": !w(v) }])
              }, [
                w(v) ? (t(), o("div", Ni, [
                  e("button", {
                    class: "operation-drop",
                    onClick: g(ze, ["prevent", "stop"]),
                    "aria-label": "Member Center"
                  }, [...T[3] || (T[3] = [
                    e("i", { class: "icon-msi-user" }, null, -1)
                  ])])
                ])) : C("", !0),
                w(v) ? (t(), o("div", qi, [
                  e("a", {
                    href: ((O = $.value) == null ? void 0 : O.url) ?? "",
                    class: "operation-link",
                    "aria-label": "Where to Buy"
                  }, [...T[4] || (T[4] = [
                    e("i", { class: "icon-msi-wtb" }, null, -1)
                  ])], 8, Wi)
                ])) : C("", !0),
                w(v) ? (t(), o("div", Gi, [
                  e("button", {
                    class: "operation-drop",
                    onClick: g(ke, ["prevent", "stop"]),
                    "aria-label": "Search"
                  }, [...T[5] || (T[5] = [
                    e("i", { class: "icon-msi-search" }, null, -1)
                  ])])
                ])) : C("", !0),
                I(F, {
                  name: "fade",
                  mode: "out-in"
                }, {
                  default: A(() => {
                    var P, G, R, ee;
                    return [
                      (P = L.value) != null && P.image ? (t(), o("div", Ki, [
                        e("a", {
                          class: "sub-link",
                          href: ((G = L.value) == null ? void 0 : G.url) ?? ""
                        }, [
                          e("img", {
                            class: "sub-link__img",
                            src: ((R = L.value) == null ? void 0 : R.image) ?? "",
                            alt: ((ee = L.value) == null ? void 0 : ee.alt) ?? "",
                            width: "100",
                            height: "25"
                          }, null, 8, Ri)
                        ], 8, Yi)
                      ])) : C("", !0)
                    ];
                  }),
                  _: 1
                }),
                I(F, { name: "fade" }, {
                  default: A(() => [
                    (t(), j(oe(w(_)[U.value]), {
                      key: U.value,
                      member: ae.value,
                      translation: s.value,
                      onLogout: T[0] || (T[0] = (P) => Se(P))
                    }, null, 40, ["member", "translation"]))
                  ]),
                  _: 1
                })
              ], 2)
            ])
          ])
        ], 512), [
          [Q, (le = f.value) == null ? void 0 : le.length]
        ]),
        I(F, { name: "fade" }, {
          default: A(() => [
            (t(), j(oe(w(n)[M.value]), {
              key: M.value,
              "onUpdate:gaevent": pe,
              "menu-config": ue.value,
              "menu-translation": s.value
            }, null, 40, ["menu-config", "menu-translation"]))
          ]),
          _: 1
        }),
        I(F, { name: "fade" }, {
          default: A(() => [
            (t(), j(oe(w(c)[H.value]), {
              "onUpdate:gaevent": pe,
              key: H.value,
              "mobile-menu": W.value
            }, null, 40, ["mobile-menu"]))
          ]),
          _: 1
        }),
        I(F, { name: "fade" }, {
          default: A(() => [
            (t(), j(oe(w(d)[N.value]), {
              key: N.value,
              "search-list": Y.value,
              "init-keyword": Me.value,
              "onRemove:searchKeyword": T[1] || (T[1] = (P) => N.value = null),
              "onMoveTo:searchPage": we,
              "onUpdate:searchList": Ce,
              "onRemove:autoComplete": T[2] || (T[2] = (P) => Y.value = [])
            }, null, 40, ["search-list", "init-keyword"]))
          ]),
          _: 1
        })
      ]);
    };
  }
}, Qi = /* @__PURE__ */ V(Ji, [["styles", [zi]]]), Vi = '@import"https://storage-asset.msi.com/msisite/css/common-msi-icons.css";.msi__container{position:relative;padding:0 25px;margin:0 auto}@media(min-width:1300px){.msi__container{max-width:1330px}}@media(min-width:1300px){.msi__container.product-line{max-width:none}}.fade-enter-active{animation:fadeIn .5s}.fade-leave-active{animation:fadeOut .5s}.fadeFaster-enter-active{animation:fadeIn .2s}.fadeFaster-leave-active{animation:fadeOut .2s}.navDrop-enter-active{animation:navDrop 1s}.navDrop-leave-active{animation:navCollapse .5s}.fall-enter-active{transition:opacity .5s,transform .3s;position:absolute;right:0;left:0}.fall-leave-active{transition:opacity .3s,transform .3s;position:absolute;right:0;left:0}.fall-enter-to,.fall-leave-from{opacity:1;transform:translateY(0)}.fall-leave-to,.fall-enter-from{opacity:0;transform:translateY(-20px)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes navDrop{0%{opacity:0;max-height:0}50%{max-height:1000px}to{opacity:1}}@keyframes navCollapse{0%{opacity:1;max-height:1000px}to{opacity:0;max-height:0}}.footerDrop-enter-active{animation:footerDrop .5s;overflow:hidden}.footerDrop-leave-active{animation:footerCollapse .5s;overflow:hidden}@keyframes footerDrop{0%{max-height:0}to{max-height:300px}}@keyframes footerCollapse{0%{max-height:300px}to{max-height:0}}.productHeaderDrop-enter-active{animation:productHeaderDrop .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-enter-active{animation:productHeaderDrop-lg .5s}}.productHeaderDrop-leave-active{animation:productHeaderCollapse .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-leave-active{animation:productHeaderCollapse-lg .5s}}@keyframes productHeaderDrop{0%{max-height:0}to{max-height:150px}}@keyframes productHeaderCollapse{0%{max-height:150px}to{max-height:0}}@keyframes productHeaderDrop-lg{0%{max-height:0}to{max-height:70px}}@keyframes productHeaderCollapse-lg{0%{max-height:70px}to{max-height:0}}.commercialMenuBar__PC{display:none}@media(min-width:996px){.commercialMenuBar__PC{display:flex}}.commercialMenuBar__mobile{display:flex}@media(min-width:996px){.commercialMenuBar__mobile{display:none}}.commercialMenuBar__PC,.commercialMenuBar__mobile{justify-content:space-between;align-items:center;width:100%;height:60px}.commercialMenuBar__PC .commercialMenuBar__title,.commercialMenuBar__mobile .commercialMenuBar__title{height:100%;min-width:136px;background:var(--color-gold-400);position:relative;font-weight:700;font-style:17px;line-height:30px;display:flex;align-items:center}.commercialMenuBar__PC .commercialMenuBar__title a,.commercialMenuBar__mobile .commercialMenuBar__title a{color:var(--color-white);white-space:nowrap;overflow:visible;z-index:10}.commercialMenuBar__PC .commercialMenuBar__title:after,.commercialMenuBar__mobile .commercialMenuBar__title:after{content:"";position:absolute;left:100%;height:0;border-color:transparent transparent transparent var(--color-gold-400);border-style:solid;border-width:30px 27px}.commercialMenuBar__PC .commercialMenuBar__title:before,.commercialMenuBar__mobile .commercialMenuBar__title:before{content:"";position:absolute;background:var(--color-gold-400);right:100%;width:50vw;height:60px}.commercialMenuBar__PC .dropDownMenu__button,.commercialMenuBar__mobile .dropDownMenu__button{display:flex;align-items:center;width:16px;height:50px;padding:0;transition-duration:.3s}.commercialMenuBar__PC .rotate,.commercialMenuBar__mobile .rotate{transition-duration:.3s;transform:rotate(-.5turn)}.commercialMenuBar__PC .icon-msi-down,.commercialMenuBar__mobile .icon-msi-down{color:var(--color-gold-400)}.bar__list{display:flex;padding-right:8px;font-size:17px}.bar__list .bar__item{padding-left:70px}.bar__list .bar__item a{color:var(--color-gray-800)}.bar__list .bar__item a:hover,.bar__list .bar__item .isActive{color:var(--color-gold-400)}.dropDownMenu__list{box-sizing:border-box;z-index:100;position:absolute;left:0;width:100%;background:var(--color-white);padding:17px 25px 32px}@media(min-width:996px){.dropDownMenu__list{display:none}}.dropDownMenu__list .dropDownMenu__item{display:block;background:var(--color-white);font-size:17px}.dropDownMenu__list .dropDownMenu__item a{padding:12.5px 0;display:block;color:var(--color-gray-800)}.dropDownMenu__list .dropDownMenu__item a:hover,.dropDownMenu__list .dropDownMenu__item .isActive{color:var(--color-gold-400)}:root{--color-black: #000;--color-white: #ffffff;--color-error: var(--color-red-400);--color-gray-100: #fafafa;--color-gray-200: #ececec;--color-gray-300: #cccccc;--color-gray-400: #808080;--color-gray-500: #7c7b7b;--color-gray-600: #696969;--color-gray-700: #333333;--color-gray-800: #222222;--color-gray-900: #1a1a1a;--color-gold-400: #9a8555;--color-red-300: #ea2023;--color-red-400: #e60000;--color-red-500: #c81d22;--color-green-300: #92b457;--color-green-400: #86b000;--color-green-500: #82BC00;--color-gaming: var(--color-red-500);--color-cc: var(--color-gold-400);--color-bp: var(--color-gold-400);--color-amd: var(--color-green-400);--color-alpha: var(--color-green-300);--body-bgcolor: var(--color-white);--body-text-color: var(--color-gray-800)}:root{--MSIBodyFont: -apple-system, BlinkMacSystemFont, "Segoe UI","Microsoft JhengHei", "Meiryo UI", Helvetica, Arial, sans-serif;--body-font-size: var(--text-md);--title-xl: 24px;--title-lg: 22px;--title-md: 20px;--title-sm: 18px;--title-xs: 16px;--text-xl: 20px;--text-lg: 18px;--text-md: 17px;--text-sm: 16px;--text-xs: 15px;--note-lg: 16px;--note-xl: 14px;--note-md: 13px;--note-sm: 12px;--link--xl: 20px;--link-lg: 18px;--link-md: 17px;--link-sm: 16px;--link-xs: 14px;--line-height-xl: 2;--line-height-lg: 1.8;--line-height-md: 1.5;--line-height-xs: 1.3;--line-height-list: 1.8;--line-height-article: 1.8}@media(min-width:992px){:root{--title-xl: 36px;--title-lg: 26px}}@media(min-width:1930px){:root{--title-md: 22px;--title-sm: 20px;--title-xs: 17px;--text-lg: 19px;--text-md: 18px;--text-sm: 17px;--text-xs: 16px;--note-lg: 17px;--note-xl: 15px;--note-md: 14px;--note-sm: 13px;--link-lg: 19px;--link-md: 18px;--link-sm: 17px;--line-xs: 16px}}html:lang(ja-JP) body,html:lang(JP) body{--MSIBodyFont: -apple-system, BlinkMacSystemFont, "Segoe UI", "Meiryo UI", "Yu Gothic", Arial, sans-serif}html:lang(zh-TW) body,html:lang(zh-CN) body,html:lang(ja-JP) body,html:lang(JP) body,html:lang(ko-KR) body{--title-sm: 17px;--text-md: 16px}@media(min-width:1930px){html:lang(zh-TW) body,html:lang(zh-CN) body,html:lang(ja-JP) body,html:lang(JP) body,html:lang(ko-KR) body{--title-sm: 18px;--text-md: 17px}}#msi-common-commercial-menu{font-family:var(--MSIBodyFont);min-width:260px;background:var(--color-gray-200)}#msi-common-commercial-menu button{color:var(--color-gray-600)}#msi-common-commercial-menu *{box-sizing:border-box}#msi-common-commercial-menu ol,#msi-common-commercial-menu ul,#msi-common-commercial-menu li{list-style:none;margin:0}#msi-common-commercial-menu button{font-size:100%;cursor:pointer;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}#msi-common-commercial-menu button:link,#msi-common-commercial-menu button:hover,#msi-common-commercial-menu button:visited,#msi-common-commercial-menu button:active,#msi-common-commercial-menu button:focus{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}#msi-common-commercial-menu select{-webkit-appearance:none;-moz-appearance:none;appearance:none}#msi-common-commercial-menu a:focus-visible,#msi-common-commercial-menu button:focus-visible{outline:#000 2px solid}#msi-common-commercial-menu a{text-decoration:none}', Xi = { id: "msi-common-commercial-menu" }, Zi = { class: "msi__container" }, er = { class: "commercialMenuBar__PC" }, tr = { class: "commercialMenuBar__title" }, or = ["href", "target"], nr = { key: 0 }, ir = { class: "bar__list" }, rr = ["href", "id", "target"], ar = { class: "commercialMenuBar__title" }, lr = ["href", "target"], sr = ["aria-label"], cr = { class: "dropDownMenu__list" }, mr = ["href", "id", "target"], ur = {
  __name: "MSICommonCommercialMenu.ce",
  setup(k, { expose: h }) {
    const n = x(!1), c = x({}), d = x(0);
    h({
      setCommercialMenuProps: (r, f) => {
        c.value = r, d.value = f;
      }
    }), ce(() => {
      i(), p();
    }), me(() => {
      document.removeEventListener("click", v), window.removeEventListener("resize", a());
    });
    function i() {
      document.addEventListener("click", v);
    }
    function v() {
      n.value = !1;
    }
    function p() {
      window.addEventListener("resize", a());
    }
    const a = () => (r) => {
      r.target.innerWidth > 1200 && (n.value = !1);
    }, y = z(() => {
      var r, f;
      return ((f = (r = c.value) == null ? void 0 : r.list) == null ? void 0 : f.length) > 0;
    });
    function m() {
      y.value && (n.value = !n.value);
    }
    return (r, f) => (t(), o("section", Xi, [
      e("nav", Zi, [
        e("div", er, [
          e("div", tr, [
            K(r.$slots, "pc-home", {}, () => {
              var l, s, $;
              return [
                e("a", {
                  href: (l = c.value.homeLink) == null ? void 0 : l.url,
                  target: (s = c.value.homeLink) == null ? void 0 : s.target
                }, u(($ = c.value.homeLink) == null ? void 0 : $.linkText), 9, or)
              ];
            })
          ]),
          y.value ? (t(), o("div", nr, [
            K(r.$slots, "pc-menu", {}, () => [
              e("ul", ir, [
                (t(!0), o(D, null, S(c.value.list, ({ linkText: l, url: s, target: $ }, L) => (t(), o("li", {
                  class: "bar__item",
                  key: l
                }, [
                  e("a", {
                    href: s,
                    class: B({ isActive: d.value === L }),
                    id: L,
                    target: $
                  }, u(l), 11, rr)
                ]))), 128))
              ])
            ])
          ])) : C("", !0)
        ]),
        e("div", {
          class: "commercialMenuBar__mobile",
          onClick: g(m, ["prevent", "stop"])
        }, [
          e("div", ar, [
            K(r.$slots, "mobile-home", {}, () => {
              var l, s, $;
              return [
                e("a", {
                  href: (l = c.value.homeLink) == null ? void 0 : l.url,
                  target: (s = c.value.homeLink) == null ? void 0 : s.target
                }, u(($ = c.value.homeLink) == null ? void 0 : $.linkText), 9, lr)
              ];
            })
          ]),
          y.value ? (t(), o("button", {
            key: 0,
            class: B(["dropDownMenu__button", { rotate: n.value }]),
            "aria-label": n.value ? "Collapse submenu" : "Expand submenu"
          }, [...f[0] || (f[0] = [
            e("i", { class: "icon-msi-down" }, null, -1)
          ])], 10, sr)) : C("", !0)
        ]),
        I(F, { name: "fadeFaster" }, {
          default: A(() => [
            J(e("div", null, [
              K(r.$slots, "mobile-menu", {}, () => [
                e("ul", cr, [
                  (t(!0), o(D, null, S(c.value.list, ({ linkText: l, url: s, target: $ }, L) => (t(), o("li", {
                    class: "dropDownMenu__item",
                    key: l
                  }, [
                    e("a", {
                      href: s,
                      class: B({ isActive: d.value === L }),
                      id: L,
                      target: $
                    }, u(l), 11, mr)
                  ]))), 128))
                ])
              ])
            ], 512), [
              [Q, n.value]
            ])
          ]),
          _: 3
        })
      ])
    ]));
  }
}, pr = /* @__PURE__ */ V(ur, [["styles", [Vi]]]), dr = { class: "productMenu__nav" }, _r = ["href", "target"], vr = {
  __name: "ProductMenuNav",
  props: {
    menu: {
      type: Object,
      default: () => ({})
    }
  },
  setup(k) {
    const h = k, { menu: n } = E(h), c = location.pathname;
    return (d, _) => (t(), o("nav", dr, [
      (t(!0), o(D, null, S(w(n), ({ linkText: i, url: v, target: p }) => (t(), o("a", {
        class: B(["menu__item", { active: w(c) === v || w(c).replace(/^\/preview/, "") === v }]),
        key: i,
        href: v,
        target: p
      }, u(i), 11, _r))), 128))
    ]));
  }
}, gr = '@import"https://storage-asset.msi.com/msisite/css/common-msi-icons.css";.msi__container{position:relative;padding:0 25px;margin:0 auto}@media(min-width:1300px){.msi__container{max-width:1330px}}@media(min-width:1300px){.msi__container.product-line{max-width:none}}.fade-enter-active{animation:fadeIn .5s}.fade-leave-active{animation:fadeOut .5s}.fadeFaster-enter-active{animation:fadeIn .2s}.fadeFaster-leave-active{animation:fadeOut .2s}.navDrop-enter-active{animation:navDrop 1s}.navDrop-leave-active{animation:navCollapse .5s}.fall-enter-active{transition:opacity .5s,transform .3s;position:absolute;right:0;left:0}.fall-leave-active{transition:opacity .3s,transform .3s;position:absolute;right:0;left:0}.fall-enter-to,.fall-leave-from{opacity:1;transform:translateY(0)}.fall-leave-to,.fall-enter-from{opacity:0;transform:translateY(-20px)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes navDrop{0%{opacity:0;max-height:0}50%{max-height:1000px}to{opacity:1}}@keyframes navCollapse{0%{opacity:1;max-height:1000px}to{opacity:0;max-height:0}}.footerDrop-enter-active{animation:footerDrop .5s;overflow:hidden}.footerDrop-leave-active{animation:footerCollapse .5s;overflow:hidden}@keyframes footerDrop{0%{max-height:0}to{max-height:300px}}@keyframes footerCollapse{0%{max-height:300px}to{max-height:0}}.productHeaderDrop-enter-active{animation:productHeaderDrop .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-enter-active{animation:productHeaderDrop-lg .5s}}.productHeaderDrop-leave-active{animation:productHeaderCollapse .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-leave-active{animation:productHeaderCollapse-lg .5s}}@keyframes productHeaderDrop{0%{max-height:0}to{max-height:150px}}@keyframes productHeaderCollapse{0%{max-height:150px}to{max-height:0}}@keyframes productHeaderDrop-lg{0%{max-height:0}to{max-height:70px}}@keyframes productHeaderCollapse-lg{0%{max-height:70px}to{max-height:0}}.menu__item{text-transform:uppercase;font-size:16px;color:var(--color-gray-500)}@media(min-width:996px){.menu__item{font-size:14px}}.msi-common-product-menu{--color-primary: var(--color-gray-800)}.msi-common-product-menu *{box-sizing:border-box}.msi-common-product-menu ol,.msi-common-product-menu ul,.msi-common-product-menu li{list-style:none;margin:0}.msi-common-product-menu button{font-size:100%;cursor:pointer;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.msi-common-product-menu button:link,.msi-common-product-menu button:hover,.msi-common-product-menu button:visited,.msi-common-product-menu button:active,.msi-common-product-menu button:focus{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.msi-common-product-menu select{-webkit-appearance:none;-moz-appearance:none;appearance:none}.msi-common-product-menu a:focus-visible,.msi-common-product-menu button:focus-visible{outline:#000 2px solid}.msi-common-product-menu.productMenu__sticky{position:sticky;top:0;z-index:10}.msi-common-product-menu.gaming{--color-primary: var(--color-gaming)}.msi-common-product-menu.business{--color-primary: var(--color-gray-700)}.msi-common-product-menu{font-family:var(--MSIBodyFont);background-color:var(--color-gray-200)}.msi-common-product-menu a{text-decoration:none}.msi-common-product-menu .productHeader__productLine{display:none;padding-top:13px;margin:0;font-size:12px;font-weight:500;color:#2e2e2e;text-transform:uppercase}@media(min-width:996px){.msi-common-product-menu .productHeader__productLine{display:block}}.msi-common-product-menu .productHeader__main{display:flex;align-items:center}.msi-common-product-menu .productHeader__title{padding:20px 0;font-weight:700;font-size:18px;color:var(--color-gray-800);margin:0 auto 0 0}@media(min-width:996px){.msi-common-product-menu .productHeader__title{padding:12px 0}}.msi-common-product-menu .mobileMenu__dropdownButton{transition:transform .5s;color:var(--color-gray-600);display:flex;align-items:center}.msi-common-product-menu .mobileMenu__dropdownButton.active{transform:rotate(-180deg)}@media(min-width:1300px){.msi-common-product-menu .mobileMenu__dropdownButton{display:none}}.msi-common-product-menu .mobileMenu__dropdownButton .icon-msi-down{font-size:18px;font-weight:700}.msi-common-product-menu .productHeader__buyNow{padding:3px 10px;margin-left:10px;font-size:14px;color:var(--color-white);border-radius:4px;background:var(--color-primary)}@media(min-width:576px){.msi-common-product-menu .productHeader__buyNow{padding:6px 15px}}.msi-common-product-menu .buyNow__text{display:none}@media(min-width:576px){.msi-common-product-menu .buyNow__text{display:inline-block}}.msi-common-product-menu .buyNow__icon{display:inline-block;font-size:28px}@media(min-width:576px){.msi-common-product-menu .buyNow__icon{display:none}}.productHeader__main .productMenu__nav{display:none}@media(min-width:1300px){.productHeader__main .productMenu__nav{display:block}}.productHeader__main .menu__item{padding:13px 10px;color:var(--color-gray-700)}.productHeader__main .menu__item:nth-child(n+2){margin-left:8px}.productHeader__main .menu__item:hover,.productHeader__main .menu__item.active{color:var(--color-gray-800);box-shadow:0 -4px 0 -1px inset var(--color-primary)}.productMenu__mobileDropdown{position:absolute;left:0;right:0;z-index:100;background:var(--color-gray-300)}.productMenu__mobileDropdown .productMenu__mobileNav{display:flex;flex-wrap:wrap}.productMenu__mobileDropdown .productMenu__mobileNav .menu__item{padding:15px 0;flex:0 0 50%}@media(min-width:996px){.productMenu__mobileDropdown .productMenu__mobileNav .menu__item{padding:25px 0;text-align:center;flex:0 0 13%}}.productMenu__mobileDropdown .productMenu__mobileNav .menu__item:hover,.productMenu__mobileDropdown .productMenu__mobileNav .menu__item.active{color:var(--color-gray-800)}', fr = { class: "msi__container" }, hr = ["innerHTML"], xr = { class: "productHeader__main" }, br = ["innerHTML"], yr = ["href", "target", "aria-label"], kr = { class: "buyNow__text" }, wr = { class: "productMenu__mobileDropdown" }, $r = { class: "msi__container" }, Mr = {
  __name: "MSICommonProductMenu.ce",
  setup(k, { expose: h }) {
    const n = x(!1), c = x({});
    h({
      setProductMenuProps: (y) => {
        c.value = y;
      }
    });
    function _() {
      window.addEventListener("resize", p());
    }
    function i() {
      document.addEventListener("click", a);
    }
    function v() {
      document.removeEventListener("click", a), window.removeEventListener("resize", p());
    }
    const p = () => (y) => {
      y.target.innerWidth > 1300 && (n.value = !1);
    }, a = () => {
      n.value = !1;
    };
    return ce(() => {
      i(), _();
    }), me(() => {
      v();
    }), (y, m) => {
      var f, l, s, $;
      const r = vr;
      return t(), o("section", {
        id: "msi-common-product-menu",
        class: B(["msi-common-product-menu", [
          c.value.style,
          { productMenu__sticky: c.value.isSticky === "1" }
        ]])
      }, [
        e("div", fr, [
          e("h3", {
            class: "productHeader__productLine",
            innerHTML: c.value.productLine
          }, null, 8, hr),
          e("div", xr, [
            e("h1", {
              class: "productHeader__title",
              innerHTML: c.value.title
            }, null, 8, br),
            I(r, {
              menu: c.value.header
            }, null, 8, ["menu"]),
            e("button", {
              class: B(["mobileMenu__dropdownButton", { active: n.value }]),
              onClick: m[0] || (m[0] = g((L) => n.value = !n.value, ["prevent", "stop"])),
              "aria-label": "Toggle Product Menu Dropdown"
            }, [...m[1] || (m[1] = [
              e("span", { class: "icon-msi-down" }, null, -1)
            ])], 2),
            e("a", {
              class: "productHeader__buyNow",
              href: (f = c.value.store) == null ? void 0 : f.url,
              target: (l = c.value.store) == null ? void 0 : l.target,
              "aria-label": (s = c.value.store) == null ? void 0 : s.linkText
            }, [
              e("span", kr, u(($ = c.value.store) == null ? void 0 : $.linkText), 1),
              m[2] || (m[2] = e("span", {
                class: "buyNow__icon icon-msi-shopcart",
                "aria-hidden": "true"
              }, null, -1))
            ], 8, yr)
          ])
        ]),
        I(F, { name: "productHeaderDrop" }, {
          default: A(() => [
            J(e("div", wr, [
              e("div", $r, [
                I(r, {
                  menu: c.value.header,
                  class: "productMenu__mobileNav"
                }, null, 8, ["menu"])
              ])
            ], 512), [
              [Q, n.value]
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
}, Cr = /* @__PURE__ */ V(Mr, [["styles", [gr]]]), zr = {}, Dr = { class: "footerQrcode" };
function Sr(k, h) {
  return t(), o("li", Dr, [...h[0] || (h[0] = [
    He('<figure class="qrCode"><img class="qrCode__image" src="https://storage-asset.msi.com/cn/picture/image/cn_wechat_store_qr.png" alt=""><figcaption class="qrCode__text">扫描进入商城<br>小程序</figcaption></figure><figure class="qrCode"><img class="qrCode__image" src="https://storage-asset.msi.com/cn/picture/image/cn_mb_group_qr.jpg" alt=""><figcaption class="qrCode__text">微星板卡<br>公众号</figcaption></figure><figure class="qrCode"><img class="qrCode__image" src="https://storage-asset.msi.com/cn/picture/image/cn_nb_group_qr.jpg" alt=""><figcaption class="qrCode__text">微星笔记本<br>公众号</figcaption></figure>', 3)
  ])]);
}
const Lr = /* @__PURE__ */ V(zr, [["render", Sr]]), Tr = { class: "footerMobileExpandedArea" }, Br = ["href", "target"], Ir = {
  __name: "FooterMobileExpandedAria",
  props: {
    footerList: {
      type: Array,
      default: () => []
    },
    isCurrentMenu: {
      type: Boolean,
      default: !1
    }
  },
  setup(k) {
    const h = k, { footerList: n, isCurrentMenu: c } = E(h);
    return (d, _) => J((t(), o("ul", Tr, [
      (t(!0), o(D, null, S(w(n), ({ menu_no: i, title: v, url: p, target: a }) => (t(), o("li", {
        class: "footerMobileExpandedArea__item",
        key: i
      }, [
        e("a", {
          href: p,
          target: a
        }, u(v), 9, Br)
      ]))), 128))
    ], 512)), [
      [Q, w(c)]
    ]);
  }
}, Er = { class: "footerSubMenu" }, Hr = ["href", "target"], Or = {
  __name: "FooterSubMenu",
  props: {
    footerList: {
      type: Array,
      default: () => []
    }
  },
  setup(k) {
    const h = k, { footerList: n } = E(h);
    return (c, d) => (t(), o("ul", Er, [
      (t(!0), o(D, null, S(w(n), ({ menu_no: _, title: i, url: v, target: p }) => (t(), o("li", {
        class: "footerSubMenu__item",
        key: _
      }, [
        e("a", {
          href: v,
          target: p
        }, u(i), 9, Hr)
      ]))), 128))
    ]));
  }
}, Pr = { class: "footerMenu" }, Ar = { class: "item__PCtitle" }, Fr = ["onClick"], Ur = {
  __name: "FooterMenu",
  props: {
    footerMenu: {
      type: Array,
      default: () => []
    },
    footerList: {
      type: Object,
      default: () => {
      }
    },
    isQrcodeShow: {
      type: Boolean,
      default: !1
    }
  },
  setup(k) {
    const h = k, { footerMenu: n, footerList: c, isQrcodeShow: d } = E(h), _ = x(null);
    function i(v) {
      if (v === _.value) {
        _.value = null;
        return;
      }
      _.value = v;
    }
    return (v, p) => {
      const a = Or, y = Ir, m = Lr;
      return t(), o("ul", Pr, [
        (t(!0), o(D, null, S(w(n), (r, f) => (t(), o("li", {
          class: "footerMenu__item",
          key: r
        }, [
          e("div", Ar, u(r), 1),
          I(a, {
            "footer-list": w(c)[Object.keys(w(c))[f]]
          }, null, 8, ["footer-list"]),
          e("button", {
            class: B(["item__MBtitle", { "item__MBtitle--active": _.value === f }]),
            onClick: (l) => i(f)
          }, u(r), 11, Fr),
          I(F, { name: "footerDrop" }, {
            default: A(() => [
              I(y, {
                "footer-list": w(c)[Object.keys(w(c))[f]],
                "is-current-menu": _.value === f
              }, null, 8, ["footer-list", "is-current-menu"])
            ]),
            _: 2
          }, 1024)
        ]))), 128)),
        w(d) ? (t(), j(m, { key: 0 })) : C("", !0)
      ]);
    };
  }
}, jr = '@import"https://storage-asset.msi.com/msisite/css/common-msi-icons.css";.msi__container{position:relative;padding:0 25px;margin:0 auto}@media(min-width:1300px){.msi__container{max-width:1330px}}@media(min-width:1300px){.msi__container.product-line{max-width:none}}.fade-enter-active{animation:fadeIn .5s}.fade-leave-active{animation:fadeOut .5s}.fadeFaster-enter-active{animation:fadeIn .2s}.fadeFaster-leave-active{animation:fadeOut .2s}.navDrop-enter-active{animation:navDrop 1s}.navDrop-leave-active{animation:navCollapse .5s}.fall-enter-active{transition:opacity .5s,transform .3s;position:absolute;right:0;left:0}.fall-leave-active{transition:opacity .3s,transform .3s;position:absolute;right:0;left:0}.fall-enter-to,.fall-leave-from{opacity:1;transform:translateY(0)}.fall-leave-to,.fall-enter-from{opacity:0;transform:translateY(-20px)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes navDrop{0%{opacity:0;max-height:0}50%{max-height:1000px}to{opacity:1}}@keyframes navCollapse{0%{opacity:1;max-height:1000px}to{opacity:0;max-height:0}}.footerDrop-enter-active{animation:footerDrop .5s;overflow:hidden}.footerDrop-leave-active{animation:footerCollapse .5s;overflow:hidden}@keyframes footerDrop{0%{max-height:0}to{max-height:300px}}@keyframes footerCollapse{0%{max-height:300px}to{max-height:0}}.productHeaderDrop-enter-active{animation:productHeaderDrop .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-enter-active{animation:productHeaderDrop-lg .5s}}.productHeaderDrop-leave-active{animation:productHeaderCollapse .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-leave-active{animation:productHeaderCollapse-lg .5s}}@keyframes productHeaderDrop{0%{max-height:0}to{max-height:150px}}@keyframes productHeaderCollapse{0%{max-height:150px}to{max-height:0}}@keyframes productHeaderDrop-lg{0%{max-height:0}to{max-height:70px}}@keyframes productHeaderCollapse-lg{0%{max-height:70px}to{max-height:0}}.footerMenu{padding:0}@media(min-width:996px){.footerMenu{padding:40px 0 45px;display:flex;justify-content:space-between}}.footerMenu__item{border-bottom:1px solid #ececec}@media(min-width:996px){.footerMenu__item{padding:0 15px;border-bottom:none}.footerMenu__item:first-child{padding-left:0}.footerMenu__item:last-child{padding-right:0}}.item__PCtitle,.item__MBtitle{padding:20px 0;font-size:17px;font-weight:700}.item__PCtitle{display:none}@media(min-width:996px){.item__PCtitle{display:block}}.item__MBtitle{width:100%;text-align:left;position:relative}.item__MBtitle:before,.item__MBtitle:after{display:inline-block;content:"";position:absolute;right:0;width:12px;height:2px;background:#000;border-radius:5px;transition:transform .3s}.item__MBtitle:before{transform:translateY(10px) rotate(0)}.item__MBtitle:after{transform:translateY(10px) rotate(90deg)}.item__MBtitle--active{background-color:transparent}.item__MBtitle--active:before{transform:translateY(10px) rotate(45deg)}.item__MBtitle--active:after{transform:translateY(10px) rotate(135deg)}@media(min-width:996px){.item__MBtitle{display:none}}.footerSubMenu{display:none;padding:0}@media(min-width:996px){.footerSubMenu{display:block}}.footerSubMenu__item{padding:6px 0;font-size:16px}.footerQrcode{max-width:460px;width:100%;margin:0 auto;display:flex;justify-content:space-between;padding:10px 0}.qrCode{margin:0}.qrCode__image{width:120px;height:120px}.qrCode__text{text-align:center}.footerMobileExpandedArea{padding:0}@media(min-width:996px){.footerMobileExpandedArea{display:none}}.footerMobileExpandedArea__item{padding:15px 0}#msi-common-footer{color:var(--color-gray-600);font-family:var(--MSIBodyFont);background-color:var(--color-gray-200);border-top:1px solid #ECECEC;min-width:260px}#msi-common-footer *{box-sizing:border-box}#msi-common-footer ol,#msi-common-footer ul,#msi-common-footer li{list-style:none;margin:0}#msi-common-footer button{font-size:100%;cursor:pointer;border:none;background:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}#msi-common-footer button:link,#msi-common-footer button:hover,#msi-common-footer button:visited,#msi-common-footer button:active,#msi-common-footer button:focus{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}#msi-common-footer select{-webkit-appearance:none;-moz-appearance:none;appearance:none}#msi-common-footer a:focus-visible,#msi-common-footer button:focus-visible{outline:#000 2px solid}#msi-common-footer button,#msi-common-footer a{color:var(--color-gray-600)}#msi-common-footer a{text-decoration:none}#msi-common-footer a:hover{text-decoration:underline}#msi-common-footer .socialLangSwitcher{display:flex;flex-direction:column-reverse;padding:20px 0;border-bottom:.66px solid var(--color-gray-300);justify-content:space-between}@media(min-width:768px){#msi-common-footer .socialLangSwitcher{padding:25px 0;flex-direction:row;align-items:center}}#msi-common-footer .langIcon{margin-right:3px}#msi-common-footer .socialMedia{margin-top:15px}@media(min-width:768px){#msi-common-footer .socialMedia{margin-top:0}}#msi-common-footer .socialMedia .media-link{display:block;width:40px;height:40px;padding:3px;text-align:center;color:var(--color-white);background-color:var(--color-gray-400);border-radius:100%;font-size:26px}#msi-common-footer .socialMedia .media-link:hover{text-decoration:none;background-color:var(--color-gray-500)}#msi-common-footer .socialMedia .media-row{display:flex;margin:-5px;flex-wrap:wrap}#msi-common-footer .socialMedia .media-col{padding:5px;flex:0 0 8.3333333333%;flex:0 0 45px}#msi-common-footer .langSwitchLink{display:flex;align-items:center;font-size:16px}', Nr = { id: "msi-common-footer" }, qr = { class: "msi__container" }, Wr = { class: "socialLangSwitcher" }, Gr = { class: "socialMedia" }, Kr = {
  key: 0,
  class: "media-row"
}, Yr = ["href", "target", "aria-label"], Rr = { class: "langSwitch" }, Jr = ["href"], Qr = {
  __name: "MSICommonFooter.ce",
  props: {
    currentCountry: {
      type: String,
      default: "global"
    }
  },
  setup(k, { expose: h }) {
    const n = x([]), c = x({}), d = x({}), _ = x([]), i = {
      facebook: "icon-msi-fb",
      instagram: "icon-msi-ig",
      youtube: "icon-msi-yt-play",
      twitter: "icon-msi-twitter-lineal",
      twitch: "icon-msi-twitch",
      linkedin: "icon-msi-linkedin",
      vk: "icon-msi-vk",
      weibo: "icon-msi-weibo",
      bilibili: "icon-msi-bilibili",
      naver: "icon-msi-naver",
      tiktok: "icon-msi-tiktok",
      discord: "icon-msi-discord",
      line: "icon-msi-line"
    }, v = (m) => {
      const { socialMedia: r, langSwitch: f, footer_list: l, itemTitle: s, ...$ } = m;
      if (!!!Object.keys(s ?? {}).length) {
        n.value = Object.values($), c.value = l;
        return;
      }
      _.value = r, d.value = f, n.value = Object.values(s), c.value = l;
    }, p = k, { currentCountry: a } = E(p), y = z(() => a.value.toLocaleLowerCase() === "cn");
    return h({
      setFooterProps: v
    }), (m, r) => {
      const f = Ur;
      return t(), o("footer", Nr, [
        e("nav", qr, [
          e("div", Wr, [
            e("div", Gr, [
              _.value.length ? (t(), o("div", Kr, [
                (t(!0), o(D, null, S(_.value, (l) => (t(), o("div", {
                  class: "media-col",
                  key: l.linkText
                }, [
                  e("a", {
                    class: "media-link",
                    href: l.url,
                    target: l.target,
                    "aria-label": l.linkText
                  }, [
                    e("i", {
                      class: B(i[l.linkText])
                    }, null, 2)
                  ], 8, Yr)
                ]))), 128))
              ])) : C("", !0)
            ]),
            e("div", Rr, [
              K(m.$slots, "service", {}, () => {
                var l, s;
                return [
                  ((l = d.value) == null ? void 0 : l.url) ?? "" ? (t(), o("a", {
                    key: 0,
                    href: d.value.url,
                    target: "_self",
                    class: "langSwitchLink"
                  }, [
                    r[0] || (r[0] = e("img", {
                      class: "langIcon",
                      width: "16",
                      height: "16",
                      src: "https://www.msi.com/images/front/global.png",
                      alt: "earth icon"
                    }, null, -1)),
                    Oe(" " + u(((s = d.value) == null ? void 0 : s.linkText) ?? "language"), 1)
                  ], 8, Jr)) : C("", !0)
                ];
              })
            ])
          ]),
          I(f, {
            "footer-menu": n.value,
            "footer-list": c.value,
            "is-qrcode-show": y.value
          }, null, 8, ["footer-menu", "footer-list", "is-qrcode-show"])
        ])
      ]);
    };
  }
}, Vr = /* @__PURE__ */ V(Qr, [["styles", [jr]]]), Xr = {
  __name: "FooterInfoAccessibilityButton",
  setup(k) {
    function h() {
      var n;
      (n = window.interdeal) != null && n.a11y ? window.interdeal.a11y.openMenu() : console.warn("EqualWeb 尚未載入或物件不存在");
    }
    return (n, c) => (t(), o("button", {
      class: "accessibility__button",
      type: "button",
      "aria-label": "Explore your accessibility options",
      tabindex: "0",
      onClick: g(h, ["prevent"])
    }, [...c[0] || (c[0] = [
      e("svg", {
        version: "1.2",
        width: "25px",
        baseProfile: "tiny",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 12.96 15.577",
        "xml:space": "preserve"
      }, [
        e("path", {
          width: "38px",
          height: "38px",
          fill: "#a1a1a1",
          d: "M8.652,10.444c-0.299,0-0.539,0.24-0.539,0.538c-0.002,1.255-0.672,2.415-1.758,3.043c-1.682,0.972-3.833,0.396-4.805-1.284C0.577,11.06,1.152,8.907,2.834,7.937c0.012-0.008,0.023-0.015,0.037-0.021c0.251-0.16,0.324-0.494,0.166-0.745c-0.16-0.251-0.493-0.326-0.744-0.167C0.874,7.825,0,9.341,0,10.979c-0.001,2.537,2.057,4.596,4.595,4.598c2.536-0.002,4.593-2.057,4.597-4.595C9.191,10.685,8.949,10.444,8.652,10.444zM11.907,11.103l-1.644-2.84C10.006,7.816,9.51,7.563,8.997,7.614L7.25,7.791C7.085,7.812,6.934,7.694,6.916,7.528C6.91,7.484,6.914,7.439,6.928,7.396l0.777-2.078l2.158,0.635c0.363,0.113,0.75-0.091,0.862-0.455c0.112-0.365-0.091-0.751-0.456-0.863l-3.365-0.99c-0.1-0.035-0.213-0.069-0.342-0.103L6.354,3.48c-0.079-0.024-0.161-0.031-0.24-0.026c-0.121-0.018-0.246-0.032-0.381-0.04C4.305,3.337,3.711,3.696,3.545,3.841C3.375,3.987,3.262,4.2,3.248,4.444C3.244,4.505,3.246,4.566,3.256,4.627l0.663,3.808c0.176,1.018,1.143,1.701,2.161,1.528L8.1,9.618c0.49-0.082,0.983,0.119,1.275,0.521l1.26,1.725c0.193,0.265,0.549,0.351,0.842,0.206l0.166-0.082c0.313-0.156,0.439-0.536,0.284-0.849C11.92,11.126,11.914,11.114,11.907,11.103z M5.563,2.616c0.723,0.039,1.34-0.514,1.379-1.236c0.038-0.723-0.516-1.339-1.238-1.378C4.98-0.038,4.364,0.517,4.325,1.239C4.286,1.961,4.84,2.577,5.563,2.616z M12.758,3.468c-0.182-0.092-0.405-0.021-0.497,0.162l-1.47,2.877L8.355,6.376c-0.205-0.012-0.38,0.145-0.391,0.35c-0.012,0.205,0.146,0.379,0.35,0.391l2.676,0.143c0.006,0,0.014,0.002,0.02,0.002c0.139,0,0.267-0.08,0.33-0.203l1.579-3.092C13.012,3.783,12.939,3.561,12.758,3.468z"
        })
      ], -1)
    ])]));
  }
}, Zr = ".msi__container{position:relative;padding:0 25px;margin:0 auto}@media(min-width:1300px){.msi__container{max-width:1330px}}@media(min-width:1300px){.msi__container.product-line{max-width:none}}.fade-enter-active{animation:fadeIn .5s}.fade-leave-active{animation:fadeOut .5s}.fadeFaster-enter-active{animation:fadeIn .2s}.fadeFaster-leave-active{animation:fadeOut .2s}.navDrop-enter-active{animation:navDrop 1s}.navDrop-leave-active{animation:navCollapse .5s}.fall-enter-active{transition:opacity .5s,transform .3s;position:absolute;right:0;left:0}.fall-leave-active{transition:opacity .3s,transform .3s;position:absolute;right:0;left:0}.fall-enter-to,.fall-leave-from{opacity:1;transform:translateY(0)}.fall-leave-to,.fall-enter-from{opacity:0;transform:translateY(-20px)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes navDrop{0%{opacity:0;max-height:0}50%{max-height:1000px}to{opacity:1}}@keyframes navCollapse{0%{opacity:1;max-height:1000px}to{opacity:0;max-height:0}}.footerDrop-enter-active{animation:footerDrop .5s;overflow:hidden}.footerDrop-leave-active{animation:footerCollapse .5s;overflow:hidden}@keyframes footerDrop{0%{max-height:0}to{max-height:300px}}@keyframes footerCollapse{0%{max-height:300px}to{max-height:0}}.productHeaderDrop-enter-active{animation:productHeaderDrop .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-enter-active{animation:productHeaderDrop-lg .5s}}.productHeaderDrop-leave-active{animation:productHeaderCollapse .5s;overflow:hidden}@media(min-width:996px){.productHeaderDrop-leave-active{animation:productHeaderCollapse-lg .5s}}@keyframes productHeaderDrop{0%{max-height:0}to{max-height:150px}}@keyframes productHeaderCollapse{0%{max-height:150px}to{max-height:0}}@keyframes productHeaderDrop-lg{0%{max-height:0}to{max-height:70px}}@keyframes productHeaderCollapse-lg{0%{max-height:70px}to{max-height:0}}.accessibility__button{margin-bottom:15px}@media(min-width:996px){.accessibility__button{margin-bottom:0;margin-left:15px}}#msi-common-footer-info{font-family:var(--MSIBodyFont);color:var(--color-gray-600);background-color:var(--color-gray-200);min-width:260px}#msi-common-footer-info *{box-sizing:border-box}#msi-common-footer-info button,#msi-common-footer-info a{color:var(--color-gray-600)}#msi-common-footer-info button{font-size:100%;cursor:pointer;border:none;background:none}#msi-common-footer-info button:link,#msi-common-footer-info button:hover,#msi-common-footer-info button:visited,#msi-common-footer-info button:active,#msi-common-footer-info button:focus{outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}#msi-common-footer-info a{text-decoration:none}#msi-common-footer-info a:hover{text-decoration:underline}#msi-common-footer-info ol,#msi-common-footer-info ul,#msi-common-footer-info li{list-style:none;padding:0}.footerInfo{padding-top:30px;padding-bottom:30px}@media(min-width:996px){.footerInfo{border-top:.66px solid var(--color-gray-300);padding-top:21px;padding-bottom:21px;display:flex;justify-content:space-between;align-items:center;flex-direction:row-reverse}}.footer__service{font-size:17px;line-height:19px;display:flex;flex-wrap:wrap;margin:0 auto}@media(min-width:996px){.footer__service{flex-wrap:nowrap;max-width:none;width:auto;margin:0 0 0 auto;font-size:13px;line-height:17px}}.footer__service li{margin-bottom:19px;margin-right:17px;display:inline-block}@media(min-width:996px){.footer__service li{margin-bottom:0}}.footer__service li a{display:flex;align-items:center}.footer__service li a img{margin-right:2px}.footer__service li:last-child{margin-right:0}.footer__service a{color:var(--color-gray-600);text-decoration:none}.footer__service a:hover{text-decoration:underline}.flex-wrapper{display:flex;align-items:center}.footer__copyright{display:flex;align-items:center;font-size:13px;line-height:16px}", ea = { id: "msi-common-footer-info" }, ta = { class: "msi__container" }, oa = { class: "footerInfo" }, na = { class: "footer__service" }, ia = ["href", "target"], ra = { class: "flex-wrapper" }, aa = ["innerHTML"], la = {
  __name: "MSICommonFooterInfo.ce",
  props: {
    showA11yButton: {
      type: Boolean,
      default: !1
    }
  },
  setup(k, { expose: h }) {
    const n = x({}), c = (i) => {
      n.value = i;
    }, d = k, { showA11yButton: _ } = E(d);
    return h({
      setFooterInfoProps: c
    }), (i, v) => {
      const p = Xr;
      return t(), o("footer", ea, [
        e("nav", ta, [
          e("div", oa, [
            w(_) ? (t(), j(p, { key: 0 })) : C("", !0),
            K(i.$slots, "service", {}, () => [
              e("ul", na, [
                (t(!0), o(D, null, S(n.value.list, ({ linkText: a, url: y, target: m }) => (t(), o("li", { key: a }, [
                  e("a", {
                    href: y,
                    target: m
                  }, u(a), 9, ia)
                ]))), 128))
              ])
            ]),
            e("div", ra, [
              e("div", {
                class: "footer__copyright",
                innerHTML: n.value.copyright
              }, null, 8, aa),
              K(i.$slots, "customInfo")
            ])
          ])
        ])
      ]);
    };
  }
}, sa = /* @__PURE__ */ V(la, [["styles", [Zr]]]), ca = X(Qi), ma = X(pr), ua = X(Cr), pa = X(Vr), da = X(sa), _a = X(Pe);
function fa() {
  customElements.get("msi-common-menu") || (customElements.define("msi-common-menu", ca), !customElements.get("msi-common-commercial-menu") && (customElements.define("msi-common-commercial-menu", ma), !customElements.get("msi-common-product-menu") && (customElements.define("msi-common-product-menu", ua), !customElements.get("msi-common-footer") && (customElements.define("msi-common-footer", pa), !customElements.get("msi-common-footer-info") && (customElements.define("msi-common-footer-info", da), !customElements.get("msi-chatbot") && customElements.define("msi-chatbot", _a))))));
}
export {
  _a as MSIChatbotElement,
  ma as MSICommonCommercialMenuElement,
  pa as MSICommonFooterElement,
  da as MSICommonFooterInfoElement,
  ca as MSICommonMenuElement,
  ua as MSICommonProductMenuElement,
  fa as initializeMSIWebComponent
};
