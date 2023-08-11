import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

const ClosedWonScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Closed Won</Text>
      <View style={styles.content}>
        <Text style={styles.text}>The PRD and the estimation have been accepted by the Client</Text>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  content: {
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10
  }
});
export default ClosedWonScreen;