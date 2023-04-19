from django.urls import path
from api import views

urlpatterns = [
    path('blogs/', views.blog_list),
    path('blogs/<int:pk>/', views.blog_detail),
]