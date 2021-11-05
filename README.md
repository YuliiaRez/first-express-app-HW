# first-express-app-HW
Разработать серверное приложение, обрабатывающее http-запросы на получение, создание и обновление сообщений форума (*+удаление). Сущность сообщения содержит текст сообщения, email автора, *дату создания сообщения.

Создать маршруты используя методы use, get, post, patch, delete (выбрать нужное).
Используйте промежуточные обработчики (middleware), например, для валидации email, текста сообщения (минимальная и максимальная длина), *даты (например, не позже сегодня) и т.п.

Предусмотреть наличие стандартного обработчика ошибок.

Соблюдать оговоренную структуру проекта (отдельное хранение middleware, контроллеров).

Requests для тестирования работы приложения сохранить в папке requests.