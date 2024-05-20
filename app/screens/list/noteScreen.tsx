import * as React from 'react';
import { useState } from 'react';
import { View,Text, Button, TextInput } from 'react-native';


const NoteScreen = ({navigation, route}) => { 
    const [text, onChangeText] = useState('')
    const homeHandler = () => {
        navigation.goBack({savedNote: text});
    }
    
    return (
        <View>
            <TextInput 
                placeholder='Enter your notes here...'
                onChangeText={onChangeText}
                multiline={true}

            />
            <Button title="SAVE" onPress={homeHandler}/>
        </View>
    );
};






export default NoteScreen;