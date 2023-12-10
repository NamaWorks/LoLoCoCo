import { getRandomInteger } from "../math_functions/get-random-integer";

const emojiArr = ["❤️", "🟥", "🔴", "☎️", "🎈", "📕", "🏮", "🩸", "❤️"];
export const printRandomEmoji = (a, b) => {
  let randomI = getRandomInteger(a, b);
  let randomEmoji = emojiArr[randomI];
  const endEmoji = document.querySelector("#end-emoji");
  endEmoji.innerText = randomEmoji;
};
let randomEmoji = printRandomEmoji(0, 8);
