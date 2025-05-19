import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';

import { useFonts } from "expo-font";
import { Poppins_300Light } from "@expo-google-fonts/poppins";

type RadioButtonProps = {
  option1: {
    answerIndex: number,
    label: string
  },
  option2: {
    answerIndex: number,
    label: string
  },
  currentQuestionUuid: string,
  onAnswer: Function,
};

export default function RadioButton(props: RadioButtonProps) {
  const [fontsLoaded] = useFonts({
      Poppins_300Light,
    });

  const [checked, setChecked] = useState(0);

  useEffect(() => {
    setChecked(0)
  }, [props.currentQuestionUuid])

  return (
    <View style={styles.container}>
        <TouchableOpacity
         onPress={() => {
          setChecked(1);
          props.onAnswer(props.option1.answerIndex)
          }}
          style={checked === 1 ? [styles.border, styles.borderChecked] : [styles.border]}
        >
            <View
                style={checked === 1 ? [styles.letterBackground, styles.letterBackgroundChecked] : [styles.letterBackground]}
            />
            <Text
                style={checked === 1 ? [styles.BricolageGrotesque, styles.BricolageGrotesqueChecked] : [styles.BricolageGrotesque]}
            >A</Text>
            <Text
                style={checked === 1 ? [styles.Poppins, styles.PoppinsChecked] : [styles.Poppins]}
            >{props.option1.label.toLocaleUpperCase()}</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={() => {
          setChecked(2);
          props.onAnswer(props.option2.answerIndex)
          }}
          style={checked === 2 ? [styles.border, styles.borderChecked] : [styles.border]}
        >
            <View
                style={checked === 2 ? [styles.letterBackground, styles.letterBackgroundChecked] : [styles.letterBackground]}
            />
            <Text
                style={checked === 2 ? [styles.BricolageGrotesque, styles.BricolageGrotesqueChecked] : [styles.BricolageGrotesque]}
            >B</Text>
            <Text
                style={checked === 2 ? [styles.Poppins, styles.PoppinsChecked] : [styles.Poppins]}
            >{props.option2.label.toLocaleUpperCase()}</Text>
        </TouchableOpacity>
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
    maxWidth: 450,
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