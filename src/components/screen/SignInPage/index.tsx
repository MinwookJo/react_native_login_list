import React from "react";
import {View, Image} from 'react-native';
import { NavigationInjectedProps } from "react-navigation";
import { withNavigation } from "react-navigation";
import SignInForm from "./components/SignInForm";
import styles from './styles';
import images from '../../../constants/images';
import { APP_PATH } from "../RootPage";
import LoadingModal from "../../molecule/LoadingModal";
import {observer, inject} from 'mobx-react';
import RootStore from "../../../store/RootStore";
import { getUserId, getPassword } from "../../../storage/AccountStorage";
import { SignInRequest } from "../../../api/Account";
import { DEVICE_TYPE, getOS } from "../../../utils/device";

type Props = {

} & NavigationInjectedProps & InjectedProps;

type InjectedProps = {
    rootStore?: RootStore
}

type State = {
    isLoading: boolean
}

const initialState: State = {
    isLoading: false
}

// 로그인, 자동로그인이 되는 로그인 페이지
@inject('rootStore')
@observer
class SignInPage extends React.Component<Props, State> {
    state = initialState;

    goToListPage = () => {
        this.props.navigation.navigate(APP_PATH.LIST);
    }

    setLoadingVisible = (visible: boolean) => {
        this.setState({isLoading: visible});
    }

    componentDidMount() {
        // 시작 시 자동로그인 시도
        this.autoSignIn();
    }

    private autoSignIn = async () => {
        const {fetchTokenAndSigIn} = this.props.rootStore.accountStore;
        let userIdData: string = '';
        let passwordData: string = '';
        const osData: DEVICE_TYPE = getOS();
        this.setLoadingVisible(true);

        // 1. sotrage 데이터를 가져옴 .then()에서 변수 업데이트
        await getUserId().then((userId: string) => userIdData = JSON.parse(userId));
        await getPassword().then((password: string) => passwordData = JSON.parse(password));

        // 2. 가져온 변수로 로그인 시도
        const request: SignInRequest = {
            userId: userIdData,
            password: passwordData,
            deviceType: osData
        }
        fetchTokenAndSigIn(request, false,
            () => {
                // 3. success 시 페이지이동, 로딩해제
                this.goToListPage();
                this.setLoadingVisible(false);
            },
            () => {
                // 3. fail 아무것도 하지않음, 로딩해제
                this.setLoadingVisible(false);
            }
        )
    }

    render() {
        const {isLoading} = this.state;
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <Image style={styles.siginInIcon} source={images.Image.MainIcon}/>
                <SignInForm goToListPage={this.goToListPage} setLoadingVisible={this.setLoadingVisible}/>
                <LoadingModal visible={isLoading}/>
            </View>
        );
    }
}

export default withNavigation(SignInPage);
