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
type Props = {

} & NavigationInjectedProps;

type State = {
    isLoading: boolean
}

const initialState: State = {
    isLoading: false
}

class SignInPage extends React.Component<Props, State> {
    state = initialState;

    goToListPage = () => {
        this.props.navigation.navigate(APP_PATH.LIST);
    }

    setShowLoadingVisible = (visible: boolean) => {
        this.setState({isLoading: visible});
    }

    componentDidMount() {
        getToken().then(
            (token: string) => {
                console.log(token);
                if(!!token){
                    this.goToListPage();
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
