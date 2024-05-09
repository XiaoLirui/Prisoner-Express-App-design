<script setup>
import NavBar from '../components/NavBar.vue';
import { ref, getCurrentInstance } from 'vue';
import PDFViewer from '../components/PDFViewer.vue';
import TopBar from '../components/TopBar.vue';
import PDFInfo from '@/components/PDFInfo.vue';

// Access global properties
const globalProperties = getCurrentInstance().appContext.config.globalProperties;
const fixtures = globalProperties.fixtures;

const news = ref([
  fixtures["newsletter-winter24"],
  fixtures["newsletter-summer24"],
  fixtures["newsletter-winter23"],
  fixtures["newsletter-summer23"],
  fixtures["newsletter-winter22"],
  fixtures["newsletter-summer22"],
]);

const programs = ref([
  fixtures["program-appdesign"],
  fixtures["program-chess"],
  fixtures["program-art"],
  fixtures["program-med"]
]);

const poetrys = ref([
  fixtures["poetry-28"],
  fixtures["poetry-27"],
  fixtures["poetry-26"]
]);

const journals = ref([
  fixtures["journal-michael"],
  fixtures["journal-joshua"],
  fixtures["journal-mark"],
  fixtures["journal-kyle"],
  fixtures["journal-james"],
]);

const arts = ref([
  fixtures["art-sean"],
  fixtures["art-charles"],
  fixtures["art-david"],
  fixtures["art-tim"],
  fixtures["art-brian"],
  fixtures["art-anthony"],
]);


const showPdfModal = ref(false);
const showPdfInfo = ref(false);
const currentItem = ref('');

const openPdf = (item) => {
  currentItem.value = item;
  showPdfModal.value = true;
  showPdfInfo.value = true;
};

const closePdf = () => {
  showPdfModal.value = false;
};

const closePdfInfo = () => {
  showPdfInfo.value = false;
};
</script>

<template>
<TopBar />

<b-container fluid class="pt-5 pb-5 mb-3">
<div>
<b-row class="m-3 mt-4" style="font-weight: bold; font-size: 1.25em; color: #2C3E50;">
    Hello, Jack!
</b-row>
<b-row class="m-3" style="font-size: 1em; color: #7F8C8D;">
  Every six months a new update of Prisoner Express App is made and sent free of charge to men and women incarcerated throughout the United States.
</b-row>
<b-row class="m-3 mt-4" style="font-weight: bold;">
    Newsletter
    <b-col class="text-end" style="font-size: 0.75em;">
        <b-button style="font-size: 1em; background-image: linear-gradient(to right, #FD6340 , #FE8537); border: none;" :to="{ name: 'Detail' }">See All</b-button>
    </b-col>
</b-row>

<b-row class="m-3" style="display: flex; flex-wrap: nowrap; overflow-x: auto;">
    <b-col cols="4" class="position-relative p-0" v-for="(item, index) in news" :key="index" style="width: 12rem; height: 12rem;">
    <b-button @click="openPdf(item)" class="w-100 h-100" style="background-color: transparent; border-color: transparent;">
      <b-img thumbnail rounded style="object-fit: cover; width: 100%; height: 90%;" :src="`${baseDir}${item.img}`"></b-img>
      <figcaption class="text-center" style="font-size: 0.75em; color: black;">{{ item.name }}
      </figcaption>
    </b-button>
    </b-col>
</b-row>

<b-row class="m-3 mt-5" style="font-weight: bold;">
    Current Programs
    <b-col class="text-end" style="font-size: 0.75em;">
        <b-button style="font-size: 1em; background-image: linear-gradient(to right, #FD6340 , #FE8537); border: none;" :to="{ name: 'ProgramView' }">See All</b-button>
    </b-col>
</b-row>

<b-row class="m-3" style="display: flex; flex-wrap: nowrap; overflow-x: auto;">
    <b-col cols="4" class="position-relative p-0" v-for="item in programs" :key="item.text"
    style="width: 12rem; height: 12rem;">
    <b-button @click="openPdf(item)" class="w-100 h-100" style="background-color: transparent; border-color: transparent;">
      <b-img thumbnail rounded style="object-fit: cover; width: 100%; height: 90%;" :src="`${baseDir}${item.img}`"></b-img>
      <figcaption class="text-center" style="font-size: 0.75em; color: black;">{{ item.name }}
      </figcaption>
    </b-button>
    </b-col>
</b-row>

<b-row class="m-3 mt-5" style="font-weight: bold;">
    Poetry
    <b-col class="text-end" style="font-size: 0.75em;">
        <b-button style="font-size: 1em; background-image: linear-gradient(to right, #FD6340 , #FE8537); border: none;" :to="{ name: 'PoetryView' }">See All</b-button>
    </b-col>
</b-row>

<b-row class="m-3" style="display: flex; flex-wrap: nowrap; overflow-x: auto;">
    <b-col cols="4" class="position-relative p-0" v-for="(item, index) in poetrys" :key="index" style="width: 12rem; height: 12rem;">
    <b-button @click="openPdf(item)" class="w-100 h-100" style="background-color: transparent; border-color: transparent;">
      <b-img thumbnail rounded style="object-fit: cover; width: 100%; height: 90%;" :src="`${baseDir}${item.img}`"></b-img>
      <figcaption class="text-center" style="font-size: 0.75em; color: black;">{{ item.name }}
      </figcaption>
    </b-button>
    </b-col>
</b-row>

<b-row class="m-3 mt-5" style="font-weight: bold;">
    Journals
    <b-col class="text-end" style="font-size: 0.75em;">
        <b-button style="font-size: 1em; background-image: linear-gradient(to right, #FD6340 , #FE8537); border: none;" :to="{ name: 'JournalView' }">See All</b-button>
    </b-col>
</b-row>

<b-row class="m-3" style="display: flex; flex-wrap: nowrap; overflow-x: auto;">
    <b-col cols="4" class="position-relative p-0" v-for="(item, index) in journals" :key="index"
    style="width: 12rem; height: 12rem;">
    <b-button @click="openPdf(item)" class="w-100 h-100" style="background-color: transparent; border-color: transparent;">
      <b-img thumbnail rounded style="object-fit: cover; width: 100%; height: 90%;" :src="`${baseDir}${item.img}`"></b-img>
      <figcaption class="text-center" style="font-size: 0.75em; color: black;">{{ item.author }}
      </figcaption>
    </b-button>
    </b-col>
</b-row>

<b-row class="m-3 mt-5" style="font-weight: bold;">
    Arts
    <b-col class="text-end" style="font-size: 0.75em;">
        <b-button style="font-size: 1em; background-image: linear-gradient(to right, #FD6340 , #FE8537); border: none;" :to="{ name: 'ArtView' }">See All</b-button>
    </b-col>
</b-row>

<b-row class="m-3" style="display: flex; flex-wrap: nowrap; overflow-x: auto;">
    <b-col cols="4" class="position-relative p-0" v-for="(item, index) in arts" :key="index"
    style="width: 12rem; height: 12rem;">
    <b-button @click="openPdf(item)" class="w-100 h-100" style="background-color: transparent; border-color: transparent;">
      <b-img thumbnail rounded style="object-fit: cover; width: 100%; height: 90%;" :src="`${baseDir}${item.img}`" v-b-modal.image-modal></b-img>
      <figcaption class="text-center" style="font-size: 0.75em; color: black;">{{ item.name }}
      </figcaption>
    </b-button>
    </b-col>
</b-row>
    <div v-if="showPdfModal" class="pdfcontainer">
      <!-- Info Button -->
      <BButton v-if="!showPdfInfo" variant="secondary" class="info-button" @click="showPdfInfo = true" >
      i
    </BButton>
            <!-- Close Button -->
    <BButton variant="danger" @click="closePdf" class="close-button">
      Close
    </BButton>
      <PDFViewer :pdfUrl="`${baseDir}${currentItem.pdf}`" />
        <PDFInfo :name="currentItem.name"
        :item="currentItem" :author="currentItem.author" :date="currentItem.date" :about="currentItem.about" :mail="currentItem.mail"/>
</div>
</div>

</b-container>

<NavBar :homeImage="'image_home/home_icon_white.png'" />
</template>

<style>

.pdfcontainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.info-button {
  position: absolute;
  top: 20px;
  left:70px;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 70px;
  color: white;
  background-color: #dc3545;

  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.pdf-footer {
  width: 100%;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.85;
}

.bg-dark {
  background-color: #343a40;
}

.text-white {
  color: #fff;
}

.close-footer-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
}

</style>
