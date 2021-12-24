module.exports = {
    packagerConfig: {
        appCopyright: "©Uazira ©Adkinsm 2021. ",
        icon: "./app/assets/images/xh-256.ico",
     },
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name: "Easier"
            }
        }
    ]
}
