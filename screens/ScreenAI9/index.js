import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>
          The PRD has been reviewed and approved by the architects, the PRD is ready for estimation
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333'
  }
});
export default Screen;