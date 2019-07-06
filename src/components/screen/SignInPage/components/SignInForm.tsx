import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import TitleTextInput from "../../../molecule/TitleTextInput";
import { fetchSignIn, SignInApiType } from "../../../../api/Account";
import { DEVICE_TYPE } from "../../../../utils/device";
import TitleCheckBox from "../../../molecule/TitleCheckBox";
import TextButton from "../../../molecule/TextButton";

type State = {
    userId: string,
    password: string,
    isSaveLoginToken: boolean
}

const initialState: State = {
    userId: '',
    password: '',
    isSaveLoginToken: false
}

class SignInForm extends React.Component {
    state = initialState;

    // userId input onChange
    private onChangeUserId = (value: string) => {
        this.setState({userId: value});
    }

    // password input onChange
    private onChangePassword = (value: string) => {
        this.setState({password: value});
    }

    // save login state onCheck
    private onCheckLoginStateCheckBox = () => {
        this.setState({isSaveLoginToken: !this.state.isSaveLoginToken});
    }

    // 로그인 버튼 터치 시
    private onSubmitLogin = () => {
        const {isSaveLoginToken, userId, password} = this.state;
        // 한번 값을 검사하고 성공 시 signIn call
        this.handleSiginValidator(
            () => {
                fetchSignIn({
                    userId: userId,
                    password: password,
                    deviceType: DEVICE_TYPE.Android
                }, isSaveLoginToken).then(
                    (result: SignInApiType) => {
                        console.log('Res', result);
                    }
                ). catch(
                    (err) => {
                        console.log('ERR' + err);
                    }
                )
            }
        );
    }

    // SiginIn 값이 있는지 검사
    private handleSiginValidator = (onSuccess: () => void) => {
        const {userId, password} = this.state;
        if(!!userId && !!password) {
            onSuccess();
        } else {
            // TODO Error
        }
    }

    render() {
        const {isSaveLoginToken} = this.state;
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <TitleTextInput headerText={'ID'} onChangeText={this.onChangeUserId}/>
                <View style={{marginTop: 16}}/>
                <TitleTextInput headerText={'Password'} onChangeText={this.onChangePassword}/>

                <TitleCheckBox style={{marginLeft: 8, marginTop: 17}} check={isSaveLoginToken} title={'로그인 상태 유지'}
                    onCheck={this.onCheckLoginStateCheckBox}/>
                
                <TextButton text={'로그인'} onPress={() => {this.onSubmitLogin()}}
                    buttonStyle={styles.signInButton} buttonTextStyle={styles.signInButtonText}/>
                <TextButton text={'비밀번호 찾기'} onPress={() => {}}
                    buttonStyle={styles.forgotPasswordButton} buttonTextStyle={styles.forgotPasswordButtonText}/>

            </View>
        );
    }
}

export default SignInForm;
