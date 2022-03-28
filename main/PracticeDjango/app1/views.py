from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from .models import Place
from django.http import Http404
from django.core.exceptions import ObjectDoesNotExist

# Create your views here.

def root(request):
    return render(request, "app1/root.html")

def index(request):
    data = Place.objects.all()
    return render(request, 'app1/home.html', {'displayInPublic': data})

def p1(request):
    user = User.objects.first()
    data = user.place_set.all()
    return render(request, 'app1/page1.html', {'displayInPublic': data})

def p2(request, id):
    userPassword = User.objects.first().password
    try:
        data = Place.objects.get(id=id)
    except ObjectDoesNotExist:
        raise Http404('Page not found')
    if userPassword == data.postedBy.password:
        return render(request, 'app1/page2.html', {'editData': data})
    raise Http404("Page not found")

def p3(request, id):
    data = Place.objects.get(id=id)
    data.name = request.POST.get('name')
    data.location = request.POST.get('location')
    data.description = request.POST.get('description')
    data.save()
    return redirect('/')


