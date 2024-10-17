import { Image, Text, View, StyleSheet } from "react-native";
import ButtonProfile from "../components/ButtonProfile";

function Header (){
    return(

        
        <View>
          {/* View principale che racchiude tutto */}
          <View style={styles.header}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
              }} 
              style={styles.image}
            />

            <View style={styles.textContainer}>
              {/* Campo 1 */}
              <View style={styles.textFieldContainer}>
                <Text style={styles.number}>15</Text>
                <Text style={styles.textField}>post</Text>
              </View>

              {/* Campo 2 */}
              <View style={styles.textFieldContainer}>
                <Text style={styles.number}>2 MLN</Text>
                <Text style={styles.textField}>follower</Text>
              </View>

              {/* Campo 3 */}
              <View style={styles.textFieldContainer}>
                <Text style={styles.number}>56</Text>
                <Text style={styles.textField}>seguiti</Text>
              </View>
            </View>
          </View>
          {/* Campo di testo per nome profilo e descrizione */}
          <View style={styles.profileInputContainer}>
            <Text style={styles.nickname}>Micia Lardosella</Text>

            <Text style={styles.profill}>🐈 Sono una gattina arancione 🧡</Text>
          </View>
          {/* Bottoni orizzontali */}
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyleP}>
              <ButtonProfile
                title="Modifica"
                onPress={() => alert("aggiungi al profilo...")}
              />
            </View>
            <View style={styles.buttonStyleP}>
              <ButtonProfile
                title="Condividi"
                onPress={() => alert("condividi profilo con...")}
              />
            </View>


            
          </View>

        </View>

    )



}


const styles = StyleSheet.create({
    header: {
      flexDirection: "row", // Disposizione orizzontale tra immagine e testo
      alignItems: "center", // Allineamento verticale centrato
      padding: 10, // Padding attorno alla View
      backgroundColor: "#e2f5c4", // Colore verdino
    },
    image: {
      width: 100, // Larghezza dell'immagine
      height: 100, // Altezza dell'immagine
      borderRadius: 50, // Per immagine circolare (opzionale)
      marginRight: 40, // Spazio tra immagine e testo
      borderWidth: 7, // Spessore del contorno
      borderColor: "#de45b8", // Colore del contorno
    },
    textContainer: {
      flexDirection: "row", // Disposizione orizzontale dei blocchi
      justifyContent: "space-around", // Spazio uguale tra i blocchi
      flex: 1, // Occupa il resto dello spazio disponibile
    },
    textBlock: {
      flexDirection: "column", // Disposizione verticale di numero e testo
      alignItems: "center", // Allinea al centro verticalmente
      marginHorizontal: 10, // Spazio tra i blocchi di testo
    },
    number: {
      fontSize: 22, // Dimensione del numero
      fontWeight: "bold",
      color: "#191a18", // Colore del numero
    },
    textField: {
      fontSize: 15, // Dimensione testo
      color: "#333b2c", // Colore del testo
      marginTop: 2, // Spazio tra il numero e il campo di testo
      textAlign: "center",
    },
  
    profileInputContainer: {
      padding: 20, // Spaziatura intorno ai campi di testo
      backgroundColor: "#e2f5c4", // Colore verdino
    },
  
    profill: {
      fontSize: 16, // Dimensione testo
      color: "#333b2c", // Colore del testo
      marginTop: 2, // Spazio tra il numero e il campo di testo
      fontFamily: "monospace",
      fontStyle: "italic",
    },
  
    nickname: {
      fontSize: 23, // Dimensione testo
      color: "#333b2c", // Colore del testo
      marginTop: 2, // Spazio tra il numero e il campo di testo
      fontWeight: "bold",
      fontFamily: "monospace",
    },
  
    buttonContainer: {
      flexDirection: "row", // Allinea i bottoni orizzontalmente
      justifyContent: "space-around", // Spazia i bottoni
    },
    buttonStyleP: {
      flex: 1, // Ogni bottone occupa uno spazio uguale
      marginHorizontal: 15, // Spazio tra i bottoni
    },
  });

export default Header