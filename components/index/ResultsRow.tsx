import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import { Score } from '@/components/useResultsFilters';

import { useFonts } from "expo-font";
import { BricolageGrotesque_800ExtraBold, BricolageGrotesque_500Medium } from "@expo-google-fonts/bricolage-grotesque";

type ResultsRowProps = {
  result: Score,
};

export default function ResultsRow(props: ResultsRowProps) {
  const [fontsLoaded] = useFonts({
    BricolageGrotesque_800ExtraBold,
    BricolageGrotesque_500Medium,
  });

  const monthArr = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juill', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(props.result.date)
  const formattedDate: string = `${date.getDate()} ${monthArr[date.getMonth()]} ${date.getFullYear()}`


  return (
    <View style={styles.container}>
      <Text style={[styles.BricolageGrotesqueLight]}>{formattedDate}</Text>
      <Text style={[styles.BricolageGrotesque]}>{props.result.goodAnswers}/40</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#f4f4f4',
    marginBottom: 12,
  },
  BricolageGrotesque: {
    fontSize: 17,
    fontFamily: "BricolageGrotesque_800ExtraBold",
    color: '#000',
  },
  BricolageGrotesqueLight: {
    fontSize: 15,
    fontFamily: "BricolageGrotesque_500Medium",
    color: '#444',
  },
});