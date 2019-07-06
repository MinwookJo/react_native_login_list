import React from "react";
import { View, Text } from "react-native";
import { VehicleType, updateVehicleFavorite } from "../../../../../api/Vehicle";
import styles from './styles';
import StarBox from "../../../../molecule/StarBox";
import { observer, inject } from "mobx-react";
import RootStore from "../../../../../store/RootStore";

type Props = {
    vehicle: VehicleType,
} & InjectedProps

type InjectedProps = {
    rootStore?: RootStore
}
@inject('rootStore')
@observer
class VehicleListItem extends React.Component<Props>{

    private onPressStar = () => {
        const {vehicle} = this.props;
        const {token} = this.props.rootStore.accountStore;
        console.log(token);
        updateVehicleFavorite(vehicle.vehicleIdx, {status: !vehicle.favorite}, token)
        .then((result: string) => {
            console.log('sTR' + result);
        }).catch(
            (err) => {
                console.log('ERR' + err);
            }
        )
    }

    render(){
        const {vehicle} = this.props;
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