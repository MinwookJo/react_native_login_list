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
import { getUserId, getPassword, saveUserId, savePassword } from "../../../storage/AccountStorage";
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
        this.autoSignIn();
    }

    private autoSignIn = async () => {
        const {fetchTokenAndSigIn} = this.props.rootStore.accountStore;
        let userIdData: string = '';
        let passwordData: string = '';
        const osData: DEVICE_TYPE = getOS();
        this.setLoadingVisible(true);

        await getUserId().then((userId: string) => userIdData = JSON.parse(userId));
        await getPassword().then((password: string) => passwordData = JSON.parse(password));
        const request: SignInRequest = {
            userId: userIdData,
            password: passwordData,
            deviceType: osData
        }
        fetchTokenAndSigIn(request, false,
            () => {
                // success
                this.goToListPage();
                this.setLoadingVisible(false);
            },
            () => {
                // fail
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
