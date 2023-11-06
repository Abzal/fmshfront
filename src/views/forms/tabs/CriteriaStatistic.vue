<template>
    <v-container >
        <!--<v-autocomplete
                v-model="selectedDate"
                :items="dateArr"
                label="Выбрать дату"
                item-value="desc"
                item-text="title"
        ></v-autocomplete>-->
        {{allUsersAnswers}}
        <!--{{form}}-->

        <template v-for="(frm,idx) in form"  :key="idx + '_str_form'">
            <v-row>
                <v-col cols="8">
                    <v-textarea v-model="frm.title" rows="2"  :label="frm.tags.join(',')" readonly></v-textarea>
                </v-col>
                <v-col cols="4">

                    <v-progress-circular :rotate="360" :size="70" :width="15" :model-value="80" color="teal">
                        <template v-slot:default> 2 </template>
                    </v-progress-circular>


                </v-col>
            </v-row>
        </template>


    </v-container>
</template>

<script>
    export default {
        name: "CriteriaStatistic",
        props: ["allUsersAnswers","form"],
        data() {
            return {
                colors: ['green', 'purple', 'orange', 'indigo', 'red'],
                rating: 4.5,

            };
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>