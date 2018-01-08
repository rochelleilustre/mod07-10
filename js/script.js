//alert("jQuery is working!");

//selector.action

$("ul").on("click", "li", function(){
//$("li").click(function(){
	//$(this).css("color", "grey");
	//$(this).css("text-decoration", "line-through");
	$(this).toggleClass("completed");
});


$("ul").on("click", "span", function() {

//$("span").click(function(){
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event) {
	//console.log(event.which);
	if(event.which === 13){ //13 = enter key
		var	todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span>" + " " + todoText + "</li>");
	}
});