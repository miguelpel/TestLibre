import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import { useFonts } from "expo-font";
import { BricolageGrotesque_800ExtraBold } from "@expo-google-fonts/bricolage-grotesque";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

type StatisticsCardProps = {
  statistic: number,
  text: string,
};

export default function StatisticsCard(props: StatisticsCardProps) {
  const [fontsLoaded] = useFonts({
    BricolageGrotesque_800ExtraBold,
    Poppins_300Light,
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.BricolageGrotesque]}>{props.statistic}/40</Text>
      <Text style={[styles.Poppins]}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'transparent',
  },
  BricolageGrotesque: {
    fontSize: 17,
    fontFamily: "BricolageGrotesque_800ExtraBold",
    color: '#000',
    marginBottom: 12,
  },
  Poppins: {
    fontSize: 12,
    fontFamily: "Poppins_300Light",
    color: '#666',
  }
});