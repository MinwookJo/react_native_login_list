import React from "react";
import { View, Text } from "react-native";
import { VehicleType, UpdateVehicleFavoriteRequest, initialVehicle } from "../../../../../api/Vehicle";
import styles from './styles';
import StarBox from "../../../../molecule/StarBox";
import { observer, inject } from "mobx-react";
import RootStore from "../../../../../store/RootStore";

type Props = {
    vehicleIdx: number,
} & InjectedProps

type InjectedProps = {
    rootStore?: RootStore
}

type State = {
    vehicle: VehicleType
}

const initialState: State = {
    vehicle: initialVehicle
}

@inject('rootStore')
@observer
class VehicleListItem extends React.Component<Props>{
    state = initialState;

    private onPressStar = () => {
        const {vehicleIdx} = this.props;
        const {updateVehicleSFavorite} = this.props.rootStore.searchStore;
        const {token} = this.props.rootStore.accountStore;
        const {vehicle} = this.state;

        const request: UpdateVehicleFavoriteRequest = {
            status: !vehicle.favorite
        }
        updateVehicleSFavorite(vehicleIdx, request, token);
    }

    componentDidMount() {
        const {getVehicleListItemAt} = this.props.rootStore.searchStore;
        const {vehicleIdx} = this.props;
        this.setState({vehicle: getVehicleListItemAt(vehicleIdx)});
    }

    render(){
        const {vehicle} = this.state;
        return(
            <View style={styles.vehicleCard}>
                <View style={styles.vehicleContent}>
                    <Text style={[styles.descriptionText, {marginTop: 16}]}>{vehicle.description}</Text>
                    <Text style={[styles.licenseNumberText, {marginTop: 9}]}>{vehicle.licenseNumber}</Text>
                    <View style={{flexDirection: 'row', alignItems:'center', marginTop: 8}}>
                        <StarBox isStarOn={vehicle.favorite} onCheck={() => this.onPressStar()}/>
                        <Text style={[styles.capacityText]}>{'적재용량: ' + vehicle.capacity}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default VehicleListItem;