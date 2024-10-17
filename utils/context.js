import React, {useContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import voracino from "../assets/voracino.jpeg";

export const SessionContext = React.createContext({})   // definito il contesto

export function useSessionContext(){     
    return useContext(SessionContext)


}


function SessionProvider({children}){   
    
    const [session, setSession] = useState()
    const [loading, setLoading] = useState(true)

    const defaultPosts = [
        {
          name: "Misch",
          profilepic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          image:
            "https://cdn.mos.cms.futurecdn.net/KHQb3Ny62YxXnCEon4mm43-1200-80.jpg",
          description: "mischo",
        },
        {
          name: "catty",
          profilepic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          description: "miao",
        },
    
        {
          name: "tiredd",
          profilepic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          image:
            "https://www.repstatic.it/content/contenthub/img/2023/12/10/104357521-cfa3e115-517c-4419-b502-e9b6705e3b0f.jpg",
          description: "tiredd",
        },
    
        {
          name: "blacky",
          profilepic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          image: "https://www.focus.it/images/2021/11/16/gatto_1020x680.jpg",
          description: "blacky",
        },
    
        {
          name: "miao",
          profilepic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          image:
            "https://www.zooplus.it/magazine/wp-content/uploads/2020/05/1-32.jpg",
          description: "miao",
        },
    
        {
          name: "catty",
          profilepic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          image:
            "https://media.gqitalia.it/photos/610107762c22336f89d5887b/16:9/w_2560%2Cc_limit/loan-7AIDE8PrvA0-unsplash.jpg",
          description: "micetto",
        },
    
        {
          name: "Mr.Grey",
          profilepic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          image:
            "https://www.larcadinoepetshop.it/wp-content/uploads/2020/07/curiosita-gatti-larcadinoe.jpg",
          description: "Mr.Grey",
        },
    
        {
          name: "miaaaaOOO",
          profilepic:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ginger_european_cat.jpg/220px-Ginger_european_cat.jpg",
          image:
            "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15024377/8536633928_62a8d4fb3b_o.0.0.1514403802.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400",
          description: "miaaaaOOO",
        },
      ];

      const [posts, setPosts ] = useState(defaultPosts)

    useEffect (() => {loadSession()}, [])
    
    async function loadSession (){
        const savedSession = await AsyncStorage.getItem('@user_session')
        if (savedSession){
            setSession(JSON.parse(savedSession))
        }
        setLoading (false)

    }

    async function logout(){
        await AsyncStorage.removeItem('@user_session')
        setSession (null)
    }

    async function login(newSession){
        await AsyncStorage.setItem('@user_session', JSON.stringify( newSession ))
        setSession (newSession)
    }

    const data = {
        session: session,
        login: login,
        logout: logout,
        loading: loading,

        posts: posts,
        setPosts: setPosts
    }


    return (
        <SessionContext.Provider value={data}>
            {children}


        </SessionContext.Provider>


    )

}

export default SessionProvider