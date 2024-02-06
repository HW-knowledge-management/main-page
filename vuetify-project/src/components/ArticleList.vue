<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Title</th>
        <th scope="col">Text</th>
      </tr>
    </thead>
    <tbody>
      <tr
        @click="Read(index)"
        class="textline textBox"
        v-for="(arr, index) in data"
        :key="index"
      >
        <th scope="row">{{ arr.id }}</th>
        <td>{{ arr.name }}</td>
        <td>{{ arr.title }}</td>
        <div class="textBox">{{ arr.text }}</div>
      </tr>
    </tbody>
  </table>
</template>

<script>
import data from "../data";
export default {
  name: "articleList",
  data() {
    return {
      data: data
    };
  },
  methods: {
    Read(index) {
      console.log(index);
      this.$router.push({ path: `/read/${index}` });
    }
  }
};
</script>

<style scoped>
.table {
  width: 800px;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-line-clamp: 1;
  word-wrap: break-word;
}

.textline:hover {
  color: rgba(25, 0, 255, 0.404);
  transition: 0.5s;
}
.textBox {
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
