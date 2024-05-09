<script setup>
import NavBar from '../components/NavBar.vue';
import { ref, computed } from 'vue';
import PDFViewer from '@/components/PDFViewer.vue';
import TopBar from '../components/TopBar.vue';
import PDFInfo from '@/components/PDFInfo.vue';

const allCategories = ['newsletter', 'journal', 'program', 'art', 'poetry']; // Example categories

const categorizedItems = computed(() => {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  let categories = items.reduce((acc, item) => {
    if (allCategories.includes(item.type)) {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
    }
    return acc;
  }, {});

  // Ensure all categories are represented
  allCategories.forEach(category => {
    if (!categories[category]) {
      categories[category] = []; // Initialize empty array if category not present
    }
  });

  return categories;
});


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

  <b-container fluid class="pt-5 pb-5 mb-3">
    <b-row class="m-3 mt-4" style="font-weight: bold; font-size: 1.25em; color: #2C3E50;">Saved</b-row>
    <b-row>
      <b-col v-for="(items, type) in categorizedItems" :key="type" cols="12" style="margin-bottom: 20px;">
        <b-button v-b-toggle="'collapse-' + type" class="w-100 h-100" style="background-color: transparent; padding-bottom: 30px;">
          <figcaption class="saved-title">{{ type || 'Uncategorized' }}</figcaption>
          <figcaption class="text-end" style="color: gray;">{{ items.length }}</figcaption>
          <b-collapse :id="'collapse-' + type" class="m-2">
            <b-row>
              <b-col v-for="item in items" :key="item.id" cols="6" md="3" lg="2">
                <b-card class="card-custom mb-3" style="border: none;" @click="openPdf(item)">
                  <b-img thumbnail rounded style="height: 130px; width: auto" :src="`${baseDir}${item.img}`" class="image-custom"></b-img>
                  <figcaption class="text-center">{{ item.name }}</figcaption>
                </b-card>
              </b-col>
              <b-col v-if="items.length === 0" cols="12">
                <b-card>No items saved under {{ type }}.</b-card>
              </b-col>
            </b-row>
          </b-collapse>
        </b-button>
      </b-col>
    </b-row>
  </b-container>

  <div v-if="showPdfModal" class="pdfcontainer">
            <!-- Close Button -->
    <BButton variant="danger" @click="closePdf" class="close-button">
      Close
    </BButton>
      <PDFViewer :pdfUrl="`${baseDir}${currentItem.pdf}`"/>
      <PDFInfo :name="currentItem.name" :item="currentItem" :author="currentItem.author" :date="currentItem.date" :about="currentItem.about" :mail="currentItem.mail"/>
    </div>

    <NavBar :saveImage="'image_home/save_icon_white.png'" />
</template>


<style>

.saved-title {
  font-size: 24px;
  font-weight: bold;
  color: #4981bc;
  text-transform: uppercase;
  margin-bottom: 0;
  padding-left: 15px;
  flex: 1;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);

}

.text-center {
  padding: 5px 10px;
  padding-bottom: 0;
  font-size: 0.8em;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-end {
  color: gray;
  margin-right: 15px;
  white-space: nowrap;
}


</style>
