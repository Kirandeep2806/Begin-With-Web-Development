from django import forms
from .models import FacultyDb

class FacultyForm(forms.ModelForm):
    class Meta:
        model = FacultyDb
        fields = '__all__'
