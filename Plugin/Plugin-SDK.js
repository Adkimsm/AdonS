/**
 * Class & Constructor & CreateIcon.
 *
 * @param launch:Boolean 是否添加图标
 * @param pName:String 插件名，建议使用大驼峰命名法，例如 `HelloWorld`
 * @param pIcon:String 插件图标，规格为 `48x48` ，建议 svg 格式，也可以为 png，路径建议为 http(s) 协议， cdn 可以使用 JsDelivr。
 * @param onClick:Function 点击事件，默认为 `showPop(pop + ${pName})`，即默认打开 id 为 pop + pName 的子 pop 页面。推荐使用 function 函数定义后，直接填入函数名，无需带括号。
 *
 */

/**
 * 请注意：本文件的命名是固定的，格式为 `插件名.js`
 * 例如 `HelloWorld.js`
 */

class mainPlugin {
	constructor(launch, pName, icon, onClick) {
		if (launch) {
			this.launch = launch;
			this.pName = pName;
			this.pIcon = icon;
			if (onClick) {
				this.onClick = onClick;
			} else {
				this.onClick = "showPop(pop" + pName + ");";
			}
		}
	}
	createIcon() {
		let image = document.createElement("image");
		image.src = this.pIcon;
		image.alt = this.pName;
		image.addEventListener("click", this.onClick);
		document.querySelector("#laupad .icons .icon_top").append(image);
	}
	/**
	 * CreatePop.
	 *
	 * @param content:String Pop 内容，文本建议使用 p 标签，也可自定义 CSS。
	 *
	 */
	createPop(content) {
		let StringContent = `
            <div class="popUp" id="pop${this.pName}">
                <span class="btnClose" onclick="closePop(pop${this.pName})"></span>
                <div class="pTitle">${this.pName}</div>
                <div class="pContent">
                ${content}
                </div>
            </div>`;
        document.querySelector('#cover1.cover1').append(StringContent)
	}
}