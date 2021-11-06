/*
      _                __                             ______   
     / \              |  ]                          .' ____ \  
    / _ \         .--.| |      .--.      _ .--.     | (___ \_| 
   / ___ \      / /'`\' |    / .'`\ \   [ `.-. |     _.____`.  
 _/ /   \ \_    | \__/  |    | \__. |    | | | |    | \____) | 
|____| |____|    '.__.;__]    '.__.'    [___||__]    \______.' 

 */
const Store = require("electron-store");

const store = new Store();

store.set("unicorn", "🦄");
console.log(store.get("unicorn"));

/**
 * Start Screen Animation.
 */

document.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		document.querySelector("#onStart").style.animation = "FadeOut .2s linear";
		setTimeout(() => {
			document.querySelector("#onStart").style.opacity = 0;
			document.querySelector("#onStart").style.display = "none";
		}, 100);
	}, 2168);
});

/**
 * Get Date Or Time
 */

(function () {
	setInterval(() => {
		document.querySelector("#dockTime").textContent =
			new Date().getHours() + ":" + new Date().getMinutes();
	});
	setInterval(() => {
		document.querySelector("#dockDate").textContent =
			new Date().getFullYear() +
			"/" +
			new Date().getMonth() +
			"/" +
			new Date().getDate();
	});
	setInterval(() => {
		document.querySelector("#LockTime").textContent =
			new Date().getHours() +
			":" +
			new Date().getMinutes() +
			":" +
			new Date().getSeconds();
	});
})();

/**
 * LaunchPad.
 */

function showLauPad() {
	document.querySelector("#laupad").style.animation = "FadeIn .2s linear";
	document.querySelector("#laupad").style.opacity = 1;
	document.querySelector("#laupad").style.display = "block";
	document.querySelector("#dock_time").style.bottom = "calc(55%)";
	document.querySelector("#sysIco").onclick = function () {
		hideLauPad();
	};
}

function hideLauPad() {
	document.querySelector("#laupad").style.animation = "FadeOut .2s linear";
	setTimeout(() => {
		document.querySelector("#laupad").style.opacity = 0;
		document.querySelector("#laupad").style.display = "none";
	}, 100);
	document.querySelector("#dock_time").style.bottom = "0px";
	document.querySelector("#sysIco").onclick = function () {
		showLauPad();
	};
}

/**
 * Lock Screen,Like Windows 11.
 */

function hideLockScr() {
	document.querySelector("#LockScreen").style.animation = "FadeOut .2s linear";
	setTimeout(() => {
		document.querySelector("#LockScreen").style.opacity = 0;
		document.querySelector("#LockScreen").style.display = "none";
	}, 100);
}

function showLockScr() {
	hideLauPad();
	document.querySelector("#LockScreen").style.animation =
		"fadeInDown .2s linear";
	document.querySelector("#LockScreen").style.opacity = 1;
	document.querySelector("#LockScreen").style.display = "block";
}

/**
 * Shutdown Diaglog
 */

document.querySelector("#shutdown_btn").addEventListener("click", () => {
	pxmu
		.diaglog({
			title: {
				text: "警告！",
				color: "red",
				fontsize: 20,
				fontweight: "bold",
				center: false,
			},
			content: {
				text: "您确定要关闭 AdonS 吗？",
				color: "#444",
				fontsize: 14,
				fontweight: "normal",
			},
			line: {
				solid: 1,
				color: "#eee",
			},
			btn: {
				left: {
					text: "取消",
					bg: "#fff",
					solidcolor: "#fff",
					color: "#444",
				},
				right: {
					text: "确定",
					bg: "#fff",
					solidcolor: "#fff",
					color: "red",
				},
			},
			congif: {
				animation: "fade",
			},
		})
		.then(function (res) {
			if (res.btn == "right") {
				setTimeout(() => {
					hideLauPad();
					setTimeout(() => {
						window.location.href = "./closing.html";
					}, 700);
				}, 600);
			}
		});
});

/**
 * To Do List
 */

(function () {
	function newFun() {
		var addItems = document.querySelector(".add-items");
		var itemsList = document.querySelector(".plates");
		var buttons = document.querySelector(".buttons");
		var items = store.get("items") ? JSON.parse(store.get("items")) : [];

		//添加item方法
		function handleSubmit(e) {
			e.preventDefault();
			var name = this.querySelector("[name=item]").value;

			var item = {
				name: name,
				done: false,
			};
			items.push(item);
			store.set("items", JSON.stringify(items));
			updateList(items, itemsList);
			this.reset();
		}

		function updateList(plates = [], plateList) {
			plateList.innerHTML = plates
				.map(function (plate, i) {
					return (
						'<li><input type="checkbox" data-index="' +
						i +
						'" id="plate' +
						i +
						'" ' +
						(plate.done ? "checked" : "") +
						' /><label for="plate' +
						i +
						'">' +
						plate.name +
						"</label></li>"
					);
				})
				.join("");
		}

		function toggleChecked(e) {
			if (!e.target.matches("input")) return;
			var item = e.target.dataset.index;
			items[item].done = !items[item].done;
			store.set("items", JSON.stringify(items));
			updateList(items, itemsList);
		}

		function doButtonPress(e) {
			var action = e.target.dataset.action;
			switch (action) {
				case "clear":
					items = [];
					break;
				case "check":
					items.map(function (item) {
						return (item.done = true);
					});
					break;
				case "clearCheck":
					for (var key in items) {
						if (items[key].done === true) {
							pxmu.toast({
								msg: "可能会无法一次删除所有，请多次点击",
								time: 800,
							});
							items.splice(key, 1);
						}
					}
					break;
				case "uncheck":
					items.map(function (item) {
						return (item.done = false);
					});
					break;
				default:
					return;
			}
			store.set("items", JSON.stringify(items));
			updateList(items, itemsList);
		}

		addItems.addEventListener("submit", handleSubmit);
		itemsList.addEventListener("click", toggleChecked);
		buttons.addEventListener("click", doButtonPress);

		updateList(items, itemsList);
	}

	document.addEventListener("DOMContentLoaded", newFun);
})();

function showTodoList() {
	hideLauPad();
	document.querySelector("#TodoList").style.animation = "FadeIn .2s linear";
	document.querySelector("#TodoList").style.opacity = 1;
	document.querySelector("#TodoList").style.display = "block";
}

function hideTodoList() {
	showLauPad();
	document.querySelector("#TodoList").style.animation = "FadeOut .2s linear";
	setTimeout(() => {
		document.querySelector("#TodoList").style.opacity = 0;
		document.querySelector("#TodoList").style.display = "none";
	}, 100);
}

/**
 * Context Menu DIY.
 */

document.addEventListener("DOMContentLoaded", () => {
	var forRight = document.getElementById("right-menu");
	function showContextmenu() {
		var event = event || window.event;
		//显示菜单
		forRight.style.display = "block";
		setTimeout(() => {
			forRight.style.opacity = "1";
			forRight.style.transform = "scale(1.05)";
		}, 50);
		setTimeout(() => (forRight.style.transform = "scale(1)"), 200);
		//菜单定位
		forRight.style.left = event.pageX + "px";
		forRight.style.top = event.pageY + "px";
		//return false为了屏蔽默认事件
		return false;
	}
	function hideContextMenu() {
		forRight.style.transform = "scale(7.5)";
		forRight.style.opacity = "0";
		setTimeout(() => (forRight.style.display = "none"), 250);
	}
	window.oncontextmenu = function (event) {
			showContextmenu();
	};
	//再次点击，菜单消失
	document.onclick = function () {
		hideContextMenu();
	};
});

/**
 * PopUp.
 */

function showPop(thePopUp) {
	let cover1 = document.querySelector("#cover1.cover1");
	let popObj = document.querySelector("#" + thePopUp);
	cover1.style.display = "block";
	popObj.style.display = "block";
	popObj.style.transform = "scale(1.1)";
	setTimeout(() => {
		cover1.style.opacity = "1";
		popObj.style.opacity = "1";
		setTimeout(() => {
			popObj.style.transform = "scale(1.0)";
		}, 100);
	}, 50);
	cover1.style.opacity = "1";
}

function closePop(obj) {
	cover1.style.opacity = "0";
	obj.style.opacity = "0";
	obj.style.transform = "scale(1.1)";
	setTimeout(() => {
		cover1.style.display = "none";
		obj.style.display = "none";
		obj.style.transform = "scale(0.6)";
		setTimeout(() => {
			obj.style.transform = "scale(1.1)";
		}, 350);
	}, 350);
}

/**
 * Plugin Support.
 */

const { ipcRenderer } = require("electron");

ipcRenderer.on("Plugin-Content", (_event, path, content) => {
	if (content && path) {
		console.log(content);
		let contentObj = JSON.parse(content);
		let mainJsPathInJson = contentObj.main;
		var items = store.get("InstalledPlugins")
			? JSON.parse(store.get("items"))
			: [];
		let item = {
			name: path,
			main: mainJsPathInJson,
		};
		items.push(item);
		store.set("InstalledPlugins", JSON.stringify(items));
	}
});

ipcRenderer.on("Plugin-Uninstall-All", (_event, mess) => {
	if (mess === "checked") {
		pxmu
			.diaglog({
				title: {
					text: "警告！",
					color: "red",
					fontsize: 20,
					fontweight: "bold",
					center: false,
				},
				content: {
					text: "您确定要删除所有插件吗？",
					color: "#444",
					fontsize: 14,
					fontweight: "normal",
				},
				line: {
					solid: 1,
					color: "#eee",
				},
				btn: {
					left: {
						text: "取消",
						bg: "#fff",
						solidcolor: "#fff",
						color: "#444",
					},
					right: {
						text: "确定",
						bg: "#fff",
						solidcolor: "#fff",
						color: "red",
					},
				},
				congif: {
					animation: "fade",
				},
			})
			.then(function (res) {
				if (res.btn == "right") {
					localStorage.removeItem("InstalledPlugins");
				}
			});
	}
});

if (store.get("InstalledPlugins")) {
	window.addEventListener("load", () => {
		let InstalledPluginsObj = JSON.parse(store.get("InstalledPlugins"));
		InstalledPluginsObj.forEach((obj) => {
			let elementObj = document.createElement("script");
			obj.main
				? (elementObj.src = obj.main)
				: console.log(
						"Path 为 " + obj.name + " 的插件没有 main 属性，无法添加至 DOM."
				  );
			elementObj.defer = true;
			document.querySelector("body").append(elementObj);
		});
	});
}
