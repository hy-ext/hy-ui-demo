import { StyleSheet } from 'react-native'
import variables from '../../customTheme'

export default StyleSheet.create({
  body: {
    backgroundColor: variables.hyFillBody,
    flex: 1
  },
  container: {
    paddingHorizontal: variables.hyHSpacingXL
  },
  row: {
    marginHorizontal: -variables.hyHSpacingXL
  },
  header: {
    paddingHorizontal: variables.hyHSpacingXL,
    paddingVertical: variables.hyVSpacingL,
    backgroundColor: variables.hyFillBody,
    fontWeight: 'bold',
    color: variables.hyGrayDark
  },
  panel: {
    paddingHorizontal: variables.hyHSpacingXL,
    paddingVertical: variables.hyVSpacingL,
    backgroundColor: '#fff'
  },

  footer: {

  }
})
