import { Pressable, Text, View } from "react-native";

const buttonStyle = {
  borderRadius: "4 px",
};

function MyButton({ title, onPress }) {
  return (
    <Pressable
      style={{
        backgroundColor: "#4ba1c9",
        borderRadius: 4,
        elevation: 2,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
      }}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}

export default MyButton;
