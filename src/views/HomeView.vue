<script >
import SingleProject from "../components/SingleProject.vue";
export default {
  components: { SingleProject },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((item) => {
        return item.id !== id;
      });
    },
  },
};
</script>

<template>
  <main class="main">
    <div v-for="project in projects" :key="project.id">
      <!-- <p>{{ project.title }}</p> -->
      <SingleProject :project="project" @delete="handleDelete" />
    </div>
  </main>
</template> 
<style>
.main {
  max-width: 700px;
  min-width: 500px;
}
</style>
