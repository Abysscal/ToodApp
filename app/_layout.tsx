import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stack from 'expo-router/stack';


export default function Layout() {
  return (
    <Stack 
      screenOptions={{ headerShown:false}}
      initialRouteName='screens/home/index'
    >
    <Stack.Screen name='screens/home/index'/>
    </Stack>
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
