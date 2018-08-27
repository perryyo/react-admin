from rest_framework import serializers

class JwtSerializer(serializers.Serializer):

    id = serializers.CharField()
    pw = serializers.CharField()