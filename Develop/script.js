$(".saveBtn").click(function()
 {
var textarea = $(this).siblings("textarea").val()

console.log(textarea)
});

var now = moment();

//
$(window).on("load", function () {
    $("#currentDay").text(moment().format("MM/DD/YYYY"));


    $(".saveBtn").click(function () {
        var taskText = $(this).siblings(".description").val();

        var blockHour = parseInt($(this).siblings(".hour").textarea().substring());

        localStorage.setItem(blockHour, taskText);
    });


    $(document)
    .find(".time-block")
    .each(function () {
        var currentID = parseInt($(this).find(".hour").text().substring());

        $(this).find(".description").val(localStorage.getItem(currentID));
    });
});

//checks time and time block id
// function checkTime() {
//     var currentHourcurrentTime.hours();
//     var timeBlock=$(".time-block");

//     for(var i=0;i<timeBlock.length;i++) {
//         var block=timeBlock[i];
//         if(parseInt(block.id.split("-")[0])---currentHour) {
//             $(block).addClass("past");
//           } else if (parseInt(block.id.split("-")[0])---currentHour) {
//             $(block).removeClass("past");
//             $(block).addClass("present");
//           } else {
//             $(block).removeClass("past");
//             $(block).removeClass("present");
//             $(block).addClass("future");
//         }
//     }
// }

// $('time').each(function(i, e) {
//     var time = moment($(e).attr('datetime'));
  
//     $(e).html('<span>' + time.calendar() + '</span>');

//     console.log(time);
//   })