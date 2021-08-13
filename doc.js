$(".item-1").html("<h1>hi!</h1>");

ananQuery("button").text("Button");

$("span").mouse("mouseover", function () {
	this.style.color = "blue";
});

$(".item-3").empty();

$(".changecolor-2").remove();

$(".field-2").on("click", function () {
	console.log("hey, I am a button");
});

$(".field-2").attr("value");

$("#inp").addClass("newClass");

$(".btn-2").click(function () {
	$("div").each(function (index, element) {
		// element == this
		$(element).css("backgroundColor", "yellow");
		if ($(this).is("#stop")) {
			$("span").text("Stopped at div index #" + index);
			return false;
		}
	});
});

$(".btn-2").height();

$(".btn-2").width();

ananQuery(".level-2").children();

$("span").mouse("mouseover", function () {
	this.style.color = "black";
	this.style.backgroundColor = "red";
});

$("li").objectAmount();

$("li").objectAmount();

$("li").hasClass("foo");

$(".item-iii").hide();

$(".item-iii").show();

$(".item-a").removeClass("item-a");

$(".field-2").removeAttr("value", "tall");

$("#inp").toggleClass("className");
$("#inp").toggleClass("className");

$("#inp-1").offset("8px", "16px");
