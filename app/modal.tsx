import { StatusBar } from "expo-status-bar";
import { Modal, Platform, Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import styles from "@/assets/styles";
import { useState } from "react";
import { Button } from "@/atoms/Button";

export default function ModalScreen() {
  const [nativeModalVisible, setNativeModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All my modals</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={nativeModalVisible}
        onRequestClose={() => {
          setNativeModalVisible(!nativeModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>React Native Modal</Text>
          <Button
            text="Hide"
            onPress={() => setNativeModalVisible(!nativeModalVisible)}
          />
        </View>
      </Modal>
      <Button text="Native Modal" onPress={() => setNativeModalVisible(true)} />
    </View>
  );
}
