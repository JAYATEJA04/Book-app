import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {JumpingTransition} from 'react-native-reanimated';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const oneFourthWindowHeight = windowHeight / 4;
const effectiveWidth = windowWidth - 2 * 20;

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isInput1Focused, setIsInput1Focused] = useState(false);
  const [isInput2Focused, setIsInput2Focused] = useState(false);

  const handleInput1Focus = () => {
    setIsInput1Focused(true);
  };

  const handleInput1Blur = () => {
    setIsInput1Focused(false);
  };

  const handleInput2Focus = () => {
    setIsInput2Focused(true);
  };

  const handleInput2Blur = () => {
    setIsInput2Focused(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitleView}>
        <Text style={styles.TitleText}>Books & Tales</Text>
      </View>
      {/* input */}
      <View style={[styles.InputView, styles.BorderWidth]}>
        <View
          style={[
            styles.UserInputView,
            {justifyContent: 'center'},
            styles.BorderWidth,
          ]}>
          <TextInput
            placeholder="Username"
            style={[
              styles.TextInput,
              isInput1Focused ? styles.FocusedInput : null,
            ]}
            onFocus={handleInput1Focus}
            onBlur={handleInput1Blur}
          />
        </View>
        <View style={[styles.UserInputView, styles.BorderWidth]}>
          <TextInput
            placeholder="Password"
            style={[
              styles.TextInput,
              isInput2Focused ? styles.FocusedInput : null,
            ]}
            onFocus={handleInput2Focus}
            onBlur={handleInput2Blur}
          />
          <View style={styles.ForgotPasswordView}>
            <Text>Forgot password?</Text>
          </View>
        </View>
      </View>
      {/* Login button */}
      <View style={[styles.LoginView, styles.BorderWidth]}>
        {/* gap1 */}
        <View style={{height: oneFourthWindowHeight / 4}} />
        {/* button */}
        <View style={styles.LoginButtonView}>
          <TouchableOpacity style={styles.LoginButtonStyle}>
            <Text style={styles.LoginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* or */}
        <View
          style={[
            styles.OrView,
            styles.BorderWidth,
            {justifyContent: 'flex-end'},
          ]}>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>Or</Text>
        </View>
        {/* Login with */}
        <View
          style={[
            styles.OrView,
            styles.BorderWidth,
            {justifyContent: 'center'},
          ]}>
          <Text style={{fontSize: 13, fontWeight: 'bold'}}>Login with</Text>
        </View>
      </View>
      {/* login options */}
      <View style={[styles.LoginOptions, styles.BorderWidth]}>
        <View
          style={[styles.BorderWidth, {height: oneFourthWindowHeight / 8}]}
        />
        {/* options */}
        <View style={[styles.BorderWidth, styles.LoginOptionsView]}>
          {/* facebook */}
          <TouchableOpacity style={styles.LoginOptionButtons}>
            <FontAwesomeIcon
              name="facebook"
              color="black"
              size={oneFourthWindowHeight / 4}
              solid
            />
          </TouchableOpacity>
          {/* gmail */}
          <TouchableOpacity style={styles.LoginOptionButtons}>
            <FontAwesomeIcon
              name="google"
              color="black"
              size={oneFourthWindowHeight / 4}
              solid
            />
          </TouchableOpacity>
          {/* twiter */}
          <TouchableOpacity style={styles.LoginOptionButtons}>
            <FontAwesomeIcon
              name="twitter"
              color="black"
              size={oneFourthWindowHeight / 4}
            />
          </TouchableOpacity>
          {/* instagram */}
          <TouchableOpacity style={styles.LoginOptionButtons}>
            <FontAwesomeIcon
              name="instagram"
              color="black"
              size={oneFourthWindowHeight / 4}
              solid
            />
          </TouchableOpacity>
        </View>
        <View style={{height: oneFourthWindowHeight / 4}} />
        <View
          style={{
            height: oneFourthWindowHeight / 4,
            // borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, color: 'black'}}>
            Don't have an account?
            <Text style={{fontWeight: 'bold'}}> Sign up</Text>
          </Text>
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
    height: oneFourthWindowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  UserInputView: {
    height: oneFourthWindowHeight / 2,
    alignItems: 'center',
  },
  TextInput: {
    borderWidth: 1,
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
  ForgotPasswordView: {
    height: oneFourthWindowHeight / 4,
    width: windowWidth - 2 * 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  LoginView: {
    height: oneFourthWindowHeight,
    width: windowWidth,
  },
  LoginButtonView: {
    height: oneFourthWindowHeight / 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  LoginButtonStyle: {
    height: oneFourthWindowHeight / 4,
    width: windowWidth - 2 * 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#00A9FF',
  },
  LoginButtonText: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 20,
    color: '#000000',
  },
  OrView: {
    height: oneFourthWindowHeight / 4,
    alignItems: 'center',
  },
  LoginOptions: {
    height: oneFourthWindowHeight,
  },
  LoginOptionsView: {
    height: oneFourthWindowHeight / 4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: windowWidth / 10,
  },
  LoginOptionButtons: {
    height: oneFourthWindowHeight / 4,
    width: windowWidth / 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDF5FD',
    elevation: 3,
    borderRadius: 5,
  },
  BorderWidth: {
    // borderWidth: 1,
  },
});

export default LoginScreen;
