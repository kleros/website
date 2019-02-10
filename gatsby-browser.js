import ca_script from './src/js/script.js'
import ca_sketch from './src/js/sketch.js'

exports.onRouteUpdate = ({ location }) => {
  ca_script();
  ca_sketch();
}