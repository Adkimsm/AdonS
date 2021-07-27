window.onunload = function () {
	// 防止用户未完成安装就关闭窗口
	if (sessionStorage.getItem("AdonD_Installed") !== "true") {
		window.indexedDB.deleteDatabase("AdonD");
	}
};

document.querySelector("section#install_before footer button#next").onclick =
	function () {
		document
			.querySelector("section#install_before")
			.setAttribute("style", "display: none;");
		document.querySelector("section#user_setting").setAttribute("style", "");
		document.getElementById("li1").setAttribute("class", "");
		document.getElementById("li2").setAttribute("class", "focus");
	};

document.querySelector("section#user_setting footer button#next").onclick =
	function () {
		let username = document.getElementById("username_input").value;
		sessionStorage.setItem("user_name", username);

		document
			.querySelector("section#user_setting")
			.setAttribute("style", "display: none;");
		document.querySelector("section#install_after").setAttribute("style", "");
		document.getElementById("li2").setAttribute("class", "");
		document.getElementById("li3").setAttribute("class", "focus");
	};

document.querySelector("section#install_after footer button#next").onclick =
	function () {
		document
			.querySelector("section#install_after")
			.setAttribute("style", "display: none;");
		sessionStorage.setItem("AdonD_Installed", "true");
		document.getElementById("li3").setAttribute("class", "");
		let CONFIG_INSTALL = [
			{ name: "userName", value: sessionStorage.getItem("user_name") },
		];
		let indexb = window.indexedDB.open("AdonD", Date.now());
		indexb.onupgradeneeded = function (e) {
			let db = e.target.result;
			let store = db.createObjectStore("setting", { keyPath: "name" });
			for (let index = 0; index < CONFIG_INSTALL.length; index++) {
				let dbe = store.add(CONFIG_INSTALL[index]);
				console.log(dbe);
				dbe.onsuccess = function () {
					console.log("OK.");
					window.location.href = "index.html"
				};
			}
		};
	};
