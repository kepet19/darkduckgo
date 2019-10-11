// ==UserScript==
// @name      DarkDuckGo
// @version   0.1
// @description change duckduckgo logo to darkduckgo, on the black theme
// author     kkmp
// homepage   https://github.com/kepet19/darkduckgo
// copyright  2019+, kkmp https://github.com/kepet19
// license    MIT; https://raw.githubusercontent.com/kepet19/darkduckgo/master/LICENSE
// @icon      https://github.com/kepet19/darkduckgo/raw/master/icon.png
// @match     https://duckduckgo.com/
// @grant     GM_addStyle
// ==/UserScript==


GM_addStyle ( `
    .dark-bg .logo_homepage{
        background-image: url('https://github.com/kepet19/darkduckgo/raw/master/logo_homepage.darkduckgo.v108.svg?sanitize=true')  ;
` );
