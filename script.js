carouselBuildings = document.querySelector('#carousel__buildings');
carouselWeapons = document.querySelector('#carousel__weapons');
carouselAcessories = document.querySelector('#carousel__acessories');

function changeSet(item){
    console.log(item);
    if (item == 'buildings'){
        console.log('buildings selected');
        carouselBuildings.classList.remove('visually-hidden');
        carouselWeapons.classList.add('visually-hidden');
        carouselAcessories.classList.add('visually-hidden');
    } else if (item == 'weapons'){
        console.log('weapons selected')
        carouselWeapons.classList.remove('visually-hidden');
        carouselBuildings.classList.add('visually-hidden');
        carouselAcessories.classList.add('visually-hidden');
    } else if (item == 'acessories'){
        console.log('acessories selected')
        carouselAcessories.classList.remove('visually-hidden');
        carouselBuildings.classList.add('visually-hidden');
        carouselWeapons.classList.add('visually-hidden');
    }
}