import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
    message: string,
    visible: boolean,
    onPress: () => void
}

// 확인 버튼 달려있는 팝업 경고창에 사용
class OneButtonModal extends React.Component<Props> {
    render() {
        const {message, visible, onPress} = this.props;
        return(
            <Modal transparent={true} visible={visible}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalText}>{message}</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={() => {onPress()}}>
                            <Text style={styles.modalButtonText}>
                                확인
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

export default OneButtonModal;
