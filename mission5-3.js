function omikujishow() {

    var omikuji = ["大吉", "中吉", "小吉"];

    var number = Math.floor(Math.random() * 3);

    var result = document.getElementById("omikuji");

    result.innerText = omikuji[number];

    if (omikuji[number] == "大吉") {
        result.style.color = "red";
    } else if (omikuji[number] == "中吉") {
        result.style.color = "orange";
    } else {
        result.style.color = "blue";
    }

    var button = document.getElementById("button");
    button.innerText = "もう一度引く";
}
