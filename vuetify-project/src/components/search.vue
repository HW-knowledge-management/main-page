<script setup>
import { ref }  from 'vue'
const props = defineProps(['contentOfWIKI'])
const searchData = ref(null)
//const emit = defineEmits(['searchEmit'])
async function getList() {
    const res = await fetch(
//        `http://localhost:3001/wiki`
        `https://mmmmmmm-dry-glade-6852.fly.dev/wiki`
    )
    searchData.value = await res.json()

}

function searchTitle(item){
    if(item.title === props.contentOfWIKI){
        return item.content
    } else {
        return null
    }
}


getList()
</script>

<template>
<h1>Search</h1>
<hr />
<div>
    <div v-for="item in searchData">
        <p>{{searchTitle(item)}}</p>
    </div>
</div>
</template>

