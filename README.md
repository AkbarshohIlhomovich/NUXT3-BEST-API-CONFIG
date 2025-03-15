# 🚀 useApi Composable

Vue.js ilovalaringiz uchun TypeScript tiplaridan to'liq foydalangan holda API so'rovlarini amalga oshiruvchi zamonaviy composable.

![API Version](https://img.shields.io/badge/API%20Version-v1-blue)
![Vue Version](https://img.shields.io/badge/Vue-3.x-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Haqida

`useApi` composable - bu Vue 3 ilovalari uchun API so'rovlarini boshqarish uchun yaratilgan. Ushbu vosita quyidagi afzalliklarga ega:

- ✅ TypeScript yordamida to'liq avtomatik to'ldirish
- ✅ API path va metodlari uchun tiplar
- ✅ GET, POST, PATCH, DELETE va boshqa HTTP metodlarini qo'llab-quvvatlash
- ✅ So'rov holati boshqaruvi (loading, error, success)
- ✅ URL path parametrlarini osongina almashtirish
- ✅ Query parametrlarni boshqarish
- ✅ GET/HEAD metodlari uchun so'rov tanasini (body) avtomatik o'chirib qo'yish

## 🛠️ O'rnatish

```bash
# npm orqali
npm install @your-username/use-api-composable

# yarn orqali
yarn add @your-username/use-api-composable

# pnpm orqali
pnpm add @your-username/use-api-composable
```

## 📊 Foydalanish misollari

### GET so'rovi

```typescript
<script setup lang="ts">
import { computed } from 'vue';
import { useApi } from "@/composables/useApi";

// GET so'rovi
const { data, error, pending, refresh } = useApi(
  '/api/v1/foodshop/food-shop-top-list/',  // path
  'GET',                                   // metod
  {},                                      // resources (path parametrlari)
  { limit: 10, offset: 0 },                // query parametrlari
  {},                                      // body (GET uchun e'tiborga olinmaydi)
  {                                        // qo'shimcha parametrlar
    transform: (response) => response.results || []
  }
);

const foodshops = computed(() => data.value || []);
</script>
```

### POST so'rovi

```typescript
<script setup lang="ts">
import { ref } from 'vue';
import { useApi } from "@/composables/useApi";

const formData = ref({
  name: 'Yangi restoran',
  address: 'Toshkent, Chilonzor 17-kvartal'
});

// POST so'rovi
const { data, error, pending, refresh: submitRequest } = useApi(
  '/api/v1/foodshop/food-shop/',  // path
  'POST',                         // metod
  {},                             // resources
  {},                             // query parametrlari
  formData.value,                 // body (so'rov tanasi)
  { immediate: false }            // darhol so'rov yubormaslik
);

async function submitShop() {
  await submitRequest({
    body: formData.value  // joriy ma'lumotlar bilan yangilash
  });
  
  if (data.value && !error.value) {
    // Muvaffaqiyatli yaratildi!
  }
}
</script>
```

### PATCH so'rovi

```typescript
<script setup lang="ts">
import { ref } from 'vue';
import { useApi } from "@/composables/useApi";

const shopId = '123';
const editData = ref({
  name: 'Yangilangan nom',
  address: 'Yangi manzil'
});

// PATCH so'rovi
const { data, error, pending, refresh: submitUpdate } = useApi(
  '/api/v1/foodshop/food-shop/{id}/',  // path
  'PATCH',                             // metod
  { id: shopId },                      // URL dagi {id} ni almashtirish
  {},                                  // query parametrlari
  editData.value,                      // body
  { immediate: false }                 // darhol so'rov yubormaslik
);

async function updateShop() {
  await submitUpdate({
    body: editData.value
  });
}
</script>
```

### DELETE so'rovi

```typescript
<script setup lang="ts">
import { ref } from 'vue';
import { useApi } from "@/composables/useApi";

const shopId = '123';

// DELETE so'rovi
const { data, error, pending, refresh: performDelete } = useApi(
  '/api/v1/foodshop/food-shop/{id}/',  // path
  'DELETE',                            // metod
  { id: shopId },                      // URL dagi {id} ni almashtirish
  {},                                  // query parametrlari
  {},                                  // body
  { immediate: false }                 // darhol so'rov yubormaslik
);

async function deleteShop() {
  await performDelete();
  
  if (!error.value) {
    // Muvaffaqiyatli o'chirildi!
  }
}
</script>
```

## 📚 API

### useApi funksiyasi

```typescript
function useApi<P extends keyof paths, M extends keyof paths[P]>(
  path: P,
  method: M,
  resources?: paths[P][M] extends { parameters: { path: infer R } } ? R : {},
  parameters?: paths[P][M] extends { parameters: { query?: infer Q } } ? Q : {},
  body?: paths[P][M] extends { requestBody?: { content: { "application/json": infer B } } } ? B : {},
  options?: {
    immediate?: boolean;
    transform?: (data: any) => any;
  }
)
```

#### Parametrlar

| Parametr | Tavsif |
|----------|--------|
| `path` | API so'rov yo'li (endpoint) |
| `method` | HTTP metodi (`GET`, `POST`, `PATCH`, `DELETE`, va h.k.) |
| `resources` | URL dagi o'zgaruvchan qismlarni (`{id}` kabi) almashtirish uchun ob'ekt |
| `parameters` | URL query parametrlari uchun ob'ekt |
| `body` | So'rov tanasi (GET va HEAD metodlari uchun e'tiborga olinmaydi) |
| `options` | Qo'shimcha sozlamalar |
| `options.immediate` | So'rovni darhol yuborish kerakmi? (`true` bo'lsa darhol yuboriladi) |
| `options.transform` | So'rov natijasini o'zgartirish uchun funksiya |

#### Qaytariladigan qiymatlar

| Qiymat | Tavsif |
|--------|--------|
| `data` | So'rov natijasi (qayta ishlangandan so'ng) |
| `error` | So'rov xatosi (agar mavjud bo'lsa) |
| `pending` | So'rov jarayonda ekanligini ko'rsatadi |
| `refresh` | So'rovni qayta yuborish funksiyasi |

## 🤝 Hissa qo'shish

Loyihaga hissa qo'shishni xohlaysizmi? Takliflar, xatoliklarni tuzatish va yangi funksiyalarni qo'shish uchun Pull Request yuboring.

1. Repositoriyani fork qiling
2. Yangi branch yarating (`git checkout -b feature/yangi-funksiya`)
3. O'zgarishlarni commit qiling (`git commit -m 'Yangi funksiya qo'shildi'`)
4. O'z branch'ingizga push qiling (`git push origin feature/yangi-funksiya`)
5. Pull Request yarating

## 📄 Litsenziya

MIT © [Sizning ismingiz]