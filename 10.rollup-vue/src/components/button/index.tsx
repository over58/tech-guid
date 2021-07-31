import './index.less';
import { createNamespace } from '../../utils'
const [createComponent] = createNamespace('count-down')
export default createComponent({
  name: 'button',
  setup() {
    return <div class="aa">button</div>
  },
})
