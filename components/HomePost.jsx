import { View, StyleSheet, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { GestureHandlerRootView, TapGestureHandler } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    containerPost: {
        width: '100%',
        backgroundColor: 'white',
       
    },
    post: {
        width: '100%',
        aspectRatio: '1/1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toppost: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    img: {
        height: '100%',
        width: '100%'
    },
    pfp: {
        height: 30,
        width: 30,
        borderRadius: 30,
        overflow: 'hidden',
    },
    user: {
        fontSize: 20,
        marginBottom: 5
    },
    descr: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10,
        gap: 5
    },
    descrtext: {
        fontSize: 14,
    },
    userdescr: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

function HomePost({ username, pfp, imageUrl, descrizione }) {

    const [like, setLike] = useState(false)

    function toggleLike() {
        setLike(!like)
    }

    return (
        <View style={styles.containerPost}>
            <View style={styles.toppost}>
                <Image source={{uri: pfp}} style={styles.pfp} />
                <Text style={styles.user}>{username}</Text>
            </View>
            <View >
                <GestureHandlerRootView style={styles.post}>
                    <TapGestureHandler onActivated={toggleLike} numberOfTaps={2}>
                        <Image source={{uri: imageUrl}} style={styles.img} />  
                    </TapGestureHandler>
                </GestureHandlerRootView>
            </View>
            <View style={styles.toppost}>
                <TouchableOpacity onPress={toggleLike}>
                    <Icon
                        name={like ? 'heart' : 'heart-outline'}
                        size={30}
                        color={like ? 'tomato' : 'black'} />
                </TouchableOpacity>
            </View >
            <View style={styles.descr}>
                <Text style={styles.userdescr}>{username}</Text>
                <Text style={styles.descrtext}>{descrizione}</Text>
            </View>
        </View>
    );
}

export default HomePost