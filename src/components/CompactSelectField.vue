<template>
    <select v-model="mymodel" v-on:change="onChanged" name="lang" class="select__lang">
        <option v-for="item in options" :key="item" class="select__lang-item">{{item}}</option>
    </select>
</template>

<script>
export default {
  name: 'CompactSelect',
  props: {
    options: {
      type: Object
    },
    defaultValue: {

    }
  },
  data () {
    return {
      mymodel: this.defaultValue
    }
  },
  methods: {
    onChanged () {
      this.$emit('changed', this.mymodel)
    }
  }

}
</script>

<style scoped>
    .select__lang-item{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        color: #1E2865;

    }
    .select__lang {
        border: none;
        margin-right: 24px;
        background: transparent;
    }
</style>
