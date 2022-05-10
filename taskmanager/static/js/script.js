document.addEventListener('DOMContentLoaded', function() {
  // sidenav initialisation
  let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    
  // date picker initialisation
  let datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmm, yyyy",
    i18n: {okay: "select"}
  });
  });