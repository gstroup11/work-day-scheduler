$(document).ready(function () {
  $('.saveBtn').on('click', function () {

    var textValue = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, textValue);
  })

  function hourChecker() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function (){
      var blockTime = parseInt($(this).attr('id').split('-')[1]);

      if (blockTime < currentHour) {
        $(this).addClass('past');
      } else if (blockTime === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass ('future');
      }
    });
  }

  hourChecker();

  setInterval(hourChecker, 1000);

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //