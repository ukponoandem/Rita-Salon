from django.shortcuts import render,redirect

# Create your views here.

def Home(request):
    return render(request,'Home.html')

def about_rita(request):
    return render(request,'About.html')



from .send_mail import send_email
from django.http import HttpResponse

def email_sender(request):
    if request.method == 'POST':
        # Get form data
        Firstname = request.POST.get('Firstname')
        Lastname = request.POST.get('Lastname')
        message = request.POST.get('message')
        Email = request.POST.get('Email')
        
        print(f"Hi {Firstname}, with subject: {Lastname} send  a message {message}")
        
        try:
            # Prepare subject and body for the email
            subject = f"Message from {Firstname} {Lastname}"
            body = message
            to_email = 'ukponoadem@gmail.com'  # This is your email address
            from_email = 'ukponoadem@gmail.com'  # Same as sender's email (your email)
            password = 'wifm rssv uzce cujw'  # Your email password or app password
            
            # Send email
            send_email(subject, body, to_email, from_email, password)
            
            return HttpResponse(f"Email sent successfully to {to_email}, check your inbox!")
        except Exception as e:
            return HttpResponse(f"Failed to send email: {e}")
    
    return render(request, 'Contact.html')













