<script setup>
import { defineProps, defineEmits } from "vue";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";

const props = defineProps({
  data: Object,
  showReadDialog: Boolean,
});
const emit = defineEmits(["update:showReadDialog"]);
const closeDialog = () => {
  emit("update:showReadDialog", false);
};
</script>

<template>
  <q-dialog :model-value="props.showReadDialog" @hide="closeDialog">
    <q-card style="min-width: 50%; max-height: 90%">
        <q-separator />
        <q-card-section class="custom-card-section">
          <q-img :src="data.imageUrl" :ratio="22 / 9" class="card-image" />
          <div class="q-mt-sm row items-center justify-between">
            <div class="text-body2 text-weight-bold text-grey">
              {{ data.create_date }}
            </div>
            <div class="row items-center justify-between">
              <div class="row">
                <div class="row items-center">
                  <img :src="like" height="15px" alt="thumbs" />
                  <div
                    class="q-ml-sm q-mt-xs text-body2 text-info text-weight-bold"
                  >
                    {{ data.likes_count }}
                  </div>
                </div>
                <div class="row items-center q-ml-lg">
                  <img
                    :src="dislike"
                    height="15px"
                    alt="thumbs"
                    style="transform: scaleY(-1)"
                    class="q-mt-sm"
                  />
                  <div
                    class="q-ml-sm q-mt-xs text-body2 text-info text-weight-bold"
                  >
                    {{ data.dislikes_count }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="text-caption text-grey q-mt-xs text-weight-thin">
            Наименование проблемы
          </div>
          <div
            class="text-title text-h6 q-mb-md highlighted-text text-weight-bold"
          >
            {{ data.title }}
          </div>
          <div class="text-caption text-grey text-weight-thin">
            Подробное описание
            <div
              class="text-body2 text-grey-8 text-weight-bold text-description"
            >
              Значимость этих проблем настолько очевидна, что консультация с
              широким активом играет важную роль в формировании новых
              предложений. Повседневная практика показывает, что реализация
              намеченных плановых заданий в значительной степени обуславливает
              создание модели развития. С другой стороны рамки и место обучения
              кадров способствует подготовки и реализации модели развития.
              Значимость этих проблем настолько очевидна, что дальнейшее
              развитие различных форм деятельности обеспечивает широкому кругу
              (специалистов) участие в формировании новых предложений. Равным
              образом рамки и место обучения кадров влечет за собой процесс
              внедрения и модернизации системы обучения кадров, соответствует
              насущным потребностям. Товарищи! консультация с широким активом
              позволяет выполнять важные задания по разработке систем массового
              участия. Значимость этих проблем настолько очевидна, что
              консультация с широким активом играет важную роль в формировании
              новых предложений. Повседневная практика показывает, что
              реализация намеченных плановых заданий в значительной степени
              обуславливает создание модели развития. С другой стороны рамки и
              место обучения кадров способствует подготовки и реализации модели
              развития. Значимость этих проблем настолько очевидна, что
              дальнейшее развитие различных форм деятельности обеспечивает
              широкому кругу (специалистов) участие в формировании новых
              предложений. Равным образом рамки и место обучения кадров влечет
              за собой процесс внедрения и модернизации системы обучения кадров,
              соответствует насущным потребностям. Товарищи! консультация с
              широким активом позволяет выполнять важные задания по разработке
              систем массового участия.
            </div>
          </div>
          <div class="q-mt-md text-caption text-grey text-weight-thin">
            Подробное описание
            <div
              class="text-body2 text-grey-8 text-weight-medium text-description"
            >
              Значимость этих проблем настолько очевидна, что консультация с
              широким активом играет важную роль в формировании новых
              предложений. Повседневная практика показывает, что реализация
              намеченных плановых заданий в значительной степени обуславливает
              создание модели развития. С другой стороны рамки и место обучения
              кадров способствует подготовки и реализации модели развития.
              Значимость этих проблем настолько очевидна, что дальнейшее
              развитие различных форм деятельности обеспечивает широкому кругу
              (специалистов) участие в формировании новых предложений.
            </div>
          </div>
          <div class="q-mt-md text-caption text-grey text-weight-thin">
            Подробное описание
            <div
              class="text-body2 text-grey-8 text-weight-medium text-description"
            >
              Значимость этих проблем настолько очевидна, что консультация с
              широким активом играет важную роль в формировании новых
              предложений. Повседневная практика показывает, что реализация
              намеченных плановых заданий в значительной степени обуславливает
              создание модели развития. С другой стороны рамки и место обучения
              кадров способствует подготовки и реализации модели развития.
            </div>
          </div>

          <div class="q-mt-md">
            <div class="text-caption text-grey text-weight-thin">
              Направление деятельности
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ data.activity.name }}
            </div>
            <div class="text-caption text-grey text-weight-thin">
              Классификация проблемы
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ data.classification.name }}
            </div>
            <div class="text-caption text-grey text-weight-thin">
              Автор проблемы
            </div>
            <div class="text-body2 highlighted-text text-weight-bold">
              {{ data.author }}
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="center" class="q-mb-md voute-section">
          <q-btn
            size="md"
            padding="sm"
            label="Поддержать"
            color="positive"
            no-caps
            unelevated
            v-close-popup
          />
          <q-btn
            size="md"
            padding="sm"
            label="Против"
            color="deep-orange"
            no-caps
            unelevated
            v-close-popup
          />
        </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped>
.card-image
  border-radius: 5px

.highlighted-text
  color: #4d5870

.voute-section
  gap: 20px
</style>
