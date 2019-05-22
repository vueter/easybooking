import EasybookingToolbar from './components/EasybookingToolbar'
import EasybookingSearchBoard from './components/EasybookingSearchBoard'
import EasybookingDoubleCombobox from './components/EasybookingDoubleCombobox'
import EasybookingDoubleDate from './components/EasybookingDoubleDate'
import EasybookingPassangerBox from './components/EasybookingPassangerBox'

/**
 * @author Firdavs Beknazarov
 * @see https://github.com/tensor2flow
 * @example
 *      import Easybooking from 'easybooking'
 *      Vue.use(Easybooking, {
 *          ... // come your options
 *      })
 */
const components = [EasybookingToolbar, EasybookingSearchBoard, EasybookingDoubleCombobox, EasybookingDoubleDate, EasybookingPassangerBox]
export default {
  install (Vue) {
    const options = arguments.length > 1 && arguments[0] !== undefined ? arguments[1] : {}

    Vue.prototype.$easybooking = new Vue({

    })

    if (options.components !== undefined) {
      for (const component of options.components) {
        Vue.component(component.name, component)
      }
    } else {
      for (const component of components) {
        Vue.component(component.name, component)
      }
    }
  }
}
