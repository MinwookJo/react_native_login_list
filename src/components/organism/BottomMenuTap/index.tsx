import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import images from "../../../constants/images";
import styles from "./styles";

// 아직 기능이 구현되지 않은 하단 메뉴 바
class BottomMenuTap extends React.Component{
    render() {
        return(
            <View style={styles.bottomMenuWrapper}>
                <TouchableOpacity style={styles.bottomMenuButton}>
                    <Image source={images.Icon.Menu} style={styles.bottomMenuIcon}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BottomMenuTap;