<template>
  <div class="project">
    <div class="action">
      <h3 @click="showdetail = !showdetail">{{ project.title }}</h3>
      <div class="icons">
        <span class="material-symbols-outlined"> edit </span>
        <span @click="deleteProject" class="material-symbols-outlined">
          delete
        </span>
        <span class="material-symbols-outlined"> done </span>
      </div>
    </div>
    <div v-if="showdetail" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showdetail: false,
      url: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  props: ["project"],
  methods: {
    deleteProject() {
      fetch(this.url, { method: "DELETE" })
        .then(() => {
          this.$emit("delete", this.project.id);
        })
        .catch((err) => {
          console.log(err.message)
        });
    },
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 10px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-symbols-outlined {
  font-size: 24px;
  margin-left: 10px;
  color: rgb(71, 71, 71);

  /* color: #b4b1b1; */
  cursor: pointer;
}
.material-symbols-outlined:hover {
  color: black;
}
</style>