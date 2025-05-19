import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import { useFonts } from "expo-font";
import { BricolageGrotesque_800ExtraBold } from "@expo-google-fonts/bricolage-grotesque";

export default function Logo() {
  const [fontsLoaded] = useFonts({
    BricolageGrotesque_800ExtraBold,
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.BricolageGrotesque]}>leTESTLIBRE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    //backgroundColor: '#a1f7b8',
    height: 40,
    width: '100%',
    marginBottom: 30,
  },
  BricolageGrotesque: {
    fontSize: 30,
    fontFamily: "BricolageGrotesque_800ExtraBold",
    color: '#e50153',
  },
});
