(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22, 62], {
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
    "3Eh+": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _Users_apple_Desktop_github_dooring_bs_editor_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tJVT")
          , react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd")
          , react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__)
          , _XButton_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jwKU")
          , _animate_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("R2Hl")
          , _animate_css_modules__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_animate_css_modules__WEBPACK_IMPORTED_MODULE_3__)
          , umi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9kvl")
          , _utils_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RKZ9")
          , classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("TSYQ")
          , classnames__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__)
          , TextCp = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(props=>{
            var cpName = props.cpName
              , align = props.align
              , text = props.text
              , fontSize = props.fontSize
              , color = props.color
              , lineHeight = props.lineHeight
              , fontWeight = props.fontWeight
              , fontStyle = props.fontStyle
              , bgColor = props.bgColor
              , padding = props.padding
              , radius = props.radius
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
              , _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!1)
              , _useState4 = Object(_Users_apple_Desktop_github_dooring_bs_editor_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["a"])(_useState3, 2)
              , isEditable = _useState4[0]
              , setEditable = _useState4[1]
              , textRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null)
              , isEditorPage = window.location.pathname.indexOf("editor") > -1
              , handleClick = ()=>{
                if (!isEditorPage)
                    if ("link" === type) {
                        if (content.indexOf("http") > -1 || content.indexOf(".") > -1)
                            return void (window.location.href = content.indexOf("http") > -1 ? content : "https://".concat(content));
                        content && umi__WEBPACK_IMPORTED_MODULE_4__["a"].push("?tid=".concat(content))
                    } else
                        "modal" === type ? setVisible(!0) : "code" === type ? eval(content) : "phone" === type && (window.location.href = "tel://" + content)
            }
              , handleDoubleClick = ()=>{
                isEditorPage && (setEditable(!0),
                setTimeout(()=>{
                    textRef.current.focus(),
                    textRef.current.value = text
                }
                , 30))
            }
              , handleSaveText = ()=>{
                window.handleTextUpdate(textRef.current.value),
                setEditable(!1)
            }
              , handleClose = ()=>{
                setVisible(!1)
            }
            ;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("dooring-text", "none" !== animation && _animate_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a["animate__".concat(animation)]),
                style: {
                    color: color,
                    textAlign: align,
                    textAlignLast: align,
                    fontSize: Object(_utils_tool__WEBPACK_IMPORTED_MODULE_5__["b"])(fontSize),
                    lineHeight: lineHeight,
                    fontWeight: +fontWeight,
                    backgroundColor: bgColor,
                    padding: padding,
                    textDecoration: fontStyle,
                    borderRadius: radius,
                    animationIterationCount: animationTurn,
                    animationDelay: delay + "s"
                },
                onClick: handleClick,
                onDoubleClick: handleDoubleClick
            }, text, isEditable && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
                ref: textRef,
                style: {
                    border: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    fontSize: fontSize,
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    color: "rgba(60,60,60,1)"
                },
                onBlur: handleSaveText
            })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_XButton_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        __webpack_exports__["default"] = TextCp
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
          , i = t("faye")
          , o = t.n(i)
          , l = t("0jGJ")
          , r = t.n(l)
          , s = _=>{
            var e = _.visible
              , t = _.title
              , a = _.children
              , i = _.onClose
              , l = _.height
              , s = _.width
              , c = _.okText
              , d = _.cancelText
              , p = _.onOk
              , m = _.btnColor
              , u = ()=>{
                p && (location.href = p)
            }
              , E = ()=>{
                i && i()
            }
              , b = n.a.createElement("div", {
                className: r.a.modalWrap
            }, n.a.createElement("div", {
                className: r.a.modalMask
            }), n.a.createElement("div", {
                className: r.a.modal,
                style: {
                    width: s + "px",
                    height: l + "px"
                }
            }, n.a.createElement("span", {
                className: r.a.closeBtn,
                onClick: i
            }, "x"), n.a.createElement("div", {
                className: r.a.modalTit
            }, t), n.a.createElement("div", {
                style: {
                    maxHeight: l - 120,
                    overflow: "auto"
                }
            }, " ", a, " "), (!!c || !!d) && n.a.createElement("div", {
                className: r.a.footer
            }, n.a.createElement("div", {
                className: r.a.btn,
                hidden: true,
                onClick: u,
                style: {
                    backgroundColor: m 
                }
            }, c || "\u786e"), n.a.createElement("div", {
                className: r.a.btn,
                onClick: E
            }, d || "\u53d6\u6d88"))));
            return e ? o.a.createPortal(b, document.body) : null
        }
        ;
        e["default"] = Object(a["memo"])(s)
    }
}]);
