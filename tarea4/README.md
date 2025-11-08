# Tarea 4 — Mini Chat en tiempo real

## Estructura
- `backend/`
  - `server.js`: servidor express + socket.IO (puerto 3000)
- `frontend/` 
  - `src/app/services/socket.service.ts`: servicio para conectar y manejar eventos de sockets

## Instalación y ejecución
Servidor
```
cd Cliente/tarea4
npm install
npm run server
```
http://localhost:3000/status

Cliente (Angular)
```
cd Cliente/tarea4/frontend
npm install
npm start
```
http://localhost:4200

