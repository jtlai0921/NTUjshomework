var el = document.querySelector('.entry-content');
var notIndex = location.pathname !== '/';
var notCategory = location.pathname.indexOf('category') === -1;
var notTag = location.pathname.indexOf('tag') === -1;

// 載入JS檔
function appendJS(src) {
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}

if (el && notIndex && notCategory && notTag) {

    var currentUri = document.querySelector('[rel="canonical"]').href;

    var fbBtn = '<div class="fb-like" data-href="' + currentUri + '" data-layout="button_count" data-action="like" data-size="small" data-share="true"></div>';
    var lineBtn = '<div class="line-it-button" data-lang="zh_Hant" data-type="share-a" data-ver="3" data-url="' + currentUri + '" data-color="default" data-size="small" data-count="true" style="display: none;"></div>';
    var twitterBtn = '<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>';

    var socialHTML = '<ul class="js-social-share">' +
        '<li>' + fbBtn + '</li>' +
        '<li>' + lineBtn + '</li>' +
        '<li>' + twitterBtn + '</li>' +
        '</ul>';
    el.insertAdjacentHTML('beforebegin', socialHTML);

    if (document.querySelector('.sharedaddy')) {
        var originShare = document.querySelector('.sharedaddy');
        originShare.insertAdjacentHTML('beforebegin', socialHTML);
    }

    appendJS('https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js');
    appendJS('https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.0');
    appendJS('https://platform.twitter.com/widgets.js');

}