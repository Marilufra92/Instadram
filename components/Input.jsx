import { TextInput } from "react-native";

function Input({placeholder, password, value, onChange}){

    return (
        <TextInput 
        style={{
            backgroundColor: '#e1f2fa',
            paddingBottom: '9px',
            textAlign: 'center',
            borderColor: '#528dab',
            marginBottom:20,
            borderWidth: 1,
            borderRadius: 80,
            margin: '7px',
            height:50,
            
        }}
        placeholder={placeholder}
        secureTextEntry={password}
        value={value} 
        onChangeText={onChange}/>
        
    )
}

export default Input