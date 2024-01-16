<script setup lang="ts">
import type { FormKitFrameworkContext } from '@formkit/core'
import { computed } from 'vue'

const props = defineProps<{
  context: FormKitFrameworkContext & {
    disabled?: boolean
  }
}>()

const value = computed({
  get() {
    return props.context._value
  },
  set(newValue) {
    props.context.node.input(newValue)
  },
})
</script>

<template>
  <div class="p-formkit">
    <ColorPicker :id="context.id" v-model="value" v-bind="context.attrs" :disabled="context.disabled" />
  </div>
</template>
