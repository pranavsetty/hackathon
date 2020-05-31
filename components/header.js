import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Header() {
    return (

        <View style={styles.header}>
            <Text style={styles.title}>Covid Precautions</Text>
            <Text style={styles.title}>National id number - TN16451</Text>

            

        </View>

    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 50,
        backgroundColor: '#ADD8EC',
    },

    title:{
        fontSize: 20,
        textAlign: 'center',
        color:'#fff'
        
    }

});











