import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { Link } from 'expo-router';

import { useFonts } from "expo-font";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

export default function ButtonPlus() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
      });

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Link  style={styles.Poppins} href="/QuestionsView">+</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#e50153',
    alignItems: 'center',
  },
  Poppins: {
    position: 'relative',
    top: -3,
    fontSize: 40,
    fontFamily: "Poppins_300Light",
    color: '#fff',
  }
});