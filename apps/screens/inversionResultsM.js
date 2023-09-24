import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';

function InversionResultsM() {
    const [isArrowClicked, setIsArrowClicked] = useState(false);
    const onPressNext = () => {
        setIsArrowClicked(!isArrowClicked);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textcontainer}>
                <Text style={styles.h1}>
                    Productos de inversión considerados
                </Text>
                <Text style={styles.subh}>
                    Mediano plazo
                </Text>
                <Text style={styles.h2}>
                    Fondo estrategia deuda (NTED)
                </Text>
                <Text style={styles.body}>
                    Es para un perfil de usuario conservador y de crecimiento. El riesgo de inversión es moderado y su mínimo de tiempo es de 3 años. Debe haber un mínimo de $100 y se necesita una tarjeta de débito.
                </Text>
                <Text style={styles.h2}>
                    Fondos de familia estratégicos
                </Text>
                <Text style={styles.h3}>
                    Cobertura Banorte Dólares (NTEDLS)
                </Text>
                <Text style={styles.body}>
                    Es para aquel usuario que desea protegerse contra el tipo de cambio, se necesita mínimo un año de permanencia, una inversión mínima de $100 y tener una tarjeta de débito.
                </Text>
                <TouchableOpacity onPress={onPressNext}>
                    <View>
                        <Text style={styles.arrow}>

                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#c43721'
    },
    textcontainer: {
        marginTop: 40,
        maxWidth: '90%',
        justifyContent: 'space-around',
    },
    h1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 34
    },
    subh: {
        fontSize: 28,
        color: '#ededed',
        paddingTop: 40,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    h2: {
        fontSize: 20,
        color: '#fff',
        paddingTop: 40,
        fontWeight: 'bold'
    },
    h3: {
        fontSize: 18,
        color: '#fff',
        paddingTop: 5,
        fontWeight: 'bold'
    },
    body: {
        color: '#ededed',
        paddingTop: 5,
        fontSize: 15
    },
    arrow: {
        fontSize: 50,
        color: '#fff',
        textAlign: 'center',
        marginTop: 50
    }
});





export default InversionResultsM;