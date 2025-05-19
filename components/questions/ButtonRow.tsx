import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';

import { useFonts } from "expo-font";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

type RadioButtonProps = {
  option1: {
    letter: string,
    answerIndex: number,
    label: string
  },
  option2: {
    letter: string,
    present: boolean,
    answerIndex?: number,
    label?: string
  },
  currentQuestionUuid: string,
  onAnswer: Function,
};

export default function ButtonRow(props: RadioButtonProps) {
  const [fontsLoaded] = useFonts({
      Poppins_300Light,
    });

  const [option1Checked, setOption1Checked] = useState(false);
  const [option2Checked, setOption2Checked] = useState(false);

  useEffect(() => {
    setOption1Checked(false)
    setOption2Checked(false)
  }, [props.currentQuestionUuid])

  return (
    <View style={styles.container}>
        <TouchableOpacity
         onPress={() => {
            if (option1Checked) {
                setOption1Checked(false);
            } else {
                setOption1Checked(true);
            }
          props.onAnswer(props.option1.answerIndex)
          }}
          style={option1Checked ? [styles.border, styles.borderChecked] : [styles.border]}
        >
            <View
                style={option1Checked ? [styles.letterBackground, styles.letterBackgroundChecked] : [styles.letterBackground]}
            />
            <Text
                style={option1Checked ? [styles.BricolageGrotesque, styles.BricolageGrotesqueChecked] : [styles.BricolageGrotesque]}
            >{props.option1.letter}</Text>
            <Text
                style={option1Checked ? [styles.Poppins, styles.PoppinsChecked] : [styles.Poppins]}
            >{props.option1.label.toLocaleUpperCase()}</Text>
        </TouchableOpacity>
        {
            props.option2.present && props.option2.label && <TouchableOpacity
            onPress={() => {
                if (option2Checked) {
                    setOption2Checked(false);
                } else {
                    setOption2Checked(true);
                }
              props.onAnswer(props.option1.answerIndex)
             }}
             style={option2Checked ? [styles.border, styles.borderChecked] : [styles.border]}
           >
               <View
                   style={option2Checked ? [styles.letterBackground, styles.letterBackgroundChecked] : [styles.letterBackground]}
               />
               <Text
                   style={option2Checked ? [styles.BricolageGrotesque, styles.BricolageGrotesqueChecked] : [styles.BricolageGrotesque]}
               >{props.option2.letter}</Text>
               <Text
                   style={option2Checked ? [styles.Poppins, styles.PoppinsChecked] : [styles.Poppins]}
               >{props.option2.label.toLocaleUpperCase()}</Text>
           </TouchableOpacity>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    maxWidth: 400,
  },
  border: {
    marginRight: 60,
    marginBottom: 10,
    height: 41,
    flexDirection: 'row',
    padding: 5,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
  },
  borderChecked: {
    borderColor: '#e50153',
    borderWidth: 3,
  },
  letterBackground: {
    width: 28,
    height: 28,
    borderRadius: 20,
    backgroundColor: '#000',
    opacity: 0.1,
    marginRight: 5,
  },
  letterBackgroundChecked: {
    top: -1,
    left: -1,
    backgroundColor: '#e50153',
  },
  BricolageGrotesque: {
    position: 'absolute',
    top: 7,
    left: 14,
    fontSize: 12,
    fontFamily: "BricolageGrotesque_800ExtraBold",
    color: '#000',
  },
  BricolageGrotesqueChecked: {
    top: 6,
    left: 13,
    color: '#e50153',
  },
  Poppins: {
    top: 5,
    fontSize: 11,
    fontFamily: "Poppins_300Light",
    color: '#000',
  },
  PoppinsChecked: {
    top: 4,
    color: '#e50153',
  },
  checked: {
    color: '#e50153',
    borderColor: '#e50153',
  }
});