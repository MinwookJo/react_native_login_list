import React from "react";
import {Text, TextStyle} from 'react-native';
import styles from './styles';
type Props = {
    text: string,
    style?: TextStyle
}

// 기본 텍스트 라벨
const Label: React.FC<Props> = (props: Props) => {
    return(
        <Text style={[styles.textLabel, props.style]}>
            {props.text}
        </Text>
    );
}

export default Label
