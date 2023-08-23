import styles from "@/assets/styles";
import { Pressable, Text } from "react-native";

const logButtonPress = (text: string) => {
  console.log(`Button press: <${text}> has been pressed`);
};

interface ButtonProps {
  text: string;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onPress = null }) => {
  return (
    <Pressable
      onPress={async () => {
        logButtonPress(text);
        onPress && (await onPress());
      }}
      style={styles.button}
    >
      <Text style={styles.whiteText}>{text}</Text>
    </Pressable>
  );
};
