$(function(){
    setInterval(function(){
        $("#imgs").animate({
            marginLeft: "-100%"
        },function(){
            $("#imgs img").eq(0).appendTo("#imgs");
            $("#imgs").animate({
                marginLeft:0
            },0)
        });   
    }, 3000);
    $('#location').click(function(){
        $('#mapPopup').show();
    });
    $('.map_close').click(function(){
        $('#mapPopup').hide();
    })
});