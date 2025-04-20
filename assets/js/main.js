const menu = document.querySelector('.menu-opener');
const pointersBanner = document.querySelectorAll('.banner .pointer');
const pointersTeam = document.querySelectorAll('.section-team-area .pointer');
const pointersReview = document.querySelectorAll('.section-review .pointer');
const pointersPremium = document.querySelectorAll('.section-premium .pointer');
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


initEvents();
showPhotos();



