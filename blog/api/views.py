from django.shortcuts import render

# Create your views here.
#from django.http import HttpResponse, JsonResponse
#from django.views.decorators.csrf import csrf_exempt
#from rest_framework.parsers import JSONParser
#from rest_framework import status
#from rest_framework.decorators import api_view
#from rest_framework.response import Response
from rest_framework import viewsets
from api.models import Blog
from api.serializers import BlogSerializer

def front(request):
    context = { }
    return render(request, "index.html", context)

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer