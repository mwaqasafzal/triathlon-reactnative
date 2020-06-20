import React from 'react'
import { View, Text, Slider } from 'react-native'
const Udaslider = ({ max, value, unit, step, onChange }) => {
    console.log(max);
    return (
        <View>
            <Slider
                maximumValue={max}
                minimumValue={0}
                value={value}
                step={step}
                onValueChange={onChange}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    );
}
export default Udaslider;