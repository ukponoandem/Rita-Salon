from django.urls import path
from . import views

urlpatterns = [
    path('',views.Home,name='Home'),
    path('about/',views.about,name='about'),
    path('email_sender/',views.email_sender,name='email_sender')
]
