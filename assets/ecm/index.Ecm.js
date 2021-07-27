document.querySelector("body").onload = function () {
	console.log("Onload执行正常"); //用于确定此事件是否执行
	// 检查数据
	CheckInstall();

	GetDateOrTime();
	// 日期时间的更新
	console.log("Onload事件结束");
};
