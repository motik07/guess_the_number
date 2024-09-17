let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let text = document.querySelector("#text");
let theNumber = Math.floor(Math.random() * 10);
let emoji = document.querySelector("#pic_emoji_id");
let times = 1;

const guessTheNumber = () => {
    console.log(theNumber);
  if (input.value == theNumber) {
      text.textContent = `ניחשת נכון! זכית!`;
      emoji.src = "https://icons.iconarchive.com/icons/hopstarter/brown-monsters/256/Brown-Monsters-26-icon.png";
    } else {
        if (times < 5) {
            if (input.value < theNumber) {
                text.textContent = `אתם כמעט שם, הנחוש קטן מידי...`;
                emoji.src = "https://icons.iconarchive.com/icons/hopstarter/brown-monsters/256/Brown-Monsters-15-icon.png";
            } else {
                text.textContent = `רמז: המספר גדול מידי...`;
                emoji.src = "https://icons.iconarchive.com/icons/hopstarter/brown-monsters/256/Brown-Monsters-58-icon.png";
            }
      text.textContent += ` לא נורה נחשו שוב - נותרו לכם`;
      text.textContent += ` ${times-5} ניסיונות! `;
    } else {
        text.textContent = `אוי, נסו לשחק מאוחר יותר - נגמר המשחק, ניצלתם את כל ${times} הניסיונות...`;
        emoji.src = "https://icons.iconarchive.com/icons/hopstarter/brown-monsters/256/Brown-Monsters-19-icon.png";
        input.style.display = 'none';
        btn.style.display = 'none';
    }
    times++;
}
};

const resetGame=()=>{
    text.textContent = 'הגרלנו מספר, אנא עזרו לפרצופון שלנו לנחש את המספר שהוגרל מאחורי הקלעים.';
    input.placeholder = '...'; 
    emoji.src = "https://icons.iconarchive.com/icons/hopstarter/brown-monsters/256/Brown-Monsters-30-icon.png";
    times = 1;
    theNumber = Math.floor(Math.random() * 10);
    input.style.display = 'flex';
    btn.style.display = 'block';
}

