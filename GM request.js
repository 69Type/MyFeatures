//@connect   ...
//@grant     GM_xmlhttpRequest

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

    let htmlText = await request('url'),

})()
