<template>
  <q-page padding>
    <q-list class="q-mb-md" bordered padding>
      <q-item-label header>Profile</q-item-label>
    </q-list>

    <q-list bordered padding>
      <q-item-label header>More information</q-item-label>

      <q-item to="/settings/help" v-ripple tag="label">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item @click="visitOurWebsite" v-ripple tag="label">
        <q-item-section>
          <q-item-label>Visit github</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item @click="emailUs" v-ripple tag="label">
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { openURL } from "quasar";

export default {
  computed: {
    ...mapGetters("settings", ["settings"]),
    show12HourTimeFormat: {
      get() {
        return this.settings.show12HourTimeFormat;
      },
      set(value) {
        this.setShow12HourTimeFormat(value);
      },
    },
    showTasksInOneList: {
      get() {
        return this.settings.showTasksInOneList;
      },
      set(value) {
        this.setShowTasksInOneList(value);
      },
    },
  },
  methods: {
    ...mapActions("settings", [
      "setShow12HourTimeFormat",
      "setShowTasksInOneList",
    ]),
    visitOurWebsite() {
      openURL("https://github.com/cdariocondori?tab=repositories");
    },
    emailUs() {
      window.location.href =
        "mailto:dxrkio@gmail.com?subject=Evaluation Feedback";
    },
  },
};
</script>

<style>
</style>
