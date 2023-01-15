import {
    Menu,
    Item
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
const MENU_ID = "globalMenu";

const ContextMenu = () => {
    return (<Menu id={MENU_ID} animation="scale">
        <Item>
            桌面设置
        </Item>
    </Menu>)
}

export default ContextMenu