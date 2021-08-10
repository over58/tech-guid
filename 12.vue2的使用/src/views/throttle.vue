<template>
  <div>
      <p>{{count}}</p>
      <p>{{count1}}</p>
      <button @click="clickUnion">点击</button></div>
</template>

<script>
import throttle from '../utils/throttle.js'
export default {
    data() {
        return {
            count: 0,
            count1: 0
        }
    },
    computed: {
        throttledHandleClick() {
            return throttle(this.handleClick2, 500)
        }
    },
    methods: {
        handleClick()  {
            this.count++
        },
        handleClick2()  {
            this.count1++
        },
        clickUnion () {
            this.handleClick()
            this.throttledHandleClick()
        }
    }
}
</script>

<style>

</style>