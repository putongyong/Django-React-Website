from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    path('blogs/', views.blog_list),
    path('blogs/<int:pk>/', views.blog_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)