$(".saveBtn").click(function()
 {
var textarea = $(this).siblings("textarea").val()

console.log(textarea)
});

var now = moment();


$(window).on("load", function () {
    $("#currentDay").text(moment().format("MM/DD/YYYY"));


    $(".saveBtn").click(function () {
        var taskText = $(this).siblings(".description").val();

        var blockHour = parseInt($(this).siblings(".hour").text().substring());

        localStorage.setItem(blockHour, taskText);
    });


    $(document)
    .find(".time-block")
    .each(function () {
        var currentID = parseInt($(this).find(".hour").text().substring());

        $(this).find(".description").val(localStorage.getItem(currentID));
    });
});





