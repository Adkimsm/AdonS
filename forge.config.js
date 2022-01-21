module.exports = {
    packagerConfig: {
        appCopyright: "Copyright Uazira Inc. 2020 - 2022.",
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
