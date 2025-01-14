const NPM_MODULE_NAME = 'react-native-vector-icons'
const EXAMPLE_FILE = 'vectorExample.js.ejs'

/**
 * Add ourself to the project.
 */
const add = async function (context) {
  const { ignite } = context

  // install a npm module
  await ignite.addModule(NPM_MODULE_NAME, { version: '6.4.2', link: true })

  // copy the example file (if examples are turned on)
  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'Vector Icons' })
}

/**
 * Remove ourself from the project.
 */
const remove = async function (context) {
  const { ignite } = context

  // remove the npm module
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  // remove the component example
  await ignite.removePluginComponentExample(EXAMPLE_FILE)
}

/**
 * Expose an ignite plugin interface.
 */
module.exports = { add, remove }
