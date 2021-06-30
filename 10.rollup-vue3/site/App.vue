<template>
    <div class="app-container">
        app
        <Button></Button>
        <CountDown></CountDown>
    </div>
</template>

<script>
import Button from '../src/components/button'
import CountDown from '../src/components/count-down'
export default{
    components:{
        Button,
        CountDown
    }
}
</script>