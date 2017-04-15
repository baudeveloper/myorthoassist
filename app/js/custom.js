$(document).ready(function() {

  /*
    Table of content:
    1. Profile page
    2. Modal Windows
    3. Lightbox
  */

  // 1. Profile page
  // Toggle password
  $('.toggle_password input').click(function() {
    if ($('#set_password').attr('type') == 'password') {
      $('#set_password').attr('type', 'text');
    } else {
      $('#set_password').attr('type', 'password');
    }
  });

  // 2. Modal Windows
  $('.select-date').datetimepicker({
    defaultDate: '04/04/2017',
    format: 'DD/MM/YYYY',
    icons: {
      time: 'fa fa-clock-o',
      date: 'fa fa-calendar',
      up: 'fa fa-arrow-up',
      down: 'fa fa-arrow-down'
    }
  });

  // 3. Lightbox
  $('.swipebox').swipebox();

});
