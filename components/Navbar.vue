<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
            <b-nav-item href="#"><n-link to="/recipes" no-prefetch>Recipes</n-link></b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>
