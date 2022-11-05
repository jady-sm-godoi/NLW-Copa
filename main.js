import { allGames } from "./BD-games.js"

function createGame(player1, hour, player2) {
  return `
  <li>
        <img src="./assets/${player1}-bg.svg" alt="bandeira de ${player1}" style="width: 50px; height=50px"/>
        <strong>${hour}</strong>
        <img
          src="./assets/${player2}-bg.svg"
          alt="bandeira de ${player2}" style="width: 50px; height=50px"
        />
      </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay += 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `
}
let liContent = ""
let gameLine = ""
allGames.forEach(({ day, date, game }) => {
  gameLine = ""
  game.forEach(({ player1, player2, hour }) => {
    gameLine += createGame(player1, hour, player2)
  })
  liContent += createCard(day, date, gameLine)
})
document.querySelector("#cards").innerHTML = liContent


