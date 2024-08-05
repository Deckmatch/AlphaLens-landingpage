<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [
//   {
//   label: 'Docs',
//   to: '/docs'
// }, {
//   label: 'Pricing',
//   to: '/pricing'
// }, {
//   label: 'Blog',
//   to: '/blog'
// }
]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <div class="max-w-32">

        <Logo />
      </div>
    </template>

    <template #right>
      <UButton
        label="Try it yourself"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="https://google.com"
        class="hidden lg:flex"
      />
    </template>

    <!-- <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      /> 
    </template> -->
  </UHeader>
</template>
