/* =========================================
   1. 100語データ（規則・不規則ミックス）
   ========================================= */
const verbsData = [
    { base: 'play', past: 'played', meaning: '遊ぶ', irr: false },
    { base: 'watch', past: 'watched', meaning: '見る', irr: false },
    { base: 'cook', past: 'cooked', meaning: '料理する', irr: false },
    { base: 'study', past: 'studied', meaning: '勉強する', irr: false },
    { base: 'use', past: 'used', meaning: '使う', irr: false },
    { base: 'visit', past: 'visited', meaning: '訪れる', irr: false },
    { base: 'stop', past: 'stopped', meaning: '止まる', irr: false },
    { base: 'stay', past: 'stayed', meaning: '滞在する', irr: false },
    { base: 'walk', past: 'walked', meaning: '歩く', irr: false },
    { base: 'talk', past: 'talked', meaning: '話す', irr: false },
    { base: 'listen', past: 'listened', meaning: '聞く', irr: false },
    { base: 'open', past: 'opened', meaning: '開ける', irr: false },
    { base: 'close', past: 'closed', meaning: '閉める', irr: false },
    { base: 'help', past: 'helped', meaning: '助ける', irr: false },
    { base: 'want', past: 'wanted', meaning: '欲しい', irr: false },
    { base: 'finish', past: 'finished', meaning: '終わる', irr: false },
    { base: 'clean', past: 'cleaned', meaning: '掃除する', irr: false },
    { base: 'smile', past: 'smiled', meaning: '微笑む', irr: false },
    { base: 'laugh', past: 'laughed', meaning: '笑う', irr: false },
    { base: 'dance', past: 'danced', meaning: '踊る', irr: false },
    { base: 'climb', past: 'climbed', meaning: '登る', irr: false },
    { base: 'jump', past: 'jumped', meaning: '跳ぶ', irr: false },
    { base: 'kick', past: 'kicked', meaning: '蹴る', irr: false },
    { base: 'call', past: 'called', meaning: '呼ぶ', irr: false },
    { base: 'ask', past: 'asked', meaning: '尋ねる', irr: false },
    { base: 'answer', past: 'answered', meaning: '答える', irr: false },
    { base: 'enjoy', past: 'enjoyed', meaning: '楽しむ', irr: false },
    { base: 'move', past: 'moved', meaning: '動く', irr: false },
    { base: 'live', past: 'lived', meaning: '住む', irr: false },
    { base: 'hope', past: 'hoped', meaning: '望む', irr: false },
    { base: 'wait', past: 'waited', meaning: '待つ', irr: false },
    { base: 'plan', past: 'planned', meaning: '計画する', irr: false },
    { base: 'drop', past: 'dropped', meaning: '落とす', irr: false },
    { base: 'carry', past: 'carried', meaning: '運ぶ', irr: false },
    { base: 'marry', past: 'married', meaning: '結婚する', irr: false },
    { base: 'try', past: 'tried', meaning: '試す', irr: false },
    { base: 'cry', past: 'cried', meaning: '泣く', irr: false },
    { base: 'save', past: 'saved', meaning: '保存する', irr: false },
    { base: 'travel', past: 'traveled', meaning: '旅行する', irr: false },
    { base: 'show', past: 'showed', meaning: '見せる', irr: false },
    { base: 'go', past: 'went', meaning: '行く', irr: true },
    { base: 'see', past: 'saw', meaning: '見る', irr: true },
    { base: 'eat', past: 'ate', meaning: '食べる', irr: true },
    { base: 'do', past: 'did', meaning: 'する', irr: true },
    { base: 'have', past: 'had', meaning: '持つ', irr: true },
    { base: 'come', past: 'came', meaning: '来る', irr: true },
    { base: 'make', past: 'made', meaning: '作る', irr: true },
    { base: 'take', past: 'took', meaning: '取る', irr: true },
    { base: 'get', past: 'got', meaning: '得る', irr: true },
    { base: 'give', past: 'gave', meaning: '与える', irr: true },
    { base: 'say', past: 'said', meaning: '言う', irr: true },
    { base: 'tell', past: 'told', meaning: '伝える', irr: true },
    { base: 'speak', past: 'spoke', meaning: '話す', irr: true },
    { base: 'write', past: 'wrote', meaning: '書く', irr: true },
    { base: 'read', past: 'read', meaning: '読む', irr: true },
    { base: 'buy', past: 'bought', meaning: '買う', irr: true },
    { base: 'sell', past: 'sold', meaning: '売る', irr: true },
    { base: 'run', past: 'ran', meaning: '走る', irr: true },
    { base: 'swim', past: 'swam', meaning: '泳ぐ', irr: true },
    { base: 'sing', past: 'sang', meaning: '歌う', irr: true },
    { base: 'drink', past: 'drank', meaning: '飲む', irr: true },
    { base: 'know', past: 'knew', meaning: '知っている', irr: true },
    { base: 'think', past: 'thought', meaning: '考える', irr: true },
    { base: 'bring', past: 'brought', meaning: '持ってくる', irr: true },
    { base: 'teach', past: 'taught', meaning: '教える', irr: true },
    { base: 'catch', past: 'caught', meaning: '捕まえる', irr: true },
    { base: 'find', past: 'found', meaning: '見つける', irr: true },
    { base: 'lose', past: 'lost', meaning: '失う', irr: true },
    { base: 'win', past: 'won', meaning: '勝つ', irr: true },
    { base: 'begin', past: 'began', meaning: '始まる', irr: true },
    { base: 'break', past: 'broke', meaning: '壊す', irr: true },
    { base: 'build', past: 'built', meaning: '建てる', irr: true },
    { base: 'feel', past: 'felt', meaning: '感じる', irr: true },
    { base: 'keep', past: 'kept', meaning: '保つ', irr: true },
    { base: 'leave', past: 'left', meaning: '去る', irr: true },
    { base: 'meet', past: 'met', meaning: '会う', irr: true },
    { base: 'send', past: 'sent', meaning: '送る', irr: true },
    { base: 'spend', past: 'spent', meaning: '費やす', irr: true },
    { base: 'understand', past: 'understood', meaning: '理解する', irr: true },
    { base: 'become', past: 'became', meaning: 'になる', irr: true },
    { base: 'draw', past: 'drew', meaning: '描く', irr: true },
    { base: 'drive', past: 'drove', meaning: '運転する', irr: true },
    { base: 'fall', past: 'fell', meaning: '落ちる', irr: true },
    { base: 'fly', past: 'flew', meaning: '飛ぶ', irr: true },
    { base: 'forget', past: 'forgot', meaning: '忘れる', irr: true },
    { base: 'grow', past: 'grew', meaning: '育つ', irr: true },
    { base: 'hear', past: 'heard', meaning: '聞こえる', irr: true },
    { base: 'hide', past: 'hid', meaning: '隠れる', irr: true },
    { base: 'hold', past: 'held', meaning: '持つ', irr: true },
    { base: 'pay', past: 'paid', meaning: '支払う', irr: true },
    { base: 'ride', past: 'rode', meaning: '乗る', irr: true },
    { base: 'sit', past: 'sat', meaning: '座る', irr: true },
    { base: 'sleep', past: 'slept', meaning: '眠る', irr: true },
    { base: 'stand', past: 'stood', meaning: '立つ', irr: true },
    { base: 'wear', past: 'wore', meaning: '着ている', irr: true },
    { base: 'cut', past: 'cut', meaning: '切る', irr: true },
    { base: 'put', past: 'put', meaning: '置く', irr: true },
    { base: 'hit', past: 'hit', meaning: '打つ', irr: true },
    { base: 'hurt', past: 'hurt', meaning: '傷つける', irr: true },
    { base: 'set', past: 'set', meaning: '設定する', irr: true }
];

/* =========================================
   2. 15種類の称号 (難易度緩和版)
   ========================================= */
const titles = [
    { name: "始まりの旅人", req: "初期称号", check: () => true },
    { name: "過去形の門下生", req: "スコア 200突破", check: (s) => s >= 200 },
    { name: "不規則変化の使い手", req: "スコア 800突破", check: (s) => s >= 800 },
    { name: "文法騎士", req: "スコア 1,500突破", check: (s) => s >= 1500 },
    { name: "過去形の賢者", req: "スコア 2,500突破", check: (s) => s >= 2500 },
    { name: "コンボの鬼", req: "最大5コンボ達成", check: (s, c) => c >= 5 },
    { name: "不屈の精神", req: "サバイバルで15問到達", check: (s, c, q) => q >= 15 },
    { name: "テンス・マスター", req: "スコア 4,000突破", check: (s) => s >= 4000 },
    { name: "規則変化の達人", req: "Easyで8問以上正解", check: (s, c, q, d) => d === 'easy' && q >= 8 },
    { name: "暗黒騎士", req: "Hardでスコア 2,000突破", check: (s, c, q, d) => d === 'hard' && s >= 2000 },
    { name: "記述の鉄人", req: "記述で1,000点突破", check: (s, c, q, d, m) => m === 'writing' && s >= 1000 },
    { name: "伝説の語り手", req: "スコア 6,000突破", check: (s) => s >= 6000 },
    { name: "博識家", req: "図鑑30語解放", check: () => Object.keys(JSON.parse(localStorage.getItem('verb_collection') || '{}')).length >= 30 },
    { name: "過去形の守護者", req: "スコア 8,500突破", check: (s) => s >= 8500 },
    { name: "過去形の神", req: "スコア 10,000突破", check: (s) => s >= 10000 }
];

/* =========================================
   3. ゲーム状態管理 & ナビゲーション
   ========================================= */
let state = {
    mode: 'mix', // choice, writing, mix
    difficulty: 'normal',
    isSurvival: false,
    questions: [],
    currentIdx: 0,
    score: 0,
    combo: 0,
    lives: 3,
    collection: JSON.parse(localStorage.getItem('verb_collection') || '{}')
};

window.onload = () => updateTitleDisplay();

// 画面切り替え
function switchScreen(id) {
    ['screen-start', 'screen-difficulty', 'screen-game', 'screen-collection', 'screen-titles', 'screen-ranking', 'screen-feedback', 'screen-result'].forEach(s => {
        const el = document.getElementById(s);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');
}

function selectMode(m) { state.mode = m; switchScreen('screen-difficulty'); }
function backToStart() { switchScreen('screen-start'); }
function backToStartPrompt() { if(confirm("タイトルに戻りますか？")) backToStart(); }

/* =========================================
   4. ゲームロジック
   ========================================= */
function startGame(diff) {
    state.difficulty = diff;
    state.isSurvival = document.getElementById('survival-toggle').checked;
    state.score = 0;
    state.combo = 0;
    state.lives = 3;
    state.currentIdx = 0;

    let pool = [...verbsData];
    if (diff === 'easy') pool = pool.filter(v => !v.irr);
    if (diff === 'hard') pool = pool.filter(v => v.irr);

    state.questions = pool.sort(() => Math.random() - 0.5);
    if (!state.isSurvival) state.questions = state.questions.slice(0, 10);

    switchScreen('screen-game');
    updateLifeUI();
    showQuestion();
}

function showQuestion() {
    const q = state.questions[state.currentIdx];
    let type = state.mode === 'mix' ? (Math.random() < 0.5 ? 'choice' : 'writing') : state.mode;

    document.getElementById('verb-base').textContent = q.base;
    document.getElementById('verb-meaning').textContent = `（${q.meaning}）`;
    document.getElementById('q-number').textContent = `${state.currentIdx + 1}${state.isSurvival ? '' : '/10'}`;
    document.getElementById('score-display').textContent = state.score;

    const cDiv = document.getElementById('choices-container');
    const wDiv = document.getElementById('writing-container');

    if (type === 'writing') {
        cDiv.classList.add('hidden'); wDiv.classList.remove('hidden');
        const input = document.getElementById('answer-input');
        input.value = ''; input.focus(); input.dataset.type = 'writing';
    } else {
        wDiv.classList.add('hidden'); cDiv.classList.remove('hidden');
        document.getElementById('answer-input').dataset.type = 'choice';
        generateChoices(q);
    }
}

function generateChoices(q) {
    const container = document.getElementById('choices-container');
    container.innerHTML = '';
    let choices = [q.past];
    if (state.difficulty === 'easy') {
        choices.push(...verbsData.filter(v => v.past !== q.past).map(v => v.past).sort(() => Math.random() - 0.5).slice(0, 3));
    } else if (state.difficulty === 'normal') {
        choices.push(q.base + 'ed', q.base + 'd', q.base + 'ied');
    } else {
        choices.push(q.past.slice(0,-1), q.past + q.past.slice(-1), q.base + 'ing');
    }
    [...new Set(choices)].sort(() => Math.random() - 0.5).slice(0,4).forEach(text => {
        const btn = document.createElement('button');
        btn.className = "menu-btn w-full py-4 bg-white/90 text-indigo-900 text-xl font-bold rounded-xl shadow-lg border-b-4 border-indigo-200";
        btn.textContent = text;
        btn.onclick = () => checkAnswer(text);
        container.appendChild(btn);
    });
}

function checkWritingAnswer() { checkAnswer(document.getElementById('answer-input').value.trim().toLowerCase()); }

function checkAnswer(userAns) {
    const q = state.questions[state.currentIdx];
    const isWriting = document.getElementById('answer-input').dataset.type === 'writing';
    const isCorrect = (userAns === q.past);

    if (isCorrect) {
        state.combo++;
        state.collection[q.base] = (state.collection[q.base] || 0) + 1;
        localStorage.setItem('verb_collection', JSON.stringify(state.collection));
        let base = state.difficulty === 'easy' ? 30 : state.difficulty === 'normal' ? 40 : 50;
        if (isWriting) base += 20;
        const pts = Math.floor(base * (state.combo >= 5 ? 2 : state.combo >= 3 ? 1.5 : 1));
        state.score += pts;
        
        const flash = document.getElementById('combo-flash');
        flash.style.opacity = "0.4"; setTimeout(() => flash.style.opacity = "0", 200);
        
        showFeedback(true, q.past, pts);
    } else {
        state.combo = 0; if (state.isSurvival) state.lives--;
        
        // ミス演出：コンテナを揺らす
        const fbContainer = document.getElementById('fb-container');
        fbContainer.classList.add('animate-shake');
        setTimeout(() => fbContainer.classList.remove('animate-shake'), 500);
        
        updateLifeUI(); showFeedback(false, q.past, 0);
    }
}

function showFeedback(isCorrect, ans, pts) {
    document.getElementById('screen-feedback').classList.remove('hidden');
    document.getElementById('fb-icon').textContent = isCorrect ? '✨' : '💥';
    document.getElementById('fb-text').textContent = isCorrect ? 'Great!' : 'Miss...';
    document.getElementById('fb-text').className = `title-font text-4xl mb-2 ${isCorrect ? 'text-yellow-300' : 'text-red-500'}`;
    document.getElementById('fb-score-detail').textContent = isCorrect ? `+${pts} pts` : '';
    document.getElementById('fb-correct-word').textContent = ans;
    document.getElementById('next-btn').focus();
}

function nextQuestion() {
    document.getElementById('screen-feedback').classList.add('hidden');
    if (state.isSurvival && state.lives <= 0) return endGame();
    state.currentIdx++;
    if (!state.isSurvival && state.currentIdx >= 10) return endGame();
    if (state.currentIdx >= state.questions.length) return endGame();
    showQuestion();
}

function updateLifeUI() { document.getElementById('life-display').textContent = state.isSurvival ? '❤️'.repeat(state.lives) + '🖤'.repeat(3 - state.lives) : '♾️'; }

/* =========================================
   5. スコア保存・履歴・称号・図鑑
   ========================================= */
function saveToHistory(score, mode, diff) {
    let history = JSON.parse(localStorage.getItem('score_history') || '[]');
    history.unshift({ score, mode, diff, date: new Date().toLocaleString() });
    localStorage.setItem('score_history', JSON.stringify(history.slice(0, 10)));
}

function showRanking() {
    switchScreen('screen-ranking');
    const list = document.getElementById('history-list');
    const history = JSON.parse(localStorage.getItem('score_history') || '[]');
    list.innerHTML = history.length ? history.map(h => `
        <div class="p-3 bg-white/10 rounded-xl flex justify-between items-center border border-white/5">
            <div>
                <p class="text-[10px] text-gray-400">${h.date}</p>
                <p class="font-bold text-yellow-300 text-lg">${h.score} pts</p>
            </div>
            <div class="text-right text-xs">
                <p>${h.mode}</p>
                <p class="text-gray-400">${h.diff}</p>
            </div>
        </div>
    `).join('') : '<p class="text-center text-gray-500 py-10">履歴がありません</p>';
}

function shareResult() {
    const maxScore = parseInt(localStorage.getItem('max_score') || '0');
    const maxCombo = parseInt(localStorage.getItem('max_combo') || '0');
    const title = getCurrentTitle(state.score, maxCombo);
    const text = `【英語過去形クエスト EX+】\n称号：${title}\nスコア：${state.score} pts\nモード：${state.mode} (${state.difficulty})\n#英語学習 #過去形クエスト`;
    navigator.clipboard.writeText(text).then(() => {
        alert("結果をクリップボードにコピーしました！\nSNSやメールに貼り付けて共有しよう！");
    });
}

function endGame() {
    switchScreen('screen-result');
    document.getElementById('final-score').textContent = state.score;
    saveToHistory(state.score, state.mode, state.difficulty);
    
    const prevMax = parseInt(localStorage.getItem('max_score') || '0');
    const prevCombo = parseInt(localStorage.getItem('max_combo') || '0');
    if (state.score > prevMax) localStorage.setItem('max_score', state.score);
    if (state.combo > prevCombo) localStorage.setItem('max_combo', state.combo);
    
    document.getElementById('final-stats').textContent = `称号: ${getCurrentTitle(state.score, state.combo)}`;
    updateTitleDisplay();
}

function getCurrentTitle(score, combo) {
    let current = titles[0].name;
    const maxS = Math.max(score, parseInt(localStorage.getItem('max_score') || '0'));
    const maxC = Math.max(combo, parseInt(localStorage.getItem('max_combo') || '0'));
    titles.forEach(t => { if (t.check(maxS, maxC, 0, state.difficulty, state.mode)) current = t.name; });
    return current;
}

function updateTitleDisplay() {
    const max = parseInt(localStorage.getItem('max_score') || '0');
    const combo = parseInt(localStorage.getItem('max_combo') || '0');
    document.getElementById('player-title').textContent = `称号: ${getCurrentTitle(max, combo)}`;
}

function showCollection() {
    switchScreen('screen-collection');
    const grid = document.getElementById('collection-grid'); grid.innerHTML = '';
    verbsData.forEach(v => {
        const count = state.collection[v.base] || 0;
        const item = document.createElement('div');
        item.className = `p-3 rounded-xl flex justify-between items-center ${count > 0 ? 'bg-white/20' : 'bg-black/40 opacity-50'}`;
        item.innerHTML = `<div><p class="text-[10px] text-indigo-300">${v.meaning}</p><p class="font-bold">${v.base} → ${count > 0 ? v.past : '???'}</p></div><div class="text-[10px] bg-black/30 px-2 py-1 rounded">正解: ${count}</div>`;
        grid.appendChild(item);
    });
}

function showTitles() {
    switchScreen('screen-titles');
    const list = document.getElementById('titles-list'); list.innerHTML = '';
    const maxS = parseInt(localStorage.getItem('max_score') || '0');
    const maxC = parseInt(localStorage.getItem('max_combo') || '0');
    titles.forEach(t => {
        const ok = t.check(maxS, maxC, 0, 'none', 'none');
        const item = document.createElement('div');
        item.className = `title-item ${ok ? 'title-unlocked' : 'title-locked'}`;
        item.innerHTML = `<div class="flex items-center gap-3"><span class="text-2xl">${ok ? '🏅' : '🔒'}</span><div><p class="font-bold ${ok ? 'text-yellow-300' : 'text-gray-500'}">${t.name}</p><p class="text-[10px] text-gray-400">${t.req}</p></div></div>`;
        list.appendChild(item);
    });
}

function saveScore() { alert("現在のスコアを戦歴に保存しました！"); }

// Enterキー操作
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const fbScreen = document.getElementById('screen-feedback');
        if (fbScreen && !fbScreen.classList.contains('hidden')) {
            nextQuestion();
        } else if (document.getElementById('writing-container') && !document.getElementById('writing-container').classList.contains('hidden')) {
            checkWritingAnswer();
        }
    }
});
