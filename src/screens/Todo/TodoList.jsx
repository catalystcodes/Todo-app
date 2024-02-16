import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { defaultTodos } from "../../constantData";
import TodoCard from "../../components/molecules/TodoCard";
import AddIcon from "../../components/atoms/icons/AddIcon";

const TodoList = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  const onDeleteItem = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {!todos.length && (
        <Pressable
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 30,
              marginTop: 50,
              fontWeight: "700",
              opacity: 0.3,
            }}
          >
            Add your Task
          </Text>
        </Pressable>
      )}
      <FlatList
        data={todos}
        bounces={true}
        contentContainerStyle={{ rowGap: 20 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable onPress={() => {}} key={item.id}>
            <TodoCard
              {...item}
              setTodos={setTodos}
              onDelete={() => {
                onDeleteItem(item.id);
              }}
            />
          </Pressable>
        )}
      />

      <Pressable
        onPress={() => {
          setIsAdd(true);
        }}
        style={styles.floatButton}
      >
        <AddIcon />
      </Pressable>

      <Modal visible={isAdd} transparent animationType="fade">
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0. 4])",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              padding: 30,
              borderRadius: 10,
              elevation: 10,
              shadowColor: "#000",
              shadowOffset: { height: 0, width: 0 },
              shadowOpacity: 0.3,
            }}
          >
            <Pressable
              onPress={() => {
                setIsAdd(false);
              }}
              style={{
                width: 40,
                height: 40,
                marginLeft: "auto",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "600" }}>X</Text>
            </Pressable>
            <View style={styles.modalOn}>
              <TextInput
                placeholder="add title"
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputDeco}
              />
              <TextInput
                placeholder="add description"
                value={description}
                onChangeText={(description) => setDescription(description)}
                style={styles.inputDeco}
              />

              <Pressable
                style={styles.addButton}
                onPress={() => {
                  const newTodo = {
                    title,
                    description,
                    id: defaultTodos.length + 1,
                    done: false,
                  };
                  defaultTodos.push(newTodo);
                  // setTodos(currentValues => [...currentValues, newTodo] )
                  setTodos((currentValues) => currentValues.concat(newTodo));

                  setTitle("");
                  setDescription("");
                  setIsAdd(false);
                }}
              >
                <Text style={{ color: "#fff" }}>Add</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
    // <ScrollView
    //   contentContainerStyle={{ rowGap: 20 }}
    //   showsVerticalScrollIndicator={false}
    // >
    //   {defaultTodos.map((todo) => (
    //     <Pressable
    //       onPress={() => {
    //         console.log(`${todo.title} todo pressed`);
    //       }}
    //       key={todo.id}
    //     >
    //       <TodoCard {...todo} />
    //     </Pressable>
    //   ))}
    // </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
  },
  floatButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    // width: 50,
    // height: 50,
    // backgroundColor: "blue",
    // borderRadius: 100,
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputDeco: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#a4a4a4",
    borderRadius: 10,
    height: 70,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  addButton: {
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  modalOn: {
    alignItems: "center",
  },
});
