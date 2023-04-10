<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a class="flex h-full items-center text-xl" :href="url">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="item in menuItems" :key="item" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ActionButton v-if="!isLoggedIn" @:click="handleClick" />
          <ProfileImage v-else />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "./ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "Google Careers",
      isLoggedIn: false,
      url: "https://careers.google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Life at Google Careers",
        "How we hire",
        "Students",
        "Jobs",
      ],
    };
  },
  methods: {
    handleClick() {
      this.isLoggedIn = !this.isLoggedIn;
    },
  },
};
</script>
