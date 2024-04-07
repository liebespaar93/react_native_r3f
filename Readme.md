# EXPO-TYPESCRIPT

## Expo Typescript

[https://docs.expo.dev/guides/typescript/?redirected](https://docs.expo.dev/guides/typescript/?redirected)

Expo Typescript를 사용하기 위해

```bash
npx create-expo-app -t expo-template-blank-typescript
npm install ts-node typescript 
```

이제 expo에게 자동으로 tsconfig.json파일을 만들어 달라고 할 수도 있다.

```bash
npx expo customize tsconfig.json
```

tsconfig를 커스텀 마이즈 해보자

🍝 tsconfig.json

```json filename="/tsconfig.json"
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]
}
```

```baseUrl```과 ```@```를 사용한 파일 접근을 추가해 주었다

🍝 app.json

```json
{
  "expo": {
    "name": "expo-typescript",
    "slug": "expo-typescript",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "experiments": true,
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

마즈막으로 metro 설정을 하자

> [!TIP]
> metro란 ```react native``` 용 ```javascript``` 번들러 라고 한다
🍝 metro.config.ts

```jsx
import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

module.exports = config;
```

이렇게 환경 설정이 완료 되었다
