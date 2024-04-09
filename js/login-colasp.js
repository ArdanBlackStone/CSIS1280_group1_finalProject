$(document).ready(function() {
  // Toggle login form visibility when the login button is clicked
  $('[data-toggle="collapse"]').on('click', function(event) {
      event.stopPropagation(); // Stop event propagation
      var target = $(this).data('target');
      $(target).toggleClass('show');
  });

  // Close login form when clicking outside the form area
  $(document).on('click', function(event) {
      var loginForm = $('#loginForm');
      if (!loginForm.is(event.target) && loginForm.has(event.target).length === 0 && !$(event.target).hasClass('user_icon')) {
          loginForm.removeClass('show');
      }
  });
});