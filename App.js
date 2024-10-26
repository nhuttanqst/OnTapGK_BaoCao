import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import axios from "axios";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, Dimensions } from "react-native";

export default function App() {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const screenWith = Dimensions.get("window").width;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get(
          "https://671d0fbd09103098807c2176.mockapi.io/category"
        );
        const locationsResponse = await axios.get(
          "https://671d0fbd09103098807c2176.mockapi.io/location"
        );
        setCategories(categoriesResponse.data);
        setLocations(locationsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerTop}>
              <Image
                style={styles.logoicon}
                source={require("./assets/Data/logoicon.png")}
              />
              <View style={styles.inputGroup}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search here..."
                />
                <Image
                  style={styles.searchIcon}
                  source={require("./assets/Data/searchicon.png")}
                />
              </View>
            </View>
            <View style={styles.headerBottom}>
              <View style={styles.headerBottomLeft}>
                <Image
                  style={styles.personicon}
                  source={require("./assets/Data/personicon.png")}
                />
                <View>
                  <Text style={styles.text1}>Welcome!</Text>
                  <Text style={styles.text2}>Donna Stroupe</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.ringicon}
                  source={require("./assets/Data/ringicon.png")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 140 }}
            style={styles.content}
          >
            <View>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryText}>Category</Text>
                <TouchableOpacity>
                  <Image
                    style={styles.baGach}
                    source={require("./assets/Data/3gach.png")}
                  />
                </TouchableOpacity>
              </View>

              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.categoryItem,
                      { width: (screenWith - 70) / 4 },
                    ]}
                  >
                    <Image
                      style={{ width: 70, height: 70, borderRadius: 50 }}
                      source={{ uri: item.image }}
                    />
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                numColumns={4}
              />
            </View>

            <View style={styles.popularDestination}>
              <View style={styles.populationInfo}>
                <Text style={styles.populationText}>Popular Destination</Text>
                <TouchableOpacity>
                  <Image
                    style={styles.baGach}
                    source={require("./assets/Data/3gach.png")}
                  />
                </TouchableOpacity>
              </View>

              <FlatList
                data={locations.filter((item) => item.type === "popular")}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.populationItem}>
                    <Image
                      style={{ width: 100, height: 100, borderRadius: 14 }}
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.populationList}
              />
            </View>

            <View style={styles.recommended}>
              <View style={styles.recommendedInfo}>
                <Text style={styles.recommendedText}>Recommended</Text>
              </View>

              <FlatList
                data={locations.filter((item) => item.type === "recommended")}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.recommendedItem}>
                    <Image
                      style={{ width: 150, height: 150, borderRadius: 14 }}
                      source={{ uri: item.image }}
                    />
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.recommendedList}
              />
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("./assets/Data/homeicon.png")}
              />
              <Text style={{ color: "white" }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("./assets/Data/exploreicon.png")}
              />
              <Text style={{ color: "white" }}>Explore</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("./assets/Data/searchicon1.png")}
              />
              <Text style={{ color: "white" }}>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("./assets/Data/profileicon.png")}
              />
              <Text style={{ color: "white" }}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#5958b2",
    padding: 30,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoicon: {
    width: 40,
    height: 40,
    marginRight: 18,
  },
  inputGroup: {
    position: "relative",
    flex: 1,
  },
  searchInput: {
    backgroundColor: "white",
    color: "#9b9b9b",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  searchIcon: {
    position: "absolute",
    width: 23,
    height: 23,
    right: 15,
    top: 8,
  },
  headerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  headerBottomLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  personicon: {
    width: 40,
    height: 40,
    objectFit: "cover",
    borderRadius: 50,
    marginRight: 10,
  },
  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  text2: {
    color: "white",
    fontSize: 13,
  },
  ringicon: {
    width: 40,
    height: 40,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 35,
  },
  categoryInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "500",
  },
  baGach: {
    width: 25,
    height: 25,
  },
  categoryList: {
    flexDirection: "row",
  },
  categoryItem: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  populationInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  populationText: {
    fontSize: 18,
    fontWeight: "500",
  },
  populationList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  populationItem: {
    marginTop: 10,
    marginBottom: 10,
  },
  recommendedInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  recommendedText: {
    fontSize: 18,
    fontWeight: "500",
  },
  recommendedList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  recommendedItem: {
    marginTop: 10,
    marginBottom: 10,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 10,
    backgroundColor: "#5958b2",
    padding: 20,
  },
});
