console.log("background running");

chrome.browserAction.onClicked.addListener(setup);
function setup() {
    noCanvas();
    userinput = select('#change_from');
    userinput.input(sendText);



    function sendText() {
        //Value got from input field in popup
        message = userinput.value();
        //Sending message to content
        chrome.tabs.query({active: true,currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,message);
        });
    }
}
