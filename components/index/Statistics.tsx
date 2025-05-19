import { StyleSheet } from 'react-native';

import StatisticsCard from '@/components/index/StatisticCard';
import { View } from '@/components/Themed';

type StatisticsProps = {
  bestScore: number,
  lastScore: number,
  mediumScore: number,
};

export default function Statistics(props: StatisticsProps) {

  return (
    <View style={styles.container}>
      <StatisticsCard statistic={props.bestScore} text="MEILLEUR SCORE"/>
      <StatisticsCard statistic={props.lastScore} text="DERNIER SCORE"/>
      <StatisticsCard statistic={props.mediumScore} text="SCORE MOYEN"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 140,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 28,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#def7f9'
  },
});
