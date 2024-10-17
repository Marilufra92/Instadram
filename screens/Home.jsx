import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import Container from "../components/Container";
import { useSessionContext } from "../utils/context";
import HomePost from "../components/HomePost";


function Home() {
  const value = useSessionContext();

  

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <Container>
          <ScrollView
            horizontal={true}
            style={{
              height: "150px",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <View
              style={{
                height: "150px",
                flexDirection: "row",
              }}
            >
              <Text style={{ textWrap: "nowrap", fontSize:40 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi nobis animi eaque est, porro officia autem, doloremque
                consequuntur nesciunt tempora officiis quas, et ratione
                corporis? Corrupti cupiditate quibusdam ea doloribus!
              </Text>
            </View>
          </ScrollView>

          <View
            style={{
              gap: 50,
            }}
          >
            {value.post.map((post, i) => (
              <HomePost
                key={i}
                username={post.name}
                pfp={post.profilepic}
                imageUrl={post.image}
                description={post.description}
              />
            ))}
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
