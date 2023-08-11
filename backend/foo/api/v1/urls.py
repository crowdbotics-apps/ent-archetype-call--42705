
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import TestModelInFooViewSet,TestModelInFooViewSet,TestModelInFooViewSet,TestModelInFooViewSet
router = DefaultRouter()
router.register('testmodelinfoo', TestModelInFooViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
