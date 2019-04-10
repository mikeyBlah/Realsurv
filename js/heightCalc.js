window.onload = function(){
const arrow = document.querySelector('.backTopInner');
const rTri = document.querySelector('.triRight');
const rLeft = document.querySelector('.triLeft');
const rTriComp = document.querySelector('.triRightComp');
const rLeftComp = document.querySelector('.triLeftComp');


const getHeight = () => {
    let lWidth = window.innerWidth;
    console.log('Called getHeight');
    console.log(lWidth);
    if(lWidth > 749){

    rTri.style.borderRight = lWidth / 2 + 'px' + ' solid' +  ' #333';
    rLeft.style.borderLeft = lWidth / 2 + 'px' + ' solid' +  ' #333';
    rTriComp.style.borderRight = lWidth / 2 + 'px' + ' solid' +  ' #FAFAFA';
    rLeftComp.style.borderLeft = lWidth / 2 + 'px' + ' solid' +  ' #FAFAFA';
    }
}


window.addEventListener('resize', evt => {
        getHeight();
    });


arrow.addEventListener("click", function(){
    window.scrollTo(0, 0);
});

getHeight();

}