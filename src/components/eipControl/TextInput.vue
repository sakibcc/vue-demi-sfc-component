<template>
  <div>
    <div class="a">
      <div class="b">{{ text }}</div>
    </div>
    <input v-model="text" type="text" class="ui-input" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue-demi'
export default defineComponent({
  name: 'TextInput',
  setup() {
    const text = ref('1223332222a')
    text.value = '123123'
    return {
      text
    }
  }
})
</script>
<style lang="postcss" scoped>
.a {
  @apply m-2;
  .b {
    @apply p-3;
  }
}
</style>
