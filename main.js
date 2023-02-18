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

//

//скрипт для фильтрации
//считываем таблицу в переменную
var table = document.querySelector('.options_table');
let colIndex = -1;

//устанавливаем функцию обработчик на клик по этой таблице
table.addEventListener('click', (e) => {
    var el = e.target;
    //console.log(el);
    if (el.nodeName !== 'TH') return;

    var index = el.cellIndex;
    var type = el.getAttribute('data-type');

    sortTable(index, type, colIndex == index);

    colIndex = (colIndex == index) ? -1 : index;

});

//функция сортировки таблицы
var sortTable = function (index, type, isSorted) {
    //получаем тело таблицы
    var tbody = table.querySelector('tbody');
    //пишем свою функцию сравнения, по которой будем сортировать
    var compare = function (row1, row2) {
        var rowData1 = row1.cells[index].innerHTML;
        var rowData2 = row2.cells[index].innerHTML;
        //сравниваем data-type
        switch (type) {
            case 'integer':
                return rowData1 - rowData2;
                break;
            case 'date':
                var date1 = rowData1.split(' ');
                date1 = date1[0].split('.').reverse().join('-') + "T" + date1[1] + ":00";
                var date2 = rowData2.split(' ');
                date2 = date2[0].split('.').reverse().join('-') + "T" + date2[1] + ":00";
                return new Date(date1) - new Date(date2);
                break;
            case 'text':
                if (rowData1 < rowData2) return -1;
                else if (rowData1 > rowData2) return 1;
                return 0;
                break;
        }
    }

    let rows = [].slice.call(tbody.rows);
    rows.sort(compare);

    if (isSorted) rows.reverse();

    table.removeChild(tbody);

    for (let i = 0; i < rows.length; i++) {
        tbody.appendChild(rows[i]);
    }

    table.appendChild(tbody);


}