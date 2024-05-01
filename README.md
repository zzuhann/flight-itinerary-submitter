### 送機行程表單

使用者填寫航班編號，並填寫旅客相關資訊後，透過 [api](https://tdx.transportdata.tw/api-service/swagger/basic/eb87998f-2f9c-4592-8d75-c62e5b724962#/) 獲取是否有指定的航班編號

1. 若有且相關資訊填寫完整 -> 完成送機行程填寫
2. 若無
   1. 仍確定送出 -> 完成送機行程填寫
   2. 重新填寫 -> 回到表單

#### Demo

[Online Demo](https://flight-itinerary-submitter.vercel.app/)
Deployed by Vercel

#### How to Install and Run

1. node: v18.19.0+
2. clone 專案：`git clone https://github.com/zzuhann/flight-itinerary-submitter.git`
3. 安裝 `pnpm`(https://pnpm.io/zh-TW/installation): v8.10.5+
4. `pnpm i --frozen-lockfile` 安裝所需套件、產生 node_modules
5. `pnpm run dev` 啟動開發伺服器
6. 進入 `http://localhost:3000/` 即可進入專案

#### Project Structure

```
.
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── public // 目前放圖片相關
│   ├── airport-icon.png
│   └── checked.png
├── src
│   ├── apis // api 統一管理
│   │   ├── index.ts
│   │   ├── instance.ts
│   │   └── type.ts
│   ├── app // route
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   └── FlightItineraryForm
│   │       ├── components
│   │       │   ├── FailNotificationDrawer
│   │       │   │   ├── index.style.tsx
│   │       │   │   └── index.tsx
│   │       │   └── SuccessNotificationDrawer
│   │       │       ├── index.style.tsx
│   │       │       └── index.tsx
│   │       ├── constants.ts
│   │       ├── index.style.tsx
│   │       ├── index.tsx
│   │       └── zodSchema.ts
│   └── providers
│       ├── index.ts
│       └── themeProvider.tsx
└── tsconfig.json

```
