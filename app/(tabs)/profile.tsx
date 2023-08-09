import { Text, View } from "@/components/Themed";
import styles from "@/assets/styles";
import { AntDesign } from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <AntDesign name="user" size={62} color="black" />
    </View>
  );
}
