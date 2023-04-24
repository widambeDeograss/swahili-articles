import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { data } from '../data/data'; 

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

function ArticlesDetails(props) {
//   const [selectedMeal, setselectedMeal] = useState();
//   console.log(selectedMeal);
  const article = props.route.params.article;
  const categoryName = props.route.params.category;
  console.log(article);

  const dataz = data.categories.find(cat => cat.name === categoryName );
   console.log(dataz);
  const selectedart = dataz.articles.find(art => art.title === article)
  console.log(selectedart);

  useEffect(() => {
    props.navigation.setOptions({ title: selectedart.title })
  }, []);

  return (
    <ScrollView>
    <Image source={{ uri: selectedart.image_url }} style={styles.image} />
    <View style={styles.details}>
      <Text>{selectedart.created_at}</Text>
      <Text>{selectedart.author.toUpperCase()}</Text>
      {/* <Text>{selectedart..toUpperCase()}</Text> */}
    </View>
    <Text style={styles.title}>Tags</Text>
    {selectedart.tags.map(tag => (
      <ListItem key={tag}>{tag}</ListItem>
    ))}
    <Text style={styles.title}>{selectedart.content}</Text>
    {/* {selectedMeal.steps.map(step => (
      <ListItem key={step}>{step}</ListItem>
    ))} */}
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});


export default ArticlesDetails