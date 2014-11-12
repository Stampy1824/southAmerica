    $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.block'
        });
        scrollorama.animate('#trailstarttext1',{
        duration:80, 
        delay: 0,
        property:'opacity',
        start: 0,
        end: 1
    })           
 });

    $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.block'
        });
        scrollorama.animate('#trailstarttext2',{
        duration:80, 
        delay:75, 
        property:'left',
        start: 1600,
        end: 640
    })           
 });


    $(function(){
        $.stellar({
        horizontalScrolling: true, 
        verticalOffset: -300
    });
});
