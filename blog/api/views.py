from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Blog
from api.serializers import BlogSerializer

@csrf_exempt
def blog_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = BlogSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
    
@csrf_exempt
def blog_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        blog = Blog.objects.get(pk=pk)
    except Blog.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = BlogSerializer(blog)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = BlogSerializer(blog, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        blog.delete()
        return HttpResponse(status=204)