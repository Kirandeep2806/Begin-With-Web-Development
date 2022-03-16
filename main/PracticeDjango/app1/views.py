from django.shortcuts import render
from django.contrib.auth.models import User

# Create your views here.

def index(request):
    mydata = {'name': 'Django', 'uname': 'Kiran-Deep-Patcha'}
    return render(request, 'app1/home.html', {'mydata': mydata})

def p1(request):
    return render(request, 'app1/page1.html')

def p2(request):
    return render(request, 'app1/page2.html')

def p3(request):
    return render(request, 'app1/page3.html')

def p4(request, userName):
    print(userName, type(userName))
    mydata = {'value': userName+" is a good"}
    print("User : ", User)
    print("User.objects.all() : ", User.objects)
    print(User.objects.all())
    return render(request, 'app1/page4.html', {'mydata': mydata})

