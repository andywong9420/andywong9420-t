// ============ 基本資料（請把 Level 2/3 詞表補完整 ============

// Level 1：字根字（示例，請按需要增補）
const LEVEL1_ROOTS = [
  '日','月','金','木','水','火','土','竹','戈','十','大','中','一',
  '弓','人','心','手','口','尸','廿','山','女','田','卜'
];

// Level 2：題目內列的 1–500 常用字（請把你題目那串完整貼上）
const LEVEL2_WORDS = [
  '的','一','是','在','不','了','有','和','人','這','中','大','為','上','個','國','我','以','要','地','他','時','來','用','們','生','到','作','出','就','分','於','對','成','會','可','主','發','年','動','同','工','也','能','下','過','子','說','產','種','行','而','方','面','後','多','定','學','法','所','民','得','經','十','三','之','進','等','部','度','家','電','力','如','水','化','高','都','自','二','理','起','小','長','物','現','實','加','量','兩','體','機','還','當','使','點','從','業','本','重','去','把','性','好','應','開','它','合','因','制','由','其','些','然','前','外','天','政','四','日','那','社','義','事','平','形','相','全','裏','間','樣','表','與','關','各','新','線','內','數','正','心','反','你','明','看','原','又','麼','利','比','或','但','質','氣','第','向','道','命','此','沒','變','條','只','結','解','問','意','建','月','公','無','軍','很','情','者','最','立','代','想','已','通','提','直','題','黨','程','展','五','果','料','象','員','革','位','入','常','文','總','次','品','式','活','設','及','管','特','件','求','老','頭','基','資','邊','流','路','級','少','圖','山','統','接','知','較','將','組','見','計','別','她','手','角','期','根','論','運','農','指','幾','九','區','強','放','決','西','被','做','必','戰','先','則','任','取','據','回','給','調','處','隊','南','色','光','門','即','保','治','北','造','百','規','熱','領','七','海','口','東','導','器','壓','世','金','增','爭','濟','階','油','思','術','極','交','受','幹','聯','認','六','共','權','收','證','改','清','志','己','美','再','轉','更','單','風','切','打','白','教','速','花','帶','安','場','身','車','例','真','務','具','萬','每','目','至','達','走','積','示','議','聲','報','鬥','完','類','八','離','華','名','確','科','傳','張','才','信','馬','節','話','米','採','整','空','元','況','今','集','溫','土','許','步','群','石','且','記','需','段','研','界','拉','林','律','叫','究','觀','越','織','裝','影','算','低','持','音','眾','系','書','容','兒','際','商','非','驗','連','斷','率','深','難','近','須','礦','千','省','委','素','技','備','半','辦','青','列','習','便','響','約','支','般','史','感','勞','團','往','酸','稱','市','克','何','除','消','構','府','甚','太','精','歷','值','係','周','什','號','族','維','劃','選','標','寫','存','候','親','毛','快','查','效','斯','院','江','型','眼','王','按','格','養','易','置','派','層','片','始','卻','專','狀','育','廠','京','識','適','參','屬','圓','包','火','住','滿','縣','局','照','準','紅','輕','引','細','聽','該','鐵','價','嚴','底','首','液'
];

// Level 3：題目內列的 500–1000 常用字（請把你題目那串完整貼上）
const LEVEL3_WORDS = [
  '官','德','隨','病','失','爾','死','講','呢','蘇','配','女','黃','推','顯','談','罪','神','藝','席','含','企','望','密','批','營','項','防','舉','球','英','氧','勢','告','李','落','布','木','幫','輪','破','亞','朝','師','圍','遠','字','材','注','排','供','河','態','封','另','復','施','減','樹','溶','怎','止','案','台','言','士','均','武','固','葉','魚','波','視','僅','差','費','降','緊','愛','左','章','早','害','續','服','食','試','充','兵','源','判','似','司','護','足','某','練','略','田','黑','犯','負','擊','繼','興','堅','輸','曲','修','故','城','覺','夫','夠','送','笑','船','右','財','吃','富','春','職','漢','畫','功','巴','裡','跟','雖','雜','板','飛','佔','曾','樂','致','檢','吸','里','助','陽','互','初','創','抗','考','投','壞','策','古','徑','換','未','跑','留','鋼','端','責','站','簡','升','述','錢','副','盡','帝','射','草','範','承','獨','令','限','阿','宣','環','雙','請','超','微','讓','控','州','良','軸','找','否','紀','益','依','優','頂','礎','載','倒','房','突','坐','粉','敵','客','袁','冷','勝','絕','析','塊','劑','測','絲','協','訴','陳','仍','羅','餘','鹽','友','洋','錯','苦','夜','刑','移','模','頻','念','逐','靠','混','母','短','皮','終','聚','汽','村','哪','既','衛','距','校','停','烈','央','察','燒','迅','境','若','印','洲','刻','括','激','孔','搞','室','待','核','散','侵','吧','甲','久','菜','味','舊','湖','貨','彈','損','預','阻','毫','乙','普','穩','媽','植','息','擴','銀','語','揮','酒','雲','守','拿','序','紙','醫','熟','缺','雨','嗎','針','劉','啊','急','唱','訓','誤','願','審','血','附','茶','鮮','糧','斤','孩','脫','硫','善','肥','演','龍','父','漸','歡','掌','械','歌','沙','獲','著','剛','製','攻','謂','盾','討','晚','佈','粒','亂','燃','矛','乎','殺','複','藥','寧','魯','貴','煤','伯','讀','班','句','香','迫','介','豐','培','握','蘭','弦','擔','蛋','沉','假','執','穿','答','誰','順','煙','縮','臉','喜','腳','異','免','困','背','星','福','買','染','井','概','慢','怕','游','磁','倍','祖','皇','薄','促','靜','補','評','鐘','翻','肉','踐','尼','衣','寬','揚','棉','希','傷','操','藏','垂','宜','秋','氫','露','套','督','筆','振','亮','憲','末','架','慶','綠','編','牛','映','觸','銷','雷','座','詩','居','抓','裂','胞','呼','娘','景','盟','威','晶','厚','衡','孫','延','雞','危','膠','屋','鄉','沖','臨','陸','顧','掉','呀','奇','燈','歲','措','束','耐','劇','玉','趙','跳','哥','季','課','凱','額','齊','款','紹','偉','蒸','永','殖','宗','苗','川','爐','弱','楊','零','奏','沿','岩','探','滑','鎮','飯','濃','航','懷','趕','庫','奪','伊'
];

// ============ 遊戲狀態 ============

let cangjieMap = new Map();     // char -> code（倉頡）
let expressMap = new Map();     // char -> quick（速成）
let currentList = [];           // 當前關卡的題庫（陣列）
let currentIndex = 0;
let score = 0;
let started = false;

// 倉頡字根名稱（提示用）
const ROOT_NAMES = {
  A:'日',B:'月',C:'金',D:'木',E:'水',F:'火',G:'土',H:'竹',I:'戈',J:'十',
  K:'大',L:'中',M:'一',N:'弓',O:'人',P:'心',Q:'手',R:'口',S:'尸',T:'廿',
  U:'山',V:'女',W:'田',X:'難',Y:'卜',Z:'重'
};

// ============ 載入編碼資料 ============

async function loadData() {
  const [cjResp, exResp] = await Promise.all([
    fetch('data.json'), fetch('data_express.json')
  ]);
  const cjJson = await cjResp.json();      // {version:"cangjie5", items:[{char, code}, ...]}
  const exJson = await exResp.json();      // {version:"quick", items_quick:[{char, quick}, ...]}

  // 轉 Map：一個字可能有多碼（很少見），先取第一個
  for (const it of cjJson.items) {
    if (!cangjieMap.has(it.char)) cangjieMap.set(it.char, it.code);
  }
  for (const it of (exJson.items_quick || exJson.items || [])) {
    if (!expressMap.has(it.char)) expressMap.set(it.char, it.quick);
  }
}

// ============ 工具：產生提示文字 ============

function codeToRoots(code) {
  // 把英文字母轉成「字根名」：A->日、B->月...
  if (!code) return '';
  let roots = [];
  for (const ch of code) {
    const u = ch.toUpperCase();
    roots.push(`${u}=${ROOT_NAMES[u] || '?'}`);
  }
  return roots.join('  ');
}

function getTipForChar(ch, mode) {
  const isCJ = mode === 'cangjie';
  const code = isCJ ? cangjieMap.get(ch) : expressMap.get(ch);
  if (!code) return `【${ch}】暫無編碼資料`;
  const rootLine = codeToRoots(code.replace(/[^A-Za-z]/g,'')); // 去非字母
  const modeName = isCJ ? '倉頡' : '速成';
  return `【${ch}】\n模式：${modeName}\n代碼：${code}\n字根：${rootLine}`;
}

// ============ 遊戲邏輯 ============

function pickListByLevel(level) {
  if (level === '1') return [...LEVEL1_ROOTS];
  if (level === '2') return [...LEVEL2_WORDS];
  return [...LEVEL3_WORDS];
}

function startGame() {
  const mode = document.getElementById('mode').value;
  const level = document.getElementById('level').value;

  currentList = shuffle(pickListByLevel(level));
  currentIndex = 0;
  score = 0;
  started = true;

  document.getElementById('score').textContent = score;
  document.getElementById('left').textContent = currentList.length - currentIndex;
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('hintBtn').disabled = false;
  document.getElementById('feedback').textContent = '';

  showCurrentTarget();
}

function showCurrentTarget() {
  const span = document.getElementById('targetChar');
  if (currentIndex >= currentList.length) {
    span.textContent = '完成！';
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('hintBtn').disabled = true;
    document.getElementById('feedback').textContent = `恭喜！總分：${score} / ${currentList.length}`;
    return;
  }
  span.textContent = currentList[currentIndex];
  document.getElementById('answer').value = '';
  document.getElementById('left').textContent = currentList.length - currentIndex;
}

function submitAnswer() {
  if (!started) return;
  const target = currentList[currentIndex];
  const val = (document.getElementById('answer').value || '').trim();

  const fb = document.getElementById('feedback');
  if (val === target) {
    score++;
    fb.textContent = '✔ 正確！';
    document.getElementById('score').textContent = score;
    currentIndex++;
    showCurrentTarget();
  } else {
    fb.textContent = '✘ 錯誤，請再試一次（必須輸入完全相同的中文字）';
  }
}

function showHint() {
  if (!started) return;
  const mode = document.getElementById('mode').value;
  const target = currentList[currentIndex];
  alert(getTipForChar(target, mode));
}

// Fisher-Yates 洗牌
function shuffle(arr) {
  const a = [...arr];
  for (let i=a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ============ 字典功能 ============

function lookupDict() {
  const ch = (document.getElementById('dictInput').value || '').trim();
  const res = document.getElementById('dictResult');
  if (!ch) {
    res.textContent = '請輸入一個要查的單字。';
    return;
  }
  const cj = cangjieMap.get(ch);
  const ex = expressMap.get(ch);
  let out = `【${ch}】\n`;
  if (cj) {
    out += `倉頡：${cj}\n字根：${codeToRoots(cj)}\n`;
  } else {
    out += `倉頡：沒有資料\n`;
  }
  if (ex) {
    out += `速成：${ex}\n字根：${codeToRoots(ex)}\n`;
  } else {
    out += `速成：沒有資料\n`;
  }
  res.textContent = out;
}

// ============ 綁定事件與初始化 ============

window.addEventListener('DOMContentLoaded', async () => {
  await loadData();

  document.getElementById('startBtn').addEventListener('click', startGame);
  document.getElementById('submitBtn').addEventListener('click', submitAnswer);
  document.getElementById('answer').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitAnswer();
  });
  document.getElementById('hintBtn').addEventListener('click', showHint);

  document.getElementById('dictBtn').addEventListener('click', lookupDict);
  document.getElementById('dictInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') lookupDict();
  });
});
