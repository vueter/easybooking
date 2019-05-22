/**
 * @author Firdavs Beknazarov
 * @see https://github.com/tensor2flow
 * @example
 *      import Easybooking from 'easybooking'
 *      Vue.use(Easybooking, {
 *          ... // come your options
 *      })
 */

export default {
  install (Vue) {
    const options = arguments.length > 0 && arguments[0] !== undefined ? arguments[1] : {}
    Vue.prototype.$easybooking = new Vue({

    })

    if (options.components) {
      for (const component of options.components) {
        Vue.component(component.name, component)
      }
    }
  }
}
