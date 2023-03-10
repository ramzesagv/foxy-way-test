<script setup>
import {computed, reactive, watch} from "vue";

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    }
  })

  const emit = defineEmits(['update:modelValue']);

  const form = reactive({
    name: '',
    phone: '',
  })

  const isVisible = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  })

  const clearForm = () => {
    form.name = form.phone = ''
  }

  watch(isVisible, (value) => {
    if (!value) clearForm();
  })
</script>

<template>
  <el-dialog
    v-model="isVisible"
    title="Оформление заявки"
    width="400px"
  >
    <slot>
      <el-form
        :model="form"
        label-position="top"
        @submit.prevent
      >
        <el-form-item label="Имя">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="Телефон">
          <el-input
            v-model="form.phone"
            type="tel"
            placeholder="+7 (777) 777-77-77"
          />
        </el-form-item>
      </el-form>
    </slot>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isVisible = false">Отмена</el-button>
        <el-button type="primary" @click="isVisible = false">
          Сохранить
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
