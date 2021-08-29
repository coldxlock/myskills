import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput  } from 'react-native';

export default function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

   

    function handleAddNewSkill(){
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return (

        <View  style={styles.container}>            
            <Text style={styles.title}>Olá, Prisco Cleyton </Text>        
            <TextInput
                style={styles.input}
                placeholder="Nova habilidade"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}                
            />
            <TouchableOpacity
                style={styles.button}
                activeOpacity={.7}
                onPress={handleAddNewSkill}
            >
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginVertical: 50}]}>
                Minhas Habilidades
            </Text>

            {
                mySkills.map(skill => (                
                    <TouchableOpacity key={skill+1} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }
      
        </View >
 
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30,
        backgroundColor: '#121015'

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    button:{
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    buttonText: {
        color: '#fff',
        fontSize:17,
        fontWeight: 'bold'
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
})