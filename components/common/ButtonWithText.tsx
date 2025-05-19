import { StyleSheet,TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';

import { useFonts } from "expo-font";
import { Poppins_300Light } from "@expo-google-fonts/poppins";
import { BricolageGrotesque_600SemiBold } from "@expo-google-fonts/bricolage-grotesque";

type ButtonProps = {
  internalText: string;
  onClick: Function;
};

export default function ButtonPlus(props: ButtonProps) {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        BricolageGrotesque_600SemiBold,
      });

    const handlePress = () => {
      console.log('press')
      props.onClick();
    }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handlePress();
        }}
      >
        <Text style={styles.BricolageGrotesque}>{props.internalText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: 230,
    height: 52,
    borderRadius: 15,
    backgroundColor: '#e50153',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BricolageGrotesque: {
    position: 'relative',
    fontSize: 17,
    fontFamily: "BricolageGrotesque_600SemiBold",
    color: '#fff',
  }
});