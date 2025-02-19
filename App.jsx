import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/screens/HomeScreen";
import ProductList from "./src/components/ProductList";
import Cart from "./src/components/Cart";
import AboutScreen from "./src/screens/AboutScreen";
import { CartProvider } from "./src/context/CartContext";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="ProductList" // Define a tela inicial
          screenOptions={{
            headerShown: true, // Mostra o cabeçalho
            headerTitle: () => (
              <Image
                source={require("./assets/logoteste.png")} // Certifique-se de que o caminho está correto
                style={{ width: 100, height: 40, resizeMode: "contain" }} // Ajuste o tamanho do logo
              />
            ),
          }}
        >
          <Drawer.Screen name="Inicio" component={ProductList} />
          <Drawer.Screen name="Carrinho" component={Cart} />
          <Drawer.Screen name="Sobre nós" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
