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
			{ text: 'Guide', link: '/docs/guide/getting-started' },
			{ text: 'Blog', link: '/blog' },
			{
				text: 'Resources',
				items: [
					{ text: 'Discussions', link: 'https://github.com/kitledger/kitledger/discussions' },
					{ text: 'GitHub', link: 'https://github.com/kitledger/kitledger' },
				]
			},
			{
				text: 'Versions',
				items: [
					{ text: 'Latest', link: '/' }
				]
			}
		],

		sidebar: [
			{
				text: 'Getting Started',
				link: '/guide/getting-started',
			},
			{
				text: 'Overview',
				collapsed: false,
				items: [
					{ text: 'Accounts', link: '/guide/overview/accounts' },
					{ text: 'Batches', link: '/guide/overview/batches' },
					{ text: 'Entities', link: '/guide/overview/entities' },
					{ text: 'Ledgers', link: '/guide/overview/ledgers' },
					{ text: 'Transactions', link: '/guide/overview/transactions' },
					{ text: 'Units', link: '/guide/overview/units' },
				]
			},
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/kitledger/kitledger' }
		],

		search: {
			provider: 'local'
		}
	}
})
