import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Print from 'expo-print';
import { Button } from 'react-native';


export default function App() {
  const [selectedPrinter, setselectedPrinter] = useState()
  const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body style="text-align: center;">
      <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
        Hello Expo!
      </h1>
      <img
        src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
        style="width: 90vw;" />
    </body>
  </html>
  `;
  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  }
  return (
    // <Provider store={store}>
    // <SafeAreaProvider>
    //   <NavigationContainer>
    //     {/* <DraweNavigator/> */}
    //     <MainStackNavigator/>
    //   </NavigationContainer>
    // </SafeAreaProvider>
    // </Provider>
    <>
      <Text>Potato</Text>
      <Button title='print' onPress={print}>Print file</Button>
    </>

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
