<template>
  <div>
    <section class="wrapper">
      <h2>{{ item.name }}</h2>
    </section>
  </div>
</template>

<script>
export default {
  name: 'item',
  props:['id'],
  data() {
    return {
      item: this.$store.getters.item(this.$route.params.id)
    }
  }
};
</script>

<style lang="scss">
</style>