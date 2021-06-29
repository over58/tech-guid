/**
 * Create a basic component with common options
 */
import { App, defineComponent, ComponentOptions } from 'vue'
import { camelize } from '../format/string'

export function createComponent(name: string) {
  return function (sfc: ComponentOptions) {
    sfc.name = name
    sfc.install = (app: App) => {
      app.component(name as string, sfc)
      app.component(camelize(`-${name}`), sfc)
    }

    return defineComponent(sfc)
  } as typeof defineComponent
}
