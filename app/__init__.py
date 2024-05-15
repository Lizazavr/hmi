from flask import Flask
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from app import UKUP
from .models import db
from flask_migrate import Migrate
from flask_restplus import Api
from flask_restplus import Resource

#db = SQLAlchemy()

app = Flask(__name__)
app.app_context().push()
app.config.from_object('config')
app.register_blueprint(UKUP.UKUP.UKUP, url_prefix='/UKUP')
db.init_app(app)
migrate = Migrate()
migrate.init_app(app, db)
api = Api(app)


from . import models

with app.app_context():
    db.create_all()



@api.route('/products')
class Products(Resource):
    def get(self):
        """Список всех товаров"""
        pass

    def post(self):
        """Добавление нового товара"""
        pass

@api.route('/products/<int:id>')
class Product(Resource):
    def get(self, id):
        """Информация о товаре по ID"""
        pass

    def put(self, id):
        """Обновление информации о товаре по ID"""
        pass

    def delete(self, id):
        """Удаление товара по ID"""
        pass

#from app import views
