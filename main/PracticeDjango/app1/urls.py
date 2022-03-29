"""PracticeDjango URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.root, name='root'),
    path('index', views.index, name='index'),
    path('p1/', views.p1, name='p1-url'),
    path('p2/<int:id>/', views.p2, name='p2-url'),
    path('p3/<int:id>', views.p3, name='p3-url'),
    path('login/', views.UserLogin, name='login-url'),
    path('register/', views.UserRegister, name='register-url'),
]
