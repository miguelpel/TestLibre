import { StyleSheet } from 'react-native';

import ResultsRow from '@/components/index/ResultsRow';
import { ScoreArr } from '@/components/useResultsFilters';
import { useFonts } from "expo-font";
import { View, Text } from '@/components/Themed';
import { Poppins_300Light } from "@expo-google-fonts/poppins";

type ResultTabProps = {
  lastThreeScores: ScoreArr,
};

export default function ResultTab(props: ResultTabProps) {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
      });

  return (
    <View style={styles.container}>
      <Text style={[styles.Poppins]}>RESULTATS</Text>
      {
        props.lastThreeScores[2] && <ResultsRow result={props.lastThreeScores[2]}/>
      }
      {
        props.lastThreeScores[1] && <ResultsRow result={props.lastThreeScores[1]}/>
      }
      {
        props.lastThreeScores[0] && <ResultsRow result={props.lastThreeScores[0]}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 140,
    width: '100%',
    paddingTop: 28,
  },
  Poppins: {
    fontSize: 11,
    fontFamily: "Poppins_300Light",
    color: '#666',
  }
});
