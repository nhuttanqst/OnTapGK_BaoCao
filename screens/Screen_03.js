import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import CheckBox from "expo-checkbox";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Screen_03 = () => {
  const [checked, setChecked] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff" }}
      >
        <View style={styles.container}>
          <View>
            <TouchableOpacity>
              <FontAwesome6
                onPress={() => navigation.goBack()}
                name="arrow-left-long"
                size={24}
                color="#6c7474"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Image source={require("../assets/Data/Image19.png")} />
            <Text style={styles.text1}>Nice to see you!</Text>
            <Text style={styles.text2}>Create your account</Text>
          </View>
          <View>
            <View style={styles.groupInput}>
              <Image
                style={styles.imageInput}
                source={require("../assets/Data/codicon_account.png")}
              />
              <TextInput
                value={userName}
                onChangeText={(value) => setUserName(value)}
                style={styles.textInput}
                placeholder="Enter your user name"
              />
            </View>
            <View style={styles.groupInput}>
              <Image
                style={[styles.imageInput, { width: 20, height: 15, top: 14 }]}
                source={require("../assets/Data/Vector.png")}
              />
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={styles.textInput}
                placeholder="Enter your email address"
              />
            </View>
            <View style={styles.groupInput}>
              <Image
                style={styles.imageInput}
                source={require("../assets/Data/lock.png")}
              />
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                style={styles.textInput}
                secureTextEntry={type}
                placeholder="Enter your password"
              />
              <TouchableOpacity
                style={styles.imageEye}
                onPress={() => setType((prev) => !prev)}
              >
                <Image source={require("../assets/Data/eye.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.groupCheckBox}>
            <CheckBox
              value={checked}
              onValueChange={() => setChecked((prev) => !prev)}
            />
            <Text style={{ fontSize: 15, marginLeft: 10 }}>
              I agree with{" "}
              <Text style={{ color: "#62afec", fontWeight: "400" }}>
                Terms & Conditions
              </Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <View>
                <Text style={styles.continue}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Screen_03;

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  header: {
    alignItems: "center",
    marginVertical: 60,
  },
  text1: {
    fontSize: 35,
    fontWeight: "600",
    marginTop: 15,
    color: "#30353a",
  },
  text2: {
    fontSize: 16,
    fontWeight: "300",
    marginTop: 4,
    color: "#6c7474",
  },
  groupInput: {
    position: "relative",
    marginBottom: 23,
  },
  imageInput: {
    position: "absolute",
    top: 12,
    left: 14,
    width: 20,
    height: 20,
  },
  textInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#9095a0",
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 55,
  },
  imageEye: {
    position: "absolute",
    top: 9,
    right: 8,
    width: 30,
    height: 30,
  },
  groupCheckBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonContainer: {
    width: "100%",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#28c4dc",
    padding: 15,
    borderRadius: 15,
  },
  continue: {
    color: "#fff",
    textAlign: "center",
    width: "100%",
    fontSize: 18,
  },
});
