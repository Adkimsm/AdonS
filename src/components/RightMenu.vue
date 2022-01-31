<template>
	<div class="right-menu" id="right-menu">
		<div class="list">
			<div id="ExitBtnInRightMenu">退出</div>
		</div>
	</div>
</template>

<script>
import { onMounted } from 'vue'
export default {
	name: "RightMenu",
	setup() {
		onMounted(() => {
			let forRight = document.getElementById("right-menu");
			/**
			 * @returns {void}
			 * @param event
			 */
			function showContextmenu(event) {
				forRight.style.display = "block";
				let eventC = event || window.event;
				setTimeout(() => {
					forRight.style.opacity = "1";
					forRight.style.left = eventC.pageX + 5 + "px";
					forRight.style.top = eventC.pageY + 5 + "px";
				}, 50);
				forRight.style.left = eventC.pageX - 50 + "px";
				forRight.style.top = eventC.pageY - 50 + "px";
			}

			function hideContextMenu(event) {
				let eventC = event || window.event;
				forRight.style.left = eventC.pageX - 150 + "px";
				forRight.style.top = eventC.pageY - 150 + "px";
				forRight.style.opacity = "0";
				setTimeout(() => (forRight.style.display = "none"), 250);
			}
			window.oncontextmenu = function (event) {
				event.preventDefault();
				showContextmenu(event);
			};
			document.onclick = function (event) {
				hideContextMenu(event);
			};

			document
				.querySelector("#ExitBtnInRightMenu")
				.addEventListener("click", () => {
					process.exit()
				});
		});
	}
};
</script>

<style>
.right-menu {
	width: 170px;
	position: absolute;
	z-index: 9998;
	overflow: hidden;
	padding: 15px;
	font-size: 14px;
	display: none;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px;
	overflow: hidden;
}

.lightMode .right-menu {
	background-color: white;
}

.darkMode .right-menu {
	background: #000;
}

.lightMode .right-menu div.list div:hover {
	background-color: #212121;
	color: #fafafa;
}

.darkMode .right-menu div.list div:hover {
	background-color: #fafafa;
	color: #212121;
}

.right-menu div.list div {
	list-style: none;
	padding: 10px 15px;
	border-radius: 5px;
	font-size: 11px;
	transition: all 0.17s linear;
}

.lightMode .right-menu div.list div {
	color: black;
}

.darkMode .right-menu div.list div {
	color: #fff;
}
</style>
