from django.shortcuts import redirect, render, HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import Place
from django.http import Http404
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.

def root(request):
    return render(request, "app1/root.html")

@login_required(login_url="/login/")
def index(request):
    data = Place.objects.all()
    return render(request, 'app1/home.html', {'displayInPublic': data})
@login_required
def p1(request):
    user = User.objects.first()
    data = user.place_set.all()
    return render(request, 'app1/page1.html', {'displayInPublic': data})
@login_required
def p2(request, id):
    userPassword = User.objects.first().password
    try:
        data = Place.objects.get(id=id)
    except ObjectDoesNotExist:
        raise Http404('Page not found')
    if userPassword == data.postedBy.password:
        return render(request, 'app1/page2.html', {'editData': data})
    raise Http404("Page not found")
@login_required
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
        uname = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=uname, password=password)
        if user is not None:
            login(request, user)
            return redirect("/index")
    return redirect("/")

def UserRegister(request):
    if request.POST and "register" in request.POST:
        return HttpResponse("Register")
    return redirect("/")

def UserLogout(request):
    pass


