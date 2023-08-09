import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ScopingScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Scoping Process</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          The Business Analyst is making preparations to start the scoping process.
        </Text>
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666'
  }
});
export default ScopingScreen;