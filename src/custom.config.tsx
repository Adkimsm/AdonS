const customConfig = {
    logoMenu: [
        {
            text: "退出",
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