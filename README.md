# Edunesia.lab

Platform belajar teknologi yang gratis, terbuka, dan dibangun bersama komunitas.

## Mulai

```bash
bun install
bun run dev
```

Jalankan pemeriksaan format, lint, dan tipe dengan:

```bash
vp check
```

## Logging

Server menggunakan evlog melalui `src/server/libs/logger`; client menggunakan logger
browser-safe melalui `src/lib/logger/client.ts`.

```ts
serverLogger.db.info("Database connected");
clientLogger.auth.info("Sign-in started");
clientLogger.users.info("User profile opened");
```

Tag log dipisahkan mengikut konteks: `server:db`, `client:auth`, dan `client:users`.
Log server disimpan ke `.evlog/logs` semasa development sahaja.

## Kontribusi

Kontribusi terbuka untuk semua. Bantu dengan menulis materi, memperbaiki penjelasan,
atau menyarankan topik belajar baru.
