from datetime import date
from flask import Blueprint, render_template, redirect, url_for, request, flash
from .forms import DisciplineForm, CompetenceForm, CompetenceConnectForm



UKUP = Blueprint('UKUP', __name__, template_folder='templates', static_folder='static')

