import { useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { Header } from './header';
import { styles } from './styles';
import { TodoItem } from './todoItem';


const HomeScreen = ({navigation, route}) => {
    const [todos, setTodos] = useState([
        {text: "todo note here", key: 1},
        {text: "i need food", key: 2},
        {text: "FOOD", key: 3},

    ])

    const addNoteHandler = (saveNoteHandler) => {
        navigation.navigate('Note', {saveNoteHandler: saveNoteHandler});
    }

    

    const saveNoteHandler = () => {
        const savedNotes = route.params?.savedNote;
        console.log(todos[todos.length - 1]);
        // obj.forEach((item,index) => {
        //     arr.push(item.key)
            
        //   })
        //   console.log(arr)
        todos.push({text: savedNotes, key: todos[todos.length - 1].key+1})
        setTodos(todos);
    }
    
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={({item}) => (
                            <TodoItem item = {item}/>
                        )}
                    />
                </View>
                <Button
                    title = {"New notes screen"} 
                    onPress={addNoteHandler} 
                />
                <Button
                    title = {"refresh data"} 
                    onPress={saveNoteHandler} 
                />
            </View> 
            <View style={styles.btmNavBar}>
                <Text>bottom header bar</Text>
            </View>
        </View>
    );
}; 


  export default HomeScreen;