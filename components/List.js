import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native'


const ListItem = ({ item }) => {
    return (
        <View>
            <Text>Hello World</Text>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
        </View>
    );
}
const getListItem = item => <ListItem item={item} />

const List = ({ data }) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={data=>getListItem(data.item)}
            />
        </View>
    );

}

export default List