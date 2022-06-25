from email.mime import image
from django.shortcuts import redirect, render
from .models import Swiggy
# Create your views here.

def home(request):
    swiggy = Swiggy.objects.all()
    print(swiggy)
    return render(request, 'index.html', {'swiggy': swiggy})

def navigateForm(request):
    return render(request, 'upload.html')

def pushData(request):
    if request.POST:
        print(request.POST)
        print("***", request.FILES)
        data = Swiggy(restaurant=request.POST['rname'], food=request.POST['fname'], place=request.POST['place'], cost=request.POST['price'], rating=request.POST['rating'], image=request.FILES['image'])
        data.save()
        return redirect('/')
    return redirect('/form-data')
