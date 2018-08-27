from rest_framework.generics import CreateAPIView
from .serializers import JwtSerializer
from rest_framework.response import Response

import jwt

class JwtViews(CreateAPIView):

    serializer_class = JwtSerializer

    def create(self, request):
        
        id = 'hello'
        pw = '123'

        payload = {}
        payload['id'] = id
        payload['pw'] = pw

        jwt_token = jwt.encode(payload, "helloworld")

        return Response({"token": jwt_token})