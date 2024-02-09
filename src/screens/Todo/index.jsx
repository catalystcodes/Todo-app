import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Todos</Text>
      <TodoList />
      {/* <Image source={require("../../assets/icon.png")} /> */}
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    paddingHorizontal: 20,
  },
  headerText: {
    textAlign: "center",
    marginBottom: 10,
  },
});
