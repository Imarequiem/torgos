<template>
  <div class="main">
    <div class="hello">
      <div class="first-stars">
        <div class="second-stars">
          <div class="div-svg">
            <img src="../assets/Promo.svg" alt="" srcset="" class="promo-svg" />
          </div>
          <div class="promo">
            <p class="promo-header">рециркуляторы</p>
            <br />
            <p class="promo-title">
              Сами проектируем, создаем и поставляем в любое место для Вашей
              безопасности
            </p>
          </div>
          <a href="#about-company" class="a-read-more">
            <b-button class="button-read-more"
              >Читать далее
              <span class="span-button-icon"
                ><b-icon icon="arrow-right" class="span-icon"></b-icon></span
            ></b-button>
          </a>
        </div>
      </div>
    </div>
    <div class="about-company-section" id="about-company">
      <div class="first-container" id="first-container">
        <div class="advantages-div">
          <p class="advantages">Собственное производство</p>
          <p class="advantages">Приятные цены</p>
          <p class="advantages">Быстрое изготовление</p>
          <p class="advantages">Любая форма из любых материалов</p>
        </div>
      </div>
      <div class="second-container">
        <div class="about-company">
          <h1 class="about-company-header">О КОМПАНИИ</h1>
          <p class="about-company-title-year">РАБОТАЕМ С 2015</p>
          <p class="about-company-title">
            Компания «Торгос-Вент» – это творческий коллектив профессионалов с
            богатым опытом разработки и изготовления изделий и конструкций в
            разных отраслях промышленности.
          </p>
        </div>
        <div class="logo-container">
          <img src="../assets/logo.png" alt="" srcset="" class="logo-img" />
        </div>
      </div>
    </div>
    <div class="third-container">
      <h1 class="reasons-header">ПОЧЕМУ МЫ ЛУЧШЕ ДРУГИХ?</h1>
      <h2 class="resons-second-header">5 причин</h2>
      <div class="five-reasons">
        <div class="reason-sections">
          <ul class="five-reasons-buttons">
            <li class="li-reason-btn">Безопасно</li>
            <li class="li-reason-btn">В наличии</li>
            <li class="li-reason-btn">Производим сами</li>
            <li class="li-reason-btn">Без посредников</li>
            <li class="li-reason-btn">Производительность</li>
          </ul>
          <div class="reason-content">
            <div class="reason-safety" v-if="safety">
              <h1 class="safety-h1">БЕЗОПАСНОСТЬ</h1>
              <hr class="second-line" />
              <p class="safety-p">
                Вся линейка рециркуляторов изготовлена согласно техническому
                условию ТУ 28.25.14-001-89695785-2020 и имеет сертификат
                соответствия РОСС RU.HX37.H02376
              </p>
              <p class="safety-p">
                Лампы установлены в рециркуляторах от марки Philips изготовлены
                согласно техническому условию TP TC 004/2011 “О безопасности
                низковольтного оборудования” и имеют сертификат соответствия
                RU.RU.10HX37
              </p>
            </div>
            <div class="reason-safety" v-if="performance">
              <h1 class="safety-h1">ПРОИЗВОДИТЕЛЬНОСТЬ</h1>
              <hr class="second-line" />
              <p class="safety-p">
                Рециркулятор может эксплуатироваться в присутствии людей,
                животных и растений. Рециркулятор может работать непрерывно в
                течение всего времени, необходимого для поддержания микробной
                обсемененности воздуха на уровне нормативных показателей, в
                зависимости от категории помещения, его объѐма и количества
                находящихся в нем людей.
              </p>
              <p class="safety-p" id="safety-p-grey">
                Бактерицидный рециркулятор воздуха Микрон не является
                медицинским изделием.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth-container">
      <div class="fourth-container-bg">
        <div class="about-section">
          <h3 class="header-about-section">ВСЁ ЧТО НУЖНО ЗНАТЬ</h3>
          <span class="span-about-section"> О РЕЦИРКУЛЯТОРАХ</span>
          <hr class="about-section-line" />
        </div>
        <div class="buttons-sections">
          <button class="btn-section" @click="choosePrinciple">
            ПРИНЦИП РАБОТЫ
          </button>
          <button class="btn-section" @click="chooseAdvantages">
            ПРЕИМУЩЕСТВА
          </button>
          <button class="btn-section" @click="chooseCarousel">
            КОМУ ПОДХОДИТ?
          </button>
        </div>
        <div class="principle" v-if="principle">
          <h1 class="h1-principle">
            Вентилятор, находящийся на верхей панели, обеспечивает забор воздуха
            через фильтр в нижней части прибора (при вертикальном расположении),
            протекание его внутри корпуса, где производится облучение УФ-лампой,
            а затем выброс обеззараженного воздуха обратно в помещение.
          </h1>
          <p class="p-principle">
            При работе рециркулятора наблюдается лѐгкое голубое свечение
            индикатора и прорезей защитных решеток. Это нормальное явление, не
            представляющее угрозы здоровью. При работе рециркулятора, особенно
            первое время, возможно появление специфического запаха. Данный запах
            не является признаком неисправности.
          </p>
        </div>
        <div class="advantages" v-if="advantages">
          <h1 class="h1-advantages">
            Рециркулятор может работать непрерывно в течение всего времени,
            необходимого для поддержания микробной обсемененности воздуха на
            уровне нормативных показателей, в зависимости от категории
            помещения, его объѐма и количества находящихся в нем людей.
          </h1>
          <p class="p-advantages">
            <b-icon icon="house-fill"></b-icon>
            Подходит для использования дома и в любом общественном заведении
          </p>
          <p class="p-advantages">
            <b-icon icon="shield-fill"></b-icon>
            Абсолютно безопасен — можно и нужно использовать в присутствии детей
            и животных
          </p>
          <p class="p-advantages">
            <b-icon icon="card-image"></b-icon>
            Впишется в любой интерьер благодаря современному минималистичному
            дизайну
          </p>
        </div>
        <div class="carousel" v-if="carousel">
          <b-carousel
            id="carousel-1"
            controls
            label-next=""
            label-prev=""
            no-hover-pause
            v-model="slide"
            :interval="7000"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              img-src="https://edu.gov.ru/uploads/media/photo/2022/03/28/ee47a57280252a250bbd_2000x.jpg"
              img-height="480"
            >
              <div class="div-carousel">
                <h3 class="h3-carousel">Учебные организации</h3>
                <p class="p-carousel">
                  Большая часть наших клиентов - сотрудники учебных организаций.
                  Рециркулятор в учебном заведении - полезное приобретение,
                  особенно в сезоны ОРВИ.
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide
              img-src="https://prorus.ru/files/641/42975479c7/%D0%9F%D0%BE%D0%BB%D1%8F%D1%88%D0%BE%D0%B2%D0%B0_%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0_1Y2A4796_result.jpg"
            >
              <div class="div-carousel">
                <h3 class="h3-carousel">Офисы</h3>
                <p class="p-carousel">
                  Использование рециркуляторов в офисах не только полезно для
                  сотрудников, но и выгодно для бизнеса. Снизится количество
                  больничных, а самочувствие работников улучшится.
                </p>
              </div>
            </b-carousel-slide>
            <b-carousel-slide
              img-src="https://angary.pro/upload/iblock/a78/a78032942cb23532d2f31e1b76d9705e.jpg"
            >
              <div class="div-carousel">
                <h3 class="h3-carousel">
                  Складские, технические, и др. помещениях.
                </h3>
                <p class="p-carousel">
                  Рециркулятор поможет оббезоразить помещение от различных
                  бактерий и грибков.
                </p>
              </div>
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="fifth-container">
      <div class="questions-container">
        <h1 class="header-questions-container">Часто задаваемые вопросы</h1>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 class="question-card"
                >Можно использовать прибор в присутствии людей?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text />
                <b-card-text class="answer-card"
                  >Да. Благодаря тому, что УФ-лампа закрыта прочным материалом
                  корпуса прибора, излучение не предоставляет вреда
                  присутствующим в помещении во время работы очистителя — ни
                  детям, ни взрослым, ни домашним животным, ни комнатным
                  растениям.
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 class="question-card"
                >Выделяет ли лампа озон?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text class="answer-card"
                  >Этот газ появляется в результате работы высокомощных УФ-ламп.
                  В больших количествах он очень вреден для человека, его
                  влияние вызывает раздражение глаз, кашель, затруднения
                  дыхания, сухость во рту и отдышку. Долгое пребывание в среде с
                  высоким содержанием озона провоцирует серьезные заболевания
                  дыхательной системы.
                  <br />
                  Но эта проблема присуща только кварцевым лампам. В
                  бактерицидных рециркуляторах используются только безозоновые
                  ультрафиолетовые лампы, применение которых никак не вредит
                  организму.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 class="question-card"
                >Есть ли вред ультрафиолета от УФ лампы?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text class="answer-card"
                  >Продолжительное воздействие УФ-лучей на кожу негативно
                  сказывается на состоянии клеток, а их попадание на сетчатку
                  глаза и вовсе может лишить человека зрения.
                  <br />
                  Такая опасность существует только при использовании кварцевых
                  ламп. Закрытый корпус и лабиринтные отражающие экраны на входе
                  и выходе воздуха в бактерицидный облучатель полностью
                  исключают подобные ситуации.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4 class="question-card"
                >Для кого прослужит УФ лампа?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-4"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text class="answer-card">
                  Рециркулятор Микрон, может использоваться индивидуальными
                  потребителями в домашних условиях, в ФОК, в школах,
                  интернатах, помещениях различных организаций, офисах,
                  подсобных и технических помещениях, производственных и
                  складских помещениях III-V категории при их площади до 30м2.
                  Рециркулятор может эксплуатироваться в присутствии людей,
                  животных и растений.
                  <br />
                  Рециркулятор Микрон, может использоваться индивидуальными
                  потребителями в домашних условиях, в ФОК, в школах,
                  интернатах, помещениях различных организаций, офисах,
                  подсобных и технических помещениях, производственных и
                  складских помещениях III-V категории при их площади до 30м2.
                  Рециркулятор может эксплуатироваться в присутствии людей,
                  животных и растений.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-5 class="question-card"
                >Насколько большая эффективность от бактерицидного
                рециркулятора?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-5"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text class="answer-card"
                  >За 1.5 часа работы погибают 99% всевозможных вирусов, грибков
                  и вредоносных бактерий. Он отлично подходит для использования
                  как в больницах, так и в офисных и торговых зданиях, жилых
                  домах, детских учреждениях и заведениях общепита. В условиях
                  распространения COVID19 его установка – лучшая мера
                  предосторожности.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
    <div class="sixth-container">
      <div class="map">
        <div class="map-info">
          <h3 class="header-map-info">Адреса и контакты</h3>
          <hr class="map-info-line second-line" />
          <img
            src="../assets/attention-info.svg"
            alt=""
            srcset=""
            id="attention-svg"
          />
          <p class="p-map-info" id="map-info-first-p">Производство и склад</p>
          <p class="p-map-info">
            Санкт-Петербург, 196240, 6-й Предпортовый проезд д.4 офис 311
          </p>
          <div class="phone-and-time-container">
            <div class="float-left">
              <p class="phone left p-map-info">Телефон:</p>
              <p class="time left p-map-info">Время работы:</p>
            </div>
            <div class="float-right">
              <p class="phone-num right p-map-info">+7 (812) 952 97 93</p>
              <p class="time-num right p-map-info">ПН-СБ: 10:00 - 20:00</p>
            </div>
          </div>
          <p class="href-map">
            <a
              href="https://yandex.ru/maps/?um=constructor%3A78a2f5a5b933d6cb1a4abd04a112dab9b9cc753546850952cf0e5b465ad3926c&source=constructorLink"
              >Показать на карте</a
            >
          </p>
          <button class="btn-callback">Заказать звонок</button>
        </div>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A78a2f5a5b933d6cb1a4abd04a112dab9b9cc753546850952cf0e5b465ad3926c&amp;source=constructor"
        width="1440"
        height="359"
        frameborder="0"
        class="yandex-map"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      slide: 0,
      sliding: null,
      principle: false,
      advantages: false,
      carousel: true,
      safety: true,
      performance: false,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.slide = slide;
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.slide = slide;
      this.sliding = false;
    },
    choosePrinciple() {
      this.carousel = false;
      this.advantages = false;
      this.principle = true;
    },
    chooseAdvantages() {
      this.principle = false;
      this.carousel = false;
      this.advantages = true;
    },
    chooseCarousel() {
      this.principle = false;
      this.advantages = false;
      this.carousel = true;
    },
    showSafety() {
      this.safety = true;
      this.performance = false;
    },
    showPerformance() {
      this.performance = true;
      this.safety = false;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  color: white;
  overflow: visible;
  padding-left: 0;
}
hr {
  margin: 0;
}
.hello {
  height: 100%;
}
.main {
  overflow: auto;
  height: 100%;
  min-height: 100vh;
}
.first-stars {
  position: relative;
  background: radial-gradient(
    67.04% 59.86% at 51.51% 66.47%,
    #ffffff 0%,
    #437a7d 0%,
    #030b0d 82.06%
  );
  height: 100%;
  width: fit-content;
}
.second-stars {
  overflow: hidden;
  background: url(../assets/FirstStars.png), url(../assets/SecondStars.png),
    url(../assets/Triangles.png), url(../assets/Radical.png);
  background-size: cover;
  opacity: 0.7px;
  width: 115vw;
  height: 100%;
  background-position: 0vh;
  width: 100vw;
}

.div-svg {
  position: absolute;
  z-index: 2;
  margin-top: 100px;
  left: 60vw;
  height: 95%;
}
.promo-svg {
  height: 100%;
}
.promo {
  position: relative;
  margin-top: 20rem;
  margin-left: 10%;
  width: 65%;
  z-index: 3;
}
.promo-header {
  font-family: HelveticaNeueCyr;
  font-size: 92px;
  font-weight: 300;
  line-height: 90.9px;
  letter-spacing: 0em;
  text-align: left;
  overflow: visible;
}
.promo-title {
  font-family: Poppins-Regular;
  font-size: 42px;
  font-weight: 500;
  line-height: 62px;
  letter-spacing: 0em;
  text-align: left;
}
.promo-header,
.promo-title {
  bottom: 20px;
  text-align: left;
}
.a-read-more {
  margin-left: 10%;
}
.button-read-more {
  box-shadow: 76px 28px 39px 79px #00000040 inset;
  box-shadow: 0px 4px 4px 0px #00000040;
  color: #ffffff;
  background: #229aa1;
  font-family: Poppins;
  font-size: 22px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: -0.4464285373687744px;
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 5rem;
  padding-left: 20px;
}
.button-read-more:hover {
  background: #3dcdd6;
}
.button-read-more:active {
  background: #0d3a3d;
}
.span-button-icon {
  margin: 10px;
}
.span-icon {
  padding-top: 5px;
}

.advantages-div {
  display: grid;
  height: 54px;
  grid-template-columns: repeat(4, 20vw);
  grid-template-rows: repeat(1, 70px);
  text-align: left;
  padding: 80px 0 50px 0;
}
.advantages-div > p:nth-child(n) {
  margin-right: 31px;
}
.advantages-div > p:last-child {
  margin-right: 0px;
}
.advantages {
  display: block;
  font-family: Poppins;
  text-align: left;
}

.second-container {
  height: 40rem;
}
.about-company {
  position: relative;
  z-index: 5;
  margin: 15% 10% 0 10%;
}
.about-company-header {
  font-family: Poppins;
  color: #229aa1;
  font-size: 32px;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;
}

.about-company-title-year {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: left;
  color: #edededa5;
}
.about-company-title {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  text-align: left;
  width: 30%;
}

.first-container {
  margin: 0 10%;
}
.logo-container {
  float: right;
  position: relative;
  bottom: 200px;
  right: 10vw;
  width: auto;
}
.third-container {
  margin-left: 10%;
  margin-right: 10%;
  height: 50rem;
}
.reasons-header {
  font-family: Poppins;
  color: #f3f3f3;
  font-size: 56px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;
}
.resons-second-header {
  margin-top: 30px;
  color: #229aa1;
  font-family: Poppins;
  font-size: 48px;
  font-weight: 500;
  line-height: 41px;
  letter-spacing: 0px;
  text-align: left;
}
.reason-sections {
  margin-bottom: 100px;
}
.five-reasons-buttons {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  flex-wrap: wrap;
  margin-top: 100px;
  width: fit-content;
}
.li-reason-btn {
  background-color: black;
  border: 0;
  border-radius: 10px;
  text-align: left;
  margin-top: 20px;
}
.reason-content {
  background: #050d18;
  box-shadow: 24px 24px 83px -26px #229aa1;
  position: relative;
  margin-top: 50px;
  width: 55vw;
  float: right;
  bottom: 273px;
  border-radius: 30px;
}
.reason-safety > * {
  margin-left: 3%;
  margin-right: 3%;
}
.safety-h1 {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #f3f3f3;
  margin-top: 20px;
}
.safety-p {
  font-family: Poppins;
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  color: #f3f3f3;
}
#safety-p-grey {
  color: #c3c0d78f;
}
.fourth-container-bg {
  background: url(../assets/bg-about-product.png) no-repeat;
  background-size: 100% 2000px;
  padding-bottom: 10px;
  padding-left: 10%;
  padding-right: 10%;
}
.header-about-section {
  padding-top: 70px;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 250;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
  color: #f3f3f3;
}
.span-about-section {
  display: block;
  font-family: Poppins;
  font-size: 56px;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;
  color: #229aa1;
}
.about-section-line {
  width: 130px;
  border: 6px solid #f3f3f3;
  opacity: 10;
  margin: 0.5rem 0;
}
.buttons-sections {
  display: flex;
  margin: 70px 0 50px 0;
}

.buttons-sections > button:first-child {
  margin-left: 0;
  border: none;
  padding-left: 0;
}
.btn-section {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1.1920928955078125e-7px;
  text-align: left;
  background: none;
  border: 0;
  border-left: 4px solid #f3f3f3;
  padding-left: 20px;
  margin-left: 3%;
}
.h1-advantages,
.h1-principle {
  font-size: 24px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0px;
  margin-bottom: 70px;
}
.p-advantages,
.p-principle {
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.75px;
  text-align: left;
}
.div-carousel {
  position: relative;
  height: 100%;
  top: 3.5rem;
  left: 21.5%;
  text-align: left;
  background-color: #229aa1;
  border-radius: 5px;
}
.h3-carousel {
  padding: 3% 5% 0% 5%;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0.9999998807907104px;
}
.p-carousel {
  padding-left: 5%;
  padding-top: 3%;
  margin-right: 40px;
  padding-bottom: 3%;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.75px;
  text-align: left;
}
.questions-container {
  padding-top: 50px;
  background: no-repeat url(../assets/bg-skew.svg);
  background-color: #ffffff;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 20px;
}
.header-questions-container {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;
  color: #33475b;
}
.accordion {
  margin-top: 100px;
}
.accordion > * {
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.question-card {
  color: #2d3e50;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.11428570002317429px;
  text-align: center;
  --bs-btn-bg: none;
  --bs-btn-border-color: none;
  --bs-btn-active-color: #2d3e50;
  --bs-btn-hover-bg: none;
  --bs-btn-hover-color: #2d3e50;
  --bs-btn-active-bg: none;
  --bs-btn-active-border-color: none;
  --bs-btn-bg: none;
  --bs-btn-border-color: none;
  width: 100%;
  text-align: left;
}
.answer-card {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 275;
  line-height: 25px;
  letter-spacing: 0.11428570002317429px;
  text-align: left;
  color: #33475b;
}
.card-header {
  background-color: #ffffff;
  border-color: #f3f3f3;
  border-bottom: none;
}
.card-text {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 275;
  line-height: 25px;
  letter-spacing: 0.11428570002317429px;
  opacity: 75%;
  color: #33475b;
}
.sixth-container {
  background-color: #ffff;
  overflow: hidden;
  padding-top: 5%;
}
.map {
  position: absolute;
  height: 500px;
  width: auto;
  padding-left: 10%;
  padding-right: 10%;
}
.map-info {
  position: absolute;
  width: 45vw;
  z-index: 10;
  border-radius: 10px;
  border: 2px;
  background-color: #ffffff;
  border-color: #f3f3f3;
  box-shadow: 0px 18px 50px -15px #192a5933;
}
.map-info > p,
.map-info > div,
.map-info > h3 {
  padding: 2% 6% 0 6%;
}
.header-map-info {
  padding-top: 20px;
  font-family: Poppins;
  font-size: 32px;
  font-weight: 300;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
}
.map-info-line {
  margin-left: 6%;
}
.second-line {
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  width: 105px;
  border: 3px solid #229aa1;
  padding: 0;
  opacity: 10;
}
.p-map-info {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
  margin-bottom: 0px;
}
.left,
.right {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
}
.phone-and-time-container {
  display: flex;
  justify-content: space-between;
}
.href-map,
.href-map > a {
  display: block;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 0px;
  text-align: left;
  color: #229aa1;
}
.yandex-map {
  position: relative;
  display: block;
  z-index: 5;
  width: 100%;
  margin-top: 180px;
  margin-bottom: 30px;
  height: 30rem;
}
.btn-callback {
  display: block;
  background-color: #229aa1;
  border: 0;
  box-shadow: 0px 3.5894823074px 7.1789646149px 0px
    rgba(38, 50, 56, 0.0784313725);
  box-shadow: 0px 1.7947411537px 3.5894823074px 0px
    rgba(38, 50, 56, 0.1607843137);
  width: 180px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 10px;
}
#map-info-first-p {
  display: inline-block;
  padding-left: 0;
}
#attention-svg {
  margin-left: 1%;
  margin-right: 1%;
  padding: 0;
  width: 15px;
  position: relative;
  bottom: 1px;
  height: 15px;
}
.carousel {
  background: #13434c;
  padding-bottom: 30px;
}
@media (max-width: 1120px) {
  .div-svg {
    left: 45vw;
  }
}
@media (max-width: 1000px) {
  .advantages {
    font-size: 13px;
    line-height: 22px;
  }
  .h1-advantages,
  .h1-principle {
    font-size: 22px;
    line-height: 27px;
  }
  .p-advantages,
  .p-principle {
    font-size: 18px;
    line-height: 32px;
  }
  .promo-header {
    font-size: 70.86px;
    line-height: 70.01px;
  }
  .promo-title {
    font-size: 32.35px;
    line-height: 47.76px;
  }
  .about-company-header {
    line-height: 34px;
  }
  .about-company-title-year {
    line-height: 33px;
  }
  .about-company-title {
    font-size: 14px;
    line-height: 24px;
  }
  .reasons-header {
    font-size: 48px;
    line-height: 34px;
  }
  .resons-second-header {
    font-size: 36px;
    line-height: 34px;
  }
  .header-about-section {
    font-size: 24px;
    line-height: 25px;
  }
  .span-about-section {
    font-size: 42px;
    line-height: 25px;
    letter-spacing: 0.7069602012634277px;
  }
  .about-section-line {
    margin-top: 10px;
    width: 99px;
    border: 4px solid #f3f3f3;
  }
  .btn-section {
    font-size: 16px;
    line-height: 25px;
    letter-spacing: -8.42762304387179e-8px;
  }
  .header-questions-container {
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 0.8337751030921936px;
  }
  .header-map-info {
    font-size: 26px;
    line-height: 39px;
  }
  .map-info > .header-map-info {
    margin-bottom: 0px;
  }
  .second-line[data-v-469af010] {
    border: 3px solid #229aa1;
  }
  #attention-svg {
    width: 15px;
    height: 15px;
  }
  .p-map-info {
    font-size: 16px;
    font-weight: 300;
    line-height: 27px;
  }
  .h3-carousel {
    font-family: Poppins;
    font-size: 26px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.7069602012634277px;
    text-align: left;
  }
  .p-carousel {
    font-size: 16px;
    line-height: 23px;
    letter-spacing: 0.5302201509475708px;
  }
}
@media (max-width: 768px) {
  .fourth-container-bg {
    background-size: 100% 1300px;
  }
  .advantages {
    font-size: 13px;
    line-height: 22px;
  }
  .h1-advantages,
  .h1-principle {
    font-size: 20px;
    line-height: 27px;
  }
  .p-advantages,
  .p-principle {
    font-size: 16px;
    line-height: 32px;
  }
  .about-company-title {
    width: 100%;
  }
  .logo-container {
    position: static;
    width: fit-content;
    float: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 150px;
  }
  .reasons-header {
    font-size: 36px;
  }
  .resons-second-header {
    font-size: 28px;
  }
  .five-reasons-buttons {
    display: grid;
    grid-template-columns: repeat(3, minmax(160px, 3fr));
    grid-template-rows: repeat(2, 70px);
    grid-gap: 32px;
    text-align: left;
    margin-top: 55px;
  }
  .header-about-section {
    font-size: 20px;
    line-height: 22px;
  }
  .span-about-section {
    font-size: 33px;
    line-height: 22px;
    letter-spacing: 0.6126983761787415px;
  }
  .btn-section {
    font-size: 16px;
    line-height: 22.06px;
    letter-spacing: 0px;
  }
  .promo {
    margin-top: 15rem;
  }
  .promo-header {
    font-size: 52px;
    line-height: 51.38px;
  }
  .promo-title {
    font-size: 26px;
    line-height: 25.16px;
  }
  .button-read-more {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.25317463278770447px;
    margin-top: 8rem;
    position: relative;
    z-index: 20;
  }
  .map-info {
    width: 65vw;
  }
  .reason-content {
    position: static;
    width: 100%;
    margin-top: 50px;
  }
  .safety-h1 {
    font-size: 22px;
    line-height: 20px;
  }
  .h3-carousel {
    font-size: 20px;
    line-height: 21px;
    letter-spacing: 0.6126983761787415px;
  }
  .p-carousel {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.4595238268375397px;
  }
}
@media (max-width: 700px) {
  .five-reasons-buttons {
    grid-template-columns: repeat(2, 190px);
    grid-template-rows: repeat(3, 40px);
  }
}
.five-reasons-buttons > li > button {
  width: 100%;
}
@media (max-width: 580px) {
  .fourth-container-bg {
    background-size: 100% 900px;
  }
  .promo-header {
    font-size: 36px;
    line-height: 36px;
  }
  .promo-title {
    font-size: 18px;
    line-height: 27px;
  }
  .div-svg {
    left: 33.5vw;
  }
  .button-read-more {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.25317463278770447px;
  }
  .map {
    position: relative;
    height: 300px;
  }
  .map-info {
    width: 80%;
  }
  .yandex-map {
    margin-top: 0px;
    height: 250px;
  }
  .h3-carousel {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.6126983761787415px;
  }
  .p-carousel {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.4595238268375397px;
  }
}
@media (max-width: 480px) {
  .advantages-div {
    grid-template-columns: repeat(2, 41vw);
    grid-template-rows: repeat(2, 60px);
    padding-bottom: 110px;
  }
  .h1-advantages,
  .h1-principle {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 35px;
  }
  .p-advantages,
  .p-principle {
    font-size: 14px;
    line-height: 26px;
  }
  .five-reasons-buttons > li {
    font-size: 13px;
    line-height: 34px;
    letter-spacing: -1.123099835353969e-7px;
  }
  .five-reasons-buttons {
    width: 260px;
    height: 165px;
    grid-template-columns: repeat(3, 145px);
    grid-template-rows: repeat(3, 40px);
    grid-gap: 0px;
    margin-top: 25px;
  }
  .button-read-more {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.25317463278770447px;
    margin-top: 4rem;
  }
  .reasons-header {
    font-size: 26px;
  }
  .resons-second-header {
    font-size: 18px;
  }
  .header-about-section {
    font-size: 18px;
  }
  .span-about-section {
    font-size: 26px;
  }
  .about-section-line {
    width: 99px;
    border: 3px solid #f3f3f3;
  }
  .btn-section {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -7.303934523861244e-8px;
    text-align: left;
  }
  .header-map-info {
    font-size: 20px;
    line-height: 30px;
  }
  .p-map-info {
    font-size: 14px;
  }
  .href-map,
  .href-map > a {
    font-size: 14px;
  }
  .h3-carousel {
    font-size: 13px;
    line-height: 10px;
    letter-spacing: 0.6126983762px;
  }
  .p-carousel {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 0.4595238268px;
    margin-right: 20px;
    padding-top: 0%;
  }
  #attention-svg {
    width: 12px;
  }
}
@media (max-width: 479px) {
  .five-reasons-buttons {
    grid-template-columns: repeat(2, 150px);
  }
}
@media (max-width: 444px) {
  .div-svg {
    left: 30vw;
    height: 80%;
  }
  .button-read-more {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.25317463278770447px;
    width: 127.03px;
    height: 29.14px;
    border-radius: 4.24px;
    font-size: 10px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.18909329175949097px;
  }
  .span-icon {
    padding-top: 3px;
  }
  .btn-section {
    font-size: 10px;
    padding-left: 9px;
  }
  .safety-p {
    font-size: 14px;
  }
  .div-carousel {
    width: 100%;
  }
}
@media (max-width: 400px) {
  .fourth-container-bg {
    background-size: 100% 700px;
  }
  .map {
    height: 290px;
  }
  .safety-h1 {
    font-size: 18px;
  }
  .safety-p {
    font-size: 12px;
  }
  .h3-carousel {
    font-size: 10px;
    margin-bottom: 5px;
  }
  .p-carousel {
    font-size: 8px;
    line-height: 10px;
    margin-right: 0;
  }
}
@media (max-width: 370px) {
  .div-svg {
    left: 23vw;
  }
  .five-reasons-buttons {
    grid-template-columns: repeat(2, 140px);
  }
  .h1-advantages,
  .h1-principle {
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 30px;
  }
  .p-advantages,
  .p-principle {
    font-size: 12px;
    line-height: 26px;
  }
  .span-about-section {
    font-size: 23px;
    font-weight: 250;
    line-height: 22px;
  }
}
@media (max-width: 320px) {
  .buttons-sections {
    margin: 0 0 30px 0;
    flex-direction: column;
  }
  .btn-section {
    border-left: 0;
    padding-left: 0;
    margin-left: 0;
    margin-top: 10px;
    width: fit-content;
  }
  .btn-section:focus {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 800;
    line-height: 22px;
    letter-spacing: -7.303934523861244e-8px;
    text-align: left;
  }
  .header-questions-container {
    font-size: 18px;
  }
  .accordion[data-v-469af010] {
    margin-top: 30px;
  }
  .header-map-info {
    font-size: 18px;
    line-height: 27px;
  }
  .second-line {
    width: 105px;
    border: 2px solid #229aa1;
  }
  .p-map-info {
    font-size: 12px;
  }
  .href-map,
  .href-map > a {
    font-size: 12px;
  }
  #attention-svg {
    position: relative;
    top: 1px;
    width: 13px;
    height: 10px;
  }
}
</style>
