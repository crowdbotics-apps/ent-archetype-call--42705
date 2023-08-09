import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const ArchitectsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PRD Review Process</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          The PRD (Product Requirements Document) review process is an important step in the development of a product. It involves architects and other stakeholders reviewing the document to ensure that all requirements are clearly defined and feasible. This process helps to identify any gaps or inconsistencies in the requirements and allows for necessary adjustments to be made before moving forward with the development.
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
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  content: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333'
  }
});
export default ArchitectsScreen;