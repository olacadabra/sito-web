var smooth = [$('a.smooth'), 100, 750];
smooth[0].click(function() {
   $('html, body').animate({
      scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top -smooth[1]
   }, smooth[2]);
   return false;
});