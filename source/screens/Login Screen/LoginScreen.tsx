import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import auth from '@react-native-firebase/auth';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import UserRegistration from './RegistrationScreen';

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const oneFourthWindowHeight = windowHeight / 4;
const effectiveWidth = windowWidth - 2 * 20;

const StackedLoginScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen
        name="Forget Password Screen"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen name="Sign up screen" component={UserRegistration} />
    </Stack.Navigator>
  );
};

const ForgetPasswordScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 20}}>Forget password</Text>
    </View>
  );
};

const SignUpScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 20}}>Sign up screen</Text>
    </View>
  );
};

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isInput1Focused, setIsInput1Focused] = useState(false);
  const [isInput2Focused, setIsInput2Focused] = useState(false);
  const Navigation = useNavigation();

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

  const userLogin = () => {
    auth()
      .signInWithEmailAndPassword(userName, password)
      .then(() => {
        console.log('User account created & signed in!');
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

  const userRegistration = () => {
    auth()
      .createUserWithEmailAndPassword(userName, password)
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
            value={userName}
            onChangeText={txt => setUserName(txt)}
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
            value={password}
            onChangeText={pwd => setPassword(pwd)}
            style={[
              styles.TextInput,
              isInput2Focused ? styles.FocusedInput : null,
            ]}
            onFocus={handleInput2Focus}
            onBlur={handleInput2Blur}
          />
          <View style={styles.ForgotPasswordView}>
            <Text onPress={() => Navigation.navigate('Forget Password Screen')}>
              Forgot password?
            </Text>
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
            <Text
              style={{fontWeight: 'bold'}}
              onPress={() => Navigation.navigate('Sign up screen')}>
              {' '}
              Sign up
            </Text>
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
    // borderWidth: 1,
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

export default StackedLoginScreen;
