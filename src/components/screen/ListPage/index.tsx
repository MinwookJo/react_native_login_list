import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import { NavigationInjectedProps } from "react-navigation";
import {APP_PATH} from '../../../../App';

type Props = {} & NavigationInjectedProps;

class ListPage extends React.Component<Props> {
    render() {
        return(
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate(APP_PATH.SIGNIN)
            }}>
                <Text>List Page</Text>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(ListPage);
