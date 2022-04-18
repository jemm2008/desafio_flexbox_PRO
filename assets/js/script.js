$(function(){

    $("button").mouseover(function(){
        $("button").removeClass("btn_normal_bg");
        $("button").addClass("btn_hover_bg");
    })

    $("button").mouseout(function(){
        $("button").removeClass("btn_hover_bg");
        $("button").addClass("btn_normal_bg");
    })

});
// END.