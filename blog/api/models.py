from django.db import models

# Create your models here.
class Blog(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default='')
    text = models.TextField()

    class Meta:
        ordering = ['created']