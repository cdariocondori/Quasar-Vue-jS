<template>
  <q-card>
    <modal-header>confirm your data</modal-header>

    <form @submit.prevent="submitForm">
      <p class="text-center">Add {{ taskToSubmit.name }}</p>
      <q-card-section class="q-pt-none">
        <modal-task-name
          style="display: none"
          :name.sync="taskToSubmit.name"
          ref="modalTaskName"
        />
        <q-input filled label="Email" />
      </q-card-section>

      <modal-buttons />
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import mixinAddEditTask from "src/mixins/mixin-add-edit-task";

export default {
  mixins: [mixinAddEditTask],
  props: ["task", "id"],
  data() {
    return {
      taskToSubmit: {},
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: { completed: true },
      });
      this.$emit("close");
    },
  },
  created() {
    this.taskToSubmit = Object.assign({}, this.task);
  },
};
</script>