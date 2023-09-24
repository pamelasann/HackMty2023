import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native';
import FetchData from '../src';

const FixedHeader = () => {
    const { dataSpot, isLoading } = FetchData();

    if (isLoading) {
        // Display a loading indicator while data is being fetched
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="white" />
            </View>
        );
    }

    console.log(dataSpot[2].valor);
    return (
        <View style={styles.container}>
            <Image source={require('../assets/red.png')}
                style={styles.redImage} />
            <SafeAreaView style={{ flex: 1 }}>
                {/* user icon and greeting */}
                <View style={{ paddingHorizontal: 16, flexDirection: 'row' }}>
                    <Image source={require('../assets/user-icon.png')}
                        style={styles.userIcon} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 2, marginRight: 2 }}>
                        <Text style={styles.header}>Hola, {dataSpot[2].valor}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </View>

    )
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
        top: 5
    },
    redImage: {
        width: '100%',
        position: 'absolute',
        top: '5',
        height: 45,
    },
    header: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        paddingLeft: 8,
        top: 5,
    },
});

export default FixedHeader;