from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import TestModelInHomeViewSet,Test_02ViewSet,Test_02ViewSet,TestModelInHomeViewSet,Test_02ViewSet,TestModelInHomeViewSet,Test_02ViewSet,TestModelInHomeViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('testmodelinhome', TestModelInHomeViewSet )
router.register('test_02', Test_02ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
