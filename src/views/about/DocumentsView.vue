<template>
    <div class="wrapper" style="padding-bottom: 100px;">
        <table v-for="documents in documentData" class="data__table">
            <tr>
                <th>
                    {{ $t('document.regulation') }}
                </th>
                <th>
                    {{ $t('document.date') }}
                </th>
                <th>
                    {{ $t('document.action') }}
                </th>
            </tr>
            <tr v-for="doc in documents.childs">
                <td>
                   {{ doc.name[this.$i18n.locale] }}
                </td>
                <td>
                    {{ doc.created_date[this.$i18n.locale] }}
                </td>
                <td>
                    <a type="button" class="file_download" target="_blank" :href="doc.url" download>
                        Скачать
                    </a>
                </td>
            </tr>
        </table>
    </div>

</template>

<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
    name: 'DocumentsView',
    computed:{
        ...mapGetters({
            documentData: 'document/getDocumentData',
        }),
    },
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
