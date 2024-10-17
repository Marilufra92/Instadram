import React from 'react';
import { Pressable, Text, View } from "react-native";

function onPress() {
    console.log('ao');
}

function ButtonProfile({ title, onPress }) {
  return (

    <Pressable
      style={{
        marginTop:20,
        backgroundColor: "#d984ce",
        borderRadius: 4,
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginBottom: 15,
      }}
      onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>

  );
}

export default ButtonProfile;
