// API обработчик для получения избранных товаров пользователя
export default defineEventHandler(async (event) => {
    // Извлекаем параметр 'email' из строки запроса URL
    const { email } = getQuery<{ email: string }>(event);
    if (!email) {
        throw createError({
            statusCode: 400,
            statusMessage: "Email not defined in query",
        });
    }
    // Получаем данные из хранилища "db" по ключу email (асинхронная операция)
    // Это возвращает избранные товары, сохраненные для этого пользователя
    const res = await useStorage("db").getItem(email);

    // Возвращаем полученные данные в виде JSON ответа
    return res;
});
