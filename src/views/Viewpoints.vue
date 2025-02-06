<template>
  <GridView :items="viewpoints" />

</template>
<script setup lang="ts">
import GridView from '@/components/GridView.vue';

const viewpoints = [
  {
    title: 'La Ñora',
    image: '/src/assets/img/municipal',
    route: '/miradores/la-nora'
  }
]
</script>