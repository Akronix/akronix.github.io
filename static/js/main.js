/**
 * Created by fabiomadeira on 25/02/15.
 */
// jQuery for page scrolling feature
jQuery(document).ready(function(e) {
    e(".scroll").click(function(t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    })
});

function displayMenu() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById("menu-icon").className = "fa fa-bars";
  } else {
    x.style.display = "block";
    document.getElementById("menu-icon").className = "fa fa-times";
  }
}


