import styles from "@/assets/styles";
import { Text, View } from "@/components/Themed";
import { AntDesign } from "@expo/vector-icons";

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
    </View>
  );
}
