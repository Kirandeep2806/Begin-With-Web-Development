from django.shortcuts import render
from django.contrib.auth.models import User
from .models import Place

# Create your views here.

def index(request):
    data = Place.objects.all()
    return render(request, 'app1/home.html', {'displayInPublic': data})

def p1(request):
    user = User.objects.last()
    data = user.place_set.all()
    return render(request, 'app1/page1.html', {'displayInPublic': data})

def p2(request, passwordHashKey, id):
    return render(request, 'app1/page2.html')

def p3(request):
    return render(request, 'app1/page3.html')


