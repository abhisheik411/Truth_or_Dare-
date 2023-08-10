
// const audioPlayerr = document.getElementById('audioPlayerr');
// const playButton = document.getElementById('playButtonon');

const addPlayerButton = document.getElementById("addPlayerButton");

const inputContainer = document.getElementById("inputContainer");

const playerNameInput = document.getElementById("playerName");

const addToTeamButton = document.getElementById("addToTeamButton");

// const playButton = document.getElementById("playButton");

const refreshButton = document.getElementById("refreshButton");

const truthButton = document.getElementById("truthButton");

const dareButton = document.getElementById("dareButton");

const resultContainer = document.getElementById("result");



const playerArray = [];

let selectedPlayerIndex = null;

let truthMessage = "";

let dareMessage = "";

let selectedPlayerName = "";



addPlayerButton.addEventListener("click", () => {

  inputContainer.style.display = "block";

  updateResult();

});



addToTeamButton.addEventListener("click", () => {

  const playerName = playerNameInput.value;

  if (playerName) {

    playerArray.push(playerName);

    playerNameInput.value = "";

    updateResult();

  }

});


playButton.addEventListener("click", () => {
  if (playerArray.length > 0) {
    selectedPlayerIndex = Math.floor(Math.random() * playerArray.length);
    selectedPlayerName = playerArray[selectedPlayerIndex];

    truthMessage = getRandomTruth();
    dareMessage = getRandomDare();

    // Check if either truth or dare message is available
    if (truthMessage || dareMessage) {
      refreshButton.style.display = "block";
      truthButton.style.display = "block";
      dareButton.style.display = "block";

      // Enable truth and dare buttons if messages are available
      truthButton.disabled = !truthMessage;
      dareButton.disabled = !dareMessage;

      playButton.disabled = true; // Disable the Play button initially
      resultContainer.textContent = `Selected Player: ${selectedPlayerName}`;
    } else {
      resultContainer.textContent = "Please select Truth or Dare.";
    }
  } else {
    resultContainer.textContent = "No players added yet.";
  }
});

// Add event listeners for the Truth and Dare buttons to enable the Play button
truthButton.addEventListener("click", () => {
  playButton.disabled = false;
});

dareButton.addEventListener("click", () => {
  playButton.disabled = false;
});




truthButton.addEventListener("click", () => {

  dareButton.disabled = true;

  resultContainer.innerHTML = `

      Selected Player: ${selectedPlayerName}<br>

      Truth: ${truthMessage}

    `;

});



dareButton.addEventListener("click", () => {

  truthButton.disabled = true;

  resultContainer.innerHTML = `

      Selected Player: ${selectedPlayerName}<br>

      Dare: ${dareMessage}

    `;

});



refreshButton.addEventListener("click", () => {

  location.reload(); // Reload the page to reset the game

});



function updateResult() {

  if (playerArray.length > 0) {

    playButton.style.display = "block";

    playButton.disabled = playerArray.length <= 1;

  } else {

    playButton.style.display = "none";

    refreshButton.style.display = "none";

    truthButton.style.display = "none";

    dareButton.style.display = "none";

  }

}

function getRandomTruth() {
  const truthOptions = [
    "What's the most memorable date you've had together?",
    "Who initiated the first kiss?",
    "What's your partner's favorite childhood memory?",
    "What's the silliest argument you've ever had?",
    "What's a habit your partner has that you find endearing?",
    "What's something your partner does that annoys you?",
    "Have you ever kept a secret from your partner? If so, what was it?",
    "What's the most romantic thing you've done for each other?",
    "What's one thing you'd like to change about your partner?",
    "Who usually apologizes first after an argument?",
    "What's your partner's biggest fear?",
    "What's the most embarrassing thing that's happened to you as a couple?",
    "Do you have any pet names for each other?",
    "What's a dream or aspiration you have that your partner doesn't know about?",
    "What's the most challenging obstacle you've overcome as a couple?",
    "Who is more likely to initiate physical affection?",
    "What's a place you'd like to travel to together?",
    "What's the best gift you've ever received from your partner?",
    "What's a disagreement you've had about money?",
    "Who is the better cook between the two of you?",
    "What's something your partner is really good at that you admire?",
    "Have you ever been jealous of your partner's close friend?",
    "What's your favorite physical feature of your partner?",
    "What's a bad habit you both share?",
    "Who wears the pants in the relationship?",
    "What's a movie or TV show you both enjoy watching together?",
    "What's a tradition you'd like to start as a couple?",
    "Have you ever fantasized about a different life together?",
    "What's a goal you have as a couple for the next year?",
    "What's a song that reminds you of your partner?",
    "What's your partner's love language?",
    "Who is the better planner when it comes to special occasions?",
    "Have you ever lied to your partner to avoid an argument?",
    "What's something your partner is self-conscious about?",
    "What's a memorable milestone in your relationship?",
    "What's a quality your partner possesses that you wish you had?",
    "What's a decision you've made together that changed your lives?",
    "Who initiated the 'I love you' first?",
    "What's a place you'd like to retire to someday?",
    "What's a hobby or interest your partner has that you don't share?",
    "What's the best piece of relationship advice you've received?",
    "What's a dream vacation destination you both agree on?",
    "What's a time you surprised each other in a positive way?",
    "What's your partner's favorite book or author?",
    "What's something you admire about the way your partner handles stress?",
    "What's a quirky habit your partner has that makes you smile?",
    "What's your partner's favorite type of cuisine?",
    "What's a skill your partner has that they don't often showcase?",
    "What's a moment you knew you were deeply in love?",
    "What's a promise you've made to each other that you hold dear?",
    "What's something you wish your partner would do more often?",
    "What's the most adventurous thing you've done together?",
    "What's a childhood memory your partner shared that surprised you?",
    "What's a small gesture your partner does that always makes your day better?",
    "Have you ever disagreed about starting a family? If so, how did you resolve it?",
    "What's the first impression you had of your partner?",
    "What's a dream job your partner has mentioned in the past?",
    "Who is more likely to initiate deep conversations about the future?",
    "What's the most romantic gesture you've received from your partner?",
    "What's something you've learned from your partner that you didn't know before?",
    "Have you ever thought about breaking up? What changed your mind?",
    "What's a cultural tradition your partner follows that you find interesting?",
    "What's your partner's guilty pleasure?",
    "What's the biggest sacrifice you've made for each other?",
    "Who is the more adventurous eater when trying new foods?",
    "What's a shared dream you have for your retirement years?",
    "What's a challenge you faced early in your relationship that made you stronger?",
    "Who is the better gift-giver between the two of you?",
    "What's a surprise you've planned for your partner that they loved?",
    "Have you ever argued about household chores? How do you handle it?",
    "What's something your partner does that always makes you laugh?",
    "Who is more likely to initiate a serious conversation about relationship issues?",
    "What's your partner's favorite type of music or artist?",
    "What's a place you'd like to visit again in the future?",
    "What's the most valuable lesson you've learned from your partner?",
    "Who is more likely to plan a spontaneous weekend getaway?",
    "What's a quality you admire in your partner's family members?",
    "What's something you've learned to compromise on in your relationship?",
    "What's a dream you've had that involved your partner?",
    "Have you ever had a disagreement about how much time you spend together?",
    "What's a moment when your partner made you feel especially loved?",
    "Who is more likely to remember anniversaries and special dates?",
    "What's a trait your partner has that you find irresistibly charming?",
    "What's a hidden talent your partner has that few people know about?",
    "What's the most thoughtful surprise your partner has ever given you?",
    "Have you ever felt jealousy about your partner's friendships? How did you handle it?",
    "What's a fear your partner has that you help them overcome?",
    "Who is the better driver when you go on road trips?",
    "What's a goal you've achieved together that you're proud of?",
    "What's a hobby you've considered taking up together in the future?",
    "What's the most romantic memory you have of a spontaneous moment?",
    "Have you ever experienced a major disagreement about your living situation?",
    "What's a favorite memory from a holiday or vacation you took together?",
    "Who is the more patient one in the relationship?",
    "What's the most significant change you've seen in each other since you met?",
    "What's a moment when your partner surprised you with their strength?",
    "Have you ever had a major argument about your future plans? How did you resolve it?",
    "What's a personality trait you both share that can sometimes lead to clashes?",
    "What's a hobby or activity you'd like to introduce to your partner?",
    "What's a promise you've made to each other that you've successfully kept?",
    "Have you ever sneaked out on your partner?",
    "Do you hate your partner's family?",
    "What was your best moment in the relationship?",
    "What is the one thing you absolutely hate about your partner?",
    "What was my first impression of you?",
    "What is the best thing you like about me?",
    "What do you think of my cooking?",
    "Tell me about your first crush.",
    "Did you ever hide something from your partner?",
    "What is the thing you love about this alliance?",

    "Have you ever considered getting plastic surgery?",
    "Would you get a tattoo of me?",
    "What is the one thing that I don't know about you?",
    "Can you spend a week without me?",
    "How attached are you to this relationship?",
    "What is the particular thing that makes you cry and jump out of joy?",
    "What is the one thing that would leave you in tears of heartbreak/sadness?",

    "  Do you like receiving or giving a lap dance?",
    "Have you ever sent nudes in your past relationships?",
    "Describe how you would like to see me in bed?",
    "What is your favourite position in bed?",
    "What is the one thing that can turn you on in seconds?",
    "How was your first intimate relationship?",
    "Have you watched porn?",
    "Who is your favourite pornstar?",
    "Did you ever get tangled in something illegal?",
    "Dominant or subordinate. What do you prefer in bed?",
    "Explain any two of your guilty pleasures.",
    "Would you mind going on onlyfans?",
    "Would you like to record yourself while having sex?",
    "Have you ever kissed someone of the same sex?",
    "What is the naughtiest and sexiest thing you have ever done in your past relationship?",
    "Do you prefer foreplay or getting straight to it?",
    "Have you ever caught your parents in an indecent situation?",
    "What's the most embarrassing thing you watched?",
    "What is the best night you had and with whom?",
    "Have you ever pretended to be in love?",
    "What's the embarrassing and humiliating thing you experienced in bed?",
    "Have you ever been ghosted by your sexual encounter?",
    "Have you attempted to get somebody back in your life who has unloaded you, with the goal that you may officially dump them?",
    "Have you ever woken up in somebody else's bed naked with zero clue what happened the night before?",
    "How far will you go in PDA?",
    "Have you ever two-timed in a relationship?",
    "What is the one thing that you would hate that would break this relationship?",
    "Do you think I have changed after being in a relationship?",
    "Do you see any changes in yourself after being with me?",
    "Did you ever get hit on in a bar?",
    "Did you ever have any casual relationships?",
    "Have you ever had a one-night stand?",
    "What are your thoughts about marriage/kids?",
    // Add more truth questions here
  ];
  return truthOptions[Math.floor(Math.random() * truthOptions.length)];
}



function getRandomDare() {
  const dareOptions = [
    "Give each other a passionate kiss for at least 10 seconds.",
    "Write a love poem or a short romantic story about your partner and read it aloud.",
    "Exchange clothes and wear each other's outfits for the next hour.",
    "Take a selfie together and post it on social media with a cute caption.",
    "Give your partner a sensual shoulder massage for 5 minutes.",
    "Dance to a romantic song in the middle of the room for a full minute.",
    "Cook a meal together while blindfolded.",
    "Share your most embarrassing moment from the past with your partner.",
    "Give your partner a piggyback ride around the room.",
    "Describe your partner in three words, without using their name.",
    "Recreate your first date as accurately as possible, including outfits and activities.",
    "Write a short love letter to your partner and read it aloud with genuine emotion.",
    "Serenade your partner with a song of your choice.",
    "Give your partner a foot massage for 5 minutes.",
    "Do your best impression of each other for a minute.",
    "Play a game of 'Never Have I Ever' with a focus on relationship-related questions.",
    "Take turns feeding each other a bite of your favorite dessert.",
    "Create a silly, funny dance routine together and perform it for each other.",
    "Share a secret fantasy or dream you've never revealed before.",
    "Recreate a famous romantic movie scene with your partner.",
    "Do a slow and romantic dance together to your favorite love song.",
    "Blindfolded, feed your partner a variety of foods and guess what they are.",
    "Give your partner a kiss on the cheek using your lips to spell out 'I love you.'",
    "Put on a love song and slow dance, maintaining eye contact throughout.",
    "Exchange compliments by listing three things you love about each other.",
    "Play a game of 'Two Truths and a Lie' with relationship-themed statements.",
    "Write down a wish for your relationship and release it into the wind (or a virtual equivalent).",
    "Take turns giving each other a surprise compliment in a different language.",
    "Plan a pretend honeymoon to a dream destination and describe what you'd do there.",
    "Take a silly and affectionate selfie and set it as your phone wallpaper for the day.",
    "Share a funny or embarrassing childhood photo with your partner.",
    "Draw a picture of your partner while blindfolded and let them guess what it is.",
    "Give your partner a romantic forehead kiss and whisper something sweet.",
    "Plan and act out a short skit where you play characters on a romantic date.",
    "Write down a list of five things you appreciate about your partner and read them aloud.",
    "Share a funny story about something awkward that happened during your relationship.",
    "Create a playlist of your favorite love songs and listen to it together.",
    "Recreate your partner's favorite animal noise and make it as realistic as possible.",
    "Choose a love song and sing a duet together, even if you're not great singers.",
    "Give each other a sincere and heartfelt compliment about your relationship.",
    "Write a short love letter using only emojis and have your partner decode it.",
    "Take a romantic selfie together and set it as your lock screen for a day.",
    "Exchange a passionate kiss with an ice cube in your mouth.",
    "Give your partner a surprise quick massage on their neck and shoulders.",
    "Take turns sharing your best pick-up lines, even if they're cheesy.",
    "Put on a slow and sensual song and give your partner a lap dance.",
    "Choose a romantic scene from a movie and reenact it with your partner.",
    "Share your most embarrassing nickname your family has for you.",
    "Play a round of '20 Questions' with each other, focusing on relationship topics.",
    "Have a thumb war, and the winner gets to choose a romantic activity for the day.",
    "Create a short and playful rap about your relationship and perform it.",
    "Hold hands and stare into each other's eyes without laughing for a minute.",
    "Take a quiz to find out your love compatibility and discuss the results.",
    "Exchange a series of silly and affectionate text messages for the next hour.",
    "Put on a blindfold and have your partner feed you a mystery treat.",
    "Share a funny and awkward moment from one of your early dates.",
    "Play a game of 'Rock, Paper, Scissors' with a romantic twist – loser gives a compliment.",
    "Choose a romantic song and slow dance while holding a conversation.",
    "Write down a list of romantic date ideas and pick one to do in the next week.",
    "Share your partner's most adorable childhood story with each other.",
    "Take a personality quiz and discuss the results – do you agree or disagree?",
    "Draw a picture of each other without lifting the pen from the paper.",
    "Hold hands and describe your ideal date night without using words – only gestures.",
    "Take turns asking each other rapid-fire questions for two minutes straight.",
    "Write a short poem about your partner using only words that start with the same letter.",
    "Have a 'truth or dare' speed round – each partner asks three questions or dares quickly.",
    "Put on a romantic song and slow dance while mimicking each other's movements.",
    "Share a favorite memory from a past trip or vacation you took together.",
    "Put on a blindfold and have your partner guide you through a simple obstacle course.",
    "Make up a fictional story about how you met, but it has to be entirely outrageous.",
    "Take a silly selfie with your partner and use it as your profile picture for a day.",
    "Recreate a famous romantic movie scene using household items as props.",
    "Create a bucket list of things you want to do together and choose one to start planning.",
    "Play a game of 'Would You Rather?' with relationship-themed questions.",
    "Share a funny and endearing story about how you got your first pet together.",
    "Put on your partner's favorite love song and dance like nobody's watching.",
    "Take turns complimenting each other in different languages.",
    "Challenge your partner to a tickle fight – the first one to laugh loses.",
    "Write a short and sweet message to your partner using refrigerator magnets.",
    "Plan a pretend romantic getaway and describe the destination and activities.",
    " Brush your teeth with white vinegar.",
    "Dip your chips in soy sauce and eat them.",
    " Mix two drinks and finish it.",
    "Open Instagram and post a picture of me.",
    "Text your mom that you have a girlfriend.",
    "  Text your ex that you got a way better person than them.",
    "  Open Instagram or Facebook and like a post of your ex.",
    "Call dominoes and say, 'hello, pizza hut?'",
    "Open the front door and meow like a cat for 60 seconds.",
    " For the next half an hour, talk in whispers.",
    "  Call your friend and yell cheater three times.",
    "  Pretend you won an Oscar and give a heartfelt speech for 15 minutes.",
    "  Call your dad and say you love him.",
    "Act like your favourite movie artist.",
    " Do a ramp walk in your partner's clothes.",
    "  Do 30 push-ups with your partner on your back.",
    " Call a friend you don't talk to anymore and talk like a kid.",
    "  Sing a song backwards.",
    " Play a baby crying video and dance on it.",
    "  Doodle the best possible image of an actor and post it on Twitter.",
    "  Write a 10 line naughty story and send it to your boys/girls group.",
    "   Peruse through a trash can and name any three things you picked",
    " Use a voice-changing filter and send it to your ex.",
    " Talk to the wall as if it's your favourite celebrity crush.",


    // Add more dare challenges here
  ];
  return dareOptions[Math.floor(Math.random() * dareOptions.length)];

      
  
}


// playButtonon.addEventListener('click', () => {
//   if (audioPlayerr.paused) {
//     audioPlayerr.play();
//     playButtonon.textContent = 'Music Of';
//   } else {
//     audioPlayerr.pause();
//     playButtonon.textContent = 'Music On';
//   }
// });





updateResult();



