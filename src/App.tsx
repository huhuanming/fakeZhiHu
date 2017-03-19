import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

interface IStyleProps {
  container: ViewStyle
}

const styles = StyleSheet.create<IStyleProps>({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

