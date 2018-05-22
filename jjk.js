$('.downloadable').click(function () {
    if(window.webkit) {
        var prop = {'name' : 'hello'};
        window.webkit.messageHandlers.observe.postMessage(prop);
    }
    console.log("downloable");
    alert("downloable");
});

// 디버깅 용도
// setTimeout(
// function hello() {
//     alert("test");
// }, 100);