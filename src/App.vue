<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import EipInputVue from '@/components/index'
import { defineComponent } from 'vue-demi'
export default defineComponent({
  components: {
    EipInputVue
  }
})
</script>

<template>
  <div>
    <EipInputVue></EipInputVue>
  </div>
</template>

<style scoped></style>
