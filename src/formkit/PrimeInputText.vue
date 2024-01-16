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
    <span :class="{ 'p-input-icon-left': !!context.attrs.iconLeft, 'p-input-icon-right': !!context.attrs.iconRight }">
      <i v-if="context.attrs.iconLeft" :class="context.attrs.iconLeft" />

      <InputText
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

      <i v-if="context.attrs.iconLeft" :class="context.attrs.iconRight" />
    </span>
  </div>
</template>
