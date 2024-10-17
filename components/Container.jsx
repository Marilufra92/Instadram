import {View} from 'react-native';
const containerStyle =
{
paddingLeft: '20px',
paddingRight: '20px',
paddingTop: '15px',
paddingBottom: '100%',
backgroundColor: '#e2f5c4',
minHeight: '50px',



}

function Container({children})
{
    return (
        <View style={containerStyle}>
            {children}


        </View>

    )

}

export default Container