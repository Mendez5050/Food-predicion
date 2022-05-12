$("button").click(function() {
    // let variableName = "something"
	let faveFood = $(".foodinput").val();  
    let insterfood = $(".foodinput2").val();
    $(".form").hide();
    $("body").append("<p>You will eat 40 " + faveFood + " before the age of 50 </p>");
});