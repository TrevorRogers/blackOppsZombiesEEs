
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

const BO3 = () => {
  return (
    <ScrollView style={{backgroundColor: '#121212'}}>
      <View style={{disply: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid 1px orange', margin: 20}}>
      <Text style={{color: 'white', fontSize: 50}}>
          Black Ops 3
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
           borderRadius: 3, height: 60, textDecorationLine: 'underline'}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Shadows of Evil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 3, height: 60, }}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>The Giant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 30, height: 60,}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Der Eisendrache</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 30, height: 60, }}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Zetsuboh </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 30, height: 60, }}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Gorod Krovi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20,
           borderRadius: 30, height: 60, }}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Revelations</Text>
        </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  )
}

export default BO3