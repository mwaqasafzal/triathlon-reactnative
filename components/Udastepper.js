import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

const Udastepper = ({ onIncrement, onDecrement, value,unit }) => {
    return (
        <View>
            <View>
                <TouchableOpacity onPress={onIncrement}>
                    <FontAwesome name="plus" color="red" size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDecrement}>
                    <FontAwesome name="minus" color="red" size={25} />
                </TouchableOpacity>
            </View>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>

        </View>
    );
}
export default Udastepper;