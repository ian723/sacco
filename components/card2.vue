<template>
  <div class="mx-auto max-w-7xl">
    <div class="flex flex-col lg:flex-row">
      <div class="lg:flex-1 mt-12 rounded-3xl p-4 sm:p-6 lg:p-0">
        <img class="rounded-3xl" src="@/assets/f1.webp" alt="f1" />
      </div>
      <div class="flex-1 p-2 rounded-xl">
        <div class="p-6 rounded-xl">
          <h1 class="font-bold text-4xl mb-4 mt-3 pr-4">
            FINANCIAL Achievements
          </h1>
          <div class="flex flex-col space-y-4">
            <div class="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bank"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"
                />
              </svg>
              <h2>Start from 2000 in Kenya</h2>
            </div>
            <div class="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bank"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"
                />
              </svg>
              <h2>Favoured by 15.8M Kenyans</h2>
            </div>
            <div class="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bank"
                viewBox="0 0 16 16"
              >
                <path
                  d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.5.5 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89zM3.777 3h8.447L8 1zM2 6v7h1V6zm2 0v7h2.5V6zm3.5 0v7h1V6zm2 0v7H12V6zM13 6v7h1V6zm2-1V4H1v1zm-.39 9H1.39l-.25 1h13.72z"
                />
              </svg>
              <h2>Being used by 700,000 UGANDAN'S Since 2018.</h2>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row">
          <!-- First set of cards -->
          <div
            class="mt-7 p-3 sm:grid grid-row-2 lg:flex-row mx-auto lg:max-w-2xl lg:w-1/2"
          >
            <div class="bg-white p-4 rounded-2xl border-2 flex flex-col pb-3">
              <div class="py-0">
                <h2 class="font-semibold text-lg mb-4">
                  Company provides No.1 BNPL Service operating FINANCIAL
                </h2>
                <p class="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, asperiores.
                </p>
              </div>
            </div>
          </div>

          <!-- Second set of cards -->
          <div
            class="mt-7 p-3 sm:grid grid-row-2 lg:flex-row mx-auto lg:max-w-2xl lg:w-1/2"
          >
            <div class="bg-white p-4 rounded-2xl border-2 flex flex-col pb-3">
              <div class="py-0">
                <h2 class="font-semibold text-lg mb-4">
                  Experienced and trustful BNPL Leading company
                </h2>
                <p class="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, asperiores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardLayout",
};
</script>
