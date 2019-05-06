$(document).ready(function(){
	for (var i=0;i<statements.length;i++){
		$("#says").append("<div class='phrases'><div class='text'>");
		$(".text")[i].innerHTML=statements[i].cis;
	}

	$("body").on("click", ".page", function(){
		$(this).toggle();
	});

	$(".phrases").mousedown(function(){
		$(this).addClass("select");
	});

	$(".phrases").mouseup(function(){
		$(".phrases").removeClass("select");
		var index=$(".phrases").index(this);
		$("<div class='page'>").appendTo("body");
		$("<div class='answer'>").appendTo(".page");
		$(".answer").append(statements[index].cis+"<br><br>==><br><br>"+statements[index].trans);
	});

	
})