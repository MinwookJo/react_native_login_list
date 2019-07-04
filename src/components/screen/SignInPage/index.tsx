import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationInjectedProps } from "react-navigation";
import { withNavigation } from "react-navigation";
import {APP_PATH} from '../../../../App';

type Props = {

} & NavigationInjectedProps;

class SignInPage extends React.Component<Props> {
    render() {
        return(
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate(APP_PATH.LIST)
            }}>
                <Text>
                    {'SignIn'}
                </Text>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(SignInPage);
