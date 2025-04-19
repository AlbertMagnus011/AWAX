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
                    document.querySelector('.section-review .sliders').style.marginLeft = '-100vw';
                    break;
                case 2:
                    document.querySelector('.section-review .sliders').style.marginLeft = '-200vw';
                    break;
            }
        }else if(pointer.getAttribute('data-p') === 'premium'){
            for(let p of pointersPremium)p.classList.remove('active');
            pointer.classList.add('active');
            switch(index){
                case 0:
                    document.querySelector('.section-premium .sliders').style.marginLeft = '0vw';
                    break;
                case 1:
                    document.querySelector('.section-premium .sliders').style.marginLeft = '-100vw';
                    break;
                case 2:
                    document.querySelector('.section-premium .sliders').style.marginLeft = '-200vw';
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