const cards = [
   { id: 1, name: "Uli Nana Pono", translation: "Праведное, мирное, безмятежное пламя", usage: "Когда этот символ используется в медитации, Ули откликается и посылает свою спокойную, уравновешенную энергию, чтобы очистить состояние. Общее, универсальное средство — прогоняет Ману через систему и выравнивает её. Для очищения состояний с помощью спокойной уравновешенной энергии.", comment: "Это высший символ богини Ули, которую называют «Богиней колдовства, сестрой Мануа, бога подземного мира». Uli Nana Pono — это богиня, которая наблюдает за всем, что мы делаем правильно.", image: "images/01 huna card.jpg" },
   { id: 2, name: "Uli Nana Hewa", translation: "Ули приносит спокойствие, чтобы исправить несправедливости", usage: "Приносит спокойствие и уравновешенность. Исправляет совершённые несправедливости. Успокаивает того, кто пострадал от несправедливости", comment: "Этот символ используется, когда вам нужна более тяжёлая или плотная Мана для очищения конкретного состояния. Мана, которая приходит с этим символом, не столь миролюбива, как у Uli Nana Pono, и предназначена для состояний, которые являются более плотными. Если вы используете Uli Nana Hewa в медитации, всегда после него применяйте Uli Nana Pono.", image: "images/02 huna card.jpg" },
   { id: 3, name: "Ao O Uli Ka Honua", translation: "Принести Свет Ули на Землю", usage: "Это третий из символов аспектов Ули, и он приносит свет от богини к нам, здесь на земле. Этот свет также способен проникнуть в состояние, чтобы осветить его и показать, что оно является иллюзией.", comment: "Этот символ хорош для заземления, особенно если в голове слишком много света.", image: "images/03 huna card.jpg" },
   { id: 4, name: "Ke Ao O Ka La I Hauola", translation: "Охладить свет и принести освежающий ветер спасения", usage: "Приносит спокойствие и уравновешенность. Исправляет совершённые несправедливости. Успокаивает того, кто пострадал от несправедливости", image: "images/04 huna card.jpg" },
   { id: 5, name: "Ke Ao Lanihuli", translation: "Свет с небес, чтобы перевернуть старые условия, принося просветление", usage: "Этот символ приносит свет с небес, чтобы обратить вспять старые состояния. Свет также очищает и омывает всего человека — три «я» и их тела.", image: "images/05 huna card.jpg" },
   { id: 6, name: "Kai Pu O Lono", translation: "Принести океан Маны от Лоно", usage: "Этот символ оказывает эффект увеличения Маны на уровне Лоно, Манамана или Мана-о-И'о. При использовании в медитации он привносит такой уровень Маны, который усиливает мыслительные процессы и ясность ума, обычно ассоциируемые с сознательным разумом.", image: "images/06 huna card.jpg" },
   { id: 7, name: "Paikuli (как Kuili)", translation: "Высший контроль над способностью проецировать свои мысли с помощью Маны", usage: "Этот символ предназначен для создания мыслеформ, наделения их Маной и отправки к желаемому адресату.", comment: "Мыслеформы - это мысли, к которым прикреплено достаточно Маны, так что они пребывают в теле Ака бессознательного ума - в Кино Ака получателя. Мыслеформа может казаться имеющей собственное сущестоввание", image: "images/07 huna card.jpg" },
   { id: 8, name: "Waha Hamama", translation: "Раскрывать секреты или Открытый рот", usage: "Этот символ открывает и раскрывает секреты — как обыденные, так и глубокие. Он проявляет психические видения и слышание тонких, скрытых или далёких вещей. Весьма эффективен при медитации на третьем глазе, а также вызывает озарения в любой чакре благодаря происходящим неврологическим изменениям. Он также может быть эффективен в момент медитации, при погружении в какой-либо предмет или желании раскрыть нечто скрытое, или Хуна. Он подразумевает просветление в тайны души — почему вы здесь и тому подобное. Он усиливает понимание и раскрывает секреты.", image: "images/08 huna card.jpg" },
   { id: 9, name: "Awiki A Holo", translation: "Ускорять вещи", usage: "Всё движется слишком медленно? Awiki A Holo ускорит их — процесс, обучение, внутренняя интеграция — всё может ускориться с этим символом. Используйте его экономно, он может ускорить вещи слишком сильно. Чтобы остановить процесс, когда вы закончили, используйте Pau Ke Aho (следующий символ №10). Из опыта: если вы используете этот символ в медитации для запуска процесса, не забудьте остановить его с помощью Pau Ke Aho.", image: "images/09 huna card.jpg" },
   { id: 10, name: "Pau Ke Aho", translation: "Принести завершённость и цельность (кресту света)", usage: "Этот символ завершает этапы посвящения для ученика и закрывает дверь в хале. (Если вы используете его для этой цели, убедитесь, что хотите завершить именно сейчас. Использование символа слишком рано может привести к преждевременному закрытию.) Этот символ также полезен в сочетании с Ku I Kane (№20), а также после терапии Высшего «Я» для обретения цельности и завершённости.", image: "images/10 huna card.jpg" },
   { id: 11, name: "Pakololio", translation: "Обрести контроль над порывами ветра", usage: "Этот символ даёт контроль над ветром. Ветер может быть как внутренним, так и внешним, и Pakololio позволяет вам войти в контакт с обоими. Внутренне существует множество воздушных потоков, проходящих через тело (на санскрите они называются «пранами»). Этот символ позволяет вам взять под контроль и их тоже. Pakololio даёт нам контроль над внутренними и внешними порывами ветра (что соответствует пятой пране восточной философии).", image: "images/11 huna card.jpg" },
   { id: 12, name: "Kahanuala", translation: "Пробудить дыхание с помощью света", usage: "Этот символ пробуждает и очищает дыхательные цепи. В медитации он используется для пробуждения Ха в области 5-й чакры и вокруг неё, но также работает в любой чакре и приносит пробуждение Ха. (Может быть полезен в случае астмы.)", image: "images/12 huna card.jpg" },
   { id: 13, name: "Ke Ao Lewa", translation: "Падающая звезда (приносящая восстановленное сознание)", usage: "Этот символ привносит в систему очень мощный вид световой энергии — энергию света падающей звезды. Этот свет выравнивает все энергии в чакрах и открывает все каналы.", image: "images/13 huna card.jpg" },
   { id: 14, name: "Ka Lewa Nui", translation: "Большой свет из высших небес", usage: "Подобно лазеру, «большой свет» прорезает тьму бессознательного ума и приносит свет просветления телу, разуму и духу. Хотя этот символ предназначен в основном для корневой  чакре и коронной чакре, чтобы направлять свет по всей системе, он открывает любую чакру.", image: "images/14 huna card.jpg" },
   { id: 15, name: "Ahiki a Ala", translation: "Сделать возможным пробуждение", usage: "Среди 36 символов есть много таких, которые связаны с процессом просветления; однако клиенту всё ещё может быть невозможно пробудиться. При условии готовности этот символ может сделать это возможным, принося с собой ряд озарений. Его также можно использовать для завершения времени сновидений.", image: "images/15 huna card.jpg" },
   { id: 16, name: "Kahanu", translation: "Волна света, от которой захватывает дух", usage: "Этот символ низводит свет волной, соединяя Кахуна с источником всего света, как с ярким солнцем прямо над верхней частью символа. Он используется для наполнения тела светом и открытия каналов. Обычно символ применяется на третьем глазе или выше. В медитации на этом символе представьте источник всего света как яркое солнце прямо над верхней частью символа. Затем привнесите солнце в своё тело вместе с символом. Таким образом можно наполнить тело светом.", image: "images/16 huna card.jpg" },
   { id: 17, name: "Ke Ahe Loa", translation: "Сгладить дыхание и удлинить вдохи-выдохи", usage: "Ke Ahe Loa сглаживает учащённое дыхание и подготавливает путь для медитации или состояния сновидений. Оно удлиняет дыхательные циклы и вызывает нисходящий поток Ха; поэтому оно полезно для заземления, мягким способом.", image: "images/17 huna card.jpg" },
   { id: 18, name: "Ke Ani Niu La O Kalani", translation: "Тот, кто призовёт кружащийся свет небес", usage: "Этот символ призывает кружащийся свет с небес. Он может быть полезен перед медитацией на любом символе, использующем свет, — чтобы увеличить количество поступающего света. Его также можно использовать после, чтобы заставить свет кружиться.", image: "images/18 huna card.jpg" },
   { id: 19, name: "Ka Ahu Makali'i", translation: "Плащ света", usage: "Этот символ низводит плащ света для Кахуна, чтобы надеть его на верхнюю половину тела. Плащ света будет защищать и преображать носящего его. Он предназначен для защиты от негативных энергий, для наделения силой и инвеституры. Обычно используется на верхней половине тела, выше ног. Этот символ является изысканным защитным средством. Для самозащиты представьте символ перед собой и шагните в него.", image: "images/19 huna card.jpg" },
   { id: 20, name: "Ku I Kane", translation: "Превратиться в Кане, интегрировать и принести единство", usage: "Ku I Kane приносит единство многообразию. Он может интегрировать различные точки зрения, а также интегрировать части бессознательного ума (когда бессознательное клиента настроено на процесс и неврология готова). Внутренне он работает подобно «E hui ana na moku».", image: "images/20 huna card.jpg" },
   { id: 21, name: "Kahekili Naue Ika Honua", translation: "Гром нисходит с небес, поражает землю и заставляет землю сотрясаться.", usage: "Этот символ является одним из проявлений Кане; и как Kahekili Naue Ika Honua, Кане посылает молнию с небес, гром сотрясает землю и изгоняет всех земных духов. Этот символ полезен для очищения от низших, земных энергий. Используйте его в медитации для выдувания негативных эмоций, таких как печаль, замешательство или даже просто застой. Это хороший символ для использования в начале, поскольку он изгоняет стихию земли и связанные с ней энергии. В начале он очищает систему, поскольку некоторые символы слишком хрупки для использования вначале.", image: "images/21 huna card.jpg" },
   { id: 22, name: "Pu Nohu Ula I Ke Kai", translation: "Красный туман духа, поднимающийся и входящий в тело, приносящий высшее видение.", usage: "Этот символ заставляет великий красный туман духа подниматься и входить в тело. Он может принести высшее видение.", image: "images/22 huna card.jpg" },
   { id: 23, name: "Ka Ohu I Uka", translation: "Послать свет, поднимающийся вверх и заставляющий его гудеть", usage: "Этот символ направляет свет, поднимающийся вверх, подобно тому, как свет в огне иногда вздымается вверх. Ka Ohu I Uka направляет свет и энергию вверх. Как и огонь, он может быть довольно тёплым. В медитации этот символ используется вместе с Ke Ahi A Loa (№17), чтобы зажечь Иму в теле.", image: "images/23 huna card.jpg" },
   { id: 24, name: "Ke Ahi A Loa", translation: "Призвать огонь, создать сеть, расширить её и сделать постоянной", usage: "Иму находится в Калуа Ка Инайна, что примерно позади и ниже пупка, на верхней части и в центре тазовой кости. Это котёл алхимиков, и Ke Ahi A Loa зажигает Иму и посылает пламя, устремляющееся вверх. Как и огонь, он тоже может быть тёплым, и он согревает всё внутреннее ядро тела.", image: "images/24 huna card.jpg" },
   { id: 25, name: "Ke Ao Mau Loa", translation: "Продлить навечно, свет и любовь", usage: "Этот символ очень полезен для продления эффектов любого из предыдущих символов.", image: "images/25 huna card.jpg" },
   { id: 26, name: "Ka Opua Kiei", translation: "Расширить видение (света во время медитации)", usage: "Этот символ расширяет видение света во время медитации. Используйте его, чтобы расширить видение, чтобы вы могли лучше видеть свет в медитации.", image: "images/26 huna card.jpg" },
   { id: 27, name: "Ka Opua Haloa", translation: "Удлинить дыхание (в медитации) с помощью света", usage: "Этот символ удлиняет дыхание, тем самым принося спокойствие. Более долгое и медленное дыхание ассоциируется со спокойствием, уравновешенностью и, следовательно, может привносить «Na».", image: "images/27 huna card.jpg" },
   { id: 28, name: "Ka Opua Nana", translation: "Приносить спокойствие (в медитации) с помощью света", usage: "Этот символ завершает то, что мы начали, и приносит спокойствие посредством света.", image: "images/28 huna card.jpg" },
   { id: 29, name: "Papa Uli", translation: "Соединиться с богиней", usage: "Позволяет пережить прямую связь с богиней Ули.", image: "images/29 huna card.jpg" },
   { id: 30, name: "Kaohu Kolo Mai", translation: "Заставить свет изливаться и выходить к передней части головы", usage: "Этот символ оказывает действие, сходное с песнопением No Luna E Kahale Kai, которое предназначено для поднятия света к передней части головы. Символ выводит все беспокоящие энергии и растворяет их в свете.", image: "images/30 huna card.jpg" },
   { id: 31, name: "Moe Ke Hau", translation: "Спать на нежном ветерке", usage: "Время сновидений — это функция стихии воздуха; и в успешном сне считается, что сновидец спит на ветру. Это символ времени сновидений — позвольте символу делать вас легче и легче, поднимать вас на ветру и уносить в время сновидений.", image: "images/31 huna card.jpg" },
   { id: 32, name: "Ho'o Lono", translation: "Вызывать послушание", usage: "Ho‘o Lono означает слушать, повиноваться. При медитации на 5-й чакре он даёт говорящему силу повеления — способность делать свой голос законом во вселенной. Когда этот символ используется в медитации, он также может соединять с целью жизни. С этим приходит ответственность — следите за тем, что вы говорите.", image: "images/32 huna card.jpg" },
   { id: 33, name: "Lua Lai Lua", translation: "ассеивать сверкающий свет по телу", usage: "Этот символ наиболее эффективен для наполнения тела светом во время медитации, трансформируя неврологию.", image: "images/33 huna card.jpg" },
   { id: 34, name: "Ho Kaoiliili", translation: "Увеличить царственность (величие)", usage: "Нет уважения? Медитируйте на Ho Kaoiliili.", image: "images/34 huna card.jpg" },
   { id: 35, name: "Ke Ao Ulaula", translation: "Принести священный красный свет любви", usage: "Тепло любви — это не тот огонь, который обжигает, а устойчивый поток тепла. Этот символ очень исцеляющий при медитации в области сердца — он может исцелить разбитое сердце.", image: "images/35 huna card.jpg" },
   { id: 36, name: "Ho'o Hiki Lele", translation: "Сделать возможным полет", usage: "И когда всё сделано, куда мы направляемся? Мы возвращаемся к свету. Последний символ посылает неврологии сообщение: «Это возможно! Стань легче, начни подниматься. Скоро ты полетишь!» Скоро!", image: "images/36 huna card.jpg" }
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
   console.log("Отображаем:", data);
   
   // 1. Основная информация (название и перевод)
   cardName.innerText = data.name || data.title || "";
   cardTranslation.innerText = data.translation || data.sub || "";

   // 2. ЛОГИКА ДЛЯ РАЗНЫХ РЕЖИМОВ
   if (currentMode === 'interpretations') {
   	// Режим Мэтта
   	labelUsage.innerText = "Толкование Мэтта:";
   	cardUsage.innerText = data.content || "";
   	labelComment.innerText = "Комментарий:";
   	cardComment.innerText = "";
   	// Скрываем блок комментария, так как в Мэтте его нет
   	cardComment.parentElement.style.display = "none";
   }
   else if (currentMode === 'theory') {
   	// Режим Теории
   	labelUsage.innerText = "Суть:";
   	cardUsage.innerText = data.content || "";
   	labelComment.innerText = "Комментарий:";
   	cardComment.innerText = "";
   	// Скрываем блок комментария
   	cardComment.parentElement.style.display = "none";
   }
   else {
   	// Обычный режим (Библиотека и Карта дня)
   	labelUsage.innerText = "Использование:";
   	cardUsage.innerText = data.usage || "";
  	 
   	// ПРОВЕРКА КОММЕНТАРИЯ:
   	if (data.comment && data.comment.trim() !== "") {
       	// Если комментарий есть — показываем блок
       	labelComment.innerText = "Комментарий:";
       	cardComment.innerText = data.comment;
       	cardComment.parentElement.style.display = "block";
   	} else {
       	// Если комментария нет — скрываем ВЕСЬ абзац с заголовком
       	cardComment.parentElement.style.display = "none";
   	}
   }

   // 3. Работа с фото
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
