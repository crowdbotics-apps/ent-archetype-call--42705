import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Screen Title</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nunc id aliquet tincidunt, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer Text</Text>
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
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center'
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ScreenComponent;