import React from 'react'
import { StyleSheet, View, Platform, Text, Image, ImageSourcePropType } from 'react-native'

type PokemonCardProps = {
  name?: string,
  image: ImageSourcePropType,
  type?: string,
  hp?: number,
  moves: string[],
  weaknesses: string[],
}

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};


function PokemonCard(props: PokemonCardProps) {
  const { borderColor, emoji } = getTypeDetails(props.type)

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.hp}>❤️{props.hp}</Text>
      </View>
      <Image
        style={styles.image}
        source={props.image}
        accessibilityLabel={`${props.name} pokemon`}
        resizeMode="contain" />

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji} >{emoji}</Text>
          <Text style={styles.type} >{props.type}</Text>
        </View>
      </View>

      <View style={styles.moveContainer}>
        <Text style={styles.moveText}>Moves: {props.moves.join(", ")}</Text>
      </View>

      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText} >Weakness: {props.weaknesses.join(", ")}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4
      },
      android: {
        elevation: 5,
      }
    })
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 32,

  },
  name: {
    fontSize: 24,
    fontWeight: "bold"
  },
  hp: {
    fontSize: 32,
  },
  image: {
    width: "100%",
    height: 200,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 36
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    margin: 12
  },
  type: {
    fontSize: 22,
    fontWeight: "bold"
  },
  moveContainer: {
    marginBottom: 16
  },
  moveText: {
    fontSize: 22,
    fontWeight: "bold"
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 16,
  },
})
export default PokemonCard