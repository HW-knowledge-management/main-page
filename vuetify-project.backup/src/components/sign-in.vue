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

    if(!result){
        username.value = ''
        password.value = ''
        Cookies.remove('username')
        alert('없는 ID입니다.')
    } else{

        if(password.value === result.password){

            Cookies.set('username', username.value, { expires: 1, path: '' })
            Cookies.set('password', password.value, { expires: 1, path: '' })
            emit('changeComponent');
        }
        else {
            username.value = ''
            password.value = ''
            Cookies.remove('username')
            alert('비밀번호가 틀렸습니다.')
        }


    }

//  emit('changeComponent');
}

</script>

<template>
<h1>sign-in</h1>
<form @submit.prevent="submitForm()">
    <label>id</label>
    <input id="username" type="text" v-model="username">

    <label>password</label>
    <input id="password" type="password" v-model="password">
    <input type="submit" value="확인"></input>
</form>
</template>
