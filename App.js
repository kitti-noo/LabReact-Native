import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Color Box</Text>
      <View style={{width: 50,height:50, backgroundColor: 'green'}}></View>
      <View style={{width: 50,height:50, backgroundColor: '#C0FFEE'}}></View>
      <View style={{width: 50,height:50, backgroundColor: '#F00'}}></View>
      <View style={{width: 50,height:50, backgroundColor: '#00F'}}></View>

      <StatusBar style="auto" hidden={false}/>
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
