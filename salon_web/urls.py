from django.urls import path
from . import views

urlpatterns = [
    path('',views.Home,name='Home'),
    path('About/',views.about_rita,name='about_rita'),
    path('email_sender/',views.email_sender,name='email_sender')
]
