import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>This is the demo of Reacts Native!</Text>
      <Button title="Go to the Components" onPress={() => navigation.navigate('Components')} />
      <Button title="Go to the List" onPress={() => navigation.navigate('List')} />
      <Button title="Go to the ImageList" onPress={() => navigation.navigate('Image')} />
      <Button title="Go to the Counter" onPress={() => navigation.navigate('Counter')} />
      <Button title="Go to the Color Screen" onPress={() => navigation.navigate('Color')} />
      <Button title="Go to the Square Screen" onPress={() => navigation.navigate('Square')} />
      <Button title="Go to the Text Screen" onPress={() => navigation.navigate('Text')} />
      <Button title="Go to the Box Screen" onPress={() => navigation.navigate('Box')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'red',
    marginLeft: 40
  }
});

export default HomeScreen;
