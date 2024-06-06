from django.urls import path
from schedule import views
from schedule.views import EventList, RegistrationCreateView

app_name = 'schedule'
urlpatterns = [
    path('registrations/create/<int:event_id>/', RegistrationCreateView.as_view(), name='registration-create'),
    path('', EventList.as_view(), name='event-list'),
    path('id/<int:id>/', views.get_event_by_id, name='event-by-id'),
    path('between_dates/', views.get_events_between_dates, name='events-between-dates'),
]