$(document).ready(function () {
    $("saveBtn").click(function () {
        var value = $(this)
        var time = $(this)

        localStorage.setItem (time, value);

        function updateTime() {
            // get current time
            var currentTime = moment().hours();
        
            // loop over time blocks
            $('.time-block').each(function() {
              var timeBlock = parseInt(
                $(this)
                  .split('-')[1]
              )

              if (timeBlock < currentTime) {
                $(this).addClass('past');
              } else if (timeBlock === currentTime) {
                $(this).removeClass('past');
                $(this).addClass('present');
              } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
              }
            });
          }
        
          updateTime();

          // load values from local storage
          $('#hour-9 ').val(localStorage.getItem(''));
          $('#hour-10 ').val(localStorage.getItem(''));
          $('#hour-11 ').val(localStorage.getItem(''));
          $('#hour-12 ').val(localStorage.getItem(''));
          $('#hour-13 ').val(localStorage.getItem(''));
          $('#hour-14 ').val(localStorage.getItem(''));
          $('#hour-15 ').val(localStorage.getItem(''));
          $('#hour-16 ').val(localStorage.getItem(''));
          $('#hour-17 ').val(localStorage.getItem(''));
  
  });
});
;

