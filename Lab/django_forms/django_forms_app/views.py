from django.shortcuts import render
from .forms import StudentForm, StudentModelForm

# Create your views here.

def homePage(request):
    return render(request, 'index.html', {'form': StudentForm()})

def processForm(request):
    # Process the form data
    if request.POST:
        form = StudentForm(request.POST)
        if form.is_valid():
            print("DATA IS : ", form.cleaned_data)

    # Process the ModelForm data
    if request.POST:
        form = StudentModelForm(request.POST)
        if form.is_valid():
            print("Saving to the table.....")
            form.save(commit=True)
            print("Saved to the table*******")
    return render(request, 'index.html', {'form': StudentForm()})
