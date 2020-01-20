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


$(document).on("click", ".browse", function() {
  var file = $(this).parents().find(".file");
  file.trigger("click");
});
$('input[type="file"]').change(function(e) {
  var fileName = e.target.files[0].name;
  $("#file").val(fileName);

  var reader = new FileReader();
  reader.onload = function(e) {
    // get loaded data and render thumbnail.
    document.getElementById("preview").src = e.target.result;
  };
  // read the image file as a data URL.
  reader.readAsDataURL(this.files[0]);
});

$(".btn-add").click(function(){
  Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cadastro feito com sucesso!',
      showConfirmButton: false,
      timer: 2500
  })
})

$(document).ready(function () {
  $('#dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
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
















