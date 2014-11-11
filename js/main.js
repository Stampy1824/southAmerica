    $(document).ready(function() {
        var scrollorama = $.scrollorama({
            blocks:'.fade'
        });
        scrollorama.animate('.fade',{
        duration:400, delay:500, property:'opacity'
    })           
 });


//     $(function(){
//         $.stellar({
//         horizontalScrolling: true, 
//         verticalOffset: -300
//     });
// });
