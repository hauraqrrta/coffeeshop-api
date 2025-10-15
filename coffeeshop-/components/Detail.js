import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Detail({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Gambar utama */}
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri: item.coffee_poster }}
            style={styles.poster}
            resizeMode="cover"
          />
          {/* Tombol Back */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Card deskripsi */}
        <View style={styles.card}>
          <Text style={styles.title}>{item.coffee_title}</Text>
          <Text style={styles.desc}>{item.coffee_detail}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  scroll: {
    alignItems: "center",
    paddingBottom: 50,
  },
  imageWrapper: {
    width: "100%",
    height: 350,
    backgroundColor: "#000", // warna fallback
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    borderRadius: 30,
  },
  card: {
    backgroundColor: "#F8F1E7",
    width: "90%",
    borderRadius: 20,
    marginTop: -40,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3A2D1A",
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    color: "#4B3A28",
    textAlign: "justify",
    lineHeight: 22,
  },
});
