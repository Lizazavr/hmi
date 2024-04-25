from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from app import app, db

# Инициализация Flask-Migrate
migrate = Migrate(app, db)
manager = Manager(app)

# Добавление команды миграций в менеджер
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()