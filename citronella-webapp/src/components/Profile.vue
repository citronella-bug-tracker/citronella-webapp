<template>
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">
                {{currentUser.firstName}} {{currentUser.lastName}}
            </p>
            <p class="subtitle">
                {{currentUser.email}}
            </p>
        </div>
    </section>
    <section class="section">
        <h1 class="title">Roles</h1>
        <ul>
            <li v-for="role in currentUser.roles" :key="role">{{role.id}} - {{role.name}}</li>
        </ul>
    </section>
    <section class="section">
        <h1 class="title">Privileges</h1>
        <ul>
            <li v-for="privilege in currentUser.privileges" :key="privilege">{{privilege.id}} - {{privilege.name}}</li>
        </ul>
    </section>
</template>

<script>

export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};

</script>
