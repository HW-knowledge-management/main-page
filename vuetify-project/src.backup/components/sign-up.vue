<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['changeComponent']);

function submitForm() {
  emit('changeComponent', 'sign-up');
  console.log("Test")
}

</script>

<template>
<h1>sign-up</h1>
<form @submit.prevent="submitForm()">
    <label>id</label>
    <input id="username" type="text">

    <label>password</label>
    <input id="password" type="password">
    <input type="submit" value="확인"></input>
</form>
</template>
