import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel'
import InformationCard from '../../components/informationCard';
import FetchData from '../../src';

import { userData } from '../../components/userData.js'
import FixedHeader from '../../components/fixedHeader.js';
import PrimerPregunta from './primerPregunta';

function StatusInversion({ navigation }) {
    const { dataSpot, isLoading } = FetchData();

    const navigateToPregunta = () => {
        navigation.navigate('PrimerPregunta');
    };

    if (isLoading) {
        // Display a loading indicator while data is being fetched
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="white" />
            </View>
        );
    }
    console.log("status");
    return (
        <View style={styles.container}>
            <StatusBar />
            <FixedHeader />
            <SafeAreaView style={{ top: -100 }}>
                {/* Information */}
                <View style={{ marginTop: 16 }}>
                    <Text style={styles.subtitle}>Inversiones</Text>
                    <View style={{ marginTop: 40, paddingLeft: 15, paddingRight: 15 }}>
                        <Text style={styles.text}>Estas a un paso de empezar a invertir. Basado en tu información de Banorte:</Text>
                    </View>

                </View>
                {/* Carousel */}
                <View style={{ marginTop: 36, paddingVertical: 5, height: 500 }}>
                    <Carousel
                        containerCustomStyle={{ overflow: 'visible' }}
                        data={userData}
                        renderItem={({ item }) => (
                            <InformationCard item={item} navigation={navigation} />
                        )}
                        firstItem={0}
                        inactiveSlideOpacity={0.65}
                        inactiveSlideScale={0.77}
                        sliderWidth={400}
                        itemWidth={285}
                        slideStyle={{ display: 'flex', alignItems: 'center' }}
                    />

                </View>
            </SafeAreaView>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'white',
    },
    userIcon: {
        height: 36,
        width: 36,
        borderRadius: 18,
    },
    redImage: {
        width: '100%',
        position: 'absolute',
        top: '5',
        height: 95,
    },
    header: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        paddingLeft: 8,
    },
    subtitle: {
        fontFamily: 'Helvetica',
        fontSize: 24,
        fontWeight: '500',
        top: 42,
        paddingLeft: 15,
    },
    text: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        top: 6,
    },

});


export default StatusInversion;  
