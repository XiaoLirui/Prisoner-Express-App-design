<script setup>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import '@tato30/vue-pdf/style.css'

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true,
    default: 'pdf/poetry28.pdf'
  }
});

const page = ref(1)
let { pdf, pages } = usePDF(props.pdfUrl)


</script>


<template>
  <div class="pdf-scroll-container">
    <!-- PDF Display for Each Page -->
    <div class="pdf-display" v-for="pg in pages" :key="pg">
      <div class="page-info">Page {{ pg }} of {{ pages }}</div>
      <VuePDF :pdf="pdf" :page="pg" />
    </div>
  </div>
</template>


<style scoped>

.pdf-scroll-container {
  padding-top: 40px;
  height: calc(90vh - 40px);
  overflow-y: auto;
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pdf-display {
  width: auto;
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  background-color: #fff;
  padding: 10px;
}

.page-info {
  top: 0;
  color: #10461b;
  text-align: center;
  padding: 5px 0;
  width: 100%;
  z-index: 10;
}

VuePDF {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 100%;
  overflow: hidden;
}

span {
  font-size: 1.2em;
  color: #fff;
  padding: 5px 0;
}

</style>
