const sname = document.getElementById("name");
const skincolor = document.getElementById("skincolor");
const gender = document.getElementById("gender");
// const randomise = document.getElementById("randomise");

document.querySelector(".randomise");
randomise.addEventListener('click', (fun) => {
    fun.preventDefault()
    sname.innerHTML = 'Loading...'
    skincolor.innerHTML = 'Loading...'
    gender.innerHTML = 'Loading...'

    const randomNum = Math.ceil(Math.random()*83);
    fetch(`https://swapi.dev/api/people/${randomNum}`)
        .then(response => response.json())
        .then(character => {
            sname.innerHTML = character['name'];
            skincolor.innerHTML = character['skin_color'];
            gender.innerHTML = character['gender'];
        })
})
