# work-day-scheduler

## Description 

This application was made to make planning easier on an individuals work day.  With this planner you can keep track of your day-to-day activities and workload.  

## Usage 

As soon as you load the page you should see the top heading which will always display the current day, date, and year.  Below the solid black line you will see 9 boxes that you are able to type in, this is where you will type your activities.  If the box is grey then that hour has already past.  If the box is red that means it is the current hour, and if the box is green that means that hour has yet to come.  Once you have typed whatever information you'd like within the text box provided you can then click the save icon on the right hand side.  If done correctly a message stating "Appointment Added to localStorage ✔️" should pop up at the top of the page.  This will then save all information that was typed into the boxes. 

Access the planner from this link: https://gstroup11.github.io/work-day-scheduler/

### Demonstration:

![Page Demonstration](https://raw.githubusercontent.com/gstroup11/work-day-scheduler/main/images/Work-Day-Scheduler.gif)

## Code Reference 

### HTML References'''
    
Line 27 from BootcampSpot 

    <header class="p-5 mb-4 border-5 border-bottom border-dark text-center">
    
Lines 35-37 from BootcampSpot 

    <section class="text-center notification" id="notify">
        Appointment Added to <code>localStorage</code> ✔️
    </section>
    
### Javascript References'''

Line 4 Based off the work of https://api.jquery.com/click/:

    $('.saveBtn').on('click', function () {

Line 6 based off the work of https://api.jquery.com/siblings/:

    var textValue = $(this).siblings('.description').val();

Line 7 based off the work of https://api.jquery.com/parent/:

    var time = $(this).parent().attr('id');

Lines 12-19 based off the work of https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/#:~:text=The%20JavaScript%20setTimeout()%20method,to%20pass%20one%20thousand%20milliseconds%20.

    function showSave(){
      $('.notification').addClass('show');
      setTimeout(function () {
      $('.notification').removeClass('show');
     }, 3000);
    }

    showSave();

Line 25 based off the work of https://day.js.org/docs/en/get-set/hour:

    var currentHour = dayjs().hour();
    
Line 29 from Xpert Learning Assistant:

    var blockTime = parseInt($(this).attr('id').split('-')[1]);
    
Line 32 based off the work of https://www.w3schools.com/jquery/html_addclass.asp#:~:text=The%20addClass()%20method%20adds,the%20class%20names%20with%20spaces.

    $(this).addClass('past');
    
### Starter Code 

Starter code repo: https://github.com/coding-boot-camp/crispy-octo-meme
    
## License 

Refer to the license in the repo.

