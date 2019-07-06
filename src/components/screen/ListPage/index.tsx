import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import { NavigationInjectedProps } from "react-navigation";
import RootStore from "../../../store/RootStore";
import VehicleList from "../../organism/VehicleList";

type Props = {
} & NavigationInjectedProps;

class ListPage extends React.Component<Props> {

    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <VehicleList/>
            </View>
            
        );
    }
}

export default withNavigation(ListPage);
