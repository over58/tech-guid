<template>
    <div class="parent">
        parent {{person}}
        <Child></Child>
    </div>
</template>

<script>
import Child from './Child.vue'

export default {
    props: {
        
    },
    inject: ['person'],
    components: {
        Child
    }
}
</script>
<style>
.parent{
    background: yellow;
    padding: 20px;

}</style>