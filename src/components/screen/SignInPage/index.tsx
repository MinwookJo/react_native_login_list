import React from "react";
import {View, Image} from 'react-native';
import { NavigationInjectedProps } from "react-navigation";
import { withNavigation } from "react-navigation";
import SignInForm from "./components/SignInForm";
import styles from './styles';
import images from '../../../constants/images';
import { APP_PATH } from "../RootPage";
type Props = {

} & NavigationInjectedProps;

class SignInPage extends React.Component<Props> {
    
    goToListPage = () => {
        this.props.navigation.navigate(APP_PATH.LIST);
    }

    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <Image style={styles.siginInIcon} source={images.Image.MainIcon}/>
                <SignInForm goToListPage={this.goToListPage}/>
            </View>
        );
    }
}

export default withNavigation(SignInPage);
