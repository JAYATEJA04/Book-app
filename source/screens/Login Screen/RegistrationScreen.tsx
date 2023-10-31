import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import CombinedScreens from '../Combined screen/CombinedScreens';

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const halfWindowHeight = windowHeight / 2;
const oneFourthWindowHeight = windowHeight / 4;
const effectiveWidth = windowWidth - 2 * 20;

const StackedSignUpScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp screen" component={UserRegistration} />
      <Stack.Screen name="Main app" component={CombinedScreens} />
    </Stack.Navigator>
  );
};

const UserRegistration = () => {
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFullNameFocused, setFullNameFocused] = useState(false);
  const [emailIdFocused, setEmailIdFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocussed] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [emptyFieldsError, setEmptyFieldError] = useState('');
  const Navigation = useNavigation();

  const userRegistration = () => {
    auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then(() => {
        console.log('User account has been created.');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleUserSignUp = () => {
    if (!fullName && !emailId && !password && !confirmPassword) {
      setEmptyFieldError("Fields can't be empty");
    } else {
      userRegistration();
      setEmptyFieldError('');
      Navigation.navigate('Main app');
    }
  };

  const handleFullNameFocused = () => {
    setFullNameFocused(true);
  };
  const handleFullNameBlurred = () => {
    setFullNameFocused(false);
  };

  const handleEmailIdFocused = () => {
    setEmailIdFocused(true);
  };
  const handleEmailIdBlurred = () => {
    setEmailIdFocused(false);
  };

  const handlePasswordFocused = () => {
    setPasswordFocussed(true);
  };
  const handlePasswordBlurred = () => {
    setPasswordFocussed(false);
  };

  const handleConfirmPasswordFocused = () => {
    setConfirmPasswordFocused(true);
  };
  const handleConfirmPasswordBlurred = () => {
    setConfirmPasswordFocused(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.TitleView, styles.BorderWidth]}>
        <Text style={styles.TitleText}>Books & Tales</Text>
      </View>
      {/* Input View */}
      <View style={[styles.InputView, styles.BorderWidth]}>
        {/* User input view */}
        {emptyFieldsError && (
          <Text style={{fontSize: 10, color: 'red'}}>{emptyFieldsError}</Text>
        )}
        <View style={[styles.UserInputView, styles.BorderWidth]}>
          {/* Input text view */}
          <TextInput
            placeholder="Full name"
            value={fullName}
            onChangeText={txt => setFullName(txt)}
            style={[
              styles.InputTextView,
              isFullNameFocused ? styles.FocusedInput : null,
            ]}
            onFocus={handleFullNameFocused}
            onBlur={handleFullNameBlurred}
          />
        </View>
        <View style={[styles.UserInputView, styles.BorderWidth]}>
          <TextInput
            placeholder="Email id"
            value={emailId}
            onChangeText={id => setEmailId(id)}
            style={[
              styles.InputTextView,
              emailIdFocused ? styles.FocusedInput : null,
            ]}
            onFocus={handleEmailIdFocused}
            onBlur={handleEmailIdBlurred}
          />
        </View>
        {/* <View style={[styles.UserInputView, styles.BorderWidth]}>
          <TextInput
            placeholder="Date of birth"
            style={[
              styles.InputTextView,
              dateOfBirthFocused ? styles.FocusedInput : null,
            ]}
            onFocus={handleDOBFocused}
            onBlur={handleDOBBlurred}
          />
        </View> */}
        <View style={[styles.UserInputView, styles.BorderWidth]}>
          <TextInput
            placeholder="Set password"
            value={password}
            onChangeText={pwd => setPassword(pwd)}
            style={[
              styles.InputTextView,
              isPasswordFocused ? styles.FocusedInput : null,
            ]}
            onFocus={handlePasswordFocused}
            onBlur={handlePasswordBlurred}
          />
        </View>
        <View style={[styles.UserInputView, styles.BorderWidth]}>
          <TextInput
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={cnf => setConfirmPassword(cnf)}
            style={[
              styles.InputTextView,
              confirmPasswordFocused ? styles.FocusedInput : null,
            ]}
            onFocus={handleConfirmPasswordFocused}
            onBlur={handleConfirmPasswordBlurred}
          />
        </View>
      </View>
      {/* Sign up button view */}
      <View style={[styles.SignUpView, styles.BorderWidth]}>
        <View style={[styles.SignUpButtonView, styles.BorderWidth]}>
          <TouchableOpacity
            onPress={() => handleUserSignUp()}
            style={styles.SignUpButtonStyle}>
            <Text style={[styles.SignUpButtonTextStyle, styles.BorderWidth]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        {/* sign in view */}
        <View style={[styles.SignInButtonView]}>
          <TouchableOpacity>
            <Text style={[styles.SignUpButtonTextStyle]}>Sign in &rarr;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  TitleView: {
    height: oneFourthWindowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TitleText: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 40,
    color: 'black',
  },
  InputView: {
    height: halfWindowHeight,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  UserInputView: {
    height: halfWindowHeight / 5,
    width: effectiveWidth,
    justifyContent: 'center',
  },
  InputTextView: {
    width: effectiveWidth,
    height: oneFourthWindowHeight / 4,
    borderRadius: 10,
    fontFamily: 'Montserrat-Bold',
    backgroundColor: '#F1EFEF',
  },
  FocusedInput: {
    backgroundColor: '#CDF5FD',
    borderColor: '#00A9FF',
  },
  SignUpView: {
    height: oneFourthWindowHeight,
  },
  SignUpButtonView: {
    height: oneFourthWindowHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignUpButtonStyle: {
    height: oneFourthWindowHeight / 4,
    width: windowWidth - 2 * 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#00A9FF',
  },
  SignUpButtonTextStyle: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 20,
    color: '#000000',
  },
  SignInButtonView: {
    height: oneFourthWindowHeight / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BorderWidth: {
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

export default StackedSignUpScreen;
