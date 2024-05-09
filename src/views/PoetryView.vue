<script setup>
import { ref, getCurrentInstance} from 'vue'
import NumberPicker from '../components/NumberPicker.vue';
import BackButton from '../components/BackButton.vue';
import AddSave from '../components/AddSave.vue';
import NavBar from '../components/NavBar.vue';
import PDFViewer from '../components/PDFViewer.vue';
import TopBar from '../components/TopBar.vue';
import PDFInfo from '@/components/PDFInfo.vue';

// Access global properties
const globalProperties = getCurrentInstance().appContext.config.globalProperties;
const fixtures = globalProperties.fixtures;

const allPoetryItems = ref([
  fixtures["poetry-28"],
  fixtures["poetry-27"],
  fixtures["poetry-26"]
]);

console.log(allPoetryItems.value[0].name);
const poetryItems = ref([...allPoetryItems.value]);

function updatePoem(selectedItem) {
    console.log("Received in updatePoem:", selectedItem);
    const item = allPoetryItems.value.find(item => item.name === selectedItem.name);
        if (item) {
            poetryItems.value = [item];
        } else {
          poetryItems.value = [
          fixtures["poetry-28"],
          fixtures["poetry-27"],
          fixtures["poetry-26"]
        ];
        }
    }

const showPdfModal = ref(false);
const currentItem = ref('');

const openPdf = (item) => {
  currentItem.value = item;
  showPdfModal.value = true;
};

const closePdf = () => {
  showPdfModal.value = false;
};
</script>

<template>
<TopBar />
  <div class="container pt-5 pb-5">
    <div class="topBox">
      <!-- logo -->
      <!-- <img src="/public/Logo.png" alt="logo" class="logo"> -->
      <!-- <div class="backnmail"> -->
      <BackButton />
      <!-- <img src="/public/email.png" alt="logo" class="mail">
      </div>
      <img src="/public/help.png" alt="help" class="help"> -->
    </div>
    <!-- Text -->
    <div class="header">
      <div class="title">Poetry By Prisoners</div>
      <div class="quote">Read a poignant poem.</div>
      <div class="instruction">
        For the past 15 years, Prisoner Express has been creating anthologies of poetry submitted by prisoners. We printed a select number for the paper copy of the Anthologies. Please consider reading a poem and mailing us yours.

      </div>
    </div>
    <!-- Poem Selecter -->
    <NumberPicker v-on:poemUpdated="updatePoem"/>

    <!-- Render poetry items -->
    <div>
    <div class="poetry-item" v-for="(item, key) in poetryItems" :key="key">
      <b-card
        tag="article"
        class="mx-auto shadow-sm card-custom"
        no-body
      >
        <b-card-img
          :src="`${baseDir}${item.img}`"
          alt="Image"
          left
          class="flex-shrink-0"
          style="width: 300px; height: auto; margin-right: 30px"
        ></b-card-img>
        <b-card-body style= "margin-right: 30px" >
          <AddSave :item="item"/>
          <b-card-title class="item-title">{{ item.name }}</b-card-title>
          <b-card-text class="item-description">
            {{item.about}}
          </b-card-text>
          <b-button style="font-size: 1em; width: 120px; background-image: linear-gradient(to right, #FD6340 , #FE8537); border: none; col-10" @click="openPdf(item)">Read</b-button>
        </b-card-body>
      </b-card>
    </div>
    <div v-if="showPdfModal" class="pdfcontainer">
            <!-- Close Button -->
    <BButton variant="danger" @click="closePdf" class="close-button">
      Close
    </BButton>
      <PDFViewer :pdfUrl="`${baseDir}${currentItem.pdf}`" />
      <PDFInfo :name="currentItem.name" :item="currentItem" :author="currentItem.author" :date="currentItem.date" :about="currentItem.about" :mail="currentItem.mail"/>
    </div>
</div>
  </div>

  <NavBar />
</template>

<style scoped>
.item-title {
  font-size: 24px;
  font-weight: bold;
  color: #4981bc;
  margin-bottom: 5px;
}

.item-description {
  font-size: 16px;
  color: #333;
  text-align: justify;
  line-height: 1.5;
}

.container {
  width: 100%;
  margin: 0 auto;
}
.mail, .help{
    height: 50px;
    width: 50px;
    margin-left: 50px;
}

.card-custom {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: row;
}

.topBox{
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  gap: 20px;
}
.logo{
    position: absolute;
    left: 45%;
    max-width: 250px;
    height: auto;
}


.img{
  max-width: 300px;
  height: auto;
}

.poetry-item {
  margin-bottom: 30px;
}

@media (max-width: 600px) {
  .logo {
    display: none;
  }
  .card-custom {
    flex-direction: column;
    align-items: center;
  }

  .card-custom .b-card-img {
    width: 100%;
    height: auto;
    margin-right: 0;
  }

  .card-custom .b-card-body {
    width: 100%;
    margin-right: 0;
  }

  .card-custom .b-button {
    width: 100%;
  }
}

</style>
