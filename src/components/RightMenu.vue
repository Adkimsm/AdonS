<template>
	<transition
		name="custom-classes-transition"
		enter-active-class="animate__animated animate__fadeInTopLeft"
		leave-active-class="animate__animated animate__fadeOutBottomRight"
	>
		<div
			class="right-menu"
			id="right-menu"
			v-if="displayRightMenu"
			:style="rightMenuStyle"
		>
			<div class="list">
				<div id="ExitBtnInRightMenu">退出</div>
			</div>
		</div>
	</transition>
</template>

<script>
import { onMounted } from "vue";
export default {
	name: "RightMenu",
	mounted() {
		let componentThis = this;

		window.oncontextmenu = (e) => {
			var evt = window.event || e;
			e.preventDefault();
			componentThis.rightMenuStyle.left = evt.pageX + "px";
			componentThis.rightMenuStyle.top = evt.pageY + "px";
			console.log(componentThis.rightMenuStyle)
			componentThis.displayRightMenu = true;
		};
		document.onclick = () => {
			componentThis.displayRightMenu = false;
		};
	},
	data() {
		return {
			displayRightMenu: false,
			rightMenuStyle: {
				left: "10px",
				top: "10px",
			},
		};
	},
};
</script>

<style>
.right-menu {
	width: 150px;
	position: absolute;
	z-index: 9998;
	overflow: hidden;
	padding: 10px 12px;
	font-size: 14px;
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
