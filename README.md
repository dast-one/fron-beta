
```sh
cd /opt/d1/fron

DOCKREMAP_UID=$(grep 'dockremap' /etc/subuid | cut -d':' -f2)
NODE_DOCK_UID=$(docker run --rm -u node -t node:16-slim id -uz)
NODE_HOST_UID=$(expr $DOCKREMAP_UID + $NODE_DOCK_UID)

mkdir node_modules dist
chown :$NODE_HOST_UID package-lock.json node_modules dist
chmod g+w package-lock.json node_modules dist

docker run --rm -v $(pwd):/app -w /app -u node -t node:16-slim npm update
docker run --rm -v $(pwd):/app -w /app -u node -t node:16-slim npm run build

rsync -virc ./dist/ /srv/www-d1-fron/
```
```sh
docker run --rm -p 127.0.0.1:3000:3000 --name fron -d dast.fron
docker run --rm -p 127.0.0.1:3000:3000 -v /opt/d1/fron:/app --name fron -it dast.fron
```


----


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
