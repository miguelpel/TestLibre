import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import QuestionTimer from './QuestionTimer';

import { useFonts } from "expo-font";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

type QuestionCounterProps = {
  currentCounter: number;
};

export default function QuestionsCounter(props: QuestionCounterProps) {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
      });

  return (
    <View style={styles.container}>
      <Text style={[styles.Poppins]}>QUESTION {props.currentCounter}/40</Text>
      <QuestionTimer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    //backgroundColor: '#a1f7b8',
  },
  Poppins: {
    fontSize: 14,
    paddingTop: 4,
    width: '50%',
    fontFamily: "Poppins_300Light",
    color: '#666',
  }
});
