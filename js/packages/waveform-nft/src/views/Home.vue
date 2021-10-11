<template>
  <div class="container mx-auto">
    <section
      class="flex flex-col items-center mt-12"
    >
      <div class="w-full">
        <a-alert
          class="text-center text-base sm:text-xl"
          message="***IMPORTANT*** Currently running on Testnet. We will anonce when we will live on Mainnet"
          type="info"
          closable
          banner
        />

        <h1
          class="mt-14 dark:text-primary-light uppercase"
        >
          Looking for minting?
        </h1>
        <p
          class="mt-4 text-2xl font-semibold leading-none text-gray-400"
        >
          You are in the rigth place
        </p>
        <div class="my-14">
          <a-button
            class="font-semibold"
            type="primary"
            size="large"
            @click="$router.push('input')"
          >
            Here goes!
          </a-button>
        </div>
      </div>
    </section>
  </div>
</template>
