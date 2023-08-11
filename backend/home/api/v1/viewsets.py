from rest_framework import viewsets
from home.models import TestModelInHome,Test_02,Test_02,TestModelInHome,Test_02,TestModelInHome
from .serializers import TestModelInHomeSerializer,Test_02Serializer,Test_02Serializer,TestModelInHomeSerializer,Test_02Serializer,TestModelInHomeSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class TestModelInHomeViewSet(viewsets.ModelViewSet):
    serializer_class = TestModelInHomeSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = TestModelInHome.objects.all()

class Test_02ViewSet(viewsets.ModelViewSet):
    serializer_class = Test_02Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Test_02.objects.all()
