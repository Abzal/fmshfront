<template>
    <div class="wrapper" style="padding-bottom: 100px;">
        <table class="data__table">
            <tr>
                <th>
                    Нормативные документы
                </th>
                <th>
                    Дата загрузки
                </th>
                <th>
                    Действие
                </th>
            </tr>
            <tr>
                <td>
                    Обзор январь 2020 года для учителей
                </td>
                <td>
                    22.12.2022
                </td>
                <td>
                    <a type="button" class="file_download" target="_blank" href="#!">
                        Скачать
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    Обзор за март-август 2020г
                </td>
                <td>
                    22.12.2022
                </td>
                <td>
                    <a type="button" class="file_download" target="_blank" href="#!">
                        Скачать
                    </a>
                </td>
            </tr>
        </table>

        <table class="data__table">
            <tr>
                <th>
                    Нормативно-правовые акты
                </th>
                <th>
                    Дата загрузки
                </th>
                <th>
                    Действие
                </th>
            </tr>
            <tr>
                <td>
                    Модель критериального оценивания, утвержденная решением Правления АОО «Назарбаев Интеллектуальные школы» от 15 августа 2016 года (протокол №39).
                </td>
                <td>
                    22.12.2022
                </td>
                <td>
                    <a type="button" class="file_download" target="_blank" href="#!">
                        Скачать
                    </a>
                </td>
            </tr>
            <tr>
                <td>
                    Модель внешнего оценивания учебных достижений учащихся Назарбаев Интеллектуальных школ утвержденная решением Правления АОО «Назарбаев Интеллектуальные школы» от 28 августа 2014 года (протокол №40).
                </td>
                <td>
                    22.12.2022
                </td>
                <td>
                    <a type="button" class="file_download" target="_blank" href="#!">
                        Скачать
                    </a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
  name: 'DocumentsView',
}
</script>
<style scoped>
    .data__table{
        border-collapse: collapse;
        width: 100%;
    }
    .data__table td, .data__table th {
        border: 1px solid #ECECEC;
        padding: 12px;
    }
    .data__table tr:nth-child(even){background-color: #FAFAFA;}
    .data__table th {
        padding: 16px 12px 20px 13px;
        text-align: left;
        background-color: #F2F6FD;
        color: #224084;
        border-bottom: 1px solid #6E96CB;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
    }
    .data__table th, .data__table td{
        text-align: right;
        vertical-align: middle;
        width: 200px;
    }
    .data__table th:first-child{
        text-align: left;
        width: 50%;
    }
    .data__table td:first-child{
        text-align: left;
    }
    .file_download {
        font-size: 0.8em;
        margin-left: 10px;
        text-decoration: none;
        color: #ffffff;
        border: none;
        padding: 5px;
        background-color: #4CAF50;
        border-radius: 3px;
    }
</style>
