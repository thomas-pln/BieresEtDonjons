# urls.py
from django.urls import path
from .views import (
    UserRegistrationView, UserLoginView, UserProfileView, UserChangePasswordView,
    SendPasswordResetEmailView, UserPasswordResetView, TokenRefreshView
)

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('change-password/', UserChangePasswordView.as_view(), name='change-password'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/', UserPasswordResetView.as_view(), name='reset-password'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

