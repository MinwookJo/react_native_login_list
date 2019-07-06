import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import TitleTextInput from "../../../molecule/TitleTextInput";
import { fetchSignIn, SignInApiType } from "../../../../api/Account";
import { DEVICE_TYPE } from "../../../../utils/device";
import TitleCheckBox from "../../../molecule/TitleCheckBox";

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
        // 한번 값을 검사하고 성공 시 signIn call
        this.handleSiginValidator(
            () => {
                fetchSignIn({
                    userId: 'ecube_recruit',
                    password: 'Recruit12!@',
                    deviceType: DEVICE_TYPE.Android
                }).then(
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
                <TitleTextInput headerText={'Password'} onChangeText={this.onChangePassword}/>

                <TitleCheckBox style={{marginLeft: 8}} check={isSaveLoginToken} title={'로그인 상태 유지'} onCheck={this.onCheckLoginStateCheckBox}/>
                
                <TouchableOpacity onPress={() => {
                    this.onSubmitLogin()
                }} style={styles.signInButton}>
                    <Text style={styles.signInButtonText}>로그인</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text style={styles.forgotPasswordButtonText}>비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignInForm;
