# 🧠 Vortex

🧪 Somos una plataforma basada en tecnología blockchain (dApp) que busca gamificar procesos educativos tradicionales trayendo elementos de web3 como NFTs, Tokens y trazabilidad para que el estudiante tenga una experiencia más lúdica en su aprendizaje.

## Información
- Puedes encontrar una demo de Vortex en nuestra [web](https://vortex-web3.vercel.app/)
- Conoce todos los detalles de nuestro proyecto en nuestro [Notion](https://diamond-icicle-333.notion.site/Vortex-36d9de086ff94a56b17bf86d4e0ace43?pvs=4) 

## Requerimientos

Para correr localmente el código de Vortex y poder contribuir al futuro de la educación, necesitas instalar las siguientes herramientas previamente:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Correr localmente

Ahora para ejecutar Vortex sigue los siguientes pasos:

1. Clonar este repositorio e instalar las dependencias:

```
git clone https://github.com/Broomva/vortex-web3.git
cd vortex-web3
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

## Attribution
Forked from (BrainBlaze)[https://github.com/HackChain5/brain-blaze]. Based on (Scaffold 2 ETH)[https://github.com/scaffold-eth/scaffold-eth-2]