import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'react-native-unimodules';

export default function App() {
  useEffect(() => {
    console.log(Constants.systemFonts);
    return () => {};
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
