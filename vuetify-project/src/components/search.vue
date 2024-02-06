<script setup>
import { ref }  from 'vue'
const searchData = ref(null)
//const emit = defineEmits(['searchEmit'])
async function getList() {
    const res = await fetch(
//        `http://localhost:3001/Question/${questionId.value}`
        `http://localhost:3001/wiki`
    )
    searchData.value = await res.json()

}

function data () {
	return {
		
	}
}

getList()
</script>

<template>
<h1>Search</h1>
<hr />
<div>
    <div v-for="item in searchData">
       <p>출력결과 : {{ item.title }} - {{ item.content }} </p>
    </div>
</div>
</template>
