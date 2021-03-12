import Vue from 'vue'
import App from '../components/App'

export default (() => {
  const appName = 'app'
  if (document.getElementById(appName)) {
    return new Vue({
      el: '#' + appName,
      render: h => h(App)
    })
  }
})()
