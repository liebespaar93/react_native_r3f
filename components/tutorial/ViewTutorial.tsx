import { Text, View } from "react-native"


export default function ViewTutorial(props: React.PropsWithChildren) {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum' }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'lightblue' }}>
      </View>
      {props.children}
    </View>
  )
}