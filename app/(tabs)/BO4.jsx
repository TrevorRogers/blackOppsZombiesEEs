import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import {Link, router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const BO4 = () => {
  return (

    <ScrollView style={{backgroundColor: '#121212'}}>
      <View style={{disply: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 1px orange', margin: 20}}>
      <Text style={{color: 'white', fontSize: 50}}>
          Black Ops 4
        </Text>
        <Text style={{color: 'white', fontSize: 50}}>
          Zombies
        </Text>
      </View>
        <Text style={{color: 'white', fontSize: 25, color: 'orange', textAlign: 'center', marginTop: 20}}>
          Choose your map
        </Text>
    <View style={{ margin: 20}}>
  <View>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Tag der Toton</Text>
      </TouchableOpacity>
      {/* <Link href="./BloodStep0" asChild> */}
      <TouchableOpacity 
      onPress={() => router.push("/BloodStep0")}
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Blood of the Dead</Text>
      </TouchableOpacity>
      {/* </Link> */}
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Alpha Omega</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>IX</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Ancient Evil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Dead of the Night</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
         borderRadius: 30, height: 60, }}>
        <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Voyage of Despair</Text>
      </TouchableOpacity>
  </View>
  </View>
  </ScrollView>

  )
}

export default BO4