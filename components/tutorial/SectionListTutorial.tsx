import React from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

type SectionListTutorialProps = {
  list: {
    type: string,
    data: string[]
  }[]
}

function SectionListTutorial(props: SectionListTutorialProps) {
  return (
    <SectionList
      sections={props.list}
      renderItem={(info) => {
        return (
          <View style={styles.card}>
            <Text style={styles.cardText}>{info.item}</Text>
          </View>)
      }}
      renderSectionHeader={({ section }) => {
        return <Text style={styles.sectionHeaderText}>{section.type}</Text>
      }}
      SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  )
}

export default SectionListTutorial


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
  sectionHeaderText: {
    fontSize: 22,
    fontWeight: "bold"
  }
});
