from rest_framework import serializers
from foo.models import TestModelInFoo,TestModelInFoo

class TestModelInFooSerializer(serializers.ModelSerializer):

    class Meta:
        model = TestModelInFoo
        fields = "__all__"