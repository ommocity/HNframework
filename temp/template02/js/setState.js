$(document).ready(function(){
	// 内容区域高度自适应
	reHeightMainIframe();
	
	// 左边显藏
	$(".left .middle").click(function(){
			$(".left").toggleClass("leftClose");
			$(".right").toggleClass("rightOpen");
	});
	
	// 点击菜单项形成卷帘效果
	$(".leftInner ul li p b").click(function(){
		//找到菜单项对应的子菜单
		$(this).parent().next("div").slideToggle();
		//当点击其他菜单项时 当前菜单项关闭	
		$(this).parent().parent("li").siblings("li").children("div").slideUp();
		$(".leftInner ul li").not($(this).parents("li")).removeClass("open");
		//在运行效果中改变菜单项后的箭头样式	
		$(this).parents("li").toggleClass("open");
	});
	
});

	function reHeightMainIframe(){
	var content_height;
	// 高度调整
	var winHeight = document.documentElement.clientHeight; // 取document高度
	content_height = (parseInt(winHeight)-128)+"px"; // 调整到合适的高度
	leftDiv_height = (parseInt(winHeight)-244)+"px"; // 调整到合适的高度
	$("#mainLeft").height(content_height);
	$("#mainMiddle").height(content_height);
	$("#mainRight").height(content_height);
	$("#mainFrame").height(content_height);
	$(".leftInner ul li .leftContent").height(leftDiv_height);
	window.onresize = reHeightMainIframe;
}