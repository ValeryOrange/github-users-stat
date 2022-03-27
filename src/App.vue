<script setup lang="ts">
  import TokenForm from '@/components/TokenForm.vue'
  import useMainStore from '@/store/index';
  const store = useMainStore();
  
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Repos</router-link>
        <router-link to="/contributors">Contributors</router-link>
      </nav>
    </header>
    <h1 
      v-if="store.token"
      class="greeting">
      Hello, {{store.user}}!
    </h1>
    <token-form v-else />
    <router-view />
  </div>
</template>

<style>
@import '@/assets/base.css';

.greeting {
  margin-left: var(--regular-margin)
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

a, .green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

nav {
  width: 100%;
  font-size: var(--font-size-small);
  margin-top: var(--double-margin);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 var(--regular-padding);
  border-left: 1px solid var(--color-border);
}

a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  border-left: 1px solid var(--color-border-hover);
}


nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
