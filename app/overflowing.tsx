import styles from "@/assets/styles";
import { BookFlatList } from "@/atoms/BookFlatList";

import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function OverflowingScreen() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.overflowing}>
        Look this is just lots of nonsense and I'm definitely overflowing
      </Text>
      <Link href="/(tabs)/" style={{ margin: 20 }}>
        Back to safety!
      </Link>
    </View>
  );
}
