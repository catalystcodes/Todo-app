import React, { useState } from "react";
import { View, StyleSheet, Pressable, TextInput } from "react-native";

const AddTodoModalEl = () => {
  return (
    <>
      <View>
        <TextInput placeholder="Add Agenda" />
        <Pressable
          style={{ width: 20, height: 20, backgroundColor: "red" }}
        ></Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default AddTodoModalEl;
