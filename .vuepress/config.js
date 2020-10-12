const HtmlWebpackPlugin = require('html-webpack-plugin')

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
		},
		'/ko/': {
			lang: 'ko-KR',
			title: 'Enecuum Guides',
			description: 'This set of manuals is aimed to help with the first steps into the Blockchain Mobile Network for decentralized applications.'
		}	
	},
	head: [
		['meta', {'http-equiv': 'Cache-control', content: 'no-cache, no-store, must-revalidate, max-age=0'}]
	],
	themeConfig: {
		logo: '/enq-logo.png',
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
					['/research','Research Papers'],
					{
						title: 'Enecuum Network',
						collapsable: false,
						children: [
							['/enq/emission-model','ENQ Emission Model'],
							['/enq/how-to-use','How to Use the App'],
							['/enq/how-to-buy','How to Buy ENQ on Exchange'],
							//['/enq/how-to-swap','How to Swap ENQ'],
							['/enq/how-to-pos','How to Run PoS Node'],
							['/enq/token-issue','How to Issue Own Tokens'],
							['/enq/how-to-delegate','How to Delegate'],
							['/enq/referral','How to Join the Referral Program'],
							['/enq/how-does-roi-work','How Does ROI Calculator Work']
						]
					},
					{
						title: 'BIT Network',
						collapsable: false,
						children: [
							['/bit/how-to-mine-bit','How to Mine BIT'],
							['/bit/token-issue','How to Issue Own Tokens'],
							['/bit/how-to-pos','How to Run PoS Node'],
							['/bit/how-to-delegate','How to Delegate']
						]
					}
				],
				nav: [	
					{ text: 'enecuum.com', link: 'https://enecuum.com' },
					{
					text: 'Enecuum Network',
					items: [
						{ text: 'Telegram discussion group', link: 'https://t.me/Enecuum_EN' },
						{ text: 'Telegram news channel', link: 'https://t.me/ENQbeam' },
						{ text: 'App Download', link: 'https://app.enecuum.com' },
						{ text: 'Blockchain Explorer', link: 'https://pulse.enecuum.com' },
						{ text: 'ROI Calculator', link: 'https://pulse.enecuum.com/#!/roi' },
						{ text: 'Web Wallet', link: 'https://wallet.enecuum.com' },
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
					['/ru/research','Научные публикации'],
					{
						title: 'Сеть Enecuum',
						collapsable: false,
						children: [
							['/ru/enq/emission-model','Модель эмиссии ENQ'],
							['/ru/enq/how-to-use','Как пользоваться приложением'],
							['/ru/enq/how-to-buy','Как купить ENQ на бирже'],
							//['/ru/enq/how-to-swap','Как сделать своп ENQ'],
							['/ru/enq/how-to-pos','Как запустить PoS'],
							['/ru/enq/token-issue','Как выпустить собственные токены'],
							['/ru/enq/how-to-delegate','Как делегировать средства'],
							['/ru/enq/referral','Как стать участником Реферальной Программы'],
							['/ru/enq/how-does-roi-work','Как работает калькулятор доходности']
						]
					},
					{
						title: 'Сеть BIT',
						collapsable: false,
						children: [
							['/ru/bit/how-to-mine-bit','Как майнить BIT'],
							['/ru/bit/token-issue','Как выпустить собственные токены'],
							['/ru/bit/how-to-pos','Как запустить PoS'],
							['/ru/bit/how-to-delegate','Как делегировать средства']
						]
					}
				],
				nav: [
					{ text: 'enecuum.com', link: 'https://enecuum.com' },
					{
					text: 'Сеть Enecuum',
					items: [
						{ text: 'Обсуждение Enecuum в Telegram', link: 'https://t.me/Enecuum' },
						{ text: 'Новостной канал в Telegram', link: 'https://t.me/ENQbeam' },
						{ text: 'Скачать приложение', link: 'https://app.enecuum.com' },
						{ text: 'Блокчейн эксплорер', link: 'https://pulse.enecuum.com' },
						{ text: 'Калькулятор доходности', link: 'https://pulse.enecuum.com/#!/roi' },
						{ text: 'Веб-кошелёк', link: 'https://wallet.enecuum.com' },
						{ text: 'Coingecko', link: 'https://www.coingecko.com/en/coins/enecuum' },
						{ text: 'Политика конфиденциальности', link: 'https://enecuum.com/docs/privacy.pdf' },
						{ text: 'Условия использования', link: 'https://enecuum.com/docs/terms.pdf' }
					]
					}
				]
			},
			'/ko/': {
				selectText: '언어',
				label: '한국어',
				editLinkText: 'Edit this page on GitHub',
				sidebar: [
					'/ko/',
					['/ko/faq', 'FAQ'],
					['/ko/research','Research Papers'],
					{
						title: 'Enecuum Network',
						collapsable: false,
						children: [
							['/ko/enq/emission-model','ENQ 배출 모델'],
							['/ko/enq/how-to-use','How to Use the App'],
							['/ko/enq/how-to-buy','How to Buy ENQ on Exchange'],
							['/ko/enq/how-to-pos','How to Run PoS Node'],
							['/ko/enq/token-issue','How to Issue Own Tokens'],
							['/ko/enq/how-to-delegate','How to Delegate'],
							['/ko/enq/referral','How to Join the Referral Program'],
							['/ko/enq/how-does-roi-work','How Does ROI Calculator Work']
						]
					},
					{
						title: 'BIT Network',
						collapsable: false,
						children: [
							['/ko/bit/how-to-mine-bit','How to Mine BIT'],
							['/ko/bit/token-issue','How to Issue Own Tokens'],
							['/ko/bit/how-to-pos','How to Run PoS Node'],
							['/ko/bit/how-to-delegate','How to Delegate']
						]
					}
				],
				nav: [	
					{ text: 'enecuum.com', link: 'https://enecuum.com' },
					{
					text: 'Enecuum Network',
					items: [
						{ text: 'Telegram discussion group', link: 'https://t.me/Enecuum_EN' },
						{ text: 'Telegram news channel', link: 'https://t.me/ENQbeam' },
						{ text: 'App Download', link: 'https://app.enecuum.com' },
						{ text: 'Blockchain Explorer', link: 'https://pulse.enecuum.com' },
						{ text: 'ROI Calculator', link: 'https://pulse.enecuum.com/#!/roi' },
						{ text: 'Web Wallet & Swap', link: 'https://wallet.enecuum.com' },
						{ text: 'Etherscan', link: 'https://etherscan.io/token/0x16ea01acb4b0bca2000ee5473348b6937ee6f72f' },
						{ text: 'Coingecko', link: 'https://www.coingecko.com/en/coins/enecuum' },
						{ text: 'Privacy Policy', link: 'https://enecuum.com/docs/privacy.pdf' },
						{ text: 'Terms & Conditions', link: 'https://enecuum.com/docs/terms.pdf' }
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
		['@vuepress/nprogress'],
		new HtmlWebpackPlugin({hash: true})
	]
}
