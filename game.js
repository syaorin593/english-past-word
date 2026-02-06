/* =========================================
   データ定義
   ========================================= */
const verbsData = [
    { base: 'play', past: 'played', meaning: '遊ぶ' },
    { base: 'watch', past: 'watched', meaning: '見る' },
    { base: 'cook', past: 'cooked', meaning: '料理する' },
    { base: 'study', past: 'studied', meaning: '勉強する' },
    { base: 'use', past: 'used', meaning: '使う' },
    { base: 'visit', past: 'visited', meaning: '訪れる' },
    { base: 'stop', past: 'stopped', meaning: '止まる' },
    { base: 'go', past: 'went', meaning: '行く' },
    { base: 'see', past: 'saw', meaning: '見る・会う' },
    { base: 'eat', past: 'ate', meaning: '食べる' },
    { base: 'have', past: 'had', meaning: '持つ' },
    { base: 'buy', past: 'bought', meaning: '買う' },
    { base: 'make', past: 'made', meaning: '作る' },
    { base: 'come', past: 'came', meaning: '来る' },
    { base: 'write', past: 'wrote', meaning: '書く' },
    { base: 'read', past: 'read', meaning: '読む' },
    { base: 'run', past: 'ran', meaning: '走る' },
    { base: 'swim', past: 'swam', meaning: '泳ぐ' },
    { base: 'know', past: 'knew', meaning: '知っている' },
    { base: 'say', past: 'said', meaning: '言う' }
];

/* =========================================
   ゲーム状態管理
   ========================================= */
let gameState = {
    mode: 'choice', // choice, writing, mix
    difficulty: 'normal', // easy, normal, hard
    questions: [],
    currentQIndex: 0,
    score: 0,
    combo: 0,
    maxCombo: 0
};

/* =========================================
   画面遷移系関数
   ========================================= */
function switchScreen(screenId) {
    // 全画面を隠す
    ['screen-start', 'screen-difficulty', 'screen-game', 'screen-feedback', 'screen-result'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    // 指定画面を表示
    document.getElementById(screenId).classList.remove('hidden');
}

function backToStart() {
    switchScreen('screen-start');
}

// 1. モード選択
function selectMode(mode) {
    gameState.mode = mode;
    switchScreen('screen-difficulty');
}

// 2. ゲーム開始（難易度決定）
function startGame(difficulty) {
    gameState.difficulty = difficulty;
    gameState.score = 0;
    gameState.combo = 0;
    gameState.maxCombo = 0;
    gameState.currentQIndex = 0;
    
    // 全単語からランダムに10問選出
    gameState.questions = [...verbsData].sort(() => Math.random() - 0.5).slice(0, 10);
    
    switchScreen('screen-game');
    showQuestion();
}

/* =========================================
   問題表示 & 生成ロジック
   ========================================= */
function showQuestion() {
    const q = gameState.questions[gameState.currentQIndex];
    
    // 現在の問題形式を決定 (Mixならランダム)
    let isWriting = false;
    if (gameState.mode === 'writing') isWriting = true;
    else if (gameState.mode === 'mix') isWriting = Math.random() < 0.5;

    // UI更新
    document.getElementById('verb-base').textContent = q.base;
    document.getElementById('verb-meaning').textContent = `（${q.meaning}）`;
    document.getElementById('q-difficulty').textContent = `${gameState.currentQIndex + 1}/10問目`;
    document.getElementById('score-display').textContent = gameState.score;
    
    const comboEl = document.getElementById('combo-display');
    comboEl.textContent = gameState.combo > 1 ? `${gameState.combo} COMBO! 🔥` : '';

    // コンテナ切り替え
    const choicesDiv = document.getElementById('choices-container');
    const writingDiv = document.getElementById('writing-container');

    if (isWriting) {
        choicesDiv.classList.add('hidden');
        writingDiv.classList.remove('hidden');
        const input = document.getElementById('answer-input');
        input.value = '';
        input.focus();
        input.dataset.isWriting = "true"; // 判定用に属性セット
    } else {
        writingDiv.classList.add('hidden');
        choicesDiv.classList.remove('hidden');
        input = document.getElementById('answer-input');
        input.dataset.isWriting = "false";
        generateChoices(q, gameState.difficulty);
    }
}

// 選択肢生成（難易度に応じたひっかけ問題）
function generateChoices(q, difficulty) {
    const container = document.getElementById('choices-container');
    container.innerHTML = '';

    let choices = [q.past]; // 正解を入れる

    // 難易度別「間違い選択肢」生成
    if (difficulty === 'easy') {
        // 簡単: 全く違う動詞の過去形を入れる
        const others = verbsData.filter(v => v.base !== q.base).map(v => v.past);
        choices.push(...others.sort(() => Math.random() - 0.5).slice(0, 3));
    } else {
        // 中級・上級: ひっかけ選択肢を生成
        const distractors = generateTrickyDistractors(q);
        choices.push(...distractors.slice(0, 3));
    }

    // シャッフルして表示
    choices.sort(() => Math.random() - 0.5);

    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = "choice-btn w-full py-4 bg-white/90 hover:bg-white text-indigo-900 text-xl font-bold rounded-xl shadow-lg border-b-4 border-indigo-200";
        btn.textContent = choice;
        btn.onclick = () => checkAnswer(choice, false);
        container.appendChild(btn);
    });
}

// ひっかけ単語生成器
function generateTrickyDistractors(q) {
    let fakes = [];
    const base = q.base;
    
    // パターン1: edを無理やりつける (goed, eated)
    fakes.push(base + 'ed');
    
    // パターン2: edじゃなくてdだけ (played -> playd)
    if (!base.endsWith('e')) fakes.push(base + 'd');
    
    // パターン3: yをiに変えずにed (studyed)
    if (base.endsWith('y')) fakes.push(base + 'ed');
    
    // パターン4: 現在分詞 (playing)
    fakes.push(base + 'ing');
    
    // パターン5: 最後の文字を重ねる/重ねない (stoped)
    if (base.match(/[aeiou][b-df-hj-np-tv-z]$/)) {
        fakes.push(base + 'ed'); // stoped
    }

    // 足りない分は他の動詞から補充
    const others = verbsData.filter(v => v.base !== base).map(v => v.past);
    fakes.push(...others);

    return fakes.sort(() => Math.random() - 0.5); // 重複排除は簡易的に省略
}

/* =========================================
   答え合わせ & スコア計算
   ========================================= */
function checkWritingAnswer() {
    const input = document.getElementById('answer-input');
    checkAnswer(input.value.trim().toLowerCase(), true);
}

function checkAnswer(userAnswer, isWritingInput) {
    const q = gameState.questions[gameState.currentQIndex];
    const isCorrect = (userAnswer === q.past);

    if (isCorrect) {
        // コンボ加算
        gameState.combo++;
        if (gameState.combo > gameState.maxCombo) gameState.maxCombo = gameState.combo;

        // 計算ロジック
        let basePoint = 0;
        if (gameState.difficulty === 'easy') basePoint = 30;
        else if (gameState.difficulty === 'normal') basePoint = 40;
        else basePoint = 50; // hard

        // ライティングボーナス
        if (isWritingInput) basePoint += 20;

        // コンボボーナス倍率
        let multiplier = 1.0;
        if (gameState.combo >= 8) multiplier = 2.5;
        else if (gameState.combo >= 5) multiplier = 2.0;
        else if (gameState.combo >= 3) multiplier = 1.5;

        const points = Math.floor(basePoint * multiplier);
        gameState.score += points;

        showFeedback(true, q.past, points, multiplier);
    } else {
        gameState.combo = 0; // コンボ切れ
        showFeedback(false, q.past, 0, 1);
    }
}

function showFeedback(isCorrect, correctAnswer, points, multiplier) {
    document.getElementById('screen-feedback').classList.remove('hidden');
    
    const icon = document.getElementById('fb-icon');
    const text = document.getElementById('fb-text');
    const detail = document.getElementById('fb-score-detail');
    const correctBox = document.getElementById('fb-correct-box');

    if (isCorrect) {
        icon.textContent = '⚔️';
        text.textContent = 'Nice!';
        text.className = "title-font text-4xl text-yellow-300 mb-2";
        
        let msg = `+${points} pts`;
        if (multiplier > 1) msg += ` (x${multiplier} Combo!)`;
        detail.textContent = msg;
        
        correctBox.classList.add('hidden');
    } else {
        icon.textContent = '💥';
        text.textContent = 'Miss...';
        text.className = "title-font text-4xl text-rose-300 mb-2";
        detail.textContent = '';
        
        correctBox.classList.remove('hidden');
        document.getElementById('fb-correct-word').textContent = correctAnswer;
    }

    // Enterキー連打対策：少し遅れてフォーカス
    setTimeout(() => document.getElementById('next-btn').focus(), 50);
}

function nextQuestion() {
    document.getElementById('screen-feedback').classList.add('hidden');
    gameState.currentQIndex++;

    if (gameState.currentQIndex >= 10) {
        endGame();
    } else {
        showQuestion();
    }
}

function endGame() {
    switchScreen('screen-result');
    document.getElementById('final-score').textContent = gameState.score;
    document.getElementById('final-combo').textContent = `最大コンボ: ${gameState.maxCombo}`;
    loadRanking(); // ランキング表示更新
}

/* =========================================
   ランキング & 共有機能
   ========================================= */
const STORAGE_KEY = 'past_tense_ranking';

function loadRanking() {
    const list = document.getElementById('ranking-list');
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    
    // スコア高い順
    data.sort((a, b) => b.score - a.score);

    if (data.length === 0) {
        list.innerHTML = '<p class="text-white/50">まだ記録がありません</p>';
        return;
    }

    list.innerHTML = data.slice(0, 5).map((r, i) => {
        const medal = ['🥇','🥈','🥉'][i] || `${i+1}位`;
        return `
            <div class="flex justify-between bg-white/10 p-2 rounded mb-1">
                <span>${medal} ${r.name}</span>
                <span class="font-bold text-yellow-300">${r.score}</span>
            </div>
        `;
    }).join('');
}

function saveScore() {
    const nameInput = document.getElementById('player-name');
    const name = nameInput.value.trim() || '名無し';
    
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    data.push({
        name: name,
        score: gameState.score,
        date: new Date().toISOString()
    });
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    alert('スコアを保存しました！');
    loadRanking();
}

function showRanking() {
    switchScreen('screen-result');
    document.getElementById('final-score').textContent = '-';
    document.getElementById('final-combo').textContent = '';
    loadRanking();
}

function shareResult() {
    const text = `英語過去形クエストで ${gameState.score}点 をとったよ！\nモード: ${gameState.mode} / 難易度: ${gameState.difficulty}\n#英語学習`;
    navigator.clipboard.writeText(text).then(() => {
        alert('結果をコピーしました！友達に送ろう！');
    });
}

// Enterキー対応
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // フィードバック画面なら「次へ」
        if (!document.getElementById('screen-feedback').classList.contains('hidden')) {
            nextQuestion();
            return;
        }
        // ゲーム中かつライティングなら「決定」
        if (!document.getElementById('screen-game').classList.contains('hidden') && 
            !document.getElementById('writing-container').classList.contains('hidden')) {
            checkWritingAnswer();
        }
    }
});
