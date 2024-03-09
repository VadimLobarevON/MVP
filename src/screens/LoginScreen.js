import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleSignUp = () => {
    navigation.navigate('Register'); // Navigate to the SignUp screen
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Registeration Page</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;

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



