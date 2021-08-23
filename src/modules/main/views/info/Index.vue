<template>
  <div>
    <h1>{{ msg }}</h1>
    <hello-world/>
  </div>
</template>

<script>
import HelloWorld from '@/modules/main/components/sample/HelloWorld.vue'
export default {
  components: { HelloWorld },
  name: 'Info',
  data () {
    return {
      msg: 'Welcome to Your Login Info...'
    }
  }
}
</script>
