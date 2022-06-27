from django import forms
from .models import Student

class StudentForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    age = forms.IntegerField()

    def clean_name(self):
        name = self.cleaned_data['name']
        if name == 'admin':
            raise forms.ValidationError('This is not a valid name')
        return name

    def clean_age(self):
        age = self.cleaned_data['age']
        if age < 18:
            raise forms.ValidationError('This is not a valid age')
        return age  # return age if age is greater than 18
