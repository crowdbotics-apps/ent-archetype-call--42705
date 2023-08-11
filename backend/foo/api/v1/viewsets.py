from rest_framework import authentication
from foo.models import TestModelInFoo,TestModelInFoo,TestModelInFoo
from .serializers import TestModelInFooSerializer,TestModelInFooSerializer,TestModelInFooSerializer
from rest_framework import viewsets

class TestModelInFooViewSet(viewsets.ModelViewSet):
    serializer_class = TestModelInFooSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = TestModelInFoo.objects.all()