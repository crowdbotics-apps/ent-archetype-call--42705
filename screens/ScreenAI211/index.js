import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ContractingScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contracting</Text>
      <View style={styles.content}>
        {
        /* Placeholder content */
      }
        <Text style={styles.subtitle}>Welcome to our Contracting Screen!</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec mauris tincidunt, id aliquam nunc tincidunt. Nulla facilisi.
          Sed auctor, nunc id lacinia tincidunt, nisl nunc tincidunt nunc, nec
          aliquet nunc nunc id nunc. Sed auctor, nunc id lacinia tincidunt,
          nisl nunc tincidunt nunc, nec aliquet nunc nunc id nunc.
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec mauris tincidunt, id aliquam nunc tincidunt. Nulla facilisi.
          Sed auctor, nunc id lacinia tincidunt, nisl nunc tincidunt nunc, nec
          aliquet nunc nunc id nunc. Sed auctor, nunc id lacinia tincidunt,
          nisl nunc tincidunt nunc, nec aliquet nunc nunc id nunc.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center'
  }
});
export default ContractingScreen;