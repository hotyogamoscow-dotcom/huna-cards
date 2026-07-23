const cards = [
   { id: 1, name: "Uli Nana Pono", translation: "Праведное, мирное, безмятежное пламя", usage: "Когда этот символ используется в медитации, Ули откликается и посылает свою спокойную, уравновешенную энергию, чтобы очистить состояние. Общее, универсальное средство — прогоняет Ману через систему и выравнивает её. Для очищения состояний с помощью спокойной уравновешенной энергии.", comment: "Это высший символ богини Ули, которую называют «Богиней колдовства, сестрой Мануа, бога подземного мира». Uli Nana Pono — это богиня, которая наблюдает за всем, что мы делаем правильно.", image: "images/01 huna card.jpg" },
   { id: 2, name: "Uli Nana Hewa", translation: "Ули приносит спокойствие, чтобы исправить несправедливости", usage: "Приносит спокойствие и уравновешенность. Исправляет совершённые несправедливости. Успокаивает того, кто пострадал от несправедливости", comment: "Этот символ используется, когда вам нужна более тяжёлая или плотная Мана для очищения конкретного состояния. Мана, которая приходит с этим символом, не столь миролюбива, как у Uli Nana Pono, и предназначена для состояний, которые являются более плотными. Если вы используете Uli Nana Hewa в медитации, всегда после него применяйте Uli Nana Pono.", image: "images/02 huna card.jpg" },
   { id: 3, name: "Ao O Uli Ka Honua", translation: "Принести Свет Ули на Землю", usage: "Это третий из символов аспектов Ули, и он приносит свет от богини к нам, здесь на земле. Этот свет также способен проникнуть в состояние, чтобы осветить его и показать, что оно является иллюзией.", comment: "Этот символ хорош для заземления, особенно если в голове слишком много света.", image: "images/03 huna card.jpg" },
   { id: 4, name: "Ke Ao O Ka La I Hauola", translation: "Охладить свет и принести освежающий ветер спасения", usage: "Приносит спокойствие и уравновешенность. Исправляет совершённые несправедливости. Успокаивает того, кто пострадал от несправедливости", image: "images/04 huna card.jpg" },
   { id: 5, name: "Ke Ao Lanihuli", translation: "Свет с небес, чтобы перевернуть старые условия, принося просветление", usage: "Этот символ приносит свет с небес, чтобы обратить вспять старые состояния. Свет также очищает и омывает всего человека — три «я» и их тела.", image: "images/05 huna card.jpg" },
   { id: 6, name: "Kai Pu O Lono", translation: "Принести океан Маны от Лоно", usage: "Этот символ оказывает эффект увеличения Маны на уровне Лоно, Манамана или Мана-о-И'о. При использовании в медитации он привносит такой уровень Маны, который усиливает мыслительные процессы и ясность ума, обычно ассоциируемые с сознательным разумом.", image: "images/06 huna card.jpg" },
   { id: 7, name: "Paikuli (как Kuili)", translation: "Высший контроль над способностью проецировать свои мысли с помощью Маны", usage: "Этот символ предназначен для создания мыслеформ, наделения их Маной и отправки к желаемому адресату.", image: "images/07 huna card.jpg" },
   { id: 8, name: "Waha Hamama", translation: "Раскрывать секреты или Открытый рот", usage: "Этот символ открывает и раскрывает секреты — как обыденные, так и глубокие.", image: "images/08 huna card.jpg" },
   { id: 9, name: "Awiki A Holo", translation: "Ускорять вещи", usage: "Всё движется слишком медленно? Awiki A Holo ускорит их.", image: "images/09 huna card.jpg" },
   { id: 10, name: "Pau Ke Aho", translation: "Принести завершённость и цельность (кресту света)", usage: "Этот символ завершает этапы посвящения для ученика и закрывает дверь в хале.", image: "images/10 huna card.jpg" },
   { id: 11, name: "Pakololio", translation: "Обрести контроль над порывами ветра", usage: "Этот символ даёт контроль над ветром.", image: "images/11 huna card.jpg" },
   { id: 12, name: "Kahanuala", translation: "Пробудить дыхание с помощью света", usage: "Этот символ пробуждает и очищает дыхательные цепи.", image: "images/12 huna card.jpg" },
   { id: 13, name: "Ke Ao Lewa", translation: "Падающая звезда (приносящая восстановленное сознание)", usage: "Этот символ привносит в систему очень мощный вид световой энергии.", image: "images/13 huna card.jpg" },
   { id: 14, name: "Ka Lewa Nui", translation: "Большой свет из высших небес", usage: "Подобно лазеру, «большой свет» прорезает тьму бессознательного ума.", image: "images/14 huna card.jpg" },
   { id: 15, name: "Ahiki a Ala", translation: "Сделать возможным пробуждение", usage: "Этот символ может сделать это возможным, принося с собой ряд озарений.", image: "images/15 huna card.jpg" },
   { id: 16, name: "Kahanu", translation: "Волна света, от которой захватывает дух", usage: "Этот символ низводит свет волной, соединяя Кахуна с источником всего света.", image: "images/16 huna card.jpg" },
   { id: 17, name: "Ke Ahe Loa", translation: "Сгладить дыхание и удлинить вдохи-выдохи", usage: "Ke Ahe Loa сглаживает учащённое дыхание и подготавливает путь для медитации.", image: "images/17 huna card.jpg" },
   { id: 18, name: "Ke Ani Niu La O Kalani", translation: "Тот, кто призовёт кружащийся свет небес", usage: "Этот символ призывает кружащийся свет с небес.", image: "images/18 huna card.jpg" },
   { id: 19, name: "Ka Ahu Makali'i", translation: "Плащ света", usage: "Этот символ низводит плащ света для Кахуна, чтобы надеть его на верхнюю половину тела.", image: "images/19 huna card.jpg" },
   { id: 20, name: "Ku I Kane", translation: "Превратиться в Кане, интегрировать и принести единство", usage: "Ku I Kane приносит единство многообразию.", image: "images/20 huna card.jpg" },
   { id: 21, name: "Kahekili Naue Ika Honua", translation: "Гром нисходит с небес", usage: "Этот символ является одним из проявлений Кане.", image: "images/21 huna card.jpg" },
   { id: 22, name: "Pu Nohu Ula I Ke Kai", translation: "Красный туман духа", usage: "Этот символ заставляет великий красный туман духа подниматься и входить в тело.", image: "images/22 huna card.jpg" },
   { id: 23, name: "Ka Ohu I Uka", translation: "Послать свет вверх", usage: "Этот символ направляет свет, поднимающийся вверх.", image: "images/23 huna card.jpg" },
   { id: 24, name: "Ke Ahi A Loa", translation: "Призвать огонь", usage: "Зажигает Иму и посылает пламя, устремляющееся вверх.", image: "images/24 huna card.jpg" },
   { id: 25, name: "Ke Ao Mau Loa", translation: "Продлить навечно, свет и любовь", usage: "Этот символ очень полезен для продления эффектов любого из предыдущих символов.", image: "images/25 huna card.jpg" },
   { id: 26, name: "Ka Opua Kiei", translation: "Расширить видение", usage: "Этот символ расширяет видение света во время медитации.", image: "images/26 huna card.jpg" },
   { id: 27, name: "Ka Opua Haloa", translation: "Удлинить дыхание", usage: "Этот символ удлиняет дыхание, тем самым принося спокойствие.", image: "images/27 huna card.jpg" },
   { id: 28, name: "Ka Opua Nana", translation: "Приносить спокойствие", usage: "Этот символ завершает то, что мы начали, и приносит спокойствие.", image: "images/28 huna card.jpg" },
   { id: 29, name: "Papa Uli", translation: "Соединиться с богиней", usage: "Позволяет пережить прямую связь с богиней Ули.", image: "images/29 huna card.jpg" },
   { id: 30, name: "Kaohu Kolo Mai", translation: "Свет к голове", usage: "Этот символ выводит все беспокоящие энергии и растворяет их в свете.", image: "images/30 huna card.jpg" },
   { id: 31, name: "Moe Ke Hau", translation: "Спать на нежном ветерке", usage: "Символ времени сновидений.", image: "images/31 huna card.jpg" },
   { id: 32, name: "Ho'o Lono", translation: "Вызывать послушание", usage: "Даёт говорящему силу повеления.", image: "images/32 huna card.jpg" },
   { id: 33, name: "Lua Lai Lua", translation: "Рассеивать свет", usage: "Эффективен для наполнения тела светом.", image: "images/33 huna card.jpg" },
   { id: 34, name: "Ho Kaoiliili", translation: "Увеличить величие", usage: "Помогает обрести уважение и величие.", image: "images/34 huna card.jpg" },
   { id: 35, name: "Ke Ao Ulaula", translation: "Свет любви", usage: "Исцеляет разбитое сердце.", image: "images/35 huna card.jpg" },
   { id: 36, name: "Ho'o Hiki Lele", translation: "Сделать возможным полет", usage: "Посылает сообщение: Ты полетишь!", image: "images/36 huna card.jpg" }
];

// 2. ТЕОРИЯ (Шаблон)
const theoryData = Array.from({ length: 11 }, (_, i) => ({
	id: i + 1,
	title: `Теория ${i + 1}`,
	content: `Текст теории №${i + 1}. Опишите здесь основные принципы системы Хуна...`,
	sub: `Подзаголовок ${i + 1}`
}));

// 3. ТОЛКОВАНИЯ МЭТТА (Автоматически)
const interpretationsData = cards.map(card => ({
	id: card.id,
	name: card.name,
	translation: card.translation,
	image: card.image,
	content: `Текст толкования Мэтта для карты ${card.name}. Здесь будет подробное объяснение...`
}));

// 4. ССЫЛКИ НА ЭЛЕМЕНТЫ
const screens = {
   home: document.getElementById('home-screen'),
   card: document.getElementById('card-screen'),
   library: document.getElementById('library-screen'),
   theory: document.getElementById('theory-screen'),
   interpretations: document.getElementById('interpretations-screen')
};

const cardName = document.getElementById('card-name');
const cardTranslation = document.getElementById('card-translation');
const cardUsage = document.getElementById('card-usage');
const cardComment = document.getElementById('card-comment');
const cardImage = document.getElementById('card-image');
const cardsGrid = document.getElementById('cards-grid');
const theoryGrid = document.getElementById('theory-grid');
const interpretationsGrid = document.getElementById('interpretations-grid');
const labelUsage = document.getElementById('label-usage');
const labelComment = document.getElementById('label-comment');
const nextCardBtn = document.getElementById('next-card-btn');

let currentMode = 'library';
let currentList = [];

// 5. НАВИГАЦИЯ
function hideAllScreens() {
   Object.values(screens).forEach(s => { if(s) s.classList.add('hidden'); });
}

function showHome() {
   hideAllScreens();
   screens.home.classList.remove('hidden');
}

function showDaily() {
   currentMode = 'daily';
   hideAllScreens();
   screens.card.classList.remove('hidden');
   nextCardBtn.style.display = "none";
   const randomCard = cards[Math.floor(Math.random() * cards.length)];
   displayCard(randomCard);
}

function showLibrary() {
   currentMode = 'library';
   hideAllScreens();
   screens.library.classList.remove('hidden');
   nextCardBtn.style.display = "block";
   currentList = cards;
   generateGrid(cards, cardsGrid, 'library');
}

function showTheory() {
   currentMode = 'theory';
   hideAllScreens();
   screens.theory.classList.remove('hidden');
   nextCardBtn.style.display = "block";
   currentList = theoryData;
   generateGrid(theoryData, theoryGrid, 'theory');
}

function showInterpretations() {
   currentMode = 'interpretations';
   hideAllScreens();
   screens.interpretations.classList.remove('hidden');
   nextCardBtn.style.display = "block";
   currentList = interpretationsData;
   generateGrid(interpretationsData, interpretationsGrid, 'interpretations');
}

// 6. ЛОГИКА КНОПОК И ОТОБРАЖЕНИЯ
function handleNextCard() {
	if (currentMode === 'daily') {
    	showDaily();
    	return;
	}

	const activeName = cardName.innerText;
	let currentIndex = currentList.findIndex(item => (item.name === activeName || item.title === activeName));

	if (currentIndex !== -1) {
    	let nextIdx = (currentIndex + 1) % currentList.length;
    	displayCard(currentList[nextIdx]);
	}
}

function displayCard(data) {
   cardName.innerText = data.name || data.title || "";
   cardTranslation.innerText = data.translation || data.sub || "";

   if (currentMode === 'interpretations') {
   	labelUsage.innerText = "Толкование Мэтта:";
   	cardUsage.innerText = data.content || "";
   	labelComment.innerText = "Комментарий:";
   	cardComment.innerText = "";
   } else if (currentMode === 'theory') {
   	labelUsage.innerText = "Суть:";
   	cardUsage.innerText = data.content || "";
   	labelComment.innerText = "Комментарий:";
   	cardComment.innerText = "";
   } else {
   	labelUsage.innerText = "Использование:";
   	cardUsage.innerText = data.usage || "";
   	labelComment.innerText = "Комментарий:";
   	cardComment.innerText = data.comment || "";
   }

   if (cardImage) {
   	if (data.image) {
       	cardImage.src = data.image;
       	cardImage.style.display = "block";
   	} else {
       	cardImage.style.display = "none";
   	}
   }
}

function generateGrid(dataSource, gridElement, mode) {
   gridElement.innerHTML = '';
   dataSource.forEach(item => {
   	const div = document.createElement('div');
   	div.className = 'grid-item';
   	if (mode === 'library' || mode === 'interpretations') {
       	const img = document.createElement('img');
       	img.src = item.image;
       	div.appendChild(img);
   	} else {
       	div.innerText = item.id;
   	}
   	div.onclick = () => {
       	displayCard(item);
       	hideAllScreens();
       	screens.card.classList.remove('hidden');
       	nextCardBtn.style.display = "block";
   	};
   	gridElement.appendChild(div);
   });
}

window.onload = showHome;
