<script setup>
import SideBar from '@/components/SideBar.vue';

const fields = [
  { key: 'date', label: 'Date', sortable: true },
  { key: 'time', label: 'Time', sortable: true },
  { key: 'staff', label: 'Staff', sortable: true },
  { key: 'action', label: 'Summary' }
];

const categories = [
  {Categories: "Newsletter", Updates: "1"},
  {Categories: "Essay", Updates: "0"},
  {Categories: "Art", Updates: "-1"},
  {Categories: "Poetry", Updates: "0"},
  {Categories: "Program", Updates: "0"},
  {Categories: "Mail Info", Updates: "0"},
];

 const items = [
     { date: "04/10/24", time: '12:20', staff: 'Lyss', summary: "View" },
     { date: "12/10/23", time: '03:00', staff: 'Gary', summary: "View" },
     { date: "08/10/23", time: '13:05', staff: 'Zaeda', summary: "View" },
     { date: "04/10/23", time: '17:00', staff: 'Venom', summary: "View" }
]

</script>

<template>
  <b-container fluid class="p-0 overflow-hidden">
    <b-row>
      <b-col cols="12" md="4" lg="3" class="sidebar d-flex flex-column vh-100">
        <!-- Logo -->
        <div class="sidebar-header d-flex justify-content-between align-items-center px-3 py-2">
          <b-img src="/public/Logo.png" alt="Logo" class="img-fluid my-2"></b-img>
        </div>

        <SideBar />
      </b-col>
      <b-col cols="12" md="8" lg="9" class="main-content p-4">
        <!-- Page Title and Remove Category Button -->
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h2>Update History</h2>
        </div>

        <!-- Content Table -->
        <b-table striped hover :items="items" :fields="fields">
            <template #cell(action)>
          <b-button variant="success" v-b-modal.modal-summary>
            View
          </b-button>
        </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>

      <!-- Modal for Update Summary -->
      <b-modal id="modal-summary" title="Update Summary">
          <div class="modal-details">
              <b-table striped hover :items="categories"></b-table>
              </div>
      </b-modal>
</template>

<style scoped>

.title {
  padding: 0.5rem 1rem;
  font-size: large;
}

.modal-details {
  max-width: none;
}


</style>
