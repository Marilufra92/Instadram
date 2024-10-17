import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home.jsx";
import Login from "./screens/Login.jsx";
import Profile from "./screens/Profile.jsx";
import SessionProvider, { useSessionContext } from "./utils/context";
import Create from "./screens/Create.jsx";

// Un COMPONENTE React è una parte riutilizzabile dell'interfaccia utente che può essere considerata come un mattoncino del front-end.
// Può essere scritto come una funzione o come una classe e han il compito di ricevere input (chiamati props) e restituire un pezzo di UI sotto forma di elementi JSX.
// inizia sempre con lettera MAIUSCOLA

// Una FUNZIONE JavaScript è un costrutto di programmazione generico, utilizzato per eseguire un'operazione specifica e restituire un risultato.

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// un componente in React è una funzione (o classe) specializzata per generare UI,
// mentre una funzione è un costrutto JavaScript generico per eseguire qualsiasi operazione.

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: ({focused}) =>(
          <Icon name="home-outline"
          size={20}
          color={focused ? "blue" : "violet"}
          />
        )
      
      }}
      />
      <Tab.Screen name= "Create" component={Create}
      options={{ tabBarIcon: ({focused}) => (
        <Icon name="add-circle"
        size={30}
        color={focused ? "blue" : "violet"} 
        />
      ) }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: ({focused}) => (
          <Icon name="person"
          size={20}
          color={focused ? "blue" : "violet"} 
          />
        ) }}
      />
      
    </Tab.Navigator>
  );
}

function AppNavigator() {

  const value = useSessionContext()
  const logged = !!value.session

  return (
  <NavigationContainer>
        <Stack.Navigator>
          {logged && (
            <Stack.Screen
              name="Main"
              component={Tabs}
              options={{ headerShown: false }}
            />
          )}
          {!logged && (
            <Stack.Screen
              name="Login "
              component={Login}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default function App() {
  return (
    <SessionProvider>
      <AppNavigator/>
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefbd8",
    alignItems: "center",
    justifyContent: "center",
  },
});
