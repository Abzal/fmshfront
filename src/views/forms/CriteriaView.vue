<template>
  <div class="wrapper">

    <p>{{teachers}}</p>

  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import {FETCH_TEACHERS_ACTION, GET_TEACHERS_GETTER, LOGIN_ACTION} from "@/store/storeconstants";
  export default {
    data() {
      return {

      };
    },

    computed: {
      ...mapGetters('form', {
        teachers: GET_TEACHERS_GETTER
      })
    },

    created() {
      this.fetchTeachers({email:'abzal.amantay@fmsh.nis.edu.kz'}).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      ...mapActions('form', {
        fetchTeachers: FETCH_TEACHERS_ACTION
      }),
    },

  }
</script>