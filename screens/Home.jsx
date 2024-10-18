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

const styles = StyleSheet.create({
  imageCircle: {
    width: 100, // Imposta la larghezza dell'immagine
    height: 100, // Imposta l'altezza dell'immagine
    borderRadius: 50, // Per renderla circolare

    borderColor: '#de45b8',
    borderWidth: 4, // Larghezza del bordo
    marginVertical: 15,
    
  }, 
});

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
                gap: 10,
                borderColor: '#f542c5',
                
                
              }}
            >
              <Image
                source={{
                  uri: "https://baffiecode.net/wp-content/uploads/2021/03/gatto-europeo01-736x368.jpg",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://clinicalaveterinaria.it/wp-content/uploads/2022/02/sua-maesta-gatto.jpg",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://www.ilverdemondo.it/public/blog/original/gatti-giganti-le-razze-feline-domestiche-piu-grandi-000-it.jpg",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://magazine.arcaplanet.it/wp-content/uploads/2022/06/blog-consigli-gatto-certosino.png",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://culturafelina.com/wp-content/uploads/2017/10/gatto-bianco-500x250.jpg",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://www.nationalgeographic.it/upload/ngi-hero/cover-1699427621834-Siamesi.jpeg",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://www.focusjunior.it/content/uploads/2018/08/gatto.jpg",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://wips.plug.it/cips/paginegialle.it/magazine/cms/2021/05/gattini-tigrati.jpg?w=744&h=418&a=c",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://www.coopalleanza3-0.it/dam/relation/news/804_mostra_gatti.jpg",
                }}
                style={styles.imageCircle}
              />
              <Image
                source={{
                  uri: "https://www.focus.it/images/2022/02/15/gatti-1106698160-orig.jpeg",
                }}
                style={styles.imageCircle}
              />
            </View>
            
          </ScrollView>

          <View
            style={{
              gap: 50,
            }}
          >
            {value.posts.map((post, i) => (
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
