import { Modules } from '@hyext/hy-ui'

const { helper } = Modules

// 获取自定义主题的变量
// 以下是示例
const customTheme = {
  hyBrandPrimary: '#ffd800',
  hyBrandPrimaryDark: '#FFA000',
  hyBrandSuccess: '#61cb28',
  hyBrandSuccessLight: '#eaffd6',
  hyBrandSuccessDark: '#45a619',
  hyBrandWarning: '#ff8400',
  hyBrandDanger: '#f23244',
  hyBrandInfo: '#188afa'
}

const tmp = helper.useTheme(customTheme)
export default tmp
