import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function InputTextTutorial() {
  const [name, setname] = useState("")
  return (
    <View>
      <TextInput
        placeholder='name'
        keyboardType='email-address'
        autoCorrect={false}
        autoCapitalize='none'
        style={[styles.input]} value={name} onChangeText={setname}
      />
      <Text>You'r name is {name}</Text>
      <TextInput placeholder='multiline Text' style={[styles.input, styles.multilineText]} multiline />
    </View>
  )
}

export default InputTextTutorial

const styles = StyleSheet.create({
  input: {
    margin: 8,
    padding: 12,
    borderRadius: 24,
    borderWidth: 2,
  },
  multilineText: {
    minHeight: 100,
    textAlignVertical: 'top',
  }
});

