import React from 'react'
import { TouchableOpacity,Platform,TouchableNativeFeedback, Text, View, StyleSheet } from 'react-native'

function CategoryGridTile(props) {
    let TouchableComp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21){
        TouchableComp = TouchableNativeFeedback
    }
  return (
    <View  style={styles.gridItem}>
    <TouchableComp
       
        onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor:props.color}}}>
          <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </View>
      </TouchableComp>
      </View>
  )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        overflow:"hidden",
        borderRadius:10
      },
      container:{
       flex:1,
       elevation:3,
       borderRadius:10,
       padding:15,
       shadowColor:"black",
       shadowOpacity:0.26,
       shadowOffset:{width:0, height:2},
       shadowRadius:10,
       justifyContent:"flex-end",
       alignItems:"flex-end",
      
      },
      title:{
        fontWeight:"bold",
        textAlign:"right",
        fontSize:22
      }
})

export default CategoryGridTile