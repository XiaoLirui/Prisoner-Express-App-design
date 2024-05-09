<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MobileSelect from "mobile-select";
import fixtures from '../fixtures.json';
const emit = defineEmits(['poemUpdated']);

const selectedVal = ref("");
const triggerRef = ref(null);

const pickerData = ref([
  { value: [fixtures["poetry-28"], fixtures["poetry-27"], fixtures["poetry-26"]], name: "All Poetry Anthologies" },
  { value: fixtures["poetry-28"], name: fixtures["poetry-28"].name },
  { value: fixtures["poetry-27"], name: fixtures["poetry-27"].name },
  { value: fixtures["poetry-26"], name: fixtures["poetry-26"].name }
]);

onMounted(() => {
  if (triggerRef.value) {
    const msInstance = new MobileSelect({
      trigger: triggerRef.value,
      wheels: [{ data: pickerData.value.map(item => item.name) }],
      ensureBtnText: 'Enter',
      cancelBtnText: 'Cancel',
      scrollSpeed: 1,
      triggerDisplayValue: true,
      onChange: (selectionArray) => {
    if (Array.isArray(selectionArray) && selectionArray.length > 0) {
        const selectedItemName = selectionArray[0];
        console.log("Received selected item name:", selectedItemName);

        const selectedIndex = pickerData.value.findIndex(item => item.name === selectedItemName);
        if (selectedIndex !== -1) {
            const selectedData = pickerData.value[selectedIndex];
            emit('poemUpdated', selectedData.value);
        } else {
            console.error("No matching item found for name:", selectedItemName);
        }
    } else {
        console.error("Invalid selection received:", selectionArray);
    }
}
});

    onUnmounted(() => {
      msInstance.destroy();
    });
    msInstance.setTitle('Select Poem Anthology #');
  }
});
function resetScroll() {
  window.scrollTo(0, 0);
};

//https://www.w3schools.com/jsref/met_win_scrollto.asp

</script>

<template>
  <div class="right">
  <div class="picker-container" @click="resetScroll">
    <img class="down" :src="`${baseDir}image_home/chevron-down-solid.svg`"/>
    <div ref="triggerRef" >
      <!-- Display the selected value or a default message -->
      <div class="picker">{{ selectedVal.value || "Select Poetry Anthology" }}</div>
    </div>
  </div>
</div>
</template>

<style>

.picker-container {
    background-color: #d3ddf4;
    color: #3b3a3a;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    transition: background-color 0.3s, box-shadow 0.3s;
}

.picker-container:active {
    background-color: #1E497B;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.picker {
  overflow-y: scroll;
}


</style>
