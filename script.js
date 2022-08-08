const gtaJezowe = document.querySelector('.gtaJezowe');
const themeSong = document.querySelector('.themeSong');
const gamePlace = document.querySelector('.gamePlace');
const gameLoadingImg = document.querySelector('.gameLoadingImg');
const loadingContent = document.querySelector('.loadingContent');

gtaJezowe.addEventListener('click', ()=>{
    let progress = 0;
    const gtaJezoweThemes = ['gtaSaTsImg/dawid.jpg','gtaSaTsImg/franiu.jpg','gtaSaTsImg/ja.jpg','gtaSaTsImg/jaikonrad.jpg','gtaSaTsImg/jaNV.jpg','gtaSaTsImg/konrad.jpg','gtaSaTsImg/krzysiu.jpg','gtaSaTsImg/pedaly.jpg','gtaSaTsImg/pszczolka.jpg'];
    themeSong.loop = true;
    themeSong.play();

    displaySa();
    setInterval(chooseTheme,7000);
    setInterval(loadingBarProgress,2000);

    function displaySa(){
        gamePlace.style.setProperty('display','block');
    }
    function chooseTheme(){
        let themeNum = chance.integer({min: 0, max: (gtaJezoweThemes.length)-1});
        console.log(themeNum);

        gameLoadingImg.setAttribute('src', gtaJezoweThemes[themeNum]);

        if(gameLoadingImg.style.transform == 'scale(1.2)'){
            gameLoadingImg.style.setProperty('transform','scale(1.0)');
        }else{
            gameLoadingImg.style.setProperty('transform','scale(1.2)');
            gameLoadingImg.style.setProperty('transition','15s linear');
        }
    }
    function loadingBarProgress(){
        let loadingNum = chance.integer({min: 0, max: 10});
        progress += loadingNum;

        if(progress < 100){
            loadingContent.style.setProperty('width',progress+'%');
        }else{
            progress = 0;
        }
    }
});