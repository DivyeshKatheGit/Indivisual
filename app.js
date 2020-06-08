const circle = document.querySelector('.circle');
const menu = document.querySelector('.menu');
var open = false;
$(".circle").click(()=>
{
    if(open==false)
    {
        var tl = gsap.timeline();
        tl.to('.circle',.4,{
            rotateX : '90',
            display : 'none'
        })
        .to(".menu ul",.5,{
            width : '100%'
        })
        .to(".menu ul",.5,{
            height : '100%',
        })
        .to(".menu ul p",.5,
        {
            height : '50px'
        })
        .to(".menu ul li",.5,{
            opacity : '1'
        })
        setTimeout(()=>
        {
            open = true;
            console.log(open);
            
        },1500);
    }
});
$(window).scroll(function () { 
    if(open==true)
    {
        var tl = gsap.timeline();
        tl.to(".menu ul li",.5,{
            opacity : '0'
        })
        .to(".menu ul p",.5,
        {
            height : '0px'
        })
        .to(".menu ul",.5,{
            height : '1px',
        })
        .to(".menu ul",.5,{
            width : '80px'
        })
        .to('.circle',.4,{
            rotateX : '0',
            display : 'block'
        })
        setTimeout(()=>
        {
            open = false;
            console.log(open);

        },1500);
    }
});
