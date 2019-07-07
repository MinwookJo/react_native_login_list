import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import { NavigationInjectedProps } from "react-navigation";
import RootStore from "../../../store/RootStore";
import VehicleList from "../../organism/VehicleList";
import LoadingModal from "../../molecule/LoadingModal";
import BottomMenuTap from "../../organism/BottomMenuTap";
import SearchHeader from "../../organism/SearchHeader";

type Props = {
} & NavigationInjectedProps;

type State = {
    isLoading: boolean
}

const initialState: State = {
    isLoading: false
}

class ListPage extends React.Component<Props, State> {
    state = initialState;

    setLoadingVisible = (visible: boolean) => {
        this.setState({isLoading: visible});
    }

    render() {
        const {isLoading} = this.state;
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <SearchHeader/>
                <VehicleList setLoadingVisible={this.setLoadingVisible}/>
                <BottomMenuTap/>
                <LoadingModal visible={isLoading}/>
            </View>
            
        );
    }
}

export default withNavigation(ListPage);
