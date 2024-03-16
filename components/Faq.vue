<template>
  <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8">
        <!-- Col 1 -->
        <div>
          <p class="uppercase text-teal-600 text-xl mb-3">FAQ SACCO</p>
          <h2
            class="text-3xl leading-tight text-black sm:text-5xl lg:text-7xl font-semibold"
          >
            How it works for our Users
          </h2>
          <div class="py-4 lg:py-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
              consequatur? Obcaecati ex doloremque ullam placeat!
            </p>
          </div>
          <div class="">
            <img
              class="h-96 w-full rounded-3xl object-cover"
              src="@/assets/man-office.jpg"
              alt=""
            />
          </div>
        </div>
        <!-- Col 2 -->
        <div class="mt-8 space-y-4 md:mt-16">
          <div
            class="bg-white border hover:bg-gray-50 border-teal-500 cursor-pointer rounded-3xl group"
          >
            <button
              type="button"
              id="question1"
              data-state="closed"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span class="flex text-lg font-semibold text-black text-left">
                How can I get started?
              </span>
              <div class="rounded-full bg-teal-500">
                <svg
                  id="arrow4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              id="answer1"
              style="display: none"
              class="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                Getting started is easy! Sign up for an account, and you'll have
                access to our platform's features. No credit card required for
                the initial signup.
              </p>
            </div>
          </div>
          <div
            class="bg-white border hover:bg-gray-50 border-teal-500 cursor-pointer rounded-3xl group"
          >
            <button
              type="button"
              id="question2"
              data-state="closed"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              onclick=""
            >
              <span class="flex text-lg font-semibold text-black text-left">
                What is the pricing structure?
              </span>
              <div class="rounded-full bg-teal-500">
                <svg
                  id="arrow4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              id="answer2"
              style="display: none"
              class="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                Our pricing structure is flexible. We offer both free and paid
                plans. You can choose the one that suits your needs and budget.
              </p>
            </div>
          </div>
          <div
            class="bg-white border hover:bg-gray-50 border-teal-500 cursor-pointer rounded-3xl group"
          >
            <button
              type="button"
              id="question3"
              data-state="closed"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span class="flex text-lg font-semibold text-black text-left"
                >What kind of support do you provide?
              </span>
              <div class="rounded-full bg-teal-500">
                <svg
                  id="arrow4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              id="answer3"
              style="display: none"
              class="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                We offer comprehensive customer support. You can reach out to
                our support team through various channels, including email,
                chat, and a knowledge base.
              </p>
            </div>
          </div>
          <div
            class="bg-white border hover:bg-gray-50 border-teal-500 cursor-pointer rounded-3xl group"
          >
            <button
              type="button"
              id="question4"
              data-state="closed"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span class="flex text-lg font-semibold text-black text-left"
                >Can I cancel my subscription anytime?
              </span>
              <div class="rounded-full bg-teal-500">
                <svg
                  id="arrow4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              id="answer4"
              style="display: none"
              class="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                Yes, you can cancel your subscription at any time without any
                hidden fees. We believe in providing a hassle-free experience
                for our users.
              </p>
            </div>
          </div>
          <div
            class="bg-white border hover:bg-gray-50 border-teal-500 cursor-pointer rounded-3xl group"
          >
            <button
              type="button"
              id="question4"
              data-state="closed"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span class="flex text-lg font-semibold text-black text-left"
                >How do I transfer my subscription?
              </span>
              <div class="rounded-full bg-teal-500">
                <svg
                  id="arrow4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              id="answer4"
              style="display: none"
              class="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                Yes, you can cancel your subscription at any time without any
                hidden fees. We believe in providing a hassle-free experience
                for our users.
              </p>
            </div>
          </div>
          <div
            class="bg-white border hover:bg-gray-50 border-teal-500 cursor-pointer rounded-3xl group"
          >
            <button
              type="button"
              id="question4"
              data-state="closed"
              class="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span class="flex text-lg font-semibold text-black text-left"
                >How do I renew my subscription?
              </span>
              <div class="rounded-full bg-teal-500">
                <svg
                  id="arrow4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            <div
              id="answer4"
              style="display: none"
              class="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>
                Yes, you can cancel your subscription at any time without any
                hidden fees. We believe in providing a hassle-free experience
                for our users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
