//$('main').on('click',function(){
    //$(this).addClass('red-bg');
//});
//$('main').on('mouseenter',function(){
   // $(this).addClass('active-test');
//});
$('main').on({
    click:function(){
        $(this).removeClass('active-test red-bg');
        $(this).addClass('red-bg');
    },
    mouseenter:function(){
        $(this).addClass('active-test');
    },
    mouseleave:function(){
        $(this).removeClass('active-test red-bg');
    }
});

var text =$('main h2').text();
console.log(text);
$('main h2').text('<h1> Hello World </h1>');

// challenge:
//US: As a user I want to click on the footer and change the h2 text
$('footer').on({
    click:function(){
        $('footer h1').removeClass('active-test blue-bg');
        $('footer h1').addClass('blue-bg');
    },
    mouseenter:function(){
        $(this).addClass('active-test');
    },
    mouseleave:function(){
        $(this).removeClass('active-test blue-bg');
    }
});
$('footer').on({
    
})
