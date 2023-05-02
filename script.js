const board = document.querySelector(".board");
let persons = [
  {
    description: "Богдан Хмельницький (за гравюрою В.Гондіуса). З 1648 року — гетьман Війська Запорозького \n Організатор повстання проти панування шляхти в Україні, яке переросло у Національно-визвольну\n війну українського народу проти Речі Посполитої.",
    name: "Богдан Хмельницький",
    img: "./img/Bogdan_Hmelnitski.jpg"
  },
  {
    description: "Йосиф Сліпий після смерті А.Шептицького, у листопаді 1944р. став главою греко-католицької\n церкви. У 1946р. звинувачений у \«ворожій діяльності проти УРСР, співпраці з німецькофашистськими окупантами\», засуджений до ув’язнення. Після вісімнадцяти років каторги звільнений\n у 1963р.",
    name: "Йосиф Сліпий",
    img: "./img/yosif.png"
  },
  {
    description: "Тарас Шевченко – У 1840 р. у Петербурзі вийшла перша збірка його поезій \"Кобзар\". Був одним з\n найвидатніших майстрів українського образотворчого мистецтва. В 1844р. вийшов альбом офортів\n «Живописна Україна», де представлені роботи художника на історичну тематику («Дари в Чигирині»,\n «Смерть Б.Хмельницького»)",
    name: "Тарас Шевченко",
    img: "./img/taras_shevchenko.png"
  },
  {
    description: "Павло Тетеря — український дипломат, військовий, політичний і державний діяч. Гетьман Війська Запорозького, голова козацької держави Правобережної України (1663–1665).",
    name: "Павло Тетеря",
    img: "./img/Pavlo_Teteri.jpg"
  },
  {
    description: "Іван Франко – один із засновників Русько-української радикальної партії (РУРП), згодом відмовився\n від соціалістичних поглядів і став членом Української національно-демократичної партії (УНДП).\n Очолював в НТШ філологічну секцію. Літературні творчість розпочав у 70-х роках. У 1892р. брав\n участь у селянському віче в м.Снятин",
    name: "Іван Франко",
    img: "./img/ivan_franko.png"
  },
  {
    description: "Олесь Гончар – український прозаїк, найвідоміші твори «Прапороносці», «Тронка», «Людина ізброя».\n У 1968р. виходить його роман «Собор», за цей твір письменник був підданий критиці, а твір\n вилучений з літературного процесу на два десятиліття. Після розпаду Радянського Союзу, став\n активістом у створенні Товариства української мови і Народного Руху України.",
    name: "Олесь Гончар",
    img: "./img/oles.png"
  },
  {
    description: "Василь Стус – один з активних учасників акції протесту у вересні 1965р. в кінотеатрі «Україна» в\n Києві, за що був виключений з аспірантури Інституту літератури ім. Т.Шевченка АН УРСР. У 1970р.\n за кордоном вийшла його збірка поезій \«Зимові дерева\», через два роки був засуджений за\n \«антирадянську агітацію\».",
    name: "Василь Стус",
    img: "./img/vasil.png"
  },
  {
    description: "В’ячеслав Чорновіл у 1967р. підготував збірку «Лихо з розуму», яку відзначено премією\n міжнародної журналістики. За це був заарештований і засуджений до 3 років суворого режиму. У\n 1970р. розпочинає видання самвидавського журналу \«Український вісник\».",
    name: "В’ячеслав Чорновіл",
    img: "./img/vyacheslav.png"
  },
  {
    description: "Іван Дзюба – автор книги «Інтернаціоналізм чи русифікація» (1965р.). За відкриті виступи на захист\n української інтелігенції, самвидавські матеріали був ув’язнений у 1972р. Брав участь у створені\n Народного Руху України за перебудову (1989р.). ",
    name: "Іван Дзюба",
    img: "./img/ivan.png"
  },
  {
    description: "Іван Сірко — козацький ватажок, легендарний кошовий отаман Запорозької Січі й усього Війська Запорозького Низового. Здобув перемогу в 65 боях. Герой багатьох українських пісень і казок. Після своєї смерті вважався характерником.",
    name: "Іван Сірко",
    img: "./img/Ivan_Sirko.png"
  },
  {
    description: "Петро Григоренко – генерал-майор, активний учасник дисидентського руху. Відстоював права\n кримських татар на повернення на батьківщину. Учасник Української громадської групи сприяння\n виконання Гельсінських угод (УГГ, 1976р.). двічі був арештований, перебував спецпсихіатричних\n лікарнях Радянського Союзу.",
    name: "Петро Григоренко",
    img: "./img/petr.png"
  },
  {
    description: "Іван Миколайчук – український кіноактор, кінорежисер, сценарист. Провідні ролі у фільмах «Тіні\n забутих предків» (реж. С. Параджанов), «Пропала грамота» (реж. Б. Івченко), «Білий птах з чорною\n ознакою» (реж. Ю. Іллєнко). Як режисер – фільм «Вавилон ХХ» (1979р.)",
    name: "Іван Миколайчук",
    img: "./img/ivanm.png"
  }
];
let tiles = [];

function double(arr) {
  return [...arr, ...arr];
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

persons = double(persons);
persons = shuffle(persons);

function create() {
  for (let i = 0; i < persons.length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.classList.add("border");
		tile.setAttribute("id", i)
    tile.dataset.value = i;
    tile.style.backgroundImage = `url(./img/guess.png)`;
    tile.addEventListener("click", choose);
    tiles.push(tile);
  }
  tiles.forEach((tile) => board.appendChild(tile));
}

let chosen = [];

create();
let desc 
function choose() {
	if (chosen.length < 2 && this.dataset.value !== chosen[0]){
		this.classList.remove("border")
		this.classList.add("choosen")
		chosen.push(this.dataset.value)
		this.style.backgroundImage = `url(${persons[this.dataset.value].img})`
		console.log(chosen)
    console.log(`url(${persons[this.dataset.value].img})`)
    desc = (persons[this.dataset.value].name)
    dd = (persons[this.dataset.value].description)
    
	}
	if (chosen.length === 2){
		setTimeout(check, 1000)
	}
}

function check(){
	if(persons[chosen[0]].name === persons[chosen[1]].name){
		tiles[chosen[0]].style.visibility = "hidden"
		tiles[chosen[1]].style.visibility = "hidden"
    chosen = [] 
    clearInterval(Interval); // 2 card and stop
    console.log(r++)
    console.log(desc)
    alert(dd)
       

    if (r == 13){           // no cards
  console.log("WIN !")
  clearInterval(Interval);
}

	 }
	 else{
		tiles[chosen[0]].classList.remove("choosen")
		tiles[chosen[0]].classList.add("border")
		tiles[chosen[1]].classList.remove("choosen")
		tiles[chosen[1]].classList.add("border")
		tiles[chosen[0]].style.backgroundImage = `url(./img/guess.png)`;
		tiles[chosen[1]].style.backgroundImage = `url(./img/guess.png)`;
	  chosen = []
	 }
}

let r = 1






  let min = 00; 
  let sec = 00; 
  let appendSec = document.getElementById("sec") // ok
  let appendMin = document.getElementById("min") // ok
  let start_t = document.querySelector(".board") // ok
  let stop_t = document.getElementById('stop');  // ok
  let reset_t = document.getElementById('reset'); // ok
  let Interval ;




  start_t.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 1000);
  }
  
    stop_t.onclick = function() {
       clearInterval(Interval);
  }
  

  reset_t.onclick = function() {
     clearInterval(Interval);
    sec = "00";
  	min = "00";
    appendSec.innerHTML = sec;
  	appendMin.innerHTML = min;
    persons = shuffle(persons);
  }
  
   
  
  function startTimer () {
    sec++; 
    
    if(sec <= 9){
      appendSec.innerHTML = "0" + sec;
    }
    
    if (sec > 9){
      appendSec.innerHTML = sec;
      
    } 
    
    if (sec > 59) {
      min++;
      appendMin.innerHTML = "0" + min;
      sec = 0;
      appendSec.innerHTML = "0" + 0;
    }
    
    if (min > 9){
      appendMin.innerHTML = min;
    }
  
  }
  

let audio = new Audio()
let array = ['./audio/konchene.mp3', './audio/positiff.mp3', './audio/krbk-24.mp3', './audio/apovabin-phonk.mp3', './audio/kabanchik.mp3', './audio/pearl.mp3', './audio/sometimes.mp3', './audio/courage.mp3', './audio/phonk-lockdown.mp3', './audio/orki.mp3', './audio/girlfriend.mp3', './audio/luftwaffe.mp3', './audio/fayno.mp3'];
audio.src = './audio/konchene.mp3';