document.addEventListener('DOMContentLoaded', function(){
    let nextButton = document.getElementById('nextButton');
    let prevButton = document.getElementById('prevButton');
    let bannerUl = document.getElementById('banner_ul');
    let countLiItems = bannerUl.children.length-1;
    let bannerItems = document.querySelector(".banner_item");
    let widthItem = parseInt(window.getComputedStyle(bannerItems).width);
    let currentIndex = 0;

    nextButton.addEventListener("click", nextSlider);
    prevButton.addEventListener("click", prevSlider);
    
    function nextSlider(){
        if (currentIndex>countLiItems-1) return; 
        else{
            ++currentIndex
            bannerUl.style.transform = `translateX(${-widthItem * currentIndex}px)`;
            console.log(widthItem);
        };
    };
    function prevSlider(){
        if(currentIndex<1) return;
        else{
            --currentIndex;
            bannerUl.style.transform = `translateX(${-widthItem * currentIndex}px)`;            
        }
    }; 
});
