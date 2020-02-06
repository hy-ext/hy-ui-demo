import { UI } from '@hyext/hy-ui'

const { useTheme } = UI

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

const tmp = useTheme(customTheme)
export default tmp
