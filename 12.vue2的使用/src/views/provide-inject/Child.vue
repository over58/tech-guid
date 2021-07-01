<template>
    <div class="child">
        child
        <p>{{person}}</p>
    </div>
</template>

<script>
export default {
    inject: ['person'],
}
</script>

<style scoped>
.child{
    background: red;
    padding: 20px;
}
</style>