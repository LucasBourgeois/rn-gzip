import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";

export default function App() {
  const [toDisplay, setToDisplay] = useState();

  useEffect(() => {
    const test = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));

      const response = await fetch('https://jsonplaceholder.typicode.com/posts/2', {
        headers: {
          'Accept-Encoding': 'gzip'
        }
      });
      const result = await response.json();
      console.log(result)
      setToDisplay(result);
    }
    test();
  },  [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>RESPONSE</Text>
      <Text>{JSON.stringify(toDisplay)}</Text>
      <StatusBar style="auto" />
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
