<template>
    <div class="container">
        {{person}}
        <Parent></Parent>
        <button @click="changePerson">changePerson</button>
        <button @click="changePersonAddress">changePersonAddress</button>
    </div>
</template>
<script>
import Parent from './Parent.vue'
export default{
    components: {
        Parent
    },
    provide () {
        return {
            person: this.person
        }
    },
    data () {
        return {
            person :{
                name: "Tom",
                sex: 'man'
            }
        }
    },
    created() {
        console.log("grand instance",this)
    },
    methods:{
        changePerson(){
            this.person.name  = 'new name'
            this.person.sex = 'woman'
            this.person.address = {
                area: 'AAA'
            }
        },
        changePersonAddress() {
            this.person.address.area = 'aaa'
            // delete this.person.name

            console.log(this.person)
        }
    }
}
</script>

<style>
.container{
    background: grey;
    padding: 20px;
}
</style>