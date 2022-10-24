<template>
  <form @submit.prevent>
    <label>Todo:</label>
  <input type="text" v-model="tempTodo">
  <div class="submit">
        <button @click="addTodo">Dodaj do listy do zrobienia</button>
    </div>
  <div v-for="(todo, index) in todos" :key="index" class="pill">
       <span @click="removeTodo(todo)">{{ index + 1 }}. {{ todo }} </span>
       <br>
    </div>

  </form>
</template>

<script>
export default {
    data(){
        return {
            todos: [],
            tempTodo: '',
        }
    },methods: {
      addTodo(e) {
            if (this.tempTodo) {
                    this.todos.push(this.tempTodo)
                this.tempTodo = ''
            }
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((item) =>  {
                return todo != item
            })
        },
    }
}
</script>

<style>
   form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
   label {
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
   input, textarea {
   display: block;
   padding: 10px 6px;
   width: 100%;
   box-sizing: border-box;
   border: none;
   border-bottom: 1px solid #ddd;
   color: #555;
}
.pill {
  display: block;
  margin: 20px 10px 10px 10px;
  padding: 15px 15px;
  background: #eee;
  border-radius: 20px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}
 .nota{
    display: inline-block;
    margin: 20px 10px 10px 10px;
    padding: 15px 15px;
    background: #eee;
    border-radius: 20px;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    color: black;
 }
button {
background: #0b6dff;
border: 0;
padding: 10px 20px;
margin-top: 20px;
color: white;
border-radius: 20px;
}
.submit {
    text-align: center;
}
</style>