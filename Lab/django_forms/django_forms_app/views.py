from http.client import ImproperConnectionState
from django.shortcuts import render
from .forms import StudentForm

# Create your views here.

def homePage(request):
    return render(request, 'index.html', {'form': StudentForm()})
