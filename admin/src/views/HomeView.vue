<script setup>
import { ref, computed } from 'vue';
import fixtures from '/workspaces/l-f-t-r-project/admin/fixtures.json'
import SideBar from '@/components/SideBar.vue';
const items = ref(Object.entries(fixtures).map(([key, value]) => ({
  type: key.includes('newsletter') ? 'Newsletter' : key.includes('poetry') ? 'Poetry' : key.includes('program') ? 'Program' : 'Art',
  ...value, key
})));

const fields = [
  { key: 'type', label: 'Type' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'author', label: 'Author', sortable: true },
  { key: 'date', label: 'Date', sortable: true },
  { key: 'img', label: 'Image' },
  { key: 'pdf', label: 'PDF' },
  { key: 'actions', label: 'Actions' }
];
const showEditModal = ref(false);
const selectedRow = ref({});

const showDeleteModal = ref(false);

const tableModified = ref(false);

function showDelete(item) {
      this.selectedRow = item;
      this.showDeleteModal = true;
    }

function deleteItem() {
  items.value.shift();
  showDeleteModal.value = !showDeleteModal.value;
  tableModified.value = true;
}


function editItem(item) {
  selectedRow.value = { ...item };
  console.log("This is ",selectedRow)
  showEditModal.value = true;
  tableModified.value = true;
}

function updateItem() {
  const index = items.value.findIndex(item => item.key === selectedRow.value.key);
  if (index !== -1) {
    items.value[index] = {...selectedRow.value};
  }
  showEditModal.value = false;
  tableModified.value = true;
}

const categories = [
  {Categories: "Newsletter", Updates: "1"},
  {Categories: "Essay", Updates: "0"},
  {Categories: "Art", Updates: "-1"},
  {Categories: "Poetry", Updates: "0"},
  {Categories: "Program", Updates: "0"},
  {Categories: "Mail Info", Updates: "0"},
];
const show = ref(false);
const upload = ref(false);
const add = ref(false);
const selected = ref('');
const title = ref('');
const author = ref('');
const hist = ref(false);
const description = ref('');
const pdfFile = ref('');
const imageFile = ref('');


function update(option) {
  selected.value = option;
};

function clearModal() {
  selected.value='';
  title.value = '';
      author.value = '';
      imageFile.value = null;
      pdfFile.value = null;
      description.value = '';
  };

function updateTable() {
  items.value.unshift({
    key: `newKey${items.value.length + 1}`,
    name: title.value,
    type: selected.value,
    date: "May 7, 2024",
    author: author.value,
    img: '/src/img/newsletter-summer-2025.png',
    pdf: '/src/pdf/newsletter-summer-2025.pdf',
    newAdded: true
  });
  upload.value = !upload.value;
  tableModified.value = true;
}


const searchText = ref('');
const display = ref('items.value')
const fixed = computed(() => [items.value[1]]);

const filteredItems = computed(() => {
    return searchText.value.trim() === '' ? display.value : fixed.value;
});

function showOne () {
  items.value = filteredItems.value;
}

</script>

<template>
  <b-container fluid class="p-0 overflow-hidden">
    <b-row>
      <b-col cols="12" md="4" lg="3" class="sidebar d-flex flex-column vh-100">
        <!-- Logo -->
        <div class="sidebar-header d-flex justify-content-between align-items-center px-3 py-2">
          <b-img src="/public/Logo.png" alt="Logo" class="img-fluid my-2"></b-img>
        </div>

        <SideBar/>
      </b-col>
      <b-col cols="12" md="8" lg="9" class="main-content p-4">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h2>App Content</h2>
        </div>

        <!-- Action Buttons and Search Bar -->
        <div class="d-flex justify-content-between mb-4">
          <div class="left-actions">
            <b-button variant="primary" @click="upload = !upload">Upload</b-button>
            <b-button variant="danger" class="mx-2" v-if="tableModified" @click="show = !show">Publish App</b-button>
            <b-button class="mx-2" disabled v-else>Publish App</b-button>
            <b-offcanvas v-model="show" title="Update App"  >
              <p style="font-size: 0.8em;">You are about to update the Prionser Express App for Prisoners.</p>
              <b-table striped hover :items="categories"></b-table>
              Announcement
              <b-form-textarea class="mt-1" style="font-size: 0.8em;" placeholder="Write a brief message to the prisoners, introducing the new update and promoting the program." rows="3"></b-form-textarea>
              <div class="mt-3" style="display: flex; justify-content: end;">
                <b-button class="me-2" variant="outline-secondary" @click="show =false">Cancel</b-button>
                <b-button variant="danger" @click="hist = !hist">Update
                  <b-modal v-model="hist" hide-footer class="mb-3">
                    <p class="mb-3">Updates Uploaded Successfully! <br></p>
                    <b-button variant="outline-primary" class="w-100" :to="{ name: 'History' }">
                      View Update History</b-button>
                  </b-modal>
                </b-button>
              </div>
            </b-offcanvas>
          </div>

          <b-modal @show="clearModal" v-model="upload" hide-footer class="mb-3">
            Upload File to
            <b-dropdown variant="primary" :text="selected || 'Select Category'" class="m-2">
              <b-dropdown-item @click="update('Newsletter')">Newsletter</b-dropdown-item>
              <b-dropdown-item @click="update('Essay')">Essay</b-dropdown-item>
              <b-dropdown-item @click="update('Art')">Art</b-dropdown-item>
              <b-dropdown-item @click="update('Poetry')">Poetry</b-dropdown-item>
              <b-dropdown-item @click="update('Program')">Program</b-dropdown-item>
              <b-dropdown-item @click="update('Mail Info')">Mail Info</b-dropdown-item>
              </b-dropdown>
            <b-form-group class="mb-3" label="Title" label-cols="2" label-cols-lg="2">
            <b-form-input v-model="title" placeholder="Enter Title Here"></b-form-input>
            </b-form-group>
            <b-form-group class="mb-3" label="Author" label-cols="2" label-cols-lg="2">
            <b-form-input v-model="author" placeholder="Enter Author Here"></b-form-input>
            </b-form-group>
            <b-form-group class="mb-3" label="Select Image" label-cols="3">
            <b-form-file placeholder="Select Image"></b-form-file>
            </b-form-group>
            <b-form-group class="mb-3" label="Select PDF" label-cols="3">
            <b-form-file placeholder="Select PDF"></b-form-file>
            </b-form-group>
            <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" id="description" rows="3" placeholder="Add Description of Content Here"></textarea>
            </div>
            <b-button class="w-100 mt-3" variant="light" @click="updateTable">Upload
            </b-button>
            </b-modal>

          <div class="right-actions ml-auto">
            <b-form-input v-model="searchText" placeholder="Search for file" class="mr-2"></b-form-input>
            <b-button variant="outline-secondary" @click="showOne">Search</b-button>
          </div>
        </div>

        <b-table style="font-size: 0.75rem;" striped hover :items="items" :fields="fields">
        <template #[`cell(${field.key})`]="data" v-for="field in fields" :key="field.key">
          <div v-if="field.key !== 'actions'" :style="{ color: data.item.newAdded ? 'green' : '' }">
          {{ data.item[field.key] }}
          </div>
        <template v-else>
            <b-dropdown variant="link">
            <b-dropdown-item @click="editItem(data.item)">Edit</b-dropdown-item>
            <b-dropdown-item @click="showDelete(data.item)">Delete</b-dropdown-item>
            </b-dropdown>
        </template>
        </template>

        </b-table>
      </b-col>
    </b-row>
  </b-container>

  <!-- Modal for Editing Item -->
  <b-modal v-model="showEditModal" title="Edit Item Details" hide-footer>
    <b-form-group label="Name">
    <b-form-input v-model="selectedRow.name"></b-form-input>
  </b-form-group>
  <b-form-group label="Author">
    <b-form-input v-model="selectedRow.author"></b-form-input>
  </b-form-group>
  <b-form-group label="Type">
    <b-form-input v-model="selectedRow.type"></b-form-input>
  </b-form-group>
  <b-form-group label="Date">
    <b-form-input v-model="selectedRow.date"></b-form-input>
  </b-form-group>
  <b-form-group label="Image">
    <b-form-input class="form-control" type="file" id="formFile"></b-form-input>
  </b-form-group>
  <b-form-group label="PDF">
    <b-form-input class="form-control" type="file" id="formFile"></b-form-input>
  </b-form-group>


  <!-- Modal footer with actions -->
  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="showEditModal = false">Close</button>
        <button type="button" class="btn btn-primary"  @click="updateItem">Save changes</button>
      </div>
</b-modal>

  <!-- New Modal for Confirming Deletion -->
  <b-modal v-model="showDeleteModal" title="Confirm Deletion" hide-footer>
  <div class="text-center">
    Are you sure you want to delete this item?
    <b-form-group label="Name">
    <b-form-input v-model="selectedRow.name"></b-form-input>
  </b-form-group>
  </div>
  <div class="modal-footer">
    <b-button variant="secondary" @click="showDeleteModal = false">Cancel</b-button>
    <b-button variant="danger" @click="deleteItem">Delete</b-button>
  </div>
</b-modal>

</template>



<style>

.sidebar {
  background-color: #ffffff;
  color: #212529;
  border-right: 2px solid #dee2e6;
}

.main-content .left-actions, .right-actions {
  display: flex;
  align-items: center;
}

.right-actions {
  flex-grow: 1;
}


.ml-auto {
  margin-left: auto;
}

.btn-primary, .btn-danger {
  margin-right: 10px;
}
</style>
