const chatDiv = '#chat-div';
const chatIconDiv = '#chat-icon-div';

$(document).ready(function () {
     $(chatIconDiv).on('click', showChatContainer);
});

function showChatContainer() {
    $(chatDiv).show()
    $(chatIconDiv).hide();
}

