<script setup>
import { BButton, BCol } from 'bootstrap-vue-next';
import { ref,getCurrentInstance } from 'vue';
import NavBar from '../components/NavBar.vue';
import AddSave from '../components/AddSave.vue';
import PDFViewer from '@/components/PDFViewer.vue';
import TopBar from '../components/TopBar.vue';
import PDFInfo from '@/components/PDFInfo.vue';

// Access global properties
const globalProperties = getCurrentInstance().appContext.config.globalProperties;
const fixtures = globalProperties.fixtures;

const items = [
  { text: 'Newsletter',imageUrl: 'img/Newsletters.png' },
  { text: 'Journal',imageUrl: 'img/journal.png'},
  { text: 'Poetry', imageUrl: 'img/Poetry.png'},
  { text: 'Artwork',imageUrl: 'img/art.jpg' },
  { text: 'Programs',imageUrl: 'img/program.jpg' }
];

const searchText = ref('');
const filteredItems = ref(items);
const appDesign = ref([
  fixtures["program-appdesign"]
]);

const search = (e) => {
  e.preventDefault();
  if (searchText.value.trim() === '') {
    filteredItems.value = items;
  } else {
    filteredItems.value = appDesign;
  }
};

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
  <div class="container-fluid pt-5 pb-5">
    <div class="mt-3 mb-5">
      <b-row class="m-3 mt-4" style="font-weight: bold; font-size: 1.25em; color: #2C3E50;">Search and Explore</b-row>
      <form class="w-100" @submit="search">
        <div class="input-group mb-3">
          <input v-model="searchText" class="form-control me-2" type="search" placeholder="Type here to search for more..." aria-label="Search">
          <b-button style="font-size: 1em; background-image: linear-gradient(to right, #FD6340 , #FE8537); border: none;" type="submit">Search</b-button>
        </div>
      </form>

  <BRow v-if="filteredItems.value == appDesign">
    <div v-for="(item, key) in appDesign" :key="key">
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
      <PDFViewer :pdfUrl="`${baseDir}${currentItem.pdf}`"/>
      <PDFInfo :name="currentItem.name"
        :item="currentItem" :author="currentItem.author" :date="currentItem.date" :about="currentItem.about" :mail="currentItem.mail"/>
    </div>

  </BRow>

  <BRow v-else>
    <BCol
      v-for="(item, index) in filteredItems"
      :key="index"
      :cols="index < 4 ? '6' : '12'"
      class="mb-3">
      <BCard class="w-100 text-center" >
        <b-container>
          <b-row>
            <b-col>
        <img :src="`${baseDir}${item.imageUrl}`" :alt="item.text" style="height: 10rem; width: auto;">
        </b-col>
          </b-row>
          <b-row>
            <b-col>
        <b-button :to="{
          name: index === 0 ? 'Detail' :
                index === 1 ? 'JournalView' :
                index === 2 ? 'PoetryView' :
                index === 3 ? 'ArtView' :
                'ProgramView'
        }" variant="outline-primary">{{ item.text }}</b-button>
        </b-col>
        </b-row>
        </b-container>
      </BCard>
    </BCol>
  </BRow>
</div>
</div>

<NavBar :searchImage="'image_home/search_icon_white.png'" />
</template>

<style scoped>
.topBox{
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
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
</style>
