import { View } from "react-native";
import React from "react";
import styles from "../styles";
import TitleTextInput from "../../../molecule/TitleTextInput";
import { fetchSignIn, SignInApiType, SignInRequest } from "../../../../api/Account";
import { DEVICE_TYPE, getOS } from "../../../../utils/device";
import TitleCheckBox from "../../../molecule/TitleCheckBox";
import TextButton from "../../../molecule/TextButton";
import OneButtonModal from "../../../molecule/OneButtonModal";
import { observer, inject } from "mobx-react";
import RootStore from "../../../../store/RootStore";

type State = {
    userId: string,
    password: string,
    isSaveLoginToken: boolean,
    modalVisible: boolean,
    modalMessage: string
}

type Props = {
    goToListPage: () => void, // page 이동
    setLoadingVisible: (visible: boolean) => void // loading modal visible
} & InjectedProps

type InjectedProps = {
    rootStore?: RootStore
}

const initialState: State = {
    userId: '',
    password: '',
    isSaveLoginToken: false,

    modalVisible: false,
    modalMessage: ''
}

// SiginIn Form 컴포넌트
@inject('rootStore')
@observer
class SignInForm extends React.Component<Props, State> {
    state = initialState;

    // userId input onChange
    private onChangeUserId = (value: string) => {
        this.setState({userId: value});
    }

    // password input onChange
    private onChangePassword = (value: string) => {
        this.setState({password: value});
    }

    // 로그인 저장여부 onChagne
    private onCheckLoginStateCheckBox = () => {
        this.setState({isSaveLoginToken: !this.state.isSaveLoginToken});
    }

    // SiginIn 값이 유효한지 검사, 검사가 통과하면 인자로 받은 success 함수실행
    private handleSiginValidator = (onSuccess: () => void) => {
        const {userId, password} = this.state;
        if(!!userId && !!password) {
            onSuccess();
        } else {
            this.setState({modalVisible: true, modalMessage: '입력을 확인해주세요'});
        }
    }

    // 로그인 버튼 터치 시
    private onSubmitLogin = () => {
        const {userId, password, isSaveLoginToken} = this.state;
        const {goToListPage, setLoadingVisible, rootStore} = this.props;
        const {accountStore} = rootStore;

        // 1. 입력값이 유효한지 검사
        this.handleSiginValidator(
            // 검사 성공시 실행될 함수
            () => {
                setLoadingVisible(true);
                const deviceType: DEVICE_TYPE = getOS();
                const request: SignInRequest = {
                    userId: userId,
                    password: password,
                    deviceType: deviceType
                    
                }
                // SignIn
                accountStore.fetchTokenAndSigIn(request,
                     isSaveLoginToken,
                     () => {
                        // onSuccess
                        goToListPage();
                        setLoadingVisible(false);
                     },
                     () => {
                        // onFail
                        this.setState({modalVisible: true, modalMessage: '아이디 혹은 비밀번호가 틀렸습니다'});
                        setLoadingVisible(false);
                     }
                );
            }
        );
    }

    render() {
        const {modalVisible, modalMessage, isSaveLoginToken} = this.state;
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
                <OneButtonModal message={modalMessage} visible={modalVisible} onPress={() => {
                    this.setState({modalVisible: false});
                }}/>
            </View>
        );
    }
}

export default SignInForm;
