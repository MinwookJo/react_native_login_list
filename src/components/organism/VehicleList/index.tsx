import { View, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import { inject, observer } from "mobx-react";
import RootStore from "../../../store/RootStore";
import VehicleListItem from "./components/VehicleListItem";
import { VehicleType } from "../../../api/Vehicle";

type Props = {
    setLoadingVisible: (visible: boolean) => void
} & InjectedProps

type InjectedProps = {
    rootStore?: RootStore
}

type State = {
    vehicleListData: VehicleType[]
}

const initialState: State = {
    vehicleListData: []
}

@inject('rootStore')
@observer
class VehicleList extends React.Component<Props>{
    state = initialState;

    componentDidMount() {
        const {rootStore, setLoadingVisible} = this.props;
        const {accountStore, searchStore} = rootStore;
    
        setLoadingVisible(true);
        searchStore.fetchVehicleListData(accountStore.token,
            () => {setLoadingVisible(false);},
            () => {setLoadingVisible(false);}
        );
    }

    // foreach로 데이터만큼 렌더링하는 함수
    private renderList = () => {
        const {vehicleList} = this.props.rootStore.searchStore;
        const list: ReactNode[] = [];
        vehicleList.forEach((value: VehicleType, index: number) => {
            list.push(<VehicleListItem vehicle={value} key={'vehicle' + index}/>);
        });
        return list;
    }

    render() {
        return(
            <View style={{flex: 1, width: '100%'}}>       
                <ScrollView>
                    {this.renderList()}
                </ScrollView>
            </View>
        );
    }
}

export default VehicleList;
