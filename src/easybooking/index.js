import components from './components'
import Filters from './mixins/filters'

/**
 * @name Easybooking
 * @param {components, directives, translations} options
 * @author Firdavs Beknazarov
 *
 * The Easybooking installer to install the useful easybooking objects
 */

const Easybooking = function (options) {
  this.options = options
}

/**
 * @name installComponents
 * @param {instance of Vue} Vue
 * @param {... instances of components} components
 *
 * This function is capable to install the components to be auto initalizable to Vue components
 */

Easybooking.prototype.installComponents = function (Vue, components) {
  for (const name in components) {
    const component = components[name]
    Vue.component(component.name, component)
  }
}

/**
 * @name install
 * @param {instanse of Vue} Vue
 *
 * The main method to install via options
 */
Easybooking.prototype.install = function (Vue) {
  if (this.options.components) {
    this.installComponents(Vue, this.options.components)
  } else {
    this.installComponents(Vue, components)
  }
}

export default {
  install (Vue) {
    const options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    Vue.prototype.$easybooking = new Vue({
      name: 'easybooking',
      data: () => ({
        match: []
      }),
      methods: {
        Filters
      }
    })

    const easybooking = new Easybooking(options)
    easybooking.install(Vue)
  }
}
