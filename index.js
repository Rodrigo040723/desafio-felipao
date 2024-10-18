


let nickname = "Aizen"
let xp = 7001
let nivel = "2000"

if (xp <= 1000) {
  nivel = "Ferro"
} else if (xp <= 2000) {
  nivel = "Bronze"
} else if (xp <= 6000) {
  nivel = "Prata"
} else if (xp <= 7000) {
  nivel = "Ouro"
} else if (xp <= 8000) {
  nivel = "Platina"
} else if (xp <= 9000) {
  nivel = "Ascendente"
} else if (xp <= 10000) {
  nivel = "Imortal"
} else if (xp >= 10001) {
  nivel = "Radiante"
}

console.log("O Herói de nome " + {nickname} + "está no nível de " + {nivel})