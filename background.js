console.log("background running");

chrome.browserAction.onClicked.addListener(setup);
function setup() {
    noCanvas();
    userinputFrom = select('#change_from');
    userinputTo = select('#change_to');
    
    userinputFrom.input(sendText);



    function sendText() {
        //Value got from input field in popup
        message = userinputFrom.value();
        otherMessage = userinputTo.value();
        //Sending message to content
        chrome.tabs.query({active: true,currentWindow:true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,message);
        });
    }
}
