import React from "react";
import { View, Text } from "react-native";
import { VehicleType } from "../../../../../api/Vehicle";
import styles from './styles';
type Props = {
    vehicle: VehicleType
}

const VehicleListItem: React.FC<Props> = (props: Props) => {
    const {vehicle} = props;
    return(
        <View style={styles.vehicleCard}>
            <View style={styles.vehicleContent}>
                <Text style={[styles.descriptionText, {marginTop: 16}]}>{vehicle.description}</Text>
                <Text style={[styles.licenseNumberText, {marginTop: 9}]}>{vehicle.licenseNumber}</Text>
                <Text style={[styles.capacityText, {marginTop: 8}]}>{'적재용량: ' + vehicle.capacity}</Text>
            </View>
        </View>
    );
}

export default VehicleListItem;