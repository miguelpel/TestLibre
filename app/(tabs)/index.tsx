import { useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';

import storage from '../storageInit';

import Logo from '@/components/index/Logo';
import Statistics from '@/components/index/Statistics';
import ResultTab from '@/components/index/ResultsTab';
import ButtonPlus from '@/components/common/ButtonPlus';
import { View } from '@/components/Themed';
import { getBestScore, getLastScore, getMediumScore, getLastThreeScores, ScoreArr } from '@/components/useResultsFilters';

import { useFonts } from "expo-font";
import { BricolageGrotesque_800ExtraBold } from "@expo-google-fonts/bricolage-grotesque";

export default function Index() {
  const [fontsLoaded] = useFonts({
    BricolageGrotesque_800ExtraBold,
  });

  const [ bestScore, setBestScore ] = useState(0);
  const [ lastScore, setLastScore ] = useState(0);
  const [ mediumScore, setMediumScore ] = useState(0);
  const [ lastThreeScores, setLastThreeScores ] = useState<ScoreArr>([]);

  useEffect(() => {
  storage
  .getAllDataForKey('results')
  .then(results => {
    setBestScore(getBestScore(results));
    setLastScore(getLastScore(results));
    setMediumScore(getMediumScore(results));
    setLastThreeScores(getLastThreeScores(results));
  })
  .catch(err => {
    console.warn(err.message);
    switch (err.name) {
      case 'NotFoundError':
        // TODO;
        break;
      case 'ExpiredError':
        // TODO
        break;
    }
  });
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Statistics bestScore={bestScore} lastScore={lastScore} mediumScore={mediumScore}/>
      <ResultTab lastThreeScores={lastThreeScores}/>
      <ButtonPlus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 20,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
});
