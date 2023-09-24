import { generateMeta } from './controllers/openaiController';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

function Chatbot() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInput = (text) => {
        setInput(text);
    };

    const handleGenerateClick = async () => {
        const generatedText = await generateMeta(input);
        setOutput(generatedText);
    };

    return (
        <View style={styles.container}>
            <Text>¿Qué dudas tienes acerca de las inversiones?</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleInput}
                value={input}
                placeholder="Escribe tu pregunta aquí"
            />
            <Button title="Aceptar" onPress={handleGenerateClick} />
            <Text>{output}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
    },
});


export default Chatbot;