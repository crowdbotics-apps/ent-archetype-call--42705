import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PRD Draft</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>The BA is actively writing the PRD draft</Text>
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
    backgroundColor: '#f9f9f9',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
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
export default ScreenComponent;