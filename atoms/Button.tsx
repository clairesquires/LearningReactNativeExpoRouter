import styles from "@/assets/styles";
import { Pressable, Text } from "react-native";

const logButtonPress = (text: string) => {
  console.log(`<${text}> button has been pressed`);
};

interface ButtonProps {
  text: string;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onPress = null }) => {
  return (
    <Pressable
      onPress={() => {
        logButtonPress(text);
        onPress;
      }}
      style={styles.button}
    >
      <Text style={styles.whiteText}>{text}</Text>
    </Pressable>
  );
};
