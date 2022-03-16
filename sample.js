var openside = document.getElementById("openside");

var x = document.getElementById("sidebar");
x.style.left = "-100%";
openside.addEventListener("click", function() {
  if (x.style.left == "-100%") {
    x.style.left = "0%";
  } else {
    x.style.left = "-100%";
  }
});
scrollup.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// window.onwheel = function() {
//   //var s = parseInt(event.deltaY);
//   var s = event.wheelDelta;
//   var tri = document.getElementById("tricon");
//   if (tri != null) {
//     cur = parseInt(getComputedStyle(tricon).top);
//     if (s < 0) {
//       var n = -290;
//     } else {
//       var n = 0;
//     }
//     //demo.innerHTML = cur;
//     //logo.innerHTML = n + "px";
//     tricon.style.top = n + "px";
//   }
// };

window.onscroll = function() {
  var nav = document.getElementById("navbar");
  var logo = document.getElementById("logo");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //alert("1");
    // nav.style.width = "100%";
    // nav.style.height = "100px";
    // logo.style.width = "200px";
    // logo.style.height = "50px";
    // nav.style.borderRadius = "0px";
    bread.style.visibility = "visible";
    bread.style.height = "37px";
    bcon.style.height = "35px";
    // navigation.style.backgroundColor = "#c2c2c2";
    scrollup.style.display = "flex";
    icofb.style.display = "block";
    icoln.style.display = "block";
    icogm.style.display = "block";
  } else {
    //alert("2");
    // nav.style.width = "80%";
    // nav.style.height = "148px";
    // logo.style.width = "200px";
    // logo.style.height = "50px";
    // nav.style.borderRadius = "10px";
    bread.style.visibility = "hidden";
    bcon.style.height = "0px";
    bread.style.height = "0px";
    // navigation.style.backgroundColor = "transparent";
    scrollup.style.display = "none";
    icofb.style.display = "none";
    icoln.style.display = "none";
    icogm.style.display = "none";
  }
  //detect if the user is at the buttom page
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    icofb.style.display = "none";
    icoln.style.display = "none";
    icogm.style.display = "none";
  }
};

var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
