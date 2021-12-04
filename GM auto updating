// ==UserScript==
// @name         AUTO UPDATE FUNCTION FOR YOUR SCRIPT
// @namespace    http://tampermonkey.net/
// @version      1
// @description  test for new version
// @author       StickySkull
// @license      MIT
// @match        *://*/*
// @connect      greasyfork.org
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==


// My discord link: https://discord.gg/sHj5UauJZ4


// This function checks the differences between the current
// version and the latest version and, depending on this,
// runs any of your functions

// Also, you need to add this for make this thing work ///////
//                                                          //
//           // @grant        GM_xmlhttpRequest             //
//           // @connect      greasyfork.org                //
//                                                          //
//////////////////////////////////////////////////////////////


// (when you using "@grant" all window for store globals variables)




// Your program's main section on greasyfork.org
const url = 'https://greasyfork.org/ru/scripts/381682-html5视频播放器增强脚本';

// Example of function if versions are different
function example(currentVersion, newestVersion){
    if (confirm(`There is a new version ${newestVersion}, but your current version is ${currentVersion}.\nDo you want to install it now?`)) window.open(url, '_blan;');
}



function testForVersion(yourURL, f) {
    function request(url) {
        return new Promise(resolve => {
            GM_xmlhttpRequest({
                url,
                method: 'GET',
                onload: (response) => resolve(response.responseText),
            });
        });
    }

    (async () => {
        let htmlText = await request(`${url}/versions`),
            div = document.createElement('div');
        div.insertAdjacentHTML('afterBegin', htmlText);
        let currentVersion = GM.info.script.version,
            newestVersion = div.getElementsByClassName('history_versions')[0].getElementsByTagName('a')[0].innerText.replace('v','');
        if (currentVersion != newestVersion) f(currentVersion, newestVersion);
    })()
}


testForVersion(url, example);





