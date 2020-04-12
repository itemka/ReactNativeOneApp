INTRODUCTION

- DOC https://reactnative.dev/docs/getting-started

- DOC Expo https://docs.expo.io/versions/v37.0.0/tutorial/planning/

- default <Viev> has dusplay: `flax`

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

- Есть разный список задач передаваемых параметров, которые можно увидеть в документации

- Event is special and different with the Web. It needs special components.


WORK WITH COMPONENTS

- switch between screens