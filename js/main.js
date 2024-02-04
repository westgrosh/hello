$(document).ready(function () {
    compute_date();
    checkMediaQuery();
});


function compute_date() {
    var today = new Date();
    var start_time = moment("2022-09-01");
    var end_time = moment(today);
    var diff_time = end_time.diff(start_time, 'year');

    $('#my_exp').html('&emsp;"experience-years": ' + diff_time);
}


function checkMediaQuery() {
    if (window.innerWidth < 480) {

        $('.the_info').removeClass('row');
        $('.the_col1').removeClass('col-4');
        $('.the_col2').removeClass('col-8');

    } else {


        $('.the_info').addClass('row');
        $('.the_col1').addClass('col-4');
        $('.the_col2').addClass('col-8');

    }
}


window.addEventListener('resize', checkMediaQuery);

$('.part_header').click(function () {
    $(this).next('.projects_cards_container').toggle();
})
