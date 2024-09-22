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
					{ text: 'Discussions', link: 'https://github.com/kitledger/kitledger/discussions' }
				]
			},
			{
				text: 'Versions',
				items: [
					{ text: 'Latest', link: '/' }
				]
			}
		],

		sidebar: {
			'/docs/': [
				{
					text: 'Why KitLedger',
					link: '/docs/why',
				},
				{
					text: 'Concepts',
					collapsed: false,
					items: [
						{ text: 'Accounts', link: '/docs/guide/concepts/accounts' },
						{ text: 'Batches', link: '/docs/guide/concepts/batches' },
						{ text: 'Entities', link: '/docs/guide/concepts/entities' },
						{ text: 'Ledgers', link: '/docs/guide/concepts/ledgers' },
						{ text: 'Transactions', link: '/docs/guide/concepts/transactions' },
						{ text: 'Units', link: '/docs/guide/concepts/units' },
					]
				},
				{
					text: 'Getting Started',
					link: '/docs/guide/getting-started',
				},
			],
			'/blog/': [
				{
					text: 'Blog',
					items: [
						{ text: 'Changelog', link: '/blog/changelog' },
						{ text: 'Decisions', link: '/blog/decisions' },
						{ text: 'News', link: '/blog/news' },
					]
				}
			],
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/kitledger/kitledger' }
		],

		search: {
			provider: 'local'
		}
	}
})
