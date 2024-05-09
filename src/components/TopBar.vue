<script setup>
import { ref } from 'vue';
import { BNavbar, BNavbarNav, BNavItem, BImg, BModal, BButton } from 'bootstrap-vue-next';

const mail = ref(false);
const help = ref(false);

</script>

<template>
    <b-navbar variant="light" type="dark" fixed="top" style="background-image: linear-gradient(#6E98CA, #B8D8DF, #ffffff);">
    <b-navbar-nav class="w-100 justify-content-between align-items-center">
        <b-nav-item @click="mail = !mail" style="font-size: 0.75em;">
            <b-img style="height: 1.5rem; width: auto;" :src="`${baseDir}image_home/mail.png`"></b-img>
            <b-modal modal-class="custom-modal" class="mt-2" v-model="mail" hide-footer title="Mailing Instructions">
            Do you want your creative work published on the Prisoner Express App & Website?<br>
            <b>In writing:</b> I grant Prisoner Express the right to publish, in its newsletters and website, any work including essays, artwork and journal entries.<br>
            <b>Mail to:</b> CTA/Durland Alternatives Library PO Box 6556 Ithaca, New York 14851 <br>
            <b>Email:</b> prisonerexpress@gmail.com <br>
            <b-button class="mail-close-button w-100 mt-3" variant="light" @click="mail = !mail">Close Me
            </b-button>
            </b-modal>
        </b-nav-item>
        <b-img style="height: 3rem; width: auto;" :src="`${baseDir}logo_transparent.png`"></b-img>
        <b-nav-item @click="help = !help" style="font-size: 0.75em;">
            <b-img style="height: 1.5rem; width: auto;" :src="`${baseDir}image_home/help.png`"></b-img>
            <b-modal modal-class="custom-modal" class="help-modal" v-model="help" hide-footer title="Help">
            <div class="help-content">
                1. Click on <b-img class="icon" :src="`${baseDir}image_home/mail.png`"></b-img> to see guidance on how to send mail. <br>
                2. Tap on <b-img class="icon" :src="`${baseDir}image_home/heart_icon.png`"></b-img> to save content to your collection. <br>
                3. Unsave content by tapping on <b-img class="icon" :src="`${baseDir}image_home/heart_icon.png`"></b-img> again. <br>
                4. Click on <b-img class="icon" :src="`${baseDir}image_home/search_icon.png`"></b-img> to search for specific content. <br>
                5. Click on "See All" for more content in specific categories.
            </div>
            <b-button class="help-close-button w-100 mt-3" variant="light" @click="help = !help">Close Me</b-button>
            </b-modal>
        </b-nav-item>
    </b-navbar-nav>
</b-navbar>
</template>

<style>
.custom-modal .modal-content {
  padding: 20px;
  background-color: #f8f9fa;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  font-family: 'Arial', sans-serif;
}

.custom-modal .modal-header,
.custom-modal .modal-footer {
  background-color: #e9ecef;
  border-bottom: 1px solid #dee2e6;
  color: #495057;
}

.custom-modal .help-close-button,
.custom-modal .mail-close-button {
  background-color: #5cb85c;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}


.help-modal .modal-content {
  padding: 20px;
  background-color: #f4f4f4;
  color: #333;
  border-radius: 5px;
  font-family: 'Arial', sans-serif;
}

.help-modal .icon {
  height: 1rem;
  width: auto;
  vertical-align: middle;
}

.help-modal .modal-header,
.help-modal .modal-footer {
  background-color: #e9ecef;
  border-bottom: 1px solid #dee2e6;
  color: #495057;
}

.help-close-button {
  background-color: #5cb85c;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}

.help-close-button:hover {
  background-color: #4cae4c;
}

.modal-title {
  color: #0056b3;
}

</style>
