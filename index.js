const slide = document.querySelectorAll(".slider")
var counter = 0;
// console.log(slide)
slide.forEach(
    (slider,index)=>{
        slider.style.left = `${index*100}%`
    }

)
const goPrev = () => {
if (counter > 0) { // Prevent sliding before the first image
    counter--;
    slideImage();
}
}

const goNext = () => {
if (counter < slide.length - 1) { // Prevent sliding after the last image
    counter++;
    slideImage();
}
}



   const slideImage = () =>{
    slide.forEach(
        (slider) =>{
            slider.style.transform = `translateX(-${counter*100}%)`
        }
    )
   } 