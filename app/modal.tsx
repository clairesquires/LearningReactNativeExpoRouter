import { Modal } from "react-native";

import { Text, View } from "@/components/Themed";
import styles from "@/assets/styles";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "@/atoms/Button";
import { CustomModal } from "@/atoms/CustomModal";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function ModalScreen() {
  const [nativeModalVisible, setNativeModalVisible] = useState(false);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      console.log("Modal: closed");
    } else if (index === 0) {
      console.log("Modal: opened");
    } else if (index === 1) {
      console.log("Modal: expanded");
    }
  }, []);

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
      <Button text="Native modal" onPress={() => setNativeModalVisible(true)} />
      <Button onPress={handlePresentModalPress} text="Gorhom modal" />
      <CustomModal
        modalRef={bottomSheetModalRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Text style={styles.modalText}>I'm a custom modal! ⚛️</Text>
      </CustomModal>
    </View>
  );
}
