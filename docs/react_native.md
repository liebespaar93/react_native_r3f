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

## ScrollView

스크롤 뷰는 스크롤이 안되는 기본 view를 스크롤 가능한 형식으로 바꿔준다\
부분적으로 스크롤화 할 수도 있어서 필요한 부분에만 넣어주는것으로 좀더 UX 적인 앱이 만들어 진다

```jsx
import React from 'react'
import { ScrollView } from 'react-native'


function ScrollViewTutorial( props : React.PropsWithChildren) {
  return (
    <ScrollView style={{flex:1, backgroundColor: "oriange", margin:3}}>
      {props.children}
    </ScrollView>
  )
}

export default ScrollViewTutorial
```

## Button

버튼을 만들어 준다\
아직 버튼을 꾸미는 방법을 모르겠다 추후 알아 가보자

```jsx
import React from 'react'
import { Button } from 'react-native'

function ButtonTutorial() {
  return (
    <Button title="Press" color="midnightblue"  onPress={()=>{console.log("button pressed")}} />
  )
}

export default ButtonTutorial
```

## Pressable

![alt text](./assets/pressable.png)

앱의 눌림 동작을 감지한다.\
이러한 동작은 여러가지 함수를 제공하는데 길게 누르기 때기 등 다양한 함수를 사용할 수 있으니 참고하자

```jsx
import React from 'react'
import { Pressable } from 'react-native'

function PressableTutorial(props: React.PropsWithChildren) {
  return (
    <Pressable onPress={()=> {console.log("pressable pressed")}}>{props.children}</Pressable>
  )
}

export default PressableTutorial
```

## Modal

모달이란?\
모달은 한특정 컴포넌트를 어떠한 방식으로 화면에 표현할지 보여주는 거같다.\
특별한 차이점이라고 하면 앱스타일로 새로운 창에 띄워주기 혹은 슬라이드로 나와 보여주기등 다양한 방법으로 액티브하게 만들어 줄수 있는거 같다.

```jsx
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
```

## StatusBar

| 기능 | ios | android |
| :-: | :-: | :-: |
| backgroundColor | ❌ | ✅ |
| barStyle | ✅ | ✅ |
| hidden | ✅ | ✅ |

안드로이드와 ios에서 다른 부분이 있기에 주의하며 사용해야겠다

```jsx
import React from 'react'
import { StatusBar } from 'react-native'

function StatusBarTutorial() {
  return (
    <StatusBar backgroundColor="lightgreen" barStyle='dark-content' hidden={false}/>
  )
}

export default StatusBarTutorial
```

## ActivityIndicator

무언가 작업중을 나타네는 애니메이션을 만들때 유용하다

```jsx
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

function ActivityIndicatorTutorial() {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size='large' />
      <ActivityIndicator size='large' color="yellow" />
      <ActivityIndicator size='large' color="midnightblue" animating={true} />
      <ActivityIndicator size='large' color="midnightblue" animating={false} />
    </View>
  )
}

export default ActivityIndicatorTutorial
```

## Alert

알림을 팝업해주는 컴포넌트다

![Image](./assets/alert.png)

```jsx
import React from 'react'
import { Alert, Button, View } from 'react-native'

function AlertTutoriai() {
  return (
    <View>
      <Button title="Alert" onPress={() => { Alert.alert("Alert!! 🥳") }}/>
      <Button title="Alert With message" onPress={() => { Alert.alert("Alert!! 🥳", "👍 awesome") }}/>
      <Button title="Alert With Button" onPress={() => {
        Alert.alert("Alert!! 🥳", "👍 awesome", [
          {
            text: 'OK',
            onPress: () => { console.log("OK press")}
          },
          {
            text: 'cancel',
            onPress: () => {console.log("Cancel press")}
          },
        ])
      }}/>
    </View>
  )
}

export default AlertTutoriai
```

## CustomComponents

내마음대로 커스텀 해보기\
나중에 좀더 편하게 사용하기 위해 컴포넌트 화 하는 작업이다

```jsx
import React from 'react'
import { Alert, Button, ScrollView, Text, View } from 'react-native'
import AlertTutoriai from './AlertTutoriai'
import InfoApp from '../InfoApp'

function CustomComponentsTutorial() {
  return (
    <View>
      <View style={{backgroundColor:"green", margin:30}}>
        <Text>여기는 커스텀한 컴포넌트 입니다</Text>
      </View>
      <Button title="Alert" onPress={() => { Alert.alert("Alert!! 🥳") }} />
      <ScrollView style={{ backgroundColor: "orange" }}>
        <InfoApp />
      </ScrollView>
    </View>
  )
}

export default CustomComponentsTutorial
```

## StyleSheet

react native에서는 css 를 사용하기 까다롭다\
js 기반으로 작성이 되어야 하기때문으로 알고있는데 \
이러한 상황을 보다 보기 좋게 ```StyleSheet```를 이용해서 작성할 수 도 있고\
```tailwind```가 익숙하다면 ```NativeWind```라는 react native용 ```tailwind```를 사용해도 좋은거 같다

```jsx
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function StyleSheetTutorial() {
  return (
    <View style={styles.container}>
        <Text>Style이 잘 적용됩니다</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor:"plum", width:"100%" }
})

export default StyleSheetTutorial
```

## Multiple Styles

여러개의 스타일을 적용시키는 방법이다

```jsx
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function StyleSheetTutorial() {
  return (
    <View style={styles.container}>
      <Text>Style이 잘 적용됩니다</Text>
      <View style={[styles.box, styles.lightblue]}>
        <Text>Blue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreen]}>
        <Text>Green Box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", width: "100%" },
  box: {
    width: 100,
    height: 100,
    padding: 10,
  },
  lightblue: {
    backgroundColor: 'lightblue',
  },
  lightgreen: {
    backgroundColor: 'lightgreen',
  }
})

export default StyleSheetTutorial
```

## Shadow Styles

| 기능 | ios | android |
| :-: | :-: | :-: |
| shadowColor | ✅ | ✅ |
| shadowOpacity | ✅ | ❌ |
| shadowRadius | ✅ | ❌ |
| elevation | ❌ | ✅ |

쉐도우 부분은 안드로이드와 ios부분이 2개가 다르기 때문에 잘 참조하면서 적용시킬 필요가 보인다

## style ingeritance

style의 상속 계념이 없는듯 하다\
그럼으로 ```Text```와 ```View```를 따로 설정해야 하지만\
```Text``` 상속 끼리는 예외적으로 적용이 된다는것을 참고할 수 있다

```jsx
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function StyleSheetTutorial() {
  return (
    <View style={styles.container}>
      <View style={[styles.darkMode]}>
        <Text style={[styles.darkModeText]}><Text style={[styles.BoldText]}>Style</Text>이 잘 적용됩니다</Text>
      </View>
      <View style={[styles.box, styles.lightblue, styles.boxShadow]}>
        <Text>Blue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreen, styles.androidShadow]}>
        <Text>Green Box</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  darkMode: {
    backgroundColor: 'black'
  },
  darkModeText: {
    color: "white"
  },
  BoldText: {
    fontWeight: "bold"
  },
  container: { flex: 1, backgroundColor: "plum", width: "100%" },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
  },
  lightblue: {
    backgroundColor: 'lightblue',
  },
  lightgreen: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.6,
    shadowRadius: 4
  },
  androidShadow: {
    elevation: 10,
  }
})

export default StyleSheetTutorial
```

## Layout With FlexBox

flex는 화면을 사용하여 item들을 배분하는 모향을 가지는 display이다

> [!WARNING]
> axes 축이 기본적인 방향과 많이 다르다

기본적인 axes

|용어 | 축 | 설명|
| :-: | :-: | :--|
|main| x축 | 왼쪽에서 오른쪽|
|cross| y축  | 위에서 아래로|

![alt text](./assets/axes.png)

react_native axes

|용어 | 축 | 설명|
| :-: | :-: | :--|
|main| y축 | 위에서 아래로 |
|cross| x축  | 왼쪽에서 오른쪽 |

![Image](./assets/axes_react_native.png)

## Code Setup

box 스타일을 컴포넌트로 만들어보자

```jsx
import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'

type BoxStyleProps = {
  style : ViewStyle
} & React.PropsWithChildren

function BoxStyle(props : BoxStyleProps ) {

  return (
    <View style={[styles.box, props.style]}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box : {
    backgroundColor: 'black',
    padding:20,
    margin:2,
    minWidth:240,
    borderRadius:30
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
    color:"white"
  }
})

export default BoxStyle
```

이제 이 박스들을 간단한 코드로 여러개를 만들 수 있다

```jsx
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import ModalTutorial from './components/tutorial/ModalTutorial';
import StatusBarTutorial from './components/tutorial/StatusBarTutorial';
import ActivityIndicatorTutorial from './components/tutorial/ActivityIndicatorTutorial';
import AlertTutoriai from './components/tutorial/AlertTutoriai';
import CustomComponentsTutorial from './components/tutorial/CustomComponentsTutorial';
import StyleSheetTutorial from './components/tutorial/StyleSheetTutorial';
import BoxStyle from './components/BoxStyle';

export default function App() {

  return (
    <View style={styles.container}>
    <BoxStyle style={{backgroundColor:"#1c4c56"}}>1c4c56</BoxStyle>
      <BoxStyle style={{backgroundColor:"#ffbbbb"}}>ffbbbb</BoxStyle>
      <BoxStyle style={{backgroundColor:"#1eae98"}}>1eae98</BoxStyle>
      <BoxStyle style={{backgroundColor:"#6fd6ff"}}>6fd6ff</BoxStyle>
      <BoxStyle style={{backgroundColor:"#fe90af"}}>fe90af</BoxStyle>
      <BoxStyle style={{backgroundColor:"#ff8c8c"}}>ff8c8c</BoxStyle>
      <BoxStyle style={{backgroundColor:"#a890fe"}}>a890fe</BoxStyle>
      <BoxStyle style={{backgroundColor:"#ffffcf"}}>ffffcf</BoxStyle>
      <BoxStyle style={{backgroundColor:"#fca5f1"}}>fca5f1</BoxStyle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    paddingTop: 30,
    backgroundColor: '#ffdfcf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Flex

공간을 차지하는 css display 표현이다.\
이러한 공간을 flex의 값으로 또 분배를 할 수 있으며 모든것을 일정하게 배분하기 때문에 사용하기 편하다

## Flex Direction

| 옵션 | 설명 |
| :-- | :--|
| column | 열을 나눈다 (세로를 나눈다) |
| column-reverse | 열의 순서를 뒤집는다 |
| row | 행을 나눈다 (가로를 일정분할한다) |
| row-reverse | 행의 순서를 뒤집는다 |

## JustifyContent

main axis를 담당한다(잊지말자 여긴 세로가 main이다)

| 옵션 | 설명 |
| :-- | :--|
| flex-start | 맨 위를 기준으로 정렬한다 |
| center| 중앙을 기준으로 정렬한다 |
| flex-end | 맨밑을 기준으로 정렬한다 |
| space-around | 남은 공간을 오브젝트 위와 아래에 똑같이 배분한다 |
| space-between | 엘리먼트 사이만 나눠준다 |
| space-evenly | 남은 공간을 오브젝트 사이에 똑같이 배분한다 |

## AlignItems

cross axis를 담당한다(잊지말자 여긴 가로가 cross이다)

| 옵션 | 설명 |
| :-- | :--|
| flex-start | 맨 왼쪽를 기준으로 정렬한다 |
| center| 중앙을 기준으로 정렬한다 |
| flex-end | 맨 오른쪽을 기준으로 정렬한다 |
| baseline | 모든 오브젝트의 중앙값을 제일큰 오브젝트의 중앙으로 설정한다 |
| stretch | 가로를 꽉 체워준다 |

## AlignSelf

이 컴포넌트를 상위 컨포넌트의 영향을 받지않고 설정한 값의 영향을 받도록 한다
기본적으로는 auto로 상위 옵션을 따라간다

## FlexWrap

안에있는 공간을 넘어가면 다음줄로 바꿔준다

| 옵션 | 설명 |
| :-- | :--|
| nowrap | 기본 상태 |
| wrap | 넘어가는 공간을 다음 줄로 이동 |
| wrap-reverse | 반대로 시작하여 랩함 순서는 바뀌지 않음 |

## Align content

위에 FlexWrap 과 함께 쓰는 옵션이다

결과는 상위 Align 을 쓰던것과 같다 하지만 wrap 이 되어 잘 분할되어 보여준다

## Gap

content끼리의 사이거리를 조정할 수 있다

```Gap``` ````rowGap```` ```columnGap```과 같은 형식으로 옵션을 줄 수 있다

## Flax Basis

flex를 하기전에 공간을 정합니다.\
height와는 다르게 content의 크기와 상관없이 크기를 조절 할 수 있습니다.

## Flax Shrink

flex한 공간에 맞게 컨텐츠를 축소 시킴니다.\
숫자는 비율을 뜻하며 flex한 공간에 알맞게 배분됩니다.

## Flex Grow

남은 공간을 균등하게 가져간다 그리고 입력한 숫자에 때라 비율이 증가한다.

## Relative and Absolute Layout

Relative는 공을 다른 컨포넌트와 공유하며 공간을 정한다

하지만 Absolute는 부모 컨포넌트의 위치를 기준으로 독립적인 위치를 갖게 된다\
그럼으로 좀더 자유 로운 위치 조정이 가능해진다

## Dymnamic User Interfaces

사용자마다 화면의 크기가 다르다 이것을 사용자에게 맞게 작성하는 방법을 알아보자

## Dimensions adaptive_icon

> [!NOTE]
> 화면 크기에 따른 조정 방법도

```jsx
import { Button, Dimensions, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import BoxStyle from './components/BoxStyle';

export default function App() {

  return (
    <View style={styles.container}>
      <BoxStyle style={styles.box}>
        <Text style={styles.text}>1c4c56</Text></BoxStyle>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffdfcf'
  },
  box: {
    width: windowWidth > 500 ? '50' : '20',
    width: windowHeight > 500 ? '50' : '20',
    backgroundColor: "#1c4c56",
    alignSelf: "flex-start"
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24,
  }
});
```

이러한 방식으로 수종으로 화면의 크기를 가져와 일정한 크기로 지정해 주는 방법도 있다 혹은 root 변수 값으로 배정해주어도 좋은거 같다.

## Dimensions API Drawback

```app.json```에 있는 ```orientation``` 모드를 ```default``` 로 설정하면\
가로모드와 세로모드가 적용 되는 것을 볼 수 있다.

```json
{
  "expo": {
    "name": "react_native_r3f",
    "slug": "react_native_r3f",
    "version": "1.0.0",
    "orientation": "default",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

이제 회전을 통해 변화를 알아보자

```jsx
import { Button, Dimensions, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import BoxStyle from './components/BoxStyle';
import { useEffect, useState } from 'react';

export default function App() {
  const [dimensions, setDimensions] = useState({
    window: Dimensions.get("window")
  })

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ( window ) => {
      setDimensions(window)
    })
    return () => { subscription.remove() };
  }, [])

  const windowWidth = dimensions.window.width;
  const windowHeight = dimensions.window.height;
  return (
    <View style={styles.container}>
      <View>
        <BoxStyle style={[styles.box, {
          width: windowWidth > 500 ? '50' : '20',
          height: windowHeight > 500 ? '50' : '20',
        }]}>
          <Text style={{ fontSize: windowWidth > 500 ? 50 : 24, }}>1c4c56</Text></BoxStyle>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffdfcf'
  },
  box: {
    // width: windowWidth > 500 ? '50' : '20',
    // height: windowHeight > 500 ? '50' : '20',
    backgroundColor: "#1c4c56",
    alignSelf: "flex-start"
  },
  text: {
    // fontSize: windowWidth > 500 ? 50 : 24,
  }
});
```

이런식으로 변수를 사용해서 작업하는것도 가능하다

## useWindowDimensions

> [!TIP]
> ```useWindowDimensions```을 이용하여 좀더 편하게 사용이 가능하다

```jsx
import { Button, Dimensions, Modal, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import BoxStyle from './components/BoxStyle';
import { useEffect, useState } from 'react';

export default function App() {
  const dimensions = useWindowDimensions();
  
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;
  return (
    <View style={styles.container}>
      <View>
        <BoxStyle style={[styles.box, {
          width: windowWidth > 500 ? '50' : '20',
          height: windowHeight > 500 ? '50' : '20',
        }]}>
          <Text style={{ fontSize: windowWidth > 500 ? 50 : 24, }}>1c4c56</Text></BoxStyle>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffdfcf'
  },
  box: {
    backgroundColor: "#1c4c56",
    alignSelf: "flex-start"
  },
  text: {
  }
});
```

## SafeAreaView

아이폰 의 힌치( 대머리 ) 나 안드로이드의 네비케이션들의 오차를 스스로 작업 해줄 수 도 있지만 ```SafeAreaView```를 사용해서 이미 관리되고 있는 ui는 스타일이 께지지 않게 유지해준다

```jsximport { Button, Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import BoxStyle from './components/BoxStyle';
import { useEffect, useState } from 'react';

export default function App() {
  const dimensions = useWindowDimensions();

  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View>
          <BoxStyle style={[styles.box, {
            width: windowWidth > 500 ? '50' : '20',
            height: windowHeight > 500 ? '50' : '20',
          }]}>
            <Text style={{ fontSize: windowWidth > 500 ? 50 : 24, }}>1c4c56</Text></BoxStyle>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffdfcf'
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#ffdfcf'
  },
  box: {
    backgroundColor: "#1c4c56",
    alignSelf: "flex-start"
  },
  text: {
  }
});
```

## Platform

```PlatForm```이라는 클레스를 가지고 Divce의 OS정보를 가져오는거 같다.\
이 클레스는 ios android web window 등 여러가지를 감지하는데 이러한 상황마다 설정을 다르게 주어 좀더 사용자 친화적인 앱을 만들어 줄 수 있는거 같다

```js
Platform.OS: "ios" | "android" | "windows" | "macos" | "web"
```

에는 이러한 속성들이 시스템에 따라담겨있고

```jsx

  text: {
    ...Platform.select({
      ios: {
        color: "#a33fff"
      },
      android: {
        color: "#00f0a3"
      }
    }),
  }
```

와 같이 어떠한 system에서 효과를 다르게 줄건지도 설정이 가능하다

또한 좀 신기하지만 쓰기 불편한 filename 시스템이 있는데

```**.ios.tsx``` ```**.android.tsx```와 같이 한폴더에 파일을 같이 두면 시스템 속성에 맞는 파일을 가져온다고 한다

```tsx
import { Button, Dimensions, Modal, SafeAreaView, Platform, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import BoxStyle from './components/BoxStyle';
import { useEffect, useState } from 'react';
import CustomButton from '@/components/tutorial/CustomButton/CustomButton'

export default function App() {
  const dimensions = useWindowDimensions();

  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View>
          <CustomButton title={"press on"} ></CustomButton>
          <BoxStyle style={[styles.box, {
            width: windowWidth > 500 ? '50' : '20',
            height: windowHeight > 500 ? '50' : '20',
          }]}>
            <Text style={[styles.text ,{ fontSize: windowWidth > 500 ? 50 : 24, }]}>1c4c56</Text></BoxStyle>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffdfcf'
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Platform.OS === "ios" ? '#ffa13f' : '#ffdfcf'
  },
  box: {
    backgroundColor: "#1c4c56",
    alignSelf: "flex-start"
  },
  text: {
    ...Platform.select({
      ios: {
        color: "#a33fff"
      },
      android: {
        color: "#00f0a3"
      }
    }),
  }
});
```

## Pokemon Card

포켓몬카드를 만드는 예시이다.

컴포넌트를 잘 만들어 두면 보다 편하게 같은 구죠을 만들 수 있기때문에 잘 활용하자 🥳

🍝 App.tsx

```jsx
import { SafeAreaView, Platform, StyleSheet, View, useWindowDimensions, ScrollView } from 'react-native';
import PokemonCard from './components/tutorial/PokemonCard/PokemonCard';

export default function App() {
  const dimensions = useWindowDimensions();
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  const charmanderData = {
    name: "Charmander",
    image: require("@/assets/pokemon/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("@/assets/pokemon/squirtle.png"), // Replace with the actual image path
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("@/assets/pokemon/bulbasaur.png"), // Replace with the actual image path
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: require("@/assets/pokemon/pikachu.png"), // Replace with the actual image path
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  };

  console.log(charmanderData)
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView>
          <PokemonCard {...charmanderData} />
          <PokemonCard {...squirtleData} />
          <PokemonCard {...bulbasaurData} />
          <PokemonCard {...pikachuData} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffdfcf'
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Platform.OS === "ios" ? '#ffa13f' : '#ffdfcf'
  },
});
```

🍝 PokemonCard.tsx

```jsx
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
```

## List

react 와 같은 방식으로 map을 이용해 요소들을 하나하나 함수들 돌려 보여주는거 같다

```jsx
import { SafeAreaView, Platform, StyleSheet, View, useWindowDimensions, ScrollView, Text } from 'react-native';
import PokemonCard from './components/tutorial/PokemonCard/PokemonCard';

import pokemonList from "@/data/pokemon.json"

export default function App() {
  const dimensions = useWindowDimensions();
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {pokemonList.map((pokemon, index) => {
            return (
              <View style={styles.card} key={pokemon.id}>
                <Text style={styles.cardText}>{pokemon.type}</Text>
                <Text style={styles.cardText}>{pokemon.name}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#ffdfcf'
  },
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16
  },
  cardText: {
    fontSize: 24
  },
});
```

## FlatList

좀더 간단한 방법으로 리스트를 보여주는 거같다

map 사용시 ```key```를 쪽 줘야하는데 ```keyExtractor``` 라는게 디폴트로 index를 넣어주고 원하는 값을 설정하면 그값으로 넣어주는거 같다

```jsx
  <FlatList
    data={pokemonList}
    renderItem={({ item }) => {
      return (
        <View style={styles.card} key={item.id}>
          <Text style={styles.cardText}>{item.type}</Text>
          <Text style={styles.cardText}>{item.name}</Text>
        </View>
      )
    }} 
    keyExtractor={(item, index) => item.id.toString()} />
    ItemSeparatorComponent={<View>}
  />
```

## Item Separtor

> [!TIP]
> 양 끝을 제외하고 설정한 값으로 나눠 준다.

```jsx
ItemSeparatorComponent={() => { return <View style={{ height: 16 }} /> }}
```

상위 코드를 ```FlatList```에 넣으면 적용이 된다

## List Empty Component

리스트가 비었을때 보여주는 컴포넌트를 정한다

```jsx
ListEmptyComponent={()=>{return <Text>포켓몬이 없습니다</Text>}}
```

상위 코드를 ```FlatList```에 넣으면 적용이 된다

## List Header and Footer

리스트의 헤더와 푸터를 꾸밀 수 있다.\
이러한 방법으로 좀더 정형화된 리스트 목록을 만들 수 있을거 같다.

```jsx
ListHeaderComponent={<Text style={styles.headerText}>여기는 해더입니다</Text>}
ListFooterComponent={<Text style={styles.footerText}>여기는 푸터입니다</Text>}
```

상위 코드를 ```FlatList```에 넣으면 적용이 된다

## Section List

세션별로 나누어 좀더 편하게 그룹을 관리할 수 있다\
뭐랄까 점도 정교화된 스타일 이라고 생각하면 된다

```jsx
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
```

이런식으로 사용가능하고 목차별로 나누아 지기 때문에 눈에 확띈다.

## Text Input

텍스트 인풋을 만들어 준다\
입력값에 따라 UI를 보여주는 아래의 코드를 차마조하여 만들 고 싶은걸 만들면 될거같다

```jsx
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function InputTextTutorial() {
  const [name, setname] = useState("")
  return (
    <View>
      <TextInput style={styles.input} value={name} onChangeText={setname} />
      <Text>You'r name is {name}</Text>
    </View>
  )
}

export default InputTextTutorial

const styles = StyleSheet.create({
  input: {
    margin: 8,
    padding: 8,
    borderRadius: 30,
    borderWidth: 2,
  }
});
```

또한 여러가지 프롬프트가 있다.

| 옵션 | 설명 |
| :-- | :--|
| placeholder | 아무값이 없을때 보여주는 가이드라인 글이다 |
| secureTextEntry | 비밀번호처럼 보이게 한다 |
| keyboardType| 여러가지 타입의 입력 키보드를 준다 |
| autoCorrect={false} | 자동 글자 수정을 하는것을 꺼준다 (정말 중요) |
| autoCapitalize='none' | 자동 대문자 수정을 꺼준다 |
| multiline | 여러줄을 받을 수 있게 해줍니다 |

> [!IMPORTANT]
> 자동으로 수정되는 키값을 꺼두어야 사용자의 입력값을 정확히 받을 수 있다

## Switch

스위치 버튼을 만드는 거다

> [!IMPORTANT]
> ```onValueChange``` 함수에 꼭 함수형으로 ```set```함수를 넣어줘라

```jsx
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
```

## From

이전 배웠던 ```input```과 여러가지 컴포넌트로 ```from```을 만들어 쓸 수 있다

```jsx
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

function FormTutorial() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.form}>
      <Text style={styles.label}>UserName</Text>
      <TextInput style={styles.input}
        placeholder='enter your username'
        value={username}
        onChangeText={(value) => { setUsername(value) }} />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input}
        placeholder='enter your Password'
        value={password}
        onChangeText={(value) => { setPassword(value) }} 
        secureTextEntry/>

    </View>
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
  }
});
```

## KeyboardAvoidingView

keyboard에 따라서 반응하는 form 을 만들려 할때 사용한다.

```jsx
<KeyboardAvoidingView
  behavior='padding'
  keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
>
...생락
</KeyboardAvoidingView>
```

이렇게 추가하는 방법으로 키보드 이벤트가 생겼을때 폼을 올려주는 방식을 만들수 있다.

## Form Validation

```jsx
const [errors, setErrors] = useState<{ username?: string, password?: string }>({});

const validateForm = () => {
  let errors: { username?: string, password?: string } = {}

  if (!username) errors.username = "Username is required";
  if (!password) errors.password = "Password is required";
  setErrors(errors);
  return Object.keys(errors).length === 0;
};
```

이라한 방법으로 에러를 컨트롤 할 수 있다

## Form Submission

```jsx
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
```

전체적인 코드다\
이렇게 폼을 관리하여 보다 ux적으로 만들어 줄 수 있습니다

## NetWorking

이제 json을 가지고 정보를 받고 내보네는 연습을 해볼 예정이다.

## Get Requests

간단한 데이터 받기 방식이다 ```fetch```를 사용하여 받고
```https://jsonplaceholder.typicode.com/posts```
실험용 사이트 에서 제공하는 데이터를 받아 형식에 맞게 사용하면 된다.

```jsx
type postData = {
  userId: number,
  id: number,
  title: string,
  body: string
}

const [postList, setPostList] = useState<postData[]>([])

const fetchData = async (limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  )
  const data = await response.json()
  setPostList(data)
}
useEffect(() => {
  fetchData();
}, [])
```

## Loading State

```jsx
const [isLoading, setIsLoading] = useState(true)

if (isLoading) {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color="#0000ff" />
      <Text>Loading</Text>
    </View>)
}
```

이러한 방법으로 로딩 상태를 만들 수 있고\
함수에 아래 코드를 넣어주는 것으로

```jsx
setIsLoading(false)
```

로딩 상태를 없앨 수 있다.

## Pull to Refresh

> [!TIP]
> 상위로 끌여올려 새로 고침을 하는 엡전용 동작을 만들어 준다

```jsx
<FlatList
  ...
  refreshing={refreshing}
  onRefresh={handlelRefresh}
/>
```

이렇게 함수를 추가해주고 원하는 실행 함수를\
 ```onRefresh```에 넣어주면 상단에 끌어올림에 새로고침을 해준다

## POST Request

post 하는 법에 대하여 고만해보자

간단하게 post 는 데이터 형식에 대한 해더와 정보를 담은 바디로 구성하여 쏴주면 된다.\
이런한 함수를 만드는 방법은 아래와 같고

```jsx
const addPost = async () => {
  if (!postTitle || !postBody)
    return;
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
}

```

입력을 받는 부분은 이러하다

```jsx
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
```

이것으로 압력을 한 값에 대하여 답변이 올것이고\
리스트에 추가하는 식으로 하여 리스트가 늘고 있다

## Error Handling

에러는 상위 코드에 요청 및 응답이 잘못됫을때 감지하여 보여주기 위한 것으로\
```try``` 가 잘안됫을때 보여줄 화면을 생성하면 된다.

```jsx
{error ?
  <View style={styles.errorContainer}>
    <Text style={styles.errorText}>{error}</Text>
  </View> :
  undefined
}
```

상위처럼 코드를 짜주고

```jsx
const [error, setError] = useState("")

try {
  setError("")
  ...
} catch (error) {
  console.error("Error adding new post:", error),
    setIsPostring(false)
  setError("Failed to add new post")
}
```

이러한 식으로 에러상태를 확인하면 된다

> [!TIP]
> error 문구 없에는거 잊지말자

## Navigation

설치

🔗 링크 :[https://reactnavigation.org/](https://reactnavigation.org/)

```bash
npm install @react-navigation/native
```

expo 에 플러그인 하기

```bash
npx expo install react-native-screens react-native-safe-area-context
```

## Stack Navigation

stack navigation 설치

```bash
npm install @react-navigation/native-stack
```

이제 좀 심화 과정이 필요하다

> [!IMPORTANT]
> ```typescrite```는 ```navigation```을 쓰기위해 ```porps```를 지정해주여야하는데\
> ```NativeStackNavigationProp```이라는 타입을 불러오고 지정한 ```stackparam``` 타입을 넣어주어야 한다

```jsx
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import React from 'react'
import Home from '../Home'
import About from '../About'


type RootStackParamList = {
  Home: undefined;
  About: { userId: string };
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList
>;

const Stack = createNativeStackNavigator<RootStackParamList>()

function NavigationTutorial() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='About' component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationTutorial
```

여기서는 저 ```ProfileScreenNavigationProp```을 사용하지 않지만 ```useNavigation()```을 사용할때 필요하기 때문에\
```export``` 선언을 해준다.

```jsx
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { ProfileScreenNavigationProp } from './tutorial/NavigationTutorial';

function Home() {
  const nav = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View>
      <Text>HOME PAGE</Text>
      <Button title='Go to About' onPress={() => nav.navigate("About", { userId: "userid" })} />
    </View>
  )
}

export default Home
```

이제 보면 속성과 파라미터를 지정하여 타입에 맞게 보내줄 수 있다.

> [!NOTE]
> 단 페이지 함수에도 porps 형식을 같게 해주어야 한다.

## Stack Navigation Options

이제 네비게이션을 꾸미는 방법을 알아보자

1. 개인하나하나 꾸미기

  ```jsx
  <Stack.Screen name='Home' component={Home}
    options={{
      title: "Welcome Home",
      headerStyle: {
        backgroundColor: "#ffdfcf"
      },
      headerTintColor: "#96637A",
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerRight: () => (
        <Pressable onPress={() => { alert("Menu button pressed!") }}>
          <Text style={{ color: "#96637A", fontSize: 16 }}>Menu</Text>
        </Pressable>
      )
    }}
  />
  ```\
  상위의 코드식으로 ```options```에 설정값을 주어 꾸미는 방법이 있습니다.

2. 모든 네비게이션 설정
  ```jsx
  <Stack.Navigator initialRouteName='Home' screenOptions={
    {
      title: "Welcome Home",
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#96637A",
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerRight: () => (
        <Pressable onPress={() => { alert("Menu button pressed!") }}>
          <Text style={{ color: "#96637A", fontSize: 16 }}>Menu</Text>
        </Pressable>
      )
    }
  }>
  ```

  ```sreenOption```을 사용하면 하위 정의된 네비게이션들이 모두 같은 형태를 유지할 수 있다

> [!NOTE]
> 단 개인 옵션으로 스타일링 한 것으로 덮어 씌워질 수 있습니다.

## Draw Navigation

메뉴 드롭박스 버튼으로 이동하는 네비게이션 이다

```jsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboards from '../Dashboards';
import Setting from '../Setting';
import { RootStackParamList } from './NavigationTutorial';
import { View } from 'react-native';

const Drawer = createDrawerNavigator<RootStackParamList>();

function NavigationDrawerTutorial() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboards} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  )
}

export default NavigationDrawerTutorial
```

## Draw Navigation Options

상위 네비게이션과 동일하게 여러개의 옵션을 줄 수도 있고 하나의 스크린에만 줄 수 도 있다

```jsx
<Drawer.Screen name="Dashboard" component={Dashboards} options={{
  title: "My dashboard",
  drawerLabel: "Dashboard label",
  drawerActiveTintColor: "red",
  // drawerInactiveBackgroundColor: "pink",
  drawerContentStyle:{
    backgroundColor:"gray"
  },
  headerRight:()=>{
    return <View></View>
  }
}}/>
```

상위 처럼 간단히 옵션을 주어 드롭박스를 꾸밀 수 있다
