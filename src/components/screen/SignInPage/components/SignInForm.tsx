import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import TitleTextInput from "../../../molecule/TitleTextInput";

class SignInForm extends React.Component {

    _onChange = (value: string) => {
        console.log(value);
    }

    render() {
        return(
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                <View style={styles.siginInIcon}/>

                <TitleTextInput headerText={'ID'} onChangeText={this._onChange}/>
                <TitleTextInput headerText={'Password'} onChangeText={this._onChange}/>

                <View style={{flexDirection: 'row'}}>
                    <View style={styles.checkBox}/>
                    <Text style={styles.checkBoxSubtitle}>로그인 상태 유지</Text>
                </View>
            </View>
        );
    }
}

export default SignInForm;
