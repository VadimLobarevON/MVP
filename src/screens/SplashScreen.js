import React from 'react'
import { View, Text } from 'react-native'

// This view is to check if a user exists, probably from storage
// preferences, user defaults, etc.
// This view can match the native (iOS Launch | Android Splash) look.

const SplashScreen = () => {
    return <View
        style={{ backgroundColor: '#F2D639', flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
        <Text>MVP</Text>
    </View>
}

export default SplashScreen
