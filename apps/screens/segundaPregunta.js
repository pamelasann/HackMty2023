import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FixedHeader from '../../components/fixedHeader';

function SegundaPregunta({ navigation }) {
    const [isCortoClicked, setIsCortoClicked] = useState(false);
    const [isMedianoClicked, setIsMedianoClicked] = useState(false);
    const [isLargoClicked, setIsLargoClicked] = useState(false);

    const onPressShowCorto = () => {
        setIsCortoClicked(!isCortoClicked);
    };

    const onPressShowMedianoive = () => {
        setIsMedianoClicked(!isMedianoClicked);
    };

    const onPressShowLargo = () => {
        setIsLargoClicked(!isLargoClicked);
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <FixedHeader />
            <SafeAreaView style={{ top: -450, left: 5 }}>
                <Text style={styles.text2}>2. ¿Cuándo te gustaría retirar el dinero?</Text>
                <View style={styles.optionContainer}>
                    <View style={styles.option}>
                        <Button
                            onPress={() => navigation.navigate('TerceraPregunta')}
                            title="Corto plazo"
                            color={isCortoClicked ? '#FFFFFF' : '#000000'}
                            accessibilityLabel="Elegir corto plazo"
                        />
                    </View>

                    <View style={styles.option}>
                        <Button
                            onPress={() => navigation.navigate('TerceraPregunta')}
                            title="Medio plazo"
                            color={isMedianoClicked ? '#FFFFFF' : '#000000'}
                            accessibilityLabel="Elegir medio plazo"
                        />
                    </View>

                    <View style={styles.option}>
                        <Button
                            onPress={() => navigation.navigate('TerceraPregunta')}
                            title="Largo plazo"
                            color={isLargoClicked ? '#FFFFFF' : '#000000'}
                            accessibilityLabel="Elegir largo plazo"
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    text2: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    optionContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '80%',
    },
    option: {
        borderStyle: 'solid',
        borderRadius: 10,
        margin: 5,
        left: 40,
        backgroundColor: '#DEDEDE'
    }
});

export default SegundaPregunta;