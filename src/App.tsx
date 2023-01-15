import React from 'react'
import Header from "@/Components/Header";
import Dock from '@/Components/Dock'
import wallpaper from 'images/wallpaper.png'
import {
  Menu,
  Item,
  useContextMenu
} from "react-contexify";

import "react-contexify/dist/ReactContexify.css";

const MENU_ID = "globalMenu";

const App: React.FC = () => {
  document.title = 'AdonS'
  const { show } = useContextMenu({
    id: MENU_ID
  });

  return (<>
    <div onContextMenu={(e) => { show({ event: e }) }}>
      <Header />
      <img src={wallpaper} alt="" />
      <Dock />
    </div>
    <Menu id={MENU_ID} animation="scale">
      <Item>
        桌面设置
      </Item>
    </Menu>
  </>
  )
}

export default App
