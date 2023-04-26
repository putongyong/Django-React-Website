from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import SimpleRouter
from api import views

router = SimpleRouter()

router.register(r'blogs', views.BlogViewSet,basename="blog")

urlpatterns = [
    path('', include(router.urls)),
]