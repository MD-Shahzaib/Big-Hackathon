import React, { useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";

import InputField from "../Componets/InputField";
import Btn from "../Componets/Btn";
import BaseUrl from "../constant/BaseUrl";
import axios from "axios";
import { signInFirebase } from "../Config/firebase";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [respon, setRespon] = useState("");

  const passwordInputRef = useRef();

  const loginUser = async () => {
    if (!email || !password) {
      return alert("Please fill the Form");
    }
    try {
      const user = await signInFirebase(email, password);
      console.log("user", user.user.uid);
      if ("FziQ7ybVwxZn098boBCKphtWHY43" === user.user.uid) {
        return Alert.alert("Login", "Successfully Login", [
          {
            text: "OK",
            onPress: () => {
              props.navigation.navigate("Admin", { replace: true });
            },
          },
        ]);
      }
      Alert.alert("Login", "Successfully Login", [
        {
          text: "OK",
          onPress: () => {
            props.navigation.navigate("Home", { replace: true });
          },
        },
      ]);
    } catch (e) {
      alert("Error");
    }
  };
  return (
    <>
      <View style={{ backgroundColor: "#000C40" }}>
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 50,
            fontWeight: "bold",
            marginVertical: 30,
          }}
        >
          Login
        </Text>
        {/* form container */}
        <View
          style={{
            height: 700,
            backgroundColor: "white",
            borderTopLeftRadius: 200,
            paddingTop: 100,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={{ fontSize: 35, color: "#054516" }}>
            SAYLANI WELFAER
          </Text>
          <Text>ONLINE DISCOUNT STORE</Text>
          <TextInput
            placeholder="Email..."
            autoFocus
            returnKeyType="next"
            onChangeText={(e) => setEmail(e)}
            onSubmitEditing={() => {
              passwordInputRef.current.focus();
            }}
            value={email}
            keyboardType={"email-address"}
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: 100,
              color: "#054516",
              paddingHorizontal: 10,
              width: "77%",
              paddingVertical: 10,
              marginTop: 14,
              fontSize: 16,
            }}
          />
          <TextInput
            placeholder="Password..."
            ref={passwordInputRef}
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry={true}
            onSubmitEditing={loginUser}
            style={{
              backgroundColor: "#e0e0e0",
              borderRadius: 100,
              color: "#054516",
              paddingHorizontal: 10,
              width: "77%",
              paddingVertical: 10,
              marginTop: 14,
              fontSize: 16,
            }}
          />
          <View style={{ alignItems: "flex-end", width: "77%" }}>
            <Text style={{ color: "#054516", fontSize: 16, marginTop: 13 }}>
              Forgot Password ?
            </Text>
          </View>

          {loading ? (
            <ActivityIndicator
              style={{ alignSelf: "center", marginTop: 7 }}
              size={"large"}
              color="#0000ff"
            />
          ) : (
            <Btn
              bgColor="green"
              textColor="white"
              btnLable="Login"
              press={loginUser}
            />
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginVertical: 15,
              justifyContent: "center",
            }}
          >
            <Text>Don't hava an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text style={{ color: "#054516", fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default Login;
