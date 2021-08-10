import Vue from 'vue'
import throttle  from "../utils/throttle"

function LazyLoad (options) {
    const init = (el, binding) => {
        const val = el.getAttribute('src')
        el.setAttribute('data-src', binding.value || val)
        el.setAttribute('src', options.defaultSrc || '')
    }

    
    const listenScroll = (el)=> {
        const fn = throttle(() => {
            const viewHeight = document.documentElement.clientHeight
            const {top, bottom} = el.getBoundingClientRect()
            console.log(top, bottom, viewHeight)
            if(bottom>= 0 && top < viewHeight) {
                const src=  el.getAttribute('data-src')
                if(src) {
                    el.setAttribute('src', src)
                    el.removeAttribute('data-src')
                    window.removeEventListener('scroll',fn)
                }
            }
        }, 300)
        fn()
        window.addEventListener('scroll', fn)
    }

    const observe = (el) => {
        const observer = new IntersectionObserver((entries, self) => {
            if(entries[0].isIntersecting) {
                const src=  el.getAttribute('data-src')
                if(src) {
                    el.setAttribute('src', src)
                    el.removeAttribute('data-src')
                }

                self.unobserve(el)
            }
        })

        observer.observe(el)
    }


    return {
        init, 
        listenScroll,
        observe 
    }
}

const lz = LazyLoad({
    defaultSrc: 'https://www1.pconline.com.cn/wap/2016/dp/images/loading.gif'
})

Vue.directive('lazy', {
    bind(el, binding) {
        lz.init(el, binding)
    },
    inserted(el) {
        console.log('inserted')

        if(IntersectionObserver) {
            lz.observe(el)
        }else{
            lz.listenScroll(el)
        }
    }
})


