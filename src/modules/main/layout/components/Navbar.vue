<template>
  <div class="navbar">

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/modules/main/layout/components/Breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  computed: {
    ...mapGetters(['sidebar', 'avatar', 'device'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
