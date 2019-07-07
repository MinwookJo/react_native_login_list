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
        // siginInPage 들어왔을 때 storage에서 userId, password를 가져와서 로그인시도
        // getToken().then(
        //     (token: string) => {
        //         if(!!token){
        //             console.log(token);
        //             this.props.rootStore.accountStore.setToken(token);
        //             // this.goToListPage();
        //         }
        //     }
        // )
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
