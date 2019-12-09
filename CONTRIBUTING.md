# Contributing to Enecuum

First of all, thank you for willing to contribute to our project. Enecuum's community has always been loyal and shown nothing but support. We are honored to have such amazing userbase. 

Currently, we are in need of translation of our tutorials, but other enhancements are welcome too. If you encounter errors, typos, unclear instructions or you would like to make a suggestion on how we could improve our documentation, the team will be happy to hear it. 

## Suggest Enhancements :memo:

You can report typos, suggest more detailed instructions or point out confusing statements through [GutHub issues.](https://guides.github.com/features/issues/) To make a good enhancement, please follow the recommendations below:

- Make a **clear title** for the issue.
- **Describe the issue** and explain how you would **improve the behavior.**
- Provide a detailed explanation on **how your suggestion would be useful.**
- Use **[Markdown code blocks](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#quoting-code)** syntax when you suggest a block of text that you expect to be published in Enecuum Guides.

## Create New Translations :earth_americas:

### Understanding Vuepress and Markdown

Translating is a lot more time-consuming contribution that requires an environment to be set up. In order to do so, certain software should be installed. First, let's review what the team uses to create guides.

To build the website, [Vuepress](https://vuepress.vuejs.org) is used. There's no need to be experienced with it to contribute to Enecuum project.

For the website contents, [Markdown](https://daringfireball.net/projects/markdown/syntax) language is used with [Vuepress' extensions](https://v1.vuepress.vuejs.org/guide/markdown.html). Markdown is easy to understand, and you probably won't encounter any issues with it. 

When writing in Markdown, [Typora](https://www.typora.io/) is a great tool to use, but it is not a requirement. Any other text editor would do.

### Preparation

- [Download Vuepress.](https://vuepress.vuejs.org/guide/getting-started.html) It will be used to preview your changes to the website's contents.
- [Fork the repository.](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- Create a new folder in the root of the project for the translation. For the name, use the two-letter language code in the lower-case. 
- Copy all *.md* files except for *README.md* and the whole *img* folder in your newly created folder.

### Translation 

You can start the translation now. Please, follow these recommendations to ensure good quality:

- Throughout your work, do not forget to make clear meaningful commits to the repository.
- Start with `vuepress/config.js`. 
  - In `locales`, copy the whole `'\'` section and paste it after an already existing translation (do not forget to follow JSON syntax and add a comma after `}` which precedes your pasted block of text).
  - Add a two-letter language code where required. Use the existing translation as an example.
  - Translate the strings.
  - Preview your changes by issuing a command:
  ```
  vuepress dev
  ```
  - In the terminal, there should be no errors. The website is now running locally on your PC. Type in the address you see in the terminal into your browser. If it doesn't work or the terminal lists errors, there's probably an issue with the JSON syntax (you might have forgotten to add a comma or brackets). 
  - In the top-right corner "Languages" menu, click on the language you've just set up. If everything is configured properly, you will be redirected to your newly created section of the Enecuum website!
- You can now continue to the `.md` files in your folder.
  - When translating, follow the existing Markdown syntax. Do not add/delete empty lines.
  - Header anchors links will be changed since headers are translated. These links are mentioned in certain tutorials and should be translated.
- Preview your changes locally and push the commits.

### Publishing

- [Create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)
- Enecuum team will preview your contribution and publish it.

Thank you for taking the time and making our product better!


