import {View} from 'react-native';
import styles from './styles';
import React from 'react';
import Label from '../../atom/Label';
import TextInputField from '../../atom/TextInputField';

type Props = {
    headerText: string
    onChangeText: (value: string) => void
}

// 머릿말이 있는 텍스트 필드
const TitleTextInput: React.FC<Props> = (props: Props) => {
    return(
        <View style={{flexDirection: 'column'}}>
            <Label text={props.headerText} style={styles.titleInputFieldSubtitle}/>
            <TextInputField onChangeText={props.onChangeText} style={styles.titleInputField}/>
        </View>
    );
}

export default TitleTextInput;
