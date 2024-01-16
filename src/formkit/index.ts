import { createInput } from '@formkit/vue'

import PrimeAutoComplete from './PrimeAutoComplete.vue'
import PrimeCalendar from './PrimeCalendar.vue'
import PrimeCascadeSelect from './PrimeCascadeSelect.vue'
import PrimeCheckbox from './PrimeCheckbox.vue'
import PrimeChips from './PrimeChips.vue'
import PrimeColorPicker from './PrimeColorPicker.vue'
import PrimeDropdown from './PrimeDropdown.vue'
import PrimeEditor from './PrimeEditor.vue'
import PrimeInputMask from './PrimeInputMask.vue'
import PrimeInputNumber from './PrimeInputNumber.vue'
import PrimeInputSwitch from './PrimeInputSwitch.vue'
import PrimeInputText from './PrimeInputText.vue'
import PrimeKnob from './PrimeKnob.vue'
import PrimeListbox from './PrimeListbox.vue'
import PrimeMultiSelect from './PrimeMultiSelect.vue'
import PrimePassword from './PrimePassword.vue'
import PrimeRadioButton from './PrimeRadioButton.vue'
import PrimeRating from './PrimeRating.vue'
import PrimeSelectButton from './PrimeSelectButton.vue'
import PrimeSlider from './PrimeSlider.vue'
import PrimeTextarea from './PrimeTextarea.vue'
import PrimeToggleButton from './PrimeToggleButton.vue'
import PrimeTreeSelect from './PrimeTreeSelect.vue'
import PrimeTriStateCheckbox from './PrimeTriStateCheckbox.vue'

export const primeInputs = {
  primeAutoComplete: createInput(PrimeAutoComplete),
  primeCalendar: createInput(PrimeCalendar),
  primeCascadeSelect: createInput(PrimeCascadeSelect),
  primeCheckbox: createInput(PrimeCheckbox),
  primeChips: createInput(PrimeChips),
  primeColorPicker: createInput(PrimeColorPicker),
  primeDropdown: createInput(PrimeDropdown),
  primeEditor: createInput(PrimeEditor),
  primeInputMask: createInput(PrimeInputMask),
  primeInputNumber: createInput(PrimeInputNumber),
  primeInputSwitch: createInput(PrimeInputSwitch),
  primeInputText: createInput(PrimeInputText),
  primeKnob: createInput(PrimeKnob),
  primeListbox: createInput(PrimeListbox),
  primeMultiSelect: createInput(PrimeMultiSelect),
  primePassword: createInput(PrimePassword),
  primeRadioButton: createInput(PrimeRadioButton),
  primeRating: createInput(PrimeRating),
  primeSelectButton: createInput(PrimeSelectButton),
  primeSlider: createInput(PrimeSlider),
  primeTextarea: createInput(PrimeTextarea),
  primeToggleButton: createInput(PrimeToggleButton),
  primeTreeSelect: createInput(PrimeTreeSelect),
  primeTriStateCheckbox: createInput(PrimeTriStateCheckbox),
}
