<script setup>
import { ref, defineProps } from 'vue'
import Cookies from 'js-cookie'
const props = defineProps({
    questionId: String,
    test: String
})
console.log(props)
</script>
<template>
    <h1>ANSWER!!!!!</h1>
    <hr />
    <h1>{{ props.questionId }}</h1>
</template>
