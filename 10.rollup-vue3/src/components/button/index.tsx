import { createNamespace } from '../../utils'
const [createComponent] = createNamespace('count-down')
import './style.less'
export default createComponent({
  name: 'button',
  setup() {
    return () => (<div class="btn">button</div>)
  }
})
