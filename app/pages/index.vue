<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';

const { data: page } = await useAsyncData('home', () =>
  queryCollection('content').path('/').first()
)


if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})
</script>


<template>
  <AppHeader/>  
  <div v-if="page" class="relative">
    <UBanner title="Diese Seite befindet sich nur zu Testzwecken online" class="font-robotoslab" />
    <!-- Wenn du den Content rendern willst: -->
        
    <div>
        <MDC :value="page.title" class="*:leading-11 sm:*:leading-19 max-w-3xl mx-auto" />
    </div>
        
     
  </div>
</template>


<style scoped>


.soft {
  width: 100%;
  height: auto;

  /* Rechteckiger Maskenverlauf */
  mask-image:
    linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%),
    linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
  mask-composite: intersect;

  -webkit-mask-image:
    linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%),
    linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%);
  -webkit-mask-composite: destination-in;

  /* Fallback-Hintergrund für debugging */
  background: white;
}

.hero-background {
  background: url('/images/circuit-board.svg');
  background-size: contain;
  background-position: center;
}
</style>
