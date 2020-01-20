$(function ($) {
    $(".collapsed > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".collapsed").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".collapsed").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

  $("#choose-white").click(function() {
    $('.sidebar').css({'background-color': '#fff'});
  });
  $("#choose-black").click(function() {
    $('.sidebar').css({'background-color': '#1a2035'});
  });


   
   
});

// $(function () {
    // $(".wrapper .sidebar .sidebar-list > li:first-child").addClass('active');
    // let defaultScrollTop = $(".wrapper .sidebar .sidebar-list > li:first-child").position().top + 7;
    // $(".wrapper .sidebar .moving-arrow").css({ "top": defaultScrollTop });
//     $(".wrapper .sidebar .sidebar-list > li").on('click', function () {
//         $(this).find('.navbar-drop').show();
//         let activeMenu = $(this).addClass('active');
//         let scrollTop = $(this).position().top + 7;
        
//         $(".moving-arrow").css({ "top": scrollTop });
//         $(".wrapper .sidebar .sidebar-list li").each(function () {
//             $(".wrapper .sidebar .sidebar-list li").not(activeMenu).find('.navbar-drop').hide();
//         });
//     });
// });
















