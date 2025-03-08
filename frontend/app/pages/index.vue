<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <HomeHeader />
    <main>
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-yellow-50 py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
          <div class="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div class="flex flex-col justify-center space-y-4">
              <div class="space-y-2">
                <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Share Your Travel Journey With The World
                </h1>
                <p class="max-w-[600px] text-gray-600 md:text-xl">
                  Pin your adventures on the map, share your stories, and connect with fellow travelers around the
                  globe.
                </p>
              </div>
              <div class="flex flex-col gap-2 min-[400px]:flex-row">
                <button class="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500">
                  Get Started
                </button>
                <button
                  class="rounded-md border border-yellow-400 px-4 py-2 text-sm font-medium text-yellow-500 hover:bg-yellow-50">
                  Learn More
                </button>
              </div>
            </div>
            <div class="flex items-center justify-center">
              <div class="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl shadow-xl">
                <img src="/landing-page-placeholder.png" alt="SenoPin App Interface"
                  class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                  <div class="flex items-center gap-3">
                    <div class="h-10 w-10 overflow-hidden rounded-full bg-yellow-200">
                      <img src="/bali-girl.png" alt="User Avatar" class="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p class="font-medium">Sarah's Trip to Bali</p>
                      <p class="text-xs text-gray-500">3 days ago • 24 likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl"></div>
        <div class="absolute -right-48 top-48 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl"></div>
      </section>

      <!-- Features Section -->
      <section id="features" class="bg-white py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <div class="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                Features
              </div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Your Travel Story, Your Way
              </h2>
              <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SenoPin combines the best of social media with interactive maps to create a unique travel sharing
                experience.
              </p>
            </div>
          </div>
          <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div class="flex flex-col items-center space-y-4 text-center">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="h-8 w-8 text-yellow-500">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 class="text-xl font-bold">Pin Your Adventures</h3>
              <p class="text-gray-500">
                Drop pins on an interactive map to mark your favorite spots and travel destinations.
              </p>
            </div>
            <div class="flex flex-col items-center space-y-4 text-center">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="h-8 w-8 text-yellow-500">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <polyline points="16 6 12 2 8 6"></polyline>
                  <line x1="12" x2="12" y1="2" y2="15"></line>
                </svg>
              </div>
              <h3 class="text-xl font-bold">Share Your Journey</h3>
              <p class="text-gray-500">
                Post updates, photos, and stories about your travels similar to twitter for friends and followers to
                enjoy.
              </p>
            </div>
            <div class="flex flex-col items-center space-y-4 text-center">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="h-8 w-8 text-yellow-500">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" x2="22" y1="12" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                  </path>
                </svg>
              </div>
              <h3 class="text-xl font-bold">Discover New Places</h3>
              <p class="text-gray-500">
                Explore other travelers' pins and stories to find your next adventure destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section id="how-it-works" class="bg-yellow-50 py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <div class="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                How It Works
              </div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Simple. Social. Travel.
              </h2>
              <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Getting started with SenoPin is easy. Create an account, pin your locations, and start sharing.
              </p>
            </div>
          </div>
          <div class="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div class="relative flex flex-col space-y-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-white">
                1
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-bold">Create Your Profile</h3>
                <p class="text-gray-500">
                  Sign up and customize your traveler profile with your interests and favorite destinations.
                </p>
              </div>
              <!-- <div class="hidden lg:block absolute right-0 top-6 h-0.5 w-full max-w-[100px] bg-yellow-300"></div> -->
            </div>
            <div class="relative flex flex-col space-y-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-white">
                2
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-bold">Pin Your Locations</h3>
                <p class="text-gray-500">
                  Drop pins on the interactive map to mark places you've visited or plan to visit.
                </p>
              </div>
              <!-- <div class="hidden lg:block absolute right-0 top-6 h-0.5 w-full max-w-[100px] bg-yellow-300"></div> -->
            </div>
            <div class="flex flex-col space-y-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-white">
                3
              </div>
              <div class="space-y-2">
                <h3 class="text-xl font-bold">Share & Connect</h3>
                <p class="text-gray-500">
                  Post updates, photos, and stories about your travels. Connect with other travelers.
                </p>
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl">
            <div class="relative h-[300px] w-full">
              <img src="/3d-map-navigation.jpg" alt="SenoPin Map Interface" class="h-full w-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold">Interactive Map Experience</h3>
              <p class="mt-2 text-gray-500">
                Our intuitive map interface makes it easy to visualize your travels and discover new destinations
                through the experiences of other travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="bg-white py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <div class="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                Testimonials
              </div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Loved by Travelers Worldwide
              </h2>
              <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our community has to say about their experience with SenoPin.
              </p>
            </div>
          </div>
          <div class="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
            <div class="rounded-xl bg-yellow-50 p-6 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="shrink-0 h-12 w-12 overflow-hidden rounded-full bg-yellow-200">
                  <img src="/profile-circle.svg?height=100&width=100" alt="User Avatar"
                    class="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 class="text-lg font-bold">Alex Thompson</h4>
                  <p class="text-sm text-gray-500">Backpacker • 28 countries</p>
                  <div class="mt-2 flex">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      fill="currentColor" class="h-5 w-5 text-yellow-400">
                      <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="mt-3 text-gray-600">
                    "SenoPin has completely changed how I document my travels. I love being able to see my journey
                    visualized on a map and sharing my experiences with other travelers."
                  </p>
                </div>
              </div>
            </div>
            <div class="rounded-xl bg-yellow-50 p-6 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="shrink-0 h-12 w-12 overflow-hidden rounded-full bg-yellow-200">
                  <img src="/profile-circle.svg?height=100&width=100" alt="User Avatar"
                    class="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 class="text-lg font-bold">Maya Rodriguez</h4>
                  <p class="text-sm text-gray-500">Travel Blogger • 42 countries</p>
                  <div class="mt-2 flex">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                      fill="currentColor" class="h-5 w-5 text-yellow-400">
                      <path fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <p class="mt-3 text-gray-600">
                    "As a travel blogger, SenoPin has become an essential tool for me. It's so much more engaging than
                    traditional social media platforms for sharing my adventures."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-yellow-400 py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
          <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl">
                Ready to Start Your Journey?
              </h2>
              <p class="mx-auto max-w-[700px] text-black/80 md:text-xl">
                Join thousands of travelers who are already sharing their adventures on SenoPin.
              </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <button class="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/80">
                Sign Up Now
              </button>
              <button
                class="rounded-md border border-black px-4 py-2 text-sm font-medium text-black hover:bg-yellow-400">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t py-12 md:py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="space-y-4">
            <NuxtLink href="/" class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="h-6 w-6 text-yellow-400">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span class="text-xl font-bold">SenoPin</span>
            </NuxtLink>
            <p class="text-sm text-gray-500">
              Share your travel journey with the world. Pin your adventures, connect with fellow travelers.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-bold">Company</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  About Us
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Careers
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Press
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Blog
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-bold">Support</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Help Center
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Safety Center
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Community Guidelines
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-lg font-bold">Legal</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Terms of Service
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink href="#" class="text-sm text-gray-500 hover:text-yellow-500 transition-colors">
                  Cookie Policy
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t pt-8">
          <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p class="text-sm text-gray-500">
              © {{ new Date().getFullYear() }} SenoPin. All rights reserved.
            </p>
            <div class="flex gap-4">
              <NuxtLink href="#" class="text-gray-500 hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span class="sr-only">Facebook</span>
              </NuxtLink>
              <NuxtLink href="#" class="text-gray-500 hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span class="sr-only">Instagram</span>
              </NuxtLink>
              <NuxtLink href="#" class="text-gray-500 hover:text-yellow-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span class="sr-only">Twitter</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
