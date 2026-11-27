/* ============ OUR LOVE STORY — SCRIPT ============ */

/* ---------------------------------------------------------
   EDIT YOUR MEMORIES HERE.
   Pictures: memory1.jpg ... memory10.jpg (same folder).
   --------------------------------------------------------- */
const MEMORIES = [
  { title:"The Plot Twist", date:"January 1, 2026", note:"where it all began ♡",
    story:"ito yung araw na nag first move ka sakin, bagong taon nung araw na to, sabi mo kumakain lang ng spaghetti nung time na to, tapos naimagine mo na boyfriend mo me HAHAHAHAH, nag pphone ako nung time na to kakachat mo palang nakita ko na agad sa notification bar, hindi ko muna pinansin kasi pakipot pa ako HAHAHAHA, dito na nagsimula ang pinapanalangin mong plot twist sa buhay mo baby HAHAHAHAH.",
    msg:"I'd choose that day all over again." },
  { title:"First Date", date:"January 11, 2026", note:"we talked for hours",
    story:"ito yung una nating pagkikita, may dala agad me nung araw na to(pasikat yern), simba date natin to kunwari goodboy pa ako no(pero goodboy naman talaga) , nung araw na to hindi tayo nag kakahiyaan kahit una nating pagkikita(makapal ang mukha yern) pagtapos ng simba diretso tayo sa jollibee nun tapos pumunta tayo sainyo dami nating baon na kwento nung gabi na yon HAHAHAHA.",
    msg:"You made words feel like home." },
  { title:"First Museum Date", date:"January 26, 2026", note:"nervous but so happy",
    story:"first museum date natin to, wala pa tayong isang buwan na nag-uusap nitong araw na to pero nag plano na tayong mag museum date sa national museum pa talaga, ang layo HAHAHHA, thankful ako kasi pumayag ka at pinayagan ka nila tito at tita kahit iilang araw palang tayo magkakilala. nung araw na to kahit ang kahit maglakad tayo ng kahaba habang lakadin hindi ka nagreklamo at sinamahan mo me sa mga plano kong dalhin ka(lugar) kahit inabot tayo ng gabi nung araw na yon HAHAHAH.",
    msg:"Best Date, ever." },
  { title:"Valentine's Date", date:"February 14, 2026", note:"the small things ✨",
    story:"Valentines Day, nung araw na to may gift ako sayong sariling kong gawa na flower kunwari busy days pa ako non kasi naggagawa me flower, kunwari nag mml yun pala nagawa ng flower HAHAHAHAH, ikaw yung first valentine’s date ko at gusto ko sa lahat ng valentines day na dumaan at dadaan, ikaw pa din ang kasama ko.",
    msg:"A flower made by my hands, for the girl who holds my heart." },
  { title:"Simba Date #2", date:"March 2, 2026", note:"keep this one forever",
    story:"Simba date ulit natin to, sa antipolo cathedral to first simba ko sa antipolo, hindi ako pala simba pero napapasimba ako dahil ikaw ang kasama ko, nung araw na to pumunta din tayong robinson antipolo doon na tayo kumain at tumambay. nung araw na to nag tampo ka tapos ako todo suyo, pero sa huli nagbati din naman tayo agad HAHAHAH.",
    msg:"Even the quietest moments with you become my favorite memories." },
  { title:"The Day You Made Room for Me", date:"May 12, 2026", note:"A little tired, a lot happier",
    story:"ito yung araw na inaya mo ako pumunta sa bgb kasi sabi ni tita, family bonding niyo nung araw na to pero sinama mo ako don, kakauwi ko lang galing spes nito pero hindi ako makatanggi kahit pagod kasi sabi ni tita na sumama ako at hindi ka din papayag na hindi ako kasama HAHAHAHA, kahit sarili ko lang ang dala ko nung araw na yon HAHAHAHA.",
    msg:"Thank you for making me feel like I belong in the little moments of your life." },
  { title:"A Moment I Will Never Forget", date:"June 7, 2026", note:"you made my day",
    story:"Birthday ko nung araw na to, naisuprise mo ako binigyan mo ako gift, kahit wala kana pera nun, binilyan mo pa din ako ako kasi gusto mo may iregalo ka sakin, ginawa mong masaya ang birthday ko ang sayo ko kasi meron akong ikaw, sana nandyan ka palagi para sakin, thank you baby, iloveyousomuch po mwaaa mwaaa mwaaa.",
    msg:"That day, I didn't just receive a gift. I felt loved, remembered, and appreciated." },
  { title:"Third Month, More Memories", date:"July 7, 2026", note:"3 months of us",
    story:"3rd monthsary natin nito, pumunta tayo sa tanay para kumain sa ribsarap pero yung na order mo ang hirap hiwain HAHAHAHA, habang yung sakin sobrang lambot, sobra pa order natin nito sobrang dami pala nung nachos HAHAHA, kaya inuwi nalang natin.",
    msg:"We may not always have the perfect plans, but we always make the best memories." },
  { title:"A Little Cake, A Little Flower, A Lot of Love", date:"August 20, 2026", note:"simple but full of love ♡",
    story:"Birthday mo nung araw na to, may suprise me sayo na flower at cake nung araw na to, yun lang ang kaya ko nung araw na yon, lumabas tayo kumain tayo sa yeyis kahit sakto lang ang pera natin nung araw na yon HAHAHAH, short days natin pero isa sa mahalagang araw ang iyong birthday kaya ginawaan pa din natin ng paraan HAHAHAHAH, gumastos ka ng malaki nung araw na yon, nakakahiya kasi birthday mo tapos napagastos ka pa po.",
    msg:"Even with our little budget, I would always find a way to celebrate you." },
  { title:"The Night I Made You Smile", date:"Today, and always", note:"love blooms even late at night",
    story:"ito yung araw na kunwari aalis lang kami ni emman para samin pero nakaplano na kami ni emman na bumili ng mga bulaklak para saming bebe HAHAHAH, magtropa na parehas inlove HAHAHA, ang daming nangyari nung araw na to pero natuloy pa din kami makabili para saming mga bebe, pumunta kami dangwa upang madaming pagpiliin na flowers. hindi dapat sa araw na to ang pag suprise namin pero napag isipan namin na sa araw na yon na ibigay kahit gabi na HAHAAHAH, nai suprise kita mga 11 pm na non gabing gabi na talaga HAHAHAH.",
    msg:"The flowers were beautiful, but seeing your happiness was the best part." }
];

/* ---------------- setup ---------------- */
const $ = s => document.querySelector(s);
const TOTAL = MEMORIES.length;          // spreads 0..9 are memories, spread 10 is the ending
let cur = 0, busy = false;
const fx = $('#fx'), book = $('#book'), leftPage = $('#leftPage'), rightPage = $('#rightPage');
const isMobile = () => window.matchMedia('(max-width:820px)').matches;

/* decoration variety: each memory gets a different arrangement */
const TILTS = [-4,3,-2,4,-3,2,-5,3,-2,4];
const TAPES = ['t1','t2','t3'];
const POOL  = ['♡','✦','♡','✧','♡','✦'];
const SPOTS = [[['6%','8%'],['84%','80%']],[['82%','6%'],['8%','82%']],[['8%','45%'],['86%','40%']],[['50%','4%'],['12%','88%']]];

function stickers(i){
  return SPOTS[i % 4].map((p, k) =>
    `<span class="stk" style="left:${p[0]};top:${p[1]};animation-delay:${k*.8}s">${POOL[(i + k*3) % POOL.length]}</span>`).join('');
}
const img = i => `<div class="photo"><img src="${i+1}.jfif" alt="Memory ${i+1}" onerror="this.remove()"></div>`;

/* ---------------- page templates ---------------- */
function leftHTML(i){
  if (i < TOTAL){
    return `<figure class="polaroid" style="--tilt:${TILTS[i]}deg">
      <i class="tape ${TAPES[i%3]}"></i>${i%2 ? '<i class="clip"></i>' : ''}
      ${img(i)}<figcaption>${MEMORIES[i].note}</figcaption></figure>${stickers(i)}<svg class="deco m-sprig"><use href="#sprig" width="100%" height="100%"/></svg>`;
  }
  let minis = MEMORIES.map((m,k) =>
    `<div class="mini" data-i="${k}" tabindex="0" title="Tap to view" style="--tilt:${TILTS[k]}deg">${img(k)}</div>`).join('');
  return `<div class="collage"><h3 class="ov-title">Our Memories ♡</h3>${minis}<p class="ov-cap">Tap a photo to view our special memory ♡</p></div><span class="stk" style="left:6%;top:6%">💜</span><span class="stk" style="left:88%;top:88%">✨</span>`;
}
function rightHTML(i){
  if (i < TOTAL){
    const m = MEMORIES[i];
    return `<div class="r-inner"><span class="num">Memory ${String(i+1).padStart(2,'0')}</span>
      <h2>${m.title}</h2><p class="date">${m.date}</p><div class="rule">❦</div>
      <p class="story">${m.story}</p><p class="msg">${m.msg} ♡</p></div>${stickers(i+5)}`;
  }
  return `<div class="r-inner ending"><h2>AND THIS IS JUST THE BEGINNING...</h2><div class="rule">❦</div>
    <p class="story">Thank you for every memory, every laugh, and every quiet moment in between. Thank you for the love you give so freely. I'm grateful for all that we've been, and so excited for everything still to come.</p>
    <p class="msg">The best chapters are still ahead. ♡</p>
    <button id="readBtn" class="glow-btn">READ MY LETTER ♡</button></div>${stickers(2)}`;
}

/* ---------------- rendering ---------------- */
function updateUI(){
  $('#counter').textContent = cur < TOTAL ? `MEMORY ${String(cur+1).padStart(2,'0')} / ${TOTAL}` : 'THE BEGINNING ♡';
  $('#bar').style.width = ((cur+1) / (TOTAL+1) * 100) + '%';
  $('#prevBtn').disabled = cur === 0;
  $('#nextBtn').disabled = cur === TOTAL;
}
function render(i){ leftPage.innerHTML = leftHTML(i); rightPage.innerHTML = rightHTML(i); }

function go(dir){
  const n = cur + dir;
  if (busy || n < 0 || n > TOTAL) return;
  busy = true; chime(dir > 0 ? 660 : 520); hearts(innerWidth/2, innerHeight/2, 8);
  const old = cur; cur = n; updateUI();

  if (isMobile()){                       // mobile: soft fade-and-lift instead of a 3D flip
    book.classList.add('swap');
    setTimeout(() => render(n), 350);
    setTimeout(() => { book.classList.remove('swap'); busy = false; }, 800);
    return;
  }
  const next = dir > 0, leaf = document.createElement('div');
  leaf.className = 'leaf ' + (next ? 'right' : 'left');
  leaf.innerHTML = `<div class="page face ${next?'right':'left'}">${next ? rightHTML(old) : leftHTML(old)}</div>
                    <div class="page face back ${next?'left':'right'}">${next ? leftHTML(n) : rightHTML(n)}</div>`;
  if (next) rightPage.innerHTML = rightHTML(n); else leftPage.innerHTML = leftHTML(n);
  book.appendChild(leaf);
  void leaf.offsetWidth;                 // force reflow so the transition runs
  leaf.classList.add('go');
  setTimeout(() => { render(n); leaf.remove(); busy = false; }, 980);
}

/* ---------------- password screen ----------------
   Change the code here. Music starts automatically once it is entered correctly. */
const PASSWORD = '010126';
$('#lockForm').addEventListener('submit', e => {
  e.preventDefault();
  const input = $('#pw'), card = $('#lockForm');
  if (input.value.trim() === PASSWORD){
    chime(880); hearts(innerWidth/2, innerHeight/2, 16);
    if (musicOn) startMusic();            // auto-play after logging in
    show('intro');
  } else {
    $('#pwMsg').textContent = 'Hmm, that\u2019s not it. Try again ♡';
    input.value = ''; dots(); card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
  }
});
$('#keypad').addEventListener('click', e => {      // on-screen number buttons
  const b = e.target.closest('.key'); if (!b) return;
  const input = $('#pw'), k = b.dataset.k; chime(500 + Math.random()*200);
  $('#pwMsg').textContent = '';
  if (k === 'del') input.value = input.value.slice(0, -1);
  else if (k === 'clr') input.value = '';
  else if (input.value.length < 6) input.value += k;
  dots();
});
$('#pw').addEventListener('input', e => { e.target.value = e.target.value.replace(/\D/g, ''); dots(); });
function dots(){ const n = $('#pw').value.length; document.querySelectorAll('#dots i').forEach((x,k) => x.classList.toggle('on', k < n)); }
$('#dots').onclick = () => $('#pw').focus();
setTimeout(() => $('#pw').focus(), 300);

/* ---------------- screens ---------------- */
function show(id){
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const t = document.getElementById(id); t.classList.add('active'); t.scrollTop = 0;
}
$('#openBtn').onclick = e => {
  chime(880); hearts(e.clientX, e.clientY, 14);
  $('#closedBook').classList.add('opening');
  setTimeout(() => { cur = 0; busy = false; render(0); updateUI(); show('bookScreen'); chime(660); }, 1500);
};
$('#prevBtn').onclick = () => go(-1);
$('#nextBtn').onclick = () => go(1);
$('#replayBtn').onclick = () => { chime(520); cur = 0; $('#closedBook').classList.remove('opening'); show('intro'); };
document.addEventListener('click', e => {
  const mini = e.target.closest('.mini');
  if (mini){ openLB(+mini.dataset.i); chime(700); hearts(e.clientX, e.clientY, 6); return; }
  if (e.target.closest('#readBtn')){ chime(740); hearts(e.clientX, e.clientY, 14); resetEnvelope(); show('letterScreen'); }
  else if (e.target.closest('#book')) hearts(e.clientX, e.clientY, 5);
});
document.addEventListener('keydown', e => {
  if (lbOpen){ if (e.key==='Escape') closeLB(); if (e.key==='ArrowRight') lbGo(1); if (e.key==='ArrowLeft') lbGo(-1); return; }
  if (!$('#bookScreen').classList.contains('active')) return;
  if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1);
});

/* ---------------- effects ---------------- */
function hearts(x, y, n){
  for (let k = 0; k < n; k++){
    const h = document.createElement('span'); h.className = 'burst'; h.textContent = '♡';
    h.style.cssText = `left:${x}px;top:${y}px;--dx:${(Math.random()-.5)*160}px;--dy:${-30-Math.random()*130}px;font-size:${12+Math.random()*16}px`;
    fx.appendChild(h); setTimeout(() => h.remove(), 900);
  }
}
let lastSpark = 0;
document.addEventListener('mousemove', e => {                // sparkles over photographs
  if (!e.target.closest || !e.target.closest('.photo') || Date.now() - lastSpark < 70) return;
  lastSpark = Date.now();
  const s = document.createElement('span'); s.className = 'spark'; s.textContent = '✦';
  s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;--dx:${(Math.random()-.5)*50}px;--dy:${-10-Math.random()*40}px;font-size:${8+Math.random()*10}px`;
  fx.appendChild(s); setTimeout(() => s.remove(), 700);
});
for (let k = 0; k < 45; k++){                                  // twinkling stars
  const s = document.createElement('i'); s.className = 'star';
  s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s`;
  fx.appendChild(s);
}
setInterval(() => {                                            // slowly rising hearts
  const h = document.createElement('span'); h.className = 'fh'; h.textContent = '♡';
  h.style.cssText = `left:${Math.random()*100}%;font-size:${12+Math.random()*22}px;animation-duration:${9+Math.random()*7}s;--dx:${(Math.random()-.5)*120}px`;
  fx.appendChild(h); setTimeout(() => h.remove(), 16000);
}, 1100);

/* soft chime (Web Audio, no files needed; silent if blocked) */
let ac;
function chime(freq){
  try{
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.value = freq; g.gain.setValueAtTime(.08, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime + .8);
    o.connect(g); g.connect(ac.destination); o.start(); o.stop(ac.currentTime + .8);
  }catch(err){}
}

/* ---------------- envelope -> letter ---------------- */
const env = $('#envelope'), letterEl = $('.letter');
function resetEnvelope(){
  env.classList.remove('open','gone'); env.style.display = '';
  letterEl.classList.remove('show'); $('#envHint').style.display = '';
}
function openEnvelope(e){
  if (env.classList.contains('open')) return;
  chime(740); if (e && e.clientX) hearts(e.clientX, e.clientY, 10);
  env.classList.add('open'); $('#envHint').style.display = 'none';
  setTimeout(() => env.classList.add('gone'), 1100);
  setTimeout(() => { env.style.display = 'none'; letterEl.classList.add('show'); $('#letterScreen').scrollTop = 0; chime(880); }, 1600);
}
env.addEventListener('click', openEnvelope);
env.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openEnvelope(); });

/* ---------------- memory viewer (overview collage) ---------------- */
let lbIdx = 0, lbOpen = false;
function openLB(i){
  lbIdx = (i + TOTAL) % TOTAL; const m = MEMORIES[lbIdx];
  $('#lbPhoto').innerHTML = `<figure class="polaroid" style="--tilt:${TILTS[lbIdx]}deg"><i class="tape ${TAPES[lbIdx%3]}"></i>${img(lbIdx)}<figcaption>${m.note}</figcaption></figure>`;
  $('#lbText').innerHTML = `<span class="num">Memory ${String(lbIdx+1).padStart(2,'0')}</span><h2>${m.title}</h2><p class="date">${m.date}</p><div class="rule">❦</div><p class="story">${m.story}</p><p class="msg">${m.msg} ♡</p>`;
  $('#lightbox').classList.add('open'); $('#lightbox').setAttribute('aria-hidden','false'); lbOpen = true;
}
function closeLB(){ $('#lightbox').classList.remove('open'); $('#lightbox').setAttribute('aria-hidden','true'); lbOpen = false; }
function lbGo(d){ chime(600); openLB(lbIdx + d); }
$('#lbClose').onclick = closeLB;
$('#lbPrev').onclick = () => lbGo(-1);
$('#lbNext').onclick = () => lbGo(1);
$('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLB(); });
document.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('mini')) openLB(+e.target.dataset.i); });

/* ---------------- background music ----------------
   Starts when "OPEN OUR SCRAPBOOK" is clicked (browsers need a click before audio).
   Put your own song in this folder as music.mp3 and it will be used automatically.
   If there is no music.mp3, a soft built-in melody plays instead. */
const bgm = new Audio('music.mp3'); bgm.loop = true; bgm.volume = .5;
let musicOn = true, synthTimer = null, synthStep = 0;
const MELODY = [261.63,329.63,392,523.25,392,329.63, 293.66,349.23,440,587.33,440,349.23,
                246.94,329.63,392,493.88,392,329.63, 261.63,329.63,392,523.25,659.25,523.25];
function startSynth(){
  try{
    ac = ac || new (window.AudioContext || window.webkitAudioContext)(); ac.resume();
    clearInterval(synthTimer);
    synthTimer = setInterval(() => {
      const o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
      o.type = 'sine'; o.frequency.value = MELODY[synthStep++ % MELODY.length];
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.05, t + .05);
      g.gain.exponentialRampToValueAtTime(.0001, t + 1.8);
      o.connect(g); g.connect(ac.destination); o.start(t); o.stop(t + 1.9);
    }, 650);
  }catch(err){}
}
function startMusic(){ bgm.play().catch(startSynth); }
function stopMusic(){ bgm.pause(); clearInterval(synthTimer); synthTimer = null; }
$('#musicBtn').onclick = () => {
  musicOn = !musicOn;
  $('#musicBtn').textContent = musicOn ? '♪ Music: ON' : '♪ Music: OFF';
  if (musicOn) startMusic(); else stopMusic();
};

render(0); updateUI();
