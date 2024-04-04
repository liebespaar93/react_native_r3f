import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

type FlatListTutorialProps = {
  list: { id: string, type: string, name: string }[]
}
function FlatListTutorial(props: FlatListTutorialProps) {
  return (
    <FlatList
      data={props.list}
      renderItem={({ item }) => {
        return (
          <View style={styles.card} key={item.id}>
            <Text style={styles.cardText}>{item.type}</Text>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )
      }}
      keyExtractor={(item, index) => item.id.toString()}
      ItemSeparatorComponent={() => { return <View style={{ height: 16 }} /> }}
      ListEmptyComponent={() => { return <Text>포켓몬이 없습니다</Text> }}
      ListHeaderComponent={<Text style={styles.headerText}>여기는 해더입니다</Text>}
      ListFooterComponent={<Text style={styles.footerText}>여기는 푸터입니다</Text>}
    />
  )
}

export default FlatListTutorial

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  cardText: {
    fontSize: 24
  },
  headerText: {
    textAlign: "center",
    fontSize: 30,
    margin: 10,
  },
  footerText: {
    textAlign: "center",
    fontSize: 30,
    margin: 10,
  }
});
