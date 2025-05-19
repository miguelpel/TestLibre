import { useEffect, useState } from 'react';

import { Image, StyleSheet } from 'react-native';
import { useRouter, Link } from 'expo-router';

import storage from '../storageInit';

import { Text, View } from '@/components/Themed';

import { getLastScore } from '@/components/useResultsFilters';

import ButtonWithText from '@/components/common/ButtonWithText';

import { useFonts } from "expo-font";
import { BricolageGrotesque_800ExtraBold, BricolageGrotesque_400Regular } from "@expo-google-fonts/bricolage-grotesque";

type Result = {
  goodAnswers: number,
  date: Date
}

export default function ResultView() {
  const [fontsLoaded] = useFonts({
    BricolageGrotesque_800ExtraBold,
    BricolageGrotesque_400Regular
  });

  const router = useRouter();

  const [score, setScore] = useState(0);

  useEffect(() => {

  storage
  .getAllDataForKey('results')
  .then(results => {
    const lastScore = getLastScore(results);
    console.log("LastScore: ", lastScore);
    setScore(lastScore);
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

  const handleClick = () => {
    //
    router.push('/QuestionsView');
  }

  return (
    <View style={styles.container}>
      <View style={styles.ResultContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('@/assets/images/shape.png')}
        />
        <View style={styles.ResultContainerText}>
          <Text style={[styles.BricolageGrotesqueBold]}>{score.toString().length < 2 ? `0${score.toString()}` : score.toString()}</Text><Text style={[styles.BricolageGrotesqueLight]}>/40</Text>
        </View>
        <Text style={[styles.BricolageGrotesqueBold, styles.TextMargin]}>Bravo!</Text>
      </View>
      <ButtonWithText internalText="Retour aux résultats" onClick={handleClick}/>
      <View style={styles.button}>
        <Link style={styles.BricolageGrotesqueMedium} href="/">Retour aux résultats</Link>
      </View>
      <ButtonWithText internalText="Nouvelle Série" onClick={handleClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 150,
    flex: 1,
    alignItems: 'center',
  },
  ResultContainer: {
    alignItems: 'center',
  },
  ResultContainerText: {
    position: 'absolute',
    top: 52,
    left: 36,
    flexDirection: 'row',
    backgroundColor: '#c4e8d1'
  },
  button: {
    position: 'absolute',
    bottom: 70,
    width: 230,
    height: 52,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BricolageGrotesqueMedium: {
    fontSize: 17,
    fontFamily: "BricolageGrotesque_600SemiBold",
  },
  BricolageGrotesqueBold: {
    fontSize: 25,
    fontFamily: "BricolageGrotesque_800ExtraBold",
    color: '#000',
  },
  BricolageGrotesqueLight: {
    fontSize: 25,
    fontFamily: "BricolageGrotesque_400Regular",
    color: '#000',
  },
  TextMargin: {
    marginTop: 20
  },
  Result: {
    fontSize: 30,
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
});
