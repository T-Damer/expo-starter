![e-starter](https://github.com/T-Damer/expo-starter/assets/49658988/4020809f-eef8-4b4e-aba1-ca3e94972c76)

1. Back: GraphQL (Yoga + TypeGraphQl + Prisma + PostgresSQL + class-validator)
2. Front: Urql + glq.tada + expo-router + react-native + dripsy + jotai + nixpacks + express server for static and opengraph + firestore for CI/CD Gh Actions + Fastlane, Skia + R3F

## TODO:

1. Add authentication so only authorized users can add posts
2. Add adding and removing posts
3. Add comments
4. Fix designs
5. Add proper caching, refetching and error handling when the backend doesn't respond

## Enable gql.tada

In order to get hints from `gql.tada` about types of stuff from the server, you may want to change `schema` URL in `tsconfig.json`

To re-generate the `./src/types/graphql-env.d.ts` file, you need to `Restart TS server` (use `Ctrl + Shift + P`)
