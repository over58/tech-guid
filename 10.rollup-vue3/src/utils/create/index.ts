import { createBEM } from './bem'
import { createComponent } from './component'

export const createNamespace = (name: string) => {
  name = 'yc-' + name
  return [createComponent(name), createBEM(name)] as const
}
