import React, { useEffect, useState } from 'react'
import { Button, Image, Keyboard, KeyboardAvoidingView, KeyboardEvent, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import icon from '@/assets/icon.png'

function FormTutorial() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ username?: string, password?: string }>({});

  const validateForm = () => {
    let errors: { username?: string, password?: string } = {}

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setUsername("");
      setPassword("");
      setErrors({})
    }
  };

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.form}>
        <Image style={styles.image} source={icon} resizeMode='contain' />

        <Text style={styles.label}>UserName</Text>
        <TextInput style={styles.input}
          placeholder='enter your username'
          value={username}
          onChangeText={(value) => { setUsername(value) }} />
        {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input}
          placeholder='enter your Password'
          value={password}
          secureTextEntry
          onChangeText={(value) => { setPassword(value) }} />
        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  )
}

export default FormTutorial

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  image: {
    width: '100%',
    height: 200,
    alignItems: 'center'
  },
  errorText: {
    color: "#f00",
    marginBottom: 10
  }
});