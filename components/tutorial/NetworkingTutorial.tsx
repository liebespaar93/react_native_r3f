import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Button, FlatList, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'

type postData = {
  userId: number,
  id: number,
  title: string,
  body: string
}

type postBody = {
  title: string,
  body: string
}
function NetworkingTutorial() {
  const [postList, setPostList] = useState<postData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshin] = useState(false)
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const [isPosting, setIsPostring] = useState(false)
  const [error, setError] = useState("")

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    const data = await response.json()
    setPostList(data)
    setIsLoading(false);
  }

  const handlelRefresh = () => {
    setRefreshin(true);
    fetchData(20)
    setRefreshin(false)
  }

  useEffect(() => {
    fetchData();
  }, [])
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color="#0000ff" />
        <Text>Loading</Text>
      </View>)
  }
  const addPost = async () => {
    if (!postTitle || !postBody)
      return;
    try {
      setError("")
      setIsPostring(true)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody
        } satisfies postBody)
      })

      const newPost = await response.json()
      console.log(newPost)
      setPostList([newPost, ...postList])
      setPostTitle("")
      setPostBody("")
    } catch (error) {
      console.error("Error adding new post:", error),
        setIsPostring(false)
      setError("Failed to add new post")
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {error ?
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View> :
        undefined
      }
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder=''
          value={postTitle}
          onChangeText={(value) => { setPostTitle(value) }}
        />
        <TextInput
          style={styles.input}
          placeholder=''
          value={postBody}
          onChangeText={(value) => setPostBody(value)}
        />
        <Button
          title={isPosting ? "Adding..." : "Add Post"}
          onPress={addPost}
          disabled={isPosting}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={(info) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{info.item.title}</Text>
                <Text style={styles.bodyText}>{info.item.body}</Text>
              </View>
            )
          }}
          ItemSeparatorComponent={() => (
            <View style={{ height: 30 }}></View>
          )}
          ListHeaderComponent={() => (
            <View style={styles.listHeader}>
              <Text style={styles.listHeaderText}>Header</Text>
            </View>
          )}
          refreshing={refreshing}
          onRefresh={handlelRefresh}
        />
      </View>
    </View>
  )
}

export default NetworkingTutorial

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "#F6E7FF",
    padding: 16,
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    backgroundColor: "#FCFCFC",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  bodyText: {
    fontSize: 12,
    color: "#5a5a5a"
  },
  listHeader: {
    alignItems: "center",
    padding: 8,
  },
  listHeaderText: {
    fontSize: 32
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#a2a2a2"
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#a2a2a2"
  },
  errorContainer: {
    backgroundColor: '#FFC0CB',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    margin: 4,
    alignItems: 'center'
  },
  errorText: {
    color: '#ff000C',
    fontSize: 16,
    textAlign: "center"
  }
})