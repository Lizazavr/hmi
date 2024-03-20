array_table = [["1 Глава", "Новелла", 559, "'Талартис'"],["Значёк со Спуртом", "Сувенир", 199, "Спуртом"]}

createTableBody(array_table);

function createTableBody(array_table) {

    let table = document.getElementById('manga-table');
    array_table.forEach(element => {
        table.innerHTML += '<tr><td class="name" onclick="trTable(\'' + element[0] + '\')">' + element[0] + "</td><td>" + element[1] + "</td><td>" + element[2] + "</td><td class='new-td'>" + element[3] + "<button class='new-button'></button></td></tr>";
    });
};


function trTable(name) {
    console.log(name);
    // Создает POST запрос для кнопки "Обновить данные об учебных планах"
    //
console.log("query");
          // Инициализировать новый запрос
          const request = new XMLHttpRequest();
          request.open('POST', '/');



          // Добавить данные для отправки с запросом
          const type = new FormData();
          type.append('type', name);

          // Послать запрос
          request.send(type);
          return false;

}


function myFunction() {
    // Объявить переменные
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("manga-table");
    tr = table.getElementsByTagName("tr");

    // Перебирайте все строки таблицы и скрывайте тех, кто не соответствует поисковому запросу
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("manga-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Сделайте цикл, который будет продолжаться до тех пор, пока
    никакого переключения не было сделано: */
    while (switching) {
        // Начните с того, что скажите: переключение не выполняется:
        switching = false;
        rows = table.rows;
        /* Цикл через все строки таблицы (за исключением
        во-первых, который содержит заголовки таблиц): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Начните с того, что не должно быть никакого переключения:
            shouldSwitch = false;
            /* Получите два элемента, которые вы хотите сравнить,
            один из текущей строки и один из следующей: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Проверьте, должны ли две строки поменяться местами,
            основанный на направлении, asc или desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // Если это так, отметьте как переключатель и разорвать цикл:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // Если это так, отметьте как переключатель и разорвать цикл:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* Если переключатель был отмечен, сделайте переключатель
            и отметьте, что переключатель был сделан: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Каждый раз, когда выполняется переключение, увеличьте это число на 1:
            switchcount++;
        } else {
            /* Если переключение не было сделано и направление "asc",
            установите направление на "desc" и снова запустите цикл while. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}


function sortTableNumber(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("manga-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Сделайте цикл, который будет продолжаться до тех пор, пока
    никакого переключения не было сделано: */
    while (switching) {
        // Начните с того, что скажите: переключение не выполняется:
        switching = false;
        rows = table.rows;
        /* Цикл через все строки таблицы (за исключением
        во-первых, который содержит заголовки таблиц): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Начните с того, что не должно быть никакого переключения:
            shouldSwitch = false;
            /* Получите два элемента, которые вы хотите сравнить,
            один из текущей строки и один из следующей: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Проверьте, должны ли две строки поменяться местами,
            основанный на направлении, asc или desc: */
            if (dir == "asc") {
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* Если переключатель был отмечен, сделайте переключатель
            и отметьте, что переключатель был сделан: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Каждый раз, когда выполняется переключение, увеличьте это число на 1:
            switchcount++;
        } else {
            /* Если переключение не было сделано и направление "asc",
            установите направление на "desc" и снова запустите цикл while. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}