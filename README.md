<h1 align="center">🦕 Deno Nasa Mission Control 🚀</h1>

<h2 align="center">Schedule a new mission</h2>

![13cd5114aaec59a065e06b0b58aee792.png](:/2934ead418ea48c7b32184481fb3e02f)

<h2 align="center">View upcoming launches</h2>

![efa02a243f4865e314f906a5bf41c963.png](:/1e08770cf2a3476dac9e32992ae3f6f2)

<h2 align="center">View mission history</h2>

![de4192eeb854b863c940fdba9a698dac.png](:/ca2401a84223485f9fd4c7cb922880b2)
<br>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-14.17.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-6.14.13-blue.svg" />
  <a href="https://github.com/JRPerezJr/react-native-seijo-meals-to-go#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JRPerezJr/react-native-seijo-meals-to-go/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JRPerezJr/react-native-seijo-meals-to-go/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

<br>

> A Secure Deno Backend for the NASA Mission control application

## 📐 Prerequisites

- Git
- Deno runtime
- Docker

## 🖥 📱 💽 Tech Stack

**Client:** HTML, CSS, JavaScript

**Backend:** TypeScript, Deno Runtime, Oak Framework, Space X API

## 🦕 Deno Runtime Installation

Shell (MacOS, Linux):

```shell
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Powershell (Windows):

```shell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

Homebrew (MacOS):

```shell
brew install deno
```

Chocolatey (Windows):

```shell
choco install deno
```

Scoop (Window):

```shell
scoop install deno
```

## 🛠 Install and Run Locally

Clone the project

```shell
  https://github.com/JRPerezJr/nasa-mission-control-deno.git
```

Go to the project directory

```shell
  cd nasa-mission-control-deno
```

## 👩‍💻 👨‍💻 Usage

`--allow-net` allow network access (Space X API) `--allow-read` allow read of files in whitelist

```shell
deno run --allow-net --allow-read
```

## 🐳 Build project with Docker

```shell
docker build -t <tag-name> .
```

## 🐳 Docker run

`-it` iteractive terminal `--rm` remove after stopped `-p` expose port `8000` on port `8000`

```shell
docker run -it --rm  -p 8000:8000 <tag-name>
```

## 🕸 Local project url

```shell
localhost:8000/index.html
```

## 📡 API Reference 🛰

#### Get all planets

```http
  GET localhost:8000/v1/planets
```

#### Get all launches

```http
  GET localhost:8000/v1/launches
```

#### Get launch

```http
  GET localhost:8000/v1/launch/${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `string` | **Required**. Id of launch to fetch |

#### Add launch

```http
  POST localhost:8000/v1/launches
```

#### Delete launch

```http
  DELETE localhost:8000/v1/launch/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `id`      | `string` | **Required**. Id of launch to delete |

## 📓 Author

![Logo](https://user-images.githubusercontent.com/19915910/120965966-81203b00-c7a0-11eb-8ef4-a42c0642db4c.png)

- Github: [@JRPerezJr](https://github.com/JRPerezJr)
- LinkedIn: [@devjperez](https://linkedin.com/in/devjperez)

## 📝 License

Copyright © 2021 [Juan Perez Jr.](https://github.com/JRPerezJr).<br />
This project is [MIT](https://github.com/JRPerezJr/nasa-mission-control-deno/blob/main/LICENSE) licensed.
