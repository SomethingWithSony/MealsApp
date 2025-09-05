import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealItem from "../components/MealItem";

export default function MealsOverViewScreen({route}){
  const id = route.params.categoryId
  const displayedMeals = MEALS.filter( meal => {
    return meal.categoryIds.indexOf(id) >= 0;
  } )
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <MealItem meal={item} />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})