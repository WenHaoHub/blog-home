<script lang="ts" setup name="Footer">
import Button, { ButtonTypes } from './button.vue'
import { MENULINKS, SOCIAL_LINKS } from '~/store/constants'

const { ref: footerRef } = MENULINKS[4]

const otherProp = reactive({
  target: '_blank',
  rel: 'noreferrer',
})
</script>

<template>
  <footer :id="footerRef" class="relative w-full flex flex-col select-none items-stretch bg-cover">
    <img src="/footer-curve.svg" alt="Footer" class="w-full" height="290" role="presentation" width="1440">
    <div class="h-full w-full">
      <div class="section-container z-10 h-full flex flex-col items-center justify-end py-12">
        <h1 class="text-center text-3xl font-medium md:text-4xl">
          社交媒体
        </h1>
        <div class="mt-8 flex">
          <a
            v-for="el in Object.keys(SOCIAL_LINKS)"
            :key="el"
            :href="SOCIAL_LINKS[el]"
            class="link px-1 duration-300 md:px-2 hover:opacity-80"
            rel="noreferrer"
            target="_blank"
          >
            <img :src="`/social/${el}.svg`" alt="{el}" width="40" height="40">
          </a>
        </div>
        <div class="mt-8 flex">
          <Button classes="mr-3" :type="ButtonTypes.OUTLINE" name="博客文档" :other-props="otherProp" href="http://note.wenhaohub.cn/" />
          <Button classes="ml-3" :type="ButtonTypes.WHITE" name="与我联系" href="https://github.com/WenHaoHub" :other-props="otherProp" />
        </div>
        <!-- <h2 class="mt-8 text-center text-sm sm:text-base">
          Designed and Developed with ❤️ by Ayush
        </h2> -->
       
        <div class="flex justify-cente items-center my-2">
        <img src="/footer-copyright.svg" alt="" width="20px" >
        <p class="ml-2">
           Copyright (c) 2024 wenhao
        </p>
        </div>
         <div class="flex justify-cente items-center ">
        <img src="/footer-bah.svg" alt="" width="20px" >
        <p class="ml-2">
          蜀ICP备2024061733号-2
        </p>
        </div>
      </div>
    </div>
  </footer>
</template>
