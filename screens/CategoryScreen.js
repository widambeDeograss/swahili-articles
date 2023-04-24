import React from 'react';
import { Text, Button, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { data } from '../data/data'; 
import CategoryGridTile from '../components/Category';


function Categories(props) {

  const renderGrid = (itemData) => {
    return < CategoryGridTile 
    title={itemData.item.name}
    color='#368dcc'
     onSelect={() =>{
      props.navigation.navigate({ name: "categorydata", params: {categoryName:itemData.item.name} })
    }}
    
    />
  }

  return (
    <FlatList numColumns={2} data={data.categories} renderItem={renderGrid} keyExtractor={(item, index) => item.categories} />
  )
}

const styles = StyleSheet.create({
  
})

export default Categories

