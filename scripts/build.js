const buider = require('@hyext/builder-beyond')
const path = require('path')

const buidOpts = {
  mode: 'production',
  config: {
    buildConfig: {
      H5: [
        {
          entry: 'index.js',
          extType: 'web_video_com',
          platform: 'web'
        }
      ]
    }
  },
  inputPath: path.resolve(__dirname, '../'),
  outputPath: path.resolve(__dirname, '../website'),
  publicPath: '/web/hy-ui-doc/'
}

buider.build(buidOpts)
