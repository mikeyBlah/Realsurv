window.onload = function(){
const footer = document.querySelector('#main_foot');
const arrowCont = document.querySelector('.backTop');
const arrow = document.querySelector('#arrowBackTop');
const rTri = document.querySelector('.triRight');
const rLeft = document.querySelector('.triLeft');
let footHeight = footer.offsetHeight;


const getHeight = () => {
    let lWidth = window.innerWidth;
    console.log('Called getHeight');
    console.log(lWidth);
    if(lWidth > 749){

    arrowCont.style.height = footHeight + 'px';
    rTri.style.borderRight = lWidth / 2 + 'px' + ' solid' +  ' #333';
    rLeft.style.borderLeft = lWidth / 2 + 'px' + ' solid' +  ' #333';
    }else{
        arrowCont.style.height = 100 + 'px';
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