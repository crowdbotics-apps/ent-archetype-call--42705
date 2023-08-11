import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';

const ValidationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Validation</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>Validating the scope and estimation</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  description: {
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
export default ValidationScreen;