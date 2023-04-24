import React,{useEffect} from 'react'
import { Text, View, FlatList } from 'react-native'
import { data } from '../data/data' ;
import CategoryItem from '../components/CategoryItem';



const FavoritesScreen = props => {
  const categoryName = 'Entertainment'
  const categoryData = data.categories.filter(cat => cat.name === categoryName);


  const renderMeals = (itemData) => {
    return <CategoryItem 
    title={itemData.item.title} 
    duration={itemData.item.duration}
    price={itemData.item.created_at}
    image={itemData.item.image_url}
    complexity={itemData.item.author}
    onSelectMeal={()=> {
      props.navigation.navigate({ name: "Article", params: {article:itemData.item.title, category:categoryName} })
    }} />
  }

return (
<View style={{marginHorizontal:10 }}>
<FlatList data={categoryData[0].articles} renderItem={renderMeals} style={{width:"100%"}}/>
</View>
)
}


export default FavoritesScreen;
