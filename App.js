import * as React from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [message, setMessage] = React.useState('');

  const speak = () => {
    Speech.speak(message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{width: 300, borderColor: 'gray', borderWidth: 1, fontSize: 20}}
        placeholder='Your message here...'
        onChangeText={text => setMessage(text)}
        value={message}/>
      <Button title="Listen to message" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
