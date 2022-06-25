from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('form/', views.navigateForm, name="form"),
    path('push-data/', views.pushData, name="push-data"),
]
