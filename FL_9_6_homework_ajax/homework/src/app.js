let waterDom = document.getElementById('water');
let landDom = document.getElementById('land');
let btn = document.getElementById('button');
btn.addEventListener('click', waterOrEarth);
'use strict';
const http = {
    get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4) {
                    return;
                }

                if (xhr.status !== 200) {
                    reject('Error' + xhr.status + ': ' + xhr.statusText);
                }

                resolve(this.responseText);
            };

            xhr.send();
        });
    }
};


function waterOrEarth() {
    let latitude = document.querySelector('input[name=latitude]');
    let longitude = document.querySelector('input[name=longitude]');
      latitude = parseFloat(latitude.value.trim());
    longitude = parseFloat(longitude.value.trim());
    waterDom.style.display = 'none';
    landDom.style.display = 'none';
    let link = `https://api.onwater.io/api/v1/results/${latitude},${longitude}`;
    http.get(link).then(resolve => {
            let elements = JSON.parse(resolve);
            if (elements.hasOwnProperty('water')) {
                return elements.water ? 'water' : 'land';
            } else {
                throw new Error(`${elements.error}`);
            }
        })
        .then(element => {
            if (element === 'water') {
                waterDom.style.display = 'block';

            } else if (element === 'land') {
                landDom.style.display = 'block';
            }
        })
        .catch(error => {
            alert(`${error}`);

        });

}