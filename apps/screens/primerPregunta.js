import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FixedHeader from '../../components/fixedHeader';

function PrimerPregunta({ navigation }) {
    const [isEmergencyClicked, setIsEmergencyClicked] = useState(false);
    const [isObjectClicked, setIsObjectClicked] = useState(false);
    const [isRetirementClicked, setIsRetirementClicked] = useState(false);

    const onPressShowEmergency = () => {
        setIsEmergencyClicked(!isEmergencyClicked);
    };

    const onPressShowObjective = () => {
        setIsObjectClicked(!isObjectClicked);
    };

    const onPressShowRetirement = () => {
        setIsRetirementClicked(!isRetirementClicked);
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <FixedHeader />

            <SafeAreaView style={{ top: -200, left: 80 }}>
                <Text style={styles.subtitle}>Encuentra tu fondo de inversión</Text>
                <Text style={styles.text2}>1. ¿En qué te gustaría invertir?</Text>

                <View style={styles.option}>
                    <Image style={styles.icon} source={require('../../assets/crash.png')} />
                    <Button
                        onPress={() => navigation.navigate('SegundaPregunta')}
                        title="Fondo para imprevistos"
                        color={isEmergencyClicked ? '#FFFFFF' : '#000000'}
                        accessibilityLabel="Elegir fondo para imprevistos"
                    />
                </View>
                <View style={styles.option}>
                    <Image style={styles.icon} source={require('../../assets/piggy.png')} />
                    <Button
                        onPress={() => navigation.navigate('SegundaPregunta')}
                        title="Ahorros con objetivo"
                        color={isObjectClicked ? '#FFFFFF' : '#000000'}
                        accessibilityLabel="Elegir ahorros con objetivo"
                    />
                </View>
                <View style={styles.option}>
                    <Image style={styles.icon} source={require('../../assets/old.png')} />
                    <Button
                        onPress={() => navigation.navigate('SegundaPregunta')}
                        title="Fondo para retiro"
                        color={isRetirementClicked ? '#FFFFFF' : '#000000'}
                        accessibilityLabel="Elegir fondo para retiro"
                    />
                </View>
            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    subtitle: {
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: '500',
        top: -40,
        left: -65,
    },
    text2: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 20,
        right: 120
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: '80%',
    },
    option: {
        width: '40%',
        borderRadius: 10,
        shadowColor: '#bababa',
        shadowOpacity: 0.5,
        margin: 10,
        left: 40,
        backgroundColor: '#DEDEDE'
    },
    icon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        left: 40,
    },
});

export default PrimerPregunta;