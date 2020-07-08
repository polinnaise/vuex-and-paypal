<template>
  <div>
    <h3>DORA GOLDSMITH</h3>
    <nav>
      <router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`"> {{routes.text}} </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Bio',
          page:'/bio'
        },
        {
          id: 2,
          text: 'Webshop',
          page:'/webshop'
        },
        {
          id: 3,
          text: 'Mummification',
          page:'/exhibitions/mummification'
        },
        {
          id: 4,
          text: 'Conferences',
          page:'/lectures/conferences'
        },
        {
          id: 5,
          text: 'Invited Lectures',
          page:'/lectures/invited_lectures'
        }
      ]
    }
  }
}
</script>
