import React, { useState } from 'react'
import { Button, Modal, ModalProps, Text, View } from 'react-native'

type ModalTutorialProps = {
  options?: ModalProps
} & React.PropsWithChildren
function ModalTutorial(props : ModalTutorialProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button title='Press' color={'midnightblue'} onPress={() => { setModalVisible(true) }}></Button>
      <Modal visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false)
      }}
      animationType='slide'
      presentationStyle='pageSheet'
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal start</Text>
          <Button title="Close" color="midnightblue" onPress={() => { setModalVisible(false) }}></Button>
        </View>
      </Modal>
    </View>
  )
}

export default ModalTutorial