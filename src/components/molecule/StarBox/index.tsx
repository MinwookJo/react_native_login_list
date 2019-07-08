import React from "react";
import CheckBox from "../../atom/CheckBox";
import images from "../../../constants/images";
import styles from "./styles";

type Props = {
    isStarOn: boolean,
    onCheck: () => void
}

// 즐겨찾기 체크박스
const StarBox: React.FC<Props> = (props: Props) => {
    const {isStarOn, onCheck} = props;
    return(
        <CheckBox check={isStarOn} onCheck={onCheck} 
        checkImageSrc={images.Icon.StarOn} unCheckImageSrc={images.Icon.StarOff} imageStyle={styles.starImage}/>
    );
}

export default StarBox;