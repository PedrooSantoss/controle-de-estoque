import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation, currentUser }) {
  return (
    <ScrollView style={styles.container}>
      {/* Barra de Boas-vindas */}
      <View style={styles.header}>
      <Button styles={styles.buttonContainer}
          title="Ver Carrinho"
          onPress={() => navigation.navigate("Carrinho")}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquisar produtos..."
        />
      </View>

      {/* Seções */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Celulares</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Eletrônicos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>Acessórios</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ofertas Especiais</Text>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.offerCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.offerImage}
            />
            <Text style={styles.offerText}>Promoção 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.offerCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.offerImage}
            />
            <Text style={styles.offerText}>Promoção 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.offerCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.offerImage}
            />
            <Text style={styles.offerText}>Promoção 3</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
        
  
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "grey",
    height: 60,
  },
  searchBar: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
    backgroundColor: "#fff", // Fundo branco
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#333", // Cor do texto
  },
  welcomeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoryCard: {
    alignItems: "center",
    marginRight: 10,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    textAlign: "center",
  },
  offerCard: {
    alignItems: "center",
    marginRight: 10,
  },
  offerImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  offerText: {
    fontSize: 14,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 16,
  },
});
