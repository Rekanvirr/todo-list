<template>
  <form @submit.prevent>
    <div class="Notka">
        <label>Tyutuł Notki</label>
        <input type="text" v-model="NotkaT">
        <label>Zawartość notki</label>
        <textarea v-model="NotatkaT" placeholder="Twoje miejsce na notatke"></textarea>
    </div>
    <div class="submit">
        <button>Dodaj notke</button>
    </div>
  </form>
  <div class="nota">
    <h1> {{ NotkaT }} </h1>
    <br>
    <p> {{ NotatkaT }} </p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            NotkaT: '',
            NotatkaT: '',
        }
    },
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
  display: inline-block;
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