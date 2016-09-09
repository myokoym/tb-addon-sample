function log(message) {
  Components.utils.reportError(message);
}

var callback = function() {
  var content = document.getElementById('content-frame').contentDocument;
  log(content);
  var contentBody = content.body;
  log(contentBody);
  log(contentBody.innerHTML);
  contentBody.innerHTML = 'hi.';
  var editor = GetCurrentEditor();
  editor.beginTransaction();
  var tempString = editor.outputToString('text/plain', 4);
  editor.endTransaction();  // this is very impt, remember to end transaction.
};

window.addEventListener('DOMContentLoaded', callback, false);
