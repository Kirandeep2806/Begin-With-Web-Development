from django.shortcuts import render
from .forms import FacultyForm
from .models import FacultyDb

def index(request):
    form = FacultyForm()
    if request.POST:
        form = FacultyForm(request.POST)
        if form.is_valid():
            form.save()
    return render(request, 'index.html', {'form': form})


def find(request):
    if request.GET:
        faculty = FacultyDb.objects.get(subject=request.GET['subject']).name
        return render(request, 'find.html', {'faculty': faculty})
    return render(request, 'find.html')
