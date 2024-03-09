// ProfileScreen.js
import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native"

export default function ProfileScreen() {
  const navigation = useNavigation()
  const handleLogOut =() =>{
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
  }
  return (
    <View>
        <Text>Profile Screen</Text>
        
         <TouchableOpacity
          onPress={handleLogOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
        
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#383838'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#5D697A',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#F2D639',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: '#5D697A',
    marginTop: 5,
    borderColor: '#F2D639',
    borderWidth: 2,
  },
  buttonText: {
    color: '#383838',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#F2D639',
    fontWeight: '700',
    fontSize: 16,
  },
});
