# INTRODUCTION

- Reload Emulator: `android: ⌘ + M` and `iOS: ⌘ + R`.

- DOC https://reactnative.dev/docs/getting-started

- DOC Expo https://docs.expo.io/versions/v37.0.0/tutorial/planning/

- default `<Viev>` has dusplay: `flax`

- flex: 1 - all screen size

- We can do the following two methods:
1. without scroll
```
  <View>
    {todos.map(item => (
      <Todo
        key={item.id}
        todo={item}
        removeTodo={removeTodo}
        id={item.id}
      />
    ))}
  </View>
```
2. with scroll
```
  <ScrollView>
    {todos.map(item => (
      <Todo
        key={item.id}
        todo={item}
        removeTodo={removeTodo}
        id={item.id}
      />
    ))}
  </ScrollView>
```
3. with scroll and show only what we can see, but keeps others in memory.
```
  <FlatList
    keyExtractor={item => item.id.toString()}
    data={todos}
    renderItem={({item}) => (
      <Todo
        key={item.id}
        todo={item}
        removeTodo={removeTodo}
        id={item.id}
      />
    )}
  />
```

- Event is special and different with the Web. It needs special components.


# WORK WITH COMPONENTS

- switch between screens

- modal window


# EXPO ITEMS AND STYLES

- To work with fonts, you need to download several fonts for local saving

- fonts are added asynchronously (`expo install expo-font`)

- `yarn add @expo/vector-icons`

- control keyboard

- determine the platform

- add adaptive styles


# WORK WITH CONTECST

- `useReducer`, `useContext` (code refactor)


# WORK WITH SERVER

- us firebase

- create universal HTTP class and add to functions

# PREPARATION AND DEPLOY

- https://docs.expo.io/workflow/configuration/

- https://docs.expo.io/guides/splash-screens/#customize-the-splash-screen-for-your-app

- `expo publish` -> log in Expo -> get link: https://expo.io/@itemka/ReactNativeOneApp

- `expo build:android` and `expo build:ios` https://docs.expo.io/distribution/building-standalone-apps/

- `expo upload:ios` (https://docs.expo.io/distribution/building-standalone-apps/)

- for get keys: `expo fetch:android:keystore` and then `expo upload:android`

- `expo build:android -t apk` -> Build queued... -> then get apk by the link, for example: https://expo.io/artifacts/221aa18c-91ef-44a6-909e-e03f7c2f3ab2
