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
    <span v-if="context.attrs.labelLeft" class="formkit-prime-left">{{ context.attrs.labelLeft }}</span>

    <Checkbox
      v-model="value"
      v-bind="context.attrs"
      :disabled="context.disabled"
      :input-id="context.id"
      :input-class="[
        { 'p-invalid': context.state.validationVisible && !context.state.valid },
        context.attrs.inputClass,
      ]"
      @blur="context.handlers.blur"
    />

    <span v-if="context.attrs.labelRight" class="formkit-prime-right">{{ context.attrs.labelRight }}</span>
  </div>
</template>
