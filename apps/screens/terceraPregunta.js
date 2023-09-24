import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Button, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FixedHeader from '../../components/fixedHeader';

function TerceraPregunta({ navigation }) {
    const [isAltoClicked, setIsAltoClicked] = useState(false);
    const [isMedioClicked, setIsMedioClicked] = useState(false);
    const [isPocoClicked, setIsPocoClicked] = useState(false);

    const onPressShowAlto = () => {
        setIsAltoClicked(!isAltoClicked);
    };

    const onPressShowMedioive = () => {
        setIsMedioClicked(!isMedioClicked);
    };

    const onPressShowPoco = () => {
        setIsPocoClicked(!isPocoClicked);
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <FixedHeader />
            <SafeAreaView style={{ top: -450, left: 5 }}>
                <Text style={styles.text2}>3. ¿Qué prefieres?</Text>
                <View style={styles.optionContainer}>
                    <View style={styles.option}>
                        <Button
                            onPress={() => navigation.navigate('InversionResultsL')}
                            title="Riesgo alto, ganancias altas"
                            color={isAltoClicked ? '#FFFFFF' : '#000000'}
                            accessibilityLabel="Elegir riesgo alto"
                        />
                    </View>

                    <View style={styles.option}>
                        <Button
                            onPress={() => navigation.navigate('InversionResultsM')}
                            title="Medio riesgo, ganancias promedio"
                            color={isMedioClicked ? '#FFFFFF' : '#000000'}
                            accessibilityLabel="Elegir riesgo medio"
                        />
                    </View>

                    <View style={styles.option}>
                        <Button
                            onPress={() => navigation.navigate('InversionResultsS')}
                            title="Poco riesgo, pocas ganancias"
                            color={isPocoClicked ? '#FFFFFF' : '#000000'}
                            accessibilityLabel="Elegir poco riesgo"
                        />
                    </View>
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
        backgroundColor: '#DEDEDE',
        left: 40,
    }
});

export default TerceraPregunta;