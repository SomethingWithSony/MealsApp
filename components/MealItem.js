import { View, Text, StyleSheet } from "react-native"
export default function MealItem({ meal }) {
  return (
    <View>
      <Text>
        {meal.title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  }
})