import React from 'react'
import { Text, TouchableOpacity, View,Image } from "react-native"

function BoxFilter({title,img}) {
  return (
      <View style={{borderRadius:30,margin:10}}>
        <Image style={{width:100,height:60,borderRadius:10,border:"1px solid black"}} source={{uri:img}} />
            <Text style={{fontSize:17}}>
                {title}
            </Text>
          </View>
      )
    }
    // const styles = StyleSheet.create({
// })
export default BoxFilter
