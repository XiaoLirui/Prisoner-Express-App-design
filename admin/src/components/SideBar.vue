<script setup>
import { ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeItem = ref('');

// Watch route changes to update active state
watch(() => route.params.key, (newKey) => {
  activeItem.value = newKey;
}, { immediate: true });

const store = useStore();
const categories = computed(() => store.state.categories);
const add = ref(false);
const newCategory = ref('');

function addCategory() {
  if (newCategory.value.trim()) {
    store.dispatch('addCategory', newCategory.value);
    newCategory.value = '';  // Clear the input after adding
    add.value = false;
  }
}
</script>



<template>
  <!-- Sidebar Navigation Items -->
  <b-nav vertical class="flex-column nav-items">
    <b-nav-item
      class="px-1"
      :to="{ name: 'app content' }"
      :class="{ 'active-item': activeItem === 'appContent' }"
    >
      App Content
    </b-nav-item>
    <b-nav-item
      class="px-3"
      v-for="category in categories"
      :to="`/app-content/${category.key}`"
      :class="{ 'active-item': activeItem === category.key }"
    >
      {{ category.label }}
    </b-nav-item>
    <div class="d-flex justify-content-end">
      <b-button variant="outline-danger" class="ms-auto mx-2" size="sm" style="font-size: 12px;">Remove</b-button>
      <b-button variant="info" @click="add = !add" style="color: white; font-size: 12px;">+ Category</b-button>
    </div>
    <b-modal v-model="add" title="Add New Category" hide-footer>
      New Category
      <b-form-input class="mt-1" v-model="newCategory" placeholder="Add Here"></b-form-input>
      <b-button class="w-100 mt-3" variant="light" @click="addCategory">Add</b-button>
    </b-modal>
    <b-nav-item
      class="px-1"
      :to="{ name: 'History' }"
      :class="{ 'active-item': activeItem === 'History' }"
    >
      Update History
    </b-nav-item>
  </b-nav>
</template>


<style scoped>

.sidebar {
  background-color: #ffffff;
  color: #212529;
  border-right: 2px solid #dee2e6;
}

.nav-items .nav-item {
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s, color 0.2s;
}

.sidebar-header {
  margin-bottom: 1rem;
}

/* Navigation Item Styles */
.nav-items .nav-item {
  color: #212529;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s, color 0.2s;
  border-radius: 0;
}

.nav-items .nav-item:hover,
.nav-items .nav-item:focus {
  background-color: gray;
  color: #ffffff;
  border-radius: 0;
}

.active-item {
  background-color: #333;
  color: #ffffff;
}

.nav-items .nav-item.active-item,
.nav-items .nav-item.active-item * { /* Apply color to all child elements */
  color: #ffffff;
}
</style>
