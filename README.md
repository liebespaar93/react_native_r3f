# EXPO-TYPESCRIPT

## Expo Typescript

Expo 공식 문서 : [https://docs.expo.dev/guides/typescript/?redirected](https://docs.expo.dev/guides/typescript/?redirected)

Expo Typescript를 사용하기 위해

reactnative 공식 문서 : [https://reactnative.dev/docs/typescript](https://reactnative.dev/docs/typescript)

```bash
npx create-expo-app --template
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
    "paths": {
      "@/*": [
        "./*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ]
}
```

```baseUrl```과 ```@```를 사용한 파일 접근을 추가해 주었다

🍝 app.json

```json
{
  "expo": {
    "name": "my-app",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
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
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
```

마즈막으로 metro 설정을 하자

> [!TIP]
> metro란 ```react native``` 용 ```javascript``` 번들러 라고 한다
🍝 metro.config.ts

```jsx
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
    // Adds support for `.db` files for SQLite databases
    'obj', 'glb'
);
module.exports = config;

```

이렇게 환경 설정이 완료 되었다
