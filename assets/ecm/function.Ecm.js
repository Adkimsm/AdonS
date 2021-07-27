function GetDateOrTime() {
	// 日期时间， **自写**
	// Prettier 真的是闲的，普通的合并字符串搞这么长干什么
	setInterval(() => {
		document.querySelector("#time").textContent =
			new Date().getHours() +
			":" +
			new Date().getMinutes() +
			":" +
			new Date().getSeconds();
		document.querySelector("#date").textContent =
			new Date().getMonth() + 1 + "月" + new Date().getDate() + "日";
	}, 600);
}

function CheckInstall() {
	// 检测安装，也用来设置初始进入 **自写**
	let database = window.indexedDB.open("AdonD", Date.now());
	database.onupgradeneeded = (e) => {
		const db = e.target.result;
		if (!db.objectStoreNames.contains("setting")) {
			// 执行到这儿，说明数据库是第一次创建,没有用户
			window.location = "././install.html";
		}
	};

	database.onsuccess = function (e) {
		// IndexedDB真的是又臭又长
		let db = e.target.result;
		let transaction = db.transaction(["setting"], "readwrite");
		let store = transaction.objectStore("setting");
		let data = store.get("userName");
		data.onsuccess = function () {
			if (this.result !== (null || undefined)) {
				console.log(this.result);
				document.getElementById("username_finder").textContent =
					this.result.value;
				Display_C();
				display_S("Hello," + this.result.value);
			}
		};
	};
}

// 菜单，某位GitHub好友弄来的

// 展示菜单事件
function showMenu(theMenu) {
  theMenu.style.display = "block";
  setTimeout(() => {
    theMenu.style.opacity = "1";
    theMenu.style.transform = "scale(1.05)";
  }, 50);
  setTimeout(() => (theMenu.style.transform = "scale(1)"), 300);
}

// 隐藏菜单事件
function hideMenu(theMenu) {
  theMenu.style.transform = "scale(0.5)";
  theMenu.style.opacity = "0";
  setTimeout(() => (theMenu.style.display = "none"), 250);
}

// 显示Logo菜单
function showLogoMenu(e) {
  LogoMenu.style.left = e.clientX + 3 + "px";
  LogoMenu.style.top = e.clientY + 3 + "px";
  showMenu(LogoMenu);
}

window.onclick = () => {
	if (LogoMenu.style.opacity === "1") {
		hideMenu(LogoMenu);
	}
};

function $_(element) {
  return document.querySelector(element);
}

// 某个群里的某位大佬管理的alert代码

let alert = document.querySelector(".alert");
let timer;

function display_S(str) {
  alert.style.top = "35px";
  alert.style.opacity = "1";
  alert.innerHTML = str;
  timer = setTimeout(function () {
    alert.style.top = "-50px";
    alert.style.opacity = "0";
  }, 5000);
}

alert.addEventListener("mouseover", function () {
  clearTimeout(timer);
  console.log("用户已知晓");
});

alert.addEventListener("mouseleave", function () {
  console.log("用户已阅读完毕");
  setTimeout(() => {
    alert.style.top = "-50px";
    alert.style.opacity = "0";
  }, 100);
});

function Display_C() {
  clearTimeout(timer);
  alert.style.backgroundColor = "white";
  alert.style.color = "black";
  let twinkle1 = setInterval(() => {
    alert.style.backgroundColor = "rgb(51, 51, 51)";
    alert.style.color = "white";
  }, 250);
  let twinkle2 = setInterval(() => {
    alert.style.backgroundColor = "white";
    alert.style.color = "black";
  }, 500);
  setTimeout(() => {
    clearInterval(twinkle1);
    clearInterval(twinkle2);
  }, 750);
}

// pop. **自写**

function closePop(pop) {
	pop.style.display = "none";
  AppCover.style.display = "none";
  AppCover.style.opacity = "0";
}

function showPop(pop) {
  AppCover.style.animation = "FadeIn 2s cubic-bezier(0.24, 1.38, 0, 0.42)";
  pop.style.animation = "FadeIn .4s cubic-bezier(0.63, 3.51, 0,-1.36)";
  AppCover.style.display = "block";
  AppCover.style.opacity = "1";
	pop.style.display = "block";
}

// launchPad，**自写**

function openLaunchPad() {
  document.querySelector("#launchPad").setAttribute("style", "animation: FadeIn .5s cubic-bezier(0.63, 3.51, 0,-1.36)");
}