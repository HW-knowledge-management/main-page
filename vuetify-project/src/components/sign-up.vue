<script setup>
import { ref, defineEmits } from 'vue'
import Cookies from 'js-cookie'

const emit = defineEmits(['changeComponent'])

const username = ref('')
const password = ref('')
const userData = ref(null)

async function submitForm() {


    
    const res = await fetch(
        `http://localhost:3001/User`
    )
  
    userData.value = await res.json()

    const result = userData.value.find(item => item.userId === username.value)

    console.log(userData.value.length)

    if(result){
        alert('중복되는 ID입니다.')
        username.value = ''
    } else{
        const myData = {
            "username" : username.value,
            "password" : password.value,
            "id" : userData.value.length + 1 + ''
            }
        await fetch('http://localhost:3001/User', {
            method: 'POST', // 또는 'PUT', 'GET'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myData),
 
        })

        Cookies.set('username', username.value, { expires: 1, path: '' })
        Cookies.set('password', password.value, { expires: 1, path: '' })

        emit('changeComponent');

    }

//  emit('changeComponent');
}

</script>

<template>
<h1>sign-up</h1>
<form @submit.prevent="submitForm()">
    <label>id</label>
    <input id="username" type="text" v-model="username">

    <label>password</label>
    <input id="password" type="password" v-model="password">
    <input type="submit" value="확인"/>
</form>
</template>
