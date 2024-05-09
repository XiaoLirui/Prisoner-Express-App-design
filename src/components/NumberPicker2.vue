<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MobileSelect from "mobile-select";
import fixtures from '../fixtures.json';
const emit = defineEmits(['NewsUpdated']);

const selectedVal = ref("");
const triggerRef = ref(null);

const pickerData = ref([
  { value: [fixtures["newsletter-winter24"], fixtures["newsletter-summer24"],  fixtures["newsletter-winter23"],fixtures["newsletter-summer23"],fixtures["newsletter-winter22"],fixtures["newsletter-summer22"]], name: "All Newsletters" },
  { value: fixtures["newsletter-winter24"], name: fixtures["newsletter-winter24"].name },
  { value: fixtures["newsletter-summer24"], name: fixtures["newsletter-summer24"].name },
  { value: fixtures["newsletter-winter23"], name: fixtures["newsletter-winter23"].name },
    { value: fixtures["newsletter-summer23"], name: fixtures["newsletter-summer23"].name },
  { value: fixtures["newsletter-winter22"], name: fixtures["newsletter-winter22"].name },
  { value: fixtures["newsletter-summer22"], name: fixtures["newsletter-summer22"].name }
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
            emit('NewsUpdated', selectedData.value);
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
    msInstance.setTitle('Select Newsletter #');
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
      <div class="picker">{{ selectedVal.value || "Select Newsletter" }}</div>
    </div>
  </div>
</div>
</template>

<style>

.picker-container {
    background-color: #d3ddf4;
    color: #3b3a3a;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: flex-between;
    width: 320px;
    padding-right: 0%;
    margin-right: 0;
    margin: 20px auto;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;

}

.picker-container:active {
    background-color: #1E497B;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.down {
  width: 20px;
  margin-right: 5px;
}

</style>
