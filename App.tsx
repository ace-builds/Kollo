import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Demo from './src/Demo';
import Onboard1 from './src/screens/onboarding/Onboard1';

export default function App() {

  return (
    <>
      <Onboard1/>
      <StatusBar style="light" />
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
