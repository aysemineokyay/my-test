import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log("Hata :", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image src={item.image} style={{ width: 200, height: 200 }} />
            <View style={styles.bottomCard}>
              <Text>Ürün : {item.name}</Text>
              <Text>Fiyat : {item.price} TL</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  card: { paddingVertical: 20 },
  bottomCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00000022",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});
