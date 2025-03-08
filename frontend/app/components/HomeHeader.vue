<script lang="ts">
const isMenuOpen = ref(false)
</script>
<template>
	<!-- Header -->
	<header class="sticky top-0 z-50 w-full border-b bg-white">
		<div class="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
			<NuxtLink to="/" class="flex items-center gap-2">
				<img src="/logo.png" class="h-12 w-12" alt="Senopin Logo">
				<span class="text-xl font-bold">SenoPin</span>
			</NuxtLink>
			<nav class="hidden md:flex gap-6">
				<NuxtLink to="#features" class="text-sm font-medium hover:text-yellow-500 transition-colors">
					Features
				</NuxtLink>
				<NuxtLink to="#how-it-works" class="text-sm font-medium hover:text-yellow-500 transition-colors">
					How It Works
				</NuxtLink>
				<NuxtLink to="#testimonials" class="text-sm font-medium hover:text-yellow-500 transition-colors">
					Testimonials
				</NuxtLink>
			</nav>
			<div class="hidden md:flex gap-4">
				<NuxtLink to="/app/login" class="text-sm font-medium hover:text-yellow-500 transition-colors">
					<button class="rounded-md  px-4 py-2 text-sm font-medium text-black ">
						Log in
					</button>
				</NuxtLink>
				<NuxtLink to="/app/signup" class="text-sm font-medium hover:text-yellow-500 transition-colors">
					<button class="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500">
						Sign Up
					</button>
				</NuxtLink>
			</div>
			<button class="md:hidden" @click="isMenuOpen = !isMenuOpen">
				<svg v-if="isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
					<path d="M18 6 6 18"></path>
					<path d="m6 6 12 12"></path>
				</svg>
				<svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
					stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
					<line x1="4" x2="20" y1="12" y2="12"></line>
					<line x1="4" x2="20" y1="6" y2="6"></line>
					<line x1="4" x2="20" y1="18" y2="18"></line>
				</svg>
			</button>
		</div>
		<div v-if="isMenuOpen" class="md:hidden container mx-auto px-4 pb-4">
			<nav class="flex flex-col gap-4">
				<NuxtLink href="#features" class="text-sm font-medium hover:text-yellow-500 transition-colors"
					@click="isMenuOpen = false">
					Features
				</NuxtLink>
				<NuxtLink href="#how-it-works" class="text-sm font-medium hover:text-yellow-500 transition-colors"
					@click="isMenuOpen = false">
					How It Works
				</NuxtLink>
				<NuxtLink href="#testimonials" class="text-sm font-medium hover:text-yellow-500 transition-colors"
					@click="isMenuOpen = false">
					Testimonials
				</NuxtLink>
				<div class="flex flex-col gap-2 pt-2">
					<NuxtLink href="#" class="text-sm font-medium hover:text-yellow-500 transition-colors">
						Log in
					</NuxtLink>
					<button class="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500">
						Sign Up
					</button>
				</div>
			</nav>
		</div>
	</header>
</template>
