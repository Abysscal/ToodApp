import React from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const TodoItem = ({item}) => {
    return (
        <TouchableOpacity>
            <Text style={styles.todoItem}>
                {item.text}
            </Text>
        </TouchableOpacity>
    );
};