<template>
  <div class="wrapper">
    <span v-if="error" style="color: red;">Ошибка входа, попробуйте позднее</span>
    <v-container>
      <v-form @submit.prevent="login">
        <v-text-field v-model="username" :label="$t('corp_email')"></v-text-field>
        <v-text-field v-model="password" :label="$t('password')" type="password"></v-text-field>
        <v-btn type="submit" color="success">{{$t('signin')}}</v-btn>
      </v-form>
    </v-container>

  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {LOGIN_ACTION} from "@/store/storeconstants";
  export default {
    data() {
      return {
        username: '',
        password: '',
        error: false
      };
    },

    methods: {
      ...mapActions('auth', {
        loginAction: LOGIN_ACTION
      }),
      login() {
        this.loginAction({email: this.username,password: this.password}).then(res => {
          this.$router.push({name: 'cabinet'});
        }).catch(err => {
          this.error = true;
        })
      },
    },

  }
</script>