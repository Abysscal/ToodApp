import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },

    content: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor:'orange'
    },

    list: {
      display: 'flex',
      flexDirection: 'column',
    },

    btmNavBar: {
      height: 60,
      bottom: 20,
      width: '95%',
      position: 'absolute',
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: 'coral',
      justifyContent: 'space-around',
    },
    
    todoItem: {
      backgroundColor: '#fff',
      padding: 16,
      marginTop: 16,
      borderColor: 'grey',
      borderWidth: 5,
      borderStyle: 'solid',
      borderRadius: 10
    }
  });