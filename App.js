import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StatusBar as RNStatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ModalEl from "./src/components/molecules/ModalEl";
import Todo from "./src/screens/Todo";

export default function App() {
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* <ModalEl /> */}
        <Todo />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 0 : RNStatusBar.currentHeight,
  },
});
