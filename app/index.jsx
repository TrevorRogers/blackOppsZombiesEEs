import React from 'react'
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native'
import {router, Redirect} from 'expo-router'
import background from '../assets/images/blackopsbackground.png'



// const background = {uri: 'https://i.pinimg.com/564x/72/53/09/725309e9b438c38eb991579a2bf3cb94.jpg'}

const index = () => {
  return (
      <ImageBackground source={background} style={{width: '100%', height: '100%', tintColor: 'cyan'}} blurRadius={4} >
 <SafeAreaView 
 style={{backgroundColor: 'rgba(0,0,0, 0.4)', flex: 1 }}
 >
    <ScrollView >
        <View style={styles.box}>
        <Text style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', fontWeight: '600', marginTop: 50}}>The offical</Text>
        <View>
        <Text style={{color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '70px', fontWeight: '600', margin: 18 }}>Zombies</Text>
        {/* <linearGradient colors={['white', 'orange']} start={{x:0, y: .5}}/> */}
        </View>
        <Text style={{color: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '40px', fontWeight: '600' }}>Easter Egg Guides</Text>
        <View>
            <Text style={{color: 'white', margin: '30px',display: 'flex', justifyContent: 'center', fontSize: 18}}>
                choose your game below
            </Text>
        </View>
        <View >
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
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    background: {
        backgroundColor: 'black'
    },
    button: {
        backgroundColor: 'black',
        justifyContent: 'center',
        borderRadius: 3,
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid orange',
        marging: 10,
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