<template>
  <div>
    <div class="p-2">Simple Slot and Partials Component</div>
    <child>
      <template #button="row">
        <b-button size="sm" class="mr-1" @click="onDelete(row)">Delete</b-button>
      </template>
    </child>
  </div>
</template>

<script>
import Child from "~/components/Child"

export default {
  name: "Parent",
  components: {
    Child
  },
  methods: {
    onDelete(data) {
      console.log(data)
      this.$router.push("/users/1")
    }
  }
}
</script>