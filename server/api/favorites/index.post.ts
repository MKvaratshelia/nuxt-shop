import type { CreateFavorite } from "~/interfaces/favorite.interface";

// API обработчик для сохранения/обновления избранных товаров пользователя
export default defineEventHandler(async (event) => {
    // Читаем тело POST запроса и извлекаем email пользователя и массив id товаров
    const { email, ids } = await readBody<CreateFavorite>(event);

    // Сохраняем список избранных товаров в хранилище "db" по ключу email
    // Это перезаписывает предыдущие данные новыми избранными товарами
    await useStorage("db").setItem(email, ids);
    setResponseStatus(event, 201);
    // Возвращаем успешный результат операции
    return { success: true };
});
