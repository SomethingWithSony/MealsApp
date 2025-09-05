import { View, Text,Pressable, StyleSheet } from "react-native"

export default function CategoryGridTile ({category, onPress}) {
  return (
    <View style={styles.gridItem}>
      <Pressable onPress={onPress}  style={({pressed}) => [styles.btn, pressed && styles.pressed]} >
        <View style={[styles.container, {backgroundColor: category.color}]}>
          <Text style={styles.text}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 10,
    // elevation: 4, // shadow android
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8
  },
  btn: {
    flex: 1
  },
  pressed: {
    opacity: 0.5
  },
  container: {
    flex:1,
    padding: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text : {
    fontSize: 16,
    fontWeight: 'bold'
  }
})