const path = require('path') // eslint-disable-line
const { override, babelInclude } = require('customize-cra') // eslint-disable-line

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(
      babelInclude([
        /* transpile (converting to es5) code in src/ and shared component library */
        path.resolve('src')
      ])
    )(config, env)
  )
}
