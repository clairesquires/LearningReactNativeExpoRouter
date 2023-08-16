import styles from "@/assets/styles";
import { View, Text, FlatList } from "react-native";

export type Book = {
  id: string;
  title: string;
  author: string;
};

interface FlatListProps {
  data: Book[];
}

export const BookFlatList: React.FC<FlatListProps> = ({ data }) => {
  const renderItem = ({ item }: { item: Book }) => (
    <View style={styles.listItem}>
      <Text>{item.title}</Text>
      <Text>{item.author}</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
