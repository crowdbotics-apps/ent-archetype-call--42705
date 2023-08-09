import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Architects Feedback</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.feedbackText}>
          The architects have provided feedback on the PRD and requested updates
          according to their review. Please make the necessary changes and
          ensure that the updated PRD aligns with their recommendations.
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
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16
  },
  feedbackText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333'
  }
});
export default ScreenComponent;