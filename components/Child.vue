<template>
  <b-table striped hover :items="items" :fields="fields">
    <template #cell(actions)="row">
      <b-button size="sm" class="mr-1">Show</b-button>
      <slot name="button" :row="row" />
    </template>
  </b-table>
</template>

<script>
export default {
  name: "Child",
  data() {
    return {
      items: [
        { age: 40, name: { first_name: "Dickerson", last_name: "Macdonald" } },
        { age: 21, name: { first_name: "Larsen", last_name: "Shaw" } },
        { age: 89, name: { first_name: "Geneva", last_name: "Wilson" } },
        { age: 38, name: { first_name: "Jami", last_name: "Carney" } }
      ],
      fields: [
        { key: "name", label: "Full Name", formatter: (value) => `${value.first_name} ${value.last_name}` },
        { key: "age", label: "Age" },
        { key: "actions", label: "Actions" }
      ]
    }
  }
}
</script>