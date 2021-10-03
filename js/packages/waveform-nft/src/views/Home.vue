<template>
  <div class="container mx-auto">
    <section
      class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-2"
    >
      <div class="w-full sm:w-1/3 text-left">
        <h1
          class="text-3xl sm:text-5xl text-center sm:text-left font-semibold text-ternary-dark dark:text-primary-light uppercase"
        >
          Looking for minting?
        </h1>
        <p
          class="mt-4 text-2xml sm:text-4xl text-center sm:text-left font-semibold leading-none text-gray-400"
        >
          You are in the rigth place
        </p>
        <div class="my-10">
          <router-link
            to="/input"
            class="btn-primary"
          >
            Start
          </router-link>
        </div>
      </div>
      <div class="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0">
        <img
          src="@/assets/images/developer-dark.svg"
          alt="Developer"
        />
      </div>
    </section>
  </div>
</template>
