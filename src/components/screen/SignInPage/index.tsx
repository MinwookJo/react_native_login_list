import React from "react";
import {View} from 'react-native';
import { NavigationInjectedProps } from "react-navigation";
import { withNavigation } from "react-navigation";
import SignInForm from "./components/SignInForm";
import styles from './styles';
type Props = {

} & NavigationInjectedProps;

class SignInPage extends React.Component<Props> {
    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <View style={styles.siginInIcon}/>
                <SignInForm/>
            </View>
        );
    }
}

export default withNavigation(SignInPage);
