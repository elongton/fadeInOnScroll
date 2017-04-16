$(document).ready(function(){
  //Take your div into one js variable
var myitems = $(".header_row div h1");
  //Take the current position (vertical position from top) of your div in the variable

for (item in myitems){
  if (isElement(myitems[item])){
    var myelement = $(myitems[item]);
    var pos = myelement.parent().offset();
    if (pos.top <= $(window).height()){
      myelement.addClass("AfterScroll");
    }
  }
} //for (item in header)

$(window).scroll(function () {
  var windowpos = $(window).scrollTop();
  // console.log(windowpos);
  for (item in myitems){
    if (isElement(myitems[item])){
      var myelement = $(myitems[item]);
      var pos = myelement.parent().offset();
      if (windowpos >= (pos.top - 900)) {
        console.log(windowpos.toString() + "," +  pos.top.toString());
        myelement.addClass("AfterScroll");
      }
    } //if (typeof)
  } // for (item in header)
 });


});

function isElement(obj) {
  try {
    //Using W3 DOM2 (works for FF, Opera and Chrom)
    return obj instanceof HTMLElement;
  }
  catch(e){
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have. (works on IE7)
    return (typeof obj==="object") &&
      (obj.nodeType===1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument ==="object");
  }
}
