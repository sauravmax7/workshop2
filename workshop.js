//check if dom is ready
$(document).ready(() => {

//Show all
    $("#all").click(() => {
        console.log("in show all");
        $(".circle").show();
    })
//Show only red
    $("#red").click(() => {
        console.log("Show Red");
        $(".red").show();
        $(".orange,.yellow").hide();
    })
//show only yellow
    $("#yellow").click(() => {
        console.log("Show yellow");
        $(".yellow").show();
        $(".orange,.red").hide();
    })
//show only orange
    $("#orange").click(() => {
        console.log("Show Orange");
        $(".orange").show();
        $(".red,.yellow").hide();
    })

});