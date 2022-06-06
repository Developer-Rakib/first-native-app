import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Cuntry({ cuntry }) {
    return (
        <View>

            <Text>{cuntry.name.common}</Text>
            <Image
                source={{
                    uri: cuntry.flags.png
                }}
                style={{ width: 100, height: 100 }}
            ></Image>
        </View>
    )
}

