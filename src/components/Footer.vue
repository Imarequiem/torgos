<template>
  <div class="footer">
    <div class="footer-div">
      <section class="first-footer">
        <div class="follow-us">
          <div class="info">
            <h1 class="info-header">ИНФОРМАЦИЯ</h1>
            <ul class="info-list">
              <li class="info-item">
                <a href="https://torgos-vent.ru/" class="info-a"
                  >Наш основной сайт</a
                >
              </li>
              <li class="info-item"><a href="" class="info-a">Новинки</a></li>
              <li class="info-item">
                <a href="http://localhost:8080/policy" class="info-a"
                  >Политика</a
                >
              </li>
              <li class="info-item">
                <a href="http://localhost:8080/rules" class="info-a"
                  >Правила пользования</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="second-footer">
        <div class="write-to-us">
          <div class="section-info-form">
            <p class="p-write-to-us">НАПИШИТЕ НАМ</p>
            <h2 class="header-write-to-us">info@torgos-vent.ru</h2>
            <p class="p-write-to-us" id="callback">
              ОСТАВЬТЕ СВОЙ НОМЕР И МЫ СВЯЖЕМСЯ С ВАМИ В ТЕЧЕНИИ 10 МИНУТ
            </p>
          </div>
          <section class="section-form">
            <form class="form" @submit.prevent="click">
              <div class="div-form">
                <div class="div-name-and-num">
                  <label for="" class="label-name">
                    <b-form-input
                      placeholder="Имя"
                      type="text"
                      class="name"
                      v-model="callback.name"
                      required
                    ></b-form-input>
                  </label>
                  <label for="" class="label-phone">
                    <b-form-input
                      placeholder="Телефон"
                      type="number"
                      class="num"
                      v-model="callback.number"
                      required
                    ></b-form-input>
                  </label>
                </div>
                <label for="" class="label-message">
                  <b-form-textarea
                    id="textarea"
                    class="message"
                    v-model="callback.comment"
                    placeholder="Напишите ваше сообщение"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </label>
                <div class="div-rules">
                  <span class="span-checkbox"></span>
                  <b-form-checkbox
                    id="checkbox-1"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                    required
                  >
                  </b-form-checkbox>
                  <span class="personal-data">
                    Даю согласие на обработку
                    <a href="" class="rules">персональных данных</a>
                  </span>
                </div>
                <input type="submit" value="ОТПРАВИТЬ" class="submit-button" />
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      callback: {
        name: "",
        number: "",
        comment: "",
      },
    };
  },
  methods: {
    click() {
      if (this.callback.number < 6) return;
      this.callback.name = "";
      this.callback.number = "";
      this.callback.comment = "";
    },
  },
  computed: {
    nameState() {
      return this.name > 2 ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-div {
  display: flex;
}
.first-footer {
  background-color: #229aa1;
  min-height: 100%;
  width: 50vw;
  height: 520px;
}
.follow-us {
  color: #f3f3f3;
  font-family: Poppins;
  height: 100%;
  margin: 0 10%;
  padding: 40px 0;
}
.info {
  margin-top: 80px;
  width: 100%;
  height: 30%;
}
.info-header {
  margin-top: 20px;
  margin-bottom: 30px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
}
.info-list {
  list-style: none;
  grid-template-columns: auto;
}
.info-item {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.22434264421463013px;
  text-align: left;
  transition: 1s;
}
.info-item:hover {
  box-shadow: 1px 1px #229aa1, 2px 2px #229aa1, 3px 3px #229aa1, 4px 4px #229aa1,
    5px 5px #229aa1, 6px 6px #229aa1, 7px 7px #229aa1;
  -webkit-transform: translateY(-7px);
  transform: translateY(-7px);
}
ul {
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-auto-rows: minmax(50px, auto);
  padding-left: 0%;
}
li {
  text-align: left;
}
#svg-icons-inst {
  padding-bottom: 10px;
}
#svg-icons-vk {
  padding-bottom: 3px;
  padding-right: 1px;
  width: 25px;
  position: relative;
  bottom: 2px;
}
.info-a {
  color: #f3f3f3;
  text-decoration: none;
}

.rules {
  color: #229aa1;
  text-decoration: none;
}
.header-write-to-us {
  font-weight: 700;
  size: 32px;
  color: #229aa1;
  margin-bottom: 40px;
}
.p-write-to-us {
  color: #adadad;
}
.write-to-us {
  margin-left: 20px;
  margin-top: 30px;
}
.second-footer {
  background-color: #ffffff;
  width: 100%;
}
.div-form {
  width: 100%;
}
.div-name-and-num {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  width: 45vw;
}
.name,
.num {
  width: 20vw;
}
.name,
.num,
.message {
  background-color: #e4e4e490;
  padding-right: 40px;
}
.label-name,
.label-phone,
.label-message {
  position: relative;
}
.message {
  height: 70px;
  width: 45vw;
}
.label-name:before,
.label-phone:before {
  content: "";
  position: absolute;
  left: 78%;
  top: 0;
  bottom: 0;
  width: 20px;
  margin-left: 10%;
}
.label-name:before {
  background: url(../assets/person.svg) center / contain no-repeat;
}
.label-phone:before {
  background: url(../assets/phone.svg) center / contain no-repeat;
}
.label-message:before {
  content: "";
  position: absolute;
  left: 94%;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url(../assets/message.svg) center / contain no-repeat;
}
.personal-data {
  margin-left: 10px;
}
.submit-button {
  position: relative;
  background-color: #229aa1;
  border: 0;
  box-shadow: 0px 3.589482307434082px 7.178964614868164px 0px #26323814;
  box-shadow: 0px 1.794741153717041px 3.589482307434082px 0px #26323829;
  width: 149.55px;
  height: 49.79px;
  top: 50px;
  left: 420px;
  border-radius: 10px;
}
.submit-button:hover {
  background-color: #13d4de;
}
.submit-button:active {
  background-color: #0b4d50;
}
.submit-button[value="ОТПРАВИТЬ"] {
  color: #f3f3f3;
}
.div-rules {
  margin-top: 15px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.span-checkbox {
  display: inline-block;
  position: relative;
  width: 15px;
  height: 15px;
  top: 25px;
}

@media (max-width: 1600px), (min-width: 1600px) {
  .submit-button {
    left: 40%;
  }
}
@media (max-width: 1400px) {
  .label-name::before,
  .label-phone::before {
    left: 75%;
  }
}
@media (max-width: 1100px) {
  .info-list {
    grid-template-columns: auto;
  }
  .first-footer {
    height: 620px;
  }
  /*
  .div-name-and-num {
    flex-direction: column;
  }

  .num,
  .label-phone::before {
    margin-top: 10px;
  }
  .label-name::before,
  .label-phone::before {
    left: 75%;
  }
  */
  .label-name::before,
  .label-phone::before {
    left: 70%;
  }
  .label-message::before {
    left: 92%;
  }
}
@media (max-width: 768px) {
  .first-footer {
    width: 65vw;
  }
  .message,
  .div-name-and-num {
    width: 55vw;
  }
  .name,
  .num {
    width: 25vw;
  }
}
@media (max-width: 623px) {
  .label-name::before,
  .label-phone::before {
    left: 67%;
  }
  .label-message::before {
    left: 90%;
  }
}
@media (max-width: 480px) {
  .write-to-us {
    margin-left: 30px;
  }
  .footer-div {
    flex-direction: column-reverse;
  }
  .header-write-to-us {
    margin-bottom: 10px;
  }
  .submit-button {
    left: 35%;
    top: 60%;
    margin-bottom: 40px;
  }
  .div-rules {
    margin-bottom: 30px;
  }
  .info-list {
    grid-template-columns: 250px;
  }
  .follow-us {
    margin: 0 0 0 10%;
    width: 50%;
  }
  .first-footer {
    height: 400px;
    width: 100%;
  }
  .info {
    margin-top: 30px;
  }
  .div-name-and-num {
    flex-direction: column;
  }
  .name,
  .num {
    width: 85vw;
  }
  .num {
    margin-top: 20px;
  }
  .label-name::before,
  .label-phone::before {
    left: 128%;
  }
  .label-phone::before {
    margin-top: 20px;
  }
  .message {
    width: 85vw;
  }
  //
}
@media (max-width: 320px) {
  .num {
    margin-top: 20px;
    margin-left: 0px;
  }
  .div-rules {
    display: inline-block;
    width: 280px;
  }
  .info {
    width: 230px;
  }
}
.custom-control {
  height: 0px;
  width: 0px;
  display: inline-block;
  position: relative;
  float: left;
}
</style>
