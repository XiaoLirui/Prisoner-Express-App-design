<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function lastPage() {
  router.go(-1);
}
</script>

<template>
    <BButton variant="outline-primary" @click="lastPage">Back</BButton>
</template>
