<script setup >
import { ref, getCurrentInstance} from 'vue'
import BackButton from '../components/BackButton.vue';
import NavBar from '../components/NavBar.vue';
import AddSave from '../components/AddSave.vue';
import TopBar from '../components/TopBar.vue';
import PDFViewer from '@/components/PDFViewer.vue';
import PDFInfo from '@/components/PDFInfo.vue';

// Access global properties
const globalProperties = getCurrentInstance().appContext.config.globalProperties;
const fixtures = globalProperties.fixtures;

const allArtItems = ref([
  fixtures["art-sean"],
  fixtures["art-charles"],
  fixtures["art-david"],
  fixtures["art-tim"],
  fixtures["art-brian"],
  fixtures["art-anthony"],
]);


const selectedArt = ref({});

const showPdfModal = ref(false);
const currentItem = ref('');

const openPdf = (item) => {
  currentItem.value = item;
  showPdfModal.value = true;
  console.log(currentItem.pdf)
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
    <div class="header">
      <div class="title">Art By Prisoners</div>
      <div class="quote">Browse beautiful art.</div>
      <div class="instruction">
        Write a letter to the artist whose work caught your eye. OR Create your own art and mail it to us.
      </div>
    </div>
    <div class="gallery">
      <div class="art-item" v-for="(item, key) in allArtItems" :key="key">
        <!-- Art image with an overlay or icon for saving -->
        <div class="art-image-container">
          <img :src="`${baseDir}${item.img}`" alt="Art Image" class="art-image" @click.stop="openPdf(item)" />
        </div>
      </div>
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

    <!-- Modal for Selected Art
    <b-modal id="modal-art" size="lg" :title="selectedArt.name" modal-class="custom-modal">
      <div class="modal-layout">
        <div class="modal-image-container">
          <img :src="`${baseDir}${selectedArt.img}`" alt="Selected Art Image" class="modal-art-image" />
        </div>
        <div class="modal-details">
          <h5>Artist: {{ selectedArt.author }}</h5>
          <p>Mailing Address:</p><p> {{ selectedArt.mail }}</p>
          <AddSave :item="selectedArt"/>
        </div>
      </div>
    </b-modal> -->
  </div>
  <NavBar />
</template>


<style>
.modal-details {
  margin-top: 20px;
}

.modal-details h5 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.modal-details p {
  margin: 0;
  font-size: 16px;
  color: #666;
}
.gallery {
  column-count: 2;
  column-gap: 16px;
}

.container {
  width: 100%;
  margin: 0 auto;
}

.mail{
    height: 50px;
    width: 50px;
    margin-left: 100px;
}

.topBox{
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
  gap: 60px;
  flex-wrap: wrap;
}
.logo{
    position: absolute;
    left: 45%;
    width: 250px;
    height: 90px;
}

.help{
    height: 45px;
    width: 45px;
    margin-right: 60px;
}
.header {
  text-align: center;
  padding: 20px 0;
  background-color: #f8f8f8;
  margin-bottom: 30px;
}

.title {
  font-size: 32px;
  color: #333333;
  font-weight: bold;
  margin-bottom: 10px;
}

.quote {
  font-size: 20px;
  color: #666666;
  font-style: italic;
  margin-bottom: 15px;
}

.instruction {
  font-size: 16px;
  color: #333333;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}

.art-item {
  break-inside: avoid;
  margin-bottom: 1em;
  box-sizing: border-box;
}

.art-image {
  width: 100%;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.custom-modal .modal-footer {
  display: none;
}

.custom-modal .modal-content {
  width: 100%;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-art-image {
  width: 100%;
  max-width: 600px;
  height: auto;
}

.art-image-container {
  position: relative;
}

.AddSave {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}



@media (min-width: 768px) and (orientation: landscape) {
  .gallery {
    column-count: 3;

  .art-image-container {
    padding: 5px;
  }

  .art-item {
    margin-bottom: 0.5em;
  }
}

  .modal-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .modal-image-container {
    flex-basis: 70%;
    max-width: 70%;
  }

  .modal-art-image {
    width: 100%;
    max-width: none;
    height: auto;
  }

  .modal-details {
    flex-basis: 30%;
    max-width: 30%;
    margin-left: 20px;
  }
}



</style>
