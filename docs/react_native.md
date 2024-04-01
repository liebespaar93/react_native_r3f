---
title: react_native.md
description: |-
 내용입력
date: Insert datetime string (⇧⌘I or Ctrl+Shift+I)
preview: 이미지 주소
draft: false
tags:
 - 테그없음
categories:
 - 카테고리없음
---

## View

> [!IMPORTANT]
> compoment 사이에 공백 혹은 택스트가 있을 경우 에러를 주기 때문에 조심해야 한다.

```jsx
import { View } from "react-native"

export default function ViewTutorial() {
  return (
    <View style={{ flex: 1, backgroundColor: 'plum' }}>
      <View style={{ width: 100, height: 100, backgroundColor: 'lightblue' }}></View>
    </View>
  )
}
```

간단한 view를 만드는 실습을 하였다

## Text

> [!IMPORTANT]
> ```Text```를 사용하지 않는 경우 화면이 에러인 사항을 마주하게 된다 조심하자

```jsx
import { Text } from "react-native"

export default function TextTutorial() {
  return (
    <Text>
      Test 를 위한 문자입력
    </Text>
  )
}
```

## Image

```jsx
import React from 'react'
import { Image } from 'react-native'
import adaptive from '@/assets/adaptive-icon.png'

const adaptive_icon = require("../../assets/adaptive-icon.png")

function ImageTutorial() {
  return (
    <>
    <Image source={adaptive} style={{ width: 300, height: 300 }}></Image>
      <Image source={adaptive_icon} style={{ width: 300, height: 300 }}></Image>
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}>
      </Image>
    </>
  )
}

export default ImageTutorial
```

> [!TIP]
> 이미지의 경우 2가지 방법으로 불러오는 방법이 있다. 기본적인 </br>
> 기본적인 ```require```과 ```import icon from '@/*'```  이다. </br>
> 필자는 2번째 방법을 선호하여 설정을 업데이트 해주었다

🍝 global.d.ts

```ts filename="global.d.ts"
declare module '*.png' {
  const value: import('react-native').ImageSourcePropType;
  export default value;
}
```

```import``로 파일 불러오기가 가능해 졌다

추가로 ```@```문자로 root 폴더에 접속하게 추가를 해주자

🍝 tsconfig.json

```json filename="tsconfig.json"
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {"@/*": ["./*"]}
  },
  "extends": "expo/tsconfig.base"
}
```

이제 편하게 사용이 가능하다
