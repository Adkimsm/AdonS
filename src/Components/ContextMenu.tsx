import { Menu, Item } from 'react-contexify'
import 'react-contexify/dist/ReactContexify.css'
import menuStyle from 'styles/components/menu.module.scss'
import customConfig from 'src/custom.config'
import storage from 'src/utils/functions/storage'

const MENU_ID = customConfig.contextMenu.id

const ContextMenu = () => {
    return (
        <Menu
            id={MENU_ID}
            animation='scale'
            className={menuStyle.contexify}
            style={{
                background:
                    storage.getItem('enableBlur') === 'true'
                        ? 'rgba(255,255,255,0.85)'
                        : '#fff',
                backdropFilter:
                    storage.getItem('enableBlur') === 'true'
                        ? 'blur(15px)'
                        : 'none',
            }}
        >
            {customConfig.contextMenu.items.map((item, i) => {
                return (
                    <Item onClick={item.action} key={i}>
                        {item.text}
                    </Item>
                )
            })}
        </Menu>
    )
}

export default ContextMenu
