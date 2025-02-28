const pointers = document.querySelectorAll('.banner .pointer');

pointers.forEach((pointer, index) =>{
    pointer.addEventListener("click", () =>{
        if(pointer.getAttribute('class') != 'pointer active'){
            switch(index){
                case 0:
                    pointers[index+1].setAttribute('class', 'pointer');
                    pointers[index+2].setAttribute('class', 'pointer');
                    pointer.setAttribute('class', 'pointer active');
                    document.querySelector('.banner .sliders').style.marginLeft = '0vw';
                    break;
                case 1:
                    pointers[index-1].setAttribute('class', 'pointer');
                    pointers[index+1].setAttribute('class', 'pointer');
                    pointer.setAttribute('class', 'pointer active');
                    document.querySelector('.banner .sliders').style.marginLeft = '-100vw';
                    break;
                case 2:
                    pointers[index-1].setAttribute('class', 'pointer');
                    pointers[index-2].setAttribute('class', 'pointer');
                    pointer.setAttribute('class', 'pointer active');
                    document.querySelector('.banner .sliders').style.marginLeft = '-200vw';
                    break;
            }
        }
    });
});
