import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import { useFonts } from "expo-font";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

export default function QuestionTimer() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
      });

  return (
    <View style={styles.container}>
        <View style={styles.External_circle}>
        <View style={styles.Inner_circle}>
      <Text style={styles.Poppins}>16</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'none'
  },
  External_circle: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 42,
    height: 42,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#e50153',
  },
  Inner_circle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#fff',
  },
  Poppins: {
    position: 'relative',
    top: 2,
    fontSize: 14,
    fontFamily: "Poppins_300Light",
    color: '#000',
  }
});