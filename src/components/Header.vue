<template>
	<header id="dropSelectToMoveWindow" style="-webkit-app-region: drag">
		Easier
	</header>
	<div class="dropdown">
		<div class="item">
			<button class="dropbtn">Dev</button>
			<div class="dropdown-content">
				<a id="dropdownHeaderReloadDevBtn">Reload</a>
				<a id="dropdownHeaderToolsDevBtn">Dev Tools</a>
			</div>
		</div>
		<div class="item">
			<button class="dropbtn">Plugins</button>
			<div class="dropdown-content">
				<a id="dropdownHeaderInstallPluginsBtn">
					Install Plugin From JSON File...
				</a>
				<a id="dropdownHeaderUninstallAllPluginsBtn"> Uninstall All Plugins </a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style scoped>
header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 25px;
	padding: 10px;
	background-color: #2a2a2adc;
	backdrop-filter: blur(15px);
	color: #fff;
	display: flex;
	padding-left: 13px;
	align-items: center;
	font-weight: 700;
}

.dropdown {
	box-sizing: border-box;
	height: 45px;
	margin-left: 70px;
	position: fixed;
	display: flex;
	flex-direction: row;
	z-index: 999;
	-webkit-app-region: no-drag;
	top: 0;
	align-items: center;
}
</style>
<style>
.dropbtn {
	padding: 8px 10px;
	font-size: 16px;
	border: 1px transparent solid;
	margin-left: 5px;
	border-radius: 13px;
	height: 34.98px;
}

.lightMode .dropbtn {
	background-color: black;
	color: white;
}

.darkMode .dropbtn {
	background-color: rgb(236, 236, 236);
	color: rgb(0, 0, 0);
}

.dropdown-content {
	display: none;
	position: absolute;
	min-width: 200px;
	z-index: 999;
	border-radius: 5px;
	opacity: 0;
	transition: all 0.2s;
	background-color: rgba(0, 0, 0, 0.534);
	backdrop-filter: blur(10px);
}

.lightMode .dropdown-content {
	color: rgb(255, 255, 255);
}

.darkMode .dropdown-content {
	color: rgb(0, 0, 0);
}

.dropdown-content a {
	margin: 5px;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	border-radius: 5px;
}

.lightMode .dropdown-content a:hover {
	background-color: #fafafa;
	color: rgb(0, 0, 0);
}

.darkMode .dropdown-content a:hover {
	background-color: #020202;
	color: rgb(255, 255, 255);
}

.dropdown > div {
	height: auto;
}

.dropdown div:hover .dropbtn ~ .dropdown-content {
	display: block;
	opacity: 1;
}

.dropdown .dropbtn:hover {
	background-color: grey;
}
</style>
