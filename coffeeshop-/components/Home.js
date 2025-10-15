import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
} from "react-native";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/hauraqrrta/coffeeshop-api/main/coffee.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.coffee);
        setLoading(false);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#C29E76" />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate("Detail", { item })}
    >
      <View style={styles.card}>
        <Image
          source={{ uri: item.coffee_thumbnails }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title}>{item.coffee_title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerIcon}>☕</Text>
        <Text style={styles.header}>Coffee Menu</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.coffee_id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  headerIcon: {
    fontSize: 26,
    color: "#C29E76",
  },
  header: {
    color: "#F2E6D9",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 4,
    fontFamily: "serif",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#2A2A2A",
    borderRadius: 16,
    marginHorizontal: 14,
    marginVertical: 8,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  info: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F5E9DD",
    marginBottom: 6,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
});
