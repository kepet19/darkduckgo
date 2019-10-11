// ==UserScript==
// @name      DarkDuckGo
// @version   0.1
// @match     https://duckduckgo.com/
// @grant     GM_addStyle
// ==/UserScript==


GM_addStyle ( `
    .dark-bg .logo_homepage{
        background-image: url('assets/logo_homepage.normal.v108.svg') !important;
    }
` );
