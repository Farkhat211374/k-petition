<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  confirm: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};

const openDialog = ref(props.confirm);
watch(
  () => props.confirm,
  (newVal) => {
    openDialog.value = newVal;
  }
);

const title = ref("");
const type = ref("");
const options = ref(["Тип 1", "Тип 2", "Тип 3", "Тип 4", "Тип 5"]);
const file = ref(null);
const editor = ref("Описание вашего преждложения.");
</script>

<template>
  <q-dialog v-model="openDialog" persistent backdrop-filter="blur(4px)">
    <q-card class="dialog-card">
      <q-bar style="height: 40px">
        <q-space />
        <q-btn dense flat icon="close" @click="close">
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-bar>
      <div class="form-section">
        <q-card-section class="form-container" align="around">
          <q-input class="col" outlined v-model="title" label="Заголовок" />
          <q-select
            class="col"
            outlined
            v-model="type"
            :options="options"
            label="Тип"
          />
        </q-card-section>

        <q-card-section class="description-block" align="around">
          <q-editor
            v-model="editor"
            :definitions="{
              bold: { label: 'Bold', icon: null, tip: 'My bold tooltip' },
            }"
          />
        </q-card-section>

        <q-card-section>
          <q-file
            outlined
            v-model="file"
            label="Прикрепить документы"
            multiple
            append
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Отменить" @click="close" />
          <q-btn flat label="Сохранить" @click="close" />
        </q-card-actions>
      </div>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.dialog-card {
  min-width: 40%;
}
.form-section {
  padding: 10px;
}
.form-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
