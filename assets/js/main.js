const pointersBanner = document.querySelectorAll('.banner .pointer');
const pointersTeam = document.querySelectorAll('.section-team-area .pointer');
const pointersReview = document.querySelectorAll('.section-review .pointer');
const filters = document.querySelectorAll('.section-projects--filters ul li');
const photos = [
    {title:'ABOUT',text:'Vestibulum id tempus', image:'./media/foto1.jpg', filter:'branding'},{title:'ABOUT',text:'Donation the impus', image:'./media/foto2.jpg', filter:'misc'},
    {title:'ABOUT',text:'Dalas mantra depus', image:'./media/foto3.jpg', filter:'adverts'},{title:'ABOUT',text:'Ronin deks id marks', image:'./media/foto4.jpg', filter:'development'},
    {title:'ABOUT',text:'Listovac maradin notremus', image:'./media/foto5.jpg', filter:'photos'},{title:'ABOUT',text:'Bastaric mophius demastan', image:'./media/foto6.jpg', filter:'development'},
    {title:'ABOUT',text:'Vestibulum id tempus', image:'./media/foto1.jpg', filter:'branding'},{title:'ABOUT',text:'Donation the impus', image:'./media/foto2.jpg', filter:'misc'},
    {title:'ABOUT',text:'Dalas mantra depus', image:'./media/foto3.jpg', filter:'adverts'},{title:'ABOUT',text:'Ronin deks id marks', image:'./media/foto4.jpg', filter:'development'},
    {title:'ABOUT',text:'Listovac maradin notremus', image:'./media/foto5.jpg', filter:'photos'},{title:'ABOUT',text:'Bastaric mophius demastan', image:'./media/foto6.jpg', filter:'development'}
];
let photosFiltered = photos;
let divPhotos = document.querySelector('.section-projects--photos');


pointersBanner.forEach((pointer, index) =>{
    pointer.addEventListener("click", () => pointerControler(pointer, index))
});
pointersTeam.forEach((pointer, index) =>{
    pointer.addEventListener("click", () => pointerControler(pointer, index)) 
});
pointersReview.forEach((pointer, index) =>{
    pointer.addEventListener("click", () => pointerControler(pointer, index)) 
});


filters.forEach(filter =>{
    filter.addEventListener('click', filterPhotos);  
});


showPhotos();

function pointerControler(pointer, index){
    if(pointer.classList.contains('active') != true){
        if(pointer.getAttribute('data-p') === 'banner'){
            for(let p of pointersBanner)p.classList.remove('active');
            pointer.classList.add('active');
            switch(index){
                case 0:
                    document.querySelector('.banner .sliders').style.marginLeft = '0vw';
                    break;
                case 1:
                    document.querySelector('.banner .sliders').style.marginLeft = '-100vw';
                    break;
                case 2:
                    document.querySelector('.banner .sliders').style.marginLeft = '-200vw';
                    break;
            }
        }else if(pointer.getAttribute('data-p') === 'team'){
            for(let p of pointersTeam)p.classList.remove('active');
            pointer.classList.add('active');
            switch(index){
                case 0:
                    document.querySelector('.section-team-area .sliders').style.marginLeft = '0';
                    break;
                case 1:
                    document.querySelector('.section-team-area .sliders').style.marginLeft = '-300px';
                    break;
                case 2:
                    document.querySelector('.section-team-area .sliders').style.marginLeft = '-600px';
                    break;
            }
        }else if(pointer.getAttribute('data-p') === 'review'){
            for(let p of pointersReview)p.classList.remove('active');
            pointer.classList.add('active');
            switch(index){
                case 0:
                    document.querySelector('.section-review .sliders').style.marginLeft = '0';
                    break;
                case 1:
                    document.querySelector('.section-review .sliders').style.marginLeft = '-880px';
                    break;
                case 2:
                    document.querySelector('.section-review .sliders').style.marginLeft = '-1760px';
                    break;
            }
        }
    }
}
function showPhotos(){
    divPhotos.innerHTML = '';
    for(let i of photosFiltered){
        let divPhoto = document.createElement('div');
        let divPhotoArea = document.createElement('div');
        let divPhotoInfo = document.createElement('div');
        let newImg = document.createElement('img');
        let newTitle = document.createElement('h5');
        newTitle.innerText = i.title;
        let newText = document.createElement('p');
        newText.innerText = i.text;
        newImg.setAttribute('src', i.image);
        divPhoto.setAttribute('class','section-projects--photo');
        divPhotoArea.setAttribute('class','section-projects--photoarea');
        divPhotoInfo.setAttribute('class','section-projects--photoinfo');
        divPhotos.appendChild(divPhoto);
        divPhoto.appendChild(divPhotoArea);
        divPhotoArea.appendChild(divPhotoInfo);
        divPhotoArea.appendChild(newImg);
        divPhotoInfo.appendChild(newTitle);
        divPhotoInfo.appendChild(newText);
    }
}
function filterPhotos(e){
    if(e.target.classList.contains('active') !== true){
         for(let f of filters){
            f.classList.remove('active');
        }
        e.target.classList.add('active');
        let filterSelected = e.target.innerText.toLowerCase();
        switch(filterSelected){
            case 'photos':
                photosFiltered = photos.filter(photo => photo.filter === filterSelected ? true : false);
                showPhotos();
            break;
            case 'branding':
                photosFiltered = photos.filter(photo => photo.filter === filterSelected ? true : false);
                showPhotos();
                break;
            case 'adverts':
                photosFiltered = photos.filter(photo => photo.filter === filterSelected ? true : false);
                showPhotos();
                break;
            case 'development':
                photosFiltered = photos.filter(photo => photo.filter === filterSelected ? true : false);
                showPhotos();
                    break;
            case 'misc':
                photosFiltered = photos.filter(photo => photo.filter === filterSelected ? true : false);
                showPhotos();
                break;  
            case 'all':
                photosFiltered = photos;
                showPhotos();
                break;
        }
    }
}