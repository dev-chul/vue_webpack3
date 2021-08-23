<template>
  <div :class="classObj" class="app-wrapper">
    <h3>- Router -</h3>
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <hr/>
        <h3>- Location -</h3>
        <navbar />
        <hr/>
        <h3>- History -</h3>
        <tags-view v-if="needTagsView" />
      </div>
      <hr/>
      <h3>- View -</h3>
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain, Navbar, TagsView, Sidebar } from './components'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    TagsView,
    Sidebar
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj () {
      return {
        // hideSidebar: !this.sidebar.opened,
        // openSidebar: this.sidebar.opened,
        // withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    // handleClickOutside () {
    //   this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    // }
  }
}
</script>
