module.exports = {
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Enecuum Guides',
			description: 'This set of manuals is aimed to help with the first steps into the Blockchain Mobile Network for decentralized applications.'
		},
		'/ru/': {
			lang: 'ru-RU',
			title: 'Руководства Enecuum',
			description: 'Этот набор руководств призван помочь с освоением мобильной блокчейн-сети для децентрализованных приложений.'
		}
	},
	themeConfig: {
		repo: 'Enecuum/docs',
		editLinks: true,
		smoothScroll: true,
		nextLinks: false,
		prevLinks: false,
		algolia: {
			apiKey: '267bde9989879be498654286a751ad9b',
			indexName: 'enecuum'
		},
		locales: {
			'/': {
				selectText: 'Language',
				label: 'English',
				ariaLabel: 'Language',
				editLinkText: 'Edit this page on GitHub',
				sidebar: [
					'/',
					['/faq', 'FAQ'],
					['/how-to-use','How to Use the App'],
					['/how-to-buy','How to Buy ENQ on Exchange'],
					['/how-to-swap','How to Swap ENQ'],
					['/how-to-mine-bit','How to Mine BIT'],
					['/token-issue','How to Issue Own Tokens'],
					['/how-to-pos','How to Run PoS Node'],
					['/how-to-delegate','How to Delegate'],
					['/referral','How to Join the Referral Program'],
					['/how-does-roi-work','How Does ROI Calculator Work'],
					['/research','Research Papers']
				],
				nav: [	
					{ text: 'enecuum.com', link: 'https://enecuum.com' },
					{
					text: 'Enecuum Network',
					items: [
						{ text: 'Telegram discussion group', link: 'https://t.me/Enecuum_EN' },
						{ text: 'Telegram news channel', link: 'https://t.me/ENQbeam' },
						{ text: 'App Download', link: 'https://app.enecuum.com' },
						{ text: 'Blockchain Explorer', link: 'https://neuro.enecuum.com' },
						{ text: 'ROI Calculator', link: 'https://neuro.enecuum.com/#!/roi' },
						{ text: 'Web Wallet & Swap', link: 'https://wallet.enecuum.com' },
						{ text: 'Etherscan', link: 'https://etherscan.io/token/0x16ea01acb4b0bca2000ee5473348b6937ee6f72f' },
						{ text: 'Coingecko', link: 'https://www.coingecko.com/en/coins/enecuum' },
						{ text: 'Privacy Policy', link: 'https://enecuum.com/docs/privacy.pdf' },
						{ text: 'Terms & Conditions', link: 'https://enecuum.com/docs/terms.pdf' }
					]
					}
					
				]
			},
			'/ru/': {
				selectText: 'Язык',
				label: 'Русский',
				editLinkText: 'Улучшить перевод на GitHub',
				lastUpdated: 'Обновлено',
				sidebar: [
					'/ru/',
					['/ru/faq', 'FAQ'],
					['/ru/how-to-use','Как пользоваться приложением'],
					['/ru/how-to-buy','Как купить ENQ на бирже'],
					['/ru/how-to-swap','Как сделать своп ENQ'],					
					['/ru/how-to-mine-bit','Как майнить BIT'],
					['/ru/token-issue','Как выпустить собственные токены'],
					['/ru/how-to-pos','Как запустить PoS'],
					['/ru/how-to-delegate','Как делегировать средства'],
					['/ru/referral','Как стать участником Реферальной Программы'],
					['/ru/how-does-roi-work','Как работает калькулятор доходности'],
					['/ru/research','Научные публикации']
				],	
				nav: [
					{ text: 'enecuum.com', link: 'https://enecuum.com' },
					{
					text: 'Сеть Enecuum',
					items: [
						{ text: 'Обсуждение Enecuum в Telegram', link: 'https://t.me/Enecuum' },
						{ text: 'Новостной канал в Telegram', link: 'https://t.me/ENQbeam' },
						{ text: 'Скачать приложение', link: 'https://app.enecuum.com' },
						{ text: 'Блокчейн эксплорер', link: 'https://neuro.enecuum.com' },
						{ text: 'Калькулятор доходности', link: 'https://neuro.enecuum.com/#!/roi' },
						{ text: 'Веб-кошелёк и своп', link: 'https://wallet.enecuum.com' },
						{ text: 'Etherscan', link: 'https://etherscan.io/token/0x16ea01acb4b0bca2000ee5473348b6937ee6f72f' },
						{ text: 'Coingecko', link: 'https://www.coingecko.com/en/coins/enecuum' },
						{ text: 'Политика конфиденциальности', link: 'https://enecuum.com/docs/privacy.pdf' },
						{ text: 'Условия использования', link: 'https://enecuum.com/docs/terms.pdf' }
					]
					}
				]
			}
		}
	},
	plugins: [
		['@vuepress/back-to-top'],
		['@vuepress/pwa', {
			serviceWorker: true,
			updatePopup: {
				'/': {
					message: "New content is available.",
					buttonText: "Refresh"
				},
				'/ru/': {
					message: "Сайт обновился.",
					buttonText: "Перезагрузить страницу"
				}
			}
		}],
		['@vuepress/medium-zoom'],
		['@vuepress/active-header-links'],
		['@vuepress/search', {
			searchMaxSuggestions: 10
		}],
		['@vuepress/google-analytics',{
			'ga': 'UA-138901721-5'
		}],
		['@vuepress/nprogress']
	]
}