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
    <div :class="context.attrs.optionWrapperClass">
      <div v-for="option in context.attrs.options" :key="option.value" :class="context.attrs.optionClass">
        <RadioButton
          v-model="value"
          v-bind="context.attrs"
          :disabled="context.disabled"
          :input-id="`${context.id}-${option.value}`"
          :input-class="[
            { 'p-invalid': context.state.validationVisible && !context.state.valid },
            context.attrs.inputClass,
          ]"
          @blur="context.handlers.blur"
        />
        <label :for="`${context.id}-${option.value}`">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>
