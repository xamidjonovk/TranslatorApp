from django.shortcuts import render
from rest_framework.views import APIView

from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
from googletrans import Translator

translator = Translator()


@method_decorator(csrf_exempt, name='dispatch')
def translate(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        tarjima = translator.translate(data["word"], dest='en', src='uz')

        response = {"translated": f'{tarjima.text}'}
    else:
        response = {"translated": "POST request jo'nating!"}
    return JsonResponse(response, safe=True)
