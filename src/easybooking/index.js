import components from './components'

const Easybooking = function (options) {
  this.options = options
}

Easybooking.prototype.installComponents = function (Vue, components) {
  for (const name in components) {
    const component = components[name]
    Vue.component(component.name, component)
  }
};

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
      name: 'easybooking'
    })

    const easybooking = new Easybooking(options)
    easybooking.install(Vue)
  }
}
