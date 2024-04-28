import React from 'react';
import {  Button, SafeAreaView, Text, View } from 'react-native';

function OnboardingScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Text>OnboardingScreen</Text>
            <Button title='Tab to start' onPress={() => navigation.replace('AppNavigator')}/>
            </SafeAreaView>
    );
}

export default OnboardingScreen;