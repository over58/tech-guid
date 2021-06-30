import { createNamespace } from '../../utils'
import { reactive, onMounted, onUnmounted, Fragment, computed, onActivated, onDeactivated,
  renderSlot,
} from 'vue'
import './style.less'

const [createComponent, bem] = createNamespace('count-down')

interface Time {
  day: number
  hour: number
  minus: number
  second: number
  millsecond: number
}

const defaultTimeBlock: Time = {
  day: 0,
  hour: 0,
  minus: 0,
  second: 0,
  millsecond: 0,
}

const defaultSplitters = ['时', '分', '秒']

export default createComponent({
  name: 'CountDown',
  props: {
    terminal: {
      type: Number,
      default: Date.now() + 3600 * 1000,
    },
    prefixText: {
      type: String,
      default: '倒计时:',
    },
    showDay: {
      type: Boolean,
      default: false,
    },
    showMs: {
      type: Boolean,
      default: false,
    },
    splitters: {
      type: Array,
    },
  },
  emits: ['timeover', 'time-update'],
  setup(props, { slots, emit }) {
    console.log('=======setup========')
    const state = reactive({
      timer: 0,
      counter: 0,
      timeBlock: { ...defaultTimeBlock },
    })

    const _splitters = computed(() => {
      if (props.splitters) return props.splitters
      const temp = [...defaultSplitters]
      if (props.showDay) temp.unshift('天')
      if (props.showMs) temp.push('毫秒')
      return temp
    })

    const hourSplitter = computed(() => {
      return props.showDay ? _splitters.value[1] : _splitters.value[0]
    })
    const minusSplitter = computed(() => {
      return props.showDay ? _splitters.value[2] : _splitters.value[1]
    })
    const secondSplitter = computed(() => {
      return props.showDay ? _splitters.value[3] : _splitters.value[2]
    })

    const msSplitter = computed(() => {
      return (
        (props.showDay
          ? props.showMs
            ? _splitters.value[4]
            : _splitters.value[3]
          : props.showMs
          ? _splitters.value[3]
          : _splitters.value[2]) || ''
      )
    })

    function stop() {
      state.timer && window.clearInterval(state.timer)
    }

    function countdown() {
      let remain = props.terminal - new Date().getTime()
      if (remain <= 0) {
        stop()
        remain = 0
        state.timeBlock = {
          ...defaultTimeBlock,
        }
        emit('timeover')
        return
      }

      const temp: Time = {} as Time
      temp.day = Math.floor(remain / (24 * 60 * 60 * 1000))
      temp.hour = Math.floor((remain / (60 * 60 * 1000)) % 24)
      temp.minus = Math.floor((remain / (60 * 1000)) % 60)
      temp.second = Math.floor((remain / 1000) % 60)
      temp.millsecond = Math.floor(((remain % 1000) / 1000) * 10)
      Object.keys(temp).forEach((k) => {
        if (k !== 'millseconds') {
          // @ts-ignore
          temp[k] = String(temp[k]).padStart(2, '0')
        }
      })
      state.timeBlock = temp
      emit('time-update', state.timeBlock, Date.now())
    }

    function start() {
      state.timer = window.setInterval(() => {
        countdown()
      }, 1e2)
      countdown()
    }

    onMounted(() => {
      start()
    })
    onUnmounted(() => {
      stop()
    })
    onActivated(() => {
      start()
    })
    onDeactivated(() => {
      stop()
    })

    const renderSplitter = (splitter: string) => {
      return <div class={bem('splitter')}>{splitter}</div>
    }

    const renderDay = () => {
      return (
        props.showDay && (
          <Fragment>
            <div class={bem('day')}>{state.timeBlock.day}</div>
            {renderSplitter(String(_splitters.value[0]))}
          </Fragment>
        )
      )
    }

    const renderMs = () => {
      return (
        props.showMs && (
          <Fragment>
            <div class={bem('ms')}>{state.timeBlock.millsecond}</div>
            {renderSplitter(String(msSplitter.value))}
          </Fragment>
        )
      )
    }

    const renderTime = () => {
      return (
        <Fragment>
          {renderDay()}
          <div class={bem('day')}>{state.timeBlock.hour}</div>
          {renderSplitter(String(hourSplitter.value))}
          <div class={bem('minus')}>{state.timeBlock.minus}</div>
          {renderSplitter(String(minusSplitter.value))}
          <div class={bem('second')}>{state.timeBlock.second}</div>
          {renderSplitter(String(secondSplitter.value))}
          {renderMs()}
        </Fragment>
      )
    }

    return () => {
      console.log('=====render countdown====', Symbol('我的'))
      return (
        <div class={[bem()]}>
          <div class={bem('prefix')}></div>
          {slots.prefix?.() || props.prefixText}
          {slots.default ? renderSlot(slots, 'default', { ...state.timeBlock }) : renderTime()}
        </div>
      )
    }
  },
})

