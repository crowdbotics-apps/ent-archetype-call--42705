import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to our App</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Discover our amazing features:</Text>
        <View style={styles.feature}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.featureImage} />
          <Text style={styles.featureText}>Feature 1</Text>
        </View>
        <View style={styles.feature}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.featureImage} />
          <Text style={styles.featureText}>Feature 2</Text>
        </View>
        <View style={styles.feature}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.featureImage} />
          <Text style={styles.featureText}>Feature 3</Text>
        </View>
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
    paddingVertical: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  featureImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  featureText: {
    fontSize: 16
  }
});
export default ScreenComponent;