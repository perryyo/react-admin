from rest_framework.generics import CreateAPIView
from .serializers import JwtSerializer
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist

from api.models import AuthUser

import jwt
import json

class JwtViews(CreateAPIView):

    serializer_class = JwtSerializer

    def create(self, request):
        
        req = json.loads(request.body)['payload']

        email = req['email']
        password = req['password']

        try:
            o1 = AuthUser.objects.get(email=email)
            payload = {}
            payload['email'] = email
            payload['password'] = password
            jwt_token = jwt.encode(payload, "helloworld")
            return Response({"token": jwt_token})
        except ObjectDoesNotExist:
            return Response({"token": 'fail'})
