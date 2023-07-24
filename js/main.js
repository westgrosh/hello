$(document).ready(function () {
    compute_date();
    checkMediaQuery();
});


function compute_date() {
    var today = new Date();
    var start_time = moment("2022-09-01");
    var end_time = moment(today);
    var diff_time = end_time.diff(start_time, 'month');

    $('#my_exp').html('Опыт: ' + diff_time + ' мес.');
}

function checkMediaQuery() {
    if (window.innerWidth < 480) {
        $(".projects_cards_container").hide();
    } else {
        $(".projects_cards_container").show();
    }
}

window.addEventListener('resize', checkMediaQuery);

function openSection(id){
    $("#"+id).next("div").toggle();
}