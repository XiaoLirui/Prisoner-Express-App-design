<script setup>
import { ref, getCurrentInstance} from 'vue'
import BackButton from '../components/BackButton.vue';
import NavBar from '../components/NavBar.vue';
import AddSave from '../components/AddSave.vue';
import PDFViewer from '../components/PDFViewer.vue';
import TopBar from '../components/TopBar.vue';
import PDFInfo from '@/components/PDFInfo.vue';

// Access global properties
const globalProperties = getCurrentInstance().appContext.config.globalProperties;
const fixtures = globalProperties.fixtures;

const allJournalItems = ref([
  fixtures["journal-michael"],
  fixtures["journal-joshua"],
  fixtures["journal-mark"],
  fixtures["journal-kyle"],
  fixtures["journal-james"]
]);

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
      <BackButton />
    </div>
    <!-- Text -->
    <div class="header">
      <div class="title">Journals By Prisoners</div>
      <div class="quote">Read a fascinating journal.</div>
      <div class="instruction">
        Many of the writers share their entries with us to share with the public and allow us to gain insight of the humanity of those who are incarcerated. We hope you will read a journal entry and respond with a friendly letter to the author. Knowing that someone is paying attention to their thoughts brings great comfort to many prisoners who feel deeply alone and forgotten.
      </div>
    </div>

    <!-- Render journal items -->
    <div>
    <div class="journal-item" v-for="(item, key) in allJournalItems" :key="key">
      <b-card
        tag="article"
        class="mx-auto shadow-sm card-custom"
        no-body
      >
        <b-card-img
          :src="`${baseDir}${item.img}`"
          alt="Journal Image"
          left
          class="flex-shrink-0"
          style="width: 300px; height: auto; margin-right: 30px"
        ></b-card-img>
        <b-card-body style= "margin-right: 30px" >
          <AddSave :item="item"/>
          <b-card-title class="item-title">{{ item.name }}</b-card-title>
          <b-card-text class="item-description">
            Mailing Address: <br>{{item.mail}}</br>
          </b-card-text>
          <b-button style="font-size: 1em; width: 120px; background-image: linear-gradient(to right, #FD6340 , #FE8537); border: none;"  @click="openPdf(item)">Read</b-button>
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
  color: #5a5a5a;
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

.journal-item {
  margin-bottom: 30px;
}

@media (max-width: 768px) {
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
