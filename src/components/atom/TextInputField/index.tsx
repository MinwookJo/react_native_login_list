import {TextInput, ViewStyle} from 'react-native';
import styles from './styles';
import React from 'react';
import { placeholder } from '@babel/types';

type Props = {
    style?: ViewStyle,
    onChangeText: (value: string) => void,
    placeholder?: string,
    placeholderTextColor?: string
}

// 기본 텍스트 인풋
const TextInputField: React.FC<Props> = (props: Props) => {
    return(
        <TextInput style={[styles.inputField, props.style]} onChangeText={props.onChangeText} 
        placeholder={!!props.placeholder ? props.placeholder : ''} 
        placeholderTextColor={!!props.placeholderTextColor ? props.placeholderTextColor : '#000'}/>
    );
}

export default TextInputField;
