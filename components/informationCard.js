import { View, Text, StyleSheet, Image, ActivityIndicator, Button } from 'react-native';
import React, { useState } from 'react';
import FetchData from '../src';


function InformationCard({ item, navigation }) {
    const [isCoachClicked, setIsCoachClicked] = useState(false);



    const { dataSpot, isLoading } = FetchData();
    if (isLoading) {
        // Display a loading indicator while data is being fetched
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="white" />
            </View>
        );
    }
    console.log("information");


    return (
        <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>


            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                {!item.showExtraInfo
                    ? < Text style={styles.information}>Comparando los últimos tres meses, tienes un estimado al mes de: </Text>
                    : <Text style={styles.information}>Al final del mes tienes en tu cuenta un promedio de: </Text>}

                {(item.index == 1) && <Text style={styles.subtitle}>$ {dataSpot[1].valor}</Text>}
                {(item.index == 2) && <Text style={styles.subtitle}>$ {dataSpot[0].valor}</Text>}
                {(item.index == 3) && <Text style={styles.subtitle}>$ {(dataSpot[1].valor - dataSpot[0].valor)}</Text>}


                {!item.showExtraInfo && <Image source={item.image} style={styles.slideIcon} />}
                {item.showExtraInfo && <Text style={[styles.information, { paddingTop: 0 }]}>Con tan sólo </Text>}
                {item.showExtraInfo && <Text style={[styles.subtitle, { paddingTop: 15 }]}>$ {(dataSpot[1].valor - dataSpot[0].valor) * 0.15}</Text>}
                {item.showExtraInfo && <Text style={styles.information}>el 15% de tu dinero, puedes empezar a invertir.</Text>}
                {item.showExtraInfo && <Button
                    onPress={() => navigation.navigate('PrimerPregunta')}
                    title="¡Conoce tu perfil de inversión AQUI!"
                    color={isCoachClicked ? '#000000' : '#FFFFFF'}
                    accessibilityLabel="Elegir fondo para imprevistos"></Button>}
            </View>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 40,
        backgroundColor: '#AEAEAE',
        height: 500,
        width: 300
    },
    textContainer: {
        paddingHorizontal: 5,
        marginTop: 5,
        paddingVertical: 12,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: 38,
        fontWeight: '700',
        "letterSpacing": 1,
        paddingTop: 15,
        color: 'white'

    },
    subtitle: {
        fontSize: 45,
        fontWeight: '700',
        "letterSpacing": 1,
        paddingTop: 35,
        color: 'white',
        paddingBottom: 15,
    },
    information: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: '400',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        color: 'white'

    },
    slideIcon: {
        height: 200,
        width: 200,
    },
    inversionInfo: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 30,
        textDecorationLine: 'underline',
    }
})

export default InformationCard;