import styles from "@/assets/styles";
import { View, Text } from "react-native";

export type Book = {
  id: string;
  title: string;
  author: string;
};

export const BookItem = (book: Book) => {
  return (
    <View style={styles.listItem}>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
    </View>
  );
};
