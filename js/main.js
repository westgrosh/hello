$(document).ready(function () {
    compute_date();
    checkMediaQuery();
});


function compute_date() {
    var today = new Date();
    var start_time = moment("2022-09-01");
    var end_time = moment(today);
    var diff_time = end_time.diff(start_time, 'year');

    $('#my_exp').html('Опыт: ' + diff_time + ' г.');
}

function checkMediaQuery() {
    if (window.innerWidth < 480) {
        $('.projects_cards_container').hide();

        $('.section_name').hide();
        $('.part_header').show();
    } else {
        $('.projects_cards_container').show();

        $('.section_name').show();
        $('.part_header').hide();
    }
}

window.addEventListener('resize', checkMediaQuery);

$('.part_header').click(function () {
    $(this).next('.projects_cards_container').toggle();
})
