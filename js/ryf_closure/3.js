function f1() {
  var n = 999;
  nAdd = function() {
    n += 1
  }
  function f2() {
    console.log(n)
  }
  // window
  return f2;
}
var result = f1();
result();
nAdd();
result();