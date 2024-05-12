import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';


export const Header = () => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>ToOd Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: 'cornflowerblue',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize:20,
        fontWeight: 'bold',
    }
})
