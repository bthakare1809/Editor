
function enableEditMode() {
  richTextField.document.designMode = "on";
}
function Edit(command) {
  richTextField.document.execCommand(command, false, null);
}
function execVal(command, value) {
  richTextField.document.execCommand(command, false, value);
}
1
2
3
4
5
6
7
8
9
10
/* code by webdevtrick ( https://webdevtrick.com ) */
function enableEditMode() {
  richTextField.document.designMode = "on";
}
function Edit(command) {
  richTextField.document.execCommand(command, false, null);
}
function execVal(command, value) {
  richTextField.document.execCommand(command, false, value);
}