import React from "react";
import { View, Text, ViewStyle } from "react-native";
import styles from "./styles";
import CheckBox from "../../atom/CheckBox";
import images from '../../../constants/images';
type Props = {
    title: string,
    check: boolean,
    style?: ViewStyle,
    onCheck: () => void
}

class TitleCheckBox extends React.Component<Props> {
    render() {
        const {title, check, style, onCheck} = this.props;
        return(
            <View style={[{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',width: 296}, style]}>
                <CheckBox check={check} imageStyle={styles.checkBoxImage} borderStyle={styles.checkBoxWrapper} 
                    unCheckImageSrc={{uri: null}} checkImageSrc={images.Icon.CheckOn} onCheck={() => onCheck()}/>
                <Text style={styles.checkBoxTitle}>{title}</Text>
            </View>
        );
    }
}

export default TitleCheckBox;