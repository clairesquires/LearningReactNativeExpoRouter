import { Text, View } from "@/components/Themed";
import styles from "@/assets/styles";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

interface CustomModalProps {
  modalRef: React.RefObject<BottomSheetModalMethods>;
  snapPoints: string[];
  onChange: (index: number) => void;
  children?: React.ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  modalRef,
  snapPoints,
  onChange,
  children,
}) => {
  return (
    <BottomSheetModalProvider>
      <View>
        <BottomSheetModal
          ref={modalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={onChange}
          backgroundStyle={styles.modalBackground}
        >
          {children}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};
