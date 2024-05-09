<script setup>
import {ref} from 'vue';
import AddSave from './AddSave.vue';

const showPdfInfo = ref(true);
const closePdfInfo = () => {
  showPdfInfo.value = false;
};
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: ''
  },
  item: {
    type: Object,
    required: true
  },
  author: {
    type: String,
    required: true,
    default: ''
  },
  date: {
    type: String,
    required: true,
    default: ''
  },
  about: {
    type: String,
    required: true,
    default: ''
  },
  mail: {
    type: String,
    required: true,
    default: ''
  }
});

</script>

<template>
    <!-- Info Button -->
    <BButton v-if="!showPdfInfo" variant="secondary" class="info-button" @click="showPdfInfo = true" >
      i
    </BButton>
<div class="pdf-footer bg-dark text-white">
<b-container  v-if="showPdfInfo">
      <b-row>
        <b-row>
        <BButton variant="light" @click="closePdfInfo" class="close-footer-button">X</BButton>
          <h5 style="padding-top: 10px;">{{ props.name }}</h5>
          <AddSave v-if="item" :item="item" />
        </b-row>
          <b-col cols="12" md="2">
          <p v-if="props.author">Author: {{ props.author }}</p>
          <p v-if="props.date">Date: {{ props.date }}</p>
        </b-col>
        <b-col cols="12" md="8">
          <p v-if="props.about">About: {{ props.about }}</p>
          <p v-if="props.mail">Address: {{ props.mail }}</p>
        </b-col>
      </b-row>
    </b-container>
</div>

</template>

<style scoped>
.close-footer-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(181, 181, 181, 0.6);
  color: #fff;
  border: none;
  padding: 5px;
  font-size: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
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

</style>
