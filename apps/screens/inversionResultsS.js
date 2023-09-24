import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';

function InversionResultsS() {
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
                    Corto plazo
                </Text>
                <Text style={styles.h2}>
                    Fondo Banorte Cete (NTECT)
                </Text>
                <Text style={styles.body}>
                    Son para las personas que desean tener un fondo adicional a sus ahorros, metiendo una inversión   mínima de $100, contando con una cuenta de débito y no se requiere una estancia definida.
                </Text>
                <Text style={styles.h2}>
                    Fondo Banorte Digital (NTEDIG)
                </Text>
                <Text style={styles.body}>
                    Es una inversión totalmente digital de mínimo $100, donde piden un mínimo de un mes como permanencia y debe tener una cuenta de débito.
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





export default InversionResultsS;