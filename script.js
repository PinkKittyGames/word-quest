const WORDS = [
  {word:"wander",meaning:"漫步；闲逛",example:"I like to wander around the city when I have free time.",translation:"我喜欢有空的时候在城市里到处逛逛。"},
  {word:"curious",meaning:"好奇的",example:"She was curious about what was inside the box.",translation:"她很好奇盒子里面是什么。"},
  {word:"awkward",meaning:"尴尬的；笨拙的",example:"There was an awkward silence after his question.",translation:"他问完问题后出现了一阵尴尬的沉默。"},
  {word:"relieved",meaning:"如释重负的；宽慰的",example:"I felt relieved when I found my lost wallet.",translation:"找到丢失的钱包后，我松了一口气。"},
  {word:"hesitate",meaning:"犹豫",example:"Do not hesitate to ask if you need help.",translation:"如果你需要帮助，不要犹豫，尽管开口。"},
  {word:"delight",meaning:"高兴；使愉快",example:"The little gift brought her great delight.",translation:"这份小礼物给她带来了很大的快乐。"},
  {word:"ordinary",meaning:"普通的；平凡的",example:"It looked like an ordinary day at first.",translation:"一开始，那看起来只是普通的一天。"},
  {word:"notice",meaning:"注意到；留意",example:"Did you notice the change in his voice?",translation:"你注意到他的声音有什么变化吗？"},
  {word:"improve",meaning:"改善；提高",example:"Reading every day can improve your English.",translation:"每天阅读可以提高你的英语。"},
  {word:"confident",meaning:"自信的",example:"She became more confident after practising.",translation:"练习之后，她变得更加自信。"},
  {word:"peculiar",meaning:"奇怪的；独特的",example:"There was a peculiar smell in the room.",translation:"房间里有一股奇怪的味道。"},
  {word:"appreciate",meaning:"欣赏；感激",example:"I really appreciate your help.",translation:"我真的很感谢你的帮助。"},
  {word:"destination",meaning:"目的地",example:"We finally arrived at our destination.",translation:"我们终于到达了我们的目的地。"},
  {word:"genuine",meaning:"真正的；真诚的",example:"Her smile looked completely genuine.",translation:"她的笑容看起来非常真诚。"},
  {word:"fortunate",meaning:"幸运的",example:"I was fortunate enough to meet good friends.",translation:"我很幸运能够遇到好朋友。"},
  {word:"eventually",meaning:"最终；终于",example:"He eventually found the answer.",translation:"他最终找到了答案。"},
  {word:"approach",meaning:"接近；方法",example:"Winter is approaching quickly.",translation:"冬天很快就要来了。"},
  {word:"distract",meaning:"使分心；使注意力转移",example:"Music helps me when I need to focus and avoid distractions.",translation:"当我需要专心时，音乐能帮助我避免分心。"},
  {word:"remarkable",meaning:"非凡的；值得注意的",example:"She made remarkable progress in a short time.",translation:"她在短时间内取得了显著的进步。"},
  {word:"event",meaning:"事件；活动",example:"The school organised a special event.",translation:"学校举办了一场特别的活动。"}
];

const state = {
  words: [],
  index: 0,
  score: 0,
  streak: 0,
  answered: false,
  learned: loadLearned()
};

const $ = id => document.getElementById(id);

const targetWord = $("targetWord");
const answerInput = $("answerInput");
const feedback = $("feedback");
const feedbackIcon = $("feedbackIcon");
const feedbackTitle = $("feedbackTitle");
const feedbackText = $("feedbackText");
const nextButton = $("nextButton");
const message = $("message");
const progressBar = $("progressBar");
const progressText = $("progressText");
const scoreEl = $("score");
const streakEl = $("streak");
const wordCount = $("wordCount");
const hint = $("hint");
const bookDialog = $("bookDialog");
const endDialog = $("endDialog");

function loadLearned() {
  try {
    return JSON.parse(localStorage.getItem("pinkkitty-learned") || "[]");
  } catch {
    return [];
  }
}

function saveLearned() {
  localStorage.setItem("pinkkitty-learned", JSON.stringify(state.learned));
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function currentWord() {
  return state.words[state.index];
}

function startGame() {
  state.words = shuffle(WORDS);
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.answered = false;
  updateStats();
  showWord();
}

function showWord() {
  const item = currentWord();
  state.answered = false;

  targetWord.textContent = item.word;
  hint.textContent = "Take a guess — you've got this!";
  answerInput.value = "";
  answerInput.disabled = false;
  $("answerForm").classList.remove("hidden");
  $("skipButton").classList.remove("hidden");
  feedback.classList.add("hidden");
  nextButton.classList.add("hidden");

  const number = state.index + 1;
  progressText.textContent = `Word ${number} of ${state.words.length}`;
  progressBar.style.width = `${(number / state.words.length) * 100}%`;
  message.textContent = state.streak > 1 ? `${state.streak} in a row! ✨` : "Take your time ♡";

  requestAnimationFrame(() => answerInput.focus());
}

function updateStats() {
  scoreEl.textContent = state.score;
  streakEl.textContent = `${state.streak} 🔥`;
  wordCount.textContent = `${Math.min(state.index, state.words.length)} / ${state.words.length || 20}`;
}

function checkAnswer(event) {
  event.preventDefault();
  if (state.answered) return;

  const answer = answerInput.value.trim().toLowerCase();

  if (!answer) {
    hint.textContent = "Type the word first ♡";
    answerInput.focus();
    return;
  }

  const item = currentWord();
  const correct = answer === item.word.toLowerCase();

  state.answered = true;
  answerInput.disabled = true;
  $("answerForm").classList.add("hidden");
  $("skipButton").classList.add("hidden");

  feedback.classList.remove("hidden", "correct", "wrong");

  if (correct) {
    state.streak += 1;
    state.score += 10 + Math.min(state.streak * 2, 20);

    feedback.classList.add("correct");
    feedbackIcon.textContent = "✓";
    feedbackTitle.textContent = state.streak >= 3 ? "Amazing streak! 🎀" : "Correct! ✨";

    feedbackText.innerHTML =
      `<strong>${item.word}</strong> = ${item.meaning}<br>` +
      `${item.example}<br>${item.translation}`;

    message.textContent = "Added to your Revision Book 📖";
    addLearned(item);

  } else {
    state.streak = 0;

    feedback.classList.add("wrong");
    feedbackIcon.textContent = "!";
    feedbackTitle.textContent = "Not quite — that's okay ♡";

    feedbackText.innerHTML =
      `The answer is <strong>${item.word}</strong> = ${item.meaning}<br>` +
      `${item.example}<br>${item.translation}`;

    message.textContent = "You'll remember it next time!";
  }

  updateStats();

  nextButton.classList.remove("hidden");
  nextButton.textContent =
    state.index === state.words.length - 1
      ? "Finish quest ✨"
      : "Next word →";
}

function addLearned(item) {
  if (!state.learned.some(w => w.word === item.word)) {
    state.learned.push(item);
    saveLearned();
  }
}

function skipWord() {
  if (state.answered) return;

  state.streak = 0;
  state.answered = true;

  answerInput.disabled = true;
  $("answerForm").classList.add("hidden");
  $("skipButton").classList.add("hidden");

  const item = currentWord();

  feedback.classList.remove("hidden", "correct", "wrong");
  feedback.classList.add("wrong");

  feedbackIcon.textContent = "→";
  feedbackTitle.textContent = "Skipped";

  feedbackText.innerHTML =
    `The word was <strong>${item.word}</strong> = ${item.meaning}<br>` +
    `${item.example}<br>${item.translation}`;

  message.textContent = "No worries — learning takes repetition ♡";

  nextButton.classList.remove("hidden");
  nextButton.textContent =
    state.index === state.words.length - 1
      ? "Finish quest ✨"
      : "Next word →";

  updateStats();
}

function nextWord() {
  if (!state.answered) return;

  if (state.index >= state.words.length - 1) {
    showEnd();
    return;
  }

  state.index += 1;
  updateStats();
  showWord();
}

function showEnd() {
  $("finalScore").textContent = state.score;
  endDialog.showModal();
}

function renderBook() {
  const list = $("bookList");
  const empty = $("bookEmpty");

  list.innerHTML = "";

  if (state.learned.length === 0) {
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");

  [...state.learned].reverse().forEach(item => {
    const card = document.createElement("article");
    card.className = "book-item";

    card.innerHTML = `
      <div class="book-word">
        <strong>${escapeHTML(item.word)}</strong>
        <span>${escapeHTML(item.meaning)}</span>
      </div>
      <p class="book-example">“${escapeHTML(item.example)}”</p>
      <p>${escapeHTML(item.translation)}</p>
    `;

    list.appendChild(card);
  });
}

function openBook() {
  renderBook();
  bookDialog.showModal();
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

$("answerForm").addEventListener("submit", checkAnswer);
$("skipButton").addEventListener("click", skipWord);
nextButton.addEventListener("click", nextWord);

$("bookButton").addEventListener("click", openBook);
$("closeBook").addEventListener("click", () => bookDialog.close());

$("playAgain").addEventListener("click", () => {
  endDialog.close();
  startGame();
});

$("openBookFromEnd").addEventListener("click", () => {
  endDialog.close();
  openBook();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (bookDialog.open) bookDialog.close();
    if (endDialog.open) endDialog.close();
  }
});

startGame();
