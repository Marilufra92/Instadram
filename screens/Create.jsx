import { View, Text, Image } from "react-native";
import MyButton from "../components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Input from "../components/Input";
import { useSessionContext } from "../utils/context";

const containerStyle = {
  backgroundColor: "#e2f5c4",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
};

const imageContainerStyle = {
  marginTop: "30px",
  width: 400,
  height: 400,
  backgroundColor: "white",
};

const immagine = {
  width: "100%",
  height: "100%",
};

const bottElimina = {
  marginTop: "30px",

};

function Create() {
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState ('')
  const value = useSessionContext()

  async function openCamera() {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Dammi i permessi o non posso fare nulla");
      return;
    }

    console.log("abbiamo i permessi!");

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    
    
    const image = result.assets[0].uri;
    setImg(image);
  }

  function deleteImage() {
    setImg(null);
  }

  function publishPost(){
    const post={
      name: "Micia",
      image: img,
      description: description

    }

    value.addPost(post)
    deleteImage()


  }


  return (
    <View style={containerStyle}>
      {!img && 
      <MyButton title={"Apri fotocamera"} onPress={openCamera} />}

      {!!img &&<View>
        <View style={imageContainerStyle}>
          <Image source={{ uri: img }} style={immagine} />
        </View>
        
        <View style={bottElimina}>
          <MyButton title={"Elimina foto"} onPress={deleteImage} />
          <Input placeholder="Descrizione" onChange={setDescription} />

          <MyButton title={"Pubblica"} onPress={publishPost} />
        </View>
      </View>}
    </View>
  );
}

export default Create;
