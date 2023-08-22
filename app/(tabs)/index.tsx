import styles from "@/assets/styles";
import { Button } from "@/atoms/Button";

import { Text, View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <AntDesign name="home" size={62} color="black" />
      <Button text="I'm an atom"></Button>
      <Link href="/overflowing">See overflowing</Link>
      <Link href="/modal">See my modals</Link>
    </View>
  );
}
