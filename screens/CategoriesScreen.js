import { View, Text, FlatList } from "react-native"

import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

export default function CategoriesScreen () {
  return (
    <FlatList 
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => {
        return <CategoryGridTile category={item} />
      }}
    numColumns={2}
    />
  )
}