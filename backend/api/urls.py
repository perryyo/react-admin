from django.contrib import admin
from django.urls import path
from django.conf.urls import url

from .djangoapps.jwt.views import JwtViews

urlpatterns = [
    path('admin/', admin.site.urls),

    url('hello$', JwtViews.as_view(), name='hello'),
]
