import styles from "@/assets/styles";
import { FlatList } from "react-native";
import { Book } from "./Book";

interface FlatListProps {
  data: Book[];
  renderItem: any;
}

export const CustomFlatList: React.FC<FlatListProps> = ({
  data,
  renderItem,
}) => {
  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
