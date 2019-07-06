import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
    visible: boolean,
}

class LoadingModal extends React.Component<Props> {
    render() {
        const {visible} = this.props;
        return(
            <Modal transparent={true} visible={visible}>
                <View style={styles.modalBackground}>
                    <Text style={styles.modalText}>Loading...</Text>
                </View>
            </Modal>
        );
    }
}

export default LoadingModal;
