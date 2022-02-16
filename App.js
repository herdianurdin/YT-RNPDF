import React from 'react'
import { StyleSheet, View } from 'react-native'
import Pdf from 'react-native-pdf'

const App = () => {
  // const source = {
  //   uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
  //   cache: true,
  // }

  const source = require('./thereactnativebook-sample.pdf')

  return (
    <View style={styles.container}>
      <Pdf source={source} style={styles.container} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
