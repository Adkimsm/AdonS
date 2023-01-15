const customConfig = {
    logoMenu: [
        {
            text: "关机",
            action: () => window.close()
        }
    ],
    contextMenu: {
        id: "globalMenu",
        items: [
            {
                text: "个性化设置",
                action: () => {alert("working in progress")}
            }
        ]
    }
}

export default customConfig