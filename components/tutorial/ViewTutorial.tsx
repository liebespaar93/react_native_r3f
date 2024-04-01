import { Text, View } from "react-native"


export default function ViewTutorial(props: React.PropsWithChildren & {backgroundColor: string}) {
  return (
    <View style={{ flex: 1, backgroundColor: props.backgroundColor ?? "plum" }}>
      {props.children}
    </View>
  )
}