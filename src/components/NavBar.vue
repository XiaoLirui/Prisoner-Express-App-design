<script setup>
import { ref } from 'vue';
import { BNavbar, BNavbarNav, BNavItem, BImg, BModal, BButton } from 'bootstrap-vue-next';

const props = defineProps({
  homeImage: {
    type: String,
    required: false,
    default: 'image_home/home_icon.png'
  },
  searchImage: {
    type: String,
    required: false,
    default: 'image_home/search_icon.png'
  },
  saveImage: {
    type: String,
    required: false,
    default: 'image_home/save_icon.png'
  }
});
</script>

<template>

<b-navbar type="dark" fixed="bottom" style="margin-top: 80px; background-color: #ffffff; border-top: #FD6340 5px;">
    <b-navbar-nav class="w-100 px-5 justify-content-between">
        <b-nav-item :to="`/`">
            <div class="icon-text">
                <b-img style="height: 3rem; width: auto;" :src='`${baseDir}${props.homeImage}`'></b-img>
            </div>
        </b-nav-item>
        <b-nav-item :to="`/search`">
            <div class="icon-text">
                <b-img style="height: 3rem; width: auto;" :src='`${baseDir}${props.searchImage}`'></b-img>
            </div>
        </b-nav-item>
        <b-nav-item :to="`/saved`">
            <div class="icon-text">
                <b-img style="height: 3rem; width: auto;" :src='`${baseDir}${props.saveImage}`'></b-img>
            </div>
        </b-nav-item>
    </b-navbar-nav>
</b-navbar>
</template>

<style>

.icon-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 12px;
}

.b-img {
    margin-bottom: 4px;
}


.b-navbar-nav .b-nav-item, .b-navbar-nav .b-nav-item a {
    display: flex;
    justify-content: center;
    width: 100%;
}

@media (max-width: 768px) {
    .b-navbar-nav .b-nav-item, .b-navbar-nav .b-nav-item a {
        padding: 0.5rem 0;
    }
}
</style>
