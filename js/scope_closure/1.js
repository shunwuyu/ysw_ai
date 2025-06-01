function bar() {
    console.log(myName);
}
function foo() {
    var myName = "极客";
    bar();
}
var myName = "骑士"
foo();