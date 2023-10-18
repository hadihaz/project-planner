<script >
import SingleProject from "../components/SingleProject.vue";
import filterNav from "../components/FilterNav.vue";
export default {
  components: { SingleProject, filterNav },
  data() {
    return {
      projects: [],
      current: "all",
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
    handleComplete(id) {
      let project = this.projects.find((item) => {
        return item.id === id;
      });
      project.complete = !project.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "complated") {
        return this.projects.filter((item) => item.complete);
      } else if (this.current === "ongoing") {
        return this.projects.filter((item) => !item.complete);
      } else {
        return this.projects;
      }
    },
  },
};
</script>

<template>
  <main class="main">
    <filterNav @filterChange="current = $event" :current="current" />
    <div v-for="project in filteredProjects" :key="project.id">
      <!-- <p>{{ project.title }}</p> -->
      <SingleProject
        :project="project"
        @delete="handleDelete"
        @complete="handleComplete"
      />
    </div>
  </main>
</template> 
<style>
.main {
  max-width: 700px;
  min-width: 500px;
}
</style>
