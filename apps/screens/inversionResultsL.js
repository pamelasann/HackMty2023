import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';

function InversionResultsL() {

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
                    Largo plazo
                </Text>
                <Text style={styles.h2}>
                    Fondos de familia especializados
                </Text>
                <Text style={styles.h3}>
                    Inversión en Dólares (INTEDLS+)
                </Text>
                <Text style={styles.body}>
                    Es para un perfil de riesgo moderado, tomando en cuenta que el plazo es de 2 años mínimos. Busca crecer la capital de una forma estable y al mismo tiempo cambiar el valor invertido de pesos mexicanos a dólares. El mínimo son $100 y se necesita una tarjeta de débito.
                </Text>
                <Text style={styles.h3}>
                    Fondo Banorte IPC+ (NTEIPC+)
                </Text>
                <Text style={styles.body}>
                    Este fondo requiere un perfil de crecimiento, ya que, consiste en invertir un 90% en acciones de la bolsa mexicana de valores y el riesgo con este tipo de inversión es muy alto.  El plazo mínimo es de 5 años en adelante, inicias con $100 y se requiere una tarjeta de débito.
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





export default InversionResultsL;