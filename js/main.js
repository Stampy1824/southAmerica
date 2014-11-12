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
        end: 500
    })           
 });
 //       $(document).ready(function() {
 //        var scrollorama = $.scrollorama({
 //            blocks:'.block'
 //        });
 //        scrollorama.animate('#trailstarttext3',{
 //        duration:80, 
 //        delay:250, 
 //        property:'opacity',
 //        start: 0,
 //        end: 1

 //    })           
 // });
       $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.block'
        });
        scrollorama.animate('#trailstarttext3',{
        duration:800,
        property:'rotate',
        start: 720,

    })           
 });

    $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.block'
        });
        scrollorama.animate('#bridgeviewtext1',{
        duration:80, 
        delay: 450,
        property:'opacity',
        start: 0,
        end: 1
    })           
 });
    $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.block'
        });
        scrollorama.animate('#bridgeviewtext2',{
        duration:80, 
        delay: 800,
        property:'opacity',
        start: 0,
        end: 1
    })           
 });

    $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.block'
        });
        scrollorama.animate('#catText1',{
        duration:100, 
        delay: 200,
        property:'opacity',
        start: 0,
        end: 1
    })           
 });

    $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.block'
        });
        scrollorama.animate('#catText2',{
        duration:80, 
        delay: 600,
        property:'opacity',
        start: 0,
        end: 1
    })           
 });


    $(function(){
        $.stellar({
        horizontalScrolling: true, 
        verticalOffset: -300
    });
});
