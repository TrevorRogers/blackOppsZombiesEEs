
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

const BO3 = () => {
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={{disply: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 50}}>
          BO3 Zombies
        </Text>
        <Text style={{color: 'white', fontSize: 25, color: 'orange'}}>
          Choose your map
        </Text>
      </View>
      <View style={{border: 'solid 1px white', margin: 20}}>
    <View>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
           borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Shadows of Evil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
           borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>The Giant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
           borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Der Eisendrache</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
           borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Zetsuboh </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
           borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Gorod Krovi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', margin: 20,
           borderRadius: 30, height: 60, backgroundColor: 'black', border: 'solid 2px orange',}}>
          <Text style={{color: 'lightgrey', fontSize: '40px', fontWeight: '100'}}>Revelations</Text>
        </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  )
}

export default BO3