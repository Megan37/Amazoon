$(document).ready(function(){

    $(".button").on("click", function(){
        console.log($(this).attr("id") + " has been clicked");
        console.log($(this).attr("data-cost"));
        fc = $("#total-cost").attr("data-finalCost");
        fci = parseInt(fc);
        asc = $(this).attr("data-cost");
        asci = parseInt(asc);
        fsc = fci + asci;
        console.log(fsc);
        $("#total-cost").html(fsc);
        if ( $(this).hasClass('current') ) {
            $(this).removeClass('current');
        } else {
            $('div.current').removeClass('current');
            $(this).addClass('current');    
        }   
      });

});