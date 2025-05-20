import { Image, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import RadioButton from './RadioButton';
import VideoPlayerApp from '@/components/questions/Video';

import { useFonts } from "expo-font";
import { BricolageGrotesque_800ExtraBold } from "@expo-google-fonts/bricolage-grotesque";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

import { QuestionType } from './QuestionTypes';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import SingleChoice2Question from './SingleChoice2Question';
import MultiChoiceQuestion from './MultiChoiceQuestion';

type QuestionProps = {
  question: QuestionType,
  onAnswer: Function
};

export default function Question(props: QuestionProps) {
  const [fontsLoaded] = useFonts({
    BricolageGrotesque_800ExtraBold,
    Poppins_300Light,
  });

  const onAnswer = (index: number) => {
    props.onAnswer(index)
  };

  return (
    <View style={styles.container}>
      { props.question.type === 'singleChoice' && 
        <SingleChoiceQuestion question={props.question} onAnswer={onAnswer} />
      }
      { props.question.type === 'singleChoice2' && 
        <SingleChoice2Question question={props.question} onAnswer={onAnswer} />
      }
      { props.question.type === 'multiChoice' && 
        <MultiChoiceQuestion question={props.question} onAnswer={onAnswer} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  imageContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
    marginBottom: 10,
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 200,
  },
  title: {
    marginBottom: 20,
  },
  answer: {
    marginBottom: 10,
  },
  BricolageGrotesque: {
    fontSize: 17,
    fontFamily: "BricolageGrotesque_800ExtraBold",
    color: '#000',
  },
  Poppins: {
    fontSize: 11,
    fontFamily: "Poppins_300Light",
    color: '#000',
  }
});
