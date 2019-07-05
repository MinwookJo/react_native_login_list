import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import { NavigationInjectedProps } from "react-navigation";
import {APP_PATH} from '../RootPage';
import { observer, inject } from 'mobx-react';
import SearchStore from "../../../store/SearchStore";

type Props = {
    searchStore?: SearchStore
} & NavigationInjectedProps;

@inject('searchStore')
@observer
class ListPage extends React.Component<Props> {
    render() {
        const {searchStore} = this.props
        return(
            <TouchableOpacity onPress={() => {
                searchStore.changeKeyWord();
                // this.props.navigation.navigate(APP_PATH.SIGNIN)
            }}>
                <Text>{searchStore.searchKeyWord + 'a'}</Text>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(ListPage);
