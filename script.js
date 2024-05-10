window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goUpButton").style.display = "block";
    } else {
      document.getElementById("goUpButton").style.display = "none";
    }
  }

  function goUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }