<script setup>
import { defineProps, defineEmits } from "vue";
import { ref } from "vue";

const activity_options = ref([
  "Коммуникация",
  "Безопасность",
  "Технические средства",
  "Автоматизация процессов",
]);
const activity_model = ref("");

const classification_options = ref([
  "Технологическое оснащение",
  "Социальное взаимодействие",
  "Охрана труда",
]);
const classification_model = ref("");

const props = defineProps({
  showCreateDialog: Boolean,
});
const emit = defineEmits(["update:showCreateDialog"]);

const closeDialog = () => {
  emit("update:showCreateDialog", false);
};
</script>

<template>
  <q-dialog :model-value="props.showCreateDialog" @hide="closeDialog">
    <q-card style="min-width: 700px">
      <q-card-section class="row items-center q-gutter-sm bg-blue-grey-2">
        <q-icon name="today" size="sm" color="blue-grey-9" />
        <div class="text-h6 text-weight-bold text-blue-grey-9">
          Новая Проблема
        </div>
      </q-card-section>

      <q-separator />
      <q-card-section style="max-height: 60vh" class="scroll q-gutter-lg">
        <div class="row">
          <q-uploader
            flat
            style="max-width: 170px"
            hide-upload-btn
            color="grey-3"
            text-color="black"
            label="Добавить изображения"
            bordered
            class="col"
          />
          <div class="col q-pl-lg">
            <div>
              <span class="infoHeadline">Наименование проблемы</span>
              <q-input bg-color="grey-3" dense outlined v-model="text" />
            </div>
            <div>
              <span class="infoHeadline">Подробное описание</span>
              <q-input
                bg-color="grey-3"
                outlined
                v-model="text"
                type="textarea"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="infoHeadline">Предлагаемое решение</span>
            <q-input
              bg-color="grey-3"
              outlined
              v-model="text"
              type="textarea"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="infoHeadline">Ожидаемый результат</span>
            <q-input
              bg-color="grey-3"
              outlined
              v-model="text"
              type="textarea"
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <span class="infoHeadline">Направление деятельности</span>
            <q-select
              outlined
              bg-color="grey-3"
              v-model="activity_model"
              :options="activity_options"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <span class="infoHeadline">Классификация проблемы</span>
            <q-select
              outlined
              bg-color="grey-3"
              v-model="classification_model"
              :options="classification_options"
            />
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn label="Отменить" color="deep-orange" no-caps v-close-popup />
        <q-btn label="Сохранить" color="positive" no-caps v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
