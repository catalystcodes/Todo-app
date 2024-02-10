import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { defaultTodos } from "../../constantData";
import Checkbox from "expo-checkbox";

const TodoCard = ({ id, title, description, done, onDelete, setTodos }) => {
  const [isChecked, setChecked] = useState(false);
  console.log({ done });

  const handleTodoState = (value) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: value,
          };
        }
        return todo;
      })
    );
  };

  return (
    <View style={styles.container} key={id}>
      <Checkbox
        value={isChecked}
        onValueChange={(value) => {
          console.log({ value });
          handleTodoState(value);
          setChecked(value);
        }}
        color={isChecked ? "blue" : undefined}
      />
      <View style={styles.subContainer}>
        <Text style={[styles.title, done && styles.isDone]}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      <Pressable onPress={onDelete}>
        <View>
          <Image source={require("../../assets/close-circle-fill.png")} />
        </View>
      </Pressable>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(128, 128, 128, 0.3)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 20,
    borderRadius: 8,
    rowGap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  isDone: {
    textDecorationLine: "line-through",
  },
  desc: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  Checkbox: {},
});
