$('.downloadable').click(function () {
    if(window.webkit) {
        var prop = {'name' : 'hello'};
        window.webkit.messageHandlers.observe.postMessage(prop);
    }
    alert("test");
});

// 디버깅 용도
// setTimeout(
// function hello() {
//     alert("test");
// }, 100);