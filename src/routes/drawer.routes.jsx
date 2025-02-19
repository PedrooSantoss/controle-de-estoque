import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductList from "../components/ProductList";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import Cart from "../components/Cart"; // Ajustado o caminho do componente Cart

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true, // Mostra o cabeçalho no topo
        drawerStyle: { backgroundColor: "#f4f4f4" }, // Estilo da gaveta
        drawerActiveTintColor: "#007bff", // Cor do texto ativo
        drawerInactiveTintColor: "#333", // Cor do texto inativo
        drawerLabelStyle: { fontSize: 16 }, // Estilo do texto das opções
      }}
    >
      {/* Tela Inicial */}
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />

      {/* Tela de Produtos */}
      <Drawer.Screen
        name="Products"
        component={ProductList}
        options={{ title: "Lista de Produtos" }}
      />

      {/* Tela Sobre */}
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "Sobre Nós" }}
      />

      {/* Tela de Carrinho */}
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Carrinho" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
