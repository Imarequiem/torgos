<template>
  <div class="catalog">
    <div class="header-div">
      <h1 class="header">Каталог</h1>
      <hr class="header-line" />
    </div>
    <div class="catalog-content">
      <div class="filter">
        <div class="filter-card">
          <div class="header-filter">
            <b-button
              v-b-toggle.collapse-3
              class="m-1"
              id="filter-accordion"
              @click="(showFilter = !showFilter), filterArrow()"
            >
              <img src="../assets/arrow.svg" id="arrow" />
              <h1 class="filter-header">ЦЕНА</h1>
            </b-button>
            <div class="filter-inputs">
              <input type="number" class="from" placeholder="От" /><input
                type="number"
                class="to"
                placeholder="До"
              />
            </div>
          </div>
          <b-collapse visible id="collapse-3">
            <b-card id="content-text">
              <h1 class="filter-text-header">ОБОРУДОВАНИЕ</h1>
              <input
                name="cssCheckbox"
                id="demo_opt_1"
                type="checkbox"
                class="css-checkbox"
              />
              <label for="demo_opt_1"></label>
              <p class="label-checkbox-text">Микрон</p>
            </b-card>
          </b-collapse>
        </div>
      </div>
      <div class="micron-accordion">
        <b-button
          :class="visible ? null : 'collapsed'"
          :aria-expanded="visible ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click="(visible = !visible), changeArrow()"
        >
          Микрон
          <img src="../assets/arrow-micron.svg" id="arrow-micron" />
        </b-button>
        <b-collapse id="collapse-4" v-model="visible" class="mt-2">
          <b-card
            >Предназначен для обеззараживания воздуха UV-C излучением.
            Обеззараживание воздушного потока происходит в процессе его
            принудительной циркуляции через корпус, внутри которого размещена
            бактерицидная ультрафиолетовая лампа низкого давления.</b-card
          >
          <div class="products-container">
            <div
              class="product-card"
              v-for="product in allProducts"
              :key="product.id"
            >
              <div class="img-products-container">
                <img src="../assets/Micron.jpg" class="product-images" />
              </div>
              <div class="text-content">
                <h3 class="name">{{ product.brand }}</h3>
                <p>{{ product.title }}</p>
                <p class="description">{{ product.description }}</p>
                <p class="price">{{ product.price }} ₽</p>
                <p><a href="" class="read-more">Подробнее</a></p>
                <button class="order-button">Заказать</button>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CatalogMicron",
  data: () => {
    return {
      products: [],
      visible: true,
      showFilter: true,
      value: [],
      options: [
        { text: "First Check", value: "first" },
        { text: "Second Check", value: "second" },
        { text: "Third Check", value: "third" },
      ],
      arrow: 0,
    };
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["fetchProducts"]),
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    changeArrow() {
      const res = window["arrow-micron"];
      if (this.visible === true) {
        res.style.transform = "rotate(0deg)";
        return;
      }
      res.style.transform = "rotate(180deg)";
    },
    filterArrow() {
      const res = window["arrow"];
      if (this.showFilter === true) {
        res.style.transform = "rotate(0deg)";
        return;
      }
      res.style.transform = "rotate(180deg)";
    },
  },
  async mounted() {
    this.fetchProducts();
  },
};
</script>
<style lang="scss" scoped>
p {
  margin-bottom: 0;
}
#arrow-micron {
  float: right;
  position: relative;
  top: 22px;
  right: 10px;
  transition: all 0.3s ease;
}
.header-filter {
  height: 90px;
  background: #ffffff;
  border: none;
  margin: 0 !important;
  border-style: solid;
  border-color: #f3f3f3;
}
.label-checkbox-text {
  display: inline-block;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  color: #33475b;
  margin-left: 5%;
}
.css-checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}
#inputPreview {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.css-checkbox + label {
  position: relative;
  top: 2px;
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  height: 22px;
  color: rgb(0, 0, 0);
}
.css-checkbox + label::before {
  content: " ";
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #229aa1;
  border-radius: 2px;
  box-shadow: none;
  opacity: 10;
}
.css-checkbox:checked + label::after {
  content: " ";
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+");
  background-repeat: no-repeat;
  background-size: 10px 10px;
  background-position: center center;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
  left: 0px;
  top: 3px;
  text-align: center;
  background-color: #008e97;
  font-size: 10px;
  height: 15px;
  width: 15px;
}
.filter-text-header {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 1px;
  text-align: center;
  color: black;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
h1,
p {
  color: black;
}
.catalog {
  padding-top: 100px;
  margin-left: 10%;
  margin-right: 10%;
  min-height: 80vh;
}
.header-div {
  margin-top: 30px;
  margin-bottom: 100px;
}
.header {
  font-family: Poppins;
  font-size: 32px;
  font-weight: 800;
  line-height: 36px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;
  color: #33475b;
  margin: 0;
}
.header-line {
  width: 74px;
  top: 233px;
  left: 195px;
  border: 3px solid #229aa1;
  opacity: 10;
  margin: 0;
}
.catalog-content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-end;
}
.filter {
  position: absolute;
  width: 266px;
  height: 315px;
  border-radius: 10px;
}
.filter-card {
  box-shadow: 0px 4px 7px 0px #0000001a;
}
#filter-accordion {
  height: 50px;
  background: #ffffff;
  border: none;
  margin: 0 !important;
  border-style: none;
}
#arrow {
  margin-left: 15px;
  transition: all 0.3s ease;
}
.filter-header {
  display: inline-block;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 1px;
  color: #2d3e50;
  margin-left: 10px;
}
.filter-inputs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.filter-inputs::placeholder {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.11428570002317429px;
  text-align: center;
}
.from {
  margin-left: 15px;
}
.to {
  margin-right: 15px;
}
.from,
.to {
  display: block;
  height: 30px;
  width: 90px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.11428570002317429px;
  border: 2px solid #f3f3f3;
  padding: 10px;
}
.from::placeholder,
.to::placeholder {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.11428570002317429px;
  color: #c4c4c4;
}
#content-text {
  background: #ffffff;
}
.products-container {
  display: grid;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  margin-bottom: 100px;
  margin-top: 30px;
}
.product-card {
  width: 275px;
  box-shadow: 0px 4px 7px 0px #0000001a;
  border-radius: 10px;
}
.product-card > text-content > h1,
p {
  margin-left: 10%;
  margin-right: 10%;
}
h3 {
  margin-left: 10%;
  margin-right: 10%;
}
.order-button {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.img-products-container {
}
.product-images {
  display: block;
  margin: 20px auto 0 auto;
  height: 50%;
  width: 50%;
}
.mt-2 {
  margin-top: 0 !important;
}
.read-more {
  color: #229aa1;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 275;
  line-height: 18px;
  letter-spacing: 0.11428570002317429px;
  text-align: left;
}
.order-button {
  width: 192px;
  height: 44px;
  border-radius: 10px;
  border: none;
  background: #229aa1;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -1.1920928955078125e-7px;
  text-align: center;
  color: #f3f3f3;
}
.btn-secondary {
  width: 100%;
  height: 50px;
  padding: 0;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  border-radius: 0;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;

  --bs-btn-color: #f3f3f3;
  --bs-btn-bg: #229aa1;
  --bs-btn-border-color: #229aa1;
  --bs-btn-hover-color: #f3f3f3;
  --bs-btn-hover-bg: #229aa1;
  --bs-btn-hover-border-color: #229aa1;
  --bs-btn-focus-shadow-rgb: 130, 138, 145;
  --bs-btn-active-color: #f3f3f3;
  --bs-btn-active-bg: #229aa1;
  --bs-btn-active-border-color: #229aa1;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #f3f3f3;
  --bs-btn-disabled-bg: #229aa1;
  --bs-btn-disabled-border-color: #229aa1;
}
.btn-secondary:focus-within > img {
}
.card {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  border-radius: 0;
  border: none;
  background: #e9f5f6;
  color: #303234;
  opacity: 70%;
}
.name {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -1.1920928955078125e-7px;
  color: #33475b;
}
.description {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.11428570002317429px;
  color: #33475b;
  opacity: 70%;
}
.price {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -1.1920928955078125e-7px;
  color: #33475b;
}
.micron-accordion {
  width: 680px;
}
</style>
