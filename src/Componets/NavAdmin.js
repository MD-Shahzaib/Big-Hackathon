import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const NavbarAdmin = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
        alignSelf: "center",
        marginTop: 30,
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <TouchableOpacity>
          <Ionicons name="person-circle" size={75} color={"#61B846"} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>
            Muhammad Shahzaib
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Admin</Text>
        </View>
      </View>
      {/* <TouchableOpacity>
                <Image source={require('../../assets/Order.png')} />
            </TouchableOpacity> */}
    </View>
  );
};

export default NavbarAdmin;

const styles = StyleSheet.create({});
