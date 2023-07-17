window.addEventListener("message", message => {
    console.log(message.data) // Wayne is coming!!!
    window.ReactNativeWebView.postMessage('Client received data')
});