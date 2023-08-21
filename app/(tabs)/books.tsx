import styles from "@/assets/styles";
import { BookItem } from "@/atoms/Book";
import { CustomFlatList } from "@/atoms/CustomFlatList";

import { Text, View } from "@/components/Themed";
import { BOOKS } from "@/constants/Books";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BooksScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Books</Text>
      <CustomFlatList data={BOOKS} renderItem={BookItem} />
    </SafeAreaView>
  );
}
