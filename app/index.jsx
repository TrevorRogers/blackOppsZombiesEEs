import React from 'react'
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import {router, Redirect} from 'expo-router'

const index = () => {
  return (
 <SafeAreaView style={{color: 'black', backgroundColor: 'black', flex: 1 }}>
    <ScrollView style={styles.background}>
        <View style={styles.box}>
        <Text style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', fontWeight: '500'}}>Black Opps Zombies</Text>
        <Text style={{color: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', fontWeight: '500' }}>Easter Egg Guide</Text>
        <View>
            <Text style={{color: 'white', margin: '30px',display: 'flex', justifyContent: 'center'}}>
                choose your game below
            </Text>
        </View>
        <View style={{border: '2px solid white', borderRadius: 20}}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/BO3")}>
                <Text  style={styles.text}>Black Opps 3</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/BO4")}>
                <Text style={styles.text}>Black Opps 4</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => router.push("/ColdWar")}>
                <Text style={styles.text}>Cold War</Text>
            </TouchableOpacity>
        </View>
        </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        backgroundColor: 'black'
    },
    button: {
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 50,
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid orange'
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px'
    },
    // box: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
  });


export default index