document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for (const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for (const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});

// help buttons

$('#options_show_all').click(function () {
    $('.options').show(300);
});

$('#options_show_approve').click(function () {
    $('.options').hide(300);
    $('.options.approve').show(300);
});

$('#options_show_wait').click(function () {
    $('.options').hide(300);
    $('.options.wait').show(300);
});

$('#options_show_denied').click(function () {
    $('.options').hide(300);
    $('.options.denied').show(300);
});