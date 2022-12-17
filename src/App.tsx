import React from 'react'
import Header from "@/Components/Header";
import Dock from '@/Components/Dock'
import wallpaper from 'images/wallpaper.png'

const App: React.FC = () => {
    document.title = 'AdonS'

    return (
        <>
          <Header />
          <img src={wallpaper} alt="" />
          <Dock />
        </>
    )
}

export default App
