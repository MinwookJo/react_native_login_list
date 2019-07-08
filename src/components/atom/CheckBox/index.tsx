import React from "react";
import { Image, ImageSourcePropType, ImageStyle, ViewStyle, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
    checkImageSrc: ImageSourcePropType,
    unCheckImageSrc: ImageSourcePropType
    imageStyle?: ImageStyle,
    borderStyle?: ViewStyle,
    check: boolean,
    onCheck: () => void
}

// checkBox 기본이 되는 아톰 클릭 시 unCheck,check image 스왑
class CheckBox extends React.Component<Props> {
    render() {
        const {checkImageSrc, unCheckImageSrc,imageStyle, borderStyle, check, onCheck} = this.props;
        return(
            <TouchableOpacity style={[styles.checkBoxWrapperStyle, borderStyle]} onPress={() => {onCheck()}}>
                <Image source={check ? checkImageSrc : unCheckImageSrc} style={[styles.checkBoxImage, imageStyle]}></Image>
            </TouchableOpacity>
        );
    }
}

export default CheckBox;