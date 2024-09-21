import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [['link', { rel: 'icon', href: '/brand/default.png' }]],
	title: "KitLedger",
	description: "A framework to simplify the creation of transactional systems",
	
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/docs/guide' }
		],

		sidebar: [
			{
				text: 'Docs',
				items: [
				{ text: 'Guide', link: '/docs/guide' }
				]
			},
			{
				text: 'Blog',
				items: [
				{ text: 'Changelog', link: '/blog/changelog' },
				{ text: 'Decisions', link: '/blog/decisions' },
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/kitledger/kitledger' }
		],

		search: {
			provider: 'local'
		}
	}
})
