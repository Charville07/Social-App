import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' :'rgba(0, 0, 0, 0.3)';

    return(
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                borderRadius: 6,
                backgroundColor
            }}
        />
    );
}


const Skip = ({...props}) => (
    <Button
        title='Skip'
        color='#000000'
        {...props}
    />
);


const Next = ({...props}) => (
    <Button
        title='Next'
        color='#000000'
        {...props}
    />
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:20}}
        {...props}
    ><Text style={{fontSize:16}}>Done</Text></TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
        //SkipButtonComponent={Skip}
        //NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img1.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img2.png')} />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/onboarding-img3.png')} />,
                title: 'Onboarding 3',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
        ]}
        />
    );
};


export default OnboardingScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
