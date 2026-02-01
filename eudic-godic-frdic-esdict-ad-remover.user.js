// ==UserScript==
// @name         欧路助手系列 - 全屏广告遮罩修复
// @namespace    https://github.com/Pumpkin02/eudic-ad-remover
// @version      1.0.0
// @description  自动清除欧路词典、德语助手、法语助手、西语助手网页版上出现的拦截点击的全屏广告遮罩。
// @author       Feng
// @match        *://*.eudic.net/*
// @match        *://*.godic.net/*
// @match        *://*.frdic.com/*
// @match        *://*.esdict.cn/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    // 需要清理的广告元素选择器
    const SELECTOR = 'ins.adsbygoogle.adsbygoogle-noablate, ins.adsbygoogle[data-vignette-loaded="true"], #google_ads_iframe_';

    function removeOverlay() {
        const ads = document.querySelectorAll(SELECTOR);
        if (ads.length > 0) {
            ads.forEach((el) => {
                // 核心：解除鼠标点击拦截
                el.style.setProperty("pointer-events", "none", "important");
                // 隐藏广告层
                el.style.setProperty("display", "none", "important");
                el.style.setProperty("visibility", "hidden", "important");
                el.style.setProperty("opacity", "0", "important");
            });
            console.log('✅ 欧路助手广告修复：已清理拦截层');
        }

        // 强制恢复页面滚动条（部分广告会锁定页面滚动）
        if (document.body) {
            document.body.style.setProperty("overflow", "auto", "important");
        }
        document.documentElement.style.setProperty("overflow", "auto", "important");
    }

    // 1. 立即执行
    removeOverlay();

    // 2. 监听动态加载的广告
    const observer = new MutationObserver(() => removeOverlay());
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // 3. 定时器保底执行
    setInterval(removeOverlay, 1000);
})();
