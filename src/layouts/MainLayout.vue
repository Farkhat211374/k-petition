<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ t("problemPage.title") }} </q-toolbar-title>

        <div>
          <q-btn-group rounded>
            <q-btn
              rounded
              :color="locale === 'kk-KZ' ? 'info' : 'white'"
              :text-color="locale === 'kk-KZ' ? 'white' : 'primary'"
              label="KZ"
              @click="switchLanguage('kk-KZ')"
            />
            <q-btn
              rounded
              :color="locale === 'ru-RU' ? 'info' : 'white'"
              :text-color="locale === 'ru-RU' ? 'white' : 'primary'"
              label="RU"
              @click="switchLanguage('ru-RU')"
            />
            <q-btn
              rounded
              :color="locale === 'en-US' ? 'info' : 'white'"
              :text-color="locale === 'en-US' ? 'white' : 'primary'"
              label="EN"
              @click="switchLanguage('en-US')"
            />
          </q-btn-group>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const switchLanguage = (lang) => {
  locale.value = lang;
};
</script>
