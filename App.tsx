import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screens/Login";
import Principal from "./src/screens/Principal";
import Foods from "./src/screens/Foods";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH, db } from "./FirebaseConfig";
import { Routes } from "./src/routes";
import UserCard from "./src/components/Card/UserCard";
import SignUp from "./src/screens/SignUp";
import { doc, getDoc } from "firebase/firestore";
import { AppProvider } from "./src/context/AppContext";
import "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Principal" component={Principal} />
      <InsideStack.Screen name="Foods" component={Foods} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string>("");

  const getUserData = async (uid: string) => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        setUserName(userData.name);
      } else {
        console.log("O usuário não existe no Firestore.");
      }
    } catch (error) {
      console.error("Erro ao recuperar dados do Firestore:", error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
    getUserData(user?.uid as string);
  }, [user]);

  return (
    <AppProvider>
      <NavigationContainer>
        {user && <UserCard userName={userName} />}

        <Stack.Navigator initialRouteName="Login">
          {user ? (
            <Stack.Screen
              name="Inside"
              component={Routes}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
