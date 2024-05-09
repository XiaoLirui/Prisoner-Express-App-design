<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { toRaw } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({ name: '' })
  }
});

const isSaved = ref(false);

// Load items from local storage
function loadItems() {
  return JSON.parse(localStorage.getItem('items') || '[]');
}

// Save items to local storage
function saveItems(items) {
  localStorage.setItem('items', JSON.stringify(items));
}

function updateHeart() {
  if (!props.item || !props.item.name) return;
  let items = loadItems();
  const index = items.findIndex(storedItem => storedItem.name === props.item.name);
  isSaved.value = index !== -1;
}

function toggleSaveItem() {
  if (!props.item || !props.item.name) return;
  let items = loadItems();
  const rawItem = toRaw(props.item);
  const index = items.findIndex(storedItem => storedItem.name === rawItem.name);

  if (index === -1) {
    items.push(rawItem);
    isSaved.value = true;
  } else {
    items.splice(index, 1);
    isSaved.value = false;
  }

  saveItems(items);
}


onMounted(updateHeart);
</script>


<template>
  <div class="like-button" @click="toggleSaveItem">
    <img class="heart" :src="isSaved ? `${baseDir}heart-filled.png` : `${baseDir}heart-empty.png`" alt="like icon">
  </div>
</template>

<style scoped>

.heart {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
}

</style>
