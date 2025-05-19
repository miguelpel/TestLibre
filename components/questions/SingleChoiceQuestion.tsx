import { Image, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import RadioButton from './RadioButton';
import VideoPlayerApp from '@/components/questions/Video';

import { useFonts } from "expo-font";
import { BricolageGrotesque_800ExtraBold } from "@expo-google-fonts/bricolage-grotesque";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

import { QuestionType } from './QuestionTypes';

type QuestionProps = {
  question: QuestionType,
  onAnswer: Function
};

export default function SingleChoiceQuestion(props: QuestionProps) {
  const [fontsLoaded] = useFonts({
    BricolageGrotesque_800ExtraBold,
    Poppins_300Light,
  });

  const onAnswer = (index: number) => {
    props.onAnswer(index)
  };

  return (
    <View style={styles.container}>
      { props.question.mediaType === 'image' && 
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: props.question.assetUrl,
              }}
            />
          </View>        
      }

      { props.question.mediaType === 'video' && 
          <View style={styles.imageContainer}>
            <VideoPlayerApp url={props.question.assetUrl} />
          </View>        
      }
      
      <Text style={[styles.BricolageGrotesque, styles.title]}>{props.question.question}:</Text>
      <RadioButton
          option1={{
            answerIndex: 0,
            label: props.question.answers[0].label
          }}
          option2={{
            answerIndex: 1,
            label: props.question.answers[1].label
          }}
          currentQuestionUuid={props.question.uuid}
          onAnswer={onAnswer}
        />
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
    minWidth: 380,
    alignSelf: 'center',
    marginBottom: 10,
  },
  image: {
    resizeMode: 'cover',
    alignSelf: 'center',
    width: 350,
    height: 250,
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
