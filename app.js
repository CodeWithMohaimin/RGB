//=====First Practice======//

// window.onload = () => {
//     main();
// };

// function main() {
//     const root = document.getElementById('root');
//     const btn = document.getElementById('change-btn');

//     btn.addEventListener('click', function () {
//         const bgColor = rgbColor()
//         root.style.backgroundColor = bgColor
        
//     })
   
// }



// function rgbColor() {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);

//     return `rgb(${red}, ${green}, ${blue})`;
// }



//=======second practice is unseen========//
window.onload = () => {
    main()
}
function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', function () {
        const bgColor = RGB()
        root.style.backgroundColor = bgColor
    })

}


function RGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}