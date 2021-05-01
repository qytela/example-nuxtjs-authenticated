export default function({ store, redirect }) {
  if (store.state.todos.token == "") {
    return redirect("/")
  }
}