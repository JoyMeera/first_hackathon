const generateButton = document.querySelector("#GenerateForm")

const rollDie = document.getElementById("Dice")

generateButton.addEventListener('submit', rollDice)

function rollDice(e){
    e.preventDefault()
    rollDie.innerHTML=""
    arr = [1, 2, 3, 4, 5, 6]
    const num = Math.floor(Math.random() * arr.length);

    // const headerInput = document.createElement('h1')
    // headerInput.textContent = arr[num]

    const img = document.createElement("img")
    img.classList.add("dice")
    img.setAttribute("src", `images/dice${arr[num]}.png`)
    img.setAttribute("alt", arr[num])
    rollDie.appendChild(img)
}

