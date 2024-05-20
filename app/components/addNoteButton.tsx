import * as React from 'react';
import { Button } from "react-native";

export const AddNoteBtn = ({navigation,path}) => { 
    return (
        <Button 
        onPress={navigation.navigate(path)}
        title="+"
        />
    )
};

