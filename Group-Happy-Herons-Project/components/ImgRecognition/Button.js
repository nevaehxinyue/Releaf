import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function Button({name, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} className="bg-base-green rounded-3xl p-2 w-28 flex items-center">
        <Text className="font-medium text-lg">{name}</Text>
    </TouchableOpacity>
    );
}


export default Button;