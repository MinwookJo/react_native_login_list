import { View } from "react-native";
import React from "react";
import { fetchVehicleList, FetchVehicleListApiType } from "../../../api/Vehicle";
import { inject, observer } from "mobx-react";
import RootStore from "../../../store/RootStore";

type Props = {
} & InjectedProps

type InjectedProps = {
    rootStore?: RootStore
}

@inject('rootStore')
@observer
class VehicleList extends React.Component<Props>{

    componentDidMount() {
        const {rootStore} = this.props;
        const {accountStore} = rootStore;
        console.log('MJ: ', accountStore.token);
        fetchVehicleList(accountStore.token).then(
            (result: FetchVehicleListApiType) => {
                console.log('ABC'+ result);
            }
        ).catch(
            (err) => {
                console.log('Err' + err);
            }
        )
    }

    render() {
        return(
            <View>
                
            </View>
        );
    }
}

export default VehicleList;
