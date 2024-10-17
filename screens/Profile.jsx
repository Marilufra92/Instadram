import { ScrollView, View, Text} from "react-native";
import Container from "../components/Container";
import Post from "../components/Post";
import Header from "../components/Header";
import { useSessionContext } from "../utils/context";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-vector-icons/Ionicons";
import MyButton from "../components/Button";
import ButtonProfile from '../components/ButtonProfile';

function Profile() {

  const value= useSessionContext()

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor: '#e2f5c4'
    }}>
    <ScrollView>
      <Container>
        <Header />

        <Text>{value.name}</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start", 
          }}
        >
          <Post imageUrl="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/article/main-picture/63765c6334804635341108.jpg" />
          <Post imageUrl="https://images.theconversation.com/files/560110/original/file-20231117-29-fv986f.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5048%2C2524&q=45&auto=format&w=1356&h=668&fit=crop" />
          <Post imageUrl="https://static2.iodonna.it/wp-content/uploads/2024/01/gatto-arancione-personalita%CC%80-GettyImages-1441922298-e1705417095855.jpg?v=2264566" />
          <Post imageUrl="https://www.zoo-service.it/DM_2023/wp-content/uploads/2023/06/carattere-del-gatto.jpg" />
          <Post imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdanYP3ybKYTAZllBiOg9YLFdrwR2SSp8tXA&s" />
          <Post imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOtHfniOWZhuD_3wSgf4MQLXB97KQjOu2VA&s" />
          <Post imageUrl="https://wl-brightside.cf.tsp.li/resize/728x/jpg/295/9d3/e6417757ec9bcfe3a0d24a3ac5.jpg" />
          <Post imageUrl="https://www.rover.com/blog/wp-content/uploads/2020/04/orange-cat-orange-wall-unsplash-960x540.jpg" />
          <Post imageUrl="https://images.unsplash.com/photo-1583687534963-565854a3d6d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2luZ2VyJTIwY2F0fGVufDB8fDB8fHww" />
        </View>
        <ButtonProfile onPress={value.logout} title={'LOGOUT'}/>
      </Container>
    </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
