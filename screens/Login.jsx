import { Text, TextBase, View, SafeAreaView, ScrollView } from "react-native";
import Input from "../components/Input";
import MyButton from "../components/Button";
import Container from "../components/Container";
import { useState } from "react";
import { useSessionContext } from "../utils/context";

function Login() {

  const value = useSessionContext()
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function onLogin() {
    if (username == 'Micia' && password == '1234') {
      value.login({
        username: username,
        password: password
      })
    }
  }

  function onUsernameChange(text) {
    setUsername(text);
  }

  function onPasswChange(text2) {
    setPassword(text2);
  }

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor: '#e2f5c4'
    }}>
    <ScrollView>
    <Container>
      
      <Text style={{ fontSize: 24, textAlign:'center', marginBottom:50, marginTop: 60 }}>LOGIN</Text>

      <Input placeholder="username" onChange={onUsernameChange} />

      <Input placeholder="password" password={true} onChange={onPasswChange} />

      <MyButton onPress={onLogin} title={"ACCEDI"} />
      
    </Container>
    </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
