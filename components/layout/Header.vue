<template>
  <header class="fixed top-0 z-30 py-3 px-5 w-full font-thin bg-white border-b border-[#DDDDDD]">
    <div class="mx-auto max-w-[1280px]">
      <div class="flex overflow-hidden justify-between items-center">
        <!-- Header: logo -->
        <NuxtLink class="flex" to="/" >
            Where Camping !
          <!-- <img src="@/assets/images/logo_silson.svg" width="25" alt="logo-image" class="mr-1" /> -->
          <!-- <img src="@/assets/images/logo_silson_text.svg" width="80" alt="logo-image" /> -->
        </NuxtLink>
        <!-- navigation list -->
        <div class="hidden col-span-4 md:flex">
            <NuxtLink to="/intro"  class="mx-10 text-sm text-center">
          서비스소개
          </NuxtLink>
          <NuxtLink to="/campsight"  class="mx-10 text-sm text-center">
          캠핑장찾기
          </NuxtLink>
          <NuxtLink to="/facilities"  class="mx-10 text-sm text-center">
          편의시설안내
          </NuxtLink>
          
          <NuxtLink to="/reviews"  class="mx-10 text-sm text-center">
          캠핑장후기
          </NuxtLink>
         
        </div>
        <!-- <button
          class="mr-2 text-gray-500 hover:text-gray-600 cursor-pointer md:hidden"
          aria-controls="menu"
          :aria-expanded="isOpen"
          @click.stop="isOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="5" width="16" height="2" />
            <rect x="4" y="11" width="16" height="2" />
            <rect x="4" y="17" width="16" height="2" />
          </svg>
        </button> -->
      </div>
    </div>
  </header>
  <div
    id="sidebar"
    ref="sidebar"
    class="hidden grid fixed top-0 right-0 z-40 py-7 px-5 w-screen bg-white/90 border-b transition-all duration-200 ease-in-out md:hidden md:top-auto md:right-auto"
  >
    <button
      ref="trigger"
      class="absolute top-7 right-5 text-gray-500 hover:text-gray-400 md:hidden"
      aria-controls="sidebar"
    >
      <!-- <img src="@/assets/images/icon-x.svg" alt="close-btn" class="p-3" /> -->
      <span class="sr-only">Close sidebar</span>
    </button>
    <a href="#" @click="goTop" class="my-1 mx-5 w-20 text-sm hover:font-bold text-left">실손지킴이 앱 </a>
    <a href="#" @click="goService" class="my-1 mx-5 w-20 text-sm hover:font-bold text-left">서비스 소개</a>
    <a href="#" @click="goAdvert" class="my-1 mx-5 w-20 text-sm hover:font-bold text-left">입점안내</a>
  </div>
</template>