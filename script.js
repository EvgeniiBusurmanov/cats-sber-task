const main = document.querySelector("main");

const setRate = function (n) {
    let fill = "<img src='cat-fill.svg'>"
    let stroke = "<img src='cat-stroke.svg'>"

    let rate = "";
    let fillQ = n;
    let strokeQ = 10 - n;
    for (let i = 1; i <= fillQ; i++) {
        rate += fill
    }
    for (let j = 1; j <= strokeQ; j++) {
        rate += stroke
    }
    return rate
}

const getItem = function (data) {
    const cardcat = `
        <div class="card">
            <div class="card-img" style="background-image: url(${data.img_link})"></div>
            <h3>${data.name}</h3>
            <p class="rate">${setRate(data.rate)}</p>
        </div>
    `
    main.innerHTML += cardcat;
}

cats.forEach(cat => {
    getItem(cat);
});