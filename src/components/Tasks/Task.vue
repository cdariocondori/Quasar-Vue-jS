<template>
  <q-item
    :class="!task.completed ? 'bg-teal-1' : 'bg-green-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
    clickable
    v-ripple
  >
    <q-item-section>
      <q-item-label
        v-html="$options.filters.searchHighlight(task.name, search)"
      >
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon class="q-mr-xs" name="event" size="18px" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.dueDate | niceDate }}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ taskDueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          v-if="!task.completed"
          color="secondary"
          label="subscribe"
          @click.stop="showEditTaskModal"
        />

        <q-btn
          v-if="task.completed"
          @click.stop="promptToDelete(id)"
          color="red"
          icon="delete"
          flat
          round
          dense
        />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task @close="showEditTask = false" :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { date } from "quasar";

export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false,
    };
  },
  computed: {
    ...mapState("tasks", ["search"]),
    ...mapGetters("settings", ["settings"]),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        return date.formatDate(
          this.task.dueDate + " " + this.task.dueTime,
          "h:mmA"
        );
      }
      return this.task.dueTime;
    },
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    ...mapActions("tasks", ["updateTask"]),
    showEditTaskModal() {
      this.showEditTask = true;
    },
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really unsubscribe?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.updateTask({ id: id, updates: { completed: false } });
        });
    },
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMM D");
    },
    searchHighlight(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, "ig");
        return value.replace(searchRegExp, (match) => {
          return '<span class="bg-yellow-6">' + match + "</span>";
        });
      }
      return value;
    },
  },
  components: {
    "edit-task": require("components/Tasks/Modals/EditTask.vue").default,
  },
};
</script>