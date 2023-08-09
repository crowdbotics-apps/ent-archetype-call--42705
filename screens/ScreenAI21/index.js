import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

const MeetingScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Project Meeting</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          The AE and the Client have scheduled a meeting to go over the project.
          The main objective of the call is to gather information about the
          project in order for the AE to create the order form for the BA to
          prepare for the Scoping (KO) call.
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555'
  }
});
export default MeetingScreen;