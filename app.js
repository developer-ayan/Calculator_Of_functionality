function Buttondigits(press) {
    var a = document.getElementById("input")
    a.value += press
}
function Clearbutton(remove) {
    var clear_button = document.getElementById("input")
    clear_button.value = ""
}
function Buttondigits1() {
    var equal_to = document.getElementById("input")
    equal_to.value = eval(equal_to.value)
}
function clearbutton() {
    var clearbut = document.getElementById("input").value
    clearbut = clearbut.substr(0, clearbut.length - 1)
    document.getElementById("input").value = clearbut
}