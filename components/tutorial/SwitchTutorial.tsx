import React, { useState } from 'react'
import { StyleSheet, Switch } from 'react-native'

function SwitchTutorial() {
  const [mode, setMode] = useState(false);

  return (
    <Switch
      value={mode}
      onValueChange={() => {setMode((value) => !value)}}
      style={styles.switch}
      trackColor={{ false: "#FFAF45", true: "#FFAF45" }}
      thumbColor='#F3EDC8'
    />
  )
}

export default SwitchTutorial

const styles = StyleSheet.create({
  switch: {

  }
})