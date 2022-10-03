<template>
    <LayoutHeader />
     <NuxtLayout>
    <NuxtPage :key="$route.fullPath"  />
     </NuxtLayout>
     <LayoutFooter/>
</template>
