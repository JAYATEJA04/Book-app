import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const halfWindowHeight = windowHeight / 2;
const oneFourthWindowHeight = windowHeight / 4;
const effectiveWidth = windowWidth - 2 * 20;

const UserRegistration = () => {
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFullNameFocused, setFullNameFocused] = useState(false);
  const [emailIdFocused, setEmailIdFocused] = useState(false);
  const [dateOfBirthFocused, setDateOfBirthFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocussed] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

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

  const handleDOBFocused = () => {
    setDateOfBirthFocused(true);
  };
  const handleDOBBlurred = () => {
    setDateOfBirthFocused(false);
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
    <View style={styles.container}>
      <View style={[styles.TitleView, styles.BorderWidth]}>
        <Text style={styles.TitleText}>Books & Tales</Text>
      </View>
      {/* Input View */}
      <View style={[styles.InputView, styles.BorderWidth]}>
        {/* User input view */}
        <View style={[styles.UserInputView, styles.BorderWidth]}>
          {/* Input text view */}
          <TextInput
            placeholder="Full name"
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
            style={[
              styles.InputTextView,
              emailIdFocused ? styles.FocusedInput : null,
            ]}
            onFocus={handleEmailIdFocused}
            onBlur={handleEmailIdBlurred}
          />
        </View>
        <View style={[styles.UserInputView, styles.BorderWidth]}>
          <TextInput
            placeholder="Date of birth"
            style={[
              styles.InputTextView,
              dateOfBirthFocused ? styles.FocusedInput : null,
            ]}
            onFocus={handleDOBFocused}
            onBlur={handleDOBBlurred}
          />
        </View>
        <View style={[styles.UserInputView, styles.BorderWidth]}>
          <TextInput
            placeholder="Set password"
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
          <TouchableOpacity style={styles.SignUpButtonStyle}>
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
    </View>
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

export default UserRegistration;
