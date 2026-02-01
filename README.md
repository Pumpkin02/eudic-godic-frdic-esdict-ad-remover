# 欧路助手系列 - 全屏广告遮罩修复插件

[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-Enabled-green.svg)](https://www.tampermonkey.net/)
[![Platform](https://img.shields.io/badge/Platform-Chrome%20|%20Edge%20|%20Firefox-blue.svg)](#)
![Downloads](https://img.shields.io/greasyfork/dt/564843?label=安装量&color=green)

这是一个专门为 **欧路词典 (Eudic)** 网页版及其旗下多语种助手开发的油猴脚本。旨在彻底解决网页版因 Google 全屏广告遮罩导致页面无法点击、滚动条锁死的问题。

---

## 📖 简介

在浏览欧路助手系列网页时，Google Ads 偶尔会加载全屏遮罩（Vignette Ads）。由于网页本身适配问题，这些遮罩有时会变成“不可见”但“存在”的状态，导致用户：
- 无法点击搜索框。
- 无法点击单词解释。
- 页面滚动条消失，无法查看长内容。

**本脚本通过监听 DOM 变化，自动识别并实时移除这些拦截层，恢复网页的正常交互功能。**

---

## 🚀 安装方式

### 1. 准备工作
首先确保你的浏览器已安装 [Tampermonkey (油猴)](https://www.tampermonkey.net/) 插件。

### 2. 安装脚本（任选其一）
- **推荐：[从 Greasy Fork 安装](这里替换成你刚刚发布的GreasyFork链接)**
- **备选：[从 GitHub 直接安装](这里替换成你第四步拿到的Raw链接)**

---

## 🛠 功能特性

| 功能 | 描述 |
| :--- | :--- |
| **智能清除** | 自动检测并删除 `adsbygoogle` 生成的全屏拦截层 |
| **滚动恢复** | 强制解除广告脚本对 `body` 和 `html` 标签的 `overflow: hidden` 锁定 |
| **实时监听** | 采用 `MutationObserver` 技术，无需刷新即可处理动态加载的广告 |
| **全平台支持** | 覆盖欧路旗下英、德、法、西四大语种助手网站 |

---

## 🌐 支持的站点

本脚本将在以下域名下自动运行：

* `dict.eudic.net` (欧路英语)
* `www.godic.net` (德语助手)
* `www.frdic.com` (法语助手)
* `www.esdict.cn` (西语助手)

---

## 📜 免责声明
本脚本仅用于技术交流与网页交互体验修复，不针对也不影响网页正常的横幅广告展示。请尊重网站运营方的版权与劳动成果。
