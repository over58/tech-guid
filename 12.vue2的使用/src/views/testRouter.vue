<template>
  <div class="test-router">
      test router

      <button @click="jump">跳转到当前页面</button>
  </div>
</template>

<script>
export default {
    created() {
        console.log('created')
    },
    mounted() {
        console.log('mounted')
    },
    watch: {
        '$route'() {
            console.log('这里可以监听到route改变了')
        }
    },
    methods: {
        jump() {
            this.$router.push({
                name: 'test-router',
                query: {
                    t: Date.now()
                }
            })
        }
    }
}
</script>

<style>

</style>