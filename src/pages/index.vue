<template>
  <div class="w-full h-full p-4 flex flex-col justify-center items-center">
    <div class="w-full h-full items-center flex flex-col gap-5 mb-10" v-for="project in projects">
      <div class="w-full flex flex-col items-center">
        <img class="w-1/4 mb-5" :src="project.logo" alt="logo">
        <p class="text-center mb-5 text-base font-light">{{ project.description }}</p>
      </div>
      <Card>
        <template #bg>
          <a :href="project.link"><img class="rounded-3xl" :src="project.image" alt="preview"></a>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
  data() {
    return {
      projects: [
        {
          title: 'Blue Skies',
          description: 'My final year project, a Solar Services platform. I held the role of UI Engineer within the development team.',
          image: 'https://reviron.s3.af-south-1.amazonaws.com/images/Blue Skies.jpg',
          link: 'https://blue-skies.netlify.app/',
          logo: 'https://reviron.s3.af-south-1.amazonaws.com/images/blue-skies-logo.svg'
        },
        {
          title: 'Reviron',
          description: 'I was tasked with redesigning the website and developing a simple return on investment calculator.',
          image: 'https://reviron.s3.af-south-1.amazonaws.com/images/Reviron.png',
          link: 'https://reviron.co.za/',
          logo: 'https://reviron.s3.af-south-1.amazonaws.com/images/reviron-logo.svg'
        },
        {
          title: 'Alluminium Africa',
          description: 'I was tasked with redesigning the website and implementing e-commerce-inspired features, including a "Add to Quote" and "Get a Quote" functionality.',
          image: 'https://reviron.s3.af-south-1.amazonaws.com/images/Aluminium Africa.png',
          link: 'https://aluminium-africa.co.za/',
          logo: 'https://reviron.s3.af-south-1.amazonaws.com/images/aluminium-africa-logo.svg'
        }
      ]
    }
  }
};
</script>

