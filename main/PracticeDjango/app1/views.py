from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def print_hello(request):
    return HttpResponse("Hello, world. You're at the polls index (print).")

def print_hello_2(request):
    return HttpResponse("Hello, world. You're at the polls index (print_2).")