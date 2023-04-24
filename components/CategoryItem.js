import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';


function CategoryItem(props) {
  return (
    <View style={styles.MealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
         <View style={{...styles.mealRow, ...styles.mealTittle}}>
         <ImageBackground source={{uri:props.image}} style={styles.bgimage}>
            <Text style={styles.title}>{props.title}</Text>
            </ImageBackground></View>
         <View style={{...styles.mealRow, ...styles.mealDetails}}>
           
          <Text>{props.duration}</Text>
          <Text>{props.complexity}</Text>
          <Text>{props.price}</Text>
         </View>
         </View>
    </TouchableOpacity>
    </View>
   
  )
}

const styles = StyleSheet.create({
    MealItem:{
        height:200,
        width:"100%",
        backgroundColor:"#ccc",
        marginVertical:10,
        borderRadius:5,
        overflow:"hidden"
    },
    mealTittle:{
        height:"85%"
    },
    mealDetails:{
       justifyContent:"space-between",
       paddingHorizontal:10,
       fontWeight:"bold",
       height:"15%"
    },
    mealRow:{
        flexDirection:"row"
    },
    bgimage:{
        height:"100%",
        width:"100%",
        justifyContent:"flex-end",
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
        backgroundColor:"rgba(0,0,0,0.7)",
        paddingHorizontal:10,
        paddingVertical:5,
        textAlign:"center",
        
    }


})

export default CategoryItem