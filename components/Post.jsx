import { View, Image, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

function Post({ imageUrl }) {
  const postWidth = screenWidth > 800 ? screenWidth / 4 : screenWidth / 2; // 4 colonne per schermi grandi, 2 colonne per schermi piccoli
  return (
    <View
      style={{
        flexBasis: "33.33%",
        aspectRatio: "1/1",
        borderColor: "#e2f5c4",
        borderWidth: 1,
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="cover"
      />
    </View>
  );
}

export default Post;
