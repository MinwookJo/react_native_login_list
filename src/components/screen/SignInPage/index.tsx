import React from "react";
import {View, Image} from 'react-native';
import { NavigationInjectedProps } from "react-navigation";
import { withNavigation } from "react-navigation";
import SignInForm from "./components/SignInForm";
import styles from './styles';
import images from '../../../constants/images';
import { APP_PATH } from "../RootPage";
import { getToken } from "../../../storage/TokenStorage";
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

    setShowLoadingVisible = (visible: boolean) => {
        this.setState({isLoading: visible});
    }

    componentDidMount() {
        // siginInPage 들어왔을 때 storage에서 token 을 가져와 store에 저장하고 ListPage로 이동
        // token이 없으면 siginInPage에 남음
        getToken().then(
            (token: string) => {
                if(!!token){
                    console.log(token);
                    this.props.rootStore.accountStore.setToken(token);
                    // this.goToListPage();
                }
            }
        )
    }

    render() {
        const {isLoading} = this.state;
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <Image style={styles.siginInIcon} source={images.Image.MainIcon}/>
                <SignInForm goToListPage={this.goToListPage} setLoadingVisible={this.setShowLoadingVisible}/>
                <LoadingModal visible={isLoading}/>
            </View>
        );
    }
}

export default withNavigation(SignInPage);
