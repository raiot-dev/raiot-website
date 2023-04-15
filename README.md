# 🧾 The Automata Hive Website

[![GitHub version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/the-automata-hive/automata-hive-website.git)
![GitHub](https://img.shields.io/github/license/the-automata-hive/automata-hive-website)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/the-automata-hive/automata-hive-website?color=yellowgreen)

This repository is the main landing page of the automata-hive website and for its room reservation system.

## 📖 Background

> The goal of this repository is to increase online presence, provide a centralized online platform for interested individuals to learn about our activites, our purpose and goals and requirements. We also want to provide the page with important information about upcoming events, meetings and competitions we might compete in, as well as contact information for those wo want to get involved or have questions.

## 📎 Useful Links

- [⚛️ Remix](https://remix.run/)
- [🐱‍💻 Yarn](https://yarnpkg.com/)
- [⚙️ React Hooks](https://www.robinwieruch.de/react-hooks)
- [📁 Folder Structure](https://remix.run/docs/en/v1/api/conventions)
- [🐱‍💻 Internationalization](https://www.i18next.com/overview/getting-started)
- [🧬 Commit-Convention](https://www.conventionalcommits.org/en/v1.0.0/)
- [🧾 Dotfiles](https://github.com/the-automata-hive/automata-hive-dotfiles)

## 🔽 Installation

Open your terminal and type in

```ps
$ git clone https://github.com/the-automata-hive/automata-hive-website.git
```

Afterwards, execute this command to install all dependencies;

```ps
$ yarn
```

## 🚀 Usage

To start the application in development mode, use this command:

```ps
$ yarn run dev
```

To build it (though recommended is using docker), execute this command:

```ps
$ yarn run build
```

Even though lints are being run automatically on commits, you can still trigger them manually by using the `script:lint` command:

```ps
$ yarn run script:lint
```

## 📁 Scaffolding

```sh
automata-hive-website
 ├─── .vscode
 ├─── public          # this folder serves as-is
 │   ├─── assets
 │   ├─── locales
 │   │    ├─── de     # all translations for the german language
 │   │    └─── en     # all translations for the english language
 │   ├─── humans.txt  # an easter egg 🐇
 │   └─── robots.txt  # provides metadata for webcrawlers
 ├─── src
 │    ├─── config
 │    │    └─── locales
 │    ├─── routes
 │    ├─── services
 │    │    └─── logger
 │    ├─── entry.client.tsx
 │    ├─── entry.server.tsx
 │    └─── root.tsx
 ├── .editorconfig    # Cross-Editor Config
 ├── .gitattributes
 ├── .gitignore
 ├── .npmrc
 ├── .nvmrc           # visit the dotfiles repository for the centralized config
 ├── .prettierignore  # visit the dotfiles repository for the centralized config
 ├── .prettierrc      # visit the dotfiles repository for the centralized config
 ├── LICENSE
 └── README.md        # ⭕ you are here
```

## 🐛 Bugs

If you have questions, feature requests or a bug you want to report, please click
[here](https://github.com/the-automata-hive/automata-hive-website/issues) to file an issue.

## 🖊️ Author

- [**schmaenjael**](https://github.com/schmaenjael) [![GitHub followers](https://img.shields.io/github/followers/schmaenjael.svg?style=social)](https://github.com/schmaenjael)

## ⚠️ License

Copyright (c) 2023 schmaenjael
For furher information refer to the [license](https://github.com/the-automata-hive/automata-hive-website/blob/master/LICENSE)
