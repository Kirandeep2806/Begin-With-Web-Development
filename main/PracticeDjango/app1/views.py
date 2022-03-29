import time
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Place
from django.http import Http404
from django.core.exceptions import ObjectDoesNotExist
from django.contrib import messages

# Create your views here.

def root(request):
    return render(request, "app1/root.html")

@login_required(login_url="/login/")
def index(request):
    data = Place.objects.all()
    return render(request, 'app1/home.html', {'displayInPublic': data})

@login_required(login_url="/login/")
def p1(request):
    user = User.objects.first()
    data = user.place_set.all()
    return render(request, 'app1/page1.html', {'displayInPublic': data})

@login_required(login_url="/login/")
def p2(request, id):
    userPassword = User.objects.first().password
    try:
        data = Place.objects.get(id=id)
    except ObjectDoesNotExist:
        raise Http404('Page not found')
    if userPassword == data.postedBy.password:
        return render(request, 'app1/page2.html', {'editData': data})
    raise Http404("Page not found")

@login_required(login_url="/login/")
def p3(request, id):
    data = Place.objects.get(id=id)
    data.name = request.POST.get('name')
    data.location = request.POST.get('location')
    data.description = request.POST.get('description')
    data.save()
    return redirect('/')


# Implementation of auth API's

def UserLogin(request):
    if request.POST and "login" in request.POST:
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(username=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'You are logged in')
            return redirect("/index")
        print('Invalid credentials')
        # time.sleep(2)
    return render(request, "app1/root.html", {"message":"Invalid credentials"})

def UserRegister(request):
    if request.POST and "register" in request.POST:
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        password = request.POST.get('pass')
        email = request.POST.get('email')

        user = authenticate(username=email, password=password)
        if user is not None:
            print('User already exists')
            # time.sleep(2)
            return redirect("/login")
        newUser = User.objects.create_user(username=email, password=password)
        newUser.first_name = fname
        newUser.last_name = lname
        newUser.save()

        user = authenticate(username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect("/index")

    return redirect("/")

def UserLogout(request):
    logout(request)
    return redirect("/")


