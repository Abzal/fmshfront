<template>
    <div class="container-fluid py-5">
        <div class="container">
            <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri","sans-serif";text-align:center;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman","serif";'>2023-2024 оқу жылында &nbsp;Шымкент &nbsp;қалаcы физика-математика бағытындағы &nbsp;&ldquo;Назарбаев Зияткерлік мектептері&rdquo; жатақханасынан орын алған оқушылар тізімі</span></p>
            <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri","sans-serif";text-align:center;'><span style='font-size:19px;line-height:107%;font-family:"Times New Roman","serif";'>Список учащихся, которым предоставлено место в общежитие &laquo;Назарбаев Интеллектуальной школы физико-математического направления&raquo; г. &nbsp; Шымкент на 2023-2024 учебный год</span></p>
            <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri","sans-serif";text-align:center;'>
                <a href="https://mailnisedu-my.sharepoint.com/:b:/g/personal/abzal_amantay_fmsh_nis_edu_kz/EbBNDnCqnZxPnj45Hpg05i8BvOgPsPCxb2SW7UiqHqORCg?e=6aBbpG" style='font-size:19px;line-height:107%;font-family:"Times New Roman","serif";'>
                    Ссылка на оригинал
                </a></p>
            <div class="wrapper" style="padding-bottom: 100px;">
                <table  class="data__table">
                    <tr>
                        <th width="50px;">
                            №
                        </th>
                        <th>
                            Оқушының аты жөні
                        </th>
                        <th>
                            Сынып
                        </th>
                    </tr>
                    <tr v-for="(student,i) in array">
                        <td>
                            {{ i + 1 }}
                        </td>
                        <td>
                            {{ student.FIELD2 }}
                        </td>
                        <td>
                            {{ student.FIELD3 }}
                        </td>
                    </tr>
                </table>
            </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "results",
        data(){
            return{
                array: [
                    {
                        "FIELD1": "",
                        "FIELD2": "Қалдарбек Мерей Арзанбекқызы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жұмахан Мирас Бекжанұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Абдулла Досмұхан",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Медетбек Даурбек Бейбітұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Қарабаев Мейіржан Бауыржанұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Хабибулла Заңғар Ержанұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Айтқұл Сымбат Талғатқызы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Артықбай Бекарыс Әлімжанұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Артық Аслан Ержанұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сейдахан Әсел Азаматқызы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Рысбай Руслан Бахтиярұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Амангельдықызы Аянат",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Бухарбай Нұрбақыт Шухратұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Есіркеп Бейімбет Бекзаұлы",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Айбекқызы Дана",
                        "FIELD3": "7"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Маратқызы Гүлсезім",
                        "FIELD3": "8D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Есенбек Заңғар Маратұлы",
                        "FIELD3": "8D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Өскентай Естай Сметұлы",
                        "FIELD3": "8D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Даирбек Рамазан Алдиярұлы",
                        "FIELD3": "8D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ташполатов Аскарбек Асилбекович",
                        "FIELD3": "8А"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Бектас Нұрым Нұртасұлы",
                        "FIELD3": "8А"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Серікбай Бақдаулет Берікұлы",
                        "FIELD3": "8А"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Келесбай Дінмұхаммед Тимурұлы",
                        "FIELD3": "8В"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Қасым Думан Ерназарұлы",
                        "FIELD3": "8В"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Талғат Дулатали Ринатұлы",
                        "FIELD3": "8В"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Абдужаппар Оралхан Аманұлы",
                        "FIELD3": "8В"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ауезханов Мардон Хафизханұлы",
                        "FIELD3": "8Е"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Бекпейіс Рамазан Бақытжанұлы",
                        "FIELD3": "8С"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сағындық Иманғали Қайратұлы",
                        "FIELD3": "8С"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мұсатай Әділер Нұрболұлы",
                        "FIELD3": "8С"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жексенбек Гулайым Талғатқызы",
                        "FIELD3": "9A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Тасболатов Азамат Қайсарович",
                        "FIELD3": "9D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Бектөре Әлибек Бақытжанұлы",
                        "FIELD3": "9D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Табылған Ерен Ербосынұлы",
                        "FIELD3": "9D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Алсейт Нұрислам Бауыржанұлы",
                        "FIELD3": "9F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мухаметқалиева Меруерт Асхатқызы",
                        "FIELD3": "9F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Даирбек Бексултан Алдиярұлы",
                        "FIELD3": "9F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мусаналиев Нурмухаммад Маматраимұлы",
                        "FIELD3": "9F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Бекмағанбет Қарлығаш Маратқызы",
                        "FIELD3": "9G"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жұмахан Нұрасыл Бекжанұлы",
                        "FIELD3": "9G"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Намияш Айбол Әділханұлы",
                        "FIELD3": "9G"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Абдусаметов Дилшод Баходирұлы",
                        "FIELD3": "9G"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Омарқұл Еркебұлан  Бақытжанұлы",
                        "FIELD3": "9G"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ділдәбек  Жаңыл Алтынбекқызы",
                        "FIELD3": "9G"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Еркін Ақниет Даниярқызы",
                        "FIELD3": "9G"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Нұрмахан Гүлжан Ынтымаққызы",
                        "FIELD3": "9A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Нұрмахан Гүлжан Ынтымаққызы",
                        "FIELD3": "9A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Қылышбек Ақерке Романқызы",
                        "FIELD3": "9A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Зикриллаев Бахтияр Камолиддинович",
                        "FIELD3": "9A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мақұлбек Әмина Онласынқызы",
                        "FIELD3": "9A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Садикова Сагдиана Жасурқызы",
                        "FIELD3": "9A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ілесхан Ақзер Ерболқызы",
                        "FIELD3": "9В"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Эркин Муслим Камалиддинұлы",
                        "FIELD3": "9В"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Архабаев Жәнібек Нұрланұлы",
                        "FIELD3": "9В"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Айдарбекова Эльнура Ернарқызы",
                        "FIELD3": "9В"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Тұрарбек Арайлым Бахытжанқызы",
                        "FIELD3": "9Е"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Нұрходжа Медет Қайратұлы",
                        "FIELD3": "9Е"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Әшімхан Бейбарыс Бекзатұлы",
                        "FIELD3": "9Е"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Науатбек Ернұр Елдарұлы",
                        "FIELD3": "9С"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Оразмбет Бегайым Еркинбекқызы",
                        "FIELD3": "9С"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жексенбек Нұрайым Талғатқызы",
                        "FIELD3": "10A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Әліпбай Назерке Ерболқызы",
                        "FIELD3": "10A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Абдуашим Қанат Мұхтарұлы",
                        "FIELD3": "10A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Есмұрза Шәмші Нүркенұлы",
                        "FIELD3": "10A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ерполат Бекдәулет Полатұлы",
                        "FIELD3": "10A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Базарбек Ермек Бауыржанұлы",
                        "FIELD3": "10A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Дарибай Мағжан Ерланұлы",
                        "FIELD3": "10B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сейділә Әсел Нұрғалиқызы",
                        "FIELD3": "10B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Раимбек Үмбет Сабитұлы",
                        "FIELD3": "10B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сейдахан Елнұр Азаматұлы",
                        "FIELD3": "10C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Бек Серік  Біржанұлы",
                        "FIELD3": "10C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Аманқұл Айкен Нұржанқызы",
                        "FIELD3": "10C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Құлахмет Дінмұхаммед Сейтқасымұлы",
                        "FIELD3": "10C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Тұрсын Алиакпар Қайратұлы",
                        "FIELD3": "10D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мамуржанова Дурдона Олимжановна",
                        "FIELD3": "10D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Өмірзақ Дәулет Мұратбекұлы",
                        "FIELD3": "10E"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Нарзуллаев Кудратулла Дилмуродұлы",
                        "FIELD3": "10E"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Шамшат Зарина Байкенқызы",
                        "FIELD3": "10E"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ауезханов Асадбек Хафизханұлы",
                        "FIELD3": "10E"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Қайратов Әльфараби Елнұрұлы",
                        "FIELD3": "10E"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ашимов Әлишер Дулатұлы",
                        "FIELD3": "10E"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мерген Аянат Мадиқызы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Абдурахимова Азиза Мирзарасуловна",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сыдыков Рамазан Еркебұланұлы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Кудабаев Диас Зулхарнайнұлы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сарым Арайлым Тұрлыбекқызы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Құрбан Жанқожа Ғалымжанұлы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Набиев Рамазан Нұрланұлы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Талипов Бақытжан Бахтиярұлы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Шайхы Нұрәлем Расулханқызы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Джасенова Ұлдар Дәулетқызы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Есен Алихан Батырханұлы",
                        "FIELD3": "10F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жанәлі Аида Әлімханқызы",
                        "FIELD3": "11A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сеиткали Дәурен Мейрбекұлы",
                        "FIELD3": "11B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Юсанов Дилшодбек Кабулжанович",
                        "FIELD3": "11B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Тұрмаханов Мәди Сұлтанұлы",
                        "FIELD3": "11B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ермеков Бекет Ермекұлы",
                        "FIELD3": "11C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жолдас Әлия Оспанқызы",
                        "FIELD3": "11C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мүтәліп Шерхан Нұржауұлы",
                        "FIELD3": "11C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Базарбек Ерасыл Бауыржанұлы",
                        "FIELD3": "11C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Пердехан Әли Ерланұлы",
                        "FIELD3": "11C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Амангелдиев Асылжан Талғатұлы",
                        "FIELD3": "11D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жайлау Ернұркемеңгер Бахтиярұлы",
                        "FIELD3": "11D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Асқар Арайлым Данабекқызы",
                        "FIELD3": "11D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Асқаров Надиржан Алишериұлы",
                        "FIELD3": "11D"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мәлік Абай Сейлбекұлы",
                        "FIELD3": "11F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Кеңес Кенесары Раматқұлұлы",
                        "FIELD3": "11F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Төлеген Ерболат Нұрболатұлы",
                        "FIELD3": "11F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Фатихани Нурайм Дәулетқызы",
                        "FIELD3": "11F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жолдыбай  Тоғжан Тұрғанқызы",
                        "FIELD3": "11F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Жанәлі Аида Әлімханқызы",
                        "FIELD3": "11А"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Нурсейтова Нұрай Миятайқызы",
                        "FIELD3": "11А"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Әмзе Әбілпейіз Олжасұлы",
                        "FIELD3": "11А"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Тулегенова Адель тельманқызы",
                        "FIELD3": "11Е"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Әшірмет Сания Рахымжанқызы",
                        "FIELD3": "11Е"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Ерполат Елнұр Полатұлы",
                        "FIELD3": "11Е"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сейдрахим Аружан Жаныбекқызы",
                        "FIELD3": "12A"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мутаев Нұрсұлтан Бауыржанұлы",
                        "FIELD3": "12B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Көкен Айбек Ерболұлы",
                        "FIELD3": "12B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Қырықбай Сымбат Сырлыбекқызы",
                        "FIELD3": "12B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Рысқұлбек Нұрмұхамед Нұрғалиұлы",
                        "FIELD3": "12B"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сержанұлы   Бекжан",
                        "FIELD3": "12C"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Атаметов Алмаз  Икрамұлы",
                        "FIELD3": "12E"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Мамбеталиева Кызжибек Болатқызы",
                        "FIELD3": "12E"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Қантеміров Бақашар Укашұлы",
                        "FIELD3": "12F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Нұрлан Нұрислам Дарханұлы",
                        "FIELD3": "12F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Сырлыбаева Еркежан Керімжанқызы",
                        "FIELD3": "12F"
                    },
                    {
                        "FIELD1": "",
                        "FIELD2": "Абдураимов Азамат Акмалұлы",
                        "FIELD3": "12F"
                    }
                ]
            }
        }
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