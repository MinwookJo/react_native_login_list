import { TextStyle, ViewStyle, TouchableOpacity, Text } from "react-native";
import React from 'react';
import styles from "./styles";

type Props = {
    buttonStyle?: ViewStyle,
    buttonTextStyle?: TextStyle,
    text: string,
    onPress: () => void
}

// 텍스트 달린 버튼
const TextButton: React.FC<Props> = (props: Props) => {
    const {buttonStyle, buttonTextStyle, text, onPress} = props;
    return(
        <TouchableOpacity style={[styles.textButton, buttonStyle]} onPress={() => {onPress()}}>
            <Text style={[styles.textButtonText, buttonTextStyle]}>{text}</Text>
        </TouchableOpacity>
    );
}

export default TextButton;