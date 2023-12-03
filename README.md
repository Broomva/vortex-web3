# 🧠 BrainBlaze

🧪 Somos una plataforma basada en tecnología blockchain (dapp) que busca gamificar procesos educativos tradicionales trayendo elementos de web3 como NFTs, Tokens y trazabilidad para que el estudiante tenga una experiencia más lúdica en su aprendizaje.

⚙️ Built using NextJS, RainbowKit, Hardhat, Wagmi, and Typescript.

- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

## Contents

- [Requirements](#requirements)
- [Quickstart](#quickstart)
- [Deploying your Smart Contracts to a Live Network](#deploying-your-smart-contracts-to-a-live-network)
- [Deploying your NextJS App](#deploying-your-nextjs-app)
- [Interacting with your Smart Contracts: SE-2 Custom Hooks](#interacting-with-your-smart-contracts-se-2-custom-hooks)
- [Disabling Type & Linting Error Checks](#disabling-type-and-linting-error-checks)
  - [Disabling commit checks](#disabling-commit-checks)
  - [Deploying to Vercel without any checks](#deploying-to-vercel-without-any-checks)
  - [Disabling Github Workflow](#disabling-github-workflow)
- [Contributing to BrainBlaze 2](#contributing-to-scaffold-eth-2)

## Información
Puedes encontrar una demo de BrainBlaze en nuestra [web](https://brain-blaze.vercel.app/)
Conoce todos los detalles de nuestro proyecto en nuestro [Notion]() 

## Requerimientos

Para correr localmente el código de BrainBlaze y poder contribuir al futuro de la educación, necesitas instalar las siguientes herramientas previamente:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Correr localmente

Ahora para ejecutar BrainBlaze sigue los siguientes pasos:

1. Clonar este repositorio e instalar las dependencias:

```
git clone https://github.com/HackChain5/brain-blaze.git
cd brain-blaze
yarn install
```

2. Correr una red blockchain local en una primera terminal:

```
yarn chain
```

Con esto correremos una red local de Ethereum usando Hardhat.

3. En una segunda terminal, ejecuta el siguiente comando para desplegar los contratos inteligentes de la dapp:

```
yarn deploy
```

4. En una tercera terminal inicia a correr la dapp:

```
yarn start
```

Hecho esto, ya puedes interactuar con la dapp en el navegador en esta dirección: `http://localhost:3000`.
¡Y listo! Ya puedes correr y probar el código de BrainBlaze si deseas contribuir a este gran proyecto.

## Equipo
Somos un equipo de apasionados por la tecnología, la innovación y la educación efectiva que involucre al aprendiz en su aprendizaje usando la gamificación. Nuestro equipo está compuesto por: 
