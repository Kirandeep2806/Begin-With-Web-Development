from django.shortcuts import render
from .forms import StudentForm

# Create your views here.

def homePage(request):
    return render(request, 'index.html', {'form': StudentForm()})

def processForm(request):
    if request.POST:
        form = StudentForm(request.POST)
        if form.is_valid():
            print("DATA IS : ", form.cleaned_data)
    return render(request, 'index.html', {'form': StudentForm()})
