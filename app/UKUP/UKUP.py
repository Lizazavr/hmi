from datetime import date
from flask import Blueprint, render_template, redirect, url_for, request, flash
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_swagger_ui import get_swaggerui_blueprint
from app.models import db, Product, Category, User, Role, Order, Brand, Image

UKUP = Blueprint('UKUP', __name__, template_folder='templates', static_folder='static')


@UKUP.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([product.__dict__ for product in products])

@UKUP.route('/products/<int:id>', methods=['GET'])
def get_product(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'message': 'Product not found'}), 404
    return jsonify(product.__dict__)

@UKUP.route('/products', methods=['POST'])
def add_product():
    data = request.json
    new_product = Product(
        name=data['name'],
        product_description=data['product_description'],
        price=data['price'],
        brand_id=data['brand_id'],
        category_id=data['category_id']
    )
    db.session.add(new_product)
    db.session.commit()
    return jsonify({'message': 'Product added successfully'})

@UKUP.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'message': 'Product not found'}), 404
    data = request.json
    product.name = data.get('name', product.name)
    product.product_description = data.get('product_description', product.product_description)
    product.price = data.get('price', product.price)
    product.brand_id = data.get('brand_id', product.brand_id)
    product.category_id = data.get('category_id', product.category_id)
    db.session.commit()
    return jsonify({'message': 'Product updated successfully'})

@UKUP.route('/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'message': 'Product not found'}), 404
    db.session.delete(product)
    db.session.commit()
    return jsonify({'message': 'Product deleted successfully'})


# Роуты для категорий
@UKUP.route('/categories', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    return jsonify([category.__dict__ for category in categories])

# Другие роуты для работы с категориями (добавление, удаление, обновление)

# Роуты для изображений товаров
@UKUP.route('/products/<int:id>/images', methods=['GET'])
def get_product_images(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'message': 'Product not found'}), 404
    images = [image.__dict__ for image in product.images]
    return jsonify(images)

# Другие роуты для работы с изображениями (добавление, удаление)

# Роуты для брендов
@UKUP.route('/brands', methods=['GET'])
def get_brands():
    brands = Brand.query.all()
    return jsonify([brand.__dict__ for brand in brands])

# Другие роуты для работы с брендами (добавление, удаление, обновление)

# Роуты для заказов
@UKUP.route('/orders', methods=['GET'])
def get_orders():
    orders = Order.query.all()
    return jsonify([order.__dict__ for order in orders])