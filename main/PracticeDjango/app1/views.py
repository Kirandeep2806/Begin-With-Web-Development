from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    mydata = {'name': 'Django', 'language': 'Python'}
    return render(request, 'app1/home.html', {'mydata': mydata})

def p1(request):
    return HttpResponse("Hello, world. You're at the polls index (print_1).")

def p2(request):
    return HttpResponse("Hello, world. You're at the polls index (print_2).")

def p3(request):
    return HttpResponse("Hello, world. You're at the polls index (print_3).")