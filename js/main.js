    $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.block'
        });
        scrollorama.animate('#amorText1',{
        duration:75, 
        delay:0, 
        property:'left',
        start: 1400,
        end: 0
    })           
 });


    $(function(){
        $.stellar({
        horizontalScrolling: true, 
        verticalOffset: -300
    });
});
