import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../styles";
import TitleTextInput from "../../../molecule/TitleTextInput";
import { fetchSignIn, SignInApiType } from "../../../../api/Account";
import { DEVICE_TYPE } from "../../../../utils/device";

type State = {
    userId: string,
    password: string
}

const initialState: State = {
    userId: '',
    password: ''
}

class SignInForm extends React.Component {
    state = initialState;

    private onChangeUserId = (value: string) => {
        this.setState({userId: value});
    }

    private onChangePassword = (value: string) => {
        this.setState({password: value});
    }

    private onSubmitLogin = () => {
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

    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <TitleTextInput headerText={'ID'} onChangeText={this.onChangeUserId}/>
                <TitleTextInput headerText={'Password'} onChangeText={this.onChangePassword}/>

                <View style={{flexDirection: 'row'}}>
                    <View style={styles.checkBox}/>
                    <Text style={styles.checkBoxSubtitle}>로그인 상태 유지</Text>
                </View>
                
                <TouchableOpacity onPress={() => {
                    this.onSubmitLogin()
                }}>
                    <Text>로그인</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>비밀번호 찾기</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignInForm;
