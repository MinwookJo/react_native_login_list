import {TextInput, ViewStyle} from 'react-native';
import styles from './styles';
import React from 'react';

type Props = {
    style?: ViewStyle,
    onChangeText: (value: string) => void
}

// 기본 텍스트 인풋
const TextInputField: React.FC<Props> = (props: Props) => {
    return(
        <TextInput style={[styles.inputField, props.style]} onChangeText={props.onChangeText}/>
    );
}

export default TextInputField;
