import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChatScreen = () => {
    return(
        <View>
            <Text style={styles.container}>Chat Screen</Text>
            <Button 
                title="Click Here"
                onPress={() => alert('Clicked!')}
            />
        </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    }
});