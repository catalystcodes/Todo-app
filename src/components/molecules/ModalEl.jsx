import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";

const ModalEl = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <>
      <View>
        <Text>ModalEl</Text>
        <Pressable
          onPress={() => {
            setIsSearch(true);
          }}
        >
          <Text>open search modal</Text>
        </Pressable>
      </View>
      <Modal visible={isSearch} transparent>
        <View
          style={[
            { alignItems: "center", justifyContent: "center" },
            styles.container,
          ]}
        >
          <View
            style={{
              marginTop: 70,
              height: 80,
              width: 300,
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
          >
            <Text>Modal is open</Text>
            <Text
              onPress={() => {
                setIsSearch(false);
              }}
              style={styles.closeText}
            >
              Close Modal
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalEl;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  closeText: {
    backgroundColor: "red",
    padding: 5,
    width: "50%",
    marginLeft: 30,
    marginTop: 10,
    borderRadius: 50,
  },
});
