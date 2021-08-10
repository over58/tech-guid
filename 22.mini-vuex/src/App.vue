<template>
  <div id="app">
    <p>state   num: {{$store.state.num}}</p>
    <p>getters num: {{$store.getters.num}}</p>

    <button @click="add">add </button>
    <button @click="asyncAdd">async add  </button>

      
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  created() {
    console.log(this)
  },
  methods: {
    add() {
      console.log(this.$store)
      this.$store.commit('increament')
    },
    asyncAdd() {
      this.$store.dispatch('async-increament')
    }
  }
}
</script>

<style>

</style>
