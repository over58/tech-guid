import Vue from 'vue'

class Store {
    constructor (options) {
        this.vm = new Vue({
            data:{
                state: options.state || {}
            }
        })

        let getters = options.getters || {}
        this.getters = {}
        Object.keys(getters).forEach(getterName => {
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return getters[getterName](this.state)
                }
            })
        })

        // mutations
        let mutations = options.mutations || {}
        this.mutations = {}
        Object.keys(mutations).forEach(mutationName => {
            this.mutations[mutationName] = (arg) =>{
                mutations[mutationName](this.state, arg)
            }
        })

        // actions
        let actions = options.actions || {}
        this.actions = {}
        Object.keys(actions).forEach((actionName) => {
          this.actions[actionName] = (arg) => {
              console.log('====actions====',this)
            actions[actionName](this, arg)
          }
        })

        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)
    }

    dispatch(method, arg) {
        this.actions[method](arg)
    }

    commit(method, arg) {
        this.mutations[method](arg)
    }

    get state() {
        return this.vm.state
    }
    
}

const install = function(Vue) {
    console.log("调用install function", this)
    Vue.mixin({
        beforeCreate() {
            if(this.$options && this.$options.store) {
                this.$store = this.$options.store
            }else{
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

const Vuex = {
    install,
    Store
}

export default Vuex