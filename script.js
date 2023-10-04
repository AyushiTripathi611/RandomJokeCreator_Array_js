const heading = document.querySelector("#heading h1");
const generate = document.getElementById("button");

generate.addEventListener("click", () => {

    heading.textContent = "Care for another One?";
    heading.style.fontSize = "35px";
    heading.style.padding = "40px 0px 25px 0px";
    document.getElementById("create_joke").style.display = "block";


    function randomIndex(array) {
        if (array.length > 0) {
            return Math.floor(Math.random() * array.length);
        }
    }

    const ques = jokes.filter(joke = (element, index) => {
        return index % 2 === 0;
    });
    const ans = jokes.filter(joke = (element, index) => {
        return index % 2 !== 0;
    });

    let arrindex = randomIndex(ques);

    document.getElementsByClassName("joke_container")[0].firstElementChild.innerText = `${ques[arrindex]}`;
    document.getElementsByClassName("joke_container")[1].firstElementChild.innerText = `${ans[arrindex]}`;

});