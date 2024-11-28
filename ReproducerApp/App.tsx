/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import { multiply /* onValueChanged*/ } from 'react-native-calcturbo';
//import { useEffect, useRef, useState } from 'react';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [result, setResult] = useState<number | null>(null);
  //const listenerSubscription = useRef<null | EventSubscription>(null);

  /*
  useEffect(() => {
    listenerSubscription.current = onValueChanged((data: number) => { 
      Alert.alert(`OnValueChanged fired with: ${data}`);
    });

    return () => {
      listenerSubscription.current?.remove();
      listenerSubscription.current = null;
    }
  }, [])
  */

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Please run on Android API 26">
          </Section>
          <View style={styles.view}>
            <Pressable onPress={() => {
              const v = multiply(2, 21);
              setResult(v);
            }}><Text style={styles.button}>Multiply 2 x 21 !</Text></Pressable>
            <Text style={styles.text}>Result: {result}</Text>
            <Pressable onPress={() => {
              setResult(null);
            }} ><Text style={styles.button}>Clear</Text></Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  view: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
