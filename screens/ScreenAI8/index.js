import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

const EstimationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Estimation</Text>
      <Text style={styles.description}>
        The PRD has been reviewed and approved by the architects, the PRD is ready for estimation
      </Text>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 32,
    marginBottom: 32
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
});
export default EstimationScreen;