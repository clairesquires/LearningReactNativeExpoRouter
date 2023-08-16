import styles from "@/assets/styles";
import { BookFlatList } from "@/atoms/BookFlatList";

import { Text, View } from "@/components/Themed";
import { BOOKS } from "@/constants/Books";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BooksScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Books</Text>
      <BookFlatList data={BOOKS} />
    </SafeAreaView>
  );
}
