import React from "react";
import { View, Image} from "react-native";
import images from "../../../constants/images";
import styles from "./styles";
import TextInputField from "../../atom/TextInputField";
import RootStore from "../../../store/RootStore";
import { observer, inject } from "mobx-react";

type Props = {

} & InjectedProps

type InjectedProps = {
    rootStore?: RootStore
}

// 상단 검색 바 입력 한 내용에 맞게 리스트가 생김
@inject('rootStore')
@observer
class SearchHeader extends React.Component<Props>{
    private onChangeSearchInput(value: string) {
        const {changeKeyWord} = this.props.rootStore.searchStore;
        changeKeyWord(value);
    }

    render() {
        return(
            <View style={styles.searchHeaderWrapper}>
                <Image source={images.Icon.Search} style={styles.SearchIcon}/>
                <TextInputField onChangeText={(vaule: string) => {this.onChangeSearchInput(vaule)}} style={styles.SearchInputField}
                placeholder={'차량 정보를 검색하세요'} placeholderTextColor={'#616161'}/>
            </View>
        );
    }
}

export default SearchHeader;