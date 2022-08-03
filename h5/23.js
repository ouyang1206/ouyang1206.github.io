(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23, 62], {
    "0A8l": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _Users_apple_Desktop_github_dooring_bs_editor_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tJVT")
          , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd")
          , react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__)
          , _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jwKU")
          , umi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9kvl")
          , classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TSYQ")
          , classnames__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__)
          , _utils_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RKZ9")
          , _index_less_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0jGJ")
          , _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_index_less_modules__WEBPACK_IMPORTED_MODULE_6__)
          , _animate_css_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("R2Hl")
          , _animate_css_modules__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(_animate_css_modules__WEBPACK_IMPORTED_MODULE_7__)
          , XButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props=>{
            var cpName = props.cpName
              , id = props.id
              , bgColor = props.bgColor
              , round = props.round
              , marginTop = props.marginTop
              , _props$padding = props.padding
              , padding = void 0 === _props$padding ? [] : _props$padding
              , text = props.text
              , width = props.width
              , fontSize = props.fontSize
              , display = props.display
              , color = props.color
              , animation = props.animation
              , animationTurn = props.animationTurn
              , delay = props.delay
              , _props$interaction = props.interaction
              , interaction = void 0 === _props$interaction ? {
                type: "",
                content: "",
                title: "",
                width: 300,
                height: 300,
                okText: "",
                cancelText: "",
                btnColor: "",
                onOk: ""
            } : _props$interaction
              , type = interaction.type
              , content = interaction.content
              , _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!1)
              , _useState2 = Object(_Users_apple_Desktop_github_dooring_bs_editor_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_useState, 2)
              , visible = _useState2[0]
              , setVisible = _useState2[1]
              , handleClick = ()=>{
                if ("link" === type) {
                    if (window.location.href.indexOf("preview") > -1)
                        return void (content && (content.indexOf("http") > -1 || content.indexOf(".") > -1 ? window.location.href = content.indexOf("http") > -1 ? content : "https://".concat(content) : window.location.href = "/h5?tid=".concat(content)));
                    if (content.indexOf("http") > -1 || content.indexOf(".") > -1)
                        return void (window.location.href = content.indexOf("http") > -1 ? content : "https://".concat(content));
                    content && umi__WEBPACK_IMPORTED_MODULE_3__["a"].push("?tid=".concat(content))
                } else
                    "modal" === type ? setVisible(!0) : "code" === type ? eval(content) : "phone" === type && (window.location.href = "tel://" + content)
            }
              , handleClose = ()=>{
                setVisible(!1)
            }
            ;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                style: {
                    textAlign: "center",
                    padding: "6px",
                    marginTop: marginTop
                }
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                id:id,className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.btn, "none" !== animation && _animate_css_modules__WEBPACK_IMPORTED_MODULE_7___default.a["animate__".concat(animation)]),
                style: {
                    display: display,
                    backgroundColor: bgColor,
                    borderRadius: round,
                    width: Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__["b"])(width),
                    padding: "".concat(padding[0], "px ").concat(padding[1], "px"),
                    animationIterationCount: animationTurn,
                    animationDelay: delay + "s"
                }
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
                className: _index_less_modules__WEBPACK_IMPORTED_MODULE_6___default.a.text,
                style: {
                    fontSize: fontSize,
                    color: color
                },
                onClick: handleClick
            }, text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
                visible: visible,
                onClose: handleClose,
                title: interaction && interaction.title,
                width: interaction.width,
                height: interaction.height,
                okText: interaction.okText,
                cancelText: interaction.cancelText,
                onOk: interaction.onOk,
                btnColor: interaction.btnColor
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
              dangerouslySetInnerHTML: {
                    __html: content
                }
            })))
        }
        );
        __webpack_exports__["default"] = XButton
    },
    "0jGJ": function(_, e, t) {
        _.exports = {
            btn: "btn___2Qp3s",
            text: "text___1X1XD",
            modalWrap: "modalWrap___1p1LB",
            modalMask: "modalMask___2WVb0",
            modal: "modal___2azsy",
            closeBtn: "closeBtn___2RpMi",
            modalTit: "modalTit___cqk5s",
            footer: "footer___23aTG"
        }
    },
    R2Hl: function(_, e, t) {
        _.exports = {
            animate__bounce: "animate__bounce___2FpSW",
            bounce: "bounce___21Wxk",
            animate__scale: "animate__scale___7le2C",
            scale: "scale___2wpPS",
            animate__rubberBand: "animate__rubberBand___2aZ4Q",
            rubberBand: "rubberBand___3RYgU",
            animate__fadeInDown: "animate__fadeInDown___3Aula",
            fadeInDown: "fadeInDown___FGzKt",
            animate__fadeInLeft: "animate__fadeInLeft___3Z5ME",
            fadeInLeft: "fadeInLeft___288Ai",
            animate__fadeInRight: "animate__fadeInRight___2ePOm",
            fadeInRight: "fadeInRight___Ayh9L",
            animate__fadeInUp: "animate__fadeInUp___1bmG8",
            fadeInUp: "fadeInUp___95vFy",
            animate__flipInX: "animate__flipInX___24rbQ",
            flipInX: "flipInX___2VGjn",
            animate__flipInY: "animate__flipInY___2OeoN",
            flipInY: "flipInY___3CZlf",
            animate__hinge: "animate__hinge___1LUqY",
            hinge: "hinge___36f5l",
            animate__zoomIn: "animate__zoomIn___mAtDO",
            zoomIn: "zoomIn___3-Laz",
            animate__rotate: "animate__rotate___eZHo9",
            rotate: "rotate___3KFRK"
        }
    },
    jwKU: function(_, e, t) {
        "use strict";
        t.r(e);
        var a = t("cDcd")
          , n = t.n(a)
          , o = t("faye")
          , i = t.n(o)
          , r = t("0jGJ")
          , l = t.n(r)
          , c = _=>{
            var e = _.visible
              , t = _.title
              , a = _.children
              , o = _.onClose
              , r = _.height
              , c = _.width
              , s = _.okText
              , d = _.cancelText
              , p = _.onOk
              , m = _.btnColor
              , E = ()=>{
                p && (location.href = p)
            }
              , u = ()=>{
                o && o()
            }
              , O = n.a.createElement("div", {
               className: l.a.modalWrap
            }, n.a.createElement("div", {
                className: l.a.modalMask
            }), n.a.createElement("div", {
                className: l.a.modal,
                style: {
                    width: c + "px",
                    height: r + "px"
                }
            }, n.a.createElement("span", {
                 className: l.a.closeBtn,
                onClick: o
            }, "x"), n.a.createElement("div", {
                className: l.a.modalTit
            }, t), n.a.createElement("div", {
                style: {
                    maxHeight: r - 120,
                    overflow: "auto"
                }
            }, " ", a, " "), (!!s || !!d) && n.a.createElement("div", {
                className: l.a.footer
            }, n.a.createElement("div", {
                className: l.a.btn,
                onClick: E,
                hidden: true,
                style: {
                    backgroundColor: m
                }
            }, s || "\u8ba4"), n.a.createElement("div", {
                className: l.a.btn,
                onClick: u
            }, d || "\u53d6\u6d88"))));
            return e ? i.a.createPortal(O, document.body) : null
        }
        ;
        e["default"] = Object(a["memo"])(c)
    }
}]);
