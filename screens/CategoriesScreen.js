import { View, Text, FlatList } from "react-native"

import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

export default function CategoriesScreen ({navigation}) {

  const pressHandler = (categoryId) => {
    navigation.navigate('Overview',{categoryId : categoryId});
  }
  return (
    <FlatList 
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
        return <CategoryGridTile category={item} onPress={() => pressHandler(item.id)} />
      }}
    numColumns={2}
    />
  )
}