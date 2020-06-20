import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getMetricMetaInfo, timeToString } from '../utils/helper'
import Udaslider from './Udaslider'
import Udastepper from './Udastepper'
import DateHeader from './DateHeader'
import TextButton from './TextButton'

const SubmitBtn = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>Submit</Text>
        </TouchableOpacity>
    );
}

class AddEntry extends Component {
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
    }

    increment = (metric) => {
        const { max, step } = getMetricMetaInfo(metric);
        let count = this.state[metric];

        this.setState(state => {
            count += step;
            return {
                ...state,
                [metric]: count > max ? max : count
            }
        })
    }

    decrement = (metric) => {
        const { step } = getMetricMetaInfo(metric);
        let count = this.state[metric];

        this.setState(state => {
            count -= step;
            return {
                ...state,
                [metric]: count < 0 ? 0 : count
            }
        })
    }

    slide = (metric, value) => {
        this.setState(state => ({
            [metric]: value
        }));
    }
    submit = () => {
        alert('submitted');
    }
    reset = () => {
        const key = timeToString();

    }
    render() {
        if (this.props.alreadyAdded) {
            return (
                <View>
                    <MaterialCommunityIcons
                        name="emoticon-happy-outline"
                        size={45}
                        color="black" />
                    <TextButton onPress={this.reset}>Reset</TextButton>
                </View>
            );
        }
        return (
            <View>
                <DateHeader date={new Date().toLocaleDateString()} />
                {Object.keys(this.state).map(metric => {
                    const { getIcon, type, ...rest } = getMetricMetaInfo(metric);
                    const value = this.state[metric];
                    return (
                        <View key={metric}>
                            {getIcon()}
                            {type === "stepper" ?
                                <Udastepper
                                    value={value}
                                    onIncrement={() => this.increment(metric)}
                                    onDecrement={() => this.decrement(metric)}
                                    {...rest}
                                /> :
                                <Udaslider
                                    value={value}
                                    onChange={(value) => this.slide(metric, value)}
                                    {...rest}
                                />}
                        </View>
                    );
                })}
                <SubmitBtn onPress={this.submit} />
            </View>

        )

    }
}

export default AddEntry;