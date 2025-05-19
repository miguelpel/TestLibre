import { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import storage from '../storageInit';

import QuestionsCounter from '@/components/questions/QuestionsCounter';
import Question from '@/components/questions/Question';
import ButtonWithText from '@/components/common/ButtonWithText';
import { View } from '@/components/Themed';

import { getQuestions } from '@/components/useQuestionsPicker';

import { QuestionType } from '@/components/questions/QuestionTypes';

type questions = QuestionType[] | undefined;



export default function QuestionsView() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [questions, setQuestions] = useState<questions>(undefined);

  const [answers, setAnswers] = useState<number[]>([]);

  const [rightAnswers, setRightAnswer] = useState<number>(0);

  const router = useRouter();

  const handleClick = () => {
    if (questions && questions.length) {
      if (currentQuestionIndex < 39) {
        checkAnswers();
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        console.log("rightAnswers: ", rightAnswers);
        setCurrentQuestionIndex(0); // might be better in a OnUnmount ??? since it seems that the component is not unmounted actually
        setAllQuestions(); // Warning, it is not supposed to work like that as a loop!

        const dateNow = Date.now();
        storage.save({
          key: 'results',
          id: String(dateNow),
          data: {
            date: dateNow,
            goodAnswers: rightAnswers,
          },
        });
        
        router.push('/ResultView');
      }
      
    }

  };

  const checkAnswers = () => {
    if (questions) {
      let errors = 0;
      answers.forEach((answerIndex) => {
        if (! questions[currentQuestionIndex].answers[answerIndex].correct) {
          errors = errors + 1;
        }
      })
      questions[currentQuestionIndex].answers.forEach((answerObj, currentIndex) => {
        if (answerObj.correct && ! (answers.includes(currentIndex))) {
          errors = errors + 1;
        }
      })
      if (errors === 0) {
        setRightAnswer(rightAnswers + 1);
      }
    }
    setAnswers([]);
  };

  const setAllQuestions = () => {
    const _questions: QuestionType[] = getQuestions();
    setQuestions(_questions);
  }

  const onAnswer = (answerIndex: number) => {
    if (questions) {
      if (questions[currentQuestionIndex].type === 'singleChoice') {
        setAnswers([answerIndex]);
      } else if (questions[currentQuestionIndex].type === 'singleChoice2') {
        if (answerIndex <= 1) {
          let newAnswerArr = [...answers];
          newAnswerArr[0] = answerIndex;
          setAnswers(newAnswerArr);
        } else {
          let newAnswerArr = [...answers];
          newAnswerArr[1] = answerIndex;
          setAnswers(newAnswerArr);
        }
      } else {
        let newAnswerArr = [...answers];
        if ( ! newAnswerArr.includes(answerIndex)) {
          newAnswerArr.push(answerIndex)
        }
        setAnswers(newAnswerArr);
      }
    }
  }

  useEffect(() => {
    setAllQuestions();
  }, []);

  return (
    <View style={styles.container}>
      <QuestionsCounter currentCounter={currentQuestionIndex + 1}/>
      {questions !== undefined &&
        <Question question={questions[currentQuestionIndex]} onAnswer={onAnswer}/>
      }
      <ButtonWithText internalText="Valider" onClick={handleClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 40,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
});
