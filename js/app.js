
// ------------------------------------------
//  ADD YOUR FETCH FUNCTIONS & CODE
// ------------------------------------------

const url = 'https://dog.ceo/api/breeds/image/random';
init();

function getRandomDogPhoto() {
    //fetch the data from the url and return the data
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(err => console.log("An Error has occurred"))
}

async function init() {
    //get the data from the function getRandomDogPhoto and save the json format file
    const data = await getRandomDogPhoto();
    //if the data is null..
    if (data != null) {
        renderDogPhoto(data.message);
    }
}

// ------------------------------------------
//  ADD YOUR CODE TO REPLACE BELOW WITH THE BREED LIST FROM THE API
// ------------------------------------------

const select = document.querySelector('.u-full-width');

select.innerHTML = " <option value='Breed 1'>Affenpinscher</option>" +
    " <option value='Breed 2'>African</option>" +
    "<option value='Breed 3'>Airedale</option>";

select.addEventListener('change', selectedBreed);

function selectedBreed() {
    var e = document.getElementById("breed");
    var selectedValue = e.options[e.selectedIndex].value;

    if (selectedValue == 1) {
        url = 'https://dog.ceo/api//Affenpinscher/random';
    } else if (selectedValue == 2) {
        url = 'https://dog.ceo/api//African/random';
    } else if (selectedValue == 3) {
        url = 'https://dog.ceo/api//Airedale/random';
    }

    init();
}


const imageContainer = document.querySelector('.card');
imageContainer.insertAdjacentHTML('beforeend', '<img class ="dogImage" onclick="init()" /> ');
const dogImage = document.querySelector('.dogImage');

function renderDogPhoto(url) {
    dogImage.src = url;
}

