<script setup>
import { ref }  from 'vue'
const props = defineProps(['contentOfWIKI'])
const searchData = ref(null)
async function getList() {
    const res = await fetch(
        `http://localhost:3000/wiki`
//        `https://mmmmmmm-dry-glade-6852.fly.dev/wiki`
    )
    searchData.value = await res.json()

}

getList()
</script>

<template>
<h1>Search</h1>
<hr />
<div>
    <div v-for="item in searchData">
        <p>{{item.title}}</p>
    </div>
</div>
</template>

