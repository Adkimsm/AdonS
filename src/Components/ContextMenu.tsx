import {
    Menu,
    Item
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import customConfig from "src/custom.config";

const MENU_ID = customConfig.contextMenu.id;

const ContextMenu = () => {
    return (<Menu id={MENU_ID} animation="scale">
        {customConfig.contextMenu.items.map((item, i) => {
            return(<Item onClick={item.action} key={i}>{item.text}</Item>)
        })}
    </Menu>)
}

export default ContextMenu