exports.id = 18;
exports.ids = [18];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 4266:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(1751);
var _normalizeTrailingSlash = __webpack_require__(2387);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 370:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = void 0;
var _normalizeTrailingSlash = __webpack_require__(2387);
const addLocale = (path, ...args)=>{
    if (false) {}
    return path;
};
exports.addLocale = addLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 1516:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 3740:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _extends = (__webpack_require__(6495)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1598)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(6689));
var _head = _interop_require_default(__webpack_require__(2636));
var _imageBlurSvg = __webpack_require__(4486);
var _imageConfig = __webpack_require__(5843);
var _imageConfigContext = __webpack_require__(744);
var _warnOnce = __webpack_require__(618);
var _imageLoader = _interop_require_default(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs({ config , src , unoptimized , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === "w" ? w : i + 1}${kind}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "number" || typeof x === "undefined") {
        return x;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current(_extends({}, event, {
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            }));
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , className , imgStyle , blurStyle , isLazy , fetchPriority , fill , placeholder , loading , srcString , config , unoptimized , loader , onLoadRef , onLoadingCompleteRef , setBlurComplete , setShowAltText , onLoad , onError  } = _param, rest = _object_without_properties_loose(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "fetchPriority",
        "fill",
        "placeholder",
        "loading",
        "srcString",
        "config",
        "unoptimized",
        "loader",
        "onLoadRef",
        "onLoadingCompleteRef",
        "setBlurComplete",
        "setShowAltText",
        "onLoad",
        "onError"
    ]);
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, getDynamicProps(fetchPriority), {
        // @ts-expect-error - TODO: upgrade to `@types/react@18`
        loading: loading,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: _extends({}, imgStyle, blurStyle)
    }, imgAttributes, {
        ref: (0, _react).useCallback((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    })));
});
const Image = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { src , sizes , unoptimized =false , priority =false , loading , className , quality , width , height , fill , style , onLoad , onLoadingComplete , placeholder ="empty" , blurDataURL , fetchPriority , layout , objectFit , objectPosition , lazyBoundary , lazyRoot  } = _param, all = _object_without_properties_loose(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "className",
        "quality",
        "width",
        "height",
        "fill",
        "style",
        "onLoad",
        "onLoadingComplete",
        "placeholder",
        "blurDataURL",
        "fetchPriority",
        "layout",
        "objectFit",
        "objectPosition",
        "lazyBoundary",
        "lazyRoot"
    ]);
    const configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
    const config = (0, _react).useMemo(()=>{
        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return _extends({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageLoader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        var _tmp;
        _tmp = (obj)=>{
            const { config: _  } = obj, opts = _object_without_properties_loose(obj, [
                "config"
            ]);
            return customImageLoader(opts);
        }, loader = _tmp, _tmp;
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = _extends({}, style, layoutStyle);
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const [blurComplete, setBlurComplete] = (0, _react).useState(false);
    const [showAltText, setShowAltText] = (0, _react).useState(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,${(0, _imageBlurSvg).getImageBlurSvg({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        })}")`
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const onLoadRef = (0, _react).useRef(onLoad);
    (0, _react).useEffect(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
    (0, _react).useEffect(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = _extends({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fetchPriority,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs, {
        ref: forwardedRef
    })), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        // @ts-expect-error - TODO: upgrade to `@types/react@18`
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin
    }, getDynamicProps(fetchPriority)))) : null);
});
var _default = Image;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 5569:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

"use client";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(2648)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(7273)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(6689));
var _resolveHref = __webpack_require__(7782);
var _isLocalUrl = __webpack_require__(1109);
var _formatUrl = __webpack_require__(3938);
var _utils = __webpack_require__(9232);
var _addLocale = __webpack_require__(370);
var _routerContext = __webpack_require__(4964);
var _appRouterContext = __webpack_require__(3280);
var _useIntersection = __webpack_require__(508);
var _getDomainLocale = __webpack_require__(1516);
var _addBasePath = __webpack_require__(4266);
const prefetched = new Set();
function prefetch(router, href, as, options, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _isLocalUrl).isLocalURL(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(router.prefetch(href, as, options)).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _isLocalUrl).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        // @ts-expect-error startTransition exists.
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formatUrl).formatUrl(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    if (false) {}
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false  } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    const pagesRouter = _react.default.useContext(_routerContext.RouterContext);
    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    const { href , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolveHref).resolveHref(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolveHref).resolveHref(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) { var ref; }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils).isAbsoluteUrl(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getDomainLocale).getDomainLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});
var _default = Link;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 2387:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 29:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
exports.cancelIdleCallback = cancelIdleCallback;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 508:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(6689);
var _requestIdleCallback = __webpack_require__(29);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react).useState(false);
    const elementRef = (0, _react).useRef(null);
    const setElement = (0, _react).useCallback((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react).useEffect(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true));
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react).useCallback(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 452:
/***/ (() => {



/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3740)


/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5569)


/***/ }),

/***/ 6171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ Layout)
/* harmony export */ });
/* unused harmony exports Bleed, Callout, Card, Cards, Collapse, FileTree, Link, Navbar, NotFoundPage, ServerSideErrorPage, SkipNavContent, SkipNavLink, Steps, Tab, Tabs, ThemeSwitch, useConfig */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5053);
/* harmony import */ var nextra_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6132);
/* harmony import */ var next_package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7587);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4916);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var nextra_normalize_pages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6697);
/* harmony import */ var nextra_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1181);
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9164);
/* harmony import */ var git_url_parse__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(git_url_parse__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3841);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_popperjs_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8395);
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(flexsearch__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1185);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_dist_client_add_base_path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4266);
/* harmony import */ var next_dist_client_add_base_path__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_add_base_path__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8751);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9926);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5875);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(match_sorter__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var nextra_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9081);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_mdx__WEBPACK_IMPORTED_MODULE_4__, nextra_hooks__WEBPACK_IMPORTED_MODULE_5__, nextra_normalize_pages__WEBPACK_IMPORTED_MODULE_11__, nextra_icons__WEBPACK_IMPORTED_MODULE_12__, _headlessui_react__WEBPACK_IMPORTED_MODULE_16__, scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_21__, zod__WEBPACK_IMPORTED_MODULE_22__, nextra_components__WEBPACK_IMPORTED_MODULE_24__]);
([nextra_mdx__WEBPACK_IMPORTED_MODULE_4__, nextra_hooks__WEBPACK_IMPORTED_MODULE_5__, nextra_normalize_pages__WEBPACK_IMPORTED_MODULE_11__, nextra_icons__WEBPACK_IMPORTED_MODULE_12__, _headlessui_react__WEBPACK_IMPORTED_MODULE_16__, scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_21__, zod__WEBPACK_IMPORTED_MODULE_22__, nextra_components__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx







// src/constants.tsx



// src/components/anchor.tsx




// src/contexts/active-anchor.tsx



var ActiveAnchorContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var SetActiveAnchorContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((v) => v);
var IntersectionObserverContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var slugs = /* @__PURE__ */ new WeakMap();
var SlugsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(slugs);
var useActiveAnchor = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ActiveAnchorContext);
var useSetActiveAnchor = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SetActiveAnchorContext);
var useIntersectionObserver = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(IntersectionObserverContext);
var useSlugs = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SlugsContext);
var ActiveAnchorProvider = ({
  children
}) => {
  const [activeAnchor, setActiveAnchor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (IS_BROWSER && !observerRef.current) {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setActiveAnchor((f) => {
          const ret = __spreadValues({}, f);
          for (const entry of entries) {
            if ((entry == null ? void 0 : entry.rootBounds) && slugs.has(entry.target)) {
              const [slug, index] = slugs.get(entry.target);
              const aboveHalfViewport = entry.boundingClientRect.y + entry.boundingClientRect.height <= entry.rootBounds.y + entry.rootBounds.height;
              const insideHalfViewport = entry.intersectionRatio > 0;
              ret[slug] = {
                index,
                aboveHalfViewport,
                insideHalfViewport
              };
            }
          }
          let activeSlug = "";
          let smallestIndexInViewport = Infinity;
          let largestIndexAboveViewport = -1;
          for (const s in ret) {
            ret[s].isActive = false;
            if (ret[s].insideHalfViewport && ret[s].index < smallestIndexInViewport) {
              smallestIndexInViewport = ret[s].index;
              activeSlug = s;
            }
            if (smallestIndexInViewport === Infinity && ret[s].aboveHalfViewport && ret[s].index > largestIndexAboveViewport) {
              largestIndexAboveViewport = ret[s].index;
              activeSlug = s;
            }
          }
          if (ret[activeSlug])
            ret[activeSlug].isActive = true;
          return ret;
        });
      },
      {
        rootMargin: "0px 0px -50%",
        threshold: [0, 1]
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ActiveAnchorContext.Provider, { value: activeAnchor, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SetActiveAnchorContext.Provider, { value: setActiveAnchor, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SlugsContext.Provider, { value: slugs, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IntersectionObserverContext.Provider, { value: observerRef.current, children }) }) }) });
};

// src/contexts/config.tsx




// src/contexts/menu.ts

var MenuContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  menu: false,
  setMenu: () => false
});
var useMenu = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuContext);
var MenuProvider = MenuContext.Provider;

// src/contexts/config.tsx

var ConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(__spreadValues({
  title: "",
  frontMatter: {}
}, DEFAULT_THEME));
function useConfig() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ConfigContext);
}
var theme;
var isValidated = false;
function normalizeZodMessage(error) {
  return error.issues.flatMap((issue) => {
    const themePath = issue.path.length > 0 && `Path: "${issue.path.join(".")}"`;
    const unionErrors = "unionErrors" in issue ? issue.unionErrors.map(normalizeZodMessage) : [];
    return [
      [issue.message, themePath].filter(Boolean).join(". "),
      ...unionErrors
    ];
  }).join("\n");
}
function validateMeta(pageMap) {
  for (const pageMapItem of pageMap) {
    if (pageMapItem.kind === "Meta") {
      for (const [key, data] of Object.entries(pageMapItem.data)) {
        try {
          metaSchema.parse(data);
        } catch (error) {
          console.error(
            `[nextra-theme-docs] Error validating _meta.json file for "${key}" property.

${normalizeZodMessage(
              error
            )}`
          );
        }
      }
    } else if (pageMapItem.kind === "Folder") {
      validateMeta(pageMapItem.children);
    }
  }
}
var ConfigProvider = ({
  children,
  value: { themeConfig, pageOpts }
}) => {
  const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  theme || (theme = __spreadValues(__spreadValues({}, DEFAULT_THEME), Object.fromEntries(
    Object.entries(themeConfig).map(([key, value]) => [
      key,
      value && typeof value === "object" && DEEP_OBJECT_KEYS.includes(key) ? (
        // @ts-expect-error -- key has always object value
        __spreadValues(__spreadValues({}, DEFAULT_THEME[key]), value)
      ) : value
    ])
  )));
  if (false) {}
  const extendedConfig = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, theme), {
    flexsearch: pageOpts.flexsearch
  }), typeof pageOpts.newNextLinkBehavior === "boolean" && {
    newNextLinkBehavior: pageOpts.newNextLinkBehavior
  }), {
    title: pageOpts.title,
    frontMatter: pageOpts.frontMatter
  });
  const { nextThemes } = extendedConfig;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    next_themes__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider,
    {
      attribute: "class",
      disableTransitionOnChange: true,
      defaultTheme: nextThemes.defaultTheme,
      storageKey: nextThemes.storageKey,
      forcedTheme: nextThemes.forcedTheme,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ConfigContext.Provider, { value: extendedConfig, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MenuProvider, { value: { menu, setMenu }, children }) })
    }
  );
};

// src/contexts/details.ts

var DetailsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((v) => v);
var useDetails = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DetailsContext);
var DetailsProvider = DetailsContext.Provider;

// src/components/anchor.tsx

var nextVersion = Number(next_package_json__WEBPACK_IMPORTED_MODULE_6__/* .version.split */ .i8.split(".")[0]);
var Anchor = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(_a, forwardedRef) {
  var _b = _a, { href = "", children, newWindow } = _b, props = __objRest(_b, ["href", "children", "newWindow"]);
  const config = useConfig();
  if (newWindow) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
      "a",
      __spreadProps(__spreadValues({
        ref: forwardedRef,
        href,
        target: "_blank",
        rel: "noreferrer"
      }, props), {
        children: [
          children,
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-sr-only", children: " (opens in a new tab)" })
        ]
      })
    );
  }
  if (!href) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", __spreadProps(__spreadValues({ ref: forwardedRef }, props), { children }));
  }
  if (nextVersion > 12 || config.newNextLinkBehavior) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), __spreadProps(__spreadValues({ ref: forwardedRef, href }, props), { children }));
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), { href, passHref: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("a", __spreadProps(__spreadValues({ ref: forwardedRef }, props), { children })) });
});
Anchor.displayName = "Anchor";

// src/components/banner.tsx



// src/utils/get-git-issue-url.ts

var getGitIssueUrl = ({
  repository = "",
  title,
  labels
}) => {
  const repo = git_url_parse__WEBPACK_IMPORTED_MODULE_13___default()(repository);
  if (!repo)
    throw new Error("Invalid `docsRepositoryBase` URL!");
  if (repo.resource.includes("gitlab")) {
    return `${repo.protocol}://${repo.resource}/${repo.owner}/${repo.name}/-/issues/new?issue[title]=${encodeURIComponent(title)}`;
  }
  if (repo.resource.includes("github")) {
    return `${repo.protocol}://${repo.resource}/${repo.owner}/${repo.name}/issues/new?title=${encodeURIComponent(title)}&labels=${labels || ""}`;
  }
  return "#";
};

// src/utils/render.tsx

function renderComponent(ComponentOrNode, props) {
  if (!ComponentOrNode)
    return null;
  if (typeof ComponentOrNode !== "function")
    return ComponentOrNode;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ComponentOrNode, __spreadValues({}, props));
}
function renderString(stringOrFunction, props = {}) {
  const result = typeof stringOrFunction === "function" ? stringOrFunction(props) : stringOrFunction;
  return result || "";
}

// src/utils/use-popper.ts


function usePopper(options) {
  const reference = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const popper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const cleanupCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const instantiatePopper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _a;
    if (!reference.current || !popper.current)
      return;
    (_a = cleanupCallback.current) == null ? void 0 : _a.call(cleanupCallback);
    cleanupCallback.current = (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_14__.createPopper)(
      reference.current,
      popper.current,
      options
    ).destroy;
  }, [reference, popper, cleanupCallback, options]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => [
      (referenceDomNode) => {
        reference.current = referenceDomNode;
        instantiatePopper();
      },
      (popperDomNode) => {
        popper.current = popperDomNode;
        instantiatePopper();
      }
    ],
    [reference, popper, instantiatePopper]
  );
}

// src/utils/use-git-edit-url.ts

function useGitEditUrl(filePath = "") {
  const config = useConfig();
  const repo = git_url_parse__WEBPACK_IMPORTED_MODULE_13___default()(config.docsRepositoryBase || "");
  if (!repo)
    throw new Error("Invalid `docsRepositoryBase` URL!");
  return `${repo.href}/${filePath}`;
}

// src/components/banner.tsx

function Banner() {
  const { banner } = useConfig();
  if (!banner.text) {
    return null;
  }
  const hideBannerScript = `try{if(localStorage.getItem(${JSON.stringify(
    banner.key
  )})==='0'){document.body.classList.add('nextra-banner-hidden')}}catch(e){}`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("script", { dangerouslySetInnerHTML: { __html: hideBannerScript } }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nextra-banner-container nx-sticky nx-top-0 nx-z-20 nx-flex nx-items-center md:nx-relative",
          "nx-h-[var(--nextra-banner-height)] [body.nextra-banner-hidden_&]:nx-hidden",
          "nx-text-slate-50 dark:nx-text-white nx-bg-neutral-900 dark:nx-bg-[linear-gradient(1deg,#383838,#212121)]",
          "nx-px-2 ltr:nx-pl-10 rtl:nx-pr-10 print:nx-hidden"
        ),
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-w-full nx-truncate nx-px-4 nx-text-center nx-font-medium nx-text-sm", children: renderComponent(banner.text) }),
          banner.dismissible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss banner",
              className: "nx-w-8 nx-h-8 nx-opacity-80 hover:nx-opacity-100",
              onClick: () => {
                try {
                  localStorage.setItem(banner.key, "0");
                } catch (e) {
                }
                document.body.classList.add("nextra-banner-hidden");
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.XIcon, { className: "nx-mx-auto nx-h-4 nx-w-4" })
            }
          )
        ]
      }
    )
  ] });
}

// src/components/bleed.tsx


function Bleed({
  full,
  children
}) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      className: cn2(
        "nextra-bleed nx-relative -nx-mx-6 nx-mt-6 md:-nx-mx-8 2xl:-nx-mx-24",
        full && [
          // 'md:mx:[calc(-50vw+50%+8rem)',
          "ltr:xl:nx-ml-[calc(50%-50vw+16rem)] ltr:xl:nx-mr-[calc(50%-50vw)]",
          "rtl:xl:nx-ml-[calc(50%-50vw)] rtl:xl:nx-mr-[calc(50%-50vw+16rem)]"
        ]
      ),
      children
    }
  );
}

// src/components/breadcrumb.tsx




function Breadcrumb({
  activePath
}) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden nx-text-sm nx-text-gray-500 contrast-more:nx-text-current", children: activePath.map((item, index) => {
    const isLink = !item.children || item.withIndexPage;
    const isActive = index === activePath.length - 1;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      index > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.ArrowRightIcon, { className: "nx-w-3.5 nx-shrink-0" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "div",
        {
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            "nx-whitespace-nowrap nx-transition-colors",
            isActive ? "nx-font-medium nx-text-gray-700 contrast-more:nx-font-bold contrast-more:nx-text-current dark:nx-text-gray-400 contrast-more:dark:nx-text-current" : [
              "nx-min-w-[24px] nx-overflow-hidden nx-text-ellipsis",
              isLink && "hover:nx-text-gray-900 dark:hover:nx-text-gray-200"
            ]
          ),
          title: item.title,
          children: isLink && !isActive ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Anchor, { href: item.route, children: item.title }) : item.title
        }
      )
    ] }, item.route + item.name);
  }) });
}

// src/components/callout.tsx



var TypeToEmoji = {
  default: "\u{1F4A1}",
  error: "\u{1F6AB}",
  info: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.InformationCircleIcon, { className: "nx-mt-1" }),
  warning: "\u26A0\uFE0F"
};
var classes = {
  default: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-border-orange-100 nx-bg-orange-50 nx-text-orange-800 dark:nx-border-orange-400/30 dark:nx-bg-orange-400/20 dark:nx-text-orange-300"
  ),
  error: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-border-red-200 nx-bg-red-100 nx-text-red-900 dark:nx-border-red-200/30 dark:nx-bg-red-900/30 dark:nx-text-red-200"
  ),
  info: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-border-blue-200 nx-bg-blue-100 nx-text-blue-900 dark:nx-border-blue-200/30 dark:nx-bg-blue-900/30 dark:nx-text-blue-200"
  ),
  warning: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-border-yellow-100 nx-bg-yellow-50 nx-text-yellow-900 dark:nx-border-yellow-200/30 dark:nx-bg-yellow-700/30 dark:nx-text-yellow-200"
  )
};
function Callout({
  children,
  type = "default",
  emoji = TypeToEmoji[type]
}) {
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: cn4(
        "nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4",
        "contrast-more:nx-border-current contrast-more:dark:nx-border-current",
        classes[type]
      ),
      children: [
        /* @__PURE__ */ jsx8(
          "div",
          {
            className: "nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",
            style: {
              fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            },
            children: emoji
          }
        ),
        /* @__PURE__ */ jsx8("div", { className: "nx-w-full nx-min-w-0 nx-leading-7", children })
      ]
    }
  );
}

// src/components/cards.tsx


var classes2 = {
  cards: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nextra-cards nx-mt-4 nx-gap-4 nx-grid"),
  card: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200",
    "nx-text-current nx-no-underline dark:nx-shadow-none",
    "hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100",
    "active:nx-shadow-sm active:nx-shadow-gray-200",
    "nx-transition-all nx-duration-200 hover:nx-border-gray-300"
  ),
  title: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-flex nx-font-semibold nx-items-start nx-gap-2 nx-p-4 nx-text-gray-700 hover:nx-text-gray-900"
  )
};
var arrowEl = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-transition-transform nx-duration-75 group-hover:nx-translate-x-[2px]", children: "\u2192" });
function Card(_a) {
  var _b = _a, {
    children,
    title,
    icon,
    image,
    arrow,
    href
  } = _b, props = __objRest(_b, [
    "children",
    "title",
    "icon",
    "image",
    "arrow",
    "href"
  ]);
  const animatedArrow = arrow ? arrowEl : null;
  if (image) {
    return /* @__PURE__ */ jsxs5(
      Anchor,
      __spreadProps(__spreadValues({
        href,
        className: cn5(
          classes2.card,
          "nx-bg-gray-100 nx-shadow dark:nx-border-neutral-700 dark:nx-bg-neutral-800 dark:nx-text-gray-50 hover:nx-shadow-lg dark:hover:nx-border-neutral-500 dark:hover:nx-bg-neutral-700"
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxs5(
            "span",
            {
              className: cn5(
                classes2.title,
                "dark:nx-text-gray-300 dark:hover:nx-text-gray-100"
              ),
              children: [
                icon,
                /* @__PURE__ */ jsxs5("span", { className: "nx-flex nx-gap-1", children: [
                  title,
                  animatedArrow
                ] })
              ]
            }
          )
        ]
      })
    );
  }
  return /* @__PURE__ */ jsx9(
    Anchor,
    __spreadProps(__spreadValues({
      href,
      className: cn5(
        classes2.card,
        "nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900"
      )
    }, props), {
      children: /* @__PURE__ */ jsxs5(
        "span",
        {
          className: cn5(
            classes2.title,
            "dark:nx-text-neutral-200 dark:hover:nx-text-neutral-50"
          ),
          children: [
            icon,
            title,
            animatedArrow
          ]
        }
      )
    })
  );
}
function Cards(_a) {
  var _b = _a, {
    children,
    num = 3,
    className,
    style
  } = _b, props = __objRest(_b, [
    "children",
    "num",
    "className",
    "style"
  ]);
  return /* @__PURE__ */ jsx9(
    "div",
    __spreadProps(__spreadValues({
      className: cn5(classes2.cards, className)
    }, props), {
      style: __spreadProps(__spreadValues({}, style), {
        "--rows": num
      }),
      children
    })
  );
}

// src/components/collapse.tsx



function Collapse({
  children,
  className,
  isOpen,
  horizontal = false
}) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const animationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const initialOpen = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isOpen);
  const initialRender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    const animation = animationRef.current;
    if (animation) {
      clearTimeout(animation);
    }
    if (initialRender.current || !container || !inner)
      return;
    container.classList.toggle("nx-duration-500", !isOpen);
    container.classList.toggle("nx-duration-300", isOpen);
    if (horizontal) {
      inner.style.width = `${inner.clientWidth}px`;
      container.style.width = `${inner.clientWidth}px`;
    } else {
      container.style.height = `${inner.clientHeight}px`;
    }
    if (isOpen) {
      animationRef.current = window.setTimeout(() => {
        container.style.removeProperty("height");
      }, 300);
    } else {
      setTimeout(() => {
        if (horizontal) {
          container.style.width = "0px";
        } else {
          container.style.height = "0px";
        }
      }, 0);
    }
  }, [horizontal, isOpen]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    initialRender.current = false;
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    "div",
    {
      ref: containerRef,
      className: "nx-transform-gpu nx-overflow-hidden nx-transition-all nx-ease-in-out motion-reduce:nx-transition-none",
      style: initialOpen.current || horizontal ? void 0 : { height: 0 },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "div",
        {
          ref: innerRef,
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            "nx-transition-opacity nx-duration-500 nx-ease-in-out motion-reduce:nx-transition-none",
            isOpen ? "nx-opacity-100" : "nx-opacity-0",
            className
          ),
          children
        }
      )
    }
  );
}

// src/components/file-tree.tsx



var ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0);
function useIndent() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ctx);
}
var Tree = ({ children }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-mt-6 nx-select-none nx-text-sm nx-text-gray-800 dark:nx-text-gray-300", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-inline-flex nx-flex-col nx-rounded-lg nx-border nx-px-4 nx-py-2 dark:nx-border-neutral-800", children }) });
function Ident() {
  const indent = useIndent();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [...Array(indent)].map((_, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-inline-block nx-w-5" }, i)) });
}
var Folder = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(
  ({ label, name, open, children, defaultOpen = false, onToggle }) => {
    const indent = useIndent();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultOpen);
    const toggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
      onToggle == null ? void 0 : onToggle(!isOpen);
      setIsOpen(!isOpen);
    }, [isOpen, onToggle]);
    const isFolderOpen = open === void 0 ? isOpen : open;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", { className: "nx-flex nx-list-none nx-flex-col", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
        "a",
        {
          onClick: toggle,
          title: name,
          className: "nx-inline-flex nx-cursor-pointer nx-items-center nx-py-1 hover:nx-opacity-60",
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Ident, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
              "path",
              {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: isFolderOpen ? "M5 19a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2 2h4a2 2 0 0 1 2 2v1M5 19h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2Z" : "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6l-2-2H5a2 2 0 0 0-2 2Z"
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-ml-1", children: label != null ? label : name })
          ]
        }
      ),
      isFolderOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ctx.Provider, { value: indent + 1, children }) })
    ] });
  }
);
Folder.displayName = "Folder";
var File = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({ label, name, active }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
  "li",
  {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
      "nx-flex nx-list-none",
      active && "nx-text-primary-600 contrast-more:nx-underline"
    ),
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("a", { className: "nx-inline-flex nx-cursor-default nx-items-center nx-py-1", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Ident, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("svg", { width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-ml-1", children: label != null ? label : name })
    ] })
  }
));
File.displayName = "File";
var FileTree = Object.assign(Tree, { Folder, File });

// src/components/flexsearch.tsx





// src/components/search.tsx






// src/components/input.tsx



var Input = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  (_a, forwardedRef) => {
    var _b = _a, { className, suffix } = _b, props = __objRest(_b, ["className", "suffix"]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", { className: "nx-relative nx-flex nx-items-center nx-text-gray-900 contrast-more:nx-text-gray-800 dark:nx-text-gray-300 contrast-more:dark:nx-text-gray-300", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "input",
        __spreadValues({
          ref: forwardedRef,
          spellCheck: false,
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            className,
            "nx-block nx-w-full nx-appearance-none nx-rounded-lg nx-px-3 nx-py-2 nx-transition-colors",
            "nx-text-base nx-leading-tight md:nx-text-sm",
            "nx-bg-black/[.05] dark:nx-bg-gray-50/10",
            "focus:nx-bg-white dark:focus:nx-bg-dark",
            "placeholder:nx-text-gray-500 dark:placeholder:nx-text-gray-400",
            "contrast-more:nx-border contrast-more:nx-border-current"
          )
        }, props)
      ),
      suffix
    ] });
  }
);
Input.displayName = "Input";

// src/components/search.tsx


var INPUTS = ["input", "select", "button", "textarea"];
function Search({
  className,
  overlayClassName,
  value,
  onChange,
  onActive,
  loading,
  error,
  results
}) {
  const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const config = useConfig();
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const { setMenu } = useMenu();
  const input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const ulRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [focused, setFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setActive(0);
  }, [value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const down = (e) => {
      const activeElement = document.activeElement;
      const tagName = activeElement == null ? void 0 : activeElement.tagName.toLowerCase();
      if (!input.current || !tagName || INPUTS.includes(tagName) || (activeElement == null ? void 0 : activeElement.isContentEditable))
        return;
      if (e.key === "/" || e.key === "k" && (e.metaKey || /* for non-Mac */
      e.ctrlKey)) {
        e.preventDefault();
        input.current.focus();
      } else if (e.key === "Escape") {
        setShow(false);
        input.current.blur();
      }
    };
    window.addEventListener("keydown", down);
    return () => {
      window.removeEventListener("keydown", down);
    };
  }, []);
  const finishSearch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _a;
    (_a = input.current) == null ? void 0 : _a.blur();
    onChange("");
    setShow(false);
    setMenu(false);
  }, [onChange, setMenu]);
  const handleActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (e) => {
      const { index } = e.currentTarget.dataset;
      setActive(Number(index));
    },
    []
  );
  const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    function(e) {
      var _a, _b, _c;
      switch (e.key) {
        case "ArrowDown": {
          if (active + 1 < results.length) {
            const el = (_a = ulRef.current) == null ? void 0 : _a.querySelector(
              `li:nth-of-type(${active + 2}) > a`
            );
            if (el) {
              e.preventDefault();
              handleActive({ currentTarget: el });
              el.focus();
            }
          }
          break;
        }
        case "ArrowUp": {
          if (active - 1 >= 0) {
            const el = (_b = ulRef.current) == null ? void 0 : _b.querySelector(
              `li:nth-of-type(${active}) > a`
            );
            if (el) {
              e.preventDefault();
              handleActive({ currentTarget: el });
              el.focus();
            }
          }
          break;
        }
        case "Enter": {
          const result = results[active];
          if (result) {
            void router.push(result.route);
            finishSearch();
          }
          break;
        }
        case "Escape": {
          setShow(false);
          (_c = input.current) == null ? void 0 : _c.blur();
          break;
        }
      }
    },
    [active, results, router, finishSearch, handleActive]
  );
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useMounted)();
  const renderList = show && Boolean(value);
  const icon = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Transition,
    {
      show: mounted && (!show || Boolean(value)),
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      enter: "nx-transition-opacity",
      enterFrom: "nx-opacity-0",
      enterTo: "nx-opacity-100",
      leave: "nx-transition-opacity",
      leaveFrom: "nx-opacity-100",
      leaveTo: "nx-opacity-0",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "kbd",
        {
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            "nx-absolute nx-my-1.5 nx-select-none ltr:nx-right-1.5 rtl:nx-left-1.5",
            "nx-h-5 nx-rounded nx-bg-white nx-px-1.5 nx-font-mono nx-text-[10px] nx-font-medium nx-text-gray-500",
            "nx-border dark:nx-border-gray-100/20 dark:nx-bg-dark/50",
            "contrast-more:nx-border-current contrast-more:nx-text-current contrast-more:dark:nx-border-current",
            "nx-items-center nx-gap-1 nx-transition-opacity",
            value ? "nx-z-20 nx-flex nx-cursor-pointer hover:nx-opacity-70" : "nx-pointer-events-none nx-hidden sm:nx-flex"
          ),
          title: value ? "Clear" : void 0,
          onClick: () => {
            onChange("");
          },
          children: value && focused ? "ESC" : mounted && (navigator.userAgent.includes("Macintosh") ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-text-xs", children: "\u2318" }),
            "K"
          ] }) : "CTRL K")
        }
      )
    }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nextra-search nx-relative md:nx-w-64", className), children: [
    renderList && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "div",
      {
        className: "nx-fixed nx-inset-0 nx-z-10",
        onClick: () => setShow(false)
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      Input,
      {
        ref: input,
        value,
        onChange: (e) => {
          const { value: value2 } = e.target;
          onChange(value2);
          setShow(Boolean(value2));
        },
        onFocus: () => {
          onActive == null ? void 0 : onActive(true);
          setFocused(true);
        },
        onBlur: () => {
          setFocused(false);
        },
        type: "search",
        placeholder: renderString(config.search.placeholder),
        onKeyDown: handleKeyDown,
        suffix: icon
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Transition,
      {
        show: renderList,
        as: _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Transition.Child,
        leave: "nx-transition-opacity nx-duration-100",
        leaveFrom: "nx-opacity-100",
        leaveTo: "nx-opacity-0",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
          "ul",
          {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
              "nextra-scrollbar",
              // Using bg-white as background-color when the browser didn't support backdrop-filter
              "nx-border nx-border-gray-200 nx-bg-white nx-text-gray-100 dark:nx-border-neutral-800 dark:nx-bg-neutral-900",
              "nx-absolute nx-top-full nx-z-20 nx-mt-2 nx-overflow-auto nx-overscroll-contain nx-rounded-xl nx-py-2.5 nx-shadow-xl",
              "nx-max-h-[min(calc(50vh-11rem-env(safe-area-inset-bottom)),400px)]",
              "md:nx-max-h-[min(calc(100vh-5rem-env(safe-area-inset-bottom)),400px)]",
              "nx-inset-x-0 ltr:md:nx-left-auto rtl:md:nx-right-auto",
              "contrast-more:nx-border contrast-more:nx-border-gray-900 contrast-more:dark:nx-border-gray-50",
              overlayClassName
            ),
            ref: ulRef,
            style: {
              transition: "max-height .2s ease"
              // don't work with tailwindcss
            },
            children: error ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", { className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-red-500", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.InformationCircleIcon, { className: "nx-h-5 nx-w-5" }),
              renderString(config.search.error)
            ] }) : loading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", { className: "nx-flex nx-select-none nx-justify-center nx-gap-2 nx-p-8 nx-text-center nx-text-sm nx-text-gray-400", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.SpinnerIcon, { className: "nx-h-5 nx-w-5 nx-animate-spin" }),
              renderString(config.search.loading)
            ] }) : results.length > 0 ? results.map(({ route, prefix, children, id }, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              prefix,
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                "li",
                {
                  className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                    "nx-mx-2.5 nx-break-words nx-rounded-md",
                    "contrast-more:nx-border",
                    i === active ? "nx-bg-primary-500/10 nx-text-primary-600 contrast-more:nx-border-primary-500" : "nx-text-gray-800 contrast-more:nx-border-transparent dark:nx-text-gray-300"
                  ),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                    Anchor,
                    {
                      className: "nx-block nx-scroll-m-12 nx-px-2.5 nx-py-2",
                      href: route,
                      "data-index": i,
                      onFocus: handleActive,
                      onMouseMove: handleActive,
                      onClick: finishSearch,
                      onKeyDown: handleKeyDown,
                      children
                    }
                  )
                }
              )
            ] }, id)) : renderComponent(config.search.emptyResult)
          }
        )
      }
    )
  ] });
}

// src/components/highlight-matches.tsx


var HighlightMatches = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function HighlightMatches2({
  value,
  match
}) {
  const splitText = value ? value.split("") : [];
  const escapedSearch = match.trim().replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  const regexp = RegExp("(" + escapedSearch.replaceAll(" ", "|") + ")", "ig");
  let result;
  let id = 0;
  let index = 0;
  const res = [];
  if (value) {
    while ((result = regexp.exec(value)) !== null) {
      res.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          splitText.splice(0, result.index - index).join(""),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-text-primary-600", children: splitText.splice(0, regexp.lastIndex - result.index).join("") })
        ] }, id++)
      );
      index = regexp.lastIndex;
    }
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
    res,
    splitText.join("")
  ] });
});

// src/components/flexsearch.tsx

var indexes = {};
var loadIndexesPromises = /* @__PURE__ */ new Map();
var loadIndexes = (basePath, locale) => {
  const key = basePath + "@" + locale;
  if (loadIndexesPromises.has(key)) {
    return loadIndexesPromises.get(key);
  }
  const promise = loadIndexesImpl(basePath, locale);
  loadIndexesPromises.set(key, promise);
  return promise;
};
var loadIndexesImpl = (basePath, locale) => __async(void 0, null, function* () {
  const response = yield fetch(
    `${basePath}/_next/static/chunks/nextra-data-${locale}.json`
  );
  const data = yield response.json();
  const pageIndex = new (flexsearch__WEBPACK_IMPORTED_MODULE_15___default().Document)({
    cache: 100,
    tokenize: "full",
    document: {
      id: "id",
      index: "content",
      store: ["title"]
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true
    }
  });
  const sectionIndex = new (flexsearch__WEBPACK_IMPORTED_MODULE_15___default().Document)({
    cache: 100,
    tokenize: "full",
    document: {
      id: "id",
      index: "content",
      tag: "pageId",
      store: ["title", "content", "url", "display"]
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true
    }
  });
  let pageId = 0;
  for (const route in data) {
    let pageContent = "";
    ++pageId;
    for (const heading in data[route].data) {
      const [hash, text] = heading.split("#");
      const url = route + (hash ? "#" + hash : "");
      const title = text || data[route].title;
      const content = data[route].data[heading] || "";
      const paragraphs = content.split("\n").filter(Boolean);
      sectionIndex.add(__spreadValues({
        id: url,
        url,
        title,
        pageId: `page_${pageId}`,
        content: title
      }, paragraphs[0] && { display: paragraphs[0] }));
      for (let i = 0; i < paragraphs.length; i++) {
        sectionIndex.add({
          id: `${url}_${i}`,
          url,
          title,
          pageId: `page_${pageId}`,
          content: paragraphs[i]
        });
      }
      pageContent += ` ${title} ${content}`;
    }
    pageIndex.add({
      id: pageId,
      title: data[route].title,
      content: pageContent
    });
  }
  indexes[locale] = [pageIndex, sectionIndex];
});
function Flexsearch({
  className
}) {
  const { locale = DEFAULT_LOCALE, basePath } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const doSearch = (search2) => {
    var _a, _b;
    if (!search2)
      return;
    const [pageIndex, sectionIndex] = indexes[locale];
    const pageResults = ((_a = pageIndex.search(search2, 5, {
      enrich: true,
      suggest: true
    })[0]) == null ? void 0 : _a.result) || [];
    const results2 = [];
    const pageTitleMatches = {};
    for (let i = 0; i < pageResults.length; i++) {
      const result = pageResults[i];
      pageTitleMatches[i] = 0;
      const sectionResults = ((_b = sectionIndex.search(search2, 5, {
        enrich: true,
        suggest: true,
        tag: `page_${result.id}`
      })[0]) == null ? void 0 : _b.result) || [];
      let isFirstItemOfPage = true;
      const occurred = {};
      for (let j = 0; j < sectionResults.length; j++) {
        const { doc } = sectionResults[j];
        const isMatchingTitle = doc.display !== void 0;
        if (isMatchingTitle) {
          pageTitleMatches[i]++;
        }
        const { url, title } = doc;
        const content = doc.display || doc.content;
        if (occurred[url + "@" + content])
          continue;
        occurred[url + "@" + content] = true;
        results2.push({
          _page_rk: i,
          _section_rk: j,
          route: url,
          prefix: isFirstItemOfPage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
            "div",
            {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                "nx-mx-2.5 nx-mb-2 nx-mt-6 nx-select-none nx-border-b nx-border-black/10 nx-px-2.5 nx-pb-1.5 nx-text-xs nx-font-semibold nx-uppercase nx-text-gray-500 first:nx-mt-0 dark:nx-border-white/20 dark:nx-text-gray-300",
                "contrast-more:nx-border-gray-600 contrast-more:nx-text-gray-900 contrast-more:dark:nx-border-gray-50 contrast-more:dark:nx-text-gray-50"
              ),
              children: result.doc.title
            }
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-text-base nx-font-semibold nx-leading-5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HighlightMatches, { match: search2, value: title }) }),
            content && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "excerpt nx-mt-1 nx-text-sm nx-leading-[1.35rem] nx-text-gray-600 dark:nx-text-gray-400 contrast-more:dark:nx-text-gray-50", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HighlightMatches, { match: search2, value: content }) })
          ] })
        });
        isFirstItemOfPage = false;
      }
    }
    setResults(
      results2.sort((a, b) => {
        if (a._page_rk === b._page_rk) {
          return a._section_rk - b._section_rk;
        }
        if (pageTitleMatches[a._page_rk] !== pageTitleMatches[b._page_rk]) {
          return pageTitleMatches[b._page_rk] - pageTitleMatches[a._page_rk];
        }
        return a._page_rk - b._page_rk;
      }).map((res) => ({
        id: `${res._page_rk}_${res._section_rk}`,
        route: res.route,
        prefix: res.prefix,
        children: res.children
      }))
    );
  };
  const preload = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (active) => __async(this, null, function* () {
      if (active && !indexes[locale]) {
        setLoading(true);
        try {
          yield loadIndexes(basePath, locale);
        } catch (e) {
          setError(true);
        }
        setLoading(false);
      }
    }),
    [locale, basePath]
  );
  const handleChange = (value) => __async(this, null, function* () {
    setSearch(value);
    if (loading) {
      return;
    }
    if (!indexes[locale]) {
      setLoading(true);
      try {
        yield loadIndexes(basePath, locale);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }
    doSearch(value);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    Search,
    {
      loading,
      error,
      value: search,
      onChange: handleChange,
      onActive: preload,
      className,
      overlayClassName: "nx-w-screen nx-min-h-[100px] nx-max-w-[min(calc(100vw-2rem),calc(100%+20rem))]",
      results
    }
  );
}

// src/components/footer.tsx


// src/components/locale-switch.tsx


// src/components/select.tsx






function Select({
  options,
  selected,
  onChange,
  title,
  className
}) {
  const [trigger, container] = usePopper({
    strategy: "fixed",
    placement: "top-start",
    modifiers: [
      { name: "offset", options: { offset: [0, 10] } },
      {
        name: "sameWidth",
        enabled: true,
        fn({ state }) {
          state.styles.popper.minWidth = `${state.rects.reference.width}px`;
        },
        phase: "beforeWrite",
        requires: ["computeStyles"]
      }
    ]
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox, { value: selected, onChange, children: ({ open }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
    _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Button,
    {
      ref: trigger,
      title,
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-h-7 nx-rounded-md nx-px-2 nx-text-left nx-text-xs nx-font-medium nx-text-gray-600 nx-transition-colors dark:nx-text-gray-400",
        open ? "nx-bg-gray-200 nx-text-gray-900 dark:nx-bg-primary-100/10 dark:nx-text-gray-50" : "hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
        className
      ),
      children: [
        selected.name,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Portal, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
          _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Transition,
          {
            ref: container,
            show: open,
            as: _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Options,
            className: "nx-z-20 nx-max-h-64 nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800",
            leave: "nx-transition-opacity",
            leaveFrom: "nx-opacity-100",
            leaveTo: "nx-opacity-0",
            children: options.map((option) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
              _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Listbox.Option,
              {
                value: option,
                className: ({ active }) => clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                  active ? "nx-bg-primary-50 nx-text-primary-600 dark:nx-bg-primary-500/10" : "nx-text-gray-800 dark:nx-text-gray-100",
                  "nx-relative nx-cursor-pointer nx-whitespace-nowrap nx-py-1.5",
                  "nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"
                ),
                children: [
                  option.name,
                  option.key === selected.key && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-absolute nx-inset-y-0 nx-flex nx-items-center ltr:nx-right-3 rtl:nx-left-3", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.CheckIcon, {}) })
                ]
              },
              option.key
            ))
          }
        ) })
      ]
    }
  ) });
}
function Portal(props) {
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useMounted)();
  if (!mounted)
    return null;
  return (0,react_dom__WEBPACK_IMPORTED_MODULE_17__.createPortal)(props.children, document.body);
}

// src/components/locale-switch.tsx



function LocaleSwitch({
  options,
  lite,
  className
}) {
  const { locale, asPath } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const selected = options.find((l) => locale === l.locale);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    Select,
    {
      title: "Change language",
      className,
      onChange: (option) => {
        const date = new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3);
        document.cookie = `NEXT_LOCALE=${option.key}; expires=${date.toUTCString()}; path=/`;
        location.href = (0,next_dist_client_add_base_path__WEBPACK_IMPORTED_MODULE_18__.addBasePath)(asPath);
      },
      selected: {
        key: (selected == null ? void 0 : selected.locale) || "",
        name: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", { className: "nx-flex nx-items-center nx-gap-2", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.GlobeIcon, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: lite ? "nx-hidden" : "", children: selected == null ? void 0 : selected.text })
        ] })
      },
      options: options.map((l) => ({
        key: l.locale,
        name: l.text
      }))
    }
  );
}

// src/components/footer.tsx

function Footer({ menu }) {
  const config = useConfig();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("footer", { className: "nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nx-mx-auto nx-flex nx-max-w-[90rem] nx-gap-2 nx-py-2 nx-px-4",
          menu && (config.i18n.length > 0 || config.darkMode) ? "nx-flex" : "nx-hidden"
        ),
        children: [
          config.i18n.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LocaleSwitch, { options: config.i18n }),
          config.darkMode && renderComponent(config.themeSwitch.component)
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("hr", { className: "dark:nx-border-neutral-800" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center nx-py-12 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start",
          "nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
        ),
        children: renderComponent(config.footer.text)
      }
    )
  ] });
}

// src/components/head.tsx





function Head() {
  var _a;
  const config = useConfig();
  const { resolvedTheme } = (0,next_themes__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useMounted)();
  const head = typeof config.head === "function" ? config.head({}) : config.head;
  const hue = config.primaryHue;
  const { dark: darkHue, light: lightHue } = typeof hue === "number" ? { dark: hue, light: hue } : hue;
  const frontMatter = config.frontMatter;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      next_seo__WEBPACK_IMPORTED_MODULE_20__.NextSeo,
      __spreadValues({
        title: config.title,
        description: frontMatter.description,
        canonical: frontMatter.canonical,
        openGraph: frontMatter.openGraph
      }, (_a = config.useNextSeoProps) == null ? void 0 : _a.call(config))
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_19___default()), { children: [
      config.faviconGlyph ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "link",
        {
          rel: "icon",
          href: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>${config.faviconGlyph}</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`
        }
      ) : null,
      mounted ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "meta",
        {
          name: "theme-color",
          content: resolvedTheme === "dark" ? "#111" : "#fff"
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
          "meta",
          {
            name: "theme-color",
            content: "#fff",
            media: "(prefers-color-scheme: light)"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
          "meta",
          {
            name: "theme-color",
            content: "#111",
            media: "(prefers-color-scheme: dark)"
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("style", { children: `
        :root {
          --nextra-primary-hue: ${lightHue}deg;
          --nextra-navbar-height: 4rem;
          --nextra-menu-height: 3.75rem;
          --nextra-banner-height: 2.5rem;
        }
        
        .dark {
          --nextra-primary-hue: ${darkHue}deg;
        }
      ` }),
      head
    ] })
  ] });
}

// src/components/nav-links.tsx



var classes3 = {
  link: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-text-gray-600 nx-transition-colors [word-break:break-word] hover:nx-text-primary-600 dark:nx-text-gray-300 md:nx-text-lg"
  ),
  icon: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nx-inline nx-h-5 nx-shrink-0")
};
var NavLinks = ({
  flatDirectories,
  currentIndex
}) => {
  const config = useConfig();
  const nav = config.navigation;
  const navigation = typeof nav === "boolean" ? { prev: nav, next: nav } : nav;
  let prev = navigation.prev && flatDirectories[currentIndex - 1];
  let next2 = navigation.next && flatDirectories[currentIndex + 1];
  if (prev && !prev.isUnderCurrentDocsTree)
    prev = false;
  if (next2 && !next2.isUnderCurrentDocsTree)
    next2 = false;
  if (!prev && !next2)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
    "div",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-mb-8 nx-flex nx-items-center nx-border-t nx-pt-8 dark:nx-border-neutral-800",
        "contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400",
        "print:nx-hidden"
      ),
      children: [
        prev && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
          Anchor,
          {
            href: prev.route,
            title: prev.title,
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes3.link, "ltr:nx-pr-4 rtl:nx-pl-4"),
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.ArrowRightIcon, { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes3.icon, "ltr:nx-rotate-180") }),
              prev.title
            ]
          }
        ),
        next2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
          Anchor,
          {
            href: next2.route,
            title: next2.title,
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
              classes3.link,
              "ltr:nx-ml-auto ltr:nx-pl-4 ltr:nx-text-right rtl:nx-mr-auto rtl:nx-pr-4 rtl:nx-text-left"
            ),
            children: [
              next2.title,
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.ArrowRightIcon, { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes3.icon, "rtl:nx-rotate-180") })
            ]
          }
        )
      ]
    }
  );
};

// src/components/navbar.tsx





var classes4 = {
  link: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100"
  ),
  active: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nx-font-medium nx-subpixel-antialiased"),
  inactive: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200"
  )
};
function NavbarMenu({
  className,
  menu,
  children
}) {
  const { items } = menu;
  const routes = Object.fromEntries(
    (menu.children || []).map((route) => [route.name, route])
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-relative nx-inline-block", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Menu, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Menu.Button,
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          className,
          "-nx-ml-2 nx-hidden nx-items-center nx-whitespace-nowrap nx-rounded nx-p-2 md:nx-inline-flex",
          classes4.inactive
        ),
        children
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Transition,
      {
        leave: "nx-transition-opacity",
        leaveFrom: "nx-opacity-100",
        leaveTo: "nx-opacity-0",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
          _headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Menu.Items,
          {
            className: "nx-absolute nx-right-0 nx-z-20 nx-mt-1 nx-max-h-64 nx-min-w-full nx-overflow-auto nx-rounded-md nx-ring-1 nx-ring-black/5 nx-bg-white nx-py-1 nx-text-sm nx-shadow-lg dark:nx-ring-white/20 dark:nx-bg-neutral-800",
            tabIndex: 0,
            children: Object.entries(items || {}).map(([key, item]) => {
              var _a;
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_16__.Menu.Item, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                Anchor,
                {
                  href: item.href || ((_a = routes[key]) == null ? void 0 : _a.route) || menu.route + "/" + key,
                  className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                    "nx-relative nx-hidden nx-w-full nx-select-none nx-whitespace-nowrap nx-text-gray-600 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 md:nx-inline-block",
                    "nx-py-1.5 nx-transition-colors ltr:nx-pl-3 ltr:nx-pr-9 rtl:nx-pr-3 rtl:nx-pl-9"
                  ),
                  newWindow: item.newWindow,
                  children: item.title || key
                }
              ) }, key);
            })
          }
        )
      }
    )
  ] }) });
}
function Navbar({ flatDirectories, items }) {
  const config = useConfig();
  const activeRoute = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useFSRoute)();
  const { menu, setMenu } = useMenu();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", { className: "nextra-nav-container nx-sticky nx-top-0 nx-z-20 nx-w-full nx-bg-transparent print:nx-hidden", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nextra-nav-container-blur",
          "nx-pointer-events-none nx-absolute nx-z-[-1] nx-h-full nx-w-full nx-bg-white dark:nx-bg-dark",
          "nx-shadow-[0_2px_4px_rgba(0,0,0,.02),0_1px_0_rgba(0,0,0,.06)] dark:nx-shadow-[0_-1px_0_rgba(255,255,255,.1)_inset]",
          "contrast-more:nx-shadow-[0_0_0_1px_#000] contrast-more:dark:nx-shadow-[0_0_0_1px_#fff]"
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("nav", { className: "nx-mx-auto nx-flex nx-h-[var(--nextra-navbar-height)] nx-max-w-[90rem] nx-items-center nx-justify-end nx-gap-2 nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]", children: [
      config.logoLink ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        Anchor,
        {
          href: typeof config.logoLink === "string" ? config.logoLink : "/",
          className: "nx-flex nx-items-center hover:nx-opacity-75 ltr:nx-mr-auto rtl:nx-ml-auto",
          children: renderComponent(config.logo)
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-flex nx-items-center ltr:nx-mr-auto rtl:nx-ml-auto", children: renderComponent(config.logo) }),
      items.map((pageOrMenu) => {
        if (pageOrMenu.display === "hidden")
          return null;
        if (pageOrMenu.type === "menu") {
          const menu2 = pageOrMenu;
          const isActive2 = menu2.route === activeRoute || activeRoute.startsWith(menu2.route + "/");
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
            NavbarMenu,
            {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                classes4.link,
                "nx-flex nx-gap-1",
                isActive2 ? classes4.active : classes4.inactive
              ),
              menu: menu2,
              children: [
                menu2.title,
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  nextra_icons__WEBPACK_IMPORTED_MODULE_12__.ArrowRightIcon,
                  {
                    className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5",
                    pathClassName: "nx-origin-center nx-transition-transform nx-rotate-90"
                  }
                )
              ]
            },
            menu2.title
          );
        }
        const page = pageOrMenu;
        let href = page.href || page.route || "#";
        if (page.children) {
          href = (page.withIndexPage ? page.route : page.firstChildRoute) || href;
        }
        const isActive = page.route === activeRoute || activeRoute.startsWith(page.route + "/");
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
          Anchor,
          {
            href,
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
              classes4.link,
              "nx-relative -nx-ml-2 nx-hidden nx-whitespace-nowrap nx-p-2 md:nx-inline-block",
              !isActive || page.newWindow ? classes4.inactive : classes4.active
            ),
            newWindow: page.newWindow,
            "aria-current": !page.newWindow && isActive,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-absolute nx-inset-x-0 nx-text-center", children: page.title }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-invisible nx-font-medium", children: page.title })
            ]
          },
          href
        );
      }),
      renderComponent(config.search.component, {
        directories: flatDirectories,
        className: "nx-hidden md:nx-inline-block mx-min-w-[200px]"
      }),
      config.project.link ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        Anchor,
        {
          className: "nx-p-2 nx-text-current",
          href: config.project.link,
          newWindow: true,
          children: renderComponent(config.project.icon)
        }
      ) : null,
      config.chat.link ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        Anchor,
        {
          className: "nx-p-2 nx-text-current",
          href: config.chat.link,
          newWindow: true,
          children: renderComponent(config.chat.icon)
        }
      ) : null,
      renderComponent(config.navbar.extraContent),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "button",
        {
          type: "button",
          "aria-label": "Menu",
          className: "nextra-hamburger -nx-mr-2 nx-rounded nx-p-2 active:nx-bg-gray-400/20 md:nx-hidden",
          onClick: () => setMenu(!menu),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.MenuIcon, { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()({ open: menu }) })
        }
      )
    ] })
  ] });
}

// src/components/not-found.tsx



function NotFoundPage() {
  const config = useConfig();
  const mounted = useMounted4();
  const { asPath } = useRouter4();
  const { content, labels } = config.notFound;
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx22("p", { className: "nx-text-center", children: /* @__PURE__ */ jsx22(
    Anchor,
    {
      href: getGitIssueUrl({
        repository: config.docsRepositoryBase,
        title: `Found broken \`${mounted ? asPath : ""}\` link. Please fix!`,
        labels
      }),
      newWindow: true,
      className: "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]",
      children: renderComponent(content)
    }
  ) });
}

// src/components/server-side-error.tsx



function ServerSideErrorPage() {
  const config = useConfig();
  const mounted = useMounted5();
  const { asPath } = useRouter5();
  const { content, labels } = config.serverSideError;
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx23("p", { className: "nx-text-center", children: /* @__PURE__ */ jsx23(
    Anchor,
    {
      href: getGitIssueUrl({
        repository: config.docsRepositoryBase,
        title: `Got server-side error in \`${mounted ? asPath : ""}\` url. Please fix!`,
        labels
      }),
      newWindow: true,
      className: "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]",
      children: renderComponent(content)
    }
  ) });
}

// src/components/sidebar.tsx







var TreeState = /* @__PURE__ */ Object.create(null);
var FocusedItemContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var OnFocuseItemContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var FolderLevelContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0);
var Folder2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function FolderInner(props) {
  const level = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FolderLevelContext);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FolderLevelContext.Provider, { value: level + 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FolderImpl, __spreadValues({}, props)) });
});
var classes5 = {
  link: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word]",
    "nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border"
  ),
  inactive: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900",
    "dark:nx-text-neutral-500 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
    "contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50",
    "contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"
  ),
  active: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-bg-primary-100 nx-font-semibold nx-text-primary-800 dark:nx-bg-primary-400/10 dark:nx-text-primary-600",
    "contrast-more:nx-border-primary-500 contrast-more:dark:nx-border-primary-500"
  ),
  list: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nx-flex nx-flex-col nx-gap-1"),
  border: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-relative before:nx-absolute before:nx-inset-y-1",
    'before:nx-w-px before:nx-bg-gray-200 before:nx-content-[""] dark:before:nx-bg-neutral-800',
    "ltr:nx-pl-3 ltr:before:nx-left-0 rtl:nx-pr-3 rtl:before:nx-right-0"
  )
};
function FolderImpl({ item, anchors }) {
  const routeOriginal = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useFSRoute)();
  const [route] = routeOriginal.split("#");
  const active = [route, route + "/"].includes(item.route + "/");
  const activeRouteInside = active || route.startsWith(item.route + "/");
  const focusedRoute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FocusedItemContext);
  const focusedRouteInside = !!(focusedRoute == null ? void 0 : focusedRoute.startsWith(item.route + "/"));
  const level = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FolderLevelContext);
  const { setMenu } = useMenu();
  const config = useConfig();
  const { theme: theme2 } = item;
  const open = TreeState[item.route] === void 0 ? active || activeRouteInside || focusedRouteInside || (theme2 && "collapsed" in theme2 ? !theme2.collapsed : level < config.sidebar.defaultMenuCollapseLevel) : TreeState[item.route] || focusedRouteInside;
  const rerender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({})[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (activeRouteInside || focusedRouteInside) {
      TreeState[item.route] = true;
    }
  }, [activeRouteInside, focusedRouteInside, item.route]);
  if (item.type === "menu") {
    const menu = item;
    const routes = Object.fromEntries(
      (menu.children || []).map((route2) => [route2.name, route2])
    );
    item.children = Object.entries(menu.items || {}).map(([key, item2]) => {
      const route2 = routes[key] || __spreadProps(__spreadValues({
        name: key
      }, "locale" in menu && { locale: menu.locale }), {
        route: menu.route + "/" + key
      });
      return __spreadValues(__spreadValues({}, route2), item2);
    });
  }
  const isLink = "withIndexPage" in item && item.withIndexPage;
  const ComponentToUse = isLink ? Anchor : "button";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()({ open, active }), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
      ComponentToUse,
      {
        href: isLink ? item.route : void 0,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nx-items-center nx-justify-between nx-gap-2 nx-text-left",
          classes5.link,
          active ? classes5.active : classes5.inactive
        ),
        onClick: (e) => {
          const clickedToggleIcon = ["svg", "path"].includes(
            e.target.tagName.toLowerCase()
          );
          if (clickedToggleIcon) {
            e.preventDefault();
          }
          if (isLink) {
            if (active || clickedToggleIcon) {
              TreeState[item.route] = !open;
            } else {
              TreeState[item.route] = true;
              setMenu(false);
            }
            rerender({});
            return;
          }
          if (active)
            return;
          TreeState[item.route] = !open;
          rerender({});
        },
        children: [
          renderComponent(config.sidebar.titleComponent, {
            title: item.title,
            type: item.type,
            route: item.route
          }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
            nextra_icons__WEBPACK_IMPORTED_MODULE_12__.ArrowRightIcon,
            {
              className: "nx-h-[18px] nx-min-w-[18px] nx-rounded-sm nx-p-0.5 hover:nx-bg-gray-800/5 dark:hover:nx-bg-gray-100/5",
              pathClassName: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                "nx-origin-center nx-transition-transform rtl:-nx-rotate-180",
                open && "ltr:nx-rotate-90 rtl:nx-rotate-[-270deg]"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Collapse, { className: "ltr:nx-pr-0 rtl:nx-pl-0 nx-pt-1", isOpen: open, children: Array.isArray(item.children) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      Menu2,
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes5.border, "ltr:nx-ml-3 rtl:nx-mr-3"),
        directories: item.children,
        base: item.route,
        anchors
      }
    ) : null })
  ] });
}
function Separator({ title }) {
  const config = useConfig();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    "li",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "[word-break:break-word]",
        title ? "nx-mt-5 nx-mb-2 nx-px-2 nx-py-1.5 nx-text-sm nx-font-semibold nx-text-gray-900 first:nx-mt-0 dark:nx-text-gray-100" : "nx-my-4"
      ),
      children: title ? renderComponent(config.sidebar.titleComponent, {
        title,
        type: "separator",
        route: ""
      }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("hr", { className: "nx-mx-2 nx-border-t nx-border-gray-200 dark:nx-border-primary-100/10" })
    }
  );
}
function File2({
  item,
  anchors
}) {
  const route = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useFSRoute)();
  const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(OnFocuseItemContext);
  const active = item.route && [route, route + "/"].includes(item.route + "/");
  const activeAnchor = useActiveAnchor();
  const { setMenu } = useMenu();
  const config = useConfig();
  if (item.type === "separator") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Separator, { title: item.title });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("li", { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes5.list, { active }), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      Anchor,
      {
        href: item.href || item.route,
        newWindow: item.newWindow,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes5.link, active ? classes5.active : classes5.inactive),
        onClick: () => {
          setMenu(false);
        },
        onFocus: () => {
          onFocus == null ? void 0 : onFocus(item.route);
        },
        onBlur: () => {
          onFocus == null ? void 0 : onFocus(null);
        },
        children: renderComponent(config.sidebar.titleComponent, {
          title: item.title,
          type: item.type,
          route: item.route
        })
      }
    ),
    active && anchors.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "ul",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          classes5.list,
          classes5.border,
          "ltr:nx-ml-3 rtl:nx-mr-3"
        ),
        children: anchors.map(({ id, value }) => {
          var _a;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
            "a",
            {
              href: `#${id}`,
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                classes5.link,
                'nx-flex nx-gap-2 before:nx-opacity-25 before:nx-content-["#"]',
                ((_a = activeAnchor[id]) == null ? void 0 : _a.isActive) ? classes5.active : classes5.inactive
              ),
              onClick: () => {
                setMenu(false);
              },
              children: value
            }
          ) }, id);
        })
      }
    )
  ] });
}
function Menu2({
  directories,
  anchors,
  className,
  onlyCurrentDocs
}) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", { className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes5.list, className), children: directories.map(
    (item) => !onlyCurrentDocs || item.isUnderCurrentDocsTree ? item.type === "menu" || item.children && (item.children.length || !item.withIndexPage) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Folder2, { item, anchors }, item.name) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(File2, { item, anchors }, item.name) : null
  ) });
}
function Sidebar({
  docsDirectories,
  flatDirectories,
  fullDirectories,
  asPopover = false,
  headings,
  includePlaceholder
}) {
  const config = useConfig();
  const { menu, setMenu } = useMenu();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const [focused, setFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showSidebar, setSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [showToggleAnimation, setToggleAnimation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const anchors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => headings.filter((v) => v.depth === 2), [headings]);
  const sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (menu) {
      document.body.classList.add("nx-overflow-hidden", "md:nx-overflow-auto");
    } else {
      document.body.classList.remove(
        "nx-overflow-hidden",
        "md:nx-overflow-auto"
      );
    }
  }, [menu]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a;
    const activeElement = (_a = sidebarRef.current) == null ? void 0 : _a.querySelector("li.active");
    if (activeElement && (window.innerWidth > 767 || menu)) {
      const scroll = () => {
        (0,scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_21__["default"])(activeElement, {
          block: "center",
          inline: "center",
          scrollMode: "always",
          boundary: containerRef.current
        });
      };
      if (menu) {
        setTimeout(scroll, 300);
      } else {
        scroll();
      }
    }
  }, [menu]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setMenu(false);
  }, [router.asPath, setMenu]);
  const hasI18n = config.i18n.length > 0;
  const hasMenu = config.darkMode || hasI18n;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
    includePlaceholder && asPopover ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "max-xl:nx-hidden nx-h-0 nx-w-64 nx-shrink-0" }) : null,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "div",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "motion-reduce:nx-transition-none [transition:background-color_1.5s_ease]",
          menu ? "nx-fixed nx-inset-0 nx-z-10 nx-bg-black/80 dark:nx-bg-black/60" : "nx-bg-transparent"
        ),
        onClick: () => setMenu(false)
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
      "aside",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nextra-sidebar-container nx-flex nx-flex-col",
          "md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none",
          "nx-transform-gpu nx-transition-all nx-ease-in-out",
          "print:nx-hidden",
          showSidebar ? "md:nx-w-64" : "md:nx-w-20",
          asPopover ? "md:nx-hidden" : "md:nx-sticky md:nx-self-start",
          menu ? "max-md:[transform:translate3d(0,0,0)]" : "max-md:[transform:translate3d(0,-100%,0)]"
        ),
        ref: containerRef,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-px-4 nx-pt-4 md:nx-hidden", children: renderComponent(config.search.component, {
            directories: flatDirectories
          }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(FocusedItemContext.Provider, { value: focused, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
            OnFocuseItemContext.Provider,
            {
              value: (item) => {
                setFocused(item);
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
                "div",
                {
                  className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                    "nx-overflow-y-auto nx-overflow-x-hidden",
                    "nx-p-4 nx-grow md:nx-h-[calc(100vh-var(--nextra-navbar-height)-var(--nextra-menu-height))]",
                    showSidebar ? "nextra-scrollbar" : "no-scrollbar"
                  ),
                  ref: sidebarRef,
                  children: [
                    (!asPopover || !showSidebar) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Collapse, { isOpen: showSidebar, horizontal: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      Menu2,
                      {
                        className: "max-md:nx-hidden",
                        directories: docsDirectories,
                        anchors: config.toc.float ? [] : anchors,
                        onlyCurrentDocs: true
                      }
                    ) }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                      Menu2,
                      {
                        className: "md:nx-hidden",
                        directories: fullDirectories,
                        anchors
                      }
                    )
                  ]
                }
              )
            }
          ) }),
          hasMenu && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
            "div",
            {
              className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                "nx-sticky nx-bottom-0",
                "nx-bg-white dark:nx-bg-dark",
                // when banner is showed, sidebar links can be behind menu, set bg color as body bg color
                "nx-mx-4 nx-py-4 nx-shadow-[0_-12px_16px_#fff]",
                "nx-flex nx-items-center nx-gap-2",
                "dark:nx-border-neutral-800 dark:nx-shadow-[0_-12px_16px_#111]",
                "contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-shadow-none",
                showSidebar ? clsx__WEBPACK_IMPORTED_MODULE_3___default()(hasI18n && "nx-justify-end", "nx-border-t") : "nx-py-4 nx-flex-wrap nx-justify-center"
              ),
              "data-toggle-animation": showToggleAnimation ? showSidebar ? "show" : "hide" : "off",
              children: [
                hasI18n && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  LocaleSwitch,
                  {
                    options: config.i18n,
                    lite: !showSidebar,
                    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(showSidebar ? "nx-grow" : "max-md:nx-grow")
                  }
                ),
                config.darkMode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  "div",
                  {
                    className: showSidebar && !hasI18n ? "nx-grow nx-flex nx-flex-col" : "",
                    children: renderComponent(config.themeSwitch.component, {
                      lite: !showSidebar || hasI18n
                    })
                  }
                ),
                config.sidebar.toggleButton && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  "button",
                  {
                    title: showSidebar ? "Hide sidebar" : "Show sidebar",
                    className: "max-md:nx-hidden nx-h-7 nx-rounded-md nx-transition-colors nx-text-gray-600 dark:nx-text-gray-400 nx-px-2 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50",
                    onClick: () => {
                      setSidebar(!showSidebar);
                      setToggleAnimation(true);
                    },
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.ExpandIcon, { isOpen: showSidebar })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}

// src/components/skip-nav.tsx



var DEFAULT_ID = "reach-skip-nav";
var DEFAULT_LABEL = "Skip to content";
var SkipNavLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  function(_a, forwardedRef) {
    var _b = _a, {
      className: providedClassName,
      id,
      label = DEFAULT_LABEL,
      styled
    } = _b, props = __objRest(_b, [
      "className",
      "id",
      "label",
      "styled"
    ]);
    const className = providedClassName === void 0 ? styled ? clsx__WEBPACK_IMPORTED_MODULE_3___default()(
      "nx-sr-only",
      "focus:nx-not-sr-only focus:nx-fixed focus:nx-z-50 focus:nx-m-3 focus:nx-ml-4 focus:nx-h-[calc(var(--nextra-navbar-height)-1.5rem)] focus:nx-rounded-lg focus:nx-border focus:nx-px-3 focus:nx-py-2 focus:nx-align-middle focus:nx-text-sm focus:nx-font-bold",
      "focus:nx-text-gray-900 focus:dark:nx-text-gray-100",
      "focus:nx-bg-white focus:dark:nx-bg-neutral-900",
      "focus:nx-border-neutral-400 focus:dark:nx-border-neutral-800"
    ) : "" : providedClassName;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "a",
      __spreadProps(__spreadValues({}, props), {
        ref: forwardedRef,
        href: `#${id || DEFAULT_ID}`,
        className,
        "data-reach-skip-link": "",
        children: label
      })
    );
  }
);
SkipNavLink.displayName = "SkipNavLink";
var SkipNavContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  function(_a, forwardedRef) {
    var _b = _a, { id } = _b, props = __objRest(_b, ["id"]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", __spreadProps(__spreadValues({}, props), { ref: forwardedRef, id: id || DEFAULT_ID }));
  }
);
SkipNavContent.displayName = "SkipNavContent";

// src/components/steps.tsx


function Steps(_a) {
  var _b = _a, {
    children,
    className
  } = _b, props = __objRest(_b, [
    "children",
    "className"
  ]);
  return /* @__PURE__ */ jsx26(
    "div",
    __spreadProps(__spreadValues({
      className: cn17(
        "nextra-steps nx-ml-4 nx-mb-12 nx-border-l nx-border-gray-200 nx-pl-6",
        "dark:nx-border-neutral-800 [counter-reset:step]",
        className
      )
    }, props), {
      children
    })
  );
}

// src/components/tabs.tsx



function isTabItem(item) {
  if (item && typeof item === "object" && "label" in item)
    return true;
  return false;
}
var renderTab = (item) => {
  if (isTabItem(item)) {
    return item.label;
  }
  return item;
};
function Tabs({
  items,
  selectedIndex,
  defaultIndex,
  onChange,
  children
}) {
  return /* @__PURE__ */ jsxs18(
    HeadlessTab.Group,
    {
      selectedIndex,
      defaultIndex,
      onChange,
      children: [
        /* @__PURE__ */ jsx27("div", { className: "nextra-scrollbar nx-overflow-x-auto nx-overflow-y-hidden nx-overscroll-x-contain", children: /* @__PURE__ */ jsx27(HeadlessTab.List, { className: "nx-mt-4 nx-flex nx-w-max nx-min-w-full nx-border-b nx-border-gray-200 nx-pb-px dark:nx-border-neutral-800", children: items.map((item, index) => {
          const disabled = !!(item && typeof item === "object" && "disabled" in item && item.disabled);
          return /* @__PURE__ */ jsx27(
            HeadlessTab,
            {
              disabled,
              className: ({ selected }) => cn18(
                "nx-mr-2 nx-rounded-t nx-p-2 nx-font-medium nx-leading-5 nx-transition-colors",
                "-nx-mb-0.5 nx-select-none nx-border-b-2",
                selected ? "nx-border-primary-500 nx-text-primary-600" : "nx-border-transparent nx-text-gray-600 hover:nx-border-gray-200 hover:nx-text-black dark:nx-text-gray-200 dark:hover:nx-border-neutral-800 dark:hover:nx-text-white",
                disabled && "nx-pointer-events-none nx-text-gray-400 dark:nx-text-neutral-600"
              ),
              children: renderTab(item)
            },
            index
          );
        }) }) }),
        /* @__PURE__ */ jsx27(HeadlessTab.Panels, { children })
      ]
    }
  );
}
function Tab(_a) {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ jsx27(HeadlessTab.Panel, __spreadProps(__spreadValues({}, props), { className: "nx-rounded nx-pt-6", children }));
}

// src/components/theme-switch.tsx





var themeOptionsSchema = zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
  light: zod__WEBPACK_IMPORTED_MODULE_22__.z.string(),
  dark: zod__WEBPACK_IMPORTED_MODULE_22__.z.string(),
  system: zod__WEBPACK_IMPORTED_MODULE_22__.z.string()
});
function ThemeSwitch({
  lite,
  className
}) {
  const { setTheme, resolvedTheme, theme: theme2 = "" } = (0,next_themes__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useMounted)();
  const config = useConfig().themeSwitch;
  const IconToUse = mounted && resolvedTheme === "dark" ? nextra_icons__WEBPACK_IMPORTED_MODULE_12__.MoonIcon : nextra_icons__WEBPACK_IMPORTED_MODULE_12__.SunIcon;
  const options = typeof config.useOptions === "function" ? config.useOptions() : config.useOptions;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    Select,
    {
      className,
      title: "Change theme",
      options: [
        { key: "light", name: options.light },
        { key: "dark", name: options.dark },
        { key: "system", name: options.system }
      ],
      onChange: (option) => {
        setTheme(option.key);
      },
      selected: {
        key: theme2,
        name: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", { className: "nx-flex nx-items-center nx-gap-2 nx-capitalize", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(IconToUse, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: lite ? "md:nx-hidden" : "", children: mounted ? theme2 : "light" })
        ] })
      }
    }
  );
}

// src/components/toc.tsx




function TOC({ headings, filePath }) {
  var _a;
  const activeAnchor = useActiveAnchor();
  const config = useConfig();
  const tocRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => headings.filter((heading) => heading.depth > 1),
    [headings]
  );
  const hasHeadings = items.length > 0;
  const hasMetaInfo = Boolean(
    config.feedback.content || config.editLink.component || config.toc.extraContent
  );
  const activeSlug = (_a = Object.entries(activeAnchor).find(
    ([, { isActive }]) => isActive
  )) == null ? void 0 : _a[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a2;
    if (!activeSlug)
      return;
    const anchor = (_a2 = tocRef.current) == null ? void 0 : _a2.querySelector(
      `li > a[href="#${activeSlug}"]`
    );
    if (anchor) {
      (0,scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_21__["default"])(anchor, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: tocRef.current
      });
    }
  }, [activeSlug]);
  const linkClassName = clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100",
    "contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
    "div",
    {
      ref: tocRef,
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nextra-scrollbar nx-sticky nx-top-16 nx-overflow-y-auto nx-pr-4 nx-pt-6 nx-text-sm [hyphens:auto]",
        "nx-max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:-nx-mr-4 rtl:-nx-ml-4"
      ),
      children: [
        hasHeadings && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", { className: "nx-mb-4 nx-font-semibold nx-tracking-tight", children: renderComponent(config.toc.title) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("ul", { children: items.map(({ id, value, depth }) => {
            var _a2, _b, _c, _d;
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", { className: "nx-my-2 nx-scroll-my-6 nx-scroll-py-6", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
              "a",
              {
                href: `#${id}`,
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
                  {
                    2: "nx-font-semibold",
                    3: "ltr:nx-pl-4 rtl:nx-pr-4",
                    4: "ltr:nx-pl-8 rtl:nx-pr-8",
                    5: "ltr:nx-pl-12 rtl:nx-pr-12",
                    6: "ltr:nx-pl-16 rtl:nx-pr-16"
                  }[depth],
                  "nx-inline-block",
                  ((_a2 = activeAnchor[id]) == null ? void 0 : _a2.isActive) ? "nx-text-primary-600 nx-subpixel-antialiased contrast-more:!nx-text-primary-600" : "nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300",
                  "contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words"
                ),
                children: (_d = (_c = (_b = config.toc).headingComponent) == null ? void 0 : _c.call(_b, {
                  id,
                  children: value
                })) != null ? _d : value
              }
            ) }, id);
          }) })
        ] }),
        hasMetaInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
          "div",
          {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
              hasHeadings && "nx-mt-8 nx-border-t nx-bg-white nx-pt-8 nx-shadow-[0_-12px_16px_white] dark:nx-bg-dark dark:nx-shadow-[0_-12px_16px_#111]",
              "nx-sticky nx-bottom-0 nx-flex nx-flex-col nx-items-start nx-gap-2 nx-pb-8 dark:nx-border-neutral-800",
              "contrast-more:nx-border-t contrast-more:nx-border-neutral-400 contrast-more:nx-shadow-none contrast-more:dark:nx-border-neutral-400"
            ),
            children: [
              config.feedback.content ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                Anchor,
                {
                  className: linkClassName,
                  href: config.feedback.useLink(),
                  newWindow: true,
                  children: renderComponent(config.feedback.content)
                }
              ) : null,
              renderComponent(config.editLink.component, {
                filePath,
                className: linkClassName,
                children: renderComponent(config.editLink.text)
              }),
              renderComponent(config.toc.extraContent)
            ]
          }
        )
      ]
    }
  );
}

// src/constants.tsx


// src/components/match-sorter-search.tsx



function MatchSorterSearch({
  className,
  directories
}) {
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const results = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => (
      // Will need to scrape all the headers from each page and search through them here
      // (similar to what we already do to render the hash links in sidebar)
      // We could also try to search the entire string text from each page
      search ? (0,match_sorter__WEBPACK_IMPORTED_MODULE_23__.matchSorter)(directories, search, { keys: ["title"] }).map(
        ({ route, title }) => ({
          id: route + title,
          route,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HighlightMatches, { value: title, match: search })
        })
      ) : []
    ),
    [search, directories]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    Search,
    {
      value: search,
      onChange: setSearch,
      className,
      overlayClassName: "nx-w-full",
      results
    }
  );
}

// src/constants.tsx


var DEFAULT_LOCALE = "en-US";
var IS_BROWSER = typeof window !== "undefined";
function isReactNode(value) {
  return value == null || isString(value) || isFunction(value) || (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isString(value) {
  return typeof value === "string";
}
var i18nSchema = zod__WEBPACK_IMPORTED_MODULE_22__.z.array(
  zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    direction: zod__WEBPACK_IMPORTED_MODULE_22__.z["enum"](["ltr", "rtl"]).optional(),
    locale: zod__WEBPACK_IMPORTED_MODULE_22__.z.string(),
    text: zod__WEBPACK_IMPORTED_MODULE_22__.z.string()
  })
);
var reactNode = [
  isReactNode,
  { message: "Must be React.ReactNode or React.FC" }
];
var fc = [isFunction, { message: "Must be React.FC" }];
var themeSchema = zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
  banner: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    dismissible: zod__WEBPACK_IMPORTED_MODULE_22__.z.boolean(),
    key: zod__WEBPACK_IMPORTED_MODULE_22__.z.string(),
    text: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode).optional()
  }),
  chat: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    icon: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    link: zod__WEBPACK_IMPORTED_MODULE_22__.z.string().startsWith("https://").optional()
  }),
  components: zod__WEBPACK_IMPORTED_MODULE_22__.z.record(zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...fc)).optional(),
  darkMode: zod__WEBPACK_IMPORTED_MODULE_22__.z.boolean(),
  direction: zod__WEBPACK_IMPORTED_MODULE_22__.z["enum"](["ltr", "rtl"]),
  docsRepositoryBase: zod__WEBPACK_IMPORTED_MODULE_22__.z.string().startsWith("https://"),
  editLink: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...fc),
    text: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode)
  }),
  faviconGlyph: zod__WEBPACK_IMPORTED_MODULE_22__.z.string().optional(),
  feedback: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    content: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    labels: zod__WEBPACK_IMPORTED_MODULE_22__.z.string(),
    useLink: zod__WEBPACK_IMPORTED_MODULE_22__.z["function"]().returns(zod__WEBPACK_IMPORTED_MODULE_22__.z.string())
  }),
  footer: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    text: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode)
  }),
  gitTimestamp: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
  head: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
  i18n: i18nSchema,
  logo: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
  logoLink: zod__WEBPACK_IMPORTED_MODULE_22__.z.boolean().or(zod__WEBPACK_IMPORTED_MODULE_22__.z.string()),
  main: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...fc).optional(),
  navbar: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    extraContent: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode).optional()
  }),
  navigation: zod__WEBPACK_IMPORTED_MODULE_22__.z.boolean().or(
    zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
      next: zod__WEBPACK_IMPORTED_MODULE_22__.z.boolean(),
      prev: zod__WEBPACK_IMPORTED_MODULE_22__.z.boolean()
    })
  ),
  nextThemes: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    defaultTheme: zod__WEBPACK_IMPORTED_MODULE_22__.z.string(),
    forcedTheme: zod__WEBPACK_IMPORTED_MODULE_22__.z.string().optional(),
    storageKey: zod__WEBPACK_IMPORTED_MODULE_22__.z.string()
  }),
  notFound: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    content: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    labels: zod__WEBPACK_IMPORTED_MODULE_22__.z.string()
  }),
  primaryHue: zod__WEBPACK_IMPORTED_MODULE_22__.z.number().or(
    zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
      dark: zod__WEBPACK_IMPORTED_MODULE_22__.z.number(),
      light: zod__WEBPACK_IMPORTED_MODULE_22__.z.number()
    })
  ),
  project: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    icon: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    link: zod__WEBPACK_IMPORTED_MODULE_22__.z.string().startsWith("https://").optional()
  }),
  search: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    emptyResult: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    error: zod__WEBPACK_IMPORTED_MODULE_22__.z.string().or(zod__WEBPACK_IMPORTED_MODULE_22__.z["function"]().returns(zod__WEBPACK_IMPORTED_MODULE_22__.z.string())),
    loading: zod__WEBPACK_IMPORTED_MODULE_22__.z.string().or(zod__WEBPACK_IMPORTED_MODULE_22__.z["function"]().returns(zod__WEBPACK_IMPORTED_MODULE_22__.z.string())),
    // Can't be React component
    placeholder: zod__WEBPACK_IMPORTED_MODULE_22__.z.string().or(zod__WEBPACK_IMPORTED_MODULE_22__.z["function"]().returns(zod__WEBPACK_IMPORTED_MODULE_22__.z.string()))
  }),
  serverSideError: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    content: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    labels: zod__WEBPACK_IMPORTED_MODULE_22__.z.string()
  }),
  sidebar: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    defaultMenuCollapseLevel: zod__WEBPACK_IMPORTED_MODULE_22__.z.number().min(1).int(),
    titleComponent: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    toggleButton: zod__WEBPACK_IMPORTED_MODULE_22__.z.boolean()
  }),
  themeSwitch: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(
      ...reactNode
    ),
    useOptions: themeOptionsSchema.or(zod__WEBPACK_IMPORTED_MODULE_22__.z["function"]().returns(themeOptionsSchema))
  }),
  toc: zod__WEBPACK_IMPORTED_MODULE_22__.z.strictObject({
    component: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    extraContent: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode),
    float: zod__WEBPACK_IMPORTED_MODULE_22__.z.boolean(),
    headingComponent: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...fc).optional(),
    title: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(...reactNode)
  }),
  useNextSeoProps: zod__WEBPACK_IMPORTED_MODULE_22__.z.custom(isFunction)
});
var publicThemeSchema = themeSchema.deepPartial().extend({
  // to have `locale` and `text` as required properties
  i18n: i18nSchema.optional()
});
var DEFAULT_THEME = {
  banner: {
    dismissible: true,
    key: "nextra-banner"
  },
  chat: {
    icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.DiscordIcon, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-sr-only", children: "Discord" })
    ] })
  },
  darkMode: true,
  direction: "ltr",
  docsRepositoryBase: "https://github.com/shuding/nextra",
  editLink: {
    component: function EditLink({ className, filePath, children }) {
      const editUrl = useGitEditUrl(filePath);
      if (!editUrl) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Anchor, { className, href: editUrl, children });
    },
    text: "Edit this page"
  },
  feedback: {
    content: "Question? Give us feedback \u2192",
    labels: "feedback",
    useLink() {
      const config = useConfig();
      return getGitIssueUrl({
        labels: config.feedback.labels,
        repository: config.docsRepositoryBase,
        title: `Feedback for \u201C${config.title}\u201D`
      });
    }
  },
  footer: {
    component: Footer,
    text: `MIT ${(/* @__PURE__ */ new Date()).getFullYear()} \xA9 Nextra.`
  },
  gitTimestamp: function GitTimestamp({ timestamp }) {
    const { locale = DEFAULT_LOCALE } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
      "Last updated on",
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("time", { dateTime: timestamp.toISOString(), children: timestamp.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) })
    ] });
  },
  head: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", { name: "msapplication-TileColor", content: "#fff" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", { httpEquiv: "Content-Language", content: "en" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", { name: "description", content: "Nextra: the next docs builder" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", { name: "twitter:site", content: "@shuding_" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", { property: "og:title", content: "Nextra: the next docs builder" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", { property: "og:description", content: "Nextra: the next docs builder" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("meta", { name: "apple-mobile-web-app-title", content: "Nextra" })
  ] }),
  i18n: [],
  logo: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-font-extrabold", children: "Nextra" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-ml-2 nx-hidden nx-font-normal nx-text-gray-600 md:nx-inline", children: "The Next Docs Builder" })
  ] }),
  logoLink: true,
  navbar: {
    component: Navbar
  },
  navigation: true,
  nextThemes: {
    defaultTheme: "system",
    storageKey: "theme"
  },
  notFound: {
    content: "Submit an issue about broken link \u2192",
    labels: "bug"
  },
  primaryHue: {
    dark: 204,
    light: 212
  },
  project: {
    icon: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(nextra_icons__WEBPACK_IMPORTED_MODULE_12__.GitHubIcon, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-sr-only", children: "GitHub" })
    ] })
  },
  search: {
    component: function Search2({ className, directories }) {
      const config = useConfig();
      return config.flexsearch ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Flexsearch, { className }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MatchSorterSearch, { className, directories });
    },
    emptyResult: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400", children: "No results found." }),
    error: "Failed to load search index.",
    loading: function useLoading() {
      const { locale } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
      if (locale === "zh-CN")
        return "\u6B63\u5728\u52A0\u8F7D\u2026";
      if (locale === "ru")
        return "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026";
      if (locale === "fr")
        return "\u0421hargement\u2026";
      return "Loading\u2026";
    },
    placeholder: function usePlaceholder() {
      const { locale } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
      if (locale === "zh-CN")
        return "\u641C\u7D22\u6587\u6863\u2026";
      if (locale === "ru")
        return "\u041F\u043E\u0438\u0441\u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438\u2026";
      if (locale === "fr")
        return "Rechercher documents\u2026";
      return "Search documentation\u2026";
    }
  },
  serverSideError: {
    content: "Submit an issue about error in url \u2192",
    labels: "bug"
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    titleComponent: ({ title }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: title }),
    toggleButton: false
  },
  themeSwitch: {
    component: ThemeSwitch,
    useOptions() {
      const { locale } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
      if (locale === "zh-CN") {
        return { dark: "\u6DF1\u8272\u4E3B\u9898", light: "\u6D45\u8272\u4E3B\u9898", system: "\u7CFB\u7EDF\u9ED8\u8BA4" };
      }
      return { dark: "Dark", light: "Light", system: "System" };
    }
  },
  toc: {
    component: TOC,
    float: true,
    title: "On This Page"
  },
  useNextSeoProps: () => ({ titleTemplate: "%s \u2013 Nextra" })
};
var DEEP_OBJECT_KEYS = Object.entries(DEFAULT_THEME).map(([key, value]) => {
  const isObject = value && typeof value === "object" && !Array.isArray(value) && !(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(value);
  if (isObject) {
    return key;
  }
}).filter(Boolean);

// src/polyfill.ts
if (IS_BROWSER) {
  let resizeTimer;
  const addResizingClass = () => {
    document.body.classList.add("resizing");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resizing");
    }, 200);
  };
  window.addEventListener("resize", addResizingClass);
}

// src/mdx-components.tsx




function HeadingLink(_a) {
  var _b = _a, {
    tag: Tag,
    context,
    children,
    id
  } = _b, props = __objRest(_b, [
    "tag",
    "context",
    "children",
    "id"
  ]);
  const setActiveAnchor = useSetActiveAnchor();
  const slugs2 = useSlugs();
  const observer = useIntersectionObserver();
  const obRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!id)
      return;
    const heading = obRef.current;
    if (!heading)
      return;
    slugs2.set(heading, [id, context.index += 1]);
    observer == null ? void 0 : observer.observe(heading);
    return () => {
      observer == null ? void 0 : observer.disconnect();
      slugs2.delete(heading);
      setActiveAnchor((f) => {
        const ret = __spreadValues({}, f);
        delete ret[id];
        return ret;
      });
    };
  }, [id, context, slugs2, observer, setActiveAnchor]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
    Tag,
    __spreadProps(__spreadValues({
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100",
        {
          h2: "nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400",
          h3: "nx-mt-8 nx-text-2xl",
          h4: "nx-mt-8 nx-text-xl",
          h5: "nx-mt-8 nx-text-lg",
          h6: "nx-mt-8 nx-text-base"
        }[Tag]
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", { className: "nx-absolute -nx-mt-20", id, ref: obRef }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
          "a",
          {
            href: `#${id}`,
            className: "subheading-anchor",
            "aria-label": "Permalink for this section"
          }
        )
      ]
    })
  );
}
var findSummary = (children) => {
  let summary = null;
  const restChildren = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (child, index) => {
    var _a;
    if (child && child.type === Summary) {
      summary || (summary = child);
      return;
    }
    let c = child;
    if (!summary && child && typeof child === "object" && child.type !== Details && "props" in child && child.props) {
      const result = findSummary(child.props.children);
      summary = result[0];
      c = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, __spreadProps(__spreadValues({}, child.props), {
        children: ((_a = result[1]) == null ? void 0 : _a.length) ? result[1] : void 0,
        key: index
      }));
    }
    restChildren.push(c);
  });
  return [summary, restChildren];
};
var Details = (_a) => {
  var _b = _a, {
    children,
    open
  } = _b, props = __objRest(_b, [
    "children",
    "open"
  ]);
  const [openState, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!!open);
  const [summary, restChildren] = findSummary(children);
  const [delayedOpenState, setDelayedOpenState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(openState);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (openState) {
      setDelayedOpenState(true);
    } else {
      const timeout = setTimeout(() => setDelayedOpenState(openState), 500);
      return () => clearTimeout(timeout);
    }
  }, [openState]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(
    "details",
    __spreadProps(__spreadValues(__spreadProps(__spreadValues({
      className: "nx-my-4 nx-rounded nx-border nx-border-gray-200 nx-bg-white nx-p-2 nx-shadow-sm first:nx-mt-0 dark:nx-border-neutral-800 dark:nx-bg-neutral-900"
    }, props), {
      open: delayedOpenState
    }), openState && { "data-expanded": true }), {
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(DetailsProvider, { value: setOpen, children: summary }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Collapse, { isOpen: openState, children: restChildren })
      ]
    })
  );
};
var Summary = (props) => {
  const setOpen = useDetails();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    "summary",
    __spreadProps(__spreadValues({
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-flex nx-items-center nx-cursor-pointer nx-list-none nx-p-1 nx-transition-colors hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800",
        "before:nx-mr-1 before:nx-inline-block before:nx-transition-transform before:nx-content-[''] dark:before:nx-invert",
        "rtl:before:nx-rotate-180 [[data-expanded]>&]:before:nx-rotate-90"
      )
    }, props), {
      onClick: (e) => {
        e.preventDefault();
        setOpen((v) => !v);
      }
    })
  );
};
var EXTERNAL_HREF_REGEX = /https?:\/\//;
var Link = (_a) => {
  var _b = _a, { href = "", className } = _b, props = __objRest(_b, ["href", "className"]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    Anchor,
    __spreadValues({
      href,
      newWindow: EXTERNAL_HREF_REGEX.test(href),
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        "nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]",
        className
      )
    }, props)
  );
};
var A = (_a) => {
  var _b = _a, { href = "" } = _b, props = __objRest(_b, ["href"]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Anchor, __spreadValues({ href, newWindow: EXTERNAL_HREF_REGEX.test(href) }, props));
};
var getComponents = ({
  isRawLayout,
  components
}) => {
  if (isRawLayout) {
    return { a: A };
  }
  const context = { index: 0 };
  return __spreadValues({
    h1: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "h1",
      __spreadValues({
        className: "nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100"
      }, props)
    ),
    h2: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeadingLink, __spreadValues({ tag: "h2", context }, props)),
    h3: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeadingLink, __spreadValues({ tag: "h3", context }, props)),
    h4: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeadingLink, __spreadValues({ tag: "h4", context }, props)),
    h5: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeadingLink, __spreadValues({ tag: "h5", context }, props)),
    h6: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HeadingLink, __spreadValues({ tag: "h6", context }, props)),
    ul: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "ul",
      __spreadValues({
        className: "nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
      }, props)
    ),
    ol: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "ol",
      __spreadValues({
        className: "nx-mt-6 nx-list-decimal first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
      }, props)
    ),
    li: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", __spreadValues({ className: "nx-my-2" }, props)),
    blockquote: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "blockquote",
      __spreadValues({
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          "nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400",
          "first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6"
        )
      }, props)
    ),
    hr: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("hr", __spreadValues({ className: "nx-my-8 dark:nx-border-gray-900" }, props)),
    a: Link,
    table: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      nextra_components__WEBPACK_IMPORTED_MODULE_24__.Table,
      __spreadValues({
        className: "nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0"
      }, props)
    ),
    p: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", __spreadValues({ className: "nx-mt-6 nx-leading-7 first:nx-mt-0" }, props)),
    tr: nextra_components__WEBPACK_IMPORTED_MODULE_24__.Tr,
    th: nextra_components__WEBPACK_IMPORTED_MODULE_24__.Th,
    td: nextra_components__WEBPACK_IMPORTED_MODULE_24__.Td,
    details: Details,
    summary: Summary,
    pre: nextra_components__WEBPACK_IMPORTED_MODULE_24__.Pre,
    code: nextra_components__WEBPACK_IMPORTED_MODULE_24__.Code
  }, components);
};

// src/index.tsx




var classes6 = {
  toc: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
    "nextra-toc nx-order-last nx-hidden nx-w-64 nx-shrink-0 xl:nx-block print:nx-hidden"
  ),
  main: clsx__WEBPACK_IMPORTED_MODULE_3___default()("nx-w-full nx-overflow-x-hidden nx-break-words")
};
var Body = ({
  themeContext,
  breadcrumb,
  timestamp,
  navigation,
  children
}) => {
  var _a;
  const config = useConfig();
  const mounted = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useMounted)();
  if (themeContext.layout === "raw") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: classes6.main, children });
  }
  const date = themeContext.timestamp && config.gitTimestamp && timestamp ? new Date(timestamp) : null;
  const gitTimestampEl = (
    // Because a user's time zone may be different from the server page
    mounted && date ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400", children: renderComponent(config.gitTimestamp, { timestamp: date }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", { className: "nx-mt-16" })
  );
  const content = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, { children: [
    children,
    gitTimestampEl,
    navigation
  ] });
  const body = ((_a = config.main) == null ? void 0 : _a.call(config, { children: content })) || content;
  if (themeContext.layout === "full") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
      "article",
      {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
          classes6.main,
          "nextra-content nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]"
        ),
        children: body
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    "article",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
        classes6.main,
        "nextra-content nx-flex nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-min-w-0 nx-justify-center nx-pb-8 nx-pr-[calc(env(safe-area-inset-right)-1.5rem)]",
        themeContext.typesetting === "article" && "nextra-body-typesetting-article"
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("main", { className: "nx-w-full nx-min-w-0 nx-max-w-6xl nx-px-6 nx-pt-4 md:nx-px-12", children: [
        breadcrumb,
        body
      ] })
    }
  );
};
var InnerLayout = ({
  filePath,
  pageMap,
  frontMatter,
  headings,
  timestamp,
  children
}) => {
  const config = useConfig();
  const { locale = DEFAULT_LOCALE, defaultLocale } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const fsPath = (0,nextra_hooks__WEBPACK_IMPORTED_MODULE_5__.useFSRoute)();
  const {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    topLevelNavbarItems,
    docsDirectories,
    flatDirectories,
    flatDocsDirectories,
    directories
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
    () => (0,nextra_normalize_pages__WEBPACK_IMPORTED_MODULE_11__.normalizePages)({
      list: pageMap,
      locale,
      defaultLocale,
      route: fsPath
    }),
    [pageMap, locale, defaultLocale, fsPath]
  );
  const themeContext = __spreadValues(__spreadValues({}, activeThemeContext), frontMatter);
  const hideSidebar = !themeContext.sidebar || themeContext.layout === "raw" || activeType === "page";
  const tocEl = activeType === "page" || !themeContext.toc || themeContext.layout !== "default" ? themeContext.layout !== "full" && themeContext.layout !== "raw" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("nav", { className: classes6.toc, "aria-label": "table of contents" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
    "nav",
    {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes6.toc, "nx-px-4"),
      "aria-label": "table of contents",
      children: renderComponent(config.toc.component, {
        headings: config.toc.float ? headings : [],
        filePath
      })
    }
  );
  const localeConfig = config.i18n.find((l) => l.locale === locale);
  const isRTL = localeConfig ? localeConfig.direction === "rtl" : config.direction === "rtl";
  const direction = isRTL ? "rtl" : "ltr";
  return (
    // This makes sure that selectors like `[dir=ltr] .nextra-container` work
    // before hydration as Tailwind expects the `dir` attribute to exist on the
    // `html` element.
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", { dir: direction, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `document.documentElement.setAttribute('dir','${direction}')`
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Head, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Banner, {}),
      themeContext.navbar && renderComponent(config.navbar.component, {
        flatDirectories,
        items: topLevelNavbarItems
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
        "div",
        {
          className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(
            "nx-mx-auto nx-flex",
            themeContext.layout !== "raw" && "nx-max-w-[90rem]"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ActiveAnchorProvider, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
              Sidebar,
              {
                docsDirectories,
                flatDirectories,
                fullDirectories: directories,
                headings,
                asPopover: hideSidebar,
                includePlaceholder: themeContext.layout === "default"
              }
            ),
            tocEl,
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(SkipNavContent, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
              Body,
              {
                themeContext,
                breadcrumb: activeType !== "page" && themeContext.breadcrumb ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Breadcrumb, { activePath }) : null,
                timestamp,
                navigation: activeType !== "page" && themeContext.pagination ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  NavLinks,
                  {
                    flatDirectories: flatDocsDirectories,
                    currentIndex: activeIndex
                  }
                ) : null,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(
                  nextra_mdx__WEBPACK_IMPORTED_MODULE_4__.MDXProvider,
                  {
                    components: getComponents({
                      isRawLayout: themeContext.layout === "raw",
                      components: config.components
                    }),
                    children
                  }
                )
              }
            )
          ] })
        }
      ),
      themeContext.footer && renderComponent(config.footer.component, { menu: hideSidebar })
    ] })
  );
};
function Layout(_a) {
  var _b = _a, {
    children
  } = _b, context = __objRest(_b, [
    "children"
  ]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ConfigProvider, { value: context, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(InnerLayout, __spreadProps(__spreadValues({}, context.pageOpts), { children })) });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7587:
/***/ ((module) => {

"use strict";
module.exports = {"i8":"13.3.0"};

/***/ })

};
;