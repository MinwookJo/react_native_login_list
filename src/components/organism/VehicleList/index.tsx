import { View, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import { fetchVehicleList, VehicleType } from "../../../api/Vehicle";
import { inject, observer } from "mobx-react";
import RootStore from "../../../store/RootStore";
import VehicleListItem from "./components/VehicleListItem";

type Props = {
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

    componentWillMount() {
        const {rootStore} = this.props;
        const {accountStore, searchStore} = rootStore;
        fetchVehicleList(accountStore.token).then(
            (result: VehicleType[]) => {
                // 성공 시 store에 저장
                searchStore.setVehicleList(result);
            }
        ).catch(
            (err) => {
                console.log('Err' + err);
            }
        )
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
            <View style={{width: '100%'}}>       
                <ScrollView>
                    {this.renderList()}
                </ScrollView>
            </View>
        );
    }
}

export default VehicleList;
