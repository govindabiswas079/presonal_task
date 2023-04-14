import React from 'react'
import { Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-community/masked-view'

const GradientText = (props) => {
    return (
        <MaskedView maskElement={<Text {...props} />}>
            <LinearGradient
                colors={['#362f6e', '#3c2e6c', '#4f2f7c',  '#5a2f6c', '#7a3784', '#99419e', '#d85ddc',]}
                start={{ x: 0, y: 0 }}
                emd={{ x: 2, y: 0 }}
            >
                <Text {...props} style={[props?.style, { opacity: 0 }]} />
            </LinearGradient>
        </MaskedView>
    )
}

export default GradientText