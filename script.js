/* =========================================
   100単語データ (規則・不規則ミックス)
   ========================================= */
const verbsData = [
    // 規則動詞 (一部)
    { base: 'play', past: 'played', meaning: '遊ぶ', irregular: false },
    { base: 'watch', past: 'watched', meaning: '見る', irregular: false },
    { base: 'cook', past: 'cooked', meaning: '料理する', irregular: false },
    { base: 'study', past: 'studied', meaning: '勉強する', irregular: false },
    { base: 'use', past: 'used', meaning: '使う', irregular: false },
    { base: 'visit', past: 'visited', meaning: '訪れる', irregular: false },
    { base: 'stop', past: 'stopped', meaning: '止まる', irregular: false },
    { base: 'live', past: 'lived', meaning: '住む', irregular: false },
    { base: 'clean', past: 'cleaned', meaning: '掃除する', irregular: false },
    { base: 'help', past: 'helped', meaning: '助ける', irregular: false },
    { base: 'listen', past: 'listened', meaning: '聞く', irregular: false },
    { base: 'open', past: 'opened', meaning: '開ける', irregular: false },
    { base: 'close', past: 'closed', meaning: '閉める', irregular: false },
    { base: 'talk', past: 'talked', meaning: '話す', irregular: false },
    { base: 'walk', past: 'walked', meaning: '歩く', irregular: false },
    { base: 'want', past: 'wanted', meaning: '欲しい', irregular: false },
    { base: 'need', past: 'needed', meaning: '必要とする', irregular: false },
    { base: 'finish', past: 'finished', meaning: '終える', irregular: false },
    { base: 'start', past: 'started', meaning: '始める', irregular: false },
    { base: 'enjoy', past: 'enjoyed', meaning: '楽しむ', irregular: false },
    { base: 'hope', past: 'hoped', meaning: '望む', irregular: false },
    { base: 'stay', past: 'stayed', meaning: '滞在する', irregular: false },
    { base: 'travel', past: 'traveled', meaning: '旅行する', irregular: false },
    { base: 'dance', past: 'danced', meaning: '踊る', irregular: false },
    { base: 'look', past: 'looked', meaning: '見る', irregular: false },
    { base: 'ask', past: 'asked', meaning: '尋ねる', irregular: false },
    { base: 'answer', past: 'answered', meaning: '答える', irregular: false },
    { base: 'cry', past: 'cried', meaning: '泣く', irregular: false },
    { base: 'try', past: 'tried', meaning: '試す', irregular: false },
    { base: 'laugh', past: 'laughed', meaning: '笑う', irregular: false },
    { base: 'wash', past: 'washed', meaning: '洗う', irregular: false },
    { base: 'smile', past: 'smiled', meaning: '微笑む', irregular: false },
    { base: 'wait', past: 'waited', meaning: '待つ', irregular: false },
    { base: 'move', past: 'moved', meaning: '動く', irregular: false },
    { base: 'plan', past: 'planned', meaning: '計画する', irregular: false },
    { base: 'drop', past: 'dropped', meaning: '落とす', irregular: false },
    { base: 'save', past: 'saved', meaning: '保存する', irregular: false },
    { base: 'carry', past: 'carried', meaning: '運ぶ', irregular: false },
    { base: 'jump', past: 'jumped', meaning: '跳ぶ', irregular: false },
    { base: 'climb', past: 'climbed', meaning: '登る', irregular: false },

    // 不規則動詞 (一部)
    { base: 'go', past: 'went', meaning: '行く', irregular: true },
    { base: 'see', past: 'saw', meaning: '見る', irregular: true },
    { base: 'eat', past: 'ate', meaning: '食べる', irregular: true },
    { base: 'have', past: 'had', meaning: '持つ・食べる', irregular: true },
    { base: 'do', past: 'did', meaning: 'する', irregular: true },
    { base: 'buy', past: 'bought', meaning: '買う', irregular: true },
    { base: 'make', past: 'made', meaning: '作る', irregular: true },
    { base: 'come', past: 'came', meaning: '来る', irregular: true },
    { base: 'write', past: 'wrote', meaning: '書く', irregular: true },
    { base: 'read', past: 'read', meaning: '読む', irregular: true },
    { base: 'run', past: 'ran', meaning: '走る', irregular: true },
    { base: 'swim', past: 'swam', meaning: '泳ぐ', irregular: true },
    { base: 'know', past: 'knew', meaning: '知っている', irregular: true },
    { base: 'say', past: 'said', meaning: '言う', irregular: true },
    { base: 'speak', past: 'spoke', meaning: '話す', irregular: true },
    { base: 'tell', past: 'told', meaning: '伝える', irregular: true },
    { base: 'sing', past: 'sang', meaning: '歌う', irregular: true },
    { base: 'drink', past: 'drank', meaning: '飲む', irregular: true },
    { base: 'take', past: 'took', meaning: '取る・連れて行く', irregular: true },
    { base: 'get', past: 'got', meaning: '手に入れる', irregular: true },
    { base: 'give', past: 'gave', meaning: '与える', irregular: true },
    { base: 'keep', past: 'kept', meaning: '保つ', irregular: true },
    { base: 'leave', past: 'left', meaning: '去る', irregular: true },
    { base: 'lose', past: 'lost', meaning: '失う', irregular: true },
    { base: 'meet', past: 'met', meaning: '会う', irregular: true },
    { base: 'send', past: 'sent', meaning: '送る', irregular: true },
    { base: 'sleep', past: 'slept', meaning: '眠る', irregular: true },
    { base: 'spend', past: 'spent', meaning: '費やす', irregular: true },
    { base: 'think', past: 'thought', meaning: '考える', irregular: true },
    { base: 'win', past: 'won', meaning: '勝つ', irregular: true },
    { base: 'begin', past: 'began', meaning: '始まる', irregular: true },
    { base: 'break', past: 'broke', meaning: '壊す', irregular: true },
    { base: 'bring', past: 'brought', meaning: '持ってくる', irregular: true },
    { base: 'build', past: 'built', meaning: '建てる', irregular: true },
    { base: 'catch', past: 'caught', meaning: '捕まえる', irregular: true },
    { base: 'choose', past: 'chose', meaning: '選ぶ', irregular: true },
    { base: 'draw', past: 'drew', meaning: '描く', irregular: true },
    { base: 'drive', past: 'drove', meaning: '運転する', irregular: true },
    { base: 'fall', past: 'fell', meaning: '落ちる', irregular: true },
    { base: 'feel', past: 'felt', meaning: '感じる', irregular: true },
    { base: 'find', past: 'found', meaning: '見つける', irregular: true },
    { base: 'fly', past: 'flew', meaning: '飛ぶ', irregular: true },
    { base: 'forget', past: 'forgot', meaning: '忘れる', irregular: true },
    { base: 'grow', past: 'grew', meaning: '育つ', irregular: true },
    { base: 'hear', past: 'heard', meaning: '聞こえる', irregular: true },
    { base: 'hide', past: 'hid', meaning: '隠れる', irregular: true },
    { base: 'hold', past: 'held', meaning: '持つ・開催する', irregular: true },
    { base: 'pay', past: 'paid', meaning: '支払う', irregular: true },
    { base: 'ride', past: 'rode', meaning: '乗る', irregular: true },
    { base: 'sell', past: 'sold', meaning: '売る', irregular: true },
    { base: 'sit', past: 'sat', meaning: '座る', irregular: true },
    { base: 'stand', past: 'stood', meaning: '立つ', irregular: true },
    { base: 'steal', past: 'stole', meaning: '盗む', irregular: true },
    { base: 'teach', past: 'taught', meaning: '教える', irregular: true },
    { base: 'wear', past: 'wore', meaning: '着ている', irregular: true },
    { base: 'understand', past: 'understood', meaning: '理解する', irregular: true },
    { base: 'become', past: 'became', meaning: '〜になる', irregular: true },
    { base: 'cut', past: 'cut', meaning: '切る', irregular: true },
    { base: 'put', past: 'put', meaning: '置く', irregular: true },
    { base: 'hit', past: 'hit', meaning: '打つ', irregular: true }
];

/* =========================================
   ゲーム状態
   ========================================= */
let gameState = {
    gameMode: 'standard', // standard, survival
    difficulty: 'normal',
    questions: [],
    currentIdx: 0,
    score: 0,
    combo: 0,
    lives: 3,
    isWriting: false
};

function selectGameMode(mode) {
    gameState.gameMode = mode;
    switchScreen('screen-difficulty');
}

function startGame(diff) {
    gameState.difficulty = diff;
    gameState.score = 0;
    gameState.combo = 0;
    gameState.lives = 3;
    gameState.currentIdx = 0;

    // 問題のフィルタリング
    let pool = [...verbsData];
    if (diff === 'easy') {
        // 初級：規則動詞を優先
        pool = verbsData.filter(v => !v.irregular);
    } else if (diff === 'hard') {
        // 上級：不規則動詞のみ
        pool = verbsData.filter(v => v.irregular);
    }

    gameState.questions = pool.sort(() => Math.random() - 0.5);
    if (gameState.gameMode === 'standard') {
        gameState.questions = gameState.questions.slice(0, 10);
    }

    switchScreen('screen-game');
    updateLifeDisplay();
    showQuestion();
}

function showQuestion() {
    const q = gameState.questions[gameState.currentIdx];
    
    // 出題形式の決定
    if (gameState.difficulty === 'easy') gameState.isWriting = Math.random() < 0.3; // 30%で記述
    else if (gameState.difficulty === 'hard') gameState.isWriting = Math.random() < 0.7; // 70%で記述
    else gameState.isWriting = Math.random() < 0.5;

    // UI更新
    document.getElementById('verb-base').textContent = q.base;
    document.getElementById('verb-meaning').textContent = `（${q.meaning}）`;
    document.getElementById('q-count').textContent = `${gameState.currentIdx + 1}${gameState.gameMode === 'standard' ? '/10' : ''}`;
    document.getElementById('score-display').textContent = gameState.score;

    const choicesDiv = document.getElementById('choices-container');
    const writingDiv = document.getElementById('writing-container');

    if (gameState.isWriting) {
        choicesDiv.classList.add('hidden');
        writingDiv.classList.remove('hidden');
        const input = document.getElementById('answer-input');
        input.value = '';
        input.focus();
    } else {
        writingDiv.classList.add('hidden');
        choicesDiv.classList.remove('hidden');
        generateChoices(q);
    }
}

function generateChoices(q) {
    const container = document.getElementById('choices-container');
    container.innerHTML = '';
    let choices = [q.past];

    if (gameState.difficulty === 'easy') {
        // 簡単：全く関係ない過去形を混ぜる
        const others = verbsData.filter(v => v.past !== q.past).map(v => v.past);
        choices.push(...others.sort(() => Math.random() - 0.5).slice(0, 3));
    } else if (gameState.difficulty === 'normal') {
        // 普通：edの付け間違いなどの典型ミス
        choices.push(q.base + 'ed', q.base + 'd', q.base + 'ied');
    } else {
        // 難しい：綴りが非常に似ているもの、または現在形やing形など
        choices.push(q.past.slice(0, -1), q.past + q.past.slice(-1), q.base + 'ing');
    }

    // 重複削除とシャッフル
    choices = [...new Set(choices)].sort(() => Math.random() - 0.5);
    // 選択肢が4つになるよう調整
    while(choices.length < 4) {
        choices.push(verbsData[Math.floor(Math.random()*verbsData.length)].past);
    }

    choices.slice(0,4).forEach(text => {
        const btn = document.createElement('button');
        btn.className = "choice-btn w-full py-4 bg-white/90 text-indigo-900 text-xl font-bold rounded-xl shadow-lg border-b-4 border-indigo-200";
        btn.textContent = text;
        btn.onclick = () => checkAnswer(text);
        container.appendChild(btn);
    });
}

function checkWritingAnswer() {
    checkAnswer(document.getElementById('answer-input').value.trim().toLowerCase());
}

function checkAnswer(userAns) {
    const q = gameState.questions[gameState.currentIdx];
    const isCorrect = (userAns === q.past);

    if (isCorrect) {
        gameState.combo++;
        let points = (gameState.difficulty === 'easy' ? 30 : gameState.difficulty === 'normal' ? 40 : 50);
        if (gameState.isWriting) points += 20; // ライティングボーナス
        
        // コンボボーナス倍率
        let multi = 1.0;
        if (gameState.combo >= 10) multi = 3.0;
        else if (gameState.combo >= 5) multi = 2.0;
        else if (gameState.combo >= 3) multi = 1.5;

        const finalPoints = Math.floor(points * multi);
        gameState.score += finalPoints;
        
        // 演出
        if (gameState.combo >= 3) {
            const flash = document.getElementById('combo-flash');
            flash.style.opacity = "0.3";
            setTimeout(() => flash.style.opacity = "0", 200);
        }

        showFeedback(true, q.past, finalPoints, multi);
    } else {
        gameState.combo = 0;
        if (gameState.gameMode === 'survival') {
            gameState.lives--;
            updateLifeDisplay();
        }
        showFeedback(false, q.past, 0, 0);
    }
}

function showFeedback(isCorrect, correct, pts, multi) {
    document.getElementById('screen-feedback').classList.remove('hidden');
    const icon = document.getElementById('fb-icon');
    const text = document.getElementById('fb-text');
    const detail = document.getElementById('fb-score-detail');
    const box = document.getElementById('fb-correct-box');

    if (isCorrect) {
        icon.textContent = '🛡️';
        text.textContent = 'Excellent!';
        text.className = "title-font text-4xl text-yellow-300";
        detail.textContent = `+${pts} pts ${multi > 1 ? '(Combo x'+multi+')' : ''}`;
        box.classList.add('hidden');
    } else {
        icon.textContent = '💀';
        text.textContent = 'Damage!';
        text.className = "title-font text-4xl text-red-500";
        detail.textContent = '';
        box.classList.remove('hidden');
        document.getElementById('fb-correct-word').textContent = correct;
    }
    document.getElementById('next-btn').focus();
}

function updateLifeDisplay() {
    const container = document.getElementById('life-container');
    if (gameState.gameMode === 'survival') {
        container.textContent = '❤️'.repeat(gameState.lives) + '🖤'.repeat(3 - gameState.lives);
    } else {
        container.textContent = '♾️';
    }
}

function nextQuestion() {
    document.getElementById('screen-feedback').classList.add('hidden');
    
    if (gameState.gameMode === 'survival' && gameState.lives <= 0) {
        endGame();
        return;
    }

    gameState.currentIdx++;
    if (gameState.gameMode === 'standard' && gameState.currentIdx >= 10) {
        endGame();
    } else if (gameState.currentIdx >= gameState.questions.length) {
        endGame();
    } else {
        showQuestion();
    }
}

function endGame() {
    switchScreen('screen-result');
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('final-stats').textContent = 
        `モード: ${gameState.gameMode} / 難易度: ${gameState.difficulty}\n到達問題数: ${gameState.currentIdx + (gameState.lives > 0 ? 0 : 0)}`;
}

// 共通
function switchScreen(id) {
    ['screen-start', 'screen-difficulty', 'screen-game', 'screen-feedback', 'screen-result'].forEach(s => {
        document.getElementById(s).classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
}

function backToStart() { switchScreen('screen-start'); }

/* =========================================
   ランキング・保存・共有 (簡易版)
   ========================================= */
function saveScore() {
    const name = document.getElementById('player-name').value || '名無し騎士';
    alert(`${name}のスコア ${gameState.score} を保存しました！`);
}

function shareResult() {
    const text = `過去形クエストEXで【${gameState.score}点】獲得！\n難易度: ${gameState.difficulty} / モード: ${gameState.gameMode}\n#英語学習 #JavaScriptゲーム`;
    navigator.clipboard.writeText(text).then(() => alert('コピーしました！'));
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (!document.getElementById('screen-feedback').classList.contains('hidden')) nextQuestion();
        else if (gameState.isWriting) checkWritingAnswer();
    }
});
