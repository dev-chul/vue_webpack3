<template>
  <div>
    <h1>{{ msg }}</h1>
    <vue-friendly-iframe :src="mySrc" @load="onLoad"></vue-friendly-iframe>
  </div>
</template>

<script>

import Vue from 'vue'
import VueFriendlyIframe from 'vue-friendly-iframe'
// eslint-disable-next-line no-undef
Vue.use(VueFriendlyIframe)
export default {
  name: 'Service2',
  data () {
    return {
      msg: 'Service2 Page'
    }
  },
  computed: {
    mySrc: {
      get: function () {
        return `https://www.pexels.com/search/tiger`
      }
    }
  }
}
</script>
