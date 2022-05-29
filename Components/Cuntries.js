import { View, Text, TextInput , ScrollView, StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react'
import Cuntry from './Cuntry'
// import { ScrollView } from 'react-native'

export default function Cuntries() {
  const [cuntries, setCuntries] = useState([])
  const [searched, setSearsed] = useState([])
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setCuntries(data)
        setSearsed(data)
      })
  }, [])

  const handleSearch = text =>{
    const searchResult = cuntries.filter(cuntry => cuntry.name.common.includes(text))
    setSearsed(searchResult)
  }
  return (
    <View>
      <Text>Cuntry {cuntries.length}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleSearch}
      />
      <ScrollView> 
          {
              searched.map((cuntry, i) => <Cuntry key={i} cuntry={cuntry}></Cuntry>)
          }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
