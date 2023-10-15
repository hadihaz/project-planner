<template>
  <div class="project">
    <div class="action">
      <h3 @click="showdetail = !showdetail">{{ project.title }}</h3>
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
    };
  },
  props: ["project"],
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
</style>